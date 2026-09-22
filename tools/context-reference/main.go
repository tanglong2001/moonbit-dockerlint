package main

import (
 "encoding/json"
 "os"
 "path/filepath"
 "strings"
 "github.com/moby/patternmatcher"
 "github.com/moby/patternmatcher/ignorefile"
)

type Pair struct { Pattern string `json:"pattern"`; Path string `json:"path"` }
type Ignore struct { Rules string `json:"rules"`; Paths []string `json:"paths"` }
type Request struct { Pairs []Pair `json:"pairs"`; Ignores []Ignore `json:"ignores"` }
type Result struct { Match bool `json:"match"`; Error string `json:"error,omitempty"` }
func main() {
 var request Request
 bytes,err:=os.ReadFile(os.Args[1]); if err!=nil { panic(err) }
 if err=json.Unmarshal(bytes,&request);err!=nil { panic(err) }
 pairs:=[]Result{}; ignores:=[][]Result{}
 for _,pair:=range request.Pairs {
  match,e:=filepath.Match(pair.Pattern,pair.Path);r:=Result{Match:match};if e!=nil {r.Error=e.Error()};pairs=append(pairs,r)
 }
 for _,item:=range request.Ignores {
  rules,e:=ignorefile.ReadAll(strings.NewReader(item.Rules));if e!=nil {panic(e)}
  matcher,e:=patternmatcher.New(rules);if e!=nil {panic(e)}
  row:=[]Result{}
  for _,path:=range item.Paths {match,e:=matcher.MatchesOrParentMatches(path);r:=Result{Match:match};if e!=nil {r.Error=e.Error()};row=append(row,r)}
  ignores=append(ignores,row)
 }
 json.NewEncoder(os.Stdout).Encode(map[string]interface{}{"separator":string(os.PathSeparator),"pairs":pairs,"ignores":ignores})
}
