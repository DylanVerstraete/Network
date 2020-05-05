/* eslint-disable */!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).$=e()}(this,(function(){"use strict";let t;const e=(...e)=>t(...e);e.superMethod=e=>{t=e};const r=Object,n=r.keys,s=r.is,c=r.assign,o=r.getOwnPropertyDescriptor,a=r.defineProperty,i=r.getOwnPropertyNames,l=t=>n(t).length;c(e,{assign:c,defineProperty:a,getOwnPropertyDescriptor:o,getOwnPropertyNames:i,is:s,keys:n,objectSize:l});const u=Array.from;c(e,{toArray:u});const p=Reflect.apply;c(e,{apply:p});const h=function(t){return void 0===t},g=t=>null===t,f=t=>!h(t)&&!g(t),y=t=>e=>!!f(e)&&e.constructor===t,m=/\.|\+/,d=Array.isArray,A=y(String),b=y(Number),w=t=>!!f(t)&&"Object("===t.constructor.toString().trim().slice(9,16),O=t=>!!f(t)&&t instanceof Function,j=t=>Boolean(t.length),v=t=>e=>!!f(e)&&t.test(e),S=v(/\.css$/),k=v(/\.json$/),M=v(/\.js$/),R=v(/\.html$/),C=v(/\./),F=/\.([0-9a-z]+)/;c(e,{getFileExtension:t=>{const e=t.match(F);if(e)return e[1]},has:(t,...e)=>t.includes(...e),hasDot:C,hasLength:j,hasValue:f,isArray:d,isBoolean:t=>"Boolean"===t.constructor.name,isDate:t=>t instanceof Date,isDecimal:t=>m.test(t.toString()),isEmpty:t=>A(t)||d(t)?!j(t):w(t)?!l(t):!f(t),isFileCSS:S,isFileHTML:R,isFileJS:M,isFileJSON:k,isFunction:O,isNull:g,isNumber:b,isPlainObject:w,isRegExp:t=>t instanceof RegExp,isString:A,isUndefined:h});const x=(t,e)=>{const r=t.length;for(let n=0;n<r;n++)e(t[n],n,t,r);return t},E=(t,e)=>{const r=t.length;for(let n=r-1;n>=0;n--)e(t[n],n,t,r);return t},I=(t,e)=>{const r=t.length;for(let n=0;n<r;n++)if(!1===e(t[n],n,t,r))return!1;return!0},N=(t,e,r=[])=>(x(t,(t,n,s,c)=>{!0===e(t,n,r,s,c)&&r.push(t)}),r),U=($=x,(t,e,r=[])=>($(t,(t,n,s,c)=>{r[n]=e(t,n,r,s,c)}),r));var $;const L=(t,e,r=[])=>(x(t,(t,n,s,c)=>{const o=e(t,n,r,s,c);f(o)&&r.push(o)}),r);c(e,{compactMapArray:L,eachArray:x,eachArrayRight:E,filterArray:N,mapArray:U,mapArrayRight:(t,e,r=[])=>{let n=0;const s=t.length;for(let c=s-1;c>=0;c--)r[n]=e(t[c],c,t,s),n++;return r},mapWhile:(t,e,r=[])=>{const n=t.length;for(let s=0;s<n;s++){const c=e(t[s],s,r,t,n);if(!1===c)break;r[s]=c}return r},whileArray:I});x(["Arguments","Map","Set","WeakMap"],t=>{var r;e[`is${t}`]=(r=`[object ${t}]`,t=>!!f(t)&&t.toString()===r)});x(["ArrayBuffer","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array"],t=>{e[`is${t}`]=e=>!!f(e)&&e.constructor.name===t});c(e,{asyncEach:async(t,e)=>{const r=t.length;for(let n=0;n<r;n++){const s=t[n];await s(e,n,t,r)}return t}});const P=t=>d(t)?t:[t];c(e,{ensureArray:P});const B=t=>t.flat(1/0);c(e,{flatten:(t,e=1)=>{let r=t;for(let t=0;t<e;t++)r=r.reduce((t,e)=>t.concat(P(e)),[]);return r},flattenDeep:B});c(e,{remove:(t,e)=>{let r=t.length;for(let n=0;n<r;n++){const s=t[n];e.includes(s)&&(t.splice(n,1),n--,r--)}return t},removeBy:(t,e)=>{let r=t.length;for(let n=0;n<r;n++){e(t[n],n)&&(t.splice(n,1),n--,r--)}return t}});c(e,{chunk:(t,e=1)=>{const r=[];let n=0;return t.forEach((t,s)=>{s%e||(r.push([]),s&&n++),r[n].push(t)}),r}});c(e,{rest:t=>t.slice(1,t.length)});const D=t=>(t.length=0,t);c(e,{clear:D});c(e,{right:(t,e)=>t[t.length-1-e]});c(e,{cloneArray:t=>t.slice()});const T=Math,z=T.floor,q=T.random,K=(t,e=0)=>z(q()*(t-e))+e;c(e,{add:(t,e)=>t+e,deduct:t=>t-1,divide:(t,e)=>t/e,increment:t=>t+1,minus:(t,e)=>t-e,multiply:(t,e)=>t*e,randomArbitrary:(t,e=0)=>q()*(t-e)+e,randomInt:K,remainder:(t,e)=>t%e});const W=(t,e=t.length)=>{if(t.length<=1)return u(t);const r=u(t);let n,s,c=0;for(;c<e;)n=K(r.length-1,0),s=r[c],r[c]=r[n],r[n]=s,c++;return r};c(e,{shuffle:W});c(e,{sample:(t,e=1)=>{if(!t)return!1;const r=t.length;if(r===e||e>r)return W(t);if(1===e)return[t[K(r-1,0)]];const n=[],s={};let c,o=0;for(;o<e;)c=K(t.length-1,0),s[c]||(n.push(t[c]),s[c]=!0,o++);return n}});c(e,{compact:t=>t.filter(t=>!(A(t)&&!t.length)&&t)});c(e,{initial:t=>t.slice(0,t.length-1)});const J=Math.min;c(e,{smallest:t=>J(...t)});c(e,{range:(t,e,r=1)=>t<e?((t,e,r)=>{const n=[];let s=t;for(;s<e;)n.push(s),s+=r;return n})(t,e,r):((t,e,r)=>{const n=r<0?-1*r:r,s=[];let c=t;for(;c>e;)s.push(c),c-=n;return s})(t,e,r)});c(e,{intersect:(t,...e)=>L(t,t=>{if(I(e,e=>e.includes(t)))return t})});c(e,{difference:(t,...e)=>{const r=B(e);return L(t,t=>{if(!r.includes(t))return t})}});const Z=(t,e,r=t.length)=>t.splice(e,r);c(e,{drop:Z,dropRight:(t,e,r=t.length)=>Z(t,0,r-e)});const V=(t,e)=>t.length===e.length&&I(t,(t,r)=>e[r]===t);c(e,{isMatchArray:V});c(e,{sortedIndex:(t,e)=>{let r=0;return I(t,(t,n)=>(r=n,e>t)),r}});const _=Math.max;c(e,{largest:t=>_(...t)});c(e,{sum:t=>t.reduce((t,e)=>t+e,0)});const H=async(t,e)=>{const r=t.length;for(let n=0;n<r;n++)await e(t[n],n,t,r);return t},G=async(t,e)=>{const r=t.length;for(let n=r-1;n>=0;n--)await e(t[n],n,t,r);return t};c(e,{eachAsync:H,eachAsyncRight:G});c(e,{last:(t,e)=>{const r=t.length;return e?t.slice(r-e,r):t[r-1]}});c(e,{take:(t,e=1)=>t.slice(0,e),takeRight:(t,e=1)=>{const r=t.length;return t.slice(r-e,r)}});const Q=async(t,e)=>{const r=[];return await H(t,async(t,n,s)=>{r[n]=await e(t,n,s)}),r};c(e,{mapAsync:Q});const X=(t,e,r)=>r.indexOf(t)===e,Y=(t,e,r)=>t!==r[e-1],tt=(t,e)=>e?t.filter(Y):t.filter(X);c(e,{unique:tt});c(e,{union:(...t)=>tt(B(t))});c(e,{compactMapAsync:async(t,e)=>{const r=[];let n;return await H(t,async(t,s,c)=>{n=await e(t,s,r,c),f(n)&&r.push(n)}),r}});const et=(t,e)=>t-e;c(e,{numSort:t=>t.sort(et)});c(e,{arrayToObject:(t,e)=>{const r={};return x(t,(t,n)=>{r[e[n]]=t}),r}});c(e,{without:(t,e)=>t.filter(t=>!e.includes(t))});c(e,{partition:(t,e)=>{const r=[];return[L(t,t=>{if(e(t))return t;r.push(t)}),r]}});c(e,{xor:(...t)=>{const e=[];return x(t,t=>{x(tt(t),t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)})}),e}});c(e,{unZip:t=>t[0].map((e,r)=>t.map(t=>t[r])),zip:(...t)=>t[0].map((e,r)=>t.map(t=>t[r]))});c(e,{first:(t,e)=>e?t.slice(0,e):t[0]});const rt=(t,e)=>e-t;c(e,{rNumSort:t=>t.sort(rt)});const nt=(t,e,r)=>{const n=r?t:0,s=r?e:t,c=r||e;for(let t=n;t<s;t++)c(t,n,s)};c(e,{times:nt,timesMap:(t,e,r,n=[])=>{const s=r?t:0,c=r?e:t,o=r||e;let a;return nt(s,c,t=>{a=o(t,s,c,n),f(a)&&n.push(a)}),n}});const st=(t,e,r=!0)=>(r?t:[...t]).sort((t,r)=>r[e]?t[e]?t[e]<r[e]?1:t[e]>r[e]?-1:0:1:-1);c(e,{getNewest:(t,e)=>st(t,e,!1)[0],sortNewest:st});const ct=(t,e="id",r=!0)=>(r?t:[...t]).sort((t,r)=>r[e]?t[e]?t[e]<r[e]?-1:t[e]>r[e]?1:0:-1:1);c(e,{getOldest:(t,e="id")=>ct(t,e)[0],sortOldest:ct});c(e,{groupBy:(t,e)=>{const r={};return x(t,t=>{const n=e(t);r[n]||(r[n]=[]),r[n].push(t)}),r}});c(e,{countBy:(t,e)=>{const r={};let n;return x(t,t=>{n=e(t),r[n]||(r[n]=0),r[n]++}),r},countKey:(t,e)=>{let r=0;return x(t,t=>{t[e]&&r++}),r},countWithoutKey:(t,e)=>{let r=0;return x(t,t=>{t[e]||r++}),r}});c(e,{indexBy:(t,e="id")=>{const r={};return x(t,t=>{r[t[e]]=t}),r}});c(e,{pluck:(t,e)=>U(t,t=>t[e])});const ot=(t,e)=>U(e,e=>t[e]);c(e,{pluckObject:ot});c(e,{pluckValues:(t,e)=>U(t,t=>ot(t,e))});c(e,{invoke:(t,e,r)=>U(t,(t,n)=>t[e](r,n))});c(e,{invokeAsync:(t,e,r)=>Q(t,async(t,n)=>t[e](r,n))});const at=(t,e,r,n,s)=>{if(t[s]===n)return!0};c(e,{findIndex:(t,e,r="id")=>{const n=t.findIndex((t,n)=>at(t,0,0,e,r));return-1!==n&&n},findItem:(t,e,r="id")=>{const n=t.find((t,n)=>at(t,0,0,e,r));return-1!==n&&n}});c(e,{sortAlphabetical:(t,e)=>t.sort((t,r)=>{const n=t[e],s=r[e];return n<s?-1:n>s?1:0})});c(e,{ary:(t,e)=>(...r)=>t(...r.splice(0,e))});c(e,{curry:(t,e=t.length)=>{const r=[],n=(...s)=>{if(r.push(...s),r.length===e){const e=t(...r);return D(r),e}return n};return n},curryRight:(t,e=t.length)=>{const r=[],n=(...s)=>{if(r.unshift(...s),r.length===e){const e=t(...r);return D(r),e}return n};return n}});c(e,{after:(t,e)=>{let r,n=t;return(...t)=>(null!==n&&n--,n<=0&&(r=e(...t),n=null),r)},before:(t,e)=>{let r,n=t;return(...t)=>(null!==n&&n--,n>=1?r=e(...t):n=null,r)},once:t=>{let e;return(...r)=>(f(e)||(e=t(...r)),e)}});c(e,{noop:()=>{},stubArray:()=>[],stubFalse:()=>!1,stubObject:()=>({}),stubString:()=>"",stubTrue:()=>!0});const it=(t,e)=>{const r=n(t);x(r,(n,s,c,o)=>{e(t[n],n,t,o,r)})},lt=(t,e)=>{const r=n(t);return I(r,(r,n,s,c)=>e(t[r],r,t,c,s))},ut=(t,e,r={})=>(it(t,(t,n,s,c,o)=>{!0===e(t,n,r,s,c,o)&&(r[n]=t)}),r),pt=(t,e,r={})=>(it(t,(t,n,s,c,o)=>{r[n]=e(t,n,r,s,c,o)}),r),ht=(t,e,r={})=>(it(t,(t,n,s,c,o)=>{const a=e(t,n,r,c,o);f(a)&&(r[n]=a)}),r);c(e,{compactMapObject:ht,eachObject:it,filterObject:ut,mapObject:pt,whileObject:lt});const gt=(t,e)=>t.forEach(e),ft=(t,e)=>(r,n,s)=>{let c;if(f(r))return c=d(r)?t:w(r)||O(r)?e:r.forEach?gt:e,c(r,n,s)},yt=ft(I,lt),mt=ft(x,it),dt=ft(N,ut),At=ft(U,pt),bt=ft(L,ht);c(e,{compactMap:bt,each:mt,eachWhile:yt,filter:dt,map:At});c(e,{bindAll:(t,e)=>At(t,t=>O(t)?t.bind(e):t)});c(e,{ifInvoke:(t,...e)=>{if(O(t))return t(...e)}});c(e,{negate:t=>(...e)=>!t(...e)}),c(e,{every:yt});c(e,{over:t=>(...e)=>At(t,t=>t(...e)),overEvery:t=>(...e)=>yt(t,t=>t(...e))});const wt=(t,e)=>setTimeout(t,e),Ot=(t,e)=>setInterval(t,e),jt=(t,e)=>()=>{nt(0,t(()=>{},0),t=>{e(t)})},vt=jt(wt,clearTimeout),St=jt(Ot,clearInterval);c(e,{clearIntervals:St,clearTimers:vt,debounce:(t,e)=>{let r=!1;const n=(...n)=>{!1!==r&&clearTimeout(r),r=wt(()=>{t(...n),r=!1},e)};return n.clear=()=>{r&&(clearTimeout(r),r=!1)},n},interval:Ot,throttle:(t,e)=>{let r,n=!1;const s=(...s)=>{n?r=!0:(t(...s),n=wt(()=>{r&&t(...s),n=!1},e))};return s.clear=()=>{clearTimeout(n),n=!1},s},timer:wt});c(e,{chain:t=>{const e=t=>(e.value=t,e.methods);return c(e,{add:t=>((t,e)=>(mt(e,(e,r)=>{t.methods[r]=(...r)=>(e(t.value,...r),t.methods)}),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e}});c(e,{inAsync:async(t,e)=>H(t,async t=>{await t(e)}),inSync:(t,e)=>mt(t,t=>{t(e)})});c(e,{nthArg:(t=0)=>(...e)=>e[t]});c(e,{reArg:(t,e)=>(...r)=>t(...e.map(t=>r[t]))});c(e,{wrap:(t,e)=>(...r)=>e(t,...r)});c(e,{isNumberEqual:(t,e)=>t===e,isNumberInRange:(t,e,r)=>t>e&&t<r,isZero:t=>0===t});const kt=(t,e)=>{const r=n(t);return I(e,t=>r.includes(t))};c(e,{hasAnyKeys:(t,e)=>{const r=n(t);return Boolean(e.find(t=>r.includes(t)))},hasKeys:kt});c(e,{pick:(t,e,r={})=>(x(e,e=>{r[e]=t[e]}),r)});c(e,{compactKeys:t=>{const e=[];return it(t,(t,r)=>{t&&e.push(r)}),e}});c(e,{isMatchObject:(t,e)=>{const r=n(t);return!!V(r,n(e))&&I(r,r=>t[r]===e[r])}});c(e,{unZipObject:t=>{const e=[],r=[];return it(t,(t,n)=>{e.push(n),r.push(t)}),[e,r]},zipObject:(t,e)=>{const r={};return x(t,(t,n)=>{r[t]=e[n]}),r}});c(e,{invert:(t,e={})=>(it(t,(t,r)=>{e[t]=r}),e)});c(e,{omit:(t,e)=>ut(t,(t,r)=>!e.includes(r))});const Mt=async(t,e)=>{const r=n(t);return await H(r,(n,s,c,o)=>e(t[n],n,t,o,r)),t};c(e,{eachObjectAsync:Mt});c(e,{compactMapObjectAsync:async(t,e,r={})=>(await Mt(t,async(t,n,s,c,o)=>{const a=await e(t,n,r,c,o);f(a)&&(r[n]=a)}),r),mapObjectAsync:async(t,e,r={})=>(await Mt(t,async(t,n,s,c,o)=>{r[n]=await e(t,n,r,s,c,o)}),r)});const Rt=/[-_]/g,Ct=/ (.)/g;c(e,{camelCase:t=>t.toLowerCase().replace(Ct,t=>t.toUpperCase().replace(/ /g,"")),kebabCase:t=>t.replace(Rt," ").trim().toLowerCase().replace(Ct,"-$1"),snakeCase:t=>t.replace(Rt," ").trim().toLowerCase().replace(Ct,"_$1"),upperCase:t=>t.replace(Rt," ").trim().toUpperCase()});const Ft=(t,e=1)=>t.substr(e);c(e,{chunkString:(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),initialString:(t,e=1)=>t.slice(0,-1*e),insertInRange:(t,e,r)=>t.slice(0,e)+r+t.slice(e,t.length),restString:Ft,rightString:(t,e=1)=>t[t.length-e]});c(e,{replaceList:(t,e,r)=>t.replace(new RegExp("\\b"+e.join("|")+"\\b","gi"),r)});const xt=/%(?![\da-f]{2})/gi,Et=/&/g,It=/</g,Nt=/>/g,Ut=/"/g,$t=t=>decodeURIComponent(t.replace(xt,()=>"%25")),Lt=t=>t.replace(Et,"&amp;").replace(It,"&lt;").replace(Nt,"&gt;").replace(Ut,"&quot;");c(e,{htmlEntities:Lt,rawURLDecode:$t,sanitize:t=>Lt($t(t))});const Pt=/\S+/g,Bt=/\w+/g;c(e,{tokenize:t=>t.match(Pt)||[],words:t=>t.match(Bt)||[]});c(e,{truncate:(t,e)=>{const r=t.length;return r>e?((t,e,r)=>{const n=t.split(""),s=n.length;let c,o=r-e;for(;o<s&&o>=0&&(c=n[o]," "!==c);o--);return t.slice(0,o).trim()})(t,e,r):t},truncateRight:(t,e)=>{const r=t.length;return r>e?((t,e,r)=>{const n=t.split(""),s=n.length;let c,o=e;for(;o<s&&o>0&&(c=n[o]," "!==c);o++);return t.substr(o,r).trim()})(t,e,r):t}});const Dt=/ (.)/g,Tt=t=>t[0].toUpperCase(),zt=t=>Tt(t)+Ft(t).toLowerCase();c(e,{upperFirst:t=>Tt(t)+Ft(t),upperFirstAll:t=>t.replace(Dt,t=>t.toUpperCase()),upperFirstLetter:Tt,upperFirstOnly:zt,upperFirstOnlyAll:t=>zt(t.toLowerCase()).replace(Dt,t=>t.toUpperCase())});const qt=(t,e,r=!0)=>(mt(e,(e,n)=>{w(e)&&w(t[n])?qt(t[n],e,r):r&&d(e)&&d(t[n])?t[n].push(...e):t[n]=e}),t);c(e,{assignDeep:qt});const Kt=Function.prototype;c(e,{cacheNativeMethod:function(t){return Kt.call.bind(t)}});c(e,{ifNotEqual:(t,e,r)=>(e&&!f(t[e])&&(t[e]=r),t)});const Wt=(t,e)=>{if(t===e)return!0;if(t.toString()===e.toString())if(w(t)){const r=n(t);if(kt(e,r))return I(r,r=>Wt(t[r],e[r]))}else if(d(t)&&t.length===e.length)return I(t,(t,r)=>Wt(t,e[r]));return!1};c(e,{isEqual:Wt});c(e,{propertyMatch:(t,e,r=n(t))=>I(r,r=>Wt(t[r],e[r]))});const Jt=/\.|\[/,Zt=/]/g,Vt=t=>t.replace(Zt,"").split(Jt);c(e,{toPath:Vt});let _t=0;const Ht=[],Gt=()=>{let t=Ht.shift(Ht);return f(t)||(t=_t,_t++),t};Gt.free=t=>{Ht.push(t)},c(e,{uid:Gt});const Qt=(t,r=e)=>{let n=r;return I(Vt(t),t=>(n=n[t],f(n))),n};c(e,{get:Qt});const Xt=JSON,Yt=Xt.parse,te=Xt.stringify;c(e,{jsonParse:Yt,stringify:te});const ee=(t,e)=>(f(e)&&(ee[t]=e),Qt(t,ee));e.superMethod(ee),c(e,{model:ee});c(e,{promise:t=>new Promise(t)});c(e,{toggle:(t,e,r)=>Wt(e,t)?r:e});const re=t=>(...e)=>r=>{let n=r;return t(e,t=>{n=t(n)}),n},ne=re(x),se=re(E);c(e,{flow:ne,flowRight:se});const ce=t=>(...e)=>async r=>{let n=r;return await t(e,async t=>{n=await t(n)}),n},oe=ce(H),ae=ce(G);return c(e,{flowAsync:oe,flowAsyncRight:ae}),e}));
