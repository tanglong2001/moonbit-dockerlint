import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';

const sha = bytes => 'sha256:' + createHash('sha256').update(bytes).digest('hex');
const digestPattern = /^sha256:[a-f0-9]{64}$/;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const indexTypes = ['application/vnd.oci.image.index.v1+json', 'application/vnd.docker.distribution.manifest.list.v2+json'];
const manifestTypes = ['application/vnd.oci.image.manifest.v1+json', 'application/vnd.docker.distribution.manifest.v2+json'];
const configTypes = ['application/vnd.oci.image.config.v1+json', 'application/vnd.docker.container.image.v1+json'];
const requireValue = (ok, message) => { if (!ok) throw Error(message); };
function canonicalFields(value, fields) {
  requireValue(Object.keys(value).every(key => !fields.some(field => key.toLowerCase() === field.toLowerCase() && key !== field)), 'ambiguous JSON field casing');
}

function readBytes(file, budget) {
  requireValue(!fs.lstatSync(file).isSymbolicLink(), 'profile file must not be a symbolic link');
  const fd = fs.openSync(file, 'r');
  try {
    const stat = fs.fstatSync(fd);
    requireValue(stat.isFile() && stat.size <= 1048576, 'profile file type or 1 MiB size limit');
    budget.bytes += stat.size;
    requireValue(budget.bytes <= 33554432, 'profile set exceeds 32 MiB read budget');
    const bytes = Buffer.alloc(stat.size);
    let offset = 0;
    while (offset < bytes.length) {
      const count = fs.readSync(fd, bytes, offset, bytes.length - offset, null);
      requireValue(count > 0, 'profile file changed while reading');
      offset += count;
    }
    requireValue(fs.readSync(fd, Buffer.alloc(1), 0, 1, null) === 0, 'profile file grew while reading');
    return bytes;
  } finally { fs.closeSync(fd); }
}

function parse(bytes) {
  const text = new TextDecoder('utf-8', {fatal: true}).decode(bytes);
  const result = JSON.parse(text);
  requireValue(object(result), 'profile JSON must be an object');
  // JSON.parse is last-wins, while Go decoding a duplicate object into a struct
  // may merge earlier fields. Reject duplicate decoded keys in EVERY object
  // before deciding that a config has no triggers. Syntax was checked above.
  const stack = [];
  for (let at = 0; at < text.length; at++) {
    const token = text[at];
    if (token === '"') {
      const start = at++;
      while (at < text.length && text[at] !== '"') {
        if (text[at] === '\\') at++;
        at++;
      }
      const frame = stack.at(-1);
      if (frame?.keys && frame.keyExpected) {
        const key = JSON.parse(text.slice(start, at + 1));
        requireValue(!frame.keys.has(key), 'duplicate JSON object key');
        frame.keys.add(key);
      }
    } else if (token === '{' || token === '[') {
      requireValue(stack.length < 128, 'profile JSON nesting limit');
      stack.push(token === '{' ? {keys: new Set(), keyExpected: true} : {});
    } else if (token === '}' || token === ']') {
      stack.pop();
    } else if (token === ':' && stack.at(-1)?.keys) {
      stack.at(-1).keyExpected = false;
    } else if (token === ',' && stack.at(-1)?.keys) {
      stack.at(-1).keyExpected = true;
    }
  }
  return result;
}

function fileBytes(root, name, budget) {
  requireValue(typeof name === 'string' && /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,200}\.json$/.test(name), 'profile blob must use a simple JSON filename');
  const file = path.join(root, name);
  requireValue(path.dirname(fs.realpathSync(file)) === root, 'profile blob resolves outside its directory');
  return readBytes(file, budget);
}

function verifyDescriptor(descriptor, bytes, types) {
  requireValue(object(descriptor) && types.includes(descriptor.mediaType), 'unsupported descriptor media type');
  canonicalFields(descriptor, ['mediaType', 'size', 'digest', 'platform']);
  requireValue(Number.isSafeInteger(descriptor.size) && descriptor.size === bytes.length, 'descriptor byte size mismatch');
  requireValue(digestPattern.test(descriptor.digest) && descriptor.digest === sha(bytes), 'descriptor digest mismatch');
}

function platformMatches(value, platform) {
  if (!object(value)) return false;
  canonicalFields(value, ['os', 'architecture', 'variant', 'os.features', 'features']);
  const [os, architecture, variant = ''] = platform.split('/');
  return value.os === os && value.architecture === architecture && (value.variant ?? '') === variant &&
    (!value['os.features'] || (Array.isArray(value['os.features']) && value['os.features'].length === 0)) &&
    (!value.features || (Array.isArray(value.features) && value.features.length === 0));
}

/** Read offline, digest-pinned OCI/Docker v2 index -> manifest -> config chains.
 * Summaries in profiles.json (including onbuild/env) are never trusted. Rejected
 * records yield diagnostics and no metadata, preserving core conservatism.
 * This verifies integrity relative to the Dockerfile digest, not signatures,
 * registry ownership, image safety, image layers, or mutable tag freshness.
 */
export function loadImageProfiles(file, platform) {
  const result = {format: 'moonbit-image-profile-verification/1', platform, set_sha256: null, metadata: [], records: []};
  if (!file) return result;
  const budget = {bytes: 0};
  let set, root;
  try {
    requireValue(typeof file === 'string' && typeof platform === 'string' && /^linux\/[a-z0-9]+(?:\/[a-z0-9]+)?$/.test(platform), 'an explicit Linux platform is required for image profiles');
    const absolute = path.resolve(file);
    root = fs.realpathSync(path.dirname(absolute));
    const bytes = readBytes(absolute, budget);
    result.set_sha256 = sha(bytes);
    set = parse(bytes);
    requireValue(set.format === 'dockerlint-image-profile/1' && Array.isArray(set.images) && set.images.length <= 128, 'unsupported profile set format or image count');
  } catch (error) {
    result.records.push({reference: '', status: 'rejected', reason: error.message});
    return result;
  }
  const counts = new Map();
  for (const image of set.images) {
    const key = object(image) ? JSON.stringify([image.reference, image.platform]) : '';
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  for (const image of set.images) {
    const record = {reference: typeof image?.reference === 'string' ? image.reference : '', status: 'rejected', reason: ''};
    try {
      requireValue(object(image), 'image record must be an object');
      requireValue(counts.get(JSON.stringify([image.reference, image.platform])) === 1, 'duplicate reference/platform profiles');
      requireValue(image.platform === platform, 'profile platform does not match requested platform');
      requireValue(typeof image.reference === 'string' && /^[^\s@$]+@sha256:[a-f0-9]{64}$/.test(image.reference), 'only literal digest-pinned image references are supported');
      const pinned = image.reference.slice(image.reference.lastIndexOf('@') + 1);
      const indexBytes = fileBytes(root, image.indexFile, budget);
      requireValue(sha(indexBytes) === pinned, 'pinned index digest mismatch');
      const index = parse(indexBytes);
      canonicalFields(index, ['schemaVersion', 'mediaType', 'manifests']);
      requireValue(index.schemaVersion === 2 && indexTypes.includes(index.mediaType) && Array.isArray(index.manifests), 'unsupported index schema');
      const candidates = index.manifests.filter(item => platformMatches(item?.platform, platform));
      requireValue(candidates.length === 1, 'platform selection is absent or ambiguous');
      const manifestBytes = fileBytes(root, image.platformManifestFile, budget);
      verifyDescriptor(candidates[0], manifestBytes, manifestTypes);
      const manifest = parse(manifestBytes);
      canonicalFields(manifest, ['schemaVersion', 'mediaType', 'config', 'artifactType', 'subject']);
      requireValue(manifest.schemaVersion === 2 && manifest.mediaType === candidates[0].mediaType && !manifest.artifactType && !manifest.subject, 'unsupported image manifest');
      const configBytes = fileBytes(root, image.configFile, budget);
      verifyDescriptor(manifest.config, configBytes, configTypes);
      const config = parse(configBytes);
      canonicalFields(config, ['config']);
      requireValue(platformMatches(config, platform), 'config platform mismatch');
      requireValue(object(config.config), 'missing or invalid image runtime config');
      const triggers = config.config.OnBuild ?? [];
      requireValue(Array.isArray(triggers) && triggers.length <= 256 && triggers.every(value => typeof value === 'string' && value.length <= 16384), 'invalid OnBuild metadata');
      // Never accept an alternative case spelling as an absent field. Different
      // runtimes may decode JSON field names case-insensitively.
      requireValue(Object.keys(config.config).every(key => key.toLowerCase() !== 'onbuild' || key === 'OnBuild'), 'ambiguous OnBuild field casing');
      const metadata = {reference: image.reference, platform, index_digest: pinned,
        manifest_digest: candidates[0].digest, config_digest: manifest.config.digest, onbuild: triggers};
      result.metadata.push(metadata);
      Object.assign(record, {status: 'verified', reason: triggers.length ? 'nonempty OnBuild remains conservative' : 'empty OnBuild verified from raw config',
        index_digest: pinned, manifest_digest: metadata.manifest_digest, config_digest: metadata.config_digest, onbuild_count: triggers.length});
    } catch (error) { record.reason = error.message; }
    result.records.push(record);
  }
  return result;
}
