"use strict";var u=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=u(function(E,m){
var N=require('@stdlib/strided-base-nullary/dist'),d=require('@stdlib/random-base-mt19937/dist');function O(a,r,n,t){var e;return arguments.length>3?e=d.factory(t):e=d,N([r],[a],[n],e),r}m.exports=O
});var c=u(function(F,y){
var R=require('@stdlib/strided-base-nullary/dist').ndarray,v=require('@stdlib/random-base-mt19937/dist');function b(a,r,n,t,e){var i;return arguments.length>4?i=v.factory(e):i=v,R([r],[a],[n],[t],i),r}y.exports=b
});var g=u(function(G,f){
var j=require('@stdlib/strided-base-nullary/dist'),q=require('@stdlib/random-base-mt19937/dist');function k(a,r,n,t){var e;return arguments.length>3?e=q.factory(t):e=q,j([r],[a],[n],e.normalized),r}f.exports=k
});var z=u(function(H,x){
var w=require('@stdlib/strided-base-nullary/dist').ndarray,p=require('@stdlib/random-base-mt19937/dist');function A(a,r,n,t,e){var i;return arguments.length>4?i=p.factory(e):i=p,w([r],[a],[n],[t],i.normalized),r}x.exports=A
});var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=o(),B=c(),h=g(),C=z();s(l,"ndarray",B);s(l,"normalized",h);s(h,"ndarray",C);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
