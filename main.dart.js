(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.kW(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.h2(b)
return new s(c,this)}:function(){if(s===null)s=A.h2(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.h2(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
h7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ft(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.h5==null){A.kK()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.fQ("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.f4
if(o==null)o=$.f4=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.kQ(a)
if(p!=null)return p
if(typeof a=="function")return B.ag
s=Object.getPrototypeOf(a)
if(s==null)return B.Z
if(s===Object.prototype)return B.Z
if(typeof q=="function"){o=$.f4
if(o==null)o=$.f4=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.B,enumerable:false,writable:true,configurable:true})
return B.B}return B.B},
hn(a,b){if(a<0||a>4294967295)throw A.e(A.af(a,0,4294967295,"length",null))
return J.j4(new Array(a),b)},
j4(a,b){var s=A.l(a,b.j("r<0>"))
s.$flags=1
return s},
am(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bE.prototype
return J.cI.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.bF.prototype
if(typeof a=="boolean")return J.cH.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b6.prototype
if(typeof a=="bigint")return J.b5.prototype
return a}if(a instanceof A.j)return a
return J.ft(a)},
dz(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b6.prototype
if(typeof a=="bigint")return J.b5.prototype
return a}if(a instanceof A.j)return a
return J.ft(a)},
h4(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b6.prototype
if(typeof a=="bigint")return J.b5.prototype
return a}if(a instanceof A.j)return a
return J.ft(a)},
kG(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b6.prototype
if(typeof a=="bigint")return J.b5.prototype
return a}if(a instanceof A.j)return a
return J.ft(a)},
aZ(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.am(a).q(a,b)},
iD(a,b,c,d){return J.kG(a).c_(a,b,c,d)},
iE(a,b){return J.h4(a).J(a,b)},
a6(a){return J.am(a).gn(a)},
ay(a){return J.h4(a).gv(a)},
cs(a){return J.dz(a).gl(a)},
iF(a){return J.am(a).gA(a)},
iG(a,b,c){return J.h4(a).by(a,b,c)},
iH(a,b){return J.am(a).bA(a,b)},
bu(a){return J.am(a).i(a)},
bD:function bD(){},
cH:function cH(){},
bF:function bF(){},
Q:function Q(){},
aH:function aH(){},
cY:function cY(){},
bZ:function bZ(){},
ab:function ab(){},
b5:function b5(){},
b6:function b6(){},
r:function r(a){this.$ti=a},
dQ:function dQ(a){this.$ti=a},
W:function W(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bG:function bG(){},
bE:function bE(){},
cI:function cI(){},
b4:function b4(){}},A={fJ:function fJ(){},
j5(a){return new A.bK("Field '"+a+"' has not been initialized.")},
av(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fP(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fr(a,b,c){return a},
h6(a){var s,r
for(s=$.U.length,r=0;r<s;++r)if(a===$.U[r])return!0
return!1},
ar(a,b,c){return new A.by(a,b,c.j("by<0>"))},
fH(){return new A.au("No element")},
bK:function bK(a){this.a=a},
ej:function ej(){},
aq:function aq(){},
as:function as(){},
X:function X(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
x:function x(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(a,b,c){this.a=a
this.b=b
this.$ti=c},
dd:function dd(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c){this.a=a
this.b=b
this.$ti=c},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
cC:function cC(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.$ti=b},
de:function de(a,b){this.a=a
this.$ti=b},
ba:function ba(a,b){this.a=a
this.$ti=b},
cW:function cW(a){this.a=a
this.b=null},
bz:function bz(){},
d9:function d9(){},
bg:function bg(){},
ah:function ah(a){this.a=a},
iS(a,b,c){var s,r,q,p,o,n,m=A.D(a),l=A.dT(new A.aI(a,m.j("aI<1>")),!0,b),k=l.length,j=0
while(!0){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.aX)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aB(q,A.dT(new A.a_(a,m.j("a_<2>")),!0,c),b.j("@<0>").N(c).j("aB<1,2>"))
n.$keys=l
return n}return new A.aA(A.j7(a,b,c),b.j("@<0>").N(c).j("aA<1,2>"))},
il(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
lC(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bu(a)
return s},
bc(a){var s,r=$.ht
if(r==null)r=$.ht=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ed(a){var s,r,q,p
if(a instanceof A.j)return A.T(A.br(a),null)
s=J.am(a)
if(s===B.af||s===B.ah||t.o.b(a)){r=B.M(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.T(A.br(a),null)},
jj(a){if(a==null||typeof a=="number"||A.fk(a))return J.bu(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ap)return a.i(0)
if(a instanceof A.ce)return a.dB(!0)
return"Instance of '"+A.ed(a)+"'"},
jg(){return Date.now()},
ji(){var s,r
if($.ee!==0)return
$.ee=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.ee=1e6
$.d_=new A.ec(r)},
hs(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
jl(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aX)(a),++r){q=a[r]
if(!A.fl(q))throw A.e(A.dy(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.a.aG(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.e(A.dy(q))}return A.hs(p)},
jk(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fl(q))throw A.e(A.dy(q))
if(q<0)throw A.e(A.dy(q))
if(q>65535)return A.jl(a)}return A.hs(a)},
fM(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.aG(s,10)|55296)>>>0,s&1023|56320)}}throw A.e(A.af(a,0,1114111,null,null))},
jm(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(a<100){a+=400
p-=4800}s=B.a.an(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.a.H(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
K(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
cZ(a){return a.c?A.K(a).getUTCFullYear()+0:A.K(a).getFullYear()+0},
hy(a){return a.c?A.K(a).getUTCMonth()+1:A.K(a).getMonth()+1},
hu(a){return a.c?A.K(a).getUTCDate()+0:A.K(a).getDate()+0},
hv(a){return a.c?A.K(a).getUTCHours()+0:A.K(a).getHours()+0},
hx(a){return a.c?A.K(a).getUTCMinutes()+0:A.K(a).getMinutes()+0},
hz(a){return a.c?A.K(a).getUTCSeconds()+0:A.K(a).getSeconds()+0},
hw(a){return a.c?A.K(a).getUTCMilliseconds()+0:A.K(a).getMilliseconds()+0},
at(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.b.R(s,b)
q.b=""
if(c!=null&&c.a!==0)c.K(0,new A.eb(q,r,s))
return J.iH(a,new A.dP(B.ar,0,s,r,0))},
jf(a,b,c){var s,r,q=c==null||c.a===0
if(q){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.je(a,b,c)},
je(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b.length,e=a.$R
if(f<e)return A.at(a,b,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.am(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.at(a,b,c)
if(f===e)return o.apply(a,b)
return A.at(a,b,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.at(a,b,c)
n=e+q.length
if(f>n)return A.at(a,b,null)
if(f<n){m=q.slice(f-e)
l=A.ad(b,t.z)
B.b.R(l,m)}else l=b
return o.apply(a,l)}else{if(f>e)return A.at(a,b,c)
l=A.ad(b,t.z)
k=Object.keys(q)
if(c==null)for(r=k.length,j=0;j<k.length;k.length===r||(0,A.aX)(k),++j){i=q[k[j]]
if(B.O===i)return A.at(a,l,c)
l.push(i)}else{for(r=k.length,h=0,j=0;j<k.length;k.length===r||(0,A.aX)(k),++j){g=k[j]
if(c.a0(g)){++h
l.push(c.h(0,g))}else{i=q[g]
if(B.O===i)return A.at(a,l,c)
l.push(i)}}if(h!==c.a)return A.at(a,l,c)}return o.apply(a,l)}},
jh(a){var s=a.$thrownJsError
if(s==null)return null
return A.aU(s)},
m(a,b){if(a==null)J.cs(a)
throw A.e(A.h3(a,b))},
h3(a,b){var s,r="index"
if(!A.fl(b))return new A.a1(!0,b,r,null)
s=J.cs(a)
if(b<0||b>=s)return A.hm(b,s,a,r)
return A.eg(b,r)},
dy(a){return new A.a1(!0,a,null,null)},
e(a){return A.F(a,new Error())},
F(a,b){var s
if(a==null)a=new A.ai()
b.dartException=a
s=A.kX
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kX(){return J.bu(this.dartException)},
ax(a,b){throw A.F(a,b==null?new Error():b)},
dA(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ax(A.k3(a,b,c),s)},
k3(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.c_("'"+s+"': Cannot "+o+" "+l+k+n)},
aX(a){throw A.e(A.N(a))},
aj(a){var s,r,q,p,o,n
a=A.kU(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.eF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eG(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hE(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fK(a,b){var s=b==null,r=s?null:b.method
return new A.cJ(a,r,s?null:b.receiver)},
bt(a){if(a==null)return new A.e5(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.aW(a,a.dartException)
return A.kx(a)},
aW(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.aG(r,16)&8191)===10)switch(q){case 438:return A.aW(a,A.fK(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.aW(a,new A.bT())}}if(a instanceof TypeError){p=$.io()
o=$.ip()
n=$.iq()
m=$.ir()
l=$.iu()
k=$.iv()
j=$.it()
$.is()
i=$.ix()
h=$.iw()
g=p.F(s)
if(g!=null)return A.aW(a,A.fK(s,g))
else{g=o.F(s)
if(g!=null){g.method="call"
return A.aW(a,A.fK(s,g))}else if(n.F(s)!=null||m.F(s)!=null||l.F(s)!=null||k.F(s)!=null||j.F(s)!=null||m.F(s)!=null||i.F(s)!=null||h.F(s)!=null)return A.aW(a,new A.bT())}return A.aW(a,new A.d8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bW()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aW(a,new A.a1(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bW()
return a},
aU(a){var s
if(a==null)return new A.cg(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cg(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
h8(a){if(a==null)return J.a6(a)
if(typeof a=="object")return A.bc(a)
return J.a6(a)},
kC(a){if(typeof a=="number")return B.c.gn(a)
if(a instanceof A.dv)return A.bc(a)
if(a instanceof A.ce)return a.gn(a)
if(a instanceof A.ah)return a.gn(0)
return A.h8(a)},
ia(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
kb(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.eS("Unsupported number of arguments for wrapped closure"))},
bq(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.kD(a,b)
a.$identity=s
return s},
kD(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.kb)},
iR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.d5().constructor.prototype):Object.create(new A.b0(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.hk(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.iN(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.hk(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
iN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.iJ)}throw A.e("Error in functionType of tearoff")},
iO(a,b,c,d){var s=A.hj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hk(a,b,c,d){if(c)return A.iQ(a,b,d)
return A.iO(b.length,d,a,b)},
iP(a,b,c,d){var s=A.hj,r=A.iK
switch(b?-1:a){case 0:throw A.e(new A.d1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
iQ(a,b,c){var s,r
if($.hh==null)$.hh=A.hg("interceptor")
if($.hi==null)$.hi=A.hg("receiver")
s=b.length
r=A.iP(s,c,a,b)
return r},
h2(a){return A.iR(a)},
iJ(a,b){return A.cn(v.typeUniverse,A.br(a.a),b)},
hj(a){return a.a},
iK(a){return a.b},
hg(a){var s,r,q,p=new A.b0("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.b_("Field name "+a+" not found.",null))},
ib(a){return v.getIsolateTag(a)},
lB(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kQ(a){var s,r,q,p,o,n=$.id.$1(a),m=$.fs[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fx[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.i7.$2(a,n)
if(q!=null){m=$.fs[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fx[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fz(s)
$.fs[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fx[n]=s
return s}if(p==="-"){o=A.fz(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ih(a,s)
if(p==="*")throw A.e(A.fQ(n))
if(v.leafTags[n]===true){o=A.fz(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ih(a,s)},
ih(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.h7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fz(a){return J.h7(a,!1,null,!!a.$iP)},
kT(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fz(s)
else return J.h7(s,c,null,null)},
kK(){if(!0===$.h5)return
$.h5=!0
A.kL()},
kL(){var s,r,q,p,o,n,m,l
$.fs=Object.create(null)
$.fx=Object.create(null)
A.kJ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ij.$1(o)
if(n!=null){m=A.kT(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kJ(){var s,r,q,p,o,n,m=B.a3()
m=A.bp(B.a4,A.bp(B.a5,A.bp(B.N,A.bp(B.N,A.bp(B.a6,A.bp(B.a7,A.bp(B.a8(B.M),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.id=new A.fu(p)
$.i7=new A.fv(o)
$.ij=new A.fw(n)},
bp(a,b){return a(b)||b},
kE(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kU(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aA:function aA(a,b){this.a=a
this.$ti=b},
bw:function bw(){},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
aO:function aO(a,b){this.a=a
this.$ti=b},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aE:function aE(a,b){this.a=a
this.$ti=b},
dP:function dP(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
ec:function ec(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bT:function bT(){},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.a=a},
e5:function e5(a){this.a=a},
cg:function cg(a){this.a=a
this.b=null},
ap:function ap(){},
cy:function cy(){},
cz:function cz(){},
d6:function d6(){},
d5:function d5(){},
b0:function b0(a,b){this.a=a
this.b=b},
d1:function d1(a){this.a=a},
f8:function f8(){},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dR:function dR(a,b){this.a=a
this.b=b
this.c=null},
aI:function aI(a,b){this.a=a
this.$ti=b},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
a_:function a_(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bH:function bH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
ce:function ce(){},
aQ(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.h3(b,a))},
bR:function bR(){},
cM:function cM(){},
b9:function b9(){},
bP:function bP(){},
bQ:function bQ(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
bS:function bS(){},
cU:function cU(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
fO(a,b){var s=b.c
return s==null?b.c=A.cl(a,"bB",[b.x]):s},
hB(a){var s=a.w
if(s===6||s===7)return A.hB(a.x)
return s===11||s===12},
jp(a){return a.as},
aT(a){return A.ff(v.typeUniverse,a,!1)},
aR(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aR(a1,s,a3,a4)
if(r===s)return a2
return A.hO(a1,r,!0)
case 7:s=a2.x
r=A.aR(a1,s,a3,a4)
if(r===s)return a2
return A.hN(a1,r,!0)
case 8:q=a2.y
p=A.bo(a1,q,a3,a4)
if(p===q)return a2
return A.cl(a1,a2.x,p)
case 9:o=a2.x
n=A.aR(a1,o,a3,a4)
m=a2.y
l=A.bo(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fU(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bo(a1,j,a3,a4)
if(i===j)return a2
return A.hP(a1,k,i)
case 11:h=a2.x
g=A.aR(a1,h,a3,a4)
f=a2.y
e=A.ku(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hM(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bo(a1,d,a3,a4)
o=a2.x
n=A.aR(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fV(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.cx("Attempted to substitute unexpected RTI kind "+a0))}},
bo(a,b,c,d){var s,r,q,p,o=b.length,n=A.fg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aR(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
kv(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aR(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ku(a,b,c,d){var s,r=b.a,q=A.bo(a,r,c,d),p=b.b,o=A.bo(a,p,c,d),n=b.c,m=A.kv(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dp()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
i9(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kI(s)
return a.$S()}return null},
kM(a,b){var s
if(A.hB(b))if(a instanceof A.ap){s=A.i9(a)
if(s!=null)return s}return A.br(a)},
br(a){if(a instanceof A.j)return A.D(a)
if(Array.isArray(a))return A.t(a)
return A.h_(J.am(a))},
t(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
D(a){var s=a.$ti
return s!=null?s:A.h_(a)},
h_(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ka(a,s)},
ka(a,b){var s=a instanceof A.ap?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.jP(v.typeUniverse,s.name)
b.$ccache=r
return r},
kI(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ff(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ic(a){return A.aS(A.D(a))},
h1(a){var s
if(a instanceof A.ce)return A.kF(a.$r,a.dz())
s=a instanceof A.ap?A.i9(a):null
if(s!=null)return s
if(t.bW.b(a))return J.iF(a).a
if(Array.isArray(a))return A.t(a)
return A.br(a)},
aS(a){var s=a.r
return s==null?a.r=new A.dv(a):s},
kF(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.m(q,0)
s=A.cn(v.typeUniverse,A.h1(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.m(q,r)
s=A.hQ(v.typeUniverse,s,A.h1(q[r]))}return A.cn(v.typeUniverse,s,a)},
a5(a){return A.aS(A.ff(v.typeUniverse,a,!1))},
k9(a){var s,r,q,p,o=this
if(o===t.K)return A.al(o,a,A.kg)
if(A.aV(o))return A.al(o,a,A.kk)
s=o.w
if(s===6)return A.al(o,a,A.k7)
if(s===1)return A.al(o,a,A.hY)
if(s===7)return A.al(o,a,A.kc)
if(o===t.S)r=A.fl
else if(o===t.i||o===t.H)r=A.kf
else if(o===t.N)r=A.ki
else r=o===t.y?A.fk:null
if(r!=null)return A.al(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.aV)){o.f="$i"+q
if(q==="k")return A.al(o,a,A.ke)
return A.al(o,a,A.kj)}}else if(s===10){p=A.kE(o.x,o.y)
return A.al(o,a,p==null?A.hY:p)}return A.al(o,a,A.k5)},
al(a,b,c){a.b=c
return a.b(b)},
k8(a){var s=this,r=A.k4
if(A.aV(s))r=A.k1
else if(s===t.K)r=A.jZ
else if(A.bs(s))r=A.k6
if(s===t.S)r=A.jV
else if(s===t.a3)r=A.jW
else if(s===t.N)r=A.k_
else if(s===t.aD)r=A.k0
else if(s===t.y)r=A.jR
else if(s===t.cG)r=A.jS
else if(s===t.H)r=A.jX
else if(s===t.n)r=A.jY
else if(s===t.i)r=A.jT
else if(s===t.dd)r=A.jU
s.a=r
return s.a(a)},
k5(a){var s=this
if(a==null)return A.bs(s)
return A.kN(v.typeUniverse,A.kM(a,s),s)},
k7(a){if(a==null)return!0
return this.x.b(a)},
kj(a){var s,r=this
if(a==null)return A.bs(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.am(a)[s]},
ke(a){var s,r=this
if(a==null)return A.bs(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.am(a)[s]},
k4(a){var s=this
if(a==null){if(A.bs(s))return a}else if(s.b(a))return a
throw A.F(A.hT(a,s),new Error())},
k6(a){var s=this
if(a==null||s.b(a))return a
throw A.F(A.hT(a,s),new Error())},
hT(a,b){return new A.cj("TypeError: "+A.hF(a,A.T(b,null)))},
hF(a,b){return A.b2(a)+": type '"+A.T(A.h1(a),null)+"' is not a subtype of type '"+b+"'"},
a4(a,b){return new A.cj("TypeError: "+A.hF(a,b))},
kc(a){var s=this
return s.x.b(a)||A.fO(v.typeUniverse,s).b(a)},
kg(a){return a!=null},
jZ(a){if(a!=null)return a
throw A.F(A.a4(a,"Object"),new Error())},
kk(a){return!0},
k1(a){return a},
hY(a){return!1},
fk(a){return!0===a||!1===a},
jR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.F(A.a4(a,"bool"),new Error())},
jS(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.F(A.a4(a,"bool?"),new Error())},
jT(a){if(typeof a=="number")return a
throw A.F(A.a4(a,"double"),new Error())},
jU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.F(A.a4(a,"double?"),new Error())},
fl(a){return typeof a=="number"&&Math.floor(a)===a},
jV(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.F(A.a4(a,"int"),new Error())},
jW(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.F(A.a4(a,"int?"),new Error())},
kf(a){return typeof a=="number"},
jX(a){if(typeof a=="number")return a
throw A.F(A.a4(a,"num"),new Error())},
jY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.F(A.a4(a,"num?"),new Error())},
ki(a){return typeof a=="string"},
k_(a){if(typeof a=="string")return a
throw A.F(A.a4(a,"String"),new Error())},
k0(a){if(typeof a=="string")return a
if(a==null)return a
throw A.F(A.a4(a,"String?"),new Error())},
i1(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.T(a[q],b)
return s},
kp(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.i1(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.T(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hU(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.l([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.m(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.T(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.T(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.T(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.T(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.T(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
T(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.T(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.T(a.x,b)+">"
if(l===8){p=A.kw(a.x)
o=a.y
return o.length>0?p+("<"+A.i1(o,b)+">"):p}if(l===10)return A.kp(a,b)
if(l===11)return A.hU(a,b,null)
if(l===12)return A.hU(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.m(b,n)
return b[n]}return"?"},
kw(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jQ(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jP(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ff(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cm(a,5,"#")
q=A.fg(s)
for(p=0;p<s;++p)q[p]=r
o=A.cl(a,b,q)
n[b]=o
return o}else return m},
jO(a,b){return A.hR(a.tR,b)},
jN(a,b){return A.hR(a.eT,b)},
ff(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hJ(A.hH(a,null,b,!1))
r.set(b,s)
return s},
cn(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hJ(A.hH(a,b,c,!0))
q.set(c,r)
return r},
hQ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fU(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
aw(a,b){b.a=A.k8
b.b=A.k9
return b},
cm(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a0(null,null)
s.w=b
s.as=c
r=A.aw(a,s)
a.eC.set(c,r)
return r},
hO(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.jL(a,b,r,c)
a.eC.set(r,s)
return s},
jL(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aV(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bs(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a0(null,null)
q.w=6
q.x=b
q.as=c
return A.aw(a,q)},
hN(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.jJ(a,b,r,c)
a.eC.set(r,s)
return s},
jJ(a,b,c,d){var s,r
if(d){s=b.w
if(A.aV(b)||b===t.K)return b
else if(s===1)return A.cl(a,"bB",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.a0(null,null)
r.w=7
r.x=b
r.as=c
return A.aw(a,r)},
jM(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a0(null,null)
s.w=13
s.x=b
s.as=q
r=A.aw(a,s)
a.eC.set(q,r)
return r},
ck(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
jI(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cl(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ck(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.aw(a,r)
a.eC.set(p,q)
return q},
fU(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ck(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.aw(a,o)
a.eC.set(q,n)
return n},
hP(a,b,c){var s,r,q="+"+(b+"("+A.ck(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.aw(a,s)
a.eC.set(q,r)
return r},
hM(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ck(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ck(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.jI(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.aw(a,p)
a.eC.set(r,o)
return o},
fV(a,b,c,d){var s,r=b.as+("<"+A.ck(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.jK(a,b,c,r,d)
a.eC.set(r,s)
return s},
jK(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aR(a,b,r,0)
m=A.bo(a,c,r,0)
return A.fV(a,n,m,c!==m)}}l=new A.a0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.aw(a,l)},
hH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hJ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.jC(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hI(a,r,l,k,!1)
else if(q===46)r=A.hI(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aP(a.u,a.e,k.pop()))
break
case 94:k.push(A.jM(a.u,k.pop()))
break
case 35:k.push(A.cm(a.u,5,"#"))
break
case 64:k.push(A.cm(a.u,2,"@"))
break
case 126:k.push(A.cm(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.jE(a,k)
break
case 38:A.jD(a,k)
break
case 63:p=a.u
k.push(A.hO(p,A.aP(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hN(p,A.aP(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.jB(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.hK(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.jG(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.aP(a.u,a.e,m)},
jC(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hI(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.jQ(s,o.x)[p]
if(n==null)A.ax('No "'+p+'" in "'+A.jp(o)+'"')
d.push(A.cn(s,o,n))}else d.push(p)
return m},
jE(a,b){var s,r=a.u,q=A.hG(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cl(r,p,q))
else{s=A.aP(r,a.e,p)
switch(s.w){case 11:b.push(A.fV(r,s,q,a.n))
break
default:b.push(A.fU(r,s,q))
break}}},
jB(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.hG(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aP(p,a.e,o)
q=new A.dp()
q.a=s
q.b=n
q.c=m
b.push(A.hM(p,r,q))
return
case-4:b.push(A.hP(p,b.pop(),s))
return
default:throw A.e(A.cx("Unexpected state under `()`: "+A.o(o)))}},
jD(a,b){var s=b.pop()
if(0===s){b.push(A.cm(a.u,1,"0&"))
return}if(1===s){b.push(A.cm(a.u,4,"1&"))
return}throw A.e(A.cx("Unexpected extended operation "+A.o(s)))},
hG(a,b){var s=b.splice(a.p)
A.hK(a.u,a.e,s)
a.p=b.pop()
return s},
aP(a,b,c){if(typeof c=="string")return A.cl(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.jF(a,b,c)}else return c},
hK(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aP(a,b,c[s])},
jG(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aP(a,b,c[s])},
jF(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.cx("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.cx("Bad index "+c+" for "+b.i(0)))},
kN(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.C(a,b,null,c,null)
r.set(c,s)}return s},
C(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aV(d))return!0
s=b.w
if(s===4)return!0
if(A.aV(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.C(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.C(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.C(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.C(a,b.x,c,d,e))return!1
return A.C(a,A.fO(a,b),c,d,e)}if(s===6)return A.C(a,p,c,d,e)&&A.C(a,b.x,c,d,e)
if(q===7){if(A.C(a,b,c,d.x,e))return!0
return A.C(a,b,c,A.fO(a,d),e)}if(q===6)return A.C(a,b,c,p,e)||A.C(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.cY)return!0
if(q===12){if(b===t.M)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.C(a,j,c,i,e)||!A.C(a,i,e,j,c))return!1}return A.hX(a,b.x,c,d.x,e)}if(q===11){if(b===t.M)return!0
if(p)return!1
return A.hX(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.kd(a,b,c,d,e)}if(o&&q===10)return A.kh(a,b,c,d,e)
return!1},
hX(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.C(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.C(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.C(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.C(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.C(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
kd(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cn(a,b,r[o])
return A.hS(a,p,null,c,d.y,e)}return A.hS(a,b.y,null,c,d.y,e)},
hS(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.C(a,b[s],d,e[s],f))return!1
return!0},
kh(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.C(a,r[s],c,q[s],e))return!1
return!0},
bs(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aV(a))if(s!==6)r=s===7&&A.bs(a.x)
return r},
aV(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
hR(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fg(a){return a>0?new Array(a):v.typeUniverse.sEA},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
dp:function dp(){this.c=this.b=this.a=null},
dv:function dv(a){this.a=a},
dm:function dm(){},
cj:function cj(a){this.a=a},
jw(){var s,r,q
if(self.scheduleImmediate!=null)return A.ky()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bq(new A.eN(s),1)).observe(r,{childList:true})
return new A.eM(s,r,q)}else if(self.setImmediate!=null)return A.kz()
return A.kA()},
jx(a){self.scheduleImmediate(A.bq(new A.eO(a),0))},
jy(a){self.setImmediate(A.bq(new A.eP(a),0))},
jz(a){A.jH(0,a)},
jH(a,b){var s=new A.fd()
s.bX(a,b)
return s},
hL(a,b,c){return 0},
fF(a){var s
if(t.R.b(a)){s=a.ga6()
if(s!=null)return s}return B.ab},
fS(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.hC()
b.c3(new A.a8(new A.a1(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.be(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.a_()
b.a7(p.a)
A.aN(b,q)
return}b.a^=2
A.bn(null,null,b.b,new A.eX(p,b))},
aN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cr(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aN(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.cr(m.a,m.b)
return}j=$.A
if(j!==k)$.A=k
else j=null
f=f.c
if((f&15)===8)new A.f0(s,g,p).$0()
else if(q){if((f&1)!==0)new A.f_(s,m).$0()}else if((f&2)!==0)new A.eZ(g,s).$0()
if(j!=null)$.A=j
f=s.c
if(f instanceof A.M){r=s.a.$ti
r=r.j("bB<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a8(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.fS(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a8(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
kq(a,b){if(t.C.b(a))return b.bD(a)
if(t.x.b(a))return a
throw A.e(A.fE(a,"onError",u.c))},
kn(){var s,r
for(s=$.bm;s!=null;s=$.bm){$.cq=null
r=s.b
$.bm=r
if(r==null)$.cp=null
s.a.$0()}},
kt(){$.h0=!0
try{A.kn()}finally{$.cq=null
$.h0=!1
if($.bm!=null)$.hc().$1(A.i8())}},
i3(a){var s=new A.dg(a),r=$.cp
if(r==null){$.bm=$.cp=s
if(!$.h0)$.hc().$1(A.i8())}else $.cp=r.b=s},
ks(a){var s,r,q,p=$.bm
if(p==null){A.i3(a)
$.cq=$.cp
return}s=new A.dg(a)
r=$.cq
if(r==null){s.b=p
$.bm=$.cq=s}else{q=r.b
s.b=q
$.cq=r.b=s
if(q==null)$.cp=s}},
ik(a){var s=null,r=$.A
if(B.e===r){A.bn(s,s,B.e,a)
return}A.bn(s,s,r,r.bm(a))},
i2(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.bt(q)
r=A.aU(q)
A.cr(s,r)}},
jA(a,b){if(b==null)b=A.kB()
if(t.a0.b(b))return a.bD(b)
if(t.aA.b(b))return b
throw A.e(A.b_("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ko(a,b){A.cr(a,b)},
cr(a,b){A.ks(new A.fm(a,b))},
i_(a,b,c,d){var s,r=$.A
if(r===c)return d.$0()
$.A=c
s=r
try{r=d.$0()
return r}finally{$.A=s}},
i0(a,b,c,d,e){var s,r=$.A
if(r===c)return d.$1(e)
$.A=c
s=r
try{r=d.$1(e)
return r}finally{$.A=s}},
kr(a,b,c,d,e,f){var s,r=$.A
if(r===c)return d.$2(e,f)
$.A=c
s=r
try{r=d.$2(e,f)
return r}finally{$.A=s}},
bn(a,b,c,d){if(B.e!==c)d=c.bm(d)
A.i3(d)},
eN:function eN(a){this.a=a},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
bl:function bl(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
bk:function bk(a,b){this.a=a
this.$ti=b},
a8:function a8(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.$ti=b},
c4:function c4(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bj:function bj(){},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
fc:function fc(a,b){this.a=a
this.b=b},
dh:function dh(){},
c3:function c3(a,b){this.a=a
this.$ti=b},
dq:function dq(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
M:function M(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eU:function eU(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(a){this.a=a},
f_:function f_(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a
this.b=null},
be:function be(){},
el:function el(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
c5:function c5(){},
c6:function c6(){},
aM:function aM(){},
ch:function ch(){},
dk:function dk(){},
dj:function dj(a){this.b=a
this.a=null},
dt:function dt(){this.a=0
this.c=this.b=null},
f7:function f7(a,b){this.a=a
this.b=b},
c7:function c7(a){this.a=1
this.b=a
this.c=null},
fh:function fh(){},
fm:function fm(a,b){this.a=a
this.b=b},
f9:function f9(){},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
hp(a,b){return new A.R(a.j("@<0>").N(b).j("R<1,2>"))},
j6(a,b,c){return A.ia(a,new A.R(b.j("@<0>").N(c).j("R<1,2>")))},
aJ(a,b){return new A.R(a.j("@<0>").N(b).j("R<1,2>"))},
j8(a){return new A.c9(a.j("c9<0>"))},
fT(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
j7(a,b,c){var s=A.hp(b,c)
a.K(0,new A.dS(s,b,c))
return s},
dX(a){var s,r
if(A.h6(a))return"{...}"
s=new A.bX("")
try{r={}
$.U.push(a)
s.a+="{"
r.a=!0
a.K(0,new A.dY(r,s))
s.a+="}"}finally{if(0>=$.U.length)return A.m($.U,-1)
$.U.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ja(a,b,c,d){var s,r
for(s=0;s<12;++s){r=b[s]
a.k(0,c.$1(r),A.jb(r))}},
jb(a){return a},
c9:function c9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f5:function f5(a){this.a=a
this.b=null},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bh:function bh(a,b){this.a=a
this.$ti=b},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
bO:function bO(){},
dY:function dY(a,b){this.a=a
this.b=b},
dw:function dw(){},
cL:function cL(){},
da:function da(){},
bV:function bV(){},
cf:function cf(){},
co:function co(){},
iW(a,b){a=A.F(a,new Error())
a.stack=b.i(0)
throw a},
fL(a,b,c,d){var s,r=J.hn(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
dT(a,b,c){var s,r=A.l([],c.j("r<0>"))
for(s=J.ay(a);s.m();)r.push(s.gp())
if(b)return r
r.$flags=1
return r},
ad(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.j("r<0>"))
s=A.l([],b.j("r<0>"))
for(r=J.ay(a);r.m();)s.push(r.gp())
return s},
jq(a){var s,r
A.hA(0,"start")
s=a
r=s.length
return A.jk(r<r?s.slice(0,r):s)},
hD(a,b,c){var s=J.ay(b)
if(!s.m())return a
if(c.length===0){do a+=A.o(s.gp())
while(s.m())}else{a+=A.o(s.gp())
for(;s.m();)a=a+c+A.o(s.gp())}return a},
hr(a,b){return new A.cV(a,b.gd3(),b.gd9(),b.gd4())},
hC(){return A.aU(new Error())},
iU(a,b,c){var s="microsecond"
if(b>999)throw A.e(A.af(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.e(A.af(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.e(A.fE(b,s,"Time including microseconds is outside valid range"))
A.fr(c,"isUtc",t.y)
return a},
hl(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
iT(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
dK(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aa(a){if(a>=10)return""+a
return"0"+a},
b2(a){if(typeof a=="number"||A.fk(a)||a==null)return J.bu(a)
if(typeof a=="string")return JSON.stringify(a)
return A.jj(a)},
iX(a,b){A.fr(a,"error",t.K)
A.fr(b,"stackTrace",t.cA)
A.iW(a,b)},
cx(a){return new A.cw(a)},
b_(a,b){return new A.a1(!1,null,b,a)},
fE(a,b,c){return new A.a1(!0,a,b,c)},
jn(a){var s=null
return new A.bd(s,s,!1,s,s,a)},
eg(a,b){return new A.bd(null,null,!0,a,b,"Value not in range")},
af(a,b,c,d,e){return new A.bd(b,c,!0,a,d,"Invalid value")},
jo(a,b,c){if(0>a||a>c)throw A.e(A.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.af(b,a,c,"end",null))
return b}return c},
hA(a,b){if(a<0)throw A.e(A.af(a,0,null,b,null))
return a},
hm(a,b,c,d){return new A.cG(b,!0,a,d,"Index out of range")},
c0(a){return new A.c_(a)},
fQ(a){return new A.d7(a)},
d4(a){return new A.au(a)},
N(a){return new A.cA(a)},
j3(a,b,c){var s,r
if(A.h6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.U.push(a)
try{A.kl(a,s)}finally{if(0>=$.U.length)return A.m($.U,-1)
$.U.pop()}r=A.hD(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
fI(a,b,c){var s,r
if(A.h6(a))return b+"..."+c
s=new A.bX(b)
$.U.push(a)
try{r=s
r.a=A.hD(r.a,a,", ")}finally{if(0>=$.U.length)return A.m($.U,-1)
$.U.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kl(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.o(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.m(b,-1)
r=b.pop()
if(0>=b.length)return A.m(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){b.push(A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.m(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.m(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.m(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jd(a,b,c,d){var s
if(B.m===c){s=B.a.gn(a)
b=J.a6(b)
return A.fP(A.av(A.av($.fD(),s),b))}if(B.m===d){s=B.a.gn(a)
b=J.a6(b)
c=J.a6(c)
return A.fP(A.av(A.av(A.av($.fD(),s),b),c))}s=B.a.gn(a)
b=J.a6(b)
c=J.a6(c)
d=J.a6(d)
d=A.fP(A.av(A.av(A.av(A.av($.fD(),s),b),c),d))
return d},
ao(a){A.ii(A.o(a))},
e4:function e4(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(){},
q:function q(){},
cw:function cw(a){this.a=a},
ai:function ai(){},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cG:function cG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a){this.a=a},
d7:function d7(a){this.a=a},
au:function au(a){this.a=a},
cA:function cA(a){this.a=a},
cX:function cX(){},
bW:function bW(){},
eS:function eS(a){this.a=a},
h:function h(){},
S:function S(){},
j:function j(){},
du:function du(){},
ek:function ek(){this.b=this.a=0},
bX:function bX(a){this.a=a},
fR(a,b,c,d){var s=A.i6(new A.eR(c),t.A)
if(s!=null)J.iD(a,b,s,!1)
return new A.dn(a,b,s,!1)},
i6(a,b){var s=$.A
if(s===B.e)return a
return s.cK(a,b)},
c:function c(){},
ct:function ct(){},
cu:function cu(){},
az:function az(){},
b1:function b1(){},
a2:function a2(){},
bx:function bx(){},
dJ:function dJ(){},
dM:function dM(){},
b:function b(){},
a:function a(){},
cB:function cB(){},
cD:function cD(){},
bC:function bC(){},
aG:function aG(){},
y:function y(){},
d2:function d2(){},
L:function L(){},
aL:function aL(){},
ak:function ak(){},
fG:function fG(a,b){this.a=a
this.$ti=b},
dn:function dn(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
eR:function eR(a){this.a=a},
di:function di(){},
bJ:function bJ(){},
k2(a,b,c,d){var s,r,q
if(b){s=[c]
B.b.R(s,d)
d=s}r=t.z
q=A.dT(J.iG(d,A.kO(),r),!0,r)
return A.fX(A.jf(a,q,null))},
ho(a){return A.i5(A.fX(a))},
fY(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
hW(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
fX(a){if(a==null||typeof a=="string"||typeof a=="number"||A.fk(a))return a
if(a instanceof A.ac)return a.a
if(A.ig(a))return a
if(t.Q.b(a))return a
if(a instanceof A.aC)return A.K(a)
if(t.Z.b(a))return A.hV(a,"$dart_jsFunction",new A.fi())
return A.hV(a,"_$dart_jsObject",new A.fj($.he()))},
hV(a,b,c){var s=A.hW(a,b)
if(s==null){s=c.$1(a)
A.fY(a,b,s)}return s},
fW(a){var s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.ig(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=a.getTime()
if(s<-864e13||s>864e13)A.ax(A.af(s,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fr(!1,"isUtc",t.y)
return new A.aC(s,0,!1)}else if(a.constructor===$.he())return a.o
else return A.i5(a)},
i5(a){if(typeof a=="function")return A.fZ(a,$.fC(),new A.fo())
if(a instanceof Array)return A.fZ(a,$.hd(),new A.fp())
return A.fZ(a,$.hd(),new A.fq())},
fZ(a,b,c){var s=A.hW(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.fY(a,b,s)}return s},
fi:function fi(){},
fj:function fj(a){this.a=a},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
ac:function ac(a){this.a=a},
bI:function bI(a){this.a=a},
aF:function aF(a,b){this.a=a
this.$ti=b},
c8:function c8(){},
fN(){return B.aa},
f3:function f3(){},
ae(a,b,c,d){var s=new A.Y(a,B.A,!1,b,c,B.a1,B.C)
s.x=d==null?B.a1:d
return s},
dB:function dB(a,b){this.a=a
this.b=b},
V:function V(){},
b3:function b3(a,b,c,d,e,f){var _=this
_.Q=a
_.a=b
_.b=500
_.d=_.c=0
_.e=!0
_.f=c
_.r=d
_.w=e
_.x=f
_.y=0},
Y:function Y(a,b,c,d,e,f,g){var _=this
_.Q=a
_.at=null
_.ax=b
_.a=c
_.b=500
_.d=_.c=0
_.e=!0
_.f=d
_.r=e
_.w=f
_.x=g
_.y=0},
ea:function ea(a){this.a=a},
e7:function e7(a,b){this.a=a
this.b=b},
e8:function e8(a){this.a=a},
e9:function e9(a,b){this.a=a
this.b=b},
bU:function bU(a){this.b=a},
Z(a,b,c){var s,r=A.l([],t.g)
if(c==null){if(0>=a.length)return A.m(a,0)
s=a.charCodeAt(0)}else s=c
return new A.a9(a,s,r,b)},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc(a,b){return a+b},
dZ:function dZ(a,b,c){this.c=a
this.d=b
this.e=c},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e1:function e1(){},
e3:function e3(){},
d0:function d0(){this.a=$},
ef:function ef(a){this.a=a},
bf:function bf(a,b){this.a=a
this.b=b},
eH:function eH(){this.a=!1},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
hZ(a,b){return new A.eT(a,B.a.H(b,2),1)},
p:function p(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.Q=_.z=0},
eA:function eA(){},
eB:function eB(a,b){this.a=a
this.b=b},
ey:function ey(){},
ez:function ez(a){this.a=a},
ex:function ex(){},
eD:function eD(){},
eE:function eE(a){this.a=a},
eC:function eC(){},
eo:function eo(){},
ep:function ep(a){this.a=a},
eq:function eq(){},
er:function er(a){this.a=a},
es:function es(){},
et:function et(){},
eu:function eu(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(){},
eT:function eT(a,b,c){this.b=a
this.d=b
this.e=c},
bv:function bv(){},
df:function df(a){this.a=0
this.b=!1
this.c=a},
f6:function f6(){},
cv:function cv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=null
_.f=d
_.r=e
_.w=f
_.x=$
_.a=null},
dC:function dC(){},
cF:function cF(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
dc:function dc(a,b){var _=this
_.b=a
_.c=null
_.d=b
_.a=null},
cE:function cE(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.f=_.e=_.d=0
_.r=1
_.w=$
_.x=c
_.y=d
_.Q=_.z=!1
_.as=e
_.at=f
_.ax=g
_.a=null},
dO:function dO(a){this.a=a},
B:function B(){},
eI:function eI(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dF:function dF(a,b){this.a=a
this.b=b},
iM(a,b,c,d,e,f){var s=A.D(e).j("a_<2>")
s=A.ad(new A.a_(e,s),s.j("h.E"))
s.$flags=1
s=s
B.b.aZ(s,new A.dH())
return new A.dG(s,f,new A.a3(new A.f(a,b),new A.f(c,d)),A.l([],t.w))},
dG:function dG(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dH:function dH(){},
dI:function dI(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
e6:function e6(){},
jv(a,b,c){var s,r,q=$.iy(),p=A.hp(t.u,t.J)
A.ja(p,q,new A.eL(),null)
q=$.iC()
s=t.W
r=a*b
if(r>0)r=A.fL(r,c.$1(B.C),!1,s)
else r=J.hn(0,s)
r=new A.a7(r,new A.a3(new A.f(0,0),new A.f(a,b)),t.I)
r.bW(a,b,c,s)
r=new A.eJ(a,b,q,r,p)
r.cD()
return r},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eL:function eL(){},
eK:function eK(a){this.a=a},
kV(a,b){var s,r,q,p,o,n,m=A.fL(7150,B.U,!1,t.G),l=A.fL(7150,B.U,!1,t.d6),k=B.c.W(window.devicePixelRatio),j=a.getContext("2d")
a.width=1300*k
a.height=770*k
s=a.style
s.width="1300px"
s=a.style
s.height="770px"
s=A.aJ(t.c4,t.e)
r=new A.c1(new A.cK(s,t.r),A.l([],t.f),new A.dD(new A.dL(new A.a7(m,new A.a3(new A.f(0,0),new A.f(130,55)),t._),new A.a7(l,new A.a3(new A.f(0,0),new A.f(130,55)),t.U)),new A.dN("Menlo, Consolas",14,10,14,1,11),a,j,k),t.a5)
s.k(0,new A.E(32,!1,!1),B.D)
s.k(0,new A.E(27,!1,!1),B.l)
s.k(0,new A.E(8,!1,!1),B.l)
s.k(0,new A.E(71,!1,!1),B.v)
s.k(0,new A.E(84,!1,!1),B.E)
s.k(0,new A.E(69,!1,!1),B.F)
s.k(0,new A.E(68,!1,!1),B.G)
s.k(0,new A.E(70,!1,!0),B.H)
s.k(0,new A.E(83,!1,!0),B.I)
s.k(0,new A.E(78,!1,!0),B.J)
s.k(0,new A.E(68,!1,!0),B.K)
s.k(0,new A.E(88,!0,!0),B.L)
q=A.jv(130,43,new A.fB())
p=new A.dB($.im(),$.iI)
s=new A.d0()
m=t.bo
l=new A.ci(s.gc1(),null,m)
s.a=l
o=new A.d3(q,p,s)
new A.bi(l,m.j("bi<1>")).d0(o.gcg())
n=new A.eH()
$.hb()
m=t.w
l=A.l([],m)
k=A.l([],t.g)
l=new A.cE(b,new A.ek(),new A.dF(new A.a3(new A.f(0,25),new A.f(32,30)),l),A.iM(100,39,30,16,q.e,n),n,o,k)
l.w=new A.eI(p,new A.bh(k,t.k),new A.a3(new A.f(50,41),new A.f(47,14)),A.l([],m))
r.aT(l)
r.scS(!0)
r.sbK(!0)},
fB:function fB(){},
bL:function bL(a,b){this.a=a
this.b=b},
dU:function dU(a,b,c){this.a=a
this.b=b
this.d=c},
dV(a){return $.j9.a4(a,new A.dW(a))},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
dW:function dW(a){this.a=a},
dD:function dD(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e},
dE:function dE(a){this.a=a},
dN:function dN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dL:function dL(a,b){this.a=a
this.b=b},
j_(a,b,c){return new A.H(a,b,c)},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b){this.a=a
this.$ti=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
en:function en(){},
ei:function ei(){},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=!0
_.f=_.e=null
_.r=!1
_.x=null
_.$ti=d},
aK:function aK(){},
a7:function a7(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(a,b,c){this.c=a
this.d=b
this.b=c},
dl:function dl(){},
a3:function a3(a,b){this.a=a
this.b=b},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
J(a,b){return new A.f(a,b)},
db:function db(){},
f:function f(a,b){this.a=a
this.b=b},
dx:function dx(){},
kR(){var s=t.E.a(document.querySelector("#canvas"))
A.fR(s,"dblclick",new A.fy(),!1)
A.kV(s,A.kS())},
i4(){var s,r,q,p,o,n,m=new A.fn().$0()
if(m)s=A.ho(document)
else{r=document.querySelector("#canvas")
r.toString
s=A.ho(r)}q=m?B.an:B.al
for(r=q.length,p=s.a,o=0;o<r;++o){n=q[o]
if(n in p){s.cL(n)
return}}},
fy:function fy(){},
fn:function fn(){},
ig(a){return t.d.b(a)||t.A.b(a)||t.cF.b(a)||t.V.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
ii(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
kW(a){throw A.F(new A.bK("Field '"+a+"' has been assigned during initialization."),new Error())},
h9(){throw A.F(A.j5(""),new Error())},
ie(a){var s,r,q,p=B.ap.h(0,a.gn(0))
p.toString
s=p>>>16&255
r=p>>>8&255
q=p&255
p=B.X.h(0,a.gn(0))
p.toString
if(p)return new A.w(q/3|0,r/3|0,s/2|0)
return new A.w(B.a.ap(q,1.8),B.a.ap(r,1.8),B.a.ap(s,1.8))},
kH(a){var s,r=B.X.h(0,a.gn(0))
r.toString
if(r)return 16777215
s=A.ie(a)
return B.a.H(s.a+s.c,2)},
iV(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p=d-2,o=j+B.d.Y(" ",p)+j
for(s=c+1,r=c+e-1;s<r;++s)a.B(b,s,o,f)
q=B.d.Y(h,p)
p=B.d.Y(l,p)
a.B(b,c,g+q+i,f)
a.B(b,r,k+p+m,f)}},B={}
var w=[A,J,B]
var $={}
A.fJ.prototype={}
J.bD.prototype={
q(a,b){return a===b},
gn(a){return A.bc(a)},
i(a){return"Instance of '"+A.ed(a)+"'"},
bA(a,b){throw A.e(A.hr(a,b))},
gA(a){return A.aS(A.h_(this))}}
J.cH.prototype={
i(a){return String(a)},
gn(a){return a?519018:218159},
gA(a){return A.aS(t.y)},
$in:1,
$iG:1}
J.bF.prototype={
q(a,b){return null==b},
i(a){return"null"},
gn(a){return 0},
$in:1}
J.Q.prototype={}
J.aH.prototype={
gn(a){return 0},
i(a){return String(a)}}
J.cY.prototype={}
J.bZ.prototype={}
J.ab.prototype={
i(a){var s=a[$.fC()]
if(s==null)return this.bT(a)
return"JavaScript function for "+J.bu(s)},
$iaD:1}
J.b5.prototype={
gn(a){return 0},
i(a){return String(a)}}
J.b6.prototype={
gn(a){return 0},
i(a){return String(a)}}
J.r.prototype={
bF(a,b){var s
a.$flags&1&&A.dA(a,"removeAt",1)
s=a.length
if(b>=s)throw A.e(A.eg(b,null))
return a.splice(b,1)[0]},
bE(a,b){var s
a.$flags&1&&A.dA(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aZ(a[s],b)){a.splice(s,1)
return!0}return!1},
R(a,b){var s
a.$flags&1&&A.dA(a,"addAll",2)
if(Array.isArray(b)){this.bZ(a,b)
return}for(s=J.ay(b);s.m();)a.push(s.gp())},
bZ(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.e(A.N(a))
for(s=0;s<r;++s)a.push(b[s])},
aM(a){a.$flags&1&&A.dA(a,"clear","clear")
a.length=0},
by(a,b,c){return new A.x(a,b,A.t(a).j("@<1>").N(c).j("x<1,2>"))},
a1(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.e(A.N(a))}return s},
E(a,b,c){c.toString
return this.a1(a,b,c,t.z)},
J(a,b){if(!(b>=0&&b<a.length))return A.m(a,b)
return a[b]},
gaN(a){if(a.length>0)return a[0]
throw A.e(A.fH())},
gbw(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.fH())},
aI(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.e(A.N(a))}return!1},
aZ(a,b){var s,r,q,p,o,n
a.$flags&2&&A.dA(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
p=b.$2(r,q)
if(typeof p!=="number")return p.dw()
if(p>0){a[0]=q
a[1]=r}return}o=0
if(A.t(a).c.b(null))for(n=0;n<a.length;++n)if(a[n]===void 0){a[n]=null;++o}a.sort(A.bq(b,2))
if(o>0)this.cs(a,o)},
cs(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
I(a,b){var s
for(s=0;s<a.length;++s)if(J.aZ(a[s],b))return!0
return!1},
i(a){return A.fI(a,"[","]")},
gv(a){return new J.W(a,a.length,A.t(a).j("W<1>"))},
gn(a){return A.bc(a)},
gl(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.e(A.h3(a,b))
return a[b]},
$ik:1}
J.dQ.prototype={}
J.W.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.aX(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bG.prototype={
U(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaf(b)
if(this.gaf(a)===s)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf(a){return a===0?1/a<0:a<0},
W(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.c0(""+a+".toInt()"))},
aL(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.c0(""+a+".ceil()"))},
ac(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.c0(""+a+".floor()"))},
ak(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.c0(""+a+".round()"))},
aa(a,b,c){if(this.U(b,c)>0)throw A.e(A.dy(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
bL(a,b){var s
if(b>20)throw A.e(A.af(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
an(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ap(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bg(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.bg(a,b)},
bg(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.c0("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+A.o(b)))},
aG(a,b){var s
if(a>0)s=this.cz(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cz(a,b){return b>31?0:a>>>b},
gA(a){return A.aS(t.H)},
$iu:1,
$ian:1}
J.bE.prototype={
gA(a){return A.aS(t.S)},
$in:1,
$id:1}
J.cI.prototype={
gA(a){return A.aS(t.i)},
$in:1}
J.b4.prototype={
cP(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.b0(a,r-s)},
bP(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b1(a,b,c){return a.substring(b,A.jo(b,c,a.length))},
b0(a,b){return this.b1(a,b,null)},
Y(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.a9)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
d8(a,b,c){var s=b-a.length
if(s<=0)return a
return this.Y(c,s)+a},
ai(a,b){return this.d8(a,b," ")},
cZ(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
U(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gn(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gA(a){return A.aS(t.N)},
gl(a){return a.length},
$in:1,
$iI:1}
A.bK.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.ej.prototype={}
A.aq.prototype={}
A.as.prototype={
gv(a){var s=this
return new A.X(s,s.gl(s),A.D(s).j("X<as.E>"))},
cY(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.o(p.J(0,0))
if(o!==p.gl(p))throw A.e(A.N(p))
for(r=s,q=1;q<o;++q){r=r+b+A.o(p.J(0,q))
if(o!==p.gl(p))throw A.e(A.N(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.o(p.J(0,q))
if(o!==p.gl(p))throw A.e(A.N(p))}return r.charCodeAt(0)==0?r:r}},
a1(a,b,c){var s,r,q=this,p=q.gl(q)
for(s=b,r=0;r<p;++r){s=c.$2(s,q.J(0,r))
if(p!==q.gl(q))throw A.e(A.N(q))}return s},
E(a,b,c){c.toString
return this.a1(0,b,c,t.z)}}
A.X.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.dz(q),o=p.gl(q)
if(r.b!==o)throw A.e(A.N(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
A.x.prototype={
gl(a){return J.cs(this.a)},
J(a,b){return this.b.$1(J.iE(this.a,b))}}
A.z.prototype={
gv(a){return new A.dd(J.ay(this.a),this.b)}}
A.dd.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()}}
A.bA.prototype={
gv(a){return new A.cC(J.ay(this.a),this.b)},
gl(a){return J.cs(this.a)+this.b.length}}
A.by.prototype={}
A.cC.prototype={
m(){var s,r=this
if(r.a.m())return!0
s=r.b
if(s!=null){s=new J.W(s,s.length,A.t(s).j("W<1>"))
r.a=s
r.b=null
return s.m()}return!1},
gp(){return this.a.gp()}}
A.c2.prototype={
gv(a){return new A.de(J.ay(this.a),this.$ti.j("de<1>"))}}
A.de.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())}}
A.ba.prototype={
gv(a){var s=this.a
return new A.cW(new A.X(s,s.gl(0),s.$ti.j("X<as.E>")))}}
A.cW.prototype={
m(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gp(){var s=this.b
return s==null?A.ax(A.fH()):s}}
A.bz.prototype={}
A.d9.prototype={}
A.bg.prototype={}
A.ah.prototype={
gn(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.d.gn(this.a)&536870911
this._hashCode=s
return s},
i(a){return'Symbol("'+this.a+'")'},
q(a,b){if(b==null)return!1
return b instanceof A.ah&&this.a===b.a},
$ibY:1}
A.aA.prototype={}
A.bw.prototype={
i(a){return A.dX(this)}}
A.aB.prototype={
gl(a){return this.b.length},
gbd(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a0(a){return!1},
h(a,b){if(!this.a0(b))return null
return this.b[this.a[b]]},
K(a,b){var s,r,q=this.gbd(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gbv(){return new A.aO(this.gbd(),this.$ti.j("aO<1>"))},
gam(a){return new A.aO(this.b,this.$ti.j("aO<2>"))}}
A.aO.prototype={
gl(a){return this.a.length},
gv(a){var s=this.a
return new A.dr(s,s.length,this.$ti.j("dr<1>"))}}
A.dr.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.aE.prototype={
az(){var s=this,r=s.$map
if(r==null){r=new A.bH(s.$ti.j("bH<1,2>"))
A.ia(s.a,r)
s.$map=r}return r},
h(a,b){return this.az().h(0,b)},
K(a,b){this.az().K(0,b)},
gl(a){return this.az().a}}
A.dP.prototype={
gd3(){var s=this.a
if(s instanceof A.ah)return s
return this.a=new A.ah(s)},
gd9(){var s,r,q,p,o,n=this
if(n.c===1)return B.V
s=n.d
r=J.dz(s)
q=r.gl(s)-J.cs(n.e)-n.f
if(q===0)return B.V
p=[]
for(o=0;o<q;++o)p.push(r.h(s,o))
p.$flags=3
return p},
gd4(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.Y
s=k.e
r=J.dz(s)
q=r.gl(s)
p=k.d
o=J.dz(p)
n=o.gl(p)-q-k.f
if(q===0)return B.Y
m=new A.R(t.B)
for(l=0;l<q;++l)m.k(0,new A.ah(r.h(s,l)),o.h(p,n+l))
return new A.aA(m,t.c)}}
A.ec.prototype={
$0(){return B.c.ac(1000*this.a.now())},
$S:2}
A.eb.prototype={
$2(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:20}
A.eF.prototype={
F(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bT.prototype={
i(a){return"Null check operator used on a null value"}}
A.cJ.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.d8.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.e5.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cg.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iag:1}
A.ap.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.il(r==null?"unknown":r)+"'"},
$iaD:1,
gdv(){return this},
$C:"$1",
$R:1,
$D:null}
A.cy.prototype={$C:"$0",$R:0}
A.cz.prototype={$C:"$2",$R:2}
A.d6.prototype={}
A.d5.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.il(s)+"'"}}
A.b0.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b0))return!1
return this.$_target===b.$_target&&this.a===b.a},
gn(a){return(A.h8(this.a)^A.bc(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ed(this.a)+"'")}}
A.d1.prototype={
i(a){return"RuntimeError: "+this.a}}
A.f8.prototype={}
A.R.prototype={
gl(a){return this.a},
a0(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else{r=this.cU(a)
return r}},
cU(a){var s=this.d
if(s==null)return!1
return this.ae(s[this.ad(a)],a)>=0},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cV(b)},
cV(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ad(a)]
r=this.ae(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.b3(s==null?q.b=q.aB():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.b3(r==null?q.c=q.aB():r,b,c)}else q.cW(b,c)},
cW(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.aB()
s=p.ad(a)
r=o[s]
if(r==null)o[s]=[p.aC(a,b)]
else{q=p.ae(r,a)
if(q>=0)r[q].b=b
else r.push(p.aC(a,b))}},
a4(a,b){var s,r,q=this
if(q.a0(a)){s=q.h(0,a)
return s==null?A.D(q).y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
K(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.e(A.N(s))
r=r.c}},
b3(a,b,c){var s=a[b]
if(s==null)a[b]=this.aC(b,c)
else s.b=c},
aC(a,b){var s=this,r=new A.dR(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ad(a){return J.a6(a)&1073741823},
ae(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aZ(a[r].a,b))return r
return-1},
i(a){return A.dX(this)},
aB(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.dR.prototype={}
A.aI.prototype={
gl(a){return this.a.a},
gv(a){var s=this.a
return new A.bM(s,s.r,s.e)}}
A.bM.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.N(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.a_.prototype={
gl(a){return this.a.a},
gv(a){var s=this.a
return new A.bN(s,s.r,s.e)}}
A.bN.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.N(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.bH.prototype={
ad(a){return A.kC(a)&1073741823},
ae(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aZ(a[r].a,b))return r
return-1}}
A.fu.prototype={
$1(a){return this.a(a)},
$S:5}
A.fv.prototype={
$2(a,b){return this.a(a,b)},
$S:41}
A.fw.prototype={
$1(a){return this.a(a)},
$S:18}
A.ce.prototype={}
A.bR.prototype={$iv:1}
A.cM.prototype={
gA(a){return B.as},
$in:1}
A.b9.prototype={
gl(a){return a.length},
$iP:1}
A.bP.prototype={
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$ik:1}
A.bQ.prototype={$ik:1}
A.cN.prototype={
gA(a){return B.at},
$in:1}
A.cO.prototype={
gA(a){return B.au},
$in:1}
A.cP.prototype={
gA(a){return B.av},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.cQ.prototype={
gA(a){return B.aw},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.cR.prototype={
gA(a){return B.ax},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.cS.prototype={
gA(a){return B.az},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.cT.prototype={
gA(a){return B.aA},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.bS.prototype={
gA(a){return B.aB},
gl(a){return a.length},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.cU.prototype={
gA(a){return B.aC},
gl(a){return a.length},
h(a,b){A.aQ(b,a,a.length)
return a[b]},
$in:1}
A.ca.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.cd.prototype={}
A.a0.prototype={
j(a){return A.cn(v.typeUniverse,this,a)},
N(a){return A.hQ(v.typeUniverse,this,a)}}
A.dp.prototype={}
A.dv.prototype={
i(a){return A.T(this.a,null)}}
A.dm.prototype={
i(a){return this.a}}
A.cj.prototype={$iai:1}
A.eN.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
A.eM.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:38}
A.eO.prototype={
$0(){this.a.$0()},
$S:8}
A.eP.prototype={
$0(){this.a.$0()},
$S:8}
A.fd.prototype={
bX(a,b){if(self.setTimeout!=null)self.setTimeout(A.bq(new A.fe(this,b),0),a)
else throw A.e(A.c0("`setTimeout()` not found."))}}
A.fe.prototype={
$0(){this.b.$0()},
$S:0}
A.bl.prototype={
gp(){return this.b},
cv(a,b){var s,r,q
a=a
b=b
s=this.a
for(;!0;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;!0;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.cv(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.hL
return!1}if(0>=p.length)return A.m(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.hL
throw n
return!1}if(0>=p.length)return A.m(p,-1)
o.a=p.pop()
m=1
continue}throw A.e(A.d4("sync*"))}return!1},
bj(a){var s,r,q=this
if(a instanceof A.bk){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.ay(a)
return 2}}}
A.bk.prototype={
gv(a){return new A.bl(this.a())}}
A.a8.prototype={
i(a){return A.o(this.a)},
$iq:1,
ga6(){return this.b}}
A.bi.prototype={}
A.c4.prototype={
aD(){},
aE(){}}
A.bj.prototype={
gaA(){return this.c<4},
cr(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
cA(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.c7($.A)
A.ik(s.gcp())
if(c!=null)s.c=c
return s}s=$.A
r=d?1:0
q=b!=null?32:0
A.jA(s,b)
p=new A.c4(n,a,s,r|q,A.D(n).j("c4<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.i2(n.a)
return p},
aq(){if((this.c&4)!==0)return new A.au("Cannot add new events after calling close")
return new A.au("Cannot add new events while doing an addStream")},
ce(a){var s,r,q,p=this,o=p.c
if((o&2)!==0)throw A.e(A.d4(u.o))
s=p.d
if(s==null)return
r=o&1
p.c=o^3
for(;s!=null;){o=s.ay
if((o&1)===r){s.ay=o|2
a.$1(s)
o=s.ay^=1
q=s.ch
if((o&4)!==0)p.cr(s)
s.ay&=4294967293
s=q}else s=s.ch}p.c&=4294967293
if(p.d==null)p.b9()},
b9(){if((this.c&4)!==0)if(null.gdA())null.b7(null)
A.i2(this.b)}}
A.ci.prototype={
gaA(){return A.bj.prototype.gaA.call(this)&&(this.c&2)===0},
aq(){if((this.c&2)!==0)return new A.au(u.o)
return this.bV()},
a9(a){var s=this,r=s.d
if(r==null)return
if(r===s.e){s.c|=2
r.b6(a)
s.c&=4294967293
if(s.d==null)s.b9()
return}s.ce(new A.fc(s,a))}}
A.fc.prototype={
$1(a){a.b6(this.b)},
$S(){return this.a.$ti.j("~(aM<1>)")}}
A.dh.prototype={}
A.c3.prototype={}
A.dq.prototype={
d2(a){if((this.c&15)!==6)return!0
return this.b.b.aU(this.d,a.a)},
cR(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.dg(r,p,a.b)
else q=o.aU(r,p)
try{p=q
return p}catch(s){if(t.b7.b(A.bt(s))){if((this.c&1)!==0)throw A.e(A.b_("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.b_("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.M.prototype={
dk(a,b,c){var s,r=$.A
if(r===B.e){if(!t.C.b(b)&&!t.x.b(b))throw A.e(A.fE(b,"onError",u.c))}else b=A.kq(b,r)
s=new A.M(r,c.j("M<0>"))
this.b4(new A.dq(s,3,a,b,this.$ti.j("@<1>").N(c).j("dq<1,2>")))
return s},
cw(a){this.a=this.a&1|16
this.c=a},
a7(a){this.a=a.a&30|this.a&1
this.c=a.c},
b4(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.b4(a)
return}s.a7(r)}A.bn(null,null,s.b,new A.eU(s,a))}},
be(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.be(a)
return}n.a7(s)}m.a=n.a8(a)
A.bn(null,null,n.b,new A.eY(m,n))}},
a_(){var s=this.c
this.c=null
return this.a8(s)},
a8(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cb(a){var s=this,r=s.a_()
s.a=8
s.c=a
A.aN(s,r)},
ca(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a_()
q.a7(a)
A.aN(q,r)},
au(a){var s=this.a_()
this.cw(a)
A.aN(this,s)},
c9(a,b){this.au(new A.a8(a,b))},
b7(a){if(this.$ti.j("bB<1>").b(a)){this.c5(a)
return}this.c4(a)},
c4(a){this.a^=2
A.bn(null,null,this.b,new A.eW(this,a))},
c5(a){A.fS(a,this,!1)
return},
c3(a){this.a^=2
A.bn(null,null,this.b,new A.eV(this,a))},
$ibB:1}
A.eU.prototype={
$0(){A.aN(this.a,this.b)},
$S:0}
A.eY.prototype={
$0(){A.aN(this.b,this.a.a)},
$S:0}
A.eX.prototype={
$0(){A.fS(this.a.a,this.b,!0)},
$S:0}
A.eW.prototype={
$0(){this.a.cb(this.b)},
$S:0}
A.eV.prototype={
$0(){this.a.au(this.b)},
$S:0}
A.f0.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.de(q.d)}catch(p){s=A.bt(p)
r=A.aU(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fF(q)
n=k.a
n.c=new A.a8(q,o)
q=n}q.b=!0
return}if(j instanceof A.M&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.M){m=k.b.a
l=new A.M(m.b,m.$ti)
j.dk(new A.f1(l,m),new A.f2(l),t.b9)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.f1.prototype={
$1(a){this.a.ca(this.b)},
$S:7}
A.f2.prototype={
$2(a,b){this.a.au(new A.a8(a,b))},
$S:21}
A.f_.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aU(p.d,this.b)}catch(o){s=A.bt(o)
r=A.aU(o)
q=s
p=r
if(p==null)p=A.fF(q)
n=this.a
n.c=new A.a8(q,p)
n.b=!0}},
$S:0}
A.eZ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.d2(s)&&p.a.e!=null){p.c=p.a.cR(s)
p.b=!1}}catch(o){r=A.bt(o)
q=A.aU(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fF(p)
m=l.b
m.c=new A.a8(p,n)
p=m}p.b=!0}},
$S:0}
A.dg.prototype={}
A.be.prototype={
gl(a){var s={},r=new A.M($.A,t.a)
s.a=0
this.bx(new A.el(s,this),!0,new A.em(s,r),r.gc8())
return r}}
A.el.prototype={
$1(a){++this.a.a},
$S(){return A.D(this.b).j("~(1)")}}
A.em.prototype={
$0(){var s=this.b,r=this.a.a,q=s.a_()
s.a=8
s.c=r
A.aN(s,q)},
$S:0}
A.c5.prototype={
gn(a){return(A.bc(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bi&&b.a===this.a}}
A.c6.prototype={
aD(){},
aE(){}}
A.aM.prototype={
b6(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.a9(a)
else this.c0(new A.dj(a))},
aD(){},
aE(){},
c0(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.dt()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aX(q)}},
a9(a){var s=this,r=s.e
s.e=r|64
s.d.bJ(s.a,a)
s.e&=4294967231
s.c7((r&4)!==0)},
c7(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aD()
else q.aE()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aX(q)}}
A.ch.prototype={
bx(a,b,c,d){return this.a.cA(a,d,c,b===!0)},
d0(a){return this.bx(a,null,null,null)}}
A.dk.prototype={}
A.dj.prototype={}
A.dt.prototype={
aX(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ik(new A.f7(s,a))
s.a=1}}
A.f7.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.a9(s.b)},
$S:0}
A.c7.prototype={
cq(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bI(s)}}else r.a=q}}
A.fh.prototype={}
A.fm.prototype={
$0(){A.iX(this.a,this.b)},
$S:0}
A.f9.prototype={
bI(a){var s,r,q
try{if(B.e===$.A){a.$0()
return}A.i_(null,null,this,a)}catch(q){s=A.bt(q)
r=A.aU(q)
A.cr(s,r)}},
dj(a,b){var s,r,q
try{if(B.e===$.A){a.$1(b)
return}A.i0(null,null,this,a,b)}catch(q){s=A.bt(q)
r=A.aU(q)
A.cr(s,r)}},
bJ(a,b){a.toString
return this.dj(a,b,t.z)},
bm(a){return new A.fa(this,a)},
cK(a,b){return new A.fb(this,a,b)},
df(a){if($.A===B.e)return a.$0()
return A.i_(null,null,this,a)},
de(a){a.toString
return this.df(a,t.z)},
di(a,b){if($.A===B.e)return a.$1(b)
return A.i0(null,null,this,a,b)},
aU(a,b){var s=t.z
a.toString
return this.di(a,b,s,s)},
dh(a,b,c){if($.A===B.e)return a.$2(b,c)
return A.kr(null,null,this,a,b,c)},
dg(a,b,c){var s=t.z
a.toString
return this.dh(a,b,c,s,s,s)},
dc(a){return a},
bD(a){var s=t.z
a.toString
return this.dc(a,s,s,s)}}
A.fa.prototype={
$0(){return this.a.bI(this.b)},
$S:0}
A.fb.prototype={
$1(a){return this.a.bJ(this.b,a)},
$S(){return this.c.j("~(0)")}}
A.c9.prototype={
gv(a){var s=this,r=new A.ds(s,s.r,s.$ti.j("ds<1>"))
r.c=s.e
return r},
gl(a){return this.a},
I(a,b){var s=this.cc(b)
return s},
cc(a){var s=this.d
if(s==null)return!1
return this.bc(s[a.gn(a)&1073741823],a)>=0},
bk(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ba(s==null?q.b=A.fT():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ba(r==null?q.c=A.fT():r,b)}else return q.bY(b)},
bY(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.fT()
s=J.a6(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ar(a)]
else{if(q.bc(r,a)>=0)return!1
r.push(q.ar(a))}return!0},
ba(a,b){if(a[b]!=null)return!1
a[b]=this.ar(b)
return!0},
ar(a){var s=this,r=new A.f5(a)
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aZ(a[r].a,b))return r
return-1}}
A.f5.prototype={}
A.ds.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.N(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.bh.prototype={
gl(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.m(s,b)
return s[b]}}
A.dS.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:25}
A.i.prototype={
gv(a){return new A.X(a,this.gl(a),A.br(a).j("X<i.E>"))},
J(a,b){return this.h(a,b)},
I(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.aZ(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.e(A.N(a))}return!1},
by(a,b,c){return new A.x(a,b,A.br(a).j("@<i.E>").N(c).j("x<1,2>"))},
i(a){return A.fI(a,"[","]")},
$ik:1}
A.bO.prototype={
dq(a){var s,r,q,p,o=this
for(s=new A.bM(o,o.r,o.e),r=A.D(o).y[1];s.m();){q=s.d
p=o.h(0,q)
o.k(0,q,a.$2(q,p==null?r.a(p):p))}},
gl(a){return this.a},
i(a){return A.dX(this)}}
A.dY.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.o(a)
r.a=(r.a+=s)+": "
s=A.o(b)
r.a+=s},
$S:26}
A.dw.prototype={}
A.cL.prototype={
h(a,b){return this.a.h(0,b)},
K(a,b){this.a.K(0,b)},
gl(a){return this.a.a},
gbv(){var s=this.a
return new A.aI(s,A.D(s).j("aI<1>"))},
i(a){return A.dX(this.a)},
gam(a){var s=this.a
return new A.a_(s,A.D(s).j("a_<2>"))}}
A.da.prototype={}
A.bV.prototype={
i(a){return A.fI(this,"{","}")}}
A.cf.prototype={}
A.co.prototype={}
A.e4.prototype={
$2(a,b){var s=this.b,r=this.a,q=(s.a+=r.a)+a.a
s.a=q
s.a=q+": "
q=A.b2(b)
s.a+=q
r.a=", "},
$S:28}
A.aC.prototype={
b5(a){var s=1000,r=B.a.an(a,s),q=B.a.H(a-r,s),p=this.b+r,o=B.a.an(p,s),n=this.c
return new A.aC(A.iU(this.a+B.a.H(p-o,s)+q,o,n),o,n)},
q(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gn(a){return A.jd(this.a,this.b,B.m,B.m)},
bu(a){var s=this.a,r=a.a
if(s>=r)s=s===r&&this.b<a.b
else s=!0
return s},
i(a){var s=this,r=A.hl(A.cZ(s)),q=A.aa(A.hy(s)),p=A.aa(A.hu(s)),o=A.aa(A.hv(s)),n=A.aa(A.hx(s)),m=A.aa(A.hz(s)),l=A.dK(A.hw(s)),k=s.b,j=k===0?"":A.dK(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
dl(){var s=this,r=A.cZ(s)>=-9999&&A.cZ(s)<=9999?A.hl(A.cZ(s)):A.iT(A.cZ(s)),q=A.aa(A.hy(s)),p=A.aa(A.hu(s)),o=A.aa(A.hv(s)),n=A.aa(A.hx(s)),m=A.aa(A.hz(s)),l=A.dK(A.hw(s)),k=s.b,j=k===0?"":A.dK(k)
k=r+"-"+q
if(s.c)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j}}
A.eQ.prototype={
i(a){return this.bb()}}
A.q.prototype={
ga6(){return A.jh(this)}}
A.cw.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.b2(s)
return"Assertion failed"}}
A.ai.prototype={}
A.a1.prototype={
gaw(){return"Invalid argument"+(!this.a?"(s)":"")},
gav(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gaw()+q+o
if(!s.a)return n
return n+s.gav()+": "+A.b2(s.gaP())},
gaP(){return this.b}}
A.bd.prototype={
gaP(){return this.b},
gaw(){return"RangeError"},
gav(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.cG.prototype={
gaP(){return this.b},
gaw(){return"RangeError"},
gav(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.cV.prototype={
i(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.bX("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=A.b2(n)
p=i.a+=p
j.a=", "}k.d.K(0,new A.e4(j,i))
m=A.b2(k.a)
l=i.i(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.c_.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.d7.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.au.prototype={
i(a){return"Bad state: "+this.a}}
A.cA.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.b2(s)+"."}}
A.cX.prototype={
i(a){return"Out of Memory"},
ga6(){return null},
$iq:1}
A.bW.prototype={
i(a){return"Stack Overflow"},
ga6(){return null},
$iq:1}
A.eS.prototype={
i(a){return"Exception: "+this.a}}
A.h.prototype={
a1(a,b,c){var s,r
for(s=this.gv(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
E(a,b,c){c.toString
return this.a1(0,b,c,t.z)},
aI(a,b){var s
for(s=this.gv(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
gl(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
J(a,b){var s,r
A.hA(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.e(A.hm(b,b-r,this,"index"))},
i(a){return A.j3(this,"(",")")}}
A.S.prototype={
gn(a){return A.j.prototype.gn.call(this,0)},
i(a){return"null"}}
A.j.prototype={$ij:1,
q(a,b){return this===b},
gn(a){return A.bc(this)},
i(a){return"Instance of '"+A.ed(this)+"'"},
bA(a,b){throw A.e(A.hr(this,b))},
gA(a){return A.ic(this)},
toString(){return this.i(this)}}
A.du.prototype={
i(a){return""},
$iag:1}
A.ek.prototype={
gbr(){var s,r=this.b
if(r==null)r=$.d_.$0()
s=r-this.a
if($.hb()===1e6)return s
return s*1000},
b_(a){var s=this,r=s.b
if(r!=null){s.a=s.a+($.d_.$0()-r)
s.b=null}},
bH(a){var s=this.b
this.a=s==null?$.d_.$0():s}}
A.bX.prototype={
gl(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.ct.prototype={
i(a){return String(a)}}
A.cu.prototype={
i(a){return String(a)}}
A.az.prototype={$iaz:1}
A.b1.prototype={$ib1:1}
A.a2.prototype={
gl(a){return a.length}}
A.bx.prototype={
gl(a){return a.length}}
A.dJ.prototype={}
A.dM.prototype={
i(a){return String(a)}}
A.b.prototype={
i(a){return a.localName}}
A.a.prototype={$ia:1}
A.cB.prototype={
c_(a,b,c,d){return a.addEventListener(b,A.bq(c,1),!1)}}
A.cD.prototype={
gl(a){return a.length}}
A.bC.prototype={$ibC:1}
A.aG.prototype={$iaG:1}
A.y.prototype={
i(a){var s=a.nodeValue
return s==null?this.bR(a):s},
$iy:1}
A.d2.prototype={
gl(a){return a.length}}
A.L.prototype={}
A.aL.prototype={
bG(a,b){var s
this.cd(a)
s=A.i6(b,t.H)
s.toString
return this.ct(a,s)},
ct(a,b){return a.requestAnimationFrame(A.bq(b,1))},
cd(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaL:1}
A.ak.prototype={$iak:1}
A.fG.prototype={}
A.dn.prototype={}
A.eR.prototype={
$1(a){return this.a.$1(a)},
$S:10}
A.di.prototype={}
A.bJ.prototype={$ibJ:1}
A.fi.prototype={
$1(a){var s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.k2,a,!1)
A.fY(s,$.fC(),a)
return s},
$S:5}
A.fj.prototype={
$1(a){return new this.a(a)},
$S:5}
A.fo.prototype={
$1(a){return new A.bI(a)},
$S:15}
A.fp.prototype={
$1(a){return new A.aF(a,t.q)},
$S:16}
A.fq.prototype={
$1(a){return new A.ac(a)},
$S:17}
A.ac.prototype={
h(a,b){return A.fW(this.a[b])},
q(a,b){if(b==null)return!1
return b instanceof A.ac&&this.a===b.a},
i(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.bU(0)
return s}},
cM(a,b){var s=this.a,r=b==null?null:A.dT(new A.x(b,A.kP(),A.t(b).j("x<1,@>")),!0,t.z)
return A.fW(s[a].apply(s,r))},
cL(a){return this.cM(a,null)},
gn(a){return 0}}
A.bI.prototype={}
A.aF.prototype={
c6(a){var s=a<0||a>=this.gl(0)
if(s)throw A.e(A.af(a,0,this.gl(0),null,null))},
h(a,b){this.c6(b)
return this.bS(0,b)},
gl(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.e(A.d4("Bad JsArray length"))},
$ik:1}
A.c8.prototype={}
A.f3.prototype={
ah(a){if(a<=0||a>4294967296)throw A.e(A.jn("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
d6(){return Math.random()}}
A.dB.prototype={
gS(){return new A.bk(this.cJ(),t.cs)},
cJ(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gS(a,b,c){if(b===1){p.push(c)
r=q}while(true)switch(r){case 0:o=s.a
r=2
return a.bj(o.gam(o))
case 2:r=3
return a.bj(s.b)
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
dm(a){var s,r,q,p=this
for(s=p.a,s=s.gam(s),s=s.gv(s);s.m();)s.gp().al(a,p.gS())
for(s=p.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.aX)(s),++q)s[q].al(a,p.gS())}}
A.V.prototype={
gaJ(){return this.b-this.c-this.d},
bn(a){this.d+=a
this.c-=a},
ao(a){this.x=a},
i(a){return A.ic(this).i(0)+"<"+this.f+">"},
al(a,b){var s,r=this
if(!r.e)return
if(r.x.q(0,r.w))return
if(--r.y>0)return
s=r.x.Z(0,r.w).gd5()
r.w=r.w.a5(0,s)
r.y=10}}
A.b3.prototype={
T(a){return!0},
cX(a){var s=this.Q
if(a.bu(s))return!1
return a.bu(s.b5(2592e9))}}
A.Y.prototype={
gbz(){switch(this.ax){case B.A:return 3
case B.a_:return 7
case B.a0:return 1/0}},
bo(a){if(!this.x.q(0,this.w))return!1
return a.Z(0,this.w).gag()<=4},
T(a){var s=this.at
if(s==null)return!1
return a.b.Z(0,s.d).gag()<=this.gbz()*this.gbz()},
ao(a){var s=this,r=s.at
if(J.aZ(r==null?null:r.d,a)){s.b2(a)
return}r=s.at
if(r!=null){B.b.bE(r.c,s)
s.at=null}s.b2(a)},
al(a,b){var s,r,q,p=this
if(p.x.q(0,p.w))return
p.bQ(a,b)
if(p.x.q(0,p.w)){s=a.e.h(0,p.w)
p.at=s
s.c.push(p)
r=p.w
q=t.bz
q=A.ad(new A.c2(b,q),q.j("h.E"))
p.cn(a,r,q)}},
cn(a,b,c){var s,r,q,p,o,n,m,l=A.l([],t.l),k=A.j8(t.u),j=new A.ea(a),i=b.gaS()
B.b.R(l,new A.z(i,j,A.t(i).j("z<1>")))
i=a.d
r=i.a
q=i.b.b.a
p=r.length
while(!0){if(!(l.length!==0)){s=null
break}c$0:{o=B.b.bF(l,0)
n=o.gt(o)
m=o.gu(o)
i.C(n,m)
n=m*q+n
if(!(n>=0&&n<p))return A.m(r,n)
if(r[n].a===16777215){k.bk(0,o)
n=o.gaS()
B.b.R(l,new A.z(n,new A.e7(j,k),A.t(n).j("z<1>")))
break c$0}if(B.b.aI(c,new A.e8(o))){k.bk(0,o)
n=o.gaS()
B.b.R(l,new A.z(n,new A.e9(j,k),A.t(n).j("z<1>")))
break c$0}s=o
break}}if(s==null)throw A.e(A.d4("Cannot find place for "+this.i(0)+" to land."))
this.w=this.x=s}}
A.ea.prototype={
$1(a){return this.a.d.b.I(0,a)},
$S:6}
A.e7.prototype={
$1(a){return this.a.$1(a)&&!this.b.I(0,a)},
$S:6}
A.e8.prototype={
$1(a){return a.w.q(0,this.a)},
$S:19}
A.e9.prototype={
$1(a){return this.a.$1(a)&&!this.b.I(0,a)},
$S:6}
A.bU.prototype={
bb(){return"RangeMode."+this.b}}
A.a9.prototype={}
A.dZ.prototype={
gbs(){var s=this.d,r=this.e
return this.c.Q+new A.x(s,new A.e_(),A.t(s).j("x<1,d>")).E(0,0,A.fA())+0.7071067811865475*new A.x(r,new A.e0(),A.t(r).j("x<1,d>")).E(0,0,A.fA())},
gbM(){var s=this.e
return this.c.z+this.gbN()+0.7071067811865475*new A.x(s,new A.e2(),A.t(s).j("x<1,d>")).E(0,0,A.fA())},
gbN(){var s=this.d
return new A.x(s,new A.e1(),A.t(s).j("x<1,d>")).E(0,0,A.fA())},
gd7(){var s=this.d
s=A.ar(s,this.e,A.t(s).c)
return new A.z(s,new A.e3(),A.D(s).j("z<h.E>"))}}
A.e_.prototype={
$1(a){return a.Q},
$S:3}
A.e0.prototype={
$1(a){return a.Q},
$S:3}
A.e2.prototype={
$1(a){return a.z},
$S:3}
A.e1.prototype={
$1(a){return a.z},
$S:3}
A.e3.prototype={
$1(a){return!a.ga3()},
$S:1}
A.d0.prototype={
da(a){var s
$.iz().d1(B.ai,new A.ef(a),null,null)
s=this.a
s===$&&A.h9()
if(!s.gaA())A.ax(s.aq())
s.a9(a)},
c2(){}}
A.ef.prototype={
$0(){return"New "+this.a.i(0)+" about to be published."},
$S:22}
A.bf.prototype={}
A.eH.prototype={}
A.d3.prototype={
cI(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a,r=s.a,q=s.b,p=s.d,o=p.a,n=p.b.b.a,m=o.length,l=null,k=0;k<100;++k){j=$.hf().ah(r)
i=$.hf().ah(q)
p.C(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.m(o,j)
h=o[j]
if(h.a===16777215)continue
if(h.z>0)continue
if(h.Q>0)continue
l=h}if(l==null)return
r=l.b
s=s.c
g=new A.b3(s,!0,"Arrivals",B.y,r,B.C)
g.x=r
this.b.b.push(g)},
ci(a){var s,r,q,p
for(s=new A.bl(this.b.gS().a()),r=a.a.b,q=a.b;s.m();){p=s.b
if(p.w.q(0,r)&&p.a!==q)p.e=!1}}}
A.p.prototype={
gcQ(){var s,r=this,q=r.z
if(q>0){s=150+B.c.W(B.a.aa(q*10,0,100))
return new A.w(s,s,s)}else{q=r.Q
if(q>0){s=150+B.c.W(B.a.aa(q*10,0,100))
q=B.a.H(s,2)
return new A.w(s,q,q)}else{if(!(r.ga3()||r.a===16777215))A.ao(r)
return r.e}}},
ga3(){return this.z===0&&this.Q===0&&this.a!==16777215},
P(a){var s
if(this.a===16777215)return!1
s=a.a
if(s&&this.z>0)return!0
if(!s&&this.Q>0)return!0
return!1},
i(a){var s=this,r=s.b,q=s.a
return"Tile<x="+r.a+",y="+r.b+",good="+s.z+",evil="+s.Q+",roughness="+q+",ocean="+(q===16777215)+">"},
dr(a,b,c){var s,r,q,p,o,n=this,m=a.d
m=A.ar(m,a.e,A.t(m).c)
s=new A.z(m,new A.eA(),A.D(m).j("z<h.E>")).gl(0)
if(n.ga3())r=a.gd7().gl(0)>s?6:1
else r=0
if(c.gS().aI(0,new A.eB(n,b)))r+=50
if(n.P(b))r+=B.c.aL((b.a?n.z:n.Q)*1.5)
q=B.c.aL(a.gbs())
p=B.c.ac(a.gbM())
m=b.a
r+=B.c.ac((m?p-q:q-p)*0.2)
o=a.c.d
if(o!=null&&o.d.q(0,n.b))r=m?r+100:r
n.f.k(0,b,r)},
ds(a,b){var s,r,q,p,o=this.x
if(o.h(0,b)==null)o.k(0,b,0)
s=o.h(0,b)
s.toString
o.k(0,b,s*0.2)
s=a.d
s=A.ar(s,a.e,A.t(s).c)
r=A.D(s).j("z<h.E>")
s=A.ad(new A.z(s,new A.ey(),r),r.j("h.E"))
s.$flags=1
q=s
if(q.length!==0){p=B.b.E(q,0,new A.ez(b))
s=o.h(0,b)
s.toString
o.k(0,b,s+p*0.8)}s=o.h(0,b)
s.toString
r=this.f.h(0,b)
r.toString
o.k(0,b,s+r)},
du(a,b,c,d){var s,r,q,p,o,n,m=this
if(m.a===16777215)return
s=m.y
if(s.h(0,b)==null)s.k(0,b,0)
if(!b.e){r=s.h(0,b)
r.toString
r=r>0}else r=!1
if(r){r=s.h(0,b)
r.toString
q=Math.max(B.a.H(r,2),1)
r=s.h(0,b)
r.toString
s.k(0,b,r-q)
b.bn(q)
m.D(b.a,-q)}r=s.h(0,b)
r.toString
if(r>0)if(!b.T(a.c)||!b.x.q(0,b.w))m.cF(a,b)
else if(!m.cG(a,b,d))m.cE(a,b)
if(b.a){if(b.w.q(0,m.b)&&t.m.a(b).cX(c)){r=s.h(0,b)
r.toString
s.k(0,b,r+50)
b.b+=50
b.c+=50
m.D(!0,50)}return}t.v.a(b)
if(m.d==null)return
if(m.cH(b,d))return
if(m.P(b))return
r=m.d
r.toString
p=m.cu(b,r,a)
r=s.h(0,b)
r.toString
s.k(0,b,r+p)
m.D(!1,p)
r=s.h(0,b)
r.toString
if(r>0){r=m.d
r.toString
o=s.h(0,b)
o.toString
n=m.co(b,r,o)
o=s.h(0,b)
o.toString
s.k(0,b,o-n)
m.D(!1,-n)}},
dt(a,b){var s,r,q,p,o=this.w
if(o.h(0,b)==null)o.k(0,b,0)
s=o.h(0,b)
s.toString
o.k(0,b,s*0.2)
s=a.d
s=A.ar(s,a.e,A.t(s).c)
r=A.D(s).j("z<h.E>")
s=A.ad(new A.z(s,new A.eD(),r),r.j("h.E"))
s.$flags=1
q=s
if(q.length!==0){p=B.b.E(q,0,new A.eE(b))
s=o.h(0,b)
s.toString
o.k(0,b,s+p*0.8)}s=o.h(0,b)
s.toString
r=this.r.h(0,b)
r.toString
o.k(0,b,s+r)},
co(a,b,c){var s,r
if(!b.d.q(0,this.b))return 0
if(a.at===b)return 0
s=a.c
r=Math.min(c,s)
a.c=s-r
return r},
cu(a,b,c){var s,r
if(this.Q>0)return 0
if(!a.x.q(0,a.w))return 0
s=c.c.b
if(a.bo(s)){s=B.c.ak((B.c.aL(c.gbs())+10)/(1+Math.sqrt(s.Z(0,this.b).gag())))
r=Math.min(B.a.ak(Math.min(a.gaJ(),10)),s)
a.c+=r
return r}return 0},
D(a,b){if(a)this.Q+=b
else this.z+=b},
bi(a,b,c){var s,r=this,q=r.y
q.dq(new A.eo())
r.Q=r.z=0
s=a.a
b.da(new A.bf(r,s))
q.k(0,a,c.gbl())
r.D(s,c.gbl())},
cE(a,b){var s,r,q,p=a.d,o=A.ar(p,a.e,A.t(p).c).E(0,null,new A.ep(b))
p=this.x
if(p.h(0,b)==null)p.k(0,b,0)
if(o!=null){s=o.x.h(0,b)
s.toString
p=p.h(0,b)
p.toString
p=s>p}else p=!1
if(p){p=this.y
s=p.h(0,b)
s.toString
r=B.a.H(s,2)
if(!b.T(a.c)){s=p.h(0,b)
s.toString
r=s}s=o.y
s.k(0,b,s.a4(b,new A.eq())+r)
s=b.a
o.D(s,r)
q=p.h(0,b)
q.toString
p.k(0,b,q-r)
this.D(s,-r)}},
cF(a,b){var s,r,q,p=a.d,o=A.ar(p,a.e,A.t(p).c).E(0,null,new A.er(b))
p=this.w
if(p.h(0,b)==null)p.k(0,b,0)
if(o!=null){s=o.w.h(0,b)
s.toString
p=p.h(0,b)
p.toString
p=s>p}else p=!1
if(p){p=this.y
s=p.h(0,b)
s.toString
r=o.y
r.k(0,b,r.a4(b,new A.es())+s)
r=b.a
o.D(r,s)
q=p.h(0,b)
q.toString
p.k(0,b,q-s)
this.D(r,-s)}},
cG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.f.h(0,b)
if(e==null)e=0
s=b.a
r=s?f.Q:f.z
q=f.y
p=q.h(0,b)
p.toString
o=B.a.aa(r-e,0,p)
if(o===0)return!1
p=a.d
n=a.e
m=A.t(p).c
l=A.ar(p,n,m)
if(new A.z(l,new A.et(),A.D(l).j("z<h.E>")).gl(0)>0)return!1
l=A.ar(p,n,m)
k=new A.z(l,new A.eu(b),A.D(l).j("z<h.E>")).gl(0)
m=A.ar(p,n,m)
n=A.D(m).j("z<h.E>")
p=A.ad(new A.z(m,new A.ev(b),n),n.j("h.E"))
p.$flags=1
j=p
p=j.length
if(p===0)return!1
if(p>k)return!1
B.b.aZ(j,new A.ew())
i=B.b.gaN(j)
h=i.z+i.Q
if(o<=h)return!1
p=q.h(0,b)
p.toString
g=A.hZ(p,h)
p=g.e
q.k(0,b,p)
f.D(s,p-g.b)
i.bi(b,c,g)
return!0},
cH(a,b){var s,r,q=this
if(!q.P(a))return!1
if(!a.bo(q.b))return!1
if(a.gaJ()===0)return!1
s=Math.min(100,a.gaJ())
r=q.Q
if(s<=r)return!1
q.bi(a,b,A.hZ(s,r))
return!0}}
A.eA.prototype={
$1(a){return a.ga3()},
$S:1}
A.eB.prototype={
$1(a){return a.a!==this.b.a&&a.w.q(0,this.a.b)},
$S:24}
A.ey.prototype={
$1(a){return a.a!==16777215},
$S:1}
A.ez.prototype={
$2(a,b){return Math.max(a,b.x.a4(this.a,new A.ex()))},
$S:11}
A.ex.prototype={
$0(){return 0},
$S:12}
A.eD.prototype={
$1(a){return a.a!==16777215},
$S:1}
A.eE.prototype={
$2(a,b){return Math.max(a,b.w.a4(this.a,new A.eC()))},
$S:11}
A.eC.prototype={
$0(){return 0},
$S:12}
A.eo.prototype={
$2(a,b){if(b===0)return 0
a.bn(b)
return 0},
$S:27}
A.ep.prototype={
$2(a,b){var s,r,q
if(b.a===16777215)return a
s=this.a
if(b.P(s))return a
if(!s.T(b))return a
if(a==null)return b
r=a.x
if(r.h(0,s)==null)r.k(0,s,0)
q=b.x
if(q.h(0,s)==null)q.k(0,s,0)
q=q.h(0,s)
q.toString
s=r.h(0,s)
s.toString
if(q>s)return b
return a},
$S:13}
A.eq.prototype={
$0(){return 0},
$S:2}
A.er.prototype={
$2(a,b){var s,r,q
if(b.a===16777215)return a
s=this.a
if(b.P(s))return a
if(a==null)return b
r=a.w
if(r.h(0,s)==null)r.k(0,s,0)
q=b.w
if(q.h(0,s)==null)q.k(0,s,0)
q=q.h(0,s)
q.toString
s=r.h(0,s)
s.toString
if(q>s)return b
return a},
$S:13}
A.es.prototype={
$0(){return 0},
$S:2}
A.et.prototype={
$1(a){return a.ga3()},
$S:1}
A.eu.prototype={
$1(a){return a.Q>0===this.a.a},
$S:1}
A.ev.prototype={
$1(a){var s=this.a
return a.P(s)&&s.T(a)},
$S:1}
A.ew.prototype={
$2(a,b){return B.a.U(a.z+a.Q,b.z+b.Q)},
$S:44}
A.eT.prototype={
gbl(){var s=this.d
return this.b-s-s}}
A.bv.prototype={}
A.df.prototype={
cO(a){var s,r,q,p,o=this.a
if(o>10){this.b=!0
return}s=Math.sqrt(o/10)
o=a.c
r=o.a
q=B.c.ak(r*s)
o=o.b
p=B.c.ak(o*s)
o=new A.bb(new A.f(r-q,o-p),a.d+q,a.e+p,a.f)
o.ab(0,0,0,o.gX(0),o.ga2(0))}}
A.f6.prototype={}
A.cv.prototype={
gaQ(){return!0},
aH(a,b){var s
if(b==null)return
s=this.a
s.toString
s.V(new A.cF(this.c,t.J.a(b)))},
aO(a){var s,r,q,p=this,o=u.l
switch(a){case B.l:p.a.bB()
break
case B.v:p.e=B.v
s=p.a
s.toString
r=p.b.e
q=A.D(r).j("a_<2>")
r=A.ad(new A.a_(r,q),q.j("h.E"))
r.$flags=1
s.aT(new A.dc(r,p.w))
$.aY()
A.ao(o)
break
case B.E:p.a.V(new A.b8(p.c,B.A))
$.aY()
A.ao(o)
break
case B.F:p.a.V(new A.b8(p.c,B.a_))
$.aY()
A.ao(o)
break
case B.G:p.a.V(new A.b8(p.c,B.a0))
$.aY()
A.ao(o)
break
default:return!1}return!0},
aR(a,b,c){var s,r=this
if(c||b)return!1
s=r.d.$1(a)
if(s){r.x=r.b8()
$.aY()
A.ao(u.l)
r.bq()}return s},
G(a){var s=this,r=new A.bb(new A.f(47,6),s.f,s.r,a)
r.ab(0,0,0,r.gX(0),r.ga2(0))
r=s.x
r===$&&A.h9()
r.e=s.e==null?B.h:B.n
r.G(a)},
b8(){var s,r,q=this.c
q=new A.x(q,new A.dC(),q.$ti.j("x<i.E,I>")).cY(0,", ")
s=A.l(["Go","Tight","Expanded","Destroy"],t.s)
r=A.l([],t.w)
r.push(new A.df(new A.c3(new A.M($.A,t.D),t.h)))
return new A.dI(q,s,B.n,new A.a3(new A.f(this.f,this.r),new A.f(47,5)),r)}}
A.dC.prototype={
$1(a){return A.fM(a.Q)},
$S:30}
A.cF.prototype={}
A.b8.prototype={}
A.dc.prototype={
gaQ(){return!0},
aO(a){switch(a){case B.l:this.a.bB()
this.d.a=!1
break
default:return!1}return!0},
aR(a,b,c){var s,r,q,p,o=this
for(s=o.b,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===a){o.c=p
o.a.V(p)
o.d.a=!1
$.aY()
A.ii(u.l)
return!0}}return!1},
aV(){this.d.a=!0}}
A.cE.prototype={
aH(a,b){var s,r,q,p,o,n=this
if(b==null){B.b.aM(n.ax)
return}if(b instanceof A.cF){for(s=b.a,r=s.$ti,s=new A.X(s,s.gl(0),r.j("X<i.E>")),q=b.b.d,p=n.at.a,r=r.j("i.E");s.m();){o=s.d
if(o==null)o=r.a(o)
o.ao(q)
p.bp(o)}B.b.aM(n.ax)}else if(b instanceof A.b8){s=b.a
r=s.i(s)
q=b.b
A.ao("changed mode of "+r+" to "+q.i(0))
for(r=s.$ti,s=new A.X(s,s.gl(0),r.j("X<i.E>")),p=n.at.a,r=r.j("i.E");s.m();){o=s.d
if(o==null)o=r.a(o)
o.ax=q
p.bp(o)}B.b.aM(n.ax)}else throw A.e(A.fQ(b.i(0)))},
aO(a){var s,r=this
switch(a){case B.D:s=r.a
s.sbK(!s.r)
break
case B.H:r.b.$0()
break
case B.I:break
case B.J:r.z=!r.z
break
case B.K:r.Q=!r.Q
break
case B.L:r.at.cI()
break
default:return!1}return!0},
aR(a,b,c){var s,r,q=this,p=q.at,o=p.b.a.h(0,a)
if(o!=null){s=q.ax
s.push(o)
r=q.a
r.toString
s=new A.cv(p.a,new A.bh(s,t.k),new A.dO(q),50,37,q.as)
s.x=s.b8()
r.aT(s)
$.aY()
A.ao(u.l)
return!0}A.ao("unhandled keyDown: "+a+" ("+A.fM(a)+")")
return!1},
G(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.c
a6.bH(0)
a6.b_(0)
a7.ab(0,0,0,a7.gX(0),a7.ga2(0))
for(s=a5.at,r=s.a,q=r.e,p=r.d,o=p.a,n=p.b.b.a,m=o.length,l=a5.as,s=s.b,k=s.a,j=0;j<130;++j)for(i=0;i<43;++i){h=new A.f(j,i)
p.C(j,i)
g=i*n+j
if(!(g>=0&&g<m))return A.m(o,g)
f=o[g]
e=f.c
d=null
if(a5.z){g=k.h(0,48)
g.toString
c=f.w.h(0,g)
if(c==null)c=0
g=a5.f=Math.min(c,a5.f)
b=a5.r=Math.max(c,a5.r)
a=B.c.ac(B.c.aa(c-g,g,b)/(b-g)*10)
if(!(a>=0&&a<11))return A.m(B.W,a)
a0=B.a.i(B.W[a])}else if(q.a0(h))if(l.a){a0=A.fM(q.h(0,h).b).toUpperCase()
e=f.Q>0?B.y:B.S
d=B.i}else{d=f.Q>0?B.y:B.S
a0="\u25a0"}else a0=f.z===0&&f.Q===0&&f.a!==16777215?"\u2591":"\u2593"
a7.M(j,i,a0,d==null?f.gcQ():d,e)}for(s=s.b,q=s.length,a1=0;a1<s.length;s.length===q||(0,A.aX)(s),++a1){a2=s[a1]
if(!a2.e)continue
p=a2.w
p=p.gt(p)
o=a2.w
o=o.gu(o)
a7.O(p,o,new A.H(88,B.i,a2.r))}for(s=k.gam(k),s=s.gv(s);s.m();){q=s.gp()
if(!q.e)continue
p=q.w
p=p.gt(p)
o=q.w
o=o.gu(o)
n=q.Q
q=q.r
a7.O(p,o,new A.H(n,B.i,q))}s=a5.w
s===$&&A.h9()
s.G(a7)
a5.x.G(a7)
a5.y.G(a7)
a7.L(100,0,"  Fortress Earth - tech demo  ")
a7.L(100,1,"   "+r.c.dl()+"    ")
if(a5.Q){a3=B.d.ai(B.c.bL(a5.e/1000,3),6)
a4=B.d.ai(B.c.bL(a5.d/1000,3),6)
a7.L(0,0,"render: "+a3+"ms  ")
a7.L(18,0,"update: "+a4+"ms  ")}a5.e=a6.gbr()
if(a6.b==null)a6.b=$.d_.$0()},
aV(){var s,r,q,p=this,o=p.c
o.bH(0)
o.b_(0)
s=p.at
r=s.a
q=s.b
r.dn(q,s.c)
q.dm(r)
p.bq()
p.d=o.gbr()}}
A.dO.prototype={
$1(a){var s=this.a,r=s.at.b.a.h(0,a)
if(r==null)return!1
s=s.ax
if(B.b.I(s,r))B.b.bE(s,r)
else s.push(r)
return!0},
$S:31}
A.B.prototype={}
A.eI.prototype={
aj(a){var s,r,q,p,o,n,m,l,k
a.L(0,0,"Armies")
for(s=this.c.a,r=s.gbv(),r=r.gv(r),q=this.a.b.a,p=this.d,o=2;r.m();){n=r.gp()
m=s.h(0,n)
m.toString
l=p.I(p,m)?B.ae:B.i
a.M(0,o,B.d.Y(" ",q),B.h,l)
a.O(0,o,new A.H(n,m.r,l))
a.M(2,o,m.f,B.h,l)
n=m.x.q(0,m.w)?"STNDBY":"TRANST"
a.M(14,o,n,m.x.q(0,m.w)?B.z:B.f,l)
n=m.e
k=n?"OK":"DEAD"
a.M(24,o,k,n?B.Q:B.P,l)
a.M(30,o,B.d.ai(B.a.i(m.c),4),B.f,l)
a.M(35,o,B.d.ai(B.a.i(m.d),4),B.P,l);++o}}}
A.dF.prototype={
aj(a){var s
a.L(0,0,"Chat")
a.B(0,2,"Here you'll find text",B.f)
a.B(0,3,"messages from your generals.",B.f)
a.B(0,5,"Use keyboard to send units.",B.f)
a.B(0,6,"Alt-shift-X to add enemy.",B.f)
s=this.a.b.b-6
a.B(0,s,"@bot                  [0] HQ",B.f)
a.L(0,s+1+1,"Chat not implemented yet...")}}
A.dG.prototype={
gaK(a){return this.d.a?B.h:B.n},
aj(a){var s,r,q,p
a.L(0,0,"Cities")
for(s=this.c,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.aX)(s),++p){a.L(0,q,s[p].a)
a.B(22,q,"OK",B.Q);++q}}}
A.dH.prototype={
$2(a,b){return B.d.U(a.a,b.a)},
$S:32}
A.dI.prototype={
aj(a){var s,r,q,p
a.B(0,0," Command for: ",B.z)
a.B(14,0,this.c+" ",B.f)
for(s=this.d,r=1,q=0;q<4;++q){p=s[q]
a.B(r,2,p,B.h)
a.B(r,3,"\u2580",B.z)
r+=p.length+4}},
gaK(a){return this.e}}
A.e6.prototype={
gaK(a){return B.n},
G(a){var s,r,q=this,p=q.a,o=p.a,n=o.a
o=o.b
p=p.b
s=p.a
p=p.b
A.iV(a,n,o,s,p,q.gaK(q),"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
q.aj(new A.bb(new A.f(s-4,p-1),n+2,o,a))
r=q.b
while(!0){if(!(r.length!==0&&B.b.gaN(r).b))break
B.b.bF(r,0)}if(r.length===0)return
r=B.b.gaN(r)
r.cO(new A.bb(new A.f(s,p),n,o,a));++r.a
if(r.b){p=r.c.a
if((p.a&30)!==0)A.ax(A.d4("Future already completed"))
p.b7(null)}}}
A.eJ.prototype={
bp(a){var s,r,q
A.ao("Clearing demand for "+a.i(0))
for(s=this.d.a,r=A.t(s),s=new J.W(s,s.length,r.j("W<1>")),r=r.c;s.m();){q=s.d
if(q==null)q=r.a(q)
q.f.k(0,a,0)
q.x.k(0,a,0)
q.r.k(0,a,0)
q.w.k(0,a,0)}},
dn(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.a,r=b.b,q=b.d,p=q.a,o=q.b.b.a,n=p.length,m=0;m<100;++m){l=$.iA()
k=l.ah(s)
j=l.ah(r)
q.C(k,j)
l=j*o+k
if(!(l>=0&&l<n))return A.m(p,l)
i=p[l]
if(i.a===16777215)continue
h=b.cf(i)
for(l=new A.bl(a.gS().a()),g=i.r,f=h.c,e=i.b;l.m();){d=l.b
i.du(h,d,b.c,a0)
i.dr(h,d,a)
i.ds(h,d)
if(!d.T(i))g.k(0,d,0)
else g.k(0,d,10)
if(i.P(d)){c=g.h(0,d)
c.toString
g.k(0,d,c-1)}if(!d.a){c=f.d
c=c==null?null:!B.b.I(c.c,d)
c=c===!0}else c=!1
if(c)if(f.d.d.q(0,e)){c=g.h(0,d)
c.toString
g.k(0,d,c+10)}i.dt(h,d)}}b.c=b.c.b5(36e8)},
cf(a){var s=new A.eK(this),r=a.b,q=r.gcN(),p=t.b5,o=p.j("h.E")
q=A.ad(new A.ba(new A.x(q,s,A.t(q).j("x<1,p?>")),p),o)
q.$flags=1
r=r.gcT()
s=A.ad(new A.ba(new A.x(r,s,A.t(r).j("x<1,p?>")),p),o)
s.$flags=1
return new A.dZ(a,q,s)},
cC(a){var s,r=a.gt(a),q=a.gu(a)
if(q<0||q>=this.b)return null
for(s=this.a;r<0;)r+=s
for(;r>=s;)r-=s
return new A.f(r,q)},
cD(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=this.d.a,r=A.t(s),s=new J.W(s,s.length,r.j("W<1>")),q=this.e,r=r.c;s.m();){p=s.d
if(p==null)p=r.a(p)
for(o=new A.bN(q,q.r,q.e),n=p.b,m=null,l=4294967295;o.m();){k=o.d
j=n.Z(0,k.d)
i=j.a
j=j.b
h=i*i+j*j
if(h<l){l=h
m=k}}p.d=m}}}
A.eL.prototype={
$1(a){return t.J.a(a).d},
$S:33}
A.eK.prototype={
$1(a){var s=this.a,r=s.cC(a)
if(r==null)return null
return s.d.aW(r.a,r.b)},
$S:34}
A.fB.prototype={
$1(a){var s=A.kH(a),r=A.ie(a),q=t.O,p=t.S,o=t.i,n=0.3+$.iB().d6()/3,m=1-n
n=0*n
return new A.p(s,a,r,new A.w(B.c.W(r.a*m+n),B.c.W(r.b*m+n),B.c.W(r.c*m+n)),A.aJ(q,p),A.aJ(q,p),A.aJ(q,o),A.aJ(q,o),A.aJ(q,p))},
$S:35}
A.bL.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.bL&&this.b===b.b},
gn(a){return this.b},
i(a){return this.a}}
A.dU.prototype={
i(a){return"["+this.a.a+"] "+this.d+": "+this.b}}
A.b7.prototype={
gbt(){var s=this.b,r=s==null?null:s.a.length!==0,q=this.a
return r===!0?s.gbt()+"."+q:q},
gd_(){var s,r
if(this.b==null){s=this.c
s.toString
r=s}else{s=$.ha().c
s.toString
r=s}return r},
d1(a,b,c,d){var s,r,q=this,p=a.b
if(p>=q.gd_().b){b=t.cN.a(b).$0()
s=typeof b=="string"?b:J.bu(b)
if(p>=2000){A.hC()
a.i(0)}p=q.gbt()
Date.now()
$.hq=$.hq+1
r=new A.dU(a,s,p)
if(q.b==null)q.bf(r)
else $.ha().bf(r)}},
bf(a){return null}}
A.dW.prototype={
$0(){var s,r,q,p=this.a
if(B.d.bP(p,"."))A.ax(A.b_("name shouldn't start with a '.'",null))
if(B.d.cP(p,"."))A.ax(A.b_("name shouldn't end with a '.'",null))
s=B.d.cZ(p,".")
if(s===-1)r=p!==""?A.dV(""):null
else{r=A.dV(B.d.b1(p,0,s))
p=B.d.b0(p,s+1)}q=new A.b7(p,r,A.aJ(t.N,t.L))
if(r==null)q.c=B.aj
else r.d.k(0,p,q)
return q},
$S:36}
A.dD.prototype={
gX(a){return this.e.a.b.b.a},
ga2(a){return this.e.a.b.b.b},
O(a,b,c){this.e.bO(a,b,c)},
dd(){var s=this,r=s.f
s.w.font=""+r.b*s.x+"px "+r.a+", monospace"
s.e.G(new A.dE(s))}}
A.dE.prototype={
$3(a,b,c){var s,r,q,p,o=c.a,n=this.a,m=n.w,l=c.c
m.fillStyle="rgb("+l.a+", "+l.b+", "+l.c+")"
l=n.f
s=l.c
r=a*s
n=n.x
q=l.d
p=b*q
m.fillRect(r*n,p*n,s*n,q*n)
if(o===0||o===32)return
s=c.b
m.fillStyle="rgb("+s.a+", "+s.b+", "+s.c+")"
m.fillText(A.jq(A.l([o],t.t)),(r+l.e)*n,(p+l.f)*n)},
$S:37}
A.dN.prototype={}
A.dL.prototype={
bO(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.aW(a,b).q(0,c))r.aY(a,b,c)
else r.aY(a,b,null)},
G(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=this.b,m=n.a,l=n.b.b.a,k=m.length,j=0;j<q;++j)for(i=j*r,h=j*l,g=0;g<r;++g){n.C(g,j)
f=h+g
if(!(f>=0&&f<k))return A.m(m,f)
e=m[f]
if(e==null)continue
a.$3(g,j,e)
s.C(g,j)
d=i+g
if(!(d>=0&&d<o))return A.m(p,d)
p[d]=e
n.C(g,j)
m[f]=null}}}
A.w.prototype={
gn(a){return B.a.gn(this.a)^B.a.gn(this.b)^B.a.gn(this.c)},
q(a,b){if(b==null)return!1
if(b instanceof A.w)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1}}
A.H.prototype={
gn(a){return B.a.gn(this.a)^this.b.gn(0)^this.c.gn(0)},
q(a,b){if(b==null)return!1
if(b instanceof A.H)return this.a===b.a&&this.b.q(0,b.b)&&this.c.q(0,b.c)
return!1}}
A.cK.prototype={}
A.E.prototype={
q(a,b){if(b==null)return!1
if(b instanceof A.E)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gn(a){var s=B.a.gn(this.a),r=this.b?519018:218159,q=this.c?519018:218159
return s^r^q},
i(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.bb.prototype={
gX(a){return this.c.a},
ga2(a){return this.c.b},
O(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.O(r.d+a,r.e+b,c)}}
A.en.prototype={
ab(a,b,c,d,e){var s,r,q,p,o=A.j_(32,B.h,B.i)
for(s=c+e,r=b+d,q=c;q<s;++q)for(p=b;p<r;++p)this.O(p,q,o)},
M(a,b,c,d,e){var s,r,q
if(d==null)d=B.h
if(e==null)e=B.i
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.gX(this))break
this.O(q,b,new A.H(c.charCodeAt(r),d,e))}},
L(a,b,c){return this.M(a,b,c,null,null)},
B(a,b,c,d){return this.M(a,b,c,d,null)}}
A.ei.prototype={}
A.c1.prototype={
scS(a){var s,r,q=this
if(q.e!=null)return
s=document
r=s.body
r.toString
q.e=A.fR(r,"keydown",q.gcj(),!1)
s=s.body
s.toString
q.f=A.fR(s,"keyup",q.gcl(),!1)},
sbK(a){var s=this
if(a===s.r)return
s.r=a
if(a){s.x=null
B.a2.bG(window,s.gbh())}},
aT(a){a.a=this
this.b.push(a)
this.aF()},
V(a){var s,r,q,p=this.b
if(0>=p.length)return A.m(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.m(p,q)
p[q].aH(s,a)
this.aF()},
bB(){return this.V(null)},
bC(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].aV()
if(this.d)this.aF()},
ck(a){var s,r,q,p=a.keyCode
if(a.location===3){$label0$0:{if(48===p){s=96
break $label0$0}if(49===p){s=97
break $label0$0}if(50===p){s=98
break $label0$0}if(51===p){s=99
break $label0$0}if(52===p){s=100
break $label0$0}if(53===p){s=101
break $label0$0}if(54===p){s=102
break $label0$0}if(55===p){s=103
break $label0$0}if(56===p){s=104
break $label0$0}if(57===p){s=105
break $label0$0}if(187===p){s=1000
break $label0$0}if(13===p){s=1001
break $label0$0}s=p
break $label0$0}p=s}if(p===59)p=186
r=this.a.a.h(0,new A.E(p,a.shiftKey,a.altKey))
q=B.b.gbw(this.b)
if(r!=null){a.preventDefault()
if(q.aO(r))return}s=a.shiftKey
if(q.aR(p,a.altKey,s))a.preventDefault()},
cm(a){a.keyCode
B.b.gbw(this.b)
a.shiftKey
a.altKey},
cB(a){var s=this,r=s.x
if(r!=null){if(a-r>16.666666666666668){s.bC()
s.x=a}}else{s.bC()
s.x=a}if(s.r)B.a2.bG(window,s.gbh())},
aF(){var s,r,q=this.c
q.ab(0,0,0,q.gX(0),q.ga2(0))
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.m(s,r)
if(!s[r].gaQ())break}if(r<0)r=0
for(;r<s.length;++r)s[r].G(q)
this.d=!1
q.dd()}}
A.aK.prototype={
gaQ(){return!1},
bq(){var s=this.a
if(s==null)return
s.d=!0},
aH(a,b){},
aV(){},
G(a){}}
A.a7.prototype={
bW(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
for(s=k.a,r=k.b.b.a,q=0*r,p=s.length,o=1;o<a;++o){n=c.$1(new A.f(o,0))
k.C(o,0)
m=q+o
if(!(m>=0&&m<p))return A.m(s,m)
s[m]=n}for(l=1;l<b;++l)for(q=l*r,o=0;o<a;++o){n=c.$1(new A.f(o,l))
k.C(o,l)
m=q+o
if(!(m>=0&&m<p))return A.m(s,m)
s[m]=n}},
aW(a,b){var s,r
this.C(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.m(s,r)
return s[r]},
aY(a,b,c){var s,r
this.C(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.m(s,r)
s[r]=c},
gv(a){var s=this.a
return new J.W(s,s.length,A.t(s).j("W<1>"))},
C(a,b){if(a<0||a>=this.b.b.a)throw A.e(A.eg(a,"x"))
if(b<0||b>=this.b.b.b)throw A.e(A.eg(b,"y"))}}
A.O.prototype={
bb(){return"Direction."+this.b},
i(a){var s
switch(this){case B.T:s="none"
break
case B.k:s="n"
break
case B.q:s="ne"
break
case B.o:s="e"
break
case B.p:s="se"
break
case B.j:s="s"
break
case B.t:s="sw"
break
case B.r:s="w"
break
case B.u:s="nw"
break
default:s=null}return s},
$if:1,
gt(a){return this.c},
gu(a){return this.d}}
A.dl.prototype={}
A.a3.prototype={
i(a){return"("+this.a.i(0)+")-("+this.b.i(0)+")"},
I(a,b){var s,r=this.a,q=r.a
if(b.gt(b)<q)return!1
s=this.b
if(b.gt(b)>=q+s.a)return!1
r=r.b
if(b.gu(b)<r)return!1
if(b.gu(b)>=r+s.b)return!1
return!0},
gv(a){var s=this.a
return new A.eh(this,s.a-1,s.b)}}
A.eh.prototype={
gp(){return new A.f(this.b,this.c)},
m(){var s=this,r=s.a,q=r.a,p=q.a
r=r.b
if(++s.b>=Math.max(p,p+r.a)){s.b=p;++s.c}q=q.b
return s.c<Math.max(q,q+r.b)}}
A.db.prototype={
gag(){var s=this
return s.gt(s)*s.gt(s)+s.gu(s)*s.gu(s)},
gl(a){return Math.sqrt(this.gag())},
gd5(){var s,r,q,p=this,o=p.gt(p),n=p.gu(p)
$label0$0:{s=o<0
r=s
if(r&&p.gu(p)/p.gt(p)>=2){r=B.k
break $label0$0}if(s&&p.gu(p)/p.gt(p)>=0.5){r=B.u
break $label0$0}if(s&&p.gu(p)/p.gt(p)>=-0.5){r=B.r
break $label0$0}if(s&&p.gu(p)/p.gt(p)>=-2){r=B.t
break $label0$0}if(s){r=B.j
break $label0$0}q=o>0
r=q
if(r&&p.gu(p)/p.gt(p)>=2){r=B.j
break $label0$0}if(q&&p.gu(p)/p.gt(p)>=0.5){r=B.p
break $label0$0}if(q&&p.gu(p)/p.gt(p)>=-0.5){r=B.o
break $label0$0}if(q&&p.gu(p)/p.gt(p)>=-2){r=B.q
break $label0$0}if(q){r=B.k
break $label0$0}if(n<0){r=B.k
break $label0$0}if(n>0){r=B.j
break $label0$0}r=B.T
break $label0$0}return r},
gaS(){var s,r=A.l([],t.l)
for(s=0;s<8;++s)r.push(this.a5(0,B.am[s]))
return r},
gcN(){var s,r=A.l([],t.l)
for(s=0;s<4;++s)r.push(this.a5(0,B.ao[s]))
return r},
gcT(){var s,r=A.l([],t.l)
for(s=0;s<4;++s)r.push(this.a5(0,B.ak[s]))
return r},
a5(a,b){var s,r,q=this
$label0$0:{s=q.gt(q)
r=q.gu(q)
break $label0$0}return new A.f(s+b.c,r+b.d)},
Z(a,b){var s,r,q,p,o=this
$label0$0:{s=o.gt(o)
r=b.gt(b)
q=o.gu(o)
p=b.gu(b)
break $label0$0}return new A.f(s-r,q-p)},
i(a){var s=this
return""+s.gt(s)+", "+s.gu(s)}}
A.f.prototype={
q(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gt(b)&&this.b===b.gu(b)},
gn(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.a.H(r*(r+1),2)+s},
gt(a){return this.a},
gu(a){return this.b}}
A.dx.prototype={}
A.fy.prototype={
$1(a){A.i4()},
$S:10}
A.fn.prototype={
$0(){var s=window.outerHeight,r=window.innerHeight
r.toString
return 1>=s-r},
$S:40};(function aliases(){var s=J.bD.prototype
s.bR=s.i
s=J.aH.prototype
s.bT=s.i
s=A.bj.prototype
s.bV=s.aq
s=A.j.prototype
s.bU=s.i
s=A.ac.prototype
s.bS=s.h
s=A.V.prototype
s.b2=s.ao
s.bQ=s.al})();(function installTearOffs(){var s=hunkHelpers._static_0,r=hunkHelpers._static_1,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u
s(A,"km","jg",2)
r(A,"ky","jx",4)
r(A,"kz","jy",4)
r(A,"kA","jz",4)
s(A,"i8","kt",0)
q(A,"kB","ko",9)
p(A.M.prototype,"gc8","c9",9)
o(A.c7.prototype,"gcp","cq",0)
r(A,"kP","fX",42)
r(A,"kO","fW",43)
q(A,"fA","jc",29)
o(A.d0.prototype,"gc1","c2",0)
n(A.d3.prototype,"gcg","ci",23)
var m
n(m=A.c1.prototype,"gcj","ck",14)
n(m,"gcl","cm",14)
n(m,"gbh","cB",39)
s(A,"kS","i4",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.fJ,J.bD,J.W,A.q,A.ej,A.h,A.X,A.dd,A.cC,A.de,A.cW,A.bz,A.d9,A.i,A.ah,A.cL,A.bw,A.dr,A.dP,A.ap,A.eF,A.e5,A.cg,A.f8,A.bO,A.dR,A.bM,A.bN,A.ce,A.a0,A.dp,A.dv,A.fd,A.bl,A.a8,A.be,A.aM,A.bj,A.dh,A.dq,A.M,A.dg,A.dk,A.dt,A.c7,A.fh,A.bV,A.f5,A.ds,A.dw,A.aC,A.eQ,A.cX,A.bW,A.eS,A.S,A.du,A.ek,A.bX,A.dJ,A.fG,A.dn,A.ac,A.f3,A.dB,A.V,A.a9,A.dZ,A.d0,A.bf,A.eH,A.d3,A.p,A.eT,A.bv,A.f6,A.aK,A.cF,A.b8,A.B,A.e6,A.eJ,A.bL,A.dU,A.b7,A.en,A.dN,A.dL,A.w,A.H,A.cK,A.E,A.c1,A.eh,A.db,A.dx])
q(J.bD,[J.cH,J.bF,J.Q,J.b5,J.b6,J.bG,J.b4])
q(J.Q,[J.aH,J.r,A.bR,A.cB,A.az,A.di,A.dM,A.a,A.bC,A.bJ])
q(J.aH,[J.cY,J.bZ,J.ab])
r(J.dQ,J.r)
q(J.bG,[J.bE,J.cI])
q(A.q,[A.bK,A.ai,A.cJ,A.d8,A.d1,A.dm,A.cw,A.a1,A.cV,A.c_,A.d7,A.au,A.cA])
q(A.h,[A.aq,A.z,A.bA,A.c2,A.ba,A.aO,A.bk,A.a7,A.a3])
q(A.aq,[A.as,A.aI,A.a_])
r(A.x,A.as)
r(A.by,A.bA)
r(A.bg,A.i)
r(A.co,A.cL)
r(A.da,A.co)
r(A.aA,A.da)
q(A.bw,[A.aB,A.aE])
q(A.ap,[A.cy,A.cz,A.d6,A.fu,A.fw,A.eN,A.eM,A.fc,A.f1,A.el,A.fb,A.eR,A.fi,A.fj,A.fo,A.fp,A.fq,A.ea,A.e7,A.e8,A.e9,A.e_,A.e0,A.e2,A.e1,A.e3,A.eA,A.eB,A.ey,A.eD,A.et,A.eu,A.ev,A.dC,A.dO,A.eL,A.eK,A.fB,A.dE,A.fy])
q(A.cy,[A.ec,A.eO,A.eP,A.fe,A.eU,A.eY,A.eX,A.eW,A.eV,A.f0,A.f_,A.eZ,A.em,A.f7,A.fm,A.fa,A.ef,A.ex,A.eC,A.eq,A.es,A.dW,A.fn])
q(A.cz,[A.eb,A.fv,A.f2,A.dS,A.dY,A.e4,A.ez,A.eE,A.eo,A.ep,A.er,A.ew,A.dH])
r(A.bT,A.ai)
q(A.d6,[A.d5,A.b0])
r(A.R,A.bO)
r(A.bH,A.R)
q(A.bR,[A.cM,A.b9])
q(A.b9,[A.ca,A.cc])
r(A.cb,A.ca)
r(A.bP,A.cb)
r(A.cd,A.cc)
r(A.bQ,A.cd)
q(A.bP,[A.cN,A.cO])
q(A.bQ,[A.cP,A.cQ,A.cR,A.cS,A.cT,A.bS,A.cU])
r(A.cj,A.dm)
r(A.ch,A.be)
r(A.c5,A.ch)
r(A.bi,A.c5)
r(A.c6,A.aM)
r(A.c4,A.c6)
r(A.ci,A.bj)
r(A.c3,A.dh)
r(A.dj,A.dk)
r(A.f9,A.fh)
r(A.cf,A.bV)
r(A.c9,A.cf)
r(A.bh,A.bg)
q(A.a1,[A.bd,A.cG])
q(A.cB,[A.y,A.aL,A.ak])
q(A.y,[A.b,A.a2])
r(A.c,A.b)
q(A.c,[A.ct,A.cu,A.b1,A.cD,A.d2])
r(A.bx,A.di)
r(A.L,A.a)
r(A.aG,A.L)
q(A.ac,[A.bI,A.c8])
r(A.aF,A.c8)
q(A.V,[A.b3,A.Y])
q(A.eQ,[A.bU,A.dl])
r(A.df,A.bv)
q(A.aK,[A.cv,A.dc,A.cE])
q(A.e6,[A.eI,A.dF,A.dG,A.dI])
q(A.en,[A.ei,A.bb])
r(A.dD,A.ei)
r(A.O,A.dl)
r(A.f,A.dx)
s(A.bg,A.d9)
s(A.ca,A.i)
s(A.cb,A.bz)
s(A.cc,A.i)
s(A.cd,A.bz)
s(A.co,A.dw)
s(A.di,A.dJ)
s(A.c8,A.i)
s(A.dl,A.db)
s(A.dx,A.db)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",u:"double",an:"num",I:"String",G:"bool",S:"Null",k:"List",j:"Object",l9:"Map"},mangledNames:{},types:["~()","G(p)","d()","d(p)","~(~())","@(@)","G(f)","S(@)","S()","~(j,ag)","~(a)","u(u,p)","u()","p?(p?,p)","~(aG)","bI(@)","aF<@>(@)","ac(@)","@(I)","G(Y)","~(I,@)","S(j,ag)","I()","~(bf)","G(V)","~(@,@)","~(j?,j?)","d(V,d)","~(bY,@)","d(d,d)","I(Y)","G(d)","d(a9,a9)","f(@)","p?(f)","p(f)","b7()","~(d,d,H)","S(~())","~(an)","G()","@(@,I)","j?(j?)","j?(@)","d(p,p)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{}}
A.jO(v.typeUniverse,JSON.parse('{"cY":"aH","bZ":"aH","ab":"aH","kY":"a","l5":"a","la":"b","l_":"c","lb":"c","l7":"y","l4":"y","l1":"L","l3":"ak","l0":"a2","le":"a2","l6":"az","cH":{"G":[],"n":[]},"bF":{"n":[]},"r":{"k":["1"]},"dQ":{"r":["1"],"k":["1"]},"bG":{"u":[],"an":[]},"bE":{"u":[],"d":[],"an":[],"n":[]},"cI":{"u":[],"an":[],"n":[]},"b4":{"I":[],"n":[]},"bK":{"q":[]},"aq":{"h":["1"]},"as":{"aq":["1"],"h":["1"]},"x":{"as":["2"],"aq":["2"],"h":["2"],"as.E":"2","h.E":"2"},"z":{"h":["1"],"h.E":"1"},"bA":{"h":["1"],"h.E":"1"},"by":{"bA":["1"],"h":["1"],"h.E":"1"},"c2":{"h":["1"],"h.E":"1"},"ba":{"h":["1"],"h.E":"1"},"bg":{"i":["1"],"k":["1"]},"ah":{"bY":[]},"aA":{"da":["1","2"]},"aB":{"bw":["1","2"]},"aO":{"h":["1"],"h.E":"1"},"aE":{"bw":["1","2"]},"bT":{"ai":[],"q":[]},"cJ":{"q":[]},"d8":{"q":[]},"cg":{"ag":[]},"ap":{"aD":[]},"cy":{"aD":[]},"cz":{"aD":[]},"d6":{"aD":[]},"d5":{"aD":[]},"b0":{"aD":[]},"d1":{"q":[]},"R":{"bO":["1","2"]},"aI":{"aq":["1"],"h":["1"],"h.E":"1"},"a_":{"aq":["1"],"h":["1"],"h.E":"1"},"bH":{"R":["1","2"],"bO":["1","2"]},"bR":{"v":[]},"cM":{"v":[],"n":[]},"b9":{"P":["1"],"v":[]},"bP":{"i":["u"],"k":["u"],"P":["u"],"v":[]},"bQ":{"i":["d"],"k":["d"],"P":["d"],"v":[]},"cN":{"i":["u"],"k":["u"],"P":["u"],"v":[],"n":[],"i.E":"u"},"cO":{"i":["u"],"k":["u"],"P":["u"],"v":[],"n":[],"i.E":"u"},"cP":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"cQ":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"cR":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"cS":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"cT":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"bS":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"cU":{"i":["d"],"k":["d"],"P":["d"],"v":[],"n":[],"i.E":"d"},"dm":{"q":[]},"cj":{"ai":[],"q":[]},"bk":{"h":["1"],"h.E":"1"},"a8":{"q":[]},"bi":{"be":["1"]},"c4":{"aM":["1"]},"ci":{"bj":["1"]},"c3":{"dh":["1"]},"M":{"bB":["1"]},"c5":{"be":["1"]},"c6":{"aM":["1"]},"ch":{"be":["1"]},"c9":{"bV":["1"]},"bh":{"i":["1"],"k":["1"],"i.E":"1"},"i":{"k":["1"]},"cf":{"bV":["1"]},"u":{"an":[]},"d":{"an":[]},"cw":{"q":[]},"ai":{"q":[]},"a1":{"q":[]},"bd":{"q":[]},"cG":{"q":[]},"cV":{"q":[]},"c_":{"q":[]},"d7":{"q":[]},"au":{"q":[]},"cA":{"q":[]},"cX":{"q":[]},"bW":{"q":[]},"du":{"ag":[]},"aG":{"a":[]},"c":{"y":[]},"ct":{"y":[]},"cu":{"y":[]},"b1":{"y":[]},"a2":{"y":[]},"b":{"y":[]},"cD":{"y":[]},"d2":{"y":[]},"L":{"a":[]},"aF":{"i":["1"],"k":["1"],"i.E":"1"},"b3":{"V":[]},"Y":{"V":[]},"df":{"bv":[]},"cv":{"aK":["B"]},"dc":{"aK":["B"]},"cE":{"aK":["B"]},"a7":{"h":["1"],"h.E":"1"},"O":{"f":[]},"a3":{"h":["f"],"h.E":"f"},"iL":{"v":[]},"j2":{"k":["d"],"v":[]},"ju":{"k":["d"],"v":[]},"jt":{"k":["d"],"v":[]},"j0":{"k":["d"],"v":[]},"jr":{"k":["d"],"v":[]},"j1":{"k":["d"],"v":[]},"js":{"k":["d"],"v":[]},"iY":{"k":["u"],"v":[]},"iZ":{"k":["u"],"v":[]}}'))
A.jN(v.typeUniverse,JSON.parse('{"dd":1,"cC":1,"cW":1,"bz":1,"d9":1,"bg":1,"bM":1,"bN":1,"b9":1,"aM":1,"bl":1,"c5":1,"c6":1,"ch":1,"dk":1,"dj":1,"dt":1,"c7":1,"dw":2,"cL":2,"cf":1,"co":2,"dn":1,"c8":1}'))
var u={o:"Cannot fire new event. Controller is already firing an event",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",l:"Sound is off. No bleeping for you. Try Alt-S."}
var t=(function rtii(){var s=A.aT
return{O:s("V"),_:s("a7<H>"),I:s("a7<p>"),U:s("a7<H?>"),d:s("az"),E:s("b1"),J:s("a9"),c:s("aA<bY,@>"),R:s("q"),A:s("a"),m:s("b3"),Z:s("aD"),G:s("H"),V:s("bC"),e:s("B"),w:s("r<bv>"),Y:s("r<O>"),g:s("r<Y>"),f:s("r<aK<B>>"),s:s("r<I>"),l:s("r<f>"),b:s("r<@>"),t:s("r<d>"),T:s("bF"),M:s("ab"),p:s("P<@>"),q:s("aF<@>"),B:s("R<bY,@>"),r:s("cK<B>"),cF:s("bJ"),j:s("k<@>"),L:s("b7"),a1:s("y"),b5:s("ba<p>"),P:s("S"),K:s("j"),v:s("Y"),cY:s("lc"),F:s("+()"),cA:s("ag"),N:s("I"),W:s("p"),bW:s("n"),b7:s("ai"),Q:s("v"),o:s("bZ"),k:s("bh<Y>"),a5:s("c1<B>"),u:s("f"),bz:s("c2<Y>"),cg:s("aL"),bj:s("ak"),h:s("c3<~>"),a:s("M<d>"),D:s("M<~>"),c4:s("E"),bo:s("ci<bf>"),cs:s("bk<V>"),y:s("G"),i:s("u"),z:s("@"),x:s("@(j)"),C:s("@(j,ag)"),S:s("d"),bc:s("bB<S>?"),d6:s("H?"),X:s("j?"),cN:s("j?()"),aD:s("I?"),cG:s("G?"),dd:s("u?"),a3:s("d?"),n:s("an?"),H:s("an"),b9:s("~"),aA:s("~(j)"),a0:s("~(j,ag)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.af=J.bD.prototype
B.b=J.r.prototype
B.a=J.bE.prototype
B.c=J.bG.prototype
B.d=J.b4.prototype
B.ag=J.ab.prototype
B.ah=J.Q.prototype
B.Z=J.cY.prototype
B.B=J.bZ.prototype
B.a2=A.aL.prototype
B.l=new A.B()
B.L=new A.B()
B.J=new A.B()
B.K=new A.B()
B.G=new A.B()
B.F=new A.B()
B.H=new A.B()
B.D=new A.B()
B.v=new A.B()
B.I=new A.B()
B.E=new A.B()
B.M=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a3=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.a8=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.a4=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.a7=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.a6=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.a5=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.N=function(hooks) { return hooks; }

B.a9=new A.cX()
B.m=new A.ej()
B.aa=new A.f3()
B.O=new A.f8()
B.e=new A.f9()
B.ab=new A.du()
B.i=new A.w(0,0,0)
B.f=new A.w(117,149,183)
B.P=new A.w(119,121,123)
B.w=new A.w(128,160,255)
B.ac=new A.w(128,255,255)
B.Q=new A.w(129,158,133)
B.x=new A.w(130,255,90)
B.R=new A.w(200,140,255)
B.y=new A.w(220,0,0)
B.ad=new A.w(255,230,150)
B.S=new A.w(255,255,0)
B.h=new A.w(255,255,255)
B.ae=new A.w(25,32,48)
B.n=new A.w(38,42,66)
B.z=new A.w(40,49,81)
B.T=new A.O(0,0,"none")
B.j=new A.O(0,1,"s")
B.k=new A.O(0,-1,"n")
B.o=new A.O(1,0,"e")
B.p=new A.O(1,1,"se")
B.q=new A.O(1,-1,"ne")
B.r=new A.O(-1,0,"w")
B.t=new A.O(-1,1,"sw")
B.u=new A.O(-1,-1,"nw")
B.U=new A.H(32,B.h,B.i)
B.ai=new A.bL("FINEST",300)
B.aj=new A.bL("INFO",800)
B.ak=A.l(s([B.q,B.p,B.t,B.u]),t.Y)
B.al=A.l(s(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen","oRequestFullscreen"]),t.s)
B.am=A.l(s([B.k,B.q,B.o,B.p,B.j,B.t,B.r,B.u]),t.Y)
B.V=A.l(s([]),t.b)
B.an=A.l(s(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen","oExitFullscreen"]),t.s)
B.ao=A.l(s([B.k,B.o,B.j,B.r]),t.Y)
B.W=A.l(s([0,1,2,3,4,5,5,6,7,8,9]),t.t)
B.ap=new A.aE([0,12689003,5,13279336,14,13805937,27,14004084,44,13937266,65,13937522,90,14147296,119,12765123,152,13740657,189,13279337,230,13214315,275,11767387,324,11175254,377,12029531,434,12029276,495,12556387,560,12556386,629,12687717,702,12358752,779,11767644,860,13083504,945,12095324,1034,11503703,1127,12095582,1224,12490338,1325,11963994,1430,12227167,1539,12753511,1652,12556385,1769,14136451,1890,13740401,2015,13938293,2144,14003827,2277,13740401,2414,12754536,2555,13279851,2700,13345901,2849,13674865,3002,13280621,3159,13543536,3320,12556387,3485,12424800,3654,12621922,3,12623467,12,13411951,25,13477743,42,13806193,63,13805681,88,13937522,117,13871730,150,13937522,187,13937522,228,12951144,273,13213802,322,12030559,375,12358753,432,12029274,493,12160859,558,13016940,627,11372376,700,11963739,777,12819819,858,12424801,943,12818788,1032,11767130,1125,13082220,1222,12358495,1323,12292189,1428,12490337,1537,12095066,1650,11766874,1767,12884841,1888,12293729,2013,12293732,2142,13280364,2275,13477485,2412,13214573,2553,11371861,2698,12095582,2847,12819300,3000,13740659,3157,13346671,3318,12556385,3483,12095580,3652,12490851,3825,12951144,10,12689003,23,13345386,40,13674351,61,13806449,86,14070137,115,13937266,148,13938034,185,13555930,226,13871730,271,14267519,320,13345644,373,10780498,430,12227167,491,12491111,556,12029789,625,12885350,698,12095837,775,12292703,856,13740407,941,12424032,1030,13347448,1123,12557420,1220,12490851,1321,11963995,1426,12029532,1535,12621924,1648,12424801,1765,12095325,1886,12885094,2011,11044954,2140,13938547,2273,13280365,2410,12095585,2551,12491109,2696,12161374,2845,12161372,2998,12029788,3155,13740658,3316,12227936,3481,12358495,3650,12292959,3823,12425057,4000,12950889,21,12885611,38,13345386,59,13477230,84,14069881,113,14004084,146,13937778,183,13937266,224,13938034,269,13938034,318,14003569,371,13477486,428,11701856,489,12029274,554,11898202,623,12292445,696,11438681,773,11963994,854,12753252,939,14268033,1028,12424544,1121,11636316,1218,11963995,1319,12622698,1424,12425316,1533,12491367,1646,12292444,1763,12490848,1884,12357983,2009,12359009,2138,12753250,2271,12160604,2408,11963738,2549,12029274,2694,12555616,2843,12293730,2996,12490854,3153,12951400,3314,13609329,3479,12556386,3648,12358239,3821,12227422,3998,12622178,4179,12556644,36,12885611,57,13213545,82,13542766,111,13477998,144,14003826,181,14003826,222,13938034,267,13937778,316,14003826,369,14003570,426,13083244,487,12687717,552,11964251,621,12358496,694,12292446,771,11569752,852,12095067,937,12490848,1026,14070143,1119,12621923,1216,12687717,1317,11767388,1422,12292444,1531,12556129,1644,12490595,1761,12226653,1882,12095582,2007,12160860,2136,12885872,2269,12292702,2406,12424802,2547,11175254,2692,11963738,2841,11963739,2994,11438679,3151,12687461,3312,13280112,3477,12951145,3646,12490337,3819,12424288,3996,12425314,4177,13017193,4362,13081702,55,12689003,80,13345132,109,13345387,142,13938548,179,13805936,220,13937778,265,13818588,314,13293529,367,13018204,424,13937266,485,13543792,550,12490850,619,12357983,692,12227424,769,11963994,850,12819823,935,12359525,1024,12358239,1117,12753252,1214,12687458,1315,12161629,1420,12095579,1529,10847063,1642,12556388,1759,12358238,1880,12951151,2005,12621926,2134,12950374,2267,13806200,2404,12820077,2545,12424033,2690,12490851,2839,11832667,2992,12358496,3149,12226909,3310,11043926,3475,11963996,3644,12490592,3817,12687458,3994,12358752,4175,12490594,4360,12359264,4549,13346417,78,12885611,107,13345386,140,13345644,177,14135418,218,14003570,263,14003826,312,14082016,365,13227736,422,13030610,483,13937522,548,14003827,617,12687715,690,12490593,767,12161117,848,12227166,933,11963993,1022,12424032,1115,10715990,1212,12819301,1313,12753251,1418,12555874,1527,12029788,1640,12292702,1757,12819300,1878,12490851,2003,12226911,2132,12358239,2265,12951147,2402,13805681,2543,13411694,2688,12687980,2837,12819303,2990,12095068,3147,12687976,3308,12752997,3473,12358753,3642,12425058,3815,11964509,3992,12490593,4173,12885094,4358,12490593,4547,12819558,4740,13674868,105,12885611,138,13345644,175,13740144,216,13740401,261,14003827,310,13871730,363,14542310,420,13161685,481,12176319,546,13937522,615,14003827,688,12687714,765,12425313,846,11766874,931,12293215,1020,12160860,1113,12095581,1210,12358496,1311,12556131,1416,12950631,1525,12425314,1638,12095067,1755,10518610,1876,13873019,2001,11374174,2130,11504473,2263,12490337,2400,12095838,2541,13412984,2686,12885608,2835,12425314,2988,12884836,3145,12424801,3306,12885614,3471,12819306,3640,12753768,3813,12886124,3990,12687460,4171,12227423,4356,12095838,4545,12687715,4738,13148008,4935,12819300,136,12689003,173,13543537,214,12951143,259,13280107,308,13740401,361,14003570,418,13950687,479,11124641,544,12899531,613,13937266,686,11965794,763,12622179,844,12490593,929,12292445,1018,12490593,1111,12357983,1208,12095324,1309,11635544,1414,13346938,1523,12621922,1636,12359009,1753,12029274,1874,12029532,1999,12359519,2128,13279338,2261,12950887,2398,12095582,2539,12687717,2684,11503702,2833,12358495,2986,12424800,3143,12227680,3304,12227167,3469,12621924,3638,12490593,3811,12490593,3988,12359008,4169,12293473,4354,13674869,4543,12687459,4736,13477747,4933,13148008,5134,13148008,171,12885611,212,13543793,257,12951401,306,13411694,359,13344873,416,14135417,477,13950687,542,13622227,611,10794407,684,10522970,761,12819046,842,12687458,927,12359264,1016,12161373,1109,12819304,1206,12424545,1307,12161117,1412,11701336,1521,12292189,1634,12950887,1751,12029789,1872,12293217,1997,12292702,2126,12357725,2259,12293216,2396,12556128,2537,12753764,2682,12359265,2831,12095581,2984,12095582,3141,12622179,3302,12687458,3467,12161630,3636,12490592,3809,12358495,3986,12425059,4167,12293215,4352,12621923,4541,12030045,4734,12424544,4931,12161887,5132,13082471,5337,13345644,210,12885611,255,13806197,304,13543022,357,13345386,414,13213546,475,14071425,540,14542309,609,11321765,682,10593185,759,13674865,840,13148008,925,12425056,1014,12358496,1107,12556131,1204,11504217,1305,11767130,1410,12293216,1519,12490852,1632,12226652,1749,12358495,1870,12424801,1995,12160859,2124,12226653,2257,12358752,2394,12622179,2535,12227937,2680,12490593,2829,13807486,2982,12293472,3139,12687204,3300,12819558,3465,12556387,3634,12951143,3807,12621922,3984,12490593,4165,12226653,4350,12753253,4539,12358752,4732,12556129,4929,12884838,5130,12819045,5335,13345644,5544,13938293,253,12885611,302,13674607,355,13543535,412,13344874,473,13345645,538,13345643,607,14147809,680,11190432,757,10072722,838,13806192,923,13279851,1012,12425056,1105,12490850,1202,12358753,1303,11176023,1408,12424289,1517,12029531,1630,12819304,1747,12095324,1868,12292446,1993,12424287,2122,12424032,2255,12424031,2392,12424800,2533,12425058,2678,12884837,2827,12884837,2980,12819305,3137,12556385,3298,12885093,3463,13412465,3632,13149297,3805,12556129,3982,12884580,4163,13214061,4348,12425057,4537,12160860,4730,12358238,4927,12359008,5128,12359521,5333,12687716,5542,13805938,5755,13938035,300,12885611,353,13938552,410,13937778,471,13345643,536,13345387,605,13609072,678,12830918,755,10466196,836,16382197,921,12490593,1010,13345903,1103,12950631,1200,12622179,1301,12424801,1406,11242074,1515,12424031,1628,12292703,1745,11504473,1866,12292959,1991,10518097,2120,12621409,2253,12425057,2390,12029531,2531,13083504,2676,12292960,2825,12884837,2978,12687458,3135,12885865,3296,11438940,3461,12884584,3630,12951142,3803,13017196,3980,13148521,4161,13740403,4346,12622180,4535,12425057,4728,12357982,4925,12226910,5126,12359264,5331,11701854,5540,13148266,5753,13937526,5970,13346155,351,12885611,408,13806452,469,14003828,534,13345644,603,13214056,676,13411694,753,12701644,834,14082530,919,11058853,1008,13345642,1101,13213544,1198,11833439,1299,12884837,1404,12950629,1513,13280111,1626,12161116,1743,12161630,1864,12424800,1989,12490850,2118,12094813,2251,12161373,2388,12424031,2529,12424800,2674,12622180,2823,12752995,2976,13016167,3133,12951145,3294,12687715,3459,12621922,3628,13215349,3801,12097122,3978,12556387,4159,12951146,4344,13674607,4533,12622179,4726,11964253,4923,12490851,5124,12424031,5329,12556388,5538,13280112,5751,13411951,5968,10190420,6189,13082473,406,12885611,467,14003831,532,13345643,601,13345642,674,13345386,751,13674865,832,12964049,917,9872540,1006,16645371,1099,13411949,1196,13279849,1297,13279337,1402,13147751,1511,12885350,1624,13280111,1741,12227166,1862,12425058,1987,12753253,2116,12950630,2249,12425056,2386,12227421,2527,12425056,2672,12752997,2821,12687718,2974,12951400,3131,12950373,3292,13411438,3457,13147752,3626,13477746,3799,13213545,3976,13279852,4157,13412209,4342,12753250,4531,13345645,4724,13148525,4921,12161631,5122,12490592,5327,12359009,5536,12227424,5749,12621922,5966,13608816,6187,13741171,6412,13345386,465,12885611,530,13740913,599,13279852,672,13345644,749,13345644,830,13937267,915,13292757,1004,13096656,1097,10068898,1194,11702881,1295,13345644,1400,13345386,1509,13016680,1622,13213800,1739,13279852,1860,12292189,1985,12425057,2114,12752995,2247,12752994,2384,12621667,2525,12621923,2670,12621922,2819,12490849,2972,12687460,3129,12885608,3290,13148008,3455,12621924,3624,12819045,3797,13082472,3974,12885350,4155,14003830,4340,12490851,4529,12885093,4722,12885351,4919,13543794,5120,12425057,5325,12292959,5534,12555618,5747,12622181,5964,12621923,6185,13345903,6410,13477743,6639,13213544,528,12951660,597,14135417,670,13345644,747,13345644,828,13476973,913,14069879,1002,12439490,1095,12767692,1192,11387053,1293,12233068,1398,13740144,1507,13279851,1620,13082472,1737,13279851,1858,13411954,1983,12425315,2112,12687458,2245,13543800,2382,12687715,2523,12424800,2668,12357981,2817,12884583,2970,12425313,3127,12819044,3288,12951143,3453,13214318,3622,12884836,3795,12687459,3972,12884837,4153,13213546,4338,13016165,4527,13345645,4720,13279853,4917,12819302,5118,12819044,5323,13215089,5532,12490080,5745,12687460,5962,11964252,6183,12425314,6408,12621924,6637,13608302,6870,12885094,595,12951660,668,14267261,745,13345900,826,13345901,911,13345645,1000,14135415,1093,13294036,1190,11911613,1291,14147803,1396,14739941,1505,13543536,1618,13740144,1735,13740402,1856,13543278,1981,12359009,2110,12358753,2243,12687974,2380,12819044,2521,12490849,2666,12490849,2815,12161117,2968,12490850,3125,12819045,3286,12752997,3451,13213801,3620,12819044,3793,12884838,3970,12687458,4151,12951144,4336,13016679,4525,12359522,4718,12096351,4915,13477747,5116,13279593,5321,12753508,5530,12819301,5743,12819045,5960,12424800,6181,12951407,6406,12819299,6635,12819044,6868,13279339,7105,12556643,666,12885611,743,14267774,824,13345900,909,13411437,998,13937778,1091,14135673,1188,13622235,1289,10463658,1394,10793381,1503,10927518,1616,11835979,1733,14070138,1854,13411950,1979,12951144,2108,12884837,2241,12425056,2378,13213804,2519,12753252,2664,12951400,2813,12424543,2966,12820076,3123,12490337,3284,12621666,3449,12753764,3618,12885094,3791,12884837,3968,12687458,4149,12753250,4334,12490593,4523,12950887,4716,13477487,4913,12293729,5114,12228194,5319,13279851,5528,12556643,5741,13741690,5958,12687459,6179,12556387,6404,12951660,6633,12950629,6866,13346416,7103,13082471,7344,13477488,741,12951148,822,13543279,907,13477743,996,13477487,1089,14003826,1186,13674865,1287,12175552,1392,11913140,1501,13555914,1614,10266791,1731,8360829,1852,13543535,1977,13805937,2106,13477485,2239,13345390,2376,12884837,2517,12819300,2662,13213288,2811,13148267,2964,12621923,3121,12687459,3282,12884837,3447,12819302,3616,13147752,3789,12950374,3966,13147496,4147,12884837,4332,13214316,4521,13279853,4714,13214058,4911,12885350,5112,13346673,5317,13740401,5526,13345131,5739,13148008,5956,13477486,6177,13214313,6402,12752994,6631,13214576,6864,12951143,7101,13411694,7342,13345644,7587,12885093,820,12885867,905,14070136,994,13674610,1087,13017193,1184,13871730,1285,13818331,1390,14016480,1499,11847866,1612,10791595,1729,10134435,1850,10665378,1975,7507077,2104,14003825,2237,14135672,2374,13740400,2515,13082471,2660,13147754,2809,12819302,2962,12359523,3119,12754023,3280,13213545,3445,12950630,3614,12884836,3787,12884838,3964,12490849,4145,12556131,4330,12819044,4519,12556129,4712,13279850,4909,13346413,5110,13411950,5315,13740407,5524,13806194,5737,12951143,5954,13148007,6175,12687973,6400,12951143,6629,12884837,6862,13280367,7099,13345385,7340,12951399,7585,13543278,7834,12490849,903,12819818,992,14069879,1085,13411437,1182,13674607,1283,13805936,1388,14278110,1497,13556187,1610,14003570,1727,11059104,1848,10137742,1973,10731171,2102,13887200,2235,12636863,2372,10405047,2513,9548199,2658,12173986,2807,12687717,2960,13279853,3117,12622694,3278,12884837,3443,12951399,3612,13214060,3785,12950630,3962,13214059,4143,12818788,4328,13082729,4517,13279336,4710,12819300,4907,13148520,5108,13345642,5313,12950887,5522,13609330,5735,12951144,5952,12885606,6173,13280108,6398,12491109,6627,13345390,6860,12885350,7097,12819301,7338,12819301,7583,13674609,7832,12951401,8085,12819301,990,12951660,1083,14069878,1180,13411438,1281,13740400,1386,13805667,1495,14003826,1608,13950430,1725,11979188,1846,11519406,1971,10598806,2100,12834496,2233,7966838,2370,11917792,2511,11391190,2656,8491936,2805,11520955,2958,14069878,3115,13872761,3276,12951400,3441,13280107,3610,12819046,3783,13148264,3960,13344875,4141,13279595,4326,13148266,4515,13345644,4708,13016936,4905,13213801,5106,12885350,5311,13674865,5520,12885606,5733,13280364,5950,13609072,6171,12951144,6396,12950629,6625,13543023,6858,13016936,7095,13411438,7336,12885350,7581,13543282,7830,13674608,8083,13807481,8340,12885864,1081,12885611,1178,14069622,1279,13411437,1384,14070138,1493,14999520,1606,14014681,1723,14146781,1844,12373438,1969,11255973,2098,11717033,2231,10335891,2368,9152658,2509,12637636,2654,11195350,2803,10863055,2956,11386834,3113,12506595,3274,13411951,3439,13345901,3608,12885606,3781,12885350,3958,12951142,4139,13411695,4324,13148009,4513,12951143,4706,13410926,4903,13016935,5104,12951143,5309,12951142,5518,11965537,5731,13280107,5948,13740402,6169,13280108,6394,13279595,6623,13345900,6856,13543536,7093,12951142,7334,12819814,7579,13280108,7828,13806967,8081,13411694,8338,13017191,8599,12752995,1176,12885611,1277,14135930,1382,13543022,1491,14003826,1604,14078417,1721,14605019,1842,13872241,1967,13228244,2096,14003570,2229,11125146,2366,10996919,2507,10931909,2652,10205857,2801,9744826,2954,15661047,3111,12442086,3272,11979231,3437,14279922,3606,13477486,3779,13346414,3956,13016936,4137,13279851,4322,12951142,4511,12819558,4704,13345387,4901,13213800,5102,13213801,5307,13082472,5516,13543535,5729,13017705,5946,13674865,6167,13609072,6392,13411694,6621,13938551,6854,13280619,7091,12951145,7332,12688230,7577,13280621,7826,13412205,8079,14004087,8336,13345645,8597,13148263,8862,12292446,1275,12819818,1380,14004084,1489,13280621,1602,14003827,1719,14069877,1840,14605018,1965,13555674,2094,13556182,2227,11322020,2364,11388328,2505,10536362,2650,11522778,2799,11393240,2952,6649964,3109,12508646,3270,11652572,3435,10141120,3604,11459295,3777,13543536,3954,13280107,4135,12425828,4320,12557158,4509,13016936,4702,13213544,4899,12951143,5100,13213802,5305,13279850,5514,13214056,5727,13608815,5944,13609329,6165,13082729,6390,13280108,6619,13213801,6852,13609585,7089,12951657,7330,12556900,7575,13411951,7824,13543535,8077,13543280,8334,13608815,8595,13214056,8860,13345130,9129,12425057,1378,12951660,1487,13872242,1600,13346156,1717,14003826,1838,14474201,1963,14003827,2092,13213515,2225,13556699,2362,11387049,2503,11453622,2648,10402972,2797,12246756,2950,10798539,3107,11456474,3268,10272697,3433,12836584,3602,9484450,3775,11457488,3952,10403759,4133,13805937,4318,14069881,4507,13213545,4700,12425315,4897,13279336,5098,13279593,5303,13345644,5512,13147751,5725,12951144,5942,13148010,6163,13345901,6388,13016680,6617,13213544,6850,13477487,7087,14069627,7328,13740400,7573,13609071,7822,13609073,8075,13412206,8332,12228450,8593,13213800,8858,13016936,9127,12951142,9400,12753509,1485,12819818,1598,14003827,1715,13674607,1836,13542232,1961,13937266,2090,14276568,2223,14004342,2360,13356217,2501,13030864,2646,10993570,2795,10534811,2948,11851994,3105,11326680,3266,11851744,3431,10010281,3600,10204565,3773,10667456,3950,10007997,4131,10865616,4316,13098189,4505,12621922,4698,12754280,4895,13477231,5096,12687973,5301,13279596,5510,13345387,5723,13279337,5940,13543535,6161,12885351,6386,13082215,6615,13806710,6848,13016935,7085,13279851,7326,12359780,7571,13674608,7820,13214057,8073,13213545,8330,13345643,8591,13345643,8856,13214316,9125,13279337,9398,12951143,9675,12884580,1596,12951148,1713,14003827,1834,13805936,1959,14004342,2088,14135672,2221,13937522,2358,13937266,2499,13152116,2644,12176316,2793,11453616,2946,10665885,3103,11458512,3264,11854306,3429,11721953,3598,11721951,3771,11524059,3948,12047328,4129,12246754,4314,10733003,4503,12640741,4696,12968150,4893,13148009,5094,13477231,5299,13674608,5508,13345902,5721,13477230,5938,13345901,6159,12884838,6384,13148011,6613,13280625,6846,11504987,7083,13213800,7324,13477743,7569,13543280,7818,12951656,8071,13148521,8328,12819814,8589,13543799,8854,13213800,9123,12951143,9396,12425315,9673,12885094,9954,12753250,1711,12885867,1832,14003826,1957,14135417,2086,14070135,2219,14276053,2356,14211032,2497,13937522,2642,13425113,2791,13030610,2944,12044985,3101,10928799,3262,11129275,3427,11657953,3596,11722972,3769,11327193,3946,11393243,4127,11524054,4312,11063231,4501,11129291,4694,12180698,4891,9812405,5092,13873018,5297,13477743,5506,11373660,5719,13345900,5936,13280107,6157,13477742,6382,12950886,6611,12884581,6844,13280108,7081,13412210,7322,12885094,7567,12491108,7816,12819559,8069,13148009,8326,13345388,8587,12819557,8852,13346160,9121,12753509,9394,12753251,9671,13279851,9952,13148008,10237,12753508,1830,12885611,1955,13740401,2084,14333053,2217,13543280,2354,14003570,2495,13883867,2640,13819101,2789,13556185,2942,13293783,3099,11256227,3260,10796952,3425,14003570,3594,11064260,3767,11328980,3944,11591900,4125,10865600,4310,11195337,4499,10998208,4692,13937522,4889,13740401,5090,10536625,5295,12687717,5504,13279595,5717,13477742,5934,12951399,6155,13346157,6380,13280108,6609,13279081,6842,12885606,7079,13543538,7320,13279851,7565,12425057,7814,12556387,8067,13674865,8324,12885863,8585,13806455,8850,12885606,9119,12819557,9392,13872760,9669,12753251,9950,12425057,10235,12951659,10524,12556386,1953,12885611,2082,13805936,2215,14333824,2352,14405821,2493,13674864,2638,14144982,2787,13938290,2940,13819358,3097,13293524,3258,12570565,3423,10730647,3592,10402197,3765,10272417,3942,10933703,4123,10867393,4308,10405546,4497,10537136,4690,14003570,4887,13345901,5088,13345642,5293,13740400,5502,14003570,5715,13345389,5932,13214056,6153,13345386,6378,13411694,6607,13279593,6840,13213543,7077,13148264,7318,13608817,7563,13279596,7812,12754023,8065,13346413,8322,13806196,8583,13477231,8848,13806195,9117,11833439,9390,12293730,9667,12819045,9948,12951144,10233,12886122,10522,12292447,10815,12951657,2080,12885611,2213,13871731,2350,14333054,2491,15000553,2636,14275796,2785,14003827,2938,13882838,3095,13621464,3256,13937266,3421,13938034,3590,11387557,3763,10533780,3940,10139545,4121,11061678,4306,10471342,4495,10207655,4688,10471339,4885,13475924,5086,11504989,5291,14267774,5500,10603442,5713,11720646,5930,13346158,6151,13345901,6376,13806711,6605,14003827,6838,13411439,7075,13280364,7316,13280110,7561,13213544,7810,13213544,8063,12885094,8320,12885607,8581,13674611,8846,13674611,9115,13345643,9388,13017193,9665,13740918,9946,13279337,10231,12819301,10520,12622178,10813,12555616,11110,11307352,2211,12885611,2348,13543279,2489,14003827,2634,15789544,2783,14003570,2936,14539225,3093,14015195,3254,13884124,3419,13937522,3588,14003570,3761,11125153,3938,10533780,4119,13937777,4304,10273443,4493,10735546,4686,10274731,4883,10405290,5084,13806193,5289,13346412,5498,13938034,5711,10076579,5928,8035197,6149,11964252,6374,13214057,6603,13806193,6836,13938547,7073,13806454,7314,12819045,7559,13147495,7808,13345646,8061,13213545,8318,13082472,8579,13279850,8844,13740402,9113,12753509,9386,13279852,9663,13543279,9944,13807482,10229,13279338,10518,13213802,10811,12752995,11108,12688234,11409,12884841,2346,12688747,2487,13805937,2632,13938547,2781,12236214,2934,14267260,3091,13871985,3252,13806193,3417,14146525,3586,13871986,3759,13872242,3936,11716526,4117,10336395,4302,14003570,4491,10799018,4684,10142372,4881,10799793,5082,10338725,5287,13872242,5496,13477230,5709,13280365,5926,12884580,6147,8167043,6372,11376710,6601,14267522,6834,13938035,7071,13412206,7312,13477230,7557,13280367,7806,13016936,8059,12753507,8316,13016937,8577,12687716,8842,12688487,9111,12687715,9384,13411695,9661,12951142,9942,12293216,10227,13016936,10516,13213544,10809,13016166,11106,12425313,11407,12424289,11712,12490595,2485,12885611,2630,13805937,2779,14004341,2932,14605276,3089,14200949,3250,13948116,3415,14342617,3584,14003826,3757,13871730,3934,14003570,4115,11913653,4300,11059357,4489,10468506,4682,10339494,4879,10274473,5080,9153937,5285,10338208,5494,10272414,5707,13937266,5924,14069620,6145,14399362,6370,13937522,6599,11768161,6832,14267003,7069,13543022,7310,13806710,7555,13346413,7804,11570525,8057,12950629,8314,12621664,8575,12819301,8840,13082216,9109,11307867,9382,13016679,9659,13082472,9940,13345129,10225,13213545,10514,14004349,10807,13873020,11104,13213545,11405,12425056,11710,12424801,12019,12490594,2628,12688491,2777,14135673,2930,15655629,3087,14868448,3248,14003825,3413,13676141,3582,13740656,3755,13805936,3932,14003570,4113,13872241,4298,13871986,4487,11454119,4680,10468505,4877,10470568,5078,10142889,5283,9615258,5492,10271899,5705,13871986,5922,10865327,6143,11063217,6368,12359524,6597,12162915,6830,13543280,7067,14003826,7308,12754281,7553,14531722,7802,11457236,8055,12177115,8312,12227422,8573,12753251,8838,12687715,9107,11965024,9380,12885349,9657,13345904,9938,13280365,10223,13477487,10512,12819044,10805,13543023,11102,13740404,11403,13213800,11708,12885606,12017,13149041,12330,13807231,2775,12688747,2928,14004084,3085,15986154,3246,13739355,3411,13740401,3580,11307597,3753,14004083,3930,14082271,4111,13752532,4296,14003570,4485,11913397,4678,11059105,4875,10994593,5076,14003570,5281,9482902,5490,10338465,5703,13674864,5920,13938033,6141,13411694,6366,14004343,6595,12621923,6828,13149036,7065,13609329,7306,10471067,7551,14399618,7800,9941156,8053,9681553,8310,11651008,8571,12174784,8836,13740400,9105,13280365,9378,12490850,9655,12951142,9936,13148265,10221,12951142,10510,12950887,10803,13016936,11100,13609328,11401,13477486,11706,12885350,12015,13148008,12328,12425059,12645,12490849,2926,12885611,3083,13872241,3244,15460580,3409,14069879,3578,13871986,3751,13017452,3928,14080216,4109,13884380,4294,13686744,4483,12899277,4676,11978677,4873,12243126,5074,10403226,5279,11191975,5488,10600607,5701,13871729,5918,12753765,6139,12819044,6364,12687459,6593,13674864,6826,14267516,7063,13016937,7304,13872244,7549,11261368,7798,13886935,8051,10538156,8308,9616267,8569,10076568,8834,9879446,9103,14739170,9376,11569495,9653,12425315,9934,12820070,10219,12885094,10508,13345646,10801,13345646,11098,12884838,11399,14267001,11704,13675120,12013,11126183,12326,10797213,12643,12819302,12964,12490593,3081,12885611,3242,13937522,3407,11118246,3576,13938033,3749,13805937,3926,14004084,4107,11251631,4292,14079960,4481,13358807,4674,13030355,4871,12570053,5072,10994851,5277,11389096,5486,9877655,5699,13871729,5916,12951143,6137,12358238,6362,11767387,6591,12292701,6824,13544573,7061,9022864,7302,12951399,7547,12967648,7796,10007718,8049,11459275,8306,10011033,8567,9747853,8832,9748113,9101,10339486,9374,15988210,9651,11914469,9932,12096097,10217,12753509,10506,11371861,10799,14465156,11096,10864844,11397,11520433,11702,8691326,12011,11323056,12324,10796741,12641,10007700,12962,12162658,13287,12753764,3240,12622955,3405,14004341,3574,15065311,3747,13674865,3924,13806193,4105,13806193,4290,14472918,4479,14146010,4672,13937522,4869,12438980,5070,12373184,5275,9481088,5484,10007955,5697,13805681,5914,13806193,6135,12885094,6360,12424286,6589,12424032,6822,12161629,7059,12292703,7300,9813152,7545,13148008,7794,14135674,8047,11590862,8304,10735280,8565,9681548,8830,9550985,9099,9748111,9372,9879956,9649,10340002,9930,13688284,10215,13423582,10504,14739437,10797,12499903,11094,14474977,11395,10663355,11700,10598858,12009,12376802,12322,10664906,12639,12439775,12960,13871730,13285,13871986,13614,12885607,3403,12688747,3572,14004084,3745,13213010,3922,14135416,4103,14004339,4288,13740400,4477,14069622,4670,13938547,4867,13871729,5068,12965069,5273,13213003,5482,13426115,5695,10468507,5912,13871730,6133,12885864,6358,12490337,6587,12621665,6820,12490850,7057,12687460,7298,12029530,7543,13412210,7792,12556130,8045,12886122,8302,11590871,8563,12114108,8828,9879955,9097,9419399,9370,9419145,9647,9813909,9928,10472362,10213,14543071,10502,13423063,10795,13882585,11092,10662578,11393,10009528,11698,11326677,12007,11984352,12320,10731213,12637,13937778,12958,13740657,13283,13871730,13612,13740144,13945,13345643,3570,12819819,3743,14135675,3920,13938291,4101,16381421,4286,14135673,4475,13937778,4668,14003826,4865,14934758,5066,13740401,5271,13621722,5480,12176317,5693,10269842,5910,14003825,6131,14003827,6356,12753251,6585,12490848,6818,12951145,7055,12490595,7296,12424545,7541,12095068,7790,10649683,8043,14201467,8300,14333825,8561,11575371,8826,9945495,9095,13032901,9368,9485194,9645,9550732,9926,9945750,10211,10537385,10500,10668977,10793,12245700,11090,10931386,11391,11393490,11696,11657181,12005,11855077,12318,12050915,12635,13937778,12956,13937778,13281,14003827,13610,13871729,13943,13346158,14280,13411693,3741,12885611,3918,14069879,4099,13938034,4284,16051943,4473,13805681,4666,13280365,4863,14003570,5064,13740400,5269,13937266,5478,13872242,5691,11453351,5908,11256732,6129,13871729,6354,13937778,6583,12490593,6816,12556388,7053,12425313,7294,12029788,7539,12095583,7788,12029274,8041,11240276,8298,13477487,8559,13806450,8824,10472100,9093,11129008,9366,10077077,9643,10266980,9924,9682577,10209,10011291,10498,11064252,10791,10012067,11088,10668978,11389,11327948,11694,11327438,12003,11722714,12316,11856361,12633,11922409,12954,13937522,13279,13938034,13608,13806193,13941,13674864,14278,12951143,14619,13280623,3916,12688747,4097,13938034,4282,14003826,4471,16183531,4664,14865351,4861,13937777,5062,13938033,5267,13806193,5476,13740400,5689,13873013,5906,11650481,6127,14069879,6352,13740400,6581,12754023,6814,12424800,7051,13478782,7292,12490593,7537,12425322,7786,11701080,8039,12490594,8296,12293216,8557,13082472,8822,13805936,9091,14004342,9364,10668968,9641,10010520,9922,9419402,10207,9813909,10496,10339747,10789,10997945,11086,10406826,11387,10801596,11692,10866362,12001,11195078,12314,11459278,12631,13938034,12952,11921895,13277,13740656,13606,12491109,13939,14135675,14276,13806193,14617,13148007,14962,13345644,4095,12622955,4280,13937522,4469,13805937,4662,16314860,4859,16183270,5060,8225413,5265,13805937,5474,13805936,5687,13609071,5904,13477230,6125,14003826,6350,13871729,6579,14267261,6812,13279851,7049,12490849,7290,12226910,7535,12359010,7784,11898203,8037,12161376,8294,12161374,8555,13213808,8820,12161373,9089,12819044,9362,13938037,9639,10406048,9920,10339741,10205,9353096,10494,10010779,10787,10011557,11084,11064256,11385,10276526,11690,11261375,11999,10340017,12312,10865072,12629,11392974,12950,12379357,13275,13806193,13604,12885093,13937,12556388,14274,14135414,14615,13543791,14960,13674871,15309,13279593,4278,12819819,4467,12754536,4660,13806193,4857,16314861,5058,16315117,5263,15194832,5472,13683378,5685,13938034,5902,13280364,6123,13345899,6348,13740400,6577,14004085,6810,13937522,7047,14004083,7288,11898204,7533,12227423,7782,12095324,8035,12425057,8292,12424544,8553,12952178,8818,11832924,9087,12161374,9360,12490336,9637,13346157,9918,10406054,10203,10077599,10492,10339483,10785,10143389,11082,11118944,11383,10998967,11688,12312531,11997,10735293,12310,11655364,12627,10141350,12948,11589579,13273,13938034,13602,12950887,13935,12160860,14272,11767386,14613,12227171,14958,13543536,15307,12753509,15660,13543281,4465,12689003,4658,14267260,4855,14135673,5056,16380653,5261,16117739,5470,15920358,5683,15920356,5900,15460325,6121,13674609,6346,13345642,6575,13279850,6808,13674865,7045,13938290,7286,13872242,7531,12359264,7780,12819047,8033,12819303,8290,12227167,8551,12227423,8816,12556131,9085,13280369,9358,13148264,9635,12359008,9916,12951657,10201,14003828,10490,13937522,10783,10537380,11080,11326652,11381,10604207,11686,10868678,11995,11261892,12308,11262658,12625,12179652,12946,10009506,13271,13871728,13600,13345388,13933,12490594,14270,12160860,14611,12161373,14956,11767128,15305,13214314,15658,13082214,16015,13345645,4656,12754283,4853,13017451,5054,13280365,5259,16315632,5468,16052201,5681,16117224,5898,16183273,6119,16183529,6344,15589847,6573,13609072,6806,13346157,7043,13346157,7284,13609072,7529,12753508,7778,12950373,8031,12753511,8288,12425057,8549,13016424,8814,12030046,9083,13016936,9356,13872501,9633,12162914,9914,13213544,10199,12950374,10488,13411950,10781,13806193,11078,10208413,11379,10998193,11684,11327943,11993,11984850,12306,11722192,12623,12428893,12944,11391408,13269,13412207,13598,13346157,13931,12753250,14268,12490593,14609,12490595,14954,12490080,15303,12227423,15656,12885095,16013,12556387,16374,13279336,4851,12688746,5052,13806451,5257,11907249,5466,16315120,5679,16051944,5896,16117223,6117,16183272,6342,16181985,6571,16380653,6804,13345901,7041,13411180,7282,13148008,7527,13937522,7776,12621922,8029,12753250,8286,12819562,8547,13148008,8812,13411694,9081,13477742,9354,13346159,9631,12753765,9912,13806199,10197,13411437,10486,12096096,10779,12884837,11076,12819301,11377,12101982,11682,11590596,11991,11656137,12304,10537654,12621,11196358,12942,12509910,13267,13806193,13596,13345901,13929,13477230,14266,12622177,14607,12490337,14952,12490080,15301,12621923,15654,11306582,16011,13279851,16372,13805683,16737,13411950,5050,12622953,5255,13345644,5464,14012881,5677,16315374,5894,16117479,6115,15984352,6340,16248038,6569,14996168,6802,13937522,7039,13477230,7280,13082728,7525,12687715,7774,12884837,8027,12753251,8284,12621668,8545,14005122,8810,12556645,9079,13345644,9352,11504731,9629,12030044,9910,13214574,10195,12753251,10484,13213804,10777,13939332,11074,12293217,11375,12884838,11680,14003826,11989,11524809,12302,14003570,12619,11720664,12940,9615794,13265,10800815,13594,12688744,13927,13542767,14264,13345901,14605,12884837,14950,12424800,15299,12424800,15652,12359008,16009,11898458,16370,13346157,16735,13345644,17104,12885863,5253,12622953,5462,13674867,5675,13815243,5892,16183529,6113,16051430,6338,15984864,6567,15786715,6800,13871729,7037,13740144,7278,13345644,7523,13346157,7772,12359266,8025,12950373,8282,13082473,8543,12227423,8808,13806454,9077,13280108,9350,12227680,9627,12358496,9908,11963737,10193,12424801,10482,12951407,10775,12424800,11072,13016682,11373,13017195,11678,12687460,11987,13346415,12300,11654622,12617,11918556,12938,13805936,13263,14069878,13592,13740401,13925,12951144,14262,12621923,14603,13543539,14948,12819045,15297,12490337,15650,12424800,16007,12424032,16368,12687204,16733,13411437,17102,13543535,17475,13871987,5460,12622953,5673,13740401,5890,12957611,6111,16116965,6336,16050402,6565,15918300,6798,14074293,7035,13478255,7276,13609071,7521,13938549,7770,13740657,8023,12885607,8280,13148008,8541,13543538,8806,12951143,9075,13937779,9348,13017194,9625,11964509,9906,11963994,10191,11963994,10480,12095580,10773,12293215,11070,12029789,11371,12096095,11676,13213543,11985,12885606,12298,13345645,12615,11982558,12936,10472378,13261,12819301,13590,11504474,13923,14399361,14260,13017193,14601,13148009,14946,13083500,15295,12819300,15648,12425314,16005,12490848,16366,12161373,16731,12425057,17100,13477488,17473,12885863,17850,13740400,5671,12622953,5888,13345900,6109,15328740,6334,16051684,6563,16050657,6796,15655384,7033,15456974,7274,13543280,7519,13872499,7768,13543535,8021,13280622,8278,13346672,8539,13543540,8804,13345387,9073,13740658,9346,13215085,9623,12753765,9904,13081958,10189,12622442,10478,11832923,10771,12621924,11068,11372374,11369,11963995,11674,13016939,11983,13608814,12296,13477487,12613,12951143,12934,12753252,13259,12621922,13588,12885095,13921,12884837,14258,12950630,14599,12687458,14944,12950373,15293,14070138,15646,12819300,16003,12293471,16364,12425058,16729,12556644,17098,13873281,17471,13543536,17848,13148523,18229,14135417,5886,12622953,6107,13740404,6332,15197155,6561,16247780,6794,15918555,7031,15325903,7272,14008754,7517,13543792,7766,13871729,8019,14004086,8276,13805681,8537,13806455,8802,13807483,9071,13806708,9344,14004084,9621,13346156,9902,13806198,10187,12556130,10476,12490855,10769,11701594,11066,12424545,11367,12161372,11672,12359525,11981,12425057,12294,12687972,12611,12228194,12932,12687715,13257,12490849,13586,12819303,13919,12095325,14256,12687460,14597,12425313,14942,12490081,15291,12161630,15644,13213801,16001,13477486,16362,12884837,16727,12753509,17096,12490593,17469,11963996,17846,13674609,18227,12951655,18612,13214058,6105,12557160,6330,13345386,6559,14539225,6792,16314085,7029,15523798,7270,15392209,7515,15920099,7764,14004086,8017,14333053,8274,13740401,8535,13346156,8800,12885864,9069,14135935,9342,13214316,9619,13806193,9900,12951144,10185,13148264,10474,12490848,10767,12029532,11064,12293215,11365,12950631,11670,12556387,11979,12359264,12292,12029789,12609,13543538,12930,11767388,13255,12292960,13584,12029787,13917,12095067,14254,12753512,14595,12490081,14940,12423519,15289,12425315,15642,11240790,15999,12425056,16360,13609592,16725,12885350,17094,12687459,17467,12951143,17844,12753251,18225,12687458,18610,14070136,18999,14333825,6328,12556648,6557,13213801,6790,14332795,7027,16116447,7268,15786714,7513,16447217,7762,13938034,8015,13937778,8272,13411951,8533,13740143,8798,12426086,9067,13411695,9340,13148520,9617,14004348,9898,13346413,10183,11373659,10472,11964252,10765,12490594,11062,12293728,11363,12490592,11668,13345644,11977,12885093,12290,12621922,12607,12819302,12928,12622180,13253,12425314,13582,12687723,13915,11701337,14252,11832665,14593,11438681,14938,11898459,15287,11636057,15640,11306583,15997,13083508,16358,12819044,16723,12951143,17092,12359522,17465,12819045,17842,12884835,18223,12687459,18608,13082215,18997,11767130,19390,12885350,6555,12556904,6788,13213544,7025,13871729,7266,15852506,7511,10326926,7760,13674349,8013,14070137,8270,14069622,8531,13806193,8796,13477485,9065,13279849,9338,13345899,9615,12819300,9896,12687459,10181,12622180,10470,13807229,10763,12095838,11060,12556387,11361,12818787,11666,12884837,11975,13543278,12288,13411694,12605,12490849,12926,12950629,13251,13872504,13580,10846292,13913,11503959,14250,12095325,14591,11504216,14936,13017199,15285,13346936,15638,12424544,15995,12358494,16356,13346422,16721,13016680,17090,13213800,17463,13148263,17840,13477488,18221,12819300,18606,13148009,18995,12950630,19388,12884838,19785,12096096,6786,12622184,7023,13279338,7264,14003826,7509,14333826,7758,13806193,8011,14003569,8268,14070136,8529,14341846,8794,13674865,9063,14135416,9336,13740144,9613,13345388,9894,12556129,10179,12556385,10468,11636057,10761,12292445,11058,13280365,11359,12950118,11664,13543023,11973,13477486,12286,13543280,12603,13345644,12924,12950886,13249,13280623,13578,12884837,13911,12424800,14248,11175767,14589,12950630,14934,13148527,15283,13280627,15636,12556129,15993,12556128,16354,13149300,16719,13411953,17088,13213800,17461,12885607,17838,12951656,18219,13609329,18604,13608817,18993,12884837,19386,12819300,19783,13017193,20184,12228194,7021,12556904,7262,13279850,7507,14003827,7756,13937522,8009,13805681,8266,13674864,8527,14201723,8792,13157829,9061,13806193,9334,13938033,9611,13806193,9892,12819043,10177,12687458,10466,12622438,10759,12226910,11056,12622179,11357,14267774,11662,13345388,11971,13477742,12284,13871729,12601,13872241,12922,12771310,13247,13937778,13576,12951400,13909,12621923,14246,12490852,14587,13412209,14932,12556387,15281,13477744,15634,13412466,15991,13082215,16352,13016166,16717,12950886,17086,13214313,17459,13477488,17836,12687973,18217,14135676,18602,14333829,18991,13543279,19384,13147751,19781,13082473,20182,12425312,20587,13938557,7260,12622439,7505,13279850,7754,13674607,8007,13937522,8264,14004342,8525,14070137,8790,13674609,9059,15331312,9332,13871986,9609,14003827,9890,13674607,10175,13214828,10464,12753252,10757,12753253,11054,10452819,11355,12622180,11660,13213545,11969,14070399,12282,14413814,12599,13229294,12920,12639214,13245,12443369,13574,10932926,13907,14003826,14244,12884580,14585,13280110,14930,13806199,15279,13609072,15632,13017193,15989,13411438,16350,13740657,16715,13345642,17084,13807480,17457,11308381,17834,13280365,18215,12425571,18600,13608560,18989,13477486,19382,12951657,19779,13345386,20180,13279852,20585,12556130,20994,12227681,7503,12622953,7752,13082473,8005,13674866,8262,13937521,8523,13412207,8788,13937778,9057,13938291,9330,14003827,9607,13740401,9888,13805681,10173,14069879,10462,14069622,10755,12819043,11052,12490594,11353,12621667,11658,10979418,11967,12951399,12280,14135672,12597,13623795,12918,13296882,13243,13428721,13572,12836845,13905,10472126,14242,10406565,14583,13345387,14928,13214058,15277,13016679,15630,13411692,15987,13148522,16348,13740404,16713,12622437,17082,12885350,17455,13082472,17832,13279848,18213,13280363,18598,13740665,18987,13674866,19380,13609073,19777,13279594,20178,13346156,20583,13279851,20992,12556386,21405,13411953,7750,12622953,8003,13147753,8260,13674608,8521,13871986,8786,13280108,9055,13806194,9328,13805936,9605,13543536,9886,13806449,10171,14003570,10460,12639439,10753,13937778,11050,13149036,11351,13938291,11656,9680798,11965,13346158,12278,11455700,12595,11057359,12916,14611189,13241,13362161,13570,14283252,13903,12444393,14240,11459277,14581,10801592,14926,13871469,15275,12753510,15628,12556644,15985,11636060,16346,13148264,16711,13016935,17080,13609074,17453,13675642,17830,13213802,18211,13214058,18596,13279080,18985,13543283,19378,13806196,19775,12950886,20176,13543022,20581,13871731,20990,13477742,21403,13938810,21820,11438681,8001,12622953,8258,12753764,8519,12885607,8784,14135673,9053,13213546,9326,14004860,9603,13477230,9884,13279337,10169,13938034,10458,13806193,10751,11326655,11048,13938034,11349,13674865,11654,14003827,11963,7833999,12276,12703190,12593,11587025,12914,13689075,13239,13755124,13568,11782381,13901,14151923,14238,12181221,14579,11657181,14924,10735802,15273,13083244,15626,12425315,15983,12951657,16344,13017197,16709,12622436,17078,12227936,17451,12621922,17828,12753251,18209,12885353,18594,13214060,18983,13279851,19376,13280880,19773,12491365,20174,13543541,20579,13345642,20988,13082728,21401,13674608,21818,13477488,22239,12359264,8256,12622953,8517,13016936,8782,13280622,9051,13740400,9324,13345643,9601,14268033,9882,12885608,10167,13543279,10456,13938805,10749,13872242,11046,10536372,11347,11391934,11652,13872242,11961,14399362,12274,10864346,12591,13412206,12912,12636651,13237,12571368,13566,12439528,13899,13164275,14236,14282996,14577,12375015,14922,11908733,15271,11655367,15624,12885866,15981,12490850,16342,12621922,16707,13147752,17076,13016940,17449,11833181,17826,13346676,18207,12950891,18592,12490851,18981,12490592,19374,12950633,19771,13345390,20172,12885094,20577,12490851,20986,13477487,21399,12688487,21816,14069622,22237,11570524,22662,13214062,8515,12688747,8780,13016681,9049,13345644,9322,13871987,9599,13346158,9880,13082987,10165,13346413,10454,13805937,10747,14003569,11044,13937522,11345,14003827,11650,10471344,11959,10734512,12272,10931378,12589,10007483,12910,13806193,13235,12439267,13564,13427952,13897,13690866,14234,13823219,14575,13757426,14920,12049124,15269,11854050,15622,10735541,15979,13213544,16340,12621921,16705,13017196,17074,12819044,17447,12095324,17824,12029532,18205,12424546,18590,13018488,18979,11964252,19372,12292703,19769,12096865,20170,12819301,20575,12424799,20984,14531465,21397,13280112,21814,13411951,22235,13082989,22660,13543539,23089,13214319,8778,12688746,9047,12951144,9320,13345130,9597,11504989,9878,13608816,10163,13478e3,10452,13740401,10745,14135930,11042,13937266,11343,13937778,11648,14003826,11957,11129531,12270,9680542,12587,12573384,12908,14135673,13233,9152685,13562,12834540,13895,12636393,14232,12571629,14573,13888240,14918,13361903,15267,12509162,15620,11920862,15977,11524550,16338,13345642,16703,12884837,17072,13017193,17445,12885868,17822,12160861,18203,12292702,18588,12029530,18977,12425315,19370,12556130,19767,13345901,20168,14268030,20573,12556129,20982,12490338,21395,12753251,21812,11570010,22233,13213800,22658,13674607,23087,13214312,23520,12029789,9045,12688746,9318,13148009,9595,13279338,9876,14333053,10161,13871987,10450,13280365,10743,14004347,11040,13937521,11341,13493213,11646,14004083,11955,13871730,12268,11260343,12585,10602924,12906,10074286,13231,13609071,13560,11848914,13893,13756653,14230,13165037,14571,14673907,14916,12768744,15265,13690865,15618,12309731,15975,11788766,16336,10800571,16701,13871730,17070,13280364,17443,13213545,17820,12818788,18201,12621666,18586,12161373,18975,12161631,19368,12885095,19765,14070138,20166,11767387,20571,12424801,20980,12490849,21393,12424801,21810,12819301,22231,13214315,22656,13148008,23085,13873274,23518,11833181,23955,12292960,9316,12557160,9593,13016936,9874,13543541,10159,13740400,10448,13937522,10741,13740144,11038,13938035,11339,14003827,11644,13225424,11953,13609328,12266,13937266,12583,9284494,12904,10339504,13229,11702880,13558,14003828,13891,11323343,14228,14742261,14569,13888500,14914,12636389,15263,12901352,15616,13163501,15973,13100270,16334,11723236,16699,12837846,17068,11642717,17441,14135160,17818,13872757,18199,13279337,18584,12556385,18973,12884836,19366,12753251,19763,14333827,20164,12425056,20569,12818788,20978,12819047,21391,12490337,21808,12359008,22229,12621920,22654,12951400,23083,12885094,23516,13543536,23953,13149301,24394,12359265,9591,12622953,9872,13543800,10157,13872760,10446,14803675,10739,13806193,11036,13740656,11337,14465670,11642,13938033,11951,13031880,12264,14004339,12581,14069363,12902,11655362,13227,12113088,13556,10403755,13889,13411950,14226,13937522,14567,12967409,14912,13558516,15261,12572399,15614,14218230,15971,14479603,16332,13493487,16697,12379626,17066,11591124,17439,9483163,17816,10866353,18197,10799785,18582,14070651,18971,13938292,19364,13411693,19761,14135673,20162,14003826,20567,13345901,20976,12884836,21389,12950885,21806,12425313,22227,12292959,22652,12227168,23081,13148266,23514,13675128,23951,13543536,24392,12490337,24837,12424288,9870,12622953,10155,13280110,10444,13938554,10737,10196887,11034,14069878,11335,13938034,11640,13806193,11949,14477546,12262,12177847,12579,11060904,12900,14003570,13225,11653559,13554,7965567,13887,13937778,14224,13411694,14565,13871730,14910,14003826,15259,13559276,15612,13756399,15969,11913183,16330,14545139,16695,14348273,17064,12117993,17437,11128245,17814,10208673,18195,10339999,18580,12114371,18969,10010793,19362,11787730,19759,13298402,20160,12314085,20565,12110818,20974,13937522,21387,14003827,21804,13543279,22225,12819043,22650,12951150,23079,12556130,23512,12950629,23949,13082471,24390,13608560,24835,12293471,25284,12425058,10153,12622953,10442,13412208,10735,14135419,11032,15790314,11333,13938291,11638,13937777,11947,13279310,12260,12308922,12577,11651238,12898,10799275,13223,10666916,13552,11194807,13885,10735805,14222,9416610,14563,10666959,14908,13345901,15257,13937266,15610,13887987,15967,12900845,16328,14874359,16693,14479602,17062,14086131,17435,12117992,17812,11196098,18193,10010269,18578,10273948,18967,10208669,19360,11509577,19757,11984852,20158,11590091,20563,11787742,20972,12509927,21385,12244447,21802,13230067,22223,14003826,22648,13279851,23077,13082990,23510,12425057,23947,12885097,24388,12227422,24833,11833183,25282,12753255,25735,13083763,10440,12622953,10733,13477489,11030,13213800,11331,13937522,11636,14003826,11945,14003827,12258,13754079,12575,11323814,12896,14003570,13221,13740400,13550,14003572,13883,10993042,14220,11064521,14561,9745048,14906,13149036,15255,13543279,15608,14333054,15965,15202038,16326,14282995,16691,11781849,17060,13098221,17433,13231855,17810,11592158,18191,11392968,18576,11983301,18965,9879701,19358,9682576,19755,11314005,20156,11853516,20561,12312013,20970,11591132,21383,12510698,21800,12179172,22221,12901348,22646,13427687,23075,11981511,23508,12819044,23945,12161374,24386,13082730,24831,12885094,25280,13872244,25733,13345388,26190,12951401,10731,12622953,11028,13411439,11329,13148264,11634,13806193,11943,13871986,12256,14003826,12573,12243652,12894,14003826,13219,11126174,13548,12361039,13881,10996656,14218,10996914,14559,11326396,14904,13492173,15253,10534322,15606,12163172,15963,14333825,16324,15135989,16689,14217203,17058,13231854,17431,11848425,17808,12574440,18189,11854562,18574,11326912,18963,11194806,19356,9945493,19753,9550738,20154,10866352,20559,11326915,20968,11525328,21381,11656667,21798,12314604,22219,12049635,22644,12442858,23073,11848668,23506,13871986,23943,11898203,24384,12425314,24829,12687715,25278,13279854,25731,13148009,26188,12885606,26649,12424800,11026,12622953,11327,13873019,11632,13279337,11941,13740401,12254,13805936,12571,13871730,12892,13426655,13217,13937266,13546,10796957,13879,10797990,14216,11061933,14557,10931379,14902,10930092,15251,11907963,15604,13871986,15961,11841933,16322,14004341,16687,15005432,17056,13032944,17429,13362415,17806,14676724,18187,12967148,18572,12443370,18961,11984850,19354,10274468,19751,10011029,20152,9814420,20557,11326906,20966,11722186,21379,11393999,21796,11195596,22217,11853281,22642,12116454,23071,11325908,23504,12377573,23941,13871729,24382,13016935,24827,13412207,25276,12358238,25729,12425056,26186,13807228,26647,13279597,27112,12358495,11325,12622953,11630,13805942,11939,13279337,12252,14004085,12569,13872242,12890,13871986,13215,12111543,13544,10730914,13877,13739101,14214,10995624,14555,10864296,14900,10800311,15249,11709288,15602,11589838,15959,10667706,16320,13214829,16685,13346157,17054,13098727,17427,13626606,17804,14151667,18185,13165806,18570,13229811,18959,12115942,19352,11787987,19749,10866358,20150,10143390,20555,12442559,20964,11129786,21377,11918540,21794,10932670,22215,8496021,22640,12116191,23069,12379103,23502,12181211,23939,10731965,24380,12885350,24825,13345388,25274,13214313,25727,12359009,26184,13017196,26645,13740916,27110,11636312,27579,12424287,11628,12622953,11937,13873275,12250,13345645,12567,14004085,12888,13806193,13213,13937522,13542,12702921,13875,13410645,14212,12884029,14553,10864040,14898,10798245,15247,14003570,15600,11656148,15957,13017196,16318,9416359,16683,6913914,17052,13872497,17425,14084589,17802,14874101,18183,13560559,18568,12965079,18957,12770033,19350,11656923,19747,11328462,20148,11721931,20553,11394772,20962,12511196,21375,11524294,21792,11326922,22213,10932166,22638,10603193,23067,12510955,23500,12509399,23937,11590872,24378,11768161,24823,13345645,25272,13213802,25725,12885612,26182,12359010,26643,11636060,27108,12095836,27577,12161374,28050,12490592,11935,12622953,12248,13674609,12565,13543793,12886,14004083,13211,14003569,13540,13871730,13873,12099928,14210,11909256,14551,11717542,14896,10996399,15245,10732711,15598,10866107,15955,11064778,16316,13740400,16681,12837604,17050,9745074,17423,14004085,17800,13954546,18181,12703721,18566,12901355,18955,13756909,19348,12312025,19745,11788769,20146,11655378,20551,11656917,20960,11787983,21373,12760701,21790,11327945,22211,10207163,22636,11788503,23065,11327437,23498,10471093,23935,10933184,24376,13609073,24821,13345901,25270,13806706,25723,14005121,26180,12950891,26641,13149295,27106,11372888,27575,12161374,28048,12095580,28525,12358495,12246,12622953,12563,12622182,12884,13740402,13209,13937522,13538,13871985,13871,13937522,14208,12899285,14549,14003829,14894,14003570,15243,10732451,15596,11128506,15953,11196877,16314,11920102,16679,13937522,17048,10075829,17421,13805936,17798,10799309,18179,12835306,18564,13740401,18953,13822196,19346,10662339,19743,12375266,20144,13296342,20549,11718843,20958,12755534,21371,10139582,21788,13410386,22209,11065031,22634,12115663,23063,10603963,23496,10932670,23933,13740401,24374,13543792,24819,13609328,25268,14465155,25721,11964510,26178,12754026,26639,12885351,27104,13477999,27573,12687460,28046,12753769,28523,12490337,29004,12423776,12561,12622953,12882,13214318,13207,13740659,13536,13938033,13869,13938034,14206,13937522,14547,14003827,14892,14003827,15241,11191967,15594,11259055,15951,10931382,16312,10932935,16677,11591392,17046,13477743,17419,7901580,17796,12050662,18177,13821684,18562,13164275,18951,11385294,19344,14268288,19741,13871730,20142,12311006,20547,11981522,20956,11787488,21369,11458519,21786,12046816,22207,11525076,22632,10864292,23061,11524811,23494,12314077,23931,10276268,24372,13609071,24817,13543280,25266,12951144,25719,12687459,26176,12621667,26637,12885354,27102,13412206,27571,14136447,28044,13214316,28521,13345130,29002,13213801,29487,12489568,12880,12622953,13205,13346157,13534,13806968,13867,13937522,14204,14003826,14545,13871730,14890,13937778,15239,11453864,15592,11784110,15949,10929832,16310,10537141,16675,10997959,17044,11393753,17417,11848883,17794,15594740,18175,12247784,18560,13032684,18949,13032946,19342,13425903,19739,13491437,20140,13362673,20545,14003826,20954,11520215,21367,12445925,21784,11326169,22205,11721952,22630,13477486,23059,13346412,23492,13805936,23929,13346158,24370,13740143,24815,13280619,25264,13345644,25717,12950630,26174,11898715,26635,12029789,27100,12885350,27569,13740401,28042,14333568,28519,12951143,29e3,14399362,29485,12884837,29974,12357983,13203,12622953,13532,13675124,13865,13806451,14202,13937522,14543,13871986,14888,13938034,15237,14004086,15590,12440266,15947,10797467,16308,10995622,16673,11063229,17042,11129546,17415,11590619,17792,11064778,18173,11525855,18558,10536389,18947,12705489,19340,13428464,19737,13427953,20138,12964833,20543,11518419,20952,12703456,21365,13740657,21782,11587039,22203,11721952,22628,12951658,23057,13345131,23490,13213289,23927,13016678,24368,13345645,24813,14069623,25262,10670781,25715,12114910,26172,13805936,26633,14069881,27098,12951659,27567,13806453,28040,13345900,28517,13477487,28998,11307867,29483,13740144,29972,12951141,30465,12292445,13530,12622953,13863,12754021,14200,14070908,14541,14004342,14886,14003826,15235,14003827,15588,13937522,15945,11454631,16306,11257247,16671,10929313,17040,11719877,17413,11525082,17790,11970657,18171,11656672,18556,10999494,18945,9807790,19338,8559778,19735,14216435,20136,12572911,20541,13493228,20950,13822962,21363,14347510,21780,14135416,22201,12377577,22626,12246759,23055,13214057,23488,12621923,23925,12753251,24366,13279852,24811,13280108,25260,11720653,25713,8759966,26170,5928031,26631,13805936,27096,12359523,27565,12359781,28038,12820071,28515,12951401,28996,13740401,29481,12950887,29970,13016936,30463,12622178,30960,12489567,13861,12622953,14198,12819815,14539,14267261,14884,13805937,15233,14003826,15586,13937522,15943,13871730,16304,11585967,16669,11323043,17038,11060906,17411,10668728,17788,11459546,18169,11915998,18554,13871729,18943,13937522,19336,11452880,19733,15397104,20134,13938034,20539,14676981,20948,14808566,21361,13032941,21778,14018290,22199,14465160,22624,12309992,23053,13345642,23486,13411181,23923,12490594,24364,13345902,24809,13806457,25258,8235136,25711,13937266,26168,12621924,26629,11176025,27094,12424801,27563,12819044,28036,13609335,28513,13806451,28994,13345643,29479,14069879,29968,13213801,30461,12753764,30958,12753511,31459,12489824,14196,12622953,14537,13543796,14882,14465155,15231,13937522,15584,13937522,15941,14344674,16302,13673049,16667,11124894,17036,11980718,17409,10797474,17786,11523783,18167,11195862,18552,12114402,18941,12901353,19334,13938033,19731,10931378,20132,12766941,20537,12442339,20946,13938034,21359,13625585,21776,13164015,22197,14004085,22622,14004083,23051,12490852,23484,12490852,23921,12292959,24362,12819044,24807,14400140,25256,12096351,25709,12884837,26166,12818787,26627,12621667,27092,12819044,27561,12490080,28034,12227423,28511,11175769,28992,12359779,29477,12885606,29966,13543279,30459,13213544,30956,12753252,31457,12358238,31962,12490593,14535,12622953,14880,13214059,15229,14333567,15582,13740657,15939,13871729,16300,13225934,16665,13871473,17034,11388583,17407,10861975,17784,10797477,18165,11129538,18550,11656928,18939,11259863,19332,13625074,19729,13097447,20130,11584724,20535,14806518,20944,12043994,21357,13938291,21774,13229809,22195,15661563,22620,14003832,23049,12885350,23482,13346419,23919,12951148,24360,13214063,24805,13543024,25254,11637088,25707,12950887,26164,13279850,26625,12819045,27090,13609336,27559,12819044,28032,12556387,28509,12687714,28990,12228707,29475,13609073,29964,12884837,30457,13213544,30954,13016679,31455,13478004,31960,12687972,32469,12490337,14878,12622953,15227,12951401,15580,14135673,15937,13937778,16298,14003826,16663,14003827,17032,13622489,17405,11124895,17782,11190939,18163,10928031,18548,9745306,18937,11854049,19330,11914973,19727,14741749,20128,13098221,20533,12110815,20942,12701665,21355,12635103,21772,13425382,22193,11253963,22618,12491109,23047,13873277,23480,13411696,23917,13543279,24358,13674870,24803,12884836,25252,13148008,25705,13674864,26162,13082727,26623,13148009,27088,13740661,27557,12556387,28030,12359264,28507,12424544,28988,14135679,29473,13279853,29962,12095839,30455,12753508,30952,12884838,31453,12950887,31958,12950886,32467,12884580,32980,12425314,15225,12622953,15578,12820072,15935,14267515,16296,14004342,16661,16776440,17030,14003826,17403,13293783,17780,12965073,18161,11651751,18546,11258022,18935,11064002,19328,11193299,19725,12048610,20126,13623787,20531,12309223,20940,13428977,21353,12241883,21770,14740725,22191,12965088,22616,13411437,23045,13279336,23478,12951399,23915,13213544,24356,13148521,24801,13740145,25250,13280882,25703,13082730,26160,13082472,26621,14268031,27086,11439710,27555,13345643,28028,13016680,28505,12753508,28986,10780754,29471,10387026,29960,12424801,30453,12358239,30950,12424543,31451,12885093,31956,13148008,32465,12951403,32978,13016939,33495,12621922,15576,12622953,15933,13017192,16294,14135672,16659,13740657,17028,13157315,17401,13937522,17778,13425364,18159,12177341,18544,11256991,18933,11653042,19326,11195594,19723,11325658,20124,12442085,20529,13164783,20938,13163753,21351,12112867,21768,11976904,22189,13490661,22614,14147818,23043,14136186,23476,13411436,23913,13279593,24354,13016422,24799,12885608,25248,13214056,25701,12885094,26158,12359009,26619,12491107,27084,12753509,27553,11176282,28026,13675129,28503,13280621,28984,13279850,29469,13279851,29958,12753252,30451,13016423,30948,12490337,31449,12621923,31954,12753765,32463,13938035,32976,13345389,33493,12490850,34014,12621921,15931,12622953,16292,13543793,16657,14135672,17026,13937522,17399,13937777,17776,13871730,18157,13161942,18542,12045236,18931,11717802,19324,11389869,19721,11394516,20122,11786975,20527,11325145,20936,12242143,21349,10862796,21766,14611191,22187,14344420,22612,14016231,23041,12773099,23474,13674608,23911,13345645,24352,13345386,24797,13082472,25246,12687459,25699,13609336,26156,13411694,26617,11176538,27082,11438682,27551,14004347,28024,12950889,28501,13806966,28982,14070656,29467,14004606,29956,13148530,30449,13280108,30946,12951401,31447,13148009,31952,12951143,32461,13148264,32974,13411951,33491,12951142,34012,13807226,34537,12818788,16290,12622953,16655,12885606,17024,14135673,17397,14003826,17774,14003826,18155,13687515,18540,13621977,18929,12373949,19322,11652272,19719,11648399,20120,11525336,20525,11655390,20934,11719389,21347,12179940,21764,12379881,22185,14675955,22610,12899546,23039,12966373,23472,12705259,23909,13871473,24350,13806709,24795,13279851,25244,13016422,25697,12819044,26154,13807485,26615,12293729,27080,12819302,27549,13477743,28022,13214057,28499,13016936,28980,12293729,29465,12951400,29954,13346414,30447,12097120,30944,12885350,31445,12753508,31950,13148008,32459,13148008,32972,13608814,33489,13871729,34010,13148009,34535,13148778,35064,12885093,16653,12622953,17022,12951142,17395,14135415,17772,13937522,18153,14003826,18538,14015710,18927,13490650,19320,12505539,19717,11914933,20118,11325111,20523,11591129,20932,11787489,21345,11390681,21762,11914206,22183,13756649,22608,16710903,23037,12969451,23470,12428638,23907,12443365,24348,11589850,24793,13871986,25242,13871729,25695,13938549,26152,13280107,26613,13807482,27078,13280109,27547,12885093,28020,13806193,28497,13345900,28978,12030045,29463,11636316,29952,13016936,30445,13411436,30942,13214572,31443,12425058,31948,12425314,32457,13543284,32970,13346417,33487,13674864,34008,14004340,34533,14135416,35062,13806200,35595,12819044,17020,12688490,17393,13279849,17770,14135675,18151,13872242,18536,13937778,18925,13871730,19318,13358806,19715,12702665,20116,12112059,20521,11389872,20930,11262416,21343,11590108,21760,11587547,22181,11719387,22606,15660019,23035,8815230,23468,10073241,23905,12443367,24346,11721177,24791,11062981,25240,11590098,25693,10472371,26150,13543792,26611,13805680,27076,13805937,27545,13082474,28018,12293472,28495,12425313,28976,12491108,29461,12819303,29950,12359520,30443,12819044,30940,13873537,31441,13411693,31946,13609072,32455,12688229,32968,12687972,33485,13148008,34006,12491109,34531,13740400,35060,13805937,35593,13740400,36130,13740145,17391,12885611,17768,13345644,18149,14135672,18534,13806193,18923,13871986,19316,13352083,19713,14003826,20114,12964558,20519,11585964,20928,11587255,21341,11262419,21758,11918048,22179,11587032,22604,12246501,23033,13622503,23466,16776955,23903,10263190,24344,11327177,24789,11721172,25238,13165527,25691,11130824,26148,10800830,26609,7903104,27074,10076326,27543,13938295,28016,12359265,28493,12621923,28974,12753510,29459,12161629,29948,12292446,30441,12885093,30938,12621666,31439,12884837,31944,13346158,32453,13543536,32966,13477485,33483,14333568,34004,13674865,34529,13214057,35058,13345644,35591,14135673,36128,13346157,36669,13609328,17766,12885611,18147,13016679,18532,13938551,18921,13937522,19314,13871730,19711,14003571,20112,13227989,20517,12768202,20926,12243646,21339,10994591,21756,11458762,22177,11854050,22602,11524061,23031,12573161,23464,13296110,23901,14672867,24342,11381157,24787,6650472,25236,11261388,25689,10735294,26146,10603702,26607,13740401,27072,12885867,27541,11129016,28014,12950630,28491,12753507,28972,12687460,29457,12227166,29946,12490337,30439,12885355,30936,12292703,31437,12884840,31942,13082216,32451,13346415,32964,13082472,33481,12885864,34002,13345900,34527,14005121,35056,13411693,35589,13279849,36126,13806451,36667,12951400,37212,13674608,18145,12885611,18530,13345646,18919,13938550,19312,13740400,19709,14003826,20110,13555673,20515,13095890,20924,12373695,21337,12309696,21754,11784379,22175,11523526,22600,9679258,23029,14281711,23462,13953261,23899,13295596,24340,15397109,24785,13683921,25234,8487808,25687,10998464,26144,10603705,26605,10929070,27070,13280620,27539,13411437,28012,12819557,28489,13148009,28970,13345388,29455,12753766,29944,12491107,30437,12359264,30934,13346417,31435,12095325,31940,11636314,32449,13345645,32962,12885350,33479,13346157,34e3,13806968,34525,13411693,35054,13280363,35587,12819815,36124,12951144,36665,13082473,37210,12884837,37759,14267262,18528,12885867,18917,13477231,19310,13938295,19707,14003826,20108,13938034,20513,13950175,20922,13491161,21335,12308158,21752,11586220,22173,11322529,22598,11984591,23027,10866377,23460,12442852,23897,11781047,24338,12571876,24783,13157313,25232,14737372,25685,13553353,26142,10866616,26603,11590091,27068,13740657,27537,13609071,28010,13345901,28487,13344873,28968,13148008,29453,12951401,29942,12687714,30435,12490851,30932,12359265,31433,12162145,31938,12885870,32447,12950887,32960,12884836,33477,13608818,33998,13213800,34523,13346415,35052,13345645,35585,13608815,36122,13279851,36663,12885350,37208,12622180,37757,12753251,38310,13345643,18915,12951660,19308,12819302,19705,13938294,20106,13937522,20511,13937777,20920,13621980,21333,12635340,21750,10993563,22171,11520678,22596,11453858,23025,12310210,23458,9479307,23895,12113891,24336,12171187,24781,13821940,25230,14736857,25683,9998474,26140,12698559,26601,10602666,27066,10735026,27535,14004344,28008,13674608,28485,13477230,28966,13345386,29451,13016936,29940,12819558,30433,13147496,30930,13807743,31431,13872762,31936,14004344,32445,14136186,32958,12622181,33475,11438681,33996,12359779,34521,12491110,35050,13148008,35583,13543536,36120,14135935,36661,13280109,37206,13345387,37755,13016423,38308,13148266,38865,12884837,19306,12951660,19703,12884838,20104,13806194,20509,13937522,20918,14003826,21331,13489879,21748,14541538,22169,12373185,22594,11256993,23023,11389867,23456,10469294,23893,12439738,24334,14148581,24779,11648975,25228,13360106,25681,14080215,26138,15132129,26599,15001059,27064,9022093,27533,13871729,28006,13806192,28483,13740145,28964,12885607,29449,13016935,29938,12885096,30431,13016680,30928,12687715,31429,12490851,31934,12227166,32443,11898459,32956,12622185,33473,13214575,33994,12556130,34519,12951404,35048,13148524,35581,12622180,36118,13148265,36659,13543279,37204,13412207,37753,13345386,38306,12885350,38863,13148008,39424,12950630,19701,12951660,20102,13082472,20507,13345645,20916,13871986,21329,14278367,21746,13556185,22167,15067627,22592,12636861,23021,12243389,23454,11389352,23891,10138778,24332,11781552,24777,11847385,25226,12110038,25679,14083311,26136,12898265,26597,14673634,27062,14804960,27531,12966597,28004,10603177,28481,10990709,28962,13937522,29447,13938034,29936,13411949,30429,13543536,30926,13016679,31427,12687715,31932,12490594,32441,12424800,32954,12095067,33471,12885869,33992,12358751,34517,12490849,35046,13016936,35579,13806193,36116,13016939,36657,13346159,37202,13280110,37751,13543535,38304,13148266,38861,13279850,39422,13345646,39987,12950374,20100,12819818,20505,13016936,20914,13674609,21327,15000032,21744,14540768,22165,14276567,22590,13490134,23019,12766671,23452,13294536,23889,11257771,24330,12112575,24775,8953996,25224,10532022,25677,11648976,26134,12635612,26595,13094358,27060,11253938,27529,12632509,28002,7309937,28479,9747618,28960,13033417,29445,13937522,29934,14135931,30427,13937522,30924,11062194,31425,14267515,31930,12359008,32439,12885354,32952,11963996,33469,12424800,33990,11963738,34515,12029532,35044,12556131,35577,12951401,36114,12885865,36655,12885351,37200,13148008,37749,13214057,38302,12886121,38859,13213802,39420,13213800,39985,12753765,40554,12950887,20503,12819818,20912,13016424,21325,13543024,21742,13279323,22163,14343131,22588,13484444,23017,11450294,23450,12965072,23887,11323044,24328,10862233,24773,11060388,25222,12308176,25675,10860985,26132,12372956,26593,13097190,27058,11581621,27527,12239036,28e3,13622227,28477,8953992,28958,11653824,29443,12573641,29932,10537132,30425,9351820,30922,10865578,31423,13937266,31928,9615260,32437,12951658,32950,12687460,33467,12688492,33988,11503702,34513,12556388,35042,12491114,35575,12424547,36112,12818789,36653,14069881,37198,12556130,37747,13148008,38300,12885350,38857,13280362,39418,13411950,39983,13082215,40552,12885606,41125,13279337,20910,12885611,21323,13148010,21740,13345901,22161,14277083,22586,14342618,23015,13096141,23448,13293012,23885,11912892,24326,11849133,24771,11520684,25220,11652525,25673,11523022,26130,10863814,26591,14543603,27056,11848158,27525,13097931,27998,14018273,28475,8230781,28956,11783347,29441,11193010,29930,10667950,30423,10669233,30920,13806193,31421,14003826,31926,9155211,32435,13080899,32948,9286542,33465,12951916,33986,12358752,34511,12425056,35040,12029790,35573,12094810,36110,12752997,36651,13214577,37196,12753507,37745,11898202,38298,12884581,38855,13345389,39416,13213800,39981,13609073,40550,13016936,41123,13279337,41700,13213545,21321,12885611,21738,13016423,22159,13345387,22584,13937522,23013,13025986,23446,13227730,23883,12373440,24324,11518127,24769,11915184,25218,11519651,25671,13031361,26128,10075320,26589,11850714,27054,12439006,27523,12570334,27996,14084075,28473,8626322,28954,11062708,29439,11259574,29928,12179908,30421,11062197,30918,11447403,31419,10274205,31924,13937522,32433,13871986,32946,13937522,33463,9813909,33984,14267518,34509,12687717,35038,13018746,35571,11832665,36108,12357725,36649,12556385,37194,12621923,37743,13148266,38296,12226910,38853,12621664,39414,12490850,39979,13345641,40548,13214057,41121,13609328,41698,12950887,42279,13279854,21736,12885611,22157,13016935,22582,13345641,23011,13937266,23444,13881037,23881,13950429,24322,13424599,24767,11978430,25216,11776893,25669,10533525,26126,10929059,26587,10073754,27052,11917018,27521,12900071,27994,12439781,28471,12114140,28952,11774308,29437,8824213,29926,11719871,30419,10733740,30916,14003825,31417,6849388,31922,9418646,32431,13674609,32944,13871730,33461,13937522,33982,14003826,34507,14004083,35036,11439451,35569,13939331,36106,12094811,36647,12490851,37192,14004344,37741,12358752,38294,12359263,38851,12490850,39412,12227678,39977,12885350,40546,12885606,41119,13345644,41696,13345386,42277,13214572,42862,13148525,22155,12951660,22580,13016423,23009,13345644,23442,14135673,23879,11776947,24320,13687513,24765,14542310,25214,11979704,25667,12440255,26124,10927769,26585,11323046,27050,12111542,27519,12441571,27992,12110559,28469,12442340,28950,11326405,29435,10141353,29924,8758415,30417,6584935,30914,9484440,31415,13872241,31920,13938290,32429,13543280,32942,12622695,33459,14003826,33980,9617041,34505,9813907,35034,13938034,35567,12294501,36104,12095325,36645,12292703,37190,13279850,37739,13478004,38292,12357983,38849,12490593,39410,13805680,39975,12425057,40544,12885094,41117,12556644,41694,13279850,42275,13280365,42860,12951143,43449,12951142,22578,12951660,23007,13016423,23440,13345900,23877,13938294,24318,13751509,24763,13878436,25212,13162190,25665,12439487,26122,11454374,26583,11246428,27048,10204571,27517,10602434,27990,11587546,28467,12507879,28948,10401981,29433,11917514,29922,10733489,30415,11194806,30912,13098702,31413,10727030,31918,13346671,32427,13082729,32940,12950630,33457,12294245,33978,13740400,34503,9220758,35032,9682578,35565,13938034,36102,13279852,36643,11503960,37188,13609072,37737,13740656,38290,11917283,38847,13938033,39408,12687715,39973,13740401,40542,12687458,41115,12950630,41692,13346673,42273,13740405,42858,13082728,43447,12753251,44040,12950117,23005,12951660,23438,12951143,23875,13346158,24316,13740657,24761,13938034,25210,13687514,25663,13622485,26120,12628856,26581,11190944,27046,12637385,27515,11915192,27988,11653828,28465,12114146,28946,12378086,29431,10931642,29920,10799797,30413,10998458,30910,10932152,31411,13689557,31916,13806193,32425,13280108,32938,12885094,33455,13544050,33976,14333568,34501,10010786,35030,9878425,35563,12688974,36100,13871730,36641,13214058,37186,11963737,37735,13411950,38288,13805936,38845,11256284,39406,11652322,39971,11854559,40540,11454148,41113,12555874,41690,12951402,42271,13149037,42856,12754278,43445,13213544,44038,12753252,44635,12884837,23436,12951660,23873,13147752,24314,12819557,24759,13740401,25208,14003570,25661,13688287,26118,12373700,26579,12374205,27044,11585451,27513,12899788,27986,11718070,28463,12573900,28944,11720656,29429,12181212,29918,10207921,30411,10799541,30908,12296789,31409,13607770,31914,8955533,32423,13543535,32936,13016936,33453,12359777,33974,14135673,34499,14069622,35028,13805936,35561,11308124,36098,10339480,36639,14069878,37184,11457976,37733,12424800,38286,14201980,38843,12048866,39404,10993878,39969,11058391,40538,11522772,41111,13938290,41688,10846547,42269,12885094,42854,13345645,43443,13016678,44036,13543024,44633,13213288,45234,12950885,23871,12951148,24312,13082216,24757,13214056,25206,13608816,25659,13871730,26116,13884638,26577,12570563,27042,12111029,27511,11651500,27984,12637382,28461,13230292,28942,12244159,29427,9942945,29916,11590105,30409,14003827,30906,13937522,31407,13937522,31912,11719617,32421,13806193,32934,13214320,33451,11838551,33972,14267518,34497,13346414,35026,13740666,35559,12621921,36096,9944217,36637,12901572,37182,13740401,37731,13674607,38284,14333825,38841,14004341,39402,11720674,39967,11192028,40536,11258076,41109,11719892,41686,13871473,42267,11109718,42852,12950886,43441,13213545,44034,13741434,44631,13082473,45232,12884837,45837,12884836,24310,12885611,24755,13213801,25204,13213801,25657,13543280,26114,13872242,26575,14409952,27040,12900041,27509,12558674,27982,11585451,28459,12703423,28940,10204568,29425,10270876,29914,11457483,30407,11524818,30904,11785407,31405,13937522,31910,13937266,32419,14003570,32932,12293731,33449,12029532,33970,12029531,34495,12030559,35024,13937521,35557,10274212,36094,11372888,36635,12047800,37180,13148782,37729,14465669,38282,11457977,38839,13937778,39400,11984598,39965,12178664,40534,11258075,41107,11390172,41684,11523291,42265,13344875,42850,12029277,43439,12556128,44032,13411183,44629,13872762,45230,13279853,45835,12687459,46444,12884837,24753,12688746,25202,13082217,25655,13017192,26112,13740401,26573,13872242,27038,14213858,27507,13162711,27980,14476770,28457,11388579,28938,10992040,29423,11192240,29912,10863012,30405,11192750,30902,11389872,31403,12309438,31908,11391678,32417,13937522,32930,13477743,33447,12754024,33968,11635287,34493,12622181,35022,12095325,35555,12424803,36092,9991241,36633,13148780,37178,14003821,37727,12425058,38280,13741436,38837,14399621,39398,13937522,39963,11391701,40532,12115425,41105,11456222,41682,11388123,42263,11457757,42848,12819814,43437,12358496,44030,12818788,44627,12885349,45228,12622436,45833,13345645,46442,12556643,47055,12884325,25200,12688746,25653,13148265,26110,13213801,26571,13609072,27036,14003570,27505,13937522,27978,14279394,28455,14476259,28936,11782571,29421,9939356,29910,11126706,30403,11719099,30900,11324080,31401,10863009,31906,13805937,32415,13214317,32928,12884807,33445,14268289,33966,13345903,34491,11570264,35020,11767128,35553,11043668,36090,12095067,36631,12095580,37176,13017452,37725,14268292,38278,14003828,38835,14333829,39396,14003827,39961,13673571,40530,11326677,41103,11654625,41680,12310247,42261,11388125,42846,11458271,43435,13805681,44028,12292446,44625,12555874,45226,12885351,45831,13279595,46440,13279594,47053,12753508,47670,12818786,25651,12622953,26108,12951143,26569,13279850,27034,13674352,27503,14003826,27976,13937522,28453,12628605,28934,12767693,29419,12111799,29908,10993059,30401,12770511,30898,11454116,31399,11522495,31904,10995365,32413,13543279,32926,14003570,33443,8298120,33964,12753252,34489,12227681,35018,12292446,35551,12029790,36088,13149815,36629,12029531,37174,12359264,37723,12885607,38276,12951143,38833,14003825,39394,11111003,39959,13937777,40528,11392199,41101,11590361,41678,11982565,42259,11061459,42844,10796505,43433,11389403,44026,13740401,44623,12490337,45224,12161631,45829,12687459,46438,13345901,47051,12951142,47668,13346672,48289,12819300,26106,12622953,26567,13213544,27032,13279337,27501,14004086,27974,14410209,28451,14003826,28932,14476773,29417,13557202,29906,10467476,30399,10993573,30896,12309946,31397,13228482,31902,12308660,32411,12754280,32924,14135675,33441,14333825,33962,12820074,34487,12884836,35016,13345644,35549,12423775,36086,13806969,36627,12885612,37172,12424544,37721,12293729,38274,11570522,38831,12819044,39392,14201211,39957,13938034,40526,14003570,41099,11064255,41676,11721948,42257,11588064,42842,11522781,43431,11190238,44024,11585762,44621,12048331,45222,12160859,45827,12885608,46436,13213545,47049,13345642,47666,12951400,48287,13279336,48912,12818788,26565,12622953,27030,13148778,27499,13938554,27972,14070138,28449,14343902,28930,13871730,29415,13622238,29904,13885663,30397,13359827,30894,14149085,31395,14003826,31900,12966335,32409,9744273,32922,13214314,33439,14201465,33960,12440512,34485,13740402,35014,13279595,35547,12687718,36084,13543539,36625,12556129,37170,13215865,37719,13412473,38272,13148779,38829,13345389,39390,13082472,39955,9089422,40524,10339744,41097,14003570,41674,13871730,42255,13937523,42840,11984871,43429,11653345,44022,12707822,44619,11981279,45220,11326412,45825,13016680,46434,13214575,47047,11636316,47664,13279851,48285,12885865,48910,13345387,49539,13345646,27028,12622953,27497,13280622,27970,13806193,28447,14267004,28928,14210003,29413,14015709,29902,14673895,30395,15658991,30892,11910328,31393,13938033,31898,14003570,32407,13806193,32920,13411950,33437,14201467,33958,11390899,34483,13346415,35012,12754022,35545,13148263,36082,12820071,36623,13214056,37168,12753250,37717,12885094,38270,11767903,38827,13214574,39388,13873275,39953,13740403,40522,13740144,41095,9945496,41672,14003570,42253,13937777,42838,11325627,43427,12181992,44020,12180201,44617,11388890,45218,11784675,45823,11786973,46432,11325118,47045,12095839,47662,13148781,48283,12425059,48908,13280620,49537,13214058,50170,12621922,27495,12622953,27968,13937522,28445,13871729,28926,14003827,29411,13883608,29900,13753050,30393,13621723,30890,14738403,31391,9609875,31896,13871986,32405,13740401,32918,13806193,33435,13148781,33956,10139799,34481,11964766,35010,12359525,35543,12490596,36080,12029274,36621,14003827,37166,14137224,37715,13016679,38268,13214314,38825,9795668,39386,13016937,39951,13148007,40520,13280108,41093,13280623,41670,6716784,42251,13937522,42836,11505502,43425,12182236,44018,12379110,44615,11721440,45216,11917025,45821,12049380,46430,11919069,47043,10536362,47660,13937523,48281,13017194,48906,13346416,49535,13740402,50168,13214313,50805,13279336,27966,12622953,28443,14135673,28924,13740145,29409,14003827,29898,13938034,30391,14003315,30888,13424600,31389,13294031,31894,13688793,32403,14004084,32916,13806193,33433,13740401,33954,13279852,34479,12884055,35008,12819818,35541,12029531,36078,12029532,36619,11832666,37164,12951407,37713,11635543,38266,13674610,38823,12885097,39384,12490857,39949,14004086,40518,12885094,41091,12951401,41668,13412207,42249,13822426,42834,13871730,43423,14069883,44016,13872242,44613,11194298,45214,11589069,45819,11589338,46428,11524310,47041,11921383,47658,10337954,48279,10732451,48904,13280108,49533,12491108,50166,13609073,50803,13805936,51444,13740402,28441,12622953,28922,14004342,29407,13740400,29896,13938034,30389,14003826,30886,14003826,31387,12242362,31892,13227991,32401,12110269,32914,13937522,33431,13674865,33952,14069879,34477,13279595,35006,8676673,35539,12292446,36076,11832922,36617,12029533,37162,11767129,37711,12491113,38264,12029531,38821,12622695,39382,12951402,39947,12491627,40516,13214058,41089,12491109,41666,12095839,42247,12689e3,42832,10536619,43421,10537897,44014,12622178,44611,14004342,45212,13937778,45817,10930869,46426,11589331,47039,11852493,47656,10339504,48277,13938034,48902,12819045,49531,12819301,50164,13872755,50801,13082731,51442,13148008,52087,13674610,28920,12622953,29405,14003827,29894,13543280,30387,13871730,30884,14003827,31385,13938034,31890,13082186,32399,13163212,32912,14739944,33429,13806193,33950,13937522,34475,13740401,35004,14465156,35537,12556386,36074,12292445,36615,11963994,37160,12095581,37709,11963738,38262,12292959,38819,12095324,39380,12358752,39945,11570264,40514,12095068,41087,11899485,41664,12951142,42245,13279852,42830,13412207,43419,12097390,44012,14531982,44609,12753251,45210,13280622,45815,13740400,46424,13871730,47037,10140323,47654,8626562,48275,12556386,48900,12885607,49529,11241815,50162,12753251,50799,12687458,51440,13213800,52085,12688487,52734,13346156,29403,12622953,29892,14069877,30385,13740400,30882,14003826,31383,13937266,31888,13938034,32397,13160905,32910,13819616,33427,14739429,33948,13872242,34473,13871730,35002,14003827,35535,9925705,36072,12227423,36613,12095324,37158,12160603,37707,12424801,38260,12359009,38817,11372374,39378,12425058,39943,11964251,40512,9992785,41085,11635544,41662,12293986,42243,13345387,42828,13938291,43417,13740144,44010,6915691,44607,13214315,45208,13740144,45813,13543279,46422,13477229,47035,12753765,47652,13016680,48273,11964253,48898,12884840,49527,12885607,50160,12950629,50797,12424800,51438,12490336,52083,13147495,52732,13148263,53385,13675378,29890,12622953,30383,13017196,30880,13674608,31381,14004083,31886,13871730,32395,13937522,32908,13227472,33425,13162191,33946,13806193,34471,12506056,35e3,12635852,35533,13346157,36070,12752741,36611,12095324,37156,12358751,37705,13477745,38258,13279851,38815,12357983,39376,11898202,39941,12490594,40510,12161117,41083,12029530,41660,11437910,42241,12556387,42826,13741171,43415,13872497,44008,13609072,44605,13280107,45206,13148009,45811,13674607,46420,12425573,47033,14266746,47650,13674865,48271,14069879,48896,11767389,49525,13213545,50158,12490593,50795,12621668,51436,12226910,52081,12622178,52730,13345132,53383,11767386,54040,13411950,30381,12557160,30878,13213799,31379,13740400,31884,14135673,32393,13872242,32906,13937522,33423,13096400,33944,12695940,34469,12832719,34998,15462126,35531,13214572,36068,12425317,36609,12095582,37154,12490854,37703,12226909,38256,12490594,38813,12425057,39374,12029530,39939,12029275,40508,12819562,41081,12161116,41658,12293728,42239,12689007,42824,11111258,43413,13609328,44006,13345899,44603,13477999,45204,13871729,45809,9748117,46418,12491110,47031,13213546,47648,13674608,48269,13674608,48894,14069621,49523,13938291,50156,13412207,50793,12950631,51434,12621666,52079,12490080,52728,12884837,53381,14465929,54038,11899230,54699,13542769,30876,12622953,31377,13213544,31882,13739888,32391,14135673,32904,13938034,33421,13937522,33942,13161936,34467,14739432,34996,13543536,35529,13543535,36066,11832924,36607,12029274,37152,12029530,37701,11635288,38254,12095837,38811,12621921,39372,11635544,39937,11963996,40506,11701852,41079,12161373,41656,12425057,42237,12029788,42822,12490594,43411,12490596,44004,12951143,44601,12885607,45202,12687717,45807,13279850,46416,13148264,47029,12359522,47646,13214571,48267,13148264,48892,13477999,49521,13674865,50154,13740400,50791,13740400,51432,13675123,52077,12753251,52726,12951657,53379,13411695,54036,12622180,54697,12095325,55362,13148266,31375,12622953,31880,13345386,32389,13740143,32902,14135416,33419,14003570,33940,13937522,34465,14082273,34994,12832975,35527,11518130,36064,12819557,36605,11438168,37150,12819304,37699,11963993,38252,12556648,38809,12490596,39370,12556647,39935,11766873,40504,12226655,41077,11503960,41654,12029529,42235,11963739,42820,11307095,43409,13345644,44002,12227167,44599,12687459,45200,13148009,45805,12884581,46414,12951401,47027,14070140,47644,11240789,48265,12556130,48890,14201980,49519,13411694,50152,13412206,50789,14003828,51430,13806194,52075,13280621,52724,12885607,53377,12950887,54034,14333826,54695,13938547,55360,12227937,56029,12752994,31878,12623209,32387,13213545,32900,13609071,33417,13871986,33938,14003826,34463,13937778,34992,13819358,35525,14214112,36062,9937313,36603,13543536,37148,13674867,37697,11571039,38250,13346157,38807,12359010,39368,11898459,39933,12425058,40502,11897945,41075,12425316,41652,12095582,42233,14004349,42818,12292959,43407,11898716,44e3,12161887,44597,12884836,45198,12556901,45803,13214314,46412,13214057,47025,13345644,47642,12950630,48263,13214057,48888,13346157,49517,13939071,50150,13083245,50787,13345900,51428,11044953,52073,14465414,52722,13806193,53375,13806193,54032,8426896,54693,14003826,55358,13938291,56027,13477489,56700,12621667,32385,12689002,32898,13345386,33415,13609071,33936,13805937,34461,13871986,34990,13937522,35523,13490649,36060,12964816,36601,13425869,37146,13674609,37695,13345386,38248,12490594,38805,10977618,39366,12029787,39931,12095326,40500,12359522,41073,10584405,41650,12490853,42231,11767130,42816,12226910,43405,13608816,43998,12161116,44595,12490593,45196,12556128,45801,12950887,46410,12950887,47023,12885350,47640,12425056,48261,13016938,48886,12293730,49515,13148779,50148,13543536,50785,12950886,51426,13806194,52071,12820328,52720,14135675,53373,14069621,54030,13674608,54691,12425574,55356,13938547,56025,13872242,56698,12161629,57375,12622181,32896,12885611,33413,13345130,33934,13740657,34459,13872498,34988,13871729,35521,14003826,36058,13029328,36599,12767182,37144,13740401,37693,13214057,38246,13741178,38803,12753253,39364,12358754,39929,12359010,40498,12951401,41071,12885357,41648,12292960,42229,12885612,42814,11963993,43403,12293215,43996,13411696,44593,12292959,45194,12095324,45799,12293215,46408,12358752,47021,12490594,47638,12293470,48259,12095066,48884,12095838,49513,13543022,50146,13674351,50783,13938808,51424,12819044,52069,13873280,52718,13609075,53371,13412207,54028,13938548,54689,13805937,55354,13937266,56023,14069878,56696,12623208,57373,12424288,58054,12753253,33411,12689003,33932,13279593,34457,13805681,34986,14070136,35519,14003826,36056,13938290,36597,13157570,37142,13622237,37691,13280364,38244,13279337,38801,12096610,39362,10912083,39927,12556391,40496,12226910,41069,12095580,41646,12885862,42227,11438424,42812,12424800,43401,12095580,43994,12029789,44591,13016424,45192,12951143,45797,12160603,46406,11373145,47019,12162146,47636,12425314,48257,11635546,48882,14070397,49511,13082988,50144,13806965,50781,14532494,51422,11504988,52067,12884837,52716,13214313,53369,13213802,54026,13674608,54687,11849657,55352,13805937,56021,13938035,56694,14069880,57371,12752741,58052,12621923,58737,12687715],A.aT("aE<d,d>"))
B.X=new A.aE([0,!0,5,!0,14,!0,27,!0,44,!0,65,!0,90,!1,119,!1,152,!0,189,!0,230,!0,275,!0,324,!0,377,!0,434,!0,495,!0,560,!0,629,!0,702,!0,779,!0,860,!0,945,!0,1034,!0,1127,!0,1224,!0,1325,!0,1430,!0,1539,!0,1652,!0,1769,!0,1890,!1,2015,!0,2144,!0,2277,!0,2414,!0,2555,!0,2700,!0,2849,!0,3002,!0,3159,!0,3320,!0,3485,!0,3654,!0,3,!0,12,!0,25,!0,42,!0,63,!0,88,!0,117,!0,150,!0,187,!0,228,!0,273,!0,322,!0,375,!0,432,!0,493,!0,558,!0,627,!0,700,!0,777,!0,858,!0,943,!0,1032,!0,1125,!0,1222,!0,1323,!0,1428,!0,1537,!0,1650,!0,1767,!0,1888,!0,2013,!0,2142,!0,2275,!0,2412,!0,2553,!0,2698,!0,2847,!0,3000,!0,3157,!0,3318,!0,3483,!0,3652,!0,3825,!0,10,!0,23,!0,40,!0,61,!0,86,!0,115,!0,148,!0,185,!1,226,!0,271,!0,320,!0,373,!0,430,!0,491,!0,556,!0,625,!0,698,!0,775,!0,856,!0,941,!0,1030,!0,1123,!0,1220,!0,1321,!0,1426,!0,1535,!0,1648,!0,1765,!0,1886,!0,2011,!0,2140,!0,2273,!0,2410,!0,2551,!0,2696,!0,2845,!0,2998,!0,3155,!0,3316,!0,3481,!0,3650,!0,3823,!0,4000,!0,21,!0,38,!0,59,!0,84,!0,113,!0,146,!0,183,!0,224,!0,269,!0,318,!0,371,!0,428,!0,489,!0,554,!0,623,!0,696,!0,773,!0,854,!0,939,!1,1028,!0,1121,!0,1218,!0,1319,!0,1424,!0,1533,!0,1646,!0,1763,!0,1884,!0,2009,!0,2138,!0,2271,!0,2408,!0,2549,!0,2694,!0,2843,!0,2996,!0,3153,!0,3314,!0,3479,!0,3648,!0,3821,!0,3998,!0,4179,!0,36,!0,57,!0,82,!0,111,!0,144,!0,181,!0,222,!0,267,!0,316,!0,369,!0,426,!0,487,!0,552,!0,621,!0,694,!0,771,!0,852,!0,937,!0,1026,!0,1119,!0,1216,!0,1317,!0,1422,!0,1531,!0,1644,!0,1761,!0,1882,!0,2007,!0,2136,!0,2269,!0,2406,!0,2547,!0,2692,!0,2841,!0,2994,!0,3151,!0,3312,!0,3477,!0,3646,!0,3819,!0,3996,!0,4177,!0,4362,!0,55,!0,80,!0,109,!0,142,!0,179,!0,220,!0,265,!1,314,!1,367,!1,424,!0,485,!0,550,!0,619,!0,692,!0,769,!0,850,!0,935,!0,1024,!0,1117,!0,1214,!0,1315,!0,1420,!0,1529,!0,1642,!0,1759,!0,1880,!0,2005,!0,2134,!0,2267,!0,2404,!0,2545,!0,2690,!0,2839,!0,2992,!0,3149,!0,3310,!0,3475,!0,3644,!0,3817,!0,3994,!0,4175,!0,4360,!0,4549,!0,78,!0,107,!0,140,!0,177,!0,218,!0,263,!0,312,!1,365,!1,422,!1,483,!0,548,!1,617,!0,690,!0,767,!0,848,!0,933,!0,1022,!0,1115,!0,1212,!0,1313,!0,1418,!0,1527,!0,1640,!0,1757,!0,1878,!0,2003,!0,2132,!0,2265,!0,2402,!0,2543,!0,2688,!0,2837,!0,2990,!0,3147,!0,3308,!0,3473,!0,3642,!0,3815,!0,3992,!0,4173,!0,4358,!0,4547,!0,4740,!0,105,!0,138,!0,175,!0,216,!0,261,!0,310,!0,363,!1,420,!1,481,!1,546,!0,615,!0,688,!0,765,!0,846,!0,931,!0,1020,!0,1113,!0,1210,!0,1311,!0,1416,!0,1525,!0,1638,!0,1755,!0,1876,!0,2001,!1,2130,!0,2263,!0,2400,!0,2541,!0,2686,!0,2835,!0,2988,!0,3145,!0,3306,!0,3471,!0,3640,!0,3813,!0,3990,!0,4171,!0,4356,!0,4545,!0,4738,!0,4935,!0,136,!0,173,!0,214,!0,259,!0,308,!0,361,!0,418,!1,479,!1,544,!1,613,!1,686,!0,763,!0,844,!0,929,!0,1018,!0,1111,!0,1208,!0,1309,!0,1414,!0,1523,!0,1636,!0,1753,!0,1874,!0,1999,!0,2128,!0,2261,!0,2398,!0,2539,!0,2684,!0,2833,!0,2986,!0,3143,!0,3304,!0,3469,!0,3638,!0,3811,!0,3988,!0,4169,!0,4354,!0,4543,!0,4736,!0,4933,!0,5134,!0,171,!0,212,!0,257,!0,306,!0,359,!0,416,!0,477,!1,542,!1,611,!1,684,!1,761,!0,842,!0,927,!0,1016,!0,1109,!0,1206,!0,1307,!0,1412,!0,1521,!0,1634,!0,1751,!0,1872,!0,1997,!0,2126,!0,2259,!0,2396,!0,2537,!0,2682,!0,2831,!0,2984,!0,3141,!0,3302,!0,3467,!0,3636,!0,3809,!0,3986,!0,4167,!0,4352,!0,4541,!0,4734,!0,4931,!0,5132,!0,5337,!0,210,!0,255,!0,304,!0,357,!0,414,!0,475,!0,540,!1,609,!1,682,!1,759,!1,840,!0,925,!0,1014,!0,1107,!0,1204,!0,1305,!0,1410,!0,1519,!0,1632,!0,1749,!0,1870,!0,1995,!0,2124,!0,2257,!0,2394,!0,2535,!0,2680,!0,2829,!0,2982,!0,3139,!0,3300,!0,3465,!0,3634,!0,3807,!0,3984,!0,4165,!0,4350,!0,4539,!0,4732,!0,4929,!0,5130,!0,5335,!0,5544,!0,253,!0,302,!0,355,!0,412,!0,473,!0,538,!0,607,!1,680,!1,757,!1,838,!0,923,!0,1012,!0,1105,!0,1202,!0,1303,!0,1408,!0,1517,!0,1630,!0,1747,!0,1868,!0,1993,!0,2122,!0,2255,!0,2392,!0,2533,!0,2678,!0,2827,!0,2980,!0,3137,!0,3298,!0,3463,!0,3632,!0,3805,!0,3982,!0,4163,!0,4348,!0,4537,!0,4730,!0,4927,!0,5128,!0,5333,!0,5542,!0,5755,!0,300,!0,353,!0,410,!0,471,!0,536,!0,605,!0,678,!1,755,!1,836,!1,921,!0,1010,!0,1103,!0,1200,!0,1301,!0,1406,!0,1515,!0,1628,!0,1745,!0,1866,!0,1991,!0,2120,!0,2253,!0,2390,!0,2531,!0,2676,!0,2825,!0,2978,!0,3135,!0,3296,!0,3461,!0,3630,!0,3803,!0,3980,!0,4161,!0,4346,!0,4535,!0,4728,!0,4925,!0,5126,!0,5331,!0,5540,!0,5753,!0,5970,!0,351,!0,408,!0,469,!0,534,!0,603,!0,676,!0,753,!1,834,!1,919,!1,1008,!0,1101,!0,1198,!0,1299,!0,1404,!0,1513,!0,1626,!0,1743,!0,1864,!0,1989,!0,2118,!0,2251,!0,2388,!0,2529,!0,2674,!0,2823,!0,2976,!0,3133,!0,3294,!0,3459,!0,3628,!0,3801,!1,3978,!0,4159,!0,4344,!0,4533,!0,4726,!0,4923,!0,5124,!0,5329,!0,5538,!0,5751,!0,5968,!0,6189,!0,406,!0,467,!0,532,!0,601,!0,674,!0,751,!0,832,!1,917,!1,1006,!1,1099,!0,1196,!0,1297,!0,1402,!0,1511,!0,1624,!0,1741,!0,1862,!0,1987,!0,2116,!0,2249,!0,2386,!0,2527,!0,2672,!0,2821,!0,2974,!0,3131,!0,3292,!0,3457,!0,3626,!0,3799,!0,3976,!0,4157,!0,4342,!0,4531,!0,4724,!0,4921,!0,5122,!0,5327,!0,5536,!0,5749,!0,5966,!0,6187,!0,6412,!0,465,!0,530,!0,599,!0,672,!0,749,!0,830,!0,915,!1,1004,!1,1097,!1,1194,!0,1295,!0,1400,!0,1509,!0,1622,!0,1739,!0,1860,!0,1985,!0,2114,!0,2247,!0,2384,!0,2525,!0,2670,!0,2819,!0,2972,!0,3129,!0,3290,!0,3455,!0,3624,!0,3797,!0,3974,!0,4155,!0,4340,!0,4529,!0,4722,!0,4919,!0,5120,!0,5325,!0,5534,!0,5747,!0,5964,!0,6185,!0,6410,!0,6639,!0,528,!0,597,!0,670,!0,747,!0,828,!0,913,!0,1002,!1,1095,!1,1192,!1,1293,!1,1398,!0,1507,!0,1620,!0,1737,!0,1858,!0,1983,!0,2112,!0,2245,!0,2382,!0,2523,!0,2668,!0,2817,!0,2970,!0,3127,!0,3288,!0,3453,!0,3622,!0,3795,!0,3972,!0,4153,!0,4338,!0,4527,!0,4720,!0,4917,!0,5118,!0,5323,!0,5532,!0,5745,!0,5962,!0,6183,!0,6408,!0,6637,!0,6870,!0,595,!0,668,!0,745,!0,826,!0,911,!0,1000,!0,1093,!1,1190,!1,1291,!1,1396,!1,1505,!1,1618,!0,1735,!0,1856,!0,1981,!0,2110,!0,2243,!0,2380,!0,2521,!0,2666,!0,2815,!0,2968,!0,3125,!0,3286,!0,3451,!0,3620,!0,3793,!0,3970,!0,4151,!0,4336,!0,4525,!0,4718,!0,4915,!0,5116,!0,5321,!0,5530,!0,5743,!0,5960,!0,6181,!0,6406,!0,6635,!0,6868,!0,7105,!0,666,!0,743,!0,824,!0,909,!0,998,!0,1091,!0,1188,!1,1289,!1,1394,!1,1503,!1,1616,!1,1733,!0,1854,!0,1979,!0,2108,!0,2241,!0,2378,!0,2519,!0,2664,!0,2813,!0,2966,!0,3123,!0,3284,!0,3449,!0,3618,!0,3791,!0,3968,!0,4149,!0,4334,!0,4523,!0,4716,!0,4913,!0,5114,!0,5319,!0,5528,!0,5741,!0,5958,!0,6179,!0,6404,!0,6633,!0,6866,!0,7103,!0,7344,!0,741,!0,822,!0,907,!0,996,!0,1089,!0,1186,!0,1287,!1,1392,!1,1501,!1,1614,!1,1731,!1,1852,!1,1977,!0,2106,!0,2239,!0,2376,!0,2517,!0,2662,!0,2811,!0,2964,!0,3121,!0,3282,!0,3447,!0,3616,!0,3789,!0,3966,!0,4147,!0,4332,!0,4521,!0,4714,!0,4911,!0,5112,!0,5317,!0,5526,!0,5739,!0,5956,!0,6177,!0,6402,!0,6631,!0,6864,!0,7101,!0,7342,!0,7587,!0,820,!0,905,!0,994,!0,1087,!0,1184,!0,1285,!1,1390,!1,1499,!1,1612,!1,1729,!1,1850,!1,1975,!1,2104,!0,2237,!0,2374,!0,2515,!0,2660,!0,2809,!0,2962,!0,3119,!0,3280,!0,3445,!0,3614,!0,3787,!0,3964,!0,4145,!0,4330,!0,4519,!0,4712,!0,4909,!0,5110,!0,5315,!0,5524,!0,5737,!0,5954,!0,6175,!0,6400,!0,6629,!0,6862,!0,7099,!0,7340,!0,7585,!0,7834,!0,903,!0,992,!0,1085,!0,1182,!0,1283,!0,1388,!1,1497,!1,1610,!1,1727,!1,1848,!1,1973,!1,2102,!1,2235,!1,2372,!1,2513,!1,2658,!1,2807,!0,2960,!0,3117,!0,3278,!0,3443,!0,3612,!0,3785,!0,3962,!0,4143,!0,4328,!0,4517,!0,4710,!0,4907,!0,5108,!0,5313,!0,5522,!0,5735,!0,5952,!0,6173,!0,6398,!0,6627,!0,6860,!0,7097,!0,7338,!0,7583,!0,7832,!0,8085,!0,990,!0,1083,!0,1180,!0,1281,!0,1386,!1,1495,!1,1608,!1,1725,!1,1846,!1,1971,!1,2100,!1,2233,!1,2370,!1,2511,!1,2656,!1,2805,!1,2958,!0,3115,!0,3276,!0,3441,!0,3610,!0,3783,!0,3960,!0,4141,!0,4326,!0,4515,!0,4708,!0,4905,!0,5106,!0,5311,!0,5520,!0,5733,!0,5950,!0,6171,!0,6396,!0,6625,!0,6858,!0,7095,!0,7336,!0,7581,!0,7830,!0,8083,!0,8340,!0,1081,!0,1178,!0,1279,!0,1384,!0,1493,!1,1606,!1,1723,!1,1844,!1,1969,!1,2098,!1,2231,!1,2368,!1,2509,!1,2654,!1,2803,!1,2956,!1,3113,!1,3274,!0,3439,!0,3608,!0,3781,!0,3958,!0,4139,!0,4324,!0,4513,!0,4706,!0,4903,!0,5104,!0,5309,!0,5518,!0,5731,!0,5948,!0,6169,!0,6394,!0,6623,!0,6856,!0,7093,!0,7334,!0,7579,!0,7828,!0,8081,!0,8338,!0,8599,!0,1176,!0,1277,!0,1382,!0,1491,!0,1604,!1,1721,!1,1842,!1,1967,!1,2096,!1,2229,!1,2366,!1,2507,!1,2652,!1,2801,!1,2954,!1,3111,!1,3272,!1,3437,!1,3606,!0,3779,!0,3956,!0,4137,!0,4322,!0,4511,!0,4704,!0,4901,!0,5102,!0,5307,!0,5516,!0,5729,!0,5946,!0,6167,!0,6392,!0,6621,!0,6854,!0,7091,!0,7332,!0,7577,!0,7826,!0,8079,!0,8336,!0,8597,!0,8862,!0,1275,!0,1380,!0,1489,!0,1602,!0,1719,!0,1840,!1,1965,!1,2094,!1,2227,!1,2364,!1,2505,!1,2650,!1,2799,!1,2952,!1,3109,!1,3270,!1,3435,!1,3604,!1,3777,!0,3954,!0,4135,!1,4320,!0,4509,!0,4702,!0,4899,!0,5100,!0,5305,!0,5514,!0,5727,!0,5944,!0,6165,!0,6390,!0,6619,!0,6852,!0,7089,!0,7330,!0,7575,!0,7824,!0,8077,!0,8334,!0,8595,!0,8860,!0,9129,!0,1378,!0,1487,!0,1600,!0,1717,!0,1838,!1,1963,!1,2092,!1,2225,!1,2362,!1,2503,!1,2648,!1,2797,!1,2950,!1,3107,!1,3268,!1,3433,!1,3602,!1,3775,!1,3952,!1,4133,!0,4318,!0,4507,!0,4700,!0,4897,!0,5098,!0,5303,!0,5512,!0,5725,!0,5942,!0,6163,!0,6388,!0,6617,!0,6850,!0,7087,!0,7328,!0,7573,!0,7822,!0,8075,!0,8332,!0,8593,!0,8858,!0,9127,!0,9400,!0,1485,!0,1598,!0,1715,!0,1836,!1,1961,!1,2090,!1,2223,!1,2360,!1,2501,!1,2646,!1,2795,!1,2948,!1,3105,!1,3266,!1,3431,!1,3600,!1,3773,!1,3950,!1,4131,!1,4316,!1,4505,!0,4698,!0,4895,!0,5096,!0,5301,!0,5510,!0,5723,!0,5940,!0,6161,!0,6386,!0,6615,!0,6848,!0,7085,!0,7326,!0,7571,!0,7820,!0,8073,!0,8330,!0,8591,!0,8856,!0,9125,!0,9398,!0,9675,!0,1596,!0,1713,!0,1834,!0,1959,!0,2088,!1,2221,!0,2358,!1,2499,!1,2644,!1,2793,!1,2946,!1,3103,!1,3264,!1,3429,!1,3598,!1,3771,!1,3948,!1,4129,!1,4314,!1,4503,!1,4696,!1,4893,!0,5094,!0,5299,!0,5508,!0,5721,!0,5938,!0,6159,!0,6384,!0,6613,!0,6846,!0,7083,!0,7324,!0,7569,!0,7818,!0,8071,!0,8328,!0,8589,!0,8854,!0,9123,!0,9396,!0,9673,!0,9954,!0,1711,!0,1832,!0,1957,!0,2086,!0,2219,!1,2356,!1,2497,!0,2642,!1,2791,!1,2944,!1,3101,!1,3262,!1,3427,!1,3596,!1,3769,!1,3946,!1,4127,!1,4312,!1,4501,!1,4694,!1,4891,!1,5092,!0,5297,!0,5506,!0,5719,!0,5936,!0,6157,!0,6382,!0,6611,!0,6844,!0,7081,!0,7322,!0,7567,!0,7816,!0,8069,!0,8326,!0,8587,!0,8852,!0,9121,!0,9394,!0,9671,!0,9952,!0,10237,!0,1830,!0,1955,!0,2084,!0,2217,!0,2354,!1,2495,!1,2640,!1,2789,!1,2942,!1,3099,!1,3260,!1,3425,!1,3594,!1,3767,!1,3944,!1,4125,!1,4310,!1,4499,!1,4692,!0,4889,!0,5090,!1,5295,!0,5504,!0,5717,!0,5934,!0,6155,!0,6380,!0,6609,!0,6842,!0,7079,!0,7320,!0,7565,!0,7814,!0,8067,!0,8324,!0,8585,!0,8850,!0,9119,!0,9392,!0,9669,!0,9950,!0,10235,!0,10524,!0,1953,!0,2082,!0,2215,!0,2352,!1,2493,!1,2638,!1,2787,!1,2940,!1,3097,!1,3258,!1,3423,!1,3592,!1,3765,!1,3942,!1,4123,!1,4308,!1,4497,!1,4690,!1,4887,!0,5088,!0,5293,!0,5502,!0,5715,!0,5932,!0,6153,!0,6378,!0,6607,!0,6840,!0,7077,!0,7318,!0,7563,!0,7812,!0,8065,!0,8322,!0,8583,!0,8848,!0,9117,!0,9390,!0,9667,!0,9948,!0,10233,!0,10522,!0,10815,!0,2080,!0,2213,!0,2350,!0,2491,!1,2636,!1,2785,!0,2938,!1,3095,!1,3256,!0,3421,!0,3590,!1,3763,!1,3940,!1,4121,!1,4306,!1,4495,!1,4688,!1,4885,!1,5086,!0,5291,!0,5500,!1,5713,!1,5930,!0,6151,!0,6376,!0,6605,!0,6838,!0,7075,!0,7316,!0,7561,!0,7810,!0,8063,!0,8320,!0,8581,!0,8846,!0,9115,!0,9388,!0,9665,!0,9946,!0,10231,!0,10520,!0,10813,!0,11110,!0,2211,!0,2348,!0,2489,!0,2634,!1,2783,!1,2936,!1,3093,!1,3254,!1,3419,!0,3588,!0,3761,!1,3938,!1,4119,!1,4304,!1,4493,!1,4686,!1,4883,!1,5084,!0,5289,!0,5498,!0,5711,!1,5928,!1,6149,!0,6374,!0,6603,!0,6836,!0,7073,!0,7314,!0,7559,!0,7808,!0,8061,!0,8318,!0,8579,!0,8844,!0,9113,!0,9386,!0,9663,!0,9944,!0,10229,!0,10518,!0,10811,!0,11108,!0,11409,!0,2346,!0,2487,!0,2632,!0,2781,!1,2934,!0,3091,!1,3252,!1,3417,!1,3586,!0,3759,!0,3936,!1,4117,!1,4302,!1,4491,!1,4684,!1,4881,!1,5082,!1,5287,!0,5496,!0,5709,!0,5926,!0,6147,!1,6372,!1,6601,!0,6834,!0,7071,!0,7312,!0,7557,!0,7806,!0,8059,!0,8316,!0,8577,!0,8842,!0,9111,!0,9384,!0,9661,!0,9942,!0,10227,!0,10516,!0,10809,!0,11106,!0,11407,!0,11712,!0,2485,!0,2630,!0,2779,!0,2932,!1,3089,!1,3250,!1,3415,!1,3584,!1,3757,!0,3934,!0,4115,!1,4300,!1,4489,!1,4682,!1,4879,!1,5080,!1,5285,!1,5494,!1,5707,!0,5924,!1,6145,!0,6370,!0,6599,!0,6832,!1,7069,!0,7310,!0,7555,!0,7804,!0,8057,!0,8314,!0,8575,!0,8840,!0,9109,!0,9382,!0,9659,!0,9940,!0,10225,!0,10514,!0,10807,!0,11104,!0,11405,!0,11710,!0,12019,!0,2628,!0,2777,!0,2930,!1,3087,!1,3248,!1,3413,!1,3582,!0,3755,!0,3932,!0,4113,!0,4298,!0,4487,!1,4680,!1,4877,!1,5078,!1,5283,!1,5492,!1,5705,!0,5922,!1,6143,!1,6368,!0,6597,!0,6830,!0,7067,!1,7308,!0,7553,!0,7802,!1,8055,!1,8312,!0,8573,!0,8838,!0,9107,!0,9380,!0,9657,!0,9938,!0,10223,!0,10512,!0,10805,!0,11102,!0,11403,!0,11708,!0,12017,!0,12330,!0,2775,!0,2928,!0,3085,!1,3246,!1,3411,!0,3580,!1,3753,!0,3930,!1,4111,!1,4296,!1,4485,!1,4678,!1,4875,!1,5076,!1,5281,!1,5490,!1,5703,!0,5920,!0,6141,!1,6366,!0,6595,!0,6828,!0,7065,!0,7306,!1,7551,!1,7800,!1,8053,!1,8310,!1,8571,!1,8836,!0,9105,!0,9378,!0,9655,!0,9936,!0,10221,!0,10510,!0,10803,!0,11100,!0,11401,!0,11706,!0,12015,!0,12328,!0,12645,!0,2926,!0,3083,!0,3244,!1,3409,!1,3578,!0,3751,!1,3928,!1,4109,!1,4294,!1,4483,!1,4676,!1,4873,!1,5074,!1,5279,!1,5488,!1,5701,!0,5918,!0,6139,!0,6364,!0,6593,!0,6826,!0,7063,!0,7304,!0,7549,!1,7798,!1,8051,!1,8308,!1,8569,!1,8834,!1,9103,!1,9376,!0,9653,!0,9934,!0,10219,!0,10508,!0,10801,!0,11098,!0,11399,!0,11704,!1,12013,!1,12326,!1,12643,!0,12964,!0,3081,!0,3242,!0,3407,!1,3576,!0,3749,!0,3926,!0,4107,!1,4292,!1,4481,!1,4674,!1,4871,!1,5072,!1,5277,!1,5486,!1,5699,!0,5916,!0,6137,!0,6362,!0,6591,!0,6824,!0,7061,!1,7302,!0,7547,!1,7796,!1,8049,!1,8306,!1,8567,!1,8832,!1,9101,!1,9374,!1,9651,!1,9932,!0,10217,!0,10506,!0,10799,!0,11096,!1,11397,!1,11702,!1,12011,!1,12324,!1,12641,!1,12962,!0,13287,!0,3240,!0,3405,!0,3574,!1,3747,!0,3924,!0,4105,!0,4290,!1,4479,!1,4672,!0,4869,!1,5070,!1,5275,!1,5484,!1,5697,!1,5914,!0,6135,!0,6360,!0,6589,!0,6822,!0,7059,!0,7300,!1,7545,!0,7794,!1,8047,!1,8304,!1,8565,!1,8830,!1,9099,!1,9372,!1,9649,!1,9930,!1,10215,!1,10504,!1,10797,!1,11094,!1,11395,!1,11700,!1,12009,!1,12322,!1,12639,!1,12960,!1,13285,!0,13614,!0,3403,!0,3572,!0,3745,!1,3922,!1,4103,!1,4288,!0,4477,!0,4670,!1,4867,!0,5068,!1,5273,!1,5482,!1,5695,!1,5912,!0,6133,!0,6358,!0,6587,!0,6820,!0,7057,!0,7298,!0,7543,!0,7792,!0,8045,!1,8302,!1,8563,!1,8828,!1,9097,!1,9370,!1,9647,!1,9928,!1,10213,!1,10502,!1,10795,!1,11092,!1,11393,!1,11698,!1,12007,!1,12320,!1,12637,!1,12958,!0,13283,!0,13612,!0,13945,!0,3570,!0,3743,!0,3920,!1,4101,!1,4286,!0,4475,!0,4668,!0,4865,!1,5066,!0,5271,!1,5480,!1,5693,!1,5910,!0,6131,!0,6356,!0,6585,!0,6818,!0,7055,!0,7296,!0,7541,!0,7790,!0,8043,!0,8300,!0,8561,!1,8826,!1,9095,!1,9368,!1,9645,!1,9926,!1,10211,!1,10500,!1,10793,!1,11090,!1,11391,!1,11696,!1,12005,!1,12318,!1,12635,!0,12956,!0,13281,!0,13610,!0,13943,!0,14280,!0,3741,!0,3918,!0,4099,!0,4284,!1,4473,!0,4666,!0,4863,!0,5064,!0,5269,!0,5478,!0,5691,!1,5908,!1,6129,!0,6354,!0,6583,!0,6816,!0,7053,!0,7294,!0,7539,!0,7788,!0,8041,!0,8298,!0,8559,!0,8824,!1,9093,!1,9366,!1,9643,!1,9924,!1,10209,!1,10498,!1,10791,!1,11088,!1,11389,!1,11694,!1,12003,!1,12316,!1,12633,!1,12954,!0,13279,!0,13608,!0,13941,!1,14278,!0,14619,!0,3916,!0,4097,!0,4282,!0,4471,!1,4664,!1,4861,!0,5062,!0,5267,!0,5476,!0,5689,!0,5906,!1,6127,!0,6352,!0,6581,!0,6814,!0,7051,!0,7292,!0,7537,!0,7786,!0,8039,!0,8296,!0,8557,!0,8822,!0,9091,!0,9364,!1,9641,!1,9922,!1,10207,!1,10496,!1,10789,!1,11086,!1,11387,!1,11692,!1,12001,!1,12314,!1,12631,!1,12952,!1,13277,!0,13606,!0,13939,!0,14276,!0,14617,!0,14962,!0,4095,!0,4280,!0,4469,!0,4662,!1,4859,!1,5060,!1,5265,!0,5474,!0,5687,!0,5904,!0,6125,!0,6350,!1,6579,!1,6812,!0,7049,!0,7290,!0,7535,!0,7784,!0,8037,!0,8294,!0,8555,!0,8820,!0,9089,!0,9362,!0,9639,!1,9920,!1,10205,!1,10494,!1,10787,!1,11084,!1,11385,!1,11690,!1,11999,!1,12312,!1,12629,!1,12950,!1,13275,!0,13604,!0,13937,!0,14274,!0,14615,!0,14960,!0,15309,!0,4278,!0,4467,!0,4660,!0,4857,!1,5058,!1,5263,!1,5472,!1,5685,!1,5902,!0,6123,!0,6348,!0,6577,!0,6810,!1,7047,!0,7288,!0,7533,!0,7782,!0,8035,!0,8292,!0,8553,!0,8818,!0,9087,!0,9360,!0,9637,!0,9918,!1,10203,!1,10492,!1,10785,!1,11082,!1,11383,!1,11688,!1,11997,!1,12310,!1,12627,!1,12948,!1,13273,!0,13602,!0,13935,!0,14272,!0,14613,!0,14958,!0,15307,!0,15660,!0,4465,!0,4658,!0,4855,!1,5056,!1,5261,!1,5470,!1,5683,!1,5900,!1,6121,!1,6346,!0,6575,!0,6808,!0,7045,!0,7286,!0,7531,!0,7780,!0,8033,!0,8290,!0,8551,!0,8816,!0,9085,!0,9358,!0,9635,!0,9916,!0,10201,!0,10490,!1,10783,!1,11080,!1,11381,!1,11686,!1,11995,!1,12308,!1,12625,!1,12946,!1,13271,!0,13600,!0,13933,!0,14270,!0,14611,!0,14956,!0,15305,!0,15658,!0,16015,!0,4656,!0,4853,!0,5054,!1,5259,!1,5468,!1,5681,!1,5898,!1,6119,!1,6344,!1,6573,!0,6806,!0,7043,!0,7284,!0,7529,!0,7778,!0,8031,!0,8288,!0,8549,!0,8814,!0,9083,!0,9356,!0,9633,!0,9914,!0,10199,!0,10488,!0,10781,!0,11078,!1,11379,!1,11684,!1,11993,!1,12306,!1,12623,!1,12944,!1,13269,!0,13598,!0,13931,!0,14268,!0,14609,!0,14954,!0,15303,!0,15656,!0,16013,!0,16374,!0,4851,!0,5052,!0,5257,!1,5466,!1,5679,!1,5896,!1,6117,!1,6342,!1,6571,!1,6804,!0,7041,!0,7282,!0,7527,!0,7776,!0,8029,!0,8286,!0,8547,!0,8812,!0,9081,!0,9354,!0,9631,!0,9912,!0,10197,!0,10486,!0,10779,!0,11076,!0,11377,!1,11682,!1,11991,!1,12304,!1,12621,!1,12942,!1,13267,!0,13596,!0,13929,!0,14266,!0,14607,!0,14952,!0,15301,!0,15654,!0,16011,!0,16372,!0,16737,!0,5050,!0,5255,!0,5464,!1,5677,!1,5894,!1,6115,!1,6340,!1,6569,!1,6802,!0,7039,!0,7280,!0,7525,!0,7774,!0,8027,!0,8284,!0,8545,!0,8810,!0,9079,!0,9352,!0,9629,!0,9910,!0,10195,!0,10484,!0,10777,!0,11074,!0,11375,!0,11680,!0,11989,!1,12302,!1,12619,!1,12940,!1,13265,!1,13594,!0,13927,!0,14264,!0,14605,!0,14950,!0,15299,!0,15652,!0,16009,!0,16370,!0,16735,!0,17104,!0,5253,!0,5462,!0,5675,!1,5892,!1,6113,!1,6338,!1,6567,!1,6800,!0,7037,!0,7278,!0,7523,!0,7772,!0,8025,!0,8282,!0,8543,!0,8808,!0,9077,!0,9350,!0,9627,!0,9908,!0,10193,!0,10482,!0,10775,!0,11072,!0,11373,!0,11678,!0,11987,!0,12300,!1,12617,!1,12938,!1,13263,!0,13592,!0,13925,!0,14262,!0,14603,!0,14948,!0,15297,!0,15650,!0,16007,!0,16368,!0,16733,!0,17102,!0,17475,!0,5460,!0,5673,!0,5890,!1,6111,!1,6336,!1,6565,!1,6798,!1,7035,!0,7276,!0,7521,!0,7770,!0,8023,!0,8280,!0,8541,!0,8806,!0,9075,!0,9348,!0,9625,!0,9906,!0,10191,!0,10480,!0,10773,!0,11070,!0,11371,!0,11676,!0,11985,!0,12298,!0,12615,!1,12936,!1,13261,!0,13590,!0,13923,!0,14260,!0,14601,!0,14946,!0,15295,!0,15648,!0,16005,!0,16366,!0,16731,!0,17100,!0,17473,!0,17850,!0,5671,!0,5888,!0,6109,!1,6334,!1,6563,!1,6796,!1,7033,!1,7274,!0,7519,!0,7768,!0,8021,!0,8278,!0,8539,!0,8804,!0,9073,!0,9346,!0,9623,!0,9904,!0,10189,!0,10478,!0,10771,!0,11068,!0,11369,!0,11674,!0,11983,!0,12296,!0,12613,!0,12934,!0,13259,!0,13588,!0,13921,!0,14258,!0,14599,!0,14944,!0,15293,!0,15646,!0,16003,!0,16364,!0,16729,!0,17098,!0,17471,!0,17848,!0,18229,!0,5886,!0,6107,!0,6332,!1,6561,!1,6794,!1,7031,!1,7272,!1,7517,!0,7766,!0,8019,!0,8276,!0,8537,!0,8802,!0,9071,!0,9344,!0,9621,!0,9902,!0,10187,!0,10476,!0,10769,!0,11066,!0,11367,!0,11672,!0,11981,!0,12294,!0,12611,!0,12932,!0,13257,!0,13586,!0,13919,!0,14256,!0,14597,!0,14942,!0,15291,!0,15644,!0,16001,!0,16362,!0,16727,!0,17096,!0,17469,!0,17846,!0,18227,!0,18612,!0,6105,!0,6330,!0,6559,!1,6792,!1,7029,!1,7270,!1,7515,!1,7764,!0,8017,!0,8274,!0,8535,!0,8800,!0,9069,!0,9342,!0,9619,!0,9900,!0,10185,!0,10474,!0,10767,!0,11064,!0,11365,!0,11670,!0,11979,!0,12292,!0,12609,!0,12930,!0,13255,!0,13584,!0,13917,!0,14254,!0,14595,!0,14940,!0,15289,!0,15642,!0,15999,!0,16360,!0,16725,!0,17094,!0,17467,!0,17844,!0,18225,!0,18610,!0,18999,!0,6328,!0,6557,!0,6790,!1,7027,!1,7268,!1,7513,!1,7762,!0,8015,!0,8272,!0,8533,!0,8798,!0,9067,!0,9340,!0,9617,!0,9898,!0,10183,!0,10472,!0,10765,!0,11062,!0,11363,!0,11668,!0,11977,!0,12290,!0,12607,!0,12928,!0,13253,!0,13582,!0,13915,!0,14252,!0,14593,!0,14938,!0,15287,!0,15640,!0,15997,!0,16358,!0,16723,!0,17092,!0,17465,!0,17842,!0,18223,!0,18608,!0,18997,!0,19390,!0,6555,!0,6788,!0,7025,!1,7266,!1,7511,!1,7760,!1,8013,!0,8270,!1,8531,!0,8796,!0,9065,!0,9338,!0,9615,!0,9896,!0,10181,!0,10470,!0,10763,!0,11060,!0,11361,!0,11666,!0,11975,!0,12288,!0,12605,!0,12926,!0,13251,!0,13580,!0,13913,!0,14250,!0,14591,!0,14936,!0,15285,!0,15638,!0,15995,!0,16356,!0,16721,!0,17090,!0,17463,!0,17840,!0,18221,!0,18606,!0,18995,!0,19388,!0,19785,!0,6786,!0,7023,!0,7264,!0,7509,!1,7758,!1,8011,!0,8268,!0,8529,!1,8794,!0,9063,!0,9336,!0,9613,!0,9894,!0,10179,!0,10468,!0,10761,!0,11058,!0,11359,!0,11664,!0,11973,!0,12286,!0,12603,!0,12924,!0,13249,!0,13578,!0,13911,!0,14248,!0,14589,!0,14934,!0,15283,!0,15636,!0,15993,!0,16354,!0,16719,!0,17088,!0,17461,!0,17838,!0,18219,!0,18604,!0,18993,!0,19386,!0,19783,!0,20184,!0,7021,!0,7262,!0,7507,!0,7756,!0,8009,!0,8266,!0,8527,!0,8792,!1,9061,!0,9334,!0,9611,!0,9892,!0,10177,!0,10466,!0,10759,!0,11056,!0,11357,!0,11662,!0,11971,!0,12284,!1,12601,!0,12922,!1,13247,!1,13576,!0,13909,!0,14246,!0,14587,!0,14932,!0,15281,!0,15634,!0,15991,!0,16352,!0,16717,!0,17086,!0,17459,!0,17836,!0,18217,!0,18602,!0,18991,!0,19384,!0,19781,!0,20182,!0,20587,!0,7260,!0,7505,!0,7754,!0,8007,!0,8264,!0,8525,!0,8790,!0,9059,!1,9332,!0,9609,!0,9890,!0,10175,!0,10464,!0,10757,!0,11054,!0,11355,!0,11660,!0,11969,!0,12282,!1,12599,!1,12920,!1,13245,!1,13574,!1,13907,!0,14244,!0,14585,!0,14930,!0,15279,!0,15632,!0,15989,!0,16350,!0,16715,!0,17084,!0,17457,!0,17834,!0,18215,!0,18600,!0,18989,!0,19382,!0,19779,!0,20180,!0,20585,!0,20994,!0,7503,!0,7752,!0,8005,!0,8262,!0,8523,!0,8788,!0,9057,!0,9330,!0,9607,!0,9888,!0,10173,!0,10462,!0,10755,!0,11052,!0,11353,!0,11658,!0,11967,!0,12280,!0,12597,!1,12918,!1,13243,!1,13572,!1,13905,!1,14242,!1,14583,!0,14928,!0,15277,!0,15630,!0,15987,!0,16348,!0,16713,!0,17082,!0,17455,!0,17832,!0,18213,!0,18598,!0,18987,!0,19380,!0,19777,!0,20178,!0,20583,!0,20992,!0,21405,!0,7750,!0,8003,!0,8260,!0,8521,!0,8786,!0,9055,!0,9328,!0,9605,!0,9886,!0,10171,!1,10460,!1,10753,!0,11050,!0,11351,!1,11656,!1,11965,!0,12278,!1,12595,!1,12916,!1,13241,!1,13570,!1,13903,!1,14240,!1,14581,!1,14926,!1,15275,!0,15628,!0,15985,!0,16346,!0,16711,!0,17080,!0,17453,!0,17830,!0,18211,!0,18596,!0,18985,!0,19378,!0,19775,!0,20176,!0,20581,!0,20990,!0,21403,!0,21820,!0,8001,!0,8258,!0,8519,!0,8784,!0,9053,!0,9326,!0,9603,!0,9884,!0,10169,!0,10458,!1,10751,!1,11048,!0,11349,!0,11654,!1,11963,!1,12276,!1,12593,!1,12914,!1,13239,!1,13568,!1,13901,!1,14238,!1,14579,!1,14924,!1,15273,!0,15626,!0,15983,!0,16344,!0,16709,!0,17078,!0,17451,!0,17828,!0,18209,!0,18594,!0,18983,!0,19376,!0,19773,!0,20174,!0,20579,!0,20988,!0,21401,!0,21818,!0,22239,!0,8256,!0,8517,!0,8782,!0,9051,!0,9324,!0,9601,!0,9882,!0,10167,!0,10456,!0,10749,!0,11046,!1,11347,!1,11652,!1,11961,!0,12274,!1,12591,!1,12912,!1,13237,!1,13566,!1,13899,!1,14236,!1,14577,!1,14922,!1,15271,!1,15624,!0,15981,!0,16342,!0,16707,!0,17076,!0,17449,!0,17826,!0,18207,!0,18592,!0,18981,!0,19374,!0,19771,!0,20172,!0,20577,!0,20986,!0,21399,!0,21816,!0,22237,!0,22662,!0,8515,!0,8780,!0,9049,!0,9322,!0,9599,!0,9880,!0,10165,!0,10454,!0,10747,!0,11044,!0,11345,!1,11650,!1,11959,!1,12272,!1,12589,!1,12910,!0,13235,!1,13564,!1,13897,!1,14234,!1,14575,!1,14920,!1,15269,!1,15622,!1,15979,!0,16340,!0,16705,!0,17074,!0,17447,!0,17824,!0,18205,!0,18590,!0,18979,!0,19372,!0,19769,!0,20170,!0,20575,!0,20984,!0,21397,!0,21814,!0,22235,!0,22660,!0,23089,!0,8778,!0,9047,!0,9320,!0,9597,!0,9878,!0,10163,!0,10452,!0,10745,!0,11042,!0,11343,!0,11648,!0,11957,!1,12270,!1,12587,!1,12908,!0,13233,!1,13562,!1,13895,!1,14232,!1,14573,!1,14918,!1,15267,!1,15620,!1,15977,!1,16338,!0,16703,!0,17072,!0,17445,!0,17822,!0,18203,!0,18588,!0,18977,!0,19370,!0,19767,!0,20168,!0,20573,!0,20982,!0,21395,!0,21812,!0,22233,!0,22658,!0,23087,!0,23520,!0,9045,!0,9318,!0,9595,!0,9876,!0,10161,!0,10450,!0,10743,!0,11040,!0,11341,!1,11646,!0,11955,!0,12268,!1,12585,!1,12906,!1,13231,!0,13560,!1,13893,!1,14230,!1,14571,!1,14916,!1,15265,!1,15618,!1,15975,!1,16336,!1,16701,!1,17070,!0,17443,!0,17820,!0,18201,!0,18586,!0,18975,!0,19368,!0,19765,!0,20166,!0,20571,!0,20980,!0,21393,!0,21810,!0,22231,!0,22656,!0,23085,!0,23518,!0,23955,!0,9316,!0,9593,!0,9874,!0,10159,!0,10448,!0,10741,!0,11038,!0,11339,!0,11644,!1,11953,!1,12266,!1,12583,!1,12904,!1,13229,!1,13558,!1,13891,!1,14228,!1,14569,!1,14914,!1,15263,!1,15616,!1,15973,!1,16334,!1,16699,!1,17068,!1,17441,!0,17818,!0,18199,!0,18584,!0,18973,!0,19366,!0,19763,!0,20164,!0,20569,!0,20978,!0,21391,!0,21808,!0,22229,!0,22654,!0,23083,!0,23516,!0,23953,!0,24394,!0,9591,!0,9872,!0,10157,!0,10446,!1,10739,!0,11036,!0,11337,!0,11642,!1,11951,!1,12264,!0,12581,!1,12902,!1,13227,!1,13556,!1,13889,!0,14226,!1,14567,!1,14912,!1,15261,!1,15614,!1,15971,!1,16332,!1,16697,!1,17066,!1,17439,!1,17816,!1,18197,!1,18582,!0,18971,!0,19364,!0,19761,!0,20162,!0,20567,!0,20976,!0,21389,!0,21806,!0,22227,!0,22652,!0,23081,!0,23514,!0,23951,!0,24392,!0,24837,!0,9870,!0,10155,!0,10444,!0,10737,!1,11034,!0,11335,!0,11640,!0,11949,!1,12262,!1,12579,!1,12900,!1,13225,!1,13554,!1,13887,!1,14224,!0,14565,!0,14910,!0,15259,!1,15612,!1,15969,!1,16330,!1,16695,!1,17064,!1,17437,!1,17814,!1,18195,!1,18580,!1,18969,!1,19362,!1,19759,!1,20160,!1,20565,!1,20974,!0,21387,!0,21804,!0,22225,!0,22650,!0,23079,!0,23512,!0,23949,!0,24390,!0,24835,!0,25284,!0,10153,!0,10442,!0,10735,!0,11032,!1,11333,!0,11638,!0,11947,!1,12260,!1,12577,!1,12898,!1,13223,!1,13552,!1,13885,!1,14222,!1,14563,!1,14908,!0,15257,!0,15610,!1,15967,!1,16328,!1,16693,!1,17062,!1,17435,!1,17812,!1,18193,!1,18578,!1,18967,!1,19360,!1,19757,!1,20158,!1,20563,!1,20972,!1,21385,!1,21802,!1,22223,!0,22648,!0,23077,!0,23510,!0,23947,!0,24388,!0,24833,!0,25282,!0,25735,!0,10440,!0,10733,!0,11030,!0,11331,!1,11636,!0,11945,!0,12258,!1,12575,!1,12896,!0,13221,!1,13550,!1,13883,!1,14220,!1,14561,!1,14906,!1,15255,!0,15608,!0,15965,!1,16326,!1,16691,!1,17060,!1,17433,!1,17810,!1,18191,!1,18576,!1,18965,!1,19358,!1,19755,!1,20156,!1,20561,!1,20970,!1,21383,!1,21800,!1,22221,!1,22646,!1,23075,!1,23508,!0,23945,!0,24386,!0,24831,!0,25280,!0,25733,!0,26190,!0,10731,!0,11028,!0,11329,!0,11634,!1,11943,!0,12256,!0,12573,!1,12894,!0,13219,!1,13548,!1,13881,!1,14218,!1,14559,!1,14904,!1,15253,!1,15606,!1,15963,!1,16324,!1,16689,!1,17058,!1,17431,!1,17808,!1,18189,!1,18574,!1,18963,!1,19356,!1,19753,!1,20154,!1,20559,!1,20968,!1,21381,!1,21798,!1,22219,!1,22644,!1,23073,!1,23506,!0,23943,!0,24384,!0,24829,!0,25278,!0,25731,!0,26188,!0,26649,!0,11026,!0,11327,!0,11632,!0,11941,!1,12254,!0,12571,!0,12892,!1,13217,!1,13546,!1,13879,!1,14216,!1,14557,!1,14902,!1,15251,!1,15604,!1,15961,!1,16322,!0,16687,!1,17056,!1,17429,!1,17806,!1,18187,!1,18572,!1,18961,!1,19354,!1,19751,!1,20152,!1,20557,!1,20966,!1,21379,!1,21796,!1,22217,!1,22642,!1,23071,!1,23504,!1,23941,!0,24382,!0,24827,!0,25276,!0,25729,!0,26186,!0,26647,!0,27112,!0,11325,!0,11630,!0,11939,!0,12252,!0,12569,!0,12890,!0,13215,!1,13544,!1,13877,!1,14214,!1,14555,!1,14900,!1,15249,!1,15602,!1,15959,!1,16320,!1,16685,!0,17054,!1,17427,!1,17804,!1,18185,!1,18570,!1,18959,!1,19352,!1,19749,!1,20150,!1,20555,!1,20964,!1,21377,!1,21794,!1,22215,!1,22640,!1,23069,!1,23502,!1,23939,!1,24380,!0,24825,!0,25274,!0,25727,!0,26184,!0,26645,!0,27110,!0,27579,!0,11628,!0,11937,!0,12250,!0,12567,!0,12888,!0,13213,!0,13542,!1,13875,!1,14212,!1,14553,!1,14898,!1,15247,!1,15600,!1,15957,!0,16318,!1,16683,!1,17052,!0,17425,!1,17802,!1,18183,!1,18568,!1,18957,!1,19350,!1,19747,!1,20148,!1,20553,!1,20962,!1,21375,!1,21792,!1,22213,!1,22638,!1,23067,!1,23500,!1,23937,!1,24378,!1,24823,!0,25272,!0,25725,!0,26182,!0,26643,!0,27108,!0,27577,!0,28050,!0,11935,!0,12248,!0,12565,!0,12886,!0,13211,!0,13540,!0,13873,!1,14210,!1,14551,!1,14896,!1,15245,!1,15598,!1,15955,!1,16316,!0,16681,!1,17050,!1,17423,!0,17800,!1,18181,!1,18566,!1,18955,!1,19348,!1,19745,!1,20146,!1,20551,!1,20960,!1,21373,!1,21790,!1,22211,!1,22636,!1,23065,!1,23498,!1,23935,!1,24376,!0,24821,!0,25270,!0,25723,!0,26180,!0,26641,!0,27106,!0,27575,!0,28048,!0,28525,!0,12246,!0,12563,!0,12884,!0,13209,!0,13538,!0,13871,!0,14208,!1,14549,!1,14894,!1,15243,!1,15596,!1,15953,!1,16314,!1,16679,!0,17048,!1,17421,!1,17798,!1,18179,!1,18564,!0,18953,!1,19346,!1,19743,!1,20144,!1,20549,!1,20958,!1,21371,!1,21788,!1,22209,!1,22634,!1,23063,!1,23496,!1,23933,!0,24374,!0,24819,!0,25268,!0,25721,!0,26178,!0,26639,!0,27104,!0,27573,!0,28046,!0,28523,!0,29004,!0,12561,!0,12882,!0,13207,!0,13536,!0,13869,!0,14206,!0,14547,!0,14892,!0,15241,!1,15594,!1,15951,!1,16312,!1,16677,!1,17046,!0,17419,!1,17796,!1,18177,!1,18562,!1,18951,!1,19344,!1,19741,!0,20142,!1,20547,!1,20956,!1,21369,!1,21786,!1,22207,!1,22632,!1,23061,!1,23494,!1,23931,!1,24372,!0,24817,!0,25266,!0,25719,!0,26176,!0,26637,!0,27102,!0,27571,!0,28044,!0,28521,!0,29002,!0,29487,!0,12880,!0,13205,!0,13534,!0,13867,!0,14204,!0,14545,!0,14890,!0,15239,!1,15592,!1,15949,!1,16310,!1,16675,!1,17044,!1,17417,!1,17794,!1,18175,!1,18560,!1,18949,!1,19342,!1,19739,!1,20140,!1,20545,!0,20954,!1,21367,!1,21784,!1,22205,!1,22630,!0,23059,!0,23492,!0,23929,!0,24370,!0,24815,!0,25264,!0,25717,!0,26174,!0,26635,!0,27100,!0,27569,!0,28042,!0,28519,!0,29e3,!0,29485,!0,29974,!0,13203,!0,13532,!0,13865,!0,14202,!0,14543,!0,14888,!0,15237,!1,15590,!1,15947,!1,16308,!1,16673,!1,17042,!1,17415,!1,17792,!1,18173,!1,18558,!1,18947,!1,19340,!1,19737,!1,20138,!1,20543,!1,20952,!1,21365,!0,21782,!1,22203,!1,22628,!1,23057,!0,23490,!0,23927,!0,24368,!0,24813,!1,25262,!1,25715,!1,26172,!0,26633,!0,27098,!0,27567,!0,28040,!0,28517,!0,28998,!0,29483,!0,29972,!0,30465,!0,13530,!0,13863,!0,14200,!0,14541,!0,14886,!0,15235,!0,15588,!0,15945,!1,16306,!1,16671,!1,17040,!1,17413,!1,17790,!1,18171,!1,18556,!1,18945,!1,19338,!1,19735,!1,20136,!1,20541,!1,20950,!1,21363,!1,21780,!0,22201,!1,22626,!1,23055,!0,23488,!0,23925,!0,24366,!0,24811,!0,25260,!1,25713,!1,26170,!1,26631,!0,27096,!0,27565,!0,28038,!0,28515,!0,28996,!0,29481,!0,29970,!0,30463,!0,30960,!0,13861,!0,14198,!0,14539,!0,14884,!0,15233,!0,15586,!0,15943,!0,16304,!1,16669,!1,17038,!1,17411,!1,17788,!1,18169,!1,18554,!0,18943,!1,19336,!1,19733,!1,20134,!0,20539,!1,20948,!1,21361,!1,21778,!1,22199,!0,22624,!1,23053,!0,23486,!0,23923,!0,24364,!0,24809,!0,25258,!1,25711,!1,26168,!0,26629,!0,27094,!0,27563,!0,28036,!0,28513,!0,28994,!0,29479,!0,29968,!0,30461,!0,30958,!0,31459,!0,14196,!0,14537,!0,14882,!0,15231,!0,15584,!0,15941,!1,16302,!1,16667,!1,17036,!1,17409,!1,17786,!1,18167,!1,18552,!1,18941,!1,19334,!1,19731,!1,20132,!1,20537,!1,20946,!0,21359,!1,21776,!1,22197,!0,22622,!0,23051,!0,23484,!0,23921,!0,24362,!0,24807,!0,25256,!0,25709,!0,26166,!0,26627,!0,27092,!0,27561,!0,28034,!0,28511,!0,28992,!0,29477,!0,29966,!0,30459,!0,30956,!0,31457,!0,31962,!0,14535,!0,14880,!0,15229,!0,15582,!0,15939,!0,16300,!1,16665,!1,17034,!1,17407,!1,17784,!1,18165,!1,18550,!1,18939,!1,19332,!1,19729,!1,20130,!1,20535,!1,20944,!1,21357,!0,21774,!1,22195,!1,22620,!0,23049,!0,23482,!0,23919,!0,24360,!0,24805,!0,25254,!0,25707,!0,26164,!0,26625,!0,27090,!0,27559,!0,28032,!0,28509,!0,28990,!0,29475,!0,29964,!0,30457,!0,30954,!0,31455,!0,31960,!0,32469,!0,14878,!0,15227,!0,15580,!0,15937,!0,16298,!1,16663,!0,17032,!1,17405,!1,17782,!1,18163,!1,18548,!1,18937,!1,19330,!1,19727,!1,20128,!1,20533,!1,20942,!1,21355,!1,21772,!1,22193,!1,22618,!0,23047,!0,23480,!0,23917,!0,24358,!0,24803,!0,25252,!0,25705,!0,26162,!0,26623,!0,27088,!0,27557,!0,28030,!0,28507,!0,28988,!0,29473,!0,29962,!0,30455,!0,30952,!0,31453,!0,31958,!0,32467,!0,32980,!0,15225,!0,15578,!0,15935,!0,16296,!0,16661,!1,17030,!0,17403,!1,17780,!1,18161,!1,18546,!1,18935,!1,19328,!1,19725,!1,20126,!1,20531,!1,20940,!1,21353,!1,21770,!1,22191,!1,22616,!0,23045,!0,23478,!0,23915,!0,24356,!0,24801,!0,25250,!0,25703,!0,26160,!0,26621,!0,27086,!0,27555,!0,28028,!0,28505,!0,28986,!0,29471,!0,29960,!0,30453,!0,30950,!0,31451,!0,31956,!0,32465,!0,32978,!0,33495,!0,15576,!0,15933,!0,16294,!0,16659,!0,17028,!1,17401,!0,17778,!1,18159,!1,18544,!1,18933,!1,19326,!1,19723,!1,20124,!1,20529,!1,20938,!1,21351,!1,21768,!1,22189,!1,22614,!1,23043,!0,23476,!0,23913,!0,24354,!0,24799,!0,25248,!0,25701,!0,26158,!0,26619,!0,27084,!0,27553,!0,28026,!0,28503,!0,28984,!0,29469,!0,29958,!0,30451,!0,30948,!0,31449,!0,31954,!0,32463,!0,32976,!0,33493,!0,34014,!0,15931,!0,16292,!0,16657,!0,17026,!0,17399,!0,17776,!0,18157,!1,18542,!1,18931,!1,19324,!1,19721,!1,20122,!1,20527,!1,20936,!1,21349,!1,21766,!1,22187,!1,22612,!1,23041,!1,23474,!0,23911,!0,24352,!0,24797,!0,25246,!0,25699,!0,26156,!0,26617,!0,27082,!0,27551,!0,28024,!0,28501,!0,28982,!0,29467,!0,29956,!0,30449,!0,30946,!0,31447,!0,31952,!0,32461,!0,32974,!0,33491,!0,34012,!0,34537,!0,16290,!0,16655,!0,17024,!0,17397,!0,17774,!0,18155,!1,18540,!1,18929,!1,19322,!1,19719,!1,20120,!1,20525,!1,20934,!1,21347,!1,21764,!1,22185,!1,22610,!1,23039,!1,23472,!1,23909,!1,24350,!0,24795,!0,25244,!0,25697,!0,26154,!0,26615,!0,27080,!0,27549,!0,28022,!0,28499,!0,28980,!0,29465,!0,29954,!0,30447,!0,30944,!0,31445,!0,31950,!0,32459,!0,32972,!0,33489,!1,34010,!0,34535,!0,35064,!0,16653,!0,17022,!0,17395,!0,17772,!0,18153,!0,18538,!1,18927,!1,19320,!1,19717,!1,20118,!1,20523,!1,20932,!1,21345,!1,21762,!1,22183,!1,22608,!1,23037,!1,23470,!1,23907,!1,24348,!1,24793,!0,25242,!0,25695,!0,26152,!0,26613,!0,27078,!0,27547,!0,28020,!0,28497,!0,28978,!0,29463,!0,29952,!0,30445,!0,30942,!0,31443,!0,31948,!0,32457,!0,32970,!0,33487,!0,34008,!0,34533,!0,35062,!0,35595,!0,17020,!0,17393,!0,17770,!0,18151,!0,18536,!0,18925,!1,19318,!1,19715,!1,20116,!1,20521,!1,20930,!1,21343,!1,21760,!1,22181,!1,22606,!1,23035,!1,23468,!1,23905,!1,24346,!1,24791,!1,25240,!1,25693,!1,26150,!0,26611,!0,27076,!0,27545,!0,28018,!0,28495,!0,28976,!0,29461,!0,29950,!0,30443,!0,30940,!0,31441,!0,31946,!0,32455,!0,32968,!0,33485,!0,34006,!0,34531,!0,35060,!0,35593,!0,36130,!0,17391,!0,17768,!0,18149,!0,18534,!1,18923,!0,19316,!1,19713,!1,20114,!1,20519,!1,20928,!1,21341,!1,21758,!1,22179,!1,22604,!1,23033,!1,23466,!1,23903,!1,24344,!1,24789,!1,25238,!1,25691,!1,26148,!1,26609,!1,27074,!1,27543,!0,28016,!0,28493,!0,28974,!0,29459,!0,29948,!0,30441,!0,30938,!0,31439,!0,31944,!0,32453,!0,32966,!0,33483,!0,34004,!0,34529,!0,35058,!0,35591,!0,36128,!0,36669,!0,17766,!0,18147,!0,18532,!0,18921,!0,19314,!0,19711,!1,20112,!1,20517,!1,20926,!1,21339,!1,21756,!1,22177,!1,22602,!1,23031,!1,23464,!1,23901,!1,24342,!1,24787,!1,25236,!1,25689,!1,26146,!1,26607,!1,27072,!0,27541,!1,28014,!0,28491,!0,28972,!0,29457,!0,29946,!0,30439,!0,30936,!0,31437,!0,31942,!0,32451,!0,32964,!0,33481,!0,34002,!0,34527,!0,35056,!0,35589,!0,36126,!0,36667,!0,37212,!0,18145,!0,18530,!0,18919,!0,19312,!0,19709,!1,20110,!1,20515,!1,20924,!1,21337,!1,21754,!1,22175,!1,22600,!1,23029,!1,23462,!1,23899,!1,24340,!1,24785,!1,25234,!1,25687,!1,26144,!1,26605,!1,27070,!0,27539,!0,28012,!0,28489,!0,28970,!0,29455,!0,29944,!0,30437,!0,30934,!0,31435,!0,31940,!0,32449,!0,32962,!0,33479,!0,34e3,!0,34525,!0,35054,!0,35587,!0,36124,!0,36665,!0,37210,!0,37759,!0,18528,!0,18917,!0,19310,!0,19707,!0,20108,!0,20513,!1,20922,!1,21335,!1,21752,!1,22173,!1,22598,!1,23027,!1,23460,!1,23897,!1,24338,!1,24783,!1,25232,!1,25685,!1,26142,!1,26603,!1,27068,!0,27537,!0,28010,!0,28487,!0,28968,!0,29453,!0,29942,!0,30435,!0,30932,!0,31433,!0,31938,!0,32447,!0,32960,!0,33477,!0,33998,!0,34523,!0,35052,!0,35585,!0,36122,!0,36663,!0,37208,!0,37757,!0,38310,!0,18915,!0,19308,!0,19705,!0,20106,!0,20511,!1,20920,!1,21333,!1,21750,!1,22171,!1,22596,!1,23025,!1,23458,!1,23895,!1,24336,!1,24781,!1,25230,!1,25683,!1,26140,!1,26601,!1,27066,!1,27535,!0,28008,!0,28485,!0,28966,!0,29451,!0,29940,!0,30433,!0,30930,!0,31431,!0,31936,!0,32445,!0,32958,!0,33475,!0,33996,!0,34521,!0,35050,!0,35583,!0,36120,!0,36661,!0,37206,!0,37755,!0,38308,!0,38865,!0,19306,!0,19703,!0,20104,!0,20509,!1,20918,!1,21331,!1,21748,!1,22169,!1,22594,!1,23023,!1,23456,!1,23893,!1,24334,!1,24779,!1,25228,!1,25681,!1,26138,!1,26599,!1,27064,!1,27533,!1,28006,!0,28483,!0,28964,!0,29449,!0,29938,!0,30431,!0,30928,!0,31429,!0,31934,!0,32443,!0,32956,!0,33473,!0,33994,!0,34519,!0,35048,!0,35581,!0,36118,!0,36659,!0,37204,!0,37753,!0,38306,!0,38863,!0,39424,!0,19701,!0,20102,!0,20507,!0,20916,!1,21329,!1,21746,!1,22167,!1,22592,!1,23021,!1,23454,!1,23891,!1,24332,!1,24777,!1,25226,!1,25679,!1,26136,!1,26597,!1,27062,!1,27531,!1,28004,!1,28481,!1,28962,!0,29447,!0,29936,!0,30429,!0,30926,!0,31427,!0,31932,!0,32441,!0,32954,!0,33471,!0,33992,!0,34517,!0,35046,!0,35579,!0,36116,!0,36657,!0,37202,!0,37751,!0,38304,!0,38861,!0,39422,!0,39987,!0,20100,!0,20505,!0,20914,!0,21327,!1,21744,!1,22165,!1,22590,!1,23019,!1,23452,!1,23889,!1,24330,!1,24775,!1,25224,!1,25677,!1,26134,!1,26595,!1,27060,!1,27529,!1,28002,!1,28479,!1,28960,!1,29445,!0,29934,!0,30427,!0,30924,!1,31425,!1,31930,!0,32439,!0,32952,!0,33469,!0,33990,!0,34515,!0,35044,!0,35577,!0,36114,!0,36655,!0,37200,!0,37749,!0,38302,!0,38859,!0,39420,!0,39985,!0,40554,!0,20503,!0,20912,!0,21325,!0,21742,!1,22163,!1,22588,!1,23017,!1,23450,!1,23887,!1,24328,!1,24773,!1,25222,!1,25675,!1,26132,!1,26593,!1,27058,!1,27527,!1,28e3,!1,28477,!1,28958,!1,29443,!1,29932,!1,30425,!1,30922,!1,31423,!0,31928,!1,32437,!1,32950,!0,33467,!0,33988,!0,34513,!0,35042,!0,35575,!0,36112,!0,36653,!0,37198,!0,37747,!0,38300,!0,38857,!0,39418,!0,39983,!0,40552,!0,41125,!0,20910,!0,21323,!0,21740,!0,22161,!1,22586,!1,23015,!1,23448,!1,23885,!1,24326,!1,24771,!1,25220,!1,25673,!1,26130,!1,26591,!1,27056,!1,27525,!1,27998,!1,28475,!1,28956,!1,29441,!1,29930,!1,30423,!1,30920,!1,31421,!0,31926,!1,32435,!1,32948,!1,33465,!0,33986,!0,34511,!0,35040,!0,35573,!0,36110,!0,36651,!0,37196,!0,37745,!0,38298,!0,38855,!0,39416,!0,39981,!0,40550,!0,41123,!0,41700,!0,21321,!0,21738,!0,22159,!0,22584,!0,23013,!1,23446,!1,23883,!1,24324,!1,24769,!1,25218,!1,25671,!1,26128,!1,26589,!1,27054,!1,27523,!1,27996,!1,28473,!1,28954,!1,29439,!1,29928,!1,30421,!1,30918,!1,31419,!1,31924,!0,32433,!0,32946,!0,33463,!1,33984,!1,34509,!0,35038,!0,35571,!0,36108,!0,36649,!0,37194,!0,37743,!0,38296,!0,38853,!0,39414,!0,39979,!0,40548,!0,41121,!0,41698,!0,42279,!0,21736,!0,22157,!0,22582,!0,23011,!0,23444,!1,23881,!1,24322,!1,24767,!1,25216,!1,25669,!1,26126,!1,26587,!1,27052,!1,27521,!1,27994,!1,28471,!1,28952,!1,29437,!1,29926,!1,30419,!1,30916,!0,31417,!1,31922,!1,32431,!0,32944,!1,33461,!0,33982,!1,34507,!1,35036,!0,35569,!0,36106,!0,36647,!0,37192,!0,37741,!0,38294,!0,38851,!0,39412,!0,39977,!0,40546,!0,41119,!0,41696,!0,42277,!0,42862,!0,22155,!0,22580,!0,23009,!0,23442,!0,23879,!1,24320,!1,24765,!1,25214,!1,25667,!1,26124,!1,26585,!1,27050,!1,27519,!1,27992,!1,28469,!1,28950,!1,29435,!1,29924,!1,30417,!1,30914,!1,31415,!1,31920,!0,32429,!0,32942,!0,33459,!0,33980,!1,34505,!1,35034,!1,35567,!0,36104,!0,36645,!0,37190,!0,37739,!0,38292,!0,38849,!0,39410,!0,39975,!0,40544,!0,41117,!0,41694,!0,42275,!0,42860,!0,43449,!0,22578,!0,23007,!0,23440,!0,23877,!0,24318,!1,24763,!1,25212,!1,25665,!1,26122,!1,26583,!1,27048,!1,27517,!1,27990,!1,28467,!1,28948,!1,29433,!1,29922,!1,30415,!1,30912,!1,31413,!1,31918,!0,32427,!0,32940,!0,33457,!0,33978,!0,34503,!1,35032,!1,35565,!0,36102,!0,36643,!0,37188,!0,37737,!0,38290,!1,38847,!0,39408,!0,39973,!0,40542,!0,41115,!0,41692,!0,42273,!0,42858,!0,43447,!0,44040,!0,23005,!0,23438,!0,23875,!0,24316,!0,24761,!0,25210,!1,25663,!1,26120,!1,26581,!1,27046,!1,27515,!1,27988,!1,28465,!1,28946,!1,29431,!1,29920,!1,30413,!1,30910,!1,31411,!1,31916,!0,32425,!0,32938,!0,33455,!0,33976,!0,34501,!1,35030,!1,35563,!1,36100,!0,36641,!0,37186,!0,37735,!0,38288,!0,38845,!1,39406,!1,39971,!1,40540,!1,41113,!0,41690,!0,42271,!0,42856,!0,43445,!0,44038,!0,44635,!0,23436,!0,23873,!0,24314,!0,24759,!0,25208,!0,25661,!1,26118,!1,26579,!1,27044,!1,27513,!1,27986,!1,28463,!1,28944,!1,29429,!1,29918,!1,30411,!1,30908,!1,31409,!1,31914,!1,32423,!0,32936,!0,33453,!0,33974,!0,34499,!0,35028,!0,35561,!1,36098,!1,36639,!0,37184,!1,37733,!0,38286,!0,38843,!1,39404,!1,39969,!1,40538,!1,41111,!1,41688,!0,42269,!0,42854,!0,43443,!0,44036,!0,44633,!0,45234,!0,23871,!0,24312,!0,24757,!0,25206,!0,25659,!0,26116,!1,26577,!1,27042,!1,27511,!1,27984,!1,28461,!1,28942,!1,29427,!1,29916,!1,30409,!1,30906,!1,31407,!0,31912,!1,32421,!0,32934,!0,33451,!1,33972,!0,34497,!1,35026,!0,35559,!0,36096,!1,36637,!1,37182,!0,37731,!0,38284,!0,38841,!0,39402,!1,39967,!1,40536,!1,41109,!1,41686,!0,42267,!0,42852,!0,43441,!0,44034,!0,44631,!0,45232,!0,45837,!0,24310,!0,24755,!0,25204,!0,25657,!0,26114,!0,26575,!1,27040,!1,27509,!1,27982,!1,28459,!1,28940,!1,29425,!1,29914,!1,30407,!1,30904,!1,31405,!0,31910,!0,32419,!0,32932,!1,33449,!0,33970,!0,34495,!0,35024,!1,35557,!1,36094,!0,36635,!1,37180,!0,37729,!1,38282,!1,38839,!0,39400,!1,39965,!1,40534,!1,41107,!1,41684,!1,42265,!0,42850,!0,43439,!0,44032,!0,44629,!0,45230,!0,45835,!0,46444,!0,24753,!0,25202,!0,25655,!0,26112,!0,26573,!0,27038,!1,27507,!1,27980,!1,28457,!1,28938,!1,29423,!1,29912,!1,30405,!1,30902,!1,31403,!1,31908,!1,32417,!0,32930,!0,33447,!1,33968,!0,34493,!0,35022,!0,35555,!0,36092,!0,36633,!0,37178,!1,37727,!0,38280,!0,38837,!0,39398,!0,39963,!1,40532,!1,41105,!1,41682,!1,42263,!1,42848,!0,43437,!0,44030,!0,44627,!0,45228,!0,45833,!0,46442,!0,47055,!0,25200,!0,25653,!0,26110,!0,26571,!0,27036,!0,27505,!0,27978,!1,28455,!1,28936,!1,29421,!1,29910,!1,30403,!1,30900,!1,31401,!1,31906,!0,32415,!0,32928,!1,33445,!0,33966,!0,34491,!0,35020,!0,35553,!0,36090,!0,36631,!0,37176,!0,37725,!0,38278,!0,38835,!0,39396,!0,39961,!1,40530,!1,41103,!1,41680,!1,42261,!1,42846,!1,43435,!0,44028,!0,44625,!0,45226,!0,45831,!0,46440,!0,47053,!0,47670,!0,25651,!0,26108,!0,26569,!0,27034,!0,27503,!0,27976,!0,28453,!1,28934,!1,29419,!1,29908,!1,30401,!1,30898,!1,31399,!1,31904,!1,32413,!0,32926,!0,33443,!1,33964,!0,34489,!0,35018,!0,35551,!0,36088,!0,36629,!0,37174,!0,37723,!0,38276,!0,38833,!1,39394,!1,39959,!0,40528,!1,41101,!1,41678,!1,42259,!1,42844,!1,43433,!1,44026,!0,44623,!0,45224,!0,45829,!0,46438,!0,47051,!0,47668,!0,48289,!0,26106,!0,26567,!0,27032,!0,27501,!0,27974,!1,28451,!0,28932,!1,29417,!1,29906,!1,30399,!1,30896,!1,31397,!1,31902,!1,32411,!1,32924,!0,33441,!0,33962,!0,34487,!0,35016,!0,35549,!0,36086,!0,36627,!0,37172,!0,37721,!0,38274,!0,38831,!0,39392,!0,39957,!0,40526,!0,41099,!1,41676,!1,42257,!1,42842,!1,43431,!1,44024,!1,44621,!1,45222,!0,45827,!0,46436,!0,47049,!0,47666,!0,48287,!0,48912,!0,26565,!0,27030,!0,27499,!0,27972,!0,28449,!1,28930,!0,29415,!1,29904,!1,30397,!1,30894,!1,31395,!1,31900,!1,32409,!1,32922,!0,33439,!0,33960,!1,34485,!0,35014,!0,35547,!0,36084,!0,36625,!0,37170,!0,37719,!0,38272,!0,38829,!0,39390,!0,39955,!1,40524,!1,41097,!0,41674,!0,42255,!1,42840,!1,43429,!1,44022,!1,44619,!1,45220,!1,45825,!0,46434,!0,47047,!0,47664,!0,48285,!0,48910,!0,49539,!0,27028,!0,27497,!0,27970,!0,28447,!0,28928,!1,29413,!1,29902,!1,30395,!1,30892,!1,31393,!0,31898,!0,32407,!0,32920,!0,33437,!1,33958,!1,34483,!0,35012,!0,35545,!0,36082,!0,36623,!0,37168,!0,37717,!0,38270,!0,38827,!0,39388,!0,39953,!0,40522,!1,41095,!1,41672,!0,42253,!0,42838,!1,43427,!1,44020,!1,44617,!1,45218,!1,45823,!1,46432,!1,47045,!0,47662,!0,48283,!0,48908,!0,49537,!0,50170,!0,27495,!0,27968,!0,28445,!0,28926,!0,29411,!1,29900,!1,30393,!1,30890,!1,31391,!1,31896,!0,32405,!0,32918,!0,33435,!0,33956,!1,34481,!0,35010,!0,35543,!0,36080,!0,36621,!0,37166,!0,37715,!0,38268,!0,38825,!0,39386,!0,39951,!0,40520,!0,41093,!0,41670,!1,42251,!1,42836,!1,43425,!1,44018,!1,44615,!1,45216,!1,45821,!1,46430,!1,47043,!1,47660,!0,48281,!0,48906,!0,49535,!0,50168,!0,50805,!0,27966,!0,28443,!0,28924,!0,29409,!0,29898,!0,30391,!1,30888,!1,31389,!1,31894,!1,32403,!0,32916,!0,33433,!0,33954,!0,34479,!1,35008,!0,35541,!0,36078,!0,36619,!0,37164,!0,37713,!0,38266,!0,38823,!0,39384,!0,39949,!1,40518,!0,41091,!0,41668,!0,42249,!1,42834,!0,43423,!0,44016,!0,44613,!1,45214,!1,45819,!1,46428,!1,47041,!1,47658,!1,48279,!1,48904,!0,49533,!0,50166,!0,50803,!0,51444,!0,28441,!0,28922,!0,29407,!0,29896,!0,30389,!0,30886,!1,31387,!1,31892,!1,32401,!1,32914,!0,33431,!0,33952,!0,34477,!0,35006,!0,35539,!0,36076,!0,36617,!0,37162,!0,37711,!0,38264,!0,38821,!0,39382,!0,39947,!0,40516,!0,41089,!0,41666,!0,42247,!1,42832,!1,43421,!1,44014,!0,44611,!0,45212,!1,45817,!1,46426,!1,47039,!1,47656,!1,48277,!0,48902,!0,49531,!0,50164,!0,50801,!0,51442,!0,52087,!0,28920,!0,29405,!0,29894,!0,30387,!0,30884,!1,31385,!0,31890,!1,32399,!1,32912,!1,33429,!0,33950,!0,34475,!0,35004,!1,35537,!0,36074,!0,36615,!0,37160,!0,37709,!0,38262,!0,38819,!0,39380,!0,39945,!0,40514,!0,41087,!0,41664,!0,42245,!0,42830,!0,43419,!0,44012,!1,44609,!0,45210,!0,45815,!0,46424,!0,47037,!1,47654,!1,48275,!0,48900,!0,49529,!0,50162,!0,50799,!0,51440,!0,52085,!0,52734,!0,29403,!0,29892,!0,30385,!0,30882,!0,31383,!0,31888,!0,32397,!1,32910,!1,33427,!1,33948,!0,34473,!0,35002,!0,35535,!0,36072,!0,36613,!0,37158,!0,37707,!0,38260,!0,38817,!0,39378,!0,39943,!0,40512,!0,41085,!0,41662,!0,42243,!0,42828,!0,43417,!0,44010,!1,44607,!0,45208,!0,45813,!0,46422,!0,47035,!0,47652,!0,48273,!0,48898,!0,49527,!0,50160,!0,50797,!0,51438,!0,52083,!0,52732,!0,53385,!0,29890,!0,30383,!0,30880,!0,31381,!0,31886,!0,32395,!0,32908,!1,33425,!1,33946,!1,34471,!1,35e3,!1,35533,!0,36070,!0,36611,!0,37156,!0,37705,!0,38258,!0,38815,!0,39376,!0,39941,!0,40510,!0,41083,!0,41660,!0,42241,!0,42826,!0,43415,!0,44008,!0,44605,!0,45206,!0,45811,!0,46420,!0,47033,!0,47650,!0,48271,!0,48896,!0,49525,!0,50158,!0,50795,!0,51436,!0,52081,!0,52730,!0,53383,!0,54040,!0,30381,!0,30878,!0,31379,!0,31884,!0,32393,!0,32906,!0,33423,!1,33944,!1,34469,!1,34998,!1,35531,!1,36068,!0,36609,!0,37154,!0,37703,!0,38256,!0,38813,!0,39374,!0,39939,!0,40508,!0,41081,!0,41658,!0,42239,!0,42824,!0,43413,!0,44006,!0,44603,!0,45204,!0,45809,!1,46418,!1,47031,!0,47648,!0,48269,!0,48894,!0,49523,!0,50156,!0,50793,!0,51434,!0,52079,!0,52728,!0,53381,!0,54038,!0,54699,!0,30876,!0,31377,!0,31882,!0,32391,!0,32904,!0,33421,!0,33942,!1,34467,!1,34996,!1,35529,!1,36066,!0,36607,!0,37152,!0,37701,!0,38254,!0,38811,!0,39372,!0,39937,!0,40506,!0,41079,!0,41656,!0,42237,!0,42822,!0,43411,!0,44004,!0,44601,!0,45202,!0,45807,!0,46416,!0,47029,!0,47646,!0,48267,!0,48892,!0,49521,!0,50154,!0,50791,!0,51432,!0,52077,!0,52726,!0,53379,!0,54036,!0,54697,!0,55362,!0,31375,!0,31880,!0,32389,!0,32902,!0,33419,!0,33940,!0,34465,!1,34994,!1,35527,!1,36064,!0,36605,!0,37150,!0,37699,!0,38252,!0,38809,!0,39370,!0,39935,!0,40504,!0,41077,!0,41654,!0,42235,!0,42820,!0,43409,!0,44002,!0,44599,!0,45200,!0,45805,!0,46414,!0,47027,!0,47644,!0,48265,!0,48890,!1,49519,!0,50152,!0,50789,!0,51430,!0,52075,!0,52724,!0,53377,!0,54034,!0,54695,!0,55360,!0,56029,!0,31878,!0,32387,!0,32900,!0,33417,!0,33938,!0,34463,!0,34992,!1,35525,!1,36062,!1,36603,!0,37148,!0,37697,!0,38250,!0,38807,!0,39368,!0,39933,!0,40502,!0,41075,!0,41652,!0,42233,!0,42818,!0,43407,!0,44e3,!0,44597,!0,45198,!1,45803,!0,46412,!0,47025,!0,47642,!0,48263,!0,48888,!0,49517,!0,50150,!0,50787,!0,51428,!0,52073,!0,52722,!0,53375,!0,54032,!1,54693,!0,55358,!1,56027,!0,56700,!0,32385,!0,32898,!0,33415,!0,33936,!0,34461,!0,34990,!0,35523,!1,36060,!1,36601,!1,37146,!0,37695,!0,38248,!0,38805,!0,39366,!0,39931,!0,40500,!0,41073,!0,41650,!0,42231,!0,42816,!0,43405,!0,43998,!0,44595,!0,45196,!0,45801,!0,46410,!0,47023,!0,47640,!0,48261,!0,48886,!0,49515,!0,50148,!0,50785,!0,51426,!0,52071,!0,52720,!0,53373,!0,54030,!1,54691,!0,55356,!0,56025,!0,56698,!0,57375,!0,32896,!0,33413,!0,33934,!0,34459,!0,34988,!0,35521,!0,36058,!1,36599,!1,37144,!0,37693,!0,38246,!0,38803,!0,39364,!0,39929,!0,40498,!0,41071,!0,41648,!0,42229,!0,42814,!0,43403,!0,43996,!0,44593,!0,45194,!0,45799,!0,46408,!0,47021,!0,47638,!0,48259,!0,48884,!0,49513,!0,50146,!0,50783,!0,51424,!0,52069,!0,52718,!0,53371,!0,54028,!0,54689,!0,55354,!0,56023,!0,56696,!0,57373,!0,58054,!0,33411,!0,33932,!0,34457,!0,34986,!0,35519,!0,36056,!0,36597,!1,37142,!1,37691,!0,38244,!0,38801,!0,39362,!0,39927,!0,40496,!0,41069,!0,41646,!0,42227,!0,42812,!0,43401,!0,43994,!0,44591,!0,45192,!0,45797,!0,46406,!0,47019,!0,47636,!0,48257,!0,48882,!1,49511,!0,50144,!0,50781,!1,51422,!0,52067,!0,52716,!0,53369,!0,54026,!0,54687,!1,55352,!0,56021,!0,56694,!0,57371,!0,58052,!0,58737,!0],A.aT("aE<d,G>"))
B.aq={}
B.Y=new A.aB(B.aq,[],A.aT("aB<bY,@>"))
B.A=new A.bU("tight")
B.a_=new A.bU("expanded")
B.a0=new A.bU("seekAndDestroy")
B.ar=new A.ah("call")
B.as=A.a5("iL")
B.at=A.a5("iY")
B.au=A.a5("iZ")
B.av=A.a5("j0")
B.aw=A.a5("j1")
B.ax=A.a5("j2")
B.ay=A.a5("j")
B.az=A.a5("jr")
B.aA=A.a5("js")
B.aB=A.a5("jt")
B.aC=A.a5("ju")
B.C=new A.f(0,0)
B.a1=new A.f(50,18)})();(function staticFields(){$.f4=null
$.U=A.l([],A.aT("r<j>"))
$.ht=null
$.ee=0
$.d_=A.km()
$.hi=null
$.hh=null
$.id=null
$.i7=null
$.ij=null
$.fs=null
$.fx=null
$.h5=null
$.ls=A.l([],A.aT("r<k<j>?>"))
$.bm=null
$.cp=null
$.cq=null
$.h0=!1
$.A=B.e
$.iI=A.l([],A.aT("r<b3>"))
$.hq=0
$.j9=A.aJ(t.N,t.L)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"l2","fC",()=>A.ib("_$dart_dartClosure"))
s($,"lf","io",()=>A.aj(A.eG({
toString:function(){return"$receiver$"}})))
s($,"lg","ip",()=>A.aj(A.eG({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"lh","iq",()=>A.aj(A.eG(null)))
s($,"li","ir",()=>A.aj(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ll","iu",()=>A.aj(A.eG(void 0)))
s($,"lm","iv",()=>A.aj(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lk","it",()=>A.aj(A.hE(null)))
s($,"lj","is",()=>A.aj(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"lo","ix",()=>A.aj(A.hE(void 0)))
s($,"ln","iw",()=>A.aj(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"lq","hc",()=>A.jw())
s($,"lv","fD",()=>A.h8(B.ay))
s($,"ld","hb",()=>{A.ji()
return $.ee})
s($,"lr","hd",()=>A.ib("_$dart_dartObject"))
s($,"lu","he",()=>function DartObject(a){this.o=a})
s($,"kZ","im",()=>{var q="Marines",p=null,o="Infantry",n=t.S,m=t.v
return A.iS(A.j6([49,A.ae(49,q,B.x,A.J(92,18)),50,A.ae(50,q,B.x,A.J(37,26)),51,A.ae(51,q,B.x,p),52,A.ae(52,o,B.w,p),53,A.ae(53,o,B.w,p),54,A.ae(54,o,B.w,p),55,A.ae(55,"Air Force",B.ac,p),56,A.ae(56,"Squad",B.R,A.J(77,17)),57,A.ae(57,"Squad",B.R,p),48,A.ae(48,"HQ",B.ad,A.J(39,13))],n,m),n,m)})
s($,"lA","iC",()=>{var q=A.jm(2014,9,1,0,0,0,0,0,!0)
if(q==null)q=864e14
if(q===864e14)A.ax(A.b_("(2014, 9, 1, 0, 0, 0, 0, 0)",null))
return new A.aC(q,0,!0)})
s($,"lw","iz",()=>A.dV("PubSub"))
r($,"lx","hf",()=>A.fN())
s($,"ly","iB",()=>A.fN())
r($,"lt","aY",()=>new A.f6())
s($,"lz","iA",()=>A.fN())
s($,"lp","iy",()=>{var q=null
return A.l([A.Z("Los Angeles",A.J(22,15),q),A.Z("New York",A.J(39,13),q),A.Z("Paris",A.J(66,12),q),A.Z("Moscow",A.J(76,10),q),A.Z("Beijing",A.J(109,13),q),A.Z("Delhi",A.J(92,18),q),A.Z("Jakarta",A.J(105,26),q),A.Z("Cairo",A.J(77,17),q),A.Z("Kinshasa",A.J(70,26),q),A.Z("Sao Paulo",A.J(49,31),q),A.Z("Quito",A.J(37,26),q),A.Z("Sydney",A.J(119,35),89)],A.aT("r<a9>"))})
s($,"l8","ha",()=>A.dV(""))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.Q,DOMError:J.Q,MediaError:J.Q,Navigator:J.Q,NavigatorConcurrentHardware:J.Q,NavigatorUserMediaError:J.Q,OverconstrainedError:J.Q,PositionError:J.Q,GeolocationPositionError:J.Q,ArrayBufferView:A.bR,DataView:A.cM,Float32Array:A.cN,Float64Array:A.cO,Int16Array:A.cP,Int32Array:A.cQ,Int8Array:A.cR,Uint16Array:A.cS,Uint32Array:A.cT,Uint8ClampedArray:A.bS,CanvasPixelArray:A.bS,Uint8Array:A.cU,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.ct,HTMLAreaElement:A.cu,Blob:A.az,File:A.az,HTMLCanvasElement:A.b1,CDATASection:A.a2,CharacterData:A.a2,Comment:A.a2,ProcessingInstruction:A.a2,Text:A.a2,CSSStyleDeclaration:A.bx,MSStyleCSSProperties:A.bx,CSS2Properties:A.bx,DOMException:A.dM,MathMLElement:A.b,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.cB,HTMLFormElement:A.cD,ImageData:A.bC,KeyboardEvent:A.aG,Document:A.y,DocumentFragment:A.y,HTMLDocument:A.y,ShadowRoot:A.y,XMLDocument:A.y,Attr:A.y,DocumentType:A.y,Node:A.y,HTMLSelectElement:A.d2,CompositionEvent:A.L,FocusEvent:A.L,MouseEvent:A.L,DragEvent:A.L,PointerEvent:A.L,TextEvent:A.L,TouchEvent:A.L,WheelEvent:A.L,UIEvent:A.L,Window:A.aL,DOMWindow:A.aL,DedicatedWorkerGlobalScope:A.ak,ServiceWorkerGlobalScope:A.ak,SharedWorkerGlobalScope:A.ak,WorkerGlobalScope:A.ak,IDBKeyRange:A.bJ})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:true,File:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,ImageData:true,KeyboardEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true})
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.ca.$nativeSuperclassTag="ArrayBufferView"
A.cb.$nativeSuperclassTag="ArrayBufferView"
A.bP.$nativeSuperclassTag="ArrayBufferView"
A.cc.$nativeSuperclassTag="ArrayBufferView"
A.cd.$nativeSuperclassTag="ArrayBufferView"
A.bQ.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.kR
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
