const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainApplication-BH3oSTmt.js","assets/MainApplication-BuNsdgdj.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Yp="modulepreload",Zp=function(n){return"https://visualizer.matthiasheckel.com/"+n},Lc={},Jp=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Zp(l),l in Lc)return;Lc[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Yp,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zl(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const st={},_s=[],Qt=()=>{},Qp=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),kl=n=>n.startsWith("onUpdate:"),yt=Object.assign,Vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},em=Object.prototype.hasOwnProperty,$e=(n,e)=>em.call(n,e),Pe=Array.isArray,vs=n=>ko(n)==="[object Map]",wf=n=>ko(n)==="[object Set]",Ne=n=>typeof n=="function",pt=n=>typeof n=="string",ks=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",Rf=n=>(at(n)||Ne(n))&&Ne(n.then)&&Ne(n.catch),Cf=Object.prototype.toString,ko=n=>Cf.call(n),tm=n=>ko(n).slice(8,-1),Pf=n=>ko(n)==="[object Object]",Gl=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cr=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nm=/-(\w)/g,An=Vo(n=>n.replace(nm,(e,t)=>t?t.toUpperCase():"")),im=/\B([A-Z])/g,Vs=Vo(n=>n.replace(im,"-$1").toLowerCase()),Go=Vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),da=Vo(n=>n?`on${Go(n)}`:""),_i=(n,e)=>!Object.is(n,e),vo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},wo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ic;const Lf=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _r(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=pt(i)?am(i):_r(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(pt(n)||at(n))return n}const sm=/;(?![^(]*\))/g,rm=/:([^]+)/,om=/\/\*[^]*?\*\//g;function am(n){const e={};return n.replace(om,"").split(sm).forEach(t=>{if(t){const i=t.split(rm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fi(n){let e="";if(pt(n))e=n;else if(Pe(n))for(let t=0;t<n.length;t++){const i=Fi(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=zl(lm);function If(n){return!!n||n===""}const um=n=>pt(n)?n:n==null?"":Pe(n)||at(n)&&(n.toString===Cf||!Ne(n.toString))?JSON.stringify(n,Nf,2):String(n),Nf=(n,e)=>e&&e.__v_isRef?Nf(n,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[pa(i,r)+" =>"]=s,t),{})}:wf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>pa(t))}:ks(e)?pa(e):at(e)&&!Pe(e)&&!Pf(e)?String(e):e,pa=(n,e="")=>{var t;return ks(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class Df{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hm(n){return new Df(n)}function fm(n,e=sn){e&&e.active&&e.effects.push(n)}function dm(){return sn}let zi;class Wl{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,fm(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Xi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(pm(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),qi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=fi,t=zi;try{return fi=!0,zi=this,this._runnings++,Nc(this),this.fn()}finally{Dc(this),this._runnings--,zi=t,fi=e}}stop(){var e;this.active&&(Nc(this),Dc(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function pm(n){return n.value}function Nc(n){n._trackId++,n._depsLength=0}function Dc(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Uf(n.deps[e],n);n.deps.length=n._depsLength}}function Uf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let fi=!0,fl=0;const Of=[];function Xi(){Of.push(fi),fi=!1}function qi(){const n=Of.pop();fi=n===void 0?!0:n}function Xl(){fl++}function ql(){for(fl--;!fl&&dl.length;)dl.shift()()}function Ff(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Uf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const dl=[];function Bf(n,e,t){Xl();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&dl.push(i.scheduler)))}ql()}const Hf=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},pl=new WeakMap,ki=Symbol(""),ml=Symbol("");function zt(n,e,t){if(fi&&zi){let i=pl.get(n);i||pl.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Hf(()=>i.delete(t))),Ff(zi,s)}}function kn(n,e,t,i,s,r){const o=pl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Pe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!ks(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Pe(n)?Gl(t)&&a.push(o.get("length")):(a.push(o.get(ki)),vs(n)&&a.push(o.get(ml)));break;case"delete":Pe(n)||(a.push(o.get(ki)),vs(n)&&a.push(o.get(ml)));break;case"set":vs(n)&&a.push(o.get(ki));break}Xl();for(const l of a)l&&Bf(l,4);ql()}const mm=zl("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ks)),Uc=gm();function gm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let r=0,o=this.length;r<o;r++)zt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Xi(),Xl();const i=Ke(this)[e].apply(this,t);return ql(),qi(),i}}),n}function _m(n){const e=Ke(this);return zt(e,"has",n),e.hasOwnProperty(n)}class kf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Pm:Xf:r?Wf:Gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!s){if(o&&$e(Uc,t))return Reflect.get(Uc,t,i);if(t==="hasOwnProperty")return _m}const a=Reflect.get(e,t,i);return(ks(t)?zf.has(t):mm(t))||(s||zt(e,"get",t),r)?a:kt(a)?o&&Gl(t)?a:a.value:at(a)?s?jf(a):wr(a):a}}class Vf extends kf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Rs(r);if(!Ro(i)&&!Rs(i)&&(r=Ke(r),i=Ke(i)),!Pe(e)&&kt(r)&&!kt(i))return l?!1:(r.value=i,!0)}const o=Pe(e)&&Gl(t)?Number(t)<e.length:$e(e,t),a=Reflect.set(e,t,i,s);return e===Ke(s)&&(o?_i(i,r)&&kn(e,"set",t,i):kn(e,"add",t,i)),a}deleteProperty(e,t){const i=$e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&kn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ks(t)||!zf.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Pe(e)?"length":ki),Reflect.ownKeys(e)}}class vm extends kf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xm=new Vf,ym=new vm,Mm=new Vf(!0),jl=n=>n,Wo=n=>Reflect.getPrototypeOf(n);function Dr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Ke(n),r=Ke(e);t||(_i(e,r)&&zt(s,"get",e),zt(s,"get",r));const{has:o}=Wo(s),a=i?jl:t?Yl:vr;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Ur(n,e=!1){const t=this.__v_raw,i=Ke(t),s=Ke(n);return e||(_i(n,s)&&zt(i,"has",n),zt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Or(n,e=!1){return n=n.__v_raw,!e&&zt(Ke(n),"iterate",ki),Reflect.get(n,"size",n)}function Oc(n){n=Ke(n);const e=Ke(this);return Wo(e).has.call(e,n)||(e.add(n),kn(e,"add",n,n)),this}function Fc(n,e){e=Ke(e);const t=Ke(this),{has:i,get:s}=Wo(t);let r=i.call(t,n);r||(n=Ke(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?_i(e,o)&&kn(t,"set",n,e):kn(t,"add",n,e),this}function Bc(n){const e=Ke(this),{has:t,get:i}=Wo(e);let s=t.call(e,n);s||(n=Ke(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&kn(e,"delete",n,void 0),r}function Hc(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&kn(n,"clear",void 0,void 0),t}function Fr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Ke(o),l=e?jl:n?Yl:vr;return!n&&zt(a,"iterate",ki),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Br(n,e,t){return function(...i){const s=this.__v_raw,r=Ke(s),o=vs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?jl:e?Yl:vr;return!e&&zt(r,"iterate",l?ml:ki),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $n(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Sm(){const n={get(r){return Dr(this,r)},get size(){return Or(this)},has:Ur,add:Oc,set:Fc,delete:Bc,clear:Hc,forEach:Fr(!1,!1)},e={get(r){return Dr(this,r,!1,!0)},get size(){return Or(this)},has:Ur,add:Oc,set:Fc,delete:Bc,clear:Hc,forEach:Fr(!1,!0)},t={get(r){return Dr(this,r,!0)},get size(){return Or(this,!0)},has(r){return Ur.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Fr(!0,!1)},i={get(r){return Dr(this,r,!0,!0)},get size(){return Or(this,!0)},has(r){return Ur.call(this,r,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Br(r,!1,!1),t[r]=Br(r,!0,!1),e[r]=Br(r,!1,!0),i[r]=Br(r,!0,!0)}),[n,t,e,i]}const[Em,Tm,bm,Am]=Sm();function $l(n,e){const t=e?n?Am:bm:n?Tm:Em;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const wm={get:$l(!1,!1)},Rm={get:$l(!1,!0)},Cm={get:$l(!0,!1)},Gf=new WeakMap,Wf=new WeakMap,Xf=new WeakMap,Pm=new WeakMap;function Lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Im(n){return n.__v_skip||!Object.isExtensible(n)?0:Lm(tm(n))}function wr(n){return Rs(n)?n:Kl(n,!1,xm,wm,Gf)}function qf(n){return Kl(n,!1,Mm,Rm,Wf)}function jf(n){return Kl(n,!0,ym,Cm,Xf)}function Kl(n,e,t,i,s){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Im(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function xs(n){return Rs(n)?xs(n.__v_raw):!!(n&&n.__v_isReactive)}function Rs(n){return!!(n&&n.__v_isReadonly)}function Ro(n){return!!(n&&n.__v_isShallow)}function $f(n){return xs(n)||Rs(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function Kf(n){return Object.isExtensible(n)&&wo(n,"__v_skip",!0),n}const vr=n=>at(n)?wr(n):n,Yl=n=>at(n)?jf(n):n;class Yf{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wl(()=>e(this._value),()=>xo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ke(this);return(!e._cacheable||e.effect.dirty)&&_i(e._value,e._value=e.effect.run())&&xo(e,4),Zf(e),e.effect._dirtyLevel>=2&&xo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Nm(n,e,t=!1){let i,s;const r=Ne(n);return r?(i=n,s=Qt):(i=n.get,s=n.set),new Yf(i,s,r||!s,t)}function Zf(n){var e;fi&&zi&&(n=Ke(n),Ff(zi,(e=n.dep)!=null?e:n.dep=Hf(()=>n.dep=void 0,n instanceof Yf?n:void 0)))}function xo(n,e=4,t){n=Ke(n);const i=n.dep;i&&Bf(i,e)}function kt(n){return!!(n&&n.__v_isRef===!0)}function Jf(n){return Qf(n,!1)}function Dm(n){return Qf(n,!0)}function Qf(n,e){return kt(n)?n:new Um(n,e)}class Um{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:vr(e)}get value(){return Zf(this),this._value}set value(e){const t=this.__v_isShallow||Ro(e)||Rs(e);e=t?e:Ke(e),_i(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:vr(e),xo(this,4))}}function ys(n){return kt(n)?n.value:n}const Om={get:(n,e,t)=>ys(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return kt(s)&&!kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ed(n){return xs(n)?n:new Proxy(n,Om)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(n,e,t,i){try{return i?n(...i):n()}catch(s){Xo(s,e,t)}}function un(n,e,t,i){if(Ne(n)){const r=di(n,e,t,i);return r&&Rf(r)&&r.catch(o=>{Xo(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(un(n[r],e,t,i));return s}function Xo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){di(l,null,10,[n,o,a]);return}}Fm(n,t,s,i)}function Fm(n,e,t,i=!0){console.error(n)}let xr=!1,gl=!1;const wt=[];let yn=0;const Ms=[];let ii=null,Di=0;const td=Promise.resolve();let Zl=null;function nd(n){const e=Zl||td;return n?e.then(this?n.bind(this):n):e}function Bm(n){let e=yn+1,t=wt.length;for(;e<t;){const i=e+t>>>1,s=wt[i],r=yr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Jl(n){(!wt.length||!wt.includes(n,xr&&n.allowRecurse?yn+1:yn))&&(n.id==null?wt.push(n):wt.splice(Bm(n.id),0,n),id())}function id(){!xr&&!gl&&(gl=!0,Zl=td.then(rd))}function Hm(n){const e=wt.indexOf(n);e>yn&&wt.splice(e,1)}function zm(n){Pe(n)?Ms.push(...n):(!ii||!ii.includes(n,n.allowRecurse?Di+1:Di))&&Ms.push(n),id()}function zc(n,e,t=xr?yn+1:0){for(;t<wt.length;t++){const i=wt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;wt.splice(t,1),t--,i()}}}function sd(n){if(Ms.length){const e=[...new Set(Ms)].sort((t,i)=>yr(t)-yr(i));if(Ms.length=0,ii){ii.push(...e);return}for(ii=e,Di=0;Di<ii.length;Di++)ii[Di]();ii=null,Di=0}}const yr=n=>n.id==null?1/0:n.id,km=(n,e)=>{const t=yr(n)-yr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function rd(n){gl=!1,xr=!0,wt.sort(km);try{for(yn=0;yn<wt.length;yn++){const e=wt[yn];e&&e.active!==!1&&di(e,null,14)}}finally{yn=0,wt.length=0,sd(),xr=!1,Zl=null,(wt.length||Ms.length)&&rd()}}function Vm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||st;f&&(s=t.map(d=>pt(d)?d.trim():d)),h&&(s=t.map(hl))}let a,l=i[a=da(e)]||i[a=da(An(e))];!l&&r&&(l=i[a=da(Vs(e))]),l&&un(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,un(c,n,6,s)}}function od(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ne(n)){const l=c=>{const u=od(c,e,!0);u&&(a=!0,yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(at(n)&&i.set(n,null),null):(Pe(r)?r.forEach(l=>o[l]=null):yt(o,r),at(n)&&i.set(n,o),o)}function qo(n,e){return!n||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,Vs(e))||$e(n,e))}let Bt=null,jo=null;function Co(n){const e=Bt;return Bt=n,jo=n&&n.type.__scopeId||null,e}function ad(n){jo=n}function ld(){jo=null}function Gm(n,e=Bt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Jc(-1);const r=Co(e);let o;try{o=n(...s)}finally{Co(r),i._d&&Jc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ma(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=n;let m,p;const T=Co(n);try{if(t.shapeFlag&4){const A=s||i,H=A;m=vn(u.call(H,A,h,r,d,f,g)),p=l}else{const A=e;m=vn(A.length>1?A(r,{attrs:l,slots:a,emit:c}):A(r,null)),p=e.props?l:Wm(l)}}catch(A){fr.length=0,Xo(A,n,1),m=Dt(Vi)}let x=m;if(p&&v!==!1){const A=Object.keys(p),{shapeFlag:H}=x;A.length&&H&7&&(o&&A.some(kl)&&(p=Xm(p,o)),x=Cs(x,p))}return t.dirs&&(x=Cs(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Co(T),m}const Wm=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},Xm=(n,e)=>{const t={};for(const i in n)(!kl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function qm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?kc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!qo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?kc(i,o,c):!0:!!o;return!1}function kc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!qo(t,r))return!0}return!1}function jm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $m="components";function Ql(n,e){return Ym($m,n,!0,e)||n}const Km=Symbol.for("v-ndc");function Ym(n,e,t=!0,i=!1){const s=Bt||Rt;if(s){const r=s.type;{const a=Gg(r,!1);if(a&&(a===e||a===An(e)||a===Go(An(e))))return r}const o=Vc(s[n]||r[n],e)||Vc(s.appContext[n],e);return!o&&i?r:o}}function Vc(n,e){return n&&(n[e]||n[An(e)]||n[Go(An(e))])}const Zm=n=>n.__isSuspense;function Jm(n,e){e&&e.pendingBranch?Pe(n)?e.effects.push(...n):e.effects.push(n):zm(n)}const Qm=Symbol.for("v-scx"),eg=()=>Vn(Qm),Hr={};function Ss(n,e,t){return cd(n,e,t)}function cd(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=st){if(e&&r){const w=e;e=(...P)=>{w(...P),H()}}const l=Rt,c=w=>i===!0?w:Bi(w,i===!1?1:void 0);let u,h=!1,f=!1;if(kt(n)?(u=()=>n.value,h=Ro(n)):xs(n)?(u=()=>c(n),h=!0):Pe(n)?(f=!0,h=n.some(w=>xs(w)||Ro(w)),u=()=>n.map(w=>{if(kt(w))return w.value;if(xs(w))return c(w);if(Ne(w))return di(w,l,2)})):Ne(n)?e?u=()=>di(n,l,2):u=()=>(d&&d(),un(n,l,3,[g])):u=Qt,e&&i){const w=u;u=()=>Bi(w())}let d,g=w=>{d=x.onStop=()=>{di(w,l,4),d=x.onStop=void 0}},v;if(Qo)if(g=Qt,e?t&&un(e,l,3,[u(),f?[]:void 0,g]):u(),s==="sync"){const w=eg();v=w.__watcherHandles||(w.__watcherHandles=[])}else return Qt;let m=f?new Array(n.length).fill(Hr):Hr;const p=()=>{if(!(!x.active||!x.dirty))if(e){const w=x.run();(i||h||(f?w.some((P,G)=>_i(P,m[G])):_i(w,m)))&&(d&&d(),un(e,l,3,[w,m===Hr?void 0:f&&m[0]===Hr?[]:m,g]),m=w)}else x.run()};p.allowRecurse=!!e;let T;s==="sync"?T=p:s==="post"?T=()=>Ft(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),T=()=>Jl(p));const x=new Wl(u,Qt,T),A=dm(),H=()=>{x.stop(),A&&Vl(A.effects,x)};return e?t?p():m=x.run():s==="post"?Ft(x.run.bind(x),l&&l.suspense):x.run(),v&&v.push(H),H}function tg(n,e,t){const i=this.proxy,s=pt(n)?n.includes(".")?ud(i,n):()=>i[n]:n.bind(i,i);let r;Ne(e)?r=e:(r=e.handler,t=e);const o=Rr(this),a=cd(s,r.bind(i),t);return o(),a}function ud(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Bi(n,e,t=0,i){if(!at(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),kt(n))Bi(n.value,e,t,i);else if(Pe(n))for(let s=0;s<n.length;s++)Bi(n[s],e,t,i);else if(wf(n)||vs(n))n.forEach(s=>{Bi(s,e,t,i)});else if(Pf(n))for(const s in n)Bi(n[s],e,t,i);return n}function Gc(n,e){if(Bt===null)return n;const t=ea(Bt)||Bt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=st]=e[s];r&&(Ne(r)&&(r={mounted:r,updated:r}),r.deep&&Bi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ei(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Xi(),un(l,t,8,[n.el,a,n,e]),qi())}}/*! #__NO_SIDE_EFFECTS__ */function hd(n,e){return Ne(n)?yt({name:n.name},e,{setup:n}):n}const yo=n=>!!n.type.__asyncLoader,fd=n=>n.type.__isKeepAlive;function ng(n,e){dd(n,"a",e)}function ig(n,e){dd(n,"da",e)}function dd(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if($o(e,i,t),t){let s=t.parent;for(;s&&s.parent;)fd(s.parent.vnode)&&sg(i,e,t,s),s=s.parent}}function sg(n,e,t,i){const s=$o(e,n,i,!0);gd(()=>{Vl(i[e],s)},t)}function $o(n,e,t=Rt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Xi();const a=Rr(t),l=un(e,t,n,o);return a(),qi(),l});return i?s.unshift(r):s.push(r),r}}const Wn=n=>(e,t=Rt)=>(!Qo||n==="sp")&&$o(n,(...i)=>e(...i),t),rg=Wn("bm"),pd=Wn("m"),og=Wn("bu"),ag=Wn("u"),md=Wn("bum"),gd=Wn("um"),lg=Wn("sp"),cg=Wn("rtg"),ug=Wn("rtc");function hg(n,e=Rt){$o("ec",n,e)}function fg(n,e,t,i){let s;const r=t;if(Pe(n)||pt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(at(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}const _l=n=>n?Rd(n)?ea(n)||n.proxy:_l(n.parent):null,ur=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_l(n.parent),$root:n=>_l(n.root),$emit:n=>n.emit,$options:n=>ec(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Jl(n.update)}),$nextTick:n=>n.n||(n.n=nd.bind(n.proxy)),$watch:n=>tg.bind(n)}),ga=(n,e)=>n!==st&&!n.__isScriptSetup&&$e(n,e),dg={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ga(i,e))return o[e]=1,i[e];if(s!==st&&$e(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&$e(c,e))return o[e]=3,r[e];if(t!==st&&$e(t,e))return o[e]=4,t[e];vl&&(o[e]=0)}}const u=ur[e];let h,f;if(u)return e==="$attrs"&&zt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&$e(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,$e(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ga(s,e)?(s[e]=t,!0):i!==st&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==st&&$e(n,o)||ga(e,o)||(a=r[0])&&$e(a,o)||$e(i,o)||$e(ur,o)||$e(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wc(n){return Pe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let vl=!0;function pg(n){const e=ec(n),t=n.proxy,i=n.ctx;vl=!1,e.beforeCreate&&Xc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:x,unmounted:A,render:H,renderTracked:w,renderTriggered:P,errorCaptured:G,serverPrefetch:b,expose:M,inheritAttrs:W,components:J,directives:U,filters:Z}=e;if(c&&mg(c,i,null),o)for(const oe in o){const V=o[oe];Ne(V)&&(i[oe]=V.bind(t))}if(s){const oe=s.call(t,t);at(oe)&&(n.data=wr(oe))}if(vl=!0,r)for(const oe in r){const V=r[oe],le=Ne(V)?V.bind(t,t):Ne(V.get)?V.get.bind(t,t):Qt,ae=!Ne(V)&&Ne(V.set)?V.set.bind(t):Qt,Me=Jt({get:le,set:ae});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ae=>Me.value=Ae})}if(a)for(const oe in a)_d(a[oe],i,t,oe);if(l){const oe=Ne(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(V=>{Mo(V,oe[V])})}u&&Xc(u,n,"c");function ie(oe,V){Pe(V)?V.forEach(le=>oe(le.bind(t))):V&&oe(V.bind(t))}if(ie(rg,h),ie(pd,f),ie(og,d),ie(ag,g),ie(ng,v),ie(ig,m),ie(hg,G),ie(ug,w),ie(cg,P),ie(md,T),ie(gd,A),ie(lg,b),Pe(M))if(M.length){const oe=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(oe,V,{get:()=>t[V],set:le=>t[V]=le})})}else n.exposed||(n.exposed={});H&&n.render===Qt&&(n.render=H),W!=null&&(n.inheritAttrs=W),J&&(n.components=J),U&&(n.directives=U)}function mg(n,e,t=Qt){Pe(n)&&(n=xl(n));for(const i in n){const s=n[i];let r;at(s)?"default"in s?r=Vn(s.from||i,s.default,!0):r=Vn(s.from||i):r=Vn(s),kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Xc(n,e,t){un(Pe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _d(n,e,t,i){const s=i.includes(".")?ud(t,i):()=>t[i];if(pt(n)){const r=e[n];Ne(r)&&Ss(s,r)}else if(Ne(n))Ss(s,n.bind(t));else if(at(n))if(Pe(n))n.forEach(r=>_d(r,e,t,i));else{const r=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(r)&&Ss(s,r,n)}}function ec(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Po(l,c,o,!0)),Po(l,e,o)),at(e)&&r.set(e,l),l}function Po(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Po(n,r,t,!0),s&&s.forEach(o=>Po(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=gg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gg={data:qc,props:jc,emits:jc,methods:or,computed:or,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:or,directives:or,watch:vg,provide:qc,inject:_g};function qc(n,e){return e?n?function(){return yt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function _g(n,e){return or(xl(n),xl(e))}function xl(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function or(n,e){return n?yt(Object.create(null),n,e):e}function jc(n,e){return n?Pe(n)&&Pe(e)?[...new Set([...n,...e])]:yt(Object.create(null),Wc(n),Wc(e??{})):e}function vg(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=Pt(n[i],e[i]);return t}function vd(){return{app:null,config:{isNativeTag:Qp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xg=0;function yg(n,e){return function(i,s=null){Ne(i)||(i=yt({},i)),s!=null&&!at(s)&&(s=null);const r=vd(),o=new WeakSet;let a=!1;const l=r.app={_uid:xg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Dt(i,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ea(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=hr;hr=l;try{return c()}finally{hr=u}}};return l}}let hr=null;function Mo(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Vn(n,e,t=!1){const i=Rt||Bt;if(i||hr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:hr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ne(e)?e.call(i&&i.proxy):e}}function Mg(n,e,t,i=!1){const s={},r={};wo(r,Yo,1),n.propsDefaults=Object.create(null),xd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:qf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ke(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(qo(n.emitsOptions,f))continue;const d=e[f];if(l)if($e(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=An(f);s[g]=yl(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{xd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!$e(e,h)&&((u=Vs(h))===h||!$e(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=yl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!$e(e,h))&&(delete r[h],c=!0)}c&&kn(n,"set","$attrs")}function xd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(cr(l))continue;const c=e[l];let u;s&&$e(s,u=An(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:qo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ke(t),c=a||st;for(let u=0;u<r.length;u++){const h=r[u];t[h]=yl(s,l,h,c[h],n,!$e(c,h))}}return o}function yl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Rr(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Vs(t))&&(i=!0))}return i}function yd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ne(n)){const u=h=>{l=!0;const[f,d]=yd(h,e,!0);yt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return at(n)&&i.set(n,_s),_s;if(Pe(r))for(let u=0;u<r.length;u++){const h=An(r[u]);$c(h)&&(o[h]=st)}else if(r)for(const u in r){const h=An(u);if($c(h)){const f=r[u],d=o[h]=Pe(f)||Ne(f)?{type:f}:yt({},f);if(d){const g=Zc(Boolean,d.type),v=Zc(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||$e(d,"default"))&&a.push(h)}}}const c=[o,a];return at(n)&&i.set(n,c),c}function $c(n){return n[0]!=="$"&&!cr(n)}function Kc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Yc(n,e){return Kc(n)===Kc(e)}function Zc(n,e){return Pe(e)?e.findIndex(t=>Yc(t,n)):Ne(e)&&Yc(e,n)?0:-1}const Md=n=>n[0]==="_"||n==="$stable",tc=n=>Pe(n)?n.map(vn):[vn(n)],Eg=(n,e,t)=>{if(e._n)return e;const i=Gm((...s)=>tc(e(...s)),t);return i._c=!1,i},Sd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Md(s))continue;const r=n[s];if(Ne(r))e[s]=Eg(s,r,i);else if(r!=null){const o=tc(r);e[s]=()=>o}}},Ed=(n,e)=>{const t=tc(e);n.slots.default=()=>t},Tg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),wo(e,"_",t)):Sd(e,n.slots={})}else n.slots={},e&&Ed(n,e);wo(n.slots,Yo,1)},bg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=st;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(yt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Sd(e,s)),o=e}else e&&(Ed(n,e),o={default:1});if(r)for(const a in s)!Md(a)&&o[a]==null&&delete s[a]};function Ml(n,e,t,i,s=!1){if(Pe(n)){n.forEach((f,d)=>Ml(f,e&&(Pe(e)?e[d]:e),t,i,s));return}if(yo(i)&&!s)return;const r=i.shapeFlag&4?ea(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,$e(h,c)&&(h[c]=null)):kt(c)&&(c.value=null)),Ne(l))di(l,a,12,[o,u]);else{const f=pt(l),d=kt(l);if(f||d){const g=()=>{if(n.f){const v=f?$e(h,l)?h[l]:u[l]:l.value;s?Pe(v)&&Vl(v,r):Pe(v)?v.includes(r)||v.push(r):f?(u[l]=[r],$e(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,$e(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ft(g,t)):g()}}}const Ft=Jm;function Ag(n){return wg(n)}function wg(n,e){const t=Lf();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Qt,insertStaticContent:g}=n,v=(S,R,D,K=null,y=null,_=null,L=void 0,I=null,z=!!R.dynamicChildren)=>{if(S===R)return;S&&!Ys(S,R)&&(K=O(S),Ae(S,y,_,!0),S=null),R.patchFlag===-2&&(z=!1,R.dynamicChildren=null);const{type:N,ref:Q,shapeFlag:q}=R;switch(N){case Ko:m(S,R,D,K);break;case Vi:p(S,R,D,K);break;case So:S==null&&T(R,D,K,L);break;case rn:J(S,R,D,K,y,_,L,I,z);break;default:q&1?H(S,R,D,K,y,_,L,I,z):q&6?U(S,R,D,K,y,_,L,I,z):(q&64||q&128)&&N.process(S,R,D,K,y,_,L,I,z,ce)}Q!=null&&y&&Ml(Q,S&&S.ref,_,R||S,!R)},m=(S,R,D,K)=>{if(S==null)i(R.el=a(R.children),D,K);else{const y=R.el=S.el;R.children!==S.children&&c(y,R.children)}},p=(S,R,D,K)=>{S==null?i(R.el=l(R.children||""),D,K):R.el=S.el},T=(S,R,D,K)=>{[S.el,S.anchor]=g(S.children,R,D,K,S.el,S.anchor)},x=({el:S,anchor:R},D,K)=>{let y;for(;S&&S!==R;)y=f(S),i(S,D,K),S=y;i(R,D,K)},A=({el:S,anchor:R})=>{let D;for(;S&&S!==R;)D=f(S),s(S),S=D;s(R)},H=(S,R,D,K,y,_,L,I,z)=>{R.type==="svg"?L="svg":R.type==="math"&&(L="mathml"),S==null?w(R,D,K,y,_,L,I,z):b(S,R,y,_,L,I,z)},w=(S,R,D,K,y,_,L,I)=>{let z,N;const{props:Q,shapeFlag:q,transition:re,dirs:ue}=S;if(z=S.el=o(S.type,_,Q&&Q.is,Q),q&8?u(z,S.children):q&16&&G(S.children,z,null,K,y,_a(S,_),L,I),ue&&Ei(S,null,K,"created"),P(z,S,S.scopeId,L,K),Q){for(const he in Q)he!=="value"&&!cr(he)&&r(z,he,null,Q[he],_,S.children,K,y,pe);"value"in Q&&r(z,"value",null,Q.value,_),(N=Q.onVnodeBeforeMount)&&_n(N,K,S)}ue&&Ei(S,null,K,"beforeMount");const ee=Rg(y,re);ee&&re.beforeEnter(z),i(z,R,D),((N=Q&&Q.onVnodeMounted)||ee||ue)&&Ft(()=>{N&&_n(N,K,S),ee&&re.enter(z),ue&&Ei(S,null,K,"mounted")},y)},P=(S,R,D,K,y)=>{if(D&&d(S,D),K)for(let _=0;_<K.length;_++)d(S,K[_]);if(y){let _=y.subTree;if(R===_){const L=y.vnode;P(S,L,L.scopeId,L.slotScopeIds,y.parent)}}},G=(S,R,D,K,y,_,L,I,z=0)=>{for(let N=z;N<S.length;N++){const Q=S[N]=I?si(S[N]):vn(S[N]);v(null,Q,R,D,K,y,_,L,I)}},b=(S,R,D,K,y,_,L)=>{const I=R.el=S.el;let{patchFlag:z,dynamicChildren:N,dirs:Q}=R;z|=S.patchFlag&16;const q=S.props||st,re=R.props||st;let ue;if(D&&Ti(D,!1),(ue=re.onVnodeBeforeUpdate)&&_n(ue,D,R,S),Q&&Ei(R,S,D,"beforeUpdate"),D&&Ti(D,!0),N?M(S.dynamicChildren,N,I,D,K,_a(R,y),_):L||V(S,R,I,null,D,K,_a(R,y),_,!1),z>0){if(z&16)W(I,R,q,re,D,K,y);else if(z&2&&q.class!==re.class&&r(I,"class",null,re.class,y),z&4&&r(I,"style",q.style,re.style,y),z&8){const ee=R.dynamicProps;for(let he=0;he<ee.length;he++){const ye=ee[he],me=q[ye],xe=re[ye];(xe!==me||ye==="value")&&r(I,ye,me,xe,y,S.children,D,K,pe)}}z&1&&S.children!==R.children&&u(I,R.children)}else!L&&N==null&&W(I,R,q,re,D,K,y);((ue=re.onVnodeUpdated)||Q)&&Ft(()=>{ue&&_n(ue,D,R,S),Q&&Ei(R,S,D,"updated")},K)},M=(S,R,D,K,y,_,L)=>{for(let I=0;I<R.length;I++){const z=S[I],N=R[I],Q=z.el&&(z.type===rn||!Ys(z,N)||z.shapeFlag&70)?h(z.el):D;v(z,N,Q,null,K,y,_,L,!0)}},W=(S,R,D,K,y,_,L)=>{if(D!==K){if(D!==st)for(const I in D)!cr(I)&&!(I in K)&&r(S,I,D[I],null,L,R.children,y,_,pe);for(const I in K){if(cr(I))continue;const z=K[I],N=D[I];z!==N&&I!=="value"&&r(S,I,N,z,L,R.children,y,_,pe)}"value"in K&&r(S,"value",D.value,K.value,L)}},J=(S,R,D,K,y,_,L,I,z)=>{const N=R.el=S?S.el:a(""),Q=R.anchor=S?S.anchor:a("");let{patchFlag:q,dynamicChildren:re,slotScopeIds:ue}=R;ue&&(I=I?I.concat(ue):ue),S==null?(i(N,D,K),i(Q,D,K),G(R.children||[],D,Q,y,_,L,I,z)):q>0&&q&64&&re&&S.dynamicChildren?(M(S.dynamicChildren,re,D,y,_,L,I),(R.key!=null||y&&R===y.subTree)&&Td(S,R,!0)):V(S,R,D,Q,y,_,L,I,z)},U=(S,R,D,K,y,_,L,I,z)=>{R.slotScopeIds=I,S==null?R.shapeFlag&512?y.ctx.activate(R,D,K,L,z):Z(R,D,K,y,_,L,z):ne(S,R,z)},Z=(S,R,D,K,y,_,L)=>{const I=S.component=Bg(S,K,y);if(fd(S)&&(I.ctx.renderer=ce),Hg(I),I.asyncDep){if(y&&y.registerDep(I,ie),!S.el){const z=I.subTree=Dt(Vi);p(null,z,R,D)}}else ie(I,S,R,D,y,_,L)},ne=(S,R,D)=>{const K=R.component=S.component;if(qm(S,R,D))if(K.asyncDep&&!K.asyncResolved){oe(K,R,D);return}else K.next=R,Hm(K.update),K.effect.dirty=!0,K.update();else R.el=S.el,K.vnode=R},ie=(S,R,D,K,y,_,L)=>{const I=()=>{if(S.isMounted){let{next:Q,bu:q,u:re,parent:ue,vnode:ee}=S;{const De=bd(S);if(De){Q&&(Q.el=ee.el,oe(S,Q,L)),De.asyncDep.then(()=>{S.isUnmounted||I()});return}}let he=Q,ye;Ti(S,!1),Q?(Q.el=ee.el,oe(S,Q,L)):Q=ee,q&&vo(q),(ye=Q.props&&Q.props.onVnodeBeforeUpdate)&&_n(ye,ue,Q,ee),Ti(S,!0);const me=ma(S),xe=S.subTree;S.subTree=me,v(xe,me,h(xe.el),O(xe),S,y,_),Q.el=me.el,he===null&&jm(S,me.el),re&&Ft(re,y),(ye=Q.props&&Q.props.onVnodeUpdated)&&Ft(()=>_n(ye,ue,Q,ee),y)}else{let Q;const{el:q,props:re}=R,{bm:ue,m:ee,parent:he}=S,ye=yo(R);if(Ti(S,!1),ue&&vo(ue),!ye&&(Q=re&&re.onVnodeBeforeMount)&&_n(Q,he,R),Ti(S,!0),q&&Ee){const me=()=>{S.subTree=ma(S),Ee(q,S.subTree,S,y,null)};ye?R.type.__asyncLoader().then(()=>!S.isUnmounted&&me()):me()}else{const me=S.subTree=ma(S);v(null,me,D,K,S,y,_),R.el=me.el}if(ee&&Ft(ee,y),!ye&&(Q=re&&re.onVnodeMounted)){const me=R;Ft(()=>_n(Q,he,me),y)}(R.shapeFlag&256||he&&yo(he.vnode)&&he.vnode.shapeFlag&256)&&S.a&&Ft(S.a,y),S.isMounted=!0,R=D=K=null}},z=S.effect=new Wl(I,Qt,()=>Jl(N),S.scope),N=S.update=()=>{z.dirty&&z.run()};N.id=S.uid,Ti(S,!0),N()},oe=(S,R,D)=>{R.component=S;const K=S.vnode.props;S.vnode=R,S.next=null,Sg(S,R.props,K,D),bg(S,R.children,D),Xi(),zc(S),qi()},V=(S,R,D,K,y,_,L,I,z=!1)=>{const N=S&&S.children,Q=S?S.shapeFlag:0,q=R.children,{patchFlag:re,shapeFlag:ue}=R;if(re>0){if(re&128){ae(N,q,D,K,y,_,L,I,z);return}else if(re&256){le(N,q,D,K,y,_,L,I,z);return}}ue&8?(Q&16&&pe(N,y,_),q!==N&&u(D,q)):Q&16?ue&16?ae(N,q,D,K,y,_,L,I,z):pe(N,y,_,!0):(Q&8&&u(D,""),ue&16&&G(q,D,K,y,_,L,I,z))},le=(S,R,D,K,y,_,L,I,z)=>{S=S||_s,R=R||_s;const N=S.length,Q=R.length,q=Math.min(N,Q);let re;for(re=0;re<q;re++){const ue=R[re]=z?si(R[re]):vn(R[re]);v(S[re],ue,D,null,y,_,L,I,z)}N>Q?pe(S,y,_,!0,!1,q):G(R,D,K,y,_,L,I,z,q)},ae=(S,R,D,K,y,_,L,I,z)=>{let N=0;const Q=R.length;let q=S.length-1,re=Q-1;for(;N<=q&&N<=re;){const ue=S[N],ee=R[N]=z?si(R[N]):vn(R[N]);if(Ys(ue,ee))v(ue,ee,D,null,y,_,L,I,z);else break;N++}for(;N<=q&&N<=re;){const ue=S[q],ee=R[re]=z?si(R[re]):vn(R[re]);if(Ys(ue,ee))v(ue,ee,D,null,y,_,L,I,z);else break;q--,re--}if(N>q){if(N<=re){const ue=re+1,ee=ue<Q?R[ue].el:K;for(;N<=re;)v(null,R[N]=z?si(R[N]):vn(R[N]),D,ee,y,_,L,I,z),N++}}else if(N>re)for(;N<=q;)Ae(S[N],y,_,!0),N++;else{const ue=N,ee=N,he=new Map;for(N=ee;N<=re;N++){const ke=R[N]=z?si(R[N]):vn(R[N]);ke.key!=null&&he.set(ke.key,N)}let ye,me=0;const xe=re-ee+1;let De=!1,Ge=0;const Xe=new Array(xe);for(N=0;N<xe;N++)Xe[N]=0;for(N=ue;N<=q;N++){const ke=S[N];if(me>=xe){Ae(ke,y,_,!0);continue}let Se;if(ke.key!=null)Se=he.get(ke.key);else for(ye=ee;ye<=re;ye++)if(Xe[ye-ee]===0&&Ys(ke,R[ye])){Se=ye;break}Se===void 0?Ae(ke,y,_,!0):(Xe[Se-ee]=N+1,Se>=Ge?Ge=Se:De=!0,v(ke,R[Se],D,null,y,_,L,I,z),me++)}const je=De?Cg(Xe):_s;for(ye=je.length-1,N=xe-1;N>=0;N--){const ke=ee+N,Se=R[ke],C=ke+1<Q?R[ke+1].el:K;Xe[N]===0?v(null,Se,D,C,y,_,L,I,z):De&&(ye<0||N!==je[ye]?Me(Se,D,C,2):ye--)}}},Me=(S,R,D,K,y=null)=>{const{el:_,type:L,transition:I,children:z,shapeFlag:N}=S;if(N&6){Me(S.component.subTree,R,D,K);return}if(N&128){S.suspense.move(R,D,K);return}if(N&64){L.move(S,R,D,ce);return}if(L===rn){i(_,R,D);for(let q=0;q<z.length;q++)Me(z[q],R,D,K);i(S.anchor,R,D);return}if(L===So){x(S,R,D);return}if(K!==2&&N&1&&I)if(K===0)I.beforeEnter(_),i(_,R,D),Ft(()=>I.enter(_),y);else{const{leave:q,delayLeave:re,afterLeave:ue}=I,ee=()=>i(_,R,D),he=()=>{q(_,()=>{ee(),ue&&ue()})};re?re(_,ee,he):he()}else i(_,R,D)},Ae=(S,R,D,K=!1,y=!1)=>{const{type:_,props:L,ref:I,children:z,dynamicChildren:N,shapeFlag:Q,patchFlag:q,dirs:re}=S;if(I!=null&&Ml(I,null,D,S,!0),Q&256){R.ctx.deactivate(S);return}const ue=Q&1&&re,ee=!yo(S);let he;if(ee&&(he=L&&L.onVnodeBeforeUnmount)&&_n(he,R,S),Q&6)fe(S.component,D,K);else{if(Q&128){S.suspense.unmount(D,K);return}ue&&Ei(S,null,R,"beforeUnmount"),Q&64?S.type.remove(S,R,D,y,ce,K):N&&(_!==rn||q>0&&q&64)?pe(N,R,D,!1,!0):(_===rn&&q&384||!y&&Q&16)&&pe(z,R,D),K&&qe(S)}(ee&&(he=L&&L.onVnodeUnmounted)||ue)&&Ft(()=>{he&&_n(he,R,S),ue&&Ei(S,null,R,"unmounted")},D)},qe=S=>{const{type:R,el:D,anchor:K,transition:y}=S;if(R===rn){Y(D,K);return}if(R===So){A(S);return}const _=()=>{s(D),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(S.shapeFlag&1&&y&&!y.persisted){const{leave:L,delayLeave:I}=y,z=()=>L(D,_);I?I(S.el,_,z):z()}else _()},Y=(S,R)=>{let D;for(;S!==R;)D=f(S),s(S),S=D;s(R)},fe=(S,R,D)=>{const{bum:K,scope:y,update:_,subTree:L,um:I}=S;K&&vo(K),y.stop(),_&&(_.active=!1,Ae(L,S,R,D)),I&&Ft(I,R),Ft(()=>{S.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},pe=(S,R,D,K=!1,y=!1,_=0)=>{for(let L=_;L<S.length;L++)Ae(S[L],R,D,K,y)},O=S=>S.shapeFlag&6?O(S.component.subTree):S.shapeFlag&128?S.suspense.next():f(S.anchor||S.el);let se=!1;const te=(S,R,D)=>{S==null?R._vnode&&Ae(R._vnode,null,null,!0):v(R._vnode||null,S,R,null,null,null,D),se||(se=!0,zc(),sd(),se=!1),R._vnode=S},ce={p:v,um:Ae,m:Me,r:qe,mt:Z,mc:G,pc:V,pbc:M,n:O,o:n};let F,Ee;return{render:te,hydrate:F,createApp:yg(te,F)}}function _a({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Rg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Td(n,e,t=!1){const i=n.children,s=e.children;if(Pe(i)&&Pe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=si(s[r]),a.el=o.el),t||Td(o,a)),a.type===Ko&&(a.el=o.el)}}function Cg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function bd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bd(e)}const Pg=n=>n.__isTeleport,rn=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Vi=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),fr=[];let ln=null;function jt(n=!1){fr.push(ln=n?null:[])}function Lg(){fr.pop(),ln=fr[fr.length-1]||null}let Mr=1;function Jc(n){Mr+=n}function Ad(n){return n.dynamicChildren=Mr>0?ln||_s:null,Lg(),Mr>0&&ln&&ln.push(n),n}function Sn(n,e,t,i,s,r){return Ad(ut(n,e,t,i,s,r,!0))}function nc(n,e,t,i,s){return Ad(Dt(n,e,t,i,s,!0))}function Sl(n){return n?n.__v_isVNode===!0:!1}function Ys(n,e){return n.type===e.type&&n.key===e.key}const Yo="__vInternal",wd=({key:n})=>n??null,Eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||kt(n)||Ne(n)?{i:Bt,r:n,k:e,f:!!t}:n:null);function ut(n,e=null,t=null,i=0,s=null,r=n===rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wd(e),ref:e&&Eo(e),scopeId:jo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return a?(ic(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),Mr>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const Dt=Ig;function Ig(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Km)&&(n=Vi),Sl(n)){const a=Cs(n,e,!0);return t&&ic(a,t),Mr>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag|=-2,a}if(Wg(n)&&(n=n.__vccOpts),e){e=Ng(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=Fi(a)),at(l)&&($f(l)&&!Pe(l)&&(l=yt({},l)),e.style=_r(l))}const o=pt(n)?1:Zm(n)?128:Pg(n)?64:at(n)?4:Ne(n)?2:0;return ut(n,e,t,i,s,o,r,!0)}function Ng(n){return n?$f(n)||Yo in n?yt({},n):n:null}function Cs(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?Ug(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&wd(a),ref:e&&e.ref?t&&s?Pe(s)?s.concat(Eo(e)):[s,Eo(e)]:Eo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Cs(n.ssContent),ssFallback:n.ssFallback&&Cs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Dg(n=" ",e=0){return Dt(Ko,null,n,e)}function Zo(n,e){const t=Dt(So,null,n);return t.staticCount=e,t}function Jo(n="",e=!1){return e?(jt(),nc(Vi,null,n)):Dt(Vi,null,n)}function vn(n){return n==null||typeof n=="boolean"?Dt(Vi):Pe(n)?Dt(rn,null,n.slice()):typeof n=="object"?si(n):Dt(Ko,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Cs(n)}function ic(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ic(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Yo in e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),i&64?(t=16,e=[Dg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ug(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Fi([e.class,i.class]));else if(s==="style")e.style=_r([e.style,i.style]);else if(zo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Pe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function _n(n,e,t,i=null){un(n,e,7,[t,i])}const Og=vd();let Fg=0;function Bg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Og,r={uid:Fg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(i,s),emitsOptions:od(i,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vm.bind(null,r),n.ce&&n.ce(r),r}let Rt=null,Lo,El;{const n=Lf(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Lo=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),El=e("__VUE_SSR_SETTERS__",t=>Qo=t)}const Rr=n=>{const e=Rt;return Lo(n),n.scope.on(),()=>{n.scope.off(),Lo(e)}},Qc=()=>{Rt&&Rt.scope.off(),Lo(null)};function Rd(n){return n.vnode.shapeFlag&4}let Qo=!1;function Hg(n,e=!1){e&&El(e);const{props:t,children:i}=n.vnode,s=Rd(n);Mg(n,t,s,e),Tg(n,i);const r=s?zg(n,e):void 0;return e&&El(!1),r}function zg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Kf(new Proxy(n.ctx,dg));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Vg(n):null,r=Rr(n);Xi();const o=di(i,n,0,[n.props,s]);if(qi(),r(),Rf(o)){if(o.then(Qc,Qc),e)return o.then(a=>{eu(n,a,e)}).catch(a=>{Xo(a,n,0)});n.asyncDep=o}else eu(n,o,e)}else Cd(n,e)}function eu(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=ed(e)),Cd(n,t)}let tu;function Cd(n,e,t){const i=n.type;if(!n.render){if(!e&&tu&&!i.render){const s=i.template||ec(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=yt(yt({isCustomElement:r,delimiters:a},o),l);i.render=tu(s,c)}}n.render=i.render||Qt}{const s=Rr(n);Xi();try{pg(n)}finally{qi(),s()}}}function kg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return zt(n,"get","$attrs"),e[t]}}))}function Vg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return kg(n)},slots:n.slots,emit:n.emit,expose:e}}function ea(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(ed(Kf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ur)return ur[t](n)},has(e,t){return t in e||t in ur}}))}function Gg(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function Wg(n){return Ne(n)&&"__vccOpts"in n}const Jt=(n,e)=>Nm(n,e,Qo);function Pd(n,e,t){const i=arguments.length;return i===2?at(e)&&!Pe(e)?Sl(e)?Dt(n,null,[e]):Dt(n,e):Dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Sl(t)&&(t=[t]),Dt(n,e,t))}const Xg="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,nu=ri&&ri.createElement("template"),$g={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ri.createElementNS(qg,n):e==="mathml"?ri.createElementNS(jg,n):ri.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{nu.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=nu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Kg=Symbol("_vtc");function Yg(n,e,t){const i=n[Kg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const iu=Symbol("_vod"),Zg=Symbol("_vsh"),Jg=Symbol(""),Qg=/(^|;)\s*display\s*:/;function e_(n,e,t){const i=n.style,s=pt(t);let r=!1;if(t&&!s){if(e)if(pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&To(i,a,"")}else for(const o in e)t[o]==null&&To(i,o,"");for(const o in t)o==="display"&&(r=!0),To(i,o,t[o])}else if(s){if(e!==t){const o=i[Jg];o&&(t+=";"+o),i.cssText=t,r=Qg.test(t)}}else e&&n.removeAttribute("style");iu in n&&(n[iu]=r?i.display:"",n[Zg]&&(i.display="none"))}const su=/\s*!important$/;function To(n,e,t){if(Pe(t))t.forEach(i=>To(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=t_(n,e);su.test(t)?n.setProperty(Vs(i),t.replace(su,""),"important"):n[i]=t}}const ru=["Webkit","Moz","ms"],va={};function t_(n,e){const t=va[e];if(t)return t;let i=An(e);if(i!=="filter"&&i in n)return va[e]=i;i=Go(i);for(let s=0;s<ru.length;s++){const r=ru[s]+i;if(r in n)return va[e]=r}return e}const ou="http://www.w3.org/1999/xlink";function n_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ou,e.slice(6,e.length)):n.setAttributeNS(ou,e,t);else{const r=cm(e);t==null||r&&!If(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function i_(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=If(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function ps(n,e,t,i){n.addEventListener(e,t,i)}function s_(n,e,t,i){n.removeEventListener(e,t,i)}const au=Symbol("_vei");function r_(n,e,t,i,s=null){const r=n[au]||(n[au]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=o_(e);if(i){const c=r[e]=c_(i,s);ps(n,a,c,l)}else o&&(s_(n,a,o,l),r[e]=void 0)}}const lu=/(?:Once|Passive|Capture)$/;function o_(n){let e;if(lu.test(n)){e={};let i;for(;i=n.match(lu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vs(n.slice(2)),e]}let xa=0;const a_=Promise.resolve(),l_=()=>xa||(a_.then(()=>xa=0),xa=Date.now());function c_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;un(u_(i,t.value),e,5,[i])};return t.value=n,t.attached=l_(),t}function u_(n,e){if(Pe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const cu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,h_=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Yg(n,i,c):e==="style"?e_(n,t,i):zo(e)?kl(e)||r_(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(n,e,i,c))?i_(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),n_(n,e,i,c))};function f_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&cu(e)&&Ne(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cu(e)&&pt(t)?!1:e in n}const uu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Pe(e)?t=>vo(e,t):e};function d_(n){n.target.composing=!0}function hu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ya=Symbol("_assign"),fu={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[ya]=uu(s);const r=i||s.props&&s.props.type==="number";ps(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=hl(a)),n[ya](a)}),t&&ps(n,"change",()=>{n.value=n.value.trim()}),e||(ps(n,"compositionstart",d_),ps(n,"compositionend",hu),ps(n,"change",hu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n[ya]=uu(r),n.composing)return;const o=s||n.type==="number"?hl(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},p_=yt({patchProp:h_},$g);let du;function m_(){return du||(du=Ag(p_))}const g_=(...n)=>{const e=m_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=v_(i);if(!s)return;const r=e._component;!Ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,__(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function __(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function v_(n){return pt(n)?document.querySelector(n):n}function x_(){return Ld().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ld(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const y_=typeof Proxy=="function",M_="devtools-plugin:setup",S_="plugin:settings:set";let $i,Tl;function E_(){var n;return $i!==void 0||(typeof window<"u"&&window.performance?($i=!0,Tl=window.performance):typeof globalThis<"u"&&(!((n=globalThis.perf_hooks)===null||n===void 0)&&n.performance)?($i=!0,Tl=globalThis.perf_hooks.performance):$i=!1),$i}function T_(){return E_()?Tl.now():Date.now()}class b_{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return T_()}},t&&t.on(S_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function A_(n,e){const t=n,i=Ld(),s=x_(),r=y_&&t.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(M_,n,e);else{const o=r?new b_(t,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof document<"u";function w_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function Ma(n,e){const t={};for(const i in e){const s=e[i];t[i]=fn(s)?s.map(n):n(s)}return t}const dr=()=>{},fn=Array.isArray,Id=/#/g,R_=/&/g,C_=/\//g,P_=/=/g,L_=/\?/g,Nd=/\+/g,I_=/%5B/g,N_=/%5D/g,Dd=/%5E/g,D_=/%60/g,Ud=/%7B/g,U_=/%7C/g,Od=/%7D/g,O_=/%20/g;function sc(n){return encodeURI(""+n).replace(U_,"|").replace(I_,"[").replace(N_,"]")}function F_(n){return sc(n).replace(Ud,"{").replace(Od,"}").replace(Dd,"^")}function bl(n){return sc(n).replace(Nd,"%2B").replace(O_,"+").replace(Id,"%23").replace(R_,"%26").replace(D_,"`").replace(Ud,"{").replace(Od,"}").replace(Dd,"^")}function B_(n){return bl(n).replace(P_,"%3D")}function H_(n){return sc(n).replace(Id,"%23").replace(L_,"%3F")}function z_(n){return n==null?"":H_(n).replace(C_,"%2F")}function Sr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const k_=/\/$/,V_=n=>n.replace(k_,"");function Sa(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=q_(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Sr(o)}}function G_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function pu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function W_(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ps(e.matched[i],t.matched[s])&&Fd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ps(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Fd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!X_(n[t],e[t]))return!1;return!0}function X_(n,e){return fn(n)?mu(n,e):fn(e)?mu(e,n):n===e}function mu(n,e){return fn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function q_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}var Er;(function(n){n.pop="pop",n.push="push"})(Er||(Er={}));var pr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(pr||(pr={}));function j_(n){if(!n)if(ms){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),V_(n)}const $_=/^[^#]+#/;function K_(n,e){return n.replace($_,"#")+e}function Y_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function Z_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Y_(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gu(n,e){return(history.state?history.state.position-e:-1)+n}const Al=new Map;function J_(n,e){Al.set(n,e)}function Q_(n){const e=Al.get(n);return Al.delete(n),e}let ev=()=>location.protocol+"//"+location.host;function Bd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),pu(l,"")}return pu(t,n)+i+s}function tv(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Bd(n,location),g=t.value,v=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=v?f.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:Er.pop,direction:m?m>0?pr.forward:pr.back:pr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ze({},f.state,{scroll:ta()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function _u(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ta():null}}function nv(n){const{history:e,location:t}=window,i={value:Bd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:ev()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ze({},e.state,_u(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ze({},s.value,e.state,{forward:l,scroll:ta()});r(u.current,u,!0);const h=Ze({},_u(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function iv(n){n=j_(n);const e=nv(n),t=tv(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Ze({location:"",base:n,go:i,createHref:K_.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sv(n){return typeof n=="string"||n&&typeof n=="object"}function Hd(n){return typeof n=="string"||typeof n=="symbol"}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zd=Symbol("");var vu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vu||(vu={}));function Ls(n,e){return Ze(new Error,{type:n,[zd]:!0},e)}function Ln(n,e){return n instanceof Error&&zd in n&&(e==null||!!(n.type&e))}const xu="[^/]+?",rv={sensitive:!1,strict:!1,start:!0,end:!0},ov=/[.+*?^${}()[\]/\\]/g;function av(n,e){const t=Ze({},rv,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(ov,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=f;r.push({name:g,repeatable:v,optional:m});const T=p||xu;if(T!==xu){d+=10;try{new RegExp(`(${T})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+A.message)}}let x=v?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,d+=20,m&&(d+=-8),v&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(fn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=fn(p)?p.join("/"):p;if(!T)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function lv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cv(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=lv(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(yu(i))return 1;if(yu(s))return-1}return s.length-i.length}function yu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const uv={type:0,value:""},hv=/[a-zA-Z0-9_]/;function fv(n){if(!n)return[[]];if(n==="/")return[[uv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:hv.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function dv(n,e,t){const i=av(fv(n.path),t),s=Ze(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pv(n,e){const t=[],i=new Map;e=Eu({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,g=mv(u);g.aliasOf=f&&f.record;const v=Eu(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of x)m.push(Ze({},g,{components:f?f.record.components:g.components,path:A,aliasOf:f?f.record:g}))}let p,T;for(const x of m){const{path:A}=x;if(h&&A[0]!=="/"){const H=h.record.path,w=H[H.length-1]==="/"?"":"/";x.path=h.record.path+(A&&w+A)}if(p=dv(x,h,v),f?f.alias.push(p):(T=T||p,T!==p&&T.alias.push(p),d&&u.name&&!Su(p)&&o(u.name)),g.children){const H=g.children;for(let w=0;w<H.length;w++)r(H[w],p,f&&f.children[w])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return T?()=>{o(T)}:dr}function o(u){if(Hd(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&cv(u,t[h])>=0&&(u.record.path!==t[h].record.path||!kd(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Su(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},g,v;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ls(1,{location:u});v=f.record.name,d=Ze(Mu(h.params,f.keys.filter(T=>!T.optional).concat(f.parent?f.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),u.params&&Mu(u.params,f.keys.map(T=>T.name))),g=f.stringify(d)}else if(u.path!=null)g=u.path,f=t.find(T=>T.re.test(g)),f&&(d=f.parse(g),v=f.record.name);else{if(f=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!f)throw Ls(1,{location:u,currentLocation:h});v=f.record.name,d=Ze({},h.params,u.params),g=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:m,meta:_v(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function mv(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:gv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function gv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Su(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function _v(n){return n.reduce((e,t)=>Ze(e,t.meta),{})}function Eu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function kd(n,e){return e.children.some(t=>t===n||kd(n,t))}function vv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Nd," "),o=r.indexOf("="),a=Sr(o<0?r:r.slice(0,o)),l=o<0?null:Sr(r.slice(o+1));if(a in e){let c=e[a];fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tu(n){let e="";for(let t in n){const i=n[t];if(t=B_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(fn(i)?i.map(r=>r&&bl(r)):[i&&bl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function xv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const yv=Symbol(""),bu=Symbol(""),rc=Symbol(""),Vd=Symbol(""),wl=Symbol("");function Zs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function oi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ls(4,{from:t,to:e})):f instanceof Error?l(f):sv(f)?l(Ls(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Ea(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mv(l)){const u=(l.__vccOpts||l)[e];u&&r.push(oi(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=w_(u)?u.default:u;o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&oi(d,t,i,o,a,s)()}))}}return r}function Mv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Au(n){const e=Vn(rc),t=Vn(Vd),i=Jt(()=>e.resolve(ys(n.to))),s=Jt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ps.bind(null,u));if(f>-1)return f;const d=wu(l[c-2]);return c>1&&wu(u)===d&&h[h.length-1].path!==d?h.findIndex(Ps.bind(null,l[c-2])):f}),r=Jt(()=>s.value>-1&&bv(t.params,i.value.params)),o=Jt(()=>s.value>-1&&s.value===t.matched.length-1&&Fd(t.params,i.value.params));function a(l={}){return Tv(l)?e[ys(n.replace)?"replace":"push"](ys(n.to)).catch(dr):Promise.resolve()}return{route:i,href:Jt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Sv=hd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Au,setup(n,{slots:e}){const t=wr(Au(n)),{options:i}=Vn(rc),s=Jt(()=>({[Ru(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ru(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Pd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Ev=Sv;function Tv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function bv(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!fn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function wu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ru=(n,e,t)=>n??e??t,Av=hd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Vn(wl),s=Jt(()=>n.route||i.value),r=Vn(bu,0),o=Jt(()=>{let c=ys(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Jt(()=>s.value.matched[o.value]);Mo(bu,Jt(()=>o.value+1)),Mo(yv,a),Mo(wl,s);const l=Jf();return Ss(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ps(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Cu(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Pd(f,Ze({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Cu(t.default,{Component:m,route:c})||m}}});function Cu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const wv=Av;function Rv(n){const e=pv(n.routes,n),t=n.parseQuery||vv,i=n.stringifyQuery||Tu,s=n.history,r=Zs(),o=Zs(),a=Zs(),l=Dm(Kn);let c=Kn;ms&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ma.bind(null,O=>""+O),h=Ma.bind(null,z_),f=Ma.bind(null,Sr);function d(O,se){let te,ce;return Hd(O)?(te=e.getRecordMatcher(O),ce=se):ce=O,e.addRoute(ce,te)}function g(O){const se=e.getRecordMatcher(O);se&&e.removeRoute(se)}function v(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,se){if(se=Ze({},se||l.value),typeof O=="string"){const R=Sa(t,O,se.path),D=e.resolve({path:R.path},se),K=s.createHref(R.fullPath);return Ze(R,D,{params:f(D.params),hash:Sr(R.hash),redirectedFrom:void 0,href:K})}let te;if(O.path!=null)te=Ze({},O,{path:Sa(t,O.path,se.path).path});else{const R=Ze({},O.params);for(const D in R)R[D]==null&&delete R[D];te=Ze({},O,{params:h(R)}),se.params=h(se.params)}const ce=e.resolve(te,se),F=O.hash||"";ce.params=u(f(ce.params));const Ee=G_(i,Ze({},O,{hash:F_(F),path:ce.path})),S=s.createHref(Ee);return Ze({fullPath:Ee,hash:F,query:i===Tu?xv(O.query):O.query||{}},ce,{redirectedFrom:void 0,href:S})}function T(O){return typeof O=="string"?Sa(t,O,l.value.path):Ze({},O)}function x(O,se){if(c!==O)return Ls(8,{from:se,to:O})}function A(O){return P(O)}function H(O){return A(Ze(T(O),{replace:!0}))}function w(O){const se=O.matched[O.matched.length-1];if(se&&se.redirect){const{redirect:te}=se;let ce=typeof te=="function"?te(O):te;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=T(ce):{path:ce},ce.params={}),Ze({query:O.query,hash:O.hash,params:ce.path!=null?{}:O.params},ce)}}function P(O,se){const te=c=p(O),ce=l.value,F=O.state,Ee=O.force,S=O.replace===!0,R=w(te);if(R)return P(Ze(T(R),{state:typeof R=="object"?Ze({},F,R.state):F,force:Ee,replace:S}),se||te);const D=te;D.redirectedFrom=se;let K;return!Ee&&W_(i,ce,te)&&(K=Ls(16,{to:D,from:ce}),Me(ce,ce,!0,!1)),(K?Promise.resolve(K):M(D,ce)).catch(y=>Ln(y)?Ln(y,2)?y:ae(y):V(y,D,ce)).then(y=>{if(y){if(Ln(y,2))return P(Ze({replace:S},T(y.to),{state:typeof y.to=="object"?Ze({},F,y.to.state):F,force:Ee}),se||D)}else y=J(D,ce,!0,S,F);return W(D,ce,y),y})}function G(O,se){const te=x(O,se);return te?Promise.reject(te):Promise.resolve()}function b(O){const se=Y.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(O):O()}function M(O,se){let te;const[ce,F,Ee]=Cv(O,se);te=Ea(ce.reverse(),"beforeRouteLeave",O,se);for(const R of ce)R.leaveGuards.forEach(D=>{te.push(oi(D,O,se))});const S=G.bind(null,O,se);return te.push(S),pe(te).then(()=>{te=[];for(const R of r.list())te.push(oi(R,O,se));return te.push(S),pe(te)}).then(()=>{te=Ea(F,"beforeRouteUpdate",O,se);for(const R of F)R.updateGuards.forEach(D=>{te.push(oi(D,O,se))});return te.push(S),pe(te)}).then(()=>{te=[];for(const R of Ee)if(R.beforeEnter)if(fn(R.beforeEnter))for(const D of R.beforeEnter)te.push(oi(D,O,se));else te.push(oi(R.beforeEnter,O,se));return te.push(S),pe(te)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),te=Ea(Ee,"beforeRouteEnter",O,se,b),te.push(S),pe(te))).then(()=>{te=[];for(const R of o.list())te.push(oi(R,O,se));return te.push(S),pe(te)}).catch(R=>Ln(R,8)?R:Promise.reject(R))}function W(O,se,te){a.list().forEach(ce=>b(()=>ce(O,se,te)))}function J(O,se,te,ce,F){const Ee=x(O,se);if(Ee)return Ee;const S=se===Kn,R=ms?history.state:{};te&&(ce||S?s.replace(O.fullPath,Ze({scroll:S&&R&&R.scroll},F)):s.push(O.fullPath,F)),l.value=O,Me(O,se,te,S),ae()}let U;function Z(){U||(U=s.listen((O,se,te)=>{if(!fe.listening)return;const ce=p(O),F=w(ce);if(F){P(Ze(F,{replace:!0}),ce).catch(dr);return}c=ce;const Ee=l.value;ms&&J_(gu(Ee.fullPath,te.delta),ta()),M(ce,Ee).catch(S=>Ln(S,12)?S:Ln(S,2)?(P(S.to,ce).then(R=>{Ln(R,20)&&!te.delta&&te.type===Er.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(te.delta&&s.go(-te.delta,!1),V(S,ce,Ee))).then(S=>{S=S||J(ce,Ee,!1),S&&(te.delta&&!Ln(S,8)?s.go(-te.delta,!1):te.type===Er.pop&&Ln(S,20)&&s.go(-1,!1)),W(ce,Ee,S)}).catch(dr)}))}let ne=Zs(),ie=Zs(),oe;function V(O,se,te){ae(O);const ce=ie.list();return ce.length?ce.forEach(F=>F(O,se,te)):console.error(O),Promise.reject(O)}function le(){return oe&&l.value!==Kn?Promise.resolve():new Promise((O,se)=>{ne.add([O,se])})}function ae(O){return oe||(oe=!O,Z(),ne.list().forEach(([se,te])=>O?te(O):se()),ne.reset()),O}function Me(O,se,te,ce){const{scrollBehavior:F}=n;if(!ms||!F)return Promise.resolve();const Ee=!te&&Q_(gu(O.fullPath,0))||(ce||!te)&&history.state&&history.state.scroll||null;return nd().then(()=>F(O,se,Ee)).then(S=>S&&Z_(S)).catch(S=>V(S,O,se))}const Ae=O=>s.go(O);let qe;const Y=new Set,fe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:n,push:A,replace:H,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:le,install(O){const se=this;O.component("RouterLink",Ev),O.component("RouterView",wv),O.config.globalProperties.$router=se,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),ms&&!qe&&l.value===Kn&&(qe=!0,A(s.location).catch(F=>{}));const te={};for(const F in Kn)Object.defineProperty(te,F,{get:()=>l.value[F],enumerable:!0});O.provide(rc,se),O.provide(Vd,qf(te)),O.provide(wl,l);const ce=O.unmount;Y.add(O),O.unmount=function(){Y.delete(O),Y.size<1&&(c=Kn,U&&U(),U=null,l.value=Kn,qe=!1,oe=!1),ce()}}};function pe(O){return O.reduce((se,te)=>se.then(()=>b(te)),Promise.resolve())}return fe}function Cv(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ps(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ps(c,l))||s.push(l))}return[t,i,s]}const xi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Pv={name:"App",components:{},computed:{isAuthenticated(){return this.$store.state.isAuthenticated}}};function Lv(n,e,t,i,s,r){const o=Ql("router-view");return jt(),Sn("div",null,[Dt(o)])}const Iv=xi(Pv,[["render",Lv]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Nv="store";function Gs(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function Dv(n){return n!==null&&typeof n=="object"}function Uv(n){return n&&typeof n.then=="function"}function Ov(n,e){return function(){return n(e)}}function Gd(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function Wd(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;na(n,t,[],n._modules.root,!0),oc(n,t,e)}function oc(n,e,t){var i=n._state,s=n._scope;n.getters={},n._makeLocalGettersCache=Object.create(null);var r=n._wrappedGetters,o={},a={},l=hm(!0);l.run(function(){Gs(r,function(c,u){o[u]=Ov(c,n),a[u]=Jt(function(){return o[u]()}),Object.defineProperty(n.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),n._state=wr({data:e}),n._scope=l,n.strict&&kv(n),i&&t&&n._withCommit(function(){i.data=null}),s&&s.stop()}function na(n,e,t,i,s){var r=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!r&&!s){var a=ac(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=Fv(n,o,t);i.forEachMutation(function(u,h){var f=o+h;Bv(n,f,u,c)}),i.forEachAction(function(u,h){var f=u.root?h:o+h,d=u.handler||u;Hv(n,f,d,c)}),i.forEachGetter(function(u,h){var f=o+h;zv(n,f,u,c)}),i.forEachChild(function(u,h){na(n,e,t.concat(h),u,s)})}function Fv(n,e,t){var i=e==="",s={dispatch:i?n.dispatch:function(r,o,a){var l=Io(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),n.dispatch(h,c)},commit:i?n.commit:function(r,o,a){var l=Io(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),n.commit(h,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return n.getters}:function(){return Xd(n,e)}},state:{get:function(){return ac(n.state,t)}}}),s}function Xd(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(t,r,{get:function(){return n.getters[s]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function Bv(n,e,t,i){var s=n._mutations[e]||(n._mutations[e]=[]);s.push(function(o){t.call(n,i.state,o)})}function Hv(n,e,t,i){var s=n._actions[e]||(n._actions[e]=[]);s.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return Uv(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function zv(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(r){return t(i.state,i.getters,r.state,r.getters)})}function kv(n){Ss(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function ac(n,e){return e.reduce(function(t,i){return t[i]},n)}function Io(n,e,t){return Dv(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var Vv="vuex bindings",Pu="vuex:mutations",Ta="vuex:actions",Ki="vuex",Gv=0;function Wv(n,e){A_({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Vv]},function(t){t.addTimelineLayer({id:Pu,label:"Vuex Mutations",color:Lu}),t.addTimelineLayer({id:Ta,label:"Vuex Actions",color:Lu}),t.addInspector({id:Ki,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===Ki)if(i.filter){var s=[];Kd(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[$d(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===Ki){var s=i.nodeId;Xd(e,s),i.state=jv(Kv(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===Ki){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(Ki),t.sendInspectorState(Ki),t.addTimelineEvent({layerId:Pu,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=Gv++,i._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:Ta,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,t.addTimelineEvent({layerId:Ta,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var Lu=8702998,Xv=6710886,qv=16777215,qd={label:"namespaced",textColor:qv,backgroundColor:Xv};function jd(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function $d(n,e){return{id:e||"root",label:jd(e),tags:n.namespaced?[qd]:[],children:Object.keys(n._children).map(function(t){return $d(n._children[t],e+t+"/")})}}function Kd(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[qd]:[]}),Object.keys(e._children).forEach(function(s){Kd(n,e._children[s],t,i+s+"/")})}function jv(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),s={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var r=$v(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?jd(o):o,editable:!1,value:Rl(function(){return r[o]})}})}return s}function $v(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=Rl(function(){return n[t]})}else e[t]=Rl(function(){return n[t]})}),e}function Kv(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?n:n.root._children)}function Rl(n){try{return n()}catch(e){return e}}var dn=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Yd={namespaced:{configurable:!0}};Yd.namespaced.get=function(){return!!this._rawModule.namespaced};dn.prototype.addChild=function(e,t){this._children[e]=t};dn.prototype.removeChild=function(e){delete this._children[e]};dn.prototype.getChild=function(e){return this._children[e]};dn.prototype.hasChild=function(e){return e in this._children};dn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};dn.prototype.forEachChild=function(e){Gs(this._children,e)};dn.prototype.forEachGetter=function(e){this._rawModule.getters&&Gs(this._rawModule.getters,e)};dn.prototype.forEachAction=function(e){this._rawModule.actions&&Gs(this._rawModule.actions,e)};dn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Gs(this._rawModule.mutations,e)};Object.defineProperties(dn.prototype,Yd);var ji=function(e){this.register([],e,!1)};ji.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};ji.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,s){return t=t.getChild(s),i+(t.namespaced?s+"/":"")},"")};ji.prototype.update=function(e){Zd([],this.root,e)};ji.prototype.register=function(e,t,i){var s=this;i===void 0&&(i=!0);var r=new dn(t,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&Gs(t.modules,function(a,l){s.register(e.concat(l),a,i)})};ji.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],s=t.getChild(i);s&&s.runtime&&t.removeChild(i)};ji.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function Zd(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;Zd(n.concat(i),e.getChild(i),t.modules[i])}}function Yv(n){return new Vt(n)}var Vt=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ji(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,d){return l.call(o,f,d)},this.commit=function(f,d,g){return c.call(o,f,d,g)},this.strict=s;var u=this._modules.root.state;na(this,u,[],this._modules.root),oc(this,u),i.forEach(function(h){return h(t)})},lc={state:{configurable:!0}};Vt.prototype.install=function(e,t){e.provide(t||Nv,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&Wv(e,this)};lc.state.get=function(){return this._state.data};lc.state.set=function(n){};Vt.prototype.commit=function(e,t,i){var s=this,r=Io(e,t,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};Vt.prototype.dispatch=function(e,t){var i=this,s=Io(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(f){try{i._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,i.state)})}catch{}u(f)},function(f){try{i._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,i.state,f)})}catch{}h(f)})})}};Vt.prototype.subscribe=function(e,t){return Gd(e,this._subscribers,t)};Vt.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return Gd(i,this._actionSubscribers,t)};Vt.prototype.watch=function(e,t,i){var s=this;return Ss(function(){return e(s.state,s.getters)},t,Object.assign({},i))};Vt.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};Vt.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),na(this,this.state,e,this._modules.get(e),i.preserveState),oc(this,this.state)};Vt.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=ac(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),Wd(this)};Vt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Vt.prototype.hotUpdate=function(e){this._modules.update(e),Wd(this,!0)};Vt.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(Vt.prototype,lc);const Iu={undeveloped:!1,greenAreaTrees:!1,parkingLots:!1,apartments:!1,commercials:!1,museums:!1,culturalLibrary:!1,publicSchool:!1,publicNurseries:!1,housesOfGod:!1,sizeSums:null,restart:!1,backward:!1,forward:!1,print:!1,statistics:!1,info:!1,fly:null,walk:null,lights:null,dayTime:null,powerPlant:!1,legend:null,startGame:!1,showActionBar:!1,initialCam:!1,playMode:!1,isAuthenticated:!1,loading:!1,blockSelection:!1,endInTimer:!1,startInTimer:!1,audio:!1,updateFeelGoodBarometer:!1,pauseDayAndNightCycle:!1,showFeelGoodBarometer:!1,stopWalking:!1,missionMode:!1},Jd=Yv({state:{...Iu},mutations:{resetState(n){Object.assign(n,Iu)},setUndeveloped(n,e){n.undeveloped=e},setGreenAreaTrees(n,e){n.greenAreaTrees=e},setParkingLots(n,e){n.parkingLots=e},setApartments(n,e){n.apartments=e},setCommercials(n,e){n.commercials=e},setMuseums(n,e){n.museums=e},setCulturalLibrary(n,e){n.culturalLibrary=e},setPublicSchool(n,e){n.publicSchool=e},setPublicNurseries(n,e){n.publicNurseries=e},setHousesOfGod(n,e){n.housesOfGod=e},setRestart(n,e){n.restart=e},setBackward(n,e){n.backward=e},setForward(n,e){n.forward=e},setPrint(n,e){n.print=e},setStatistics(n,e){n.statistics=e},setInfo(n,e){n.info=e},setLights(n,e){n.lights=e},setDayTime(n,e){n.dayTime=e},setPowerPlant(n,e){n.powerPlant=e},setLegend(n,e){n.legend=e},setStartGame(n,e){n.startGame=e},setShowActionBar(n,e){n.showActionBar=e},setPlayMode(n,e){n.playMode=e},setInitialCam(n,e){n.initialCam=e},setIsAuthenticated(n,e){n.isAuthenticated=e},updateSizeSums(n,e){n.sizeSums=e},setBlockSelection(n,e){n.blockSelection=e},setLoading(n,e){n.loading=e},setFly(n,e){n.fly=e},setWalk(n,e){n.walk=e},setEndInTimer(n,e){n.endInTimer=e},setStartInTimer(n,e){n.startInTimer=e},setAudio(n,e){n.audio=e},setUpdateFeelGoodBarometer(n,e){n.updateFeelGoodBarometer=e},setPauseDayAndNightCycle(n,e){n.pauseDayAndNightCycle=e},setShowFeelGoodBarometer(n,e){n.showFeelGoodBarometer=e},setStopWalking(n,e){n.stopWalking=e},setMissionMode(n,e){n.missionMode=e}},actions:{setUndeveloped({commit:n}){n("setUndeveloped",!0)},setGreenAreaTrees({commit:n}){n("setGreenAreaTrees",!0)},setParkingLots({commit:n}){n("setParkingLots",!0)},setApartments({commit:n}){n("setApartments",!0)},setCommercials({commit:n}){n("setCommercials",!0)},setMuseums({commit:n}){n("setMuseums",!0)},setCulturalLibrary({commit:n}){n("setCulturalLibrary",!0)},setPublicSchool({commit:n}){n("setPublicSchool",!0)},setPublicNurseries({commit:n}){n("setPublicNurseries",!0)},setHousesOfGod({commit:n}){n("setHousesOfGod",!0)},setRestart({commit:n}){n("setRestart",!0)},setBackward({commit:n}){n("setBackward",!0)},setForward({commit:n}){n("setForward",!0)},setPrint({commit:n}){n("setPrint",!0)},setStatistics({commit:n}){n("setStatistics",!0)},setInfo({commit:n}){n("setInfo",!0)},setLights({commit:n},e){n("setLights",e)},setDayTime({commit:n},e){n("setDayTime",e)},setPowerPlant({commit:n},e){console.log(`🟡 Dispatching setPowerPlant with value: ${e}`),n("setPowerPlant",e)},setLegend({commit:n},e){n("setLegend",e)},setStartGame({commit:n}){n("setStartGame",!0)},setShowActionBar({commit:n}){n("setShowActionBar",!0)},setPlayMode({commit:n},e){n("setPlayMode",e)},setInitialCam({commit:n}){n("setInitialCam",!0)},setIsAuthenticated({commit:n}){n("setIsAuthenticated",!0)},updateSizeSums({commit:n},e){n("updateSizeSums",e)},setBlockSelection({commit:n}){console.log(`🟡 Dispatching setBlockSelection with value: ${value}`),n("setBlockSelection",!0)},setLoading({commit:n},e){n("setLoading",e)},setFly({commit:n},e){n("setFly",e)},setWalk({commit:n},e){n("setWalk",e)},setEndInTimer({commit:n},e){n("setEndInTimer",e)},setStartInTimer({commit:n},e){n("setStartInTimer",e)},setAudio({commit:n}){n("setAudio",!0)},updateFeelGoodBarometer({commit:n},e){n("setUpdateFeelGoodBarometer",e)},setPauseDayAndNightCycle({commit:n},e){n("setPauseDayAndNightCycle",e)},setShowFeelGoodBarometer({commit:n},e){n("setShowFeelGoodBarometer",e)},setStopWalking({commit:n},e){n("setStopWalking",e)},setMissionMode({commit:n},e){n("setMissionMode",e)}},getters:{isUndeveloped:n=>n.undeveloped,isGreenAreaTrees:n=>n.greenAreaTrees,isParkingLots:n=>n.parkingLots,isApartments:n=>n.apartments,isCommercials:n=>n.commercials,isMuseum:n=>n.museums,isCulturalLibrary:n=>n.culturalLibrary,isPublicSchool:n=>n.publicSchool,isPublicNurseries:n=>n.publicNurseries,isHousesOfGod:n=>n.housesOfGod,isCallDeselectBlocks:n=>n.callDeselectBlocks,isRestart:n=>n.restart,isBackward:n=>n.backward,isForward:n=>n.forward,isPrint:n=>n.print,isStatistics:n=>n.statistics,isInfo:n=>n.info,isLights:n=>n.lights,isDayTime:n=>n.dayTime,isPowerPlant:n=>n.powerPlant,isLegend:n=>n.legend,isStartGame:n=>n.startGame,isShowActionBar:n=>n.showActionBar,isPlayMode:n=>n.playMode,isInitialCam:n=>n.initialCam,isAuthenticated:n=>n.isAuthenticated,getSizeSums:n=>n.sizeSums,isBlockSelection:n=>n.blockSelection,isLoading:n=>n.loading,getFly:n=>n.fly,getWalk:n=>n.walk,getEndInTimer:n=>n.endInTimer,getStartInTimer:n=>n.startInTimer,isAudio:n=>n.audio,isUpdateFeelGoodBarometer:n=>n.updateFeelGoodBarometer,isPauseDayAndNightCycle:n=>n.pauseDayAndNightCycle,isShowFeelGoodBarometer:n=>n.showFeelGoodBarometer,isStopWalking:n=>n.stopWalking,isMissionMode:n=>n.missionMode}}),Zv={name:"LoginPage",data(){return{username:"",password:"",error:!1,errorMessage:"",responseTexts:[]}},methods:{async login(){try{(await(await fetch("https://visualizer.matthiasheckel.com/proxy.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})})).text()).includes("true")?(this.$store.dispatch("setIsAuthenticated"),this.$router.push("/")):(console.log("Login failed!"),this.error=!0)}catch(n){console.error("Error:",n)}}}},Jv={class:"login-container"},Qv={class:"login-form"},ex={key:0,style:{color:"red"}};function tx(n,e,t,i,s,r){return jt(),Sn("div",Jv,[ut("div",Qv,[Gc(ut("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o),placeholder:"Username"},null,512),[[fu,s.username]]),Gc(ut("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),placeholder:"Password"},null,512),[[fu,s.password]]),ut("button",{onClick:e[2]||(e[2]=(...o)=>r.login&&r.login(...o))},"Login"),s.error?(jt(),Sn("p",ex,"Incorrect username or password")):Jo("",!0)])])}const nx=xi(Zv,[["render",tx],["__scopeId","data-v-07d5b354"]]),ix={name:"ChaosLayer",data(){return{isRunning:!1,_rafId:null,flyAroundInt:8.4,flyAroundd:6e-4,flyAd1020:10,flyAd7:0,iNeu:0}},mounted(){this.iNeu=0,this.flyAround3st(),this.startAnim(),setTimeout(()=>this.stopAnim(),10),window.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){this.stopAnim(),window.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown(n){(n.code==="Space"||n.key===" ")&&(n.preventDefault(),this.isRunning?this.stopAnim():this.startAnim())},startAnim(){if(this._rafId)return;this.isRunning=!0;const n=()=>{this.isRunning&&(this.iNeu=0,this.flyAround3(),this.flyAroundInt+=this.flyAroundd),this._rafId=requestAnimationFrame(n)};this._rafId=requestAnimationFrame(n)},stopAnim(){this.isRunning=!1,this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null)},flyAround3(){const n=this.$refs.flyAroundElements;if(!n)return;const e=window.innerWidth/2,t=window.innerHeight/2;for(let i=1400;i<2e3;i+=2){const r=(Math.cos(this.flyAroundInt*i/360*2*Math.PI)/360*2*Math.PI*600+10*i)/360*2*Math.PI,o=Math.sin(r)*600*.003*i+this.flyAd7+e,a=Math.cos(r)*600*.003*i+t;this.iNeu++;const l=n.children[this.iNeu-1];l&&(l.style.fontSize="1000px",l.style.left=o/this.flyAd1020+"px",l.style.top=a/this.flyAd1020+"px")}},flyAround3st(){const n=this.$refs.flyAroundElements;if(!n)return;const e=window.innerWidth/2,t=window.innerHeight/2;for(let i=1400;i<2e3;i+=2){const r=(Math.cos(this.flyAroundInt*i/360*2*Math.PI)/360*2*Math.PI*600+10*i)/360*2*Math.PI,o=Math.sin(r)*600*.003*i+this.flyAd7+e,a=Math.cos(r)*600*.003*i+t,l=document.createElement("div");l.innerHTML="&#8226;";const c=Math.max(0,Math.min(255,i/1.25-1400));l.style.color=`rgba(100, ${c}, 255, 0.1)`,l.style.fontSize="1000px",l.style.position="absolute",l.style.left=o/this.flyAd1020+"px",l.style.top=a/this.flyAd1020+"px",n.appendChild(l)}}}},sx={id:"spacer",class:"center-wrapper",style:{backgroundColor:"#FFE500"}},rx={id:"flyAroundElements",ref:"flyAroundElements"};function ox(n,e,t,i,s,r){return jt(),Sn("div",sx,[ut("div",rx,null,512)])}const ax=xi(ix,[["render",ox],["__scopeId","data-v-962c89eb"]]),lx={name:"ChaosPage",components:{ChaosLayer:ax},data(){return{isChaosLayer:!0}},mounted(){},methods:{}};function cx(n,e,t,i,s,r){const o=Ql("ChaosLayer");return s.isChaosLayer?(jt(),nc(o,{key:0})):Jo("",!0)}const ux=xi(lx,[["render",cx],["__scopeId","data-v-af8c4756"]]),hx={name:"VariableFont",data(){return{}},mounted(){},beforeUnmount(){},methods:{}},fx=n=>(ad("data-v-cb2c4b6b"),n=n(),ld(),n),dx={class:"container"},px=fx(()=>ut("button",{class:"button",type:"button","aria-label":"Variable font example"}," abcde ",-1)),mx=[px];function gx(n,e,t,i,s,r){return jt(),Sn("div",dx,mx)}const _x=xi(hx,[["render",gx],["__scopeId","data-v-cb2c4b6b"]]),vx={name:"VariableFontPage",components:{VariableFont:_x},data(){return{isVariableFont:!0}},mounted(){},methods:{}};function xx(n,e,t,i,s,r){const o=Ql("VariableFont");return s.isVariableFont?(jt(),nc(o,{key:0})):Jo("",!0)}const yx=xi(vx,[["render",xx],["__scopeId","data-v-12deb5f5"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="163",Mx=0,Nu=1,Sx=2,Qd=1,Ex=2,Bn=3,Gn=0,Ht=1,Mn=2,pi=0,Es=1,Du=2,Uu=3,Ou=4,Tx=5,Ui=100,bx=101,Ax=102,wx=103,Rx=104,Cx=200,Px=201,Lx=202,Ix=203,Cl=204,Pl=205,Nx=206,Dx=207,Ux=208,Ox=209,Fx=210,Bx=211,Hx=212,zx=213,kx=214,Vx=0,Gx=1,Wx=2,No=3,Xx=4,qx=5,jx=6,$x=7,ep=0,Kx=1,Yx=2,mi=0,Zx=1,Jx=2,Qx=3,e0=4,t0=5,n0=6,i0=7,Fu="attached",s0="detached",tp=300,Is=301,Ns=302,Ll=303,Il=304,ia=306,Ds=1e3,ci=1001,Do=1002,Ut=1003,np=1004,ar=1005,qt=1006,bo=1007,Hn=1008,gi=1009,r0=1010,o0=1011,ip=1012,sp=1013,Us=1014,En=1015,Uo=1016,rp=1017,op=1018,Cr=1020,a0=35902,l0=1021,c0=1022,cn=1023,u0=1024,h0=1025,Ts=1026,Tr=1027,ap=1028,lp=1029,f0=1030,cp=1031,up=1033,ba=33776,Aa=33777,wa=33778,Ra=33779,Bu=35840,Hu=35841,zu=35842,ku=35843,hp=36196,Vu=37492,Gu=37496,Wu=37808,Xu=37809,qu=37810,ju=37811,$u=37812,Ku=37813,Yu=37814,Zu=37815,Ju=37816,Qu=37817,eh=37818,th=37819,nh=37820,ih=37821,Ca=36492,sh=36494,rh=36495,d0=36283,oh=36284,ah=36285,lh=36286,br=2300,Os=2301,Pa=2302,ch=2400,uh=2401,hh=2402,p0=2500,m0=0,fp=1,Nl=2,g0=3200,_0=3201,dp=0,v0=1,li="",It="srgb",Mt="srgb-linear",uc="display-p3",sa="display-p3-linear",Oo="linear",it="srgb",Fo="rec709",Bo="p3",Yi=7680,fh=519,x0=512,y0=513,M0=514,pp=515,S0=516,E0=517,T0=518,b0=519,Dl=35044,dh="300 es",zn=2e3,Ho=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const bs=Math.PI/180,Fs=180/Math.PI;function hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function hc(n,e){return(n%e+e)%e}function A0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function w0(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function R0(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function C0(n,e=1){return e-Math.abs(hc(n,e*2)-e)}function P0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function L0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function I0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function N0(n,e){return n+Math.random()*(e-n)}function D0(n){return n*(.5-Math.random())}function U0(n){n!==void 0&&(ph=n);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O0(n){return n*bs}function F0(n){return n*Fs}function B0(n){return(n&n-1)===0&&n!==0}function H0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function z0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function k0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const V0={DEG2RAD:bs,RAD2DEG:Fs,generateUUID:hn,clamp:At,euclideanModulo:hc,mapLinear:A0,inverseLerp:w0,lerp:mr,damp:R0,pingpong:C0,smoothstep:P0,smootherstep:L0,randInt:I0,randFloat:N0,randFloatSpread:D0,seededRandom:U0,degToRad:O0,radToDeg:F0,isPowerOfTwo:B0,ceilPowerOfTwo:H0,floorPowerOfTwo:z0,setQuaternionFromProperEuler:k0,normalize:Je,denormalize:on};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],T=s[1],x=s[4],A=s[7],H=s[2],w=s[5],P=s[8];return r[0]=o*v+a*T+l*H,r[3]=o*m+a*x+l*w,r[6]=o*p+a*A+l*P,r[1]=c*v+u*T+h*H,r[4]=c*m+u*x+h*w,r[7]=c*p+u*A+h*P,r[2]=f*v+d*T+g*H,r[5]=f*m+d*x+g*w,r[8]=f*p+d*A+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new He;function mp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function G0(){const n=Ar("canvas");return n.style.display="block",n}const mh={};function gp(n){n in mh||(mh[n]=!0,console.warn(n))}const gh=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_h=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[Mt]:{transfer:Oo,primaries:Fo,toReference:n=>n,fromReference:n=>n},[It]:{transfer:it,primaries:Fo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sa]:{transfer:Oo,primaries:Bo,toReference:n=>n.applyMatrix3(_h),fromReference:n=>n.applyMatrix3(gh)},[uc]:{transfer:it,primaries:Bo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(_h),fromReference:n=>n.applyMatrix3(gh).convertLinearToSRGB()}},W0=new Set([Mt,sa]),Ye={enabled:!0,_workingColorSpace:Mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!W0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=zr[e].toReference,s=zr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return zr[n].primaries},getTransfer:function(n){return n===li?Oo:zr[n].transfer}};function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class X0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Ar("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q0=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?X0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j0=0;class xt extends Ws{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,i=ci,s=ci,r=qt,o=Hn,a=cn,l=gi,c=xt.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=hn(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=tp;xt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,A=(d+1)/2,H=(p+1)/2,w=(u+f)/4,P=(h+v)/4,G=(g+m)/4;return x>A&&x>H?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=P/i):A>H?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=w/s,r=G/s):H<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),i=P/r,s=G/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $0 extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _p(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends $0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vp extends xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K0 extends xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*v,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const H=Math.sqrt(x),w=Math.atan2(H,p*T);m=Math.sin(m*w)/H,a=Math.sin(a*w)/H}const A=a*T;if(l=l*m+f*A,c=c*m+d*A,u=u*m+g*A,h=h*m+v*A,m===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=H,c*=H,u*=H,h*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new B,vh=new yi;class Xn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Vr.subVectors(this.max,Js),Ji.subVectors(e.a,Js),Qi.subVectors(e.b,Js),es.subVectors(e.c,Js),Yn.subVectors(Qi,Ji),Zn.subVectors(es,Qi),bi.subVectors(Ji,es);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-bi.z,bi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,bi.z,0,-bi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-bi.y,bi.x,0];return!Ua(t,Ji,Qi,es,Vr)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,Ji,Qi,es,Vr))?!1:(Gr.crossVectors(Yn,Zn),t=[Gr.x,Gr.y,Gr.z],Ua(t,Ji,Qi,es,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,kr=new Xn,Ji=new B,Qi=new B,es=new B,Yn=new B,Zn=new B,bi=new B,Js=new B,Vr=new B,Gr=new B,Ai=new B;function Ua(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ai.fromArray(n,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Y0=new Xn,Qs=new B,Oa=new B;class Rn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Y0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Oa)),this.expandByPoint(Qs.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new B,Fa=new B,Wr=new B,Jn=new B,Ba=new B,Xr=new B,Ha=new B;class ra{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fa.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Fa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=Jn.dot(this.direction),l=-Jn.dot(Wr),c=Jn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fa).addScaledVector(Wr,f),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){Ba.subVectors(t,e),Xr.subVectors(i,e),Ha.crossVectors(Ba,Xr);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(Jn,Xr));if(l<0)return null;const c=a*this.direction.dot(Ba.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,v,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z0,e,J0)}lookAt(e,t,i){const s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Qn.crossVectors(i,Wt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Qn.crossVectors(i,Wt)),Qn.normalize(),qr.crossVectors(Wt,Qn),s[0]=Qn.x,s[4]=qr.x,s[8]=Wt.x,s[1]=Qn.y,s[5]=qr.y,s[9]=Wt.y,s[2]=Qn.z,s[6]=qr.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],x=i[7],A=i[11],H=i[15],w=s[0],P=s[4],G=s[8],b=s[12],M=s[1],W=s[5],J=s[9],U=s[13],Z=s[2],ne=s[6],ie=s[10],oe=s[14],V=s[3],le=s[7],ae=s[11],Me=s[15];return r[0]=o*w+a*M+l*Z+c*V,r[4]=o*P+a*W+l*ne+c*le,r[8]=o*G+a*J+l*ie+c*ae,r[12]=o*b+a*U+l*oe+c*Me,r[1]=u*w+h*M+f*Z+d*V,r[5]=u*P+h*W+f*ne+d*le,r[9]=u*G+h*J+f*ie+d*ae,r[13]=u*b+h*U+f*oe+d*Me,r[2]=g*w+v*M+m*Z+p*V,r[6]=g*P+v*W+m*ne+p*le,r[10]=g*G+v*J+m*ie+p*ae,r[14]=g*b+v*U+m*oe+p*Me,r[3]=T*w+x*M+A*Z+H*V,r[7]=T*P+x*W+A*ne+H*le,r[11]=T*G+x*J+A*ie+H*ae,r[15]=T*b+x*U+A*oe+H*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=h*m*c-v*f*c+v*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,A=u*v*c-g*h*c+g*a*d-o*v*d-u*a*p+o*h*p,H=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,w=t*T+i*x+s*A+r*H;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=T*P,e[1]=(v*f*r-h*m*r-v*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=x*P,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=A*P,e[9]=(g*h*r-u*v*r-g*i*d+t*v*d+u*i*p-t*h*p)*P,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*P,e[12]=H*P,e[13]=(u*v*s-g*h*s+g*i*f-t*v*f-u*i*m+t*h*m)*P,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,m=o*h,p=a*h,T=l*c,x=l*u,A=l*h,H=i.x,w=i.y,P=i.z;return s[0]=(1-(v+p))*H,s[1]=(d+A)*H,s[2]=(g-x)*H,s[3]=0,s[4]=(d-A)*w,s[5]=(1-(f+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+x)*P,s[9]=(m-T)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);const c=1/r,u=1/o,h=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=zn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===zn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ho)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,v;if(a===zn)g=(o+r)*h,v=-2*h;else if(a===Ho)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new B,tn=new ze,Z0=new B(0,0,0),J0=new B(1,1,1),Qn=new B,qr=new B,Wt=new B,xh=new ze,yh=new yi;class wn{constructor(e=0,t=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q0=0;const Mh=new B,ns=new yi,Dn=new ze,jr=new B,er=new B,ey=new B,ty=new yi,Sh=new B(1,0,0),Eh=new B(0,1,0),Th=new B(0,0,1),bh={type:"added"},ny={type:"removed"},is={type:"childadded",child:null},za={type:"childremoved",child:null};class ht extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new B,t=new wn,i=new yi,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new He}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Sh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(er,jr,this.up):Dn.lookAt(jr,er,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Dn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ny),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ht.DEFAULT_UP=new B(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new B,Un=new B,ka=new B,On=new B,ss=new B,rs=new B,Ah=new B,Va=new B,Ga=new B,Wa=new B;class an{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){nn.subVectors(s,t),Un.subVectors(i,t),ka.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Un),l=nn.dot(ka),c=Un.dot(Un),u=Un.dot(ka),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static isFrontFacing(e,t,i,s){return nn.subVectors(i,t),Un.subVectors(e,t),nn.cross(Un).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),nn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ss.subVectors(s,i),rs.subVectors(r,i),Va.subVectors(e,i);const l=ss.dot(Va),c=rs.dot(Va);if(l<=0&&c<=0)return t.copy(i);Ga.subVectors(e,s);const u=ss.dot(Ga),h=rs.dot(Ga);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ss,o);Wa.subVectors(e,r);const d=ss.dot(Wa),g=rs.dot(Wa);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(rs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ah.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ah,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(ss,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=hc(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xa(o,r,e+1/3),this.g=Xa(o,r,e),this.b=Xa(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=yp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ye.fromWorkingColorSpace(bt.copy(this),e),Math.round(At(bt.r*255,0,255))*65536+Math.round(At(bt.g*255,0,255))*256+Math.round(At(bt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,s=bt.g,r=bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=It){Ye.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,s=bt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL($r);const i=mr(ei.h,$r.h,t),s=mr(ei.s,$r.s,t),r=mr(ei.l,$r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Le;Le.NAMES=yp;let iy=0;class Tn extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Es,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new B,Kr=new Ve;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=on(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}}class Mp extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sp extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sy=0;const Yt=new ze,qa=new ht,os=new B,Xt=new Xn,tr=new Xn,vt=new B;class pn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?Sp:Mp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Xt.min,tr.min),Xt.expandByPoint(vt),vt.addVectors(Xt.max,tr.max),Xt.expandByPoint(vt)):(Xt.expandByPoint(tr.min),Xt.expandByPoint(tr.max))}Xt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),vt.add(os)),s=Math.max(s,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<i.count;G++)a[G]=new B,l[G]=new B;const c=new B,u=new B,h=new B,f=new Ve,d=new Ve,g=new Ve,v=new B,m=new B;function p(G,b,M){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,G),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const W=1/(d.x*g.y-g.x*d.y);isFinite(W)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(W),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(W),a[G].add(v),a[b].add(v),a[M].add(v),l[G].add(m),l[b].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let G=0,b=T.length;G<b;++G){const M=T[G],W=M.start,J=M.count;for(let U=W,Z=W+J;U<Z;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new B,A=new B,H=new B,w=new B;function P(G){H.fromBufferAttribute(s,G),w.copy(H);const b=a[G];x.copy(b),x.sub(H.multiplyScalar(H.dot(b))).normalize(),A.crossVectors(w,b);const W=A.dot(l[G])<0?-1:1;o.setXYZW(G,x.x,x.y,x.z,W)}for(let G=0,b=T.length;G<b;++G){const M=T[G],W=M.start,J=M.count;for(let U=W,Z=W+J;U<Z;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ot(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new ze,wi=new ra,Yr=new Rn,Rh=new B,as=new B,ls=new B,cs=new B,ja=new B,Zr=new B,Jr=new Ve,Qr=new Ve,eo=new Ve,Ch=new B,Ph=new B,Lh=new B,to=new B,no=new B;class $t extends ht{constructor(e=new pn,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ja.fromBufferAttribute(h,e),o?Zr.addScaledVector(ja,u):Zr.addScaledVector(ja.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Yr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Yr,Rh)===null||wi.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(wh.copy(r).invert(),wi.copy(e.ray).applyMatrix4(wh),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let A=T,H=x;A<H;A+=3){const w=a.getX(A),P=a.getX(A+1),G=a.getX(A+2);s=io(this,p,e,i,c,u,h,w,P,G),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),x=a.getX(m+1),A=a.getX(m+2);s=io(this,o,e,i,c,u,h,T,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let A=T,H=x;A<H;A+=3){const w=A,P=A+1,G=A+2;s=io(this,p,e,i,c,u,h,w,P,G),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=m,x=m+1,A=m+2;s=io(this,o,e,i,c,u,h,T,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ry(n,e,t,i,s,r,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gn,a),l===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,as),n.getVertexPosition(l,ls),n.getVertexPosition(c,cs);const u=ry(n,e,t,i,as,ls,cs,to);if(u){s&&(Jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,l),eo.fromBufferAttribute(s,c),u.uv=an.getInterpolation(to,as,ls,cs,Jr,Qr,eo,new Ve)),r&&(Jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,l),eo.fromBufferAttribute(r,c),u.uv1=an.getInterpolation(to,as,ls,cs,Jr,Qr,eo,new Ve)),o&&(Ch.fromBufferAttribute(o,a),Ph.fromBufferAttribute(o,l),Lh.fromBufferAttribute(o,c),u.normal=an.getInterpolation(to,as,ls,cs,Ch,Ph,Lh,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};an.getNormal(as,ls,cs,h.normal),u.face=h}return u}class Pr extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(h,2));function g(v,m,p,T,x,A,H,w,P,G,b){const M=A/P,W=H/G,J=A/2,U=H/2,Z=w/2,ne=P+1,ie=G+1;let oe=0,V=0;const le=new B;for(let ae=0;ae<ie;ae++){const Me=ae*W-U;for(let Ae=0;Ae<ne;Ae++){const qe=Ae*M-J;le[v]=qe*T,le[m]=Me*x,le[p]=Z,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=w>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ae/P),h.push(1-ae/G),oe+=1}}for(let ae=0;ae<G;ae++)for(let Me=0;Me<P;Me++){const Ae=f+Me+ne*ae,qe=f+Me+ne*(ae+1),Y=f+(Me+1)+ne*(ae+1),fe=f+(Me+1)+ne*ae;l.push(Ae,qe,fe),l.push(qe,Y,fe),V+=6}a.addGroup(d,V,b),d+=V,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Bs(n[t]);for(const s in i)e[s]=i[s]}return e}function oy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ep(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ay={clone:Bs,merge:Lt};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tp extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new B,Ih=new Ve,Nh=new Ve;class Nt extends Tp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Nh),t.subVectors(Nh,Ih)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,hs=1;class uy extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nt(us,hs,e,t);s.layers=this.layers,this.add(s);const r=new Nt(us,hs,e,t);r.layers=this.layers,this.add(r);const o=new Nt(us,hs,e,t);o.layers=this.layers,this.add(o);const a=new Nt(us,hs,e,t);a.layers=this.layers,this.add(a);const l=new Nt(us,hs,e,t);l.layers=this.layers,this.add(l);const c=new Nt(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bp extends xt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hy extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pr(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:pi});r.uniforms.tEquirect.value=t;const o=new $t(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=qt),new uy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const $a=new B,fy=new B,dy=new He;class Ii{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$a.subVectors(i,t).cross(fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dy.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Rn,so=new B;class fc{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],x=s[14],A=s[15];if(i[0].setComponents(l-r,f-c,m-d,A-p).normalize(),i[1].setComponents(l+r,f+c,m+d,A+p).normalize(),i[2].setComponents(l+o,f+u,m+g,A+T).normalize(),i[3].setComponents(l-o,f-u,m-g,A-T).normalize(),i[4].setComponents(l-a,f-h,m-v,A-x).normalize(),t===zn)i[5].setComponents(l+a,f+h,m+v,A+x).normalize();else if(t===Ho)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ap(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function py(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class oa extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let x=0;x<c;x++){const A=x*h-r;g.push(A,-T,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const x=T+c*p,A=T+c*(p+1),H=T+1+c*(p+1),w=T+1+c*p;d.push(x,A,w),d.push(A,H,w)}this.setIndex(d),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
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
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Cy=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,By=`#define PI 3.141592653589793
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
} // validated`,Hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zy=`vec3 transformedNormal = objectNormal;
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
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`
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
}`,jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nM=`#ifdef USE_GRADIENTMAP
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
}`,iM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aM=`uniform bool receiveShadow;
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
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
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
#endif`,pM=`struct PhysicalMaterial {
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
}`,mM=`
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bM=`#if defined( USE_POINTS_UV )
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
#endif`,AM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PM=`#ifdef USE_MORPHNORMALS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eS=`float getShadowMask() {
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
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,rS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,ES=`#define DISTANCE
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
}`,TS=`#define DISTANCE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
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
}`,RS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,LS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,DS=`#define MATCAP
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
}`,US=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,HS=`#define STANDARD
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
}`,zS=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,VS=`#define TOON
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
}`,GS=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,jS=`uniform float rotation;
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
}`,$S=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:_y,alphamap_pars_fragment:vy,alphatest_fragment:xy,alphatest_pars_fragment:yy,aomap_fragment:My,aomap_pars_fragment:Sy,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:by,beginnormal_vertex:Ay,bsdfs:wy,iridescence_fragment:Ry,bumpmap_pars_fragment:Cy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Ny,color_fragment:Dy,color_pars_fragment:Uy,color_pars_vertex:Oy,color_vertex:Fy,common:By,cube_uv_reflection_fragment:Hy,defaultnormal_vertex:zy,displacementmap_pars_vertex:ky,displacementmap_vertex:Vy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:qy,envmap_fragment:jy,envmap_common_pars_fragment:$y,envmap_pars_fragment:Ky,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:lM,envmap_vertex:Zy,fog_vertex:Jy,fog_pars_vertex:Qy,fog_fragment:eM,fog_pars_fragment:tM,gradientmap_pars_fragment:nM,lightmap_fragment:iM,lightmap_pars_fragment:sM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:oM,lights_pars_begin:aM,lights_toon_fragment:cM,lights_toon_pars_fragment:uM,lights_phong_fragment:hM,lights_phong_pars_fragment:fM,lights_physical_fragment:dM,lights_physical_pars_fragment:pM,lights_fragment_begin:mM,lights_fragment_maps:gM,lights_fragment_end:_M,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:yM,logdepthbuf_vertex:MM,map_fragment:SM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:bM,metalnessmap_fragment:AM,metalnessmap_pars_fragment:wM,morphinstance_vertex:RM,morphcolor_vertex:CM,morphnormal_vertex:PM,morphtarget_pars_vertex:LM,morphtarget_vertex:IM,normal_fragment_begin:NM,normal_fragment_maps:DM,normal_pars_fragment:UM,normal_pars_vertex:OM,normal_vertex:FM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:VM,opaque_fragment:GM,packing:WM,premultiplied_alpha_fragment:XM,project_vertex:qM,dithering_fragment:jM,dithering_pars_fragment:$M,roughnessmap_fragment:KM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:JM,shadowmap_vertex:QM,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:sS,specularmap_fragment:rS,specularmap_pars_fragment:oS,tonemapping_fragment:aS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:hS,uv_pars_vertex:fS,uv_vertex:dS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:_S,backgroundCube_frag:vS,cube_vert:xS,cube_frag:yS,depth_vert:MS,depth_frag:SS,distanceRGBA_vert:ES,distanceRGBA_frag:TS,equirect_vert:bS,equirect_frag:AS,linedashed_vert:wS,linedashed_frag:RS,meshbasic_vert:CS,meshbasic_frag:PS,meshlambert_vert:LS,meshlambert_frag:IS,meshmatcap_vert:NS,meshmatcap_frag:DS,meshnormal_vert:US,meshnormal_frag:OS,meshphong_vert:FS,meshphong_frag:BS,meshphysical_vert:HS,meshphysical_frag:zS,meshtoon_vert:kS,meshtoon_frag:VS,points_vert:GS,points_frag:WS,shadow_vert:XS,shadow_frag:qS,sprite_vert:jS,sprite_frag:$S},_e={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:Lt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([_e.points,_e.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([_e.common,_e.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([_e.sprite,_e.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([_e.lights,_e.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};xn.physical={uniforms:Lt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ro={r:0,b:0,g:0},Ci=new wn,KS=new ze;function YS(n,e,t,i,s,r,o){const a=new Le(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let T=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ia)?(u===void 0&&(u=new $t(new Pr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Bs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ci.copy(p.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(Ci)),u.material.toneMapped=Ye.getTransfer(x.colorSpace)!==it,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $t(new oa(2,2),new vi({name:"BackgroundMaterial",uniforms:Bs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(ro,Ep(n)),i.buffers.color.setClear(ro.r,ro.g,ro.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function ZS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,W,J,U,Z){let ne=!1;const ie=h(U,J,W);r!==ie&&(r=ie,c(r.object)),ne=d(M,U,J,Z),ne&&g(M,U,J,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,A(M,W,J,U),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,W,J){const U=J.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let ne=Z[W.id];ne===void 0&&(ne={},Z[W.id]=ne);let ie=ne[U];return ie===void 0&&(ie=f(l()),ne[U]=ie),ie}function f(M){const W=[],J=[],U=[];for(let Z=0;Z<t;Z++)W[Z]=0,J[Z]=0,U[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,W,J,U){const Z=r.attributes,ne=W.attributes;let ie=0;const oe=J.getAttributes();for(const V in oe)if(oe[V].location>=0){const ae=Z[V];let Me=ne[V];if(Me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),ae===void 0||ae.attribute!==Me||Me&&ae.data!==Me.data)return!0;ie++}return r.attributesNum!==ie||r.index!==U}function g(M,W,J,U){const Z={},ne=W.attributes;let ie=0;const oe=J.getAttributes();for(const V in oe)if(oe[V].location>=0){let ae=ne[V];ae===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const Me={};Me.attribute=ae,ae&&ae.data&&(Me.data=ae.data),Z[V]=Me,ie++}r.attributes=Z,r.attributesNum=ie,r.index=U}function v(){const M=r.newAttributes;for(let W=0,J=M.length;W<J;W++)M[W]=0}function m(M){p(M,0)}function p(M,W){const J=r.newAttributes,U=r.enabledAttributes,Z=r.attributeDivisors;J[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),Z[M]!==W&&(n.vertexAttribDivisor(M,W),Z[M]=W)}function T(){const M=r.newAttributes,W=r.enabledAttributes;for(let J=0,U=W.length;J<U;J++)W[J]!==M[J]&&(n.disableVertexAttribArray(J),W[J]=0)}function x(M,W,J,U,Z,ne,ie){ie===!0?n.vertexAttribIPointer(M,W,J,Z,ne):n.vertexAttribPointer(M,W,J,U,Z,ne)}function A(M,W,J,U){v();const Z=U.attributes,ne=J.getAttributes(),ie=W.defaultAttributeValues;for(const oe in ne){const V=ne[oe];if(V.location>=0){let le=Z[oe];if(le===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const ae=le.normalized,Me=le.itemSize,Ae=e.get(le);if(Ae===void 0)continue;const qe=Ae.buffer,Y=Ae.type,fe=Ae.bytesPerElement,pe=Y===n.INT||Y===n.UNSIGNED_INT||le.gpuType===sp;if(le.isInterleavedBufferAttribute){const O=le.data,se=O.stride,te=le.offset;if(O.isInstancedInterleavedBuffer){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,O.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ce=0;ce<V.locationSize;ce++)x(V.location+ce,Me/V.locationSize,Y,ae,se*fe,(te+Me/V.locationSize*ce)*fe,pe)}else{if(le.isInstancedBufferAttribute){for(let O=0;O<V.locationSize;O++)p(V.location+O,le.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let O=0;O<V.locationSize;O++)m(V.location+O);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let O=0;O<V.locationSize;O++)x(V.location+O,Me/V.locationSize,Y,ae,Me*fe,Me/V.locationSize*O*fe,pe)}}else if(ie!==void 0){const ae=ie[oe];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(V.location,ae);break;case 3:n.vertexAttrib3fv(V.location,ae);break;case 4:n.vertexAttrib4fv(V.location,ae);break;default:n.vertexAttrib1fv(V.location,ae)}}}}T()}function H(){G();for(const M in i){const W=i[M];for(const J in W){const U=W[J];for(const Z in U)u(U[Z].object),delete U[Z];delete W[J]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const W=i[M.id];for(const J in W){const U=W[J];for(const Z in U)u(U[Z].object),delete U[Z];delete W[J]}delete i[M.id]}function P(M){for(const W in i){const J=i[W];if(J[M.id]===void 0)continue;const U=J[M.id];for(const Z in U)u(U[Z].object),delete U[Z];delete J[M.id]}}function G(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function JS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function QS(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:p,maxSamples:T}}function eE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ii,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,x=T*4;let A=p.clippingState||null;l.value=A,A=u(g,f,x,d);for(let H=0;H!==x;++H)A[H]=t[H];p.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,A=d;x!==v;++x,A+=4)o.copy(h[x]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function tE(n){let e=new WeakMap;function t(o,a){return a===Ll?o.mapping=Is:a===Il&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ll||a===Il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hy(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class dc extends Tp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Dh=[.125,.215,.35,.446,.526,.582],Oi=20,Ka=new dc,Uh=new Le;let Ya=null,Za=0,Ja=0,Qa=!1;const Ni=(1+Math.sqrt(5))/2,fs=1/Ni,Oh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ni,fs),new B(0,Ni,-fs),new B(fs,0,Ni),new B(-fs,0,Ni),new B(Ni,fs,0),new B(-Ni,fs,0)];class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,Za,Ja),this._renderer.xr.enabled=Qa,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Uo,format:cn,colorSpace:Mt,depthBuffer:!1},s=Bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nE(r)),this._blurMaterial=iE(r,e,t)}return s}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,i,s){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uh),u.toneMapping=mi,u.autoClear=!1;const d=new ui({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new $t(new Pr,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Uh),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;oo(s,T*x,p>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Is||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;oo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Oh[(s-1)%Oh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let T=0;for(let P=0;P<Oi;++P){const G=P/v,b=Math.exp(-G*G/2);p.push(b),P===0?T+=b:P<m&&(T+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const A=this._sizeLods[s],H=3*A*(s>x-gs?s-x+gs:0),w=4*(this._cubeSize-A);oo(t,H,w,3*A,2*A),l.setRenderTarget(t),l.render(h,Ka)}}function nE(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+Dh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-gs?l=Dh[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*d),x=new Float32Array(m*g*d),A=new Float32Array(p*g*d);for(let w=0;w<d;w++){const P=w%3*2/3-1,G=w>2?0:-1,b=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];T.set(b,v*g*w),x.set(f,m*g*w);const M=[w,w,w,w,w,w];A.set(M,p*g*w)}const H=new pn;H.setAttribute("position",new Ot(T,v)),H.setAttribute("uv",new Ot(x,m)),H.setAttribute("faceIndex",new Ot(A,p)),e.push(H),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bh(n,e,t){const i=new Gi(n,e,t);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iE(n,e,t){const i=new Float32Array(Oi),s=new B(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Hh(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zh(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function sE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ll||l===Il,u=l===Is||l===Ns;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Fh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Fh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function oE(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let x=0,A=T.length;x<A;x+=3){const H=T[x+0],w=T[x+1],P=T[x+2];f.push(H,w,w,P,P,H)}}else if(g!==void 0){const T=g.array;v=g.version;for(let x=0,A=T.length/3-1;x<A;x+=3){const H=x+0,w=x+1,P=x+2;f.push(H,w,w,P,P,H)}}else return;const m=new(mp(f)?Sp:Mp)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function aE(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(h[v]/o,f[v]);else{g.multiDrawElementsWEBGL(i,f,0,r,h,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];t.update(v,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cE(n,e,t){const i=new WeakMap,s=new et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let A=a.attributes.position.count*x,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*H*4*h),P=new vp(w,A,H,h);P.type=En,P.needsUpdate=!0;const G=x*4;for(let M=0;M<h;M++){const W=m[M],J=p[M],U=T[M],Z=A*H*4*M;for(let ne=0;ne<W.count;ne++){const ie=ne*G;d===!0&&(s.fromBufferAttribute(W,ne),w[Z+ie+0]=s.x,w[Z+ie+1]=s.y,w[Z+ie+2]=s.z,w[Z+ie+3]=0),g===!0&&(s.fromBufferAttribute(J,ne),w[Z+ie+4]=s.x,w[Z+ie+5]=s.y,w[Z+ie+6]=s.z,w[Z+ie+7]=0),v===!0&&(s.fromBufferAttribute(U,ne),w[Z+ie+8]=s.x,w[Z+ie+9]=s.y,w[Z+ie+10]=s.z,w[Z+ie+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Ve(A,H)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function uE(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class wp extends xt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ts,u!==Ts&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ts&&(i=Us),i===void 0&&u===Tr&&(i=Cr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rp=new xt,Cp=new wp(1,1);Cp.compareFunction=pp;const Pp=new vp,Lp=new K0,Ip=new bp,kh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function aa(n,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function dE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function pE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function mE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),gt(t,i)}}function gE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),gt(t,i)}}function _E(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),gt(t,i)}}function vE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function yE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function ME(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function SE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function TE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function bE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function AE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Cp:Rp;t.setTexture2D(e||r,s)}function wE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lp,s)}function RE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ip,s)}function CE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pp,s)}function PE(n){switch(n){case 5126:return hE;case 35664:return fE;case 35665:return dE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return _E;case 5124:case 35670:return vE;case 35667:case 35671:return xE;case 35668:case 35672:return yE;case 35669:case 35673:return ME;case 5125:return SE;case 36294:return EE;case 36295:return TE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}function LE(n,e){n.uniform1fv(this.addr,e)}function IE(n,e){const t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function NE(n,e){const t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function DE(n,e){const t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function UE(n,e){const t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OE(n,e){const t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FE(n,e){const t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BE(n,e){n.uniform1iv(this.addr,e)}function HE(n,e){n.uniform2iv(this.addr,e)}function zE(n,e){n.uniform3iv(this.addr,e)}function kE(n,e){n.uniform4iv(this.addr,e)}function VE(n,e){n.uniform1uiv(this.addr,e)}function GE(n,e){n.uniform2uiv(this.addr,e)}function WE(n,e){n.uniform3uiv(this.addr,e)}function XE(n,e){n.uniform4uiv(this.addr,e)}function qE(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Rp,r[o])}function jE(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lp,r[o])}function $E(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ip,r[o])}function KE(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);mt(i,r)||(n.uniform1iv(this.addr,r),gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pp,r[o])}function YE(n){switch(n){case 5126:return LE;case 35664:return IE;case 35665:return NE;case 35666:return DE;case 35674:return UE;case 35675:return OE;case 35676:return FE;case 5124:case 35670:return BE;case 35667:case 35671:return HE;case 35668:case 35672:return zE;case 35669:case 35673:return kE;case 5125:return VE;case 36294:return GE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}class ZE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PE(t.type)}}class JE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YE(t.type)}}class QE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const el=/(\w+)(\])?(\[|\.)?/g;function qh(n,e){n.seq.push(e),n.map[e.id]=e}function eT(n,e,t){const i=n.name,s=i.length;for(el.lastIndex=0;;){const r=el.exec(i),o=el.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(t,c===void 0?new ZE(a,n,e):new JE(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new QE(a),qh(t,h)),t=h}}}class Ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);eT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function jh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tT=37297;let nT=0;function iT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sT(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let i;switch(e===t?i="":e===Bo&&t===Fo?i="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Bo&&(i="LinearSRGBToLinearDisplayP3"),n){case Mt:case sa:return[i,"LinearTransferOETF"];case It:case uc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $h(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iT(n.getShaderSource(e),o)}else return s}function rT(n,e){const t=sT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oT(n,e){let t;switch(e){case Zx:t="Linear";break;case Jx:t="Reinhard";break;case Qx:t="OptimizedCineon";break;case e0:t="ACESFilmic";break;case n0:t="AgX";break;case i0:t="Neutral";break;case t0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function lT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lr(n){return n!==""}function Kh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(uT,fT)}const hT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fT(n,e){let t=Be[e];if(t===void 0){const i=hT.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace(dT,pT)}function pT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function mT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function gT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Is:case Ns:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _T(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function vT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case Kx:e="ENVMAP_BLENDING_MIX";break;case Yx:e="ENVMAP_BLENDING_ADD";break}return e}function xT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mT(t),c=gT(t),u=_T(t),h=vT(t),f=xT(t),d=aT(t),g=lT(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Be.tonemapping_pars_fragment:"",t.toneMapping!==mi?oT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,rT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Ul(o),o=Kh(o,t),o=Yh(o,t),a=Ul(a),a=Kh(a,t),a=Yh(a,t),o=Zh(o),a=Zh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+m+o,A=T+p+a,H=jh(s,s.VERTEX_SHADER,x),w=jh(s,s.FRAGMENT_SHADER,A);s.attachShader(v,H),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(W){if(n.debug.checkShaderErrors){const J=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(H).trim(),Z=s.getShaderInfoLog(w).trim();let ne=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,H,w);else{const oe=$h(s,H,"vertex"),V=$h(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+J+`
`+oe+`
`+V)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(U===""||Z==="")&&(ie=!1);ie&&(W.diagnostics={runnable:ne,programLog:J,vertexShader:{log:U,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(H),s.deleteShader(w),G=new Ao(s,v),b=cT(s,v)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,tT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=w,this}let MT=0;class ST{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ET(e),t.set(e,i)),i}}class ET{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function TT(n,e,t,i,s,r,o){const a=new xp,l=new ST,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,W,J,U){const Z=J.fog,ne=U.geometry,ie=b.isMeshStandardMaterial?J.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),V=oe&&oe.mapping===ia?oe.image.height:null,le=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ae=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Me=ae!==void 0?ae.length:0;let Ae=0;ne.morphAttributes.position!==void 0&&(Ae=1),ne.morphAttributes.normal!==void 0&&(Ae=2),ne.morphAttributes.color!==void 0&&(Ae=3);let qe,Y,fe,pe;if(le){const St=xn[le];qe=St.vertexShader,Y=St.fragmentShader}else qe=b.vertexShader,Y=b.fragmentShader,l.update(b),fe=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const O=n.getRenderTarget(),se=U.isInstancedMesh===!0,te=U.isBatchedMesh===!0,ce=!!b.map,F=!!b.matcap,Ee=!!oe,S=!!b.aoMap,R=!!b.lightMap,D=!!b.bumpMap,K=!!b.normalMap,y=!!b.displacementMap,_=!!b.emissiveMap,L=!!b.metalnessMap,I=!!b.roughnessMap,z=b.anisotropy>0,N=b.clearcoat>0,Q=b.iridescence>0,q=b.sheen>0,re=b.transmission>0,ue=z&&!!b.anisotropyMap,ee=N&&!!b.clearcoatMap,he=N&&!!b.clearcoatNormalMap,ye=N&&!!b.clearcoatRoughnessMap,me=Q&&!!b.iridescenceMap,xe=Q&&!!b.iridescenceThicknessMap,De=q&&!!b.sheenColorMap,Ge=q&&!!b.sheenRoughnessMap,Xe=!!b.specularMap,je=!!b.specularColorMap,ke=!!b.specularIntensityMap,Se=re&&!!b.transmissionMap,C=re&&!!b.thicknessMap,ge=!!b.gradientMap,de=!!b.alphaMap,be=b.alphaTest>0,we=!!b.alphaHash,tt=!!b.extensions;let rt=mi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(rt=n.toneMapping);const lt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:Y,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:te,instancing:se,instancingColor:se&&U.instanceColor!==null,instancingMorph:se&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Mt,alphaToCoverage:!!b.alphaToCoverage,map:ce,matcap:F,envMap:Ee,envMapMode:Ee&&oe.mapping,envMapCubeUVHeight:V,aoMap:S,lightMap:R,bumpMap:D,normalMap:K,displacementMap:f&&y,emissiveMap:_,normalMapObjectSpace:K&&b.normalMapType===v0,normalMapTangentSpace:K&&b.normalMapType===dp,metalnessMap:L,roughnessMap:I,anisotropy:z,anisotropyMap:ue,clearcoat:N,clearcoatMap:ee,clearcoatNormalMap:he,clearcoatRoughnessMap:ye,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:xe,sheen:q,sheenColorMap:De,sheenRoughnessMap:Ge,specularMap:Xe,specularColorMap:je,specularIntensityMap:ke,transmission:re,transmissionMap:Se,thicknessMap:C,gradientMap:ge,opaque:b.transparent===!1&&b.blending===Es&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:we,combine:b.combine,mapUv:ce&&v(b.map.channel),aoMapUv:S&&v(b.aoMap.channel),lightMapUv:R&&v(b.lightMap.channel),bumpMapUv:D&&v(b.bumpMap.channel),normalMapUv:K&&v(b.normalMap.channel),displacementMapUv:y&&v(b.displacementMap.channel),emissiveMapUv:_&&v(b.emissiveMap.channel),metalnessMapUv:L&&v(b.metalnessMap.channel),roughnessMapUv:I&&v(b.roughnessMap.channel),anisotropyMapUv:ue&&v(b.anisotropyMap.channel),clearcoatMapUv:ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(b.sheenRoughnessMap.channel),specularMapUv:Xe&&v(b.specularMap.channel),specularColorMapUv:je&&v(b.specularColorMap.channel),specularIntensityMapUv:ke&&v(b.specularIntensityMap.channel),transmissionMapUv:Se&&v(b.transmissionMap.channel),thicknessMapUv:C&&v(b.thicknessMap.channel),alphaMapUv:de&&v(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(K||z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!ne.attributes.uv&&(ce||de),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ce&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mn,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)M.push(W),M.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(T(M,b),x(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function T(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),b.push(a.mask)}function A(b){const M=g[b.type];let W;if(M){const J=xn[M];W=ay.clone(J.uniforms)}else W=b.uniforms;return W}function H(b,M){let W;for(let J=0,U=u.length;J<U;J++){const Z=u[J];if(Z.cacheKey===M){W=Z,++W.usedTimes;break}}return W===void 0&&(W=new yT(n,M,b,r),u.push(W)),W}function w(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:H,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:G}}function bT(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function AT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||AT),i.length>1&&i.sort(f||Qh),s.length>1&&s.sort(f||Qh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function wT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ef,n.set(i,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Le};break;case"SpotLight":t={position:new B,direction:new B,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function CT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PT=0;function LT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IT(n){const e=new RT,t=CT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new ze,o=new ze;function a(c,u){let h=0,f=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,v=0,m=0,p=0,T=0,x=0,A=0,H=0,w=0,P=0,G=0;c.sort(LT);const b=u===!0?Math.PI:1;for(let W=0,J=c.length;W<J;W++){const U=c[W],Z=U.color,ne=U.intensity,ie=U.distance,oe=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Z.r*ne*b,f+=Z.g*ne*b,d+=Z.b*ne*b;else if(U.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],ne);G++}else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const le=U.shadow,ae=t.get(U);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,i.directionalShadow[g]=ae,i.directionalShadowMap[g]=oe,i.directionalShadowMatrix[g]=U.shadow.matrix,x++}i.directional[g]=V,g++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(Z).multiplyScalar(ne*b),V.distance=ie,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[m]=V;const le=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,le.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[m]=le.matrix,U.castShadow){const ae=t.get(U);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,i.spotShadow[m]=ae,i.spotShadowMap[m]=oe,H++}m++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(Z).multiplyScalar(ne),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=V,p++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*b),V.distance=U.distance,V.decay=U.decay,U.castShadow){const le=U.shadow,ae=t.get(U);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,ae.shadowCameraNear=le.camera.near,ae.shadowCameraFar=le.camera.far,i.pointShadow[v]=ae,i.pointShadowMap[v]=oe,i.pointShadowMatrix[v]=U.shadow.matrix,A++}i.point[v]=V,v++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(ne*b),V.groundColor.copy(U.groundColor).multiplyScalar(ne*b),i.hemi[T]=V,T++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const M=i.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==T||M.numDirectionalShadows!==x||M.numPointShadows!==A||M.numSpotShadows!==H||M.numSpotMaps!==w||M.numLightProbes!==G)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=v,i.hemi.length=T,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=H,i.spotShadowMap.length=H,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=H+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=G,M.directionalLength=g,M.pointLength=v,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=T,M.numDirectionalShadows=x,M.numPointShadows=A,M.numSpotShadows=H,M.numSpotMaps=w,M.numLightProbes=G,i.version=PT++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const x=c[p];if(x.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(x.isSpotLight){const A=i.spot[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function tf(n){const e=new IT(n),t=[],i=[];function s(){t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NT(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new tf(n),e.set(s,[a])):r>=o.length?(a=new tf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class DT extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UT extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
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
}`;function BT(n,e,t){let i=new fc;const s=new Ve,r=new Ve,o=new et,a=new DT({depthPacking:_0}),l=new UT,c={},u=t.maxTextureSize,h={[Gn]:Ht,[Ht]:Gn,[Mn]:Mn},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:OT,fragmentShader:FT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qd;let p=this.type;this.render=function(w,P,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),J=n.state;J.setBlending(pi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const U=p!==Bn&&this.type===Bn,Z=p===Bn&&this.type!==Bn;for(let ne=0,ie=w.length;ne<ie;ne++){const oe=w[ne],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const le=V.getFrameExtents();if(s.multiply(le),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||U===!0||Z===!0){const Me=this.type!==Bn?{minFilter:Ut,magFilter:Ut}:{};V.map!==null&&V.map.dispose(),V.map=new Gi(s.x,s.y,Me),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ae=V.getViewportCount();for(let Me=0;Me<ae;Me++){const Ae=V.getViewport(Me);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),J.viewport(o),V.updateMatrices(oe,Me),i=V.getFrustum(),A(P,G,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&T(V,G),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,W)};function T(w,P){const G=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,G,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,G,d,v,null)}function x(w,P,G,b){let M=null;const W=G.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)M=W;else if(M=G.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const J=M.uuid,U=P.uuid;let Z=c[J];Z===void 0&&(Z={},c[J]=Z);let ne=Z[U];ne===void 0&&(ne=M.clone(),Z[U]=ne,P.addEventListener("dispose",H)),M=ne}if(M.visible=P.visible,M.wireframe=P.wireframe,b===Bn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const J=n.properties.get(M);J.light=G}return M}function A(w,P,G,b,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld);const U=e.update(w),Z=w.material;if(Array.isArray(Z)){const ne=U.groups;for(let ie=0,oe=ne.length;ie<oe;ie++){const V=ne[ie],le=Z[V.materialIndex];if(le&&le.visible){const ae=x(w,le,b,M);w.onBeforeShadow(n,w,P,G,U,ae,V),n.renderBufferDirect(G,null,U,ae,w,V),w.onAfterShadow(n,w,P,G,U,ae,V)}}}else if(Z.visible){const ne=x(w,Z,b,M);w.onBeforeShadow(n,w,P,G,U,ne,null),n.renderBufferDirect(G,null,U,ne,w,null),w.onAfterShadow(n,w,P,G,U,ne,null)}}const J=w.children;for(let U=0,Z=J.length;U<Z;U++)A(J[U],P,G,b,M)}function H(w){w.target.removeEventListener("dispose",H);for(const G in c){const b=c[G],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function HT(n){function e(){let C=!1;const ge=new et;let de=null;const be=new et(0,0,0,0);return{setMask:function(we){de!==we&&!C&&(n.colorMask(we,we,we,we),de=we)},setLocked:function(we){C=we},setClear:function(we,tt,rt,lt,St){St===!0&&(we*=lt,tt*=lt,rt*=lt),ge.set(we,tt,rt,lt),be.equals(ge)===!1&&(n.clearColor(we,tt,rt,lt),be.copy(ge))},reset:function(){C=!1,de=null,be.set(-1,0,0,0)}}}function t(){let C=!1,ge=null,de=null,be=null;return{setTest:function(we){we?pe(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(we){ge!==we&&!C&&(n.depthMask(we),ge=we)},setFunc:function(we){if(de!==we){switch(we){case Vx:n.depthFunc(n.NEVER);break;case Gx:n.depthFunc(n.ALWAYS);break;case Wx:n.depthFunc(n.LESS);break;case No:n.depthFunc(n.LEQUAL);break;case Xx:n.depthFunc(n.EQUAL);break;case qx:n.depthFunc(n.GEQUAL);break;case jx:n.depthFunc(n.GREATER);break;case $x:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=we}},setLocked:function(we){C=we},setClear:function(we){be!==we&&(n.clearDepth(we),be=we)},reset:function(){C=!1,ge=null,de=null,be=null}}}function i(){let C=!1,ge=null,de=null,be=null,we=null,tt=null,rt=null,lt=null,St=null;return{setTest:function(nt){C||(nt?pe(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!C&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,mn,gn){(de!==nt||be!==mn||we!==gn)&&(n.stencilFunc(nt,mn,gn),de=nt,be=mn,we=gn)},setOp:function(nt,mn,gn){(tt!==nt||rt!==mn||lt!==gn)&&(n.stencilOp(nt,mn,gn),tt=nt,rt=mn,lt=gn)},setLocked:function(nt){C=nt},setClear:function(nt){St!==nt&&(n.clearStencil(nt),St=nt)},reset:function(){C=!1,ge=null,de=null,be=null,we=null,tt=null,rt=null,lt=null,St=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,T=null,x=null,A=null,H=null,w=new Le(0,0,0),P=0,G=!1,b=null,M=null,W=null,J=null,U=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ie=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ne=ie>=1):oe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ne=ie>=2);let V=null,le={};const ae=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Ae=new et().fromArray(ae),qe=new et().fromArray(Me);function Y(C,ge,de,be){const we=new Uint8Array(4),tt=n.createTexture();n.bindTexture(C,tt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<de;rt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ge+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return tt}const fe={};fe[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),r.setFunc(No),D(!1),K(Nu),pe(n.CULL_FACE),S(pi);function pe(C){c[C]!==!0&&(n.enable(C),c[C]=!0)}function O(C){c[C]!==!1&&(n.disable(C),c[C]=!1)}function se(C,ge){return u[C]!==ge?(n.bindFramebuffer(C,ge),u[C]=ge,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function te(C,ge){let de=f,be=!1;if(C){de=h.get(ge),de===void 0&&(de=[],h.set(ge,de));const we=C.textures;if(de.length!==we.length||de[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,rt=we.length;tt<rt;tt++)de[tt]=n.COLOR_ATTACHMENT0+tt;de.length=we.length,be=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,be=!0);be&&n.drawBuffers(de)}function ce(C){return d!==C?(n.useProgram(C),d=C,!0):!1}const F={[Ui]:n.FUNC_ADD,[bx]:n.FUNC_SUBTRACT,[Ax]:n.FUNC_REVERSE_SUBTRACT};F[wx]=n.MIN,F[Rx]=n.MAX;const Ee={[Cx]:n.ZERO,[Px]:n.ONE,[Lx]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[Fx]:n.SRC_ALPHA_SATURATE,[Ux]:n.DST_COLOR,[Nx]:n.DST_ALPHA,[Ix]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[Ox]:n.ONE_MINUS_DST_COLOR,[Dx]:n.ONE_MINUS_DST_ALPHA,[Bx]:n.CONSTANT_COLOR,[Hx]:n.ONE_MINUS_CONSTANT_COLOR,[zx]:n.CONSTANT_ALPHA,[kx]:n.ONE_MINUS_CONSTANT_ALPHA};function S(C,ge,de,be,we,tt,rt,lt,St,nt){if(C===pi){g===!0&&(O(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),C!==Tx){if(C!==v||nt!==G){if((m!==Ui||x!==Ui)&&(n.blendEquation(n.FUNC_ADD),m=Ui,x=Ui),nt)switch(C){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.ONE,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,T=null,A=null,H=null,w.set(0,0,0),P=0,v=C,G=nt}return}we=we||ge,tt=tt||de,rt=rt||be,(ge!==m||we!==x)&&(n.blendEquationSeparate(F[ge],F[we]),m=ge,x=we),(de!==p||be!==T||tt!==A||rt!==H)&&(n.blendFuncSeparate(Ee[de],Ee[be],Ee[tt],Ee[rt]),p=de,T=be,A=tt,H=rt),(lt.equals(w)===!1||St!==P)&&(n.blendColor(lt.r,lt.g,lt.b,St),w.copy(lt),P=St),v=C,G=!1}function R(C,ge){C.side===Mn?O(n.CULL_FACE):pe(n.CULL_FACE);let de=C.side===Ht;ge&&(de=!de),D(de),C.blending===Es&&C.transparent===!1?S(pi):S(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const be=C.stencilWrite;o.setTest(be),be&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),_(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function D(C){b!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),b=C)}function K(C){C!==Mx?(pe(n.CULL_FACE),C!==M&&(C===Nu?n.cullFace(n.BACK):C===Sx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),M=C}function y(C){C!==W&&(ne&&n.lineWidth(C),W=C)}function _(C,ge,de){C?(pe(n.POLYGON_OFFSET_FILL),(J!==ge||U!==de)&&(n.polygonOffset(ge,de),J=ge,U=de)):O(n.POLYGON_OFFSET_FILL)}function L(C){C?pe(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function I(C){C===void 0&&(C=n.TEXTURE0+Z-1),V!==C&&(n.activeTexture(C),V=C)}function z(C,ge,de){de===void 0&&(V===null?de=n.TEXTURE0+Z-1:de=V);let be=le[de];be===void 0&&(be={type:void 0,texture:void 0},le[de]=be),(be.type!==C||be.texture!==ge)&&(V!==de&&(n.activeTexture(de),V=de),n.bindTexture(C,ge||fe[C]),be.type=C,be.texture=ge)}function N(){const C=le[V];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(C){Ae.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Ae.copy(C))}function Xe(C){qe.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),qe.copy(C))}function je(C,ge){let de=l.get(ge);de===void 0&&(de=new WeakMap,l.set(ge,de));let be=de.get(C);be===void 0&&(be=n.getUniformBlockIndex(ge,C.name),de.set(C,be))}function ke(C,ge){const be=l.get(ge).get(C);a.get(ge)!==be&&(n.uniformBlockBinding(ge,be,C.__bindingPointIndex),a.set(ge,be))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,le={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,T=null,x=null,A=null,H=null,w=new Le(0,0,0),P=0,G=!1,b=null,M=null,W=null,J=null,U=null,Ae.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pe,disable:O,bindFramebuffer:se,drawBuffers:te,useProgram:ce,setBlending:S,setMaterial:R,setFlipSided:D,setCullFace:K,setLineWidth:y,setPolygonOffset:_,setScissorTest:L,activeTexture:I,bindTexture:z,unbindTexture:N,compressedTexImage2D:Q,compressedTexImage3D:q,texImage2D:xe,texImage3D:De,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:ye,texStorage3D:me,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:ee,compressedTexSubImage3D:he,scissor:Ge,viewport:Xe,reset:Se}}function zT(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return d?new OffscreenCanvas(y,_):Ar("canvas")}function v(y,_,L){let I=1;const z=K(y);if((z.width>L||z.height>L)&&(I=L/Math.max(z.width,z.height)),I<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const N=Math.floor(I*z.width),Q=Math.floor(I*z.height);h===void 0&&(h=g(N,Q));const q=_?g(N,Q):h;return q.width=N,q.height=Q,q.getContext("2d").drawImage(y,0,0,N,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+N+"x"+Q+")."),q}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Ut&&y.minFilter!==qt}function p(y){n.generateMipmap(y)}function T(y,_,L,I,z=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let N=_;if(_===n.RED&&(L===n.FLOAT&&(N=n.R32F),L===n.HALF_FLOAT&&(N=n.R16F),L===n.UNSIGNED_BYTE&&(N=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(N=n.R8UI),L===n.UNSIGNED_SHORT&&(N=n.R16UI),L===n.UNSIGNED_INT&&(N=n.R32UI),L===n.BYTE&&(N=n.R8I),L===n.SHORT&&(N=n.R16I),L===n.INT&&(N=n.R32I)),_===n.RG&&(L===n.FLOAT&&(N=n.RG32F),L===n.HALF_FLOAT&&(N=n.RG16F),L===n.UNSIGNED_BYTE&&(N=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(N=n.RG8UI),L===n.UNSIGNED_SHORT&&(N=n.RG16UI),L===n.UNSIGNED_INT&&(N=n.RG32UI),L===n.BYTE&&(N=n.RG8I),L===n.SHORT&&(N=n.RG16I),L===n.INT&&(N=n.RG32I)),_===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),_===n.RGBA){const Q=z?Oo:Ye.getTransfer(I);L===n.FLOAT&&(N=n.RGBA32F),L===n.HALF_FLOAT&&(N=n.RGBA16F),L===n.UNSIGNED_BYTE&&(N=Q===it?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function x(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ut&&y.minFilter!==qt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function A(y){const _=y.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&u.delete(_)}function H(y){const _=y.target;_.removeEventListener("dispose",H),G(_)}function w(y){const _=i.get(y);if(_.__webglInit===void 0)return;const L=y.source,I=f.get(L);if(I){const z=I[_.__cacheKey];z.usedTimes--,z.usedTimes===0&&P(y),Object.keys(I).length===0&&f.delete(L)}i.remove(y)}function P(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const L=y.source,I=f.get(L);delete I[_.__cacheKey],o.memory.textures--}function G(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(_.__webglFramebuffer[I]))for(let z=0;z<_.__webglFramebuffer[I].length;z++)n.deleteFramebuffer(_.__webglFramebuffer[I][z]);else n.deleteFramebuffer(_.__webglFramebuffer[I]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[I])}else{if(Array.isArray(_.__webglFramebuffer))for(let I=0;I<_.__webglFramebuffer.length;I++)n.deleteFramebuffer(_.__webglFramebuffer[I]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let I=0;I<_.__webglColorRenderbuffer.length;I++)_.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[I]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=y.textures;for(let I=0,z=L.length;I<z;I++){const N=i.get(L[I]);N.__webglTexture&&(n.deleteTexture(N.__webglTexture),o.memory.textures--),i.remove(L[I])}i.remove(y)}let b=0;function M(){b=0}function W(){const y=b;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),b+=1,y}function J(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function U(y,_){const L=i.get(y);if(y.isVideoTexture&&R(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const I=y.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(L,y,_);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function Z(y,_){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Ae(L,y,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function ne(y,_){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Ae(L,y,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function ie(y,_){const L=i.get(y);if(y.version>0&&L.__version!==y.version){qe(L,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const oe={[Ds]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Do]:n.MIRRORED_REPEAT},V={[Ut]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[bo]:n.LINEAR_MIPMAP_NEAREST,[Hn]:n.LINEAR_MIPMAP_LINEAR},le={[x0]:n.NEVER,[b0]:n.ALWAYS,[y0]:n.LESS,[pp]:n.LEQUAL,[M0]:n.EQUAL,[T0]:n.GEQUAL,[S0]:n.GREATER,[E0]:n.NOTEQUAL};function ae(y,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===qt||_.magFilter===bo||_.magFilter===ar||_.magFilter===Hn||_.minFilter===qt||_.minFilter===bo||_.minFilter===ar||_.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,oe[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,V[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,V[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==ar&&_.minFilter!==Hn||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Me(y,_){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",A));const I=_.source;let z=f.get(I);z===void 0&&(z={},f.set(I,z));const N=J(_);if(N!==y.__cacheKey){z[N]===void 0&&(z[N]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),z[N].usedTimes++;const Q=z[y.__cacheKey];Q!==void 0&&(z[y.__cacheKey].usedTimes--,Q.usedTimes===0&&P(_)),y.__cacheKey=N,y.__webglTexture=z[N].texture}return L}function Ae(y,_,L){let I=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(I=n.TEXTURE_3D);const z=Me(y,_),N=_.source;t.bindTexture(I,y.__webglTexture,n.TEXTURE0+L);const Q=i.get(N);if(N.version!==Q.__version||z===!0){t.activeTexture(n.TEXTURE0+L);const q=Ye.getPrimaries(Ye.workingColorSpace),re=_.colorSpace===li?null:Ye.getPrimaries(_.colorSpace),ue=_.colorSpace===li||q===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ee=v(_.image,!1,s.maxTextureSize);ee=D(_,ee);const he=r.convert(_.format,_.colorSpace),ye=r.convert(_.type);let me=T(_.internalFormat,he,ye,_.colorSpace,_.isVideoTexture);ae(I,_);let xe;const De=_.mipmaps,Ge=_.isVideoTexture!==!0&&me!==hp,Xe=Q.__version===void 0||z===!0,je=N.dataReady,ke=x(_,ee);if(_.isDepthTexture)me=n.DEPTH_COMPONENT16,_.type===En?me=n.DEPTH_COMPONENT32F:_.type===Us?me=n.DEPTH_COMPONENT24:_.type===Cr&&(me=n.DEPTH24_STENCIL8),Xe&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,me,ee.width,ee.height,0,he,ye,null));else if(_.isDataTexture)if(De.length>0){Ge&&Xe&&t.texStorage2D(n.TEXTURE_2D,ke,me,De[0].width,De[0].height);for(let Se=0,C=De.length;Se<C;Se++)xe=De[Se],Ge?je&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,xe.width,xe.height,he,ye,xe.data):t.texImage2D(n.TEXTURE_2D,Se,me,xe.width,xe.height,0,he,ye,xe.data);_.generateMipmaps=!1}else Ge?(Xe&&t.texStorage2D(n.TEXTURE_2D,ke,me,ee.width,ee.height),je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,he,ye,ee.data)):t.texImage2D(n.TEXTURE_2D,0,me,ee.width,ee.height,0,he,ye,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,me,De[0].width,De[0].height,ee.depth);for(let Se=0,C=De.length;Se<C;Se++)xe=De[Se],_.format!==cn?he!==null?Ge?je&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,xe.width,xe.height,ee.depth,he,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,me,xe.width,xe.height,ee.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,xe.width,xe.height,ee.depth,he,ye,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,me,xe.width,xe.height,ee.depth,0,he,ye,xe.data)}else{Ge&&Xe&&t.texStorage2D(n.TEXTURE_2D,ke,me,De[0].width,De[0].height);for(let Se=0,C=De.length;Se<C;Se++)xe=De[Se],_.format!==cn?he!==null?Ge?je&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,xe.width,xe.height,he,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?je&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,xe.width,xe.height,he,ye,xe.data):t.texImage2D(n.TEXTURE_2D,Se,me,xe.width,xe.height,0,he,ye,xe.data)}else if(_.isDataArrayTexture)Ge?(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,me,ee.width,ee.height,ee.depth),je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,ye,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,he,ye,ee.data);else if(_.isData3DTexture)Ge?(Xe&&t.texStorage3D(n.TEXTURE_3D,ke,me,ee.width,ee.height,ee.depth),je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,ye,ee.data)):t.texImage3D(n.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,he,ye,ee.data);else if(_.isFramebufferTexture){if(Xe)if(Ge)t.texStorage2D(n.TEXTURE_2D,ke,me,ee.width,ee.height);else{let Se=ee.width,C=ee.height;for(let ge=0;ge<ke;ge++)t.texImage2D(n.TEXTURE_2D,ge,me,Se,C,0,he,ye,null),Se>>=1,C>>=1}}else if(De.length>0){if(Ge&&Xe){const Se=K(De[0]);t.texStorage2D(n.TEXTURE_2D,ke,me,Se.width,Se.height)}for(let Se=0,C=De.length;Se<C;Se++)xe=De[Se],Ge?je&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,he,ye,xe):t.texImage2D(n.TEXTURE_2D,Se,me,he,ye,xe);_.generateMipmaps=!1}else if(Ge){if(Xe){const Se=K(ee);t.texStorage2D(n.TEXTURE_2D,ke,me,Se.width,Se.height)}je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,ye,ee)}else t.texImage2D(n.TEXTURE_2D,0,me,he,ye,ee);m(_)&&p(I),Q.__version=N.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function qe(y,_,L){if(_.image.length!==6)return;const I=Me(y,_),z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const N=i.get(z);if(z.version!==N.__version||I===!0){t.activeTexture(n.TEXTURE0+L);const Q=Ye.getPrimaries(Ye.workingColorSpace),q=_.colorSpace===li?null:Ye.getPrimaries(_.colorSpace),re=_.colorSpace===li||Q===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,he=[];for(let C=0;C<6;C++)!ue&&!ee?he[C]=v(_.image[C],!0,s.maxCubemapSize):he[C]=ee?_.image[C].image:_.image[C],he[C]=D(_,he[C]);const ye=he[0],me=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),De=T(_.internalFormat,me,xe,_.colorSpace),Ge=_.isVideoTexture!==!0,Xe=N.__version===void 0||I===!0,je=z.dataReady;let ke=x(_,ye);ae(n.TEXTURE_CUBE_MAP,_);let Se;if(ue){Ge&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,De,ye.width,ye.height);for(let C=0;C<6;C++){Se=he[C].mipmaps;for(let ge=0;ge<Se.length;ge++){const de=Se[ge];_.format!==cn?me!==null?Ge?je&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge,De,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge,0,0,de.width,de.height,me,xe,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge,De,de.width,de.height,0,me,xe,de.data)}}}else{if(Se=_.mipmaps,Ge&&Xe){Se.length>0&&ke++;const C=K(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,De,C.width,C.height)}for(let C=0;C<6;C++)if(ee){Ge?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,he[C].width,he[C].height,me,xe,he[C].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,De,he[C].width,he[C].height,0,me,xe,he[C].data);for(let ge=0;ge<Se.length;ge++){const be=Se[ge].image[C].image;Ge?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge+1,0,0,be.width,be.height,me,xe,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge+1,De,be.width,be.height,0,me,xe,be.data)}}else{Ge?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,me,xe,he[C]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,De,me,xe,he[C]);for(let ge=0;ge<Se.length;ge++){const de=Se[ge];Ge?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge+1,0,0,me,xe,de.image[C]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge+1,De,me,xe,de.image[C])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),N.__version=z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Y(y,_,L,I,z,N){const Q=r.convert(L.format,L.colorSpace),q=r.convert(L.type),re=T(L.internalFormat,Q,q,L.colorSpace);if(!i.get(_).__hasExternalTextures){const ee=Math.max(1,_.width>>N),he=Math.max(1,_.height>>N);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,N,re,ee,he,_.depth,0,Q,q,null):t.texImage2D(z,N,re,ee,he,0,Q,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),S(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,z,i.get(L).__webglTexture,0,Ee(_)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,z,i.get(L).__webglTexture,N),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(y,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let I=n.DEPTH_COMPONENT24;if(L||S(_)){const z=_.depthTexture;z&&z.isDepthTexture&&(z.type===En?I=n.DEPTH_COMPONENT32F:z.type===Us&&(I=n.DEPTH_COMPONENT24));const N=Ee(_);S(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,I,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,N,I,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,I,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const I=Ee(_);L&&S(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,_.width,_.height):S(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const I=_.textures;for(let z=0;z<I.length;z++){const N=I[z],Q=r.convert(N.format,N.colorSpace),q=r.convert(N.type),re=T(N.internalFormat,Q,q,N.colorSpace),ue=Ee(_);L&&S(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,re,_.width,_.height):S(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U(_.depthTexture,0);const I=i.get(_.depthTexture).__webglTexture,z=Ee(_);if(_.depthTexture.format===Ts)S(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(_.depthTexture.format===Tr)S(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function O(y){const _=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");pe(_.__webglFramebuffer,y)}else if(L){_.__webglDepthbuffer=[];for(let I=0;I<6;I++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[I]),_.__webglDepthbuffer[I]=n.createRenderbuffer(),fe(_.__webglDepthbuffer[I],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),fe(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(y,_,L){const I=i.get(y);_!==void 0&&Y(I.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&O(y)}function te(y){const _=y.texture,L=i.get(y),I=i.get(_);y.addEventListener("dispose",H);const z=y.textures,N=y.isWebGLCubeRenderTarget===!0,Q=z.length>1;if(Q||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=_.version,o.memory.textures++),N){L.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[q]=[];for(let re=0;re<_.mipmaps.length;re++)L.__webglFramebuffer[q][re]=n.createFramebuffer()}else L.__webglFramebuffer[q]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)L.__webglFramebuffer[q]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Q)for(let q=0,re=z.length;q<re;q++){const ue=i.get(z[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&S(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let q=0;q<z.length;q++){const re=z[q];L.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[q]);const ue=r.convert(re.format,re.colorSpace),ee=r.convert(re.type),he=T(re.internalFormat,ue,ee,re.colorSpace,y.isXRRenderTarget===!0),ye=Ee(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,he,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,L.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),ae(n.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Y(L.__webglFramebuffer[q][re],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re);else Y(L.__webglFramebuffer[q],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let q=0,re=z.length;q<re;q++){const ue=z[q],ee=i.get(ue);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),ae(n.TEXTURE_2D,ue),Y(L.__webglFramebuffer,y,ue,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,0),m(ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(q=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,I.__webglTexture),ae(q,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Y(L.__webglFramebuffer[re],y,_,n.COLOR_ATTACHMENT0,q,re);else Y(L.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,q,0);m(_)&&p(q),t.unbindTexture()}y.depthBuffer&&O(y)}function ce(y){const _=y.textures;for(let L=0,I=_.length;L<I;L++){const z=_[L];if(m(z)){const N=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Q=i.get(z).__webglTexture;t.bindTexture(N,Q),p(N),t.unbindTexture()}}}function F(y){if(y.samples>0&&S(y)===!1){const _=y.textures,L=y.width,I=y.height;let z=n.COLOR_BUFFER_BIT;const N=[],Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=i.get(y),re=_.length>1;if(re)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){N.push(n.COLOR_ATTACHMENT0+ue),y.depthBuffer&&N.push(Q);const ee=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(ee===!1&&(y.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&q.__isTransmissionRenderTarget!==!0&&(z|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,q.__webglColorRenderbuffer[ue]),ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Q]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Q])),re){const he=i.get(_[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,L,I,0,0,L,I,z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const ee=i.get(_[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function Ee(y){return Math.min(s.maxSamples,y.samples)}function S(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function R(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function D(y,_){const L=y.colorSpace,I=y.format,z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Mt&&L!==li&&(Ye.getTransfer(L)===it?(I!==cn||z!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function K(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=M,this.setTexture2D=U,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=ie,this.rebindTextures=se,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=S}function kT(n,e){function t(i,s=li){let r;const o=Ye.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===rp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===op)return n.UNSIGNED_SHORT_5_5_5_1;if(i===a0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===r0)return n.BYTE;if(i===o0)return n.SHORT;if(i===ip)return n.UNSIGNED_SHORT;if(i===sp)return n.INT;if(i===Us)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===Uo)return n.HALF_FLOAT;if(i===l0)return n.ALPHA;if(i===c0)return n.RGB;if(i===cn)return n.RGBA;if(i===u0)return n.LUMINANCE;if(i===h0)return n.LUMINANCE_ALPHA;if(i===Ts)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===ap)return n.RED;if(i===lp)return n.RED_INTEGER;if(i===f0)return n.RG;if(i===cp)return n.RG_INTEGER;if(i===up)return n.RGBA_INTEGER;if(i===ba||i===Aa||i===wa||i===Ra)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bu||i===Hu||i===zu||i===ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hp)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Vu||i===Gu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vu)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wu||i===Xu||i===qu||i===ju||i===$u||i===Ku||i===Yu||i===Zu||i===Ju||i===Qu||i===eh||i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ju)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$u)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ju)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eh)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===th)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nh)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===sh||i===rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d0||i===oh||i===ah||i===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class VT extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
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

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new vi({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $t(new oa(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class jT extends Ws{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new qT,m=t.getContextAttributes();let p=null,T=null;const x=[],A=[],H=new Ve;let w=null;const P=new Nt;P.layers.enable(1),P.viewport=new et;const G=new Nt;G.layers.enable(2),G.viewport=new et;const b=[P,G],M=new VT;M.layers.enable(1),M.layers.enable(2);let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=x[Y];return fe===void 0&&(fe=new tl,x[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=x[Y];return fe===void 0&&(fe=new tl,x[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=x[Y];return fe===void 0&&(fe=new tl,x[Y]=fe),fe.getHandSpace()};function U(Y){const fe=A.indexOf(Y.inputSource);if(fe===-1)return;const pe=x[fe];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<x.length;Y++){const fe=A[Y];fe!==null&&(A[Y]=null,x[Y].disconnect(fe))}W=null,J=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,T=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(H),s.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Gi(d.framebufferWidth,d.framebufferHeight,{format:cn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,pe=null,O=null;m.depth&&(O=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Tr:Ts,pe=m.stencil?Cr:Us);const se={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Gi(f.textureWidth,f.textureHeight,{format:cn,type:gi,depthTexture:new wp(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const te=e.properties.get(T);te.__ignoreDepthValues=f.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ne(Y){for(let fe=0;fe<Y.removed.length;fe++){const pe=Y.removed[fe],O=A.indexOf(pe);O>=0&&(A[O]=null,x[O].disconnect(pe))}for(let fe=0;fe<Y.added.length;fe++){const pe=Y.added[fe];let O=A.indexOf(pe);if(O===-1){for(let te=0;te<x.length;te++)if(te>=A.length){A.push(pe),O=te;break}else if(A[te]===null){A[te]=pe,O=te;break}if(O===-1)break}const se=x[O];se&&se.connect(pe)}}const ie=new B,oe=new B;function V(Y,fe,pe){ie.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const O=ie.distanceTo(oe),se=fe.projectionMatrix.elements,te=pe.projectionMatrix.elements,ce=se[14]/(se[10]-1),F=se[14]/(se[10]+1),Ee=(se[9]+1)/se[5],S=(se[9]-1)/se[5],R=(se[8]-1)/se[0],D=(te[8]+1)/te[0],K=ce*R,y=ce*D,_=O/(-R+D),L=_*-R;fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(L),Y.translateZ(_),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const I=ce+_,z=F+_,N=K-L,Q=y+(O-L),q=Ee*F/z*I,re=S*F/z*I;Y.projectionMatrix.makePerspective(N,Q,q,re,I,z),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function le(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),M.near=G.near=P.near=Y.near,M.far=G.far=P.far=Y.far,(W!==M.near||J!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),W=M.near,J=M.far,P.near=W,P.far=J,G.near=W,G.far=J,P.updateProjectionMatrix(),G.updateProjectionMatrix(),Y.updateProjectionMatrix());const fe=Y.parent,pe=M.cameras;le(M,fe);for(let O=0;O<pe.length;O++)le(pe[O],fe);pe.length===2?V(M,P,G):M.projectionMatrix.copy(P.projectionMatrix),ae(Y,M,fe)};function ae(Y,fe,pe){pe===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null};let Me=null;function Ae(Y,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let O=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let te=0;te<pe.length;te++){const ce=pe[te];let F=null;if(d!==null)F=d.getViewport(ce);else{const S=h.getViewSubImage(f,ce);F=S.viewport,te===0&&(e.setRenderTargetTextures(T,S.colorTexture,f.ignoreDepthValues?void 0:S.depthStencilTexture),e.setRenderTarget(T))}let Ee=b[te];Ee===void 0&&(Ee=new Nt,Ee.layers.enable(te),Ee.viewport=new et,b[te]=Ee),Ee.matrix.fromArray(ce.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ce.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(F.x,F.y,F.width,F.height),te===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(Ee)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){const te=h.getDepthInformation(pe[0]);te&&te.isValid&&te.texture&&v.init(e,te,s.renderState)}}for(let pe=0;pe<x.length;pe++){const O=A[pe],se=x[pe];O!==null&&se!==void 0&&se.update(O,fe,c||o)}v.render(e,M),Me&&Me(Y,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const qe=new Ap;qe.setAnimationLoop(Ae),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}const Pi=new wn,$T=new ze;function KT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ep(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,x,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),x=T.envMap,A=T.envMapRotation;if(x&&(m.envMap.value=x,Pi.copy(A),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(Pi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const H=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*H,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YT(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const A=x.program;i.uniformBlockBinding(T,A)}function c(T,x){let A=s[T.id];A===void 0&&(g(T),A=u(T),s[T.id]=A,T.addEventListener("dispose",m));const H=x.program;i.updateUBOMapping(T,H);const w=e.render.frame;r[T.id]!==w&&(f(T),r[T.id]=w)}function u(T){const x=h();T.__bindingPointIndex=x;const A=n.createBuffer(),H=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,H,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const x=s[T.id],A=T.uniforms,H=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,P=A.length;w<P;w++){const G=Array.isArray(A[w])?A[w]:[A[w]];for(let b=0,M=G.length;b<M;b++){const W=G[b];if(d(W,w,b,H)===!0){const J=W.__offset,U=Array.isArray(W.value)?W.value:[W.value];let Z=0;for(let ne=0;ne<U.length;ne++){const ie=U[ne],oe=v(ie);typeof ie=="number"||typeof ie=="boolean"?(W.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,J+Z,W.__data)):ie.isMatrix3?(W.__data[0]=ie.elements[0],W.__data[1]=ie.elements[1],W.__data[2]=ie.elements[2],W.__data[3]=0,W.__data[4]=ie.elements[3],W.__data[5]=ie.elements[4],W.__data[6]=ie.elements[5],W.__data[7]=0,W.__data[8]=ie.elements[6],W.__data[9]=ie.elements[7],W.__data[10]=ie.elements[8],W.__data[11]=0):(ie.toArray(W.__data,Z),Z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,x,A,H){const w=T.value,P=x+"_"+A;if(H[P]===void 0)return typeof w=="number"||typeof w=="boolean"?H[P]=w:H[P]=w.clone(),!0;{const G=H[P];if(typeof w=="number"||typeof w=="boolean"){if(G!==w)return H[P]=w,!0}else if(G.equals(w)===!1)return G.copy(w),!0}return!1}function g(T){const x=T.uniforms;let A=0;const H=16;for(let P=0,G=x.length;P<G;P++){const b=Array.isArray(x[P])?x[P]:[x[P]];for(let M=0,W=b.length;M<W;M++){const J=b[M],U=Array.isArray(J.value)?J.value:[J.value];for(let Z=0,ne=U.length;Z<ne;Z++){const ie=U[Z],oe=v(ie),V=A%H;V!==0&&H-V<oe.boundary&&(A+=H-V),J.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=oe.storage}}}const w=A%H;return w>0&&(A+=H-w),T.__size=A,T.__cache={},this}function v(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ZT{constructor(e={}){const{canvas:t=G0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let A=!1,H=0,w=0,P=null,G=-1,b=null;const M=new et,W=new et;let J=null;const U=new Le(0);let Z=0,ne=t.width,ie=t.height,oe=1,V=null,le=null;const ae=new et(0,0,ne,ie),Me=new et(0,0,ne,ie);let Ae=!1;const qe=new fc;let Y=!1,fe=!1;const pe=new ze,O=new Ve,se=new B,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return P===null?oe:1}let F=i;function Ee(E,k){const j=t.getContext(E,k);return j!==null?j:null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){const k="webgl2";if(F=Ee(k,E),F===null)throw Ee(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let S,R,D,K,y,_,L,I,z,N,Q,q,re,ue,ee,he,ye,me,xe,De,Ge,Xe,je,ke;function Se(){S=new rE(F),S.init(),R=new QS(F,S,e),Xe=new kT(F,S),D=new HT(F),K=new lE(F),y=new bT,_=new zT(F,S,D,y,R,Xe,K),L=new tE(x),I=new sE(x),z=new py(F),je=new ZS(F,z),N=new oE(F,z,K,je),Q=new uE(F,N,z,K),xe=new cE(F,R,_),he=new eE(y),q=new TT(x,L,I,S,R,je,he),re=new KT(x,y),ue=new wT,ee=new NT(S),me=new YS(x,L,I,D,Q,f,l),ye=new BT(x,Q,R),ke=new YT(F,K,R,D),De=new JS(F,S,K),Ge=new aE(F,S,K),K.programs=q.programs,x.capabilities=R,x.extensions=S,x.properties=y,x.renderLists=ue,x.shadowMap=ye,x.state=D,x.info=K}Se();const C=new jT(x,F);this.xr=C,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=S.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=S.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(ne,ie,!1))},this.getSize=function(E){return E.set(ne,ie)},this.setSize=function(E,k,j=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,ie=k,t.width=Math.floor(E*oe),t.height=Math.floor(k*oe),j===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(ne*oe,ie*oe).floor()},this.setDrawingBufferSize=function(E,k,j){ne=E,ie=k,oe=j,t.width=Math.floor(E*j),t.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,k,j,$){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,k,j,$),D.viewport(M.copy(ae).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,k,j,$){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,k,j,$),D.scissor(W.copy(Me).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(E){D.setScissorTest(Ae=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(E=!0,k=!0,j=!0){let $=0;if(E){let X=!1;if(P!==null){const ve=P.texture.format;X=ve===up||ve===cp||ve===lp}if(X){const ve=P.texture.type,Te=ve===gi||ve===Us||ve===ip||ve===Cr||ve===rp||ve===op,Re=me.getClearColor(),Ce=me.getClearAlpha(),Ue=Re.r,Ie=Re.g,Oe=Re.b;Te?(d[0]=Ue,d[1]=Ie,d[2]=Oe,d[3]=Ce,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Ue,g[1]=Ie,g[2]=Oe,g[3]=Ce,F.clearBufferiv(F.COLOR,0,g))}else $|=F.COLOR_BUFFER_BIT}k&&($|=F.DEPTH_BUFFER_BIT),j&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ue.dispose(),ee.dispose(),y.dispose(),L.dispose(),I.dispose(),Q.dispose(),je.dispose(),ke.dispose(),q.dispose(),C.dispose(),C.removeEventListener("sessionstart",mn),C.removeEventListener("sessionend",gn),Mi.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=K.autoReset,k=ye.enabled,j=ye.autoUpdate,$=ye.needsUpdate,X=ye.type;Se(),K.autoReset=E,ye.enabled=k,ye.autoUpdate=j,ye.needsUpdate=$,ye.type=X}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function we(E){const k=E.target;k.removeEventListener("dispose",we),tt(k)}function tt(E){rt(E),y.remove(E)}function rt(E){const k=y.get(E).programs;k!==void 0&&(k.forEach(function(j){q.releaseProgram(j)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,$,X,ve){k===null&&(k=te);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Re=qp(E,k,j,$,X);D.setMaterial($,Te);let Ce=j.index,Ue=1;if($.wireframe===!0){if(Ce=N.getWireframeAttribute(j),Ce===void 0)return;Ue=2}const Ie=j.drawRange,Oe=j.attributes.position;let ft=Ie.start*Ue,Gt=(Ie.start+Ie.count)*Ue;ve!==null&&(ft=Math.max(ft,ve.start*Ue),Gt=Math.min(Gt,(ve.start+ve.count)*Ue)),Ce!==null?(ft=Math.max(ft,0),Gt=Math.min(Gt,Ce.count)):Oe!=null&&(ft=Math.max(ft,0),Gt=Math.min(Gt,Oe.count));const _t=Gt-ft;if(_t<0||_t===1/0)return;je.setup(X,$,Re,j,Ce);let Pn,ct=De;if(Ce!==null&&(Pn=z.get(Ce),ct=Ge,ct.setIndex(Pn)),X.isMesh)$.wireframe===!0?(D.setLineWidth($.wireframeLinewidth*ce()),ct.setMode(F.LINES)):ct.setMode(F.TRIANGLES);else if(X.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),D.setLineWidth(Fe*ce()),X.isLineSegments?ct.setMode(F.LINES):X.isLineLoop?ct.setMode(F.LINE_LOOP):ct.setMode(F.LINE_STRIP)}else X.isPoints?ct.setMode(F.POINTS):X.isSprite&&ct.setMode(F.TRIANGLES);if(X.isBatchedMesh)ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ct.renderInstances(ft,_t,X.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ca=Math.min(j.instanceCount,Fe);ct.renderInstances(ft,_t,ca)}else ct.render(ft,_t)};function lt(E,k,j){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,Nr(E,k,j),E.side=Gn,E.needsUpdate=!0,Nr(E,k,j),E.side=Mn):Nr(E,k,j)}this.compile=function(E,k,j=null){j===null&&(j=E),m=ee.get(j),m.init(),T.push(m),j.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),E!==j&&E.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);const $=new Set;return E.traverse(function(X){const ve=X.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Re=ve[Te];lt(Re,j,X),$.add(Re)}else lt(ve,j,X),$.add(ve)}),T.pop(),m=null,$},this.compileAsync=function(E,k,j=null){const $=this.compile(E,k,j);return new Promise(X=>{function ve(){if($.forEach(function(Te){y.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){X(E);return}setTimeout(ve,10)}S.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let St=null;function nt(E){St&&St(E)}function mn(){Mi.stop()}function gn(){Mi.start()}const Mi=new Ap;Mi.setAnimationLoop(nt),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(E){St=E,C.setAnimationLoop(E),E===null?Mi.stop():Mi.start()},C.addEventListener("sessionstart",mn),C.addEventListener("sessionend",gn),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(k),k=C.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,P),m=ee.get(E,T.length),m.init(),T.push(m),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qe.setFromProjectionMatrix(pe),fe=this.localClippingEnabled,Y=he.init(this.clippingPlanes,fe),v=ue.get(E,p.length),v.init(),p.push(v),Tc(E,k,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,le),this.info.render.frame++,Y===!0&&he.beginShadows();const j=m.state.shadowsArray;if(ye.render(j,E,k),Y===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1)&&me.render(v,E),m.setupLights(x._useLegacyLights),k.isArrayCamera){const $=k.cameras;for(let X=0,ve=$.length;X<ve;X++){const Te=$[X];bc(v,E,Te,Te.viewport)}}else bc(v,E,k);P!==null&&(_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,k),je.resetDefaultState(),G=-1,b=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Tc(E,k,j,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qe.intersectsSprite(E)){$&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const Te=Q.update(E),Re=E.material;Re.visible&&v.push(E,Te,Re,j,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qe.intersectsObject(E))){const Te=Q.update(E),Re=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),se.copy(Te.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){const Ce=Te.groups;for(let Ue=0,Ie=Ce.length;Ue<Ie;Ue++){const Oe=Ce[Ue],ft=Re[Oe.materialIndex];ft&&ft.visible&&v.push(E,Te,ft,j,se.z,Oe)}}else Re.visible&&v.push(E,Te,Re,j,se.z,null)}}const ve=E.children;for(let Te=0,Re=ve.length;Te<Re;Te++)Tc(ve[Te],k,j,$)}function bc(E,k,j,$){const X=E.opaque,ve=E.transmissive,Te=E.transparent;m.setupLightsView(j),Y===!0&&he.setGlobalState(x.clippingPlanes,j),ve.length>0&&Xp(X,ve,k,j),$&&D.viewport(M.copy($)),X.length>0&&Ir(X,k,j),ve.length>0&&Ir(ve,k,j),Te.length>0&&Ir(Te,k,j),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Xp(E,k,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Gi(1,1,{generateMipmaps:!0,type:S.has("EXT_color_buffer_half_float")||S.has("EXT_color_buffer_float")?Uo:gi,minFilter:Hn,samples:4,stencilBuffer:r});const Ue=y.get(m.state.transmissionRenderTarget);Ue.__isTransmissionRenderTarget=!0}const ve=m.state.transmissionRenderTarget;x.getDrawingBufferSize(O),ve.setSize(O.x,O.y);const Te=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(U),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=mi,Ir(E,j,$),_.updateMultisampleRenderTarget(ve),_.updateRenderTargetMipmap(ve);let Ce=!1;for(let Ue=0,Ie=k.length;Ue<Ie;Ue++){const Oe=k[Ue],ft=Oe.object,Gt=Oe.geometry,_t=Oe.material,Pn=Oe.group;if(_t.side===Mn&&ft.layers.test($.layers)){const ct=_t.side;_t.side=Ht,_t.needsUpdate=!0,Ac(ft,j,$,Gt,_t,Pn),_t.side=ct,_t.needsUpdate=!0,Ce=!0}}Ce===!0&&(_.updateMultisampleRenderTarget(ve),_.updateRenderTargetMipmap(ve)),x.setRenderTarget(Te),x.setClearColor(U,Z),x.toneMapping=Re}function Ir(E,k,j){const $=k.isScene===!0?k.overrideMaterial:null;for(let X=0,ve=E.length;X<ve;X++){const Te=E[X],Re=Te.object,Ce=Te.geometry,Ue=$===null?Te.material:$,Ie=Te.group;Re.layers.test(j.layers)&&Ac(Re,k,j,Ce,Ue,Ie)}}function Ac(E,k,j,$,X,ve){E.onBeforeRender(x,k,j,$,X,ve),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(x,k,j,$,E,ve),X.transparent===!0&&X.side===Mn&&X.forceSinglePass===!1?(X.side=Ht,X.needsUpdate=!0,x.renderBufferDirect(j,k,$,X,E,ve),X.side=Gn,X.needsUpdate=!0,x.renderBufferDirect(j,k,$,X,E,ve),X.side=Mn):x.renderBufferDirect(j,k,$,X,E,ve),E.onAfterRender(x,k,j,$,X,ve)}function Nr(E,k,j){k.isScene!==!0&&(k=te);const $=y.get(E),X=m.state.lights,ve=m.state.shadowsArray,Te=X.state.version,Re=q.getParameters(E,X.state,ve,k,j),Ce=q.getProgramCacheKey(Re);let Ue=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?I:L).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",we),Ue=new Map,$.programs=Ue);let Ie=Ue.get(Ce);if(Ie!==void 0){if($.currentProgram===Ie&&$.lightsStateVersion===Te)return Rc(E,Re),Ie}else Re.uniforms=q.getUniforms(E),E.onBuild(j,Re,x),E.onBeforeCompile(Re,x),Ie=q.acquireProgram(Re,Ce),Ue.set(Ce,Ie),$.uniforms=Re.uniforms;const Oe=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=he.uniform),Rc(E,Re),$.needsLights=$p(E),$.lightsStateVersion=Te,$.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ie,$.uniformsList=null,Ie}function wc(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ao.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Rc(E,k){const j=y.get(E);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function qp(E,k,j,$,X){k.isScene!==!0&&(k=te),_.resetTextureUnits();const ve=k.fog,Te=$.isMeshStandardMaterial?k.environment:null,Re=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mt,Ce=($.isMeshStandardMaterial?I:L).get($.envMap||Te),Ue=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ie=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!j.morphAttributes.position,ft=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color;let _t=mi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Pn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=Pn!==void 0?Pn.length:0,Fe=y.get($),ca=m.state.lights;if(Y===!0&&(fe===!0||E!==b)){const Kt=E===b&&$.id===G;he.setState($,E,Kt)}let ot=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ca.state.version||Fe.outputColorSpace!==Re||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Ce||$.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==he.numPlanes||Fe.numIntersection!==he.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==Ie||Fe.morphTargets!==Oe||Fe.morphNormals!==ft||Fe.morphColors!==Gt||Fe.toneMapping!==_t||Fe.morphTargetsCount!==ct)&&(ot=!0):(ot=!0,Fe.__version=$.version);let Si=Fe.currentProgram;ot===!0&&(Si=Nr($,k,X));let Cc=!1,Ks=!1,ua=!1;const Et=Si.getUniforms(),jn=Fe.uniforms;if(D.useProgram(Si.program)&&(Cc=!0,Ks=!0,ua=!0),$.id!==G&&(G=$.id,Ks=!0),Cc||b!==E){Et.setValue(F,"projectionMatrix",E.projectionMatrix),Et.setValue(F,"viewMatrix",E.matrixWorldInverse);const Kt=Et.map.cameraPosition;Kt!==void 0&&Kt.setValue(F,se.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ks=!0,ua=!0)}if(X.isSkinnedMesh){Et.setOptional(F,X,"bindMatrix"),Et.setOptional(F,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(F,"boneTexture",Kt.boneTexture,_))}X.isBatchedMesh&&(Et.setOptional(F,X,"batchingTexture"),Et.setValue(F,"batchingTexture",X._matricesTexture,_));const ha=j.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0)&&xe.update(X,j,Si),(Ks||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,Et.setValue(F,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(jn.envMap.value=Ce,jn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(jn.envMapIntensity.value=k.environmentIntensity),Ks&&(Et.setValue(F,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&jp(jn,ua),ve&&$.fog===!0&&re.refreshFogUniforms(jn,ve),re.refreshMaterialUniforms(jn,$,oe,ie,m.state.transmissionRenderTarget),Ao.upload(F,wc(Fe),jn,_)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ao.upload(F,wc(Fe),jn,_),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(F,"center",X.center),Et.setValue(F,"modelViewMatrix",X.modelViewMatrix),Et.setValue(F,"normalMatrix",X.normalMatrix),Et.setValue(F,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Kt=$.uniformsGroups;for(let fa=0,Kp=Kt.length;fa<Kp;fa++){const Pc=Kt[fa];ke.update(Pc,Si),ke.bind(Pc,Si)}}return Si}function jp(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function $p(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,j){y.get(E.texture).__webglTexture=k,y.get(E.depthTexture).__webglTexture=j;const $=y.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||S.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const j=y.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){P=E,H=k,w=j;let $=!0,X=null,ve=!1,Te=!1;if(E){const Ce=y.get(E);Ce.__useDefaultFramebuffer!==void 0?(D.bindFramebuffer(F.FRAMEBUFFER,null),$=!1):Ce.__webglFramebuffer===void 0?_.setupRenderTarget(E):Ce.__hasExternalTextures&&_.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Ie=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?X=Ie[k][j]:X=Ie[k],ve=!0):E.samples>0&&_.useMultisampledRTT(E)===!1?X=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?X=Ie[j]:X=Ie,M.copy(E.viewport),W.copy(E.scissor),J=E.scissorTest}else M.copy(ae).multiplyScalar(oe).floor(),W.copy(Me).multiplyScalar(oe).floor(),J=Ae;if(D.bindFramebuffer(F.FRAMEBUFFER,X)&&$&&D.drawBuffers(E,X),D.viewport(M),D.scissor(W),D.setScissorTest(J),ve){const Ce=y.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,j)}else if(Te){const Ce=y.get(E.texture),Ue=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,Ue)}G=-1},this.readRenderTargetPixels=function(E,k,j,$,X,ve,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){D.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ce=E.texture,Ue=Ce.format,Ie=Ce.type;if(Ue!==cn&&Xe.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===Uo&&(S.has("EXT_color_buffer_half_float")||S.has("EXT_color_buffer_float"));if(Ie!==gi&&Xe.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&Ie!==En&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&j>=0&&j<=E.height-X&&F.readPixels(k,j,$,X,Xe.convert(Ue),Xe.convert(Ie),ve)}finally{const Ce=P!==null?y.get(P).__webglFramebuffer:null;D.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,k,j=0){const $=Math.pow(2,-j),X=Math.floor(k.image.width*$),ve=Math.floor(k.image.height*$);_.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,E.x,E.y,X,ve),D.unbindTexture()},this.copyTextureToTexture=function(E,k,j,$=0){const X=k.image.width,ve=k.image.height,Te=Xe.convert(j.format),Re=Xe.convert(j.type);_.setTexture2D(j,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$,E.x,E.y,X,ve,Te,Re,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,$,E.x,E.y,Te,Re,k.image),$===0&&j.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j,$,X=0){const ve=Math.round(E.max.x-E.min.x),Te=Math.round(E.max.y-E.min.y),Re=E.max.z-E.min.z+1,Ce=Xe.convert($.format),Ue=Xe.convert($.type);let Ie;if($.isData3DTexture)_.setTexture3D($,0),Ie=F.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)_.setTexture2DArray($,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Gt=F.getParameter(F.UNPACK_SKIP_PIXELS),_t=F.getParameter(F.UNPACK_SKIP_ROWS),Pn=F.getParameter(F.UNPACK_SKIP_IMAGES),ct=j.isCompressedTexture?j.mipmaps[X]:j.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?F.texSubImage3D(Ie,X,k.x,k.y,k.z,ve,Te,Re,Ce,Ue,ct.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,X,k.x,k.y,k.z,ve,Te,Re,Ce,ct.data):F.texSubImage3D(Ie,X,k.x,k.y,k.z,ve,Te,Re,Ce,Ue,ct),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,_t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pn),X===0&&$.generateMipmaps&&F.generateMipmap(Ie),D.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?_.setTextureCube(E,0):E.isData3DTexture?_.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_.setTexture2DArray(E,0):_.setTexture2D(E,0),D.unbindTexture()},this.resetState=function(){H=0,w=0,P=null,D.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uc?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===sa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JT extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class QT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new B;class mc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=on(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nf=new B,sf=new et,rf=new et,eb=new B,of=new ze,ao=new B,nl=new Rn,af=new ze,il=new ra;class tb extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ao),this.boundingBox.expandByPoint(ao)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ao),this.boundingSphere.expandByPoint(ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nl.copy(this.boundingSphere),nl.applyMatrix4(s),e.ray.intersectsSphere(nl)!==!1&&(af.copy(s).invert(),il.copy(e.ray).applyMatrix4(af),!(this.boundingBox!==null&&il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;sf.fromBufferAttribute(s.attributes.skinIndex,e),rf.fromBufferAttribute(s.attributes.skinWeight,e),nf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=rf.getComponent(r);if(o!==0){const a=sf.getComponent(r);of.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(eb.copy(nf).applyMatrix4(of),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Np extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dp extends xt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ut,u=Ut,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lf=new ze,nb=new ze;class gc{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:nb;lf.multiplyMatrices(a,t[r]),lf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Dp(t,e,e,cn,En);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Np),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Ol extends Ot{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new ze,cf=new ze,lo=[],uf=new Xn,ib=new ze,nr=new $t,ir=new Rn;class sb extends $t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ib)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),uf.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(uf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),ir.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(i),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),cf.multiplyMatrices(i,ds),nr.matrixWorld=cf,nr.raycast(e,lo);for(let o=0,a=lo.length;o<a;o++){const l=lo[o];l.instanceId=r,l.object=this,t.push(l)}lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dp(new Float32Array(s*this.count),s,this.count,ap,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _c extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hf=new B,ff=new B,df=new ze,sl=new ra,co=new Rn;class vc extends ht{constructor(e=new pn,t=new _c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)hf.fromBufferAttribute(t,s-1),ff.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=hf.distanceTo(ff);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;df.copy(s).invert(),sl.copy(e.ray).applyMatrix4(df);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,h=new B,f=new B,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let x=p,A=T-1;x<A;x+=d){const H=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(m,H),u.fromBufferAttribute(m,w),sl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),T=Math.min(m.count,o.start+o.count);for(let x=p,A=T-1;x<A;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),sl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const pf=new B,mf=new B;class Up extends vc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)pf.fromBufferAttribute(t,s),mf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pf.distanceTo(mf);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rb extends vc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Op extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gf=new ze,Fl=new ra,uo=new Rn,ho=new B;class ob extends ht{constructor(e=new pn,t=new Op){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;gf.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);ho.fromBufferAttribute(h,m),_f(ho,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)ho.fromBufferAttribute(h,g),_f(ho,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _f(n,e,t,i,s,r,o){const a=Fl.distanceSqToPoint(n);if(a<t){const l=new B;Fl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const fo=new B,po=new B,rl=new B,mo=new an;class ab extends pn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(bs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=mo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),mo.getNormal(rl),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const x=(T+1)%3,A=h[T],H=h[x],w=mo[u[T]],P=mo[u[x]],G=`${A}_${H}`,b=`${H}_${A}`;b in f&&f[b]?(rl.dot(f[b].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(P.x,P.y,P.z)),f[b]=null):G in f||(f[G]={index0:c[T],index1:c[x],normal:rl.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];fo.fromBufferAttribute(a,v),po.fromBufferAttribute(a,m),d.push(fo.x,fo.y,fo.z),d.push(po.x,po.y,po.z)}this.setAttribute("position",new bn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xc extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends xc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function go(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cb(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function vf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Fp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Lr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ub extends Lr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=e,a=2*t-i;break;case hh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:o=e,l=2*i-t;break;case hh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,T=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*v+.5*g,A=d*m-d*v;for(let H=0;H!==a;++H)r[H]=p*o[u+H]+T*o[c+H]+x*o[l+H]+A*o[h+H];return r}}class hb extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class fb extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ub(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lb(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Os;class qs extends Cn{}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=br;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bp extends Cn{}Bp.prototype.ValueTypeName="color";class Hs extends Cn{}Hs.prototype.ValueTypeName="number";class db extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)yi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Wi extends Cn{InterpolantFactoryMethodLinear(e){return new db(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.DefaultInterpolation=Os;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Cn{}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=br;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Cn{}zs.prototype.ValueTypeName="vector";class pb{constructor(e="",t=-1,i=[],s=p0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(gb(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Cn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=cb(l);l=vf(l,1,u),c=vf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Hs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,v){if(d.length!==0){const m=[],p=[];Fp(d,m,p,g),m.length!==0&&v.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const x=f[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}s.push(new Hs(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(zs,d+".position",f,"pos",s),i(Wi,d+".quaternion",f,"rot",s),i(zs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Bp;case"quaternion":return Wi;case"bool":case"boolean":return qs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function gb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mb(n.type);if(n.times===void 0){const t=[],i=[];Fp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const hi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class _b{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const vb=new _b;class $s{constructor(e){this.manager=e!==void 0?e:vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class xb extends Error{constructor(e,t){super(e),this.response=t}}class Hp extends $s{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:i,onError:s});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:x,value:A})=>{if(x)p.close();else{v+=A.byteLength;const H=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let w=0,P=u.length;w<P;w++){const G=u[w];G.onProgress&&G.onProgress(H)}p.enqueue(A),T()}})}}});return new Response(m)}else throw new xb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{hi.add(e,c);const u=Fn[e];delete Fn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yb extends $s{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ar("img");function l(){u(),hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Mb extends $s{constructor(e){super(e)}load(e,t,i,s){const r=new xt,o=new yb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class la extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ol=new ze,xf=new B,yf=new B;class yc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sb extends yc{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Eb extends la{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mf=new ze,sr=new B,al=new B;class Tb extends yc{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(sr),al.copy(i.position),al.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(al),i.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}}class bb extends la{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ab extends yc{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wb extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Rb extends $s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(e,l),r.manager.itemStart(e)}}const Mc="\\[\\]\\.:\\/",Cb=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",Pb="[^"+Mc.replace("\\.","")+"]",Lb=/((?:WC+[\/:])*)/.source.replace("WC",Sc),Ib=/(WCOD+)?/.source.replace("WCOD",Pb),Nb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),Db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),Ub=new RegExp("^"+Lb+Ib+Nb+Db+"$"),Ob=["material","materials","bones","map"];class Fb{constructor(e,t,i){const s=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){const t=Ub.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Ob.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Fb;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function Sf(n,e){if(e===m0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Nl||e===fp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Nl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Bb extends $s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new nA(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=gr.extractUrlBase(e);o=gr.resolveURL(c,this.path)}else o=gr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Hp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kp){try{o[We.KHR_BINARY_GLTF]=new iA(e)}catch(h){s&&s(h);return}r=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:o[h]=new kb;break;case We.KHR_DRACO_MESH_COMPRESSION:o[h]=new sA(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[h]=new rA;break;case We.KHR_MESH_QUANTIZATION:o[h]=new oA;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Hb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zb{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Mt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bb(u),c.distance=h;break;case"spot":c=new Eb(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class kb{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ui}extendParams(e,t,i){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Gb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}}class Wb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Xb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class jb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Mt),Promise.all(r)}}class $b{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Kb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Mt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}}class Yb{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Zb{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Jb{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Qb{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class eA{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tA{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class nA{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Zt.TRIANGLES&&c.mode!==Zt.TRIANGLE_STRIP&&c.mode!==Zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const v=new ze,m=new B,p=new yi,T=new B(1,1,1),x=new sb(g.geometry,g.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&T.fromBufferAttribute(l.SCALE,A),x.setMatrixAt(A,v.compose(m,p,T));for(const A in l)if(A==="_COLOR_0"){const H=l[A];x.instanceColor=new Ol(H.array,H.itemSize,H.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);ht.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const kp="glTF",rr=12,Ef={JSON:1313821514,BIN:5130562};class iA{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-rr,r=new DataView(e,rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ef.JSON){const c=new Uint8Array(e,rr+o,a);this.content=i.decode(c)}else if(l===Ef.BIN){const c=rr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Bl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Bl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=ws[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(d)},a,c,Mt,f)})})}}class rA{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class oA{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Vp extends Lr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,v=g-c,m=-2*d+3*f,p=d-f,T=1-m,x=p-f+h;for(let A=0;A!==a;A++){const H=o[v+A+a],w=o[v+A+l]*u,P=o[g+A+a],G=o[g+A]*u;r[A]=T*H+x*w+m*P+p*G}return r}}const aA=new yi;class lA extends Vp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return aA.fromArray(r).normalize().toArray(r),r}}const Zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tf={9728:Ut,9729:qt,9984:np,9985:bo,9986:ar,9987:Hn},bf={33071:ci,33648:Do,10497:Ds},ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cA={CUBICSPLINE:void 0,LINEAR:Os,STEP:br},cl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new xc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),n.DefaultMaterial}function Li(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ai(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hA(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function fA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dA(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ul(t.attributes):e=n.indices+":"+ul(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ul(n.targets[i]);return e}function ul(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Hl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const mA=new ze;class gA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Mb(this.options.manager):this.textureLoader=new Rb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Li(r,a,s),ai(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(gr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ll[s.type],a=ws[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ot(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ll[s.type],c=ws[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(T);x||(v=new c(a,p*d,s.count*d/u),x=new QT(v,d/u),t.cache.add(T,x)),m=new mc(x,l,f%d/u,g)}else a===null?v=new c(s.count*l):v=new c(a,f,s.count*l),m=new Ot(v,l,g);if(s.sparse!==void 0){const p=ll.SCALAR,T=ws[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,H=new T(o[1],x,s.sparse.count*p),w=new c(o[2],A,s.sparse.count*l);a!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized));for(let P=0,G=H.length;P<G;P++){const b=H[P];if(m.setX(b,w[P*l]),l>=2&&m.setY(b,w[P*l+1]),l>=3&&m.setZ(b,w[P*l+2]),l>=4&&m.setW(b,w[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Tf[f.magFilter]||qt,u.minFilter=Tf[f.minFilter]||Hn,u.wrapS=bf[f.wrapS]||Ds,u.wrapT=bf[f.wrapT]||Ds,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new xt(v);m.needsUpdate=!0,f(m)}),t.load(gr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||pA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Op,Tn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _c,Tn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return xc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const h=s[We.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Mt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mn);const u=r.alphaMode||cl.OPAQUE;if(u===cl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===cl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ui&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ui&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ui){const h=r.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],Mt)}return r.emissiveTexture!==void 0&&o!==ui&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&Li(s,h,r),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Af(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=dA(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Af(new pn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?uA(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=o[d];let p;const T=c[d];if(m.mode===Zt.TRIANGLES||m.mode===Zt.TRIANGLE_STRIP||m.mode===Zt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new tb(v,T):new $t(v,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Zt.TRIANGLE_STRIP?p.geometry=Sf(p.geometry,fp):m.mode===Zt.TRIANGLE_FAN&&(p.geometry=Sf(p.geometry,Nl));else if(m.mode===Zt.LINES)p=new Up(v,T);else if(m.mode===Zt.LINE_STRIP)p=new vc(v,T);else if(m.mode===Zt.LINE_LOOP)p=new rb(v,T);else if(m.mode===Zt.POINTS)p=new ob(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fA(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&Li(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Li(s,h[0],r),h[0];const f=new Hi;r.extensions&&Li(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Nt(V0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new dc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ai(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new ze;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],v=d.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let T=0,x=f.length;T<x;T++){const A=f[T],H=d[T],w=g[T],P=v[T],G=m[T];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const b=i._createAnimationTracks(A,H,w,P,G);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new pb(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,mA)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Np:c.length>1?u=new Hi:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ai(u,r),r.extensions&&Li(i,u,r),r.matrix!==void 0){const h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Hi;i.name&&(r.name=s.createUniqueName(i.name)),ai(r,i),i.extensions&&Li(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Tn||f instanceof xt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ni[r.path]===ni.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ni[r.path]){case ni.weights:c=Hs;break;case ni.rotation:c=Wi;break;case ni.position:case ni.scale:c=zs;break;default:switch(i.itemSize){case 1:c=Hs;break;case 2:case 3:default:c=zs;break}break}const u=s.interpolation!==void 0?cA[s.interpolation]:Os,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ni[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Hl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Wi?lA:Vp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _A(n,e,t){const i=e.attributes,s=new Xn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=Hl(ws[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=Hl(ws[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Af(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Bl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ye.workingColorSpace!==Mt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),ai(n,e),_A(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hA(n,e.targets,t):n})}const _o="https://visualizer.matthiasheckel.com/images/challange/chs.svg",vA="https://visualizer.matthiasheckel.com/images/challange/paper.svg",xA="https://visualizer.matthiasheckel.com/images/challange/tape.svg",yA="https://visualizer.matthiasheckel.com/images/challange/distance.svg",MA={name:"VariableFontPage",setup(){const n=Jf(null);let e,t,i,s,r;const o=()=>{e=new JT,t=new Nt(75,window.innerWidth/window.innerHeight,.1,1e3),i=new ZT({antialias:!0,alpha:!0});const c=n.value;i.setSize(c.clientWidth,c.clientHeight),c.appendChild(i.domElement),t.position.set(0,10,80);const u=new wb(16777215,.8);e.add(u);const h=new zp(16777215,.5);h.position.set(1,1,1),e.add(h),new Bb().load("/models/paper.glb",d=>{s=d.scene,s.scale.set(2,2,2),s.traverse(g=>{if(g.isMesh){g.material=new ui({});const v=new ab(g.geometry),m=new Up(v,new _c({color:0,linewidth:5}));g.add(m)}}),e.add(s),a()},d=>console.log("Loading...",d),d=>console.error("Fehler beim Laden:",d)),window.addEventListener("resize",l)},a=()=>{r=requestAnimationFrame(a),s&&(s.rotation.y+=.003),i.render(e,t)},l=()=>{const c=n.value;t.aspect=c.clientWidth/c.clientHeight,t.updateProjectionMatrix(),i.setSize(c.clientWidth,c.clientHeight)};return pd(()=>{o()}),md(()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",l),i&&i.domElement&&i.dispose()}),{canvasContainer:n}}},SA=Zo('<div class="text"><div class="gmt-wrapper"><div class="gmt">GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+_o+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+_o+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+_o+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    <img src="'+_o+'" class="logo" alt="DIN A3">    GESTALTUNGS- UND MEDIENTECHNIK | TG    </div></div><div class="top">CHALLENGE</div><div class="columns"><div class="column"><div class="column-content"> 2 × DIN A3 <img src="'+vA+'" class="column-icon" alt="DIN A3"></div></div><div class="column"><div class="column-content"> Klebeband <img src="'+xA+'" class="column-icon" alt="DIN A3"></div></div><div class="column"><div class="column-content"> 30 cm <img src="'+yA+'" class="column-icon" alt="DIN A3"></div></div></div><div class="weight">Wieviel Gewicht kann deine Brücke tragen?</div></div>',1),EA={ref:"canvasContainer",class:"canvas-container"};function TA(n,e,t,i,s,r){return jt(),Sn(rn,null,[SA,ut("div",EA,null,512)],64)}const bA=xi(MA,[["render",TA]]),AA="https://visualizer.matthiasheckel.com/images/bkgd/logo.svg",wA={name:"BKGDPage",data(){return{tileWidth:300,rows:5,columns:1,tileImages:[],hoverNames:[],hoverActive:[],tileDelays:[],isScrolled:!1,ticking:!1,showSplash:!0,splashFadeOut:!1,namesPool:["Leon Schneider","Mia Fischer","Noah Wagner","Emma Becker","Luca Hoffmann","Lina Keller","Jonas Hartmann","Sophie Braun","Ben Neumann","Hannah Vogel"]}},computed:{totalTiles(){return this.columns*this.rows}},mounted(){this.updateColumns(),this.generateTileImages(),this.handleScroll(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.onScroll,{passive:!0}),setTimeout(()=>{this.splashFadeOut=!0},4e3),setTimeout(()=>{this.showSplash=!1},4600)},beforeUnmount(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.onScroll)},methods:{updateColumns(){const n=window.innerWidth,e=Math.floor(n/this.tileWidth);this.columns=Math.max(1,Math.min(e,5))},getRandomImage(){return`/images/bkgd/images/${Math.floor(Math.random()*9)+1}.png`},getRandomName(){const n=Math.floor(Math.random()*this.namesPool.length);return this.namesPool[n]},getDelaySequence(n){return Array.from({length:n},(e,t)=>`${4e3+t*180}ms`)},generateTileImages(){const n=this.totalTiles;this.tileImages=Array.from({length:n},()=>this.getRandomImage()),this.hoverNames=Array.from({length:n},()=>this.getRandomName()),this.hoverActive=Array.from({length:n},()=>!1),this.tileDelays=this.getDelaySequence(n)},appendTiles(n){const e=Array.from({length:n},()=>this.getRandomImage()),t=Array.from({length:n},()=>this.getRandomName()),i=Array.from({length:n},()=>!1),s=this.getDelaySequence(n);this.tileImages.push(...e),this.hoverNames.push(...t),this.hoverActive.push(...i),this.tileDelays.push(...s)},loadMore(){const e=this.columns*4;this.rows+=4,this.appendTiles(e)},handleResize(){const n=this.columns;this.updateColumns(),this.columns!==n&&this.generateTileImages()},onScroll(){this.ticking||(window.requestAnimationFrame(()=>{this.handleScroll(),this.ticking=!1}),this.ticking=!0)},handleScroll(){const n=window.scrollY||window.pageYOffset;this.isScrolled=n>50},onTileEnter(n){this.hoverNames[n]=this.getRandomName(),this.hoverActive[n]=!0},onTileLeave(n){this.hoverActive[n]=!1}}},Gp=n=>(ad("data-v-09bfdae8"),n=n(),ld(),n),RA={class:"page"},CA=Zo('<div class="splash__content" data-v-09bfdae8><div class="splash__title-wrap" data-v-09bfdae8><h1 class="splash__title" data-v-09bfdae8>Designplattform</h1><p class="splash__subtitle" data-v-09bfdae8>Carl-Hofer-Schule Karlsruhe</p></div><div class="splash__loader" data-v-09bfdae8><div class="splash__loader-bar" data-v-09bfdae8></div></div></div>',1),PA=[CA],LA=Zo('<div class="header__inner" data-v-09bfdae8><div class="header__left" data-v-09bfdae8><h1 class="header__title" data-v-09bfdae8>Design-Plattform</h1><p class="header__subtitle" data-v-09bfdae8>Carl-Hofer-Schule Karlsruhe</p></div><div class="header__center" data-v-09bfdae8><img src="'+AA+'" class="logo" alt="chs logo" data-v-09bfdae8></div><div class="header__right" data-v-09bfdae8><a href="#faqs" class="header__link" data-v-09bfdae8>FAQs</a></div></div>',1),IA=[LA],NA=Zo('<div class="header__inner header__inner--small" data-v-09bfdae8><div class="header__left" data-v-09bfdae8><p class="header__subtitle__small" data-v-09bfdae8>Carl-Hofer-Schule Karlsruhe</p></div><div class="header__right" data-v-09bfdae8><a href="#faqs" class="header__link__small" data-v-09bfdae8>FAQs</a></div></div>',1),DA=[NA],UA=["onMouseenter","onMouseleave"],OA=Gp(()=>ut("div",{class:"tile__blobs"},[ut("span",{class:"tile__blob tile__blob--1"}),ut("span",{class:"tile__blob tile__blob--2"}),ut("span",{class:"tile__blob tile__blob--3"})],-1)),FA=["src","alt"],BA={class:"load-more-wrap"},HA=Gp(()=>ut("footer",{class:"footer"},[ut("a",{href:"/datenschutz",class:"footer__link"},"Datenschutz"),ut("a",{href:"/impressum",class:"footer__link"},"Impressum")],-1));function zA(n,e,t,i,s,r){return jt(),Sn("div",RA,[s.showSplash?(jt(),Sn("div",{key:0,class:Fi(["splash",{"splash--fade-out":s.splashFadeOut}])},PA,2)):Jo("",!0),ut("header",{class:Fi(["header header--large",{"is-hidden":s.isScrolled}])},IA,2),ut("header",{class:Fi(["header header--small",{"is-visible":s.isScrolled}])},DA,2),ut("div",{class:"grid",style:_r({gridTemplateColumns:"repeat("+s.columns+", 300px)"})},[(jt(!0),Sn(rn,null,fg(s.tileImages,(o,a)=>(jt(),Sn("div",{key:a,class:"tile",style:_r({animationDelay:s.tileDelays[a]}),onMouseenter:l=>r.onTileEnter(a),onMouseleave:l=>r.onTileLeave(a)},[OA,ut("img",{src:o,alt:"Tile Bild "+(a+1),class:"tile__image"},null,8,FA),ut("div",{class:Fi(["tile__label",{"is-visible":s.hoverActive[a]}])},um(s.hoverNames[a]),3)],44,UA))),128))],4),ut("div",BA,[ut("button",{class:"load-more-button",onClick:e[0]||(e[0]=(...o)=>r.loadMore&&r.loadMore(...o))}," Mehr laden ")]),HA])}const kA=xi(wA,[["render",zA],["__scopeId","data-v-09bfdae8"]]),Ec=g_(Iv),VA=[{path:"/login",name:"LoginPage",component:nx},{path:"/chaos",name:"chaos",component:ux,meta:{requiresAuth:!1}},{path:"/variablefont",name:"variablefont",component:yx,meta:{requiresAuth:!1}},{path:"/bridgepage",name:"bridgepage",component:bA,meta:{requiresAuth:!1}},{path:"/bkgdpage",name:"bkgdpage",component:kA,meta:{requiresAuth:!1}},{path:"/",name:"home",component:()=>Jp(()=>import("./MainApplication-BH3oSTmt.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}}],Wp=Rv({history:iv(),routes:VA});Wp.beforeEach((n,e,t)=>{n.meta.requiresAuth&&!GA()&&n.query.parameter!=="1"?t("/login"):t()});function GA(){const n=Jd.getters.isAuthenticated;return console.log("isAuthenticated:",n),n}Ec.use(Wp);Ec.use(Jd);Ec.mount("#app");window.addEventListener("gesturestart",n=>n.preventDefault());window.addEventListener("gesturechange",n=>n.preventDefault());window.addEventListener("gestureend",n=>n.preventDefault());export{xi as _,Dt as a,Dg as b,Sn as c,jt as o,Ql as r,Gm as w};
