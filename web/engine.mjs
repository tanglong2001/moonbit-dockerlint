function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURPB3MapGssERPB3MapGssEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB3MapGsbEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGiEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGiEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGiEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGiEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB3MapGssE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGRP212tanglong200110dockerlint10DiagnosticE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 7;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 6;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 5;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 4;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 3;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 2;
function _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid.prototype.$tag = 1;
function _M0DTPC15error5Error51tanglong2001_2fdockerlint_2eParseError_2eStageCycle(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error51tanglong2001_2fdockerlint_2eParseError_2eStageCycle.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGOcE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP212tanglong200110dockerlint9Expansion(param0, param1) {
  this.value = param0;
  this.unresolved = param1;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB13StringBuilderE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212tanglong200110dockerlint9Arguments(param0, param1, param2) {
  this.flags = param0;
  this.values = param1;
  this.json_form = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP212tanglong200110dockerlint7HereDoc(param0, param1, param2, param3) {
  this.name = param0;
  this.content = param1;
  this.strip_tabs = param2;
  this.expand = param3;
}
function _M0TP212tanglong200110dockerlint11Instruction(param0, param1, param2, param3, param4) {
  this.line = param0;
  this.end_line = param1;
  this.name = param2;
  this.arguments = param3;
  this.heredocs = param4;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsURPB3MapGssERPB3MapGssEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGRPB3MapGssEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGOsE(param0) {
  this.val = param0;
}
function _M0TP212tanglong200110dockerlint13VariableScope(param0, param1, param2, param3, param4, param5, param6) {
  this.line = param0;
  this.stage = param1;
  this.instruction = param2;
  this.expanded = param3;
  this.arguments = param4;
  this.environment = param5;
  this.unresolved = param6;
}
function _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212tanglong200110dockerlint16BuildUncertainty(param0, param1) {
  this.line = param0;
  this.reason = param1;
}
function _M0TP212tanglong200110dockerlint9BuildEdge(param0, param1, param2, param3) {
  this.consumer = param0;
  this.dependency = param1;
  this.line = param2;
  this.kind = param3;
}
function _M0DTPC16result6ResultGURPB5ArrayGRP212tanglong200110dockerlint9BuildEdgeERPB5ArrayGRP212tanglong200110dockerlint16BuildUncertaintyEERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPB5ArrayGRP212tanglong200110dockerlint9BuildEdgeERPB5ArrayGRP212tanglong200110dockerlint16BuildUncertaintyEERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPB5ArrayGRP212tanglong200110dockerlint9BuildEdgeERPB5ArrayGRP212tanglong200110dockerlint16BuildUncertaintyEERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPB5ArrayGRP212tanglong200110dockerlint9BuildEdgeERPB5ArrayGRP212tanglong200110dockerlint16BuildUncertaintyEERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212tanglong200110dockerlint5Stage(param0, param1, param2, param3, param4) {
  this.index = param0;
  this.line = param1;
  this.base = param2;
  this.stage_name = param3;
  this.dependencies = param4;
}
function _M0TPB8MutLocalGRPB3MapGsbEE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUsRPB3MapGsbEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP212tanglong200110dockerlint10Diagnostic(param0, param1, param2) {
  this.line = param0;
  this.code = param1;
  this.message = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TP212tanglong200110dockerlint10ShellToken(param0, param1, param2, param3, param4, param5) {
  this.kind = param0;
  this.value = param1;
  this.raw = param2;
  this.line = param3;
  this.quoted = param4;
  this.dynamic = param5;
}
function _M0TPB8MutLocalGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGORP212tanglong200110dockerlint11InstructionE(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB9ArrayViewGUiRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10DiagnosticERP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10DiagnosticERP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10DiagnosticERP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10DiagnosticERP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP212tanglong200110dockerlint12TargetImpact(param0, param1, param2) {
  this.target = param0;
  this.affected = param1;
  this.path = param2;
}
function _M0TP212tanglong200110dockerlint11BuildImpact(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.stages = param0;
  this.edges = param1;
  this.selected = param2;
  this.required = param3;
  this.changed_stages = param4;
  this.targets = param5;
  this.conservative = param6;
  this.uncertainties = param7;
}
function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
  this.val = param0;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPC16string10StringView4trimN7_2abindS6760 = "\t\n\r ";
const _M0MPC16string10StringView11trim__startN7_2abindS6796 = "\t\n\r ";
const _M0MPC16string6String11trim__startN7_2abindS6811 = "\t\n\r ";
const _M0MPC16string6String9trim__endN7_2abindS6844 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter4nextN6constrS9855GRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE = 0;
const _M0MPB4Iter4nextN6constrS9856GRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE = 0;
const _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0MPB4Iter3newN6constrS9863GRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1164 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1891 = 0n;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPC15debug6renderN6constrS1705 = 16;
function _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0IPC16string6StringPB6ToJson8to__json(self) {
  return new _M0DTPB4Json6String(self);
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOcE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGcE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result.$tag === 1) {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE;
    }
  } else {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE;
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPB4Iter3newGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE;
  }
  return new _M0TPB4IterGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(f, size_hint$2);
}
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _bind = _M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i));
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  const _bind$4 = _bind.length;
  if (_bind$2 < 0 || (_bind$2 > _bind$3 || _bind$3 > _bind$4)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind, _bind$2, _bind$3);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("Invalid index for View");
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPB13StringBuilder9is__empty(self) {
  return self.val === "";
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp = _decoded_next_string_index;
      _tmp$2 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView4trimN7_2abindS6760, 0, _M0MPC16string10StringView4trimN7_2abindS6760.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string10StringView19trim__start_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView24trim__start__with__chars(self, chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, self.end);
  }
}
function _M0MPC16string10StringView11trim__start(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView11trim__startN7_2abindS6796, 0, _M0MPC16string10StringView11trim__startN7_2abindS6796.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView19trim__start_2einner(self, chars);
}
function _M0MPC16string6String19trim__start_2einner(self, chars) {
  return _M0MPC16string10StringView19trim__start_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String11trim__start(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String11trim__startN7_2abindS6811, 0, _M0MPC16string6String11trim__startN7_2abindS6811.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String19trim__start_2einner(self, chars);
}
function _M0MPC16string10StringView17trim__end_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(self, chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const end = _M0FPB24string__trim__end__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, self.start, end);
  }
}
function _M0MPC16string6String17trim__end_2einner(self, chars) {
  return _M0MPC16string10StringView17trim__end_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String9trim__end(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String9trim__endN7_2abindS6844, 0, _M0MPC16string6String9trim__endN7_2abindS6844.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String17trim__end_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    const _Some = _bind;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGRPC16string10StringViewE(_n);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC14char4Char20is__ascii__lowercase(self) {
  return self >= 97 && self <= 122;
}
function _M0MPC16string6String9to__upper(self) {
  const _bind = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__lowercase(c));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$2 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$3 = _bind$2.str;
    const _bind$4 = _bind$2.start;
    const _bind$5 = _bind$2.end;
    let _tmp = _bind$4;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$5) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$6 = _bind$3.charCodeAt(_string_index);
          if (_bind$6 >= 55296 && _bind$6 <= 56319 && (_string_index + 1 | 0) < _bind$5) {
            const _bind$7 = _bind$3.charCodeAt(_string_index + 1 | 0);
            if (_bind$7 >= 56320 && _bind$7 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$6 - 55296 | 0, 1024) | 0) + _bind$7 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$6);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__lowercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char - 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array9ArrayView4iterGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return new _M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4Some(elem);
    } else {
      return _M0DTPC16option6OptionGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE4None__;
    }
  }, len);
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRPC16string10StringViewE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGRPB5ArrayGsEE(self, default_) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  } else {
    return default_;
  }
}
function _M0MPC16option6Option10unwrap__orGbE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGiE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGsE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self.buf, len, len, self.start, 0);
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsbE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRPB5ArrayGiEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGiEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGiRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGsEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGssE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGssE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGssE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGiEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGssE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGssE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRPB5ArrayGiEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGssE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGssE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGiEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRPB5ArrayGiEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRPB5ArrayGsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGiEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGiEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGiEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGiEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGiEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGiEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGiEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURPB3MapGssERPB3MapGssEEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsURPB3MapGssERPB3MapGssEEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsURPB3MapGssERPB3MapGssEEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGsbEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGsbEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGssE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGsbEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGssE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRPB5ArrayGiEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGiEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGsEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsURPB3MapGssERPB3MapGssEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURPB3MapGssERPB3MapGssEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB3MapGsbEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGsbEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRPB5ArrayGiEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRPB5ArrayGiEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGiEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRPB5ArrayGsEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsURPB3MapGssERPB3MapGssEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURPB3MapGssERPB3MapGssEEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB3MapGsbEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGsbEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGiEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGsEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsURPB3MapGssERPB3MapGssEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return -1;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGsbEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
  return self.size === 0;
}
function _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsiEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map5clearGsiE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPB5EntryGsiEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPB4JsonE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0MPB3Map4copyGssE(self) {
  const _bind = self.capacity;
  const _bind$2 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$3 = self.size;
  const _bind$4 = self.capacity_mask;
  const _bind$5 = self.grow_at;
  const _bind$6 = undefined;
  const _bind$7 = self.tail;
  const other = new _M0TPB3MapGssE(_bind$2, _bind$3, _bind, _bind$4, _bind$5, _bind$6, _bind$7);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  const _bind$8 = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const entry = _tmp$3;
      const idx = _tmp$4;
      const next = _tmp$5;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_entry = new _M0TPB5EntryGssE(_prev, next, _psl, _hash, _key, _value);
      const _tmp$6 = other.entries;
      if (idx >>> 0 < _tmp$6.length) {
        _tmp$6[idx] = new_entry;
      } else {
        $oob();
      }
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        _tmp$3 = _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_prev >>> 0 < _tmp$7.length ? _tmp$7[_prev] : $oob());
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0MPB3Map4copyGsbE(self) {
  const _bind = self.capacity;
  const _bind$2 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$3 = self.size;
  const _bind$4 = self.capacity_mask;
  const _bind$5 = self.grow_at;
  const _bind$6 = undefined;
  const _bind$7 = self.tail;
  const other = new _M0TPB3MapGsbE(_bind$2, _bind$3, _bind, _bind$4, _bind$5, _bind$6, _bind$7);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  const _bind$8 = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const entry = _tmp$3;
      const idx = _tmp$4;
      const next = _tmp$5;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_entry = new _M0TPB5EntryGsbE(_prev, next, _psl, _hash, _key, _value);
      const _tmp$6 = other.entries;
      if (idx >>> 0 < _tmp$6.length) {
        _tmp$6[idx] = new_entry;
      } else {
        $oob();
      }
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        _tmp$3 = _M0MPC16option6Option6unwrapGRPC16string10StringViewE(_prev >>> 0 < _tmp$7.length ? _tmp$7[_prev] : $oob());
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  return self ? _M0MPC14json4Json7boolean(true) : _M0MPC14json4Json7boolean(false);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10DiagnosticsE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10DiagnosticRPB3MapGsRPB4JsonEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint5StageRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint5StageRP212tanglong200110dockerlint12TargetImpactE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPB4JsonsEHRP212tanglong200110dockerlint10ParseError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRPB3MapGsRPB4JsonERPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint13VariableScopeRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint9BuildEdgeRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGiRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint12TargetImpactRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint16BuildUncertaintyRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRP212tanglong200110dockerlint10ShellTokenE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10ShellTokensE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint5StageE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212tanglong200110dockerlint5StageRPB4JsonE(self, (x) => _M0IP212tanglong200110dockerlint5StagePB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB3MapGsRPB4JsonEE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRPB3MapGsRPB4JsonERPB4JsonE(self, (x) => _M0IPB3MapPB6ToJson8to__jsonGsRPB4JsonE(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint13VariableScopeE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212tanglong200110dockerlint13VariableScopeRPB4JsonE(self, (x) => _M0IP212tanglong200110dockerlint13VariableScopePB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint9BuildEdgeE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212tanglong200110dockerlint9BuildEdgeRPB4JsonE(self, (x) => _M0IP212tanglong200110dockerlint9BuildEdgePB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGiRPB4JsonE(self, (x) => _M0IPC13int3IntPB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint12TargetImpactE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212tanglong200110dockerlint12TargetImpactRPB4JsonE(self, (x) => _M0IP212tanglong200110dockerlint12TargetImpactPB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint16BuildUncertaintyE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRP212tanglong200110dockerlint16BuildUncertaintyRPB4JsonE(self, (x) => _M0IP212tanglong200110dockerlint16BuildUncertaintyPB6ToJson8to__json(x)));
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGsRPB4JsonE(self, (x) => _M0IPC16string6StringPB6ToJson8to__json(x)));
}
function _M0IPB3MapPB6ToJson8to__jsonGsRPB4JsonE(self) {
  const _bind = [];
  const object = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), self.capacity);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(self);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRPB4JsonE(object, _M0IPC16string6StringPB4Show10to__string(_k), _M0IPC14json4JsonPB6ToJson8to__json(_v));
      continue;
    }
  }
  return new _M0DTPB4Json6Object(object);
}
function _M0IPB3MapPB6ToJson8to__jsonGssE(self) {
  const _bind = [];
  const object = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), self.capacity);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(self);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRPB4JsonE(object, _M0IPC16string6StringPB4Show10to__string(_k), _M0IPC16string6StringPB6ToJson8to__json(_v));
      continue;
    }
  }
  return new _M0DTPB4Json6Object(object);
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter3anyGsE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3anyGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _x = _Some._0;
      if (f(_x)) {
        return true;
      }
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPB4Iter3allGcE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return true;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter3allGRPC16string10StringViewE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind === undefined) {
      return true;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
      } else {
        return false;
      }
      continue;
    }
  }
}
function _M0MPB4Iter5countGRPC16string10StringViewE(self) {
  let _tmp = 0;
  while (true) {
    const count = _tmp;
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind === undefined) {
      return count;
    } else {
      _tmp = count + 1 | 0;
      continue;
    }
  }
}
function _M0MPB4Iter6filterGRPC16string10StringViewE(self, f) {
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    while (true) {
      const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
      if (_bind === undefined) {
        return undefined;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPB4JsonE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGRPC16string10StringViewE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds");
  }
}
function _M0MPC15array5Array12view_2einnerGcE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGcE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds");
  }
}
function _M0MPC15array5Array12view_2einnerGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds");
  }
}
function _M0MPC15array9ArrayView3mapGRPC16string10StringViewsE(self, f) {
  const arr = new Array(self.end - self.start | 0);
  const _bind = self.end - self.start | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const x = self.buf[self.start + i | 0];
      arr[i] = f(x);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array9ArrayView3mapGRP212tanglong200110dockerlint10ShellTokensE(self, f) {
  const arr = new Array(self.end - self.start | 0);
  const _bind = self.end - self.start | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const x = self.buf[self.start + i | 0];
      arr[i] = f(x);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGsE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGiE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (_M0MPC15array5Array9is__emptyGsE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGsE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRPC16string10StringViewE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGRP212tanglong200110dockerlint10DiagnosticE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGRP212tanglong200110dockerlint10DiagnosticE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGsE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP212tanglong200110dockerlint10DiagnosticE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP212tanglong200110dockerlint10DiagnosticE(_env, a, b) {
  const arr = _env._2;
  const swaps = _env._1;
  const cmp = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP212tanglong200110dockerlint10DiagnosticE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP212tanglong200110dockerlint10DiagnosticE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP212tanglong200110dockerlint10DiagnosticE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP212tanglong200110dockerlint10DiagnosticE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP212tanglong200110dockerlint10DiagnosticE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: swaps, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP212tanglong200110dockerlint10DiagnosticE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP212tanglong200110dockerlint10DiagnosticE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP212tanglong200110dockerlint10DiagnosticE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP212tanglong200110dockerlint10DiagnosticE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP212tanglong200110dockerlint10DiagnosticE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP212tanglong200110dockerlint10DiagnosticE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGRP212tanglong200110dockerlint10DiagnosticE(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP212tanglong200110dockerlint10DiagnosticE(_M0MPC15array12MutArrayView5sliceGRP212tanglong200110dockerlint10DiagnosticE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP212tanglong200110dockerlint10DiagnosticE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP212tanglong200110dockerlint10DiagnosticE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr, cmp, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr$2, cmp);
      return undefined;
    }
    const _bind = _M0FPB24fixed__choose__pivot__byGRP212tanglong200110dockerlint10DiagnosticE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP212tanglong200110dockerlint10DiagnosticE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGRP212tanglong200110dockerlint10DiagnosticE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _tmp$6 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$6 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGRP212tanglong200110dockerlint10DiagnosticE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP212tanglong200110dockerlint10DiagnosticE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP212tanglong200110dockerlint10DiagnosticE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGRP212tanglong200110dockerlint10DiagnosticE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGRP212tanglong200110dockerlint10DiagnosticE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP212tanglong200110dockerlint10DiagnosticE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP212tanglong200110dockerlint10DiagnosticE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array8sort__byGRP212tanglong200110dockerlint10DiagnosticE(self, cmp) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView8sort__byGRP212tanglong200110dockerlint10DiagnosticE(new _M0TPB12MutArrayViewGRP212tanglong200110dockerlint10DiagnosticE(self, 0, _bind), cmp);
}
function _M0MPC15array5Array4makeGiE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array6filterGRP212tanglong200110dockerlint10DiagnosticE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGiE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4lastGRPC16string10StringViewE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const _last = self[self.length - 1 | 0];
    return _last;
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(value) {
  return _M0IP212tanglong200110dockerlint10ParseErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$2 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$2;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$2 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$2;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGsE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGRPC16string10StringViewE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[1 + _ | 0];
                const _bind$2 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$2, 0, _bind$2.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGsE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGsE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGsE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind = _val.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _first = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if ((_bind.end - _bind.start | 0) >= 1) {
      const _x = _bind.str.charCodeAt(_bind.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if (_M0MPC16string10StringView9is__empty(s$2)) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$2 = s$3;
  if ((_bind$2.end - _bind$2.start | 0) >= 1) {
    const _x = _bind$2.str.charCodeAt(_bind$2.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
      s$3 = _x$2;
      const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$3._0;
      const _new_mantissa = _bind$3._1;
      const _consumed_digit = _bind$3._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$3 = s$3;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$4;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number_val = _bind$4._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        const _tmp$4 = n_digits;
        if (2 === 0) {
          $panic();
        }
        n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$5 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$5;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$6._1;
          const _consumed_digit$2 = _bind$6._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      _state_300 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312, _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind = _accept_state_298;
  switch (_bind) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1164;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          _state_218 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230, _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0);
          continue;
        } else {
          break;
        }
      }
      const _bind = _accept_state_216;
      switch (_bind) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind = rest_start + 1 | 0;
                          _tmp$2 = _bind;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20eisel__mul__log2__10(exponent) {
  return (Math.imul(exponent, 108853) | 0) >> 15;
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_lo = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index + 1 | 0);
  const pow_exp2 = 1 + _M0FPC28internal7strconv20eisel__mul__log2__10(exponent$2) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt((top_bit + 9 | 0) & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob(), 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      _tmp = BigInt.asUintN(64, _tmp$3 + _M0MPC14byte4Byte9to__int64(i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _M0MPC14byte4Byte9to__int64(_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob());
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _bind = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!_M0MPC16string10StringView9is__empty(str)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind = _M0FPC28internal7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind = _M0MPC16string10StringView11code__units(input);
  const _bind$2 = _bind.end - _bind.start | 0;
  if (offset < 0 || offset > _bind$2) {
    $panic();
  }
  const _bind$3 = new _M0TPB9ArrayViewGkE(_bind.buf, _bind.start, offset + _bind.start | 0);
  const _bind$4 = _bind$3.end - _bind$3.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$4) {
      const code_unit = _bind$3.buf[_bind$3.start + _ | 0];
      if (_M0IPC16uint166UInt16PB2Eq5equal(code_unit, 10)) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind = ctx.input;
      const _bind$2 = _bind.str.charCodeAt(_bind.start + offset | 0);
      switch (_bind$2) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1891;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC14json12pow10__table, exponent & 31);
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _bind = _M0FPC14json12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC14json17int__pow10__table, Number(BigInt.asIntN(32, shift)) | 0));
    if (_bind === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind.str.charCodeAt(_bind.start + start | 0), 45);
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$2 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$3 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$3, _bind$2);
    }
    const _bind$2 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$2.str.charCodeAt(_bind$2.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$3 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        const _bind$4 = s;
        return new _M0TPC14json11LexedNumber(_bind$4, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double13neg__infinity);
      } else {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind.str.charCodeAt(_bind.start + start | 0), 45);
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$2 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$3 = ctx.input;
          const _bind$4 = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
          if (_bind$4 >= 48 && _bind$4 <= 57) {
            const digit = _bind$4 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$4 === 46) {
              has_decimal = true;
            } else {
              if (_bind$4 === 101) {
                break _L$2;
              } else {
                if (_bind$4 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$3 = ctx.input;
          const next = _bind$3.str.charCodeAt(_bind$3.start + (i + 1 | 0) | 0);
          if (_M0IPC16uint166UInt16PB2Eq5equal(next, 45)) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind = undefined;
      return new _M0TPC14json11LexedNumber(_bind, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!_M0MPC16double6Double7is__nan(fast)) {
    const _bind = undefined;
    return new _M0TPC14json11LexedNumber(_bind, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!_M0MPC16double6Double7is__nan(fast$2)) {
      const _bind = undefined;
      return new _M0TPC14json11LexedNumber(_bind, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      d = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, d);
  }
  if (scan.negative) {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double13neg__infinity);
  } else {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$2 = ctx.input;
        const c2 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 46) {
          const _bind$2 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -_M0MPC14char4Char10utf16__len(_x) | 0);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                d = _ok._0;
              } else {
                return _bind$2;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$2 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$2;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$3 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  c = _ok._0;
                } else {
                  return _bind$3;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$4 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$4;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$5 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _ok._0;
                      } else {
                        return _bind$5;
                      }
                    }
                  }
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$5;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$6 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _ok._0;
                      } else {
                        return _bind$6;
                      }
                    }
                  }
                  const _bind$6 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    c2 = _ok._0;
                  } else {
                    return _bind$6;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$4 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      _ok._0;
                    } else {
                      return _bind$4;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -_M0MPC14char4Char10utf16__len(_x$2) | 0);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const _bind$2 = ctx.input;
      const c = _bind$2.str.charCodeAt(_bind$2.start + i | 0);
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
          const _bind$3 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$2 = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$2 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$4;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind$4 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _n = _bind$4.value;
                        const _repr = _bind$4.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$2 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$3;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _bind$3 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    const _n = _bind$3.value;
                    const _repr = _bind$3.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$2 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$3;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _bind$3 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      const _n = _bind$3.value;
                      const _repr = _bind$3.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          s = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE("unreachable"));
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$2 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(vec, _tmp$4);
      const _bind$3 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          _tmp = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _M0FPC15abort5abortGuE("unreachable");
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$3 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$4 = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$5 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        switch (_bind$6.$tag) {
          case 9: {
            const _bind$7 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$3 = _ok._0;
            } else {
              return _bind$7;
            }
            continue _L;
          }
          case 6: {
            _tmp = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _M0FPC15abort5abortGuE("unreachable");
          }
        }
        break;
      }
      default: {
        _M0FPC15abort5abortGuE("unreachable");
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      if (_M0IPC16uint166UInt16PB2Eq5equal(code, 34) || (_M0IPC16uint166UInt16PB2Eq5equal(code, 92) || (code < 32 || escape_slash && _M0IPC16uint166UInt16PB2Eq5equal(code, 47)))) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC16uint166UInt1616unsafe__to__char(code));
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGRPC16string10StringViewE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRPC16string10StringViewE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGsRPB4JsonE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGsE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IPC14json4JsonPB6ToJson8to__json(self) {
  return self;
}
function _M0IP212tanglong200110dockerlint10ParseErrorPC15debug5Debug8to__repr(_x_651) {
  let _arg_653;
  _L: {
    let _arg_652;
    _L$2: {
      if (_x_651.$tag === 1) {
        const _Invalid = _x_651;
        const _$42$arg_652 = _Invalid._0;
        _arg_652 = _$42$arg_652;
        break _L$2;
      } else {
        const _StageCycle = _x_651;
        const _$42$arg_653 = _StageCycle._0;
        _arg_653 = _$42$arg_653;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_652) }]);
  }
  return _M0MPC15debug4Repr4ctor("StageCycle", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_653) }]);
}
function _M0IP212tanglong200110dockerlint9BuildEdgePB6ToJson8to__json(_x_642) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "consumer", _M0IPC13int3IntPB6ToJson8to__json(_x_642.consumer));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "dependency", _M0IPC13int3IntPB6ToJson8to__json(_x_642.dependency));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "line", _M0IPC13int3IntPB6ToJson8to__json(_x_642.line));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "kind", _M0IPC16string6StringPB6ToJson8to__json(_x_642.kind));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212tanglong200110dockerlint12TargetImpactPB6ToJson8to__json(_x_633) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "target", _M0IPC13int3IntPB6ToJson8to__json(_x_633.target));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "affected", _M0IPC14bool4BoolPB6ToJson8to__json(_x_633.affected));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "path", _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(_x_633.path));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212tanglong200110dockerlint16BuildUncertaintyPB6ToJson8to__json(_x_624) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "line", _M0IPC13int3IntPB6ToJson8to__json(_x_624.line));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "reason", _M0IPC16string6StringPB6ToJson8to__json(_x_624.reason));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212tanglong200110dockerlint11BuildImpactPB6ToJson8to__json(_x_606) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "stages", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint5StageE(_x_606.stages));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "edges", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint9BuildEdgeE(_x_606.edges));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "selected", _M0IPC13int3IntPB6ToJson8to__json(_x_606.selected));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "required", _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(_x_606.required));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "changed_stages", _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(_x_606.changed_stages));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "targets", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint12TargetImpactE(_x_606.targets));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "conservative", _M0IPC14bool4BoolPB6ToJson8to__json(_x_606.conservative));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "uncertainties", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint16BuildUncertaintyE(_x_606.uncertainties));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212tanglong200110dockerlint5StagePB6ToJson8to__json(_x_596) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "index", _M0IPC13int3IntPB6ToJson8to__json(_x_596.index));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "line", _M0IPC13int3IntPB6ToJson8to__json(_x_596.line));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "base", _M0IPC16string6StringPB6ToJson8to__json(_x_596.base));
  let $36$inner;
  _L: {
    _L$2: {
      const _bind$2 = _x_596.stage_name;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _$36$inner = _Some;
        $36$inner = _$36$inner;
        break _L$2;
      }
      break _L;
    }
    _M0MPB3Map3setGsRPB4JsonE($36$map, "stage_name", _M0IPC16string6StringPB6ToJson8to__json($36$inner));
  }
  _M0MPB3Map3setGsRPB4JsonE($36$map, "dependencies", _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(_x_596.dependencies));
  return _M0MPC14json4Json6object($36$map);
}
function _M0IP212tanglong200110dockerlint13VariableScopePB6ToJson8to__json(_x_587) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "line", _M0IPC13int3IntPB6ToJson8to__json(_x_587.line));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "stage", _M0IPC13int3IntPB6ToJson8to__json(_x_587.stage));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "instruction", _M0IPC16string6StringPB6ToJson8to__json(_x_587.instruction));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "expanded", _M0IPC16string6StringPB6ToJson8to__json(_x_587.expanded));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "arguments", _M0IPB3MapPB6ToJson8to__jsonGssE(_x_587.arguments));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "environment", _M0IPB3MapPB6ToJson8to__jsonGssE(_x_587.environment));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "unresolved", _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(_x_587.unresolved));
  return _M0MPC14json4Json6object($36$map);
}
function _M0FP212tanglong200110dockerlint14variable__char(c, first) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c === 95 || !first && (c >= 48 && c <= 57)));
}
function _M0FP212tanglong200110dockerlint14valid__unicode(text) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < text.length) {
      const _tmp = i.val;
      const u = _tmp >>> 0 < text.length ? text.charCodeAt(_tmp) : $oob();
      if (u >= 55296 && u <= 56319) {
        if ((i.val + 1 | 0) >= text.length) {
          return false;
        }
        const _tmp$2 = i.val + 1 | 0;
        const next = _tmp$2 >>> 0 < text.length ? text.charCodeAt(_tmp$2) : $oob();
        if (next < 56320 || next > 57343) {
          return false;
        }
        i.val = i.val + 2 | 0;
      } else {
        if (u >= 56320 && u <= 57343) {
          return false;
        }
        i.val = i.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP212tanglong200110dockerlint17expand__variables(source, values) {
  if (!_M0FP212tanglong200110dockerlint14valid__unicode(source) || _M0MPB4Iter3anyGsE(_M0MPB3Map4iterGsRPB4JsonE(values), (pair) => !_M0FP212tanglong200110dockerlint14valid__unicode(pair._0) || !_M0FP212tanglong200110dockerlint14valid__unicode(pair._1))) {
    return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid variable Unicode"));
  }
  const expand = (source$2, depth) => {
    if (depth > 32 || source$2.length > 1000000) {
      return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("variable expansion limit"));
    }
    const chars = _M0MPC16string6String9to__array(source$2);
    const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    const units = new _M0TPB8MutLocalGiE(0);
    const put_string = (value) => {
      units.val = units.val + value.length | 0;
      if (units.val > 1000000) {
        return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("expanded value limit"));
      }
      return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0IPB13StringBuilderPB6Logger13write__string(out, value));
    };
    const put_char = (value) => {
      units.val = units.val + (value > 65535 ? 2 : 1) | 0;
      if (units.val > 1000000) {
        return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("expanded value limit"));
      }
      return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0IPB13StringBuilderPB6Logger11write__char(out, value));
    };
    const unresolved = [];
    const quote = new _M0TPB8MutLocalGOcE(-1);
    const i = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (i.val < chars.length) {
        const c = _M0MPC15array5Array2atGcE(chars, i.val);
        if (c === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
          i.val = i.val + 1 | 0;
          if (i.val === chars.length) {
            return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("trailing variable escape"));
          }
          let _tmp;
          if (_M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 34)) {
            const _bind = _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(chars, i.val));
            _tmp = !_M0MPC16string6String8contains("$`\"\\", new _M0TPC16string10StringView(_bind, 0, _bind.length));
          } else {
            _tmp = false;
          }
          if (_tmp) {
            const _bind = put_char(92);
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
          }
          if (_M0MPC15array5Array2atGcE(chars, i.val) !== 10) {
            const _bind = put_char(_M0MPC15array5Array2atGcE(chars, i.val));
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
          }
          i.val = i.val + 1 | 0;
          continue;
        }
        if ((c === 39 || c === 34) && (_M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1) || _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, c))) {
          quote.val = _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1) ? c : -1;
          i.val = i.val + 1 | 0;
          continue;
        }
        if (c !== 36 || _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 39)) {
          const _bind = put_char(c);
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            return _bind;
          }
          i.val = i.val + 1 | 0;
          continue;
        }
        const start = i.val;
        i.val = i.val + 1 | 0;
        const braced = i.val < chars.length && _M0MPC15array5Array2atGcE(chars, i.val) === 123;
        if (braced) {
          i.val = i.val + 1 | 0;
        }
        const name_start = i.val;
        while (true) {
          if (i.val < chars.length && _M0FP212tanglong200110dockerlint14variable__char(_M0MPC15array5Array2atGcE(chars, i.val), i.val === name_start)) {
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (name_start === i.val) {
          if (braced) {
            return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid variable name"));
          }
          const _bind = put_char(36);
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            return _bind;
          }
          continue;
        }
        const name = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, name_start, i.val));
        const operator = new _M0TPB8MutLocalGsE("");
        const fallback = new _M0TPB8MutLocalGsE("");
        if (braced) {
          const op_start = i.val;
          if (i.val < chars.length && _M0MPC15array5Array2atGcE(chars, i.val) === 58) {
            i.val = i.val + 1 | 0;
          }
          if (i.val < chars.length && (_M0MPC15array5Array2atGcE(chars, i.val) === 45 || _M0MPC15array5Array2atGcE(chars, i.val) === 43)) {
            i.val = i.val + 1 | 0;
            operator.val = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, op_start, i.val));
            const fallback_start = i.val;
            const nesting = new _M0TPB8MutLocalGiE(0);
            while (true) {
              if (i.val < chars.length) {
                if (_M0MPC15array5Array2atGcE(chars, i.val) === 92) {
                  i.val = i.val + 2 | 0;
                  continue;
                }
                if (_M0MPC15array5Array2atGcE(chars, i.val) === 123) {
                  nesting.val = nesting.val + 1 | 0;
                }
                if (_M0MPC15array5Array2atGcE(chars, i.val) === 125) {
                  if (nesting.val === 0) {
                    break;
                  }
                  nesting.val = nesting.val - 1 | 0;
                }
                i.val = i.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (i.val > chars.length) {
              return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid variable fallback"));
            }
            fallback.val = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, fallback_start, i.val));
          }
          if (i.val >= chars.length || _M0MPC15array5Array2atGcE(chars, i.val) !== 125) {
            return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unsupported or unclosed parameter expansion"));
          }
          i.val = i.val + 1 | 0;
        }
        const value = _M0MPB3Map3getGssE(values, name);
        let set;
        if (_M0IP016_24default__implPB2Eq10not__equalGOsE(value, undefined)) {
          let _tmp;
          const _tmp$2 = operator.val;
          const _bind = ":";
          if (!_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
            _tmp = true;
          } else {
            _tmp = _M0IP016_24default__implPB2Eq10not__equalGOsE(value, "");
          }
          set = _tmp;
        } else {
          set = false;
        }
        let use_fallback;
        let _tmp;
        const _tmp$2 = operator.val;
        const _bind = "-";
        if (_M0MPC16string6String11has__suffix(_tmp$2, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
          _tmp = !set;
        } else {
          _tmp = false;
        }
        if (_tmp) {
          use_fallback = true;
        } else {
          let _tmp$3;
          const _tmp$4 = operator.val;
          const _bind$2 = "+";
          if (_M0MPC16string6String11has__suffix(_tmp$4, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
            _tmp$3 = set;
          } else {
            _tmp$3 = false;
          }
          use_fallback = _tmp$3;
        }
        if (use_fallback) {
          const _bind$2 = expand(fallback.val, depth + 1 | 0);
          let expanded;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            expanded = _ok._0;
          } else {
            return _bind$2;
          }
          const _bind$3 = put_string(expanded.value);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          const _bind$4 = expanded.unresolved;
          const _bind$5 = _bind$4.length;
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < _bind$5) {
              const name$2 = _bind$4[_];
              if (!_M0MPC15array5Array8containsGsE(unresolved, name$2)) {
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(unresolved, name$2);
              }
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        } else {
          const _tmp$3 = operator.val;
          const _bind$2 = "+";
          if (_M0MPC16string6String11has__suffix(_tmp$3, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
          } else {
            let v;
            _L: {
              _L$2: {
                if (value === undefined) {
                  const _bind$3 = put_string(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(chars, start, i.val)));
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                  if (!_M0MPC15array5Array8containsGsE(unresolved, name)) {
                    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(unresolved, name);
                  }
                } else {
                  const _Some = value;
                  const _v = _Some;
                  v = _v;
                  break _L$2;
                }
                break _L;
              }
              const _bind$3 = put_string(v);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
        }
        continue;
      } else {
        break;
      }
    }
    if (_M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, -1)) {
      return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unclosed variable quote"));
    }
    return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ExpansionRP212tanglong200110dockerlint10ParseErrorE2Ok(new _M0TP212tanglong200110dockerlint9Expansion(_M0MPB13StringBuilder10to__string(out), unresolved));
  };
  return expand(source, 0);
}
function _M0FP212tanglong200110dockerlint16heredoc__headers(source) {
  const cs = _M0MPC16string6String9to__array(source);
  const out = [];
  const i = new _M0TPB8MutLocalGiE(0);
  const quote = new _M0TPB8MutLocalGOcE(-1);
  const arithmetic = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
        i.val = i.val + 2 | 0;
        continue;
      }
      let q;
      _L: {
        _L$2: {
          const _bind = quote.val;
          if (_bind === -1) {
          } else {
            const _Some = _bind;
            const _q = _Some;
            q = _q;
            break _L$2;
          }
          break _L;
        }
        if (c === q) {
          quote.val = -1;
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 39 || c === 34) {
        quote.val = c;
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 35 && (i.val === 0 || (_M0MPC15array5Array2atGcE(cs, i.val - 1 | 0) === 32 || _M0MPC15array5Array2atGcE(cs, i.val - 1 | 0) === 9))) {
        break;
      }
      if (c === 36 && ((i.val + 2 | 0) < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 40 && _M0MPC15array5Array2atGcE(cs, i.val + 2 | 0) === 40))) {
        arithmetic.val = arithmetic.val + 2 | 0;
        i.val = i.val + 3 | 0;
        continue;
      }
      if (arithmetic.val > 0) {
        if (c === 40) {
          arithmetic.val = arithmetic.val + 1 | 0;
        } else {
          if (c === 41) {
            arithmetic.val = arithmetic.val - 1 | 0;
          }
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c !== 60 || ((i.val + 1 | 0) >= cs.length || _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) !== 60)) {
        i.val = i.val + 1 | 0;
        continue;
      }
      i.val = i.val + 2 | 0;
      if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 60) {
        i.val = i.val + 1 | 0;
        continue;
      }
      const strip_tabs = i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 45;
      if (strip_tabs) {
        i.val = i.val + 1 | 0;
      }
      while (true) {
        if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 32 || _M0MPC15array5Array2atGcE(cs, i.val) === 9)) {
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const name = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      const delimiter_quote = new _M0TPB8MutLocalGOcE(-1);
      const expand = new _M0TPB8MutLocalGbE(true);
      while (true) {
        if (i.val < cs.length) {
          const ch = _M0MPC15array5Array2atGcE(cs, i.val);
          let q$2;
          _L$2: {
            _L$3: {
              const _bind = delimiter_quote.val;
              if (_bind === -1) {
                if (ch === 39 || ch === 34) {
                  delimiter_quote.val = ch;
                  expand.val = false;
                } else {
                  if (ch === 92) {
                    expand.val = false;
                    i.val = i.val + 1 | 0;
                    if (i.val === cs.length) {
                      return new _M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("truncated heredoc delimiter"));
                    }
                    _M0IPB13StringBuilderPB6Logger11write__char(name, _M0MPC15array5Array2atGcE(cs, i.val));
                  } else {
                    if (ch === 32 || (ch === 9 || (ch === 59 || (ch === 124 || (ch === 38 || (ch === 60 || ch === 62)))))) {
                      break;
                    } else {
                      _M0IPB13StringBuilderPB6Logger11write__char(name, ch);
                    }
                  }
                }
              } else {
                const _Some = _bind;
                const _q = _Some;
                q$2 = _q;
                break _L$3;
              }
              break _L$2;
            }
            if (ch === q$2) {
              delimiter_quote.val = -1;
            } else {
              _M0IPB13StringBuilderPB6Logger11write__char(name, ch);
            }
          }
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGOcE(delimiter_quote.val, -1) || _M0MPB13StringBuilder9is__empty(name)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid heredoc delimiter"));
      }
      if (out.length === 16) {
        return new _M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("heredoc count limit"));
      }
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, { _0: _M0MPB13StringBuilder10to__string(name), _1: strip_tabs, _2: expand.val });
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGUsbbEERP212tanglong200110dockerlint10ParseErrorE2Ok(out);
}
function _M0FP212tanglong200110dockerlint5words(s) {
  const result = [];
  const word = new _M0TPB8MutLocalGsE("");
  const _it = _M0MPC16string6String4iter(s);
  while (true) {
    let c;
    _L: {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _c = _Some;
        c = _c;
        break _L;
      }
    }
    if (c === 32 || c === 9) {
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(word.val, "")) {
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, word.val);
        word.val = "";
      }
    } else {
      word.val = `${word.val}${_M0IPC14char4CharPB4Show10to__string(c)}`;
    }
    continue;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(word.val, "")) {
    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, word.val);
  }
  return result;
}
function _M0FP212tanglong200110dockerlint13split__quoted(source) {
  const out = [];
  const text = new _M0TPB8MutLocalGRPB13StringBuilderE(_M0MPB13StringBuilder21StringBuilder_2einner(0));
  const quote = new _M0TPB8MutLocalGOcE(-1);
  const escape = new _M0TPB8MutLocalGbE(false);
  const started = new _M0TPB8MutLocalGbE(false);
  const _it = _M0MPC16string6String4iter(source);
  while (true) {
    let c;
    _L: {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _c = _Some;
        c = _c;
        break _L;
      }
    }
    if (escape.val) {
      _M0IPB13StringBuilderPB6Logger11write__char(text.val, c);
      escape.val = false;
      continue;
    }
    if (c === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
      escape.val = true;
      started.val = true;
      continue;
    }
    let q;
    _L$2: {
      _L$3: {
        const _bind = quote.val;
        if (_bind === -1) {
        } else {
          const _Some = _bind;
          const _q = _Some;
          q = _q;
          break _L$3;
        }
        break _L$2;
      }
      if (c === q) {
        quote.val = -1;
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(text.val, c);
      }
      continue;
    }
    if (c === 34 || c === 39) {
      quote.val = c;
      started.val = true;
    } else {
      if (c === 32 || c === 9) {
        if (started.val) {
          _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, _M0MPB13StringBuilder10to__string(text.val));
          text.val = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          started.val = false;
        }
      } else {
        _M0IPB13StringBuilderPB6Logger11write__char(text.val, c);
        started.val = true;
      }
    }
    continue;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, -1) || escape.val) {
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unterminated quoted argument"));
  }
  if (started.val) {
    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, _M0MPB13StringBuilder10to__string(text.val));
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok(out);
}
function _M0MP212tanglong200110dockerlint11Instruction16split__arguments(self) {
  const _bind = [];
  const flags = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const rest = new _M0TPB8MutLocalGsE(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11trim__start(self.arguments, undefined)));
  while (true) {
    const _tmp = rest.val;
    const _bind$2 = "--";
    if (_M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      const cs = _M0MPC16string6String9to__array(rest.val);
      const end = new _M0TPB8MutLocalGiE(0);
      const quote = new _M0TPB8MutLocalGOcE(-1);
      while (true) {
        if (end.val < cs.length) {
          const c = _M0MPC15array5Array2atGcE(cs, end.val);
          let q;
          _L: {
            _L$2: {
              const _bind$3 = quote.val;
              if (_bind$3 === -1) {
                if (c === 39 || c === 34) {
                  quote.val = c;
                } else {
                  if (c === 32 || c === 9) {
                    break;
                  }
                }
              } else {
                const _Some = _bind$3;
                const _q = _Some;
                q = _q;
                break _L$2;
              }
              break _L;
            }
            if (c === q) {
              quote.val = -1;
            }
          }
          end.val = end.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const raw = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, 0, end.val));
      const _bind$3 = _M0FP212tanglong200110dockerlint13split__quoted(raw);
      let decoded;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        decoded = _ok._0;
      } else {
        return _bind$3;
      }
      if (decoded.length !== 1) {
        return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid instruction flag"));
      }
      const flag = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(_M0MPC15array5Array2atGRPC16string10StringViewE(decoded, 0), 2, undefined));
      const _bind$4 = "=";
      const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(flag, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)));
      const key = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0));
      if (_M0MPC16string6String9is__empty(key)) {
        return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("empty instruction flag"));
      }
      let _tmp$2;
      if (parts.length === 1) {
        _tmp$2 = "true";
      } else {
        const _tmp$3 = _M0MPC15array9ArrayView3mapGRPC16string10StringViewsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(parts, 1, undefined), (x) => _M0MPC16string10StringView9to__owned(x));
        const _bind$5 = "=";
        _tmp$2 = _M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
      }
      _M0MPB3Map3setGssE(flags, key, _tmp$2);
      rest.val = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11trim__start(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, end.val, undefined)), undefined));
      continue;
    } else {
      break;
    }
  }
  const _tmp = rest.val;
  const _bind$2 = "[";
  const json_form = _M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  let values;
  if (json_form) {
    let json;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$3 = rest.val;
        const _bind$4 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), 1024);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          json = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("malformed JSON instruction"));
    }
    let items;
    _L$2: {
      if (json.$tag === 5) {
        const _Array = json;
        const _items = _Array._0;
        items = _items;
        break _L$2;
      } else {
        return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("JSON instruction requires array"));
      }
    }
    const _bind$3 = _M0MPC15array5Array3mapGRPB4JsonsEHRP212tanglong200110dockerlint10ParseError(items, (item) => {
      let s;
      _L$3: {
        if (item.$tag === 4) {
          const _String = item;
          const _s = _String._0;
          s = _s;
          break _L$3;
        } else {
          return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("JSON instruction requires strings"));
        }
      }
      return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok(s);
    });
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      values = _ok._0;
    } else {
      return _bind$3;
    }
  } else {
    const _bind$3 = _M0FP212tanglong200110dockerlint13split__quoted(rest.val);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      values = _ok._0;
    } else {
      return _bind$3;
    }
  }
  if (_M0MPC15array5Array9is__emptyGsE(values)) {
    return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("empty instruction arguments"));
  }
  return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint9ArgumentsRP212tanglong200110dockerlint10ParseErrorE2Ok(new _M0TP212tanglong200110dockerlint9Arguments(flags, values, json_form));
}
function _M0FP212tanglong200110dockerlint5parse(source) {
  if (!_M0FP212tanglong200110dockerlint14valid__unicode(source)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("ill-formed UTF-16 input"));
  }
  if (source.length > 1000000) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("Dockerfile too large"));
  }
  const out = [];
  const logical = new _M0TPB8MutLocalGsE("");
  const start = new _M0TPB8MutLocalGiE(1);
  const number = new _M0TPB8MutLocalGiE(0);
  const escape = new _M0TPB8MutLocalGsE("\\");
  const directive_region = new _M0TPB8MutLocalGbE(true);
  const continuing = new _M0TPB8MutLocalGbE(false);
  const _bind = [];
  const seen_directives = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind, 0, 0), undefined);
  const _bind$2 = "\n";
  const lines = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(source, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  const position = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (position.val < lines.length) {
      const raw = _M0MPC15array5Array2atGRPC16string10StringViewE(lines, position.val);
      position.val = position.val + 1 | 0;
      number.val = position.val;
      const _bind$3 = "\r";
      const s = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11trim__start(_M0MPC16string10StringView17trim__end_2einner(raw, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)), undefined));
      const _bind$4 = "#";
      if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
        if (directive_region.val) {
          const _tmp = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(s, 1, undefined), undefined));
          const _bind$5 = "=";
          const pair = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
          const key = _M0MPC16string6String9to__lower(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPC16string10StringViewE(pair, 0), undefined)));
          if (pair.length >= 2 && _M0MPC15array5Array8containsGsE(["syntax", "escape", "check"], key)) {
            if (_M0MPB3Map8containsGsbE(seen_directives, key)) {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(`duplicate parser directive ${key}`));
            }
            _M0MPB3Map3setGsbE(seen_directives, key, true);
            if (key === "escape") {
              const _tmp$2 = _M0MPC15array9ArrayView3mapGRPC16string10StringViewsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(pair, 1, undefined), (x) => _M0MPC16string10StringView9to__owned(x));
              const _bind$6 = "=";
              const value = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length)), undefined));
              if (_M0IP016_24default__implPB2Eq10not__equalGsE(value, "\\") && _M0IP016_24default__implPB2Eq10not__equalGsE(value, "`")) {
                return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid escape directive"));
              }
              escape.val = value;
            }
          } else {
            directive_region.val = false;
          }
        }
        continue;
      }
      if (s === "") {
        directive_region.val = false;
        continue;
      }
      directive_region.val = false;
      if (!continuing.val) {
        start.val = number.val;
      }
      const suffix = new _M0TPB8MutLocalGiE(0);
      const clean = _M0MPC16string10StringView9to__owned(_M0MPC16string6String9trim__end(s, undefined));
      let _tmp = clean.length - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i >= 0) {
          const _tmp$2 = _M0MPC16string6String11sub_2einner(clean, i, i + 1 | 0);
          const _bind$5 = escape.val;
          if (_M0IPC16string10StringViewPB2Eq5equal(_tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
            suffix.val = suffix.val + 1 | 0;
          } else {
            break;
          }
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (2 === 0) {
        $panic();
      }
      continuing.val = (suffix.val % 2 | 0) === 1;
      logical.val = `${logical.val}${continuing.val ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(clean, 0, clean.length - 1 | 0)) : clean}`;
      if (continuing.val) {
        continue;
      }
      const parts = _M0FP212tanglong200110dockerlint5words(logical.val);
      if (_M0MPC15array5Array9is__emptyGsE(parts)) {
        continue;
      }
      const name = _M0MPC16string6String9to__upper(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0));
      const args = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11trim__start(_M0MPC16string6String11sub_2einner(logical.val, _M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0).length, undefined), undefined));
      if (args === "") {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(`missing arguments at line ${_M0MPC13int3Int18to__string_2einner(start.val, 10)}`));
      }
      let headers;
      if (name === "RUN" || name === "COPY") {
        const _bind$5 = _M0FP212tanglong200110dockerlint16heredoc__headers(args);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          headers = _ok._0;
        } else {
          return _bind$5;
        }
      } else {
        headers = [];
      }
      const heredocs = [];
      const _bind$5 = headers.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$5) {
          const _foreach_element = headers[_];
          let strip_tabs;
          let delimiter;
          let expand;
          _L: {
            const _delimiter = _foreach_element._0;
            const _strip_tabs = _foreach_element._1;
            const _expand = _foreach_element._2;
            strip_tabs = _strip_tabs;
            delimiter = _delimiter;
            expand = _expand;
            break _L;
          }
          const body = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          const closed = new _M0TPB8MutLocalGbE(false);
          while (true) {
            if (position.val < lines.length) {
              const _tmp$3 = _M0MPC15array5Array2atGRPC16string10StringViewE(lines, position.val);
              const _bind$6 = "\r";
              const line = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView17trim__end_2einner(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length)));
              position.val = position.val + 1 | 0;
              let content;
              if (strip_tabs) {
                const _bind$7 = "\t";
                content = _M0MPC16string10StringView9to__owned(_M0MPC16string6String19trim__start_2einner(line, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)));
              } else {
                content = line;
              }
              if (content === delimiter) {
                closed.val = true;
                break;
              }
              _M0IPB13StringBuilderPB6Logger13write__string(body, content);
              _M0IPB13StringBuilderPB6Logger11write__char(body, 10);
              continue;
            } else {
              break;
            }
          }
          if (!closed.val) {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(`unclosed heredoc ${delimiter} at line ${_M0MPC13int3Int18to__string_2einner(start.val, 10)}`));
          }
          _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(heredocs, new _M0TP212tanglong200110dockerlint7HereDoc(delimiter, _M0MPB13StringBuilder10to__string(body), strip_tabs, expand));
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      number.val = position.val;
      const instruction = new _M0TP212tanglong200110dockerlint11Instruction(start.val, number.val, name, args, heredocs);
      let _tmp$3;
      if (_M0MPC15array5Array8containsGsE(["COPY", "ADD", "SHELL"], name)) {
        _tmp$3 = true;
      } else {
        const _bind$6 = "[";
        _tmp$3 = _M0MPC16string6String11has__prefix(args, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
      }
      if (_tmp$3) {
        const _bind$6 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(instruction);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
      }
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, instruction);
      logical.val = "";
      continue;
    } else {
      break;
    }
  }
  if (continuing.val) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("dangling line continuation"));
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint11InstructionERP212tanglong200110dockerlint10ParseErrorE2Ok(out);
}
function _M0FP212tanglong200110dockerlint14raw__arguments(source) {
  const cs = _M0MPC16string6String9to__array(source);
  const result = [];
  const start = new _M0TPB8MutLocalGiE(0);
  const quote = new _M0TPB8MutLocalGOcE(-1);
  const nesting = new _M0TPB8MutLocalGiE(0);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
        i.val = i.val + 2 | 0;
        continue;
      }
      let q;
      _L: {
        _L$2: {
          const _bind = quote.val;
          if (_bind === -1) {
            if (c === 39 || c === 34) {
              quote.val = c;
            } else {
              if (c === 36 && ((i.val + 1 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 123)) {
                nesting.val = nesting.val + 1 | 0;
                i.val = i.val + 1 | 0;
              } else {
                if (c === 125 && nesting.val > 0) {
                  nesting.val = nesting.val - 1 | 0;
                } else {
                  if ((c === 32 || c === 9) && nesting.val === 0) {
                    if (start.val < i.val) {
                      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start.val, i.val)));
                    }
                    start.val = i.val + 1 | 0;
                  }
                }
              }
            }
          } else {
            const _Some = _bind;
            const _q = _Some;
            q = _q;
            break _L$2;
          }
          break _L;
        }
        if (c === q) {
          quote.val = -1;
        }
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, -1) || (nesting.val !== 0 || i.val > cs.length)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid Docker argument quoting"));
  }
  if (start.val < cs.length) {
    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start.val, undefined)));
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok(result);
}
function _M0FP212tanglong200110dockerlint26analyze__variables_2einner(source, build_args) {
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(build_args);
  while (true) {
    let key;
    let value;
    _L: {
      const _bind = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L;
      }
    }
    if (!_M0FP212tanglong200110dockerlint14valid__unicode(key) || (!_M0FP212tanglong200110dockerlint14valid__unicode(value) || value.length > 1000000)) {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid build argument value"));
    }
    continue;
  }
  const _bind = [];
  const global = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const parents = _M0MPB3Map3MapGsURPB3MapGssERPB3MapGssEEE(new _M0TPB9ArrayViewGUsURPB3MapGssERPB3MapGssEEEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const args = new _M0TPB8MutLocalGRPB3MapGssEE(_M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined));
  const _bind$4 = [];
  const env = new _M0TPB8MutLocalGRPB3MapGssEE(_M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$4, 0, 0), undefined));
  const stage_name = new _M0TPB8MutLocalGOsE(undefined);
  const stage = new _M0TPB8MutLocalGiE(-1);
  const result = [];
  const snapshot_units = new _M0TPB8MutLocalGiE(0);
  const _bind$5 = _M0FP212tanglong200110dockerlint5parse(source);
  let _bind$6;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _bind$6 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$7 = _bind$6.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$7) {
      const ins = _bind$6[_];
      _L: {
        if (result.length >= 10000) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("variable snapshot count limit"));
        }
        const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(args.val);
        while (true) {
          let key;
          let value;
          _L$2: {
            const _bind$8 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
            if (_bind$8 === undefined) {
              break;
            } else {
              const _Some = _bind$8;
              const _x = _Some;
              const _key = _x._0;
              const _value = _x._1;
              key = _key;
              value = _value;
              break _L$2;
            }
          }
          snapshot_units.val = snapshot_units.val + (key.length + value.length | 0) | 0;
          continue;
        }
        const _it$3 = _M0MPB3Map5iter2GsRPB4JsonE(env.val);
        while (true) {
          let key;
          let value;
          _L$2: {
            const _bind$8 = _M0MPB5Iter24nextGsRPB4JsonE(_it$3);
            if (_bind$8 === undefined) {
              break;
            } else {
              const _Some = _bind$8;
              const _x = _Some;
              const _key = _x._0;
              const _value = _x._1;
              key = _key;
              value = _value;
              break _L$2;
            }
          }
          snapshot_units.val = snapshot_units.val + (key.length + value.length | 0) | 0;
          continue;
        }
        const _it$4 = _M0MPB3Map5iter2GsRPB4JsonE(global);
        while (true) {
          let key;
          let value;
          _L$2: {
            const _bind$8 = _M0MPB5Iter24nextGsRPB4JsonE(_it$4);
            if (_bind$8 === undefined) {
              break;
            } else {
              const _Some = _bind$8;
              const _x = _Some;
              const _key = _x._0;
              const _value = _x._1;
              key = _key;
              value = _value;
              break _L$2;
            }
          }
          snapshot_units.val = snapshot_units.val + (key.length + value.length | 0) | 0;
          continue;
        }
        if (snapshot_units.val > 8000000) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("variable snapshot size limit"));
        }
        if (ins.name === "FROM") {
          let name;
          _L$2: {
            _L$3: {
              const _bind$8 = stage_name.val;
              if (_bind$8 === undefined) {
              } else {
                const _Some = _bind$8;
                const _name = _Some;
                name = _name;
                break _L$3;
              }
              break _L$2;
            }
            _M0MPB3Map3setGsURPB3MapGssERPB3MapGssEEE(parents, name, { _0: _M0MPB3Map4copyGssE(args.val), _1: _M0MPB3Map4copyGssE(env.val) });
          }
          const _bind$8 = _M0FP212tanglong200110dockerlint17expand__variables(ins.arguments, global);
          let expanded;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            expanded = _ok._0;
          } else {
            return _bind$8;
          }
          const _bind$9 = _M0FP212tanglong200110dockerlint13split__quoted(expanded.value);
          let words;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            words = _ok._0;
          } else {
            return _bind$9;
          }
          let offset;
          const _tmp$2 = _M0MPC15array5Array2atGRPC16string10StringViewE(words, 0);
          const _bind$10 = "--platform=";
          if (_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length))) {
            offset = 1;
          } else {
            offset = 0;
          }
          if (words.length <= offset) {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("malformed FROM"));
          }
          const _tmp$3 = _M0MPB3Map3getGsURPB3MapGssERPB3MapGssEEE(parents, _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(words, offset)));
          const _bind$11 = [];
          const _tmp$4 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$11, 0, 0), undefined);
          const _bind$12 = [];
          const inherited = _M0MPC16option6Option10unwrap__orGsE(_tmp$3, { _0: _tmp$4, _1: _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$12, 0, 0), undefined) });
          args.val = _M0MPB3Map4copyGssE(inherited._0);
          env.val = _M0MPB3Map4copyGssE(inherited._1);
          stage.val = stage.val + 1 | 0;
          stage_name.val = words.length === (offset + 3 | 0) && _M0MPC16string6String9to__upper(_M0MPC15array5Array2atGRPC16string10StringViewE(words, offset + 1 | 0)) === "AS" ? _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(words, offset + 2 | 0)) : undefined;
          _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, new _M0TP212tanglong200110dockerlint13VariableScope(ins.line, stage.val, ins.name, expanded.value, _M0MPB3Map4copyGssE(args.val), _M0MPB3Map4copyGssE(env.val), expanded.unresolved));
          break _L;
        }
        const values = stage.val < 0 ? _M0MPB3Map4copyGssE(global) : _M0MPB3Map4copyGssE(args.val);
        const _it$5 = _M0MPB3Map5iter2GsRPB4JsonE(env.val);
        while (true) {
          let key;
          let value;
          _L$2: {
            const _bind$8 = _M0MPB5Iter24nextGsRPB4JsonE(_it$5);
            if (_bind$8 === undefined) {
              break;
            } else {
              const _Some = _bind$8;
              const _x = _Some;
              const _key = _x._0;
              const _value = _x._1;
              key = _key;
              value = _value;
              break _L$2;
            }
          }
          _M0MPB3Map3setGssE(values, key, value);
          continue;
        }
        const unresolved = [];
        let expanded;
        if (ins.name === "ARG") {
          const _tmp$2 = ins.arguments;
          const _bind$8 = "=";
          const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp$2, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length)));
          const name = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0), undefined));
          const name_chars = _M0MPC16string6String9to__array(name);
          if (_M0MPC16string6String9is__empty(name) || (!_M0FP212tanglong200110dockerlint14variable__char(_M0MPC15array5Array2atGcE(name_chars, 0), true) || !_M0MPB4Iter3allGcE(_M0MPC16string6String4iter(name), (c) => _M0FP212tanglong200110dockerlint14variable__char(c, false)))) {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid ARG name"));
          }
          let value;
          let v;
          _L$2: {
            _L$3: {
              const _bind$9 = _M0MPB3Map3getGssE(build_args, name);
              if (_bind$9 === undefined) {
                if (parts.length > 1) {
                  const _tmp$3 = _M0MPC15array9ArrayView3mapGRPC16string10StringViewsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(parts, 1, undefined), (s) => _M0MPC16string10StringView9to__owned(s));
                  const _bind$10 = "=";
                  const _bind$11 = _M0FP212tanglong200110dockerlint17expand__variables(_M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length)), values);
                  let value$2;
                  if (_bind$11.$tag === 1) {
                    const _ok = _bind$11;
                    value$2 = _ok._0;
                  } else {
                    return _bind$11;
                  }
                  const _bind$12 = value$2.unresolved;
                  const _bind$13 = _bind$12.length;
                  let _tmp$4 = 0;
                  while (true) {
                    const _$2 = _tmp$4;
                    if (_$2 < _bind$13) {
                      const name$2 = _bind$12[_$2];
                      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(unresolved, name$2);
                      _tmp$4 = _$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  value = value$2.value;
                } else {
                  if (stage.val < 0) {
                    value = _M0MPB3Map3getGssE(global, name);
                  } else {
                    let v$2;
                    _L$4: {
                      _L$5: {
                        const _bind$10 = _M0MPB3Map3getGssE(args.val, name);
                        if (_bind$10 === undefined) {
                          value = _M0MPB3Map3getGssE(global, name);
                        } else {
                          const _Some = _bind$10;
                          const _v = _Some;
                          v$2 = _v;
                          break _L$5;
                        }
                        break _L$4;
                      }
                      value = v$2;
                    }
                  }
                }
              } else {
                const _Some = _bind$9;
                const _v = _Some;
                v = _v;
                break _L$3;
              }
              break _L$2;
            }
            value = v;
          }
          let v$2;
          _L$3: {
            _L$4: {
              if (value === undefined) {
              } else {
                const _Some = value;
                const _v = _Some;
                v$2 = _v;
                break _L$4;
              }
              break _L$3;
            }
            if (stage.val < 0) {
              _M0MPB3Map3setGssE(global, name, v$2);
            } else {
              _M0MPB3Map3setGssE(args.val, name, v$2);
            }
          }
          let v$3;
          _L$4: {
            _L$5: {
              if (value === undefined) {
                expanded = name;
              } else {
                const _Some = value;
                const _v = _Some;
                v$3 = _v;
                break _L$5;
              }
              break _L$4;
            }
            expanded = `${name}=${v$3}`;
          }
        } else {
          if (ins.name === "ENV") {
            const _bind$8 = _M0FP212tanglong200110dockerlint14raw__arguments(ins.arguments);
            let tokens;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              tokens = _ok._0;
            } else {
              return _bind$8;
            }
            if (_M0MPC15array5Array9is__emptyGsE(tokens)) {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("empty ENV"));
            }
            let pairs;
            const _tmp$2 = _M0MPC15array5Array2atGRPC16string10StringViewE(tokens, 0);
            const _bind$9 = "=";
            if (_M0MPC16string6String8contains(_tmp$2, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
              pairs = tokens;
            } else {
              const name = _M0MPC15array5Array2atGRPC16string10StringViewE(tokens, 0);
              const rest = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11trim__start(_M0MPC16string6String11sub_2einner(ins.arguments, _M0MPC15array5Array2atGRPC16string10StringViewE(tokens, 0).length, undefined), undefined));
              pairs = [`${name}=${rest}`];
            }
            const outputs = [];
            const _bind$10 = pairs.length;
            let _tmp$3 = 0;
            while (true) {
              const _$2 = _tmp$3;
              if (_$2 < _bind$10) {
                const pair = pairs[_$2];
                const _bind$11 = "=";
                const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(pair, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length)));
                if (parts.length < 2 || _M0MPC16string10StringView9is__empty(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0))) {
                  return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid ENV assignment"));
                }
                const key = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0));
                const _tmp$4 = _M0MPC15array9ArrayView3mapGRPC16string10StringViewsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(parts, 1, undefined), (s) => _M0MPC16string10StringView9to__owned(s));
                const _bind$12 = "=";
                const _bind$13 = _M0FP212tanglong200110dockerlint17expand__variables(_M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length)), values);
                let value;
                if (_bind$13.$tag === 1) {
                  const _ok = _bind$13;
                  value = _ok._0;
                } else {
                  return _bind$13;
                }
                _M0MPB3Map3setGssE(env.val, key, value.value);
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(outputs, `${key}=${value.value}`);
                const _bind$14 = value.unresolved;
                const _bind$15 = _bind$14.length;
                let _tmp$5 = 0;
                while (true) {
                  const _$3 = _tmp$5;
                  if (_$3 < _bind$15) {
                    const name = _bind$14[_$3];
                    if (!_M0MPC15array5Array8containsGsE(unresolved, name)) {
                      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(unresolved, name);
                    }
                    _tmp$5 = _$3 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                _tmp$3 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _bind$11 = " ";
            expanded = _M0MPC15array5Array4joinGsE(outputs, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length));
          } else {
            if (_M0MPC15array5Array8containsGsE(["ADD", "COPY", "WORKDIR", "USER", "EXPOSE", "LABEL", "STOPSIGNAL", "VOLUME"], ins.name)) {
              const _bind$8 = _M0FP212tanglong200110dockerlint17expand__variables(ins.arguments, values);
              let value;
              if (_bind$8.$tag === 1) {
                const _ok = _bind$8;
                value = _ok._0;
              } else {
                return _bind$8;
              }
              const _bind$9 = value.unresolved;
              const _bind$10 = _bind$9.length;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$10) {
                  const name = _bind$9[_$2];
                  _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(unresolved, name);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              expanded = value.value;
            } else {
              expanded = ins.arguments;
            }
          }
        }
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, new _M0TP212tanglong200110dockerlint13VariableScope(ins.line, stage.val, ins.name, expanded, stage.val < 0 ? _M0MPB3Map4copyGssE(global) : _M0MPB3Map4copyGssE(args.val), _M0MPB3Map4copyGssE(env.val), unresolved));
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint13VariableScopeERP212tanglong200110dockerlint10ParseErrorE2Ok(result);
}
function _M0FP212tanglong200110dockerlint12ignore__list(text) {
  const _bind = "#";
  const text$2 = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(text, new _M0TPC16string10StringView(_bind, 0, _bind.length))), 0), undefined));
  const _bind$2 = ",";
  const codes = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(text$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)), (c) => _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(c, undefined))));
  const _bind$3 = codes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const code = codes[_];
      if (code.length !== 6 || (!_M0MPC15array5Array8containsGsE(["DL", "ML", "SC"], _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(code, 0, 2))) || !_M0MPB4Iter3allGcE(_M0MPC16string10StringView4iter(_M0MPC16string6String11sub_2einner(code, 2, undefined)), (c) => c >= 48 && c <= 57))) {
        return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(`invalid suppression code: ${code}`));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok(codes);
}
function _M0FP212tanglong200110dockerlint14leading__flags(source) {
  const result = [];
  const cs = _M0MPC16string6String9to__array(source);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      while (true) {
        if (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 32 || _M0MPC15array5Array2atGcE(cs, i.val) === 9)) {
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if ((i.val + 1 | 0) >= cs.length || (_M0MPC15array5Array2atGcE(cs, i.val) !== 45 || _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) !== 45)) {
        break;
      }
      const start = i.val;
      const quote = new _M0TPB8MutLocalGOcE(-1);
      while (true) {
        if (i.val < cs.length) {
          const c = _M0MPC15array5Array2atGcE(cs, i.val);
          if (c === 92) {
            i.val = i.val + 2 | 0;
            continue;
          }
          let q;
          _L: {
            _L$2: {
              const _bind = quote.val;
              if (_bind === -1) {
                if (c === 39 || c === 34) {
                  quote.val = c;
                } else {
                  if (c === 32 || c === 9) {
                    break;
                  }
                }
              } else {
                const _Some = _bind;
                const _q = _Some;
                q = _q;
                break _L$2;
              }
              break _L;
            }
            if (c === q) {
              quote.val = -1;
            }
          }
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, -1) || i.val > cs.length) {
        return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unterminated instruction flag"));
      }
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val)));
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE2Ok(result);
}
function _M0FP212tanglong200110dockerlint16stage__reference(reference, stages) {
  const lower = _M0MPC16string6String9to__lower(reference);
  if (!_M0MPC16string6String9is__empty(lower) && _M0MPB4Iter3allGcE(_M0MPC16string6String4iter(lower), (c) => c >= 48 && c <= 57)) {
    const index = new _M0TPB8MutLocalGiE(0);
    const _it = _M0MPC16string6String4iter(lower);
    while (true) {
      let c;
      _L: {
        const _bind = _M0MPB4Iter4nextGcE(_it);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _c = _Some;
          c = _c;
          break _L;
        }
      }
      if (index.val > 256) {
        return new _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("stage index out of range"));
      }
      index.val = ((Math.imul(index.val, 10) | 0) + c | 0) - 48 | 0;
      continue;
    }
    if (index.val >= stages.length) {
      return new _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("stage index out of range"));
    }
    return new _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE2Ok(index.val);
  }
  const _bind = stages.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const stage = stages[_];
      if (_M0IPC16option6OptionPB2Eq5equalGsE(stage.stage_name, lower)) {
        return new _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE2Ok(stage.index);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGOiRP212tanglong200110dockerlint10ParseErrorE2Ok(undefined);
}
function _M0FP212tanglong200110dockerlint12build__edges(instructions, stages) {
  const edges = [];
  const uncertainties = [];
  const current = new _M0TPB8MutLocalGiE(-1);
  const add = (reference, line, kind) => {
    const _bind = "$";
    if (_M0MPC16string6String8contains(reference, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(uncertainties, new _M0TP212tanglong200110dockerlint16BuildUncertainty(line, `dynamic ${kind} reference`));
      return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(undefined);
    }
    let dependency;
    _L: {
      const _bind$2 = _M0FP212tanglong200110dockerlint16stage__reference(reference, stages);
      let _bind$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _bind$3 = _ok._0;
      } else {
        return _bind$2;
      }
      if (_bind$3 === undefined) {
        return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(undefined);
      } else {
        const _Some = _bind$3;
        const _dependency = _Some;
        dependency = _dependency;
        break _L;
      }
    }
    return _M0IP016_24default__implPB2Eq10not__equalGsE(kind, "FROM") || dependency < current.val ? new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(edges, new _M0TP212tanglong200110dockerlint9BuildEdge(current.val, dependency, line, kind))) : new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(undefined);
  };
  const _bind = instructions.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const instruction = instructions[_];
      _L: {
        if (instruction.name === "FROM") {
          current.val = current.val + 1 | 0;
          const base = _M0MPC15array5Array2atGRPC16string10StringViewE(stages, current.val).base;
          if (_M0MPB4Iter3allGcE(_M0MPC16string6String4iter(base), (c) => c >= 48 && c <= 57)) {
            break _L;
          }
          const _bind$2 = add(base, instruction.line, "FROM");
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
        } else {
          if (current.val >= 0 && instruction.name === "COPY") {
            let reference;
            _L$2: {
              _L$3: {
                const _bind$2 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(instruction);
                let _tmp$2;
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _tmp$2 = _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MPB3Map3getGssE(_tmp$2.flags, "from");
                if (_bind$3 === undefined) {
                } else {
                  const _Some = _bind$3;
                  const _reference = _Some;
                  reference = _reference;
                  break _L$3;
                }
                break _L$2;
              }
              const _bind$2 = add(reference, instruction.line, "COPY");
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            }
          } else {
            if (current.val >= 0 && instruction.name === "RUN") {
              const _bind$2 = _M0FP212tanglong200110dockerlint14leading__flags(instruction.arguments);
              let _bind$3;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _bind$3 = _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$4 = _bind$3.length;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$4) {
                  const flag = _bind$3[_$2];
                  _L$2: {
                    const _bind$5 = "--mount=";
                    if (_M0MPC16string6String11has__prefix(flag, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                      let _tmp$3;
                      const _bind$6 = "\"";
                      if (_M0MPC16string6String8contains(flag, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                        _tmp$3 = true;
                      } else {
                        let _tmp$4;
                        const _bind$7 = "'";
                        if (_M0MPC16string6String8contains(flag, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                          _tmp$4 = true;
                        } else {
                          const _bind$8 = "\\";
                          _tmp$4 = _M0MPC16string6String8contains(flag, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length));
                        }
                        _tmp$3 = _tmp$4;
                      }
                      if (_tmp$3) {
                        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(uncertainties, new _M0TP212tanglong200110dockerlint16BuildUncertainty(instruction.line, "quoted/escaped mount options require builder evaluation"));
                        break _L$2;
                      }
                      const _tmp$4 = _M0MPC16string6String11sub_2einner(flag, 8, undefined);
                      const _bind$7 = ",";
                      const options = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)));
                      const _bind$8 = options.length;
                      let _tmp$5 = 0;
                      while (true) {
                        const _$3 = _tmp$5;
                        if (_$3 < _bind$8) {
                          const option = options[_$3];
                          const _bind$9 = "from=";
                          if (_M0MPC16string10StringView11has__prefix(option, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
                            const _bind$10 = add(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11sub_2einner(option, 5, undefined)), instruction.line, "RUN mount");
                            if (_bind$10.$tag === 1) {
                              const _ok = _bind$10;
                              _ok._0;
                            } else {
                              return _bind$10;
                            }
                          }
                          _tmp$5 = _$3 + 1 | 0;
                          continue;
                        } else {
                          break;
                        }
                      }
                    }
                    break _L$2;
                  }
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
            } else {
              if (instruction.name === "ONBUILD") {
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(uncertainties, new _M0TP212tanglong200110dockerlint16BuildUncertainty(instruction.line, "ONBUILD trigger is not evaluated"));
              }
            }
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGURPB5ArrayGRP212tanglong200110dockerlint9BuildEdgeERPB5ArrayGRP212tanglong200110dockerlint16BuildUncertaintyEERP212tanglong200110dockerlint10ParseErrorE2Ok({ _0: edges, _1: uncertainties });
}
function _M0FP212tanglong200110dockerlint22validate__stage__graph(stages) {
  const colors = _M0MPC15array5Array4makeGiE(stages.length, 0);
  const visit = (index) => {
    if (_M0MPC15array5Array2atGiE(colors, index) === 1) {
      return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error51tanglong2001_2fdockerlint_2eParseError_2eStageCycle(_M0MPC15array5Array2atGRPC16string10StringViewE(stages, index).line));
    }
    if (_M0MPC15array5Array2atGiE(colors, index) === 2) {
      return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(undefined);
    }
    _M0MPC15array5Array3setGiE(colors, index, 1);
    const _bind = _M0MPC15array5Array2atGRPC16string10StringViewE(stages, index).dependencies;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const next = _bind[_];
        const _bind$3 = visit(next);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC15array5Array3setGiE(colors, index, 2));
  };
  const _bind = 0;
  const _bind$2 = stages.length;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const _bind$3 = visit(i);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP212tanglong200110dockerlint10ParseErrorE2Ok(undefined);
}
function _M0FP212tanglong200110dockerlint15analyze__stages(instructions) {
  const stages = [];
  const _bind = [];
  const aliases = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  const _bind$2 = instructions.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const instruction = instructions[_];
      _L: {
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(instruction.name, "FROM")) {
          break _L;
        }
        if (stages.length === 256) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("stage count limit"));
        }
        const _bind$3 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(instruction);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        const args = _tmp$2.values;
        if (args.length !== 1 && !(args.length === 3 && _M0MPC16string6String9to__upper(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 1)) === "AS")) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("malformed FROM"));
        }
        const stage_name = args.length === 3 ? _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 2)) : undefined;
        let name;
        _L$2: {
          _L$3: {
            if (stage_name === undefined) {
            } else {
              const _Some = stage_name;
              const _name = _Some;
              name = _name;
              break _L$3;
            }
            break _L$2;
          }
          if (_M0MPB3Map8containsGsiE(aliases, name)) {
            return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("duplicate stage stage_name"));
          }
          _M0MPB3Map3setGsiE(aliases, name, stages.length);
        }
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(stages, new _M0TP212tanglong200110dockerlint5Stage(stages.length, instruction.line, _M0MPC15array5Array2atGRPC16string10StringViewE(args, 0), stage_name, []));
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let edges;
  _L: {
    const _bind$3 = _M0FP212tanglong200110dockerlint12build__edges(instructions, stages);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    const _edges = _bind$4._0;
    edges = _edges;
    break _L;
  }
  const _bind$3 = edges.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const edge = edges[_];
      if (!_M0MPC15array5Array8containsGiE(_M0MPC15array5Array2atGRPC16string10StringViewE(stages, edge.consumer).dependencies, edge.dependency)) {
        _M0MPC15array5Array4pushGiE(_M0MPC15array5Array2atGRPC16string10StringViewE(stages, edge.consumer).dependencies, edge.dependency);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = _M0FP212tanglong200110dockerlint22validate__stage__graph(stages);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint5StageERP212tanglong200110dockerlint10ParseErrorE2Ok(stages);
}
function _M0FP212tanglong200110dockerlint16executable__name(path) {
  const _bind = "/";
  return _M0MPC16string10StringView9to__owned(_M0MPC16option6Option10unwrap__orGsE(_M0MPC15array5Array4lastGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(path, new _M0TPC16string10StringView(_bind, 0, _bind.length)))), new _M0TPC16string10StringView(path, 0, path.length)));
}
function _M0FP212tanglong200110dockerlint15metadata__rules(instructions) {
  const out = [];
  const healthchecks = new _M0TPB8MutLocalGiE(0);
  const _bind = [];
  const defined = new _M0TPB8MutLocalGRPB3MapGsbEE(_M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind, 0, 0), undefined));
  const _bind$2 = [];
  const saved = _M0MPB3Map3MapGsRPB3MapGsbEE(new _M0TPB9ArrayViewGUsRPB3MapGsbEEE(_bind$2, 0, 0), undefined);
  const stage_name = new _M0TPB8MutLocalGOsE(undefined);
  const _bind$3 = instructions.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const ins = instructions[_];
      const emit = (code, message) => {
        if (!_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(out), (d) => d.line === ins.line && d.code === code)) {
          _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, new _M0TP212tanglong200110dockerlint10Diagnostic(ins.line, code, message));
          return;
        } else {
          return;
        }
      };
      if (ins.name === "FROM") {
        let name;
        _L: {
          _L$2: {
            const _bind$4 = stage_name.val;
            if (_bind$4 === undefined) {
            } else {
              const _Some = _bind$4;
              const _name = _Some;
              name = _name;
              break _L$2;
            }
            break _L;
          }
          _M0MPB3Map3setGsRPB3MapGsbEE(saved, name, _M0MPB3Map4copyGsbE(defined.val));
        }
        let values;
        let _try_err;
        _L$2: {
          _L$3: {
            const _bind$4 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(ins);
            let _tmp$2;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp$2 = _ok._0;
            } else {
              const _err = _bind$4;
              _try_err = _err._0;
              break _L$3;
            }
            values = _tmp$2.values;
            break _L$2;
          }
          values = [];
        }
        let _tmp$2;
        if (_M0MPC15array5Array9is__emptyGsE(values)) {
          const _bind$4 = [];
          _tmp$2 = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$4, 0, 0), undefined);
        } else {
          const _tmp$3 = _M0MPB3Map3getGsRPB3MapGsbEE(saved, _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)));
          const _bind$4 = [];
          _tmp$2 = _M0MPB3Map4copyGsbE(_M0MPC16option6Option10unwrap__orGsE(_tmp$3, _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$4, 0, 0), undefined)));
        }
        defined.val = _tmp$2;
        stage_name.val = values.length === 3 ? _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 2)) : undefined;
        healthchecks.val = 0;
        const _tmp$3 = ins.arguments;
        const _bind$4 = "--platform=";
        if (_M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
          emit("DL3029", "Avoid fixing the build platform in FROM");
        }
      }
      if (ins.name === "HEALTHCHECK") {
        healthchecks.val = healthchecks.val + 1 | 0;
        if (healthchecks.val > 1) {
          emit("DL3012", "Earlier HEALTHCHECK in this stage is overridden");
        }
        const args = _M0FP212tanglong200110dockerlint5words(ins.arguments);
        const cmd = new _M0TPB8MutLocalGiE(-1);
        const _bind$4 = args.length;
        let _tmp$2 = 0;
        while (true) {
          const i = _tmp$2;
          if (i < _bind$4) {
            const value = args[i];
            if (_M0MPC16string6String9to__upper(value) === "CMD") {
              cmd.val = i;
              break;
            }
            _tmp$2 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        let _tmp$3;
        if (cmd.val >= 0) {
          let _tmp$4;
          if ((cmd.val + 1 | 0) < args.length) {
            const _tmp$5 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, cmd.val + 1 | 0);
            const _bind$5 = "[";
            _tmp$4 = !_M0MPC16string6String11has__prefix(_tmp$5, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
          } else {
            _tmp$4 = false;
          }
          _tmp$3 = _tmp$4;
        } else {
          _tmp$3 = false;
        }
        if (_tmp$3) {
          emit("DL3025", "Prefer JSON exec form for signal forwarding");
        }
      }
      if (ins.name === "EXPOSE") {
        const _bind$4 = _M0FP212tanglong200110dockerlint5words(ins.arguments);
        const _bind$5 = _bind$4.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$5) {
            const spec = _bind$4[_$2];
            _L: {
              const _bind$6 = "$";
              if (_M0MPC16string6String8contains(spec, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                break _L;
              }
              const _bind$7 = "/";
              const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(spec, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)));
              let _tmp$3;
              if (parts.length <= 2) {
                let _tmp$4;
                if (parts.length === 1) {
                  _tmp$4 = true;
                } else {
                  let _tmp$5;
                  const _tmp$6 = _M0MPC15array5Array2atGRPC16string10StringViewE(parts, 1);
                  const _bind$8 = "tcp";
                  if (_M0IPC16string10StringViewPB2Eq5equal(_tmp$6, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                    _tmp$5 = true;
                  } else {
                    const _tmp$7 = _M0MPC15array5Array2atGRPC16string10StringViewE(parts, 1);
                    const _bind$9 = "udp";
                    _tmp$5 = _M0IPC16string10StringViewPB2Eq5equal(_tmp$7, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length));
                  }
                  _tmp$4 = _tmp$5;
                }
                _tmp$3 = _tmp$4;
              } else {
                _tmp$3 = false;
              }
              const valid = new _M0TPB8MutLocalGbE(_tmp$3);
              const oversized = new _M0TPB8MutLocalGbE(false);
              const _tmp$4 = _M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0);
              const _bind$8 = "-";
              const ports = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp$4, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length)));
              const previous = new _M0TPB8MutLocalGiE(-1);
              if (ports.length > 2) {
                valid.val = false;
              }
              const _bind$9 = ports.length;
              let _tmp$5 = 0;
              while (true) {
                const _$3 = _tmp$5;
                if (_$3 < _bind$9) {
                  const port = ports[_$3];
                  const number = new _M0TPB8MutLocalGiE(0);
                  if (_M0MPC16string10StringView9is__empty(port)) {
                    valid.val = false;
                  }
                  const _it = _M0MPC16string10StringView4iter(port);
                  while (true) {
                    let c;
                    _L$2: {
                      const _bind$10 = _M0MPB4Iter4nextGcE(_it);
                      if (_bind$10 === -1) {
                        break;
                      } else {
                        const _Some = _bind$10;
                        const _c = _Some;
                        c = _c;
                        break _L$2;
                      }
                    }
                    if (c < 48 || (c > 57 || number.val > 65535)) {
                      valid.val = false;
                      break;
                    }
                    number.val = ((Math.imul(number.val, 10) | 0) + c | 0) - 48 | 0;
                    continue;
                  }
                  if (number.val > 65535) {
                    oversized.val = true;
                  }
                  if (number.val > 65535 || number.val < previous.val) {
                    valid.val = false;
                  }
                  previous.val = number.val;
                  _tmp$5 = _$3 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              if (!valid.val) {
                emit(oversized.val ? "DL3011" : "ML1012", "EXPOSE requires a port or ordered range from 0 to 65535, optionally /tcp or /udp");
              }
              break _L;
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      if (ins.name === "ENV") {
        let tokens;
        let _try_err;
        _L: {
          _L$2: {
            const _bind$4 = _M0FP212tanglong200110dockerlint14raw__arguments(ins.arguments);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              tokens = _ok._0;
            } else {
              const _err = _bind$4;
              _try_err = _err._0;
              break _L$2;
            }
            break _L;
          }
          tokens = [];
        }
        const names = _M0MPC15array5Array3mapGssE(_M0MPC15array5Array6filterGsE(tokens, (t) => {
          const _bind$4 = "=";
          return _M0MPC16string6String8contains(t, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
        }), (t) => {
          const _bind$4 = "=";
          return _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(t, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))), 0));
        });
        if (names.length > 1) {
          const _bind$4 = tokens.length;
          let _tmp$2 = 0;
          while (true) {
            const _$2 = _tmp$2;
            if (_$2 < _bind$4) {
              const token = tokens[_$2];
              _L$2: {
                const _bind$5 = "=";
                const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(token, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
                if (parts.length < 2) {
                  break _L$2;
                }
                let used;
                let _try_err$2;
                _L$3: {
                  _L$4: {
                    const _tmp$3 = _M0MPC15array9ArrayView3mapGRPC16string10StringViewsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(parts, 1, undefined), (s) => _M0MPC16string10StringView9to__owned(s));
                    const _bind$6 = "=";
                    const _tmp$4 = _M0MPC15array5Array4joinGsE(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
                    const _bind$7 = [];
                    const _bind$8 = _M0FP212tanglong200110dockerlint17expand__variables(_tmp$4, _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$7, 0, 0), undefined));
                    if (_bind$8.$tag === 1) {
                      const _ok = _bind$8;
                      used = _ok._0;
                    } else {
                      const _err = _bind$8;
                      _try_err$2 = _err._0;
                      break _L$4;
                    }
                    break _L$3;
                  }
                  used = new _M0TP212tanglong200110dockerlint9Expansion("", []);
                }
                if (_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(used.unresolved), (name) => _M0MPC15array5Array8containsGsE(names, name) && !_M0MPB3Map8containsGsbE(defined.val, name))) {
                  emit("DL3044", "ENV assignments on one instruction read the previous environment");
                }
                break _L$2;
              }
              _tmp$2 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const _bind$4 = names.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const name = names[_$2];
            _M0MPB3Map3setGsbE(defined.val, name, true);
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP212tanglong200110dockerlint13flag__present(args, names) {
  return _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(args), (arg) => _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(names), (name) => {
    if (arg === name) {
      return true;
    } else {
      const _bind = `${name}=`;
      return _M0MPC16string6String11has__prefix(arg, new _M0TPC16string10StringView(_bind, 0, _bind.length));
    }
  }));
}
function _M0FP212tanglong200110dockerlint17package__operands(args, command) {
  const found = new _M0TPB8MutLocalGbE(false);
  const skip = new _M0TPB8MutLocalGbE(false);
  const result = [];
  const takes_value = ["-o", "--option", "--config-file", "-c", "--config", "--root", "--repository", "--index-url", "-i", "--extra-index-url", "--trusted-host", "--prefix", "--target", "--directory", "--installroot", "--releasever", "--setopt", "--with", "--virtual", "-t", "-r", "--requirement", "--constraint", "-e", "--editable"];
  const _bind = args.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const arg = args[_];
      _L: {
        if (!found.val) {
          if (arg === command) {
            found.val = true;
          }
          break _L;
        }
        if (skip.val) {
          skip.val = false;
          break _L;
        }
        if (_M0MPC15array5Array8containsGsE(takes_value, arg)) {
          skip.val = true;
          break _L;
        }
        const _bind$2 = "-";
        if (!_M0MPC16string6String11has__prefix(arg, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
          _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(result, arg);
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP212tanglong200110dockerlint11run__script(ins) {
  const _tmp = ins.arguments;
  const _bind = "[";
  if (_M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    return "";
  }
  let _tmp$2;
  const _tmp$3 = ins.arguments;
  const _bind$2 = "<<";
  if (_M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    _tmp$2 = ins.heredocs.length === 1;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    return _M0MPC15array5Array2atGRPC16string10StringViewE(ins.heredocs, 0).content;
  }
  const source = new _M0TPB8MutLocalGsE(ins.arguments);
  while (true) {
    const _tmp$4 = source.val;
    const _bind$3 = "--";
    if (_M0MPC16string6String11has__prefix(_tmp$4, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
      const _tmp$5 = source.val;
      const _bind$4 = " ";
      const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp$5, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)));
      if (parts.length < 2) {
        return "";
      }
      source.val = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(source.val, _M0MPC16string10StringView6length(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0)), undefined), undefined));
      continue;
    } else {
      break;
    }
  }
  return source.val;
}
function _M0FP212tanglong200110dockerlint13shell__tokens(source) {
  if (!_M0FP212tanglong200110dockerlint14valid__unicode(source)) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid shell Unicode"));
  }
  if (source.length > 1000000) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("shell input limit"));
  }
  const cs = _M0MPC16string6String9to__array(source);
  const out = [];
  const i = new _M0TPB8MutLocalGiE(0);
  const line = new _M0TPB8MutLocalGiE(1);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 32 || (c === 9 || c === 13)) {
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 35) {
        while (true) {
          if (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) !== 10) {
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        continue;
      }
      const _bind = _M0IPC14char4CharPB4Show10to__string(c);
      if (_M0MPC16string6String8contains(";&|()<>{}\n", new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
        if (out.length >= 100000) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("shell token count limit"));
        }
        const start = i.val;
        const token_line = line.val;
        i.val = i.val + 1 | 0;
        if (c === 10) {
          line.val = line.val + 1 | 0;
        }
        let _tmp;
        if (i.val < cs.length) {
          let _tmp$2;
          let _tmp$3;
          if (_M0MPC15array5Array2atGcE(cs, i.val) === c) {
            const _bind$2 = _M0IPC14char4CharPB4Show10to__string(c);
            _tmp$3 = _M0MPC16string6String8contains("&|<>;", new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            _tmp$2 = true;
          } else {
            _tmp$2 = c === 124 && _M0MPC15array5Array2atGcE(cs, i.val) === 38 || ((c === 60 || c === 62) && _M0MPC15array5Array2atGcE(cs, i.val) === 38 || c === 62 && _M0MPC15array5Array2atGcE(cs, i.val) === 124);
          }
          _tmp = _tmp$2;
        } else {
          _tmp = false;
        }
        if (_tmp) {
          i.val = i.val + 1 | 0;
        }
        if (c === 60 && (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 45 || _M0MPC15array5Array2atGcE(cs, i.val) === 60))) {
          i.val = i.val + 1 | 0;
        }
        const raw = _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val));
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, new _M0TP212tanglong200110dockerlint10ShellToken(c === 60 || c === 62 ? "redirect" : "operator", raw, raw, token_line, false, false));
        continue;
      }
      const start = i.val;
      const token_line = line.val;
      const value = _M0MPB13StringBuilder21StringBuilder_2einner(0);
      const quote = new _M0TPB8MutLocalGOcE(-1);
      const quoted = new _M0TPB8MutLocalGbE(false);
      const dynamic = new _M0TPB8MutLocalGbE(false);
      while (true) {
        if (i.val < cs.length) {
          const c$2 = _M0MPC15array5Array2atGcE(cs, i.val);
          if (c$2 === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
            i.val = i.val + 1 | 0;
            if (i.val === cs.length) {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("trailing shell escape"));
            }
            if (_M0MPC15array5Array2atGcE(cs, i.val) === 10) {
              line.val = line.val + 1 | 0;
            } else {
              let _tmp;
              if (_M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 34)) {
                const _bind$2 = _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(cs, i.val));
                _tmp = !_M0MPC16string6String8contains("$`\"\\", new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
              } else {
                _tmp = false;
              }
              if (_tmp) {
                _M0IPB13StringBuilderPB6Logger11write__char(value, 92);
                _M0IPB13StringBuilderPB6Logger11write__char(value, _M0MPC15array5Array2atGcE(cs, i.val));
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(value, _M0MPC15array5Array2atGcE(cs, i.val));
              }
            }
            i.val = i.val + 1 | 0;
            continue;
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39) && (c$2 === 36 && ((i.val + 1 | 0) < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 40 || _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 123)) || c$2 === 96)) {
            dynamic.val = true;
            const nested_start = i.val;
            const opening = c$2 === 96 ? 96 : _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0);
            const closing = opening === 40 ? 41 : opening === 123 ? 125 : 96;
            i.val = i.val + (c$2 === 96 ? 1 : 2) | 0;
            const depth = new _M0TPB8MutLocalGiE(1);
            const inner_quote = new _M0TPB8MutLocalGOcE(-1);
            while (true) {
              if (i.val < cs.length && depth.val > 0) {
                const n = _M0MPC15array5Array2atGcE(cs, i.val);
                if (n === 10) {
                  line.val = line.val + 1 | 0;
                }
                if (n === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(inner_quote.val, 39)) {
                  i.val = i.val + 2 | 0;
                  continue;
                }
                let q;
                _L: {
                  _L$2: {
                    const _bind$2 = inner_quote.val;
                    if (_bind$2 === -1) {
                      if (n === 39 || n === 34) {
                        inner_quote.val = n;
                      } else {
                        if (n === closing) {
                          depth.val = depth.val - 1 | 0;
                        } else {
                          if (n === opening && opening !== 96) {
                            depth.val = depth.val + 1 | 0;
                            if (depth.val > 128) {
                              return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("shell nesting limit"));
                            }
                          }
                        }
                      }
                    } else {
                      const _Some = _bind$2;
                      const _q = _Some;
                      q = _q;
                      break _L$2;
                    }
                    break _L;
                  }
                  if (n === q) {
                    inner_quote.val = -1;
                  }
                }
                i.val = i.val + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (depth.val !== 0 || i.val > cs.length) {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unclosed shell substitution"));
            }
            _M0IPB13StringBuilderPB6Logger13write__string(value, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, nested_start, i.val)));
            continue;
          }
          let q;
          _L: {
            _L$2: {
              const _bind$2 = quote.val;
              if (_bind$2 === -1) {
              } else {
                const _Some = _bind$2;
                const _q = _Some;
                q = _q;
                break _L$2;
              }
              break _L;
            }
            if (c$2 === q) {
              quote.val = -1;
              quoted.val = true;
            } else {
              if (c$2 === 36 && q !== 39) {
                dynamic.val = true;
              }
              _M0IPB13StringBuilderPB6Logger11write__char(value, c$2);
            }
            if (c$2 === 10) {
              line.val = line.val + 1 | 0;
            }
            i.val = i.val + 1 | 0;
            continue;
          }
          if (c$2 === 39 || c$2 === 34) {
            quote.val = c$2;
            quoted.val = true;
            i.val = i.val + 1 | 0;
            continue;
          }
          const _bind$2 = _M0IPC14char4CharPB4Show10to__string(c$2);
          if (_M0MPC16string6String8contains(" \t\r\n;&|()<>{}", new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
            break;
          }
          if (c$2 === 36) {
            dynamic.val = true;
          }
          _M0IPB13StringBuilderPB6Logger11write__char(value, c$2);
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, -1)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unclosed shell quote"));
      }
      const value$2 = _M0MPB13StringBuilder10to__string(value);
      const fd = !quoted.val && (!_M0MPC16string6String9is__empty(value$2) && (_M0MPB4Iter3allGcE(_M0MPC16string6String4iter(value$2), (c$2) => c$2 >= 48 && c$2 <= 57) && (i.val < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val) === 60 || _M0MPC15array5Array2atGcE(cs, i.val) === 62))));
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, new _M0TP212tanglong200110dockerlint10ShellToken(fd ? "fd" : "word", value$2, _M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val)), token_line, quoted.val, dynamic.val));
      if (out.length > 100000) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("shell token count limit"));
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERP212tanglong200110dockerlint10ParseErrorE2Ok(out);
}
function _M0FP212tanglong200110dockerlint21shell__commands__flat(source) {
  const commands = [];
  const current = new _M0TPB8MutLocalGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE([]);
  const redirect = new _M0TPB8MutLocalGbE(false);
  const _bind = _M0FP212tanglong200110dockerlint13shell__tokens(source);
  let _bind$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _bind$2 = _ok._0;
  } else {
    return _bind;
  }
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const token = _bind$2[_];
      _L: {
        if (token.kind === "fd") {
          break _L;
        }
        if (token.kind === "operator") {
          if (!_M0MPC15array5Array9is__emptyGsE(current.val)) {
            _M0MPC15array5Array4pushGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(commands, current.val);
            current.val = [];
          }
          redirect.val = false;
        } else {
          if (token.kind === "redirect") {
            redirect.val = true;
          } else {
            if (redirect.val) {
              redirect.val = false;
            } else {
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(current.val, token);
            }
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!_M0MPC15array5Array9is__emptyGsE(current.val)) {
    _M0MPC15array5Array4pushGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(commands, current.val);
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC15array5Array6filterGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(_M0MPC15array5Array3mapGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenERPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(commands, (tokens) => {
    const start = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (start.val < tokens.length) {
        const token = _M0MPC15array5Array2atGRPC16string10StringViewE(tokens, start.val);
        let _tmp$2;
        if (_M0MPC15array5Array8containsGsE(["if", "then", "elif", "else", "do", "!", "command", "exec", "env"], token.value)) {
          _tmp$2 = true;
        } else {
          let _tmp$3;
          const _tmp$4 = token.value;
          const _bind$4 = "=";
          if (_M0MPC16string6String8contains(_tmp$4, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
            const _tmp$5 = token.value;
            const _bind$5 = "-";
            _tmp$3 = !_M0MPC16string6String11has__prefix(_tmp$5, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
          } else {
            _tmp$3 = false;
          }
          _tmp$2 = _tmp$3;
        }
        if (_tmp$2) {
          start.val = start.val + 1 | 0;
        } else {
          break;
        }
        continue;
      } else {
        break;
      }
    }
    return _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(tokens, start.val, undefined));
  }), (tokens) => !_M0MPC15array5Array9is__emptyGsE(tokens)));
}
function _M0FP212tanglong200110dockerlint15shell__commands(source) {
  const collect = (source$2, depth) => {
    if (depth > 32) {
      return new _M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("command substitution nesting limit"));
    }
    const _bind = _M0FP212tanglong200110dockerlint21shell__commands__flat(source$2);
    let commands;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      commands = _ok._0;
    } else {
      return _bind;
    }
    const _bind$2 = _M0FP212tanglong200110dockerlint13shell__tokens(source$2);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$4 = _bind$3.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$4) {
        const token = _bind$3[_];
        _L: {
          if (!token.dynamic) {
            break _L;
          }
          const cs = _M0MPC16string6String9to__array(token.raw);
          const i = new _M0TPB8MutLocalGiE(0);
          const quote = new _M0TPB8MutLocalGOcE(-1);
          while (true) {
            if (i.val < cs.length) {
              const c = _M0MPC15array5Array2atGcE(cs, i.val);
              if (c === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
                i.val = i.val + 2 | 0;
                continue;
              }
              if (_M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 39)) {
                if (c === 39) {
                  quote.val = -1;
                }
                i.val = i.val + 1 | 0;
                continue;
              }
              if (c === 39 && _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1)) {
                quote.val = c;
                i.val = i.val + 1 | 0;
                continue;
              }
              if (c === 34) {
                quote.val = _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1) ? c : -1;
                i.val = i.val + 1 | 0;
                continue;
              }
              if (c === 96 || c === 36 && ((i.val + 1 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 40)) {
                const backtick = c === 96;
                i.val = i.val + (backtick ? 1 : 2) | 0;
                const start = i.val;
                const arithmetic = !backtick && (i.val < cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 40);
                const nesting = new _M0TPB8MutLocalGiE(1);
                const inner = new _M0TPB8MutLocalGOcE(-1);
                while (true) {
                  if (i.val < cs.length && nesting.val > 0) {
                    const c$2 = _M0MPC15array5Array2atGcE(cs, i.val);
                    if (c$2 === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(inner.val, 39)) {
                      i.val = i.val + 2 | 0;
                      continue;
                    }
                    let q;
                    _L$2: {
                      _L$3: {
                        const _bind$5 = inner.val;
                        if (_bind$5 === -1) {
                          if (c$2 === 39 || c$2 === 34) {
                            inner.val = c$2;
                          } else {
                            if (backtick && c$2 === 96 || !backtick && c$2 === 41) {
                              nesting.val = nesting.val - 1 | 0;
                            } else {
                              if (!backtick && c$2 === 40) {
                                nesting.val = nesting.val + 1 | 0;
                              }
                            }
                          }
                        } else {
                          const _Some = _bind$5;
                          const _q = _Some;
                          q = _q;
                          break _L$3;
                        }
                        break _L$2;
                      }
                      if (c$2 === q) {
                        inner.val = -1;
                      }
                    }
                    if (nesting.val === 0) {
                      break;
                    }
                    i.val = i.val + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                if (nesting.val !== 0) {
                  return new _M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("unclosed command substitution"));
                }
                if (!arithmetic) {
                  const _bind$5 = collect(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start, i.val)), depth + 1 | 0);
                  let _bind$6;
                  if (_bind$5.$tag === 1) {
                    const _ok = _bind$5;
                    _bind$6 = _ok._0;
                  } else {
                    return _bind$5;
                  }
                  const _bind$7 = _bind$6.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _$2 = _tmp$2;
                    if (_$2 < _bind$7) {
                      const command = _bind$6[_$2];
                      _M0MPC15array5Array4pushGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(commands, command);
                      _tmp$2 = _$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
              }
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEERP212tanglong200110dockerlint10ParseErrorE2Ok(commands);
  };
  return collect(source, 0);
}
function _M0FP212tanglong200110dockerlint10run__rules(ins) {
  const source = _M0FP212tanglong200110dockerlint11run__script(ins);
  let _tmp;
  if (_M0MPC16string6String9is__empty(source)) {
    const _tmp$2 = ins.arguments;
    const _bind = "[";
    _tmp = !_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return [];
  }
  let commands;
  let _try_err;
  _L: {
    _L$2: {
      const _tmp$2 = ins.arguments;
      const _bind = "[";
      if (_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
        const _bind$2 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(ins);
        let _tmp$3;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$3 = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err = _err._0;
          break _L$2;
        }
        commands = [_M0MPC15array5Array3mapGsRP212tanglong200110dockerlint10ShellTokenE(_tmp$3.values, (value) => new _M0TP212tanglong200110dockerlint10ShellToken("word", value, value, 1, true, false))];
      } else {
        const _bind$2 = _M0FP212tanglong200110dockerlint15shell__commands(source);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          commands = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err = _err._0;
          break _L$2;
        }
      }
      break _L;
    }
    return [new _M0TP212tanglong200110dockerlint10Diagnostic(ins.line, "ML1011", "Invalid shell quoting or substitution")];
  }
  const out = [];
  const emit = (code, message) => {
    if (!_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(out), (d) => d.code === code)) {
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, new _M0TP212tanglong200110dockerlint10Diagnostic(ins.line, code, message));
      return;
    } else {
      return;
    }
  };
  const _bind = commands.length;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp$2;
    if (index < _bind) {
      const tokens = commands[index];
      _L$2: {
        if (_M0MPC15array5Array9is__emptyGsE(tokens)) {
          break _L$2;
        }
        if (_M0MPC15array5Array2atGRPC16string10StringViewE(tokens, 0).dynamic) {
          break _L$2;
        }
        const name = _M0FP212tanglong200110dockerlint16executable__name(_M0MPC15array5Array2atGRPC16string10StringViewE(tokens, 0).value);
        const args = _M0MPC15array9ArrayView3mapGRP212tanglong200110dockerlint10ShellTokensE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(tokens, 1, undefined), (t) => t.value);
        const remaining = _M0MPC15array5Array12view_2einnerGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(commands, index + 1 | 0, undefined);
        const cleaned = (manager, path) => _M0MPB4Iter3anyGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(_M0MPC15array9ArrayView4iterGRPB5ArrayGRP212tanglong200110dockerlint10ShellTokenEE(remaining), (cmd) => {
          const values = _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10ShellTokensE(cmd, (t) => t.value);
          return manager === "apt" ? _M0FP212tanglong200110dockerlint16executable__name(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)) === "rm" && _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(values), (s) => _M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(path, 0, path.length))) : _M0FP212tanglong200110dockerlint16executable__name(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 0)) === manager && (_M0MPC15array5Array8containsGsE(values, "clean") && (path === "" || _M0MPC15array5Array8containsGsE(values, path)));
        });
        if (name === "sudo") {
          emit("DL3004", "Avoid sudo; use USER for privilege changes");
        }
        if (name === "cd") {
          emit("DL3003", "Use WORKDIR instead of RUN cd");
        }
        if (_M0MPC15array5Array8containsGsE(["ssh", "service", "shutdown", "reboot", "mount", "su"], name)) {
          emit("DL3001", "This command is usually inappropriate in a container build");
        }
        if (name === "apt") {
          emit("DL3027", "Use apt-get or apt-cache instead of interactive apt");
        }
        if (name === "apt-get" && (_M0MPC15array5Array8containsGsE(args, "install") || _M0MPC15array5Array8containsGsE(args, "update"))) {
          if (_M0MPC15array5Array8containsGsE(args, "install")) {
            const packages = _M0FP212tanglong200110dockerlint17package__operands(args, "install");
            if (_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(packages), (p) => {
              const _bind$2 = "=";
              if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
                let _tmp$3;
                const _bind$3 = "/";
                if (!_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
                  const _bind$4 = "./";
                  _tmp$3 = !_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
                } else {
                  _tmp$3 = false;
                }
                return _tmp$3;
              } else {
                return false;
              }
            })) {
              emit("DL3008", "Pin apt-get package versions with package=version");
            }
            if (!_M0FP212tanglong200110dockerlint13flag__present(args, ["-y", "--yes", "--assume-yes"]) && !_M0MPC15array5Array8containsGsE(args, "-qq")) {
              emit("DL3014", "Use a non-interactive apt-get install");
            }
            if (!_M0MPC15array5Array8containsGsE(args, "--no-install-recommends")) {
              emit("DL3015", "Avoid installing recommended packages");
            }
          }
          if (_M0MPC15array5Array8containsGsE(args, "update") && !cleaned("apt", "/var/lib/apt/lists/")) {
            emit("DL3009", "Remove apt lists in the same RUN after apt-get update");
          }
        }
        if (name === "apk" && _M0MPC15array5Array8containsGsE(args, "add")) {
          if (_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(_M0FP212tanglong200110dockerlint17package__operands(args, "add")), (p) => {
            const _bind$2 = "=";
            if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
              let _tmp$3;
              const _bind$3 = "~";
              if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
                let _tmp$4;
                const _bind$4 = "/";
                if (!_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
                  const _bind$5 = "./";
                  _tmp$4 = !_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
                } else {
                  _tmp$4 = false;
                }
                _tmp$3 = _tmp$4;
              } else {
                _tmp$3 = false;
              }
              return _tmp$3;
            } else {
              return false;
            }
          })) {
            emit("DL3018", "Pin apk package versions");
          }
          if (!_M0MPC15array5Array8containsGsE(args, "--no-cache")) {
            emit("DL3019", "Use apk add --no-cache");
          }
        }
        if (_M0MPC15array5Array8containsGsE(["yum", "dnf", "zypper"], name) && (_M0MPC15array5Array8containsGsE(args, "install") || name === "zypper" && _M0MPC15array5Array8containsGsE(args, "in"))) {
          const verb = _M0MPC15array5Array8containsGsE(args, "install") ? "install" : "in";
          const zypper = name === "zypper";
          if (!_M0FP212tanglong200110dockerlint13flag__present(args, zypper ? ["-n", "--non-interactive"] : ["-y", "--assumeyes"])) {
            emit(name === "yum" ? "DL3030" : name === "dnf" ? "DL3038" : "DL3034", "Use non-interactive package installation");
          }
          if (!cleaned(name, zypper ? "" : "all")) {
            emit(name === "yum" ? "DL3032" : name === "dnf" ? "DL3040" : "DL3036", "Clean the package cache in the same RUN after installation");
          }
          if (_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(_M0FP212tanglong200110dockerlint17package__operands(args, verb)), (p) => {
            const _bind$2 = "=";
            if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
              let _tmp$3;
              const _bind$3 = "-";
              if (!_M0MPB4Iter3anyGsE(_M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(p, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))), 1, undefined)), (part) => !_M0MPC16string10StringView9is__empty(part) && (_M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(part)), 0) >= 48 && _M0MPC15array5Array2atGcE(_M0MPC16string6String9to__array(_M0MPC16string10StringView9to__owned(part)), 0) <= 57))) {
                let _tmp$4;
                const _bind$4 = ".rpm";
                if (!_M0MPC16string6String11has__suffix(p, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
                  const _bind$5 = "$";
                  _tmp$4 = !_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
                } else {
                  _tmp$4 = false;
                }
                _tmp$3 = _tmp$4;
              } else {
                _tmp$3 = false;
              }
              return _tmp$3;
            } else {
              return false;
            }
          })) {
            emit(name === "yum" ? "DL3033" : name === "dnf" ? "DL3041" : "DL3037", "Pin package versions");
          }
        }
        if (name === "zypper" && (_M0MPC15array5Array8containsGsE(args, "dup") || _M0MPC15array5Array8containsGsE(args, "dist-upgrade"))) {
          emit("DL3035", "Avoid zypper dist-upgrade");
        }
        const is_pip = name === "pip" || (name === "pip3" || (name === "python" || name === "python3") && (args.length >= 2 && (_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0) === "-m" && _M0MPC15array5Array2atGRPC16string10StringViewE(args, 1) === "pip")));
        if (is_pip && _M0MPC15array5Array8containsGsE(args, "install")) {
          if (_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(_M0FP212tanglong200110dockerlint17package__operands(args, "install")), (p) => {
            const _bind$2 = "==";
            if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
              let _tmp$3;
              const _bind$3 = "~=";
              if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
                let _tmp$4;
                const _bind$4 = "/";
                if (!_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
                  let _tmp$5;
                  const _bind$5 = ".";
                  if (!_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                    let _tmp$6;
                    const _bind$6 = "://";
                    if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                      const _bind$7 = ".whl";
                      _tmp$6 = !_M0MPC16string6String11has__suffix(p, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
                    } else {
                      _tmp$6 = false;
                    }
                    _tmp$5 = _tmp$6;
                  } else {
                    _tmp$5 = false;
                  }
                  _tmp$4 = _tmp$5;
                } else {
                  _tmp$4 = false;
                }
                _tmp$3 = _tmp$4;
              } else {
                _tmp$3 = false;
              }
              return _tmp$3;
            } else {
              return false;
            }
          })) {
            emit("DL3013", "Pin pip package versions or use a requirements file");
          }
          if (!_M0MPC15array5Array8containsGsE(args, "--no-cache-dir")) {
            emit("DL3042", "Disable pip's download cache");
          }
        }
        if (name === "npm" && (_M0MPC15array5Array8containsGsE(args, "install") || _M0MPC15array5Array8containsGsE(args, "i"))) {
          const packages = _M0FP212tanglong200110dockerlint17package__operands(args, _M0MPC15array5Array8containsGsE(args, "install") ? "install" : "i");
          if (_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(packages), (p) => {
            let p$2;
            const _bind$2 = "@";
            if (_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
              p$2 = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(p, 1, undefined));
            } else {
              p$2 = p;
            }
            const _bind$3 = "@";
            if (!_M0MPC16string6String8contains(p$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
              let _tmp$3;
              const _bind$4 = "#";
              if (!_M0MPC16string6String8contains(p$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
                let _tmp$4;
                const _bind$5 = "://";
                if (!_M0MPC16string6String8contains(p$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                  let _tmp$5;
                  const _bind$6 = ".";
                  if (!_M0MPC16string6String11has__prefix(p$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                    const _bind$7 = "/";
                    _tmp$5 = !_M0MPC16string6String11has__prefix(p$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
                  } else {
                    _tmp$5 = false;
                  }
                  _tmp$4 = _tmp$5;
                } else {
                  _tmp$4 = false;
                }
                _tmp$3 = _tmp$4;
              } else {
                _tmp$3 = false;
              }
              return _tmp$3;
            } else {
              return false;
            }
          })) {
            emit("DL3016", "Pin npm package versions");
          }
        }
        if (name === "gem" && (_M0MPC15array5Array8containsGsE(args, "install") && (!_M0FP212tanglong200110dockerlint13flag__present(args, ["-v", "--version"]) && _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(_M0FP212tanglong200110dockerlint17package__operands(args, "install")), (p) => {
          const _bind$2 = ":";
          return !_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
        })))) {
          emit("DL3028", "Pin gem package versions");
        }
        if (name === "go" && (_M0MPC15array5Array8containsGsE(args, "install") && _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(_M0FP212tanglong200110dockerlint17package__operands(args, "install")), (p) => {
          const _bind$2 = "@";
          if (!_M0MPC16string6String8contains(p, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
            let _tmp$3;
            const _bind$3 = ".";
            if (!_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
              const _bind$4 = "/";
              _tmp$3 = !_M0MPC16string6String11has__prefix(p, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
            } else {
              _tmp$3 = false;
            }
            return _tmp$3;
          } else {
            return false;
          }
        }))) {
          emit("DL3062", "Pin go install package versions");
        }
        if (name === "wget" && !_M0FP212tanglong200110dockerlint13flag__present(args, ["-q", "--quiet", "--progress", "-nv", "--no-verbose"])) {
          emit("DL3047", "Use wget progress settings suitable for build logs");
        }
        if (name === "ln" && _M0MPC15array5Array8containsGsE(args, "/bin/sh")) {
          emit("DL4005", "Use SHELL instead of replacing /bin/sh");
        }
        break _L$2;
      }
      _tmp$2 = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP212tanglong200110dockerlint19substitution__flags(raw) {
  const cs = _M0MPC16string6String9to__array(raw);
  const quote = new _M0TPB8MutLocalGOcE(-1);
  const backticks = new _M0TPB8MutLocalGbE(false);
  const unquoted = new _M0TPB8MutLocalGbE(false);
  const double_quoted = new _M0TPB8MutLocalGbE(false);
  const single_command = new _M0TPB8MutLocalGbE(false);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < cs.length) {
      const c = _M0MPC15array5Array2atGcE(cs, i.val);
      if (c === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(quote.val, 39)) {
        i.val = i.val + 2 | 0;
        continue;
      }
      if (_M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 39)) {
        if (c === 39) {
          quote.val = -1;
        }
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 39 && _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1)) {
        quote.val = c;
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 34) {
        quote.val = _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1) ? c : -1;
        i.val = i.val + 1 | 0;
        continue;
      }
      if (c === 96 || c === 36 && ((i.val + 1 | 0) < cs.length && (_M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 40 || _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0) === 123))) {
        const opening = c === 96 ? 96 : _M0MPC15array5Array2atGcE(cs, i.val + 1 | 0);
        const closing = opening === 40 ? 41 : opening === 123 ? 125 : 96;
        const command = c === 96 || opening === 40 && !((i.val + 2 | 0) < cs.length && _M0MPC15array5Array2atGcE(cs, i.val + 2 | 0) === 40);
        const start = i.val;
        if (command) {
          backticks.val = backticks.val || c === 96;
        }
        i.val = i.val + (c === 96 ? 1 : 2) | 0;
        const depth = new _M0TPB8MutLocalGiE(1);
        const inner = new _M0TPB8MutLocalGOcE(-1);
        while (true) {
          if (i.val < cs.length && depth.val > 0) {
            const n = _M0MPC15array5Array2atGcE(cs, i.val);
            if (n === 92 && _M0IP016_24default__implPB2Eq10not__equalGOcE(inner.val, 39)) {
              i.val = i.val + 2 | 0;
              continue;
            }
            let q;
            _L: {
              _L$2: {
                const _bind = inner.val;
                if (_bind === -1) {
                  if (n === 39 || n === 34) {
                    inner.val = n;
                  } else {
                    if (n === closing) {
                      depth.val = depth.val - 1 | 0;
                    } else {
                      if (n === opening && opening !== 96) {
                        depth.val = depth.val + 1 | 0;
                      }
                    }
                  }
                } else {
                  const _Some = _bind;
                  const _q = _Some;
                  q = _q;
                  break _L$2;
                }
                break _L;
              }
              if (n === q) {
                inner.val = -1;
              }
            }
            i.val = i.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (command && c !== 96) {
          const body = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start + 2 | 0, i.val - 1 | 0)), undefined));
          const _bind = " ";
          const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter6filterGRPC16string10StringViewE(_M0MPC16string6String5split(body, new _M0TPC16string10StringView(_bind, 0, _bind.length)), (s) => !_M0MPC16string10StringView9is__empty(s)));
          let numeric_seq;
          if (parts.length >= 2) {
            let _tmp;
            const _tmp$2 = _M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0);
            const _bind$2 = "seq";
            if (_M0IPC16string10StringViewPB2Eq5equal(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
              _tmp = _M0MPB4Iter3allGRPC16string10StringViewE(_M0MPC15array9ArrayView4iterGsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(parts, 1, undefined)), (s) => _M0MPB4Iter3allGcE(_M0MPC16string10StringView4iter(s), (n) => n >= 48 && n <= 57 || (n === 46 || n === 45)));
            } else {
              _tmp = false;
            }
            numeric_seq = _tmp;
          } else {
            numeric_seq = false;
          }
          unquoted.val = unquoted.val || _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, -1) && !numeric_seq;
          double_quoted.val = double_quoted.val || _M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 34);
          single_command.val = single_command.val || (start === 0 && i.val === cs.length || start === 1 && (_M0IPC16option6OptionPB2Eq5equalGcE(quote.val, 34) && ((i.val + 1 | 0) === cs.length && _M0MPC15array5Array2atGcE(cs, i.val) === 34)));
        }
        continue;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: backticks.val, _1: unquoted.val, _2: double_quoted.val, _3: single_command.val };
}
function _M0FP212tanglong200110dockerlint18shell__diagnostics(ins) {
  const source = _M0FP212tanglong200110dockerlint11run__script(ins);
  if (_M0MPC16string6String9is__empty(source)) {
    return [];
  }
  let tokens;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FP212tanglong200110dockerlint13shell__tokens(source);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        tokens = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return [];
  }
  let commands;
  let _try_err$2;
  _L$2: {
    _L$3: {
      const _bind = _M0FP212tanglong200110dockerlint15shell__commands(source);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        commands = _ok._0;
      } else {
        const _err = _bind;
        _try_err$2 = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    return [];
  }
  const out = [];
  const emit = (code, message) => {
    if (!_M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(out), (d) => d.code === code)) {
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, new _M0TP212tanglong200110dockerlint10Diagnostic(ins.line, code, message));
      return;
    } else {
      return;
    }
  };
  const _bind = tokens.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const token = tokens[i];
      _L$3: {
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(token.kind, "word")) {
          break _L$3;
        }
        if (_M0FP212tanglong200110dockerlint19substitution__flags(token.raw)._0) {
          emit("SC2006", "Use $(...) instead of legacy backticks");
        }
        let raw;
        const _tmp$2 = token.raw;
        const _bind$2 = "=";
        if (_M0MPC16string6String8contains(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
          const _tmp$3 = token.raw;
          const _bind$3 = "=";
          raw = _M0MPC16string10StringView9to__owned(_M0MPC16option6Option6unwrapGRPC16string10StringViewE(_M0MPC15array5Array4lastGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp$3, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))))));
        } else {
          raw = token.raw;
        }
        let _tmp$3;
        const _bind$3 = "\"~/";
        if (_M0MPC16string6String11has__prefix(raw, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
          _tmp$3 = true;
        } else {
          const _bind$4 = "'~/";
          _tmp$3 = _M0MPC16string6String11has__prefix(raw, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
        }
        if (_tmp$3) {
          emit("SC2088", "Tilde does not expand inside quotes; use $HOME");
        }
        if (i > 0 && (_M0MPC15array5Array2atGRPC16string10StringViewE(tokens, i - 1 | 0).kind === "redirect" && _M0FP212tanglong200110dockerlint19substitution__flags(token.raw)._1)) {
          emit("SC2046", "Quote command substitution to prevent word splitting");
        }
        break _L$3;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = commands.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const command = commands[_];
      _L$3: {
        const name = _M0FP212tanglong200110dockerlint16executable__name(_M0MPC15array5Array2atGRPC16string10StringViewE(command, 0).value);
        if (_M0MPC15array5Array2atGRPC16string10StringViewE(command, 0).dynamic) {
          break _L$3;
        }
        const pure_echo = name === "echo" && (command.length === 2 && _M0FP212tanglong200110dockerlint19substitution__flags(_M0MPC15array5Array2atGRPC16string10StringViewE(command, 1).raw)._3);
        if (pure_echo) {
          emit("SC2005", "Execute the command directly instead of echoing its output");
        }
        const end_options = new _M0TPB8MutLocalGbE(false);
        const _bind$3 = 1;
        const _bind$4 = command.length;
        let _tmp$3 = _bind$3;
        while (true) {
          const i = _tmp$3;
          if (i < _bind$4) {
            const token = _M0MPC15array5Array2atGRPC16string10StringViewE(command, i);
            const flags = _M0FP212tanglong200110dockerlint19substitution__flags(token.raw);
            if (flags._0) {
              emit("SC2006", "Use $(...) instead of legacy backticks");
            }
            if (!pure_echo && (!_M0MPC15array5Array8containsGsE(["case", "for", "[[", "local", "declare", "typeset"], name) && flags._1)) {
              emit("SC2046", "Quote command substitution to prevent word splitting");
            }
            if (name === "trap" && (i === 1 && flags._2)) {
              emit("SC2064", "Use single quotes to defer expansion until the trap runs");
            }
            if (token.value === "--") {
              end_options.val = true;
            }
            let _tmp$4;
            if (_M0MPC15array5Array8containsGsE(["rm", "cp", "mv"], name)) {
              let _tmp$5;
              if (!end_options.val) {
                let _tmp$6;
                if (!token.quoted) {
                  let _tmp$7;
                  const _tmp$8 = token.raw;
                  const _bind$5 = "*";
                  if (_M0MPC16string6String11has__prefix(_tmp$8, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
                    _tmp$7 = true;
                  } else {
                    const _tmp$9 = token.raw;
                    const _bind$6 = "?";
                    _tmp$7 = _M0MPC16string6String11has__prefix(_tmp$9, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
                  }
                  _tmp$6 = _tmp$7;
                } else {
                  _tmp$6 = false;
                }
                _tmp$5 = _tmp$6;
              } else {
                _tmp$5 = false;
              }
              _tmp$4 = _tmp$5;
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              emit("SC2035", "Use ./* or -- to prevent glob matches from becoming options");
            }
            _tmp$3 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L$3;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP212tanglong200110dockerlint15shell__pipeline(source) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint13shell__tokens(source);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(_tmp), (t) => t.kind === "operator" && (t.value === "|" || t.value === "|&"));
  }
  return false;
}
function _M0FP212tanglong200110dockerlint4lint(instructions) {
  const out = [];
  const report = (line, code, message) => {
    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, new _M0TP212tanglong200110dockerlint10Diagnostic(line, code, message));
  };
  const _bind = [];
  const stages = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  const stage = new _M0TPB8MutLocalGiE(-1);
  const pipefail = new _M0TPB8MutLocalGbE(false);
  const _bind$2 = [];
  const stage_shells = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const stage_posix = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$3, 0, 0), undefined);
  const posix_shell = new _M0TPB8MutLocalGbE(true);
  const stage_alias = new _M0TPB8MutLocalGOsE(undefined);
  const last_user = new _M0TPB8MutLocalGORP212tanglong200110dockerlint11InstructionE(undefined);
  const report_user = () => {
    let ins;
    _L: {
      const _bind$4 = last_user.val;
      if (_bind$4 === undefined) {
        return;
      } else {
        const _Some = _bind$4;
        const _ins = _Some;
        ins = _ins;
        break _L;
      }
    }
    const _tmp = ins.arguments;
    const _bind$4 = ":";
    const name = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC15array5Array2atGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(_tmp, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))), 0), undefined));
    if (name === "root" || name === "0") {
      report(ins.line, "DL3002", "Use a non-root runtime user");
      return;
    } else {
      return;
    }
  };
  const _bind$4 = [];
  const counts = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined);
  const known = ["FROM", "RUN", "CMD", "LABEL", "MAINTAINER", "EXPOSE", "ENV", "ADD", "COPY", "ENTRYPOINT", "VOLUME", "USER", "WORKDIR", "ARG", "ONBUILD", "STOPSIGNAL", "HEALTHCHECK", "SHELL"];
  const _bind$5 = instructions.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const ins = instructions[_];
      _L: {
        const args = _M0FP212tanglong200110dockerlint5words(ins.arguments);
        if (!_M0MPC15array5Array8containsGsE(known, ins.name)) {
          report(ins.line, "ML1001", `Unknown instruction: ${ins.name}`);
          break _L;
        }
        if (ins.name === "FROM") {
          report_user();
          last_user.val = undefined;
          let stage_name;
          _L$2: {
            _L$3: {
              const _bind$6 = stage_alias.val;
              if (_bind$6 === undefined) {
              } else {
                const _Some = _bind$6;
                const _stage_name = _Some;
                stage_name = _stage_name;
                break _L$3;
              }
              break _L$2;
            }
            _M0MPB3Map3setGsbE(stage_shells, stage_name, pipefail.val);
            _M0MPB3Map3setGsbE(stage_posix, stage_name, posix_shell.val);
          }
          stage_alias.val = undefined;
          stage.val = stage.val + 1 | 0;
          pipefail.val = false;
          _M0MPB3Map5clearGsiE(counts);
          let offset;
          let _tmp$2;
          if (args.length > 0) {
            const _tmp$3 = _M0MPC15array5Array2atGRPC16string10StringViewE(args, 0);
            const _bind$6 = "--platform=";
            _tmp$2 = _M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            offset = 1;
          } else {
            offset = 0;
          }
          if (args.length !== (offset + 1 | 0) && !(args.length === (offset + 3 | 0) && _M0MPC16string6String9to__upper(_M0MPC15array5Array2atGRPC16string10StringViewE(args, offset + 1 | 0)) === "AS")) {
            report(ins.line, "ML1002", "Malformed FROM instruction");
            break _L;
          }
          const base = _M0MPC15array5Array2atGRPC16string10StringViewE(args, offset);
          const base_stage = _M0MPB3Map8containsGsiE(stages, _M0MPC16string6String9to__lower(base));
          pipefail.val = _M0MPC16option6Option10unwrap__orGbE(_M0MPB3Map3getGsbE(stage_shells, _M0MPC16string6String9to__lower(base)), false);
          posix_shell.val = _M0MPC16option6Option10unwrap__orGbE(_M0MPB3Map3getGsbE(stage_posix, _M0MPC16string6String9to__lower(base)), true);
          let _tmp$3;
          if (!base_stage) {
            let _tmp$4;
            if (_M0IP016_24default__implPB2Eq10not__equalGsE(base, "scratch")) {
              let _tmp$5;
              const _bind$6 = "$";
              if (!_M0MPC16string6String8contains(base, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                const _bind$7 = "@";
                _tmp$5 = !_M0MPC16string6String8contains(base, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
              } else {
                _tmp$5 = false;
              }
              _tmp$4 = _tmp$5;
            } else {
              _tmp$4 = false;
            }
            _tmp$3 = _tmp$4;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            const _bind$6 = "/";
            const last = _M0MPC16string10StringView9to__owned(_M0MPC16option6Option6unwrapGRPC16string10StringViewE(_M0MPC15array5Array4lastGRPC16string10StringViewE(_M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(base, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))))));
            const _bind$7 = ":";
            if (!_M0MPC16string6String8contains(last, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
              report(ins.line, "DL3006", "Pin the base image version");
            } else {
              const _bind$8 = ":latest";
              if (_M0MPC16string6String11has__suffix(last, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                report(ins.line, "DL3007", "Avoid the latest image tag");
              }
            }
          }
          if (args.length === (offset + 3 | 0)) {
            const name = _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(args, offset + 2 | 0));
            stage_alias.val = name;
            if (_M0MPB3Map8containsGsiE(stages, name)) {
              report(ins.line, "DL3024", "Duplicate build stage name");
            }
            _M0MPB3Map3setGsiE(stages, name, stage.val);
          }
          break _L;
        }
        if (stage.val < 0 && _M0IP016_24default__implPB2Eq10not__equalGsE(ins.name, "ARG")) {
          report(ins.line, "ML1003", "Instruction before first FROM");
        }
        if (_M0MPC15array5Array8containsGsE(["COPY", "ADD"], ins.name)) {
          let parsed;
          let _try_err;
          _L$2: {
            _L$3: {
              const _bind$6 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(ins);
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                parsed = _ok._0;
              } else {
                const _err = _bind$6;
                _try_err = _err._0;
                break _L$3;
              }
              break _L$2;
            }
            parsed = undefined;
          }
          let a;
          _L$3: {
            _L$4: {
              if (parsed === undefined) {
              } else {
                const _Some = parsed;
                const _a = _Some;
                a = _a;
                break _L$4;
              }
              break _L$3;
            }
            if (a.values.length < 2) {
              report(ins.line, "ML1007", "COPY/ADD require source and destination");
            } else {
              let _tmp$2;
              if (a.values.length > 2) {
                const _tmp$3 = _M0MPC15array5Array2atGRPC16string10StringViewE(a.values, a.values.length - 1 | 0);
                const _bind$6 = "/";
                _tmp$2 = !_M0MPC16string6String11has__suffix(_tmp$3, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
              } else {
                _tmp$2 = false;
              }
              if (_tmp$2) {
                report(ins.line, "DL3021", "Multiple sources require a destination ending in /");
              }
            }
          }
        }
        _L$2: {
          _L$3: {
            const _bind$6 = ins.name;
            switch (_bind$6) {
              case "USER": {
                last_user.val = ins;
                break;
              }
              case "ADD": {
                let inputs;
                let _try_err;
                _L$4: {
                  _L$5: {
                    const _bind$7 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(ins);
                    let _tmp$2;
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _tmp$2 = _ok._0;
                    } else {
                      const _err = _bind$7;
                      _try_err = _err._0;
                      break _L$5;
                    }
                    inputs = _tmp$2.values;
                    break _L$4;
                  }
                  inputs = [];
                }
                const sources = _M0MPC15array5Array9is__emptyGsE(inputs) ? [] : _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(inputs, 0, inputs.length - 1 | 0));
                const special = _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE(sources), (s) => {
                  const _bind$7 = "http://";
                  if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                    return true;
                  } else {
                    let _tmp$2;
                    const _bind$8 = "https://";
                    if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
                      _tmp$2 = true;
                    } else {
                      let _tmp$3;
                      const _bind$9 = "git://";
                      if (_M0MPC16string6String11has__prefix(s, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
                        _tmp$3 = true;
                      } else {
                        _tmp$3 = _M0MPB4Iter3anyGsE(_M0MPC15array5Array4iterGsE([".tar", ".tar.gz", ".tgz", ".tar.bz2", ".tar.xz", ".txz", ".tbz2"]), (ext) => _M0MPC16string6String11has__suffix(s, new _M0TPC16string10StringView(ext, 0, ext.length)));
                      }
                      _tmp$2 = _tmp$3;
                    }
                    return _tmp$2;
                  }
                });
                if (!special) {
                  report(ins.line, "DL3020", "Prefer COPY when ADD extraction or URL semantics are not needed");
                }
                break;
              }
              case "MAINTAINER": {
                report(ins.line, "DL4000", "MAINTAINER is deprecated; use LABEL");
                break;
              }
              case "WORKDIR": {
                let _tmp$2;
                const _tmp$3 = ins.arguments;
                const _bind$7 = "/";
                if (!_M0MPC16string6String11has__prefix(_tmp$3, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                  const _tmp$4 = ins.arguments;
                  const _bind$8 = "$";
                  _tmp$2 = !_M0MPC16string6String11has__prefix(_tmp$4, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length));
                } else {
                  _tmp$2 = false;
                }
                if (_tmp$2) {
                  report(ins.line, "DL3000", "Use an absolute WORKDIR");
                }
                break;
              }
              case "SHELL": {
                let form;
                let _try_err$2;
                _L$5: {
                  _L$6: {
                    const _bind$8 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(ins);
                    if (_bind$8.$tag === 1) {
                      const _ok = _bind$8;
                      form = _ok._0;
                    } else {
                      const _err = _bind$8;
                      _try_err$2 = _err._0;
                      break _L$6;
                    }
                    break _L$5;
                  }
                  form = undefined;
                }
                let a;
                _L$6: {
                  _L$7: {
                    if (form === undefined) {
                      report(ins.line, "ML1006", "SHELL requires JSON exec form");
                    } else {
                      const _Some = form;
                      const _a = _Some;
                      a = _a;
                      break _L$7;
                    }
                    break _L$6;
                  }
                  if (!a.json_form) {
                    report(ins.line, "ML1006", "SHELL requires JSON exec form");
                  }
                  pipefail.val = _M0MPC15array5Array8containsGsE(a.values, "pipefail");
                  posix_shell.val = !_M0MPC15array5Array9is__emptyGsE(a.values) && _M0MPC15array5Array8containsGsE(["sh", "bash", "dash", "ash", "ksh", "zsh"], _M0FP212tanglong200110dockerlint16executable__name(_M0MPC15array5Array2atGRPC16string10StringViewE(a.values, 0)));
                }
                break;
              }
              case "ONBUILD": {
                if (args.length > 0 && _M0MPC15array5Array8containsGsE(["ONBUILD", "FROM", "MAINTAINER"], _M0MPC16string6String9to__upper(_M0MPC15array5Array2atGRPC16string10StringViewE(args, 0)))) {
                  report(ins.line, "DL3043", "Instruction cannot be used as an ONBUILD trigger");
                }
                break;
              }
              case "RUN": {
                if (posix_shell.val) {
                  const _bind$8 = _M0FP212tanglong200110dockerlint18shell__diagnostics(ins);
                  const _bind$9 = _bind$8.length;
                  let _tmp$4 = 0;
                  while (true) {
                    const _$2 = _tmp$4;
                    if (_$2 < _bind$9) {
                      const diagnostic = _bind$8[_$2];
                      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, diagnostic);
                      _tmp$4 = _$2 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                }
                const _bind$8 = _M0FP212tanglong200110dockerlint10run__rules(ins);
                const _bind$9 = _bind$8.length;
                let _tmp$4 = 0;
                while (true) {
                  const _$2 = _tmp$4;
                  if (_$2 < _bind$9) {
                    const diagnostic = _bind$8[_$2];
                    _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, diagnostic);
                    _tmp$4 = _$2 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                const script = _M0FP212tanglong200110dockerlint11run__script(ins);
                let _tmp$5;
                if (_M0FP212tanglong200110dockerlint15shell__pipeline(script)) {
                  let _tmp$6;
                  if (!pipefail.val) {
                    const _tmp$7 = ins.arguments;
                    const _bind$10 = "[";
                    _tmp$6 = !_M0MPC16string6String11has__prefix(_tmp$7, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length));
                  } else {
                    _tmp$6 = false;
                  }
                  _tmp$5 = _tmp$6;
                } else {
                  _tmp$5 = false;
                }
                if (_tmp$5) {
                  report(ins.line, "DL4006", "Shell pipeline may hide command failures; consider pipefail");
                }
                break;
              }
              case "CMD": {
                break _L$3;
              }
              case "ENTRYPOINT": {
                break _L$3;
              }
              case "COPY": {
                const _bind$10 = args.length;
                let _tmp$6 = 0;
                while (true) {
                  const _$2 = _tmp$6;
                  if (_$2 < _bind$10) {
                    const arg = args[_$2];
                    const _bind$11 = "--from=";
                    if (_M0MPC16string6String11has__prefix(arg, new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length))) {
                      const name = _M0MPC16string6String9to__lower(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(arg, 7, undefined)));
                      let index;
                      _L$7: {
                        _L$8: {
                          const _bind$12 = _M0MPB3Map3getGsiE(stages, name);
                          if (_bind$12 === undefined) {
                            const index$2 = new _M0TPB8MutLocalGiE(0);
                            const numeric = new _M0TPB8MutLocalGbE(_M0IP016_24default__implPB2Eq10not__equalGsE(name, ""));
                            const _it = _M0MPC16string6String4iter(name);
                            while (true) {
                              let c;
                              _L$9: {
                                const _bind$13 = _M0MPB4Iter4nextGcE(_it);
                                if (_bind$13 === -1) {
                                  break;
                                } else {
                                  const _Some = _bind$13;
                                  const _c = _Some;
                                  c = _c;
                                  break _L$9;
                                }
                              }
                              if (c < 48 || c > 57) {
                                numeric.val = false;
                              } else {
                                if (index$2.val < 100000) {
                                  index$2.val = ((Math.imul(index$2.val, 10) | 0) + c | 0) - 48 | 0;
                                }
                              }
                              continue;
                            }
                            if (numeric.val && index$2.val >= stage.val) {
                              report(ins.line, "DL3022", "COPY refers to unavailable stage index");
                            }
                          } else {
                            const _Some = _bind$12;
                            const _index = _Some;
                            index = _index;
                            break _L$8;
                          }
                          break _L$7;
                        }
                        if (index === stage.val) {
                          report(ins.line, "DL3023", "COPY cannot refer to its own stage");
                        }
                      }
                    }
                    _tmp$6 = _$2 + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                break;
              }
            }
            break _L$2;
          }
          const _tmp$2 = ins.arguments;
          const _bind$6 = "[";
          if (!_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
            report(ins.line, "DL3025", "Prefer JSON exec form for signal forwarding");
          }
          const count = _M0MPC16option6Option10unwrap__orGiE(_M0MPB3Map3getGsiE(counts, ins.name), 0) + 1 | 0;
          _M0MPB3Map3setGsiE(counts, ins.name, count);
          if (count > 1) {
            report(ins.line, ins.name === "CMD" ? "DL4003" : "DL4004", `Earlier ${ins.name} in this stage is overridden`);
          }
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  report_user();
  let _try_err;
  _L: {
    _L$2: {
      const _bind$6 = _M0FP212tanglong200110dockerlint15analyze__stages(instructions);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        const _err = _bind$6;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    let line;
    _L$3: {
      _L$4: {
        if (_try_err.$tag === 0) {
          const _StageCycle = _try_err;
          const _line = _StageCycle._0;
          line = _line;
          break _L$4;
        }
        break _L$3;
      }
      report(line, "ML1010", "Build stages have a circular dependency");
    }
  }
  if (stage.val < 0) {
    report(1, "ML1005", "Dockerfile has no FROM stage");
  }
  const _bind$6 = _M0FP212tanglong200110dockerlint15metadata__rules(instructions);
  const _bind$7 = _bind$6.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$7) {
      const diagnostic = _bind$6[_];
      _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(out, diagnostic);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGRP212tanglong200110dockerlint10DiagnosticE(out, (a, b) => $compare_int(a.line, b.line));
  return out;
}
function _M0FP212tanglong200110dockerlint13check_2einner(source, ignore_codes, honor_inline, trusted_registries) {
  const _bind = _M0FP212tanglong200110dockerlint5parse(source);
  let instructions;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    instructions = _ok._0;
  } else {
    return _bind;
  }
  const global_codes = _M0MPC15array5Array4copyGsE(ignore_codes);
  const _bind$2 = [];
  const local_codes = _M0MPB3Map3MapGiRPB5ArrayGsEE(new _M0TPB9ArrayViewGUiRPB5ArrayGsEEE(_bind$2, 0, 0), undefined);
  if (honor_inline) {
    const cursor = new _M0TPB8MutLocalGiE(0);
    const _bind$3 = "\n";
    const _bind$4 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(source, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
    const _bind$5 = _bind$4.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$5) {
        const raw = _bind$4[i];
        _L: {
          const line = i + 1 | 0;
          while (true) {
            if (cursor.val < instructions.length && _M0MPC15array5Array2atGRPC16string10StringViewE(instructions, cursor.val).end_line < line) {
              cursor.val = cursor.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (cursor.val < instructions.length && _M0MPC15array5Array2atGRPC16string10StringViewE(instructions, cursor.val).line <= line) {
            break _L;
          }
          const comment = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(raw, undefined));
          const global_prefix = "# hadolint global ignore=";
          const local_prefix = "# hadolint ignore=";
          if (_M0MPC16string6String11has__prefix(comment, new _M0TPC16string10StringView(global_prefix, 0, global_prefix.length))) {
            const _bind$6 = _M0FP212tanglong200110dockerlint12ignore__list(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(comment, global_prefix.length, undefined)));
            let _bind$7;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _bind$7 = _ok._0;
            } else {
              return _bind$6;
            }
            const _bind$8 = _bind$7.length;
            let _tmp$2 = 0;
            while (true) {
              const _ = _tmp$2;
              if (_ < _bind$8) {
                const code = _bind$7[_];
                _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(global_codes, code);
                _tmp$2 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            if (_M0MPC16string6String11has__prefix(comment, new _M0TPC16string10StringView(local_prefix, 0, local_prefix.length)) && cursor.val < instructions.length) {
              const target = _M0MPC15array5Array2atGRPC16string10StringViewE(instructions, cursor.val).line;
              const codes = _M0MPC16option6Option10unwrap__orGRPB5ArrayGsEE(_M0MPB3Map3getGiRPB5ArrayGsEE(local_codes, target), []);
              const _bind$6 = _M0FP212tanglong200110dockerlint12ignore__list(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(comment, local_prefix.length, undefined)));
              let _bind$7;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _bind$7 = _ok._0;
              } else {
                return _bind$6;
              }
              const _bind$8 = _bind$7.length;
              let _tmp$2 = 0;
              while (true) {
                const _ = _tmp$2;
                if (_ < _bind$8) {
                  const code = _bind$7[_];
                  _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(codes, code);
                  _tmp$2 = _ + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPB3Map3setGiRPB5ArrayGsEE(local_codes, target, codes);
            }
          }
          break _L;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const diagnostics = _M0FP212tanglong200110dockerlint4lint(instructions);
  if (!_M0MPC15array5Array9is__emptyGsE(trusted_registries) && !_M0MPC15array5Array8containsGsE(trusted_registries, "*")) {
    const aliases = [];
    const _bind$3 = instructions.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$3) {
        const ins = instructions[_];
        _L: {
          if (_M0IP016_24default__implPB2Eq10not__equalGsE(ins.name, "FROM")) {
            break _L;
          }
          const _bind$4 = _M0MP212tanglong200110dockerlint11Instruction16split__arguments(ins);
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            return _bind$4;
          }
          const values = _tmp$2.values;
          const base = _M0MPC15array5Array2atGRPC16string10StringViewE(values, 0);
          let _tmp$3;
          if (!_M0MPC15array5Array8containsGsE(aliases, _M0MPC16string6String9to__lower(base))) {
            let _tmp$4;
            if (_M0IP016_24default__implPB2Eq10not__equalGsE(base, "scratch")) {
              const _bind$5 = "$";
              _tmp$4 = !_M0MPC16string6String8contains(base, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
            } else {
              _tmp$4 = false;
            }
            _tmp$3 = _tmp$4;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            const _bind$5 = "/";
            const parts = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(base, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
            const first = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGRPC16string10StringViewE(parts, 0));
            let registry;
            let _tmp$4;
            if (parts.length > 1) {
              let _tmp$5;
              const _bind$6 = ".";
              if (_M0MPC16string6String8contains(first, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                _tmp$5 = true;
              } else {
                let _tmp$6;
                const _bind$7 = ":";
                if (_M0MPC16string6String8contains(first, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
                  _tmp$6 = true;
                } else {
                  _tmp$6 = first === "localhost";
                }
                _tmp$5 = _tmp$6;
              }
              _tmp$4 = _tmp$5;
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              registry = first;
            } else {
              registry = "docker.io";
            }
            if (!_M0MPC15array5Array8containsGsE(trusted_registries, registry)) {
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(diagnostics, new _M0TP212tanglong200110dockerlint10Diagnostic(ins.line, "DL3026", `Image registry is not trusted: ${registry}`));
            }
          }
          if (values.length === 3 && _M0MPC16string6String9to__upper(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 1)) === "AS") {
            _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(aliases, _M0MPC16string6String9to__lower(_M0MPC15array5Array2atGRPC16string10StringViewE(values, 2)));
          }
          break _L;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP212tanglong200110dockerlint10DiagnosticERP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC15array5Array6filterGRP212tanglong200110dockerlint10DiagnosticE(diagnostics, (d) => !_M0MPC15array5Array8containsGsE(global_codes, d.code) && !_M0MPC15array5Array8containsGsE(_M0MPC16option6Option10unwrap__orGRPB5ArrayGsEE(_M0MPB3Map3getGiRPB5ArrayGsEE(local_codes, d.line), []), d.code)));
}
function _M0FP212tanglong200110dockerlint5check(source, ignore_codes$46$opt, honor_inline$46$opt, trusted_registries$46$opt) {
  let ignore_codes;
  if (ignore_codes$46$opt.$tag === 1) {
    const _Some = ignore_codes$46$opt;
    ignore_codes = _Some._0;
  } else {
    ignore_codes = [];
  }
  const honor_inline = honor_inline$46$opt === -1 ? true : honor_inline$46$opt;
  let trusted_registries;
  if (trusted_registries$46$opt.$tag === 1) {
    const _Some = trusted_registries$46$opt;
    trusted_registries = _Some._0;
  } else {
    trusted_registries = [];
  }
  return _M0FP212tanglong200110dockerlint13check_2einner(source, ignore_codes, honor_inline, trusted_registries);
}
function _M0MP212tanglong200110dockerlint10Diagnostic8severity(self) {
  let _tmp;
  const _tmp$2 = self.code;
  const _bind = "ML";
  if (_M0MPC16string6String11has__prefix(_tmp$2, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    _tmp = true;
  } else {
    _tmp = _M0MPC15array5Array8containsGsE(["DL3000", "DL3004", "DL3011", "DL3012", "DL3020", "DL3021", "DL3023", "DL3024", "DL3026", "DL3043", "DL3044", "DL4000", "DL4004"], self.code);
  }
  if (_tmp) {
    return "error";
  } else {
    return _M0MPC15array5Array8containsGsE(["DL3001", "DL3009", "DL3015", "DL3019", "DL3047", "DL3049", "DL3050", "DL3059", "DL3060", "DL3066", "SC2035"], self.code) ? "info" : _M0MPC15array5Array8containsGsE(["DL3048", "SC2005", "SC2006"], self.code) ? "style" : "warning";
  }
}
function _M0FP212tanglong200110dockerlint20report__json_2einner(source, filename, honor_inline) {
  const _bind = _M0FP212tanglong200110dockerlint5check(source, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, honor_inline, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const entries = _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10DiagnosticRPB3MapGsRPB4JsonEE(_tmp, (d) => {
    const _bind$2 = [{ _0: "file", _1: _M0IPC16string6StringPB6ToJson8to__json(filename) }, { _0: "line", _1: _M0IPC13int3IntPB6ToJson8to__json(d.line) }, { _0: "code", _1: _M0IPC16string6StringPB6ToJson8to__json(d.code) }, { _0: "message", _1: _M0IPC16string6StringPB6ToJson8to__json(d.message) }, { _0: "level", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0MP212tanglong200110dockerlint10Diagnostic8severity(d)) }];
    return _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 5), undefined);
  });
  return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC14json4Json17stringify_2einner(_M0IPC15array5ArrayPB6ToJson8to__jsonGRPB3MapGsRPB4JsonEE(entries), false, 0, undefined));
}
function _M0FP212tanglong200110dockerlint21build__impact_2einner(source, target, changed_lines) {
  const _bind = _M0FP212tanglong200110dockerlint5parse(source);
  let instructions;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    instructions = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP212tanglong200110dockerlint15analyze__stages(instructions);
  let stages;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    stages = _ok._0;
  } else {
    return _bind$2;
  }
  if (_M0MPC15array5Array9is__emptyGsE(stages)) {
    return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("no build stages"));
  }
  if (changed_lines.length > 10000) {
    return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("changed line count limit"));
  }
  let edges;
  let uncertainties;
  _L: {
    const _bind$3 = _M0FP212tanglong200110dockerlint12build__edges(instructions, stages);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    const _edges = _bind$4._0;
    const _uncertainties = _bind$4._1;
    edges = _edges;
    uncertainties = _uncertainties;
    break _L;
  }
  let selected;
  if (_M0MPC16string6String9is__empty(target)) {
    selected = stages.length - 1 | 0;
  } else {
    const _bind$3 = _M0FP212tanglong200110dockerlint16stage__reference(target, stages);
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      return _bind$3;
    }
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(`unknown target: ${target}`));
    } else {
      const _Some = _bind$4;
      const _index = _Some;
      selected = _index;
    }
  }
  const changed_stages = [];
  const conservative = new _M0TPB8MutLocalGbE(!_M0MPC15array5Array9is__emptyGsE(uncertainties));
  const _bind$3 = "\n";
  const line_count = _M0MPB4Iter5countGRPC16string10StringViewE(_M0MPC16string6String5split(source, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
  const _bind$4 = changed_lines.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const line = changed_lines[_];
      if (line <= 0 || line > line_count) {
        return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("changed line out of range"));
      }
      const current = new _M0TPB8MutLocalGiE(-1);
      const found = new _M0TPB8MutLocalGbE(false);
      const _bind$5 = instructions.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$5) {
          const instruction = instructions[_$2];
          if (instruction.name === "FROM") {
            current.val = current.val + 1 | 0;
          }
          if (line >= instruction.line && line <= instruction.end_line) {
            found.val = true;
            if (current.val < 0 || instruction.name === "FROM") {
              conservative.val = true;
              _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(uncertainties, new _M0TP212tanglong200110dockerlint16BuildUncertainty(line, "global or stage declaration changed"));
            } else {
              if (!_M0MPC15array5Array8containsGiE(changed_stages, current.val)) {
                _M0MPC15array5Array4pushGiE(changed_stages, current.val);
              }
            }
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!found.val) {
        conservative.val = true;
        _M0MPC15array5Array4pushGRP212tanglong200110dockerlint7HereDocE(uncertainties, new _M0TP212tanglong200110dockerlint16BuildUncertainty(line, "line outside a parsed instruction; directive/deletion impact unknown"));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const required = [];
  const collect = (index) => {
    if (_M0MPC15array5Array8containsGiE(required, index)) {
      return undefined;
    }
    const _bind$5 = _M0MPC15array5Array2atGRPC16string10StringViewE(stages, index).dependencies;
    const _bind$6 = _bind$5.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$6) {
        const dependency = _bind$5[_];
        collect(dependency);
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array4pushGiE(required, index);
  };
  collect(selected);
  const _bind$5 = [];
  const witnesses = _M0MPB3Map3MapGiRPB5ArrayGiEE(new _M0TPB9ArrayViewGUiRPB5ArrayGiEEE(_bind$5, 0, 0), undefined);
  const witness = (index) => {
    let path;
    _L$2: {
      _L$3: {
        const _bind$6 = _M0MPB3Map3getGiRPB5ArrayGiEE(witnesses, index);
        if (_bind$6.$tag === 1) {
          const _Some = _bind$6;
          const _path = _Some._0;
          path = _path;
          break _L$3;
        }
        break _L$2;
      }
      return path;
    }
    if (_M0MPC15array5Array8containsGiE(changed_stages, index)) {
      _M0MPB3Map3setGiRPB5ArrayGiEE(witnesses, index, [index]);
      return [index];
    }
    const _bind$6 = _M0MPC15array5Array2atGRPC16string10StringViewE(stages, index).dependencies;
    const _bind$7 = _bind$6.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$7) {
        const dependency = _bind$6[_];
        const tail = witness(dependency);
        if (!_M0MPC15array5Array9is__emptyGiE(tail)) {
          const path$2 = [index];
          const _bind$8 = tail.length;
          let _tmp$3 = 0;
          while (true) {
            const _$2 = _tmp$3;
            if (_$2 < _bind$8) {
              const item = tail[_$2];
              _M0MPC15array5Array4pushGiE(path$2, item);
              _tmp$3 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPB3Map3setGiRPB5ArrayGiEE(witnesses, index, path$2);
          return path$2;
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPB3Map3setGiRPB5ArrayGiEE(witnesses, index, []);
    return [];
  };
  const targets = _M0MPC15array5Array3mapGRP212tanglong200110dockerlint5StageRP212tanglong200110dockerlint12TargetImpactE(stages, (stage) => {
    const path = witness(stage.index);
    return new _M0TP212tanglong200110dockerlint12TargetImpact(stage.index, !_M0MPC15array5Array9is__emptyGiE(changed_lines) && (conservative.val || !_M0MPC15array5Array9is__emptyGiE(path)), path);
  });
  return new _M0DTPC16result6ResultGRP212tanglong200110dockerlint11BuildImpactRP212tanglong200110dockerlint10ParseErrorE2Ok(new _M0TP212tanglong200110dockerlint11BuildImpact(stages, edges, selected, required, changed_stages, targets, conservative.val, uncertainties));
}
function _M0FP212tanglong200110dockerlint13json__strings(value) {
  let items;
  _L: {
    if (value.$tag === 5) {
      const _Array = value;
      const _items = _Array._0;
      items = _items;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGsERP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("expected string array"));
    }
  }
  return _M0MPC15array5Array3mapGRPB4JsonsEHRP212tanglong200110dockerlint10ParseError(items, (item) => {
    let s;
    _L$2: {
      if (item.$tag === 4) {
        const _String = item;
        const _s = _String._0;
        s = _s;
        break _L$2;
      } else {
        return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("expected string array"));
      }
    }
    return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok(s);
  });
}
function _M0FP212tanglong200110dockerlint26configured__report_2einner(source, config, filename) {
  let json;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(config, 0, config.length), 1024);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        json = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid JSON configuration"));
  }
  let options;
  if (json.$tag === 6) {
    const _Object = json;
    const _items = _Object._0;
    options = _items;
  } else {
    return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("configuration must be an object"));
  }
  const ignored = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const honor_inline = new _M0TPB8MutLocalGbE(true);
  const registries = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const _bind = [];
  const overrides = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(options);
  while (true) {
    let key;
    let value;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L$2;
      }
    }
    switch (key) {
      case "ignore": {
        const _bind$2 = _M0FP212tanglong200110dockerlint13json__strings(value);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        ignored.val = _tmp;
        const _bind$3 = ignored.val;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$4) {
            const code = _bind$3[_];
            let _tmp$3;
            if (code.length !== 6) {
              _tmp$3 = true;
            } else {
              const _bind$5 = _M0FP212tanglong200110dockerlint12ignore__list(code);
              let _tmp$4;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _tmp$4 = _ok._0;
              } else {
                return _bind$5;
              }
              _tmp$3 = _tmp$4.length !== 1;
            }
            if (_tmp$3) {
              return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("expected one rule code"));
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      case "honorInline": {
        switch (value.$tag) {
          case 1: {
            honor_inline.val = true;
            break;
          }
          case 2: {
            honor_inline.val = false;
            break;
          }
          default: {
            return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("honorInline must be boolean"));
          }
        }
        break;
      }
      case "trustedRegistries": {
        const _bind$5 = _M0FP212tanglong200110dockerlint13json__strings(value);
        let _tmp$3;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$3 = _ok._0;
        } else {
          return _bind$5;
        }
        registries.val = _tmp$3;
        break;
      }
      case "severity": {
        let values;
        if (value.$tag === 6) {
          const _Object = value;
          const _items = _Object._0;
          values = _items;
        } else {
          return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("severity must be an object"));
        }
        const _it$2 = _M0MPB3Map5iter2GsRPB4JsonE(values);
        while (true) {
          let code;
          let level;
          _L$3: {
            const _bind$6 = _M0MPB5Iter24nextGsRPB4JsonE(_it$2);
            if (_bind$6 === undefined) {
              break;
            } else {
              const _Some = _bind$6;
              const _x = _Some;
              const _code = _x._0;
              const _level = _x._1;
              code = _code;
              level = _level;
              break _L$3;
            }
          }
          let _tmp$4;
          if (code.length !== 6) {
            _tmp$4 = true;
          } else {
            const _bind$6 = _M0FP212tanglong200110dockerlint12ignore__list(code);
            let _tmp$5;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$5 = _ok._0;
            } else {
              return _bind$6;
            }
            _tmp$4 = _tmp$5.length !== 1;
          }
          if (_tmp$4) {
            return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("expected one rule code"));
          }
          let level$2;
          if (level.$tag === 4) {
            const _String = level;
            const _s = _String._0;
            level$2 = _s;
          } else {
            return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("severity must be a string"));
          }
          if (!_M0MPC15array5Array8containsGsE(["error", "warning", "info", "style", "ignore"], level$2)) {
            return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid severity"));
          }
          _M0MPB3Map3setGssE(overrides, code, level$2);
          continue;
        }
        break;
      }
      default: {
        return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid(`unknown configuration key: ${key}`));
      }
    }
    continue;
  }
  const _bind$2 = _M0FP212tanglong200110dockerlint13check_2einner(source, ignored.val, honor_inline.val, registries.val);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  const entries = _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10DiagnosticRPB3MapGsRPB4JsonEE(_M0MPC15array5Array6filterGRP212tanglong200110dockerlint10DiagnosticE(_tmp, (d) => _M0IP016_24default__implPB2Eq10not__equalGOsE(_M0MPB3Map3getGssE(overrides, d.code), "ignore")), (d) => {
    const _bind$3 = [{ _0: "file", _1: _M0IPC16string6StringPB6ToJson8to__json(filename) }, { _0: "line", _1: _M0IPC13int3IntPB6ToJson8to__json(d.line) }, { _0: "code", _1: _M0IPC16string6StringPB6ToJson8to__json(d.code) }, { _0: "message", _1: _M0IPC16string6StringPB6ToJson8to__json(d.message) }, { _0: "level", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0MPC16option6Option10unwrap__orGsE(_M0MPB3Map3getGssE(overrides, d.code), _M0MP212tanglong200110dockerlint10Diagnostic8severity(d))) }];
    return _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 5), undefined);
  });
  return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC14json4Json17stringify_2einner(_M0IPC15array5ArrayPB6ToJson8to__jsonGRPB3MapGsRPB4JsonEE(entries), false, 0, undefined));
}
function _M0FP212tanglong200110dockerlint24variable__report_2einner(source, build_args_json) {
  let json;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(build_args_json, 0, build_args_json.length), 1024);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        json = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("invalid build arguments JSON"));
  }
  let items;
  if (json.$tag === 6) {
    const _Object = json;
    const _items = _Object._0;
    items = _items;
  } else {
    return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("build arguments must be an object"));
  }
  const _bind = [];
  const build_args = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsRPB4JsonE(items);
  while (true) {
    let key;
    let value;
    _L$2: {
      const _bind$2 = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L$2;
      }
    }
    let value$2;
    if (value.$tag === 4) {
      const _String = value;
      const _s = _String._0;
      value$2 = _s;
    } else {
      return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE3Err(new _M0DTPC15error5Error48tanglong2001_2fdockerlint_2eParseError_2eInvalid("build argument must be string"));
    }
    _M0MPB3Map3setGssE(build_args, key, value$2);
    continue;
  }
  const _bind$2 = _M0FP212tanglong200110dockerlint26analyze__variables_2einner(source, build_args);
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGsRP212tanglong200110dockerlint10ParseErrorE2Ok(_M0MPC14json4Json17stringify_2einner(_M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint13VariableScopeE(_tmp), false, 0, undefined));
}
function _M0FP412tanglong200110dockerlint3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint5parse(input);
    let ins;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      ins = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP212tanglong200110dockerlint5check(input, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, -1, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__);
    let diagnostics;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      diagnostics = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const lines = _M0MPC15array5Array3mapGRP212tanglong200110dockerlint10DiagnosticsE(diagnostics, (d) => {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(5);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "L");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, d.line);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, d.code);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, d.message);
      return _M0MPB13StringBuilder10to__string(_string_builder);
    });
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(35);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Parsed ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, ins.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " instructions; ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, diagnostics.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " diagnostics\n");
    const _tmp = _M0MPB13StringBuilder10to__string(_string_builder);
    const _bind$3 = "\n";
    return `${_tmp}${_M0MPC15array5Array4joinGsE(lines, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(e))}`;
}
function _M0FP412tanglong200110dockerlint3cmd3web11diagnostics(input, filename, honor_inline) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint20report__json_2einner(input, filename, honor_inline);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(e))}`;
}
function _M0FP412tanglong200110dockerlint3cmd3web12stage__graph(input) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint5parse(input);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP212tanglong200110dockerlint15analyze__stages(_tmp);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return _M0MPC14json4Json17stringify_2einner(_M0IPC15array5ArrayPB6ToJson8to__jsonGRP212tanglong200110dockerlint5StageE(_tmp$2), false, 0, undefined);
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(e))}`;
}
function _M0FP412tanglong200110dockerlint3cmd3web10configured(input, config, filename) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint26configured__report_2einner(input, config, filename);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(e))}`;
}
function _M0FP412tanglong200110dockerlint3cmd3web9variables(input, build_args) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint24variable__report_2einner(input, build_args);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(e))}`;
}
function _M0FP412tanglong200110dockerlint3cmd3web6impact(input, target, changed_lines) {
  let _try_err;
  _L: {
    const _bind = _M0FP212tanglong200110dockerlint21build__impact_2einner(input, target, changed_lines);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return _M0MPC14json4Json17stringify_2einner(_M0IP212tanglong200110dockerlint11BuildImpactPB6ToJson8to__json(_tmp), false, 0, undefined);
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP212tanglong200110dockerlint10ParseErrorE(e))}`;
}
(() => {
})();
export { _M0FP412tanglong200110dockerlint3cmd3web3run as run, _M0FP412tanglong200110dockerlint3cmd3web11diagnostics as diagnostics, _M0FP412tanglong200110dockerlint3cmd3web12stage__graph as stage_graph, _M0FP412tanglong200110dockerlint3cmd3web10configured as configured, _M0FP412tanglong200110dockerlint3cmd3web9variables as variables, _M0FP412tanglong200110dockerlint3cmd3web6impact as impact }
//# sourceMappingURL=web.js.map
