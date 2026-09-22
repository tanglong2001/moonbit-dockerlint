package main

import (
 "encoding/json"
 "os"
 "github.com/moby/buildkit/frontend/dockerfile/shell"
)

type Request struct { Words []string `json:"words"`; Env []string `json:"env"` }
func main() {
 var request []Request
 if err:=json.NewDecoder(os.Stdin).Decode(&request);err!=nil {panic(err)}
 results:=[]any{}
 for _,r:=range request {
  out:=[]any{}
  for _,word:=range r.Words {
   lex:=shell.NewLex('\\')
   s,_,e:=lex.ProcessWord(word,shell.EnvsFromSlice(r.Env));if e!=nil {panic(e)}
   out=append(out,s)
  }
  results=append(results,out)
 }
 json.NewEncoder(os.Stdout).Encode(results)
}
