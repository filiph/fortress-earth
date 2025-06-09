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
if(a[b]!==s){A.nh(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.iE(b)
return new s(c,this)}:function(){if(s===null)s=A.iE(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.iE(a).prototype
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
iK(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hV(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.iH==null){A.n_()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.fT("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hv
if(o==null)o=$.hv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.n7(a)
if(p!=null)return p
if(typeof a=="function")return B.am
s=Object.getPrototypeOf(a)
if(s==null)return B.a3
if(s===Object.prototype)return B.a3
if(typeof q=="function"){o=$.hv
if(o==null)o=$.hv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.F,enumerable:false,writable:true,configurable:true})
return B.F}return B.F},
j3(a,b){if(a<0||a>4294967295)throw A.a(A.aB(a,0,4294967295,"length",null))
return J.kU(new Array(a),b)},
kU(a,b){var s=A.h(a,b.k("q<0>"))
s.$flags=1
return s},
kV(a,b){return J.iU(a,b)},
j4(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kW(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.j4(r))break;++b}return b},
kX(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.j4(q))break}return b},
ao(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ci.prototype
return J.dq.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.cj.prototype
if(typeof a=="boolean")return J.dp.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.j)return a
return J.hV(a)},
b_(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.j)return a
return J.hV(a)},
hU(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.j)return a
return J.hV(a)},
mS(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.bP.prototype
return a},
iF(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.j)return a
return J.hV(a)},
V(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ao(a).p(a,b)},
iT(a,b,c,d){return J.iF(a).bZ(a,b,c,d)},
ia(a,b,c,d){return J.iF(a).a1(a,b,c,d)},
iU(a,b){return J.mS(a).D(a,b)},
kt(a,b){return J.hU(a).O(a,b)},
aq(a){return J.ao(a).gm(a)},
b3(a){return J.hU(a).gv(a)},
d7(a){return J.b_(a).gl(a)},
ku(a){return J.ao(a).gA(a)},
kv(a,b,c){return J.hU(a).cq(a,b,c)},
kw(a,b){return J.ao(a).cs(a,b)},
eh(a,b,c,d){return J.iF(a).aN(a,b,c,d)},
b4(a){return J.ao(a).j(a)},
ch:function ch(){},
dp:function dp(){},
cj:function cj(){},
T:function T(){},
bg:function bg(){},
dF:function dF(){},
bP:function bP(){},
aw:function aw(){},
bC:function bC(){},
bD:function bD(){},
q:function q(a){this.$ti=a},
eZ:function eZ(a){this.$ti=a},
a2:function a2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
ci:function ci(){},
dq:function dq(){},
bd:function bd(){}},A={ii:function ii(){},
kY(a){return new A.cn("Field '"+a+"' has not been initialized.")},
aW(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ip(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
iD(a,b,c){return a},
iJ(a){var s,r
for(s=$.a0.length,r=0;r<s;++r)if(a===$.a0[r])return!0
return!1},
aQ(a,b,c){return new A.cc(a,b,c.k("cc<0>"))},
ig(){return new A.aV("No element")},
dN(a,b,c,d){if(c-b<=32)A.lk(a,b,c,d)
else A.lj(a,b,c,d)},
lk(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b_(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.H()
o=o>0}else o=!1
if(!o)break
n=p-1
r.i(a,p,r.h(a,n))
p=n}r.i(a,p,q)}},
lj(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=B.a.B(a5-a4+1,6),i=a4+j,h=a5-j,g=B.a.B(a4+a5,2),f=g-j,e=g+j,d=J.b_(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.H()
if(a2>0){s=a1
a1=a0
a0=s}d.i(a3,i,c)
d.i(a3,g,a)
d.i(a3,h,a1)
d.i(a3,f,d.h(a3,a4))
d.i(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.V(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.h(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.i(a3,o,d.h(a3,r))
d.i(a3,r,n)}++r}else for(;!0;){m=a6.$2(d.h(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.i(a3,o,d.h(a3,r))
k=r+1
d.i(a3,r,d.h(a3,q))
d.i(a3,q,n)
q=l
r=k
break}else{d.i(a3,o,d.h(a3,q))
d.i(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.i(a3,o,d.h(a3,r))
d.i(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.i(a3,o,d.h(a3,r))
k=r+1
d.i(a3,r,d.h(a3,q))
d.i(a3,q,n)
r=k}else{d.i(a3,o,d.h(a3,q))
d.i(a3,q,n)}q=l
break}}a2=r-1
d.i(a3,a4,d.h(a3,a2))
d.i(a3,a2,b)
a2=q+1
d.i(a3,a5,d.h(a3,a2))
d.i(a3,a2,a0)
A.dN(a3,a4,r-2,a6)
A.dN(a3,q+2,a5,a6)
if(p)return
if(r<i&&q>h){for(;J.V(a6.$2(d.h(a3,r),b),0);)++r
for(;J.V(a6.$2(d.h(a3,q),a0),0);)--q
for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.i(a3,o,d.h(a3,r))
d.i(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.i(a3,o,d.h(a3,r))
k=r+1
d.i(a3,r,d.h(a3,q))
d.i(a3,q,n)
r=k}else{d.i(a3,o,d.h(a3,q))
d.i(a3,q,n)}q=l
break}}A.dN(a3,r,q,a6)}else A.dN(a3,r,q,a6)},
cn:function cn(a){this.a=a},
i3:function i3(){},
fu:function fu(){},
aP:function aP(){},
aS:function aS(){},
a4:function a4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
y:function y(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
dV:function dV(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
di:function di(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.$ti=b},
dW:function dW(a,b){this.a=a
this.$ti=b},
bJ:function bJ(a,b){this.a=a
this.$ti=b},
dD:function dD(a){this.a=a
this.b=null},
cd:function cd(){},
dS:function dS(){},
bQ:function bQ(){},
aC:function aC(a){this.a=a},
kH(a,b,c){var s,r,q,p,o,n,m=A.I(a),l=A.bE(new A.a9(a,m.k("a9<1>")),!0,b),k=l.length,j=0
while(!0){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.a_)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.b8(q,A.bE(new A.aa(a,m.k("aa<2>")),!0,c),b.k("@<0>").S(c).k("b8<1,2>"))
n.$keys=l
return n}return new A.b7(A.kZ(a,b,c),b.k("@<0>").S(c).k("b7<1,2>"))},
ka(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
o4(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b4(a)
return s},
bL(a){var s,r=$.jb
if(r==null)r=$.jb=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
fo(a){var s,r,q,p
if(a instanceof A.j)return A.Z(A.c5(a),null)
s=J.ao(a)
if(s===B.al||s===B.an||t.o.b(a)){r=B.R(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.Z(A.c5(a),null)},
lc(a){if(a==null||typeof a=="number"||A.ef(a))return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aO)return a.j(0)
if(a instanceof A.cU)return a.eT(!0)
return"Instance of '"+A.fo(a)+"'"},
l9(){return Date.now()},
lb(){var s,r
if($.fp!==0)return
$.fp=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.fp=1e6
$.dH=new A.fn(r)},
ja(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ld(a){var s,r,q,p=A.h([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a_)(a),++r){q=a[r]
if(!A.hM(q))throw A.a(A.eg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.a.ah(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.a(A.eg(q))}return A.ja(p)},
ji(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.hM(q))throw A.a(A.eg(q))
if(q<0)throw A.a(A.eg(q))
if(q>65535)return A.ld(a)}return A.ja(a)},
le(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
il(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.ah(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.aB(a,0,1114111,null,null))},
lg(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(a<100){a+=400
p-=4800}s=B.a.aS(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.a.B(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
U(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
dG(a){return a.c?A.U(a).getUTCFullYear()+0:A.U(a).getFullYear()+0},
jg(a){return a.c?A.U(a).getUTCMonth()+1:A.U(a).getMonth()+1},
jc(a){return a.c?A.U(a).getUTCDate()+0:A.U(a).getDate()+0},
jd(a){return a.c?A.U(a).getUTCHours()+0:A.U(a).getHours()+0},
jf(a){return a.c?A.U(a).getUTCMinutes()+0:A.U(a).getMinutes()+0},
jh(a){return a.c?A.U(a).getUTCSeconds()+0:A.U(a).getSeconds()+0},
je(a){return a.c?A.U(a).getUTCMilliseconds()+0:A.U(a).getMilliseconds()+0},
aT(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.b.a0(s,b)
q.b=""
if(c!=null&&c.a!==0)c.G(0,new A.fm(q,r,s))
return J.kw(a,new A.eX(B.ay,0,s,r,0))},
l8(a,b,c){var s,r,q=c==null||c.a===0
if(q){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.l7(a,b,c)},
l7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b.length,e=a.$R
if(f<e)return A.aT(a,b,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.ao(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.aT(a,b,c)
if(f===e)return o.apply(a,b)
return A.aT(a,b,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.aT(a,b,c)
n=e+q.length
if(f>n)return A.aT(a,b,null)
if(f<n){m=q.slice(f-e)
l=A.aj(b,t.z)
B.b.a0(l,m)}else l=b
return o.apply(a,l)}else{if(f>e)return A.aT(a,b,c)
l=A.aj(b,t.z)
k=Object.keys(q)
if(c==null)for(r=k.length,j=0;j<k.length;k.length===r||(0,A.a_)(k),++j){i=q[k[j]]
if(B.T===i)return A.aT(a,l,c)
l.push(i)}else{for(r=k.length,h=0,j=0;j<k.length;k.length===r||(0,A.a_)(k),++j){g=k[j]
if(c.ak(g)){++h
l.push(c.h(0,g))}else{i=q[g]
if(B.T===i)return A.aT(a,l,c)
l.push(i)}}if(h!==c.a)return A.aT(a,l,c)}return o.apply(a,l)}},
la(a){var s=a.$thrownJsError
if(s==null)return null
return A.aM(s)},
lf(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.M(a,s)
a.$thrownJsError=s
s.stack=""}},
f(a,b){if(a==null)J.d7(a)
throw A.a(A.hS(a,b))},
hS(a,b){var s,r="index"
if(!A.hM(b))return new A.ae(!0,b,r,null)
s=J.d7(a)
if(b<0||b>=s)return A.j2(b,s,a,r)
return A.fr(b,r)},
eg(a){return new A.ae(!0,a,null,null)},
a(a){return A.M(a,new Error())},
M(a,b){var s
if(a==null)a=new A.aD()
b.dartException=a
s=A.ni
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ni(){return J.b4(this.dartException)},
b1(a,b){throw A.M(a,b==null?new Error():b)},
ap(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.b1(A.m9(a,b,c),s)},
m9(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cE("'"+s+"': Cannot "+o+" "+l+k+n)},
a_(a){throw A.a(A.S(a))},
aE(a){var s,r,q,p,o,n
a=A.nc(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.h([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.fQ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
fR(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jo(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ij(a,b){var s=b==null,r=s?null:b.method
return new A.dr(a,r,s?null:b.receiver)},
aN(a){if(a==null)return new A.fg(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bu(a,a.dartException)
return A.mH(a)},
bu(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.ah(r,16)&8191)===10)switch(q){case 438:return A.bu(a,A.ij(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.bu(a,new A.cv())}}if(a instanceof TypeError){p=$.kc()
o=$.kd()
n=$.ke()
m=$.kf()
l=$.ki()
k=$.kj()
j=$.kh()
$.kg()
i=$.kl()
h=$.kk()
g=p.L(s)
if(g!=null)return A.bu(a,A.ij(s,g))
else{g=o.L(s)
if(g!=null){g.method="call"
return A.bu(a,A.ij(s,g))}else if(n.L(s)!=null||m.L(s)!=null||l.L(s)!=null||k.L(s)!=null||j.L(s)!=null||m.L(s)!=null||i.L(s)!=null||h.L(s)!=null)return A.bu(a,new A.cv())}return A.bu(a,new A.dR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cy()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bu(a,new A.ae(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cy()
return a},
aM(a){var s
if(a==null)return new A.cW(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cW(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
iL(a){if(a==null)return J.aq(a)
if(typeof a=="object")return A.bL(a)
return J.aq(a)},
mN(a){if(typeof a=="number")return B.d.gm(a)
if(a instanceof A.ec)return A.bL(a)
if(a instanceof A.cU)return a.gm(a)
if(a instanceof A.aC)return a.gm(0)
return A.iL(a)},
k0(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
ml(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.h9("Unsupported number of arguments for wrapped closure"))},
aK(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.mO(a,b)
a.$identity=s
return s},
mO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ml)},
kG(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dO().constructor.prototype):Object.create(new A.bv(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.iZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.kC(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.iZ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
kC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ky)}throw A.a("Error in functionType of tearoff")},
kD(a,b,c,d){var s=A.iY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
iZ(a,b,c,d){if(c)return A.kF(a,b,d)
return A.kD(b.length,d,a,b)},
kE(a,b,c,d){var s=A.iY,r=A.kz
switch(b?-1:a){case 0:throw A.a(new A.dK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
kF(a,b,c){var s,r
if($.iW==null)$.iW=A.iV("interceptor")
if($.iX==null)$.iX=A.iV("receiver")
s=b.length
r=A.kE(s,c,a,b)
return r},
iE(a){return A.kG(a)},
ky(a,b){return A.d2(v.typeUniverse,A.c5(a.a),b)},
iY(a){return a.a},
kz(a){return a.b},
iV(a){var s,r,q,p=new A.bv("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.b5("Field name "+a+" not found.",null))},
k1(a){return v.getIsolateTag(a)},
o3(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n7(a){var s,r,q,p,o,n=$.k2.$1(a),m=$.hT[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.jY.$2(a,n)
if(q!=null){m=$.hT[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.i1(s)
$.hT[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.i_[n]=s
return s}if(p==="-"){o=A.i1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.k6(a,s)
if(p==="*")throw A.a(A.fT(n))
if(v.leafTags[n]===true){o=A.i1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.k6(a,s)},
k6(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.iK(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
i1(a){return J.iK(a,!1,null,!!a.$iX)},
na(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.i1(s)
else return J.iK(s,c,null,null)},
n_(){if(!0===$.iH)return
$.iH=!0
A.n0()},
n0(){var s,r,q,p,o,n,m,l
$.hT=Object.create(null)
$.i_=Object.create(null)
A.mZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.k7.$1(o)
if(n!=null){m=A.na(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mZ(){var s,r,q,p,o,n,m=B.a9()
m=A.c4(B.aa,A.c4(B.ab,A.c4(B.S,A.c4(B.S,A.c4(B.ac,A.c4(B.ad,A.c4(B.ae(B.R),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.k2=new A.hX(p)
$.jY=new A.hY(o)
$.k7=new A.hZ(n)},
c4(a,b){return a(b)||b},
mP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
j5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.ba("Illegal RegExp pattern ("+String(o)+")",a,null))},
ne(a,b,c){var s=a.indexOf(b,c)
return s>=0},
mQ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nc(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nf(a,b,c){var s,r=b.gdv()
r.lastIndex=0
s=a.replace(r,A.mQ(c))
return s},
b7:function b7(a,b){this.a=a
this.$ti=b},
bx:function bx(){},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
bo:function bo(a,b){this.a=a
this.$ti=b},
e6:function e6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bc:function bc(a,b){this.a=a
this.$ti=b},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
fn:function fn(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cv:function cv(){},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a},
fg:function fg(a){this.a=a},
cW:function cW(a){this.a=a
this.b=null},
aO:function aO(){},
de:function de(){},
df:function df(){},
dP:function dP(){},
dO:function dO(){},
bv:function bv(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
hz:function hz(){},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f_:function f_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a9:function a9(a,b){this.a=a
this.$ti=b},
co:function co(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ck:function ck(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
cU:function cU(){},
eY:function eY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a){this.b=a},
mb(a){return a},
l4(a){return new Uint8Array(a)},
aI(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.hS(b,a))},
dt:function dt(){},
ct:function ct(){},
hG:function hG(){},
du:function du(){},
bI:function bI(){},
cr:function cr(){},
cs:function cs(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
cu:function cu(){},
bj:function bj(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
io(a,b){var s=b.c
return s==null?b.c=A.d0(a,"aR",[b.x]):s},
jl(a){var s=a.w
if(s===6||s===7)return A.jl(a.x)
return s===11||s===12},
li(a){return a.as},
aL(a){return A.hF(v.typeUniverse,a,!1)},
bq(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bq(a1,s,a3,a4)
if(r===s)return a2
return A.jA(a1,r,!0)
case 7:s=a2.x
r=A.bq(a1,s,a3,a4)
if(r===s)return a2
return A.jz(a1,r,!0)
case 8:q=a2.y
p=A.c3(a1,q,a3,a4)
if(p===q)return a2
return A.d0(a1,a2.x,p)
case 9:o=a2.x
n=A.bq(a1,o,a3,a4)
m=a2.y
l=A.c3(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.iu(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.c3(a1,j,a3,a4)
if(i===j)return a2
return A.jB(a1,k,i)
case 11:h=a2.x
g=A.bq(a1,h,a3,a4)
f=a2.y
e=A.mE(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.jy(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.c3(a1,d,a3,a4)
o=a2.x
n=A.bq(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.iv(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.dc("Attempted to substitute unexpected RTI kind "+a0))}},
c3(a,b,c,d){var s,r,q,p,o=b.length,n=A.hH(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bq(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
mF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hH(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bq(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
mE(a,b,c,d){var s,r=b.a,q=A.c3(a,r,c,d),p=b.b,o=A.c3(a,p,c,d),n=b.c,m=A.mF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.e3()
s.a=q
s.b=o
s.c=m
return s},
h(a,b){a[v.arrayRti]=b
return a},
k_(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.mU(s)
return a.$S()}return null},
n1(a,b){var s
if(A.jl(b))if(a instanceof A.aO){s=A.k_(a)
if(s!=null)return s}return A.c5(a)},
c5(a){if(a instanceof A.j)return A.I(a)
if(Array.isArray(a))return A.x(a)
return A.iz(J.ao(a))},
x(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
I(a){var s=a.$ti
return s!=null?s:A.iz(a)},
iz(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mi(a,s)},
mi(a,b){var s=a instanceof A.aO?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.lV(v.typeUniverse,s.name)
b.$ccache=r
return r},
mU(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hF(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hW(a){return A.br(A.I(a))},
iC(a){var s
if(a instanceof A.cU)return A.mR(a.$r,a.eR())
s=a instanceof A.aO?A.k_(a):null
if(s!=null)return s
if(t.dm.b(a))return J.ku(a).a
if(Array.isArray(a))return A.x(a)
return A.c5(a)},
br(a){var s=a.r
return s==null?a.r=new A.ec(a):s},
mR(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.f(q,0)
s=A.d2(v.typeUniverse,A.iC(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.jC(v.typeUniverse,s,A.iC(q[r]))}return A.d2(v.typeUniverse,s,a)},
ad(a){return A.br(A.hF(v.typeUniverse,a,!1))},
mh(a){var s,r,q,p,o=this
if(o===t.K)return A.aJ(o,a,A.mq)
if(A.bs(o))return A.aJ(o,a,A.mu)
s=o.w
if(s===6)return A.aJ(o,a,A.mf)
if(s===1)return A.aJ(o,a,A.jN)
if(s===7)return A.aJ(o,a,A.mm)
if(o===t.S)r=A.hM
else if(o===t.i||o===t.H)r=A.mp
else if(o===t.N)r=A.ms
else r=o===t.y?A.ef:null
if(r!=null)return A.aJ(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.bs)){o.f="$i"+q
if(q==="p")return A.aJ(o,a,A.mo)
return A.aJ(o,a,A.mt)}}else if(s===10){p=A.mP(o.x,o.y)
return A.aJ(o,a,p==null?A.jN:p)}return A.aJ(o,a,A.md)},
aJ(a,b,c){a.b=c
return a.b(b)},
mg(a){var s=this,r=A.mc
if(A.bs(s))r=A.m6
else if(s===t.K)r=A.m4
else if(A.c6(s))r=A.me
if(s===t.S)r=A.m0
else if(s===t.I)r=A.m1
else if(s===t.N)r=A.m5
else if(s===t.dk)r=A.jF
else if(s===t.y)r=A.lX
else if(s===t.fQ)r=A.lY
else if(s===t.H)r=A.m2
else if(s===t.cg)r=A.m3
else if(s===t.i)r=A.lZ
else if(s===t.cD)r=A.m_
s.a=r
return s.a(a)},
md(a){var s=this
if(a==null)return A.c6(s)
return A.n4(v.typeUniverse,A.n1(a,s),s)},
mf(a){if(a==null)return!0
return this.x.b(a)},
mt(a){var s,r=this
if(a==null)return A.c6(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.ao(a)[s]},
mo(a){var s,r=this
if(a==null)return A.c6(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.ao(a)[s]},
mc(a){var s=this
if(a==null){if(A.c6(s))return a}else if(s.b(a))return a
throw A.M(A.jH(a,s),new Error())},
me(a){var s=this
if(a==null||s.b(a))return a
throw A.M(A.jH(a,s),new Error())},
jH(a,b){return new A.cZ("TypeError: "+A.jr(a,A.Z(b,null)))},
jr(a,b){return A.bz(a)+": type '"+A.Z(A.iC(a),null)+"' is not a subtype of type '"+b+"'"},
an(a,b){return new A.cZ("TypeError: "+A.jr(a,b))},
mm(a){var s=this
return s.x.b(a)||A.io(v.typeUniverse,s).b(a)},
mq(a){return a!=null},
m4(a){if(a!=null)return a
throw A.M(A.an(a,"Object"),new Error())},
mu(a){return!0},
m6(a){return a},
jN(a){return!1},
ef(a){return!0===a||!1===a},
lX(a){if(!0===a)return!0
if(!1===a)return!1
throw A.M(A.an(a,"bool"),new Error())},
lY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.M(A.an(a,"bool?"),new Error())},
lZ(a){if(typeof a=="number")return a
throw A.M(A.an(a,"double"),new Error())},
m_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.M(A.an(a,"double?"),new Error())},
hM(a){return typeof a=="number"&&Math.floor(a)===a},
m0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.M(A.an(a,"int"),new Error())},
m1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.M(A.an(a,"int?"),new Error())},
mp(a){return typeof a=="number"},
m2(a){if(typeof a=="number")return a
throw A.M(A.an(a,"num"),new Error())},
m3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.M(A.an(a,"num?"),new Error())},
ms(a){return typeof a=="string"},
m5(a){if(typeof a=="string")return a
throw A.M(A.an(a,"String"),new Error())},
jF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.M(A.an(a,"String?"),new Error())},
jS(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.Z(a[q],b)
return s},
mz(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.jS(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.Z(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
jI(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.h([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.f(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.Z(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.Z(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.Z(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.Z(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.Z(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
Z(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.Z(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.Z(a.x,b)+">"
if(l===8){p=A.mG(a.x)
o=a.y
return o.length>0?p+("<"+A.jS(o,b)+">"):p}if(l===10)return A.mz(a,b)
if(l===11)return A.jI(a,b,null)
if(l===12)return A.jI(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
mG(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
lW(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hF(a,b,!1)
else if(typeof m=="number"){s=m
r=A.d1(a,5,"#")
q=A.hH(s)
for(p=0;p<s;++p)q[p]=r
o=A.d0(a,b,q)
n[b]=o
return o}else return m},
lU(a,b){return A.jD(a.tR,b)},
lT(a,b){return A.jD(a.eT,b)},
hF(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.jv(A.jt(a,null,b,!1))
r.set(b,s)
return s},
d2(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.jv(A.jt(a,b,c,!0))
q.set(c,r)
return r},
jC(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.iu(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
aZ(a,b){b.a=A.mg
b.b=A.mh
return b},
d1(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ab(null,null)
s.w=b
s.as=c
r=A.aZ(a,s)
a.eC.set(c,r)
return r},
jA(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.lR(a,b,r,c)
a.eC.set(r,s)
return s},
lR(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bs(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.c6(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.ab(null,null)
q.w=6
q.x=b
q.as=c
return A.aZ(a,q)},
jz(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.lP(a,b,r,c)
a.eC.set(r,s)
return s},
lP(a,b,c,d){var s,r
if(d){s=b.w
if(A.bs(b)||b===t.K)return b
else if(s===1)return A.d0(a,"aR",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.ab(null,null)
r.w=7
r.x=b
r.as=c
return A.aZ(a,r)},
lS(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ab(null,null)
s.w=13
s.x=b
s.as=q
r=A.aZ(a,s)
a.eC.set(q,r)
return r},
d_(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
lO(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
d0(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.d_(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ab(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.aZ(a,r)
a.eC.set(p,q)
return q},
iu(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.d_(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ab(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.aZ(a,o)
a.eC.set(q,n)
return n},
jB(a,b,c){var s,r,q="+"+(b+"("+A.d_(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ab(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.aZ(a,s)
a.eC.set(q,r)
return r},
jy(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.d_(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.d_(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.lO(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ab(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.aZ(a,p)
a.eC.set(r,o)
return o},
iv(a,b,c,d){var s,r=b.as+("<"+A.d_(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.lQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
lQ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hH(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bq(a,b,r,0)
m=A.c3(a,c,r,0)
return A.iv(a,n,m,c!==m)}}l=new A.ab(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.aZ(a,l)},
jt(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jv(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.lI(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ju(a,r,l,k,!1)
else if(q===46)r=A.ju(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bp(a.u,a.e,k.pop()))
break
case 94:k.push(A.lS(a.u,k.pop()))
break
case 35:k.push(A.d1(a.u,5,"#"))
break
case 64:k.push(A.d1(a.u,2,"@"))
break
case 126:k.push(A.d1(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.lK(a,k)
break
case 38:A.lJ(a,k)
break
case 63:p=a.u
k.push(A.jA(p,A.bp(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.jz(p,A.bp(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.lH(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.jw(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.lM(a.u,a.e,o)
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
return A.bp(a.u,a.e,m)},
lI(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ju(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.lW(s,o.x)[p]
if(n==null)A.b1('No "'+p+'" in "'+A.li(o)+'"')
d.push(A.d2(s,o,n))}else d.push(p)
return m},
lK(a,b){var s,r=a.u,q=A.js(a,b),p=b.pop()
if(typeof p=="string")b.push(A.d0(r,p,q))
else{s=A.bp(r,a.e,p)
switch(s.w){case 11:b.push(A.iv(r,s,q,a.n))
break
default:b.push(A.iu(r,s,q))
break}}},
lH(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.js(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bp(p,a.e,o)
q=new A.e3()
q.a=s
q.b=n
q.c=m
b.push(A.jy(p,r,q))
return
case-4:b.push(A.jB(p,b.pop(),s))
return
default:throw A.a(A.dc("Unexpected state under `()`: "+A.n(o)))}},
lJ(a,b){var s=b.pop()
if(0===s){b.push(A.d1(a.u,1,"0&"))
return}if(1===s){b.push(A.d1(a.u,4,"1&"))
return}throw A.a(A.dc("Unexpected extended operation "+A.n(s)))},
js(a,b){var s=b.splice(a.p)
A.jw(a.u,a.e,s)
a.p=b.pop()
return s},
bp(a,b,c){if(typeof c=="string")return A.d0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.lL(a,b,c)}else return c},
jw(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bp(a,b,c[s])},
lM(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bp(a,b,c[s])},
lL(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.dc("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.dc("Bad index "+c+" for "+b.j(0)))},
n4(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.K(a,b,null,c,null)
r.set(c,s)}return s},
K(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bs(d))return!0
s=b.w
if(s===4)return!0
if(A.bs(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.K(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.K(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.K(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.K(a,b.x,c,d,e))return!1
return A.K(a,A.io(a,b),c,d,e)}if(s===6)return A.K(a,p,c,d,e)&&A.K(a,b.x,c,d,e)
if(q===7){if(A.K(a,b,c,d.x,e))return!0
return A.K(a,b,c,A.io(a,d),e)}if(q===6)return A.K(a,b,c,p,e)||A.K(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.R)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.K(a,j,c,i,e)||!A.K(a,i,e,j,c))return!1}return A.jM(a,b.x,c,d.x,e)}if(q===11){if(b===t.R)return!0
if(p)return!1
return A.jM(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.mn(a,b,c,d,e)}if(o&&q===10)return A.mr(a,b,c,d,e)
return!1},
jM(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.K(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.K(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.K(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.K(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.K(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mn(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.d2(a,b,r[o])
return A.jE(a,p,null,c,d.y,e)}return A.jE(a,b.y,null,c,d.y,e)},
jE(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.K(a,b[s],d,e[s],f))return!1
return!0},
mr(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.K(a,r[s],c,q[s],e))return!1
return!0},
c6(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.bs(a))if(s!==6)r=s===7&&A.c6(a.x)
return r},
bs(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
jD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hH(a){return a>0?new Array(a):v.typeUniverse.sEA},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
e3:function e3(){this.c=this.b=this.a=null},
ec:function ec(a){this.a=a},
e2:function e2(){},
cZ:function cZ(a){this.a=a},
ls(){var s,r,q
if(self.scheduleImmediate!=null)return A.mI()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aK(new A.h1(s),1)).observe(r,{childList:true})
return new A.h0(s,r,q)}else if(self.setImmediate!=null)return A.mJ()
return A.mK()},
lt(a){self.scheduleImmediate(A.aK(new A.h2(a),0))},
lu(a){self.setImmediate(A.aK(new A.h3(a),0))},
lv(a){A.iq(B.D,a)},
iq(a,b){var s=B.a.B(a.a,1000)
return A.lN(s<0?0:s,b)},
lN(a,b){var s=new A.eb()
s.cW(a,b)
return s},
jx(a,b,c){return 0},
ic(a){var s
if(t.C.b(a)){s=a.gab()
if(s!=null)return s}return B.o},
j0(a,b,c){var s=new A.C($.r,c.k("C<0>"))
A.bl(a,new A.ez(b,s,c))
return s},
jL(a,b){if($.r===B.e)return null
return null},
mj(a,b){if($.r!==B.e)A.jL(a,b)
if(t.C.b(a)){b=a.gab()
if(b==null){A.lf(a,B.o)
b=B.o}}else b=B.o
return new A.a7(a,b)},
he(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.jm()
b.bI(new A.a7(new A.ae(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.bX(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.ag()
b.az(p.a)
A.bn(b,q)
return}b.a^=2
A.c2(null,null,b.b,new A.hf(p,b))},
bn(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.d6(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.bn(g.a,f)
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
if(r){A.d6(m.a,m.b)
return}j=$.r
if(j!==k)$.r=k
else j=null
f=f.c
if((f&15)===8)new A.hj(s,g,p).$0()
else if(q){if((f&1)!==0)new A.hi(s,m).$0()}else if((f&2)!==0)new A.hh(g,s).$0()
if(j!=null)$.r=j
f=s.c
if(f instanceof A.C){r=s.a.$ti
r=r.k("aR<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.aD(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.he(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.aD(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
jO(a,b){if(t.Q.b(a))return b.cz(a)
if(t.x.b(a))return a
throw A.a(A.ib(a,"onError",u.c))},
mx(){var s,r
for(s=$.c1;s!=null;s=$.c1){$.d5=null
r=s.b
$.c1=r
if(r==null)$.d4=null
s.a.$0()}},
mD(){$.iA=!0
try{A.mx()}finally{$.d5=null
$.iA=!1
if($.c1!=null)$.iP().$1(A.jZ())}},
jU(a){var s=new A.dY(a),r=$.d4
if(r==null){$.c1=$.d4=s
if(!$.iA)$.iP().$1(A.jZ())}else $.d4=r.b=s},
mB(a){var s,r,q,p=$.c1
if(p==null){A.jU(a)
$.d5=$.d4
return}s=new A.dY(a)
r=$.d5
if(r==null){s.b=p
$.c1=$.d5=s}else{q=r.b
s.b=q
$.d5=r.b=s
if(q==null)$.d4=s}},
k8(a){var s=null,r=$.r
if(B.e===r){A.c2(s,s,B.e,a)
return}A.c2(s,s,r,r.bf(a))},
jT(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.aN(q)
r=A.aM(q)
A.d6(s,r)}},
lz(a,b){if(b==null)b=A.mL()
if(t.da.b(b))return a.cz(b)
if(t.d5.b(b))return b
throw A.a(A.b5("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
my(a,b){A.d6(a,b)},
bl(a,b){var s=$.r
if(s===B.e)return A.iq(a,b)
return A.iq(a,s.bf(b))},
d6(a,b){A.mB(new A.hN(a,b))},
jQ(a,b,c,d){var s,r=$.r
if(r===c)return d.$0()
$.r=c
s=r
try{r=d.$0()
return r}finally{$.r=s}},
jR(a,b,c,d,e){var s,r=$.r
if(r===c)return d.$1(e)
$.r=c
s=r
try{r=d.$1(e)
return r}finally{$.r=s}},
mA(a,b,c,d,e,f){var s,r=$.r
if(r===c)return d.$2(e,f)
$.r=c
s=r
try{r=d.$2(e,f)
return r}finally{$.r=s}},
c2(a,b,c,d){if(B.e!==c)d=c.bf(d)
A.jU(d)},
h1:function h1(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
eb:function eb(){this.b=null},
hE:function hE(a,b){this.a=a
this.b=b},
c0:function c0(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
c_:function c_(a,b){this.a=a
this.$ti=b},
a7:function a7(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.$ti=b},
bU:function bU(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bT:function bT(){},
cY:function cY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
hD:function hD(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(){},
aH:function aH(a,b){this.a=a
this.$ti=b},
bW:function bW(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
hb:function hb(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a
this.b=null},
bN:function bN(){},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
cI:function cI(){},
cJ:function cJ(){},
aY:function aY(){},
cX:function cX(){},
e0:function e0(){},
e_:function e_(a){this.b=a
this.a=null},
e9:function e9(){this.a=0
this.c=this.b=null},
hy:function hy(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=1
this.b=a
this.c=null},
hI:function hI(){},
hN:function hN(a,b){this.a=a
this.b=b},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
j7(a,b){return new A.Y(a.k("@<0>").S(b).k("Y<1,2>"))},
f0(a,b,c){return A.k0(a,new A.Y(b.k("@<0>").S(c).k("Y<1,2>")))},
a3(a,b){return new A.Y(a.k("@<0>").S(b).k("Y<1,2>"))},
l_(a){return new A.cP(a.k("cP<0>"))},
it(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kZ(a,b,c){var s=A.j7(b,c)
a.G(0,new A.f1(s,b,c))
return s},
l0(a,b){var s=t.c
return J.iU(s.a(a),s.a(b))},
f6(a){var s,r
if(A.iJ(a))return"{...}"
s=new A.cA("")
try{r={}
$.a0.push(a)
s.a+="{"
r.a=!0
a.G(0,new A.f7(r,s))
s.a+="}"}finally{if(0>=$.a0.length)return A.f($.a0,-1)
$.a0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
l2(a,b,c,d){var s,r
for(s=0;s<12;++s){r=b[s]
a.i(0,c.$1(r),A.l3(r))}},
l3(a){return a},
cP:function cP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hw:function hw(a){this.a=a
this.b=null},
e7:function e7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bR:function bR(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
bG:function bG(){},
f7:function f7(a,b){this.a=a
this.b=b},
ed:function ed(){},
cq:function cq(){},
cD:function cD(){},
cx:function cx(){},
cV:function cV(){},
d3:function d3(){},
ly(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.a.ah(a1,2),f=a1&3,e=$.ko()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.f(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.f(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.ap(d)
m=d.length
if(!(a0<m))return A.f(d,a0)
d[a0]=g>>>16&255
a0=k+1
if(!(k<m))return A.f(d,k)
d[k]=g>>>8&255
k=a0+1
if(!(a0<m))return A.f(d,a0)
d[a0]=g&255
a0=k
g=0}continue}else if(l===-1&&f>1){if(o>127)break
if(f===3){if((g&3)!==0)throw A.a(A.ba(i,a,p))
k=a0+1
q&2&&A.ap(d)
s=d.length
if(!(a0<s))return A.f(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.f(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.a(A.ba(i,a,p))
q&2&&A.ap(d)
if(!(a0<d.length))return A.f(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.jp(a,p+1,c,-j-1)}throw A.a(A.ba(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.f(a,p)
if(a.charCodeAt(p)>127)break}throw A.a(A.ba(h,a,p))},
lw(a,b,c,d){var s=A.lx(a,b,c),r=(d&3)+(s-b),q=B.a.ah(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.kn()},
lx(a,b,c){var s,r=a.length,q=c,p=q,o=0
while(!0){if(!(p>b&&o<2))break
c$0:{--p
if(!(p>=0&&p<r))return A.f(a,p)
s=a.charCodeAt(p)
if(s===61){++o
q=p
break c$0}if((s|32)===100){if(p===b)break;--p
if(!(p>=0&&p<r))return A.f(a,p)
s=a.charCodeAt(p)}if(s===51){if(p===b)break;--p
if(!(p>=0&&p<r))return A.f(a,p)
s=a.charCodeAt(p)}if(s===37){++o
q=p
break c$0}break}}return q},
jp(a,b,c,d){var s,r,q
if(b===c)return d
s=-d-1
for(r=a.length;s>0;){if(!(b<r))return A.f(a,b)
q=a.charCodeAt(b)
if(s===3){if(q===61){s-=3;++b
break}if(q===37){--s;++b
if(b===c)break
if(!(b<r))return A.f(a,b)
q=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(q!==51)break;++b;--s
if(b===c)break
if(!(b<r))return A.f(a,b)
q=a.charCodeAt(b)}if((q|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.a(A.ba("Invalid padding character",a,b))
return-s-1},
em:function em(){},
h4:function h4(){this.a=0},
dh:function dh(){},
kK(a,b){a=A.M(a,new Error())
a.stack=b.j(0)
throw a},
ik(a,b,c,d){var s,r=J.j3(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
bE(a,b,c){var s,r=A.h([],c.k("q<0>"))
for(s=J.b3(a);s.n();)r.push(s.gq())
if(b)return r
r.$flags=1
return r},
aj(a,b){var s,r
if(Array.isArray(a))return A.h(a.slice(0),b.k("q<0>"))
s=A.h([],b.k("q<0>"))
for(r=J.b3(a);r.n();)s.push(r.gq())
return s},
ll(a){var s,r,q
A.jj(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.ji(r<r?s.slice(0,r):s)}if(t.bm.b(a))return A.lm(a,0,null)
q=A.aj(a,t.S)
return A.ji(q)},
lm(a,b,c){var s=a.length
if(b>=s)return""
return A.le(a,b,s)},
dJ(a,b){return new A.eY(a,A.j5(a,!1,b,!1,!1,""))},
jn(a,b,c){var s=J.b3(b)
if(!s.n())return a
if(c.length===0){do a+=A.n(s.gq())
while(s.n())}else{a+=A.n(s.gq())
for(;s.n();)a=a+c+A.n(s.gq())}return a},
j9(a,b){return new A.dC(a,b.gep(),b.gey(),b.geq())},
jm(){return A.aM(new Error())},
id(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.a(A.aB(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.a(A.aB(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.a(A.ib(b,s,"Time including microseconds is outside valid range"))
A.iD(c,"isUtc",t.y)
return a},
j_(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
kI(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
eu(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
au(a){if(a>=10)return""+a
return"0"+a},
by(a,b){return new A.b9(1000*a+1e6*b)},
bz(a){if(typeof a=="number"||A.ef(a)||a==null)return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lc(a)},
kL(a,b){A.iD(a,"error",t.K)
A.iD(b,"stackTrace",t.gm)
A.kK(a,b)},
dc(a){return new A.db(a)},
b5(a,b){return new A.ae(!1,null,b,a)},
ib(a,b,c){return new A.ae(!0,a,b,c)},
lh(a){var s=null
return new A.bM(s,s,!1,s,s,a)},
fr(a,b){return new A.bM(null,null,!0,a,b,"Value not in range")},
aB(a,b,c,d,e){return new A.bM(b,c,!0,a,d,"Invalid value")},
jk(a,b,c){if(0>a||a>c)throw A.a(A.aB(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.aB(b,a,c,"end",null))
return b}return c},
jj(a,b){if(a<0)throw A.a(A.aB(a,0,null,b,null))
return a},
j2(a,b,c,d){return new A.dn(b,!0,a,d,"Index out of range")},
aX(a){return new A.cE(a)},
fT(a){return new A.dQ(a)},
cz(a){return new A.aV(a)},
S(a){return new A.dg(a)},
ba(a,b,c){return new A.ey(a,b,c)},
kT(a,b,c){var s,r
if(A.iJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.h([],t.s)
$.a0.push(a)
try{A.mv(a,s)}finally{if(0>=$.a0.length)return A.f($.a0,-1)
$.a0.pop()}r=A.jn(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ih(a,b,c){var s,r
if(A.iJ(a))return b+"..."+c
s=new A.cA(b)
$.a0.push(a)
try{r=s
r.a=A.jn(r.a,a,", ")}finally{if(0>=$.a0.length)return A.f($.a0,-1)
$.a0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mv(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.n(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.n()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.n();p=o,o=n){n=l.gq();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
l6(a,b,c,d){var s
if(B.n===c){s=B.a.gm(a)
b=J.aq(b)
return A.ip(A.aW(A.aW($.i8(),s),b))}if(B.n===d){s=B.a.gm(a)
b=J.aq(b)
c=J.aq(c)
return A.ip(A.aW(A.aW(A.aW($.i8(),s),b),c))}s=B.a.gm(a)
b=J.aq(b)
c=J.aq(c)
d=J.aq(d)
d=A.ip(A.aW(A.aW(A.aW(A.aW($.i8(),s),b),c),d))
return d},
b0(a){A.nb(A.n(a))},
fe:function fe(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a){this.a=a},
h7:function h7(){},
v:function v(){},
db:function db(a){this.a=a},
aD:function aD(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dn:function dn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a){this.a=a},
dQ:function dQ(a){this.a=a},
aV:function aV(a){this.a=a},
dg:function dg(a){this.a=a},
dE:function dE(){},
cy:function cy(){},
h9:function h9(a){this.a=a},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
E:function E(){},
j:function j(){},
ea:function ea(){},
fv:function fv(){this.b=this.a=0},
cA:function cA(a){this.a=a},
nj(){return window},
ca(a){return new Audio()},
kP(a,b,c,d,e){var s=new A.C($.r,t.ao),r=new A.aH(s,t.bj),q=new XMLHttpRequest()
B.ak.ew(q,b==null?"GET":b,a,!0)
if(e!=null)q.withCredentials=e
q.responseType=d
A.am(q,"load",new A.eW(q,r),!1)
A.am(q,"error",r.ge1(),!1)
q.send()
return s},
am(a,b,c,d){var s=A.jX(new A.h8(c),t.B)
if(s!=null)J.ia(a,b,s,!1)
return new A.cL(a,b,s,!1)},
m8(a){var s
if(t.q.b(a))return a
s=new A.fZ([],[])
s.c=!0
return s.bw(a)},
jX(a,b){var s=$.r
if(s===B.e)return a
return s.dX(a,b)},
e:function e(){},
d8:function d8(){},
d9:function d9(){},
c9:function c9(){},
b6:function b6(){},
bw:function bw(){},
af:function af(){},
cb:function cb(){},
et:function et(){},
ah:function ah(){},
ew:function ew(){},
d:function d(){},
b:function b(){},
o:function o(){},
dj:function dj(){},
cf:function cf(){},
av:function av(){},
eW:function eW(a,b){this.a=a
this.b=b},
dm:function dm(){},
cg:function cg(){},
bf:function bf(){},
f2:function f2(){},
bi:function bi(){},
ay:function ay(){},
A:function A(){},
aA:function aA(){},
dL:function dL(){},
cC:function cC(){},
aF:function aF(){},
bm:function bm(){},
aG:function aG(){},
ie:function ie(a,b){this.a=a
this.$ti=b},
cL:function cL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
h8:function h8(a){this.a=a},
dZ:function dZ(){},
fY:function fY(){},
h_:function h_(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b
this.c=!1},
cm:function cm(){},
m7(a,b,c,d){var s,r,q
if(b){s=[c]
B.b.a0(s,d)
d=s}r=t.z
q=A.bE(J.kv(d,A.n5(),r),!0,r)
return A.hJ(A.l8(a,q,null))},
j6(a){return A.jW(A.hJ(a))},
ix(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
jK(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
hJ(a){if(a==null||typeof a=="string"||typeof a=="number"||A.ef(a))return a
if(a instanceof A.ax)return a.a
if(A.k4(a))return a
if(t.f.b(a))return a
if(a instanceof A.ag)return A.U(a)
if(t.Z.b(a))return A.jJ(a,"$dart_jsFunction",new A.hK())
return A.jJ(a,"_$dart_jsObject",new A.hL($.iR()))},
jJ(a,b,c){var s=A.jK(a,b)
if(s==null){s=c.$1(a)
A.ix(a,b,s)}return s},
iw(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.k4(a))return a
else if(a instanceof Object&&t.f.b(a))return a
else if(a instanceof Date)return new A.ag(A.id(a.getTime(),0,!1),0,!1)
else if(a.constructor===$.iR())return a.o
else return A.jW(a)},
jW(a){if(typeof a=="function")return A.iy(a,$.i7(),new A.hP())
if(a instanceof Array)return A.iy(a,$.iQ(),new A.hQ())
return A.iy(a,$.iQ(),new A.hR())},
iy(a,b,c){var s=A.jK(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.ix(a,b,s)}return s},
hK:function hK(){},
hL:function hL(a){this.a=a},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
ax:function ax(a){this.a=a},
cl:function cl(a){this.a=a},
be:function be(a,b){this.a=a
this.$ti=b},
bZ:function bZ(){},
bt(a,b){var s=new A.C($.r,b.k("C<0>")),r=new A.aH(s,b.k("aH<0>"))
a.then(A.aK(new A.i4(r),1),A.aK(new A.i5(r),1))
return s},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
ff:function ff(a){this.a=a},
im(){return B.ag},
hu:function hu(){},
as:function as(){},
c8:function c8(){},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(){},
dd:function dd(){},
az(a,b,c,d){var s=new A.a6(a,B.E,!1,b,c,B.a6,B.G)
s.x=d==null?B.a6:d
return s},
ei:function ei(a,b){this.a=a
this.b=b},
a1:function a1(){},
bA:function bA(a,b,c,d,e,f){var _=this
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
a6:function a6(a,b,c,d,e,f,g){var _=this
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
fl:function fl(a){this.a=a},
fi:function fi(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a},
fk:function fk(a,b){this.a=a
this.b=b},
cw:function cw(a){this.b=a},
a8(a,b,c){var s,r=A.h([],t.O)
if(c==null){if(0>=a.length)return A.f(a,0)
s=a.charCodeAt(0)}else s=c
return new A.at(a,s,r,b)},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l5(a,b){return a+b},
f8:function f8(a,b,c){this.c=a
this.d=b
this.e=c},
f9:function f9(){},
fa:function fa(){},
fc:function fc(){},
fb:function fb(){},
fd:function fd(){},
dI:function dI(){this.a=$},
fq:function fq(a){this.a=a},
bO:function bO(a,b){this.a=a
this.b=b},
fS:function fS(){this.a=!1},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
jP(a,b){return new A.ha(a,B.a.B(b,2),1)},
u:function u(a,b,c,d,e,f,g,h,i){var _=this
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
fL:function fL(){},
fM:function fM(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
fI:function fI(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fN:function fN(){},
fz:function fz(){},
fA:function fA(a){this.a=a},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
fH:function fH(){},
ha:function ha(a,b,c){this.b=a
this.d=b
this.e=c},
c7:function c7(){},
dX:function dX(a){this.a=0
this.b=!1
this.c=a},
ng(){var s,r=$.b2()
if(r instanceof A.e5){s=r.a
s.bC(s.gbA())
r=r.b
r.bC(r.gbA())
$.jG=new A.e8()
return}$.jG=A.lG()},
lG(){var s=t.s
return new A.e5(A.j1(!0,!0,new A.ht(),!0,A.h(["audio/Theyre-Here_Looping.mp3"],s),0.4),A.j1(!1,!1,null,!0,A.h(["audio/PremiumBeat_0013_cursor_click_11.wav"],s),1))},
e5:function e5(a,b){this.a=a
this.b=b},
ht:function ht(){},
e8:function e8(){},
da:function da(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=null
_.f=d
_.r=e
_.w=f
_.x=$
_.a=null},
ej:function ej(){},
dl:function dl(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
dU:function dU(a,b){var _=this
_.b=a
_.c=null
_.d=b
_.a=null},
dk:function dk(a,b,c,d,e,f,g){var _=this
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
eA:function eA(a){this.a=a},
J:function J(){},
fU:function fU(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
ep:function ep(a,b){this.a=a
this.b=b},
kB(a,b,c,d,e,f){var s=A.I(e).k("aa<2>")
s=A.aj(new A.aa(e,s),s.k("l.E"))
s.$flags=1
s=s
B.b.N(s,new A.er())
return new A.eq(s,f,new A.ak(new A.k(a,b),new A.k(c,d)),A.h([],t.w))},
eq:function eq(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
er:function er(){},
es:function es(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
fh:function fh(){},
lr(a,b,c){var s,r,q=$.km(),p=A.j7(t.u,t.J)
A.l2(p,q,new A.fX(),null)
q=$.ks()
s=t.W
r=a*b
if(r>0)r=A.ik(r,c.$1(B.G),!1,s)
else r=J.j3(0,s)
r=new A.ar(r,new A.ak(new A.k(0,0),new A.k(a,b)),t.G)
r.cU(a,b,c,s)
r=new A.fV(a,b,q,r,p)
r.dQ()
return r},
fV:function fV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fX:function fX(){},
fW:function fW(a){this.a=a},
nd(a,b){var s,r,q,p,o,n,m=A.ik(7150,B.Z,!1,t.r),l=A.ik(7150,B.Z,!1,t.b5),k=B.d.a8(window.devicePixelRatio),j=a.getContext("2d")
a.width=1300*k
a.height=770*k
s=a.style
s.width="1300px"
s=a.style
s.height="770px"
s=A.a3(t.be,t.eN)
r=new A.cF(new A.ds(s,t.h3),A.h([],t.fR),new A.en(new A.ev(new A.ar(m,new A.ak(new A.k(0,0),new A.k(130,55)),t._),new A.ar(l,new A.ak(new A.k(0,0),new A.k(130,55)),t.V)),new A.ex("Menlo, Consolas",14,10,14,1,11),a,j,k),t.c3)
s.i(0,new A.N(32,!1,!1),B.I)
s.i(0,new A.N(27,!1,!1),B.m)
s.i(0,new A.N(8,!1,!1),B.m)
s.i(0,new A.N(71,!1,!1),B.y)
s.i(0,new A.N(84,!1,!1),B.J)
s.i(0,new A.N(69,!1,!1),B.K)
s.i(0,new A.N(68,!1,!1),B.L)
s.i(0,new A.N(70,!1,!0),B.M)
s.i(0,new A.N(83,!1,!0),B.N)
s.i(0,new A.N(78,!1,!0),B.O)
s.i(0,new A.N(68,!1,!0),B.P)
s.i(0,new A.N(88,!0,!0),B.Q)
q=A.lr(130,43,new A.i6())
p=new A.ei($.kb(),$.kx)
s=new A.dI()
m=t.b7
l=new A.cY(s.gd0(),null,m)
s.a=l
o=new A.dM(q,p,s)
new A.bS(l,m.k("bS<1>")).em(o.gdi())
n=new A.fS()
$.iO()
m=t.w
l=A.h([],m)
k=A.h([],t.O)
l=new A.dk(b,new A.fv(),new A.ep(new A.ak(new A.k(0,25),new A.k(32,30)),l),A.kB(100,39,30,16,q.e,n),n,o,k)
l.w=new A.fU(p,new A.bR(k,t.k),new A.ak(new A.k(50,41),new A.k(47,14)),A.h([],m))
r.br(l)
r.seb(!0)
r.scF(!0)},
i6:function i6(){},
ma(a){var s,r,q
try{a.$0()}catch(q){s=A.aN(q)
r=A.aM(q)
A.b0(s)
A.b0(r)}},
lF(){if($.h5!=null||$.is)return
var s=A.h([],t.db)
s.push(A.am(window,"focus",A.mX(),!1))
s.push(A.am(window,"blur",A.mW(),!1))
s.push(A.am(window,"mouseup",A.iG(),!1))
s.push(A.am(window,"touchend",A.iG(),!1))
s.push(A.am(window,"keyup",A.iG(),!1))
$.h5=s},
lE(){var s=$.h5
$.h5=null
if(s!=null)B.b.G(s,new A.h6())},
lC(a){$.ir=!0},
lB(a){$.ir=!1},
lD(a){if($.is)return
A.j0(A.by(100,0),A.mY(),t.n)},
jq(a){var s=$.ir
if(!s)return
$.is=!0
A.lE()
A.j0(A.by(10,0),A.mV(),t.n)},
lA(){var s,r
for(s=$.cK.length,r=0;r<$.cK.length;$.cK.length===s||(0,A.a_)($.cK),++r)A.ma($.cK[r])
B.b.aj($.cK)},
H(a,b){var s=a.canPlayType("audio/mp3;")
if(s.length===0)return!1
return s.toLowerCase()!=="no"},
j1(a,b,c,d,e,f){var s=null,r=new A.ai(A.a3(t.gU,t.A))
r.cV(a,s,!1,b,!1,s,s,c,s,s,s,s,s,s,s,s,s,s,s,5,!0,1,s,e,f,s,"GET",!1)
return r},
iB(){var s,r,q,p,o=$.G()
if(!o.z)return
try{o.as=new (window.AudioContext||window.webkitAudioContext)()}catch(s){o=$.G()
o.z=!1}r=o.as
if(r==null)o.z=!1
if(o.z){r.toString
r=B.x.cf(r)
o.x=r
r=r.gain
r.toString
q=o.r
p=o.as.currentTime
p.toString
r.setValueAtTime(q,p)
p=o.x
q=o.as.destination
q.toString
p.connect(q,0,0)}o.c1()},
h6:function h6(){},
e4:function e4(a,b,c){var _=this
_.a=1000
_.b=a
_.d=b
_.e=c
_.r=1
_.x=$
_.y=!1
_.z=!0
_.at=_.as=null
_.ax=!0
_.ch=_.ay=null
_.cx=_.CW=!1
_.db=_.cy=null
_.dx=!1},
hs:function hs(a,b){this.a=a
this.b=b},
hr:function hr(){},
hq:function hq(a){this.a=a},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hm:function hm(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a){this.a=a
this.b=null},
cO:function cO(a,b){this.a=a
this.b=b
this.c=null},
bX:function bX(a,b){this.a=a
this.b=b},
ai:function ai(a){var _=this
_.a=$
_.b=null
_.c=$
_.e=_.d=null
_.r=_.f=$
_.w=null
_.x=$
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=null
_.cy=_.cx=_.CW=_.ch=$
_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=null
_.p2=$
_.p3=a},
eI:function eI(a){this.a=a},
eU:function eU(){},
eP:function eP(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eR:function eR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eN:function eN(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b){this.a=a
this.b=b},
eG:function eG(a){this.a=a},
eH:function eH(a,b){this.a=a
this.b=b},
eB:function eB(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eE:function eE(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=$},
aU:function aU(a){var _=this
_.a=a
_.c=_.b=0
_.cy=_.cx=_.ch=_.ay=_.at=_.as=_.Q=_.z=_.x=_.w=_.r=_.f=_.e=_.d=null},
bh:function bh(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.d=c},
f4(a){return $.l1.aq(a,new A.f5(a))},
bF:function bF(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
f5:function f5(a){this.a=a},
en:function en(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e},
eo:function eo(a){this.a=a},
ex:function ex(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ev:function ev(a,b){this.a=a
this.b=b},
kO(a,b,c){return new A.Q(a,b,c)},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b){this.a=a
this.$ti=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
fy:function fy(){},
ft:function ft(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=!0
_.f=_.e=null
_.r=!1
_.x=null
_.$ti=d},
bk:function bk(){},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(a,b,c){this.c=a
this.d=b
this.b=c},
e1:function e1(){},
ak:function ak(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
R(a,b){return new A.k(a,b)},
dT:function dT(){},
k:function k(a,b){this.a=a
this.b=b},
ee:function ee(){},
n8(){var s=t.E.a(document.querySelector("#canvas"))
A.am(s,"dblclick",new A.i0(),!1)
A.nd(s,A.n9())},
jV(){var s,r,q,p,o,n,m=new A.hO().$0()
if(m)s=A.j6(document)
else{r=document.querySelector("#canvas")
r.toString
s=A.j6(r)}q=m?B.at:B.ar
for(r=q.length,p=s.a,o=0;o<r;++o){n=q[o]
if(n in p){s.dZ(n)
return}}},
i0:function i0(){},
hO:function hO(){},
k4(a){return t.d.b(a)||t.B.b(a)||t.dz.b(a)||t.gb.b(a)||t.a0.b(a)||t.g4.b(a)||t.g2.b(a)},
nb(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
nh(a){throw A.M(new A.cn("Field '"+a+"' has been assigned during initialization."),new Error())},
i(){throw A.M(A.kY(""),new Error())},
k3(a){var s,r,q,p=B.av.h(0,a.gm(0))
p.toString
s=p>>>16&255
r=p>>>8&255
q=p&255
p=B.a1.h(0,a.gm(0))
p.toString
if(p)return new A.D(q/3|0,r/3|0,s/2|0)
return new A.D(B.a.ad(q,1.8),B.a.ad(r,1.8),B.a.ad(s,1.8))},
mT(a){var s,r=B.a1.h(0,a.gm(0))
r.toString
if(r)return 16777215
s=A.k3(a)
return B.a.B(s.a+s.c,2)},
kJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p=d-2,o=j+B.c.Z(" ",p)+j
for(s=c+1,r=c+e-1;s<r;++s)a.C(b,s,o,f)
q=B.c.Z(h,p)
p=B.c.Z(l,p)
a.C(b,c,g+q+i,f)
a.C(b,r,k+p+m,f)},
k5(a,b,c){if(c)return A.n2(a,b)
else return J.V(a,b)},
n2(a,b){var s
if(a==null?b==null:a===b)return!0
s=t.j
if(s.b(a)){if(s.b(b))return A.iI(a,b,!0,!1)
return!1}else{s=t.eO
if(s.b(a)){if(s.b(b))return A.n3(a,b,!0)
return!1}}return J.V(a,b)},
iI(a,b,c,d){var s,r,q,p=J.ao(a)
if(p.p(a,b))return!0
if(a==null)return!1
if(b==null)return!1
s=p.gl(a)
r=J.b_(b)
if(s!==r.gl(b))return!1
if(d){p.aa(a)
r.aa(b)}for(q=0;q<s;++q)if(!A.k5(p.h(a,q),r.h(b,q),c))return!1
return!0},
n3(a,b,c){var s,r,q,p
if(a===b)return!0
if(a.gl(a)!==b.gl(b))return!1
s=t.z
r=A.bE(a.ga5(),!0,s)
if(!A.iI(r,A.bE(b.ga5(),!0,s),!1,!0))return!1
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.a_)(r),++q){p=r[q]
if(!A.k5(a.h(0,p),b.h(0,p),!0))return!1}return!0},
k9(a,b,c){var s=A.mC(a,b,c)
return s},
mC(a,b,c){var s,r,q,p,o,n,m
if(c===1)return A.h([a],t.s)
s=b.length
if(c===2){r=B.c.aI(a,b)
q=t.s
return r>=0?A.h([B.c.V(a,0,r),B.c.aw(a,r+s)],q):A.h([a],q)}if(c<=0)c=a.length
p=A.h([],t.s);--c
for(o=0;o<c;++o,a=m){r=B.c.aI(a,b)
if(r>=0){n=B.c.V(a,0,r)
m=B.c.aw(a,r+s)
p.push(n)}else break}p.push(a)
return p}},B={}
var w=[A,J,B]
var $={}
A.ii.prototype={}
J.ch.prototype={
p(a,b){return a===b},
gm(a){return A.bL(a)},
j(a){return"Instance of '"+A.fo(a)+"'"},
cs(a,b){throw A.a(A.j9(a,b))},
gA(a){return A.br(A.iz(this))}}
J.dp.prototype={
j(a){return String(a)},
gm(a){return a?519018:218159},
gA(a){return A.br(t.y)},
$it:1,
$iL:1}
J.cj.prototype={
p(a,b){return null==b},
j(a){return"null"},
gm(a){return 0},
$it:1,
$iE:1}
J.T.prototype={}
J.bg.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.dF.prototype={}
J.bP.prototype={}
J.aw.prototype={
j(a){var s=a[$.i7()]
if(s==null)return this.cQ(a)
return"JavaScript function for "+J.b4(s)},
$ibb:1}
J.bC.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.bD.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.q.prototype={
ar(a,b){a.$flags&1&&A.ap(a,"removeAt",1)
if(b<0||b>=a.length)throw A.a(A.fr(b,null))
return a.splice(b,1)[0]},
a7(a,b){var s
a.$flags&1&&A.ap(a,"remove",1)
for(s=0;s<a.length;++s)if(J.V(a[s],b)){a.splice(s,1)
return!0}return!1},
a0(a,b){var s
a.$flags&1&&A.ap(a,"addAll",2)
if(Array.isArray(b)){this.cY(a,b)
return}for(s=J.b3(b);s.n();)a.push(s.gq())},
cY(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.a(A.S(a))
for(s=0;s<r;++s)a.push(b[s])},
aj(a){a.$flags&1&&A.ap(a,"clear","clear")
a.length=0},
G(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw A.a(A.S(a))}},
cq(a,b,c){return new A.y(a,b,A.x(a).k("@<1>").S(c).k("y<1,2>"))},
al(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.a(A.S(a))}return s},
K(a,b,c){c.toString
return this.al(a,b,c,t.z)},
O(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
gbk(a){if(a.length>0)return a[0]
throw A.a(A.ig())},
gco(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.ig())},
bd(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.a(A.S(a))}return!1},
N(a,b){var s,r,q,p,o,n
a.$flags&2&&A.ap(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.mk()
if(s===2){r=a[0]
q=a[1]
p=b.$2(r,q)
if(typeof p!=="number")return p.H()
if(p>0){a[0]=q
a[1]=r}return}o=0
if(A.x(a).c.b(null))for(n=0;n<a.length;++n)if(a[n]===void 0){a[n]=null;++o}a.sort(A.aK(b,2))
if(o>0)this.dD(a,o)},
aa(a){return this.N(a,null)},
dD(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
aI(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.V(a[s],b))return s}return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.V(a[s],b))return!0
return!1},
j(a){return A.ih(a,"[","]")},
gv(a){return new J.a2(a,a.length,A.x(a).k("a2<1>"))},
gm(a){return A.bL(a)},
gl(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.hS(a,b))
return a[b]},
i(a,b,c){a.$flags&2&&A.ap(a)
if(!(b>=0&&b<a.length))throw A.a(A.hS(a,b))
a[b]=c},
$ip:1}
J.eZ.prototype={}
J.a2.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.a_(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bB.prototype={
D(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaJ(b)
if(this.gaJ(a)===s)return 0
if(this.gaJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaJ(a){return a===0?1/a<0:a<0},
a8(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.aX(""+a+".toInt()"))},
bi(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.aX(""+a+".ceil()"))},
a4(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.a(A.aX(""+a+".floor()"))},
aP(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.aX(""+a+".round()"))},
aF(a,b,c){if(this.D(b,c)>0)throw A.a(A.eg(b))
if(this.D(a,b)<0)return b
if(this.D(a,c)>0)return c
return a},
cG(a,b){var s
if(b>20)throw A.a(A.aB(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaJ(a))return"-"+s
return s},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aS(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ad(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c2(a,b)},
B(a,b){return(a|0)===a?a/b|0:this.c2(a,b)},
c2(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.aX("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+A.n(b)))},
ah(a,b){var s
if(a>0)s=this.dJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dJ(a,b){return b>31?0:a>>>b},
gA(a){return A.br(t.H)},
$iP:1,
$iz:1,
$iO:1}
J.ci.prototype={
gA(a){return A.br(t.S)},
$it:1,
$ic:1}
J.dq.prototype={
gA(a){return A.br(t.i)},
$it:1}
J.bd.prototype={
e7(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aw(a,r-s)},
cL(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
V(a,b,c){return a.substring(b,A.jk(b,c,a.length))},
aw(a,b){return this.V(a,b,null)},
eI(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.kW(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.kX(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
Z(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.af)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ct(a,b,c){var s=b-a.length
if(s<=0)return a
return this.Z(c,s)+a},
aM(a,b){return this.ct(a,b," ")},
aI(a,b){var s=a.indexOf(b,0)
return s},
ek(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
e2(a,b,c){var s=a.length
if(c>s)throw A.a(A.aB(c,0,s,null,null))
return A.ne(a,b,c)},
F(a,b){return this.e2(a,b,0)},
D(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
j(a){return a},
gm(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gA(a){return A.br(t.N)},
gl(a){return a.length},
$it:1,
$iP:1,
$iw:1}
A.cn.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.i3.prototype={
$0(){var s=new A.C($.r,t.D)
s.aY(null)
return s},
$S:21}
A.fu.prototype={}
A.aP.prototype={}
A.aS.prototype={
gv(a){var s=this
return new A.a4(s,s.gl(s),A.I(s).k("a4<aS.E>"))},
ej(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.n(p.O(0,0))
if(o!==p.gl(p))throw A.a(A.S(p))
for(r=s,q=1;q<o;++q){r=r+b+A.n(p.O(0,q))
if(o!==p.gl(p))throw A.a(A.S(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.n(p.O(0,q))
if(o!==p.gl(p))throw A.a(A.S(p))}return r.charCodeAt(0)==0?r:r}},
al(a,b,c){var s,r,q=this,p=q.gl(q)
for(s=b,r=0;r<p;++r){s=c.$2(s,q.O(0,r))
if(p!==q.gl(q))throw A.a(A.S(q))}return s},
K(a,b,c){c.toString
return this.al(0,b,c,t.z)}}
A.a4.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.b_(q),o=p.gl(q)
if(r.b!==o)throw A.a(A.S(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.O(q,s);++r.c
return!0}}
A.y.prototype={
gl(a){return J.d7(this.a)},
O(a,b){return this.b.$1(J.kt(this.a,b))}}
A.F.prototype={
gv(a){return new A.dV(J.b3(this.a),this.b)}}
A.dV.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.ce.prototype={
gv(a){return new A.di(J.b3(this.a),this.b)},
gl(a){return J.d7(this.a)+this.b.length}}
A.cc.prototype={}
A.di.prototype={
n(){var s,r=this
if(r.a.n())return!0
s=r.b
if(s!=null){s=new J.a2(s,s.length,A.x(s).k("a2<1>"))
r.a=s
r.b=null
return s.n()}return!1},
gq(){return this.a.gq()}}
A.cG.prototype={
gv(a){return new A.dW(J.b3(this.a),this.$ti.k("dW<1>"))}}
A.dW.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())}}
A.bJ.prototype={
gv(a){var s=this.a
return new A.dD(new A.a4(s,s.gl(0),s.$ti.k("a4<aS.E>")))}}
A.dD.prototype={
n(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gq(){var s=this.b
return s==null?A.b1(A.ig()):s}}
A.cd.prototype={}
A.dS.prototype={
i(a,b,c){throw A.a(A.aX("Cannot modify an unmodifiable list"))},
N(a,b){throw A.a(A.aX("Cannot modify an unmodifiable list"))},
aa(a){return this.N(0,null)}}
A.bQ.prototype={}
A.aC.prototype={
gm(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.c.gm(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
p(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a===b.a},
$icB:1}
A.b7.prototype={}
A.bx.prototype={
j(a){return A.f6(this)},
$ia5:1}
A.b8.prototype={
gl(a){return this.b.length},
gbS(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ak(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.ak(b))return null
return this.b[this.a[b]]},
G(a,b){var s,r,q=this.gbS(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
ga5(){return new A.bo(this.gbS(),this.$ti.k("bo<1>"))},
gaR(a){return new A.bo(this.b,this.$ti.k("bo<2>"))}}
A.bo.prototype={
gl(a){return this.a.length},
gv(a){var s=this.a
return new A.e6(s,s.length,this.$ti.k("e6<1>"))}}
A.e6.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.bc.prototype={
aC(){var s=this,r=s.$map
if(r==null){r=new A.ck(s.$ti.k("ck<1,2>"))
A.k0(s.a,r)
s.$map=r}return r},
h(a,b){return this.aC().h(0,b)},
G(a,b){this.aC().G(0,b)},
ga5(){var s=this.aC()
return new A.a9(s,A.I(s).k("a9<1>"))},
gl(a){return this.aC().a}}
A.eX.prototype={
gep(){var s=this.a
if(s instanceof A.aC)return s
return this.a=new A.aC(s)},
gey(){var s,r,q,p,o,n=this
if(n.c===1)return B.a_
s=n.d
r=J.b_(s)
q=r.gl(s)-J.d7(n.e)-n.f
if(q===0)return B.a_
p=[]
for(o=0;o<q;++o)p.push(r.h(s,o))
p.$flags=3
return p},
geq(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.a2
s=k.e
r=J.b_(s)
q=r.gl(s)
p=k.d
o=J.b_(p)
n=o.gl(p)-q-k.f
if(q===0)return B.a2
m=new A.Y(t.eo)
for(l=0;l<q;++l)m.i(0,new A.aC(r.h(s,l)),o.h(p,n+l))
return new A.b7(m,t.e)}}
A.fn.prototype={
$0(){return B.d.a4(1000*this.a.now())},
$S:5}
A.fm.prototype={
$2(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:28}
A.fQ.prototype={
L(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cv.prototype={
j(a){return"Null check operator used on a null value"}}
A.dr.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dR.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.fg.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cW.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iac:1}
A.aO.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ka(r==null?"unknown":r)+"'"},
$ibb:1,
geQ(){return this},
$C:"$1",
$R:1,
$D:null}
A.de.prototype={$C:"$0",$R:0}
A.df.prototype={$C:"$2",$R:2}
A.dP.prototype={}
A.dO.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ka(s)+"'"}}
A.bv.prototype={
p(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bv))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.iL(this.a)^A.bL(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.fo(this.a)+"'")}}
A.dK.prototype={
j(a){return"RuntimeError: "+this.a}}
A.hz.prototype={}
A.Y.prototype={
gl(a){return this.a},
ga5(){return new A.a9(this,A.I(this).k("a9<1>"))},
ak(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else{r=this.ee(a)
return r}},
ee(a){var s=this.d
if(s==null)return!1
return this.ao(s[this.an(a)],a)>=0},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ef(b)},
ef(a){var s,r,q=this.d
if(q==null)return null
s=q[this.an(a)]
r=this.ao(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.bF(s==null?q.b=q.b7():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.bF(r==null?q.c=q.b7():r,b,c)}else q.eh(b,c)},
eh(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.b7()
s=p.an(a)
r=o[s]
if(r==null)o[s]=[p.b8(a,b)]
else{q=p.ao(r,a)
if(q>=0)r[q].b=b
else r.push(p.b8(a,b))}},
aq(a,b){var s,r,q=this
if(q.ak(a)){s=q.h(0,a)
return s==null?A.I(q).y[1].a(s):s}r=b.$0()
q.i(0,a,r)
return r},
a7(a,b){var s=this
if(typeof b=="string")return s.c_(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.c_(s.c,b)
else return s.eg(b)},
eg(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.an(a)
r=n[s]
q=o.ao(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.c4(p)
if(r.length===0)delete n[s]
return p.b},
G(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.a(A.S(s))
r=r.c}},
bF(a,b,c){var s=a[b]
if(s==null)a[b]=this.b8(b,c)
else s.b=c},
c_(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.c4(s)
delete a[b]
return s.b},
bV(){this.r=this.r+1&1073741823},
b8(a,b){var s,r=this,q=new A.f_(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.bV()
return q},
c4(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bV()},
an(a){return J.aq(a)&1073741823},
ao(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1},
j(a){return A.f6(this)},
b7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.f_.prototype={}
A.a9.prototype={
gl(a){return this.a.a},
gv(a){var s=this.a
return new A.co(s,s.r,s.e)}}
A.co.prototype={
gq(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.S(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aa.prototype={
gl(a){return this.a.a},
gv(a){var s=this.a
return new A.cp(s,s.r,s.e)}}
A.cp.prototype={
gq(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.S(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.ck.prototype={
an(a){return A.mN(a)&1073741823},
ao(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1}}
A.hX.prototype={
$1(a){return this.a(a)},
$S:8}
A.hY.prototype={
$2(a,b){return this.a(a,b)},
$S:22}
A.hZ.prototype={
$1(a){return this.a(a)},
$S:25}
A.cU.prototype={}
A.eY.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdv(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.j5(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cl(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hx(s)},
ec(a){return this.b.test(a)}}
A.hx.prototype={}
A.dt.prototype={
gA(a){return B.az},
$it:1}
A.ct.prototype={
gdY(a){if(((a.$flags|0)&2)!==0){a.buffer
return new A.hG()}else return a.buffer},
$iB:1}
A.hG.prototype={}
A.du.prototype={
gA(a){return B.aA},
$it:1}
A.bI.prototype={
gl(a){return a.length},
$iX:1}
A.cr.prototype={
h(a,b){A.aI(b,a,a.length)
return a[b]},
i(a,b,c){a.$flags&2&&A.ap(a)
A.aI(b,a,a.length)
a[b]=c},
$ip:1}
A.cs.prototype={
i(a,b,c){a.$flags&2&&A.ap(a)
A.aI(b,a,a.length)
a[b]=c},
$ip:1}
A.dv.prototype={
gA(a){return B.aB},
$it:1}
A.dw.prototype={
gA(a){return B.aC},
$it:1}
A.dx.prototype={
gA(a){return B.aD},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1}
A.dy.prototype={
gA(a){return B.aE},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1}
A.dz.prototype={
gA(a){return B.aF},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1}
A.dA.prototype={
gA(a){return B.aH},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1}
A.dB.prototype={
gA(a){return B.aI},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1}
A.cu.prototype={
gA(a){return B.aJ},
gl(a){return a.length},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1}
A.bj.prototype={
gA(a){return B.aK},
gl(a){return a.length},
h(a,b){A.aI(b,a,a.length)
return a[b]},
$it:1,
$ibj:1}
A.cQ.prototype={}
A.cR.prototype={}
A.cS.prototype={}
A.cT.prototype={}
A.ab.prototype={
k(a){return A.d2(v.typeUniverse,this,a)},
S(a){return A.jC(v.typeUniverse,this,a)}}
A.e3.prototype={}
A.ec.prototype={
j(a){return A.Z(this.a,null)}}
A.e2.prototype={
j(a){return this.a}}
A.cZ.prototype={$iaD:1}
A.h1.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:1}
A.h0.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:58}
A.h2.prototype={
$0(){this.a.$0()},
$S:4}
A.h3.prototype={
$0(){this.a.$0()},
$S:4}
A.eb.prototype={
cW(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aK(new A.hE(this,b),0),a)
else throw A.a(A.aX("`setTimeout()` not found."))},
U(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
self.clearTimeout(s)
this.b=null}else throw A.a(A.aX("Canceling a timer."))}}
A.hE.prototype={
$0(){this.a.b=null
this.b.$0()},
$S:0}
A.c0.prototype={
gq(){return this.b},
dG(a,b){var s,r,q
a=a
b=b
s=this.a
for(;!0;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
n(){var s,r,q,p,o=this,n=null,m=0
for(;!0;){s=o.d
if(s!=null)try{if(s.n()){o.b=s.gq()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.dG(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.jx
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.jx
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.cz("sync*"))}return!1},
c7(a){var s,r,q=this
if(a instanceof A.c_){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.b3(a)
return 2}}}
A.c_.prototype={
gv(a){return new A.c0(this.a())}}
A.a7.prototype={
j(a){return A.n(this.a)},
$iv:1,
gab(){return this.b}}
A.bS.prototype={}
A.bU.prototype={
b9(){},
ba(){}}
A.bT.prototype={
gb6(){return this.c<4},
c0(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
dL(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.bV($.r)
A.k8(s.gdA())
if(c!=null)s.c=c
return s}s=$.r
r=d?1:0
q=b!=null?32:0
A.lz(s,b)
p=new A.bU(n,a,s,r|q,A.I(n).k("bU<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.jT(n.a)
return p},
dC(a){var s,r=this
A.I(r).k("bU<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.c0(a)
if((r.c&2)===0&&r.d==null)r.b_()}return null},
aW(){if((this.c&4)!==0)return new A.aV("Cannot add new events after calling close")
return new A.aV("Cannot add new events while doing an addStream")},
df(a){var s,r,q,p=this,o=p.c
if((o&2)!==0)throw A.a(A.cz(u.o))
s=p.d
if(s==null)return
r=o&1
p.c=o^3
for(;s!=null;){o=s.ay
if((o&1)===r){s.ay=o|2
a.$1(s)
o=s.ay^=1
q=s.ch
if((o&4)!==0)p.c0(s)
s.ay&=4294967293
s=q}else s=s.ch}p.c&=4294967293
if(p.d==null)p.b_()},
b_(){if((this.c&4)!==0)if(null.geS())null.aY(null)
A.jT(this.b)}}
A.cY.prototype={
gb6(){return A.bT.prototype.gb6.call(this)&&(this.c&2)===0},
aW(){if((this.c&2)!==0)return new A.aV(u.o)
return this.cS()},
aE(a){var s=this,r=s.d
if(r==null)return
if(r===s.e){s.c|=2
r.bH(a)
s.c&=4294967293
if(s.d==null)s.b_()
return}s.df(new A.hD(s,a))}}
A.hD.prototype={
$1(a){a.bH(this.b)},
$S(){return this.a.$ti.k("~(aY<1>)")}}
A.ez.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.b1(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aN(p)
q=A.aM(p)
l=r
o=q
n=A.jL(l,o)
l=new A.a7(l,o)
m.b.aA(l)
return}m.b.b1(s)}},
$S:0}
A.cH.prototype={
ce(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.cz("Future already completed"))
s.bI(A.mj(a,b))},
aG(a){return this.ce(a,null)}}
A.aH.prototype={
bj(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.cz("Future already completed"))
s.aY(b)},
e0(a){return this.bj(0,null)}}
A.bW.prototype={
eo(a){if((this.c&15)!==6)return!0
return this.b.b.bs(this.d,a.a)},
ea(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.eD(r,p,a.b)
else q=o.bs(r,p)
try{p=q
return p}catch(s){if(t.eK.b(A.aN(s))){if((this.c&1)!==0)throw A.a(A.b5("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.b5("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.C.prototype={
au(a,b,c){var s,r,q=$.r
if(q===B.e){if(b!=null&&!t.Q.b(b)&&!t.x.b(b))throw A.a(A.ib(b,"onError",u.c))}else if(b!=null)b=A.jO(b,q)
s=new A.C(q,c.k("C<0>"))
r=b==null?1:3
this.aX(new A.bW(s,r,a,b,this.$ti.k("@<1>").S(c).k("bW<1,2>")))
return s},
bt(a,b){a.toString
return this.au(a,null,b)},
bh(a){var s=this.$ti,r=$.r,q=new A.C(r,s)
if(r!==B.e)a=A.jO(a,r)
this.aX(new A.bW(q,2,null,a,s.k("bW<1,1>")))
return q},
dH(a){this.a=this.a&1|16
this.c=a},
az(a){this.a=a.a&30|this.a&1
this.c=a.c},
aX(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.aX(a)
return}s.az(r)}A.c2(null,null,s.b,new A.hb(s,a))}},
bX(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.bX(a)
return}n.az(s)}m.a=n.aD(a)
A.c2(null,null,n.b,new A.hg(m,n))}},
ag(){var s=this.c
this.c=null
return this.aD(s)},
aD(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b1(a){var s,r=this
if(r.$ti.k("aR<1>").b(a))A.he(a,r,!0)
else{s=r.ag()
r.a=8
r.c=a
A.bn(r,s)}},
d8(a){var s=this,r=s.ag()
s.a=8
s.c=a
A.bn(s,r)},
d7(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.ag()
q.az(a)
A.bn(q,r)},
aA(a){var s=this.ag()
this.dH(a)
A.bn(this,s)},
d6(a,b){this.aA(new A.a7(a,b))},
aY(a){if(this.$ti.k("aR<1>").b(a)){this.d3(a)
return}this.d2(a)},
d2(a){this.a^=2
A.c2(null,null,this.b,new A.hd(this,a))},
d3(a){A.he(a,this,!1)
return},
bI(a){this.a^=2
A.c2(null,null,this.b,new A.hc(this,a))},
$iaR:1}
A.hb.prototype={
$0(){A.bn(this.a,this.b)},
$S:0}
A.hg.prototype={
$0(){A.bn(this.b,this.a.a)},
$S:0}
A.hf.prototype={
$0(){A.he(this.a.a,this.b,!0)},
$S:0}
A.hd.prototype={
$0(){this.a.d8(this.b)},
$S:0}
A.hc.prototype={
$0(){this.a.aA(this.b)},
$S:0}
A.hj.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.cC(q.d)}catch(p){s=A.aN(p)
r=A.aM(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ic(q)
n=k.a
n.c=new A.a7(q,o)
q=n}q.b=!0
return}if(j instanceof A.C&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.C){m=k.b.a
l=new A.C(m.b,m.$ti)
j.au(new A.hk(l,m),new A.hl(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.hk.prototype={
$1(a){this.a.d7(this.b)},
$S:1}
A.hl.prototype={
$2(a,b){this.a.aA(new A.a7(a,b))},
$S:32}
A.hi.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.bs(p.d,this.b)}catch(o){s=A.aN(o)
r=A.aM(o)
q=s
p=r
if(p==null)p=A.ic(q)
n=this.a
n.c=new A.a7(q,p)
n.b=!0}},
$S:0}
A.hh.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.eo(s)&&p.a.e!=null){p.c=p.a.ea(s)
p.b=!1}}catch(o){r=A.aN(o)
q=A.aM(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ic(p)
m=l.b
m.c=new A.a7(p,n)
p=m}p.b=!0}},
$S:0}
A.dY.prototype={}
A.bN.prototype={
gl(a){var s={},r=new A.C($.r,t.a)
s.a=0
this.cp(new A.fw(s,this),!0,new A.fx(s,r),r.gd5())
return r}}
A.fw.prototype={
$1(a){++this.a.a},
$S(){return A.I(this.b).k("~(1)")}}
A.fx.prototype={
$0(){this.b.b1(this.a.a)},
$S:0}
A.cI.prototype={
gm(a){return(A.bL(this.a)^892482866)>>>0},
p(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bS&&b.a===this.a}}
A.cJ.prototype={
bW(){return this.w.dC(this)},
b9(){},
ba(){}}
A.aY.prototype={
U(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.bW()}q=$.iM()
return q},
bH(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.aE(a)
else this.d_(new A.e_(a))},
b9(){},
ba(){},
bW(){return null},
d_(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.e9()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.by(q)}},
aE(a){var s=this,r=s.e
s.e=r|64
s.d.cE(s.a,a)
s.e&=4294967231
s.d4((r&4)!==0)},
d4(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.b9()
else q.ba()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.by(q)},
$ial:1}
A.cX.prototype={
cp(a,b,c,d){return this.a.dL(a,d,c,b===!0)},
em(a){return this.cp(a,null,null,null)}}
A.e0.prototype={}
A.e_.prototype={}
A.e9.prototype={
by(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.k8(new A.hy(s,a))
s.a=1}}
A.hy.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.aE(s.b)},
$S:0}
A.bV.prototype={
U(){this.a=-1
this.c=null
return $.iM()},
dB(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.cD(s)}}else r.a=q},
$ial:1}
A.hI.prototype={}
A.hN.prototype={
$0(){A.kL(this.a,this.b)},
$S:0}
A.hA.prototype={
cD(a){var s,r,q
try{if(B.e===$.r){a.$0()
return}A.jQ(null,null,this,a)}catch(q){s=A.aN(q)
r=A.aM(q)
A.d6(s,r)}},
eG(a,b){var s,r,q
try{if(B.e===$.r){a.$1(b)
return}A.jR(null,null,this,a,b)}catch(q){s=A.aN(q)
r=A.aM(q)
A.d6(s,r)}},
cE(a,b){a.toString
return this.eG(a,b,t.z)},
bf(a){return new A.hB(this,a)},
dX(a,b){return new A.hC(this,a,b)},
eC(a){if($.r===B.e)return a.$0()
return A.jQ(null,null,this,a)},
cC(a){a.toString
return this.eC(a,t.z)},
eF(a,b){if($.r===B.e)return a.$1(b)
return A.jR(null,null,this,a,b)},
bs(a,b){var s=t.z
a.toString
return this.eF(a,b,s,s)},
eE(a,b,c){if($.r===B.e)return a.$2(b,c)
return A.mA(null,null,this,a,b,c)},
eD(a,b,c){var s=t.z
a.toString
return this.eE(a,b,c,s,s,s)},
eA(a){return a},
cz(a){var s=t.z
a.toString
return this.eA(a,s,s,s)}}
A.hB.prototype={
$0(){return this.a.cD(this.b)},
$S:0}
A.hC.prototype={
$1(a){return this.a.cE(this.b,a)},
$S(){return this.c.k("~(0)")}}
A.cP.prototype={
gv(a){var s=this,r=new A.e7(s,s.r,s.$ti.k("e7<1>"))
r.c=s.e
return r},
gl(a){return this.a},
F(a,b){var s=this.d9(b)
return s},
d9(a){var s=this.d
if(s==null)return!1
return this.bQ(s[a.gm(a)&1073741823],a)>=0},
c8(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bN(s==null?q.b=A.it():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bN(r==null?q.c=A.it():r,b)}else return q.cX(b)},
cX(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.it()
s=J.aq(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.b0(a)]
else{if(q.bQ(r,a)>=0)return!1
r.push(q.b0(a))}return!0},
bN(a,b){if(a[b]!=null)return!1
a[b]=this.b0(b)
return!0},
b0(a){var s=this,r=new A.hw(a)
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1}}
A.hw.prototype={}
A.e7.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.S(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.bR.prototype={
gl(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s[b]}}
A.f1.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:33}
A.m.prototype={
gv(a){return new A.a4(a,this.gl(a),A.c5(a).k("a4<m.E>"))},
O(a,b){return this.h(a,b)},
F(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.V(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.a(A.S(a))}return!1},
cq(a,b,c){return new A.y(a,b,A.c5(a).k("@<m.E>").S(c).k("y<1,2>"))},
N(a,b){A.dN(a,0,this.gl(a)-1,A.mM())},
aa(a){return this.N(a,null)},
j(a){return A.ih(a,"[","]")},
$ip:1}
A.bG.prototype={
eL(a){var s,r,q,p,o=this
for(s=new A.co(o,o.r,o.e),r=A.I(o).y[1];s.n();){q=s.d
p=o.h(0,q)
o.i(0,q,a.$2(q,p==null?r.a(p):p))}},
gl(a){return this.a},
j(a){return A.f6(this)},
$ia5:1}
A.f7.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:35}
A.ed.prototype={}
A.cq.prototype={
h(a,b){return this.a.h(0,b)},
G(a,b){this.a.G(0,b)},
gl(a){return this.a.a},
ga5(){var s=this.a
return new A.a9(s,A.I(s).k("a9<1>"))},
j(a){return A.f6(this.a)},
gaR(a){var s=this.a
return new A.aa(s,A.I(s).k("aa<2>"))},
$ia5:1}
A.cD.prototype={}
A.cx.prototype={
j(a){return A.ih(this,"{","}")}}
A.cV.prototype={}
A.d3.prototype={}
A.em.prototype={
e3(a){var s,r,q,p=A.jk(0,null,a.length)
if(0===p)return new Uint8Array(0)
s=new A.h4()
r=s.e4(0,a,0,p)
r.toString
q=s.a
if(q<-1)A.b1(A.ba("Missing padding character",a,p))
if(q>0)A.b1(A.ba("Invalid length, must be multiple of four",a,p))
s.a=-1
return r}}
A.h4.prototype={
e4(a,b,c,d){var s,r=this,q=r.a
if(q<0){r.a=A.jp(b,c,d,q)
return null}if(c===d)return new Uint8Array(0)
s=A.lw(b,c,d,q)
r.a=A.ly(b,c,d,s,0,r.a)
return s}}
A.dh.prototype={}
A.fe.prototype={
$2(a,b){var s=this.b,r=this.a,q=(s.a+=r.a)+a.a
s.a=q
s.a=q+": "
q=A.bz(b)
s.a+=q
r.a=", "},
$S:54}
A.ag.prototype={
bG(a){var s=1000,r=B.a.aS(a,s),q=B.a.B(a-r,s),p=this.b+r,o=B.a.aS(p,s),n=this.c
return new A.ag(A.id(this.a+B.a.B(p-o,s)+q,o,n),o,n)},
p(a,b){if(b==null)return!1
return b instanceof A.ag&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gm(a){return A.l6(this.a,this.b,B.n,B.n)},
cn(a){var s=this.a,r=a.a
if(s>=r)s=s===r&&this.b<a.b
else s=!0
return s},
D(a,b){var s=B.a.D(this.a,b.a)
if(s!==0)return s
return B.a.D(this.b,b.b)},
j(a){var s=this,r=A.j_(A.dG(s)),q=A.au(A.jg(s)),p=A.au(A.jc(s)),o=A.au(A.jd(s)),n=A.au(A.jf(s)),m=A.au(A.jh(s)),l=A.eu(A.je(s)),k=s.b,j=k===0?"":A.eu(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
eH(){var s=this,r=A.dG(s)>=-9999&&A.dG(s)<=9999?A.j_(A.dG(s)):A.kI(A.dG(s)),q=A.au(A.jg(s)),p=A.au(A.jc(s)),o=A.au(A.jd(s)),n=A.au(A.jf(s)),m=A.au(A.jh(s)),l=A.eu(A.je(s)),k=s.b,j=k===0?"":A.eu(k)
k=r+"-"+q
if(s.c)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j},
$iP:1}
A.b9.prototype={
p(a,b){if(b==null)return!1
return b instanceof A.b9&&this.a===b.a},
gm(a){return B.a.gm(this.a)},
D(a,b){return B.a.D(this.a,b.a)},
j(a){var s,r,q,p,o,n=this.a,m=B.a.B(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.B(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.B(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.c.ct(B.a.j(n%1e6),6,"0")},
$iP:1}
A.h7.prototype={
j(a){return this.bP()}}
A.v.prototype={
gab(){return A.la(this)}}
A.db.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bz(s)
return"Assertion failed"}}
A.aD.prototype={}
A.ae.prototype={
gb3(){return"Invalid argument"+(!this.a?"(s)":"")},
gb2(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.n(p),n=s.gb3()+q+o
if(!s.a)return n
return n+s.gb2()+": "+A.bz(s.gbm())},
gbm(){return this.b}}
A.bM.prototype={
gbm(){return this.b},
gb3(){return"RangeError"},
gb2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.dn.prototype={
gbm(){return this.b},
gb3(){return"RangeError"},
gb2(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.dC.prototype={
j(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cA("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=A.bz(n)
p=i.a+=p
j.a=", "}k.d.G(0,new A.fe(j,i))
m=A.bz(k.a)
l=i.j(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.cE.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.dQ.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.aV.prototype={
j(a){return"Bad state: "+this.a}}
A.dg.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bz(s)+"."}}
A.dE.prototype={
j(a){return"Out of Memory"},
gab(){return null},
$iv:1}
A.cy.prototype={
j(a){return"Stack Overflow"},
gab(){return null},
$iv:1}
A.h9.prototype={
j(a){return"Exception: "+this.a}}
A.ey.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.V(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.f(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.f(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.c.V(e,i,j)+k+"\n"+B.c.Z(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.n(f)+")"):g}}
A.l.prototype={
al(a,b,c){var s,r
for(s=this.gv(this),r=b;s.n();)r=c.$2(r,s.gq())
return r},
K(a,b,c){c.toString
return this.al(0,b,c,t.z)},
bd(a,b){var s
for(s=this.gv(this);s.n();)if(b.$1(s.gq()))return!0
return!1},
gl(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
O(a,b){var s,r
A.jj(b,"index")
s=this.gv(this)
for(r=b;s.n();){if(r===0)return s.gq();--r}throw A.a(A.j2(b,b-r,this,"index"))},
j(a){return A.kT(this,"(",")")}}
A.E.prototype={
gm(a){return A.j.prototype.gm.call(this,0)},
j(a){return"null"}}
A.j.prototype={$ij:1,
p(a,b){return this===b},
gm(a){return A.bL(this)},
j(a){return"Instance of '"+A.fo(this)+"'"},
cs(a,b){throw A.a(A.j9(this,b))},
gA(a){return A.hW(this)},
toString(){return this.j(this)}}
A.ea.prototype={
j(a){return""},
$iac:1}
A.fv.prototype={
gci(){var s,r=this.b
if(r==null)r=$.dH.$0()
s=r-this.a
if($.iO()===1e6)return s
return s*1000},
bB(a){var s=this,r=s.b
if(r!=null){s.a=s.a+($.dH.$0()-r)
s.b=null}},
cB(a){var s=this.b
this.a=s==null?$.dH.$0():s}}
A.cA.prototype={
gl(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.e.prototype={}
A.d8.prototype={
j(a){return String(a)}}
A.d9.prototype={
j(a){return String(a)}}
A.c9.prototype={}
A.b6.prototype={$ib6:1}
A.bw.prototype={$ibw:1}
A.af.prototype={
gl(a){return a.length}}
A.cb.prototype={
gl(a){return a.length}}
A.et.prototype={}
A.ah.prototype={$iah:1}
A.ew.prototype={
j(a){return String(a)}}
A.d.prototype={
j(a){return a.localName}}
A.b.prototype={$ib:1}
A.o.prototype={
a1(a,b,c,d){if(c!=null)this.cZ(a,b,c,d)},
aN(a,b,c,d){if(c!=null)this.bZ(a,b,c,d)},
cZ(a,b,c,d){return a.addEventListener(b,A.aK(c,1),d)},
bZ(a,b,c,d){return a.removeEventListener(b,A.aK(c,1),d)}}
A.dj.prototype={
gl(a){return a.length}}
A.cf.prototype={}
A.av.prototype={
ew(a,b,c,d){return a.open(b,c,!0)},
$iav:1}
A.eW.prototype={
$1(a){var s,r,q,p=this.a,o=p.status
o.toString
s=o>=200&&o<300
r=o>307&&o<400
o=s||o===0||o===304||r
q=this.b
if(o)q.bj(0,p)
else q.aG(a)},
$S:57}
A.dm.prototype={}
A.cg.prototype={$icg:1}
A.bf.prototype={$ibf:1}
A.f2.prototype={
j(a){return String(a)}}
A.bi.prototype={}
A.ay.prototype={$iay:1}
A.A.prototype={
j(a){var s=a.nodeValue
return s==null?this.cN(a):s},
$iA:1}
A.aA.prototype={$iaA:1}
A.dL.prototype={
gl(a){return a.length}}
A.cC.prototype={$icC:1}
A.aF.prototype={}
A.bm.prototype={
cA(a,b){var s
this.dc(a)
s=A.jX(b,t.H)
s.toString
return this.dE(a,s)},
dE(a,b){return a.requestAnimationFrame(A.aK(b,1))},
dc(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=["ms","moz","webkit","o"]
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[s[r]+"CancelAnimationFrame"]||b[s[r]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibm:1}
A.aG.prototype={$iaG:1}
A.ie.prototype={}
A.cL.prototype={
U(){var s,r=this,q=r.b
if(q==null)return $.i9()
s=r.d
if(s!=null)J.eh(q,r.c,s,!1)
r.d=r.b=null
return $.i9()},
$ial:1}
A.h8.prototype={
$1(a){return this.a.$1(a)},
$S:9}
A.dZ.prototype={}
A.fY.prototype={
ck(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bw(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.ef(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof Date)return new A.ag(A.id(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.a(A.fT("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.bt(a,t.z)
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null){r=j.ck(a)
q=j.b
if(!(r<q.length))return A.f(q,r)
p=q[r]
if(p!=null)return p
o=t.z
n=A.a3(o,o)
q[r]=n
j.e8(a,new A.h_(j,n))
return n}if(a instanceof Array){m=a
r=j.ck(m)
q=j.b
if(!(r<q.length))return A.f(q,r)
p=q[r]
if(p!=null)return p
o=J.b_(m)
l=o.gl(m)
p=j.c?new Array(l):m
if(!(r<q.length))return A.f(q,r)
q[r]=p
for(q=J.hU(p),k=0;k<l;++k)q.i(p,k,j.bw(o.h(m,k)))
return p}return a}}
A.h_.prototype={
$2(a,b){var s=this.a.bw(b)
this.b.i(0,a,s)
return s},
$S:18}
A.fZ.prototype={
e8(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.a_)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.cm.prototype={$icm:1}
A.hK.prototype={
$1(a){var s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.m7,a,!1)
A.ix(s,$.i7(),a)
return s},
$S:8}
A.hL.prototype={
$1(a){return new this.a(a)},
$S:8}
A.hP.prototype={
$1(a){return new A.cl(a)},
$S:19}
A.hQ.prototype={
$1(a){return new A.be(a,t.am)},
$S:20}
A.hR.prototype={
$1(a){return new A.ax(a)},
$S:17}
A.ax.prototype={
h(a,b){return A.iw(this.a[b])},
i(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.a(A.b5("property is not a String or num",null))
this.a[b]=A.hJ(c)},
p(a,b){if(b==null)return!1
return b instanceof A.ax&&this.a===b.a},
j(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.cR(0)
return s}},
cb(a,b){var s=this.a,r=b==null?null:A.bE(new A.y(b,A.n6(),A.x(b).k("y<1,@>")),!0,t.z)
return A.iw(s[a].apply(s,r))},
dZ(a){return this.cb(a,null)},
gm(a){return 0}}
A.cl.prototype={}
A.be.prototype={
bL(a){var s=a<0||a>=this.gl(0)
if(s)throw A.a(A.aB(a,0,this.gl(0),null,null))},
h(a,b){this.bL(b)
return this.cO(0,b)},
i(a,b,c){this.bL(b)
this.cT(0,b,c)},
gl(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.a(A.cz("Bad JsArray length"))},
N(a,b){this.cb("sort",[])},
aa(a){return this.N(0,null)},
$ip:1}
A.bZ.prototype={
i(a,b,c){return this.cP(0,b,c)}}
A.i4.prototype={
$1(a){return this.a.bj(0,a)},
$S:2}
A.i5.prototype={
$1(a){if(a==null)return this.a.aG(new A.ff(a===undefined))
return this.a.aG(a)},
$S:2}
A.ff.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.hu.prototype={
aL(a){if(a<=0||a>4294967296)throw A.a(A.lh("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
es(){return Math.random()}}
A.as.prototype={
gl(a){return a.length},
$ias:1}
A.c8.prototype={
cf(a){if(a.createGain!==undefined)return a.createGain()
else return a.createGainNode()},
e5(a,b){var s,r={},q=$.r
r.a=!1
s=a.decodeAudioData(b)
if(s!=null)return A.bt(s,t.A).bh(new A.ek(r,null,"[AudioContext.decodeAudioData] completed with a null error."))
return new A.C(q,t.ar).bt(new A.el(),t.A)}}
A.ek.prototype={
$1(a){if(this.a.a)if(!(a!=null))throw A.a(this.c)
throw A.a(a)},
$S:23}
A.el.prototype={
$1(a){if(t.A.b(a))return a
throw A.a(a)},
$S:24}
A.dd.prototype={}
A.ei.prototype={
ga2(){return new A.c_(this.dW(),t.dQ)},
dW(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ga2(a,b,c){if(b===1){p.push(c)
r=q}while(true)switch(r){case 0:o=s.a
r=2
return a.c7(o.gaR(o))
case 2:r=3
return a.c7(s.b)
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
eJ(a){var s,r,q,p=this
for(s=p.a,s=s.gaR(s),s=s.gv(s);s.n();)s.gq().aQ(a,p.ga2())
for(s=p.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.a_)(s),++q)s[q].aQ(a,p.ga2())}}
A.a1.prototype={
gbe(){return this.b-this.c-this.d},
ca(a){this.d+=a
this.c-=a},
aT(a){this.x=a},
j(a){return A.hW(this).j(0)+"<"+this.f+">"},
aQ(a,b){var s,r=this
if(!r.e)return
if(r.x.p(0,r.w))return
if(--r.y>0)return
s=r.x.ac(0,r.w).ger()
r.w=r.w.av(0,s)
r.y=10}}
A.bA.prototype={
a3(a){return!0},
ei(a){var s=this.Q
if(a.cn(s))return!1
return a.cn(s.bG(2592e9))}}
A.a6.prototype={
gcr(){switch(this.ax){case B.E:return 3
case B.a4:return 7
case B.a5:return 1/0}},
cc(a){if(!this.x.p(0,this.w))return!1
return a.ac(0,this.w).gaK()<=4},
a3(a){var s=this.at
if(s==null)return!1
return a.b.ac(0,s.d).gaK()<=this.gcr()*this.gcr()},
aT(a){var s=this,r=s.at
if(J.V(r==null?null:r.d,a)){s.bD(a)
return}r=s.at
if(r!=null){B.b.a7(r.c,s)
s.at=null}s.bD(a)},
aQ(a,b){var s,r,q,p=this
if(p.x.p(0,p.w))return
p.cM(a,b)
if(p.x.p(0,p.w)){s=a.e.h(0,p.w)
p.at=s
s.c.push(p)
r=p.w
q=t.fe
q=A.aj(new A.cG(b,q),q.k("l.E"))
p.du(a,r,q)}},
du(a,b,c){var s,r,q,p,o,n,m,l=A.h([],t.l),k=A.l_(t.u),j=new A.fl(a),i=b.gbp()
B.b.a0(l,new A.F(i,j,A.x(i).k("F<1>")))
i=a.d
r=i.a
q=i.b.b.a
p=r.length
while(!0){if(!(l.length!==0)){s=null
break}c$0:{o=B.b.ar(l,0)
n=o.gt(o)
m=o.gu(o)
i.E(n,m)
n=m*q+n
if(!(n>=0&&n<p))return A.f(r,n)
if(r[n].a===16777215){k.c8(0,o)
n=o.gbp()
B.b.a0(l,new A.F(n,new A.fi(j,k),A.x(n).k("F<1>")))
break c$0}if(B.b.bd(c,new A.fj(o))){k.c8(0,o)
n=o.gbp()
B.b.a0(l,new A.F(n,new A.fk(j,k),A.x(n).k("F<1>")))
break c$0}s=o
break}}if(s==null)throw A.a(A.cz("Cannot find place for "+this.j(0)+" to land."))
this.w=this.x=s}}
A.fl.prototype={
$1(a){return this.a.d.b.F(0,a)},
$S:10}
A.fi.prototype={
$1(a){return this.a.$1(a)&&!this.b.F(0,a)},
$S:10}
A.fj.prototype={
$1(a){return a.w.p(0,this.a)},
$S:26}
A.fk.prototype={
$1(a){return this.a.$1(a)&&!this.b.F(0,a)},
$S:10}
A.cw.prototype={
bP(){return"RangeMode."+this.b}}
A.at.prototype={}
A.f8.prototype={
gcj(){var s=this.d,r=this.e
return this.c.Q+new A.y(s,new A.f9(),A.x(s).k("y<1,c>")).K(0,0,A.i2())+0.7071067811865475*new A.y(r,new A.fa(),A.x(r).k("y<1,c>")).K(0,0,A.i2())},
gcI(){var s=this.e
return this.c.z+this.gcJ()+0.7071067811865475*new A.y(s,new A.fc(),A.x(s).k("y<1,c>")).K(0,0,A.i2())},
gcJ(){var s=this.d
return new A.y(s,new A.fb(),A.x(s).k("y<1,c>")).K(0,0,A.i2())},
geu(){var s=this.d
s=A.aQ(s,this.e,A.x(s).c)
return new A.F(s,new A.fd(),A.I(s).k("F<l.E>"))}}
A.f9.prototype={
$1(a){return a.Q},
$S:6}
A.fa.prototype={
$1(a){return a.Q},
$S:6}
A.fc.prototype={
$1(a){return a.z},
$S:6}
A.fb.prototype={
$1(a){return a.z},
$S:6}
A.fd.prototype={
$1(a){return!a.gap()},
$S:3}
A.dI.prototype={
ez(a){var s
$.kp().en(B.ao,new A.fq(a),null,null)
s=this.a
s===$&&A.i()
if(!s.gb6())A.b1(s.aW())
s.aE(a)},
d1(){}}
A.fq.prototype={
$0(){return"New "+this.a.j(0)+" about to be published."},
$S:29}
A.bO.prototype={}
A.fS.prototype={}
A.dM.prototype={
dV(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a,r=s.a,q=s.b,p=s.d,o=p.a,n=p.b.b.a,m=o.length,l=null,k=0;k<100;++k){j=$.iS().aL(r)
i=$.iS().aL(q)
p.E(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.f(o,j)
h=o[j]
if(h.a===16777215)continue
if(h.z>0)continue
if(h.Q>0)continue
l=h}if(l==null)return
r=l.b
s=s.c
g=new A.bA(s,!0,"Arrivals",B.B,r,B.G)
g.x=r
this.b.b.push(g)},
dj(a){var s,r,q,p
for(s=new A.c0(this.b.ga2().a()),r=a.a.b,q=a.b;s.n();){p=s.b
if(p.w.p(0,r)&&p.a!==q)p.e=!1}}}
A.u.prototype={
ge9(){var s,r=this,q=r.z
if(q>0){s=150+B.d.a8(B.a.aF(q*10,0,100))
return new A.D(s,s,s)}else{q=r.Q
if(q>0){s=150+B.d.a8(B.a.aF(q*10,0,100))
q=B.a.B(s,2)
return new A.D(s,q,q)}else{if(!(r.gap()||r.a===16777215))A.b0(r)
return r.e}}},
gap(){return this.z===0&&this.Q===0&&this.a!==16777215},
Y(a){var s
if(this.a===16777215)return!1
s=a.a
if(s&&this.z>0)return!0
if(!s&&this.Q>0)return!0
return!1},
j(a){var s=this,r=s.b,q=s.a
return"Tile<x="+r.a+",y="+r.b+",good="+s.z+",evil="+s.Q+",roughness="+q+",ocean="+(q===16777215)+">"},
eM(a,b,c){var s,r,q,p,o,n=this,m=a.d
m=A.aQ(m,a.e,A.x(m).c)
s=new A.F(m,new A.fL(),A.I(m).k("F<l.E>")).gl(0)
if(n.gap())r=a.geu().gl(0)>s?6:1
else r=0
if(c.ga2().bd(0,new A.fM(n,b)))r+=50
if(n.Y(b))r+=B.d.bi((b.a?n.z:n.Q)*1.5)
q=B.d.bi(a.gcj())
p=B.d.a4(a.gcI())
m=b.a
r+=B.d.a4((m?p-q:q-p)*0.2)
o=a.c.d
if(o!=null&&o.d.p(0,n.b))r=m?r+100:r
n.f.i(0,b,r)},
eN(a,b){var s,r,q,p,o=this.x
if(o.h(0,b)==null)o.i(0,b,0)
s=o.h(0,b)
s.toString
o.i(0,b,s*0.2)
s=a.d
s=A.aQ(s,a.e,A.x(s).c)
r=A.I(s).k("F<l.E>")
s=A.aj(new A.F(s,new A.fJ(),r),r.k("l.E"))
s.$flags=1
q=s
if(q.length!==0){p=B.b.K(q,0,new A.fK(b))
s=o.h(0,b)
s.toString
o.i(0,b,s+p*0.8)}s=o.h(0,b)
s.toString
r=this.f.h(0,b)
r.toString
o.i(0,b,s+r)},
eP(a,b,c,d){var s,r,q,p,o,n,m=this
if(m.a===16777215)return
s=m.y
if(s.h(0,b)==null)s.i(0,b,0)
if(!b.e){r=s.h(0,b)
r.toString
r=r>0}else r=!1
if(r){r=s.h(0,b)
r.toString
q=Math.max(B.a.B(r,2),1)
r=s.h(0,b)
r.toString
s.i(0,b,r-q)
b.ca(q)
m.J(b.a,-q)}r=s.h(0,b)
r.toString
if(r>0)if(!b.a3(a.c)||!b.x.p(0,b.w))m.dS(a,b)
else if(!m.dT(a,b,d))m.dR(a,b)
if(b.a){if(b.w.p(0,m.b)&&t.m.a(b).ei(c)){r=s.h(0,b)
r.toString
s.i(0,b,r+50)
b.b+=50
b.c+=50
m.J(!0,50)}return}t.h.a(b)
if(m.d==null)return
if(m.dU(b,d))return
if(m.Y(b))return
r=m.d
r.toString
p=m.dF(b,r,a)
r=s.h(0,b)
r.toString
s.i(0,b,r+p)
m.J(!1,p)
r=s.h(0,b)
r.toString
if(r>0){r=m.d
r.toString
o=s.h(0,b)
o.toString
n=m.dz(b,r,o)
o=s.h(0,b)
o.toString
s.i(0,b,o-n)
m.J(!1,-n)}},
eO(a,b){var s,r,q,p,o=this.w
if(o.h(0,b)==null)o.i(0,b,0)
s=o.h(0,b)
s.toString
o.i(0,b,s*0.2)
s=a.d
s=A.aQ(s,a.e,A.x(s).c)
r=A.I(s).k("F<l.E>")
s=A.aj(new A.F(s,new A.fO(),r),r.k("l.E"))
s.$flags=1
q=s
if(q.length!==0){p=B.b.K(q,0,new A.fP(b))
s=o.h(0,b)
s.toString
o.i(0,b,s+p*0.8)}s=o.h(0,b)
s.toString
r=this.r.h(0,b)
r.toString
o.i(0,b,s+r)},
dz(a,b,c){var s,r
if(!b.d.p(0,this.b))return 0
if(a.at===b)return 0
s=a.c
r=Math.min(c,s)
a.c=s-r
return r},
dF(a,b,c){var s,r
if(this.Q>0)return 0
if(!a.x.p(0,a.w))return 0
s=c.c.b
if(a.cc(s)){s=B.d.aP((B.d.bi(c.gcj())+10)/(1+Math.sqrt(s.ac(0,this.b).gaK())))
r=Math.min(B.a.aP(Math.min(a.gbe(),10)),s)
a.c+=r
return r}return 0},
J(a,b){if(a)this.Q+=b
else this.z+=b},
c6(a,b,c){var s,r=this,q=r.y
q.eL(new A.fz())
r.Q=r.z=0
s=a.a
b.ez(new A.bO(r,s))
q.i(0,a,c.gc9())
r.J(s,c.gc9())},
dR(a,b){var s,r,q,p=a.d,o=A.aQ(p,a.e,A.x(p).c).K(0,null,new A.fA(b))
p=this.x
if(p.h(0,b)==null)p.i(0,b,0)
if(o!=null){s=o.x.h(0,b)
s.toString
p=p.h(0,b)
p.toString
p=s>p}else p=!1
if(p){p=this.y
s=p.h(0,b)
s.toString
r=B.a.B(s,2)
if(!b.a3(a.c)){s=p.h(0,b)
s.toString
r=s}s=o.y
s.i(0,b,s.aq(b,new A.fB())+r)
s=b.a
o.J(s,r)
q=p.h(0,b)
q.toString
p.i(0,b,q-r)
this.J(s,-r)}},
dS(a,b){var s,r,q,p=a.d,o=A.aQ(p,a.e,A.x(p).c).K(0,null,new A.fC(b))
p=this.w
if(p.h(0,b)==null)p.i(0,b,0)
if(o!=null){s=o.w.h(0,b)
s.toString
p=p.h(0,b)
p.toString
p=s>p}else p=!1
if(p){p=this.y
s=p.h(0,b)
s.toString
r=o.y
r.i(0,b,r.aq(b,new A.fD())+s)
r=b.a
o.J(r,s)
q=p.h(0,b)
q.toString
p.i(0,b,q-s)
this.J(r,-s)}},
dT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.f.h(0,b)
if(e==null)e=0
s=b.a
r=s?f.Q:f.z
q=f.y
p=q.h(0,b)
p.toString
o=B.a.aF(r-e,0,p)
if(o===0)return!1
p=a.d
n=a.e
m=A.x(p).c
l=A.aQ(p,n,m)
if(new A.F(l,new A.fE(),A.I(l).k("F<l.E>")).gl(0)>0)return!1
l=A.aQ(p,n,m)
k=new A.F(l,new A.fF(b),A.I(l).k("F<l.E>")).gl(0)
m=A.aQ(p,n,m)
n=A.I(m).k("F<l.E>")
p=A.aj(new A.F(m,new A.fG(b),n),n.k("l.E"))
p.$flags=1
j=p
p=j.length
if(p===0)return!1
if(p>k)return!1
B.b.N(j,new A.fH())
i=B.b.gbk(j)
h=i.z+i.Q
if(o<=h)return!1
p=q.h(0,b)
p.toString
g=A.jP(p,h)
p=g.e
q.i(0,b,p)
f.J(s,p-g.b)
i.c6(b,c,g)
return!0},
dU(a,b){var s,r,q=this
if(!q.Y(a))return!1
if(!a.cc(q.b))return!1
if(a.gbe()===0)return!1
s=Math.min(100,a.gbe())
r=q.Q
if(s<=r)return!1
q.c6(a,b,A.jP(s,r))
return!0}}
A.fL.prototype={
$1(a){return a.gap()},
$S:3}
A.fM.prototype={
$1(a){return a.a!==this.b.a&&a.w.p(0,this.a.b)},
$S:31}
A.fJ.prototype={
$1(a){return a.a!==16777215},
$S:3}
A.fK.prototype={
$2(a,b){return Math.max(a,b.x.aq(this.a,new A.fI()))},
$S:12}
A.fI.prototype={
$0(){return 0},
$S:13}
A.fO.prototype={
$1(a){return a.a!==16777215},
$S:3}
A.fP.prototype={
$2(a,b){return Math.max(a,b.w.aq(this.a,new A.fN()))},
$S:12}
A.fN.prototype={
$0(){return 0},
$S:13}
A.fz.prototype={
$2(a,b){if(b===0)return 0
a.ca(b)
return 0},
$S:34}
A.fA.prototype={
$2(a,b){var s,r,q
if(b.a===16777215)return a
s=this.a
if(b.Y(s))return a
if(!s.a3(b))return a
if(a==null)return b
r=a.x
if(r.h(0,s)==null)r.i(0,s,0)
q=b.x
if(q.h(0,s)==null)q.i(0,s,0)
q=q.h(0,s)
q.toString
s=r.h(0,s)
s.toString
if(q>s)return b
return a},
$S:14}
A.fB.prototype={
$0(){return 0},
$S:5}
A.fC.prototype={
$2(a,b){var s,r,q
if(b.a===16777215)return a
s=this.a
if(b.Y(s))return a
if(a==null)return b
r=a.w
if(r.h(0,s)==null)r.i(0,s,0)
q=b.w
if(q.h(0,s)==null)q.i(0,s,0)
q=q.h(0,s)
q.toString
s=r.h(0,s)
s.toString
if(q>s)return b
return a},
$S:14}
A.fD.prototype={
$0(){return 0},
$S:5}
A.fE.prototype={
$1(a){return a.gap()},
$S:3}
A.fF.prototype={
$1(a){return a.Q>0===this.a.a},
$S:3}
A.fG.prototype={
$1(a){var s=this.a
return a.Y(s)&&s.a3(a)},
$S:3}
A.fH.prototype={
$2(a,b){return B.a.D(a.z+a.Q,b.z+b.Q)},
$S:36}
A.ha.prototype={
gc9(){var s=this.d
return this.b-s-s}}
A.c7.prototype={}
A.dX.prototype={
e6(a){var s,r,q,p,o=this.a
if(o>10){this.b=!0
return}s=Math.sqrt(o/10)
o=a.c
r=o.a
q=B.d.aP(r*s)
o=o.b
p=B.d.aP(o*s)
o=new A.bK(new A.k(r-q,o-p),a.d+q,a.e+p,a.f)
o.aH(0,0,0,o.ga9(0),o.gam(0))}}
A.e5.prototype={
T(){return this.b.cu(0)}}
A.ht.prototype={
$4(a,b,c,d){return A.b0("music loaded: "+b+", "+A.n(c)+", "+A.n(d))},
$C:"$4",
$R:4,
$S:37}
A.e8.prototype={
T(){A.b0("Sound is off. No bleeping for you. Try Alt-S.")}}
A.da.prototype={
gbn(){return!0},
bc(a,b){var s
if(b==null)return
s=this.a
s.toString
s.a6(new A.dl(this.c,t.J.a(b)))},
bl(a){var s,r,q,p=this
switch(a){case B.m:p.a.cv()
break
case B.y:p.e=B.y
s=p.a
s.toString
r=p.b.e
q=A.I(r).k("aa<2>")
r=A.aj(new A.aa(r,q),q.k("l.E"))
r.$flags=1
s.br(new A.dU(r,p.w))
$.b2().T()
break
case B.J:p.a.a6(new A.bH(p.c,B.E))
$.b2().T()
break
case B.K:p.a.a6(new A.bH(p.c,B.a4))
$.b2().T()
break
case B.L:p.a.a6(new A.bH(p.c,B.a5))
$.b2().T()
break
default:return!1}return!0},
bo(a,b,c){var s,r=this
if(c||b)return!1
s=r.d.$1(a)
if(s){r.x=r.bK()
$.b2().T()
r.cg()}return s},
M(a){var s=this,r=new A.bK(new A.k(47,6),s.f,s.r,a)
r.aH(0,0,0,r.ga9(0),r.gam(0))
r=s.x
r===$&&A.i()
r.e=s.e==null?B.h:B.p
r.M(a)},
bK(){var s,r,q=this.c
q=new A.y(q,new A.ej(),q.$ti.k("y<m.E,w>")).ej(0,", ")
s=A.h(["Go","Tight","Expanded","Destroy"],t.s)
r=A.h([],t.w)
r.push(new A.dX(new A.aH(new A.C($.r,t.D),t.ez)))
return new A.es(q,s,B.p,new A.ak(new A.k(this.f,this.r),new A.k(47,5)),r)}}
A.ej.prototype={
$1(a){return A.il(a.Q)},
$S:38}
A.dl.prototype={}
A.bH.prototype={}
A.dU.prototype={
gbn(){return!0},
bl(a){switch(a){case B.m:this.a.cv()
this.d.a=!1
break
default:return!1}return!0},
bo(a,b,c){var s,r,q,p,o=this
for(s=o.b,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===a){o.c=p
o.a.a6(p)
o.d.a=!1
$.b2().T()
return!0}}return!1},
bv(){this.d.a=!0}}
A.dk.prototype={
bc(a,b){var s,r,q,p,o,n=this
if(b==null){B.b.aj(n.ax)
return}if(b instanceof A.dl){for(s=b.a,r=s.$ti,s=new A.a4(s,s.gl(0),r.k("a4<m.E>")),q=b.b.d,p=n.at.a,r=r.k("m.E");s.n();){o=s.d
if(o==null)o=r.a(o)
o.aT(q)
p.cd(o)}B.b.aj(n.ax)}else if(b instanceof A.bH){s=b.a
r=s.j(s)
q=b.b
A.b0("changed mode of "+r+" to "+q.j(0))
for(r=s.$ti,s=new A.a4(s,s.gl(0),r.k("a4<m.E>")),p=n.at.a,r=r.k("m.E");s.n();){o=s.d
if(o==null)o=r.a(o)
o.ax=q
p.cd(o)}B.b.aj(n.ax)}else throw A.a(A.fT(b.j(0)))},
bl(a){var s,r=this
switch(a){case B.I:s=r.a
s.scF(!s.r)
break
case B.M:r.b.$0()
break
case B.N:A.ng()
break
case B.O:r.z=!r.z
break
case B.P:r.Q=!r.Q
break
case B.Q:r.at.dV()
break
default:return!1}return!0},
bo(a,b,c){var s,r,q=this,p=q.at,o=p.b.a.h(0,a)
if(o!=null){s=q.ax
s.push(o)
r=q.a
r.toString
s=new A.da(p.a,new A.bR(s,t.k),new A.eA(q),50,37,q.as)
s.x=s.bK()
r.br(s)
$.b2().T()
return!0}A.b0("unhandled keyDown: "+a+" ("+A.il(a)+")")
return!1},
M(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.c
a6.cB(0)
a6.bB(0)
a7.aH(0,0,0,a7.ga9(0),a7.gam(0))
for(s=a5.at,r=s.a,q=r.e,p=r.d,o=p.a,n=p.b.b.a,m=o.length,l=a5.as,s=s.b,k=s.a,j=0;j<130;++j)for(i=0;i<43;++i){h=new A.k(j,i)
p.E(j,i)
g=i*n+j
if(!(g>=0&&g<m))return A.f(o,g)
f=o[g]
e=f.c
d=null
if(a5.z){g=k.h(0,48)
g.toString
c=f.w.h(0,g)
if(c==null)c=0
g=a5.f=Math.min(c,a5.f)
b=a5.r=Math.max(c,a5.r)
a=B.d.a4(B.d.aF(c-g,g,b)/(b-g)*10)
if(!(a>=0&&a<11))return A.f(B.a0,a)
a0=B.a.j(B.a0[a])}else if(q.ak(h))if(l.a){a0=A.il(q.h(0,h).b).toUpperCase()
e=f.Q>0?B.B:B.X
d=B.i}else{d=f.Q>0?B.B:B.X
a0="\u25a0"}else a0=f.z===0&&f.Q===0&&f.a!==16777215?"\u2591":"\u2593"
a7.R(j,i,a0,d==null?f.ge9():d,e)}for(s=s.b,q=s.length,a1=0;a1<s.length;s.length===q||(0,A.a_)(s),++a1){a2=s[a1]
if(!a2.e)continue
p=a2.w
p=p.gt(p)
o=a2.w
o=o.gu(o)
a7.X(p,o,new A.Q(88,B.i,a2.r))}for(s=k.gaR(k),s=s.gv(s);s.n();){q=s.gq()
if(!q.e)continue
p=q.w
p=p.gt(p)
o=q.w
o=o.gu(o)
n=q.Q
q=q.r
a7.X(p,o,new A.Q(n,B.i,q))}s=a5.w
s===$&&A.i()
s.M(a7)
a5.x.M(a7)
a5.y.M(a7)
a7.P(100,0,"  Fortress Earth - tech demo  ")
a7.P(100,1,"   "+r.c.eH()+"    ")
if(a5.Q){a3=B.c.aM(B.d.cG(a5.e/1000,3),6)
a4=B.c.aM(B.d.cG(a5.d/1000,3),6)
a7.P(0,0,"render: "+a3+"ms  ")
a7.P(18,0,"update: "+a4+"ms  ")}a5.e=a6.gci()
if(a6.b==null)a6.b=$.dH.$0()},
bv(){var s,r,q,p=this,o=p.c
o.cB(0)
o.bB(0)
s=p.at
r=s.a
q=s.b
r.eK(q,s.c)
q.eJ(r)
p.cg()
p.d=o.gci()}}
A.eA.prototype={
$1(a){var s=this.a,r=s.at.b.a.h(0,a)
if(r==null)return!1
s=s.ax
if(B.b.F(s,r))B.b.a7(s,r)
else s.push(r)
return!0},
$S:39}
A.J.prototype={}
A.fU.prototype={
aO(a){var s,r,q,p,o,n,m,l,k
a.P(0,0,"Armies")
for(s=this.c.a,r=s.ga5(),r=r.gv(r),q=this.a.b.a,p=this.d,o=2;r.n();){n=r.gq()
m=s.h(0,n)
m.toString
l=p.F(p,m)?B.aj:B.i
a.R(0,o,B.c.Z(" ",q),B.h,l)
a.X(0,o,new A.Q(n,m.r,l))
a.R(2,o,m.f,B.h,l)
n=m.x.p(0,m.w)?"STNDBY":"TRANST"
a.R(14,o,n,m.x.p(0,m.w)?B.C:B.f,l)
n=m.e
k=n?"OK":"DEAD"
a.R(24,o,k,n?B.V:B.U,l)
a.R(30,o,B.c.aM(B.a.j(m.c),4),B.f,l)
a.R(35,o,B.c.aM(B.a.j(m.d),4),B.U,l);++o}}}
A.ep.prototype={
aO(a){var s
a.P(0,0,"Chat")
a.C(0,2,"Here you'll find text",B.f)
a.C(0,3,"messages from your generals.",B.f)
a.C(0,5,"Use keyboard to send units.",B.f)
a.C(0,6,"Alt-shift-X to add enemy.",B.f)
a.C(0,7,"Alt-S for sound.",B.f)
s=this.a.b.b-6
a.C(0,s,"@bot                  [0] HQ",B.f)
a.P(0,s+1+1,"Chat not implemented yet...")}}
A.eq.prototype={
gbg(a){return this.d.a?B.h:B.p},
aO(a){var s,r,q,p
a.P(0,0,"Cities")
for(s=this.c,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.a_)(s),++p){a.P(0,q,s[p].a)
a.C(22,q,"OK",B.V);++q}}}
A.er.prototype={
$2(a,b){return B.c.D(a.a,b.a)},
$S:40}
A.es.prototype={
aO(a){var s,r,q,p
a.C(0,0," Command for: ",B.C)
a.C(14,0,this.c+" ",B.f)
for(s=this.d,r=1,q=0;q<4;++q){p=s[q]
a.C(r,2,p,B.h)
a.C(r,3,"\u2580",B.C)
r+=p.length+4}},
gbg(a){return this.e}}
A.fh.prototype={
gbg(a){return B.p},
M(a){var s,r,q=this,p=q.a,o=p.a,n=o.a
o=o.b
p=p.b
s=p.a
p=p.b
A.kJ(a,n,o,s,p,q.gbg(q),"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
q.aO(new A.bK(new A.k(s-4,p-1),n+2,o,a))
r=q.b
while(!0){if(!(r.length!==0&&B.b.gbk(r).b))break
B.b.ar(r,0)}if(r.length===0)return
r=B.b.gbk(r)
r.e6(new A.bK(new A.k(s,p),n,o,a));++r.a
if(r.b)r.c.e0(0)}}
A.fV.prototype={
cd(a){var s,r,q
A.b0("Clearing demand for "+a.j(0))
for(s=this.d.a,r=A.x(s),s=new J.a2(s,s.length,r.k("a2<1>")),r=r.c;s.n();){q=s.d
if(q==null)q=r.a(q)
q.f.i(0,a,0)
q.x.i(0,a,0)
q.r.i(0,a,0)
q.w.i(0,a,0)}},
eK(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.a,r=b.b,q=b.d,p=q.a,o=q.b.b.a,n=p.length,m=0;m<100;++m){l=$.kq()
k=l.aL(s)
j=l.aL(r)
q.E(k,j)
l=j*o+k
if(!(l>=0&&l<n))return A.f(p,l)
i=p[l]
if(i.a===16777215)continue
h=b.dg(i)
for(l=new A.c0(a.ga2().a()),g=i.r,f=h.c,e=i.b;l.n();){d=l.b
i.eP(h,d,b.c,a0)
i.eM(h,d,a)
i.eN(h,d)
if(!d.a3(i))g.i(0,d,0)
else g.i(0,d,10)
if(i.Y(d)){c=g.h(0,d)
c.toString
g.i(0,d,c-1)}if(!d.a){c=f.d
c=c==null?null:!B.b.F(c.c,d)
c=c===!0}else c=!1
if(c)if(f.d.d.p(0,e)){c=g.h(0,d)
c.toString
g.i(0,d,c+10)}i.eO(h,d)}}b.c=b.c.bG(36e8)},
dg(a){var s=new A.fW(this),r=a.b,q=r.ge_(),p=t.en,o=p.k("l.E")
q=A.aj(new A.bJ(new A.y(q,s,A.x(q).k("y<1,u?>")),p),o)
q.$flags=1
r=r.ged()
s=A.aj(new A.bJ(new A.y(r,s,A.x(r).k("y<1,u?>")),p),o)
s.$flags=1
return new A.f8(a,q,s)},
dN(a){var s,r=a.gt(a),q=a.gu(a)
if(q<0||q>=this.b)return null
for(s=this.a;r<0;)r+=s
for(;r>=s;)r-=s
return new A.k(r,q)},
dQ(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=this.d.a,r=A.x(s),s=new J.a2(s,s.length,r.k("a2<1>")),q=this.e,r=r.c;s.n();){p=s.d
if(p==null)p=r.a(p)
for(o=new A.cp(q,q.r,q.e),n=p.b,m=null,l=4294967295;o.n();){k=o.d
j=n.ac(0,k.d)
i=j.a
j=j.b
h=i*i+j*j
if(h<l){l=h
m=k}}p.d=m}}}
A.fX.prototype={
$1(a){return t.J.a(a).d},
$S:62}
A.fW.prototype={
$1(a){var s=this.a,r=s.dN(a)
if(r==null)return null
return s.d.bx(r.a,r.b)},
$S:42}
A.i6.prototype={
$1(a){var s=A.mT(a),r=A.k3(a),q=t.U,p=t.S,o=t.i,n=0.3+$.kr().es()/3,m=1-n
n=0*n
return new A.u(s,a,r,new A.D(B.d.a8(r.a*m+n),B.d.a8(r.b*m+n),B.d.a8(r.c*m+n)),A.a3(q,p),A.a3(q,p),A.a3(q,o),A.a3(q,o),A.a3(q,p))},
$S:43}
A.h6.prototype={
$1(a){return a.U()},
$S:44}
A.e4.prototype={
cH(a){if(this.as==null)A.iB()
return this.r},
bu(){var s,r,q=this
for(s=q.e,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.f(s,r)
s[r].bu()}if(q.z&&q.as!=null){A.bt(q.as.close(),t.z)
q.as=null
A.iB()}return q},
c1(){var s,r,q=this,p=q.as
p=p!=null?p.state:null
q.at=p
if(p==null)q.at="suspended"
q.bJ()
if(!q.z)try{A.ca(null)}catch(r){q.y=!0
A.b0("** NO AUDIO AVAILABLE!")}try{s=A.ca(null)
if(s.muted)q.y=!0}catch(r){}if(!q.y)q.dI()
return q},
dI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d='audio/ogg; codecs="vorbis"',c="audio/aac;",b='audio/webm; codecs="vorbis"',a=null
try{a=A.ca(null)}catch(s){return this}r=A.H(a,"audio/mpeg;")
q=r||A.H(a,"audio/mp3;")
p=A.H(a,'audio/ogg; codecs="opus"')
o=A.H(a,d)
n=A.H(a,d)
m=A.H(a,'audio/wav; codecs="1"')
l=A.H(a,c)
k=A.H(a,"audio/x-caf;")
j=A.H(a,"audio/x-m4a;")||A.H(a,"audio/m4a;")||A.H(a,c)
i=A.H(a,"audio/x-m4b;")||A.H(a,"audio/m4b;")||A.H(a,c)
h=A.H(a,"audio/x-mp4;")||A.H(a,"audio/mp4;")||A.H(a,c)
g=A.H(a,b)
f=A.H(a,b)
e=A.H(a,'audio/mp4; codecs="ec-3"')
this.d=A.f0(["mp3",q,"mpeg",r,"opus",p,"ogg",o,"oga",n,"wav",m,"aac",l,"caf",k,"m4a",j,"m4b",i,"mp4",h,"weba",g,"webm",f,"dolby",e,"flac",A.H(a,"audio/x-flac;")||A.H(a,"audio/flac;")],t.N,t.y)
return this},
dP(){var s,r,q=this
if(q.CW||q.as!=null)return q
s=q.ax=q.CW=!1
if(!q.cx?q.as.sampleRate!==44100:s){q.cx=!0
q.bu()}q.cy=q.as.createBuffer(1,1,22050)
s=document
r=q.gc5()
B.l.a1(s,"touchstart",r,!0)
B.l.a1(s,"touchend",r,!0)
B.l.a1(s,"click",r,!0)
return q},
dO(a){var s,r,q,p,o,n,m,l,k,j,i=this
for(r=i.b;r.length<10;)try{s=new A.cM(A.ca(null),null)
s.d=!0
q=s
q.d===$&&A.i()
r.push(q)}catch(p){i.y=!0
break}for(r=i.e,o=0;o<r.length;++o){q=r[o]
n=q.p2
n===$&&A.i()
if(!n){m=q.dh()
for(l=0;l<m.length;++l){if(!(o<r.length))return A.f(r,o)
k=r[o].ai(m[l])
q=!1
if(k!=null){n=k.at
if(n!=null){q=n.d
q===$&&A.i()
q=!q}}if(q){q=k.at
q.d=!0
q.a.load()}}}}i.aZ()
j=i.as.createBufferSource()
j.buffer=i.cy
r=i.as.destination
r.toString
j.connect(r,0,0)
j.start(0)
A.bt(i.as.resume(),t.z)
A.am(j,"ended",new A.hs(i,j),!1)},
dw(){var s=this.b,r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
return s.pop()}A.bt(A.ca(null).play(),t.z).bh(new A.hr())
return A.ca(null)},
bJ(){var s,r,q,p,o,n,m=this
if(m.as==null||!$.G().z)return m
for(s=m.e,r=s.length,q=0;q<r;++q){p=s[q]
o=p.p2
o===$&&A.i()
if(o){n=0
while(!0){o=p.ch
o===$&&A.i()
if(!(n<o.length))break
if(!o[n].e)return m;++n}}}s=m.db
if(s!=null){s.U()
m.db=null}m.db=A.bl(A.by(0,30),new A.hq(m))
return m},
aZ(){var s,r,q=this,p=q.as
if(p==null||!$.G().z)return q
s=q.at
r=s==="running"
if(r&&p.state!=="interrupted"&&q.db!=null){q.db.U()
q.db=null}else{if(s!=="suspended")r=r&&p.state==="interrupted"
else r=!0
if(r){A.bt(p.resume(),t.z).bt(new A.hm(q),t.P)
p=q.db
if(p!=null){p.U()
q.db=null}}else if(s==="suspending")q.dx=!0}return q}}
A.hs.prototype={
$1(a){var s,r,q,p
this.b.disconnect(0)
s=this.a
s.CW=!0
r=document
q=s.gc5()
B.l.aN(r,"touchstart",q,!0)
B.l.aN(r,"touchend",q,!0)
B.l.aN(r,"click",q,!0)
for(s=s.e,p=0;p<s.length;++p)s[p].aB("unlock")},
$S:9}
A.hr.prototype={
$1(a){window
if(typeof console!="undefined")window.console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")},
$S:1}
A.hq.prototype={
$0(){var s,r=this.a
r.db=null
r.at="suspending"
s=new A.hn(r)
A.bt(r.as.suspend(),t.z).au(new A.ho(s),new A.hp(s),t.P)},
$S:0}
A.hn.prototype={
$0(){var s=this.a
s.at="suspended"
if(s.dx){s.dx=!1
s.aZ()}},
$S:4}
A.ho.prototype={
$1(a){this.a.$0()},
$S:1}
A.hp.prototype={
$1(a){this.a.$0()},
$S:1}
A.hm.prototype={
$1(a){var s,r=this.a
r.at="running"
for(r=r.e,s=0;s<r.length;++s)r[s].aB("resume")},
$S:1}
A.cN.prototype={}
A.bY.prototype={
gl(a){return this.a.length},
p(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.bY&&A.hW(this)===A.hW(b)&&A.iI(this.a,b.a,!1,!1)
else s=!0
return s},
gm(a){var s,r,q,p=this.b
if(p==null){for(p=this.a,s=p.length,r=0,q=0;q<p.length;p.length===s||(0,A.a_)(p),++q)r=r*31+B.c.gm(p[q])
this.b=r
p=r}return p},
j(a){return J.b4(this.a)}}
A.cO.prototype={}
A.bX.prototype={}
A.ai.prototype={
b4(a){var s=this
switch(a){case"end":return s.db
case"fade":return s.dx
case"load":return s.dy
case"loaderror":return s.fr
case"playerror":return s.fx
case"pause":return s.fy
case"play":return s.go
case"stop":return s.id
case"mute":return s.k1
case"volume":return s.k2
case"rate":return s.k3
case"seek":return s.k4
case"unlock":return s.ok
case"resume":return s.p1
default:return null}},
cV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var s,r,q,p=this
A.lF()
s=a8.length
if(s===0){window
if(typeof console!="undefined")window.console.error("An array of source files must be passed with any new Howl.")
return}s=$.G()
if(s.as==null)A.iB()
p.a=a
r=A.h([],t.s)
p.b=r
p.d=p.c=!1
p.e=d
p.f=a4
p.r=!0
p.w=a6
p.x=A.a3(t.N,t.v)
p.y=new A.bY(a8)
p.z=a9
b1=B.c.eI(b1).toUpperCase()
p.Q=b1.length!==0?b1:"GET"
p.as=!1
p.at=b0
p.ax=0
p.ay="unloaded"
p.ch=A.h([],t.g)
p.CW=A.a3(t.I,t.z)
p.cx=A.h([],t.aL)
p.cy=!1
r=t.M
q=A.h([],r)
p.db=q
q=A.h([],r)
p.dx=q
p.dy=h!=null?A.h([new A.cN(null,h,!1)],r):A.h([],r)
q=A.h([],r)
p.fr=q
q=A.h([],r)
p.fx=q
q=A.h([],r)
p.fy=q
q=A.h([],r)
p.go=q
q=A.h([],r)
p.id=q
q=A.h([],r)
p.k1=q
q=A.h([],r)
p.k2=q
q=A.h([],r)
p.k3=q
q=A.h([],r)
p.k4=q
q=A.h([],r)
p.ok=q
p.p1=A.h([],r)
p.p2=s.z&&!p.c
if(s.as!=null&&s.ax)s.dP()
s.e.push(p)
if(p.a)p.cx.push(new A.bX("play",new A.eI(p)))
p.bT()},
gbA(){var s=this.ch
s===$&&A.i()
return A.bE(new A.y(s,new A.eU(),A.x(s).k("y<1,@>")),!0,t.S)},
j(a){var s=this,r=s.ex(),q=s.ay,p=A.n(s.y),o=s.ch
o===$&&A.i()
return"Howl{ playing: "+r+", status: "+A.n(q)+", src: "+p+", sounds: "+A.n(o)+"}"},
bT(){var s,r,q,p,o,n,m,l=this,k=null,j="loaderror"
if($.G().y){l.I(j,k,"No audio support.")
return}r=0
while(!0){q=l.y.a
if(!(r<q.length)){s=k
break}p=q[r]
o=A.dJ("^data:audio/([^;,]+);",!1).cl(p)
if(o!=null){q=o.b
if(1>=q.length)return A.f(q,1)
n=q[1]}else n=k
if(n==null||n.length===0){q=A.k9(p,"?",1)
if(0>=q.length)return A.f(q,0)
s=q[0]
o=A.dJ("\\.([^.]+)$",!0).cl(s)
if(o!=null){q=o.b
if(1>=q.length)return A.f(q,1)
n=q[1]}else n=k}if(n!=null)n=n.toLowerCase()
q=n==null
if(q){window
if(typeof console!="undefined")window.console.warn('No file extension was found. Consider using the "format" property or specify an extension.')}if(!q){q=$.G()
m=A.dJ("^x-",!0)
n=A.nf(n,m,"")
q=q.d.h(0,n)
q.toString}else q=!1
if(q){q=l.y.a
if(!(r<q.length))return A.f(q,r)
s=q[r]
break}++r}if(s==null){l.I(j,k,"No codec support for selected audio sources.")
return}q=new A.bY(k)
q.a=A.h([s],t.s)
l.y=q
l.ay="loading"
if(window.location.protocol==="https:"&&B.c.V(s,0,5)==="http:"){l.c=!0
l.p2=!1}new A.aU(l).bE(l)
q=l.p2
q===$&&A.i()
if(q)l.dr()},
bq(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="__default",a1="play",a2={}
a2.a=a4
if(a4==null){a2.a=a0
s=b.cy
s===$&&A.i()
r=a
if(!s){s=b.ch
s===$&&A.i()
q=s.length
p=r
o=0
n=0
for(;n<q;++n){m=s[n]
if(m.e&&!m.f){++o
p=m.r}}if(o===1){a2.a=null
r=p}}}else{a2.a=null
r=a4}s=r!=null
l=s?b.ai(r):b.dk()
if(l==null)return a
if(s&&a2.a==null){a4=l.w
a2.a=a4
if(a4==null)a2.a=a0}if(b.ay!=="loaded"){l.w=a2.a
l.f=!1
k=l.r
s=b.cx
s===$&&A.i()
s.push(new A.bX(a1,new A.eP(b,k)))
return k}if(s&&!l.e){b.b5(a1)
return l.r}s=b.p2
s===$&&A.i()
if(s)$.G().aZ()
s=l.x
if(!(s>0)){s=b.x
s===$&&A.i()
s=s.h(0,a2.a).a
s.toString
s/=1000}j=Math.max(0,s)
s=b.x
s===$&&A.i()
s=s.h(0,a2.a).a
s.toString
q=b.x.h(0,a2.a).b
q.toString
i=Math.max(0,(s+q)/1000-j)
q=l.z
q.toString
h=B.d.ad(i*1000,Math.abs(q))
q=b.x.h(0,a2.a).a
q.toString
s=b.x.h(0,a2.a).a
s.toString
m=b.x.h(0,a2.a).b
m.toString
g=(s+m)/1000
l.w=a2.a
l.f=!1
f=new A.eQ(a2,b,l,j,q/1000,g)
if(j>=g){b.a_(l)
return a}e=l.at
if(b.p2){d=new A.eR(b,f,l,e,j,i,h,!1)
s=$.G()
if(s.at==="running"&&s.as.state!=="interrupted")d.$4(b,a1,l.r,a)
else{b.cy=!0
b.b4("resume").push(new A.cN(a,d,!0))
b.W(l.r)}}else{c=new A.eS(a2,b,e,j,l,f,!1,h)
s=e.a
if(s.src===u.a){q=b.y.a
if(0>=q.length)return A.f(q,0)
s.src=q[0]
s.load()}if(s.readyState>=3)c.$0()
else{b.cy=!0
b.W(l.r)
q=e.b
s=q==null?s:q
$.G()
J.ia(s,"canplaythrough",new A.eT(b,c,l),!1)}}return l.r},
cu(a){return this.bq(0,null)},
bC(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a_)(a),++r)this.aU(0,a[r])
return this},
aV(a,b,c){var s,r,q,p,o,n,m,l=this
if(l.ay==="loaded"){s=l.cy
s===$&&A.i()}else s=!0
if(s){s=l.cx
s===$&&A.i()
s.push(new A.bX("stop",new A.eV(l,b)))
return l}r=l.bR(b)
for(s=!c,q=0;q<r.length;++q){l.W(r[q])
if(!(q<r.length))return A.f(r,q)
p=l.ai(r[q])
if(p!=null){p.x=p.b
p.f=p.e=!0
if(!(q<r.length))return A.f(r,q)
l.dK(r[q])
o=p.at
if(o!=null){n=l.p2
n===$&&A.i()
if(n){o=o.c
if(o!=null){o.stop(0)
o=p.at
o.toString
l.bM(o)}}else{o=o.a
n=o.duration
if(!isNaN(n)||n==1/0||n==-1/0){o.currentTime=p.b
p.at.a.pause()
o=p.at.a
m=o.duration
if(m==1/0||m==-1/0)o.src=u.a}}}if(s)l.ae("stop",p.r)}}return l},
aU(a,b){return this.aV(0,b,!1)},
dK(a){this.ai(a)},
ex(){var s,r,q=this.ch
q===$&&A.i()
s=q.length
r=0
for(;r<s;++r)if(!q[r].e)return!0
return!1},
bu(){var s,r,q,p,o,n,m,l=this,k=l.ch
k===$&&A.i()
for(s=0;s<k.length;++s){r=k[s]
if(!r.e)l.aU(0,r.r)
q=l.p2
q===$&&A.i()
if(!q){if(!(s<k.length))return A.f(k,s)
k[s].at.a.src=u.a
q=r.at
p=q.b
q=p==null?q.a:p
q.toString
p=r.cy
if(p!=null)J.iT(q,"error",p,!1)
q=r.at
p=q.b
q=p==null?q.a:p
q.toString
p=$.G()
o=r.cx
if(o!=null)J.iT(q,"canplaythrough",o,!1)
q=r.at
q.d===$&&A.i()
p.b.push(q)}if(!(s<k.length))return A.f(k,s)
k[s].at=null
l.W(r.r)}k=$.G()
q=k.e
n=B.b.aI(q,l)
if(n>=0)B.b.ar(q,n)
s=0
while(!0){if(!(s<q.length)){m=!0
break}if(J.V(q[s].y,l.y)){m=!1
break}++s}if(m)l.p3.a7(0,l.y)
k.y=!1
l.ay="unloaded"
l.ch=A.h([],t.g)
return null},
ev(a,b,c){var s=this.b4(a)
s.toString
B.b.aj(s)
return this},
dr(){var s,r,q,p=this,o=p.y.a
if(0>=o.length)return A.f(o,0)
s=o[0]
r=p.p3.h(0,s)
if(r!=null){p.ax=r.duration
p.bU(r)
return}o=A.dJ("^data:[^;]+;base64,",!0)
if(o.b.test(s)){o=A.k9(s,",",1)
if(1>=o.length)return A.f(o,1)
p.bO(B.aw.gdY(B.a8.e3(o[1])))}else{o=p.Q
q=p.as
A.kP(s,o,p.at,"arraybuffer",q).au(new A.eG(p),new A.eH(p,s),t.P)}},
bO(a){var s=new A.eB(this),r=$.G().as
r.toString
B.x.e5(r,a).au(new A.eC(this,s),s,t.P)},
bU(a){var s,r=this,q=r.ax
if(q==null||q===0)q=r.ax=a.duration
s=r.x
s===$&&A.i()
if(s.a===0){q.toString
r.x=A.f0(["__default",new A.cO(0,B.d.a4(q*1000))],t.N,t.v)}if(r.ay!=="loaded"){r.ay="loaded"
r.aB("load")
r.af()}},
I(a,b,c){var s,r,q,p,o,n=this,m=n.b4(a)
for(s=m.length-1,r=t.M,q=null;s>=0;--s){if(!(s<m.length))return A.f(m,s)
p=m[s]
A.bl(B.D,new A.eD(n,p,a,b,c))
if(p.c){if(q==null)q=A.h([],r)
q.push(p)}}if(q!=null)for(r=q.length,o=0;o<q.length;q.length===r||(0,A.a_)(q),++o){p=q[o]
n.ev(a,p.a,p.b)}n.b5(a)},
ae(a,b){return this.I(a,b,null)},
aB(a){return this.I(a,null,null)},
b5(a){var s,r,q=this.cx
q===$&&A.i()
s=q.length
if(s!==0){if(0>=s)return A.f(q,0)
r=q[0]
if(a==null)r.b.$0()
else if(r.a===a){B.b.ar(q,0)
this.af()}}},
af(){return this.b5(null)},
a_(a){var s,r,q,p,o=this,n=a.w,m=o.p2
m===$&&A.i()
s=!1
if(!m){m=a.at
if(m!=null){m=m.a
m=!m.paused&&!m.ended&&m.currentTime<a.c}else m=s}else m=s
if(m){A.bl(A.by(100,0),new A.eE(o,a))
return}m=a.Q
m.toString
if(!m){m=o.x
m===$&&A.i()
m=m.h(0,n).c
m.toString
r=m}else r=!0
o.ae("end",a.r)
if(!o.p2&&r)o.aV(0,a.r,!0).bq(0,a.r)
if(o.p2&&r){o.ae("play",a.r)
m=a.b
a.x=m
$.G().as.currentTime
s=a.c
q=a.z
q.toString
p=B.d.ad((s-m)*1000,Math.abs(q))
q=o.CW
q===$&&A.i()
q.i(0,a.r,A.bl(A.by(p,0),new A.eF(o,a)))}if(o.p2&&!r){a.f=a.e=!0
a.x=a.b
o.W(a.r)
m=a.at
m.toString
o.bM(m)
$.G().bJ()}if(!o.p2&&!r)o.aV(0,a.r,!0)},
W(a){var s,r,q,p=this.CW
p===$&&A.i()
s=p.h(0,a)
if(s!=null){if(s instanceof A.eb)s.U()
else{r=this.ai(a)
if(r!=null&&r.at!=null){p=r.at
q=p.b
p=q==null?p.a:q
p.toString
J.eh(p,"ended",s,!1)}}this.CW.a7(0,a)}},
ai(a){var s,r,q,p=this.ch
p===$&&A.i()
s=p.length
r=0
for(;r<s;++r){q=p[r]
if(q.r===a)return q}return null},
dk(){var s,r,q,p,o,n=this
n.da()
s=n.ch
s===$&&A.i()
r=s.length
q=0
for(;q<r;++q){p=s[q]
if(p.f){o=p.a
p.as=o.d
p.Q=o.e
p.d=o.z
p.z=o.w
p.x=0
p.f=p.e=!0
p.w="__default"
p.r=++$.G().a
return p}}s=new A.aU(n)
s.bE(n)
return s},
da(){var s,r,q,p,o,n=this,m=n.f
m===$&&A.i()
s=n.ch
s===$&&A.i()
r=s.length
if(r<m)return
for(q=0,p=0;p<r;++p)if(s[p].f)++q
for(p=r-1;p>=0;--p){if(q<=m)return
s=n.ch
if(!(p<s.length))return A.f(s,p)
o=s[p]
if(o.f){s=n.p2
s===$&&A.i()
if(s){s=o.at
s=s!=null&&s.c!=null}else s=!1
if(s)o.at.c.disconnect(0)
B.b.ar(n.ch,p);--q}}},
bR(a){var s,r,q=t.bN
if(a==null){s=A.h([],q)
r=0
while(!0){q=this.ch
q===$&&A.i()
if(!(r<q.length))break
s.push(q[r].r);++r}return s}else return A.h([a],q)},
dh(){return this.bR(null)},
bM(a){var s,r,q=$.G()
if(q.cy!=null&&a.c!=null){a.c.disconnect(0)
s=q.ch
s.toString
if(s)try{a.c.buffer=q.cy}catch(r){}}a.c=null}}
A.eI.prototype={
$0(){return this.a.cu(0)},
$S:45}
A.eU.prototype={
$1(a){return a.r},
$S:46}
A.eP.prototype={
$0(){this.a.bq(0,this.b)},
$S:4}
A.eQ.prototype={
$0(){var s,r,q=this,p=q.c
p.e=!1
p.x=q.d
p.b=q.e
p.c=q.f
s=p.Q
s.toString
if(!s){s=q.b.x
s===$&&A.i()
s=s.h(0,q.a.a).c
s.toString
r=s}else r=s
p.Q=r},
$S:4}
A.eR.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m=this,l=m.a
l.cy=!1
m.b.$0()
s=m.c
r=s.at
r.toString
q=$.G()
r.c=q.as.createBufferSource()
r=s.at.c
r.toString
r.buffer=l.p3.h(0,l.y)
r=s.at
p=r.c
p.toString
r=r.b
r.toString
p.connect(r,0,0)
s.at.c.loop=s.Q
r=s.Q
r.toString
if(r){s.at.c.loopStart=s.b
s.at.c.loopEnd=s.c}r=s.at.c.playbackRate
r.toString
p=s.z
p.toString
o=q.as.currentTime
o.toString
r.setValueAtTime(p,o)
r=s.as
r.toString
if(!r){r=l.d
r.toString}else r=!0
if(r)n=0
else{r=s.d
r.toString
n=r}r=m.d
p=r.b.gain
p.toString
o=q.as.currentTime
o.toString
p.setValueAtTime(n,o)
q.as.currentTime
q=s.Q
q.toString
p=m.e
r=r.c
if(q)r.start(0,p,86400)
else r.start(0,p,m.f)
r=m.r
if(r>0&&r<1e8){q=l.CW
q===$&&A.i()
q.i(0,s.r,A.bl(A.by(r,0),new A.eN(l,s)))}if(!m.w)A.bl(B.D,new A.eO(l,s))},
$C:"$4",
$R:4,
$S:47}
A.eN.prototype={
$0(){return this.a.a_(this.b)},
$S:0}
A.eO.prototype={
$0(){var s=this.a
s.ae("play",this.b.r)
s.af()},
$S:0}
A.eS.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j="playerror",i=k.c,h=i.a
h.currentTime=k.d
q=k.e
p=q.as
p.toString
o=!0
if(!p){p=k.b.d
p.toString
if(!p){$.G()
p=h.muted}else p=o}else p=o
h.muted=p
p=q.d
p.toString
h.volume=p*$.G().cH(0)
p=q.z
p.toString
h.playbackRate=p
try{s=A.bt(h.play(),t.z)
p=k.b
o=p.cy=!0
k.f.$0()
s.bt(new A.eJ(p,i,k.r,q),t.P).bh(new A.eK(p,q))
n=q.z
n.toString
h.playbackRate=n
if(h.paused){p.I(j,q.r,u.m)
return}if(k.a.a==="__default"){o=q.Q
o.toString}n=p.CW
m=q.r
if(o){n===$&&A.i()
n.i(0,m,A.bl(A.by(k.w,0),new A.eL(p,q)))}else{n===$&&A.i()
n.i(0,m,new A.eM(p,q))
i=i.b
if(i==null)i=h
J.ia(i,"ended",p.CW.h(0,q.r),!1)}}catch(l){r=A.aN(l)
k.b.I(j,q.r,J.b4(r))}},
$S:4}
A.eJ.prototype={
$1(a){var s=this,r=s.a
r.cy=!1
s.b.d=!0
if(!s.c){r.ae("play",s.d.r)
r.af()}},
$S:1}
A.eK.prototype={
$1(a){var s,r=this.a
r.cy=!1
s=this.b
r.I("playerror",s.r,u.m)
s.e=s.f=!0},
$S:1}
A.eL.prototype={
$0(){this.a.a_(this.b)},
$S:0}
A.eM.prototype={
$1(a){var s=this.a,r=this.b
s.a_(r)
s.W(r.r)},
$S:1}
A.eT.prototype={
$1(a){this.b.$0()
this.a.W(this.c.r)},
$S:48}
A.eV.prototype={
$0(){return this.a.aU(0,this.b)},
$S:49}
A.eG.prototype={
$1(a){var s=a.status
s.toString
if(s<200||s>=400){this.a.I("loaderror",null,"Failed loading audio file with status: "+s)
return}this.a.bO(A.m8(a.response))},
$S:50}
A.eH.prototype={
$1(a){var s=this.a,r=s.p2
r===$&&A.i()
if(r){s.c=!0
s.p2=!1
s.ch=A.h([],t.g)
s.p3.a7(0,this.b)
s.bT()}},
$S:1}
A.eB.prototype={
$1(a){this.a.I("loaderror",null,"Decoding audio data failed.")},
$S:1}
A.eC.prototype={
$1(a){var s=this.a,r=s.ch
r===$&&A.i()
if(r.length!==0){s.p3.i(0,s.y,a)
s.bU(a)}else this.b.$1(null)},
$S:51}
A.eD.prototype={
$0(){var s=this
s.b.b.$4(s.a,s.c,s.d,s.e)},
$S:0}
A.eE.prototype={
$0(){this.a.a_(this.b)},
$S:0}
A.eF.prototype={
$0(){this.a.a_(this.b)},
$S:0}
A.cM.prototype={}
A.aU.prototype={
bE(a){var s,r,q,p,o=this,n=o.a
o.as=n.d
o.Q=n.e
o.d=n.z
o.z=n.w
o.x=0
o.f=o.e=!0
o.w="__default"
s=$.G()
o.r=++s.a
r=n.ch
r===$&&A.i()
r.push(o)
r=!0
q=o.as
q.toString
if(!q){r=n.d
r.toString}p=r?0:o.d
r=n.p2
r===$&&A.i()
if(r){r=s.as
r.toString
r=B.x.cf(r)
o.at=new A.cM(null,r)
r=r.gain
r.toString
p.toString
q=s.as.currentTime
q.toString
r.setValueAtTime(p,q)
q=o.at.b
q.toString
s=s.x
s===$&&A.i()
q.connect(s,0,0)}else if(!s.y){r=s.dw()
o.at=new A.cM(r,null)
q=o.gdd()
o.cy=q
B.H.a1(r,"error",q,!1)
q=o.gds()
o.cx=q
r=o.at.a
r.toString
B.H.a1(r,"canplaythrough",q,!1)
q=o.at.a
q.toString
r=n.y.a
if(0>=r.length)return A.f(r,0)
q.src=r[0]
r=o.at.a
r.toString
n.r===$&&A.i()
r.preload="auto"
r=o.at.a
r.toString
p.toString
r.volume=p*s.cH(0)
o.at.a.load()}},
de(a){var s=this,r=s.r,q=s.at.a.error
q=q!=null?A.jF(q.code):"0"
s.a.I("loaderror",r,q)
q=s.at
r=q.b
if(r==null)r=q.a
r.toString
J.eh(r,"error",s.cy,!1)},
dt(a){var s,r=this,q=r.a,p=Math.ceil(r.at.a.duration*10/10)
q.ax=p
s=q.x
s===$&&A.i()
if(s.a===0)q.x=A.f0(["__default",new A.cO(0,B.d.a4(p*1000))],t.N,t.v)
if(q.ay!=="loaded"){q.ay="loaded"
q.aB("load")
q.af()}p=r.at
s=p.b
p=s==null?p.a:s
p.toString
$.G()
J.eh(p,"canplaythrough",r.cx,!1)},
j(a){var s=this
return"Sound{id: "+s.r+", sprite: "+A.n(s.w)+", volume: "+A.n(s.d)+", paused: "+s.e+", loop: "+A.n(s.Q)+", muted: "+A.n(s.as)+"}"}}
A.bh.prototype={
p(a,b){if(b==null)return!1
return b instanceof A.bh&&this.b===b.b},
D(a,b){return this.b-b.b},
gm(a){return this.b},
j(a){return this.a},
$iP:1}
A.f3.prototype={
j(a){return"["+this.a.a+"] "+this.d+": "+this.b}}
A.bF.prototype={
gcm(){var s=this.b,r=s==null?null:s.a.length!==0,q=this.a
return r===!0?s.gcm()+"."+q:q},
gel(){var s,r
if(this.b==null){s=this.c
s.toString
r=s}else{s=$.iN().c
s.toString
r=s}return r},
en(a,b,c,d){var s,r,q=this,p=a.b
if(p>=q.gel().b){b=t.bK.a(b).$0()
s=typeof b=="string"?b:J.b4(b)
if(p>=2000){A.jm()
a.j(0)}p=q.gcm()
Date.now()
$.j8=$.j8+1
r=new A.f3(a,s,p)
if(q.b==null)q.bY(r)
else $.iN().bY(r)}},
bY(a){return null}}
A.f5.prototype={
$0(){var s,r,q,p=this.a
if(B.c.cL(p,"."))A.b1(A.b5("name shouldn't start with a '.'",null))
if(B.c.e7(p,"."))A.b1(A.b5("name shouldn't end with a '.'",null))
s=B.c.ek(p,".")
if(s===-1)r=p!==""?A.f4(""):null
else{r=A.f4(B.c.V(p,0,s))
p=B.c.aw(p,s+1)}q=new A.bF(p,r,A.a3(t.N,t.L))
if(r==null)q.c=B.ap
else r.d.i(0,p,q)
return q},
$S:52}
A.en.prototype={
ga9(a){return this.e.a.b.b.a},
gam(a){return this.e.a.b.b.b},
X(a,b,c){this.e.cK(a,b,c)},
eB(){var s=this,r=s.f
s.w.font=""+r.b*s.x+"px "+r.a+", monospace"
s.e.M(new A.eo(s))}}
A.eo.prototype={
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
m.fillText(A.ll(A.h([o],t.t)),(r+l.e)*n,(p+l.f)*n)},
$S:53}
A.ex.prototype={}
A.ev.prototype={
cK(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.bx(a,b).p(0,c))r.bz(a,b,c)
else r.bz(a,b,null)},
M(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=this.b,m=n.a,l=n.b.b.a,k=m.length,j=0;j<q;++j)for(i=j*r,h=j*l,g=0;g<r;++g){n.E(g,j)
f=h+g
if(!(f>=0&&f<k))return A.f(m,f)
e=m[f]
if(e==null)continue
a.$3(g,j,e)
s.E(g,j)
d=i+g
if(!(d>=0&&d<o))return A.f(p,d)
p[d]=e
n.E(g,j)
m[f]=null}}}
A.D.prototype={
gm(a){return B.a.gm(this.a)^B.a.gm(this.b)^B.a.gm(this.c)},
p(a,b){if(b==null)return!1
if(b instanceof A.D)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1}}
A.Q.prototype={
gm(a){return B.a.gm(this.a)^this.b.gm(0)^this.c.gm(0)},
p(a,b){if(b==null)return!1
if(b instanceof A.Q)return this.a===b.a&&this.b.p(0,b.b)&&this.c.p(0,b.c)
return!1}}
A.ds.prototype={}
A.N.prototype={
p(a,b){if(b==null)return!1
if(b instanceof A.N)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gm(a){var s=B.a.gm(this.a),r=this.b?519018:218159,q=this.c?519018:218159
return s^r^q},
j(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.bK.prototype={
ga9(a){return this.c.a},
gam(a){return this.c.b},
X(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.X(r.d+a,r.e+b,c)}}
A.fy.prototype={
aH(a,b,c,d,e){var s,r,q,p,o=A.kO(32,B.h,B.i)
for(s=c+e,r=b+d,q=c;q<s;++q)for(p=b;p<r;++p)this.X(p,q,o)},
R(a,b,c,d,e){var s,r,q
if(d==null)d=B.h
if(e==null)e=B.i
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.ga9(this))break
this.X(q,b,new A.Q(c.charCodeAt(r),d,e))}},
P(a,b,c){return this.R(a,b,c,null,null)},
C(a,b,c,d){return this.R(a,b,c,d,null)}}
A.ft.prototype={}
A.cF.prototype={
seb(a){var s,r,q=this
if(q.e!=null)return
s=document
r=s.body
r.toString
q.e=A.am(r,"keydown",q.gdl(),!1)
s=s.body
s.toString
q.f=A.am(s,"keyup",q.gdn(),!1)},
scF(a){var s=this
if(a===s.r)return
s.r=a
if(a){s.x=null
B.a7.cA(window,s.gc3())}},
br(a){a.a=this
this.b.push(a)
this.bb()},
a6(a){var s,r,q,p=this.b
if(0>=p.length)return A.f(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.f(p,q)
p[q].bc(s,a)
this.bb()},
cv(){return this.a6(null)},
cw(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bv()
if(this.d)this.bb()},
dm(a){var s,r,q,p=a.keyCode
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
r=this.a.a.h(0,new A.N(p,a.shiftKey,a.altKey))
q=B.b.gco(this.b)
if(r!=null){a.preventDefault()
if(q.bl(r))return}s=a.shiftKey
if(q.bo(p,a.altKey,s))a.preventDefault()},
dq(a){a.keyCode
B.b.gco(this.b)
a.shiftKey
a.altKey},
dM(a){var s=this,r=s.x
if(r!=null){if(a-r>16.666666666666668){s.cw()
s.x=a}}else{s.cw()
s.x=a}if(s.r)B.a7.cA(window,s.gc3())},
bb(){var s,r,q=this.c
q.aH(0,0,0,q.ga9(0),q.gam(0))
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.f(s,r)
if(!s[r].gbn())break}if(r<0)r=0
for(;r<s.length;++r)s[r].M(q)
this.d=!1
q.eB()}}
A.bk.prototype={
gbn(){return!1},
cg(){var s=this.a
if(s==null)return
s.d=!0},
bc(a,b){},
bv(){},
M(a){}}
A.ar.prototype={
cU(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
for(s=k.a,r=k.b.b.a,q=0*r,p=s.length,o=1;o<a;++o){n=c.$1(new A.k(o,0))
k.E(o,0)
m=q+o
if(!(m>=0&&m<p))return A.f(s,m)
s[m]=n}for(l=1;l<b;++l)for(q=l*r,o=0;o<a;++o){n=c.$1(new A.k(o,l))
k.E(o,l)
m=q+o
if(!(m>=0&&m<p))return A.f(s,m)
s[m]=n}},
bx(a,b){var s,r
this.E(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]},
bz(a,b,c){var s,r
this.E(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.f(s,r)
s[r]=c},
gv(a){var s=this.a
return new J.a2(s,s.length,A.x(s).k("a2<1>"))},
E(a,b){if(a<0||a>=this.b.b.a)throw A.a(A.fr(a,"x"))
if(b<0||b>=this.b.b.b)throw A.a(A.fr(b,"y"))}}
A.W.prototype={
bP(){return"Direction."+this.b},
j(a){var s
switch(this){case B.Y:s="none"
break
case B.k:s="n"
break
case B.t:s="ne"
break
case B.q:s="e"
break
case B.r:s="se"
break
case B.j:s="s"
break
case B.v:s="sw"
break
case B.u:s="w"
break
case B.w:s="nw"
break
default:s=null}return s},
$ik:1,
gt(a){return this.c},
gu(a){return this.d}}
A.e1.prototype={}
A.ak.prototype={
j(a){return"("+this.a.j(0)+")-("+this.b.j(0)+")"},
F(a,b){var s,r=this.a,q=r.a
if(b.gt(b)<q)return!1
s=this.b
if(b.gt(b)>=q+s.a)return!1
r=r.b
if(b.gu(b)<r)return!1
if(b.gu(b)>=r+s.b)return!1
return!0},
gv(a){var s=this.a
return new A.fs(this,s.a-1,s.b)}}
A.fs.prototype={
gq(){return new A.k(this.b,this.c)},
n(){var s=this,r=s.a,q=r.a,p=q.a
r=r.b
if(++s.b>=Math.max(p,p+r.a)){s.b=p;++s.c}q=q.b
return s.c<Math.max(q,q+r.b)}}
A.dT.prototype={
gaK(){var s=this
return s.gt(s)*s.gt(s)+s.gu(s)*s.gu(s)},
gl(a){return Math.sqrt(this.gaK())},
ger(){var s,r,q,p=this,o=p.gt(p),n=p.gu(p)
$label0$0:{s=o<0
r=s
if(r&&p.gu(p)/p.gt(p)>=2){r=B.k
break $label0$0}if(s&&p.gu(p)/p.gt(p)>=0.5){r=B.w
break $label0$0}if(s&&p.gu(p)/p.gt(p)>=-0.5){r=B.u
break $label0$0}if(s&&p.gu(p)/p.gt(p)>=-2){r=B.v
break $label0$0}if(s){r=B.j
break $label0$0}q=o>0
r=q
if(r&&p.gu(p)/p.gt(p)>=2){r=B.j
break $label0$0}if(q&&p.gu(p)/p.gt(p)>=0.5){r=B.r
break $label0$0}if(q&&p.gu(p)/p.gt(p)>=-0.5){r=B.q
break $label0$0}if(q&&p.gu(p)/p.gt(p)>=-2){r=B.t
break $label0$0}if(q){r=B.k
break $label0$0}if(n<0){r=B.k
break $label0$0}if(n>0){r=B.j
break $label0$0}r=B.Y
break $label0$0}return r},
gbp(){var s,r=A.h([],t.l)
for(s=0;s<8;++s)r.push(this.av(0,B.as[s]))
return r},
ge_(){var s,r=A.h([],t.l)
for(s=0;s<4;++s)r.push(this.av(0,B.au[s]))
return r},
ged(){var s,r=A.h([],t.l)
for(s=0;s<4;++s)r.push(this.av(0,B.aq[s]))
return r},
av(a,b){var s,r,q=this
$label0$0:{s=q.gt(q)
r=q.gu(q)
break $label0$0}return new A.k(s+b.c,r+b.d)},
ac(a,b){var s,r,q,p,o=this
$label0$0:{s=o.gt(o)
r=b.gt(b)
q=o.gu(o)
p=b.gu(b)
break $label0$0}return new A.k(s-r,q-p)},
j(a){var s=this
return""+s.gt(s)+", "+s.gu(s)}}
A.k.prototype={
p(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gt(b)&&this.b===b.gu(b)},
gm(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.a.B(r*(r+1),2)+s},
gt(a){return this.a},
gu(a){return this.b}}
A.ee.prototype={}
A.i0.prototype={
$1(a){A.jV()},
$S:9}
A.hO.prototype={
$0(){var s=window.outerHeight,r=window.innerHeight
r.toString
return 1>=s-r},
$S:56};(function aliases(){var s=J.ch.prototype
s.cN=s.j
s=J.bg.prototype
s.cQ=s.j
s=A.bT.prototype
s.cS=s.aW
s=A.j.prototype
s.cR=s.j
s=A.ax.prototype
s.cO=s.h
s.cP=s.i
s=A.bZ.prototype
s.cT=s.i
s=A.a1.prototype
s.bD=s.aT
s.cM=s.aQ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers.installStaticTearOff
s(J,"mk","kV",16)
r(A,"mw","l9",5)
q(A,"mI","lt",7)
q(A,"mJ","lu",7)
q(A,"mK","lv",7)
r(A,"jZ","mD",0)
s(A,"mL","my",11)
p(A.cH.prototype,"ge1",0,1,null,["$2","$1"],["ce","aG"],27,0,0)
o(A.C.prototype,"gd5","d6",11)
n(A.bV.prototype,"gdA","dB",0)
s(A,"mM","l0",16)
q(A,"n6","hJ",59)
q(A,"n5","iw",60)
s(A,"i2","l5",61)
n(A.dI.prototype,"gd0","d1",0)
m(A.dM.prototype,"gdi","dj",30)
q(A,"mX","lC",2)
q(A,"mW","lB",2)
q(A,"iG","lD",2)
l(A,"mY",0,null,["$1","$0"],["jq",function(){return A.jq(!1)}],41,0)
r(A,"mV","lA",0)
m(A.e4.prototype,"gc5","dO",2)
var k
m(k=A.aU.prototype,"gdd","de",2)
m(k,"gds","dt",2)
m(k=A.cF.prototype,"gdl","dm",15)
m(k,"gdn","dq",15)
m(k,"gc3","dM",55)
r(A,"n9","jV",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.j,null)
p(A.j,[A.ii,J.ch,J.a2,A.v,A.aO,A.fu,A.l,A.a4,A.dV,A.di,A.dW,A.dD,A.cd,A.dS,A.m,A.aC,A.cq,A.bx,A.e6,A.eX,A.fQ,A.fg,A.cW,A.hz,A.bG,A.f_,A.co,A.cp,A.cU,A.eY,A.hx,A.hG,A.ab,A.e3,A.ec,A.eb,A.c0,A.a7,A.bN,A.aY,A.bT,A.cH,A.bW,A.C,A.dY,A.e0,A.e9,A.bV,A.hI,A.cx,A.hw,A.e7,A.ed,A.dh,A.h4,A.ag,A.b9,A.h7,A.dE,A.cy,A.h9,A.ey,A.E,A.ea,A.fv,A.cA,A.et,A.ie,A.cL,A.fY,A.ax,A.ff,A.hu,A.ei,A.a1,A.at,A.f8,A.dI,A.bO,A.fS,A.dM,A.u,A.ha,A.c7,A.e5,A.e8,A.bk,A.dl,A.bH,A.J,A.fh,A.fV,A.e4,A.cN,A.bY,A.cO,A.bX,A.ai,A.cM,A.aU,A.bh,A.f3,A.bF,A.fy,A.ex,A.ev,A.D,A.Q,A.ds,A.N,A.cF,A.fs,A.dT,A.ee])
p(J.ch,[J.dp,J.cj,J.T,J.bC,J.bD,J.bB,J.bd])
p(J.T,[J.bg,J.q,A.dt,A.ct,A.o,A.b6,A.dZ,A.ew,A.b,A.cg,A.f2,A.cm,A.as])
p(J.bg,[J.dF,J.bP,J.aw])
q(J.eZ,J.q)
p(J.bB,[J.ci,J.dq])
p(A.v,[A.cn,A.aD,A.dr,A.dR,A.dK,A.e2,A.db,A.ae,A.dC,A.cE,A.dQ,A.aV,A.dg])
p(A.aO,[A.de,A.df,A.dP,A.hX,A.hZ,A.h1,A.h0,A.hD,A.hk,A.fw,A.hC,A.eW,A.h8,A.hK,A.hL,A.hP,A.hQ,A.hR,A.i4,A.i5,A.ek,A.el,A.fl,A.fi,A.fj,A.fk,A.f9,A.fa,A.fc,A.fb,A.fd,A.fL,A.fM,A.fJ,A.fO,A.fE,A.fF,A.fG,A.ht,A.ej,A.eA,A.fX,A.fW,A.i6,A.h6,A.hs,A.hr,A.ho,A.hp,A.hm,A.eU,A.eR,A.eJ,A.eK,A.eM,A.eT,A.eG,A.eH,A.eB,A.eC,A.eo,A.i0])
p(A.de,[A.i3,A.fn,A.h2,A.h3,A.hE,A.ez,A.hb,A.hg,A.hf,A.hd,A.hc,A.hj,A.hi,A.hh,A.fx,A.hy,A.hN,A.hB,A.fq,A.fI,A.fN,A.fB,A.fD,A.hq,A.hn,A.eI,A.eP,A.eQ,A.eN,A.eO,A.eS,A.eL,A.eV,A.eD,A.eE,A.eF,A.f5,A.hO])
p(A.l,[A.aP,A.F,A.ce,A.cG,A.bJ,A.bo,A.c_,A.ar,A.ak])
p(A.aP,[A.aS,A.a9,A.aa])
q(A.y,A.aS)
q(A.cc,A.ce)
q(A.bQ,A.m)
q(A.d3,A.cq)
q(A.cD,A.d3)
q(A.b7,A.cD)
p(A.bx,[A.b8,A.bc])
p(A.df,[A.fm,A.hY,A.hl,A.f1,A.f7,A.fe,A.h_,A.fK,A.fP,A.fz,A.fA,A.fC,A.fH,A.er])
q(A.cv,A.aD)
p(A.dP,[A.dO,A.bv])
q(A.Y,A.bG)
q(A.ck,A.Y)
p(A.ct,[A.du,A.bI])
p(A.bI,[A.cQ,A.cS])
q(A.cR,A.cQ)
q(A.cr,A.cR)
q(A.cT,A.cS)
q(A.cs,A.cT)
p(A.cr,[A.dv,A.dw])
p(A.cs,[A.dx,A.dy,A.dz,A.dA,A.dB,A.cu,A.bj])
q(A.cZ,A.e2)
q(A.cX,A.bN)
q(A.cI,A.cX)
q(A.bS,A.cI)
q(A.cJ,A.aY)
q(A.bU,A.cJ)
q(A.cY,A.bT)
q(A.aH,A.cH)
q(A.e_,A.e0)
q(A.hA,A.hI)
q(A.cV,A.cx)
q(A.cP,A.cV)
q(A.bR,A.bQ)
q(A.em,A.dh)
p(A.ae,[A.bM,A.dn])
p(A.o,[A.A,A.dm,A.bm,A.aG,A.dd])
p(A.A,[A.d,A.af,A.ah])
q(A.e,A.d)
p(A.e,[A.d8,A.d9,A.bi,A.bw,A.dj,A.dL])
q(A.c9,A.bi)
q(A.cb,A.dZ)
q(A.cf,A.ah)
q(A.av,A.dm)
p(A.b,[A.aF,A.aA])
p(A.aF,[A.bf,A.ay,A.cC])
q(A.fZ,A.fY)
p(A.ax,[A.cl,A.bZ])
q(A.be,A.bZ)
q(A.c8,A.dd)
p(A.a1,[A.bA,A.a6])
p(A.h7,[A.cw,A.e1])
q(A.dX,A.c7)
p(A.bk,[A.da,A.dU,A.dk])
p(A.fh,[A.fU,A.ep,A.eq,A.es])
p(A.fy,[A.ft,A.bK])
q(A.en,A.ft)
q(A.W,A.e1)
q(A.k,A.ee)
s(A.bQ,A.dS)
s(A.cQ,A.m)
s(A.cR,A.cd)
s(A.cS,A.m)
s(A.cT,A.cd)
s(A.d3,A.ed)
s(A.dZ,A.et)
r(A.bZ,A.m)
s(A.e1,A.dT)
s(A.ee,A.dT)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",z:"double",O:"num",w:"String",L:"bool",E:"Null",p:"List",j:"Object",a5:"Map"},mangledNames:{},types:["~()","E(@)","~(@)","L(u)","E()","c()","c(u)","~(~())","@(@)","~(b)","L(k)","~(j,ac)","z(z,u)","z()","u?(u?,u)","~(bf)","c(@,@)","ax(@)","@(@,@)","cl(@)","be<@>(@)","aR<~>()","@(@,w)","0&(@)","as(j)","@(w)","L(a6)","~(j[ac?])","~(w,@)","w()","~(bO)","L(a1)","E(j,ac)","~(@,@)","c(a1,c)","~(j?,j?)","c(u,u)","~(ai,w,c?,w?)","w(a6)","L(c)","c(at,at)","~([L])","u?(k)","u(k)","~(al<@>)","c?()","c?(aU)","E(ai,w,c?,w?)","E(b)","ai()","E(av)","E(as)","bF()","~(c,c,Q)","~(cB,@)","~(O)","L()","~(aA)","E(~())","j?(j?)","j?(@)","c(c,c)","k(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{}}
A.lU(v.typeUniverse,JSON.parse('{"dF":"bg","bP":"bg","aw":"bg","nk":"b","nt":"b","ny":"d","nW":"aA","nm":"e","nB":"A","ns":"A","nQ":"ah","nz":"ay","nO":"bi","np":"aF","nr":"aG","no":"af","nD":"af","nu":"b6","dp":{"L":[],"t":[]},"cj":{"E":[],"t":[]},"q":{"p":["1"]},"eZ":{"q":["1"],"p":["1"]},"bB":{"z":[],"O":[],"P":["O"]},"ci":{"z":[],"c":[],"O":[],"P":["O"],"t":[]},"dq":{"z":[],"O":[],"P":["O"],"t":[]},"bd":{"w":[],"P":["w"],"t":[]},"cn":{"v":[]},"aP":{"l":["1"]},"aS":{"aP":["1"],"l":["1"]},"y":{"aS":["2"],"aP":["2"],"l":["2"],"aS.E":"2","l.E":"2"},"F":{"l":["1"],"l.E":"1"},"ce":{"l":["1"],"l.E":"1"},"cc":{"ce":["1"],"l":["1"],"l.E":"1"},"cG":{"l":["1"],"l.E":"1"},"bJ":{"l":["1"],"l.E":"1"},"bQ":{"m":["1"],"p":["1"]},"aC":{"cB":[]},"b7":{"cD":["1","2"],"a5":["1","2"]},"bx":{"a5":["1","2"]},"b8":{"bx":["1","2"],"a5":["1","2"]},"bo":{"l":["1"],"l.E":"1"},"bc":{"bx":["1","2"],"a5":["1","2"]},"cv":{"aD":[],"v":[]},"dr":{"v":[]},"dR":{"v":[]},"cW":{"ac":[]},"aO":{"bb":[]},"de":{"bb":[]},"df":{"bb":[]},"dP":{"bb":[]},"dO":{"bb":[]},"bv":{"bb":[]},"dK":{"v":[]},"Y":{"bG":["1","2"],"a5":["1","2"]},"a9":{"aP":["1"],"l":["1"],"l.E":"1"},"aa":{"aP":["1"],"l":["1"],"l.E":"1"},"ck":{"Y":["1","2"],"bG":["1","2"],"a5":["1","2"]},"dt":{"t":[]},"ct":{"B":[]},"du":{"B":[],"t":[]},"bI":{"X":["1"],"B":[]},"cr":{"m":["z"],"p":["z"],"X":["z"],"B":[]},"cs":{"m":["c"],"p":["c"],"X":["c"],"B":[]},"dv":{"m":["z"],"p":["z"],"X":["z"],"B":[],"t":[],"m.E":"z"},"dw":{"m":["z"],"p":["z"],"X":["z"],"B":[],"t":[],"m.E":"z"},"dx":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"dy":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"dz":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"dA":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"dB":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"cu":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"bj":{"m":["c"],"p":["c"],"X":["c"],"B":[],"t":[],"m.E":"c"},"e2":{"v":[]},"cZ":{"aD":[],"v":[]},"aY":{"al":["1"]},"c_":{"l":["1"],"l.E":"1"},"a7":{"v":[]},"bS":{"bN":["1"]},"bU":{"aY":["1"],"al":["1"]},"cY":{"bT":["1"]},"aH":{"cH":["1"]},"C":{"aR":["1"]},"cI":{"bN":["1"]},"cJ":{"aY":["1"],"al":["1"]},"cX":{"bN":["1"]},"bV":{"al":["1"]},"cP":{"cx":["1"]},"bR":{"m":["1"],"p":["1"],"m.E":"1"},"m":{"p":["1"]},"bG":{"a5":["1","2"]},"cq":{"a5":["1","2"]},"cD":{"a5":["1","2"]},"cV":{"cx":["1"]},"ag":{"P":["ag"]},"z":{"O":[],"P":["O"]},"b9":{"P":["b9"]},"c":{"O":[],"P":["O"]},"O":{"P":["O"]},"w":{"P":["w"]},"db":{"v":[]},"aD":{"v":[]},"ae":{"v":[]},"bM":{"v":[]},"dn":{"v":[]},"dC":{"v":[]},"cE":{"v":[]},"dQ":{"v":[]},"aV":{"v":[]},"dg":{"v":[]},"dE":{"v":[]},"cy":{"v":[]},"ea":{"ac":[]},"bf":{"b":[]},"ay":{"b":[]},"aA":{"b":[]},"cC":{"b":[]},"e":{"A":[]},"d8":{"A":[]},"d9":{"A":[]},"c9":{"A":[]},"bw":{"A":[]},"af":{"A":[]},"ah":{"A":[]},"d":{"A":[]},"dj":{"A":[]},"cf":{"ah":[],"A":[]},"bi":{"A":[]},"dL":{"A":[]},"aF":{"b":[]},"cL":{"al":["1"]},"be":{"m":["1"],"p":["1"],"m.E":"1"},"bA":{"a1":[]},"a6":{"a1":[]},"dX":{"c7":[]},"da":{"bk":["J"]},"dU":{"bk":["J"]},"dk":{"bk":["J"]},"bh":{"P":["bh"]},"ar":{"l":["1"],"l.E":"1"},"W":{"k":[]},"ak":{"l":["k"],"l.E":"k"},"kA":{"B":[]},"kS":{"p":["c"],"B":[]},"lq":{"p":["c"],"B":[]},"lp":{"p":["c"],"B":[]},"kQ":{"p":["c"],"B":[]},"ln":{"p":["c"],"B":[]},"kR":{"p":["c"],"B":[]},"lo":{"p":["c"],"B":[]},"kM":{"p":["z"],"B":[]},"kN":{"p":["z"],"B":[]}}'))
A.lT(v.typeUniverse,JSON.parse('{"dV":1,"di":1,"dD":1,"cd":1,"dS":1,"bQ":1,"co":1,"cp":1,"bI":1,"al":1,"aY":1,"c0":1,"cI":1,"cJ":1,"cX":1,"e0":1,"e_":1,"e9":1,"bV":1,"ed":2,"cq":2,"cV":1,"d3":2,"dh":2,"cL":1,"bZ":1}'))
var u={o:"Cannot fire new event. Controller is already firing an event",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",m:"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",a:"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"}
var t=(function rtii(){var s=A.aL
return{U:s("a1"),_:s("ar<Q>"),G:s("ar<u>"),V:s("ar<Q?>"),A:s("as"),d:s("b6"),E:s("bw"),J:s("at"),c:s("P<@>"),e:s("b7<cB,@>"),q:s("ah"),C:s("v"),B:s("b"),m:s("bA"),Z:s("bb"),r:s("Q"),gb:s("cg"),eN:s("J"),w:s("q<c7>"),Y:s("q<W>"),O:s("q<a6>"),fR:s("q<bk<J>>"),g:s("q<aU>"),db:s("q<al<@>>"),s:s("q<w>"),l:s("q<k>"),aL:s("q<bX>"),M:s("q<cN>"),b:s("q<@>"),t:s("q<c>"),bN:s("q<c?>"),T:s("cj"),R:s("aw"),p:s("X<@>"),am:s("be<@>"),eo:s("Y<cB,@>"),h3:s("ds<J>"),dz:s("cm"),j:s("p<@>"),L:s("bF"),eO:s("a5<@,@>"),bm:s("bj"),a0:s("A"),en:s("bJ<u>"),P:s("E"),K:s("j"),h:s("a6"),gT:s("nA"),F:s("+()"),gm:s("ac"),N:s("w"),W:s("u"),dm:s("t"),eK:s("aD"),f:s("B"),o:s("bP"),k:s("bR<a6>"),c3:s("cF<J>"),u:s("k"),fe:s("cG<a6>"),g4:s("bm"),g2:s("aG"),bj:s("aH<av>"),ez:s("aH<~>"),ao:s("C<av>"),ar:s("C<j>"),a:s("C<c>"),D:s("C<~>"),v:s("cO"),be:s("N"),b7:s("cY<bO>"),dQ:s("c_<a1>"),y:s("L"),i:s("z"),z:s("@"),x:s("@(j)"),Q:s("@(j,ac)"),S:s("c"),eH:s("aR<E>?"),b5:s("Q?"),X:s("j?"),bK:s("j?()"),dk:s("w?"),gU:s("bY?"),fQ:s("L?"),cD:s("z?"),I:s("c?"),cg:s("O?"),H:s("O"),n:s("~"),d5:s("~(j)"),da:s("~(j,ac)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.x=A.c8.prototype
B.H=A.c9.prototype
B.l=A.cf.prototype
B.ak=A.av.prototype
B.al=J.ch.prototype
B.b=J.q.prototype
B.a=J.ci.prototype
B.d=J.bB.prototype
B.c=J.bd.prototype
B.am=J.aw.prototype
B.an=J.T.prototype
B.aw=A.bj.prototype
B.a3=J.dF.prototype
B.F=J.bP.prototype
B.a7=A.bm.prototype
B.a8=new A.em()
B.m=new A.J()
B.Q=new A.J()
B.O=new A.J()
B.P=new A.J()
B.L=new A.J()
B.K=new A.J()
B.M=new A.J()
B.I=new A.J()
B.y=new A.J()
B.N=new A.J()
B.J=new A.J()
B.R=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a9=function() {
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
B.ae=function(getTagFallback) {
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
B.aa=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ad=function(hooks) {
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
B.ac=function(hooks) {
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
B.ab=function(hooks) {
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
B.S=function(hooks) { return hooks; }

B.af=new A.dE()
B.n=new A.fu()
B.ag=new A.hu()
B.T=new A.hz()
B.e=new A.hA()
B.o=new A.ea()
B.i=new A.D(0,0,0)
B.f=new A.D(117,149,183)
B.U=new A.D(119,121,123)
B.z=new A.D(128,160,255)
B.ah=new A.D(128,255,255)
B.V=new A.D(129,158,133)
B.A=new A.D(130,255,90)
B.W=new A.D(200,140,255)
B.B=new A.D(220,0,0)
B.ai=new A.D(255,230,150)
B.X=new A.D(255,255,0)
B.h=new A.D(255,255,255)
B.aj=new A.D(25,32,48)
B.p=new A.D(38,42,66)
B.C=new A.D(40,49,81)
B.Y=new A.W(0,0,"none")
B.j=new A.W(0,1,"s")
B.k=new A.W(0,-1,"n")
B.q=new A.W(1,0,"e")
B.r=new A.W(1,1,"se")
B.t=new A.W(1,-1,"ne")
B.u=new A.W(-1,0,"w")
B.v=new A.W(-1,1,"sw")
B.w=new A.W(-1,-1,"nw")
B.D=new A.b9(0)
B.Z=new A.Q(32,B.h,B.i)
B.ao=new A.bh("FINEST",300)
B.ap=new A.bh("INFO",800)
B.aq=A.h(s([B.t,B.r,B.v,B.w]),t.Y)
B.ar=A.h(s(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen","oRequestFullscreen"]),t.s)
B.as=A.h(s([B.k,B.t,B.q,B.r,B.j,B.v,B.u,B.w]),t.Y)
B.a_=A.h(s([]),t.b)
B.at=A.h(s(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen","oExitFullscreen"]),t.s)
B.au=A.h(s([B.k,B.q,B.j,B.u]),t.Y)
B.a0=A.h(s([0,1,2,3,4,5,5,6,7,8,9]),t.t)
B.av=new A.bc([0,12689003,5,13279336,14,13805937,27,14004084,44,13937266,65,13937522,90,14147296,119,12765123,152,13740657,189,13279337,230,13214315,275,11767387,324,11175254,377,12029531,434,12029276,495,12556387,560,12556386,629,12687717,702,12358752,779,11767644,860,13083504,945,12095324,1034,11503703,1127,12095582,1224,12490338,1325,11963994,1430,12227167,1539,12753511,1652,12556385,1769,14136451,1890,13740401,2015,13938293,2144,14003827,2277,13740401,2414,12754536,2555,13279851,2700,13345901,2849,13674865,3002,13280621,3159,13543536,3320,12556387,3485,12424800,3654,12621922,3,12623467,12,13411951,25,13477743,42,13806193,63,13805681,88,13937522,117,13871730,150,13937522,187,13937522,228,12951144,273,13213802,322,12030559,375,12358753,432,12029274,493,12160859,558,13016940,627,11372376,700,11963739,777,12819819,858,12424801,943,12818788,1032,11767130,1125,13082220,1222,12358495,1323,12292189,1428,12490337,1537,12095066,1650,11766874,1767,12884841,1888,12293729,2013,12293732,2142,13280364,2275,13477485,2412,13214573,2553,11371861,2698,12095582,2847,12819300,3000,13740659,3157,13346671,3318,12556385,3483,12095580,3652,12490851,3825,12951144,10,12689003,23,13345386,40,13674351,61,13806449,86,14070137,115,13937266,148,13938034,185,13555930,226,13871730,271,14267519,320,13345644,373,10780498,430,12227167,491,12491111,556,12029789,625,12885350,698,12095837,775,12292703,856,13740407,941,12424032,1030,13347448,1123,12557420,1220,12490851,1321,11963995,1426,12029532,1535,12621924,1648,12424801,1765,12095325,1886,12885094,2011,11044954,2140,13938547,2273,13280365,2410,12095585,2551,12491109,2696,12161374,2845,12161372,2998,12029788,3155,13740658,3316,12227936,3481,12358495,3650,12292959,3823,12425057,4000,12950889,21,12885611,38,13345386,59,13477230,84,14069881,113,14004084,146,13937778,183,13937266,224,13938034,269,13938034,318,14003569,371,13477486,428,11701856,489,12029274,554,11898202,623,12292445,696,11438681,773,11963994,854,12753252,939,14268033,1028,12424544,1121,11636316,1218,11963995,1319,12622698,1424,12425316,1533,12491367,1646,12292444,1763,12490848,1884,12357983,2009,12359009,2138,12753250,2271,12160604,2408,11963738,2549,12029274,2694,12555616,2843,12293730,2996,12490854,3153,12951400,3314,13609329,3479,12556386,3648,12358239,3821,12227422,3998,12622178,4179,12556644,36,12885611,57,13213545,82,13542766,111,13477998,144,14003826,181,14003826,222,13938034,267,13937778,316,14003826,369,14003570,426,13083244,487,12687717,552,11964251,621,12358496,694,12292446,771,11569752,852,12095067,937,12490848,1026,14070143,1119,12621923,1216,12687717,1317,11767388,1422,12292444,1531,12556129,1644,12490595,1761,12226653,1882,12095582,2007,12160860,2136,12885872,2269,12292702,2406,12424802,2547,11175254,2692,11963738,2841,11963739,2994,11438679,3151,12687461,3312,13280112,3477,12951145,3646,12490337,3819,12424288,3996,12425314,4177,13017193,4362,13081702,55,12689003,80,13345132,109,13345387,142,13938548,179,13805936,220,13937778,265,13818588,314,13293529,367,13018204,424,13937266,485,13543792,550,12490850,619,12357983,692,12227424,769,11963994,850,12819823,935,12359525,1024,12358239,1117,12753252,1214,12687458,1315,12161629,1420,12095579,1529,10847063,1642,12556388,1759,12358238,1880,12951151,2005,12621926,2134,12950374,2267,13806200,2404,12820077,2545,12424033,2690,12490851,2839,11832667,2992,12358496,3149,12226909,3310,11043926,3475,11963996,3644,12490592,3817,12687458,3994,12358752,4175,12490594,4360,12359264,4549,13346417,78,12885611,107,13345386,140,13345644,177,14135418,218,14003570,263,14003826,312,14082016,365,13227736,422,13030610,483,13937522,548,14003827,617,12687715,690,12490593,767,12161117,848,12227166,933,11963993,1022,12424032,1115,10715990,1212,12819301,1313,12753251,1418,12555874,1527,12029788,1640,12292702,1757,12819300,1878,12490851,2003,12226911,2132,12358239,2265,12951147,2402,13805681,2543,13411694,2688,12687980,2837,12819303,2990,12095068,3147,12687976,3308,12752997,3473,12358753,3642,12425058,3815,11964509,3992,12490593,4173,12885094,4358,12490593,4547,12819558,4740,13674868,105,12885611,138,13345644,175,13740144,216,13740401,261,14003827,310,13871730,363,14542310,420,13161685,481,12176319,546,13937522,615,14003827,688,12687714,765,12425313,846,11766874,931,12293215,1020,12160860,1113,12095581,1210,12358496,1311,12556131,1416,12950631,1525,12425314,1638,12095067,1755,10518610,1876,13873019,2001,11374174,2130,11504473,2263,12490337,2400,12095838,2541,13412984,2686,12885608,2835,12425314,2988,12884836,3145,12424801,3306,12885614,3471,12819306,3640,12753768,3813,12886124,3990,12687460,4171,12227423,4356,12095838,4545,12687715,4738,13148008,4935,12819300,136,12689003,173,13543537,214,12951143,259,13280107,308,13740401,361,14003570,418,13950687,479,11124641,544,12899531,613,13937266,686,11965794,763,12622179,844,12490593,929,12292445,1018,12490593,1111,12357983,1208,12095324,1309,11635544,1414,13346938,1523,12621922,1636,12359009,1753,12029274,1874,12029532,1999,12359519,2128,13279338,2261,12950887,2398,12095582,2539,12687717,2684,11503702,2833,12358495,2986,12424800,3143,12227680,3304,12227167,3469,12621924,3638,12490593,3811,12490593,3988,12359008,4169,12293473,4354,13674869,4543,12687459,4736,13477747,4933,13148008,5134,13148008,171,12885611,212,13543793,257,12951401,306,13411694,359,13344873,416,14135417,477,13950687,542,13622227,611,10794407,684,10522970,761,12819046,842,12687458,927,12359264,1016,12161373,1109,12819304,1206,12424545,1307,12161117,1412,11701336,1521,12292189,1634,12950887,1751,12029789,1872,12293217,1997,12292702,2126,12357725,2259,12293216,2396,12556128,2537,12753764,2682,12359265,2831,12095581,2984,12095582,3141,12622179,3302,12687458,3467,12161630,3636,12490592,3809,12358495,3986,12425059,4167,12293215,4352,12621923,4541,12030045,4734,12424544,4931,12161887,5132,13082471,5337,13345644,210,12885611,255,13806197,304,13543022,357,13345386,414,13213546,475,14071425,540,14542309,609,11321765,682,10593185,759,13674865,840,13148008,925,12425056,1014,12358496,1107,12556131,1204,11504217,1305,11767130,1410,12293216,1519,12490852,1632,12226652,1749,12358495,1870,12424801,1995,12160859,2124,12226653,2257,12358752,2394,12622179,2535,12227937,2680,12490593,2829,13807486,2982,12293472,3139,12687204,3300,12819558,3465,12556387,3634,12951143,3807,12621922,3984,12490593,4165,12226653,4350,12753253,4539,12358752,4732,12556129,4929,12884838,5130,12819045,5335,13345644,5544,13938293,253,12885611,302,13674607,355,13543535,412,13344874,473,13345645,538,13345643,607,14147809,680,11190432,757,10072722,838,13806192,923,13279851,1012,12425056,1105,12490850,1202,12358753,1303,11176023,1408,12424289,1517,12029531,1630,12819304,1747,12095324,1868,12292446,1993,12424287,2122,12424032,2255,12424031,2392,12424800,2533,12425058,2678,12884837,2827,12884837,2980,12819305,3137,12556385,3298,12885093,3463,13412465,3632,13149297,3805,12556129,3982,12884580,4163,13214061,4348,12425057,4537,12160860,4730,12358238,4927,12359008,5128,12359521,5333,12687716,5542,13805938,5755,13938035,300,12885611,353,13938552,410,13937778,471,13345643,536,13345387,605,13609072,678,12830918,755,10466196,836,16382197,921,12490593,1010,13345903,1103,12950631,1200,12622179,1301,12424801,1406,11242074,1515,12424031,1628,12292703,1745,11504473,1866,12292959,1991,10518097,2120,12621409,2253,12425057,2390,12029531,2531,13083504,2676,12292960,2825,12884837,2978,12687458,3135,12885865,3296,11438940,3461,12884584,3630,12951142,3803,13017196,3980,13148521,4161,13740403,4346,12622180,4535,12425057,4728,12357982,4925,12226910,5126,12359264,5331,11701854,5540,13148266,5753,13937526,5970,13346155,351,12885611,408,13806452,469,14003828,534,13345644,603,13214056,676,13411694,753,12701644,834,14082530,919,11058853,1008,13345642,1101,13213544,1198,11833439,1299,12884837,1404,12950629,1513,13280111,1626,12161116,1743,12161630,1864,12424800,1989,12490850,2118,12094813,2251,12161373,2388,12424031,2529,12424800,2674,12622180,2823,12752995,2976,13016167,3133,12951145,3294,12687715,3459,12621922,3628,13215349,3801,12097122,3978,12556387,4159,12951146,4344,13674607,4533,12622179,4726,11964253,4923,12490851,5124,12424031,5329,12556388,5538,13280112,5751,13411951,5968,10190420,6189,13082473,406,12885611,467,14003831,532,13345643,601,13345642,674,13345386,751,13674865,832,12964049,917,9872540,1006,16645371,1099,13411949,1196,13279849,1297,13279337,1402,13147751,1511,12885350,1624,13280111,1741,12227166,1862,12425058,1987,12753253,2116,12950630,2249,12425056,2386,12227421,2527,12425056,2672,12752997,2821,12687718,2974,12951400,3131,12950373,3292,13411438,3457,13147752,3626,13477746,3799,13213545,3976,13279852,4157,13412209,4342,12753250,4531,13345645,4724,13148525,4921,12161631,5122,12490592,5327,12359009,5536,12227424,5749,12621922,5966,13608816,6187,13741171,6412,13345386,465,12885611,530,13740913,599,13279852,672,13345644,749,13345644,830,13937267,915,13292757,1004,13096656,1097,10068898,1194,11702881,1295,13345644,1400,13345386,1509,13016680,1622,13213800,1739,13279852,1860,12292189,1985,12425057,2114,12752995,2247,12752994,2384,12621667,2525,12621923,2670,12621922,2819,12490849,2972,12687460,3129,12885608,3290,13148008,3455,12621924,3624,12819045,3797,13082472,3974,12885350,4155,14003830,4340,12490851,4529,12885093,4722,12885351,4919,13543794,5120,12425057,5325,12292959,5534,12555618,5747,12622181,5964,12621923,6185,13345903,6410,13477743,6639,13213544,528,12951660,597,14135417,670,13345644,747,13345644,828,13476973,913,14069879,1002,12439490,1095,12767692,1192,11387053,1293,12233068,1398,13740144,1507,13279851,1620,13082472,1737,13279851,1858,13411954,1983,12425315,2112,12687458,2245,13543800,2382,12687715,2523,12424800,2668,12357981,2817,12884583,2970,12425313,3127,12819044,3288,12951143,3453,13214318,3622,12884836,3795,12687459,3972,12884837,4153,13213546,4338,13016165,4527,13345645,4720,13279853,4917,12819302,5118,12819044,5323,13215089,5532,12490080,5745,12687460,5962,11964252,6183,12425314,6408,12621924,6637,13608302,6870,12885094,595,12951660,668,14267261,745,13345900,826,13345901,911,13345645,1000,14135415,1093,13294036,1190,11911613,1291,14147803,1396,14739941,1505,13543536,1618,13740144,1735,13740402,1856,13543278,1981,12359009,2110,12358753,2243,12687974,2380,12819044,2521,12490849,2666,12490849,2815,12161117,2968,12490850,3125,12819045,3286,12752997,3451,13213801,3620,12819044,3793,12884838,3970,12687458,4151,12951144,4336,13016679,4525,12359522,4718,12096351,4915,13477747,5116,13279593,5321,12753508,5530,12819301,5743,12819045,5960,12424800,6181,12951407,6406,12819299,6635,12819044,6868,13279339,7105,12556643,666,12885611,743,14267774,824,13345900,909,13411437,998,13937778,1091,14135673,1188,13622235,1289,10463658,1394,10793381,1503,10927518,1616,11835979,1733,14070138,1854,13411950,1979,12951144,2108,12884837,2241,12425056,2378,13213804,2519,12753252,2664,12951400,2813,12424543,2966,12820076,3123,12490337,3284,12621666,3449,12753764,3618,12885094,3791,12884837,3968,12687458,4149,12753250,4334,12490593,4523,12950887,4716,13477487,4913,12293729,5114,12228194,5319,13279851,5528,12556643,5741,13741690,5958,12687459,6179,12556387,6404,12951660,6633,12950629,6866,13346416,7103,13082471,7344,13477488,741,12951148,822,13543279,907,13477743,996,13477487,1089,14003826,1186,13674865,1287,12175552,1392,11913140,1501,13555914,1614,10266791,1731,8360829,1852,13543535,1977,13805937,2106,13477485,2239,13345390,2376,12884837,2517,12819300,2662,13213288,2811,13148267,2964,12621923,3121,12687459,3282,12884837,3447,12819302,3616,13147752,3789,12950374,3966,13147496,4147,12884837,4332,13214316,4521,13279853,4714,13214058,4911,12885350,5112,13346673,5317,13740401,5526,13345131,5739,13148008,5956,13477486,6177,13214313,6402,12752994,6631,13214576,6864,12951143,7101,13411694,7342,13345644,7587,12885093,820,12885867,905,14070136,994,13674610,1087,13017193,1184,13871730,1285,13818331,1390,14016480,1499,11847866,1612,10791595,1729,10134435,1850,10665378,1975,7507077,2104,14003825,2237,14135672,2374,13740400,2515,13082471,2660,13147754,2809,12819302,2962,12359523,3119,12754023,3280,13213545,3445,12950630,3614,12884836,3787,12884838,3964,12490849,4145,12556131,4330,12819044,4519,12556129,4712,13279850,4909,13346413,5110,13411950,5315,13740407,5524,13806194,5737,12951143,5954,13148007,6175,12687973,6400,12951143,6629,12884837,6862,13280367,7099,13345385,7340,12951399,7585,13543278,7834,12490849,903,12819818,992,14069879,1085,13411437,1182,13674607,1283,13805936,1388,14278110,1497,13556187,1610,14003570,1727,11059104,1848,10137742,1973,10731171,2102,13887200,2235,12636863,2372,10405047,2513,9548199,2658,12173986,2807,12687717,2960,13279853,3117,12622694,3278,12884837,3443,12951399,3612,13214060,3785,12950630,3962,13214059,4143,12818788,4328,13082729,4517,13279336,4710,12819300,4907,13148520,5108,13345642,5313,12950887,5522,13609330,5735,12951144,5952,12885606,6173,13280108,6398,12491109,6627,13345390,6860,12885350,7097,12819301,7338,12819301,7583,13674609,7832,12951401,8085,12819301,990,12951660,1083,14069878,1180,13411438,1281,13740400,1386,13805667,1495,14003826,1608,13950430,1725,11979188,1846,11519406,1971,10598806,2100,12834496,2233,7966838,2370,11917792,2511,11391190,2656,8491936,2805,11520955,2958,14069878,3115,13872761,3276,12951400,3441,13280107,3610,12819046,3783,13148264,3960,13344875,4141,13279595,4326,13148266,4515,13345644,4708,13016936,4905,13213801,5106,12885350,5311,13674865,5520,12885606,5733,13280364,5950,13609072,6171,12951144,6396,12950629,6625,13543023,6858,13016936,7095,13411438,7336,12885350,7581,13543282,7830,13674608,8083,13807481,8340,12885864,1081,12885611,1178,14069622,1279,13411437,1384,14070138,1493,14999520,1606,14014681,1723,14146781,1844,12373438,1969,11255973,2098,11717033,2231,10335891,2368,9152658,2509,12637636,2654,11195350,2803,10863055,2956,11386834,3113,12506595,3274,13411951,3439,13345901,3608,12885606,3781,12885350,3958,12951142,4139,13411695,4324,13148009,4513,12951143,4706,13410926,4903,13016935,5104,12951143,5309,12951142,5518,11965537,5731,13280107,5948,13740402,6169,13280108,6394,13279595,6623,13345900,6856,13543536,7093,12951142,7334,12819814,7579,13280108,7828,13806967,8081,13411694,8338,13017191,8599,12752995,1176,12885611,1277,14135930,1382,13543022,1491,14003826,1604,14078417,1721,14605019,1842,13872241,1967,13228244,2096,14003570,2229,11125146,2366,10996919,2507,10931909,2652,10205857,2801,9744826,2954,15661047,3111,12442086,3272,11979231,3437,14279922,3606,13477486,3779,13346414,3956,13016936,4137,13279851,4322,12951142,4511,12819558,4704,13345387,4901,13213800,5102,13213801,5307,13082472,5516,13543535,5729,13017705,5946,13674865,6167,13609072,6392,13411694,6621,13938551,6854,13280619,7091,12951145,7332,12688230,7577,13280621,7826,13412205,8079,14004087,8336,13345645,8597,13148263,8862,12292446,1275,12819818,1380,14004084,1489,13280621,1602,14003827,1719,14069877,1840,14605018,1965,13555674,2094,13556182,2227,11322020,2364,11388328,2505,10536362,2650,11522778,2799,11393240,2952,6649964,3109,12508646,3270,11652572,3435,10141120,3604,11459295,3777,13543536,3954,13280107,4135,12425828,4320,12557158,4509,13016936,4702,13213544,4899,12951143,5100,13213802,5305,13279850,5514,13214056,5727,13608815,5944,13609329,6165,13082729,6390,13280108,6619,13213801,6852,13609585,7089,12951657,7330,12556900,7575,13411951,7824,13543535,8077,13543280,8334,13608815,8595,13214056,8860,13345130,9129,12425057,1378,12951660,1487,13872242,1600,13346156,1717,14003826,1838,14474201,1963,14003827,2092,13213515,2225,13556699,2362,11387049,2503,11453622,2648,10402972,2797,12246756,2950,10798539,3107,11456474,3268,10272697,3433,12836584,3602,9484450,3775,11457488,3952,10403759,4133,13805937,4318,14069881,4507,13213545,4700,12425315,4897,13279336,5098,13279593,5303,13345644,5512,13147751,5725,12951144,5942,13148010,6163,13345901,6388,13016680,6617,13213544,6850,13477487,7087,14069627,7328,13740400,7573,13609071,7822,13609073,8075,13412206,8332,12228450,8593,13213800,8858,13016936,9127,12951142,9400,12753509,1485,12819818,1598,14003827,1715,13674607,1836,13542232,1961,13937266,2090,14276568,2223,14004342,2360,13356217,2501,13030864,2646,10993570,2795,10534811,2948,11851994,3105,11326680,3266,11851744,3431,10010281,3600,10204565,3773,10667456,3950,10007997,4131,10865616,4316,13098189,4505,12621922,4698,12754280,4895,13477231,5096,12687973,5301,13279596,5510,13345387,5723,13279337,5940,13543535,6161,12885351,6386,13082215,6615,13806710,6848,13016935,7085,13279851,7326,12359780,7571,13674608,7820,13214057,8073,13213545,8330,13345643,8591,13345643,8856,13214316,9125,13279337,9398,12951143,9675,12884580,1596,12951148,1713,14003827,1834,13805936,1959,14004342,2088,14135672,2221,13937522,2358,13937266,2499,13152116,2644,12176316,2793,11453616,2946,10665885,3103,11458512,3264,11854306,3429,11721953,3598,11721951,3771,11524059,3948,12047328,4129,12246754,4314,10733003,4503,12640741,4696,12968150,4893,13148009,5094,13477231,5299,13674608,5508,13345902,5721,13477230,5938,13345901,6159,12884838,6384,13148011,6613,13280625,6846,11504987,7083,13213800,7324,13477743,7569,13543280,7818,12951656,8071,13148521,8328,12819814,8589,13543799,8854,13213800,9123,12951143,9396,12425315,9673,12885094,9954,12753250,1711,12885867,1832,14003826,1957,14135417,2086,14070135,2219,14276053,2356,14211032,2497,13937522,2642,13425113,2791,13030610,2944,12044985,3101,10928799,3262,11129275,3427,11657953,3596,11722972,3769,11327193,3946,11393243,4127,11524054,4312,11063231,4501,11129291,4694,12180698,4891,9812405,5092,13873018,5297,13477743,5506,11373660,5719,13345900,5936,13280107,6157,13477742,6382,12950886,6611,12884581,6844,13280108,7081,13412210,7322,12885094,7567,12491108,7816,12819559,8069,13148009,8326,13345388,8587,12819557,8852,13346160,9121,12753509,9394,12753251,9671,13279851,9952,13148008,10237,12753508,1830,12885611,1955,13740401,2084,14333053,2217,13543280,2354,14003570,2495,13883867,2640,13819101,2789,13556185,2942,13293783,3099,11256227,3260,10796952,3425,14003570,3594,11064260,3767,11328980,3944,11591900,4125,10865600,4310,11195337,4499,10998208,4692,13937522,4889,13740401,5090,10536625,5295,12687717,5504,13279595,5717,13477742,5934,12951399,6155,13346157,6380,13280108,6609,13279081,6842,12885606,7079,13543538,7320,13279851,7565,12425057,7814,12556387,8067,13674865,8324,12885863,8585,13806455,8850,12885606,9119,12819557,9392,13872760,9669,12753251,9950,12425057,10235,12951659,10524,12556386,1953,12885611,2082,13805936,2215,14333824,2352,14405821,2493,13674864,2638,14144982,2787,13938290,2940,13819358,3097,13293524,3258,12570565,3423,10730647,3592,10402197,3765,10272417,3942,10933703,4123,10867393,4308,10405546,4497,10537136,4690,14003570,4887,13345901,5088,13345642,5293,13740400,5502,14003570,5715,13345389,5932,13214056,6153,13345386,6378,13411694,6607,13279593,6840,13213543,7077,13148264,7318,13608817,7563,13279596,7812,12754023,8065,13346413,8322,13806196,8583,13477231,8848,13806195,9117,11833439,9390,12293730,9667,12819045,9948,12951144,10233,12886122,10522,12292447,10815,12951657,2080,12885611,2213,13871731,2350,14333054,2491,15000553,2636,14275796,2785,14003827,2938,13882838,3095,13621464,3256,13937266,3421,13938034,3590,11387557,3763,10533780,3940,10139545,4121,11061678,4306,10471342,4495,10207655,4688,10471339,4885,13475924,5086,11504989,5291,14267774,5500,10603442,5713,11720646,5930,13346158,6151,13345901,6376,13806711,6605,14003827,6838,13411439,7075,13280364,7316,13280110,7561,13213544,7810,13213544,8063,12885094,8320,12885607,8581,13674611,8846,13674611,9115,13345643,9388,13017193,9665,13740918,9946,13279337,10231,12819301,10520,12622178,10813,12555616,11110,11307352,2211,12885611,2348,13543279,2489,14003827,2634,15789544,2783,14003570,2936,14539225,3093,14015195,3254,13884124,3419,13937522,3588,14003570,3761,11125153,3938,10533780,4119,13937777,4304,10273443,4493,10735546,4686,10274731,4883,10405290,5084,13806193,5289,13346412,5498,13938034,5711,10076579,5928,8035197,6149,11964252,6374,13214057,6603,13806193,6836,13938547,7073,13806454,7314,12819045,7559,13147495,7808,13345646,8061,13213545,8318,13082472,8579,13279850,8844,13740402,9113,12753509,9386,13279852,9663,13543279,9944,13807482,10229,13279338,10518,13213802,10811,12752995,11108,12688234,11409,12884841,2346,12688747,2487,13805937,2632,13938547,2781,12236214,2934,14267260,3091,13871985,3252,13806193,3417,14146525,3586,13871986,3759,13872242,3936,11716526,4117,10336395,4302,14003570,4491,10799018,4684,10142372,4881,10799793,5082,10338725,5287,13872242,5496,13477230,5709,13280365,5926,12884580,6147,8167043,6372,11376710,6601,14267522,6834,13938035,7071,13412206,7312,13477230,7557,13280367,7806,13016936,8059,12753507,8316,13016937,8577,12687716,8842,12688487,9111,12687715,9384,13411695,9661,12951142,9942,12293216,10227,13016936,10516,13213544,10809,13016166,11106,12425313,11407,12424289,11712,12490595,2485,12885611,2630,13805937,2779,14004341,2932,14605276,3089,14200949,3250,13948116,3415,14342617,3584,14003826,3757,13871730,3934,14003570,4115,11913653,4300,11059357,4489,10468506,4682,10339494,4879,10274473,5080,9153937,5285,10338208,5494,10272414,5707,13937266,5924,14069620,6145,14399362,6370,13937522,6599,11768161,6832,14267003,7069,13543022,7310,13806710,7555,13346413,7804,11570525,8057,12950629,8314,12621664,8575,12819301,8840,13082216,9109,11307867,9382,13016679,9659,13082472,9940,13345129,10225,13213545,10514,14004349,10807,13873020,11104,13213545,11405,12425056,11710,12424801,12019,12490594,2628,12688491,2777,14135673,2930,15655629,3087,14868448,3248,14003825,3413,13676141,3582,13740656,3755,13805936,3932,14003570,4113,13872241,4298,13871986,4487,11454119,4680,10468505,4877,10470568,5078,10142889,5283,9615258,5492,10271899,5705,13871986,5922,10865327,6143,11063217,6368,12359524,6597,12162915,6830,13543280,7067,14003826,7308,12754281,7553,14531722,7802,11457236,8055,12177115,8312,12227422,8573,12753251,8838,12687715,9107,11965024,9380,12885349,9657,13345904,9938,13280365,10223,13477487,10512,12819044,10805,13543023,11102,13740404,11403,13213800,11708,12885606,12017,13149041,12330,13807231,2775,12688747,2928,14004084,3085,15986154,3246,13739355,3411,13740401,3580,11307597,3753,14004083,3930,14082271,4111,13752532,4296,14003570,4485,11913397,4678,11059105,4875,10994593,5076,14003570,5281,9482902,5490,10338465,5703,13674864,5920,13938033,6141,13411694,6366,14004343,6595,12621923,6828,13149036,7065,13609329,7306,10471067,7551,14399618,7800,9941156,8053,9681553,8310,11651008,8571,12174784,8836,13740400,9105,13280365,9378,12490850,9655,12951142,9936,13148265,10221,12951142,10510,12950887,10803,13016936,11100,13609328,11401,13477486,11706,12885350,12015,13148008,12328,12425059,12645,12490849,2926,12885611,3083,13872241,3244,15460580,3409,14069879,3578,13871986,3751,13017452,3928,14080216,4109,13884380,4294,13686744,4483,12899277,4676,11978677,4873,12243126,5074,10403226,5279,11191975,5488,10600607,5701,13871729,5918,12753765,6139,12819044,6364,12687459,6593,13674864,6826,14267516,7063,13016937,7304,13872244,7549,11261368,7798,13886935,8051,10538156,8308,9616267,8569,10076568,8834,9879446,9103,14739170,9376,11569495,9653,12425315,9934,12820070,10219,12885094,10508,13345646,10801,13345646,11098,12884838,11399,14267001,11704,13675120,12013,11126183,12326,10797213,12643,12819302,12964,12490593,3081,12885611,3242,13937522,3407,11118246,3576,13938033,3749,13805937,3926,14004084,4107,11251631,4292,14079960,4481,13358807,4674,13030355,4871,12570053,5072,10994851,5277,11389096,5486,9877655,5699,13871729,5916,12951143,6137,12358238,6362,11767387,6591,12292701,6824,13544573,7061,9022864,7302,12951399,7547,12967648,7796,10007718,8049,11459275,8306,10011033,8567,9747853,8832,9748113,9101,10339486,9374,15988210,9651,11914469,9932,12096097,10217,12753509,10506,11371861,10799,14465156,11096,10864844,11397,11520433,11702,8691326,12011,11323056,12324,10796741,12641,10007700,12962,12162658,13287,12753764,3240,12622955,3405,14004341,3574,15065311,3747,13674865,3924,13806193,4105,13806193,4290,14472918,4479,14146010,4672,13937522,4869,12438980,5070,12373184,5275,9481088,5484,10007955,5697,13805681,5914,13806193,6135,12885094,6360,12424286,6589,12424032,6822,12161629,7059,12292703,7300,9813152,7545,13148008,7794,14135674,8047,11590862,8304,10735280,8565,9681548,8830,9550985,9099,9748111,9372,9879956,9649,10340002,9930,13688284,10215,13423582,10504,14739437,10797,12499903,11094,14474977,11395,10663355,11700,10598858,12009,12376802,12322,10664906,12639,12439775,12960,13871730,13285,13871986,13614,12885607,3403,12688747,3572,14004084,3745,13213010,3922,14135416,4103,14004339,4288,13740400,4477,14069622,4670,13938547,4867,13871729,5068,12965069,5273,13213003,5482,13426115,5695,10468507,5912,13871730,6133,12885864,6358,12490337,6587,12621665,6820,12490850,7057,12687460,7298,12029530,7543,13412210,7792,12556130,8045,12886122,8302,11590871,8563,12114108,8828,9879955,9097,9419399,9370,9419145,9647,9813909,9928,10472362,10213,14543071,10502,13423063,10795,13882585,11092,10662578,11393,10009528,11698,11326677,12007,11984352,12320,10731213,12637,13937778,12958,13740657,13283,13871730,13612,13740144,13945,13345643,3570,12819819,3743,14135675,3920,13938291,4101,16381421,4286,14135673,4475,13937778,4668,14003826,4865,14934758,5066,13740401,5271,13621722,5480,12176317,5693,10269842,5910,14003825,6131,14003827,6356,12753251,6585,12490848,6818,12951145,7055,12490595,7296,12424545,7541,12095068,7790,10649683,8043,14201467,8300,14333825,8561,11575371,8826,9945495,9095,13032901,9368,9485194,9645,9550732,9926,9945750,10211,10537385,10500,10668977,10793,12245700,11090,10931386,11391,11393490,11696,11657181,12005,11855077,12318,12050915,12635,13937778,12956,13937778,13281,14003827,13610,13871729,13943,13346158,14280,13411693,3741,12885611,3918,14069879,4099,13938034,4284,16051943,4473,13805681,4666,13280365,4863,14003570,5064,13740400,5269,13937266,5478,13872242,5691,11453351,5908,11256732,6129,13871729,6354,13937778,6583,12490593,6816,12556388,7053,12425313,7294,12029788,7539,12095583,7788,12029274,8041,11240276,8298,13477487,8559,13806450,8824,10472100,9093,11129008,9366,10077077,9643,10266980,9924,9682577,10209,10011291,10498,11064252,10791,10012067,11088,10668978,11389,11327948,11694,11327438,12003,11722714,12316,11856361,12633,11922409,12954,13937522,13279,13938034,13608,13806193,13941,13674864,14278,12951143,14619,13280623,3916,12688747,4097,13938034,4282,14003826,4471,16183531,4664,14865351,4861,13937777,5062,13938033,5267,13806193,5476,13740400,5689,13873013,5906,11650481,6127,14069879,6352,13740400,6581,12754023,6814,12424800,7051,13478782,7292,12490593,7537,12425322,7786,11701080,8039,12490594,8296,12293216,8557,13082472,8822,13805936,9091,14004342,9364,10668968,9641,10010520,9922,9419402,10207,9813909,10496,10339747,10789,10997945,11086,10406826,11387,10801596,11692,10866362,12001,11195078,12314,11459278,12631,13938034,12952,11921895,13277,13740656,13606,12491109,13939,14135675,14276,13806193,14617,13148007,14962,13345644,4095,12622955,4280,13937522,4469,13805937,4662,16314860,4859,16183270,5060,8225413,5265,13805937,5474,13805936,5687,13609071,5904,13477230,6125,14003826,6350,13871729,6579,14267261,6812,13279851,7049,12490849,7290,12226910,7535,12359010,7784,11898203,8037,12161376,8294,12161374,8555,13213808,8820,12161373,9089,12819044,9362,13938037,9639,10406048,9920,10339741,10205,9353096,10494,10010779,10787,10011557,11084,11064256,11385,10276526,11690,11261375,11999,10340017,12312,10865072,12629,11392974,12950,12379357,13275,13806193,13604,12885093,13937,12556388,14274,14135414,14615,13543791,14960,13674871,15309,13279593,4278,12819819,4467,12754536,4660,13806193,4857,16314861,5058,16315117,5263,15194832,5472,13683378,5685,13938034,5902,13280364,6123,13345899,6348,13740400,6577,14004085,6810,13937522,7047,14004083,7288,11898204,7533,12227423,7782,12095324,8035,12425057,8292,12424544,8553,12952178,8818,11832924,9087,12161374,9360,12490336,9637,13346157,9918,10406054,10203,10077599,10492,10339483,10785,10143389,11082,11118944,11383,10998967,11688,12312531,11997,10735293,12310,11655364,12627,10141350,12948,11589579,13273,13938034,13602,12950887,13935,12160860,14272,11767386,14613,12227171,14958,13543536,15307,12753509,15660,13543281,4465,12689003,4658,14267260,4855,14135673,5056,16380653,5261,16117739,5470,15920358,5683,15920356,5900,15460325,6121,13674609,6346,13345642,6575,13279850,6808,13674865,7045,13938290,7286,13872242,7531,12359264,7780,12819047,8033,12819303,8290,12227167,8551,12227423,8816,12556131,9085,13280369,9358,13148264,9635,12359008,9916,12951657,10201,14003828,10490,13937522,10783,10537380,11080,11326652,11381,10604207,11686,10868678,11995,11261892,12308,11262658,12625,12179652,12946,10009506,13271,13871728,13600,13345388,13933,12490594,14270,12160860,14611,12161373,14956,11767128,15305,13214314,15658,13082214,16015,13345645,4656,12754283,4853,13017451,5054,13280365,5259,16315632,5468,16052201,5681,16117224,5898,16183273,6119,16183529,6344,15589847,6573,13609072,6806,13346157,7043,13346157,7284,13609072,7529,12753508,7778,12950373,8031,12753511,8288,12425057,8549,13016424,8814,12030046,9083,13016936,9356,13872501,9633,12162914,9914,13213544,10199,12950374,10488,13411950,10781,13806193,11078,10208413,11379,10998193,11684,11327943,11993,11984850,12306,11722192,12623,12428893,12944,11391408,13269,13412207,13598,13346157,13931,12753250,14268,12490593,14609,12490595,14954,12490080,15303,12227423,15656,12885095,16013,12556387,16374,13279336,4851,12688746,5052,13806451,5257,11907249,5466,16315120,5679,16051944,5896,16117223,6117,16183272,6342,16181985,6571,16380653,6804,13345901,7041,13411180,7282,13148008,7527,13937522,7776,12621922,8029,12753250,8286,12819562,8547,13148008,8812,13411694,9081,13477742,9354,13346159,9631,12753765,9912,13806199,10197,13411437,10486,12096096,10779,12884837,11076,12819301,11377,12101982,11682,11590596,11991,11656137,12304,10537654,12621,11196358,12942,12509910,13267,13806193,13596,13345901,13929,13477230,14266,12622177,14607,12490337,14952,12490080,15301,12621923,15654,11306582,16011,13279851,16372,13805683,16737,13411950,5050,12622953,5255,13345644,5464,14012881,5677,16315374,5894,16117479,6115,15984352,6340,16248038,6569,14996168,6802,13937522,7039,13477230,7280,13082728,7525,12687715,7774,12884837,8027,12753251,8284,12621668,8545,14005122,8810,12556645,9079,13345644,9352,11504731,9629,12030044,9910,13214574,10195,12753251,10484,13213804,10777,13939332,11074,12293217,11375,12884838,11680,14003826,11989,11524809,12302,14003570,12619,11720664,12940,9615794,13265,10800815,13594,12688744,13927,13542767,14264,13345901,14605,12884837,14950,12424800,15299,12424800,15652,12359008,16009,11898458,16370,13346157,16735,13345644,17104,12885863,5253,12622953,5462,13674867,5675,13815243,5892,16183529,6113,16051430,6338,15984864,6567,15786715,6800,13871729,7037,13740144,7278,13345644,7523,13346157,7772,12359266,8025,12950373,8282,13082473,8543,12227423,8808,13806454,9077,13280108,9350,12227680,9627,12358496,9908,11963737,10193,12424801,10482,12951407,10775,12424800,11072,13016682,11373,13017195,11678,12687460,11987,13346415,12300,11654622,12617,11918556,12938,13805936,13263,14069878,13592,13740401,13925,12951144,14262,12621923,14603,13543539,14948,12819045,15297,12490337,15650,12424800,16007,12424032,16368,12687204,16733,13411437,17102,13543535,17475,13871987,5460,12622953,5673,13740401,5890,12957611,6111,16116965,6336,16050402,6565,15918300,6798,14074293,7035,13478255,7276,13609071,7521,13938549,7770,13740657,8023,12885607,8280,13148008,8541,13543538,8806,12951143,9075,13937779,9348,13017194,9625,11964509,9906,11963994,10191,11963994,10480,12095580,10773,12293215,11070,12029789,11371,12096095,11676,13213543,11985,12885606,12298,13345645,12615,11982558,12936,10472378,13261,12819301,13590,11504474,13923,14399361,14260,13017193,14601,13148009,14946,13083500,15295,12819300,15648,12425314,16005,12490848,16366,12161373,16731,12425057,17100,13477488,17473,12885863,17850,13740400,5671,12622953,5888,13345900,6109,15328740,6334,16051684,6563,16050657,6796,15655384,7033,15456974,7274,13543280,7519,13872499,7768,13543535,8021,13280622,8278,13346672,8539,13543540,8804,13345387,9073,13740658,9346,13215085,9623,12753765,9904,13081958,10189,12622442,10478,11832923,10771,12621924,11068,11372374,11369,11963995,11674,13016939,11983,13608814,12296,13477487,12613,12951143,12934,12753252,13259,12621922,13588,12885095,13921,12884837,14258,12950630,14599,12687458,14944,12950373,15293,14070138,15646,12819300,16003,12293471,16364,12425058,16729,12556644,17098,13873281,17471,13543536,17848,13148523,18229,14135417,5886,12622953,6107,13740404,6332,15197155,6561,16247780,6794,15918555,7031,15325903,7272,14008754,7517,13543792,7766,13871729,8019,14004086,8276,13805681,8537,13806455,8802,13807483,9071,13806708,9344,14004084,9621,13346156,9902,13806198,10187,12556130,10476,12490855,10769,11701594,11066,12424545,11367,12161372,11672,12359525,11981,12425057,12294,12687972,12611,12228194,12932,12687715,13257,12490849,13586,12819303,13919,12095325,14256,12687460,14597,12425313,14942,12490081,15291,12161630,15644,13213801,16001,13477486,16362,12884837,16727,12753509,17096,12490593,17469,11963996,17846,13674609,18227,12951655,18612,13214058,6105,12557160,6330,13345386,6559,14539225,6792,16314085,7029,15523798,7270,15392209,7515,15920099,7764,14004086,8017,14333053,8274,13740401,8535,13346156,8800,12885864,9069,14135935,9342,13214316,9619,13806193,9900,12951144,10185,13148264,10474,12490848,10767,12029532,11064,12293215,11365,12950631,11670,12556387,11979,12359264,12292,12029789,12609,13543538,12930,11767388,13255,12292960,13584,12029787,13917,12095067,14254,12753512,14595,12490081,14940,12423519,15289,12425315,15642,11240790,15999,12425056,16360,13609592,16725,12885350,17094,12687459,17467,12951143,17844,12753251,18225,12687458,18610,14070136,18999,14333825,6328,12556648,6557,13213801,6790,14332795,7027,16116447,7268,15786714,7513,16447217,7762,13938034,8015,13937778,8272,13411951,8533,13740143,8798,12426086,9067,13411695,9340,13148520,9617,14004348,9898,13346413,10183,11373659,10472,11964252,10765,12490594,11062,12293728,11363,12490592,11668,13345644,11977,12885093,12290,12621922,12607,12819302,12928,12622180,13253,12425314,13582,12687723,13915,11701337,14252,11832665,14593,11438681,14938,11898459,15287,11636057,15640,11306583,15997,13083508,16358,12819044,16723,12951143,17092,12359522,17465,12819045,17842,12884835,18223,12687459,18608,13082215,18997,11767130,19390,12885350,6555,12556904,6788,13213544,7025,13871729,7266,15852506,7511,10326926,7760,13674349,8013,14070137,8270,14069622,8531,13806193,8796,13477485,9065,13279849,9338,13345899,9615,12819300,9896,12687459,10181,12622180,10470,13807229,10763,12095838,11060,12556387,11361,12818787,11666,12884837,11975,13543278,12288,13411694,12605,12490849,12926,12950629,13251,13872504,13580,10846292,13913,11503959,14250,12095325,14591,11504216,14936,13017199,15285,13346936,15638,12424544,15995,12358494,16356,13346422,16721,13016680,17090,13213800,17463,13148263,17840,13477488,18221,12819300,18606,13148009,18995,12950630,19388,12884838,19785,12096096,6786,12622184,7023,13279338,7264,14003826,7509,14333826,7758,13806193,8011,14003569,8268,14070136,8529,14341846,8794,13674865,9063,14135416,9336,13740144,9613,13345388,9894,12556129,10179,12556385,10468,11636057,10761,12292445,11058,13280365,11359,12950118,11664,13543023,11973,13477486,12286,13543280,12603,13345644,12924,12950886,13249,13280623,13578,12884837,13911,12424800,14248,11175767,14589,12950630,14934,13148527,15283,13280627,15636,12556129,15993,12556128,16354,13149300,16719,13411953,17088,13213800,17461,12885607,17838,12951656,18219,13609329,18604,13608817,18993,12884837,19386,12819300,19783,13017193,20184,12228194,7021,12556904,7262,13279850,7507,14003827,7756,13937522,8009,13805681,8266,13674864,8527,14201723,8792,13157829,9061,13806193,9334,13938033,9611,13806193,9892,12819043,10177,12687458,10466,12622438,10759,12226910,11056,12622179,11357,14267774,11662,13345388,11971,13477742,12284,13871729,12601,13872241,12922,12771310,13247,13937778,13576,12951400,13909,12621923,14246,12490852,14587,13412209,14932,12556387,15281,13477744,15634,13412466,15991,13082215,16352,13016166,16717,12950886,17086,13214313,17459,13477488,17836,12687973,18217,14135676,18602,14333829,18991,13543279,19384,13147751,19781,13082473,20182,12425312,20587,13938557,7260,12622439,7505,13279850,7754,13674607,8007,13937522,8264,14004342,8525,14070137,8790,13674609,9059,15331312,9332,13871986,9609,14003827,9890,13674607,10175,13214828,10464,12753252,10757,12753253,11054,10452819,11355,12622180,11660,13213545,11969,14070399,12282,14413814,12599,13229294,12920,12639214,13245,12443369,13574,10932926,13907,14003826,14244,12884580,14585,13280110,14930,13806199,15279,13609072,15632,13017193,15989,13411438,16350,13740657,16715,13345642,17084,13807480,17457,11308381,17834,13280365,18215,12425571,18600,13608560,18989,13477486,19382,12951657,19779,13345386,20180,13279852,20585,12556130,20994,12227681,7503,12622953,7752,13082473,8005,13674866,8262,13937521,8523,13412207,8788,13937778,9057,13938291,9330,14003827,9607,13740401,9888,13805681,10173,14069879,10462,14069622,10755,12819043,11052,12490594,11353,12621667,11658,10979418,11967,12951399,12280,14135672,12597,13623795,12918,13296882,13243,13428721,13572,12836845,13905,10472126,14242,10406565,14583,13345387,14928,13214058,15277,13016679,15630,13411692,15987,13148522,16348,13740404,16713,12622437,17082,12885350,17455,13082472,17832,13279848,18213,13280363,18598,13740665,18987,13674866,19380,13609073,19777,13279594,20178,13346156,20583,13279851,20992,12556386,21405,13411953,7750,12622953,8003,13147753,8260,13674608,8521,13871986,8786,13280108,9055,13806194,9328,13805936,9605,13543536,9886,13806449,10171,14003570,10460,12639439,10753,13937778,11050,13149036,11351,13938291,11656,9680798,11965,13346158,12278,11455700,12595,11057359,12916,14611189,13241,13362161,13570,14283252,13903,12444393,14240,11459277,14581,10801592,14926,13871469,15275,12753510,15628,12556644,15985,11636060,16346,13148264,16711,13016935,17080,13609074,17453,13675642,17830,13213802,18211,13214058,18596,13279080,18985,13543283,19378,13806196,19775,12950886,20176,13543022,20581,13871731,20990,13477742,21403,13938810,21820,11438681,8001,12622953,8258,12753764,8519,12885607,8784,14135673,9053,13213546,9326,14004860,9603,13477230,9884,13279337,10169,13938034,10458,13806193,10751,11326655,11048,13938034,11349,13674865,11654,14003827,11963,7833999,12276,12703190,12593,11587025,12914,13689075,13239,13755124,13568,11782381,13901,14151923,14238,12181221,14579,11657181,14924,10735802,15273,13083244,15626,12425315,15983,12951657,16344,13017197,16709,12622436,17078,12227936,17451,12621922,17828,12753251,18209,12885353,18594,13214060,18983,13279851,19376,13280880,19773,12491365,20174,13543541,20579,13345642,20988,13082728,21401,13674608,21818,13477488,22239,12359264,8256,12622953,8517,13016936,8782,13280622,9051,13740400,9324,13345643,9601,14268033,9882,12885608,10167,13543279,10456,13938805,10749,13872242,11046,10536372,11347,11391934,11652,13872242,11961,14399362,12274,10864346,12591,13412206,12912,12636651,13237,12571368,13566,12439528,13899,13164275,14236,14282996,14577,12375015,14922,11908733,15271,11655367,15624,12885866,15981,12490850,16342,12621922,16707,13147752,17076,13016940,17449,11833181,17826,13346676,18207,12950891,18592,12490851,18981,12490592,19374,12950633,19771,13345390,20172,12885094,20577,12490851,20986,13477487,21399,12688487,21816,14069622,22237,11570524,22662,13214062,8515,12688747,8780,13016681,9049,13345644,9322,13871987,9599,13346158,9880,13082987,10165,13346413,10454,13805937,10747,14003569,11044,13937522,11345,14003827,11650,10471344,11959,10734512,12272,10931378,12589,10007483,12910,13806193,13235,12439267,13564,13427952,13897,13690866,14234,13823219,14575,13757426,14920,12049124,15269,11854050,15622,10735541,15979,13213544,16340,12621921,16705,13017196,17074,12819044,17447,12095324,17824,12029532,18205,12424546,18590,13018488,18979,11964252,19372,12292703,19769,12096865,20170,12819301,20575,12424799,20984,14531465,21397,13280112,21814,13411951,22235,13082989,22660,13543539,23089,13214319,8778,12688746,9047,12951144,9320,13345130,9597,11504989,9878,13608816,10163,13478e3,10452,13740401,10745,14135930,11042,13937266,11343,13937778,11648,14003826,11957,11129531,12270,9680542,12587,12573384,12908,14135673,13233,9152685,13562,12834540,13895,12636393,14232,12571629,14573,13888240,14918,13361903,15267,12509162,15620,11920862,15977,11524550,16338,13345642,16703,12884837,17072,13017193,17445,12885868,17822,12160861,18203,12292702,18588,12029530,18977,12425315,19370,12556130,19767,13345901,20168,14268030,20573,12556129,20982,12490338,21395,12753251,21812,11570010,22233,13213800,22658,13674607,23087,13214312,23520,12029789,9045,12688746,9318,13148009,9595,13279338,9876,14333053,10161,13871987,10450,13280365,10743,14004347,11040,13937521,11341,13493213,11646,14004083,11955,13871730,12268,11260343,12585,10602924,12906,10074286,13231,13609071,13560,11848914,13893,13756653,14230,13165037,14571,14673907,14916,12768744,15265,13690865,15618,12309731,15975,11788766,16336,10800571,16701,13871730,17070,13280364,17443,13213545,17820,12818788,18201,12621666,18586,12161373,18975,12161631,19368,12885095,19765,14070138,20166,11767387,20571,12424801,20980,12490849,21393,12424801,21810,12819301,22231,13214315,22656,13148008,23085,13873274,23518,11833181,23955,12292960,9316,12557160,9593,13016936,9874,13543541,10159,13740400,10448,13937522,10741,13740144,11038,13938035,11339,14003827,11644,13225424,11953,13609328,12266,13937266,12583,9284494,12904,10339504,13229,11702880,13558,14003828,13891,11323343,14228,14742261,14569,13888500,14914,12636389,15263,12901352,15616,13163501,15973,13100270,16334,11723236,16699,12837846,17068,11642717,17441,14135160,17818,13872757,18199,13279337,18584,12556385,18973,12884836,19366,12753251,19763,14333827,20164,12425056,20569,12818788,20978,12819047,21391,12490337,21808,12359008,22229,12621920,22654,12951400,23083,12885094,23516,13543536,23953,13149301,24394,12359265,9591,12622953,9872,13543800,10157,13872760,10446,14803675,10739,13806193,11036,13740656,11337,14465670,11642,13938033,11951,13031880,12264,14004339,12581,14069363,12902,11655362,13227,12113088,13556,10403755,13889,13411950,14226,13937522,14567,12967409,14912,13558516,15261,12572399,15614,14218230,15971,14479603,16332,13493487,16697,12379626,17066,11591124,17439,9483163,17816,10866353,18197,10799785,18582,14070651,18971,13938292,19364,13411693,19761,14135673,20162,14003826,20567,13345901,20976,12884836,21389,12950885,21806,12425313,22227,12292959,22652,12227168,23081,13148266,23514,13675128,23951,13543536,24392,12490337,24837,12424288,9870,12622953,10155,13280110,10444,13938554,10737,10196887,11034,14069878,11335,13938034,11640,13806193,11949,14477546,12262,12177847,12579,11060904,12900,14003570,13225,11653559,13554,7965567,13887,13937778,14224,13411694,14565,13871730,14910,14003826,15259,13559276,15612,13756399,15969,11913183,16330,14545139,16695,14348273,17064,12117993,17437,11128245,17814,10208673,18195,10339999,18580,12114371,18969,10010793,19362,11787730,19759,13298402,20160,12314085,20565,12110818,20974,13937522,21387,14003827,21804,13543279,22225,12819043,22650,12951150,23079,12556130,23512,12950629,23949,13082471,24390,13608560,24835,12293471,25284,12425058,10153,12622953,10442,13412208,10735,14135419,11032,15790314,11333,13938291,11638,13937777,11947,13279310,12260,12308922,12577,11651238,12898,10799275,13223,10666916,13552,11194807,13885,10735805,14222,9416610,14563,10666959,14908,13345901,15257,13937266,15610,13887987,15967,12900845,16328,14874359,16693,14479602,17062,14086131,17435,12117992,17812,11196098,18193,10010269,18578,10273948,18967,10208669,19360,11509577,19757,11984852,20158,11590091,20563,11787742,20972,12509927,21385,12244447,21802,13230067,22223,14003826,22648,13279851,23077,13082990,23510,12425057,23947,12885097,24388,12227422,24833,11833183,25282,12753255,25735,13083763,10440,12622953,10733,13477489,11030,13213800,11331,13937522,11636,14003826,11945,14003827,12258,13754079,12575,11323814,12896,14003570,13221,13740400,13550,14003572,13883,10993042,14220,11064521,14561,9745048,14906,13149036,15255,13543279,15608,14333054,15965,15202038,16326,14282995,16691,11781849,17060,13098221,17433,13231855,17810,11592158,18191,11392968,18576,11983301,18965,9879701,19358,9682576,19755,11314005,20156,11853516,20561,12312013,20970,11591132,21383,12510698,21800,12179172,22221,12901348,22646,13427687,23075,11981511,23508,12819044,23945,12161374,24386,13082730,24831,12885094,25280,13872244,25733,13345388,26190,12951401,10731,12622953,11028,13411439,11329,13148264,11634,13806193,11943,13871986,12256,14003826,12573,12243652,12894,14003826,13219,11126174,13548,12361039,13881,10996656,14218,10996914,14559,11326396,14904,13492173,15253,10534322,15606,12163172,15963,14333825,16324,15135989,16689,14217203,17058,13231854,17431,11848425,17808,12574440,18189,11854562,18574,11326912,18963,11194806,19356,9945493,19753,9550738,20154,10866352,20559,11326915,20968,11525328,21381,11656667,21798,12314604,22219,12049635,22644,12442858,23073,11848668,23506,13871986,23943,11898203,24384,12425314,24829,12687715,25278,13279854,25731,13148009,26188,12885606,26649,12424800,11026,12622953,11327,13873019,11632,13279337,11941,13740401,12254,13805936,12571,13871730,12892,13426655,13217,13937266,13546,10796957,13879,10797990,14216,11061933,14557,10931379,14902,10930092,15251,11907963,15604,13871986,15961,11841933,16322,14004341,16687,15005432,17056,13032944,17429,13362415,17806,14676724,18187,12967148,18572,12443370,18961,11984850,19354,10274468,19751,10011029,20152,9814420,20557,11326906,20966,11722186,21379,11393999,21796,11195596,22217,11853281,22642,12116454,23071,11325908,23504,12377573,23941,13871729,24382,13016935,24827,13412207,25276,12358238,25729,12425056,26186,13807228,26647,13279597,27112,12358495,11325,12622953,11630,13805942,11939,13279337,12252,14004085,12569,13872242,12890,13871986,13215,12111543,13544,10730914,13877,13739101,14214,10995624,14555,10864296,14900,10800311,15249,11709288,15602,11589838,15959,10667706,16320,13214829,16685,13346157,17054,13098727,17427,13626606,17804,14151667,18185,13165806,18570,13229811,18959,12115942,19352,11787987,19749,10866358,20150,10143390,20555,12442559,20964,11129786,21377,11918540,21794,10932670,22215,8496021,22640,12116191,23069,12379103,23502,12181211,23939,10731965,24380,12885350,24825,13345388,25274,13214313,25727,12359009,26184,13017196,26645,13740916,27110,11636312,27579,12424287,11628,12622953,11937,13873275,12250,13345645,12567,14004085,12888,13806193,13213,13937522,13542,12702921,13875,13410645,14212,12884029,14553,10864040,14898,10798245,15247,14003570,15600,11656148,15957,13017196,16318,9416359,16683,6913914,17052,13872497,17425,14084589,17802,14874101,18183,13560559,18568,12965079,18957,12770033,19350,11656923,19747,11328462,20148,11721931,20553,11394772,20962,12511196,21375,11524294,21792,11326922,22213,10932166,22638,10603193,23067,12510955,23500,12509399,23937,11590872,24378,11768161,24823,13345645,25272,13213802,25725,12885612,26182,12359010,26643,11636060,27108,12095836,27577,12161374,28050,12490592,11935,12622953,12248,13674609,12565,13543793,12886,14004083,13211,14003569,13540,13871730,13873,12099928,14210,11909256,14551,11717542,14896,10996399,15245,10732711,15598,10866107,15955,11064778,16316,13740400,16681,12837604,17050,9745074,17423,14004085,17800,13954546,18181,12703721,18566,12901355,18955,13756909,19348,12312025,19745,11788769,20146,11655378,20551,11656917,20960,11787983,21373,12760701,21790,11327945,22211,10207163,22636,11788503,23065,11327437,23498,10471093,23935,10933184,24376,13609073,24821,13345901,25270,13806706,25723,14005121,26180,12950891,26641,13149295,27106,11372888,27575,12161374,28048,12095580,28525,12358495,12246,12622953,12563,12622182,12884,13740402,13209,13937522,13538,13871985,13871,13937522,14208,12899285,14549,14003829,14894,14003570,15243,10732451,15596,11128506,15953,11196877,16314,11920102,16679,13937522,17048,10075829,17421,13805936,17798,10799309,18179,12835306,18564,13740401,18953,13822196,19346,10662339,19743,12375266,20144,13296342,20549,11718843,20958,12755534,21371,10139582,21788,13410386,22209,11065031,22634,12115663,23063,10603963,23496,10932670,23933,13740401,24374,13543792,24819,13609328,25268,14465155,25721,11964510,26178,12754026,26639,12885351,27104,13477999,27573,12687460,28046,12753769,28523,12490337,29004,12423776,12561,12622953,12882,13214318,13207,13740659,13536,13938033,13869,13938034,14206,13937522,14547,14003827,14892,14003827,15241,11191967,15594,11259055,15951,10931382,16312,10932935,16677,11591392,17046,13477743,17419,7901580,17796,12050662,18177,13821684,18562,13164275,18951,11385294,19344,14268288,19741,13871730,20142,12311006,20547,11981522,20956,11787488,21369,11458519,21786,12046816,22207,11525076,22632,10864292,23061,11524811,23494,12314077,23931,10276268,24372,13609071,24817,13543280,25266,12951144,25719,12687459,26176,12621667,26637,12885354,27102,13412206,27571,14136447,28044,13214316,28521,13345130,29002,13213801,29487,12489568,12880,12622953,13205,13346157,13534,13806968,13867,13937522,14204,14003826,14545,13871730,14890,13937778,15239,11453864,15592,11784110,15949,10929832,16310,10537141,16675,10997959,17044,11393753,17417,11848883,17794,15594740,18175,12247784,18560,13032684,18949,13032946,19342,13425903,19739,13491437,20140,13362673,20545,14003826,20954,11520215,21367,12445925,21784,11326169,22205,11721952,22630,13477486,23059,13346412,23492,13805936,23929,13346158,24370,13740143,24815,13280619,25264,13345644,25717,12950630,26174,11898715,26635,12029789,27100,12885350,27569,13740401,28042,14333568,28519,12951143,29e3,14399362,29485,12884837,29974,12357983,13203,12622953,13532,13675124,13865,13806451,14202,13937522,14543,13871986,14888,13938034,15237,14004086,15590,12440266,15947,10797467,16308,10995622,16673,11063229,17042,11129546,17415,11590619,17792,11064778,18173,11525855,18558,10536389,18947,12705489,19340,13428464,19737,13427953,20138,12964833,20543,11518419,20952,12703456,21365,13740657,21782,11587039,22203,11721952,22628,12951658,23057,13345131,23490,13213289,23927,13016678,24368,13345645,24813,14069623,25262,10670781,25715,12114910,26172,13805936,26633,14069881,27098,12951659,27567,13806453,28040,13345900,28517,13477487,28998,11307867,29483,13740144,29972,12951141,30465,12292445,13530,12622953,13863,12754021,14200,14070908,14541,14004342,14886,14003826,15235,14003827,15588,13937522,15945,11454631,16306,11257247,16671,10929313,17040,11719877,17413,11525082,17790,11970657,18171,11656672,18556,10999494,18945,9807790,19338,8559778,19735,14216435,20136,12572911,20541,13493228,20950,13822962,21363,14347510,21780,14135416,22201,12377577,22626,12246759,23055,13214057,23488,12621923,23925,12753251,24366,13279852,24811,13280108,25260,11720653,25713,8759966,26170,5928031,26631,13805936,27096,12359523,27565,12359781,28038,12820071,28515,12951401,28996,13740401,29481,12950887,29970,13016936,30463,12622178,30960,12489567,13861,12622953,14198,12819815,14539,14267261,14884,13805937,15233,14003826,15586,13937522,15943,13871730,16304,11585967,16669,11323043,17038,11060906,17411,10668728,17788,11459546,18169,11915998,18554,13871729,18943,13937522,19336,11452880,19733,15397104,20134,13938034,20539,14676981,20948,14808566,21361,13032941,21778,14018290,22199,14465160,22624,12309992,23053,13345642,23486,13411181,23923,12490594,24364,13345902,24809,13806457,25258,8235136,25711,13937266,26168,12621924,26629,11176025,27094,12424801,27563,12819044,28036,13609335,28513,13806451,28994,13345643,29479,14069879,29968,13213801,30461,12753764,30958,12753511,31459,12489824,14196,12622953,14537,13543796,14882,14465155,15231,13937522,15584,13937522,15941,14344674,16302,13673049,16667,11124894,17036,11980718,17409,10797474,17786,11523783,18167,11195862,18552,12114402,18941,12901353,19334,13938033,19731,10931378,20132,12766941,20537,12442339,20946,13938034,21359,13625585,21776,13164015,22197,14004085,22622,14004083,23051,12490852,23484,12490852,23921,12292959,24362,12819044,24807,14400140,25256,12096351,25709,12884837,26166,12818787,26627,12621667,27092,12819044,27561,12490080,28034,12227423,28511,11175769,28992,12359779,29477,12885606,29966,13543279,30459,13213544,30956,12753252,31457,12358238,31962,12490593,14535,12622953,14880,13214059,15229,14333567,15582,13740657,15939,13871729,16300,13225934,16665,13871473,17034,11388583,17407,10861975,17784,10797477,18165,11129538,18550,11656928,18939,11259863,19332,13625074,19729,13097447,20130,11584724,20535,14806518,20944,12043994,21357,13938291,21774,13229809,22195,15661563,22620,14003832,23049,12885350,23482,13346419,23919,12951148,24360,13214063,24805,13543024,25254,11637088,25707,12950887,26164,13279850,26625,12819045,27090,13609336,27559,12819044,28032,12556387,28509,12687714,28990,12228707,29475,13609073,29964,12884837,30457,13213544,30954,13016679,31455,13478004,31960,12687972,32469,12490337,14878,12622953,15227,12951401,15580,14135673,15937,13937778,16298,14003826,16663,14003827,17032,13622489,17405,11124895,17782,11190939,18163,10928031,18548,9745306,18937,11854049,19330,11914973,19727,14741749,20128,13098221,20533,12110815,20942,12701665,21355,12635103,21772,13425382,22193,11253963,22618,12491109,23047,13873277,23480,13411696,23917,13543279,24358,13674870,24803,12884836,25252,13148008,25705,13674864,26162,13082727,26623,13148009,27088,13740661,27557,12556387,28030,12359264,28507,12424544,28988,14135679,29473,13279853,29962,12095839,30455,12753508,30952,12884838,31453,12950887,31958,12950886,32467,12884580,32980,12425314,15225,12622953,15578,12820072,15935,14267515,16296,14004342,16661,16776440,17030,14003826,17403,13293783,17780,12965073,18161,11651751,18546,11258022,18935,11064002,19328,11193299,19725,12048610,20126,13623787,20531,12309223,20940,13428977,21353,12241883,21770,14740725,22191,12965088,22616,13411437,23045,13279336,23478,12951399,23915,13213544,24356,13148521,24801,13740145,25250,13280882,25703,13082730,26160,13082472,26621,14268031,27086,11439710,27555,13345643,28028,13016680,28505,12753508,28986,10780754,29471,10387026,29960,12424801,30453,12358239,30950,12424543,31451,12885093,31956,13148008,32465,12951403,32978,13016939,33495,12621922,15576,12622953,15933,13017192,16294,14135672,16659,13740657,17028,13157315,17401,13937522,17778,13425364,18159,12177341,18544,11256991,18933,11653042,19326,11195594,19723,11325658,20124,12442085,20529,13164783,20938,13163753,21351,12112867,21768,11976904,22189,13490661,22614,14147818,23043,14136186,23476,13411436,23913,13279593,24354,13016422,24799,12885608,25248,13214056,25701,12885094,26158,12359009,26619,12491107,27084,12753509,27553,11176282,28026,13675129,28503,13280621,28984,13279850,29469,13279851,29958,12753252,30451,13016423,30948,12490337,31449,12621923,31954,12753765,32463,13938035,32976,13345389,33493,12490850,34014,12621921,15931,12622953,16292,13543793,16657,14135672,17026,13937522,17399,13937777,17776,13871730,18157,13161942,18542,12045236,18931,11717802,19324,11389869,19721,11394516,20122,11786975,20527,11325145,20936,12242143,21349,10862796,21766,14611191,22187,14344420,22612,14016231,23041,12773099,23474,13674608,23911,13345645,24352,13345386,24797,13082472,25246,12687459,25699,13609336,26156,13411694,26617,11176538,27082,11438682,27551,14004347,28024,12950889,28501,13806966,28982,14070656,29467,14004606,29956,13148530,30449,13280108,30946,12951401,31447,13148009,31952,12951143,32461,13148264,32974,13411951,33491,12951142,34012,13807226,34537,12818788,16290,12622953,16655,12885606,17024,14135673,17397,14003826,17774,14003826,18155,13687515,18540,13621977,18929,12373949,19322,11652272,19719,11648399,20120,11525336,20525,11655390,20934,11719389,21347,12179940,21764,12379881,22185,14675955,22610,12899546,23039,12966373,23472,12705259,23909,13871473,24350,13806709,24795,13279851,25244,13016422,25697,12819044,26154,13807485,26615,12293729,27080,12819302,27549,13477743,28022,13214057,28499,13016936,28980,12293729,29465,12951400,29954,13346414,30447,12097120,30944,12885350,31445,12753508,31950,13148008,32459,13148008,32972,13608814,33489,13871729,34010,13148009,34535,13148778,35064,12885093,16653,12622953,17022,12951142,17395,14135415,17772,13937522,18153,14003826,18538,14015710,18927,13490650,19320,12505539,19717,11914933,20118,11325111,20523,11591129,20932,11787489,21345,11390681,21762,11914206,22183,13756649,22608,16710903,23037,12969451,23470,12428638,23907,12443365,24348,11589850,24793,13871986,25242,13871729,25695,13938549,26152,13280107,26613,13807482,27078,13280109,27547,12885093,28020,13806193,28497,13345900,28978,12030045,29463,11636316,29952,13016936,30445,13411436,30942,13214572,31443,12425058,31948,12425314,32457,13543284,32970,13346417,33487,13674864,34008,14004340,34533,14135416,35062,13806200,35595,12819044,17020,12688490,17393,13279849,17770,14135675,18151,13872242,18536,13937778,18925,13871730,19318,13358806,19715,12702665,20116,12112059,20521,11389872,20930,11262416,21343,11590108,21760,11587547,22181,11719387,22606,15660019,23035,8815230,23468,10073241,23905,12443367,24346,11721177,24791,11062981,25240,11590098,25693,10472371,26150,13543792,26611,13805680,27076,13805937,27545,13082474,28018,12293472,28495,12425313,28976,12491108,29461,12819303,29950,12359520,30443,12819044,30940,13873537,31441,13411693,31946,13609072,32455,12688229,32968,12687972,33485,13148008,34006,12491109,34531,13740400,35060,13805937,35593,13740400,36130,13740145,17391,12885611,17768,13345644,18149,14135672,18534,13806193,18923,13871986,19316,13352083,19713,14003826,20114,12964558,20519,11585964,20928,11587255,21341,11262419,21758,11918048,22179,11587032,22604,12246501,23033,13622503,23466,16776955,23903,10263190,24344,11327177,24789,11721172,25238,13165527,25691,11130824,26148,10800830,26609,7903104,27074,10076326,27543,13938295,28016,12359265,28493,12621923,28974,12753510,29459,12161629,29948,12292446,30441,12885093,30938,12621666,31439,12884837,31944,13346158,32453,13543536,32966,13477485,33483,14333568,34004,13674865,34529,13214057,35058,13345644,35591,14135673,36128,13346157,36669,13609328,17766,12885611,18147,13016679,18532,13938551,18921,13937522,19314,13871730,19711,14003571,20112,13227989,20517,12768202,20926,12243646,21339,10994591,21756,11458762,22177,11854050,22602,11524061,23031,12573161,23464,13296110,23901,14672867,24342,11381157,24787,6650472,25236,11261388,25689,10735294,26146,10603702,26607,13740401,27072,12885867,27541,11129016,28014,12950630,28491,12753507,28972,12687460,29457,12227166,29946,12490337,30439,12885355,30936,12292703,31437,12884840,31942,13082216,32451,13346415,32964,13082472,33481,12885864,34002,13345900,34527,14005121,35056,13411693,35589,13279849,36126,13806451,36667,12951400,37212,13674608,18145,12885611,18530,13345646,18919,13938550,19312,13740400,19709,14003826,20110,13555673,20515,13095890,20924,12373695,21337,12309696,21754,11784379,22175,11523526,22600,9679258,23029,14281711,23462,13953261,23899,13295596,24340,15397109,24785,13683921,25234,8487808,25687,10998464,26144,10603705,26605,10929070,27070,13280620,27539,13411437,28012,12819557,28489,13148009,28970,13345388,29455,12753766,29944,12491107,30437,12359264,30934,13346417,31435,12095325,31940,11636314,32449,13345645,32962,12885350,33479,13346157,34e3,13806968,34525,13411693,35054,13280363,35587,12819815,36124,12951144,36665,13082473,37210,12884837,37759,14267262,18528,12885867,18917,13477231,19310,13938295,19707,14003826,20108,13938034,20513,13950175,20922,13491161,21335,12308158,21752,11586220,22173,11322529,22598,11984591,23027,10866377,23460,12442852,23897,11781047,24338,12571876,24783,13157313,25232,14737372,25685,13553353,26142,10866616,26603,11590091,27068,13740657,27537,13609071,28010,13345901,28487,13344873,28968,13148008,29453,12951401,29942,12687714,30435,12490851,30932,12359265,31433,12162145,31938,12885870,32447,12950887,32960,12884836,33477,13608818,33998,13213800,34523,13346415,35052,13345645,35585,13608815,36122,13279851,36663,12885350,37208,12622180,37757,12753251,38310,13345643,18915,12951660,19308,12819302,19705,13938294,20106,13937522,20511,13937777,20920,13621980,21333,12635340,21750,10993563,22171,11520678,22596,11453858,23025,12310210,23458,9479307,23895,12113891,24336,12171187,24781,13821940,25230,14736857,25683,9998474,26140,12698559,26601,10602666,27066,10735026,27535,14004344,28008,13674608,28485,13477230,28966,13345386,29451,13016936,29940,12819558,30433,13147496,30930,13807743,31431,13872762,31936,14004344,32445,14136186,32958,12622181,33475,11438681,33996,12359779,34521,12491110,35050,13148008,35583,13543536,36120,14135935,36661,13280109,37206,13345387,37755,13016423,38308,13148266,38865,12884837,19306,12951660,19703,12884838,20104,13806194,20509,13937522,20918,14003826,21331,13489879,21748,14541538,22169,12373185,22594,11256993,23023,11389867,23456,10469294,23893,12439738,24334,14148581,24779,11648975,25228,13360106,25681,14080215,26138,15132129,26599,15001059,27064,9022093,27533,13871729,28006,13806192,28483,13740145,28964,12885607,29449,13016935,29938,12885096,30431,13016680,30928,12687715,31429,12490851,31934,12227166,32443,11898459,32956,12622185,33473,13214575,33994,12556130,34519,12951404,35048,13148524,35581,12622180,36118,13148265,36659,13543279,37204,13412207,37753,13345386,38306,12885350,38863,13148008,39424,12950630,19701,12951660,20102,13082472,20507,13345645,20916,13871986,21329,14278367,21746,13556185,22167,15067627,22592,12636861,23021,12243389,23454,11389352,23891,10138778,24332,11781552,24777,11847385,25226,12110038,25679,14083311,26136,12898265,26597,14673634,27062,14804960,27531,12966597,28004,10603177,28481,10990709,28962,13937522,29447,13938034,29936,13411949,30429,13543536,30926,13016679,31427,12687715,31932,12490594,32441,12424800,32954,12095067,33471,12885869,33992,12358751,34517,12490849,35046,13016936,35579,13806193,36116,13016939,36657,13346159,37202,13280110,37751,13543535,38304,13148266,38861,13279850,39422,13345646,39987,12950374,20100,12819818,20505,13016936,20914,13674609,21327,15000032,21744,14540768,22165,14276567,22590,13490134,23019,12766671,23452,13294536,23889,11257771,24330,12112575,24775,8953996,25224,10532022,25677,11648976,26134,12635612,26595,13094358,27060,11253938,27529,12632509,28002,7309937,28479,9747618,28960,13033417,29445,13937522,29934,14135931,30427,13937522,30924,11062194,31425,14267515,31930,12359008,32439,12885354,32952,11963996,33469,12424800,33990,11963738,34515,12029532,35044,12556131,35577,12951401,36114,12885865,36655,12885351,37200,13148008,37749,13214057,38302,12886121,38859,13213802,39420,13213800,39985,12753765,40554,12950887,20503,12819818,20912,13016424,21325,13543024,21742,13279323,22163,14343131,22588,13484444,23017,11450294,23450,12965072,23887,11323044,24328,10862233,24773,11060388,25222,12308176,25675,10860985,26132,12372956,26593,13097190,27058,11581621,27527,12239036,28e3,13622227,28477,8953992,28958,11653824,29443,12573641,29932,10537132,30425,9351820,30922,10865578,31423,13937266,31928,9615260,32437,12951658,32950,12687460,33467,12688492,33988,11503702,34513,12556388,35042,12491114,35575,12424547,36112,12818789,36653,14069881,37198,12556130,37747,13148008,38300,12885350,38857,13280362,39418,13411950,39983,13082215,40552,12885606,41125,13279337,20910,12885611,21323,13148010,21740,13345901,22161,14277083,22586,14342618,23015,13096141,23448,13293012,23885,11912892,24326,11849133,24771,11520684,25220,11652525,25673,11523022,26130,10863814,26591,14543603,27056,11848158,27525,13097931,27998,14018273,28475,8230781,28956,11783347,29441,11193010,29930,10667950,30423,10669233,30920,13806193,31421,14003826,31926,9155211,32435,13080899,32948,9286542,33465,12951916,33986,12358752,34511,12425056,35040,12029790,35573,12094810,36110,12752997,36651,13214577,37196,12753507,37745,11898202,38298,12884581,38855,13345389,39416,13213800,39981,13609073,40550,13016936,41123,13279337,41700,13213545,21321,12885611,21738,13016423,22159,13345387,22584,13937522,23013,13025986,23446,13227730,23883,12373440,24324,11518127,24769,11915184,25218,11519651,25671,13031361,26128,10075320,26589,11850714,27054,12439006,27523,12570334,27996,14084075,28473,8626322,28954,11062708,29439,11259574,29928,12179908,30421,11062197,30918,11447403,31419,10274205,31924,13937522,32433,13871986,32946,13937522,33463,9813909,33984,14267518,34509,12687717,35038,13018746,35571,11832665,36108,12357725,36649,12556385,37194,12621923,37743,13148266,38296,12226910,38853,12621664,39414,12490850,39979,13345641,40548,13214057,41121,13609328,41698,12950887,42279,13279854,21736,12885611,22157,13016935,22582,13345641,23011,13937266,23444,13881037,23881,13950429,24322,13424599,24767,11978430,25216,11776893,25669,10533525,26126,10929059,26587,10073754,27052,11917018,27521,12900071,27994,12439781,28471,12114140,28952,11774308,29437,8824213,29926,11719871,30419,10733740,30916,14003825,31417,6849388,31922,9418646,32431,13674609,32944,13871730,33461,13937522,33982,14003826,34507,14004083,35036,11439451,35569,13939331,36106,12094811,36647,12490851,37192,14004344,37741,12358752,38294,12359263,38851,12490850,39412,12227678,39977,12885350,40546,12885606,41119,13345644,41696,13345386,42277,13214572,42862,13148525,22155,12951660,22580,13016423,23009,13345644,23442,14135673,23879,11776947,24320,13687513,24765,14542310,25214,11979704,25667,12440255,26124,10927769,26585,11323046,27050,12111542,27519,12441571,27992,12110559,28469,12442340,28950,11326405,29435,10141353,29924,8758415,30417,6584935,30914,9484440,31415,13872241,31920,13938290,32429,13543280,32942,12622695,33459,14003826,33980,9617041,34505,9813907,35034,13938034,35567,12294501,36104,12095325,36645,12292703,37190,13279850,37739,13478004,38292,12357983,38849,12490593,39410,13805680,39975,12425057,40544,12885094,41117,12556644,41694,13279850,42275,13280365,42860,12951143,43449,12951142,22578,12951660,23007,13016423,23440,13345900,23877,13938294,24318,13751509,24763,13878436,25212,13162190,25665,12439487,26122,11454374,26583,11246428,27048,10204571,27517,10602434,27990,11587546,28467,12507879,28948,10401981,29433,11917514,29922,10733489,30415,11194806,30912,13098702,31413,10727030,31918,13346671,32427,13082729,32940,12950630,33457,12294245,33978,13740400,34503,9220758,35032,9682578,35565,13938034,36102,13279852,36643,11503960,37188,13609072,37737,13740656,38290,11917283,38847,13938033,39408,12687715,39973,13740401,40542,12687458,41115,12950630,41692,13346673,42273,13740405,42858,13082728,43447,12753251,44040,12950117,23005,12951660,23438,12951143,23875,13346158,24316,13740657,24761,13938034,25210,13687514,25663,13622485,26120,12628856,26581,11190944,27046,12637385,27515,11915192,27988,11653828,28465,12114146,28946,12378086,29431,10931642,29920,10799797,30413,10998458,30910,10932152,31411,13689557,31916,13806193,32425,13280108,32938,12885094,33455,13544050,33976,14333568,34501,10010786,35030,9878425,35563,12688974,36100,13871730,36641,13214058,37186,11963737,37735,13411950,38288,13805936,38845,11256284,39406,11652322,39971,11854559,40540,11454148,41113,12555874,41690,12951402,42271,13149037,42856,12754278,43445,13213544,44038,12753252,44635,12884837,23436,12951660,23873,13147752,24314,12819557,24759,13740401,25208,14003570,25661,13688287,26118,12373700,26579,12374205,27044,11585451,27513,12899788,27986,11718070,28463,12573900,28944,11720656,29429,12181212,29918,10207921,30411,10799541,30908,12296789,31409,13607770,31914,8955533,32423,13543535,32936,13016936,33453,12359777,33974,14135673,34499,14069622,35028,13805936,35561,11308124,36098,10339480,36639,14069878,37184,11457976,37733,12424800,38286,14201980,38843,12048866,39404,10993878,39969,11058391,40538,11522772,41111,13938290,41688,10846547,42269,12885094,42854,13345645,43443,13016678,44036,13543024,44633,13213288,45234,12950885,23871,12951148,24312,13082216,24757,13214056,25206,13608816,25659,13871730,26116,13884638,26577,12570563,27042,12111029,27511,11651500,27984,12637382,28461,13230292,28942,12244159,29427,9942945,29916,11590105,30409,14003827,30906,13937522,31407,13937522,31912,11719617,32421,13806193,32934,13214320,33451,11838551,33972,14267518,34497,13346414,35026,13740666,35559,12621921,36096,9944217,36637,12901572,37182,13740401,37731,13674607,38284,14333825,38841,14004341,39402,11720674,39967,11192028,40536,11258076,41109,11719892,41686,13871473,42267,11109718,42852,12950886,43441,13213545,44034,13741434,44631,13082473,45232,12884837,45837,12884836,24310,12885611,24755,13213801,25204,13213801,25657,13543280,26114,13872242,26575,14409952,27040,12900041,27509,12558674,27982,11585451,28459,12703423,28940,10204568,29425,10270876,29914,11457483,30407,11524818,30904,11785407,31405,13937522,31910,13937266,32419,14003570,32932,12293731,33449,12029532,33970,12029531,34495,12030559,35024,13937521,35557,10274212,36094,11372888,36635,12047800,37180,13148782,37729,14465669,38282,11457977,38839,13937778,39400,11984598,39965,12178664,40534,11258075,41107,11390172,41684,11523291,42265,13344875,42850,12029277,43439,12556128,44032,13411183,44629,13872762,45230,13279853,45835,12687459,46444,12884837,24753,12688746,25202,13082217,25655,13017192,26112,13740401,26573,13872242,27038,14213858,27507,13162711,27980,14476770,28457,11388579,28938,10992040,29423,11192240,29912,10863012,30405,11192750,30902,11389872,31403,12309438,31908,11391678,32417,13937522,32930,13477743,33447,12754024,33968,11635287,34493,12622181,35022,12095325,35555,12424803,36092,9991241,36633,13148780,37178,14003821,37727,12425058,38280,13741436,38837,14399621,39398,13937522,39963,11391701,40532,12115425,41105,11456222,41682,11388123,42263,11457757,42848,12819814,43437,12358496,44030,12818788,44627,12885349,45228,12622436,45833,13345645,46442,12556643,47055,12884325,25200,12688746,25653,13148265,26110,13213801,26571,13609072,27036,14003570,27505,13937522,27978,14279394,28455,14476259,28936,11782571,29421,9939356,29910,11126706,30403,11719099,30900,11324080,31401,10863009,31906,13805937,32415,13214317,32928,12884807,33445,14268289,33966,13345903,34491,11570264,35020,11767128,35553,11043668,36090,12095067,36631,12095580,37176,13017452,37725,14268292,38278,14003828,38835,14333829,39396,14003827,39961,13673571,40530,11326677,41103,11654625,41680,12310247,42261,11388125,42846,11458271,43435,13805681,44028,12292446,44625,12555874,45226,12885351,45831,13279595,46440,13279594,47053,12753508,47670,12818786,25651,12622953,26108,12951143,26569,13279850,27034,13674352,27503,14003826,27976,13937522,28453,12628605,28934,12767693,29419,12111799,29908,10993059,30401,12770511,30898,11454116,31399,11522495,31904,10995365,32413,13543279,32926,14003570,33443,8298120,33964,12753252,34489,12227681,35018,12292446,35551,12029790,36088,13149815,36629,12029531,37174,12359264,37723,12885607,38276,12951143,38833,14003825,39394,11111003,39959,13937777,40528,11392199,41101,11590361,41678,11982565,42259,11061459,42844,10796505,43433,11389403,44026,13740401,44623,12490337,45224,12161631,45829,12687459,46438,13345901,47051,12951142,47668,13346672,48289,12819300,26106,12622953,26567,13213544,27032,13279337,27501,14004086,27974,14410209,28451,14003826,28932,14476773,29417,13557202,29906,10467476,30399,10993573,30896,12309946,31397,13228482,31902,12308660,32411,12754280,32924,14135675,33441,14333825,33962,12820074,34487,12884836,35016,13345644,35549,12423775,36086,13806969,36627,12885612,37172,12424544,37721,12293729,38274,11570522,38831,12819044,39392,14201211,39957,13938034,40526,14003570,41099,11064255,41676,11721948,42257,11588064,42842,11522781,43431,11190238,44024,11585762,44621,12048331,45222,12160859,45827,12885608,46436,13213545,47049,13345642,47666,12951400,48287,13279336,48912,12818788,26565,12622953,27030,13148778,27499,13938554,27972,14070138,28449,14343902,28930,13871730,29415,13622238,29904,13885663,30397,13359827,30894,14149085,31395,14003826,31900,12966335,32409,9744273,32922,13214314,33439,14201465,33960,12440512,34485,13740402,35014,13279595,35547,12687718,36084,13543539,36625,12556129,37170,13215865,37719,13412473,38272,13148779,38829,13345389,39390,13082472,39955,9089422,40524,10339744,41097,14003570,41674,13871730,42255,13937523,42840,11984871,43429,11653345,44022,12707822,44619,11981279,45220,11326412,45825,13016680,46434,13214575,47047,11636316,47664,13279851,48285,12885865,48910,13345387,49539,13345646,27028,12622953,27497,13280622,27970,13806193,28447,14267004,28928,14210003,29413,14015709,29902,14673895,30395,15658991,30892,11910328,31393,13938033,31898,14003570,32407,13806193,32920,13411950,33437,14201467,33958,11390899,34483,13346415,35012,12754022,35545,13148263,36082,12820071,36623,13214056,37168,12753250,37717,12885094,38270,11767903,38827,13214574,39388,13873275,39953,13740403,40522,13740144,41095,9945496,41672,14003570,42253,13937777,42838,11325627,43427,12181992,44020,12180201,44617,11388890,45218,11784675,45823,11786973,46432,11325118,47045,12095839,47662,13148781,48283,12425059,48908,13280620,49537,13214058,50170,12621922,27495,12622953,27968,13937522,28445,13871729,28926,14003827,29411,13883608,29900,13753050,30393,13621723,30890,14738403,31391,9609875,31896,13871986,32405,13740401,32918,13806193,33435,13148781,33956,10139799,34481,11964766,35010,12359525,35543,12490596,36080,12029274,36621,14003827,37166,14137224,37715,13016679,38268,13214314,38825,9795668,39386,13016937,39951,13148007,40520,13280108,41093,13280623,41670,6716784,42251,13937522,42836,11505502,43425,12182236,44018,12379110,44615,11721440,45216,11917025,45821,12049380,46430,11919069,47043,10536362,47660,13937523,48281,13017194,48906,13346416,49535,13740402,50168,13214313,50805,13279336,27966,12622953,28443,14135673,28924,13740145,29409,14003827,29898,13938034,30391,14003315,30888,13424600,31389,13294031,31894,13688793,32403,14004084,32916,13806193,33433,13740401,33954,13279852,34479,12884055,35008,12819818,35541,12029531,36078,12029532,36619,11832666,37164,12951407,37713,11635543,38266,13674610,38823,12885097,39384,12490857,39949,14004086,40518,12885094,41091,12951401,41668,13412207,42249,13822426,42834,13871730,43423,14069883,44016,13872242,44613,11194298,45214,11589069,45819,11589338,46428,11524310,47041,11921383,47658,10337954,48279,10732451,48904,13280108,49533,12491108,50166,13609073,50803,13805936,51444,13740402,28441,12622953,28922,14004342,29407,13740400,29896,13938034,30389,14003826,30886,14003826,31387,12242362,31892,13227991,32401,12110269,32914,13937522,33431,13674865,33952,14069879,34477,13279595,35006,8676673,35539,12292446,36076,11832922,36617,12029533,37162,11767129,37711,12491113,38264,12029531,38821,12622695,39382,12951402,39947,12491627,40516,13214058,41089,12491109,41666,12095839,42247,12689e3,42832,10536619,43421,10537897,44014,12622178,44611,14004342,45212,13937778,45817,10930869,46426,11589331,47039,11852493,47656,10339504,48277,13938034,48902,12819045,49531,12819301,50164,13872755,50801,13082731,51442,13148008,52087,13674610,28920,12622953,29405,14003827,29894,13543280,30387,13871730,30884,14003827,31385,13938034,31890,13082186,32399,13163212,32912,14739944,33429,13806193,33950,13937522,34475,13740401,35004,14465156,35537,12556386,36074,12292445,36615,11963994,37160,12095581,37709,11963738,38262,12292959,38819,12095324,39380,12358752,39945,11570264,40514,12095068,41087,11899485,41664,12951142,42245,13279852,42830,13412207,43419,12097390,44012,14531982,44609,12753251,45210,13280622,45815,13740400,46424,13871730,47037,10140323,47654,8626562,48275,12556386,48900,12885607,49529,11241815,50162,12753251,50799,12687458,51440,13213800,52085,12688487,52734,13346156,29403,12622953,29892,14069877,30385,13740400,30882,14003826,31383,13937266,31888,13938034,32397,13160905,32910,13819616,33427,14739429,33948,13872242,34473,13871730,35002,14003827,35535,9925705,36072,12227423,36613,12095324,37158,12160603,37707,12424801,38260,12359009,38817,11372374,39378,12425058,39943,11964251,40512,9992785,41085,11635544,41662,12293986,42243,13345387,42828,13938291,43417,13740144,44010,6915691,44607,13214315,45208,13740144,45813,13543279,46422,13477229,47035,12753765,47652,13016680,48273,11964253,48898,12884840,49527,12885607,50160,12950629,50797,12424800,51438,12490336,52083,13147495,52732,13148263,53385,13675378,29890,12622953,30383,13017196,30880,13674608,31381,14004083,31886,13871730,32395,13937522,32908,13227472,33425,13162191,33946,13806193,34471,12506056,35e3,12635852,35533,13346157,36070,12752741,36611,12095324,37156,12358751,37705,13477745,38258,13279851,38815,12357983,39376,11898202,39941,12490594,40510,12161117,41083,12029530,41660,11437910,42241,12556387,42826,13741171,43415,13872497,44008,13609072,44605,13280107,45206,13148009,45811,13674607,46420,12425573,47033,14266746,47650,13674865,48271,14069879,48896,11767389,49525,13213545,50158,12490593,50795,12621668,51436,12226910,52081,12622178,52730,13345132,53383,11767386,54040,13411950,30381,12557160,30878,13213799,31379,13740400,31884,14135673,32393,13872242,32906,13937522,33423,13096400,33944,12695940,34469,12832719,34998,15462126,35531,13214572,36068,12425317,36609,12095582,37154,12490854,37703,12226909,38256,12490594,38813,12425057,39374,12029530,39939,12029275,40508,12819562,41081,12161116,41658,12293728,42239,12689007,42824,11111258,43413,13609328,44006,13345899,44603,13477999,45204,13871729,45809,9748117,46418,12491110,47031,13213546,47648,13674608,48269,13674608,48894,14069621,49523,13938291,50156,13412207,50793,12950631,51434,12621666,52079,12490080,52728,12884837,53381,14465929,54038,11899230,54699,13542769,30876,12622953,31377,13213544,31882,13739888,32391,14135673,32904,13938034,33421,13937522,33942,13161936,34467,14739432,34996,13543536,35529,13543535,36066,11832924,36607,12029274,37152,12029530,37701,11635288,38254,12095837,38811,12621921,39372,11635544,39937,11963996,40506,11701852,41079,12161373,41656,12425057,42237,12029788,42822,12490594,43411,12490596,44004,12951143,44601,12885607,45202,12687717,45807,13279850,46416,13148264,47029,12359522,47646,13214571,48267,13148264,48892,13477999,49521,13674865,50154,13740400,50791,13740400,51432,13675123,52077,12753251,52726,12951657,53379,13411695,54036,12622180,54697,12095325,55362,13148266,31375,12622953,31880,13345386,32389,13740143,32902,14135416,33419,14003570,33940,13937522,34465,14082273,34994,12832975,35527,11518130,36064,12819557,36605,11438168,37150,12819304,37699,11963993,38252,12556648,38809,12490596,39370,12556647,39935,11766873,40504,12226655,41077,11503960,41654,12029529,42235,11963739,42820,11307095,43409,13345644,44002,12227167,44599,12687459,45200,13148009,45805,12884581,46414,12951401,47027,14070140,47644,11240789,48265,12556130,48890,14201980,49519,13411694,50152,13412206,50789,14003828,51430,13806194,52075,13280621,52724,12885607,53377,12950887,54034,14333826,54695,13938547,55360,12227937,56029,12752994,31878,12623209,32387,13213545,32900,13609071,33417,13871986,33938,14003826,34463,13937778,34992,13819358,35525,14214112,36062,9937313,36603,13543536,37148,13674867,37697,11571039,38250,13346157,38807,12359010,39368,11898459,39933,12425058,40502,11897945,41075,12425316,41652,12095582,42233,14004349,42818,12292959,43407,11898716,44e3,12161887,44597,12884836,45198,12556901,45803,13214314,46412,13214057,47025,13345644,47642,12950630,48263,13214057,48888,13346157,49517,13939071,50150,13083245,50787,13345900,51428,11044953,52073,14465414,52722,13806193,53375,13806193,54032,8426896,54693,14003826,55358,13938291,56027,13477489,56700,12621667,32385,12689002,32898,13345386,33415,13609071,33936,13805937,34461,13871986,34990,13937522,35523,13490649,36060,12964816,36601,13425869,37146,13674609,37695,13345386,38248,12490594,38805,10977618,39366,12029787,39931,12095326,40500,12359522,41073,10584405,41650,12490853,42231,11767130,42816,12226910,43405,13608816,43998,12161116,44595,12490593,45196,12556128,45801,12950887,46410,12950887,47023,12885350,47640,12425056,48261,13016938,48886,12293730,49515,13148779,50148,13543536,50785,12950886,51426,13806194,52071,12820328,52720,14135675,53373,14069621,54030,13674608,54691,12425574,55356,13938547,56025,13872242,56698,12161629,57375,12622181,32896,12885611,33413,13345130,33934,13740657,34459,13872498,34988,13871729,35521,14003826,36058,13029328,36599,12767182,37144,13740401,37693,13214057,38246,13741178,38803,12753253,39364,12358754,39929,12359010,40498,12951401,41071,12885357,41648,12292960,42229,12885612,42814,11963993,43403,12293215,43996,13411696,44593,12292959,45194,12095324,45799,12293215,46408,12358752,47021,12490594,47638,12293470,48259,12095066,48884,12095838,49513,13543022,50146,13674351,50783,13938808,51424,12819044,52069,13873280,52718,13609075,53371,13412207,54028,13938548,54689,13805937,55354,13937266,56023,14069878,56696,12623208,57373,12424288,58054,12753253,33411,12689003,33932,13279593,34457,13805681,34986,14070136,35519,14003826,36056,13938290,36597,13157570,37142,13622237,37691,13280364,38244,13279337,38801,12096610,39362,10912083,39927,12556391,40496,12226910,41069,12095580,41646,12885862,42227,11438424,42812,12424800,43401,12095580,43994,12029789,44591,13016424,45192,12951143,45797,12160603,46406,11373145,47019,12162146,47636,12425314,48257,11635546,48882,14070397,49511,13082988,50144,13806965,50781,14532494,51422,11504988,52067,12884837,52716,13214313,53369,13213802,54026,13674608,54687,11849657,55352,13805937,56021,13938035,56694,14069880,57371,12752741,58052,12621923,58737,12687715],A.aL("bc<c,c>"))
B.a1=new A.bc([0,!0,5,!0,14,!0,27,!0,44,!0,65,!0,90,!1,119,!1,152,!0,189,!0,230,!0,275,!0,324,!0,377,!0,434,!0,495,!0,560,!0,629,!0,702,!0,779,!0,860,!0,945,!0,1034,!0,1127,!0,1224,!0,1325,!0,1430,!0,1539,!0,1652,!0,1769,!0,1890,!1,2015,!0,2144,!0,2277,!0,2414,!0,2555,!0,2700,!0,2849,!0,3002,!0,3159,!0,3320,!0,3485,!0,3654,!0,3,!0,12,!0,25,!0,42,!0,63,!0,88,!0,117,!0,150,!0,187,!0,228,!0,273,!0,322,!0,375,!0,432,!0,493,!0,558,!0,627,!0,700,!0,777,!0,858,!0,943,!0,1032,!0,1125,!0,1222,!0,1323,!0,1428,!0,1537,!0,1650,!0,1767,!0,1888,!0,2013,!0,2142,!0,2275,!0,2412,!0,2553,!0,2698,!0,2847,!0,3000,!0,3157,!0,3318,!0,3483,!0,3652,!0,3825,!0,10,!0,23,!0,40,!0,61,!0,86,!0,115,!0,148,!0,185,!1,226,!0,271,!0,320,!0,373,!0,430,!0,491,!0,556,!0,625,!0,698,!0,775,!0,856,!0,941,!0,1030,!0,1123,!0,1220,!0,1321,!0,1426,!0,1535,!0,1648,!0,1765,!0,1886,!0,2011,!0,2140,!0,2273,!0,2410,!0,2551,!0,2696,!0,2845,!0,2998,!0,3155,!0,3316,!0,3481,!0,3650,!0,3823,!0,4000,!0,21,!0,38,!0,59,!0,84,!0,113,!0,146,!0,183,!0,224,!0,269,!0,318,!0,371,!0,428,!0,489,!0,554,!0,623,!0,696,!0,773,!0,854,!0,939,!1,1028,!0,1121,!0,1218,!0,1319,!0,1424,!0,1533,!0,1646,!0,1763,!0,1884,!0,2009,!0,2138,!0,2271,!0,2408,!0,2549,!0,2694,!0,2843,!0,2996,!0,3153,!0,3314,!0,3479,!0,3648,!0,3821,!0,3998,!0,4179,!0,36,!0,57,!0,82,!0,111,!0,144,!0,181,!0,222,!0,267,!0,316,!0,369,!0,426,!0,487,!0,552,!0,621,!0,694,!0,771,!0,852,!0,937,!0,1026,!0,1119,!0,1216,!0,1317,!0,1422,!0,1531,!0,1644,!0,1761,!0,1882,!0,2007,!0,2136,!0,2269,!0,2406,!0,2547,!0,2692,!0,2841,!0,2994,!0,3151,!0,3312,!0,3477,!0,3646,!0,3819,!0,3996,!0,4177,!0,4362,!0,55,!0,80,!0,109,!0,142,!0,179,!0,220,!0,265,!1,314,!1,367,!1,424,!0,485,!0,550,!0,619,!0,692,!0,769,!0,850,!0,935,!0,1024,!0,1117,!0,1214,!0,1315,!0,1420,!0,1529,!0,1642,!0,1759,!0,1880,!0,2005,!0,2134,!0,2267,!0,2404,!0,2545,!0,2690,!0,2839,!0,2992,!0,3149,!0,3310,!0,3475,!0,3644,!0,3817,!0,3994,!0,4175,!0,4360,!0,4549,!0,78,!0,107,!0,140,!0,177,!0,218,!0,263,!0,312,!1,365,!1,422,!1,483,!0,548,!1,617,!0,690,!0,767,!0,848,!0,933,!0,1022,!0,1115,!0,1212,!0,1313,!0,1418,!0,1527,!0,1640,!0,1757,!0,1878,!0,2003,!0,2132,!0,2265,!0,2402,!0,2543,!0,2688,!0,2837,!0,2990,!0,3147,!0,3308,!0,3473,!0,3642,!0,3815,!0,3992,!0,4173,!0,4358,!0,4547,!0,4740,!0,105,!0,138,!0,175,!0,216,!0,261,!0,310,!0,363,!1,420,!1,481,!1,546,!0,615,!0,688,!0,765,!0,846,!0,931,!0,1020,!0,1113,!0,1210,!0,1311,!0,1416,!0,1525,!0,1638,!0,1755,!0,1876,!0,2001,!1,2130,!0,2263,!0,2400,!0,2541,!0,2686,!0,2835,!0,2988,!0,3145,!0,3306,!0,3471,!0,3640,!0,3813,!0,3990,!0,4171,!0,4356,!0,4545,!0,4738,!0,4935,!0,136,!0,173,!0,214,!0,259,!0,308,!0,361,!0,418,!1,479,!1,544,!1,613,!1,686,!0,763,!0,844,!0,929,!0,1018,!0,1111,!0,1208,!0,1309,!0,1414,!0,1523,!0,1636,!0,1753,!0,1874,!0,1999,!0,2128,!0,2261,!0,2398,!0,2539,!0,2684,!0,2833,!0,2986,!0,3143,!0,3304,!0,3469,!0,3638,!0,3811,!0,3988,!0,4169,!0,4354,!0,4543,!0,4736,!0,4933,!0,5134,!0,171,!0,212,!0,257,!0,306,!0,359,!0,416,!0,477,!1,542,!1,611,!1,684,!1,761,!0,842,!0,927,!0,1016,!0,1109,!0,1206,!0,1307,!0,1412,!0,1521,!0,1634,!0,1751,!0,1872,!0,1997,!0,2126,!0,2259,!0,2396,!0,2537,!0,2682,!0,2831,!0,2984,!0,3141,!0,3302,!0,3467,!0,3636,!0,3809,!0,3986,!0,4167,!0,4352,!0,4541,!0,4734,!0,4931,!0,5132,!0,5337,!0,210,!0,255,!0,304,!0,357,!0,414,!0,475,!0,540,!1,609,!1,682,!1,759,!1,840,!0,925,!0,1014,!0,1107,!0,1204,!0,1305,!0,1410,!0,1519,!0,1632,!0,1749,!0,1870,!0,1995,!0,2124,!0,2257,!0,2394,!0,2535,!0,2680,!0,2829,!0,2982,!0,3139,!0,3300,!0,3465,!0,3634,!0,3807,!0,3984,!0,4165,!0,4350,!0,4539,!0,4732,!0,4929,!0,5130,!0,5335,!0,5544,!0,253,!0,302,!0,355,!0,412,!0,473,!0,538,!0,607,!1,680,!1,757,!1,838,!0,923,!0,1012,!0,1105,!0,1202,!0,1303,!0,1408,!0,1517,!0,1630,!0,1747,!0,1868,!0,1993,!0,2122,!0,2255,!0,2392,!0,2533,!0,2678,!0,2827,!0,2980,!0,3137,!0,3298,!0,3463,!0,3632,!0,3805,!0,3982,!0,4163,!0,4348,!0,4537,!0,4730,!0,4927,!0,5128,!0,5333,!0,5542,!0,5755,!0,300,!0,353,!0,410,!0,471,!0,536,!0,605,!0,678,!1,755,!1,836,!1,921,!0,1010,!0,1103,!0,1200,!0,1301,!0,1406,!0,1515,!0,1628,!0,1745,!0,1866,!0,1991,!0,2120,!0,2253,!0,2390,!0,2531,!0,2676,!0,2825,!0,2978,!0,3135,!0,3296,!0,3461,!0,3630,!0,3803,!0,3980,!0,4161,!0,4346,!0,4535,!0,4728,!0,4925,!0,5126,!0,5331,!0,5540,!0,5753,!0,5970,!0,351,!0,408,!0,469,!0,534,!0,603,!0,676,!0,753,!1,834,!1,919,!1,1008,!0,1101,!0,1198,!0,1299,!0,1404,!0,1513,!0,1626,!0,1743,!0,1864,!0,1989,!0,2118,!0,2251,!0,2388,!0,2529,!0,2674,!0,2823,!0,2976,!0,3133,!0,3294,!0,3459,!0,3628,!0,3801,!1,3978,!0,4159,!0,4344,!0,4533,!0,4726,!0,4923,!0,5124,!0,5329,!0,5538,!0,5751,!0,5968,!0,6189,!0,406,!0,467,!0,532,!0,601,!0,674,!0,751,!0,832,!1,917,!1,1006,!1,1099,!0,1196,!0,1297,!0,1402,!0,1511,!0,1624,!0,1741,!0,1862,!0,1987,!0,2116,!0,2249,!0,2386,!0,2527,!0,2672,!0,2821,!0,2974,!0,3131,!0,3292,!0,3457,!0,3626,!0,3799,!0,3976,!0,4157,!0,4342,!0,4531,!0,4724,!0,4921,!0,5122,!0,5327,!0,5536,!0,5749,!0,5966,!0,6187,!0,6412,!0,465,!0,530,!0,599,!0,672,!0,749,!0,830,!0,915,!1,1004,!1,1097,!1,1194,!0,1295,!0,1400,!0,1509,!0,1622,!0,1739,!0,1860,!0,1985,!0,2114,!0,2247,!0,2384,!0,2525,!0,2670,!0,2819,!0,2972,!0,3129,!0,3290,!0,3455,!0,3624,!0,3797,!0,3974,!0,4155,!0,4340,!0,4529,!0,4722,!0,4919,!0,5120,!0,5325,!0,5534,!0,5747,!0,5964,!0,6185,!0,6410,!0,6639,!0,528,!0,597,!0,670,!0,747,!0,828,!0,913,!0,1002,!1,1095,!1,1192,!1,1293,!1,1398,!0,1507,!0,1620,!0,1737,!0,1858,!0,1983,!0,2112,!0,2245,!0,2382,!0,2523,!0,2668,!0,2817,!0,2970,!0,3127,!0,3288,!0,3453,!0,3622,!0,3795,!0,3972,!0,4153,!0,4338,!0,4527,!0,4720,!0,4917,!0,5118,!0,5323,!0,5532,!0,5745,!0,5962,!0,6183,!0,6408,!0,6637,!0,6870,!0,595,!0,668,!0,745,!0,826,!0,911,!0,1000,!0,1093,!1,1190,!1,1291,!1,1396,!1,1505,!1,1618,!0,1735,!0,1856,!0,1981,!0,2110,!0,2243,!0,2380,!0,2521,!0,2666,!0,2815,!0,2968,!0,3125,!0,3286,!0,3451,!0,3620,!0,3793,!0,3970,!0,4151,!0,4336,!0,4525,!0,4718,!0,4915,!0,5116,!0,5321,!0,5530,!0,5743,!0,5960,!0,6181,!0,6406,!0,6635,!0,6868,!0,7105,!0,666,!0,743,!0,824,!0,909,!0,998,!0,1091,!0,1188,!1,1289,!1,1394,!1,1503,!1,1616,!1,1733,!0,1854,!0,1979,!0,2108,!0,2241,!0,2378,!0,2519,!0,2664,!0,2813,!0,2966,!0,3123,!0,3284,!0,3449,!0,3618,!0,3791,!0,3968,!0,4149,!0,4334,!0,4523,!0,4716,!0,4913,!0,5114,!0,5319,!0,5528,!0,5741,!0,5958,!0,6179,!0,6404,!0,6633,!0,6866,!0,7103,!0,7344,!0,741,!0,822,!0,907,!0,996,!0,1089,!0,1186,!0,1287,!1,1392,!1,1501,!1,1614,!1,1731,!1,1852,!1,1977,!0,2106,!0,2239,!0,2376,!0,2517,!0,2662,!0,2811,!0,2964,!0,3121,!0,3282,!0,3447,!0,3616,!0,3789,!0,3966,!0,4147,!0,4332,!0,4521,!0,4714,!0,4911,!0,5112,!0,5317,!0,5526,!0,5739,!0,5956,!0,6177,!0,6402,!0,6631,!0,6864,!0,7101,!0,7342,!0,7587,!0,820,!0,905,!0,994,!0,1087,!0,1184,!0,1285,!1,1390,!1,1499,!1,1612,!1,1729,!1,1850,!1,1975,!1,2104,!0,2237,!0,2374,!0,2515,!0,2660,!0,2809,!0,2962,!0,3119,!0,3280,!0,3445,!0,3614,!0,3787,!0,3964,!0,4145,!0,4330,!0,4519,!0,4712,!0,4909,!0,5110,!0,5315,!0,5524,!0,5737,!0,5954,!0,6175,!0,6400,!0,6629,!0,6862,!0,7099,!0,7340,!0,7585,!0,7834,!0,903,!0,992,!0,1085,!0,1182,!0,1283,!0,1388,!1,1497,!1,1610,!1,1727,!1,1848,!1,1973,!1,2102,!1,2235,!1,2372,!1,2513,!1,2658,!1,2807,!0,2960,!0,3117,!0,3278,!0,3443,!0,3612,!0,3785,!0,3962,!0,4143,!0,4328,!0,4517,!0,4710,!0,4907,!0,5108,!0,5313,!0,5522,!0,5735,!0,5952,!0,6173,!0,6398,!0,6627,!0,6860,!0,7097,!0,7338,!0,7583,!0,7832,!0,8085,!0,990,!0,1083,!0,1180,!0,1281,!0,1386,!1,1495,!1,1608,!1,1725,!1,1846,!1,1971,!1,2100,!1,2233,!1,2370,!1,2511,!1,2656,!1,2805,!1,2958,!0,3115,!0,3276,!0,3441,!0,3610,!0,3783,!0,3960,!0,4141,!0,4326,!0,4515,!0,4708,!0,4905,!0,5106,!0,5311,!0,5520,!0,5733,!0,5950,!0,6171,!0,6396,!0,6625,!0,6858,!0,7095,!0,7336,!0,7581,!0,7830,!0,8083,!0,8340,!0,1081,!0,1178,!0,1279,!0,1384,!0,1493,!1,1606,!1,1723,!1,1844,!1,1969,!1,2098,!1,2231,!1,2368,!1,2509,!1,2654,!1,2803,!1,2956,!1,3113,!1,3274,!0,3439,!0,3608,!0,3781,!0,3958,!0,4139,!0,4324,!0,4513,!0,4706,!0,4903,!0,5104,!0,5309,!0,5518,!0,5731,!0,5948,!0,6169,!0,6394,!0,6623,!0,6856,!0,7093,!0,7334,!0,7579,!0,7828,!0,8081,!0,8338,!0,8599,!0,1176,!0,1277,!0,1382,!0,1491,!0,1604,!1,1721,!1,1842,!1,1967,!1,2096,!1,2229,!1,2366,!1,2507,!1,2652,!1,2801,!1,2954,!1,3111,!1,3272,!1,3437,!1,3606,!0,3779,!0,3956,!0,4137,!0,4322,!0,4511,!0,4704,!0,4901,!0,5102,!0,5307,!0,5516,!0,5729,!0,5946,!0,6167,!0,6392,!0,6621,!0,6854,!0,7091,!0,7332,!0,7577,!0,7826,!0,8079,!0,8336,!0,8597,!0,8862,!0,1275,!0,1380,!0,1489,!0,1602,!0,1719,!0,1840,!1,1965,!1,2094,!1,2227,!1,2364,!1,2505,!1,2650,!1,2799,!1,2952,!1,3109,!1,3270,!1,3435,!1,3604,!1,3777,!0,3954,!0,4135,!1,4320,!0,4509,!0,4702,!0,4899,!0,5100,!0,5305,!0,5514,!0,5727,!0,5944,!0,6165,!0,6390,!0,6619,!0,6852,!0,7089,!0,7330,!0,7575,!0,7824,!0,8077,!0,8334,!0,8595,!0,8860,!0,9129,!0,1378,!0,1487,!0,1600,!0,1717,!0,1838,!1,1963,!1,2092,!1,2225,!1,2362,!1,2503,!1,2648,!1,2797,!1,2950,!1,3107,!1,3268,!1,3433,!1,3602,!1,3775,!1,3952,!1,4133,!0,4318,!0,4507,!0,4700,!0,4897,!0,5098,!0,5303,!0,5512,!0,5725,!0,5942,!0,6163,!0,6388,!0,6617,!0,6850,!0,7087,!0,7328,!0,7573,!0,7822,!0,8075,!0,8332,!0,8593,!0,8858,!0,9127,!0,9400,!0,1485,!0,1598,!0,1715,!0,1836,!1,1961,!1,2090,!1,2223,!1,2360,!1,2501,!1,2646,!1,2795,!1,2948,!1,3105,!1,3266,!1,3431,!1,3600,!1,3773,!1,3950,!1,4131,!1,4316,!1,4505,!0,4698,!0,4895,!0,5096,!0,5301,!0,5510,!0,5723,!0,5940,!0,6161,!0,6386,!0,6615,!0,6848,!0,7085,!0,7326,!0,7571,!0,7820,!0,8073,!0,8330,!0,8591,!0,8856,!0,9125,!0,9398,!0,9675,!0,1596,!0,1713,!0,1834,!0,1959,!0,2088,!1,2221,!0,2358,!1,2499,!1,2644,!1,2793,!1,2946,!1,3103,!1,3264,!1,3429,!1,3598,!1,3771,!1,3948,!1,4129,!1,4314,!1,4503,!1,4696,!1,4893,!0,5094,!0,5299,!0,5508,!0,5721,!0,5938,!0,6159,!0,6384,!0,6613,!0,6846,!0,7083,!0,7324,!0,7569,!0,7818,!0,8071,!0,8328,!0,8589,!0,8854,!0,9123,!0,9396,!0,9673,!0,9954,!0,1711,!0,1832,!0,1957,!0,2086,!0,2219,!1,2356,!1,2497,!0,2642,!1,2791,!1,2944,!1,3101,!1,3262,!1,3427,!1,3596,!1,3769,!1,3946,!1,4127,!1,4312,!1,4501,!1,4694,!1,4891,!1,5092,!0,5297,!0,5506,!0,5719,!0,5936,!0,6157,!0,6382,!0,6611,!0,6844,!0,7081,!0,7322,!0,7567,!0,7816,!0,8069,!0,8326,!0,8587,!0,8852,!0,9121,!0,9394,!0,9671,!0,9952,!0,10237,!0,1830,!0,1955,!0,2084,!0,2217,!0,2354,!1,2495,!1,2640,!1,2789,!1,2942,!1,3099,!1,3260,!1,3425,!1,3594,!1,3767,!1,3944,!1,4125,!1,4310,!1,4499,!1,4692,!0,4889,!0,5090,!1,5295,!0,5504,!0,5717,!0,5934,!0,6155,!0,6380,!0,6609,!0,6842,!0,7079,!0,7320,!0,7565,!0,7814,!0,8067,!0,8324,!0,8585,!0,8850,!0,9119,!0,9392,!0,9669,!0,9950,!0,10235,!0,10524,!0,1953,!0,2082,!0,2215,!0,2352,!1,2493,!1,2638,!1,2787,!1,2940,!1,3097,!1,3258,!1,3423,!1,3592,!1,3765,!1,3942,!1,4123,!1,4308,!1,4497,!1,4690,!1,4887,!0,5088,!0,5293,!0,5502,!0,5715,!0,5932,!0,6153,!0,6378,!0,6607,!0,6840,!0,7077,!0,7318,!0,7563,!0,7812,!0,8065,!0,8322,!0,8583,!0,8848,!0,9117,!0,9390,!0,9667,!0,9948,!0,10233,!0,10522,!0,10815,!0,2080,!0,2213,!0,2350,!0,2491,!1,2636,!1,2785,!0,2938,!1,3095,!1,3256,!0,3421,!0,3590,!1,3763,!1,3940,!1,4121,!1,4306,!1,4495,!1,4688,!1,4885,!1,5086,!0,5291,!0,5500,!1,5713,!1,5930,!0,6151,!0,6376,!0,6605,!0,6838,!0,7075,!0,7316,!0,7561,!0,7810,!0,8063,!0,8320,!0,8581,!0,8846,!0,9115,!0,9388,!0,9665,!0,9946,!0,10231,!0,10520,!0,10813,!0,11110,!0,2211,!0,2348,!0,2489,!0,2634,!1,2783,!1,2936,!1,3093,!1,3254,!1,3419,!0,3588,!0,3761,!1,3938,!1,4119,!1,4304,!1,4493,!1,4686,!1,4883,!1,5084,!0,5289,!0,5498,!0,5711,!1,5928,!1,6149,!0,6374,!0,6603,!0,6836,!0,7073,!0,7314,!0,7559,!0,7808,!0,8061,!0,8318,!0,8579,!0,8844,!0,9113,!0,9386,!0,9663,!0,9944,!0,10229,!0,10518,!0,10811,!0,11108,!0,11409,!0,2346,!0,2487,!0,2632,!0,2781,!1,2934,!0,3091,!1,3252,!1,3417,!1,3586,!0,3759,!0,3936,!1,4117,!1,4302,!1,4491,!1,4684,!1,4881,!1,5082,!1,5287,!0,5496,!0,5709,!0,5926,!0,6147,!1,6372,!1,6601,!0,6834,!0,7071,!0,7312,!0,7557,!0,7806,!0,8059,!0,8316,!0,8577,!0,8842,!0,9111,!0,9384,!0,9661,!0,9942,!0,10227,!0,10516,!0,10809,!0,11106,!0,11407,!0,11712,!0,2485,!0,2630,!0,2779,!0,2932,!1,3089,!1,3250,!1,3415,!1,3584,!1,3757,!0,3934,!0,4115,!1,4300,!1,4489,!1,4682,!1,4879,!1,5080,!1,5285,!1,5494,!1,5707,!0,5924,!1,6145,!0,6370,!0,6599,!0,6832,!1,7069,!0,7310,!0,7555,!0,7804,!0,8057,!0,8314,!0,8575,!0,8840,!0,9109,!0,9382,!0,9659,!0,9940,!0,10225,!0,10514,!0,10807,!0,11104,!0,11405,!0,11710,!0,12019,!0,2628,!0,2777,!0,2930,!1,3087,!1,3248,!1,3413,!1,3582,!0,3755,!0,3932,!0,4113,!0,4298,!0,4487,!1,4680,!1,4877,!1,5078,!1,5283,!1,5492,!1,5705,!0,5922,!1,6143,!1,6368,!0,6597,!0,6830,!0,7067,!1,7308,!0,7553,!0,7802,!1,8055,!1,8312,!0,8573,!0,8838,!0,9107,!0,9380,!0,9657,!0,9938,!0,10223,!0,10512,!0,10805,!0,11102,!0,11403,!0,11708,!0,12017,!0,12330,!0,2775,!0,2928,!0,3085,!1,3246,!1,3411,!0,3580,!1,3753,!0,3930,!1,4111,!1,4296,!1,4485,!1,4678,!1,4875,!1,5076,!1,5281,!1,5490,!1,5703,!0,5920,!0,6141,!1,6366,!0,6595,!0,6828,!0,7065,!0,7306,!1,7551,!1,7800,!1,8053,!1,8310,!1,8571,!1,8836,!0,9105,!0,9378,!0,9655,!0,9936,!0,10221,!0,10510,!0,10803,!0,11100,!0,11401,!0,11706,!0,12015,!0,12328,!0,12645,!0,2926,!0,3083,!0,3244,!1,3409,!1,3578,!0,3751,!1,3928,!1,4109,!1,4294,!1,4483,!1,4676,!1,4873,!1,5074,!1,5279,!1,5488,!1,5701,!0,5918,!0,6139,!0,6364,!0,6593,!0,6826,!0,7063,!0,7304,!0,7549,!1,7798,!1,8051,!1,8308,!1,8569,!1,8834,!1,9103,!1,9376,!0,9653,!0,9934,!0,10219,!0,10508,!0,10801,!0,11098,!0,11399,!0,11704,!1,12013,!1,12326,!1,12643,!0,12964,!0,3081,!0,3242,!0,3407,!1,3576,!0,3749,!0,3926,!0,4107,!1,4292,!1,4481,!1,4674,!1,4871,!1,5072,!1,5277,!1,5486,!1,5699,!0,5916,!0,6137,!0,6362,!0,6591,!0,6824,!0,7061,!1,7302,!0,7547,!1,7796,!1,8049,!1,8306,!1,8567,!1,8832,!1,9101,!1,9374,!1,9651,!1,9932,!0,10217,!0,10506,!0,10799,!0,11096,!1,11397,!1,11702,!1,12011,!1,12324,!1,12641,!1,12962,!0,13287,!0,3240,!0,3405,!0,3574,!1,3747,!0,3924,!0,4105,!0,4290,!1,4479,!1,4672,!0,4869,!1,5070,!1,5275,!1,5484,!1,5697,!1,5914,!0,6135,!0,6360,!0,6589,!0,6822,!0,7059,!0,7300,!1,7545,!0,7794,!1,8047,!1,8304,!1,8565,!1,8830,!1,9099,!1,9372,!1,9649,!1,9930,!1,10215,!1,10504,!1,10797,!1,11094,!1,11395,!1,11700,!1,12009,!1,12322,!1,12639,!1,12960,!1,13285,!0,13614,!0,3403,!0,3572,!0,3745,!1,3922,!1,4103,!1,4288,!0,4477,!0,4670,!1,4867,!0,5068,!1,5273,!1,5482,!1,5695,!1,5912,!0,6133,!0,6358,!0,6587,!0,6820,!0,7057,!0,7298,!0,7543,!0,7792,!0,8045,!1,8302,!1,8563,!1,8828,!1,9097,!1,9370,!1,9647,!1,9928,!1,10213,!1,10502,!1,10795,!1,11092,!1,11393,!1,11698,!1,12007,!1,12320,!1,12637,!1,12958,!0,13283,!0,13612,!0,13945,!0,3570,!0,3743,!0,3920,!1,4101,!1,4286,!0,4475,!0,4668,!0,4865,!1,5066,!0,5271,!1,5480,!1,5693,!1,5910,!0,6131,!0,6356,!0,6585,!0,6818,!0,7055,!0,7296,!0,7541,!0,7790,!0,8043,!0,8300,!0,8561,!1,8826,!1,9095,!1,9368,!1,9645,!1,9926,!1,10211,!1,10500,!1,10793,!1,11090,!1,11391,!1,11696,!1,12005,!1,12318,!1,12635,!0,12956,!0,13281,!0,13610,!0,13943,!0,14280,!0,3741,!0,3918,!0,4099,!0,4284,!1,4473,!0,4666,!0,4863,!0,5064,!0,5269,!0,5478,!0,5691,!1,5908,!1,6129,!0,6354,!0,6583,!0,6816,!0,7053,!0,7294,!0,7539,!0,7788,!0,8041,!0,8298,!0,8559,!0,8824,!1,9093,!1,9366,!1,9643,!1,9924,!1,10209,!1,10498,!1,10791,!1,11088,!1,11389,!1,11694,!1,12003,!1,12316,!1,12633,!1,12954,!0,13279,!0,13608,!0,13941,!1,14278,!0,14619,!0,3916,!0,4097,!0,4282,!0,4471,!1,4664,!1,4861,!0,5062,!0,5267,!0,5476,!0,5689,!0,5906,!1,6127,!0,6352,!0,6581,!0,6814,!0,7051,!0,7292,!0,7537,!0,7786,!0,8039,!0,8296,!0,8557,!0,8822,!0,9091,!0,9364,!1,9641,!1,9922,!1,10207,!1,10496,!1,10789,!1,11086,!1,11387,!1,11692,!1,12001,!1,12314,!1,12631,!1,12952,!1,13277,!0,13606,!0,13939,!0,14276,!0,14617,!0,14962,!0,4095,!0,4280,!0,4469,!0,4662,!1,4859,!1,5060,!1,5265,!0,5474,!0,5687,!0,5904,!0,6125,!0,6350,!1,6579,!1,6812,!0,7049,!0,7290,!0,7535,!0,7784,!0,8037,!0,8294,!0,8555,!0,8820,!0,9089,!0,9362,!0,9639,!1,9920,!1,10205,!1,10494,!1,10787,!1,11084,!1,11385,!1,11690,!1,11999,!1,12312,!1,12629,!1,12950,!1,13275,!0,13604,!0,13937,!0,14274,!0,14615,!0,14960,!0,15309,!0,4278,!0,4467,!0,4660,!0,4857,!1,5058,!1,5263,!1,5472,!1,5685,!1,5902,!0,6123,!0,6348,!0,6577,!0,6810,!1,7047,!0,7288,!0,7533,!0,7782,!0,8035,!0,8292,!0,8553,!0,8818,!0,9087,!0,9360,!0,9637,!0,9918,!1,10203,!1,10492,!1,10785,!1,11082,!1,11383,!1,11688,!1,11997,!1,12310,!1,12627,!1,12948,!1,13273,!0,13602,!0,13935,!0,14272,!0,14613,!0,14958,!0,15307,!0,15660,!0,4465,!0,4658,!0,4855,!1,5056,!1,5261,!1,5470,!1,5683,!1,5900,!1,6121,!1,6346,!0,6575,!0,6808,!0,7045,!0,7286,!0,7531,!0,7780,!0,8033,!0,8290,!0,8551,!0,8816,!0,9085,!0,9358,!0,9635,!0,9916,!0,10201,!0,10490,!1,10783,!1,11080,!1,11381,!1,11686,!1,11995,!1,12308,!1,12625,!1,12946,!1,13271,!0,13600,!0,13933,!0,14270,!0,14611,!0,14956,!0,15305,!0,15658,!0,16015,!0,4656,!0,4853,!0,5054,!1,5259,!1,5468,!1,5681,!1,5898,!1,6119,!1,6344,!1,6573,!0,6806,!0,7043,!0,7284,!0,7529,!0,7778,!0,8031,!0,8288,!0,8549,!0,8814,!0,9083,!0,9356,!0,9633,!0,9914,!0,10199,!0,10488,!0,10781,!0,11078,!1,11379,!1,11684,!1,11993,!1,12306,!1,12623,!1,12944,!1,13269,!0,13598,!0,13931,!0,14268,!0,14609,!0,14954,!0,15303,!0,15656,!0,16013,!0,16374,!0,4851,!0,5052,!0,5257,!1,5466,!1,5679,!1,5896,!1,6117,!1,6342,!1,6571,!1,6804,!0,7041,!0,7282,!0,7527,!0,7776,!0,8029,!0,8286,!0,8547,!0,8812,!0,9081,!0,9354,!0,9631,!0,9912,!0,10197,!0,10486,!0,10779,!0,11076,!0,11377,!1,11682,!1,11991,!1,12304,!1,12621,!1,12942,!1,13267,!0,13596,!0,13929,!0,14266,!0,14607,!0,14952,!0,15301,!0,15654,!0,16011,!0,16372,!0,16737,!0,5050,!0,5255,!0,5464,!1,5677,!1,5894,!1,6115,!1,6340,!1,6569,!1,6802,!0,7039,!0,7280,!0,7525,!0,7774,!0,8027,!0,8284,!0,8545,!0,8810,!0,9079,!0,9352,!0,9629,!0,9910,!0,10195,!0,10484,!0,10777,!0,11074,!0,11375,!0,11680,!0,11989,!1,12302,!1,12619,!1,12940,!1,13265,!1,13594,!0,13927,!0,14264,!0,14605,!0,14950,!0,15299,!0,15652,!0,16009,!0,16370,!0,16735,!0,17104,!0,5253,!0,5462,!0,5675,!1,5892,!1,6113,!1,6338,!1,6567,!1,6800,!0,7037,!0,7278,!0,7523,!0,7772,!0,8025,!0,8282,!0,8543,!0,8808,!0,9077,!0,9350,!0,9627,!0,9908,!0,10193,!0,10482,!0,10775,!0,11072,!0,11373,!0,11678,!0,11987,!0,12300,!1,12617,!1,12938,!1,13263,!0,13592,!0,13925,!0,14262,!0,14603,!0,14948,!0,15297,!0,15650,!0,16007,!0,16368,!0,16733,!0,17102,!0,17475,!0,5460,!0,5673,!0,5890,!1,6111,!1,6336,!1,6565,!1,6798,!1,7035,!0,7276,!0,7521,!0,7770,!0,8023,!0,8280,!0,8541,!0,8806,!0,9075,!0,9348,!0,9625,!0,9906,!0,10191,!0,10480,!0,10773,!0,11070,!0,11371,!0,11676,!0,11985,!0,12298,!0,12615,!1,12936,!1,13261,!0,13590,!0,13923,!0,14260,!0,14601,!0,14946,!0,15295,!0,15648,!0,16005,!0,16366,!0,16731,!0,17100,!0,17473,!0,17850,!0,5671,!0,5888,!0,6109,!1,6334,!1,6563,!1,6796,!1,7033,!1,7274,!0,7519,!0,7768,!0,8021,!0,8278,!0,8539,!0,8804,!0,9073,!0,9346,!0,9623,!0,9904,!0,10189,!0,10478,!0,10771,!0,11068,!0,11369,!0,11674,!0,11983,!0,12296,!0,12613,!0,12934,!0,13259,!0,13588,!0,13921,!0,14258,!0,14599,!0,14944,!0,15293,!0,15646,!0,16003,!0,16364,!0,16729,!0,17098,!0,17471,!0,17848,!0,18229,!0,5886,!0,6107,!0,6332,!1,6561,!1,6794,!1,7031,!1,7272,!1,7517,!0,7766,!0,8019,!0,8276,!0,8537,!0,8802,!0,9071,!0,9344,!0,9621,!0,9902,!0,10187,!0,10476,!0,10769,!0,11066,!0,11367,!0,11672,!0,11981,!0,12294,!0,12611,!0,12932,!0,13257,!0,13586,!0,13919,!0,14256,!0,14597,!0,14942,!0,15291,!0,15644,!0,16001,!0,16362,!0,16727,!0,17096,!0,17469,!0,17846,!0,18227,!0,18612,!0,6105,!0,6330,!0,6559,!1,6792,!1,7029,!1,7270,!1,7515,!1,7764,!0,8017,!0,8274,!0,8535,!0,8800,!0,9069,!0,9342,!0,9619,!0,9900,!0,10185,!0,10474,!0,10767,!0,11064,!0,11365,!0,11670,!0,11979,!0,12292,!0,12609,!0,12930,!0,13255,!0,13584,!0,13917,!0,14254,!0,14595,!0,14940,!0,15289,!0,15642,!0,15999,!0,16360,!0,16725,!0,17094,!0,17467,!0,17844,!0,18225,!0,18610,!0,18999,!0,6328,!0,6557,!0,6790,!1,7027,!1,7268,!1,7513,!1,7762,!0,8015,!0,8272,!0,8533,!0,8798,!0,9067,!0,9340,!0,9617,!0,9898,!0,10183,!0,10472,!0,10765,!0,11062,!0,11363,!0,11668,!0,11977,!0,12290,!0,12607,!0,12928,!0,13253,!0,13582,!0,13915,!0,14252,!0,14593,!0,14938,!0,15287,!0,15640,!0,15997,!0,16358,!0,16723,!0,17092,!0,17465,!0,17842,!0,18223,!0,18608,!0,18997,!0,19390,!0,6555,!0,6788,!0,7025,!1,7266,!1,7511,!1,7760,!1,8013,!0,8270,!1,8531,!0,8796,!0,9065,!0,9338,!0,9615,!0,9896,!0,10181,!0,10470,!0,10763,!0,11060,!0,11361,!0,11666,!0,11975,!0,12288,!0,12605,!0,12926,!0,13251,!0,13580,!0,13913,!0,14250,!0,14591,!0,14936,!0,15285,!0,15638,!0,15995,!0,16356,!0,16721,!0,17090,!0,17463,!0,17840,!0,18221,!0,18606,!0,18995,!0,19388,!0,19785,!0,6786,!0,7023,!0,7264,!0,7509,!1,7758,!1,8011,!0,8268,!0,8529,!1,8794,!0,9063,!0,9336,!0,9613,!0,9894,!0,10179,!0,10468,!0,10761,!0,11058,!0,11359,!0,11664,!0,11973,!0,12286,!0,12603,!0,12924,!0,13249,!0,13578,!0,13911,!0,14248,!0,14589,!0,14934,!0,15283,!0,15636,!0,15993,!0,16354,!0,16719,!0,17088,!0,17461,!0,17838,!0,18219,!0,18604,!0,18993,!0,19386,!0,19783,!0,20184,!0,7021,!0,7262,!0,7507,!0,7756,!0,8009,!0,8266,!0,8527,!0,8792,!1,9061,!0,9334,!0,9611,!0,9892,!0,10177,!0,10466,!0,10759,!0,11056,!0,11357,!0,11662,!0,11971,!0,12284,!1,12601,!0,12922,!1,13247,!1,13576,!0,13909,!0,14246,!0,14587,!0,14932,!0,15281,!0,15634,!0,15991,!0,16352,!0,16717,!0,17086,!0,17459,!0,17836,!0,18217,!0,18602,!0,18991,!0,19384,!0,19781,!0,20182,!0,20587,!0,7260,!0,7505,!0,7754,!0,8007,!0,8264,!0,8525,!0,8790,!0,9059,!1,9332,!0,9609,!0,9890,!0,10175,!0,10464,!0,10757,!0,11054,!0,11355,!0,11660,!0,11969,!0,12282,!1,12599,!1,12920,!1,13245,!1,13574,!1,13907,!0,14244,!0,14585,!0,14930,!0,15279,!0,15632,!0,15989,!0,16350,!0,16715,!0,17084,!0,17457,!0,17834,!0,18215,!0,18600,!0,18989,!0,19382,!0,19779,!0,20180,!0,20585,!0,20994,!0,7503,!0,7752,!0,8005,!0,8262,!0,8523,!0,8788,!0,9057,!0,9330,!0,9607,!0,9888,!0,10173,!0,10462,!0,10755,!0,11052,!0,11353,!0,11658,!0,11967,!0,12280,!0,12597,!1,12918,!1,13243,!1,13572,!1,13905,!1,14242,!1,14583,!0,14928,!0,15277,!0,15630,!0,15987,!0,16348,!0,16713,!0,17082,!0,17455,!0,17832,!0,18213,!0,18598,!0,18987,!0,19380,!0,19777,!0,20178,!0,20583,!0,20992,!0,21405,!0,7750,!0,8003,!0,8260,!0,8521,!0,8786,!0,9055,!0,9328,!0,9605,!0,9886,!0,10171,!1,10460,!1,10753,!0,11050,!0,11351,!1,11656,!1,11965,!0,12278,!1,12595,!1,12916,!1,13241,!1,13570,!1,13903,!1,14240,!1,14581,!1,14926,!1,15275,!0,15628,!0,15985,!0,16346,!0,16711,!0,17080,!0,17453,!0,17830,!0,18211,!0,18596,!0,18985,!0,19378,!0,19775,!0,20176,!0,20581,!0,20990,!0,21403,!0,21820,!0,8001,!0,8258,!0,8519,!0,8784,!0,9053,!0,9326,!0,9603,!0,9884,!0,10169,!0,10458,!1,10751,!1,11048,!0,11349,!0,11654,!1,11963,!1,12276,!1,12593,!1,12914,!1,13239,!1,13568,!1,13901,!1,14238,!1,14579,!1,14924,!1,15273,!0,15626,!0,15983,!0,16344,!0,16709,!0,17078,!0,17451,!0,17828,!0,18209,!0,18594,!0,18983,!0,19376,!0,19773,!0,20174,!0,20579,!0,20988,!0,21401,!0,21818,!0,22239,!0,8256,!0,8517,!0,8782,!0,9051,!0,9324,!0,9601,!0,9882,!0,10167,!0,10456,!0,10749,!0,11046,!1,11347,!1,11652,!1,11961,!0,12274,!1,12591,!1,12912,!1,13237,!1,13566,!1,13899,!1,14236,!1,14577,!1,14922,!1,15271,!1,15624,!0,15981,!0,16342,!0,16707,!0,17076,!0,17449,!0,17826,!0,18207,!0,18592,!0,18981,!0,19374,!0,19771,!0,20172,!0,20577,!0,20986,!0,21399,!0,21816,!0,22237,!0,22662,!0,8515,!0,8780,!0,9049,!0,9322,!0,9599,!0,9880,!0,10165,!0,10454,!0,10747,!0,11044,!0,11345,!1,11650,!1,11959,!1,12272,!1,12589,!1,12910,!0,13235,!1,13564,!1,13897,!1,14234,!1,14575,!1,14920,!1,15269,!1,15622,!1,15979,!0,16340,!0,16705,!0,17074,!0,17447,!0,17824,!0,18205,!0,18590,!0,18979,!0,19372,!0,19769,!0,20170,!0,20575,!0,20984,!0,21397,!0,21814,!0,22235,!0,22660,!0,23089,!0,8778,!0,9047,!0,9320,!0,9597,!0,9878,!0,10163,!0,10452,!0,10745,!0,11042,!0,11343,!0,11648,!0,11957,!1,12270,!1,12587,!1,12908,!0,13233,!1,13562,!1,13895,!1,14232,!1,14573,!1,14918,!1,15267,!1,15620,!1,15977,!1,16338,!0,16703,!0,17072,!0,17445,!0,17822,!0,18203,!0,18588,!0,18977,!0,19370,!0,19767,!0,20168,!0,20573,!0,20982,!0,21395,!0,21812,!0,22233,!0,22658,!0,23087,!0,23520,!0,9045,!0,9318,!0,9595,!0,9876,!0,10161,!0,10450,!0,10743,!0,11040,!0,11341,!1,11646,!0,11955,!0,12268,!1,12585,!1,12906,!1,13231,!0,13560,!1,13893,!1,14230,!1,14571,!1,14916,!1,15265,!1,15618,!1,15975,!1,16336,!1,16701,!1,17070,!0,17443,!0,17820,!0,18201,!0,18586,!0,18975,!0,19368,!0,19765,!0,20166,!0,20571,!0,20980,!0,21393,!0,21810,!0,22231,!0,22656,!0,23085,!0,23518,!0,23955,!0,9316,!0,9593,!0,9874,!0,10159,!0,10448,!0,10741,!0,11038,!0,11339,!0,11644,!1,11953,!1,12266,!1,12583,!1,12904,!1,13229,!1,13558,!1,13891,!1,14228,!1,14569,!1,14914,!1,15263,!1,15616,!1,15973,!1,16334,!1,16699,!1,17068,!1,17441,!0,17818,!0,18199,!0,18584,!0,18973,!0,19366,!0,19763,!0,20164,!0,20569,!0,20978,!0,21391,!0,21808,!0,22229,!0,22654,!0,23083,!0,23516,!0,23953,!0,24394,!0,9591,!0,9872,!0,10157,!0,10446,!1,10739,!0,11036,!0,11337,!0,11642,!1,11951,!1,12264,!0,12581,!1,12902,!1,13227,!1,13556,!1,13889,!0,14226,!1,14567,!1,14912,!1,15261,!1,15614,!1,15971,!1,16332,!1,16697,!1,17066,!1,17439,!1,17816,!1,18197,!1,18582,!0,18971,!0,19364,!0,19761,!0,20162,!0,20567,!0,20976,!0,21389,!0,21806,!0,22227,!0,22652,!0,23081,!0,23514,!0,23951,!0,24392,!0,24837,!0,9870,!0,10155,!0,10444,!0,10737,!1,11034,!0,11335,!0,11640,!0,11949,!1,12262,!1,12579,!1,12900,!1,13225,!1,13554,!1,13887,!1,14224,!0,14565,!0,14910,!0,15259,!1,15612,!1,15969,!1,16330,!1,16695,!1,17064,!1,17437,!1,17814,!1,18195,!1,18580,!1,18969,!1,19362,!1,19759,!1,20160,!1,20565,!1,20974,!0,21387,!0,21804,!0,22225,!0,22650,!0,23079,!0,23512,!0,23949,!0,24390,!0,24835,!0,25284,!0,10153,!0,10442,!0,10735,!0,11032,!1,11333,!0,11638,!0,11947,!1,12260,!1,12577,!1,12898,!1,13223,!1,13552,!1,13885,!1,14222,!1,14563,!1,14908,!0,15257,!0,15610,!1,15967,!1,16328,!1,16693,!1,17062,!1,17435,!1,17812,!1,18193,!1,18578,!1,18967,!1,19360,!1,19757,!1,20158,!1,20563,!1,20972,!1,21385,!1,21802,!1,22223,!0,22648,!0,23077,!0,23510,!0,23947,!0,24388,!0,24833,!0,25282,!0,25735,!0,10440,!0,10733,!0,11030,!0,11331,!1,11636,!0,11945,!0,12258,!1,12575,!1,12896,!0,13221,!1,13550,!1,13883,!1,14220,!1,14561,!1,14906,!1,15255,!0,15608,!0,15965,!1,16326,!1,16691,!1,17060,!1,17433,!1,17810,!1,18191,!1,18576,!1,18965,!1,19358,!1,19755,!1,20156,!1,20561,!1,20970,!1,21383,!1,21800,!1,22221,!1,22646,!1,23075,!1,23508,!0,23945,!0,24386,!0,24831,!0,25280,!0,25733,!0,26190,!0,10731,!0,11028,!0,11329,!0,11634,!1,11943,!0,12256,!0,12573,!1,12894,!0,13219,!1,13548,!1,13881,!1,14218,!1,14559,!1,14904,!1,15253,!1,15606,!1,15963,!1,16324,!1,16689,!1,17058,!1,17431,!1,17808,!1,18189,!1,18574,!1,18963,!1,19356,!1,19753,!1,20154,!1,20559,!1,20968,!1,21381,!1,21798,!1,22219,!1,22644,!1,23073,!1,23506,!0,23943,!0,24384,!0,24829,!0,25278,!0,25731,!0,26188,!0,26649,!0,11026,!0,11327,!0,11632,!0,11941,!1,12254,!0,12571,!0,12892,!1,13217,!1,13546,!1,13879,!1,14216,!1,14557,!1,14902,!1,15251,!1,15604,!1,15961,!1,16322,!0,16687,!1,17056,!1,17429,!1,17806,!1,18187,!1,18572,!1,18961,!1,19354,!1,19751,!1,20152,!1,20557,!1,20966,!1,21379,!1,21796,!1,22217,!1,22642,!1,23071,!1,23504,!1,23941,!0,24382,!0,24827,!0,25276,!0,25729,!0,26186,!0,26647,!0,27112,!0,11325,!0,11630,!0,11939,!0,12252,!0,12569,!0,12890,!0,13215,!1,13544,!1,13877,!1,14214,!1,14555,!1,14900,!1,15249,!1,15602,!1,15959,!1,16320,!1,16685,!0,17054,!1,17427,!1,17804,!1,18185,!1,18570,!1,18959,!1,19352,!1,19749,!1,20150,!1,20555,!1,20964,!1,21377,!1,21794,!1,22215,!1,22640,!1,23069,!1,23502,!1,23939,!1,24380,!0,24825,!0,25274,!0,25727,!0,26184,!0,26645,!0,27110,!0,27579,!0,11628,!0,11937,!0,12250,!0,12567,!0,12888,!0,13213,!0,13542,!1,13875,!1,14212,!1,14553,!1,14898,!1,15247,!1,15600,!1,15957,!0,16318,!1,16683,!1,17052,!0,17425,!1,17802,!1,18183,!1,18568,!1,18957,!1,19350,!1,19747,!1,20148,!1,20553,!1,20962,!1,21375,!1,21792,!1,22213,!1,22638,!1,23067,!1,23500,!1,23937,!1,24378,!1,24823,!0,25272,!0,25725,!0,26182,!0,26643,!0,27108,!0,27577,!0,28050,!0,11935,!0,12248,!0,12565,!0,12886,!0,13211,!0,13540,!0,13873,!1,14210,!1,14551,!1,14896,!1,15245,!1,15598,!1,15955,!1,16316,!0,16681,!1,17050,!1,17423,!0,17800,!1,18181,!1,18566,!1,18955,!1,19348,!1,19745,!1,20146,!1,20551,!1,20960,!1,21373,!1,21790,!1,22211,!1,22636,!1,23065,!1,23498,!1,23935,!1,24376,!0,24821,!0,25270,!0,25723,!0,26180,!0,26641,!0,27106,!0,27575,!0,28048,!0,28525,!0,12246,!0,12563,!0,12884,!0,13209,!0,13538,!0,13871,!0,14208,!1,14549,!1,14894,!1,15243,!1,15596,!1,15953,!1,16314,!1,16679,!0,17048,!1,17421,!1,17798,!1,18179,!1,18564,!0,18953,!1,19346,!1,19743,!1,20144,!1,20549,!1,20958,!1,21371,!1,21788,!1,22209,!1,22634,!1,23063,!1,23496,!1,23933,!0,24374,!0,24819,!0,25268,!0,25721,!0,26178,!0,26639,!0,27104,!0,27573,!0,28046,!0,28523,!0,29004,!0,12561,!0,12882,!0,13207,!0,13536,!0,13869,!0,14206,!0,14547,!0,14892,!0,15241,!1,15594,!1,15951,!1,16312,!1,16677,!1,17046,!0,17419,!1,17796,!1,18177,!1,18562,!1,18951,!1,19344,!1,19741,!0,20142,!1,20547,!1,20956,!1,21369,!1,21786,!1,22207,!1,22632,!1,23061,!1,23494,!1,23931,!1,24372,!0,24817,!0,25266,!0,25719,!0,26176,!0,26637,!0,27102,!0,27571,!0,28044,!0,28521,!0,29002,!0,29487,!0,12880,!0,13205,!0,13534,!0,13867,!0,14204,!0,14545,!0,14890,!0,15239,!1,15592,!1,15949,!1,16310,!1,16675,!1,17044,!1,17417,!1,17794,!1,18175,!1,18560,!1,18949,!1,19342,!1,19739,!1,20140,!1,20545,!0,20954,!1,21367,!1,21784,!1,22205,!1,22630,!0,23059,!0,23492,!0,23929,!0,24370,!0,24815,!0,25264,!0,25717,!0,26174,!0,26635,!0,27100,!0,27569,!0,28042,!0,28519,!0,29e3,!0,29485,!0,29974,!0,13203,!0,13532,!0,13865,!0,14202,!0,14543,!0,14888,!0,15237,!1,15590,!1,15947,!1,16308,!1,16673,!1,17042,!1,17415,!1,17792,!1,18173,!1,18558,!1,18947,!1,19340,!1,19737,!1,20138,!1,20543,!1,20952,!1,21365,!0,21782,!1,22203,!1,22628,!1,23057,!0,23490,!0,23927,!0,24368,!0,24813,!1,25262,!1,25715,!1,26172,!0,26633,!0,27098,!0,27567,!0,28040,!0,28517,!0,28998,!0,29483,!0,29972,!0,30465,!0,13530,!0,13863,!0,14200,!0,14541,!0,14886,!0,15235,!0,15588,!0,15945,!1,16306,!1,16671,!1,17040,!1,17413,!1,17790,!1,18171,!1,18556,!1,18945,!1,19338,!1,19735,!1,20136,!1,20541,!1,20950,!1,21363,!1,21780,!0,22201,!1,22626,!1,23055,!0,23488,!0,23925,!0,24366,!0,24811,!0,25260,!1,25713,!1,26170,!1,26631,!0,27096,!0,27565,!0,28038,!0,28515,!0,28996,!0,29481,!0,29970,!0,30463,!0,30960,!0,13861,!0,14198,!0,14539,!0,14884,!0,15233,!0,15586,!0,15943,!0,16304,!1,16669,!1,17038,!1,17411,!1,17788,!1,18169,!1,18554,!0,18943,!1,19336,!1,19733,!1,20134,!0,20539,!1,20948,!1,21361,!1,21778,!1,22199,!0,22624,!1,23053,!0,23486,!0,23923,!0,24364,!0,24809,!0,25258,!1,25711,!1,26168,!0,26629,!0,27094,!0,27563,!0,28036,!0,28513,!0,28994,!0,29479,!0,29968,!0,30461,!0,30958,!0,31459,!0,14196,!0,14537,!0,14882,!0,15231,!0,15584,!0,15941,!1,16302,!1,16667,!1,17036,!1,17409,!1,17786,!1,18167,!1,18552,!1,18941,!1,19334,!1,19731,!1,20132,!1,20537,!1,20946,!0,21359,!1,21776,!1,22197,!0,22622,!0,23051,!0,23484,!0,23921,!0,24362,!0,24807,!0,25256,!0,25709,!0,26166,!0,26627,!0,27092,!0,27561,!0,28034,!0,28511,!0,28992,!0,29477,!0,29966,!0,30459,!0,30956,!0,31457,!0,31962,!0,14535,!0,14880,!0,15229,!0,15582,!0,15939,!0,16300,!1,16665,!1,17034,!1,17407,!1,17784,!1,18165,!1,18550,!1,18939,!1,19332,!1,19729,!1,20130,!1,20535,!1,20944,!1,21357,!0,21774,!1,22195,!1,22620,!0,23049,!0,23482,!0,23919,!0,24360,!0,24805,!0,25254,!0,25707,!0,26164,!0,26625,!0,27090,!0,27559,!0,28032,!0,28509,!0,28990,!0,29475,!0,29964,!0,30457,!0,30954,!0,31455,!0,31960,!0,32469,!0,14878,!0,15227,!0,15580,!0,15937,!0,16298,!1,16663,!0,17032,!1,17405,!1,17782,!1,18163,!1,18548,!1,18937,!1,19330,!1,19727,!1,20128,!1,20533,!1,20942,!1,21355,!1,21772,!1,22193,!1,22618,!0,23047,!0,23480,!0,23917,!0,24358,!0,24803,!0,25252,!0,25705,!0,26162,!0,26623,!0,27088,!0,27557,!0,28030,!0,28507,!0,28988,!0,29473,!0,29962,!0,30455,!0,30952,!0,31453,!0,31958,!0,32467,!0,32980,!0,15225,!0,15578,!0,15935,!0,16296,!0,16661,!1,17030,!0,17403,!1,17780,!1,18161,!1,18546,!1,18935,!1,19328,!1,19725,!1,20126,!1,20531,!1,20940,!1,21353,!1,21770,!1,22191,!1,22616,!0,23045,!0,23478,!0,23915,!0,24356,!0,24801,!0,25250,!0,25703,!0,26160,!0,26621,!0,27086,!0,27555,!0,28028,!0,28505,!0,28986,!0,29471,!0,29960,!0,30453,!0,30950,!0,31451,!0,31956,!0,32465,!0,32978,!0,33495,!0,15576,!0,15933,!0,16294,!0,16659,!0,17028,!1,17401,!0,17778,!1,18159,!1,18544,!1,18933,!1,19326,!1,19723,!1,20124,!1,20529,!1,20938,!1,21351,!1,21768,!1,22189,!1,22614,!1,23043,!0,23476,!0,23913,!0,24354,!0,24799,!0,25248,!0,25701,!0,26158,!0,26619,!0,27084,!0,27553,!0,28026,!0,28503,!0,28984,!0,29469,!0,29958,!0,30451,!0,30948,!0,31449,!0,31954,!0,32463,!0,32976,!0,33493,!0,34014,!0,15931,!0,16292,!0,16657,!0,17026,!0,17399,!0,17776,!0,18157,!1,18542,!1,18931,!1,19324,!1,19721,!1,20122,!1,20527,!1,20936,!1,21349,!1,21766,!1,22187,!1,22612,!1,23041,!1,23474,!0,23911,!0,24352,!0,24797,!0,25246,!0,25699,!0,26156,!0,26617,!0,27082,!0,27551,!0,28024,!0,28501,!0,28982,!0,29467,!0,29956,!0,30449,!0,30946,!0,31447,!0,31952,!0,32461,!0,32974,!0,33491,!0,34012,!0,34537,!0,16290,!0,16655,!0,17024,!0,17397,!0,17774,!0,18155,!1,18540,!1,18929,!1,19322,!1,19719,!1,20120,!1,20525,!1,20934,!1,21347,!1,21764,!1,22185,!1,22610,!1,23039,!1,23472,!1,23909,!1,24350,!0,24795,!0,25244,!0,25697,!0,26154,!0,26615,!0,27080,!0,27549,!0,28022,!0,28499,!0,28980,!0,29465,!0,29954,!0,30447,!0,30944,!0,31445,!0,31950,!0,32459,!0,32972,!0,33489,!1,34010,!0,34535,!0,35064,!0,16653,!0,17022,!0,17395,!0,17772,!0,18153,!0,18538,!1,18927,!1,19320,!1,19717,!1,20118,!1,20523,!1,20932,!1,21345,!1,21762,!1,22183,!1,22608,!1,23037,!1,23470,!1,23907,!1,24348,!1,24793,!0,25242,!0,25695,!0,26152,!0,26613,!0,27078,!0,27547,!0,28020,!0,28497,!0,28978,!0,29463,!0,29952,!0,30445,!0,30942,!0,31443,!0,31948,!0,32457,!0,32970,!0,33487,!0,34008,!0,34533,!0,35062,!0,35595,!0,17020,!0,17393,!0,17770,!0,18151,!0,18536,!0,18925,!1,19318,!1,19715,!1,20116,!1,20521,!1,20930,!1,21343,!1,21760,!1,22181,!1,22606,!1,23035,!1,23468,!1,23905,!1,24346,!1,24791,!1,25240,!1,25693,!1,26150,!0,26611,!0,27076,!0,27545,!0,28018,!0,28495,!0,28976,!0,29461,!0,29950,!0,30443,!0,30940,!0,31441,!0,31946,!0,32455,!0,32968,!0,33485,!0,34006,!0,34531,!0,35060,!0,35593,!0,36130,!0,17391,!0,17768,!0,18149,!0,18534,!1,18923,!0,19316,!1,19713,!1,20114,!1,20519,!1,20928,!1,21341,!1,21758,!1,22179,!1,22604,!1,23033,!1,23466,!1,23903,!1,24344,!1,24789,!1,25238,!1,25691,!1,26148,!1,26609,!1,27074,!1,27543,!0,28016,!0,28493,!0,28974,!0,29459,!0,29948,!0,30441,!0,30938,!0,31439,!0,31944,!0,32453,!0,32966,!0,33483,!0,34004,!0,34529,!0,35058,!0,35591,!0,36128,!0,36669,!0,17766,!0,18147,!0,18532,!0,18921,!0,19314,!0,19711,!1,20112,!1,20517,!1,20926,!1,21339,!1,21756,!1,22177,!1,22602,!1,23031,!1,23464,!1,23901,!1,24342,!1,24787,!1,25236,!1,25689,!1,26146,!1,26607,!1,27072,!0,27541,!1,28014,!0,28491,!0,28972,!0,29457,!0,29946,!0,30439,!0,30936,!0,31437,!0,31942,!0,32451,!0,32964,!0,33481,!0,34002,!0,34527,!0,35056,!0,35589,!0,36126,!0,36667,!0,37212,!0,18145,!0,18530,!0,18919,!0,19312,!0,19709,!1,20110,!1,20515,!1,20924,!1,21337,!1,21754,!1,22175,!1,22600,!1,23029,!1,23462,!1,23899,!1,24340,!1,24785,!1,25234,!1,25687,!1,26144,!1,26605,!1,27070,!0,27539,!0,28012,!0,28489,!0,28970,!0,29455,!0,29944,!0,30437,!0,30934,!0,31435,!0,31940,!0,32449,!0,32962,!0,33479,!0,34e3,!0,34525,!0,35054,!0,35587,!0,36124,!0,36665,!0,37210,!0,37759,!0,18528,!0,18917,!0,19310,!0,19707,!0,20108,!0,20513,!1,20922,!1,21335,!1,21752,!1,22173,!1,22598,!1,23027,!1,23460,!1,23897,!1,24338,!1,24783,!1,25232,!1,25685,!1,26142,!1,26603,!1,27068,!0,27537,!0,28010,!0,28487,!0,28968,!0,29453,!0,29942,!0,30435,!0,30932,!0,31433,!0,31938,!0,32447,!0,32960,!0,33477,!0,33998,!0,34523,!0,35052,!0,35585,!0,36122,!0,36663,!0,37208,!0,37757,!0,38310,!0,18915,!0,19308,!0,19705,!0,20106,!0,20511,!1,20920,!1,21333,!1,21750,!1,22171,!1,22596,!1,23025,!1,23458,!1,23895,!1,24336,!1,24781,!1,25230,!1,25683,!1,26140,!1,26601,!1,27066,!1,27535,!0,28008,!0,28485,!0,28966,!0,29451,!0,29940,!0,30433,!0,30930,!0,31431,!0,31936,!0,32445,!0,32958,!0,33475,!0,33996,!0,34521,!0,35050,!0,35583,!0,36120,!0,36661,!0,37206,!0,37755,!0,38308,!0,38865,!0,19306,!0,19703,!0,20104,!0,20509,!1,20918,!1,21331,!1,21748,!1,22169,!1,22594,!1,23023,!1,23456,!1,23893,!1,24334,!1,24779,!1,25228,!1,25681,!1,26138,!1,26599,!1,27064,!1,27533,!1,28006,!0,28483,!0,28964,!0,29449,!0,29938,!0,30431,!0,30928,!0,31429,!0,31934,!0,32443,!0,32956,!0,33473,!0,33994,!0,34519,!0,35048,!0,35581,!0,36118,!0,36659,!0,37204,!0,37753,!0,38306,!0,38863,!0,39424,!0,19701,!0,20102,!0,20507,!0,20916,!1,21329,!1,21746,!1,22167,!1,22592,!1,23021,!1,23454,!1,23891,!1,24332,!1,24777,!1,25226,!1,25679,!1,26136,!1,26597,!1,27062,!1,27531,!1,28004,!1,28481,!1,28962,!0,29447,!0,29936,!0,30429,!0,30926,!0,31427,!0,31932,!0,32441,!0,32954,!0,33471,!0,33992,!0,34517,!0,35046,!0,35579,!0,36116,!0,36657,!0,37202,!0,37751,!0,38304,!0,38861,!0,39422,!0,39987,!0,20100,!0,20505,!0,20914,!0,21327,!1,21744,!1,22165,!1,22590,!1,23019,!1,23452,!1,23889,!1,24330,!1,24775,!1,25224,!1,25677,!1,26134,!1,26595,!1,27060,!1,27529,!1,28002,!1,28479,!1,28960,!1,29445,!0,29934,!0,30427,!0,30924,!1,31425,!1,31930,!0,32439,!0,32952,!0,33469,!0,33990,!0,34515,!0,35044,!0,35577,!0,36114,!0,36655,!0,37200,!0,37749,!0,38302,!0,38859,!0,39420,!0,39985,!0,40554,!0,20503,!0,20912,!0,21325,!0,21742,!1,22163,!1,22588,!1,23017,!1,23450,!1,23887,!1,24328,!1,24773,!1,25222,!1,25675,!1,26132,!1,26593,!1,27058,!1,27527,!1,28e3,!1,28477,!1,28958,!1,29443,!1,29932,!1,30425,!1,30922,!1,31423,!0,31928,!1,32437,!1,32950,!0,33467,!0,33988,!0,34513,!0,35042,!0,35575,!0,36112,!0,36653,!0,37198,!0,37747,!0,38300,!0,38857,!0,39418,!0,39983,!0,40552,!0,41125,!0,20910,!0,21323,!0,21740,!0,22161,!1,22586,!1,23015,!1,23448,!1,23885,!1,24326,!1,24771,!1,25220,!1,25673,!1,26130,!1,26591,!1,27056,!1,27525,!1,27998,!1,28475,!1,28956,!1,29441,!1,29930,!1,30423,!1,30920,!1,31421,!0,31926,!1,32435,!1,32948,!1,33465,!0,33986,!0,34511,!0,35040,!0,35573,!0,36110,!0,36651,!0,37196,!0,37745,!0,38298,!0,38855,!0,39416,!0,39981,!0,40550,!0,41123,!0,41700,!0,21321,!0,21738,!0,22159,!0,22584,!0,23013,!1,23446,!1,23883,!1,24324,!1,24769,!1,25218,!1,25671,!1,26128,!1,26589,!1,27054,!1,27523,!1,27996,!1,28473,!1,28954,!1,29439,!1,29928,!1,30421,!1,30918,!1,31419,!1,31924,!0,32433,!0,32946,!0,33463,!1,33984,!1,34509,!0,35038,!0,35571,!0,36108,!0,36649,!0,37194,!0,37743,!0,38296,!0,38853,!0,39414,!0,39979,!0,40548,!0,41121,!0,41698,!0,42279,!0,21736,!0,22157,!0,22582,!0,23011,!0,23444,!1,23881,!1,24322,!1,24767,!1,25216,!1,25669,!1,26126,!1,26587,!1,27052,!1,27521,!1,27994,!1,28471,!1,28952,!1,29437,!1,29926,!1,30419,!1,30916,!0,31417,!1,31922,!1,32431,!0,32944,!1,33461,!0,33982,!1,34507,!1,35036,!0,35569,!0,36106,!0,36647,!0,37192,!0,37741,!0,38294,!0,38851,!0,39412,!0,39977,!0,40546,!0,41119,!0,41696,!0,42277,!0,42862,!0,22155,!0,22580,!0,23009,!0,23442,!0,23879,!1,24320,!1,24765,!1,25214,!1,25667,!1,26124,!1,26585,!1,27050,!1,27519,!1,27992,!1,28469,!1,28950,!1,29435,!1,29924,!1,30417,!1,30914,!1,31415,!1,31920,!0,32429,!0,32942,!0,33459,!0,33980,!1,34505,!1,35034,!1,35567,!0,36104,!0,36645,!0,37190,!0,37739,!0,38292,!0,38849,!0,39410,!0,39975,!0,40544,!0,41117,!0,41694,!0,42275,!0,42860,!0,43449,!0,22578,!0,23007,!0,23440,!0,23877,!0,24318,!1,24763,!1,25212,!1,25665,!1,26122,!1,26583,!1,27048,!1,27517,!1,27990,!1,28467,!1,28948,!1,29433,!1,29922,!1,30415,!1,30912,!1,31413,!1,31918,!0,32427,!0,32940,!0,33457,!0,33978,!0,34503,!1,35032,!1,35565,!0,36102,!0,36643,!0,37188,!0,37737,!0,38290,!1,38847,!0,39408,!0,39973,!0,40542,!0,41115,!0,41692,!0,42273,!0,42858,!0,43447,!0,44040,!0,23005,!0,23438,!0,23875,!0,24316,!0,24761,!0,25210,!1,25663,!1,26120,!1,26581,!1,27046,!1,27515,!1,27988,!1,28465,!1,28946,!1,29431,!1,29920,!1,30413,!1,30910,!1,31411,!1,31916,!0,32425,!0,32938,!0,33455,!0,33976,!0,34501,!1,35030,!1,35563,!1,36100,!0,36641,!0,37186,!0,37735,!0,38288,!0,38845,!1,39406,!1,39971,!1,40540,!1,41113,!0,41690,!0,42271,!0,42856,!0,43445,!0,44038,!0,44635,!0,23436,!0,23873,!0,24314,!0,24759,!0,25208,!0,25661,!1,26118,!1,26579,!1,27044,!1,27513,!1,27986,!1,28463,!1,28944,!1,29429,!1,29918,!1,30411,!1,30908,!1,31409,!1,31914,!1,32423,!0,32936,!0,33453,!0,33974,!0,34499,!0,35028,!0,35561,!1,36098,!1,36639,!0,37184,!1,37733,!0,38286,!0,38843,!1,39404,!1,39969,!1,40538,!1,41111,!1,41688,!0,42269,!0,42854,!0,43443,!0,44036,!0,44633,!0,45234,!0,23871,!0,24312,!0,24757,!0,25206,!0,25659,!0,26116,!1,26577,!1,27042,!1,27511,!1,27984,!1,28461,!1,28942,!1,29427,!1,29916,!1,30409,!1,30906,!1,31407,!0,31912,!1,32421,!0,32934,!0,33451,!1,33972,!0,34497,!1,35026,!0,35559,!0,36096,!1,36637,!1,37182,!0,37731,!0,38284,!0,38841,!0,39402,!1,39967,!1,40536,!1,41109,!1,41686,!0,42267,!0,42852,!0,43441,!0,44034,!0,44631,!0,45232,!0,45837,!0,24310,!0,24755,!0,25204,!0,25657,!0,26114,!0,26575,!1,27040,!1,27509,!1,27982,!1,28459,!1,28940,!1,29425,!1,29914,!1,30407,!1,30904,!1,31405,!0,31910,!0,32419,!0,32932,!1,33449,!0,33970,!0,34495,!0,35024,!1,35557,!1,36094,!0,36635,!1,37180,!0,37729,!1,38282,!1,38839,!0,39400,!1,39965,!1,40534,!1,41107,!1,41684,!1,42265,!0,42850,!0,43439,!0,44032,!0,44629,!0,45230,!0,45835,!0,46444,!0,24753,!0,25202,!0,25655,!0,26112,!0,26573,!0,27038,!1,27507,!1,27980,!1,28457,!1,28938,!1,29423,!1,29912,!1,30405,!1,30902,!1,31403,!1,31908,!1,32417,!0,32930,!0,33447,!1,33968,!0,34493,!0,35022,!0,35555,!0,36092,!0,36633,!0,37178,!1,37727,!0,38280,!0,38837,!0,39398,!0,39963,!1,40532,!1,41105,!1,41682,!1,42263,!1,42848,!0,43437,!0,44030,!0,44627,!0,45228,!0,45833,!0,46442,!0,47055,!0,25200,!0,25653,!0,26110,!0,26571,!0,27036,!0,27505,!0,27978,!1,28455,!1,28936,!1,29421,!1,29910,!1,30403,!1,30900,!1,31401,!1,31906,!0,32415,!0,32928,!1,33445,!0,33966,!0,34491,!0,35020,!0,35553,!0,36090,!0,36631,!0,37176,!0,37725,!0,38278,!0,38835,!0,39396,!0,39961,!1,40530,!1,41103,!1,41680,!1,42261,!1,42846,!1,43435,!0,44028,!0,44625,!0,45226,!0,45831,!0,46440,!0,47053,!0,47670,!0,25651,!0,26108,!0,26569,!0,27034,!0,27503,!0,27976,!0,28453,!1,28934,!1,29419,!1,29908,!1,30401,!1,30898,!1,31399,!1,31904,!1,32413,!0,32926,!0,33443,!1,33964,!0,34489,!0,35018,!0,35551,!0,36088,!0,36629,!0,37174,!0,37723,!0,38276,!0,38833,!1,39394,!1,39959,!0,40528,!1,41101,!1,41678,!1,42259,!1,42844,!1,43433,!1,44026,!0,44623,!0,45224,!0,45829,!0,46438,!0,47051,!0,47668,!0,48289,!0,26106,!0,26567,!0,27032,!0,27501,!0,27974,!1,28451,!0,28932,!1,29417,!1,29906,!1,30399,!1,30896,!1,31397,!1,31902,!1,32411,!1,32924,!0,33441,!0,33962,!0,34487,!0,35016,!0,35549,!0,36086,!0,36627,!0,37172,!0,37721,!0,38274,!0,38831,!0,39392,!0,39957,!0,40526,!0,41099,!1,41676,!1,42257,!1,42842,!1,43431,!1,44024,!1,44621,!1,45222,!0,45827,!0,46436,!0,47049,!0,47666,!0,48287,!0,48912,!0,26565,!0,27030,!0,27499,!0,27972,!0,28449,!1,28930,!0,29415,!1,29904,!1,30397,!1,30894,!1,31395,!1,31900,!1,32409,!1,32922,!0,33439,!0,33960,!1,34485,!0,35014,!0,35547,!0,36084,!0,36625,!0,37170,!0,37719,!0,38272,!0,38829,!0,39390,!0,39955,!1,40524,!1,41097,!0,41674,!0,42255,!1,42840,!1,43429,!1,44022,!1,44619,!1,45220,!1,45825,!0,46434,!0,47047,!0,47664,!0,48285,!0,48910,!0,49539,!0,27028,!0,27497,!0,27970,!0,28447,!0,28928,!1,29413,!1,29902,!1,30395,!1,30892,!1,31393,!0,31898,!0,32407,!0,32920,!0,33437,!1,33958,!1,34483,!0,35012,!0,35545,!0,36082,!0,36623,!0,37168,!0,37717,!0,38270,!0,38827,!0,39388,!0,39953,!0,40522,!1,41095,!1,41672,!0,42253,!0,42838,!1,43427,!1,44020,!1,44617,!1,45218,!1,45823,!1,46432,!1,47045,!0,47662,!0,48283,!0,48908,!0,49537,!0,50170,!0,27495,!0,27968,!0,28445,!0,28926,!0,29411,!1,29900,!1,30393,!1,30890,!1,31391,!1,31896,!0,32405,!0,32918,!0,33435,!0,33956,!1,34481,!0,35010,!0,35543,!0,36080,!0,36621,!0,37166,!0,37715,!0,38268,!0,38825,!0,39386,!0,39951,!0,40520,!0,41093,!0,41670,!1,42251,!1,42836,!1,43425,!1,44018,!1,44615,!1,45216,!1,45821,!1,46430,!1,47043,!1,47660,!0,48281,!0,48906,!0,49535,!0,50168,!0,50805,!0,27966,!0,28443,!0,28924,!0,29409,!0,29898,!0,30391,!1,30888,!1,31389,!1,31894,!1,32403,!0,32916,!0,33433,!0,33954,!0,34479,!1,35008,!0,35541,!0,36078,!0,36619,!0,37164,!0,37713,!0,38266,!0,38823,!0,39384,!0,39949,!1,40518,!0,41091,!0,41668,!0,42249,!1,42834,!0,43423,!0,44016,!0,44613,!1,45214,!1,45819,!1,46428,!1,47041,!1,47658,!1,48279,!1,48904,!0,49533,!0,50166,!0,50803,!0,51444,!0,28441,!0,28922,!0,29407,!0,29896,!0,30389,!0,30886,!1,31387,!1,31892,!1,32401,!1,32914,!0,33431,!0,33952,!0,34477,!0,35006,!0,35539,!0,36076,!0,36617,!0,37162,!0,37711,!0,38264,!0,38821,!0,39382,!0,39947,!0,40516,!0,41089,!0,41666,!0,42247,!1,42832,!1,43421,!1,44014,!0,44611,!0,45212,!1,45817,!1,46426,!1,47039,!1,47656,!1,48277,!0,48902,!0,49531,!0,50164,!0,50801,!0,51442,!0,52087,!0,28920,!0,29405,!0,29894,!0,30387,!0,30884,!1,31385,!0,31890,!1,32399,!1,32912,!1,33429,!0,33950,!0,34475,!0,35004,!1,35537,!0,36074,!0,36615,!0,37160,!0,37709,!0,38262,!0,38819,!0,39380,!0,39945,!0,40514,!0,41087,!0,41664,!0,42245,!0,42830,!0,43419,!0,44012,!1,44609,!0,45210,!0,45815,!0,46424,!0,47037,!1,47654,!1,48275,!0,48900,!0,49529,!0,50162,!0,50799,!0,51440,!0,52085,!0,52734,!0,29403,!0,29892,!0,30385,!0,30882,!0,31383,!0,31888,!0,32397,!1,32910,!1,33427,!1,33948,!0,34473,!0,35002,!0,35535,!0,36072,!0,36613,!0,37158,!0,37707,!0,38260,!0,38817,!0,39378,!0,39943,!0,40512,!0,41085,!0,41662,!0,42243,!0,42828,!0,43417,!0,44010,!1,44607,!0,45208,!0,45813,!0,46422,!0,47035,!0,47652,!0,48273,!0,48898,!0,49527,!0,50160,!0,50797,!0,51438,!0,52083,!0,52732,!0,53385,!0,29890,!0,30383,!0,30880,!0,31381,!0,31886,!0,32395,!0,32908,!1,33425,!1,33946,!1,34471,!1,35e3,!1,35533,!0,36070,!0,36611,!0,37156,!0,37705,!0,38258,!0,38815,!0,39376,!0,39941,!0,40510,!0,41083,!0,41660,!0,42241,!0,42826,!0,43415,!0,44008,!0,44605,!0,45206,!0,45811,!0,46420,!0,47033,!0,47650,!0,48271,!0,48896,!0,49525,!0,50158,!0,50795,!0,51436,!0,52081,!0,52730,!0,53383,!0,54040,!0,30381,!0,30878,!0,31379,!0,31884,!0,32393,!0,32906,!0,33423,!1,33944,!1,34469,!1,34998,!1,35531,!1,36068,!0,36609,!0,37154,!0,37703,!0,38256,!0,38813,!0,39374,!0,39939,!0,40508,!0,41081,!0,41658,!0,42239,!0,42824,!0,43413,!0,44006,!0,44603,!0,45204,!0,45809,!1,46418,!1,47031,!0,47648,!0,48269,!0,48894,!0,49523,!0,50156,!0,50793,!0,51434,!0,52079,!0,52728,!0,53381,!0,54038,!0,54699,!0,30876,!0,31377,!0,31882,!0,32391,!0,32904,!0,33421,!0,33942,!1,34467,!1,34996,!1,35529,!1,36066,!0,36607,!0,37152,!0,37701,!0,38254,!0,38811,!0,39372,!0,39937,!0,40506,!0,41079,!0,41656,!0,42237,!0,42822,!0,43411,!0,44004,!0,44601,!0,45202,!0,45807,!0,46416,!0,47029,!0,47646,!0,48267,!0,48892,!0,49521,!0,50154,!0,50791,!0,51432,!0,52077,!0,52726,!0,53379,!0,54036,!0,54697,!0,55362,!0,31375,!0,31880,!0,32389,!0,32902,!0,33419,!0,33940,!0,34465,!1,34994,!1,35527,!1,36064,!0,36605,!0,37150,!0,37699,!0,38252,!0,38809,!0,39370,!0,39935,!0,40504,!0,41077,!0,41654,!0,42235,!0,42820,!0,43409,!0,44002,!0,44599,!0,45200,!0,45805,!0,46414,!0,47027,!0,47644,!0,48265,!0,48890,!1,49519,!0,50152,!0,50789,!0,51430,!0,52075,!0,52724,!0,53377,!0,54034,!0,54695,!0,55360,!0,56029,!0,31878,!0,32387,!0,32900,!0,33417,!0,33938,!0,34463,!0,34992,!1,35525,!1,36062,!1,36603,!0,37148,!0,37697,!0,38250,!0,38807,!0,39368,!0,39933,!0,40502,!0,41075,!0,41652,!0,42233,!0,42818,!0,43407,!0,44e3,!0,44597,!0,45198,!1,45803,!0,46412,!0,47025,!0,47642,!0,48263,!0,48888,!0,49517,!0,50150,!0,50787,!0,51428,!0,52073,!0,52722,!0,53375,!0,54032,!1,54693,!0,55358,!1,56027,!0,56700,!0,32385,!0,32898,!0,33415,!0,33936,!0,34461,!0,34990,!0,35523,!1,36060,!1,36601,!1,37146,!0,37695,!0,38248,!0,38805,!0,39366,!0,39931,!0,40500,!0,41073,!0,41650,!0,42231,!0,42816,!0,43405,!0,43998,!0,44595,!0,45196,!0,45801,!0,46410,!0,47023,!0,47640,!0,48261,!0,48886,!0,49515,!0,50148,!0,50785,!0,51426,!0,52071,!0,52720,!0,53373,!0,54030,!1,54691,!0,55356,!0,56025,!0,56698,!0,57375,!0,32896,!0,33413,!0,33934,!0,34459,!0,34988,!0,35521,!0,36058,!1,36599,!1,37144,!0,37693,!0,38246,!0,38803,!0,39364,!0,39929,!0,40498,!0,41071,!0,41648,!0,42229,!0,42814,!0,43403,!0,43996,!0,44593,!0,45194,!0,45799,!0,46408,!0,47021,!0,47638,!0,48259,!0,48884,!0,49513,!0,50146,!0,50783,!0,51424,!0,52069,!0,52718,!0,53371,!0,54028,!0,54689,!0,55354,!0,56023,!0,56696,!0,57373,!0,58054,!0,33411,!0,33932,!0,34457,!0,34986,!0,35519,!0,36056,!0,36597,!1,37142,!1,37691,!0,38244,!0,38801,!0,39362,!0,39927,!0,40496,!0,41069,!0,41646,!0,42227,!0,42812,!0,43401,!0,43994,!0,44591,!0,45192,!0,45797,!0,46406,!0,47019,!0,47636,!0,48257,!0,48882,!1,49511,!0,50144,!0,50781,!1,51422,!0,52067,!0,52716,!0,53369,!0,54026,!0,54687,!1,55352,!0,56021,!0,56694,!0,57371,!0,58052,!0,58737,!0],A.aL("bc<c,L>"))
B.ax={}
B.a2=new A.b8(B.ax,[],A.aL("b8<cB,@>"))
B.E=new A.cw("tight")
B.a4=new A.cw("expanded")
B.a5=new A.cw("seekAndDestroy")
B.ay=new A.aC("call")
B.az=A.ad("nn")
B.aA=A.ad("kA")
B.aB=A.ad("kM")
B.aC=A.ad("kN")
B.aD=A.ad("kQ")
B.aE=A.ad("kR")
B.aF=A.ad("kS")
B.aG=A.ad("j")
B.aH=A.ad("ln")
B.aI=A.ad("lo")
B.aJ=A.ad("lp")
B.aK=A.ad("lq")
B.G=new A.k(0,0)
B.a6=new A.k(50,18)})();(function staticFields(){$.hv=null
$.a0=A.h([],A.aL("q<j>"))
$.jb=null
$.fp=0
$.dH=A.mw()
$.iX=null
$.iW=null
$.k2=null
$.jY=null
$.k7=null
$.hT=null
$.i_=null
$.iH=null
$.nV=A.h([],A.aL("q<p<j>?>"))
$.c1=null
$.d4=null
$.d5=null
$.iA=!1
$.r=B.e
$.kx=A.h([],A.aL("q<bA>"))
$.is=!1
$.cK=A.h([],A.aL("q<~()>"))
$.h5=null
$.ir=!0
$.j8=0
$.l1=A.a3(t.N,t.L)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"nq","i7",()=>A.k1("_$dart_dartClosure"))
s($,"o5","i9",()=>B.e.cC(new A.i3()))
s($,"nE","kc",()=>A.aE(A.fR({
toString:function(){return"$receiver$"}})))
s($,"nF","kd",()=>A.aE(A.fR({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"nG","ke",()=>A.aE(A.fR(null)))
s($,"nH","kf",()=>A.aE(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"nK","ki",()=>A.aE(A.fR(void 0)))
s($,"nL","kj",()=>A.aE(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"nJ","kh",()=>A.aE(A.jo(null)))
s($,"nI","kg",()=>A.aE(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"nN","kl",()=>A.aE(A.jo(void 0)))
s($,"nM","kk",()=>A.aE(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"nR","iP",()=>A.ls())
s($,"nv","iM",()=>$.i9())
s($,"nT","ko",()=>new Int8Array(A.mb(A.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
r($,"nS","kn",()=>A.l4(0))
s($,"nY","i8",()=>A.iL(B.aG))
s($,"nC","iO",()=>{A.lb()
return $.fp})
s($,"nU","iQ",()=>A.k1("_$dart_dartObject"))
s($,"nX","iR",()=>function DartObject(a){this.o=a})
s($,"nl","kb",()=>{var q="Marines",p=null,o="Infantry",n=t.S,m=t.h
return A.kH(A.f0([49,A.az(49,q,B.A,A.R(92,18)),50,A.az(50,q,B.A,A.R(37,26)),51,A.az(51,q,B.A,p),52,A.az(52,o,B.z,p),53,A.az(53,o,B.z,p),54,A.az(54,o,B.z,p),55,A.az(55,"Air Force",B.ah,p),56,A.az(56,"Squad",B.W,A.R(77,17)),57,A.az(57,"Squad",B.W,p),48,A.az(48,"HQ",B.ai,A.R(39,13))],n,m),n,m)})
s($,"o2","ks",()=>{var q=A.lg(2014,9,1,0,0,0,0,0,!0)
if(q==null)q=864e14
if(q===864e14)A.b1(A.b5("(2014, 9, 1, 0, 0, 0, 0, 0)",null))
return new A.ag(q,0,!0)})
s($,"nZ","kp",()=>A.f4("PubSub"))
r($,"o_","iS",()=>A.im())
s($,"o0","kr",()=>A.im())
r($,"jG","b2",()=>new A.e8())
s($,"o1","kq",()=>A.im())
s($,"nP","km",()=>{var q=null
return A.h([A.a8("Los Angeles",A.R(22,15),q),A.a8("New York",A.R(39,13),q),A.a8("Paris",A.R(66,12),q),A.a8("Moscow",A.R(76,10),q),A.a8("Beijing",A.R(109,13),q),A.a8("Delhi",A.R(92,18),q),A.a8("Jakarta",A.R(105,26),q),A.a8("Cairo",A.R(77,17),q),A.a8("Kinshasa",A.R(70,26),q),A.a8("Sao Paulo",A.R(49,31),q),A.a8("Quito",A.R(37,26),q),A.a8("Sydney",A.R(119,35),89)],A.aL("q<at>"))})
s($,"nw","G",()=>{var q,p=new A.e4([],A.a3(t.N,t.y),A.h([],A.aL("q<ai>"))),o=p.ay=A.nj().navigator
if(B.c.F(o.vendor,"Apple")){q=A.dJ("iP(?:hone|ad|od)",!0)
o=o.platform
o.toString
o=q.ec(o)}else o=!1
p.ch=o
p.c1()
return p})
s($,"nx","iN",()=>A.f4(""))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.T,DOMError:J.T,MediaError:J.T,Navigator:J.T,NavigatorConcurrentHardware:J.T,NavigatorUserMediaError:J.T,OverconstrainedError:J.T,PositionError:J.T,GeolocationPositionError:J.T,AudioParam:J.T,ArrayBuffer:A.dt,ArrayBufferView:A.ct,DataView:A.du,Float32Array:A.dv,Float64Array:A.dw,Int16Array:A.dx,Int32Array:A.dy,Int8Array:A.dz,Uint16Array:A.dA,Uint32Array:A.dB,Uint8ClampedArray:A.cu,CanvasPixelArray:A.cu,Uint8Array:A.bj,HTMLBRElement:A.e,HTMLBaseElement:A.e,HTMLBodyElement:A.e,HTMLButtonElement:A.e,HTMLContentElement:A.e,HTMLDListElement:A.e,HTMLDataElement:A.e,HTMLDataListElement:A.e,HTMLDetailsElement:A.e,HTMLDialogElement:A.e,HTMLDivElement:A.e,HTMLEmbedElement:A.e,HTMLFieldSetElement:A.e,HTMLHRElement:A.e,HTMLHeadElement:A.e,HTMLHeadingElement:A.e,HTMLHtmlElement:A.e,HTMLIFrameElement:A.e,HTMLImageElement:A.e,HTMLInputElement:A.e,HTMLLIElement:A.e,HTMLLabelElement:A.e,HTMLLegendElement:A.e,HTMLLinkElement:A.e,HTMLMapElement:A.e,HTMLMenuElement:A.e,HTMLMetaElement:A.e,HTMLMeterElement:A.e,HTMLModElement:A.e,HTMLOListElement:A.e,HTMLObjectElement:A.e,HTMLOptGroupElement:A.e,HTMLOptionElement:A.e,HTMLOutputElement:A.e,HTMLParagraphElement:A.e,HTMLParamElement:A.e,HTMLPictureElement:A.e,HTMLPreElement:A.e,HTMLProgressElement:A.e,HTMLQuoteElement:A.e,HTMLScriptElement:A.e,HTMLShadowElement:A.e,HTMLSlotElement:A.e,HTMLSourceElement:A.e,HTMLSpanElement:A.e,HTMLStyleElement:A.e,HTMLTableCaptionElement:A.e,HTMLTableCellElement:A.e,HTMLTableDataCellElement:A.e,HTMLTableHeaderCellElement:A.e,HTMLTableColElement:A.e,HTMLTableElement:A.e,HTMLTableRowElement:A.e,HTMLTableSectionElement:A.e,HTMLTemplateElement:A.e,HTMLTextAreaElement:A.e,HTMLTimeElement:A.e,HTMLTitleElement:A.e,HTMLTrackElement:A.e,HTMLUListElement:A.e,HTMLUnknownElement:A.e,HTMLDirectoryElement:A.e,HTMLFontElement:A.e,HTMLFrameElement:A.e,HTMLFrameSetElement:A.e,HTMLMarqueeElement:A.e,HTMLElement:A.e,HTMLAnchorElement:A.d8,HTMLAreaElement:A.d9,HTMLAudioElement:A.c9,Blob:A.b6,File:A.b6,HTMLCanvasElement:A.bw,CDATASection:A.af,CharacterData:A.af,Comment:A.af,ProcessingInstruction:A.af,Text:A.af,CSSStyleDeclaration:A.cb,MSStyleCSSProperties:A.cb,CSS2Properties:A.cb,XMLDocument:A.ah,Document:A.ah,DOMException:A.ew,MathMLElement:A.d,SVGAElement:A.d,SVGAnimateElement:A.d,SVGAnimateMotionElement:A.d,SVGAnimateTransformElement:A.d,SVGAnimationElement:A.d,SVGCircleElement:A.d,SVGClipPathElement:A.d,SVGDefsElement:A.d,SVGDescElement:A.d,SVGDiscardElement:A.d,SVGEllipseElement:A.d,SVGFEBlendElement:A.d,SVGFEColorMatrixElement:A.d,SVGFEComponentTransferElement:A.d,SVGFECompositeElement:A.d,SVGFEConvolveMatrixElement:A.d,SVGFEDiffuseLightingElement:A.d,SVGFEDisplacementMapElement:A.d,SVGFEDistantLightElement:A.d,SVGFEFloodElement:A.d,SVGFEFuncAElement:A.d,SVGFEFuncBElement:A.d,SVGFEFuncGElement:A.d,SVGFEFuncRElement:A.d,SVGFEGaussianBlurElement:A.d,SVGFEImageElement:A.d,SVGFEMergeElement:A.d,SVGFEMergeNodeElement:A.d,SVGFEMorphologyElement:A.d,SVGFEOffsetElement:A.d,SVGFEPointLightElement:A.d,SVGFESpecularLightingElement:A.d,SVGFESpotLightElement:A.d,SVGFETileElement:A.d,SVGFETurbulenceElement:A.d,SVGFilterElement:A.d,SVGForeignObjectElement:A.d,SVGGElement:A.d,SVGGeometryElement:A.d,SVGGraphicsElement:A.d,SVGImageElement:A.d,SVGLineElement:A.d,SVGLinearGradientElement:A.d,SVGMarkerElement:A.d,SVGMaskElement:A.d,SVGMetadataElement:A.d,SVGPathElement:A.d,SVGPatternElement:A.d,SVGPolygonElement:A.d,SVGPolylineElement:A.d,SVGRadialGradientElement:A.d,SVGRectElement:A.d,SVGScriptElement:A.d,SVGSetElement:A.d,SVGStopElement:A.d,SVGStyleElement:A.d,SVGElement:A.d,SVGSVGElement:A.d,SVGSwitchElement:A.d,SVGSymbolElement:A.d,SVGTSpanElement:A.d,SVGTextContentElement:A.d,SVGTextElement:A.d,SVGTextPathElement:A.d,SVGTextPositioningElement:A.d,SVGTitleElement:A.d,SVGUseElement:A.d,SVGViewElement:A.d,SVGGradientElement:A.d,SVGComponentTransferFunctionElement:A.d,SVGFEDropShadowElement:A.d,SVGMPathElement:A.d,Element:A.d,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,AnalyserNode:A.o,RealtimeAnalyserNode:A.o,AudioBufferSourceNode:A.o,AudioDestinationNode:A.o,AudioNode:A.o,AudioScheduledSourceNode:A.o,AudioWorkletNode:A.o,BiquadFilterNode:A.o,ChannelMergerNode:A.o,AudioChannelMerger:A.o,ChannelSplitterNode:A.o,AudioChannelSplitter:A.o,ConstantSourceNode:A.o,ConvolverNode:A.o,DelayNode:A.o,DynamicsCompressorNode:A.o,GainNode:A.o,AudioGainNode:A.o,IIRFilterNode:A.o,MediaElementAudioSourceNode:A.o,MediaStreamAudioDestinationNode:A.o,MediaStreamAudioSourceNode:A.o,OscillatorNode:A.o,Oscillator:A.o,PannerNode:A.o,AudioPannerNode:A.o,webkitAudioPannerNode:A.o,ScriptProcessorNode:A.o,JavaScriptAudioNode:A.o,StereoPannerNode:A.o,WaveShaperNode:A.o,EventTarget:A.o,HTMLFormElement:A.dj,HTMLDocument:A.cf,XMLHttpRequest:A.av,XMLHttpRequestEventTarget:A.dm,ImageData:A.cg,KeyboardEvent:A.bf,Location:A.f2,HTMLVideoElement:A.bi,HTMLMediaElement:A.bi,MouseEvent:A.ay,DragEvent:A.ay,PointerEvent:A.ay,WheelEvent:A.ay,DocumentFragment:A.A,ShadowRoot:A.A,Attr:A.A,DocumentType:A.A,Node:A.A,ProgressEvent:A.aA,ResourceProgressEvent:A.aA,HTMLSelectElement:A.dL,TouchEvent:A.cC,CompositionEvent:A.aF,FocusEvent:A.aF,TextEvent:A.aF,UIEvent:A.aF,Window:A.bm,DOMWindow:A.bm,DedicatedWorkerGlobalScope:A.aG,ServiceWorkerGlobalScope:A.aG,SharedWorkerGlobalScope:A.aG,WorkerGlobalScope:A.aG,IDBKeyRange:A.cm,AudioBuffer:A.as,AudioContext:A.c8,webkitAudioContext:A.c8,BaseAudioContext:A.dd})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,AudioParam:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,Blob:true,File:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,XMLDocument:true,Document:false,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,ImageData:true,KeyboardEvent:true,Location:true,HTMLVideoElement:true,HTMLMediaElement:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true,AudioBuffer:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false})
A.bI.$nativeSuperclassTag="ArrayBufferView"
A.cQ.$nativeSuperclassTag="ArrayBufferView"
A.cR.$nativeSuperclassTag="ArrayBufferView"
A.cr.$nativeSuperclassTag="ArrayBufferView"
A.cS.$nativeSuperclassTag="ArrayBufferView"
A.cT.$nativeSuperclassTag="ArrayBufferView"
A.cs.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.n8
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
