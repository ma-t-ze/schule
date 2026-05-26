const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainApplication-DzZ4BxSx.js","assets/MainApplication-DNhlvc9l.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const hm="modulepreload",fm=function(n){return"https://visualizer.matthiasheckel.com/"+n},$c={},dm=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=fm(l),l in $c)return;$c[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":hm,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jl(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const rt={},Ss=[],nn=()=>{},pm=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ql=n=>n.startsWith("onUpdate:"),Bt=Object.assign,ec=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mm=Object.prototype.hasOwnProperty,je=(n,e)=>mm.call(n,e),Pe=Array.isArray,Es=n=>Zo(n)==="[object Map]",kf=n=>Zo(n)==="[object Set]",Ue=n=>typeof n=="function",pt=n=>typeof n=="string",qs=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",Wf=n=>(lt(n)||Ue(n))&&Ue(n.then)&&Ue(n.catch),Xf=Object.prototype.toString,Zo=n=>Xf.call(n),gm=n=>Zo(n).slice(8,-1),qf=n=>Zo(n)==="[object Object]",tc=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,mr=Jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_m=/-(\w)/g,Rn=Jo(n=>n.replace(_m,(e,t)=>t?t.toUpperCase():"")),vm=/\B([A-Z])/g,$s=Jo(n=>n.replace(vm,"-$1").toLowerCase()),Qo=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=Jo(n=>n?`on${Qo(n)}`:""),Ti=(n,e)=>!Object.is(n,e),wo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Oo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},El=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let jc;const $f=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ln(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=pt(i)?Sm(i):ln(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(pt(n)||lt(n))return n}const xm=/;(?![^(]*\))/g,ym=/:([^]+)/,Mm=/\/\*[^]*?\*\//g;function Sm(n){const e={};return n.replace(Mm,"").split(xm).forEach(t=>{if(t){const i=t.split(ym);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Gn(n){let e="";if(pt(n))e=n;else if(Pe(n))for(let t=0;t<n.length;t++){const i=Gn(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tm=Jl(Em);function jf(n){return!!n||n===""}const Fo=n=>pt(n)?n:n==null?"":Pe(n)||lt(n)&&(n.toString===Xf||!Ue(n.toString))?JSON.stringify(n,Yf,2):String(n),Yf=(n,e)=>e&&e.__v_isRef?Yf(n,e.value):Es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ea(i,r)+" =>"]=s,t),{})}:kf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ea(t))}:qs(e)?Ea(e):lt(e)&&!Pe(e)&&!qf(e)?String(e):e,Ea=(n,e="")=>{var t;return qs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bm(n){return new Kf(n)}function Am(n,e=an){e&&e.active&&e.effects.push(n)}function wm(){return an}let Wi;class nc{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Am(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Yi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Rm(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ki()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=xi,t=Wi;try{return xi=!0,Wi=this,this._runnings++,Yc(this),this.fn()}finally{Kc(this),this._runnings--,Wi=t,xi=e}}stop(){var e;this.active&&(Yc(this),Kc(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Rm(n){return n.value}function Yc(n){n._trackId++,n._depsLength=0}function Kc(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Zf(n.deps[e],n);n.deps.length=n._depsLength}}function Zf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let xi=!0,Tl=0;const Jf=[];function Yi(){Jf.push(xi),xi=!1}function Ki(){const n=Jf.pop();xi=n===void 0?!0:n}function ic(){Tl++}function sc(){for(Tl--;!Tl&&bl.length;)bl.shift()()}function Qf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Zf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const bl=[];function ed(n,e,t){ic();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&bl.push(i.scheduler)))}sc()}const td=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Al=new WeakMap,Xi=Symbol(""),wl=Symbol("");function kt(n,e,t){if(xi&&Wi){let i=Al.get(n);i||Al.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=td(()=>i.delete(t))),Qf(Wi,s)}}function Xn(n,e,t,i,s,r){const o=Al.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Pe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!qs(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Pe(n)?tc(t)&&a.push(o.get("length")):(a.push(o.get(Xi)),Es(n)&&a.push(o.get(wl)));break;case"delete":Pe(n)||(a.push(o.get(Xi)),Es(n)&&a.push(o.get(wl)));break;case"set":Es(n)&&a.push(o.get(Xi));break}ic();for(const l of a)l&&ed(l,4);sc()}const Cm=Jl("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qs)),Zc=Pm();function Pm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let r=0,o=this.length;r<o;r++)kt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Yi(),ic();const i=Ke(this)[e].apply(this,t);return sc(),Ki(),i}}),n}function Lm(n){const e=Ke(this);return kt(e,"has",n),e.hasOwnProperty(n)}class id{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Wm:ad:r?od:rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!s){if(o&&je(Zc,t))return Reflect.get(Zc,t,i);if(t==="hasOwnProperty")return Lm}const a=Reflect.get(e,t,i);return(qs(t)?nd.has(t):Cm(t))||(s||kt(e,"get",t),r)?a:Wt(a)?o&&tc(t)?a:a.value:lt(a)?s?cd(a):Nr(a):a}}class sd extends id{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Ns(r);if(!Bo(i)&&!Ns(i)&&(r=Ke(r),i=Ke(i)),!Pe(e)&&Wt(r)&&!Wt(i))return l?!1:(r.value=i,!0)}const o=Pe(e)&&tc(t)?Number(t)<e.length:je(e,t),a=Reflect.set(e,t,i,s);return e===Ke(s)&&(o?Ti(i,r)&&Xn(e,"set",t,i):Xn(e,"add",t,i)),a}deleteProperty(e,t){const i=je(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Xn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!qs(t)||!nd.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",Pe(e)?"length":Xi),Reflect.ownKeys(e)}}class Im extends id{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Nm=new sd,Dm=new Im,Um=new sd(!0),rc=n=>n,ea=n=>Reflect.getPrototypeOf(n);function Gr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Ke(n),r=Ke(e);t||(Ti(e,r)&&kt(s,"get",e),kt(s,"get",r));const{has:o}=ea(s),a=i?rc:t?lc:Er;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function kr(n,e=!1){const t=this.__v_raw,i=Ke(t),s=Ke(n);return e||(Ti(n,s)&&kt(i,"has",n),kt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Wr(n,e=!1){return n=n.__v_raw,!e&&kt(Ke(n),"iterate",Xi),Reflect.get(n,"size",n)}function Jc(n){n=Ke(n);const e=Ke(this);return ea(e).has.call(e,n)||(e.add(n),Xn(e,"add",n,n)),this}function Qc(n,e){e=Ke(e);const t=Ke(this),{has:i,get:s}=ea(t);let r=i.call(t,n);r||(n=Ke(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Ti(e,o)&&Xn(t,"set",n,e):Xn(t,"add",n,e),this}function eu(n){const e=Ke(this),{has:t,get:i}=ea(e);let s=t.call(e,n);s||(n=Ke(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Xn(e,"delete",n,void 0),r}function tu(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&Xn(n,"clear",void 0,void 0),t}function Xr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Ke(o),l=e?rc:n?lc:Er;return!n&&kt(a,"iterate",Xi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function qr(n,e,t){return function(...i){const s=this.__v_raw,r=Ke(s),o=Es(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?rc:e?lc:Er;return!e&&kt(r,"iterate",l?wl:Xi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Qn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Om(){const n={get(r){return Gr(this,r)},get size(){return Wr(this)},has:kr,add:Jc,set:Qc,delete:eu,clear:tu,forEach:Xr(!1,!1)},e={get(r){return Gr(this,r,!1,!0)},get size(){return Wr(this)},has:kr,add:Jc,set:Qc,delete:eu,clear:tu,forEach:Xr(!1,!0)},t={get(r){return Gr(this,r,!0)},get size(){return Wr(this,!0)},has(r){return kr.call(this,r,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:Xr(!0,!1)},i={get(r){return Gr(this,r,!0,!0)},get size(){return Wr(this,!0)},has(r){return kr.call(this,r,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qr(r,!1,!1),t[r]=qr(r,!0,!1),e[r]=qr(r,!1,!0),i[r]=qr(r,!0,!0)}),[n,t,e,i]}const[Fm,Bm,Hm,zm]=Om();function oc(n,e){const t=e?n?zm:Hm:n?Bm:Fm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(je(t,s)&&s in i?t:i,s,r)}const Vm={get:oc(!1,!1)},Gm={get:oc(!1,!0)},km={get:oc(!0,!1)},rd=new WeakMap,od=new WeakMap,ad=new WeakMap,Wm=new WeakMap;function Xm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qm(n){return n.__v_skip||!Object.isExtensible(n)?0:Xm(gm(n))}function Nr(n){return Ns(n)?n:ac(n,!1,Nm,Vm,rd)}function ld(n){return ac(n,!1,Um,Gm,od)}function cd(n){return ac(n,!0,Dm,km,ad)}function ac(n,e,t,i,s){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=qm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ts(n){return Ns(n)?Ts(n.__v_raw):!!(n&&n.__v_isReactive)}function Ns(n){return!!(n&&n.__v_isReadonly)}function Bo(n){return!!(n&&n.__v_isShallow)}function ud(n){return Ts(n)||Ns(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function Hi(n){return Object.isExtensible(n)&&Oo(n,"__v_skip",!0),n}const Er=n=>lt(n)?Nr(n):n,lc=n=>lt(n)?cd(n):n;class hd{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new nc(()=>e(this._value),()=>Ro(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ke(this);return(!e._cacheable||e.effect.dirty)&&Ti(e._value,e._value=e.effect.run())&&Ro(e,4),fd(e),e.effect._dirtyLevel>=2&&Ro(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $m(n,e,t=!1){let i,s;const r=Ue(n);return r?(i=n,s=nn):(i=n.get,s=n.set),new hd(i,s,r||!s,t)}function fd(n){var e;xi&&Wi&&(n=Ke(n),Qf(Wi,(e=n.dep)!=null?e:n.dep=td(()=>n.dep=void 0,n instanceof hd?n:void 0)))}function Ro(n,e=4,t){n=Ke(n);const i=n.dep;i&&ed(i,e)}function Wt(n){return!!(n&&n.__v_isRef===!0)}function li(n){return dd(n,!1)}function jm(n){return dd(n,!0)}function dd(n,e){return Wt(n)?n:new Ym(n,e)}class Ym{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Er(e)}get value(){return fd(this),this._value}set value(e){const t=this.__v_isShallow||Bo(e)||Ns(e);e=t?e:Ke(e),Ti(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Er(e),Ro(this,4))}}function bs(n){return Wt(n)?n.value:n}const Km={get:(n,e,t)=>bs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Wt(s)&&!Wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function pd(n){return Ts(n)?n:new Proxy(n,Km)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(n,e,t,i){try{return i?n(...i):n()}catch(s){ta(s,e,t)}}function pn(n,e,t,i){if(Ue(n)){const r=yi(n,e,t,i);return r&&Wf(r)&&r.catch(o=>{ta(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(pn(n[r],e,t,i));return s}function ta(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){yi(l,null,10,[n,o,a]);return}}Zm(n,t,s,i)}function Zm(n,e,t,i=!0){console.error(n)}let Tr=!1,Rl=!1;const Pt=[];let Tn=0;const As=[];let ci=null,zi=0;const md=Promise.resolve();let cc=null;function gd(n){const e=cc||md;return n?e.then(this?n.bind(this):n):e}function Jm(n){let e=Tn+1,t=Pt.length;for(;e<t;){const i=e+t>>>1,s=Pt[i],r=br(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function uc(n){(!Pt.length||!Pt.includes(n,Tr&&n.allowRecurse?Tn+1:Tn))&&(n.id==null?Pt.push(n):Pt.splice(Jm(n.id),0,n),_d())}function _d(){!Tr&&!Rl&&(Rl=!0,cc=md.then(xd))}function Qm(n){const e=Pt.indexOf(n);e>Tn&&Pt.splice(e,1)}function eg(n){Pe(n)?As.push(...n):(!ci||!ci.includes(n,n.allowRecurse?zi+1:zi))&&As.push(n),_d()}function nu(n,e,t=Tr?Tn+1:0){for(;t<Pt.length;t++){const i=Pt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Pt.splice(t,1),t--,i()}}}function vd(n){if(As.length){const e=[...new Set(As)].sort((t,i)=>br(t)-br(i));if(As.length=0,ci){ci.push(...e);return}for(ci=e,zi=0;zi<ci.length;zi++)ci[zi]();ci=null,zi=0}}const br=n=>n.id==null?1/0:n.id,tg=(n,e)=>{const t=br(n)-br(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function xd(n){Rl=!1,Tr=!0,Pt.sort(tg);try{for(Tn=0;Tn<Pt.length;Tn++){const e=Pt[Tn];e&&e.active!==!1&&yi(e,null,14)}}finally{Tn=0,Pt.length=0,vd(),Tr=!1,cc=null,(Pt.length||As.length)&&xd()}}function ng(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||rt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||rt;f&&(s=t.map(d=>pt(d)?d.trim():d)),h&&(s=t.map(El))}let a,l=i[a=Sa(e)]||i[a=Sa(Rn(e))];!l&&r&&(l=i[a=Sa($s(e))]),l&&pn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pn(c,n,6,s)}}function yd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ue(n)){const l=c=>{const u=yd(c,e,!0);u&&(a=!0,Bt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(lt(n)&&i.set(n,null),null):(Pe(r)?r.forEach(l=>o[l]=null):Bt(o,r),lt(n)&&i.set(n,o),o)}function na(n,e){return!n||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,$s(e))||je(n,e))}let zt=null,ia=null;function Ho(n){const e=zt;return zt=n,ia=n&&n.type.__scopeId||null,e}function Md(n){ia=n}function Sd(){ia=null}function ig(n,e=zt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&mu(-1);const r=Ho(e);let o;try{o=n(...s)}finally{Ho(r),i._d&&mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function iu(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n;let m,p;const E=Ho(n);try{if(t.shapeFlag&4){const A=s||i,N=A;m=Sn(u.call(N,A,h,r,d,f,g)),p=l}else{const A=e;m=Sn(A.length>1?A(r,{attrs:l,slots:a,emit:c}):A(r,null)),p=e.props?l:sg(l)}}catch(A){vr.length=0,ta(A,n,1),m=St(qi)}let x=m;if(p&&_!==!1){const A=Object.keys(p),{shapeFlag:N}=x;A.length&&N&7&&(o&&A.some(Ql)&&(p=rg(p,o)),x=Ds(x,p))}return t.dirs&&(x=Ds(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Ho(E),m}const sg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},rg=(n,e)=>{const t={};for(const i in n)(!Ql(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function og(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!na(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?su(i,o,c):!0:!!o;return!1}function su(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!na(t,r))return!0}return!1}function ag({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const lg="components";function Ar(n,e){return ug(lg,n,!0,e)||n}const cg=Symbol.for("v-ndc");function ug(n,e,t=!0,i=!1){const s=zt||Lt;if(s){const r=s.type;{const a=i_(r,!1);if(a&&(a===e||a===Rn(e)||a===Qo(Rn(e))))return r}const o=ru(s[n]||r[n],e)||ru(s.appContext[n],e);return!o&&i?r:o}}function ru(n,e){return n&&(n[e]||n[Rn(e)]||n[Qo(Rn(e))])}const hg=n=>n.__isSuspense;function fg(n,e){e&&e.pendingBranch?Pe(n)?e.effects.push(...n):e.effects.push(n):eg(n)}const dg=Symbol.for("v-scx"),pg=()=>qn(dg),$r={};function ws(n,e,t){return Ed(n,e,t)}function Ed(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=rt){if(e&&r){const C=e;e=(...R)=>{C(...R),N()}}const l=Lt,c=C=>i===!0?C:ki(C,i===!1?1:void 0);let u,h=!1,f=!1;if(Wt(n)?(u=()=>n.value,h=Bo(n)):Ts(n)?(u=()=>c(n),h=!0):Pe(n)?(f=!0,h=n.some(C=>Ts(C)||Bo(C)),u=()=>n.map(C=>{if(Wt(C))return C.value;if(Ts(C))return c(C);if(Ue(C))return yi(C,l,2)})):Ue(n)?e?u=()=>yi(n,l,2):u=()=>(d&&d(),pn(n,l,3,[g])):u=nn,e&&i){const C=u;u=()=>ki(C())}let d,g=C=>{d=x.onStop=()=>{yi(C,l,4),d=x.onStop=void 0}},_;if(la)if(g=nn,e?t&&pn(e,l,3,[u(),f?[]:void 0,g]):u(),s==="sync"){const C=pg();_=C.__watcherHandles||(C.__watcherHandles=[])}else return nn;let m=f?new Array(n.length).fill($r):$r;const p=()=>{if(!(!x.active||!x.dirty))if(e){const C=x.run();(i||h||(f?C.some((R,U)=>Ti(R,m[U])):Ti(C,m)))&&(d&&d(),pn(e,l,3,[C,m===$r?void 0:f&&m[0]===$r?[]:m,g]),m=C)}else x.run()};p.allowRecurse=!!e;let E;s==="sync"?E=p:s==="post"?E=()=>Ht(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),E=()=>uc(p));const x=new nc(u,nn,E),A=wm(),N=()=>{x.stop(),A&&ec(A.effects,x)};return e?t?p():m=x.run():s==="post"?Ht(x.run.bind(x),l&&l.suspense):x.run(),_&&_.push(N),N}function mg(n,e,t){const i=this.proxy,s=pt(n)?n.includes(".")?Td(i,n):()=>i[n]:n.bind(i,i);let r;Ue(e)?r=e:(r=e.handler,t=e);const o=Ur(this),a=Ed(s,r.bind(i),t);return o(),a}function Td(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ki(n,e,t=0,i){if(!lt(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),Wt(n))ki(n.value,e,t,i);else if(Pe(n))for(let s=0;s<n.length;s++)ki(n[s],e,t,i);else if(kf(n)||Es(n))n.forEach(s=>{ki(s,e,t,i)});else if(qf(n))for(const s in n)ki(n[s],e,t,i);return n}function ou(n,e){if(zt===null)return n;const t=ca(zt)||zt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=rt]=e[s];r&&(Ue(r)&&(r={mounted:r,updated:r}),r.deep&&ki(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ri(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Yi(),pn(l,t,8,[n.el,a,n,e]),Ki())}}/*! #__NO_SIDE_EFFECTS__ */function bd(n,e){return Ue(n)?Bt({name:n.name},e,{setup:n}):n}const Co=n=>!!n.type.__asyncLoader,Ad=n=>n.type.__isKeepAlive;function gg(n,e){wd(n,"a",e)}function _g(n,e){wd(n,"da",e)}function wd(n,e,t=Lt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(sa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ad(s.parent.vnode)&&vg(i,e,t,s),s=s.parent}}function vg(n,e,t,i){const s=sa(e,n,i,!0);Rd(()=>{ec(i[e],s)},t)}function sa(n,e,t=Lt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Yi();const a=Ur(t),l=pn(e,t,n,o);return a(),Ki(),l});return i?s.unshift(r):s.push(r),r}}const Yn=n=>(e,t=Lt)=>(!la||n==="sp")&&sa(n,(...i)=>e(...i),t),xg=Yn("bm"),hc=Yn("m"),yg=Yn("bu"),Mg=Yn("u"),fc=Yn("bum"),Rd=Yn("um"),Sg=Yn("sp"),Eg=Yn("rtg"),Tg=Yn("rtc");function bg(n,e=Lt){sa("ec",n,e)}function Ag(n,e,t,i){let s;const r=t;if(Pe(n)||pt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(lt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}const Cl=n=>n?Vd(n)?ca(n)||n.proxy:Cl(n.parent):null,gr=Bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cl(n.parent),$root:n=>Cl(n.root),$emit:n=>n.emit,$options:n=>Pd(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,uc(n.update)}),$nextTick:n=>n.n||(n.n=gd.bind(n.proxy)),$watch:n=>mg.bind(n)}),Ta=(n,e)=>n!==rt&&!n.__isScriptSetup&&je(n,e),wg={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ta(i,e))return o[e]=1,i[e];if(s!==rt&&je(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&je(c,e))return o[e]=3,r[e];if(t!==rt&&je(t,e))return o[e]=4,t[e];Pl&&(o[e]=0)}}const u=gr[e];let h,f;if(u)return e==="$attrs"&&kt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==rt&&je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ta(s,e)?(s[e]=t,!0):i!==rt&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==rt&&je(n,o)||Ta(e,o)||(a=r[0])&&je(a,o)||je(i,o)||je(gr,o)||je(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function au(n){return Pe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pl=!0;function Rg(n){const e=Pd(n),t=n.proxy,i=n.ctx;Pl=!1,e.beforeCreate&&lu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:x,unmounted:A,render:N,renderTracked:C,renderTriggered:R,errorCaptured:U,serverPrefetch:S,expose:M,inheritAttrs:W,components:Z,directives:O,filters:J}=e;if(c&&Cg(c,i,null),o)for(const oe in o){const X=o[oe];Ue(X)&&(i[oe]=X.bind(t))}if(s){const oe=s.call(t,t);lt(oe)&&(n.data=Nr(oe))}if(Pl=!0,r)for(const oe in r){const X=r[oe],ue=Ue(X)?X.bind(t,t):Ue(X.get)?X.get.bind(t,t):nn,ce=!Ue(X)&&Ue(X.set)?X.set.bind(t):nn,ye=tn({get:ue,set:ce});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ae=>ye.value=Ae})}if(a)for(const oe in a)Cd(a[oe],i,t,oe);if(l){const oe=Ue(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(X=>{Po(X,oe[X])})}u&&lu(u,n,"c");function ie(oe,X){Pe(X)?X.forEach(ue=>oe(ue.bind(t))):X&&oe(X.bind(t))}if(ie(xg,h),ie(hc,f),ie(yg,d),ie(Mg,g),ie(gg,_),ie(_g,m),ie(bg,U),ie(Tg,C),ie(Eg,R),ie(fc,E),ie(Rd,A),ie(Sg,S),Pe(M))if(M.length){const oe=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(oe,X,{get:()=>t[X],set:ue=>t[X]=ue})})}else n.exposed||(n.exposed={});N&&n.render===nn&&(n.render=N),W!=null&&(n.inheritAttrs=W),Z&&(n.components=Z),O&&(n.directives=O)}function Cg(n,e,t=nn){Pe(n)&&(n=Ll(n));for(const i in n){const s=n[i];let r;lt(s)?"default"in s?r=qn(s.from||i,s.default,!0):r=qn(s.from||i):r=qn(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lu(n,e,t){pn(Pe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cd(n,e,t,i){const s=i.includes(".")?Td(t,i):()=>t[i];if(pt(n)){const r=e[n];Ue(r)&&ws(s,r)}else if(Ue(n))ws(s,n.bind(t));else if(lt(n))if(Pe(n))n.forEach(r=>Cd(r,e,t,i));else{const r=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(r)&&ws(s,r,n)}}function Pd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>zo(l,c,o,!0)),zo(l,e,o)),lt(e)&&r.set(e,l),l}function zo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&zo(n,r,t,!0),s&&s.forEach(o=>zo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Pg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Pg={data:cu,props:uu,emits:uu,methods:fr,computed:fr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:fr,directives:fr,watch:Ig,provide:cu,inject:Lg};function cu(n,e){return e?n?function(){return Bt(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function Lg(n,e){return fr(Ll(n),Ll(e))}function Ll(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function fr(n,e){return n?Bt(Object.create(null),n,e):e}function uu(n,e){return n?Pe(n)&&Pe(e)?[...new Set([...n,...e])]:Bt(Object.create(null),au(n),au(e??{})):e}function Ig(n,e){if(!n)return e;if(!e)return n;const t=Bt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Ld(){return{app:null,config:{isNativeTag:pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ng=0;function Dg(n,e){return function(i,s=null){Ue(i)||(i=Bt({},i)),s!=null&&!lt(s)&&(s=null);const r=Ld(),o=new WeakSet;let a=!1;const l=r.app={_uid:Ng++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:r_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=St(i,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ca(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=_r;_r=l;try{return c()}finally{_r=u}}};return l}}let _r=null;function Po(n,e){if(Lt){let t=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===t&&(t=Lt.provides=Object.create(i)),t[n]=e}}function qn(n,e,t=!1){const i=Lt||zt;if(i||_r){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:_r._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ue(e)?e.call(i&&i.proxy):e}}function Ug(n,e,t,i=!1){const s={},r={};Oo(r,oa,1),n.propsDefaults=Object.create(null),Id(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ld(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Og(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ke(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(na(n.emitsOptions,f))continue;const d=e[f];if(l)if(je(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Rn(f);s[g]=Il(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Id(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!je(e,h)&&((u=$s(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Il(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!je(e,h))&&(delete r[h],c=!0)}c&&Xn(n,"set","$attrs")}function Id(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(mr(l))continue;const c=e[l];let u;s&&je(s,u=Rn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ke(t),c=a||rt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Il(s,l,h,c[h],n,!je(c,h))}}return o}function Il(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ur(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===$s(t))&&(i=!0))}return i}function Nd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ue(n)){const u=h=>{l=!0;const[f,d]=Nd(h,e,!0);Bt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return lt(n)&&i.set(n,Ss),Ss;if(Pe(r))for(let u=0;u<r.length;u++){const h=Rn(r[u]);hu(h)&&(o[h]=rt)}else if(r)for(const u in r){const h=Rn(u);if(hu(h)){const f=r[u],d=o[h]=Pe(f)||Ue(f)?{type:f}:Bt({},f);if(d){const g=pu(Boolean,d.type),_=pu(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||je(d,"default"))&&a.push(h)}}}const c=[o,a];return lt(n)&&i.set(n,c),c}function hu(n){return n[0]!=="$"&&!mr(n)}function fu(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function du(n,e){return fu(n)===fu(e)}function pu(n,e){return Pe(e)?e.findIndex(t=>du(t,n)):Ue(e)&&du(e,n)?0:-1}const Dd=n=>n[0]==="_"||n==="$stable",dc=n=>Pe(n)?n.map(Sn):[Sn(n)],Fg=(n,e,t)=>{if(e._n)return e;const i=ig((...s)=>dc(e(...s)),t);return i._c=!1,i},Ud=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Dd(s))continue;const r=n[s];if(Ue(r))e[s]=Fg(s,r,i);else if(r!=null){const o=dc(r);e[s]=()=>o}}},Od=(n,e)=>{const t=dc(e);n.slots.default=()=>t},Bg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),Oo(e,"_",t)):Ud(e,n.slots={})}else n.slots={},e&&Od(n,e);Oo(n.slots,oa,1)},Hg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Bt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Ud(e,s)),o=e}else e&&(Od(n,e),o={default:1});if(r)for(const a in s)!Dd(a)&&o[a]==null&&delete s[a]};function Nl(n,e,t,i,s=!1){if(Pe(n)){n.forEach((f,d)=>Nl(f,e&&(Pe(e)?e[d]:e),t,i,s));return}if(Co(i)&&!s)return;const r=i.shapeFlag&4?ca(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,je(h,c)&&(h[c]=null)):Wt(c)&&(c.value=null)),Ue(l))yi(l,a,12,[o,u]);else{const f=pt(l),d=Wt(l);if(f||d){const g=()=>{if(n.f){const _=f?je(h,l)?h[l]:u[l]:l.value;s?Pe(_)&&ec(_,r):Pe(_)?_.includes(r)||_.push(r):f?(u[l]=[r],je(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,je(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ht(g,t)):g()}}}const Ht=fg;function zg(n){return Vg(n)}function Vg(n,e){const t=$f();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=nn,insertStaticContent:g}=n,_=(b,w,H,V=null,K=null,y=null,v=void 0,L=null,F=!!w.dynamicChildren)=>{if(b===w)return;b&&!nr(b,w)&&(V=B(b),Ae(b,K,y,!0),b=null),w.patchFlag===-2&&(F=!1,w.dynamicChildren=null);const{type:D,ref:k,shapeFlag:ae}=w;switch(D){case ra:m(b,w,H,V);break;case qi:p(b,w,H,V);break;case Lo:b==null&&E(w,H,V,v);break;case en:Z(b,w,H,V,K,y,v,L,F);break;default:ae&1?N(b,w,H,V,K,y,v,L,F):ae&6?O(b,w,H,V,K,y,v,L,F):(ae&64||ae&128)&&D.process(b,w,H,V,K,y,v,L,F,he)}k!=null&&K&&Nl(k,b&&b.ref,y,w||b,!w)},m=(b,w,H,V)=>{if(b==null)i(w.el=a(w.children),H,V);else{const K=w.el=b.el;w.children!==b.children&&c(K,w.children)}},p=(b,w,H,V)=>{b==null?i(w.el=l(w.children||""),H,V):w.el=b.el},E=(b,w,H,V)=>{[b.el,b.anchor]=g(b.children,w,H,V,b.el,b.anchor)},x=({el:b,anchor:w},H,V)=>{let K;for(;b&&b!==w;)K=f(b),i(b,H,V),b=K;i(w,H,V)},A=({el:b,anchor:w})=>{let H;for(;b&&b!==w;)H=f(b),s(b),b=H;s(w)},N=(b,w,H,V,K,y,v,L,F)=>{w.type==="svg"?v="svg":w.type==="math"&&(v="mathml"),b==null?C(w,H,V,K,y,v,L,F):S(b,w,K,y,v,L,F)},C=(b,w,H,V,K,y,v,L)=>{let F,D;const{props:k,shapeFlag:ae,transition:$,dirs:le}=b;if(F=b.el=o(b.type,y,k&&k.is,k),ae&8?u(F,b.children):ae&16&&U(b.children,F,null,V,K,ba(b,y),v,L),le&&Ri(b,null,V,"created"),R(F,b,b.scopeId,v,V),k){for(const re in k)re!=="value"&&!mr(re)&&r(F,re,null,k[re],y,b.children,V,K,pe);"value"in k&&r(F,"value",null,k.value,y),(D=k.onVnodeBeforeMount)&&Mn(D,V,b)}le&&Ri(b,null,V,"beforeMount");const de=Gg(K,$);de&&$.beforeEnter(F),i(F,w,H),((D=k&&k.onVnodeMounted)||de||le)&&Ht(()=>{D&&Mn(D,V,b),de&&$.enter(F),le&&Ri(b,null,V,"mounted")},K)},R=(b,w,H,V,K)=>{if(H&&d(b,H),V)for(let y=0;y<V.length;y++)d(b,V[y]);if(K){let y=K.subTree;if(w===y){const v=K.vnode;R(b,v,v.scopeId,v.slotScopeIds,K.parent)}}},U=(b,w,H,V,K,y,v,L,F=0)=>{for(let D=F;D<b.length;D++){const k=b[D]=L?ui(b[D]):Sn(b[D]);_(null,k,w,H,V,K,y,v,L)}},S=(b,w,H,V,K,y,v)=>{const L=w.el=b.el;let{patchFlag:F,dynamicChildren:D,dirs:k}=w;F|=b.patchFlag&16;const ae=b.props||rt,$=w.props||rt;let le;if(H&&Ci(H,!1),(le=$.onVnodeBeforeUpdate)&&Mn(le,H,w,b),k&&Ri(w,b,H,"beforeUpdate"),H&&Ci(H,!0),D?M(b.dynamicChildren,D,L,H,V,ba(w,K),y):v||X(b,w,L,null,H,V,ba(w,K),y,!1),F>0){if(F&16)W(L,w,ae,$,H,V,K);else if(F&2&&ae.class!==$.class&&r(L,"class",null,$.class,K),F&4&&r(L,"style",ae.style,$.style,K),F&8){const de=w.dynamicProps;for(let re=0;re<de.length;re++){const fe=de[re],Se=ae[fe],xe=$[fe];(xe!==Se||fe==="value")&&r(L,fe,Se,xe,K,b.children,H,V,pe)}}F&1&&b.children!==w.children&&u(L,w.children)}else!v&&D==null&&W(L,w,ae,$,H,V,K);((le=$.onVnodeUpdated)||k)&&Ht(()=>{le&&Mn(le,H,w,b),k&&Ri(w,b,H,"updated")},V)},M=(b,w,H,V,K,y,v)=>{for(let L=0;L<w.length;L++){const F=b[L],D=w[L],k=F.el&&(F.type===en||!nr(F,D)||F.shapeFlag&70)?h(F.el):H;_(F,D,k,null,V,K,y,v,!0)}},W=(b,w,H,V,K,y,v)=>{if(H!==V){if(H!==rt)for(const L in H)!mr(L)&&!(L in V)&&r(b,L,H[L],null,v,w.children,K,y,pe);for(const L in V){if(mr(L))continue;const F=V[L],D=H[L];F!==D&&L!=="value"&&r(b,L,D,F,v,w.children,K,y,pe)}"value"in V&&r(b,"value",H.value,V.value,v)}},Z=(b,w,H,V,K,y,v,L,F)=>{const D=w.el=b?b.el:a(""),k=w.anchor=b?b.anchor:a("");let{patchFlag:ae,dynamicChildren:$,slotScopeIds:le}=w;le&&(L=L?L.concat(le):le),b==null?(i(D,H,V),i(k,H,V),U(w.children||[],H,k,K,y,v,L,F)):ae>0&&ae&64&&$&&b.dynamicChildren?(M(b.dynamicChildren,$,H,K,y,v,L),(w.key!=null||K&&w===K.subTree)&&Fd(b,w,!0)):X(b,w,H,k,K,y,v,L,F)},O=(b,w,H,V,K,y,v,L,F)=>{w.slotScopeIds=L,b==null?w.shapeFlag&512?K.ctx.activate(w,H,V,v,F):J(w,H,V,K,y,v,F):te(b,w,F)},J=(b,w,H,V,K,y,v)=>{const L=b.component=Jg(b,V,K);if(Ad(b)&&(L.ctx.renderer=he),Qg(L),L.asyncDep){if(K&&K.registerDep(L,ie),!b.el){const F=L.subTree=St(qi);p(null,F,w,H)}}else ie(L,b,w,H,K,y,v)},te=(b,w,H)=>{const V=w.component=b.component;if(og(b,w,H))if(V.asyncDep&&!V.asyncResolved){oe(V,w,H);return}else V.next=w,Qm(V.update),V.effect.dirty=!0,V.update();else w.el=b.el,V.vnode=w},ie=(b,w,H,V,K,y,v)=>{const L=()=>{if(b.isMounted){let{next:k,bu:ae,u:$,parent:le,vnode:de}=b;{const Me=Bd(b);if(Me){k&&(k.el=de.el,oe(b,k,v)),Me.asyncDep.then(()=>{b.isUnmounted||L()});return}}let re=k,fe;Ci(b,!1),k?(k.el=de.el,oe(b,k,v)):k=de,ae&&wo(ae),(fe=k.props&&k.props.onVnodeBeforeUpdate)&&Mn(fe,le,k,de),Ci(b,!0);const Se=iu(b),xe=b.subTree;b.subTree=Se,_(xe,Se,h(xe.el),B(xe),b,K,y),k.el=Se.el,re===null&&ag(b,Se.el),$&&Ht($,K),(fe=k.props&&k.props.onVnodeUpdated)&&Ht(()=>Mn(fe,le,k,de),K)}else{let k;const{el:ae,props:$}=w,{bm:le,m:de,parent:re}=b,fe=Co(w);Ci(b,!1),le&&wo(le),!fe&&(k=$&&$.onVnodeBeforeMount)&&Mn(k,re,w),Ci(b,!0);{const Se=b.subTree=iu(b);_(null,Se,H,V,b,K,y),w.el=Se.el}if(de&&Ht(de,K),!fe&&(k=$&&$.onVnodeMounted)){const Se=w;Ht(()=>Mn(k,re,Se),K)}(w.shapeFlag&256||re&&Co(re.vnode)&&re.vnode.shapeFlag&256)&&b.a&&Ht(b.a,K),b.isMounted=!0,w=H=V=null}},F=b.effect=new nc(L,nn,()=>uc(D),b.scope),D=b.update=()=>{F.dirty&&F.run()};D.id=b.uid,Ci(b,!0),D()},oe=(b,w,H)=>{w.component=b;const V=b.vnode.props;b.vnode=w,b.next=null,Og(b,w.props,V,H),Hg(b,w.children,H),Yi(),nu(b),Ki()},X=(b,w,H,V,K,y,v,L,F=!1)=>{const D=b&&b.children,k=b?b.shapeFlag:0,ae=w.children,{patchFlag:$,shapeFlag:le}=w;if($>0){if($&128){ce(D,ae,H,V,K,y,v,L,F);return}else if($&256){ue(D,ae,H,V,K,y,v,L,F);return}}le&8?(k&16&&pe(D,K,y),ae!==D&&u(H,ae)):k&16?le&16?ce(D,ae,H,V,K,y,v,L,F):pe(D,K,y,!0):(k&8&&u(H,""),le&16&&U(ae,H,V,K,y,v,L,F))},ue=(b,w,H,V,K,y,v,L,F)=>{b=b||Ss,w=w||Ss;const D=b.length,k=w.length,ae=Math.min(D,k);let $;for($=0;$<ae;$++){const le=w[$]=F?ui(w[$]):Sn(w[$]);_(b[$],le,H,null,K,y,v,L,F)}D>k?pe(b,K,y,!0,!1,ae):U(w,H,V,K,y,v,L,F,ae)},ce=(b,w,H,V,K,y,v,L,F)=>{let D=0;const k=w.length;let ae=b.length-1,$=k-1;for(;D<=ae&&D<=$;){const le=b[D],de=w[D]=F?ui(w[D]):Sn(w[D]);if(nr(le,de))_(le,de,H,null,K,y,v,L,F);else break;D++}for(;D<=ae&&D<=$;){const le=b[ae],de=w[$]=F?ui(w[$]):Sn(w[$]);if(nr(le,de))_(le,de,H,null,K,y,v,L,F);else break;ae--,$--}if(D>ae){if(D<=$){const le=$+1,de=le<k?w[le].el:V;for(;D<=$;)_(null,w[D]=F?ui(w[D]):Sn(w[D]),H,de,K,y,v,L,F),D++}}else if(D>$)for(;D<=ae;)Ae(b[D],K,y,!0),D++;else{const le=D,de=D,re=new Map;for(D=de;D<=$;D++){const Le=w[D]=F?ui(w[D]):Sn(w[D]);Le.key!=null&&re.set(Le.key,D)}let fe,Se=0;const xe=$-de+1;let Me=!1,We=0;const ke=new Array(xe);for(D=0;D<xe;D++)ke[D]=0;for(D=le;D<=ae;D++){const Le=b[D];if(Se>=xe){Ae(Le,K,y,!0);continue}let $e;if(Le.key!=null)$e=re.get(Le.key);else for(fe=de;fe<=$;fe++)if(ke[fe-de]===0&&nr(Le,w[fe])){$e=fe;break}$e===void 0?Ae(Le,K,y,!0):(ke[$e-de]=D+1,$e>=We?We=$e:Me=!0,_(Le,w[$e],H,null,K,y,v,L,F),Se++)}const Ye=Me?kg(ke):Ss;for(fe=Ye.length-1,D=xe-1;D>=0;D--){const Le=de+D,$e=w[Le],Ee=Le+1<k?w[Le+1].el:V;ke[D]===0?_(null,$e,H,Ee,K,y,v,L,F):Me&&(fe<0||D!==Ye[fe]?ye($e,H,Ee,2):fe--)}}},ye=(b,w,H,V,K=null)=>{const{el:y,type:v,transition:L,children:F,shapeFlag:D}=b;if(D&6){ye(b.component.subTree,w,H,V);return}if(D&128){b.suspense.move(w,H,V);return}if(D&64){v.move(b,w,H,he);return}if(v===en){i(y,w,H);for(let ae=0;ae<F.length;ae++)ye(F[ae],w,H,V);i(b.anchor,w,H);return}if(v===Lo){x(b,w,H);return}if(V!==2&&D&1&&L)if(V===0)L.beforeEnter(y),i(y,w,H),Ht(()=>L.enter(y),K);else{const{leave:ae,delayLeave:$,afterLeave:le}=L,de=()=>i(y,w,H),re=()=>{ae(y,()=>{de(),le&&le()})};$?$(y,de,re):re()}else i(y,w,H)},Ae=(b,w,H,V=!1,K=!1)=>{const{type:y,props:v,ref:L,children:F,dynamicChildren:D,shapeFlag:k,patchFlag:ae,dirs:$}=b;if(L!=null&&Nl(L,null,H,b,!0),k&256){w.ctx.deactivate(b);return}const le=k&1&&$,de=!Co(b);let re;if(de&&(re=v&&v.onVnodeBeforeUnmount)&&Mn(re,w,b),k&6)se(b.component,H,V);else{if(k&128){b.suspense.unmount(H,V);return}le&&Ri(b,null,w,"beforeUnmount"),k&64?b.type.remove(b,w,H,K,he,V):D&&(y!==en||ae>0&&ae&64)?pe(D,w,H,!1,!0):(y===en&&ae&384||!K&&k&16)&&pe(F,w,H),V&&Xe(b)}(de&&(re=v&&v.onVnodeUnmounted)||le)&&Ht(()=>{re&&Mn(re,w,b),le&&Ri(b,null,w,"unmounted")},H)},Xe=b=>{const{type:w,el:H,anchor:V,transition:K}=b;if(w===en){Q(H,V);return}if(w===Lo){A(b);return}const y=()=>{s(H),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(b.shapeFlag&1&&K&&!K.persisted){const{leave:v,delayLeave:L}=K,F=()=>v(H,y);L?L(b.el,y,F):F()}else y()},Q=(b,w)=>{let H;for(;b!==w;)H=f(b),s(b),b=H;s(w)},se=(b,w,H)=>{const{bum:V,scope:K,update:y,subTree:v,um:L}=b;V&&wo(V),K.stop(),y&&(y.active=!1,Ae(v,b,w,H)),L&&Ht(L,w),Ht(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},pe=(b,w,H,V=!1,K=!1,y=0)=>{for(let v=y;v<b.length;v++)Ae(b[v],w,H,V,K)},B=b=>b.shapeFlag&6?B(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el);let ee=!1;const ne=(b,w,H)=>{b==null?w._vnode&&Ae(w._vnode,null,null,!0):_(w._vnode||null,b,w,null,null,null,H),ee||(ee=!0,nu(),vd(),ee=!1),w._vnode=b},he={p:_,um:Ae,m:ye,r:Xe,mt:J,mc:U,pc:X,pbc:M,n:B,o:n};return{render:ne,hydrate:void 0,createApp:Dg(ne)}}function ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ci({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Gg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fd(n,e,t=!1){const i=n.children,s=e.children;if(Pe(i)&&Pe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ui(s[r]),a.el=o.el),t||Fd(o,a)),a.type===ra&&(a.el=o.el)}}function kg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Bd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bd(e)}const Wg=n=>n.__isTeleport,en=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),qi=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),vr=[];let fn=null;function yt(n=!1){vr.push(fn=n?null:[])}function Xg(){vr.pop(),fn=vr[vr.length-1]||null}let wr=1;function mu(n){wr+=n}function Hd(n){return n.dynamicChildren=wr>0?fn||Ss:null,Xg(),wr>0&&fn&&fn.push(n),n}function Ut(n,e,t,i,s,r){return Hd(Ie(n,e,t,i,s,r,!0))}function pc(n,e,t,i,s){return Hd(St(n,e,t,i,s,!0))}function Dl(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const oa="__vInternal",zd=({key:n})=>n??null,Io=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||Wt(n)||Ue(n)?{i:zt,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,s=null,r=n===en?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zd(e),ref:e&&Io(e),scopeId:ia,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:zt};return a?(mc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),wr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const St=qg;function qg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===cg)&&(n=qi),Dl(n)){const a=Ds(n,e,!0);return t&&mc(a,t),wr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag|=-2,a}if(s_(n)&&(n=n.__vccOpts),e){e=$g(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=Gn(a)),lt(l)&&(ud(l)&&!Pe(l)&&(l=Bt({},l)),e.style=ln(l))}const o=pt(n)?1:hg(n)?128:Wg(n)?64:lt(n)?4:Ue(n)?2:0;return Ie(n,e,t,i,s,o,r,!0)}function $g(n){return n?ud(n)||oa in n?Bt({},n):n:null}function Ds(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?Yg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&zd(a),ref:e&&e.ref?t&&s?Pe(s)?s.concat(Io(e)):[s,Io(e)]:Io(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==en?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ds(n.ssContent),ssFallback:n.ssFallback&&Ds(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function jg(n=" ",e=0){return St(ra,null,n,e)}function Dr(n,e){const t=St(Lo,null,n);return t.staticCount=e,t}function aa(n="",e=!1){return e?(yt(),pc(qi,null,n)):St(qi,null,n)}function Sn(n){return n==null||typeof n=="boolean"?St(qi):Pe(n)?St(en,null,n.slice()):typeof n=="object"?ui(n):St(ra,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ds(n)}function mc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(oa in e)?e._ctx=zt:s===3&&zt&&(zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:zt},t=32):(e=String(e),i&64?(t=16,e=[jg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Yg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Gn([e.class,i.class]));else if(s==="style")e.style=ln([e.style,i.style]);else if(Ko(s)){const r=e[s],o=i[s];o&&r!==o&&!(Pe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Mn(n,e,t,i=null){pn(n,e,7,[t,i])}const Kg=Ld();let Zg=0;function Jg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Kg,r={uid:Zg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nd(i,s),emitsOptions:yd(i,s),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ng.bind(null,r),n.ce&&n.ce(r),r}let Lt=null,Vo,Ul;{const n=$f(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Vo=e("__VUE_INSTANCE_SETTERS__",t=>Lt=t),Ul=e("__VUE_SSR_SETTERS__",t=>la=t)}const Ur=n=>{const e=Lt;return Vo(n),n.scope.on(),()=>{n.scope.off(),Vo(e)}},gu=()=>{Lt&&Lt.scope.off(),Vo(null)};function Vd(n){return n.vnode.shapeFlag&4}let la=!1;function Qg(n,e=!1){e&&Ul(e);const{props:t,children:i}=n.vnode,s=Vd(n);Ug(n,t,s,e),Bg(n,i);const r=s?e_(n,e):void 0;return e&&Ul(!1),r}function e_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Hi(new Proxy(n.ctx,wg));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?n_(n):null,r=Ur(n);Yi();const o=yi(i,n,0,[n.props,s]);if(Ki(),r(),Wf(o)){if(o.then(gu,gu),e)return o.then(a=>{_u(n,a)}).catch(a=>{ta(a,n,0)});n.asyncDep=o}else _u(n,o)}else Gd(n)}function _u(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=pd(e)),Gd(n)}function Gd(n,e,t){const i=n.type;n.render||(n.render=i.render||nn);{const s=Ur(n);Yi();try{Rg(n)}finally{Ki(),s()}}}function t_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return kt(n,"get","$attrs"),e[t]}}))}function n_(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return t_(n)},slots:n.slots,emit:n.emit,expose:e}}function ca(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(pd(Hi(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in gr)return gr[t](n)},has(e,t){return t in e||t in gr}}))}function i_(n,e=!0){return Ue(n)?n.displayName||n.name:n.name||e&&n.__name}function s_(n){return Ue(n)&&"__vccOpts"in n}const tn=(n,e)=>$m(n,e,la);function kd(n,e,t){const i=arguments.length;return i===2?lt(e)&&!Pe(e)?Dl(e)?St(n,null,[e]):St(n,e):St(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Dl(t)&&(t=[t]),St(n,e,t))}const r_="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const o_="http://www.w3.org/2000/svg",a_="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,vu=hi&&hi.createElement("template"),l_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?hi.createElementNS(o_,n):e==="mathml"?hi.createElementNS(a_,n):hi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{vu.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=vu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},c_=Symbol("_vtc");function u_(n,e,t){const i=n[c_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xu=Symbol("_vod"),h_=Symbol("_vsh"),f_=Symbol(""),d_=/(^|;)\s*display\s*:/;function p_(n,e,t){const i=n.style,s=pt(t);let r=!1;if(t&&!s){if(e)if(pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&No(i,a,"")}else for(const o in e)t[o]==null&&No(i,o,"");for(const o in t)o==="display"&&(r=!0),No(i,o,t[o])}else if(s){if(e!==t){const o=i[f_];o&&(t+=";"+o),i.cssText=t,r=d_.test(t)}}else e&&n.removeAttribute("style");xu in n&&(n[xu]=r?i.display:"",n[h_]&&(i.display="none"))}const yu=/\s*!important$/;function No(n,e,t){if(Pe(t))t.forEach(i=>No(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=m_(n,e);yu.test(t)?n.setProperty($s(i),t.replace(yu,""),"important"):n[i]=t}}const Mu=["Webkit","Moz","ms"],Aa={};function m_(n,e){const t=Aa[e];if(t)return t;let i=Rn(e);if(i!=="filter"&&i in n)return Aa[e]=i;i=Qo(i);for(let s=0;s<Mu.length;s++){const r=Mu[s]+i;if(r in n)return Aa[e]=r}return e}const Su="http://www.w3.org/1999/xlink";function g_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Su,e.slice(6,e.length)):n.setAttributeNS(Su,e,t);else{const r=Tm(e);t==null||r&&!jf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function __(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=jf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function xs(n,e,t,i){n.addEventListener(e,t,i)}function v_(n,e,t,i){n.removeEventListener(e,t,i)}const Eu=Symbol("_vei");function x_(n,e,t,i,s=null){const r=n[Eu]||(n[Eu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=y_(e);if(i){const c=r[e]=E_(i,s);xs(n,a,c,l)}else o&&(v_(n,a,o,l),r[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function y_(n){let e;if(Tu.test(n)){e={};let i;for(;i=n.match(Tu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$s(n.slice(2)),e]}let wa=0;const M_=Promise.resolve(),S_=()=>wa||(M_.then(()=>wa=0),wa=Date.now());function E_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;pn(T_(i,t.value),e,5,[i])};return t.value=n,t.attached=S_(),t}function T_(n,e){if(Pe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,b_=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?u_(n,i,c):e==="style"?p_(n,t,i):Ko(e)?Ql(e)||x_(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(n,e,i,c))?__(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),g_(n,e,i,c))};function A_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bu(e)&&Ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bu(e)&&pt(t)?!1:e in n}const Au=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Pe(e)?t=>wo(e,t):e};function w_(n){n.target.composing=!0}function wu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ra=Symbol("_assign"),Ru={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ra]=Au(s);const r=i||s.props&&s.props.type==="number";xs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=El(a)),n[Ra](a)}),t&&xs(n,"change",()=>{n.value=n.value.trim()}),e||(xs(n,"compositionstart",w_),xs(n,"compositionend",wu),xs(n,"change",wu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n[Ra]=Au(r),n.composing)return;const o=s||n.type==="number"?El(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},R_=Bt({patchProp:b_},l_);let Cu;function C_(){return Cu||(Cu=zg(R_))}const P_=(...n)=>{const e=C_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=I_(i);if(!s)return;const r=e._component;!Ue(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,L_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function L_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function I_(n){return pt(n)?document.querySelector(n):n}function N_(){return Wd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Wd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const D_=typeof Proxy=="function",U_="devtools-plugin:setup",O_="plugin:settings:set";let Ji,Ol;function F_(){var n;return Ji!==void 0||(typeof window<"u"&&window.performance?(Ji=!0,Ol=window.performance):typeof globalThis<"u"&&(!((n=globalThis.perf_hooks)===null||n===void 0)&&n.performance)?(Ji=!0,Ol=globalThis.perf_hooks.performance):Ji=!1),Ji}function B_(){return F_()?Ol.now():Date.now()}class H_{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return B_()}},t&&t.on(O_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function z_(n,e){const t=n,i=Wd(),s=N_(),r=D_&&t.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(U_,n,e);else{const o=r?new H_(t,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof document<"u";function V_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Ca(n,e){const t={};for(const i in e){const s=e[i];t[i]=gn(s)?s.map(n):n(s)}return t}const xr=()=>{},gn=Array.isArray,Xd=/#/g,G_=/&/g,k_=/\//g,W_=/=/g,X_=/\?/g,qd=/\+/g,q_=/%5B/g,$_=/%5D/g,$d=/%5E/g,j_=/%60/g,jd=/%7B/g,Y_=/%7C/g,Yd=/%7D/g,K_=/%20/g;function gc(n){return encodeURI(""+n).replace(Y_,"|").replace(q_,"[").replace($_,"]")}function Z_(n){return gc(n).replace(jd,"{").replace(Yd,"}").replace($d,"^")}function Fl(n){return gc(n).replace(qd,"%2B").replace(K_,"+").replace(Xd,"%23").replace(G_,"%26").replace(j_,"`").replace(jd,"{").replace(Yd,"}").replace($d,"^")}function J_(n){return Fl(n).replace(W_,"%3D")}function Q_(n){return gc(n).replace(Xd,"%23").replace(X_,"%3F")}function ev(n){return n==null?"":Q_(n).replace(k_,"%2F")}function Rr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const tv=/\/$/,nv=n=>n.replace(tv,"");function Pa(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ov(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Rr(o)}}function iv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Pu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function sv(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Us(e.matched[i],t.matched[s])&&Kd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Us(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Kd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!rv(n[t],e[t]))return!1;return!0}function rv(n,e){return gn(n)?Lu(n,e):gn(e)?Lu(e,n):n===e}function Lu(n,e){return gn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ov(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}var Cr;(function(n){n.pop="pop",n.push="push"})(Cr||(Cr={}));var yr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(yr||(yr={}));function av(n){if(!n)if(ys){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),nv(n)}const lv=/^[^#]+#/;function cv(n,e){return n.replace(lv,"#")+e}function uv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ua=()=>({left:window.scrollX,top:window.scrollY});function hv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=uv(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Iu(n,e){return(history.state?history.state.position-e:-1)+n}const Bl=new Map;function fv(n,e){Bl.set(n,e)}function dv(n){const e=Bl.get(n);return Bl.delete(n),e}let pv=()=>location.protocol+"//"+location.host;function Zd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Pu(l,"")}return Pu(t,n)+i+s}function mv(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Zd(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:Cr.pop,direction:m?m>0?yr.forward:yr.back:yr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Je({},f.state,{scroll:ua()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Nu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ua():null}}function gv(n){const{history:e,location:t}=window,i={value:Zd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:pv()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=Je({},e.state,Nu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Je({},s.value,e.state,{forward:l,scroll:ua()});r(u.current,u,!0);const h=Je({},Nu(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function _v(n){n=av(n);const e=gv(n),t=mv(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Je({location:"",base:n,go:i,createHref:cv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vv(n){return typeof n=="string"||n&&typeof n=="object"}function Jd(n){return typeof n=="string"||typeof n=="symbol"}const ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qd=Symbol("");var Du;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Du||(Du={}));function Os(n,e){return Je(new Error,{type:n,[Qd]:!0},e)}function Nn(n,e){return n instanceof Error&&Qd in n&&(e==null||!!(n.type&e))}const Uu="[^/]+?",xv={sensitive:!1,strict:!1,start:!0,end:!0},yv=/[.+*?^${}()[\]/\\]/g;function Mv(n,e){const t=Je({},xv,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(yv,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const E=p||Uu;if(E!==Uu){d+=10;try{new RegExp(`(${E})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+A.message)}}let x=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,d+=20,m&&(d+=-8),_&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(gn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=gn(p)?p.join("/"):p;if(!E)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Sv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ev(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Sv(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Ou(i))return 1;if(Ou(s))return-1}return s.length-i.length}function Ou(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Tv={type:0,value:""},bv=/[a-zA-Z0-9_]/;function Av(n){if(!n)return[[]];if(n==="/")return[[Tv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:bv.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function wv(n,e,t){const i=Mv(Av(n.path),t),s=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rv(n,e){const t=[],i=new Map;e=Hu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,g=Cv(u);g.aliasOf=f&&f.record;const _=Hu(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of x)m.push(Je({},g,{components:f?f.record.components:g.components,path:A,aliasOf:f?f.record:g}))}let p,E;for(const x of m){const{path:A}=x;if(h&&A[0]!=="/"){const N=h.record.path,C=N[N.length-1]==="/"?"":"/";x.path=h.record.path+(A&&C+A)}if(p=wv(x,h,_),f?f.alias.push(p):(E=E||p,E!==p&&E.alias.push(p),d&&u.name&&!Bu(p)&&o(u.name)),g.children){const N=g.children;for(let C=0;C<N.length;C++)r(N[C],p,f&&f.children[C])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return E?()=>{o(E)}:xr}function o(u){if(Jd(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Ev(u,t[h])>=0&&(u.record.path!==t[h].record.path||!ep(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Bu(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Os(1,{location:u});_=f.record.name,d=Je(Fu(h.params,f.keys.filter(E=>!E.optional).concat(f.parent?f.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),u.params&&Fu(u.params,f.keys.map(E=>E.name))),g=f.stringify(d)}else if(u.path!=null)g=u.path,f=t.find(E=>E.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?i.get(h.name):t.find(E=>E.re.test(h.path)),!f)throw Os(1,{location:u,currentLocation:h});_=f.record.name,d=Je({},h.params,u.params),g=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:Lv(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Fu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Cv(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Pv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Pv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Bu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Lv(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function Hu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ep(n,e){return e.children.some(t=>t===n||ep(n,t))}function Iv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(qd," "),o=r.indexOf("="),a=Rr(o<0?r:r.slice(0,o)),l=o<0?null:Rr(r.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zu(n){let e="";for(let t in n){const i=n[t];if(t=J_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(gn(i)?i.map(r=>r&&Fl(r)):[i&&Fl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Nv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Dv=Symbol(""),Vu=Symbol(""),_c=Symbol(""),tp=Symbol(""),Hl=Symbol("");function ir(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function fi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Os(4,{from:t,to:e})):f instanceof Error?l(f):vv(f)?l(Os(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function La(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Uv(l)){const u=(l.__vccOpts||l)[e];u&&r.push(fi(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=V_(u)?u.default:u;o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&fi(d,t,i,o,a,s)()}))}}return r}function Uv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Gu(n){const e=qn(_c),t=qn(tp),i=tn(()=>e.resolve(bs(n.to))),s=tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Us.bind(null,u));if(f>-1)return f;const d=ku(l[c-2]);return c>1&&ku(u)===d&&h[h.length-1].path!==d?h.findIndex(Us.bind(null,l[c-2])):f}),r=tn(()=>s.value>-1&&Hv(t.params,i.value.params)),o=tn(()=>s.value>-1&&s.value===t.matched.length-1&&Kd(t.params,i.value.params));function a(l={}){return Bv(l)?e[bs(n.replace)?"replace":"push"](bs(n.to)).catch(xr):Promise.resolve()}return{route:i,href:tn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Ov=bd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gu,setup(n,{slots:e}){const t=Nr(Gu(n)),{options:i}=qn(_c),s=tn(()=>({[Wu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Wu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:kd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Fv=Ov;function Bv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Hv(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!gn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ku(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Wu=(n,e,t)=>n??e??t,zv=bd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=qn(Hl),s=tn(()=>n.route||i.value),r=qn(Vu,0),o=tn(()=>{let c=bs(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=tn(()=>s.value.matched[o.value]);Po(Vu,tn(()=>o.value+1)),Po(Dv,a),Po(Hl,s);const l=li();return ws(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Us(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Xu(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=kd(f,Je({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Xu(t.default,{Component:m,route:c})||m}}});function Xu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Vv=zv;function Gv(n){const e=Rv(n.routes,n),t=n.parseQuery||Iv,i=n.stringifyQuery||zu,s=n.history,r=ir(),o=ir(),a=ir(),l=jm(ei);let c=ei;ys&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ca.bind(null,B=>""+B),h=Ca.bind(null,ev),f=Ca.bind(null,Rr);function d(B,ee){let ne,he;return Jd(B)?(ne=e.getRecordMatcher(B),he=ee):he=B,e.addRoute(he,ne)}function g(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ee){if(ee=Je({},ee||l.value),typeof B=="string"){const H=Pa(t,B,ee.path),V=e.resolve({path:H.path},ee),K=s.createHref(H.fullPath);return Je(H,V,{params:f(V.params),hash:Rr(H.hash),redirectedFrom:void 0,href:K})}let ne;if(B.path!=null)ne=Je({},B,{path:Pa(t,B.path,ee.path).path});else{const H=Je({},B.params);for(const V in H)H[V]==null&&delete H[V];ne=Je({},B,{params:h(H)}),ee.params=h(ee.params)}const he=e.resolve(ne,ee),z=B.hash||"";he.params=u(f(he.params));const b=iv(i,Je({},B,{hash:Z_(z),path:he.path})),w=s.createHref(b);return Je({fullPath:b,hash:z,query:i===zu?Nv(B.query):B.query||{}},he,{redirectedFrom:void 0,href:w})}function E(B){return typeof B=="string"?Pa(t,B,l.value.path):Je({},B)}function x(B,ee){if(c!==B)return Os(8,{from:ee,to:B})}function A(B){return R(B)}function N(B){return A(Je(E(B),{replace:!0}))}function C(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:ne}=ee;let he=typeof ne=="function"?ne(B):ne;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=E(he):{path:he},he.params={}),Je({query:B.query,hash:B.hash,params:he.path!=null?{}:B.params},he)}}function R(B,ee){const ne=c=p(B),he=l.value,z=B.state,b=B.force,w=B.replace===!0,H=C(ne);if(H)return R(Je(E(H),{state:typeof H=="object"?Je({},z,H.state):z,force:b,replace:w}),ee||ne);const V=ne;V.redirectedFrom=ee;let K;return!b&&sv(i,he,ne)&&(K=Os(16,{to:V,from:he}),ye(he,he,!0,!1)),(K?Promise.resolve(K):M(V,he)).catch(y=>Nn(y)?Nn(y,2)?y:ce(y):X(y,V,he)).then(y=>{if(y){if(Nn(y,2))return R(Je({replace:w},E(y.to),{state:typeof y.to=="object"?Je({},z,y.to.state):z,force:b}),ee||V)}else y=Z(V,he,!0,w,z);return W(V,he,y),y})}function U(B,ee){const ne=x(B,ee);return ne?Promise.reject(ne):Promise.resolve()}function S(B){const ee=Q.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function M(B,ee){let ne;const[he,z,b]=kv(B,ee);ne=La(he.reverse(),"beforeRouteLeave",B,ee);for(const H of he)H.leaveGuards.forEach(V=>{ne.push(fi(V,B,ee))});const w=U.bind(null,B,ee);return ne.push(w),pe(ne).then(()=>{ne=[];for(const H of r.list())ne.push(fi(H,B,ee));return ne.push(w),pe(ne)}).then(()=>{ne=La(z,"beforeRouteUpdate",B,ee);for(const H of z)H.updateGuards.forEach(V=>{ne.push(fi(V,B,ee))});return ne.push(w),pe(ne)}).then(()=>{ne=[];for(const H of b)if(H.beforeEnter)if(gn(H.beforeEnter))for(const V of H.beforeEnter)ne.push(fi(V,B,ee));else ne.push(fi(H.beforeEnter,B,ee));return ne.push(w),pe(ne)}).then(()=>(B.matched.forEach(H=>H.enterCallbacks={}),ne=La(b,"beforeRouteEnter",B,ee,S),ne.push(w),pe(ne))).then(()=>{ne=[];for(const H of o.list())ne.push(fi(H,B,ee));return ne.push(w),pe(ne)}).catch(H=>Nn(H,8)?H:Promise.reject(H))}function W(B,ee,ne){a.list().forEach(he=>S(()=>he(B,ee,ne)))}function Z(B,ee,ne,he,z){const b=x(B,ee);if(b)return b;const w=ee===ei,H=ys?history.state:{};ne&&(he||w?s.replace(B.fullPath,Je({scroll:w&&H&&H.scroll},z)):s.push(B.fullPath,z)),l.value=B,ye(B,ee,ne,w),ce()}let O;function J(){O||(O=s.listen((B,ee,ne)=>{if(!se.listening)return;const he=p(B),z=C(he);if(z){R(Je(z,{replace:!0}),he).catch(xr);return}c=he;const b=l.value;ys&&fv(Iu(b.fullPath,ne.delta),ua()),M(he,b).catch(w=>Nn(w,12)?w:Nn(w,2)?(R(w.to,he).then(H=>{Nn(H,20)&&!ne.delta&&ne.type===Cr.pop&&s.go(-1,!1)}).catch(xr),Promise.reject()):(ne.delta&&s.go(-ne.delta,!1),X(w,he,b))).then(w=>{w=w||Z(he,b,!1),w&&(ne.delta&&!Nn(w,8)?s.go(-ne.delta,!1):ne.type===Cr.pop&&Nn(w,20)&&s.go(-1,!1)),W(he,b,w)}).catch(xr)}))}let te=ir(),ie=ir(),oe;function X(B,ee,ne){ce(B);const he=ie.list();return he.length?he.forEach(z=>z(B,ee,ne)):console.error(B),Promise.reject(B)}function ue(){return oe&&l.value!==ei?Promise.resolve():new Promise((B,ee)=>{te.add([B,ee])})}function ce(B){return oe||(oe=!B,J(),te.list().forEach(([ee,ne])=>B?ne(B):ee()),te.reset()),B}function ye(B,ee,ne,he){const{scrollBehavior:z}=n;if(!ys||!z)return Promise.resolve();const b=!ne&&dv(Iu(B.fullPath,0))||(he||!ne)&&history.state&&history.state.scroll||null;return gd().then(()=>z(B,ee,b)).then(w=>w&&hv(w)).catch(w=>X(w,B,ee))}const Ae=B=>s.go(B);let Xe;const Q=new Set,se={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:n,push:A,replace:N,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:ue,install(B){const ee=this;B.component("RouterLink",Fv),B.component("RouterView",Vv),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>bs(l)}),ys&&!Xe&&l.value===ei&&(Xe=!0,A(s.location).catch(z=>{}));const ne={};for(const z in ei)Object.defineProperty(ne,z,{get:()=>l.value[z],enumerable:!0});B.provide(_c,ee),B.provide(tp,ld(ne)),B.provide(Hl,l);const he=B.unmount;Q.add(B),B.unmount=function(){Q.delete(B),Q.size<1&&(c=ei,O&&O(),O=null,l.value=ei,Xe=!1,oe=!1),he()}}};function pe(B){return B.reduce((ee,ne)=>ee.then(()=>S(ne)),Promise.resolve())}return se}function kv(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Us(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Us(c,l))||s.push(l))}return[t,i,s]}const Kt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Wv={name:"App",components:{},computed:{isAuthenticated(){return this.$store.state.isAuthenticated}}};function Xv(n,e,t,i,s,r){const o=Ar("router-view");return yt(),Ut("div",null,[St(o)])}const qv=Kt(Wv,[["render",Xv]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var $v="store";function js(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function jv(n){return n!==null&&typeof n=="object"}function Yv(n){return n&&typeof n.then=="function"}function Kv(n,e){return function(){return n(e)}}function np(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function ip(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;ha(n,t,[],n._modules.root,!0),vc(n,t,e)}function vc(n,e,t){var i=n._state,s=n._scope;n.getters={},n._makeLocalGettersCache=Object.create(null);var r=n._wrappedGetters,o={},a={},l=bm(!0);l.run(function(){js(r,function(c,u){o[u]=Kv(c,n),a[u]=tn(function(){return o[u]()}),Object.defineProperty(n.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),n._state=Nr({data:e}),n._scope=l,n.strict&&t0(n),i&&t&&n._withCommit(function(){i.data=null}),s&&s.stop()}function ha(n,e,t,i,s){var r=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!r&&!s){var a=xc(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=Zv(n,o,t);i.forEachMutation(function(u,h){var f=o+h;Jv(n,f,u,c)}),i.forEachAction(function(u,h){var f=u.root?h:o+h,d=u.handler||u;Qv(n,f,d,c)}),i.forEachGetter(function(u,h){var f=o+h;e0(n,f,u,c)}),i.forEachChild(function(u,h){ha(n,e,t.concat(h),u,s)})}function Zv(n,e,t){var i=e==="",s={dispatch:i?n.dispatch:function(r,o,a){var l=Go(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),n.dispatch(h,c)},commit:i?n.commit:function(r,o,a){var l=Go(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),n.commit(h,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return n.getters}:function(){return sp(n,e)}},state:{get:function(){return xc(n.state,t)}}}),s}function sp(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(t,r,{get:function(){return n.getters[s]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function Jv(n,e,t,i){var s=n._mutations[e]||(n._mutations[e]=[]);s.push(function(o){t.call(n,i.state,o)})}function Qv(n,e,t,i){var s=n._actions[e]||(n._actions[e]=[]);s.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return Yv(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function e0(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(r){return t(i.state,i.getters,r.state,r.getters)})}function t0(n){ws(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function xc(n,e){return e.reduce(function(t,i){return t[i]},n)}function Go(n,e,t){return jv(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var n0="vuex bindings",qu="vuex:mutations",Ia="vuex:actions",Qi="vuex",i0=0;function s0(n,e){z_({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[n0]},function(t){t.addTimelineLayer({id:qu,label:"Vuex Mutations",color:$u}),t.addTimelineLayer({id:Ia,label:"Vuex Actions",color:$u}),t.addInspector({id:Qi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===Qi)if(i.filter){var s=[];lp(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[ap(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===Qi){var s=i.nodeId;sp(e,s),i.state=a0(c0(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===Qi){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(Qi),t.sendInspectorState(Qi),t.addTimelineEvent({layerId:qu,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=i0++,i._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:Ia,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,t.addTimelineEvent({layerId:Ia,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var $u=8702998,r0=6710886,o0=16777215,rp={label:"namespaced",textColor:o0,backgroundColor:r0};function op(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function ap(n,e){return{id:e||"root",label:op(e),tags:n.namespaced?[rp]:[],children:Object.keys(n._children).map(function(t){return ap(n._children[t],e+t+"/")})}}function lp(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[rp]:[]}),Object.keys(e._children).forEach(function(s){lp(n,e._children[s],t,i+s+"/")})}function a0(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),s={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var r=l0(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?op(o):o,editable:!1,value:zl(function(){return r[o]})}})}return s}function l0(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=zl(function(){return n[t]})}else e[t]=zl(function(){return n[t]})}),e}function c0(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?n:n.root._children)}function zl(n){try{return n()}catch(e){return e}}var _n=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},cp={namespaced:{configurable:!0}};cp.namespaced.get=function(){return!!this._rawModule.namespaced};_n.prototype.addChild=function(e,t){this._children[e]=t};_n.prototype.removeChild=function(e){delete this._children[e]};_n.prototype.getChild=function(e){return this._children[e]};_n.prototype.hasChild=function(e){return e in this._children};_n.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};_n.prototype.forEachChild=function(e){js(this._children,e)};_n.prototype.forEachGetter=function(e){this._rawModule.getters&&js(this._rawModule.getters,e)};_n.prototype.forEachAction=function(e){this._rawModule.actions&&js(this._rawModule.actions,e)};_n.prototype.forEachMutation=function(e){this._rawModule.mutations&&js(this._rawModule.mutations,e)};Object.defineProperties(_n.prototype,cp);var Zi=function(e){this.register([],e,!1)};Zi.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};Zi.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,s){return t=t.getChild(s),i+(t.namespaced?s+"/":"")},"")};Zi.prototype.update=function(e){up([],this.root,e)};Zi.prototype.register=function(e,t,i){var s=this;i===void 0&&(i=!0);var r=new _n(t,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&js(t.modules,function(a,l){s.register(e.concat(l),a,i)})};Zi.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],s=t.getChild(i);s&&s.runtime&&t.removeChild(i)};Zi.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function up(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;up(n.concat(i),e.getChild(i),t.modules[i])}}function u0(n){return new Xt(n)}var Xt=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Zi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,d){return l.call(o,f,d)},this.commit=function(f,d,g){return c.call(o,f,d,g)},this.strict=s;var u=this._modules.root.state;ha(this,u,[],this._modules.root),vc(this,u),i.forEach(function(h){return h(t)})},yc={state:{configurable:!0}};Xt.prototype.install=function(e,t){e.provide(t||$v,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&s0(e,this)};yc.state.get=function(){return this._state.data};yc.state.set=function(n){};Xt.prototype.commit=function(e,t,i){var s=this,r=Go(e,t,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};Xt.prototype.dispatch=function(e,t){var i=this,s=Go(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(f){try{i._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,i.state)})}catch{}u(f)},function(f){try{i._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,i.state,f)})}catch{}h(f)})})}};Xt.prototype.subscribe=function(e,t){return np(e,this._subscribers,t)};Xt.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return np(i,this._actionSubscribers,t)};Xt.prototype.watch=function(e,t,i){var s=this;return ws(function(){return e(s.state,s.getters)},t,Object.assign({},i))};Xt.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};Xt.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),ha(this,this.state,e,this._modules.get(e),i.preserveState),vc(this,this.state)};Xt.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=xc(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),ip(this)};Xt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Xt.prototype.hotUpdate=function(e){this._modules.update(e),ip(this,!0)};Xt.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(Xt.prototype,yc);const ju={undeveloped:!1,greenAreaTrees:!1,parkingLots:!1,apartments:!1,commercials:!1,museums:!1,culturalLibrary:!1,publicSchool:!1,publicNurseries:!1,housesOfGod:!1,sizeSums:null,restart:!1,backward:!1,forward:!1,print:!1,statistics:!1,info:!1,fly:null,walk:null,lights:null,dayTime:null,powerPlant:!1,legend:null,startGame:!1,showActionBar:!1,initialCam:!1,playMode:!1,isAuthenticated:!1,loading:!1,blockSelection:!1,endInTimer:!1,startInTimer:!1,audio:!1,updateFeelGoodBarometer:!1,pauseDayAndNightCycle:!1,showFeelGoodBarometer:!1,stopWalking:!1,missionMode:!1},hp=u0({state:{...ju},mutations:{resetState(n){Object.assign(n,ju)},setUndeveloped(n,e){n.undeveloped=e},setGreenAreaTrees(n,e){n.greenAreaTrees=e},setParkingLots(n,e){n.parkingLots=e},setApartments(n,e){n.apartments=e},setCommercials(n,e){n.commercials=e},setMuseums(n,e){n.museums=e},setCulturalLibrary(n,e){n.culturalLibrary=e},setPublicSchool(n,e){n.publicSchool=e},setPublicNurseries(n,e){n.publicNurseries=e},setHousesOfGod(n,e){n.housesOfGod=e},setRestart(n,e){n.restart=e},setBackward(n,e){n.backward=e},setForward(n,e){n.forward=e},setPrint(n,e){n.print=e},setStatistics(n,e){n.statistics=e},setInfo(n,e){n.info=e},setLights(n,e){n.lights=e},setDayTime(n,e){n.dayTime=e},setPowerPlant(n,e){n.powerPlant=e},setLegend(n,e){n.legend=e},setStartGame(n,e){n.startGame=e},setShowActionBar(n,e){n.showActionBar=e},setPlayMode(n,e){n.playMode=e},setInitialCam(n,e){n.initialCam=e},setIsAuthenticated(n,e){n.isAuthenticated=e},updateSizeSums(n,e){n.sizeSums=e},setBlockSelection(n,e){n.blockSelection=e},setLoading(n,e){n.loading=e},setFly(n,e){n.fly=e},setWalk(n,e){n.walk=e},setEndInTimer(n,e){n.endInTimer=e},setStartInTimer(n,e){n.startInTimer=e},setAudio(n,e){n.audio=e},setUpdateFeelGoodBarometer(n,e){n.updateFeelGoodBarometer=e},setPauseDayAndNightCycle(n,e){n.pauseDayAndNightCycle=e},setShowFeelGoodBarometer(n,e){n.showFeelGoodBarometer=e},setStopWalking(n,e){n.stopWalking=e},setMissionMode(n,e){n.missionMode=e}},actions:{setUndeveloped({commit:n}){n("setUndeveloped",!0)},setGreenAreaTrees({commit:n}){n("setGreenAreaTrees",!0)},setParkingLots({commit:n}){n("setParkingLots",!0)},setApartments({commit:n}){n("setApartments",!0)},setCommercials({commit:n}){n("setCommercials",!0)},setMuseums({commit:n}){n("setMuseums",!0)},setCulturalLibrary({commit:n}){n("setCulturalLibrary",!0)},setPublicSchool({commit:n}){n("setPublicSchool",!0)},setPublicNurseries({commit:n}){n("setPublicNurseries",!0)},setHousesOfGod({commit:n}){n("setHousesOfGod",!0)},setRestart({commit:n}){n("setRestart",!0)},setBackward({commit:n}){n("setBackward",!0)},setForward({commit:n}){n("setForward",!0)},setPrint({commit:n}){n("setPrint",!0)},setStatistics({commit:n}){n("setStatistics",!0)},setInfo({commit:n}){n("setInfo",!0)},setLights({commit:n},e){n("setLights",e)},setDayTime({commit:n},e){n("setDayTime",e)},setPowerPlant({commit:n},e){console.log(`🟡 Dispatching setPowerPlant with value: ${e}`),n("setPowerPlant",e)},setLegend({commit:n},e){n("setLegend",e)},setStartGame({commit:n}){n("setStartGame",!0)},setShowActionBar({commit:n}){n("setShowActionBar",!0)},setPlayMode({commit:n},e){n("setPlayMode",e)},setInitialCam({commit:n}){n("setInitialCam",!0)},setIsAuthenticated({commit:n}){n("setIsAuthenticated",!0)},updateSizeSums({commit:n},e){n("updateSizeSums",e)},setBlockSelection({commit:n}){console.log(`🟡 Dispatching setBlockSelection with value: ${value}`),n("setBlockSelection",!0)},setLoading({commit:n},e){n("setLoading",e)},setFly({commit:n},e){n("setFly",e)},setWalk({commit:n},e){n("setWalk",e)},setEndInTimer({commit:n},e){n("setEndInTimer",e)},setStartInTimer({commit:n},e){n("setStartInTimer",e)},setAudio({commit:n}){n("setAudio",!0)},updateFeelGoodBarometer({commit:n},e){n("setUpdateFeelGoodBarometer",e)},setPauseDayAndNightCycle({commit:n},e){n("setPauseDayAndNightCycle",e)},setShowFeelGoodBarometer({commit:n},e){n("setShowFeelGoodBarometer",e)},setStopWalking({commit:n},e){n("setStopWalking",e)},setMissionMode({commit:n},e){n("setMissionMode",e)}},getters:{isUndeveloped:n=>n.undeveloped,isGreenAreaTrees:n=>n.greenAreaTrees,isParkingLots:n=>n.parkingLots,isApartments:n=>n.apartments,isCommercials:n=>n.commercials,isMuseum:n=>n.museums,isCulturalLibrary:n=>n.culturalLibrary,isPublicSchool:n=>n.publicSchool,isPublicNurseries:n=>n.publicNurseries,isHousesOfGod:n=>n.housesOfGod,isCallDeselectBlocks:n=>n.callDeselectBlocks,isRestart:n=>n.restart,isBackward:n=>n.backward,isForward:n=>n.forward,isPrint:n=>n.print,isStatistics:n=>n.statistics,isInfo:n=>n.info,isLights:n=>n.lights,isDayTime:n=>n.dayTime,isPowerPlant:n=>n.powerPlant,isLegend:n=>n.legend,isStartGame:n=>n.startGame,isShowActionBar:n=>n.showActionBar,isPlayMode:n=>n.playMode,isInitialCam:n=>n.initialCam,isAuthenticated:n=>n.isAuthenticated,getSizeSums:n=>n.sizeSums,isBlockSelection:n=>n.blockSelection,isLoading:n=>n.loading,getFly:n=>n.fly,getWalk:n=>n.walk,getEndInTimer:n=>n.endInTimer,getStartInTimer:n=>n.startInTimer,isAudio:n=>n.audio,isUpdateFeelGoodBarometer:n=>n.updateFeelGoodBarometer,isPauseDayAndNightCycle:n=>n.pauseDayAndNightCycle,isShowFeelGoodBarometer:n=>n.showFeelGoodBarometer,isStopWalking:n=>n.stopWalking,isMissionMode:n=>n.missionMode}}),h0={name:"LoginPage",data(){return{username:"",password:"",error:!1,errorMessage:"",responseTexts:[]}},methods:{async login(){try{(await(await fetch("https://visualizer.matthiasheckel.com/proxy.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})})).text()).includes("true")?(this.$store.dispatch("setIsAuthenticated"),this.$router.push("/")):(console.log("Login failed!"),this.error=!0)}catch(n){console.error("Error:",n)}}}},f0={class:"login-container"},d0={class:"login-form"},p0={key:0,style:{color:"red"}};function m0(n,e,t,i,s,r){return yt(),Ut("div",f0,[Ie("div",d0,[ou(Ie("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o),placeholder:"Username"},null,512),[[Ru,s.username]]),ou(Ie("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),placeholder:"Password"},null,512),[[Ru,s.password]]),Ie("button",{onClick:e[2]||(e[2]=(...o)=>r.login&&r.login(...o))},"Login"),s.error?(yt(),Ut("p",p0,"Incorrect username or password")):aa("",!0)])])}const g0=Kt(h0,[["render",m0],["__scopeId","data-v-07d5b354"]]),_0={name:"ChaosLayer",data(){return{isRunning:!1,_rafId:null,flyAroundInt:8.4,flyAroundd:6e-4,flyAd1020:10,flyAd7:0,iNeu:0}},mounted(){this.iNeu=0,this.flyAround3st(),this.startAnim(),setTimeout(()=>this.stopAnim(),10),window.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){this.stopAnim(),window.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown(n){(n.code==="Space"||n.key===" ")&&(n.preventDefault(),this.isRunning?this.stopAnim():this.startAnim())},startAnim(){if(this._rafId)return;this.isRunning=!0;const n=()=>{this.isRunning&&(this.iNeu=0,this.flyAround3(),this.flyAroundInt+=this.flyAroundd),this._rafId=requestAnimationFrame(n)};this._rafId=requestAnimationFrame(n)},stopAnim(){this.isRunning=!1,this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null)},flyAround3(){const n=this.$refs.flyAroundElements;if(!n)return;const e=window.innerWidth/2,t=window.innerHeight/2;for(let i=1400;i<2e3;i+=2){const r=(Math.cos(this.flyAroundInt*i/360*2*Math.PI)/360*2*Math.PI*600+10*i)/360*2*Math.PI,o=Math.sin(r)*600*.003*i+this.flyAd7+e,a=Math.cos(r)*600*.003*i+t;this.iNeu++;const l=n.children[this.iNeu-1];l&&(l.style.fontSize="1000px",l.style.left=o/this.flyAd1020+"px",l.style.top=a/this.flyAd1020+"px")}},flyAround3st(){const n=this.$refs.flyAroundElements;if(!n)return;const e=window.innerWidth/2,t=window.innerHeight/2;for(let i=1400;i<2e3;i+=2){const r=(Math.cos(this.flyAroundInt*i/360*2*Math.PI)/360*2*Math.PI*600+10*i)/360*2*Math.PI,o=Math.sin(r)*600*.003*i+this.flyAd7+e,a=Math.cos(r)*600*.003*i+t,l=document.createElement("div");l.innerHTML="&#8226;";const c=Math.max(0,Math.min(255,i/1.25-1400));l.style.color=`rgba(100, ${c}, 255, 0.1)`,l.style.fontSize="1000px",l.style.position="absolute",l.style.left=o/this.flyAd1020+"px",l.style.top=a/this.flyAd1020+"px",n.appendChild(l)}}}},v0={id:"spacer",class:"center-wrapper",style:{backgroundColor:"#FFE500"}},x0={id:"flyAroundElements",ref:"flyAroundElements"};function y0(n,e,t,i,s,r){return yt(),Ut("div",v0,[Ie("div",x0,null,512)])}const M0=Kt(_0,[["render",y0],["__scopeId","data-v-962c89eb"]]),S0={name:"ChaosPage",components:{ChaosLayer:M0},data(){return{isChaosLayer:!0}},mounted(){},methods:{}};function E0(n,e,t,i,s,r){const o=Ar("ChaosLayer");return s.isChaosLayer?(yt(),pc(o,{key:0})):aa("",!0)}const T0=Kt(S0,[["render",E0],["__scopeId","data-v-af8c4756"]]),b0={name:"VariableFont",data(){return{}},mounted(){},beforeUnmount(){},methods:{}},A0=n=>(Md("data-v-bb65ecfb"),n=n(),Sd(),n),w0={class:"container"},R0=A0(()=>Ie("button",{class:"button",type:"button","aria-label":"Variable font example"}," abcde ",-1)),C0=[R0];function P0(n,e,t,i,s,r){return yt(),Ut("div",w0,C0)}const L0=Kt(b0,[["render",P0],["__scopeId","data-v-bb65ecfb"]]),I0={name:"VariableFontPage",components:{VariableFont:L0},data(){return{isVariableFont:!0}},mounted(){},methods:{}};function N0(n,e,t,i,s,r){const o=Ar("VariableFont");return s.isVariableFont?(yt(),pc(o,{key:0})):aa("",!0)}const D0=Kt(I0,[["render",N0],["__scopeId","data-v-12deb5f5"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="163",U0=0,Yu=1,O0=2,fp=1,F0=2,zn=3,$n=0,Gt=1,cn=2,Mi=0,Rs=1,Ku=2,Zu=3,Ju=4,B0=5,Vi=100,H0=101,z0=102,V0=103,G0=104,k0=200,W0=201,X0=202,q0=203,Vl=204,Gl=205,$0=206,j0=207,Y0=208,K0=209,Z0=210,J0=211,Q0=212,ex=213,tx=214,nx=0,ix=1,sx=2,ko=3,rx=4,ox=5,ax=6,lx=7,dp=0,cx=1,ux=2,Si=0,hx=1,fx=2,dx=3,px=4,mx=5,gx=6,_x=7,Qu="attached",vx="detached",pp=300,Fs=301,Bs=302,kl=303,Wl=304,fa=306,Hs=1e3,mi=1001,Wo=1002,Ot=1003,mp=1004,dr=1005,Yt=1006,Do=1007,kn=1008,Ei=1009,xx=1010,yx=1011,gp=1012,_p=1013,zs=1014,bn=1015,Xo=1016,vp=1017,xp=1018,Or=1020,Mx=35902,Sx=1021,Ex=1022,dn=1023,Tx=1024,bx=1025,Cs=1026,Pr=1027,yp=1028,Mp=1029,Ax=1030,Sp=1031,Ep=1033,Na=33776,Da=33777,Ua=33778,Oa=33779,eh=35840,th=35841,nh=35842,ih=35843,Tp=36196,sh=37492,rh=37496,oh=37808,ah=37809,lh=37810,ch=37811,uh=37812,hh=37813,fh=37814,dh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,Fa=36492,yh=36494,Mh=36495,wx=36283,Sh=36284,Eh=36285,Th=36286,Lr=2300,Vs=2301,Ba=2302,bh=2400,Ah=2401,wh=2402,Rx=2500,Cx=0,bp=1,Xl=2,Px=3200,Lx=3201,Ap=0,Ix=1,pi="",Rt="srgb",Et="srgb-linear",Sc="display-p3",da="display-p3-linear",qo="linear",st="srgb",$o="rec709",jo="p3",es=7680,Rh=519,Nx=512,Dx=513,Ux=514,wp=515,Ox=516,Fx=517,Bx=518,Hx=519,ql=35044,Ch="300 es",Wn=2e3,Yo=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Ps=Math.PI/180,Gs=180/Math.PI;function mn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Ec(n,e){return(n%e+e)%e}function zx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vx(n,e,t){return n!==e?(t-n)/(e-n):0}function Mr(n,e,t){return(1-t)*n+t*e}function Gx(n,e,t,i){return Mr(n,e,1-Math.exp(-t*i))}function kx(n,e=1){return e-Math.abs(Ec(n,e*2)-e)}function Wx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $x(n,e){return n+Math.random()*(e-n)}function jx(n){return n*(.5-Math.random())}function Yx(n){n!==void 0&&(Ph=n);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kx(n){return n*Ps}function Zx(n){return n*Gs}function Jx(n){return(n&n-1)===0&&n!==0}function Qx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ey(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ty(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ny={DEG2RAD:Ps,RAD2DEG:Gs,generateUUID:mn,clamp:xt,euclideanModulo:Ec,mapLinear:zx,inverseLerp:Vx,lerp:Mr,damp:Gx,pingpong:kx,smoothstep:Wx,smootherstep:Xx,randInt:qx,randFloat:$x,randFloatSpread:jx,seededRandom:Yx,degToRad:Kx,radToDeg:Zx,isPowerOfTwo:Jx,ceilPowerOfTwo:Qx,floorPowerOfTwo:ey,setQuaternionFromProperEuler:ty,normalize:Qe,denormalize:un};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],x=s[4],A=s[7],N=s[2],C=s[5],R=s[8];return r[0]=o*_+a*E+l*N,r[3]=o*m+a*x+l*C,r[6]=o*p+a*A+l*R,r[1]=c*_+u*E+h*N,r[4]=c*m+u*x+h*C,r[7]=c*p+u*A+h*R,r[2]=f*_+d*E+g*N,r[5]=f*m+d*x+g*C,r[8]=f*p+d*A+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ge;function Rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iy(){const n=Ir("canvas");return n.style.display="block",n}const Lh={};function Cp(n){n in Lh||(Lh[n]=!0,console.warn(n))}const Ih=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[Et]:{transfer:qo,primaries:$o,toReference:n=>n,fromReference:n=>n},[Rt]:{transfer:st,primaries:$o,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:qo,primaries:jo,toReference:n=>n.applyMatrix3(Nh),fromReference:n=>n.applyMatrix3(Ih)},[Sc]:{transfer:st,primaries:jo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Nh),fromReference:n=>n.applyMatrix3(Ih).convertLinearToSRGB()}},sy=new Set([Et,da]),Ze={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!sy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=jr[e].toReference,s=jr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return jr[n].primaries},getTransfer:function(n){return n===pi?qo:jr[n].transfer}};function Ls(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function za(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class ry{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Ir("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ls(t[i]/255)*255):t[i]=Ls(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ry.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;class Mt extends Ys{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=mi,s=mi,r=Yt,o=kn,a=dn,l=Ei,c=Mt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=mn(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=pp;Mt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,A=(d+1)/2,N=(p+1)/2,C=(u+f)/4,R=(h+_)/4,U=(g+m)/4;return x>A&&x>N?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=R/i):A>N?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=C/s,r=U/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=R/r,s=U/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends Ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new Mt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends ly{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lp extends Mt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cy extends Mt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const N=Math.sqrt(x),C=Math.atan2(N,p*E);m=Math.sin(m*C)/N,a=Math.sin(a*C)/N}const A=a*E;if(l=l*m+f*A,c=c*m+d*A,u=u*m+g*A,h=h*m+_*A,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new I,Dh=new bi;class Kn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Kr.subVectors(this.max,sr),ns.subVectors(e.a,sr),is.subVectors(e.b,sr),ss.subVectors(e.c,sr),ti.subVectors(is,ns),ni.subVectors(ss,is),Pi.subVectors(ns,ss);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Pi.z,Pi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Pi.z,0,-Pi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Pi.y,Pi.x,0];return!ka(t,ns,is,ss,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,ns,is,ss,Kr))?!1:(Zr.crossVectors(ti,ni),t=[Zr.x,Zr.y,Zr.z],ka(t,ns,is,ss,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,Yr=new Kn,ns=new I,is=new I,ss=new I,ti=new I,ni=new I,Pi=new I,sr=new I,Kr=new I,Zr=new I,Li=new I;function ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Li.fromArray(n,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uy=new Kn,rr=new I,Wa=new I;class Pn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Wa)),this.expandByPoint(rr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new I,Xa=new I,Jr=new I,ii=new I,qa=new I,Qr=new I,$a=new I;class pa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Xa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=ii.dot(this.direction),l=-ii.dot(Jr),c=ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(Jr,f),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,s,r){qa.subVectors(t,e),Qr.subVectors(i,e),$a.crossVectors(qa,Qr);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(Qr.crossVectors(ii,Qr));if(l<0)return null;const c=a*this.direction.dot(qa.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot($a);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,fy)}lookAt(e,t,i){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),si.crossVectors(i,$t),si.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),si.crossVectors(i,$t)),si.normalize(),eo.crossVectors($t,si),s[0]=si.x,s[4]=eo.x,s[8]=$t.x,s[1]=si.y,s[5]=eo.y,s[9]=$t.y,s[2]=si.z,s[6]=eo.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],x=i[7],A=i[11],N=i[15],C=s[0],R=s[4],U=s[8],S=s[12],M=s[1],W=s[5],Z=s[9],O=s[13],J=s[2],te=s[6],ie=s[10],oe=s[14],X=s[3],ue=s[7],ce=s[11],ye=s[15];return r[0]=o*C+a*M+l*J+c*X,r[4]=o*R+a*W+l*te+c*ue,r[8]=o*U+a*Z+l*ie+c*ce,r[12]=o*S+a*O+l*oe+c*ye,r[1]=u*C+h*M+f*J+d*X,r[5]=u*R+h*W+f*te+d*ue,r[9]=u*U+h*Z+f*ie+d*ce,r[13]=u*S+h*O+f*oe+d*ye,r[2]=g*C+_*M+m*J+p*X,r[6]=g*R+_*W+m*te+p*ue,r[10]=g*U+_*Z+m*ie+p*ce,r[14]=g*S+_*O+m*oe+p*ye,r[3]=E*C+x*M+A*J+N*X,r[7]=E*R+x*W+A*te+N*ue,r[11]=E*U+x*Z+A*ie+N*ce,r[15]=E*S+x*O+A*oe+N*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,A=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,N=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,C=t*E+i*x+s*A+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=E*R,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*R,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*R,e[4]=x*R,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*R,e[8]=A*R,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*R,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*R,e[12]=N*R,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*R,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,E=l*c,x=l*u,A=l*h,N=i.x,C=i.y,R=i.z;return s[0]=(1-(_+p))*N,s[1]=(d+A)*N,s[2]=(g-x)*N,s[3]=0,s[4]=(d-A)*C,s[5]=(1-(f+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(g+x)*R,s[9]=(m-E)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const c=1/r,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Wn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===Wn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===Wn)g=(o+r)*h,_=-2*h;else if(a===Yo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new I,rn=new He,hy=new I(0,0,0),fy=new I(1,1,1),si=new I,eo=new I,$t=new I,Uh=new He,Oh=new bi;class Cn{constructor(e=0,t=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dy=0;const Fh=new I,os=new bi,On=new He,to=new I,or=new I,py=new I,my=new bi,Bh=new I(1,0,0),Hh=new I(0,1,0),zh=new I(0,0,1),Vh={type:"added"},gy={type:"removed"},as={type:"childadded",child:null},ja={type:"childremoved",child:null};class ht extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new I,t=new Cn,i=new bi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ge}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(or,to,this.up):On.lookAt(to,or,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),os.setFromRotationMatrix(On),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gy),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ht.DEFAULT_UP=new I(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new I,Fn=new I,Ya=new I,Bn=new I,ls=new I,cs=new I,Gh=new I,Ka=new I,Za=new I,Ja=new I;class hn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){on.subVectors(s,t),Fn.subVectors(i,t),Ya.subVectors(e,t);const o=on.dot(on),a=on.dot(Fn),l=on.dot(Ya),c=Fn.dot(Fn),u=Fn.dot(Ya),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(e,t,i,s){return on.subVectors(i,t),Fn.subVectors(e,t),on.cross(Fn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),on.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,i),cs.subVectors(r,i),Ka.subVectors(e,i);const l=ls.dot(Ka),c=cs.dot(Ka);if(l<=0&&c<=0)return t.copy(i);Za.subVectors(e,s);const u=ls.dot(Za),h=cs.dot(Za);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);Ja.subVectors(e,r);const d=ls.dot(Ja),g=cs.dot(Ja);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(cs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Gh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Gh,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},no={h:0,s:0,l:0};function Qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Ec(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Qa(o,r,e+1/3),this.g=Qa(o,r,e),this.b=Qa(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=Np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ze.fromWorkingColorSpace(wt.copy(this),e),Math.round(xt(wt.r*255,0,255))*65536+Math.round(xt(wt.g*255,0,255))*256+Math.round(xt(wt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,s=wt.g,r=wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Rt){Ze.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,s=wt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(no);const i=Mr(ri.h,no.h,t),s=Mr(ri.s,no.s,t),r=Mr(ri.l,no.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ne;Ne.NAMES=Np;let _y=0;class An extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Rs,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new I,io=new Be;class Ft{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}}class Dp extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Up extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wn extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vy=0;const Jt=new He,el=new ht,us=new I,jt=new Kn,ar=new Kn,vt=new I;class vn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Up:Dp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(jt.min,ar.min),jt.expandByPoint(vt),vt.addVectors(jt.max,ar.max),jt.expandByPoint(vt)):(jt.expandByPoint(ar.min),jt.expandByPoint(ar.max))}jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),vt.add(us)),s=Math.max(s,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new I,l[U]=new I;const c=new I,u=new I,h=new I,f=new Be,d=new Be,g=new Be,_=new I,m=new I;function p(U,S,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const W=1/(d.x*g.y-g.x*d.y);isFinite(W)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(W),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(W),a[U].add(_),a[S].add(_),a[M].add(_),l[U].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,S=E.length;U<S;++U){const M=E[U],W=M.start,Z=M.count;for(let O=W,J=W+Z;O<J;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new I,A=new I,N=new I,C=new I;function R(U){N.fromBufferAttribute(s,U),C.copy(N);const S=a[U];x.copy(S),x.sub(N.multiplyScalar(N.dot(S))).normalize(),A.crossVectors(C,S);const W=A.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,W)}for(let U=0,S=E.length;U<S;++U){const M=E[U],W=M.start,Z=M.count;for(let O=W,J=W+Z;O<J;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ft(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new He,Ii=new pa,so=new Pn,Wh=new I,hs=new I,fs=new I,ds=new I,tl=new I,ro=new I,oo=new Be,ao=new Be,lo=new Be,Xh=new I,qh=new I,$h=new I,co=new I,uo=new I;class Vt extends ht{constructor(e=new vn,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(tl.fromBufferAttribute(h,e),o?ro.addScaledVector(tl,u):ro.addScaledVector(tl.sub(t),u))}t.add(ro)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(so.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(so,Wh)===null||Ii.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let A=E,N=x;A<N;A+=3){const C=a.getX(A),R=a.getX(A+1),U=a.getX(A+2);s=ho(this,p,e,i,c,u,h,C,R,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),A=a.getX(m+2);s=ho(this,o,e,i,c,u,h,E,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let A=E,N=x;A<N;A+=3){const C=A,R=A+1,U=A+2;s=ho(this,p,e,i,c,u,h,C,R,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,x=m+1,A=m+2;s=ho(this,o,e,i,c,u,h,E,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xy(n,e,t,i,s,r,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$n,a),l===null)return null;uo.copy(a),uo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:n}}function ho(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,hs),n.getVertexPosition(l,fs),n.getVertexPosition(c,ds);const u=xy(n,e,t,i,hs,fs,ds,co);if(u){s&&(oo.fromBufferAttribute(s,a),ao.fromBufferAttribute(s,l),lo.fromBufferAttribute(s,c),u.uv=hn.getInterpolation(co,hs,fs,ds,oo,ao,lo,new Be)),r&&(oo.fromBufferAttribute(r,a),ao.fromBufferAttribute(r,l),lo.fromBufferAttribute(r,c),u.uv1=hn.getInterpolation(co,hs,fs,ds,oo,ao,lo,new Be)),o&&(Xh.fromBufferAttribute(o,a),qh.fromBufferAttribute(o,l),$h.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(co,hs,fs,ds,Xh,qh,$h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(hs,fs,ds,h.normal),u.face=h}return u}class Fr extends vn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(h,2));function g(_,m,p,E,x,A,N,C,R,U,S){const M=A/R,W=N/U,Z=A/2,O=N/2,J=C/2,te=R+1,ie=U+1;let oe=0,X=0;const ue=new I;for(let ce=0;ce<ie;ce++){const ye=ce*W-O;for(let Ae=0;Ae<te;Ae++){const Xe=Ae*M-Z;ue[_]=Xe*E,ue[m]=ye*x,ue[p]=J,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ae/R),h.push(1-ce/U),oe+=1}}for(let ce=0;ce<U;ce++)for(let ye=0;ye<R;ye++){const Ae=f+ye+te*ce,Xe=f+ye+te*(ce+1),Q=f+(ye+1)+te*(ce+1),se=f+(ye+1)+te*ce;l.push(Ae,Xe,se),l.push(Xe,Q,se),X+=6}a.addGroup(d,X,S),d+=X,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=ks(n[t]);for(const s in i)e[s]=i[s]}return e}function yy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Op(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const My={clone:ks,merge:Dt};var Sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sy,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fp extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,jh=new Be,Yh=new Be;class Ct extends Fp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Yh),t.subVectors(Yh,jh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class Ty extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ct(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new Ct(ps,ms,e,t);r.layers=this.layers,this.add(r);const o=new Ct(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new Ct(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Ct(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new Ct(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bp extends Mt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class by extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fr(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Mi});r.uniforms.tEquirect.value=t;const o=new Vt(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Yt),new Ty(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const nl=new I,Ay=new I,wy=new Ge;class Fi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nl.subVectors(i,t).cross(Ay.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wy.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Pn,fo=new I;class Tc{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],x=s[14],A=s[15];if(i[0].setComponents(l-r,f-c,m-d,A-p).normalize(),i[1].setComponents(l+r,f+c,m+d,A+p).normalize(),i[2].setComponents(l+o,f+u,m+g,A+E).normalize(),i[3].setComponents(l-o,f-u,m-g,A-E).normalize(),i[4].setComponents(l-a,f-h,m-_,A-x).normalize(),t===Wn)i[5].setComponents(l+a,f+h,m+_,A+x).normalize();else if(t===Yo)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ry(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Br extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let x=0;x<c;x++){const A=x*h-r;g.push(A,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,A=E+c*(p+1),N=E+1+c*(p+1),C=E+1+c*p;d.push(x,A,C),d.push(A,N,C)}this.setIndex(d),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ES=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Cy,alphahash_pars_fragment:Py,alphamap_fragment:Ly,alphamap_pars_fragment:Iy,alphatest_fragment:Ny,alphatest_pars_fragment:Dy,aomap_fragment:Uy,aomap_pars_fragment:Oy,batching_pars_vertex:Fy,batching_vertex:By,begin_vertex:Hy,beginnormal_vertex:zy,bsdfs:Vy,iridescence_fragment:Gy,bumpmap_pars_fragment:ky,clipping_planes_fragment:Wy,clipping_planes_pars_fragment:Xy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:$y,color_fragment:jy,color_pars_fragment:Yy,color_pars_vertex:Ky,color_vertex:Zy,common:Jy,cube_uv_reflection_fragment:Qy,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:sM,colorspace_fragment:rM,colorspace_pars_fragment:oM,envmap_fragment:aM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:SM,envmap_vertex:hM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_fragment:_M,lightmap_pars_fragment:vM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:yM,lights_pars_begin:MM,lights_toon_fragment:EM,lights_toon_pars_fragment:TM,lights_phong_fragment:bM,lights_phong_pars_fragment:AM,lights_physical_fragment:wM,lights_physical_pars_fragment:RM,lights_fragment_begin:CM,lights_fragment_maps:PM,lights_fragment_end:LM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:UM,map_fragment:OM,map_pars_fragment:FM,map_particle_fragment:BM,map_particle_pars_fragment:HM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:VM,morphinstance_vertex:GM,morphcolor_vertex:kM,morphnormal_vertex:WM,morphtarget_pars_vertex:XM,morphtarget_vertex:qM,normal_fragment_begin:$M,normal_fragment_maps:jM,normal_pars_fragment:YM,normal_pars_vertex:KM,normal_vertex:ZM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:eS,clearcoat_pars_fragment:tS,iridescence_pars_fragment:nS,opaque_fragment:iS,packing:sS,premultiplied_alpha_fragment:rS,project_vertex:oS,dithering_fragment:aS,dithering_pars_fragment:lS,roughnessmap_fragment:cS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:pS,skinbase_vertex:mS,skinning_pars_vertex:gS,skinning_vertex:_S,skinnormal_vertex:vS,specularmap_fragment:xS,specularmap_pars_fragment:yS,tonemapping_fragment:MS,tonemapping_pars_fragment:SS,transmission_fragment:ES,transmission_pars_fragment:TS,uv_pars_fragment:bS,uv_pars_vertex:AS,uv_vertex:wS,worldpos_vertex:RS,background_vert:CS,background_frag:PS,backgroundCube_vert:LS,backgroundCube_frag:IS,cube_vert:NS,cube_frag:DS,depth_vert:US,depth_frag:OS,distanceRGBA_vert:FS,distanceRGBA_frag:BS,equirect_vert:HS,equirect_frag:zS,linedashed_vert:VS,linedashed_frag:GS,meshbasic_vert:kS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:$S,meshmatcap_frag:jS,meshnormal_vert:YS,meshnormal_frag:KS,meshphong_vert:ZS,meshphong_frag:JS,meshphysical_vert:QS,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:sE,shadow_vert:rE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},_e={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},En={basic:{uniforms:Dt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Dt([_e.common,_e.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Dt([_e.lights,_e.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};En.physical={uniforms:Dt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const po={r:0,b:0,g:0},Di=new Cn,cE=new He;function uE(n,e,t,i,s,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let E=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fa)?(u===void 0&&(u=new Vt(new Fr(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:ks(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(p.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(Di)),u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Vt(new Br(2,2),new jn({name:"BackgroundMaterial",uniforms:ks(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(po,Op(n)),i.buffers.color.setClear(po.r,po.g,po.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function hE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,W,Z,O,J){let te=!1;const ie=h(O,Z,W);r!==ie&&(r=ie,c(r.object)),te=d(M,O,Z,J),te&&g(M,O,Z,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,A(M,W,Z,O),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,W,Z){const O=Z.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let te=J[W.id];te===void 0&&(te={},J[W.id]=te);let ie=te[O];return ie===void 0&&(ie=f(l()),te[O]=ie),ie}function f(M){const W=[],Z=[],O=[];for(let J=0;J<t;J++)W[J]=0,Z[J]=0,O[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,W,Z,O){const J=r.attributes,te=W.attributes;let ie=0;const oe=Z.getAttributes();for(const X in oe)if(oe[X].location>=0){const ce=J[X];let ye=te[X];if(ye===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ce===void 0||ce.attribute!==ye||ye&&ce.data!==ye.data)return!0;ie++}return r.attributesNum!==ie||r.index!==O}function g(M,W,Z,O){const J={},te=W.attributes;let ie=0;const oe=Z.getAttributes();for(const X in oe)if(oe[X].location>=0){let ce=te[X];ce===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const ye={};ye.attribute=ce,ce&&ce.data&&(ye.data=ce.data),J[X]=ye,ie++}r.attributes=J,r.attributesNum=ie,r.index=O}function _(){const M=r.newAttributes;for(let W=0,Z=M.length;W<Z;W++)M[W]=0}function m(M){p(M,0)}function p(M,W){const Z=r.newAttributes,O=r.enabledAttributes,J=r.attributeDivisors;Z[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),J[M]!==W&&(n.vertexAttribDivisor(M,W),J[M]=W)}function E(){const M=r.newAttributes,W=r.enabledAttributes;for(let Z=0,O=W.length;Z<O;Z++)W[Z]!==M[Z]&&(n.disableVertexAttribArray(Z),W[Z]=0)}function x(M,W,Z,O,J,te,ie){ie===!0?n.vertexAttribIPointer(M,W,Z,J,te):n.vertexAttribPointer(M,W,Z,O,J,te)}function A(M,W,Z,O){_();const J=O.attributes,te=Z.getAttributes(),ie=W.defaultAttributeValues;for(const oe in te){const X=te[oe];if(X.location>=0){let ue=J[oe];if(ue===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const ce=ue.normalized,ye=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;const Xe=Ae.buffer,Q=Ae.type,se=Ae.bytesPerElement,pe=Q===n.INT||Q===n.UNSIGNED_INT||ue.gpuType===_p;if(ue.isInterleavedBufferAttribute){const B=ue.data,ee=B.stride,ne=ue.offset;if(B.isInstancedInterleavedBuffer){for(let he=0;he<X.locationSize;he++)p(X.location+he,B.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let he=0;he<X.locationSize;he++)m(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let he=0;he<X.locationSize;he++)x(X.location+he,ye/X.locationSize,Q,ce,ee*se,(ne+ye/X.locationSize*he)*se,pe)}else{if(ue.isInstancedBufferAttribute){for(let B=0;B<X.locationSize;B++)p(X.location+B,ue.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let B=0;B<X.locationSize;B++)m(X.location+B);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let B=0;B<X.locationSize;B++)x(X.location+B,ye/X.locationSize,Q,ce,ye*se,ye/X.locationSize*B*se,pe)}}else if(ie!==void 0){const ce=ie[oe];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(X.location,ce);break;case 3:n.vertexAttrib3fv(X.location,ce);break;case 4:n.vertexAttrib4fv(X.location,ce);break;default:n.vertexAttrib1fv(X.location,ce)}}}}E()}function N(){U();for(const M in i){const W=i[M];for(const Z in W){const O=W[Z];for(const J in O)u(O[J].object),delete O[J];delete W[Z]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const W=i[M.id];for(const Z in W){const O=W[Z];for(const J in O)u(O[J].object),delete O[J];delete W[Z]}delete i[M.id]}function R(M){for(const W in i){const Z=i[W];if(Z[M.id]===void 0)continue;const O=Z[M.id];for(const J in O)u(O[J].object),delete O[J];delete Z[M.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function fE(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dE(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:p,maxSamples:E}}function pE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Fi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,x=E*4;let A=p.clippingState||null;l.value=A,A=u(g,f,x,d);for(let N=0;N!==x;++N)A[N]=t[N];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,A=d;x!==_;++x,A+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function mE(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Fs:a===Wl&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Wl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new by(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ma extends Fp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,Kh=[.125,.215,.35,.446,.526,.582],Gi=20,il=new ma,Zh=new Ne;let sl=null,rl=0,ol=0,al=!1;const Bi=(1+Math.sqrt(5))/2,gs=1/Bi,Jh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Bi,gs),new I(0,Bi,-gs),new I(gs,0,Bi),new I(-gs,0,Bi),new I(Bi,gs,0),new I(-Bi,gs,0)];class Qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Xo,format:dn,colorSpace:Et,depthBuffer:!1},s=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(r)),this._blurMaterial=_E(r,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,i,s){const a=new Ct(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zh),u.toneMapping=Si,u.autoClear=!1;const d=new gi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Vt(new Fr,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Zh),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;mo(s,E*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,il)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jh[(s-1)%Jh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let E=0;for(let R=0;R<Gi;++R){const U=R/_,S=Math.exp(-U*U/2);p.push(S),R===0?E+=S:R<m&&(E+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const A=this._sizeLods[s],N=3*A*(s>x-Ms?s-x+Ms:0),C=4*(this._cubeSize-A);mo(t,N,C,3*A,2*A),l.setRenderTarget(t),l.render(h,il)}}function gE(n){const e=[],t=[],i=[];let s=n;const r=n-Ms+1+Kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ms?l=Kh[o-n+Ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),x=new Float32Array(m*g*d),A=new Float32Array(p*g*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,U=C>2?0:-1,S=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(S,_*g*C),x.set(f,m*g*C);const M=[C,C,C,C,C,C];A.set(M,p*g*C)}const N=new vn;N.setAttribute("position",new Ft(E,_)),N.setAttribute("uv",new Ft(x,m)),N.setAttribute("faceIndex",new Ft(A,p)),e.push(N),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ef(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _E(n,e,t){const i=new Float32Array(Gi),s=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function tf(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nf(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Wl,u=l===Fs||l===Bs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Qh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yE(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let x=0,A=E.length;x<A;x+=3){const N=E[x+0],C=E[x+1],R=E[x+2];f.push(N,C,C,R,R,N)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,A=E.length/3-1;x<A;x+=3){const N=x+0,C=x+1,R=x+2;f.push(N,C,C,R,R,N)}}else return;const m=new(Rp(f)?Up:Dp)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ME(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(h[_]/o,f[_]);else{g.multiDrawElementsWEBGL(i,f,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function SE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EE(n,e,t){const i=new WeakMap,s=new tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let A=a.attributes.position.count*x,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*N*4*h),R=new Lp(C,A,N,h);R.type=bn,R.needsUpdate=!0;const U=x*4;for(let M=0;M<h;M++){const W=m[M],Z=p[M],O=E[M],J=A*N*4*M;for(let te=0;te<W.count;te++){const ie=te*U;d===!0&&(s.fromBufferAttribute(W,te),C[J+ie+0]=s.x,C[J+ie+1]=s.y,C[J+ie+2]=s.z,C[J+ie+3]=0),g===!0&&(s.fromBufferAttribute(Z,te),C[J+ie+4]=s.x,C[J+ie+5]=s.y,C[J+ie+6]=s.z,C[J+ie+7]=0),_===!0&&(s.fromBufferAttribute(O,te),C[J+ie+8]=s.x,C[J+ie+9]=s.y,C[J+ie+10]=s.z,C[J+ie+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Be(A,N)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function TE(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zp extends Mt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Cs,u!==Cs&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cs&&(i=zs),i===void 0&&u===Pr&&(i=Or),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vp=new Mt,Gp=new zp(1,1);Gp.compareFunction=wp;const kp=new Lp,Wp=new cy,Xp=new Bp,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function wE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function RE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function CE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),gt(t,i)}}function PE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;af.set(i),n.uniformMatrix3fv(this.addr,!1,af),gt(t,i)}}function LE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;of.set(i),n.uniformMatrix4fv(this.addr,!1,of),gt(t,i)}}function IE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function DE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function UE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function OE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function BE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function HE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function zE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Gp:Vp;t.setTexture2D(e||r,s)}function VE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wp,s)}function GE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xp,s)}function kE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kp,s)}function WE(n){switch(n){case 5126:return bE;case 35664:return AE;case 35665:return wE;case 35666:return RE;case 35674:return CE;case 35675:return PE;case 35676:return LE;case 5124:case 35670:return IE;case 35667:case 35671:return NE;case 35668:case 35672:return DE;case 35669:case 35673:return UE;case 5125:return OE;case 36294:return FE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return kE}}function XE(n,e){n.uniform1fv(this.addr,e)}function qE(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function $E(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function jE(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function YE(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KE(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZE(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function JE(n,e){n.uniform1iv(this.addr,e)}function QE(n,e){n.uniform2iv(this.addr,e)}function eT(n,e){n.uniform3iv(this.addr,e)}function tT(n,e){n.uniform4iv(this.addr,e)}function nT(n,e){n.uniform1uiv(this.addr,e)}function iT(n,e){n.uniform2uiv(this.addr,e)}function sT(n,e){n.uniform3uiv(this.addr,e)}function rT(n,e){n.uniform4uiv(this.addr,e)}function oT(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vp,r[o])}function aT(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wp,r[o])}function lT(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xp,r[o])}function cT(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kp,r[o])}function uT(n){switch(n){case 5126:return XE;case 35664:return qE;case 35665:return $E;case 35666:return jE;case 35674:return YE;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return JE;case 35667:case 35671:return QE;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return sT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}class hT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WE(t.type)}}class fT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uT(t.type)}}class dT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function cf(n,e){n.seq.push(e),n.map[e.id]=e}function pT(n,e,t){const i=n.name,s=i.length;for(ll.lastIndex=0;;){const r=ll.exec(i),o=ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cf(t,c===void 0?new hT(a,n,e):new fT(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new dT(a),cf(t,h)),t=h}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);pT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function uf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mT=37297;let gT=0;function _T(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function vT(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===jo&&t===$o?i="LinearDisplayP3ToLinearSRGB":e===$o&&t===jo&&(i="LinearSRGBToLinearDisplayP3"),n){case Et:case da:return[i,"LinearTransferOETF"];case Rt:case Sc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_T(n.getShaderSource(e),o)}else return s}function xT(n,e){const t=vT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yT(n,e){let t;switch(e){case hx:t="Linear";break;case fx:t="Reinhard";break;case dx:t="OptimizedCineon";break;case px:t="ACESFilmic";break;case gx:t="AgX";break;case _x:t="Neutral";break;case mx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function MT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function ST(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ET(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pr(n){return n!==""}function ff(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(TT,AT)}const bT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AT(n,e){let t=Ve[e];if(t===void 0){const i=bT.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}const wT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(n){return n.replace(wT,RT)}function RT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function PT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function IT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case cx:e="ENVMAP_BLENDING_MIX";break;case ux:e="ENVMAP_BLENDING_ADD";break}return e}function NT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CT(t),c=PT(t),u=LT(t),h=IT(t),f=NT(t),d=MT(t),g=ST(r),_=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Si?yT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,xT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=$l(o),o=ff(o,t),o=df(o,t),a=$l(a),a=ff(a,t),a=df(a,t),o=pf(o),a=pf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,A=E+p+a,N=uf(s,s.VERTEX_SHADER,x),C=uf(s,s.FRAGMENT_SHADER,A);s.attachShader(_,N),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(W){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(N).trim(),J=s.getShaderInfoLog(C).trim();let te=!0,ie=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,N,C);else{const oe=hf(s,N,"vertex"),X=hf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Z+`
`+oe+`
`+X)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(O===""||J==="")&&(ie=!1);ie&&(W.diagnostics={runnable:te,programLog:Z,vertexShader:{log:O,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(N),s.deleteShader(C),U=new Uo(s,_),S=ET(s,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,mT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=C,this}let UT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FT(e),t.set(e,i)),i}}class FT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function BT(n,e,t,i,s,r,o){const a=new Ip,l=new OT,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,W,Z,O){const J=Z.fog,te=O.geometry,ie=S.isMeshStandardMaterial?Z.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),X=oe&&oe.mapping===fa?oe.image.height:null,ue=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ce=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ye=ce!==void 0?ce.length:0;let Ae=0;te.morphAttributes.position!==void 0&&(Ae=1),te.morphAttributes.normal!==void 0&&(Ae=2),te.morphAttributes.color!==void 0&&(Ae=3);let Xe,Q,se,pe;if(ue){const Tt=En[ue];Xe=Tt.vertexShader,Q=Tt.fragmentShader}else Xe=S.vertexShader,Q=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const B=n.getRenderTarget(),ee=O.isInstancedMesh===!0,ne=O.isBatchedMesh===!0,he=!!S.map,z=!!S.matcap,b=!!oe,w=!!S.aoMap,H=!!S.lightMap,V=!!S.bumpMap,K=!!S.normalMap,y=!!S.displacementMap,v=!!S.emissiveMap,L=!!S.metalnessMap,F=!!S.roughnessMap,D=S.anisotropy>0,k=S.clearcoat>0,ae=S.iridescence>0,$=S.sheen>0,le=S.transmission>0,de=D&&!!S.anisotropyMap,re=k&&!!S.clearcoatMap,fe=k&&!!S.clearcoatNormalMap,Se=k&&!!S.clearcoatRoughnessMap,xe=ae&&!!S.iridescenceMap,Me=ae&&!!S.iridescenceThicknessMap,We=$&&!!S.sheenColorMap,ke=$&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Le=!!S.specularColorMap,$e=!!S.specularIntensityMap,Ee=le&&!!S.transmissionMap,P=le&&!!S.thicknessMap,ge=!!S.gradientMap,me=!!S.alphaMap,be=S.alphaTest>0,we=!!S.alphaHash,nt=!!S.extensions;let ot=Si;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ot=n.toneMapping);const ct={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ne,instancing:ee,instancingColor:ee&&O.instanceColor!==null,instancingMorph:ee&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Et,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:z,envMap:b,envMapMode:b&&oe.mapping,envMapCubeUVHeight:X,aoMap:w,lightMap:H,bumpMap:V,normalMap:K,displacementMap:f&&y,emissiveMap:v,normalMapObjectSpace:K&&S.normalMapType===Ix,normalMapTangentSpace:K&&S.normalMapType===Ap,metalnessMap:L,roughnessMap:F,anisotropy:D,anisotropyMap:de,clearcoat:k,clearcoatMap:re,clearcoatNormalMap:fe,clearcoatRoughnessMap:Se,iridescence:ae,iridescenceMap:xe,iridescenceThicknessMap:Me,sheen:$,sheenColorMap:We,sheenRoughnessMap:ke,specularMap:Ye,specularColorMap:Le,specularIntensityMap:$e,transmission:le,transmissionMap:Ee,thicknessMap:P,gradientMap:ge,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:be,alphaHash:we,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:w&&_(S.aoMap.channel),lightMapUv:H&&_(S.lightMap.channel),bumpMapUv:V&&_(S.bumpMap.channel),normalMapUv:K&&_(S.normalMap.channel),displacementMapUv:y&&_(S.displacementMap.channel),emissiveMapUv:v&&_(S.emissiveMap.channel),metalnessMapUv:L&&_(S.metalnessMap.channel),roughnessMapUv:F&&_(S.roughnessMap.channel),anisotropyMapUv:de&&_(S.anisotropyMap.channel),clearcoatMapUv:re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(S.sheenRoughnessMap.channel),specularMapUv:Ye&&_(S.specularMap.channel),specularColorMapUv:Le&&_(S.specularColorMap.channel),specularIntensityMapUv:$e&&_(S.specularIntensityMap.channel),transmissionMapUv:Ee&&_(S.transmissionMap.channel),thicknessMapUv:P&&_(S.thicknessMap.channel),alphaMapUv:me&&_(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(K||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!te.attributes.uv&&(he||me),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:nt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:nt&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)M.push(W),M.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(E(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const M=g[S.type];let W;if(M){const Z=En[M];W=My.clone(Z.uniforms)}else W=S.uniforms;return W}function N(S,M){let W;for(let Z=0,O=u.length;Z<O;Z++){const J=u[Z];if(J.cacheKey===M){W=J,++W.usedTimes;break}}return W===void 0&&(W=new DT(n,M,S,r),u.push(W)),W}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function HT(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function zT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _f(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||zT),i.length>1&&i.sort(f||gf),s.length>1&&s.sort(f||gf)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function VT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new _f,n.set(i,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function kT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let WT=0;function XT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qT(n){const e=new GT,t=kT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new He,o=new He;function a(c,u){let h=0,f=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,_=0,m=0,p=0,E=0,x=0,A=0,N=0,C=0,R=0,U=0;c.sort(XT);const S=u===!0?Math.PI:1;for(let W=0,Z=c.length;W<Z;W++){const O=c[W],J=O.color,te=O.intensity,ie=O.distance,oe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=J.r*te*S,f+=J.g*te*S,d+=J.b*te*S;else if(O.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(O.sh.coefficients[X],te);U++}else if(O.isDirectionalLight){const X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const ue=O.shadow,ce=t.get(O);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,i.directionalShadow[g]=ce,i.directionalShadowMap[g]=oe,i.directionalShadowMatrix[g]=O.shadow.matrix,x++}i.directional[g]=X,g++}else if(O.isSpotLight){const X=e.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(J).multiplyScalar(te*S),X.distance=ie,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,i.spot[m]=X;const ue=O.shadow;if(O.map&&(i.spotLightMap[C]=O.map,C++,ue.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[m]=ue.matrix,O.castShadow){const ce=t.get(O);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,i.spotShadow[m]=ce,i.spotShadowMap[m]=oe,N++}m++}else if(O.isRectAreaLight){const X=e.get(O);X.color.copy(J).multiplyScalar(te),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),i.rectArea[p]=X,p++}else if(O.isPointLight){const X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*S),X.distance=O.distance,X.decay=O.decay,O.castShadow){const ue=O.shadow,ce=t.get(O);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,ce.shadowCameraNear=ue.camera.near,ce.shadowCameraFar=ue.camera.far,i.pointShadow[_]=ce,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=O.shadow.matrix,A++}i.point[_]=X,_++}else if(O.isHemisphereLight){const X=e.get(O);X.skyColor.copy(O.color).multiplyScalar(te*S),X.groundColor.copy(O.groundColor).multiplyScalar(te*S),i.hemi[E]=X,E++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const M=i.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==E||M.numDirectionalShadows!==x||M.numPointShadows!==A||M.numSpotShadows!==N||M.numSpotMaps!==C||M.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=E,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=N+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,M.directionalLength=g,M.pointLength=_,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=E,M.numDirectionalShadows=x,M.numPointShadows=A,M.numSpotShadows=N,M.numSpotMaps=C,M.numLightProbes=U,i.version=WT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(x.isSpotLight){const A=i.spot[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function vf(n){const e=new qT(n),t=[],i=[];function s(){t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $T(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new vf(n),e.set(s,[a])):r>=o.length?(a=new vf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class jT extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YT extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JT(n,e,t){let i=new Tc;const s=new Be,r=new Be,o=new tt,a=new jT({depthPacking:Lx}),l=new YT,c={},u=t.maxTextureSize,h={[$n]:Gt,[Gt]:$n,[cn]:cn},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:KT,fragmentShader:ZT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let p=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Mi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const O=p!==zn&&this.type===zn,J=p===zn&&this.type!==zn;for(let te=0,ie=C.length;te<ie;te++){const oe=C[te],X=oe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ue=X.getFrameExtents();if(s.multiply(ue),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,X.mapSize.y=r.y)),X.map===null||O===!0||J===!0){const ye=this.type!==zn?{minFilter:Ot,magFilter:Ot}:{};X.map!==null&&X.map.dispose(),X.map=new $i(s.x,s.y,ye),X.map.texture.name=oe.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ce=X.getViewportCount();for(let ye=0;ye<ce;ye++){const Ae=X.getViewport(ye);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),Z.viewport(o),X.updateMatrices(oe,ye),i=X.getFrustum(),A(R,U,X.camera,oe,this.type)}X.isPointLightShadow!==!0&&this.type===zn&&E(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,W)};function E(C,R){const U=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $i(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,U,d,_,null)}function x(C,R,U,S){let M=null;const W=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)M=W;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Z=M.uuid,O=R.uuid;let J=c[Z];J===void 0&&(J={},c[Z]=J);let te=J[O];te===void 0&&(te=M.clone(),J[O]=te,R.addEventListener("dispose",N)),M=te}if(M.visible=R.visible,M.wireframe=R.wireframe,S===zn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=n.properties.get(M);Z.light=U}return M}function A(C,R,U,S,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const O=e.update(C),J=C.material;if(Array.isArray(J)){const te=O.groups;for(let ie=0,oe=te.length;ie<oe;ie++){const X=te[ie],ue=J[X.materialIndex];if(ue&&ue.visible){const ce=x(C,ue,S,M);C.onBeforeShadow(n,C,R,U,O,ce,X),n.renderBufferDirect(U,null,O,ce,C,X),C.onAfterShadow(n,C,R,U,O,ce,X)}}}else if(J.visible){const te=x(C,J,S,M);C.onBeforeShadow(n,C,R,U,O,te,null),n.renderBufferDirect(U,null,O,te,C,null),C.onAfterShadow(n,C,R,U,O,te,null)}}const Z=C.children;for(let O=0,J=Z.length;O<J;O++)A(Z[O],R,U,S,M)}function N(C){C.target.removeEventListener("dispose",N);for(const U in c){const S=c[U],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function QT(n){function e(){let P=!1;const ge=new tt;let me=null;const be=new tt(0,0,0,0);return{setMask:function(we){me!==we&&!P&&(n.colorMask(we,we,we,we),me=we)},setLocked:function(we){P=we},setClear:function(we,nt,ot,ct,Tt){Tt===!0&&(we*=ct,nt*=ct,ot*=ct),ge.set(we,nt,ot,ct),be.equals(ge)===!1&&(n.clearColor(we,nt,ot,ct),be.copy(ge))},reset:function(){P=!1,me=null,be.set(-1,0,0,0)}}}function t(){let P=!1,ge=null,me=null,be=null;return{setTest:function(we){we?pe(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(we){ge!==we&&!P&&(n.depthMask(we),ge=we)},setFunc:function(we){if(me!==we){switch(we){case nx:n.depthFunc(n.NEVER);break;case ix:n.depthFunc(n.ALWAYS);break;case sx:n.depthFunc(n.LESS);break;case ko:n.depthFunc(n.LEQUAL);break;case rx:n.depthFunc(n.EQUAL);break;case ox:n.depthFunc(n.GEQUAL);break;case ax:n.depthFunc(n.GREATER);break;case lx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=we}},setLocked:function(we){P=we},setClear:function(we){be!==we&&(n.clearDepth(we),be=we)},reset:function(){P=!1,ge=null,me=null,be=null}}}function i(){let P=!1,ge=null,me=null,be=null,we=null,nt=null,ot=null,ct=null,Tt=null;return{setTest:function(it){P||(it?pe(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(it){ge!==it&&!P&&(n.stencilMask(it),ge=it)},setFunc:function(it,xn,yn){(me!==it||be!==xn||we!==yn)&&(n.stencilFunc(it,xn,yn),me=it,be=xn,we=yn)},setOp:function(it,xn,yn){(nt!==it||ot!==xn||ct!==yn)&&(n.stencilOp(it,xn,yn),nt=it,ot=xn,ct=yn)},setLocked:function(it){P=it},setClear:function(it){Tt!==it&&(n.clearStencil(it),Tt=it)},reset:function(){P=!1,ge=null,me=null,be=null,we=null,nt=null,ot=null,ct=null,Tt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,E=null,x=null,A=null,N=null,C=new Ne(0,0,0),R=0,U=!1,S=null,M=null,W=null,Z=null,O=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ie=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(oe)[1]),te=ie>=1):oe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),te=ie>=2);let X=null,ue={};const ce=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Ae=new tt().fromArray(ce),Xe=new tt().fromArray(ye);function Q(P,ge,me,be){const we=new Uint8Array(4),nt=n.createTexture();n.bindTexture(P,nt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<me;ot++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ge+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return nt}const se={};se[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),r.setFunc(ko),V(!1),K(Yu),pe(n.CULL_FACE),w(Mi);function pe(P){c[P]!==!0&&(n.enable(P),c[P]=!0)}function B(P){c[P]!==!1&&(n.disable(P),c[P]=!1)}function ee(P,ge){return u[P]!==ge?(n.bindFramebuffer(P,ge),u[P]=ge,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function ne(P,ge){let me=f,be=!1;if(P){me=h.get(ge),me===void 0&&(me=[],h.set(ge,me));const we=P.textures;if(me.length!==we.length||me[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,ot=we.length;nt<ot;nt++)me[nt]=n.COLOR_ATTACHMENT0+nt;me.length=we.length,be=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,be=!0);be&&n.drawBuffers(me)}function he(P){return d!==P?(n.useProgram(P),d=P,!0):!1}const z={[Vi]:n.FUNC_ADD,[H0]:n.FUNC_SUBTRACT,[z0]:n.FUNC_REVERSE_SUBTRACT};z[V0]=n.MIN,z[G0]=n.MAX;const b={[k0]:n.ZERO,[W0]:n.ONE,[X0]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Z0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[$0]:n.DST_ALPHA,[q0]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[K0]:n.ONE_MINUS_DST_COLOR,[j0]:n.ONE_MINUS_DST_ALPHA,[J0]:n.CONSTANT_COLOR,[Q0]:n.ONE_MINUS_CONSTANT_COLOR,[ex]:n.CONSTANT_ALPHA,[tx]:n.ONE_MINUS_CONSTANT_ALPHA};function w(P,ge,me,be,we,nt,ot,ct,Tt,it){if(P===Mi){g===!0&&(B(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),P!==B0){if(P!==_||it!==U){if((m!==Vi||x!==Vi)&&(n.blendEquation(n.FUNC_ADD),m=Vi,x=Vi),it)switch(P){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,E=null,A=null,N=null,C.set(0,0,0),R=0,_=P,U=it}return}we=we||ge,nt=nt||me,ot=ot||be,(ge!==m||we!==x)&&(n.blendEquationSeparate(z[ge],z[we]),m=ge,x=we),(me!==p||be!==E||nt!==A||ot!==N)&&(n.blendFuncSeparate(b[me],b[be],b[nt],b[ot]),p=me,E=be,A=nt,N=ot),(ct.equals(C)===!1||Tt!==R)&&(n.blendColor(ct.r,ct.g,ct.b,Tt),C.copy(ct),R=Tt),_=P,U=!1}function H(P,ge){P.side===cn?B(n.CULL_FACE):pe(n.CULL_FACE);let me=P.side===Gt;ge&&(me=!me),V(me),P.blending===Rs&&P.transparent===!1?w(Mi):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const be=P.stencilWrite;o.setTest(be),be&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),v(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(P){S!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),S=P)}function K(P){P!==U0?(pe(n.CULL_FACE),P!==M&&(P===Yu?n.cullFace(n.BACK):P===O0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),M=P}function y(P){P!==W&&(te&&n.lineWidth(P),W=P)}function v(P,ge,me){P?(pe(n.POLYGON_OFFSET_FILL),(Z!==ge||O!==me)&&(n.polygonOffset(ge,me),Z=ge,O=me)):B(n.POLYGON_OFFSET_FILL)}function L(P){P?pe(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function F(P){P===void 0&&(P=n.TEXTURE0+J-1),X!==P&&(n.activeTexture(P),X=P)}function D(P,ge,me){me===void 0&&(X===null?me=n.TEXTURE0+J-1:me=X);let be=ue[me];be===void 0&&(be={type:void 0,texture:void 0},ue[me]=be),(be.type!==P||be.texture!==ge)&&(X!==me&&(n.activeTexture(me),X=me),n.bindTexture(P,ge||se[P]),be.type=P,be.texture=ge)}function k(){const P=ue[X];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(P){Ae.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ae.copy(P))}function Ye(P){Xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function Le(P,ge){let me=l.get(ge);me===void 0&&(me=new WeakMap,l.set(ge,me));let be=me.get(P);be===void 0&&(be=n.getUniformBlockIndex(ge,P.name),me.set(P,be))}function $e(P,ge){const be=l.get(ge).get(P);a.get(ge)!==be&&(n.uniformBlockBinding(ge,be,P.__bindingPointIndex),a.set(ge,be))}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,ue={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,E=null,x=null,A=null,N=null,C=new Ne(0,0,0),R=0,U=!1,S=null,M=null,W=null,Z=null,O=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pe,disable:B,bindFramebuffer:ee,drawBuffers:ne,useProgram:he,setBlending:w,setMaterial:H,setFlipSided:V,setCullFace:K,setLineWidth:y,setPolygonOffset:v,setScissorTest:L,activeTexture:F,bindTexture:D,unbindTexture:k,compressedTexImage2D:ae,compressedTexImage3D:$,texImage2D:Me,texImage3D:We,updateUBOMapping:Le,uniformBlockBinding:$e,texStorage2D:Se,texStorage3D:xe,texSubImage2D:le,texSubImage3D:de,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:ke,viewport:Ye,reset:Ee}}function eb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return d?new OffscreenCanvas(y,v):Ir("canvas")}function _(y,v,L){let F=1;const D=K(y);if((D.width>L||D.height>L)&&(F=L/Math.max(D.width,D.height)),F<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(F*D.width),ae=Math.floor(F*D.height);h===void 0&&(h=g(k,ae));const $=v?g(k,ae):h;return $.width=k,$.height=ae,$.getContext("2d").drawImage(y,0,0,k,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+k+"x"+ae+")."),$}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Ot&&y.minFilter!==Yt}function p(y){n.generateMipmap(y)}function E(y,v,L,F,D=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=v;if(v===n.RED&&(L===n.FLOAT&&(k=n.R32F),L===n.HALF_FLOAT&&(k=n.R16F),L===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.R8UI),L===n.UNSIGNED_SHORT&&(k=n.R16UI),L===n.UNSIGNED_INT&&(k=n.R32UI),L===n.BYTE&&(k=n.R8I),L===n.SHORT&&(k=n.R16I),L===n.INT&&(k=n.R32I)),v===n.RG&&(L===n.FLOAT&&(k=n.RG32F),L===n.HALF_FLOAT&&(k=n.RG16F),L===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RG8UI),L===n.UNSIGNED_SHORT&&(k=n.RG16UI),L===n.UNSIGNED_INT&&(k=n.RG32UI),L===n.BYTE&&(k=n.RG8I),L===n.SHORT&&(k=n.RG16I),L===n.INT&&(k=n.RG32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),v===n.RGBA){const ae=D?qo:Ze.getTransfer(F);L===n.FLOAT&&(k=n.RGBA32F),L===n.HALF_FLOAT&&(k=n.RGBA16F),L===n.UNSIGNED_BYTE&&(k=ae===st?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function x(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ot&&y.minFilter!==Yt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function A(y){const v=y.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&u.delete(v)}function N(y){const v=y.target;v.removeEventListener("dispose",N),U(v)}function C(y){const v=i.get(y);if(v.__webglInit===void 0)return;const L=y.source,F=f.get(L);if(F){const D=F[v.__cacheKey];D.usedTimes--,D.usedTimes===0&&R(y),Object.keys(F).length===0&&f.delete(L)}i.remove(y)}function R(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const L=y.source,F=f.get(L);delete F[v.__cacheKey],o.memory.textures--}function U(y){const v=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let D=0;D<v.__webglFramebuffer[F].length;D++)n.deleteFramebuffer(v.__webglFramebuffer[F][D]);else n.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)n.deleteFramebuffer(v.__webglFramebuffer[F]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=y.textures;for(let F=0,D=L.length;F<D;F++){const k=i.get(L[F]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(L[F])}i.remove(y)}let S=0;function M(){S=0}function W(){const y=S;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),S+=1,y}function Z(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function O(y,v){const L=i.get(y);if(y.isVideoTexture&&H(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const F=y.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(L,y,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function J(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Ae(L,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function te(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Ae(L,y,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function ie(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Xe(L,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const oe={[Hs]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},X={[Ot]:n.NEAREST,[mp]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},ue={[Nx]:n.NEVER,[Hx]:n.ALWAYS,[Dx]:n.LESS,[wp]:n.LEQUAL,[Ux]:n.EQUAL,[Bx]:n.GEQUAL,[Ox]:n.GREATER,[Fx]:n.NOTEQUAL};function ce(y,v){if(v.type===bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yt||v.magFilter===Do||v.magFilter===dr||v.magFilter===kn||v.minFilter===Yt||v.minFilter===Do||v.minFilter===dr||v.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,oe[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,X[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,X[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==dr&&v.minFilter!==kn||v.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ye(y,v){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",A));const F=v.source;let D=f.get(F);D===void 0&&(D={},f.set(F,D));const k=Z(v);if(k!==y.__cacheKey){D[k]===void 0&&(D[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),D[k].usedTimes++;const ae=D[y.__cacheKey];ae!==void 0&&(D[y.__cacheKey].usedTimes--,ae.usedTimes===0&&R(v)),y.__cacheKey=k,y.__webglTexture=D[k].texture}return L}function Ae(y,v,L){let F=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=n.TEXTURE_3D);const D=ye(y,v),k=v.source;t.bindTexture(F,y.__webglTexture,n.TEXTURE0+L);const ae=i.get(k);if(k.version!==ae.__version||D===!0){t.activeTexture(n.TEXTURE0+L);const $=Ze.getPrimaries(Ze.workingColorSpace),le=v.colorSpace===pi?null:Ze.getPrimaries(v.colorSpace),de=v.colorSpace===pi||$===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let re=_(v.image,!1,s.maxTextureSize);re=V(v,re);const fe=r.convert(v.format,v.colorSpace),Se=r.convert(v.type);let xe=E(v.internalFormat,fe,Se,v.colorSpace,v.isVideoTexture);ce(F,v);let Me;const We=v.mipmaps,ke=v.isVideoTexture!==!0&&xe!==Tp,Ye=ae.__version===void 0||D===!0,Le=k.dataReady,$e=x(v,re);if(v.isDepthTexture)xe=n.DEPTH_COMPONENT16,v.type===bn?xe=n.DEPTH_COMPONENT32F:v.type===zs?xe=n.DEPTH_COMPONENT24:v.type===Or&&(xe=n.DEPTH24_STENCIL8),Ye&&(ke?t.texStorage2D(n.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Se,null));else if(v.isDataTexture)if(We.length>0){ke&&Ye&&t.texStorage2D(n.TEXTURE_2D,$e,xe,We[0].width,We[0].height);for(let Ee=0,P=We.length;Ee<P;Ee++)Me=We[Ee],ke?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Me.width,Me.height,fe,Se,Me.data):t.texImage2D(n.TEXTURE_2D,Ee,xe,Me.width,Me.height,0,fe,Se,Me.data);v.generateMipmaps=!1}else ke?(Ye&&t.texStorage2D(n.TEXTURE_2D,$e,xe,re.width,re.height),Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,fe,Se,re.data)):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Se,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,xe,We[0].width,We[0].height,re.depth);for(let Ee=0,P=We.length;Ee<P;Ee++)Me=We[Ee],v.format!==dn?fe!==null?ke?Le&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Me.width,Me.height,re.depth,fe,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,xe,Me.width,Me.height,re.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Me.width,Me.height,re.depth,fe,Se,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,xe,Me.width,Me.height,re.depth,0,fe,Se,Me.data)}else{ke&&Ye&&t.texStorage2D(n.TEXTURE_2D,$e,xe,We[0].width,We[0].height);for(let Ee=0,P=We.length;Ee<P;Ee++)Me=We[Ee],v.format!==dn?fe!==null?ke?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Me.width,Me.height,fe,Se,Me.data):t.texImage2D(n.TEXTURE_2D,Ee,xe,Me.width,Me.height,0,fe,Se,Me.data)}else if(v.isDataArrayTexture)ke?(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,xe,re.width,re.height,re.depth),Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Se,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,fe,Se,re.data);else if(v.isData3DTexture)ke?(Ye&&t.texStorage3D(n.TEXTURE_3D,$e,xe,re.width,re.height,re.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Se,re.data)):t.texImage3D(n.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,fe,Se,re.data);else if(v.isFramebufferTexture){if(Ye)if(ke)t.texStorage2D(n.TEXTURE_2D,$e,xe,re.width,re.height);else{let Ee=re.width,P=re.height;for(let ge=0;ge<$e;ge++)t.texImage2D(n.TEXTURE_2D,ge,xe,Ee,P,0,fe,Se,null),Ee>>=1,P>>=1}}else if(We.length>0){if(ke&&Ye){const Ee=K(We[0]);t.texStorage2D(n.TEXTURE_2D,$e,xe,Ee.width,Ee.height)}for(let Ee=0,P=We.length;Ee<P;Ee++)Me=We[Ee],ke?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,fe,Se,Me):t.texImage2D(n.TEXTURE_2D,Ee,xe,fe,Se,Me);v.generateMipmaps=!1}else if(ke){if(Ye){const Ee=K(re);t.texStorage2D(n.TEXTURE_2D,$e,xe,Ee.width,Ee.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Se,re)}else t.texImage2D(n.TEXTURE_2D,0,xe,fe,Se,re);m(v)&&p(F),ae.__version=k.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Xe(y,v,L){if(v.image.length!==6)return;const F=ye(y,v),D=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const k=i.get(D);if(D.version!==k.__version||F===!0){t.activeTexture(n.TEXTURE0+L);const ae=Ze.getPrimaries(Ze.workingColorSpace),$=v.colorSpace===pi?null:Ze.getPrimaries(v.colorSpace),le=v.colorSpace===pi||ae===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let P=0;P<6;P++)!de&&!re?fe[P]=_(v.image[P],!0,s.maxCubemapSize):fe[P]=re?v.image[P].image:v.image[P],fe[P]=V(v,fe[P]);const Se=fe[0],xe=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),We=E(v.internalFormat,xe,Me,v.colorSpace),ke=v.isVideoTexture!==!0,Ye=k.__version===void 0||F===!0,Le=D.dataReady;let $e=x(v,Se);ce(n.TEXTURE_CUBE_MAP,v);let Ee;if(de){ke&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,We,Se.width,Se.height);for(let P=0;P<6;P++){Ee=fe[P].mipmaps;for(let ge=0;ge<Ee.length;ge++){const me=Ee[ge];v.format!==dn?xe!==null?ke?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,0,0,me.width,me.height,xe,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,We,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,0,0,me.width,me.height,xe,Me,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,We,me.width,me.height,0,xe,Me,me.data)}}}else{if(Ee=v.mipmaps,ke&&Ye){Ee.length>0&&$e++;const P=K(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,We,P.width,P.height)}for(let P=0;P<6;P++)if(re){ke?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,fe[P].width,fe[P].height,xe,Me,fe[P].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,We,fe[P].width,fe[P].height,0,xe,Me,fe[P].data);for(let ge=0;ge<Ee.length;ge++){const be=Ee[ge].image[P].image;ke?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,0,0,be.width,be.height,xe,Me,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,We,be.width,be.height,0,xe,Me,be.data)}}else{ke?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,xe,Me,fe[P]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,We,xe,Me,fe[P]);for(let ge=0;ge<Ee.length;ge++){const me=Ee[ge];ke?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,0,0,xe,Me,me.image[P]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,We,xe,Me,me.image[P])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),k.__version=D.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Q(y,v,L,F,D,k){const ae=r.convert(L.format,L.colorSpace),$=r.convert(L.type),le=E(L.internalFormat,ae,$,L.colorSpace);if(!i.get(v).__hasExternalTextures){const re=Math.max(1,v.width>>k),fe=Math.max(1,v.height>>k);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,k,le,re,fe,v.depth,0,ae,$,null):t.texImage2D(D,k,le,re,fe,0,ae,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),w(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,D,i.get(L).__webglTexture,0,b(v)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,D,i.get(L).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(y,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let F=n.DEPTH_COMPONENT24;if(L||w(v)){const D=v.depthTexture;D&&D.isDepthTexture&&(D.type===bn?F=n.DEPTH_COMPONENT32F:D.type===zs&&(F=n.DEPTH_COMPONENT24));const k=b(v);w(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,F,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,k,F,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,F,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const F=b(v);L&&w(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,v.width,v.height):w(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const F=v.textures;for(let D=0;D<F.length;D++){const k=F[D],ae=r.convert(k.format,k.colorSpace),$=r.convert(k.type),le=E(k.internalFormat,ae,$,k.colorSpace),de=b(v);L&&w(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,le,v.width,v.height):w(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O(v.depthTexture,0);const F=i.get(v.depthTexture).__webglTexture,D=b(v);if(v.depthTexture.format===Cs)w(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(v.depthTexture.format===Pr)w(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function B(y){const v=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");pe(v.__webglFramebuffer,y)}else if(L){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]=n.createRenderbuffer(),se(v.__webglDepthbuffer[F],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),se(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(y,v,L){const F=i.get(y);v!==void 0&&Q(F.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&B(y)}function ne(y){const v=y.texture,L=i.get(y),F=i.get(v);y.addEventListener("dispose",N);const D=y.textures,k=y.isWebGLCubeRenderTarget===!0,ae=D.length>1;if(ae||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=v.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[$]=[];for(let le=0;le<v.mipmaps.length;le++)L.__webglFramebuffer[$][le]=n.createFramebuffer()}else L.__webglFramebuffer[$]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)L.__webglFramebuffer[$]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ae)for(let $=0,le=D.length;$<le;$++){const de=i.get(D[$]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&w(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let $=0;$<D.length;$++){const le=D[$];L.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[$]);const de=r.convert(le.format,le.colorSpace),re=r.convert(le.type),fe=E(le.internalFormat,de,re,le.colorSpace,y.isXRRenderTarget===!0),Se=b(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,fe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,L.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),se(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),ce(n.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Q(L.__webglFramebuffer[$][le],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le);else Q(L.__webglFramebuffer[$],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let $=0,le=D.length;$<le;$++){const de=D[$],re=i.get(de);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ce(n.TEXTURE_2D,de),Q(L.__webglFramebuffer,y,de,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,0),m(de)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,F.__webglTexture),ce($,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Q(L.__webglFramebuffer[le],y,v,n.COLOR_ATTACHMENT0,$,le);else Q(L.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,$,0);m(v)&&p($),t.unbindTexture()}y.depthBuffer&&B(y)}function he(y){const v=y.textures;for(let L=0,F=v.length;L<F;L++){const D=v[L];if(m(D)){const k=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(D).__webglTexture;t.bindTexture(k,ae),p(k),t.unbindTexture()}}}function z(y){if(y.samples>0&&w(y)===!1){const v=y.textures,L=y.width,F=y.height;let D=n.COLOR_BUFFER_BIT;const k=[],ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(y),le=v.length>1;if(le)for(let de=0;de<v.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let de=0;de<v.length;de++){k.push(n.COLOR_ATTACHMENT0+de),y.depthBuffer&&k.push(ae);const re=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(re===!1&&(y.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&$.__isTransmissionRenderTarget!==!0&&(D|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[de]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ae])),le){const fe=i.get(v[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,L,F,0,0,L,F,D,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<v.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const re=i.get(v[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function b(y){return Math.min(s.maxSamples,y.samples)}function w(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(y){const v=o.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function V(y,v){const L=y.colorSpace,F=y.format,D=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Et&&L!==pi&&(Ze.getTransfer(L)===st?(F!==dn||D!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function K(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=ie,this.rebindTextures=ee,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=w}function tb(n,e){function t(i,s=pi){let r;const o=Ze.getTransfer(s);if(i===Ei)return n.UNSIGNED_BYTE;if(i===vp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xx)return n.BYTE;if(i===yx)return n.SHORT;if(i===gp)return n.UNSIGNED_SHORT;if(i===_p)return n.INT;if(i===zs)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Xo)return n.HALF_FLOAT;if(i===Sx)return n.ALPHA;if(i===Ex)return n.RGB;if(i===dn)return n.RGBA;if(i===Tx)return n.LUMINANCE;if(i===bx)return n.LUMINANCE_ALPHA;if(i===Cs)return n.DEPTH_COMPONENT;if(i===Pr)return n.DEPTH_STENCIL;if(i===yp)return n.RED;if(i===Mp)return n.RED_INTEGER;if(i===Ax)return n.RG;if(i===Sp)return n.RG_INTEGER;if(i===Ep)return n.RGBA_INTEGER;if(i===Na||i===Da||i===Ua||i===Oa)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tp)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===sh||i===rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sh)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oh||i===ah||i===lh||i===ch||i===uh||i===hh||i===fh||i===dh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===yh||i===Mh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wx||i===Sh||i===Eh||i===Th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class nb extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Mt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new jn({vertexShader:sb,fragmentShader:rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vt(new Br(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ab extends Ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new ob,m=t.getContextAttributes();let p=null,E=null;const x=[],A=[],N=new Be;let C=null;const R=new Ct;R.layers.enable(1),R.viewport=new tt;const U=new Ct;U.layers.enable(2),U.viewport=new tt;const S=[R,U],M=new nb;M.layers.enable(1),M.layers.enable(2);let W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=x[Q];return se===void 0&&(se=new cl,x[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=x[Q];return se===void 0&&(se=new cl,x[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=x[Q];return se===void 0&&(se=new cl,x[Q]=se),se.getHandSpace()};function O(Q){const se=A.indexOf(Q.inputSource);if(se===-1)return;const pe=x[se];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,c||o),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",te);for(let Q=0;Q<x.length;Q++){const se=A[Q];se!==null&&(A[Q]=null,x[Q].disconnect(se))}W=null,Z=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,E=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",J),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new $i(d.framebufferWidth,d.framebufferHeight,{format:dn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,pe=null,B=null;m.depth&&(B=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Pr:Cs,pe=m.stencil?Or:zs);const ee={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new $i(f.textureWidth,f.textureHeight,{format:dn,type:Ei,depthTexture:new zp(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ne=e.properties.get(E);ne.__ignoreDepthValues=f.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function te(Q){for(let se=0;se<Q.removed.length;se++){const pe=Q.removed[se],B=A.indexOf(pe);B>=0&&(A[B]=null,x[B].disconnect(pe))}for(let se=0;se<Q.added.length;se++){const pe=Q.added[se];let B=A.indexOf(pe);if(B===-1){for(let ne=0;ne<x.length;ne++)if(ne>=A.length){A.push(pe),B=ne;break}else if(A[ne]===null){A[ne]=pe,B=ne;break}if(B===-1)break}const ee=x[B];ee&&ee.connect(pe)}}const ie=new I,oe=new I;function X(Q,se,pe){ie.setFromMatrixPosition(se.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const B=ie.distanceTo(oe),ee=se.projectionMatrix.elements,ne=pe.projectionMatrix.elements,he=ee[14]/(ee[10]-1),z=ee[14]/(ee[10]+1),b=(ee[9]+1)/ee[5],w=(ee[9]-1)/ee[5],H=(ee[8]-1)/ee[0],V=(ne[8]+1)/ne[0],K=he*H,y=he*V,v=B/(-H+V),L=v*-H;se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(L),Q.translateZ(v),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const F=he+v,D=z+v,k=K-L,ae=y+(B-L),$=b*z/D*F,le=w*z/D*F;Q.projectionMatrix.makePerspective(k,ae,$,le,F,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ue(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;_.texture!==null&&(Q.near=_.depthNear,Q.far=_.depthFar),M.near=U.near=R.near=Q.near,M.far=U.far=R.far=Q.far,(W!==M.near||Z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),W=M.near,Z=M.far,R.near=W,R.far=Z,U.near=W,U.far=Z,R.updateProjectionMatrix(),U.updateProjectionMatrix(),Q.updateProjectionMatrix());const se=Q.parent,pe=M.cameras;ue(M,se);for(let B=0;B<pe.length;B++)ue(pe[B],se);pe.length===2?X(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),ce(Q,M,se)};function ce(Q,se,pe){pe===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null};let ye=null;function Ae(Q,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let B=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,B=!0);for(let ne=0;ne<pe.length;ne++){const he=pe[ne];let z=null;if(d!==null)z=d.getViewport(he);else{const w=h.getViewSubImage(f,he);z=w.viewport,ne===0&&(e.setRenderTargetTextures(E,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(E))}let b=S[ne];b===void 0&&(b=new Ct,b.layers.enable(ne),b.viewport=new tt,S[ne]=b),b.matrix.fromArray(he.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(he.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(z.x,z.y,z.width,z.height),ne===0&&(M.matrix.copy(b.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),B===!0&&M.cameras.push(b)}const ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const ne=h.getDepthInformation(pe[0]);ne&&ne.isValid&&ne.texture&&_.init(e,ne,s.renderState)}}for(let pe=0;pe<x.length;pe++){const B=A[pe],ee=x[pe];B!==null&&ee!==void 0&&ee.update(B,se,c||o)}_.render(e,M),ye&&ye(Q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Xe=new Hp;Xe.setAnimationLoop(Ae),this.setAnimationLoop=function(Q){ye=Q},this.dispose=function(){}}}const Ui=new Cn,lb=new He;function cb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Op(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,A=E.envMapRotation;if(x&&(m.envMap.value=x,Ui.copy(A),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(Ui)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const N=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*N,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ub(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const A=x.program;i.uniformBlockBinding(E,A)}function c(E,x){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",m));const N=x.program;i.updateUBOMapping(E,N);const C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function u(E){const x=h();E.__bindingPointIndex=x;const A=n.createBuffer(),N=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=s[E.id],A=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,R=A.length;C<R;C++){const U=Array.isArray(A[C])?A[C]:[A[C]];for(let S=0,M=U.length;S<M;S++){const W=U[S];if(d(W,C,S,N)===!0){const Z=W.__offset,O=Array.isArray(W.value)?W.value:[W.value];let J=0;for(let te=0;te<O.length;te++){const ie=O[te],oe=_(ie);typeof ie=="number"||typeof ie=="boolean"?(W.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,Z+J,W.__data)):ie.isMatrix3?(W.__data[0]=ie.elements[0],W.__data[1]=ie.elements[1],W.__data[2]=ie.elements[2],W.__data[3]=0,W.__data[4]=ie.elements[3],W.__data[5]=ie.elements[4],W.__data[6]=ie.elements[5],W.__data[7]=0,W.__data[8]=ie.elements[6],W.__data[9]=ie.elements[7],W.__data[10]=ie.elements[8],W.__data[11]=0):(ie.toArray(W.__data,J),J+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,A,N){const C=E.value,R=x+"_"+A;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const U=N[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return N[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(E){const x=E.uniforms;let A=0;const N=16;for(let R=0,U=x.length;R<U;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,W=S.length;M<W;M++){const Z=S[M],O=Array.isArray(Z.value)?Z.value:[Z.value];for(let J=0,te=O.length;J<te;J++){const ie=O[J],oe=_(ie),X=A%N;X!==0&&N-X<oe.boundary&&(A+=N-X),Z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=oe.storage}}}const C=A%N;return C>0&&(A+=N-C),E.__size=A,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ac{constructor(e={}){const{canvas:t=iy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let A=!1,N=0,C=0,R=null,U=-1,S=null;const M=new tt,W=new tt;let Z=null;const O=new Ne(0);let J=0,te=t.width,ie=t.height,oe=1,X=null,ue=null;const ce=new tt(0,0,te,ie),ye=new tt(0,0,te,ie);let Ae=!1;const Xe=new Tc;let Q=!1,se=!1;const pe=new He,B=new Be,ee=new I,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return R===null?oe:1}let z=i;function b(T,G){const j=t.getContext(T,G);return j!==null?j:null}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){const G="webgl2";if(z=b(G,T),z===null)throw b(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let w,H,V,K,y,v,L,F,D,k,ae,$,le,de,re,fe,Se,xe,Me,We,ke,Ye,Le,$e;function Ee(){w=new xE(z),w.init(),H=new dE(z,w,e),Ye=new tb(z,w),V=new QT(z),K=new SE(z),y=new HT,v=new eb(z,w,V,y,H,Ye,K),L=new mE(x),F=new vE(x),D=new Ry(z),Le=new hE(z,D),k=new yE(z,D,K,Le),ae=new TE(z,k,D,K),Me=new EE(z,H,v),fe=new pE(y),$=new BT(x,L,F,w,H,Le,fe),le=new cb(x,y),de=new VT,re=new $T(w),xe=new uE(x,L,F,V,ae,f,l),Se=new JT(x,ae,H),$e=new ub(z,K,H,V),We=new fE(z,w,K),ke=new ME(z,w,K),K.programs=$.programs,x.capabilities=H,x.extensions=w,x.properties=y,x.renderLists=de,x.shadowMap=Se,x.state=V,x.info=K}Ee();const P=new ab(x,z);this.xr=P,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=w.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=w.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(T){T!==void 0&&(oe=T,this.setSize(te,ie,!1))},this.getSize=function(T){return T.set(te,ie)},this.setSize=function(T,G,j=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ie=G,t.width=Math.floor(T*oe),t.height=Math.floor(G*oe),j===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(te*oe,ie*oe).floor()},this.setDrawingBufferSize=function(T,G,j){te=T,ie=G,oe=j,t.width=Math.floor(T*j),t.height=Math.floor(G*j),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,G,j,Y){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,G,j,Y),V.viewport(M.copy(ce).multiplyScalar(oe).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,G,j,Y){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,G,j,Y),V.scissor(W.copy(ye).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){V.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(T=!0,G=!0,j=!0){let Y=0;if(T){let q=!1;if(R!==null){const ve=R.texture.format;q=ve===Ep||ve===Sp||ve===Mp}if(q){const ve=R.texture.type,Te=ve===Ei||ve===zs||ve===gp||ve===Or||ve===vp||ve===xp,Re=xe.getClearColor(),Ce=xe.getClearAlpha(),Oe=Re.r,De=Re.g,Fe=Re.b;Te?(d[0]=Oe,d[1]=De,d[2]=Fe,d[3]=Ce,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=Oe,g[1]=De,g[2]=Fe,g[3]=Ce,z.clearBufferiv(z.COLOR,0,g))}else Y|=z.COLOR_BUFFER_BIT}G&&(Y|=z.DEPTH_BUFFER_BIT),j&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",be,!1),de.dispose(),re.dispose(),y.dispose(),L.dispose(),F.dispose(),ae.dispose(),Le.dispose(),$e.dispose(),$.dispose(),P.dispose(),P.removeEventListener("sessionstart",xn),P.removeEventListener("sessionend",yn),Ai.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=K.autoReset,G=Se.enabled,j=Se.autoUpdate,Y=Se.needsUpdate,q=Se.type;Ee(),K.autoReset=T,Se.enabled=G,Se.autoUpdate=j,Se.needsUpdate=Y,Se.type=q}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function we(T){const G=T.target;G.removeEventListener("dispose",we),nt(G)}function nt(T){ot(T),y.remove(T)}function ot(T){const G=y.get(T).programs;G!==void 0&&(G.forEach(function(j){$.releaseProgram(j)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,j,Y,q,ve){G===null&&(G=ne);const Te=q.isMesh&&q.matrixWorld.determinant()<0,Re=am(T,G,j,Y,q);V.setMaterial(Y,Te);let Ce=j.index,Oe=1;if(Y.wireframe===!0){if(Ce=k.getWireframeAttribute(j),Ce===void 0)return;Oe=2}const De=j.drawRange,Fe=j.attributes.position;let ft=De.start*Oe,qt=(De.start+De.count)*Oe;ve!==null&&(ft=Math.max(ft,ve.start*Oe),qt=Math.min(qt,(ve.start+ve.count)*Oe)),Ce!==null?(ft=Math.max(ft,0),qt=Math.min(qt,Ce.count)):Fe!=null&&(ft=Math.max(ft,0),qt=Math.min(qt,Fe.count));const _t=qt-ft;if(_t<0||_t===1/0)return;Le.setup(q,Y,Re,j,Ce);let In,ut=We;if(Ce!==null&&(In=D.get(Ce),ut=ke,ut.setIndex(In)),q.isMesh)Y.wireframe===!0?(V.setLineWidth(Y.wireframeLinewidth*he()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(q.isLine){let ze=Y.linewidth;ze===void 0&&(ze=1),V.setLineWidth(ze*he()),q.isLineSegments?ut.setMode(z.LINES):q.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else q.isPoints?ut.setMode(z.POINTS):q.isSprite&&ut.setMode(z.TRIANGLES);if(q.isBatchedMesh)ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ut.renderInstances(ft,_t,q.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,va=Math.min(j.instanceCount,ze);ut.renderInstances(ft,_t,va)}else ut.render(ft,_t)};function ct(T,G,j){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,Vr(T,G,j),T.side=$n,T.needsUpdate=!0,Vr(T,G,j),T.side=cn):Vr(T,G,j)}this.compile=function(T,G,j=null){j===null&&(j=T),m=re.get(j),m.init(),E.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),T!==j&&T.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(x._useLegacyLights);const Y=new Set;return T.traverse(function(q){const ve=q.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Re=ve[Te];ct(Re,j,q),Y.add(Re)}else ct(ve,j,q),Y.add(ve)}),E.pop(),m=null,Y},this.compileAsync=function(T,G,j=null){const Y=this.compile(T,G,j);return new Promise(q=>{function ve(){if(Y.forEach(function(Te){y.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){q(T);return}setTimeout(ve,10)}w.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Tt=null;function it(T){Tt&&Tt(T)}function xn(){Ai.stop()}function yn(){Ai.start()}const Ai=new Hp;Ai.setAnimationLoop(it),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(T){Tt=T,P.setAnimationLoop(T),T===null?Ai.stop():Ai.start()},P.addEventListener("sessionstart",xn),P.addEventListener("sessionend",yn),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(G),G=P.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,G,R),m=re.get(T,E.length),m.init(),E.push(m),pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Xe.setFromProjectionMatrix(pe),se=this.localClippingEnabled,Q=fe.init(this.clippingPlanes,se),_=de.get(T,p.length),_.init(),p.push(_),zc(T,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,ue),this.info.render.frame++,Q===!0&&fe.beginShadows();const j=m.state.shadowsArray;if(Se.render(j,T,G),Q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1)&&xe.render(_,T),m.setupLights(x._useLegacyLights),G.isArrayCamera){const Y=G.cameras;for(let q=0,ve=Y.length;q<ve;q++){const Te=Y[q];Vc(_,T,Te,Te.viewport)}}else Vc(_,T,G);R!==null&&(v.updateMultisampleRenderTarget(R),v.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,G),Le.resetDefaultState(),U=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function zc(T,G,j,Y){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xe.intersectsSprite(T)){Y&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const Te=ae.update(T),Re=T.material;Re.visible&&_.push(T,Te,Re,j,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xe.intersectsObject(T))){const Te=ae.update(T),Re=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ee.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ee.copy(Te.boundingSphere.center)),ee.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){const Ce=Te.groups;for(let Oe=0,De=Ce.length;Oe<De;Oe++){const Fe=Ce[Oe],ft=Re[Fe.materialIndex];ft&&ft.visible&&_.push(T,Te,ft,j,ee.z,Fe)}}else Re.visible&&_.push(T,Te,Re,j,ee.z,null)}}const ve=T.children;for(let Te=0,Re=ve.length;Te<Re;Te++)zc(ve[Te],G,j,Y)}function Vc(T,G,j,Y){const q=T.opaque,ve=T.transmissive,Te=T.transparent;m.setupLightsView(j),Q===!0&&fe.setGlobalState(x.clippingPlanes,j),ve.length>0&&om(q,ve,G,j),Y&&V.viewport(M.copy(Y)),q.length>0&&zr(q,G,j),ve.length>0&&zr(ve,G,j),Te.length>0&&zr(Te,G,j),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function om(T,G,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new $i(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?Xo:Ei,minFilter:kn,samples:4,stencilBuffer:r});const Oe=y.get(m.state.transmissionRenderTarget);Oe.__isTransmissionRenderTarget=!0}const ve=m.state.transmissionRenderTarget;x.getDrawingBufferSize(B),ve.setSize(B.x,B.y);const Te=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(O),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Si,zr(T,j,Y),v.updateMultisampleRenderTarget(ve),v.updateRenderTargetMipmap(ve);let Ce=!1;for(let Oe=0,De=G.length;Oe<De;Oe++){const Fe=G[Oe],ft=Fe.object,qt=Fe.geometry,_t=Fe.material,In=Fe.group;if(_t.side===cn&&ft.layers.test(Y.layers)){const ut=_t.side;_t.side=Gt,_t.needsUpdate=!0,Gc(ft,j,Y,qt,_t,In),_t.side=ut,_t.needsUpdate=!0,Ce=!0}}Ce===!0&&(v.updateMultisampleRenderTarget(ve),v.updateRenderTargetMipmap(ve)),x.setRenderTarget(Te),x.setClearColor(O,J),x.toneMapping=Re}function zr(T,G,j){const Y=G.isScene===!0?G.overrideMaterial:null;for(let q=0,ve=T.length;q<ve;q++){const Te=T[q],Re=Te.object,Ce=Te.geometry,Oe=Y===null?Te.material:Y,De=Te.group;Re.layers.test(j.layers)&&Gc(Re,G,j,Ce,Oe,De)}}function Gc(T,G,j,Y,q,ve){T.onBeforeRender(x,G,j,Y,q,ve),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(x,G,j,Y,T,ve),q.transparent===!0&&q.side===cn&&q.forceSinglePass===!1?(q.side=Gt,q.needsUpdate=!0,x.renderBufferDirect(j,G,Y,q,T,ve),q.side=$n,q.needsUpdate=!0,x.renderBufferDirect(j,G,Y,q,T,ve),q.side=cn):x.renderBufferDirect(j,G,Y,q,T,ve),T.onAfterRender(x,G,j,Y,q,ve)}function Vr(T,G,j){G.isScene!==!0&&(G=ne);const Y=y.get(T),q=m.state.lights,ve=m.state.shadowsArray,Te=q.state.version,Re=$.getParameters(T,q.state,ve,G,j),Ce=$.getProgramCacheKey(Re);let Oe=Y.programs;Y.environment=T.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(T.isMeshStandardMaterial?F:L).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",we),Oe=new Map,Y.programs=Oe);let De=Oe.get(Ce);if(De!==void 0){if(Y.currentProgram===De&&Y.lightsStateVersion===Te)return Wc(T,Re),De}else Re.uniforms=$.getUniforms(T),T.onBuild(j,Re,x),T.onBeforeCompile(Re,x),De=$.acquireProgram(Re,Ce),Oe.set(Ce,De),Y.uniforms=Re.uniforms;const Fe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=fe.uniform),Wc(T,Re),Y.needsLights=cm(T),Y.lightsStateVersion=Te,Y.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=De,Y.uniformsList=null,De}function kc(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Uo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Wc(T,G){const j=y.get(T);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function am(T,G,j,Y,q){G.isScene!==!0&&(G=ne),v.resetTextureUnits();const ve=G.fog,Te=Y.isMeshStandardMaterial?G.environment:null,Re=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Et,Ce=(Y.isMeshStandardMaterial?F:L).get(Y.envMap||Te),Oe=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,De=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!j.morphAttributes.position,ft=!!j.morphAttributes.normal,qt=!!j.morphAttributes.color;let _t=Si;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=x.toneMapping);const In=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ut=In!==void 0?In.length:0,ze=y.get(Y),va=m.state.lights;if(Q===!0&&(se===!0||T!==S)){const Zt=T===S&&Y.id===U;fe.setState(Y,T,Zt)}let at=!1;Y.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==va.state.version||ze.outputColorSpace!==Re||q.isBatchedMesh&&ze.batching===!1||!q.isBatchedMesh&&ze.batching===!0||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||q.isInstancedMesh&&ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ze.instancingMorph===!1&&q.morphTexture!==null||ze.envMap!==Ce||Y.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==De||ze.morphTargets!==Fe||ze.morphNormals!==ft||ze.morphColors!==qt||ze.toneMapping!==_t||ze.morphTargetsCount!==ut)&&(at=!0):(at=!0,ze.__version=Y.version);let wi=ze.currentProgram;at===!0&&(wi=Vr(Y,G,q));let Xc=!1,tr=!1,xa=!1;const bt=wi.getUniforms(),Jn=ze.uniforms;if(V.useProgram(wi.program)&&(Xc=!0,tr=!0,xa=!0),Y.id!==U&&(U=Y.id,tr=!0),Xc||S!==T){bt.setValue(z,"projectionMatrix",T.projectionMatrix),bt.setValue(z,"viewMatrix",T.matrixWorldInverse);const Zt=bt.map.cameraPosition;Zt!==void 0&&Zt.setValue(z,ee.setFromMatrixPosition(T.matrixWorld)),H.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,tr=!0,xa=!0)}if(q.isSkinnedMesh){bt.setOptional(z,q,"bindMatrix"),bt.setOptional(z,q,"bindMatrixInverse");const Zt=q.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),bt.setValue(z,"boneTexture",Zt.boneTexture,v))}q.isBatchedMesh&&(bt.setOptional(z,q,"batchingTexture"),bt.setValue(z,"batchingTexture",q._matricesTexture,v));const ya=j.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&Me.update(q,j,wi),(tr||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,bt.setValue(z,"receiveShadow",q.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jn.envMap.value=Ce,Jn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(Jn.envMapIntensity.value=G.environmentIntensity),tr&&(bt.setValue(z,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&lm(Jn,xa),ve&&Y.fog===!0&&le.refreshFogUniforms(Jn,ve),le.refreshMaterialUniforms(Jn,Y,oe,ie,m.state.transmissionRenderTarget),Uo.upload(z,kc(ze),Jn,v)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Uo.upload(z,kc(ze),Jn,v),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(z,"center",q.center),bt.setValue(z,"modelViewMatrix",q.modelViewMatrix),bt.setValue(z,"normalMatrix",q.normalMatrix),bt.setValue(z,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Zt=Y.uniformsGroups;for(let Ma=0,um=Zt.length;Ma<um;Ma++){const qc=Zt[Ma];$e.update(qc,wi),$e.bind(qc,wi)}}return wi}function lm(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function cm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,G,j){y.get(T.texture).__webglTexture=G,y.get(T.depthTexture).__webglTexture=j;const Y=y.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const j=y.get(T);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,j=0){R=T,N=G,C=j;let Y=!0,q=null,ve=!1,Te=!1;if(T){const Ce=y.get(T);Ce.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):Ce.__webglFramebuffer===void 0?v.setupRenderTarget(T):Ce.__hasExternalTextures&&v.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);const De=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[G])?q=De[G][j]:q=De[G],ve=!0):T.samples>0&&v.useMultisampledRTT(T)===!1?q=y.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?q=De[j]:q=De,M.copy(T.viewport),W.copy(T.scissor),Z=T.scissorTest}else M.copy(ce).multiplyScalar(oe).floor(),W.copy(ye).multiplyScalar(oe).floor(),Z=Ae;if(V.bindFramebuffer(z.FRAMEBUFFER,q)&&Y&&V.drawBuffers(T,q),V.viewport(M),V.scissor(W),V.setScissorTest(Z),ve){const Ce=y.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,j)}else if(Te){const Ce=y.get(T.texture),Oe=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,Oe)}U=-1},this.readRenderTargetPixels=function(T,G,j,Y,q,ve,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){V.bindFramebuffer(z.FRAMEBUFFER,Re);try{const Ce=T.texture,Oe=Ce.format,De=Ce.type;if(Oe!==dn&&Ye.convert(Oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=De===Xo&&(w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float"));if(De!==Ei&&Ye.convert(De)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&De!==bn&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-Y&&j>=0&&j<=T.height-q&&z.readPixels(G,j,Y,q,Ye.convert(Oe),Ye.convert(De),ve)}finally{const Ce=R!==null?y.get(R).__webglFramebuffer:null;V.bindFramebuffer(z.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,G,j=0){const Y=Math.pow(2,-j),q=Math.floor(G.image.width*Y),ve=Math.floor(G.image.height*Y);v.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,T.x,T.y,q,ve),V.unbindTexture()},this.copyTextureToTexture=function(T,G,j,Y=0){const q=G.image.width,ve=G.image.height,Te=Ye.convert(j.format),Re=Ye.convert(j.type);v.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,T.x,T.y,q,ve,Te,Re,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Te,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,T.x,T.y,Te,Re,G.image),Y===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(T,G,j,Y,q=0){const ve=Math.round(T.max.x-T.min.x),Te=Math.round(T.max.y-T.min.y),Re=T.max.z-T.min.z+1,Ce=Ye.convert(Y.format),Oe=Ye.convert(Y.type);let De;if(Y.isData3DTexture)v.setTexture3D(Y,0),De=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)v.setTexture2DArray(Y,0),De=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Fe=z.getParameter(z.UNPACK_ROW_LENGTH),ft=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qt=z.getParameter(z.UNPACK_SKIP_PIXELS),_t=z.getParameter(z.UNPACK_SKIP_ROWS),In=z.getParameter(z.UNPACK_SKIP_IMAGES),ut=j.isCompressedTexture?j.mipmaps[q]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(De,q,G.x,G.y,G.z,ve,Te,Re,Ce,Oe,ut.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(De,q,G.x,G.y,G.z,ve,Te,Re,Ce,ut.data):z.texSubImage3D(De,q,G.x,G.y,G.z,ve,Te,Re,Ce,Oe,ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,_t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,In),q===0&&Y.generateMipmaps&&z.generateMipmap(De),V.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?v.setTextureCube(T,0):T.isData3DTexture?v.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?v.setTexture2DArray(T,0):v.setTexture2D(T,0),V.unbindTexture()},this.resetState=function(){N=0,C=0,R=null,V.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===da?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wc extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new I;class Rc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xf=new I,yf=new tt,Mf=new tt,fb=new I,Sf=new He,go=new I,ul=new Pn,Ef=new He,hl=new pa;class db extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qu,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,go),this.boundingSphere.expandByPoint(go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(s),e.ray.intersectsSphere(ul)!==!1&&(Ef.copy(s).invert(),hl.copy(e.ray).applyMatrix4(Ef),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;yf.fromBufferAttribute(s.attributes.skinIndex,e),Mf.fromBufferAttribute(s.attributes.skinWeight,e),xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Mf.getComponent(r);if(o!==0){const a=yf.getComponent(r);Sf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fb.copy(xf).applyMatrix4(Sf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qp extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $p extends Mt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ot,u=Ot,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new He,pb=new He;class Cc{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:pb;Tf.multiplyMatrices(a,t[r]),Tf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new $p(t,e,e,dn,bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qp),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class jl extends Ft{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new He,bf=new He,_o=[],Af=new Kn,mb=new He,lr=new Vt,cr=new Pn;class gb extends Vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),Af.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(Af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),cr.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),bf.multiplyMatrices(i,_s),lr.matrixWorld=bf,lr.raycast(e,_o);for(let o=0,a=_o.length;o<a;o++){const l=_o[o];l.instanceId=r,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $p(new Float32Array(s*this.count),s,this.count,yp,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pc extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wf=new I,Rf=new I,Cf=new He,fl=new pa,vo=new Pn;class Lc extends ht{constructor(e=new vn,t=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wf.fromBufferAttribute(t,s-1),Rf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wf.distanceTo(Rf);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Cf.copy(s).invert(),fl.copy(e.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let x=p,A=E-1;x<A;x+=d){const N=g.getX(x),C=g.getX(x+1);if(c.fromBufferAttribute(m,N),u.fromBufferAttribute(m,C),fl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let x=p,A=E-1;x<A;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),fl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Pf=new I,Lf=new I;class jp extends Lc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pf.fromBufferAttribute(t,s),Lf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pf.distanceTo(Lf);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _b extends Lc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yp extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const If=new He,Yl=new pa,xo=new Pn,yo=new I;class vb extends ht{constructor(e=new vn,t=new Yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;If.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(If);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);yo.fromBufferAttribute(h,m),Nf(yo,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)yo.fromBufferAttribute(h,g),Nf(yo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nf(n,e,t,i,s,r,o){const a=Yl.distanceSqToPoint(n);if(a<t){const l=new I;Yl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class xb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Be:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],o=[],a=new I,l=new He;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(xt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ic(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Mo=new I,dl=new Ic,pl=new Ic,ml=new Ic;class yb extends xb{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Mo.subVectors(s[0],s[1]).add(s[0]),c=Mo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),dl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),pl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),ml.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),pl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ml.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(dl.calc(l),pl.calc(l),ml.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}const So=new I,Eo=new I,gl=new I,To=new hn;class Mb extends vn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ps*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=To;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),To.getNormal(gl),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const x=(E+1)%3,A=h[E],N=h[x],C=To[u[E]],R=To[u[x]],U=`${A}_${N}`,S=`${N}_${A}`;S in f&&f[S]?(gl.dot(f[S].normal)<=r&&(d.push(C.x,C.y,C.z),d.push(R.x,R.y,R.z)),f[S]=null):U in f||(f[U]={index0:c[E],index1:c[x],normal:gl.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];So.fromBufferAttribute(a,_),Eo.fromBufferAttribute(a,m),d.push(So.x,So.y,So.z),d.push(Eo.x,Eo.y,Eo.z)}this.setAttribute("position",new wn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nc extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends Nc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function bo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Sb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Eb(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Df(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Kp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Hr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tb extends Hr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,a=2*t-i;break;case wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:o=e,l=2*i-t;break;case wh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,A=d*m-d*_;for(let N=0;N!==a;++N)r[N]=p*o[u+N]+E*o[c+N]+x*o[l+N]+A*o[h+N];return r}}class bb extends Hr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Ab extends Hr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ab(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Sb(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ba,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Vs;class Zs extends Ln{}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Lr;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zp extends Ln{}Zp.prototype.ValueTypeName="color";class Ws extends Ln{}Ws.prototype.ValueTypeName="number";class wb extends Hr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)bi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ji extends Ln{InterpolantFactoryMethodLinear(e){return new wb(this.times,this.values,this.getValueSize(),e)}}ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=Vs;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Ln{}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Lr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Ln{}Xs.prototype.ValueTypeName="vector";class Rb{constructor(e="",t=-1,i=[],s=Rx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Pb(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Ln.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Eb(l);l=Df(l,1,u),c=Df(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Kp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new Ws(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(Xs,d+".position",f,"pos",s),i(ji,d+".quaternion",f,"rot",s),i(Xs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Zp;case"quaternion":return ji;case"bool":case"boolean":return Zs;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Pb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cb(n.type);if(n.times===void 0){const t=[],i=[];Kp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lb{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Ib=new Lb;class Qs{constructor(e){this.manager=e!==void 0?e:Ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Nb extends Error{constructor(e,t){super(e),this.response=t}}class Jp extends Qs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:i,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:x,value:A})=>{if(x)p.close();else{_+=A.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,R=u.length;C<R;C++){const U=u[C];U.onProgress&&U.onProgress(N)}p.enqueue(A),E()}})}}});return new Response(m)}else throw new Nb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{vi.add(e,c);const u=Hn[e];delete Hn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Db extends Qs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ir("img");function l(){u(),vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qp extends Qs{constructor(e){super(e)}load(e,t,i,s){const r=new Mt,o=new Db(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class _a extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _l=new He,Uf=new I,Of=new I;class Dc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ub extends Dc{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ob extends _a{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ub}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ff=new He,ur=new I,vl=new I;class Fb extends Dc{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(ur),vl.copy(i.position),vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vl),i.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff)}}class Bb extends _a{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hb extends Dc{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uc extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class em extends _a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zb extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(e,l),r.manager.itemStart(e)}}const Oc="\\[\\]\\.:\\/",Vb=new RegExp("["+Oc+"]","g"),Fc="[^"+Oc+"]",Gb="[^"+Oc.replace("\\.","")+"]",kb=/((?:WC+[\/:])*)/.source.replace("WC",Fc),Wb=/(WCOD+)?/.source.replace("WCOD",Gb),Xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),$b=new RegExp("^"+kb+Wb+Xb+qb+"$"),jb=["material","materials","bones","map"];class Yb{constructor(e,t,i){const s=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vb,"")}static parseTrackName(e){const t=$b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);jb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Yb;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function Bf(n,e){if(e===Cx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Xl||e===bp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Xl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Bc extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new iA(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new dA(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Sr.extractUrlBase(e);o=Sr.resolveURL(c,this.path)}else o=Sr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Jp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===tm){try{o[qe.KHR_BINARY_GLTF]=new pA(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new Jb;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new mA(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new gA;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new _A;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Kb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zb{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Et);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Uc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bb(u),c.distance=h;break;case"spot":c=new Ob(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Jb{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,i){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Et),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}}class Qb{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class eA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class tA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Et)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Et),Promise.all(r)}}class rA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Et),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}}class aA{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class lA{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cA{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uA{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hA{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fA{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class dA{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Qt.TRIANGLES&&c.mode!==Qt.TRIANGLE_STRIP&&c.mode!==Qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new He,m=new I,p=new bi,E=new I(1,1,1),x=new gb(g.geometry,g.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&E.fromBufferAttribute(l.SCALE,A),x.setMatrixAt(A,_.compose(m,p,E));for(const A in l)if(A==="_COLOR_0"){const N=l[A];x.instanceColor=new jl(N.array,N.itemSize,N.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);ht.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const tm="glTF",hr=12,Hf={JSON:1313821514,BIN:5130562};class pA{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-hr,r=new DataView(e,hr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Hf.JSON){const c=new Uint8Array(e,hr+o,a);this.content=i.decode(c)}else if(l===Hf.BIN){const c=hr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Kl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Kl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Is[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Et,f)})})}}class gA{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _A{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class nm extends Hr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,E=1-m,x=p-f+h;for(let A=0;A!==a;A++){const N=o[_+A+a],C=o[_+A+l]*u,R=o[g+A+a],U=o[g+A]*u;r[A]=E*N+x*C+m*R+p*U}return r}}const vA=new bi;class xA extends nm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return vA.fromArray(r).normalize().toArray(r),r}}const Qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zf={9728:Ot,9729:Yt,9984:mp,9985:Do,9986:dr,9987:kn},Vf={33071:mi,33648:Wo,10497:Hs},xl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yA={CUBICSPLINE:void 0,LINEAR:Vs,STEP:Lr},yl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Nc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),n.DefaultMaterial}function Oi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function di(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SA(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function EA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TA(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=n.indices+":"+Ml(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ml(n.targets[i]);return e}function Ml(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Zl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const AA=new He;class wA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Qp(this.options.manager):this.textureLoader=new zb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Oi(r,a,s),di(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Sr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=xl[s.type],a=Is[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=xl[s.type],c=Is[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(E);x||(_=new c(a,p*d,s.count*d/u),x=new hb(_,d/u),t.cache.add(E,x)),m=new Rc(x,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Ft(_,l,g);if(s.sparse!==void 0){const p=xl.SCALAR,E=Is[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,N=new E(o[1],x,s.sparse.count*p),C=new c(o[2],A,s.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized));for(let R=0,U=N.length;R<U;R++){const S=N[R];if(m.setX(S,C[R*l]),l>=2&&m.setY(S,C[R*l+1]),l>=3&&m.setZ(S,C[R*l+2]),l>=4&&m.setW(S,C[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=zf[f.magFilter]||Yt,u.minFilter=zf[f.minFilter]||kn,u.wrapS=Vf[f.wrapS]||Hs,u.wrapT=Vf[f.wrapT]||Hs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mt(_);m.needsUpdate=!0,f(m)}),t.load(Sr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||bA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Yp,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Pc,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Nc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Et),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=cn);const u=r.alphaMode||yl.OPAQUE;if(u===yl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===yl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gi){const h=r.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],Et)}return r.emissiveTexture!==void 0&&o!==gi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),di(h,r),t.associations.set(h,{materials:e}),r.extensions&&Oi(s,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=TA(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Gf(new vn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?MA(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const E=c[d];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new db(_,E):new Vt(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?p.geometry=Bf(p.geometry,bp):m.mode===Qt.TRIANGLE_FAN&&(p.geometry=Bf(p.geometry,Xl));else if(m.mode===Qt.LINES)p=new jp(_,E);else if(m.mode===Qt.LINE_STRIP)p=new Lc(_,E);else if(m.mode===Qt.LINE_LOOP)p=new _b(_,E);else if(m.mode===Qt.POINTS)p=new vb(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&EA(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),m.extensions&&Oi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Oi(s,h[0],r),h[0];const f=new _i;r.extensions&&Oi(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ct(ny.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ma(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),di(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new He;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,x=f.length;E<x;E++){const A=f[E],N=d[E],C=g[E],R=_[E],U=m[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=i._createAnimationTracks(A,N,C,R,U);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Rb(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,AA)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new qp:c.length>1?u=new _i:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),di(u,r),r.extensions&&Oi(i,u,r),r.matrix!==void 0){const h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new _i;i.name&&(r.name=s.createUniqueName(i.name)),di(r,i),i.extensions&&Oi(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof An||f instanceof Mt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ai[r.path]===ai.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ai[r.path]){case ai.weights:c=Ws;break;case ai.rotation:c=ji;break;case ai.position:case ai.scale:c=Xs;break;default:switch(i.itemSize){case 1:c=Ws;break;case 2:case 3:default:c=Xs;break}break}const u=s.interpolation!==void 0?yA[s.interpolation]:Vs,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ai[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Zl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ji?xA:nm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RA(n,e,t){const i=e.attributes,s=new Kn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=Zl(Is[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Zl(Is[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Gf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Kl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==Et&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),di(n,e),RA(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?SA(n,e.targets,t):n})}const Ao="https://visualizer.matthiasheckel.com/images/challange/chs.svg",CA="https://visualizer.matthiasheckel.com/images/challange/paper.svg",PA="https://visualizer.matthiasheckel.com/images/challange/tape.svg",LA="https://visualizer.matthiasheckel.com/images/challange/distance.svg",IA={name:"VariableFontPage",setup(){const n=li(null);let e,t,i,s,r;const o=()=>{e=new wc,t=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Ac({antialias:!0,alpha:!0});const c=n.value;i.setSize(c.clientWidth,c.clientHeight),c.appendChild(i.domElement),t.position.set(0,10,80);const u=new em(16777215,.8);e.add(u);const h=new Uc(16777215,.5);h.position.set(1,1,1),e.add(h),new Bc().load("/models/paper.glb",d=>{s=d.scene,s.scale.set(2,2,2),s.traverse(g=>{if(g.isMesh){g.material=new gi({});const _=new Mb(g.geometry),m=new jp(_,new Pc({color:0,linewidth:5}));g.add(m)}}),e.add(s),a()},d=>console.log("Loading...",d),d=>console.error("Fehler beim Laden:",d)),window.addEventListener("resize",l)},a=()=>{r=requestAnimationFrame(a),s&&(s.rotation.y+=.003),i.render(e,t)},l=()=>{const c=n.value;t.aspect=c.clientWidth/c.clientHeight,t.updateProjectionMatrix(),i.setSize(c.clientWidth,c.clientHeight)};return hc(()=>{o()}),fc(()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",l),i&&i.domElement&&i.dispose()}),{canvasContainer:n}}},NA=Dr('<div class="text"><div class="gmt-wrapper"><div class="gmt">GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+Ao+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+Ao+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+Ao+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+Ao+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    </div></div><div class="top">CHALLENGE</div><div class="columns"><div class="column"><div class="column-content"> 2 × DIN A3 <img src="'+CA+'" class="column-icon" alt="DIN A3"></div></div><div class="column"><div class="column-content"> Klebeband <img src="'+PA+'" class="column-icon" alt="DIN A3"></div></div><div class="column"><div class="column-content"> 30 cm <img src="'+LA+'" class="column-icon" alt="DIN A3"></div></div></div><div class="weight">Wieviel Gewicht kann deine Brücke tragen?</div></div>',1),DA={ref:"canvasContainer",class:"canvas-container"};function UA(n,e,t,i,s,r){return yt(),Ut(en,null,[NA,Ie("div",DA,null,512)],64)}const OA=Kt(IA,[["render",UA]]),FA={name:"GlassLayer",data(){return{mouseX:-200,mouseY:-200}},computed:{circleStyle(){return{transform:`translate3d(${this.mouseX-50}px, ${this.mouseY-50}px, 0)`}}},mounted(){window.addEventListener("mousemove",this.handleMouseMove,{passive:!0})},beforeUnmount(){window.removeEventListener("mousemove",this.handleMouseMove)},methods:{handleMouseMove(n){this.mouseX=n.clientX,this.mouseY=n.clientY}}},BA={class:"glass-layer"},HA=Dr('<svg class="glass-filter-defs" aria-hidden="true"><filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%" primitiveUnits="objectBoundingBox"><feImage href="https://essykings.github.io/JavaScript/map.png" x="-50%" y="-50%" width="200%" height="200%" result="map" preserveAspectRatio="none"></feImage><feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur"></feGaussianBlur><feDisplacementMap in="blur" in2="map" scale="0.8" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></svg>',1);function zA(n,e,t,i,s,r){return yt(),Ut("div",BA,[HA,Ie("div",{class:"mouse-glass-circle",style:ln(r.circleStyle)},null,4)])}const VA=Kt(FA,[["render",zA]]),GA={name:"LiquidCursorBlobs",data(){return{mouseX:-300,mouseY:-300,currentX:-300,currentY:-300,rafId:null}},computed:{cursorStyle(){return{transform:`translate3d(${this.currentX-100}px, ${this.currentY-100}px, 0)`}}},mounted(){window.addEventListener("mousemove",this.handleMouseMove,{passive:!0}),this.animate=this.animate.bind(this),this.animate()},beforeUnmount(){window.removeEventListener("mousemove",this.handleMouseMove),this.rafId&&cancelAnimationFrame(this.rafId)},methods:{handleMouseMove(n){this.mouseX=n.clientX,this.mouseY=n.clientY},animate(){this.currentX+=(this.mouseX-this.currentX)*.16,this.currentY+=(this.mouseY-this.currentY)*.16,this.rafId=requestAnimationFrame(this.animate)}}},kA=Dr(`<svg class="liquid-cursor__defs" aria-hidden="true"><filter id="liquid-goo-strong"><feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 30 -10
                    " result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></svg><div class="liquid-cursor__inner"><span class="liquid-cursor__blob liquid-cursor__blob--1"></span><span class="liquid-cursor__blob liquid-cursor__blob--2"></span><span class="liquid-cursor__blob liquid-cursor__blob--3"></span><span class="liquid-cursor__blob liquid-cursor__blob--4"></span></div>`,2),WA=[kA];function XA(n,e,t,i,s,r){return yt(),Ut("div",{class:"liquid-cursor",style:ln(r.cursorStyle)},WA,4)}const qA=Kt(GA,[["render",XA]]);function $A(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var im={exports:{}};(function(n,e){var t=t||function(){var i=[];return{getAll:function(){return i},removeAll:function(){i=[]},add:function(s){i.push(s)},remove:function(s){var r=i.indexOf(s);r!==-1&&i.splice(r,1)},update:function(s,r){if(i.length===0)return!1;var o=0;for(s=s!==void 0?s:t.now();o<i.length;)i[o].update(s)||r?o++:i.splice(o,1);return!0}}}();typeof window>"u"&&typeof process<"u"?t.now=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof window<"u"&&window.performance!==void 0&&window.performance.now!==void 0?t.now=window.performance.now.bind(window.performance):Date.now!==void 0?t.now=Date.now:t.now=function(){return new Date().getTime()},t.Tween=function(i){var s=i,r={},o={},a={},l=1e3,c=0,u,h=!1,f=!1,d=0,g=null,_=t.Easing.Linear.None,m=t.Interpolation.Linear,p=[],E=null,x=!1,A=null,N=null,C=null;this.to=function(R,U){return o=R,U!==void 0&&(l=U),this},this.start=function(R){t.add(this),f=!0,x=!1,g=R!==void 0?R:t.now(),g+=d;for(var U in o){if(o[U]instanceof Array){if(o[U].length===0)continue;o[U]=[s[U]].concat(o[U])}s[U]!==void 0&&(r[U]=s[U],r[U]instanceof Array||(r[U]*=1),a[U]=r[U]||0)}return this},this.stop=function(){return f?(t.remove(this),f=!1,C!==null&&C.call(s,s),this.stopChainedTweens(),this):this},this.end=function(){return this.update(g+l),this},this.stopChainedTweens=function(){for(var R=0,U=p.length;R<U;R++)p[R].stop()},this.delay=function(R){return d=R,this},this.repeat=function(R){return c=R,this},this.repeatDelay=function(R){return u=R,this},this.yoyo=function(R){return h=R,this},this.easing=function(R){return _=R,this},this.interpolation=function(R){return m=R,this},this.chain=function(){return p=arguments,this},this.onStart=function(R){return E=R,this},this.onUpdate=function(R){return A=R,this},this.onComplete=function(R){return N=R,this},this.onStop=function(R){return C=R,this},this.update=function(R){var U,S,M;if(R<g)return!0;x===!1&&(E!==null&&E.call(s,s),x=!0),S=(R-g)/l,S=S>1?1:S,M=_(S);for(U in o)if(r[U]!==void 0){var W=r[U]||0,Z=o[U];Z instanceof Array?s[U]=m(Z,M):(typeof Z=="string"&&(Z.charAt(0)==="+"||Z.charAt(0)==="-"?Z=W+parseFloat(Z):Z=parseFloat(Z)),typeof Z=="number"&&(s[U]=W+(Z-W)*M))}if(A!==null&&A.call(s,M),S===1)if(c>0){isFinite(c)&&c--;for(U in a){if(typeof o[U]=="string"&&(a[U]=a[U]+parseFloat(o[U])),h){var O=a[U];a[U]=o[U],o[U]=O}r[U]=a[U]}return u!==void 0?g=R+u:g=R+d,!0}else{N!==null&&N.call(s,s);for(var J=0,te=p.length;J<te;J++)p[J].start(g+l);return!1}return!0}},t.Easing={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var s=1.70158;return i*i*((s+1)*i-s)},Out:function(i){var s=1.70158;return--i*i*((s+1)*i+s)+1},InOut:function(i){var s=2.5949095;return(i*=2)<1?.5*(i*i*((s+1)*i-s)):.5*((i-=2)*i*((s+1)*i+s)+2)}},Bounce:{In:function(i){return 1-t.Easing.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?t.Easing.Bounce.In(i*2)*.5:t.Easing.Bounce.Out(i*2-1)*.5+.5}}},t.Interpolation={Linear:function(i,s){var r=i.length-1,o=r*s,a=Math.floor(o),l=t.Interpolation.Utils.Linear;return s<0?l(i[0],i[1],o):s>1?l(i[r],i[r-1],r-o):l(i[a],i[a+1>r?r:a+1],o-a)},Bezier:function(i,s){for(var r=0,o=i.length-1,a=Math.pow,l=t.Interpolation.Utils.Bernstein,c=0;c<=o;c++)r+=a(1-s,o-c)*a(s,c)*i[c]*l(o,c);return r},CatmullRom:function(i,s){var r=i.length-1,o=r*s,a=Math.floor(o),l=t.Interpolation.Utils.CatmullRom;return i[0]===i[r]?(s<0&&(a=Math.floor(o=r*(1+s))),l(i[(a-1+r)%r],i[a],i[(a+1)%r],i[(a+2)%r],o-a)):s<0?i[0]-(l(i[0],i[0],i[1],i[1],-o)-i[0]):s>1?i[r]-(l(i[r],i[r],i[r-1],i[r-1],o-r)-i[r]):l(i[a?a-1:0],i[a],i[r<a+1?r:a+1],i[r<a+2?r:a+2],o-a)},Utils:{Linear:function(i,s,r){return(s-i)*r+i},Bernstein:function(i,s){var r=t.Interpolation.Utils.Factorial;return r(i)/r(s)/r(i-s)},Factorial:function(){var i=[1];return function(s){var r=1;if(i[s])return i[s];for(var o=s;o>1;o--)r*=o;return i[s]=r,r}}(),CatmullRom:function(i,s,r,o,a){var l=(r-i)*.5,c=(o-s)*.5,u=a*a,h=a*u;return(2*s-2*r+l+c)*h+(-3*s+3*r-2*l-c)*u+l*a+s}}},function(i){n.exports=t}()})(im);var jA=im.exports;const Vn=$A(jA),vs=800,Sl=["#FFBC8F","#FFBC8F","#FFBC8F","#FFBC8F"],YA={name:"LiquidCursorThree",props:{targetX:{type:Number,default:0},targetY:{type:Number,default:0},isVisible:{type:Boolean,default:!0},hoverKey:{type:[Number,String],default:null}},data(){return{currentX:0,currentY:0,lastX:0,lastY:0,rafId:null,startTime:0,idleTimeout:null}},computed:{rootStyle(){return{transform:`translate3d(${this.currentX-400}px, ${this.currentY-400}px, 0)`}}},watch:{targetX(){this.hoverKey!==null&&this.startMoveTween(this.targetX,this.targetY)},targetY(){this.hoverKey!==null&&this.startMoveTween(this.targetX,this.targetY)},hoverKey(n,e){if(n!==e){if(this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null),n===null){this.startPaletteTweenTo(Sl),this.idleTimeout=setTimeout(()=>{this.hoverKey===null&&this.moveToIdlePosition()},120);return}this.startPaletteTween(),this.startMoveTween(this.targetX,this.targetY)}}},created(){this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.mesh=null,this.positionTween=null,this.paletteTween=null,this.lastPaletteIndex=-1,this.colorPalettes=[["#1A237E","#3949AB","#64B5F6","#E3F2FD"],["#0D47A1","#1E88E5","#90CAF9","#E1F5FE"],["#1F2937","#6B7280","#D1D5DB","#F3F4F6"],["#052E16","#065F46","#047857","#065F46"],["#F8FAFC","#E5E7EB","#D1D5DB","#9CA3AF"],["#FFE4E6","#FFC1CC","#FFB6C1","#FFA6B0"]],this.currentPaletteState=this.createPaletteState(Sl)},mounted(){this.currentX=window.innerWidth/2,this.currentY=100,this.lastX=this.currentX,this.lastY=this.currentY,this.initThree(),this.setPalette(Sl),this.applyPaletteStateToUniforms(),window.addEventListener("resize",this.handleResize,{passive:!0}),this.animate=this.animate.bind(this),this.startTime=performance.now(),this.animate(this.startTime)},beforeUnmount(){window.removeEventListener("resize",this.handleResize),this.rafId&&cancelAnimationFrame(this.rafId),this.positionTween&&(this.positionTween.stop(),this.positionTween=null),this.paletteTween&&(this.paletteTween.stop(),this.paletteTween=null),Vn.removeAll(),this.mesh&&this.mesh.geometry.dispose(),this.material&&this.material.dispose(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement))},methods:{hexToRgbObject(n){const e=new Ne(n);return{r:e.r,g:e.g,b:e.b}},createPaletteState(n){const[e,t,i,s]=n,r=this.hexToRgbObject(e),o=this.hexToRgbObject(t),a=this.hexToRgbObject(i),l=this.hexToRgbObject(s);return{c1r:r.r,c1g:r.g,c1b:r.b,c2r:o.r,c2g:o.g,c2b:o.b,c3r:a.r,c3g:a.g,c3b:a.b,c4r:l.r,c4g:l.g,c4b:l.b}},setPalette(n){this.currentPaletteState=this.createPaletteState(n)},getRandomPalette(){if(!this.colorPalettes.length)return null;let n=this.lastPaletteIndex;for(;n===this.lastPaletteIndex;)n=Math.floor(Math.random()*this.colorPalettes.length);return this.lastPaletteIndex=n,this.colorPalettes[n]},applyPaletteStateToUniforms(){this.material&&(this.material.uniforms.u_color1.value.set(this.currentPaletteState.c1r,this.currentPaletteState.c1g,this.currentPaletteState.c1b),this.material.uniforms.u_color2.value.set(this.currentPaletteState.c2r,this.currentPaletteState.c2g,this.currentPaletteState.c2b),this.material.uniforms.u_color3.value.set(this.currentPaletteState.c3r,this.currentPaletteState.c3g,this.currentPaletteState.c3b),this.material.uniforms.u_color4.value.set(this.currentPaletteState.c4r,this.currentPaletteState.c4g,this.currentPaletteState.c4b))},startPaletteTween(){const n=this.getRandomPalette();n&&this.startPaletteTweenTo(n)},startPaletteTweenTo(n){if(!this.material||!n)return;this.paletteTween&&this.paletteTween.stop();const e=this.createPaletteState(n);this.paletteTween=new Vn.Tween(this.currentPaletteState).to(e,700).easing(Vn.Easing.Sinusoidal.InOut).onUpdate(()=>{this.applyPaletteStateToUniforms()}).start()},initThree(){const n=vs,e=vs;this.scene=Hi(new wc),this.camera=Hi(new ma(-1,1,1,-1,0,1)),this.renderer=Hi(new Ac({alpha:!0,antialias:!0,powerPreference:"high-performance"})),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,e),this.renderer.setClearColor(0,0);const t=new Br(2,2);this.material=Hi(new jn({transparent:!0,uniforms:{u_time:{value:0},u_resolution:{value:new Be(n,e)},u_mouse:{value:new Be(.5,.5)},u_color1:{value:new I(.941,.412,.4)},u_color2:{value:new I(.98,.839,.651)},u_color3:{value:new I(1,0,.463)},u_color4:{value:new I(.349,.059,.718)}},vertexShader:`
                        varying vec2 vUv;

                        void main() {
                            vUv = uv;
                            gl_Position = vec4(position, 1.0);
                        }
                    `,fragmentShader:`
                        precision highp float;

                        uniform float u_time;
                        uniform vec2 u_resolution;
                        uniform vec2 u_mouse;
                        uniform vec3 u_color1;
                        uniform vec3 u_color2;
                        uniform vec3 u_color3;
                        uniform vec3 u_color4;

                        varying vec2 vUv;

                        float circle(vec2 uv, vec2 pos, float radius, float blur) {
                            float d = length(uv - pos);
                            return 1.0 - smoothstep(radius - blur, radius + blur, d);
                        }

                        float blobField(vec2 uv, vec2 mouse) {
                            float t = u_time;

                            vec2 p1 = vec2(
                                0.34 + sin(t * 1.2) * 0.07,
                                0.36 + cos(t * 1.0) * 0.06
                            );

                            vec2 p2 = vec2(
                                0.68 + cos(t * 1.1 + 1.3) * 0.08,
                                0.38 + sin(t * 1.4 + 0.8) * 0.07
                            );

                            vec2 p3 = vec2(
                                0.42 + sin(t * 1.5 + 2.0) * 0.08,
                                0.70 + cos(t * 1.2 + 0.4) * 0.06
                            );

                            vec2 p4 = vec2(
                                0.70 + cos(t * 1.3 + 2.4) * 0.06,
                                0.70 + sin(t * 1.1 + 1.5) * 0.07
                            );

                            vec2 mp = mix(vec2(0.5, 0.5), mouse, 0.35);

                            float f = 0.0;
                            f += circle(uv, p1, 0.22, 0.18);
                            f += circle(uv, p2, 0.24, 0.18);
                            f += circle(uv, p3, 0.23, 0.18);
                            f += circle(uv, p4, 0.19, 0.16);
                            f += circle(uv, mp, 0.20, 0.22) * 0.8;

                            return f;
                        }

                        vec3 palette(float x) {
                            vec3 color = u_color1;
                            color = mix(color, u_color2, smoothstep(0.0, 0.33, x));
                            color = mix(color, u_color3, smoothstep(0.33, 0.66, x));
                            color = mix(color, u_color4, smoothstep(0.66, 1.0, x));
                            return color;
                        }

                        void main() {
                            vec2 uv = vUv;
                            vec2 mouse = u_mouse;

                            vec2 center = uv - 0.5;
                            float distToCenter = length(center);

                            float field = blobField(uv, mouse);

                            float alphaShape = smoothstep(0.18, 0.95, field);
                            float edgeFade = 1.0 - smoothstep(0.55, 0.92, distToCenter);

                            float wave1 = sin((uv.x * 5.0) + (u_time * 1.2)) * 0.5 + 0.5;
                            float wave2 = cos((uv.y * 6.0) - (u_time * 1.0)) * 0.5 + 0.5;
                            float wave3 = sin((uv.x + uv.y) * 7.0 - u_time * 1.4) * 0.5 + 0.5;

                            float colorMix = (wave1 * 0.35) + (wave2 * 0.35) + (wave3 * 0.30);

                            vec3 color = palette(colorMix);

                            vec2 glowCenter = uv - mouse;
                            float mouseGlow = 1.0 - smoothstep(0.0, 0.45, length(glowCenter));
                            color += vec3(0.18, 0.08, 0.22) * mouseGlow;

                            color *= 1.15;

                            float alpha = alphaShape * edgeFade;

                            gl_FragColor = vec4(color, alpha);
                        }
                    `})),this.mesh=Hi(new Vt(t,this.material)),this.scene.add(this.mesh),this.$refs.root.appendChild(this.renderer.domElement)},startMoveTween(){this.positionTween&&this.positionTween.stop();const n={x:this.currentX,y:this.currentY};this.positionTween=new Vn.Tween(n).to({x:this.targetX,y:this.targetY},250).delay(150).easing(Vn.Easing.Sinusoidal.Out).onUpdate(()=>{this.currentX=n.x,this.currentY=n.y}).start()},handleResize(){!this.renderer||!this.material||(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(vs,vs),this.material.uniforms.u_resolution.value.set(vs,vs))},animate(n=0){const e=(n-this.startTime)*7e-4;Vn.update(n);const t=this.currentX-this.lastX,i=this.currentY-this.lastY,s=.5+Math.max(-.18,Math.min(.18,t*.02)),r=.5-Math.max(-.18,Math.min(.18,i*.02));this.material&&(this.material.uniforms.u_time.value=e,this.material.uniforms.u_mouse.value.set(s,r)),this.lastX=this.currentX,this.lastY=this.currentY,this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(this.animate)}}};function KA(n,e,t,i,s,r){return yt(),Ut("div",{ref:"root",class:Gn(["liquid-cursor-three",{"is-visible":t.isVisible}]),style:ln(r.rootStyle)},null,6)}const ZA=Kt(YA,[["render",KA]]),JA={name:"HeaderTypeAnimation",props:{texts:{type:Array,default:()=>["BKGD Berufskolleg Grafikdesign","Gestaltungs- und Medientechnik | TG","Berufskolleg Foto","BF Druck- und Medientechnik"]},typingSpeed:{type:Number,default:56},deletingSpeed:{type:Number,default:30},holdDelay:{type:Number,default:1800},startDelay:{type:Number,default:300},loop:{type:Boolean,default:!0}},data(){return{textIndex:0,charIndex:0,displayedText:"",isDeleting:!1,timerId:null,cursorTimerId:null,showCursor:!0}},computed:{currentFullText(){return this.texts[this.textIndex]||""}},mounted(){this.startCursorBlink(),this.timerId=setTimeout(()=>{this.tick()},this.startDelay)},beforeUnmount(){this.clearTimers()},methods:{clearTimers(){this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.cursorTimerId&&(clearInterval(this.cursorTimerId),this.cursorTimerId=null)},startCursorBlink(){this.cursorTimerId=setInterval(()=>{this.showCursor=!this.showCursor},500)},scheduleNext(n){this.timerId=setTimeout(()=>{this.tick()},n)},tick(){const n=this.currentFullText;if(n){if(!this.isDeleting){if(this.charIndex+=1,this.displayedText=n.slice(0,this.charIndex),this.charIndex>=n.length){this.isDeleting=!0,this.scheduleNext(this.holdDelay);return}this.scheduleNext(this.typingSpeed);return}if(this.charIndex-=1,this.displayedText=n.slice(0,this.charIndex),this.charIndex<=0){if(this.isDeleting=!1,this.loop){this.textIndex=(this.textIndex+1)%this.texts.length,this.scheduleNext(250);return}return}this.scheduleNext(this.deletingSpeed)}}}},QA=["aria-label"],ew={class:"header-type-animation__text"};function tw(n,e,t,i,s,r){return yt(),Ut("div",{class:"header-type-animation","aria-label":r.currentFullText},[Ie("span",ew,Fo(s.displayedText),1),Ie("span",{class:Gn(["header-type-animation__cursor",{"is-hidden":!s.showCursor}])},"|",2)],8,QA)}const nw=Kt(JA,[["render",tw],["__scopeId","data-v-6a0b793d"]]),sm="https://visualizer.matthiasheckel.com/images/bkgd/down.svg",iw="https://visualizer.matthiasheckel.com/images/bkgd/top.svg",sw={name:"BKGDPage",components:{GlassLayer:VA,LiquidCursorBlobs:qA,LiquidCursorThree:ZA,HeaderTypeAnimation:nw},data(){return{tileWidth:300,rows:5,columns:1,tileImages:[],hoverNames:[],hoverActive:[],tileDelays:[],isScrolled:!1,ticking:!1,showSplash:!0,splashFadeOut:!1,blobsVisible:!1,activeTileIndex:null,blobX:0,blobY:0,homeBlobX:0,homeBlobY:0,namesPool:["Leon Schneider","Mia Fischer","Noah Wagner","Emma Becker","Luca Hoffmann","Lina Keller","Jonas Hartmann","Sophie Braun","Ben Neumann","Hannah Vogel"]}},computed:{totalTiles(){return this.columns*this.rows},gridWidth(){return this.columns*this.tileWidth},layoutWidth(){return this.gridWidth+200},floatingBlobsStyle(){return{transform:`translate(${this.blobX}px, ${this.blobY}px)`}}},mounted(){this.updateColumns(),this.generateTileImages(),this.handleScroll(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.onScroll,{passive:!0}),setTimeout(()=>{this.splashFadeOut=!0},2e3),setTimeout(()=>{this.showSplash=!1},2600),this.$nextTick(()=>{this.setBlobHomePosition(),2e3+(this.totalTiles-1)*180+700,setTimeout(()=>{this.blobsVisible=!0},2600)})},beforeUnmount(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.onScroll)},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},updateColumns(){const n=window.innerWidth,e=Math.floor(n/this.tileWidth);this.columns=Math.max(1,Math.min(e,7))},getRandomImage(){return`/images/bkgd/images/${Math.floor(Math.random()*9)+1}.png`},getRandomName(){const n=Math.floor(Math.random()*this.namesPool.length);return this.namesPool[n]},getDelaySequence(n){return Array.from({length:n},(e,t)=>`${2e3+t*180}ms`)},generateTileImages(){const n=this.totalTiles;this.tileImages=Array.from({length:n},()=>this.getRandomImage()),this.hoverNames=Array.from({length:n},()=>this.getRandomName()),this.hoverActive=Array.from({length:n},()=>!1),this.tileDelays=this.getDelaySequence(n)},appendTiles(n){const e=Array.from({length:n},()=>this.getRandomImage()),t=Array.from({length:n},()=>this.getRandomName()),i=Array.from({length:n},()=>!1),s=this.getDelaySequence(n);this.tileImages.push(...e),this.hoverNames.push(...t),this.hoverActive.push(...i),this.tileDelays.push(...s)},loadMore(){const e=this.columns*4;this.rows+=4,this.appendTiles(e),this.$nextTick(()=>{this.setBlobHomePosition()})},handleResize(){const n=this.columns;this.updateColumns(),this.columns!==n&&this.generateTileImages(),this.$nextTick(()=>{this.setBlobHomePosition()})},onScroll(){this.ticking||(window.requestAnimationFrame(()=>{this.handleScroll(),this.ticking=!1}),this.ticking=!0)},handleScroll(){const n=window.scrollY||window.pageYOffset;this.isScrolled=n>50},setBlobHomePosition(){const n=this.$el.querySelector(".header__center");if(!n)return;const e=n.getBoundingClientRect();this.homeBlobX=e.left+e.width/2,this.homeBlobY=e.top+e.height/2,this.activeTileIndex===null&&(this.blobX=this.homeBlobX,this.blobY=this.homeBlobY)},moveBlobsToTile(n){const e=n.currentTarget;if(!e)return;const t=e.getBoundingClientRect();this.blobX=t.left+t.width/2,this.blobY=t.top+t.height/2},onTileEnter(n,e){this.hoverNames[n]=this.getRandomName(),this.hoverActive[n]=!0,this.activeTileIndex=n,this.moveBlobsToTile(e)},onTileLeave(){this.hoverActive=this.hoverActive.map(()=>!1),this.activeTileIndex=null,this.blobX=this.homeBlobX,this.blobY=this.homeBlobY}}},er=n=>(Md("data-v-595abb96"),n=n(),Sd(),n),rw={class:"page"},ow=Dr('<div class="splash__content" data-v-595abb96><div class="splash__title-wrap" data-v-595abb96><h1 class="splash__title" data-v-595abb96>Schülerarbeiten</h1><p class="splash__subtitle" data-v-595abb96>Carl-Hofer-Schule Karlsruhe </p></div><div class="splash__loader" data-v-595abb96><div class="splash__loader-bar" data-v-595abb96></div></div></div>',1),aw=[ow],lw={class:"header__left"},cw=er(()=>Ie("h1",{class:"header__title"},"Carl-Hofer-Schule Karlsruhe",-1)),uw=er(()=>Ie("h2",{class:"header__subtitle"},"Schülerarbeiten",-1)),hw=er(()=>Ie("div",{class:"header__right"},[Ie("a",{href:"#faqs",class:"header__link"},"FAQs ________>")],-1)),fw={class:"filters"},dw=er(()=>Ie("button",{class:"filter"},[Ie("img",{src:sm,class:"filter__icon",alt:""}),Ie("span",null,"Jahrgang")],-1)),pw=er(()=>Ie("button",{class:"filter"},[Ie("img",{src:sm,class:"filter__icon",alt:""}),Ie("span",null,"Fachbereich")],-1)),mw=[dw,pw],gw=er(()=>Ie("img",{src:iw,class:"back-to-top__icon",alt:"Back to top"},null,-1)),_w=[gw],vw=["onMouseenter"],xw=["src","alt"],yw={class:"tile__label-line"},Mw=Dr('<div class="load-more-wrap" data-v-595abb96><button class="load-more-button" data-v-595abb96> Mehr laden </button></div><footer class="footer" data-v-595abb96><a href="/datenschutz" class="footer__link" data-v-595abb96>Datenschutz</a><a href="/impressum" class="footer__link" data-v-595abb96>Impressum</a></footer>',2);function Sw(n,e,t,i,s,r){const o=Ar("LiquidCursorThree"),a=Ar("HeaderTypeAnimation");return yt(),Ut("div",rw,[St(o,{"target-x":s.blobX,"target-y":s.blobY,"is-visible":s.blobsVisible,"hover-key":s.activeTileIndex},null,8,["target-x","target-y","is-visible","hover-key"]),s.showSplash?(yt(),Ut("div",{key:0,class:Gn(["splash",{"splash--fade-out":s.splashFadeOut}])},aw,2)):aa("",!0),Ie("header",{class:Gn(["header",{"is-hidden":s.isScrolled}])},[Ie("div",{class:"header__inner",style:ln({width:`${r.layoutWidth}px`})},[Ie("div",lw,[cw,uw,St(a,{class:"header__animation",texts:["Berufskolleg Grafikdesign","Gestaltungs- und Medientechnik | TG","Berufskolleg Foto","BF Druck- und Medientechnik"]})]),hw],4)],2),Ie("div",fw,[Ie("div",{class:"filters__inner",style:ln({width:`${r.layoutWidth}px`})},mw,4)]),Ie("div",{class:Gn(["back-to-top",{"is-visible":s.isScrolled}]),style:ln({left:`calc(50% + ${r.gridWidth/2}px)`})},[Ie("button",{class:"back-to-top__button",onClick:e[0]||(e[0]=(...l)=>r.scrollToTop&&r.scrollToTop(...l))},_w)],6),Ie("div",{class:"grid",style:ln({gridTemplateColumns:"repeat("+s.columns+", 300px)"})},[(yt(!0),Ut(en,null,Ag(s.tileImages,(l,c)=>(yt(),Ut("div",{key:c,class:"tile",style:ln({animationDelay:s.tileDelays[c]}),onMouseenter:u=>r.onTileEnter(c,u),onMouseleave:e[1]||(e[1]=(...u)=>r.onTileLeave&&r.onTileLeave(...u))},[Ie("img",{src:l,alt:"Tile Bild "+(c+1),class:"tile__image"},null,8,xw),Ie("div",{class:Gn(["tile__label",{"is-visible":s.hoverActive[c]}])},[Ie("span",yw,Fo(s.hoverNames[c]),1)],2)],44,vw))),128))],4),Mw])}const Ew=Kt(sw,[["render",Sw],["__scopeId","data-v-595abb96"]]),Tw=n=>{const i=n.split("/").pop().replace(".png","").split("_");return{name:`${i[0]} ${i[1]}`,title:i[2],color1:`#${i[3]}`,color2:`#${i[4]}`}},bw=({scene:n,onModelLoaded:e})=>{const t=new Bc,i=new Qp;t.load("/models/shoes.glb",s=>{const r=new _i,o=[],a=[],l=[],c=[],u=[],h=["/textures/shoes/Antal_Alexandra_Gachiakuta - Verse Rudo Edition_D6B4B4_802626_01.png","/textures/shoes/Apostoloska_Mirela_VicVerse_FFE0EC_FFBDDA_02.png","/textures/shoes/Bluschke_Sofia_The SWAGers_4E6291_9C2323_05.png"],f=s.scene,d=(_,m)=>{_.traverse(p=>{if(!p.isMesh)return;p.castShadow=!0,p.receiveShadow=!0;const x=(Array.isArray(p.material)?p.material:[p.material]).map(A=>{if(!A)return A;const N=A.clone();return N.map&&(N.map=m),N.side=cn,N.needsUpdate=!0,N});p.material=Array.isArray(p.material)?x:x[0]})};h.forEach((_,m)=>{const p=f.clone(!0),E=Tw(_);p.scale.set(1,1,1),p.position.set(m*40,0,0);const x=i.load(_);x.flipY=!1,x.colorSpace=Rt,d(p,x),r.add(p),o.push(p),a.push(E.name),l.push(E.title),c.push(E.color1),u.push(E.color2)}),n.add(r),e&&e({shoes:o,shoeNames:a,shoeTitles:l,shoeColors1:c,shoeColors2:u,shoeGroup:r,moveShoesLeft:()=>{new Vn.Tween(r.position).to({x:r.position.x-40,y:r.position.y,z:r.position.z},5e3).easing(Vn.Easing.Elastic.Out).start()}})},void 0,s=>{console.error("Fehler beim Laden von shoes.glb:",s)})},Aw=({onPathLoaded:n})=>{new Bc().load("/models/path_converse.glb",t=>{const i=[];if(t.scene.updateMatrixWorld(!0),t.scene.traverse(r=>{var a,l;if(!((l=(a=r.geometry)==null?void 0:a.attributes)!=null&&l.position))return;const o=r.geometry.attributes.position;for(let c=0;c<o.count;c++){const u=new I(o.getX(c),o.getY(c),o.getZ(c));u.applyMatrix4(r.matrixWorld),i.push(u)}}),i.length<2){console.error("Path loaded, aber zu wenige Punkte gefunden:",i.length);return}const s=i[0];console.log("Path loaded:",i.length,i),console.log("Camera start point:",s),n&&n({points:i,startPoint:s})},void 0,t=>{console.error("Fehler beim Laden von path_converse.glb:",t)})},ww=({camera:n,cameraPathPoints:e,duration:t=2e4,callback:i})=>{if(!e||e.length<2){console.error("Path not loaded yet!");return}const s=new yb(e);s.curveType="centripetal";const r=new I(0,2,0);let o=null;const a=l=>{o||(o=l);const c=l-o,u=Math.min(c/t,1),h=s.getPointAt(u);n.position.copy(h),n.lookAt(r),u<1?requestAnimationFrame(a):i&&i()};requestAnimationFrame(a)},Rw="https://visualizer.matthiasheckel.com/images/logo.svg",Cw={name:"ConversePage",setup(){const n=li(null),e=li(null),t=li(null),i=li(null),s=li(""),r=li(""),o=3e3,a=3e3,l=3e3,c=2e3,u=500,h=3e3;let f,d,g,_,m=[],p=[],E=[],x=[],A=[],N=0,C,R=null,U=null,S=!1,M=!1;const W=se=>new Promise(pe=>{U=setTimeout(pe,se)}),Z=()=>{const se=x[N]||"#fde002",pe=A[N]||"#e40a6f";return`linear-gradient(to top, ${se} 0%, ${pe} 100%)`},O=()=>{!e.value||!t.value||(e.value.style.background=Z(),e.value.style.opacity="1",t.value.style.background="#DDDDDD",t.value.style.opacity="0",t.value.style.transition=`opacity ${l}ms ease`)},J=async()=>{i.value&&(i.value.style.transition=`transform ${u}ms ease, opacity ${u}ms ease`,i.value.style.transform="translateX(-50%) translateY(0)",i.value.style.opacity="1",await W(u))},te=async()=>{i.value&&(i.value.style.transition=`transform ${u}ms ease, opacity ${u}ms ease`,i.value.style.transform="translateX(-50%) translateY(-160%)",i.value.style.opacity="0",await W(u))},ie=async()=>{t.value&&(t.value.style.transition=`opacity ${l}ms ease`,t.value.style.opacity="1",await W(l))},oe=async()=>{await W(c)},X=()=>{p.length&&(N+=1,N>=p.length&&(N=0),C&&C(),s.value=p[N],r.value=E[N],e.value&&(e.value.style.background=Z()))},ue=async()=>{t.value&&(t.value.style.transition=`opacity ${l}ms ease`,t.value.style.opacity="0",await W(l))},ce=()=>new Promise(se=>{ww({camera:d,cameraPathPoints:R,callback:se})}),ye=async()=>{if(!M)for(M=!0;!S;){if(await W(o),S||(await ce(),S)||(await W(a),S)||(await ie(),S)||(await oe(),S)||(await te(),S)||(X(),S)||(await W(h),S)||(await ue(),S))return;await J()}},Ae=()=>{f=new wc,d=new Ct(30,window.innerWidth/window.innerHeight,.1,1e3),g=new Ac({antialias:!0,alpha:!0});const se=n.value;g.setSize(se.clientWidth,se.clientHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),se.appendChild(g.domElement);const pe=new em(16777215,1.2);f.add(pe);const B=new Uc(16777215,2.5);B.position.set(1,1,1),f.add(B),bw({scene:f,onModelLoaded:ee=>{m=ee.shoes,p=ee.shoeNames,E=ee.shoeTitles,x=ee.shoeColors1,A=ee.shoeColors2,C=ee.moveShoesLeft,s.value=p[0]||"",r.value=E[0]||"",O()}}),Aw({onPathLoaded:({points:ee,startPoint:ne})=>{R=ee,d.position.copy(ne),d.lookAt(new I(0,2,0)),ye()}}),Xe(),window.addEventListener("resize",Q)},Xe=()=>{_=requestAnimationFrame(Xe),Vn.update(),m.forEach(se=>{se.rotation.y+=.003}),g.render(f,d)},Q=()=>{const se=n.value;!se||!d||!g||(d.aspect=se.clientWidth/se.clientHeight,d.updateProjectionMatrix(),g.setSize(se.clientWidth,se.clientHeight))};return hc(()=>{Ae()}),fc(()=>{var se;S=!0,_&&cancelAnimationFrame(_),U&&clearTimeout(U),window.removeEventListener("resize",Q),g&&g.dispose(),(se=g==null?void 0:g.domElement)!=null&&se.parentNode&&g.domElement.parentNode.removeChild(g.domElement)}),{canvasContainer:n,backgroundCurrent:e,backgroundWhite:t,textContainer:i,currentName:s,currentTitle:r}}},Pw={ref:"backgroundCurrent",class:"background background-current"},Lw={ref:"backgroundWhite",class:"background background-white"},Iw={ref:"textContainer",class:"text"},Nw={class:"top"},Dw=Ie("div",{class:"by"},"von",-1),Uw={class:"name"},Ow={ref:"infoContainer",class:"infoContainer"},Fw=Ie("img",{src:Rw,alt:"Logo",class:"info-logo"},null,-1),Bw=Ie("div",{class:"info-text"}," Im Fach Grafikdesign gestalteten die Schülerinnen und Schüler des Berufskollegs Grafikdesign einen Converse-Schuh zum Thema Farbe. Lehrkraft: M. Heckel | Carl-Hofer-Schule Karlsruhe ",-1),Hw=[Fw,Bw],zw={ref:"canvasContainer",class:"canvas-container"};function Vw(n,e,t,i,s,r){return yt(),Ut(en,null,[Ie("div",Pw,null,512),Ie("div",Lw,null,512),Ie("div",Iw,[Ie("div",Nw,Fo(i.currentTitle),1),Dw,Ie("div",Uw,Fo(i.currentName),1)],512),Ie("div",Ow,Hw,512),Ie("div",zw,null,512)],64)}const Gw=Kt(Cw,[["render",Vw]]),Hc=P_(qv),kw=[{path:"/login",name:"LoginPage",component:g0},{path:"/chaos",name:"chaos",component:T0,meta:{requiresAuth:!1}},{path:"/variablefont",name:"variablefont",component:D0,meta:{requiresAuth:!1}},{path:"/bridgepage",name:"bridgepage",component:OA,meta:{requiresAuth:!1}},{path:"/bkgdpage",name:"bkgdpage",component:Ew,meta:{requiresAuth:!1}},{path:"/conversepage",name:"conversepage",component:Gw,meta:{requiresAuth:!1}},{path:"/",name:"home",component:()=>dm(()=>import("./MainApplication-DzZ4BxSx.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}}],rm=Gv({history:_v(),routes:kw});rm.beforeEach((n,e,t)=>{n.meta.requiresAuth&&!Ww()&&n.query.parameter!=="1"?t("/login"):t()});function Ww(){const n=hp.getters.isAuthenticated;return console.log("isAuthenticated:",n),n}Hc.use(rm);Hc.use(hp);Hc.mount("#app");window.addEventListener("gesturestart",n=>n.preventDefault());window.addEventListener("gesturechange",n=>n.preventDefault());window.addEventListener("gestureend",n=>n.preventDefault());export{Kt as _,jg as a,St as b,Ut as c,yt as o,Ar as r,ig as w};
