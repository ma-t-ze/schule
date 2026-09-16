import{aO as D,az as bt,aE as pt,r as re,j as St,w as k,J as wt,bz as kt,I as me,t as c,b5 as m,be as l,v as C,F as be,bB as ln,bq as zt,bp as vt,aR as Ee,aT as At,aK as Bt,aH as _t,aG as z}from"./index-mfrOYx1j.js";import{p as ee,_ as Ln,n as Vn,m as Et,k as Fn,b as W,h as je,t as $e,A as It,B as ze,E as Qe,q as R,w as yt,v as Pt,S as ve,x as Dt,y as Gt,s as Rt,a as Tt,L as Nn,F as Xe,e as Lt,u as Vt,c as on,C as dn,D as gn,g as Ft,l as Nt,r as Mt,o as Wt,H as fn,j as mn,G as bn,z as Ot,f as Ut}from"./index.esm-BKK1D4yM.js";function Mn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ct=Mn,Wn=new Qe("auth","Firebase",Mn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new Tt("@firebase/auth");function Kt(t,...e){Re.logLevel<=Nn.WARN&&Re.warn(`Auth (${ve}): ${t}`,...e)}function ye(t,...e){Re.logLevel<=Nn.ERROR&&Re.error(`Auth (${ve}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,...e){throw en(t,...e)}function F(t,...e){return en(t,...e)}function Ye(t,e,n){const i={...Ct(),[e]:n};return new Qe("auth","Firebase",i).create(e,{appName:t.name})}function ae(t){return Ye(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qt(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&U(t,"argument-error"),Ye(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function en(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Wn.create(t,...e)}function d(t,e,...n){if(!t)throw en(e,...n)}function q(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ye(e),new Error(e)}function x(t,e){t||q(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ht(){return pn()==="http:"||pn()==="https:"}function pn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ht()||Rt()||"connection"in navigator)?navigator.onLine:!0}function jt(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.shortDelay=e,this.longDelay=n,x(n>e,"Short delay should be less than long delay!"),this.isMobile=Dt()||Gt()}get(){return xt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){x(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$t=new Ae(3e4,6e4);function tn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ge(t,e,n,i,r={}){return Un(t,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});const u=ze({...a,key:t.config.apiKey}).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const o={method:e,headers:h,...s};return Vt()||(o.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&$e(t.emulatorConfig.host)&&(o.credentials="include"),On.fetch()(await Cn(t,t.config.apiHost,n,u),o)})}async function Un(t,e,n){t._canInitEmulator=!1;const i={...Zt,...e};try{const r=new Xt(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ie(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[h,o]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ie(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ie(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ie(t,"user-disabled",a);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ye(t,g,o);U(t,g)}}catch(r){if(r instanceof Xe)throw r;U(t,"network-request-failed",{message:String(r)})}}async function Qt(t,e,n,i,r={}){const s=await ge(t,e,n,i,r);return"mfaPendingCredential"in s&&U(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Cn(t,e,n,i){const r=`${e}${n}?${i}`,s=t,a=s.config.emulator?nn(t.config,r):`${t.config.apiScheme}://${r}`;return Jt.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class Xt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(F(this.auth,"network-request-failed")),$t.get())})}}function Ie(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=F(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return ge(t,"POST","/v1/accounts:delete",e)}async function Te(t,e){return ge(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ei(t,e=!1){const n=ee(t),i=await n.getIdToken(e),r=rn(i);d(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:we(Ke(r.auth_time)),issuedAtTime:we(Ke(r.iat)),expirationTime:we(Ke(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ke(t){return Number(t)*1e3}function rn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ye("JWT malformed, contained fewer than 3 sections"),null;try{const r=Lt(n);return r?JSON.parse(r):(ye("Failed to decode base64 JWT payload"),null)}catch(r){return ye("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Sn(t){const e=rn(t);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Xe&&ni(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ni({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=we(this.lastLoginAt),this.creationTime=we(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t){var S;const e=t.auth,n=await t.getIdToken(),i=await ke(t,Te(e,{idToken:n}));d(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=(S=r.providerUserInfo)!=null&&S.length?Kn(r.providerUserInfo):[],a=ri(t.providerData,s),u=t.isAnonymous,h=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),o=u?h:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Je(r.createdAt,r.lastLoginAt),isAnonymous:o};Object.assign(t,g)}async function ii(t){const e=ee(t);await Le(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ri(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Kn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e){const n=await Un(t,{},async()=>{const i=ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,a=await Cn(t,r,"/v1/token",`key=${s}`),u=await t._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:i};return t.emulatorConfig&&$e(t.emulatorConfig.host)&&(h.credentials="include"),On.fetch()(a,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ai(t,e){return ge(t,"POST","/v2/accounts:revokeToken",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){d(e.length!==0,"internal-error");const n=Sn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(d(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await si(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,a=new ce;return i&&(d(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(d(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(d(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return q("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){d(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class V{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new ti(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Je(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ke(this,this.stsTokenManager.getToken(this.auth,e));return d(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ei(this,e)}reload(){return ii(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new V({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Le(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(ae(this.auth));const e=await this.getIdToken();return await ke(this,Yt(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,u=n.tenantId??void 0,h=n._redirectEventId??void 0,o=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:S,emailVerified:p,isAnonymous:I,providerData:T,stsTokenManager:ne}=n;d(S&&ne,e,"internal-error");const N=ce.fromJSON(this.name,ne);d(typeof S=="string",e,"internal-error"),$(i,e.name),$(r,e.name),d(typeof p=="boolean",e,"internal-error"),d(typeof I=="boolean",e,"internal-error"),$(s,e.name),$(a,e.name),$(u,e.name),$(h,e.name),$(o,e.name),$(g,e.name);const j=new V({uid:S,auth:e,email:r,emailVerified:p,displayName:i,isAnonymous:I,photoURL:a,phoneNumber:s,tenantId:u,stsTokenManager:N,createdAt:o,lastLoginAt:g});return T&&Array.isArray(T)&&(j.providerData=T.map(fe=>({...fe}))),h&&(j._redirectEventId=h),j}static async _fromIdTokenResponse(e,n,i=!1){const r=new ce;r.updateFromServerResponse(n);const s=new V({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Le(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];d(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Kn(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),u=new ce;u.updateFromIdToken(i);const h=new V({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:a}),o={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Je(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(h,o),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Map;function H(t){x(t instanceof Function,"Expected a class definition");let e=wn.get(t);return e?(x(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qn.type="NONE";const kn=qn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e,n){return`firebase:${t}:${e}:${n}`}class le{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Pe(this.userKey,r.apiKey,s),this.fullPersistenceKey=Pe("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Te(this.auth,{idToken:e}).catch(()=>{});return n?V._fromGetAccountInfoResponse(this.auth,n,e):null}return V._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new le(H(kn),e,i);const r=(await Promise.all(n.map(async o=>{if(await o._isAvailable())return o}))).filter(o=>o);let s=r[0]||H(kn);const a=Pe(i,e.config.apiKey,e.name);let u=null;for(const o of n)try{const g=await o._get(a);if(g){let S;if(typeof g=="string"){const p=await Te(e,{idToken:g}).catch(()=>{});if(!p)break;S=await V._fromGetAccountInfoResponse(e,p,g)}else S=V._fromJSON(e,g);o!==s&&(u=S),s=o;break}}catch{}const h=r.filter(o=>o._shouldAllowMigration);return!s._shouldAllowMigration||!h.length?new le(s,e,i):(s=h[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async o=>{if(o!==s)try{await o._remove(a)}catch{}})),new le(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($n(e))return"Blackberry";if(Qn(e))return"Webos";if(xn(e))return"Safari";if((e.includes("chrome/")||jn(e))&&!e.includes("edge/"))return"Chrome";if(Jn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Hn(t=R()){return/firefox\//i.test(t)}function xn(t=R()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jn(t=R()){return/crios\//i.test(t)}function Zn(t=R()){return/iemobile/i.test(t)}function Jn(t=R()){return/android/i.test(t)}function $n(t=R()){return/blackberry/i.test(t)}function Qn(t=R()){return/webos/i.test(t)}function sn(t=R()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ui(t=R()){var e;return sn(t)&&!!((e=window.navigator)!=null&&e.standalone)}function hi(){return yt()&&document.documentMode===10}function Xn(t=R()){return sn(t)||Jn(t)||Qn(t)||$n(t)||/windows phone/i.test(t)||Zn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e=[]){let n;switch(t){case"Browser":n=zn(R());break;case"Worker":n=`${zn(R())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ve}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((a,u)=>{try{const h=e(s);a(h)}catch(h){u(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e={}){return ge(t,"GET","/v2/passwordPolicy",tn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=6;class di{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??oi,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vn(this),this.idTokenSubscription=new vn(this),this.beforeStateQueue=new ci(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=H(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Te(this,{idToken:e}),i=await V._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(W(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Le(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jt()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(ae(this));const n=e?ee(e):null;return n&&d(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(H(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await li(this),n=new di(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ai(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&H(e)||this._popupRedirectResolver;d(n,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[H(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(d(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(W(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Kt(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Me(t){return ee(t)}class vn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ft(n=>this.observer=n)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fi(t){an=t}function mi(t){return an.loadJS(t)}function bi(){return an.gapiScript}function pi(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){const n=Ln(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(je(s,e??{}))return r;U(r,"already-initialized")}return n.initialize({options:e})}function wi(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(H);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ki(t,e,n){const i=Me(t);d(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=et(e),{host:a,port:u}=zi(e),h=u===null?"":`:${u}`,o={url:`${s}//${a}${h}/`},g=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){d(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),d(je(o,i.config.emulator)&&je(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=o,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,$e(a)?It(`${s}//${a}${h}`):vi()}function et(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zi(t){const e=et(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:An(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:An(a)}}}function An(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vi(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return q("not implemented")}_getIdTokenResponse(e){return q("not implemented")}_linkToIdToken(e,n){return q("not implemented")}_getReauthenticationResolver(e){return q("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e){return Qt(t,"POST","/v1/accounts:signInWithIdp",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="http://localhost";class ue extends nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):U("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const a=new ue(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return oe(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oe(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oe(e,n)}buildRequest(){const e={requestUri:Ai,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ze(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends un{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends Be{constructor(){super("facebook.com")}static credential(e){return ue._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K extends Be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ue._fromParams({providerId:K.PROVIDER_ID,signInMethod:K.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return K.credentialFromTaggedObject(e)}static credentialFromError(e){return K.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return K.credential(n,i)}catch{return null}}}K.GOOGLE_SIGN_IN_METHOD="google.com";K.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Be{constructor(){super("github.com")}static credential(e){return ue._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Be{constructor(){super("twitter.com")}static credential(e,n){return ue._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Y.credential(n,i)}catch{return null}}}Y.TWITTER_SIGN_IN_METHOD="twitter.com";Y.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await V._fromIdTokenResponse(e,i,r),a=Bn(i);return new de({user:s,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Bn(i);return new de({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Bn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Xe{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ve.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ve(e,n,i,r)}}function tt(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ve._fromErrorAndOperation(t,s,e,i):s})}async function Bi(t,e,n=!1){const i=await ke(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return de._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){const{auth:i}=t;if(W(i.app))return Promise.reject(ae(i));const r="reauthenticate";try{const s=await ke(t,tt(i,r,e,t),n);d(s.idToken,i,"internal-error");const a=rn(s.idToken);d(a,i,"internal-error");const{sub:u}=a;return d(t.uid===u,i,"user-mismatch"),de._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&U(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(W(t.app))return Promise.reject(ae(t));const i="signIn",r=await tt(t,i,e),s=await de._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function Ii(t,e,n,i){return ee(t).onIdTokenChanged(e,n,i)}function yi(t,e,n){return ee(t).beforeAuthStateChanged(e,n)}function Pi(t,e,n,i){return ee(t).onAuthStateChanged(e,n,i)}function Di(t){return ee(t).signOut()}const Fe="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fe,"1"),this.storage.removeItem(Fe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=1e3,Ri=10;class rt extends it{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);hi()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ri):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Gi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rt.type="LOCAL";const Ti=rt;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends it{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}st.type="SESSION";const at=st;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new We(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const u=Array.from(a).map(async o=>o(n.origin,s)),h=await Li(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}We.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((u,h)=>{const o=hn("",20);r.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(S){const p=S;if(p.data.eventId===o)switch(p.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(p.data.response);break;default:clearTimeout(g),clearTimeout(s),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:o,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return window}function Fi(t){O().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof O().WorkerGlobalScope<"u"&&typeof O().importScripts=="function"}async function Ni(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mi(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Wi(){return ut()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="firebaseLocalStorageDb",Oi=1,Ne="firebaseLocalStorage",ct="fbase_key";class _e{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oe(t,e){return t.transaction([Ne],e?"readwrite":"readonly").objectStore(Ne)}function Ui(){const t=indexedDB.deleteDatabase(ht);return new _e(t).toPromise()}function lt(){const t=indexedDB.open(ht,Oi);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ne,{keyPath:ct})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ne)?e(i):(i.close(),await Ui(),e(await lt()))})})}async function _n(t,e,n){const i=Oe(t,!0).put({[ct]:e,value:n});return new _e(i).toPromise()}async function Ci(t,e){const n=Oe(t,!1).get(e),i=await new _e(n).toPromise();return i===void 0?null:i.value}function En(t,e){const n=Oe(t,!0).delete(e);return new _e(n).toPromise()}const Ki=800,qi=3;class ot{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=lt(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>qi)throw i;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return ut()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=We._getInstance(Wi()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Ni(),!this.activeServiceWorker)return;this.sender=new Vi(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await _n(e,Fe,"1"),await En(e,Fe)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>_n(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Ci(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>En(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Oe(r,!1).getAll();return new _e(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ki)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ot.type="LOCAL";const Hi=ot;new Ae(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return e?H(e):(d(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xi(t){return Ei(t.auth,new cn(t),t.bypassAuthState)}function ji(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),_i(n,new cn(t),t.bypassAuthState)}async function Zi(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),Bi(n,new cn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xi;case"linkViaPopup":case"linkViaRedirect":return Zi;case"reauthViaPopup":case"reauthViaRedirect":return ji;default:U(this.auth,"internal-error")}}resolve(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Ae(2e3,1e4);async function $i(t,e,n){if(W(t.app))return Promise.reject(F(t,"operation-not-supported-in-this-environment"));const i=Me(t);qt(t,e,un);const r=dt(i,n);return new se(i,"signInViaPopup",e,r).executeNotNull()}class se extends gt{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,se.currentPopupAction&&se.currentPopupAction.cancel(),se.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){x(this.filter.length===1,"Popup operations only handle one event");const e=hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(F(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(F(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,se.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(F(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ji.get())};e()}}se.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="pendingRedirect",De=new Map;class Xi extends gt{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=De.get(this.auth._key());if(!e){try{const i=await Yi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}De.set(this.auth._key(),e)}return this.bypassAuthState||De.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yi(t,e){const n=tr(e),i=nr(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function er(t,e){De.set(t._key(),e)}function nr(t){return H(t._redirectPersistence)}function tr(t){return Pe(Qi,t.config.apiKey,t.name)}async function ir(t,e,n=!1){if(W(t.app))return Promise.reject(ae(t));const i=Me(t),r=dt(i,e),a=await new Xi(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=10*60*1e3;class sr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ar(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ft(e)){const r=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(F(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rr&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ft({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ar(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ft(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e={}){return ge(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cr=/^https?/;async function lr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ur(t);for(const n of e)try{if(or(n))return}catch{}U(t,"unauthorized-domain")}function or(t){const e=Ze(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!cr.test(n))return!1;if(hr.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Ae(3e4,6e4);function yn(){const t=O().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gr(t){return new Promise((e,n)=>{var r,s,a;function i(){yn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yn(),n(F(t,"network-request-failed"))},timeout:dr.get()})}if((s=(r=O().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=O().gapi)!=null&&a.load)i();else{const u=pi("iframefcb");return O()[u]=()=>{gapi.load?i():n(F(t,"network-request-failed"))},mi(`${bi()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw Ge=null,e})}let Ge=null;function fr(t){return Ge=Ge||gr(t),Ge}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Ae(5e3,15e3),br="__/auth/iframe",pr="emulator/auth/iframe",Sr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kr(t){const e=t.config;d(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nn(e,pr):`https://${t.config.authDomain}/${br}`,i={apiKey:e.apiKey,appName:t.name,v:ve},r=wr.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ze(i).slice(1)}`}async function zr(t){const e=await fr(t),n=O().gapi;return d(n,t,"internal-error"),e.open({where:document.body,url:kr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sr,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=F(t,"network-request-failed"),u=O().setTimeout(()=>{s(a)},mr.get());function h(){O().clearTimeout(u),r(i)}i.ping(h).then(h,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ar=500,Br=600,_r="_blank",Er="http://localhost";class Pn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ir(t,e,n,i=Ar,r=Br){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h={...vr,width:i.toString(),height:r.toString(),top:s,left:a},o=R().toLowerCase();n&&(u=jn(o)?_r:n),Hn(o)&&(e=e||Er,h.scrollbars="yes");const g=Object.entries(h).reduce((p,[I,T])=>`${p}${I}=${T},`,"");if(ui(o)&&u!=="_self")return yr(e||"",u),new Pn(null);const S=window.open(e||"",u,g);d(S,t,"popup-blocked");try{S.focus()}catch{}return new Pn(S)}function yr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="__/auth/handler",Dr="emulator/auth/handler",Gr=encodeURIComponent("fac");async function Dn(t,e,n,i,r,s){d(t.config.authDomain,t,"auth-domain-config-required"),d(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ve,eventId:r};if(e instanceof un){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Pt(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,S]of Object.entries({}))a[g]=S}if(e instanceof Be){const g=e.getScopes().filter(S=>S!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const g of Object.keys(u))u[g]===void 0&&delete u[g];const h=await t._getAppCheckToken(),o=h?`#${Gr}=${encodeURIComponent(h)}`:"";return`${Rr(t)}?${ze(u).slice(1)}${o}`}function Rr({config:t}){return t.emulator?nn(t,Dr):`https://${t.authDomain}/${Pr}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="webStorageSupport";class Tr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=at,this._completeRedirectFn=ir,this._overrideRedirectResult=er}async _openPopup(e,n,i,r){var a;x((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Dn(e,n,i,Ze(),r);return Ir(e,s,hn())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Dn(e,n,i,Ze(),r);return Fi(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(x(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await zr(e),i=new sr(e);return n.register("authEvent",r=>(d(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qe,{type:qe},r=>{var a;const s=(a=r==null?void 0:r[0])==null?void 0:a[qe];s!==void 0&&n(!!s),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lr(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xn()||xn()||sn()}}const Lr=Tr;var Gn="@firebase/auth",Rn="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nr(t){on(new dn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=i.options;d(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yn(t)},o=new gi(i,r,s,h);return wi(o,n),o},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),on(new dn("auth-internal",e=>{const n=Me(e.getProvider("auth").getImmediate());return(i=>new Vr(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Gn,Rn,Fr(t)),gn(Gn,Rn,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=5*60,Wr=Vn("authIdTokenMaxAge")||Mr;let Tn=null;const Or=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Wr)return;const r=n==null?void 0:n.token;Tn!==r&&(Tn=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ur(t=Fn()){const e=Ln(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Si(t,{popupRedirectResolver:Lr,persistence:[Hi,Ti,at]}),i=Vn("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=Or(s.toString());yi(n,a,()=>a(n.currentUser)),Ii(n,u=>a(u))}}const r=Et("auth");return r&&ki(n,`http://${r}`),n}function Cr(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fi({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=F("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Cr().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nr("Browser");const Kr={apiKey:"AIzaSyBVstRMIRoxz5ghA5IuiQb_et-lIID1WS8",authDomain:"pruefung-schulrecht-schulorga.firebaseapp.com",projectId:"pruefung-schulrecht-schulorga",storageBucket:"pruefung-schulrecht-schulorga.firebasestorage.app",messagingSenderId:"232869602043",appId:"1:232869602043:web:a08e10d560e30bb0a0c65e"},He="pruefung-lernapp";function pe(){const t=Nt().some(e=>e.name===He)?Fn(He):Mt(Kr,He);return{app:t,auth:Ur(t),db:Wt(t)}}const xe=t=>Date.parse(`${t}T00:00:00Z`)/864e5;function qr(t,e,n){const i=xe("2026-09-10"),r=xe("2026-10-05"),s=xe(n),a=Math.max(0,r-Math.max(i,s)),u=8,h=Math.min(t,Math.max(0,s-i)*u),o=Math.min(t,Math.max(0,s-i+1)*u);return{days:a,expected:h,target:o,behind:Math.max(0,h-e),daily:u,todayRemaining:o-e,remaining:Math.max(0,t-e)}}function Hr(t){const e=D(null),n=D(!1),i=D(!1),r=D(!1),s=D(new Set),a=D({}),u=D({}),h=D({}),o=D({}),g=D(""),S=D("");let p,I,T;const ne=()=>{S.value=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)},N=f=>({"auth/popup-closed-by-user":"Anmeldung abgebrochen. Du kannst sie erneut starten.","auth/popup-blocked":"Bitte erlaube das Anmeldefenster in deinem Browser.","auth/unauthorized-domain":"Diese Domain muss in Firebase Authentication als autorisierte Domain eingetragen werden.","auth/network-request-failed":"Keine Verbindung. Bitte prüfe deine Internetverbindung.","permission-denied":"Lernstand nicht zugänglich. Bitte die Firestore-Zugriffsregeln veröffentlichen."})[f.code]||"Die Verbindung zu Firebase ist fehlgeschlagen. Bitte versuche es erneut.";bt(()=>{ne(),T=setInterval(ne,6e4);const{auth:f,db:P}=pe();p=Pi(f,A=>{I==null||I(),e.value=A,a.value={},u.value={},h.value={},o.value={},i.value=!1,g.value="",n.value=!0,A&&(I=Ot(Ut(P,"learners",A.uid,"questions"),{includeMetadataChanges:!0},E=>{var L;((L=e.value)==null?void 0:L.uid)===A.uid&&(a.value=Object.fromEntries(E.docs.filter(G=>t.has(G.id)).map(G=>[G.id,G.data().status])),u.value=Object.fromEntries(E.docs.filter(G=>t.has(G.id)).map(G=>[G.id,G.data().note||""])),i.value=!E.metadata.fromCache,g.value=E.metadata.hasPendingWrites?"Änderungen werden gespeichert …":E.metadata.fromCache?"Warte auf Verbindung zum gespeicherten Lernstand …":"Lernstand mit Firebase synchronisiert.")},E=>{i.value=!1,g.value=N(E)}))},A=>{n.value=!0,g.value=N(A)})}),pt(()=>{p==null||p(),I==null||I(),clearInterval(T)});const j=async()=>{r.value=!0,g.value="";try{await $i(pe().auth,new K)}catch(f){g.value=N(f)}finally{r.value=!1}},fe=async()=>{r.value=!0;try{await Di(pe().auth)}catch(f){g.value=N(f)}finally{r.value=!1}},Ue=async(f,P)=>{var E;if(!e.value||!i.value||s.value.has(f)||!t.has(f)||!["open","review","secure"].includes(P))return;const A=e.value.uid;s.value.add(f);try{await fn(mn(pe().db,"learners",A,"questions",f),{status:P,updatedAt:bn()},{merge:!0})}catch(L){((E=e.value)==null?void 0:E.uid)===A&&(g.value=N(L))}finally{s.value.delete(f)}},Ce=(f,P)=>{h.value[f]=P,o.value[f]="Ungespeicherte Änderung."},he=async f=>{var E,L;if(!e.value||!i.value||s.value.has(f)||!t.has(f))return;const P=h.value[f]??u.value[f]??"";if(P.length>1e4)return;const A=e.value.uid;s.value.add(f),o.value[f]="Wird gespeichert …";try{await fn(mn(pe().db,"learners",A,"questions",f),{note:P,updatedAt:bn()},{merge:!0}),((E=e.value)==null?void 0:E.uid)===A&&(u.value[f]=P,h.value[f]===P&&delete h.value[f],o.value[f]="Bemerkung gespeichert.")}catch(G){((L=e.value)==null?void 0:L.uid)===A&&(o.value[f]="Nicht gespeichert. "+N(G))}finally{s.value.delete(f)}},Z=re(()=>Object.values(a.value).filter(f=>f==="secure").length),M=re(()=>Object.values(a.value).filter(f=>f==="review").length),te=re(()=>S.value?qr(t.size,Z.value,S.value):null);return{user:e,ready:n,loaded:i,busy:r,pending:s,progress:a,message:g,today:S,learned:Z,review:M,plan:te,login:j,logout:fe,setStatus:Ue,notes:u,noteDrafts:h,noteMessages:o,editNote:Ce,saveNote:he}}const Se=[{id:"cluster-1",title:"Rechtliche Grundlagen und Bildungsauftrag",topics:[{title:"Verfassung und staatliche Prinzipien",sources:[{document:"Schulrecht",pages:"1-2",page:1},{document:"Schulorganisation",pages:"1",page:1}],questions:[{id:"schulrecht-1",document:"Schulrecht",page:1,question:"Beschreiben sie anhand von Beispielen die rechtlichen Grundlagen des Schulwesens.",answer:`1. Grundgesetz (GG)

enthält die verfassungsrechtlichen Grundlagen der Rechtsordnung

Rechtsstaatsprinzip

staatliches Handeln ist an Recht und Gesetz gebunden

Schule darf nicht willkürlich handeln

Beispiel: E&O-Maßnahmen → § 90 SchG

Demokratieprinzip

demokratische Mitwirkung

z. B. SMV, Elternvertretung, Schulkonferenz

Sozialstaatsprinzip

Chancengleichheit, Förderung und Unterstützung

Bundesstaatsprinzip

staatliche Aufgaben sind zwischen Bund und Ländern verteilt

→ Schulwesen grundsätzlich Ländersache

Spezielle schulrechtliche Regelungen im GG

Art. 6 GG → Elternrecht

Pflege und Erziehung der Kinder sind Recht und Pflicht der Eltern

wichtig für Schule, weil dem Erziehungsrecht der Eltern der staatliche Bildungs- und Erziehungsauftrag gegenübersteht

Art. 7 GG → Schulwesen

das gesamte Schulwesen steht unter Aufsicht des Staates

bildet die verfassungsrechtliche Grundlage für den staatlichen Bildungs- und Erziehungsauftrag

regelt außerdem grundlegende Fragen, z. B. Religionsunterricht und Privatschulen

Kurz:

Art. 6 GG → Eltern haben Erziehungsrecht.

Art. 7 GG → Staat hat Verantwortung für das Schulwesen.

2. Verfassung des Landes Baden-Württemberg (LV)

steht nach Denig direkt nach dem Grundgesetz

Art. 11 LV → Recht auf Erziehung und Ausbildung

Art. 12 LV → Grundsätze der Erziehung

Art. 14 LV → Schulpflicht, Schulgeldfreiheit

Art. 15 LV → Schulform, Rechte der Eltern

Art. 17 LV → Schulaufsicht, Mitwirkung der Eltern

„Näheres regelt ein Gesetz“ → Schulgesetz

3. Schulgesetz Baden-Württemberg (SchG)

konkretisiert die Vorgaben von GG und Landesverfassung

Beispiele:

§ 1 SchG → Bildungs- und Erziehungsauftrag

§ 23 SchG → Rechtsstellung der Schule

§ 41 SchG → Aufgaben der Schulleitung

§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen

4. Weitere rechtliche Regelungen

Rechtsverordnungen

aufgrund einer gesetzlichen Ermächtigung

Beispiel: NVO

Verwaltungsvorschriften (VwV)

verwaltungsinterne Vorgaben

grundsätzlich keine unmittelbare Außenwirkung

Unterhalb des GG steht die Verfassung des Landes Baden-Württemberg.

Art. 11 Recht auf Erziehung und Ausbildung, Art. 12 Erziehungsgrundsätze, Art. 14 Schulpflicht und Schulgeldfreiheit, Art. 15 Schulform und Elternrechte sowie Art. 17 u. a. Schulaufsicht und Elternvertretung.

Darunter kommt das Schulgesetz (SchG). Das ist für unseren Schulalltag die zentrale gesetzliche Grundlage.

§ 1 Bildungs- und Erziehungsauftrag, § 23 Rechtsstellung der Schule, § 41 Aufgaben der Schulleitung, § 90 Erziehungs- und Ordnungsmaßnahmen usw.`},{id:"schulrecht-2",document:"Schulrecht",page:2,question:"Wie zeigen sich die Umsetzung von Rechtsstaatsprinzip, Demokratieprinzip, Sozialstaatsprinzip und Bundesstaatsprinzip im Schulwesen?",answer:`Rechtsstaatsprinzip

Die Schule ist an Recht und Gesetz gebunden. Insbesondere Eingriffe von besonderer Intensität in die Rechte von Schülern benötigen eine gesetzliche Grundlage.

Demokratieprinzip

Beteiligung und Mitwirkung der am Schulleben beteiligten Gruppen an Entscheidungen.

Sozialstaatsprinzip

Der Staat ermöglicht Bildung unabhängig von den wirtschaftlichen und sozialen Voraussetzungen und unterstützt bzw. fördert Schüler, die Unterstützung benötigen.

Bundesstaatsprinzip

Das Schulwesen ist grundsätzlich Ländersache. Deshalb hat Baden-Württemberg ein eigenes Schulgesetz.`},{id:"schulorganisation-1",document:"Schulorganisation",page:1,question:"Welche zentralen Inhalte regelt Art. 7 GG?",answer:`Art. 7 GG → staatliche Schulaufsicht, Religionsunterricht und Privatschulen

Art. 7 GG regelt nur bestimmte zentrale Bereiche des Schulwesens:

das gesamte Schulwesen steht unter staatlicher Aufsicht,

Regelungen zum Religionsunterricht,

das Recht zur Errichtung von Privatschulen und die Voraussetzungen dafür.

Wichtig: Das Grundgesetz regelt nicht die konkrete Schulorganisation. Diese liegt aufgrund der Kulturhoheit grundsätzlich bei den Ländern (Art. 30, 70 ff. GG). Ein bundesweites Schulgesetz gibt es deshalb nicht.

Die Unterlagen betonen außerdem, dass „staatliche Aufsicht“ mehr bedeutet als bloße Kontrolle: Der Staat besitzt eine umfassende Schulhoheit und bestimmt unter anderem Schulpflicht, Organisation und Inhalte.

Fragen: Besonderes pädagogisches Interesse in Absatz 5, Vorschulen bleiben aufgehoben in 6`},{id:"schulorganisation-18",document:"Schulorganisation",page:6,question:"Für welche Bereiche hat das Grundgesetz Gültigkeit im Schulwesen? Nennen Sie drei und erläutern Sie Absicht und Einfluss.",answer:`Drei besonders wichtige Bereiche aus Art. 7 GG:

1. Staatliche Schulaufsicht

Der Staat trägt Verantwortung für das Schulwesen.

2. Religionsunterricht

Das GG enthält besondere Garantien und Regelungen für Religionsunterricht.

3. Privatschulen

Das Recht zur Errichtung privater Schulen wird geschützt, zugleich gelten

Genehmigungsvoraussetzungen.

Die Präsentation fasst Art. 7 genau mit diesen drei Bereichen zusammen:

Staatsaufsicht – Religionsunterricht – Privatschulen.`}]},{title:"Normen und Verwaltungshandeln",sources:[{document:"Schulrecht",pages:"1-4",page:1},{document:"Schulorganisation",pages:"4",page:4}],questions:[{id:"schulrecht-3",document:"Schulrecht",page:2,question:"Was versteht man unter der Normenpyramide?",answer:`Die Normenpyramide stellt die Rangordnung der Rechtsnormen dar. Niederrangiges Recht darf höherrangigem Recht nicht widersprechen.

Eine Rechtsnorm ist eine einzelne rechtlich verbindliche Regel.

Ein Gesetz ist ein Regelwerk, das viele solcher Rechtsnormen enthält.

Beispiel Schulgesetz Baden-Württemberg:

Das Schulgesetz (SchG) ist das Gesetz, darin stehen viele einzelne Rechtsnormen, z. B.:

§ 1 SchG → Erziehungs- und Bildungsauftrag

§ 41 SchG → Aufgaben des Schulleiters

§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen

Grundgesetz

formelles Gesetz mit Bundesverfassungsrang

Landesverfassung Baden Württemberg (SchG)

formelles Gesetz mit Landesverfassungsrang

Schulgesetz BW (SchG)

formelles, einfaches Landesgesetz

Rechtsverordnungen (VO)

z.B. Notenbildungsverordnung (NVO)

Verwaltungsvorschriften (VwV)

verwaltungsinterne Regelungen, z.B. Verwaltungsvorschriften des Kultusministeriums`},{id:"schulrecht-4",document:"Schulrecht",page:3,question:"Unterscheiden Sie Gesetze, Rechtsverordnungen und Verwaltungsvorschriften",answer:`Gesetz

beschlossen durch Parlament / Legislative

nach außen verbindlich

Beispiel: Schulgesetz (SchG)

Rechtsverordnung (VO)

erlassen durch Exekutive, z. B. Kultusministerium

aufgrund einer gesetzlichen Ermächtigung

konkretisiert gesetzliche Regelungen

nach außen verbindlich

Beispiel: Notenbildungsverordnung (NVO)

Verwaltungsvorschrift (VwV)

erlassen durch Verwaltungsbehörde, z. B. Kultusministerium

regelt, wie die Verwaltung handeln soll

grundsätzlich nur verwaltungsintern verbindlich

grundsätzlich keine unmittelbaren Ansprüche für Schüler/Eltern

Beispiel: KM gibt Schulen Vorgaben zur Stundenplangestaltung

Schüler kann daraus grundsätzlich keinen Anspruch auf einen bestimmten Stundenplan ableiten

Merksatz:

Gesetz → Parlament | Rechtsverordnung → Exekutive + gesetzliche Ermächtigung | VwV → interne Vorgabe für die Verwaltung.`},{id:"schulrecht-5",document:"Schulrecht",page:3,question:"Was ist ein Verwaltungsakt? Grenzen Sie dies ab zu „schlichtem Verwaltungshandeln“.",answer:`§ 35 LVwVfG → Verwaltungsakt

hoheitliche Maßnahme einer Behörde

Regelung eines Einzelfalls

auf dem Gebiet des öffentlichen Rechts

mit unmittelbarer Rechtswirkung nach außen

Beispiele Schule:

Nichtversetzung

E&O-Maßnahmen nach § 90 SchG

Denig → Eingriffsintensität

praktische Abgrenzung: Wie stark wird in die Rechtsstellung des Schülers eingegriffen?

stärkere, verbindliche Regelung → Verwaltungsakt

Schlichtes Verwaltungshandeln

keine entsprechende rechtliche Regelungswirkung

alltägliches pädagogisches/tatsächliches Handeln

z. B.:

Klassenbucheintrag

pädagogische Zusatzaufgabe

Sitzplatzänderung

Merksatz:

Verwaltungsakt → Rechtsstellung wird verbindlich geregelt.

Schlichtes Verwaltungshandeln → pädagogisches/tatsächliches Handeln ohne solche Regelungswirkung.`},{id:"schulrecht-6",document:"Schulrecht",page:4,question:"Welche Bedeutung hat die Bezeichnung „nicht rechtsfähige Anstalt“ für eine Schule?",answer:`§ 23 Abs. 1 SchG → öffentliche Schule

öffentliche Schulen sind „nicht rechtsfähige öffentliche Anstalten“

Anstalt → Denig

dauerhafte öffentliche Einrichtung

erfüllt eine öffentliche Aufgabe

→ insbesondere Bildungs- und Erziehungsauftrag

Nicht rechtsfähig

Schule besitzt keine eigene Rechtspersönlichkeit

ist rechtlich nicht selbstständig

hinter ihr stehen deshalb die jeweiligen Rechtsträger

Rechtsträger

→ Lehrkräfte / pädagogischer Bereich (Land Baden-Württemberg)

→ Gebäude / Ausstattung / Sachkosten (Schulträger, z. B. Stadt Karlsruhe)

Merksatz:

Anstalt = öffentliche Einrichtung mit Aufgabe.

Nicht rechtsfähig = keine eigene Rechtspersönlichkeit → Rechtsträger stehen hinter der Schule.`},{id:"schulorganisation-13",document:"Schulorganisation",page:4,question:"Wie ist die Normenpyramide im Schulrecht aufgebaut?",answer:`Höheres Recht schlägt niedrigeres Recht.

Vereinfacht:

Grundgesetz

↓

Landesverfassung Baden-Württemberg

↓

Gesetze, z. B. Schulgesetz

↓

Rechtsverordnungen, z. B. NVO

↓

Verwaltungsvorschriften

↓

schulinterne Regelungen

Eine untergeordnete Regel darf einer höherrangigen Norm nicht widersprechen.

Je höher eine Norm steht, desto stärker ist ihre rechtliche Bindungswirkung. Niedrigeres Recht darf höherem Recht nicht widersprechen.`},{id:"schulorganisation-37",document:"Schulorganisation",page:10,question:"Warum tauchen nicht alle beruflichen Schularten im Schulgesetz auf?",answer:`Schulgesetz → Grundstruktur

Verordnungen → konkrete Bildungsgänge

Das Schulgesetz regelt die grundlegende Struktur.

Konkrete Ausgestaltungen einzelner Bildungsgänge wie Berufliches Gymnasium oder AV/AVdual werden teilweise durch Rechtsverordnungen bzw. weitere Regelungen konkretisiert.

Deshalb muss nicht jeder einzelne Bildungsgang als eigene Schulart im Schulgesetz aufgeführt sein.`},{id:"schulorganisation-102",document:"Schulorganisation",page:27,question:"Schulgesetz: Nennen Sie Beispiele, wann es zum Tragen kommt.",answer:`Schulgesetz → grundlegende schulrechtliche Fragen

Die Musterlösung nennt insbesondere:

Schulpflicht,

Aufnahme in Schularten,

Versetzung,

Ordnungsmaßnahmen,

Rechte und Pflichten der Schülerinnen und Schüler.

Das Schulgesetz bildet damit die gesetzliche Grundlage. Einzelheiten können anschließend durch Rechtsverordnungen konkretisiert werden.

Merksatz:

SchG → Grundregeln des Schulwesens.`}]},{title:"Bildung und Erziehung im Unterricht",sources:[{document:"Schulrecht",pages:"7",page:7},{document:"Schulrecht",pages:"14",page:14},{document:"Schulorganisation",pages:"1-3",page:1},{document:"Schulorganisation",pages:"7-8",page:7}],questions:[{id:"schulrecht-16",document:"Schulrecht",page:7,question:"Welche grundsätzlichen Aufgaben hat die Schule?",answer:`§ 1 SchG → Bildungs- und Erziehungsauftrag

Bildungsauftrag → Vermittlung von Kenntnissen, Fähigkeiten und Fertigkeiten

Erziehungsauftrag → Vermittlung von Werten und Wertvorstellungen`},{id:"schulorganisation-2",document:"Schulorganisation",page:1,question:"Welche Bildungs- und Erziehungsziele nennt § 1 Schulgesetz BW?",answer:`§ 1 SchG → Erziehungs- und Bildungsauftrag der Schule

Die Schule soll den in der Landesverfassung verankerten Erziehungs- und Bildungsauftrag verwirklichen.

Zentral sind insbesondere:

Achtung vor der Würde des Menschen,

Verantwortungsbewusstsein,

Anerkennung der freiheitlich-demokratischen Grundordnung,

Achtung vor anderen Überzeugungen,

soziale Bewährung,

Förderung der Persönlichkeit und Begabungen,

Vorbereitung auf Beruf und gesellschaftliches Leben.

Merksatz für die Prüfung:

Die Schule vermittelt nicht nur Wissen, sondern hat auch einen staatlichen Erziehungsauftrag.`},{id:"schulorganisation-4",document:"Schulorganisation",page:2,question:"Welche Aufgaben ergeben sich für Lehrkräfte aus dem staatlichen Erziehungsauftrag?",answer:`Lehrkräfte → Bildung + Erziehung

Lehrkräfte sollen nicht nur Fachwissen vermitteln. Sie verwirklichen im Unterricht den staatlichen Erziehungs- und Bildungsauftrag.

Dazu gehören beispielsweise:

fachliche Bildung,

Förderung von Selbstständigkeit,

Verantwortungsbewusstsein,

soziales Verhalten,

demokratische Werte,

individuelle Förderung der Schülerinnen und Schüler.

Prüfung: Ein gutes Beispiel nennen:

Bei einer Gruppenarbeit vermittle ich nicht nur Fachkompetenz, sondern fördere gleichzeitig Kooperation, Eigenverantwortung und respektvollen Umgang.`},{id:"schulorganisation-7",document:"Schulorganisation",page:3,question:"Was versteht man unter dem Erziehungs- und Bildungsauftrag der Schule?",answer:`Bildung → Wissen und Kompetenzen

Erziehung → Persönlichkeit und gesellschaftliche Verantwortung

Schule soll Schülerinnen und Schüler fachlich bilden und zugleich zu selbstständigen, verantwortungsbewussten und gesellschaftsfähigen Menschen erziehen.

Der Auftrag geht deshalb deutlich über reine Wissensvermittlung hinaus.`},{id:"schulorganisation-8",document:"Schulorganisation",page:3,question:"Wie setzen Sie als Lehrkraft die in § 1 genannten Erziehungsziele konkret im Unterricht um?",answer:`Zum Beispiel durch

respektvolle Diskussionskultur,

Gruppen- und Projektarbeit,

selbstständige Arbeitsphasen,

Übernahme von Verantwortung,

konstruktiven Umgang mit Fehlern,

demokratische Entscheidungsprozesse,

Förderung unterschiedlicher Begabungen.

Prüfungstipp: Hier nicht nur abstrakt antworten, sondern ein konkretes Beispiel aus dem eigenen Unterricht nennen.

Frage: Was wäre hier ein Beispiel aus dem eigenen Unterricht`},{id:"schulorganisation-25",document:"Schulorganisation",page:7,question:"Was könnte man im Unterricht machen, um Begabungen zu fördern?",answer:`Begabungsförderung → differenzieren und Freiräume schaffen

Zum Beispiel:

anspruchsvollere Zusatzaufgaben,

offene Projektaufgaben,

individuelle Themenwahl,

Wettbewerbe,

selbstständige Vertiefung,

differenzierte Lernangebote,

besondere Verantwortungsbereiche.

Damit wird der Auftrag aus § 1 SchG praktisch umgesetzt, Schülerinnen und Schüler entsprechend ihren Begabungen und Fähigkeiten zu fördern.`},{id:"schulorganisation-28",document:"Schulorganisation",page:8,question:"Welche Fächer sind in der Stundentafel jeder Schulart zu finden? Nennen Sie Gründe.",answer:`Bestimmte allgemeinbildende Bereiche finden sich schulartübergreifend wieder, insbesondere Deutsch, Mathematik, gesellschaftswissenschaftliche und naturwissenschaftliche Inhalte sowie Sport und religiös-ethische Bildung.

Grund: Schule soll nicht nur spezielle Fach- oder Berufskenntnisse vermitteln, sondern einen gemeinsamen Erziehungs- und Bildungsauftrag erfüllen.`}]}]},{id:"cluster-2",title:"Zuständigkeiten, Schulaufsicht und Schulentwicklung",topics:[{title:"Bund, Länder und gemeinsame Gremien",sources:[{document:"Schulorganisation",pages:"7-10",page:7}],questions:[{id:"schulorganisation-24",document:"Schulorganisation",page:7,question:"Wie wirkt sich die Kulturhoheit der Länder auf die Einheitlichkeit des Schulwesens aus?",answer:`Kulturhoheit → jedes Land regelt sein Schulwesen

Nach Art. 30 und 70 ff. GG liegt die Gesetzgebungs- und Verwaltungskompetenz für das Schulwesen grundsätzlich bei den Ländern.

Folge:

Es gibt kein einheitliches Schulgesetz des Bundes.

Dadurch unterscheiden sich z. B. Schularten, Prüfungsordnungen und organisatorische Regelungen zwischen den Bundesländern.

Zur Koordinierung zwischen den Ländern dient insbesondere die KMK.

=> Was bedeutet KMK?`},{id:"schulorganisation-29",document:"Schulorganisation",page:8,question:"Wie ist die politische Zuständigkeit für Schulen und Hochschulen in Deutschland geregelt? In welchem Gesetz?",answer:`Länder → Kulturhoheit

Die grundsätzliche Zuständigkeit liegt bei den Ländern.

Rechtsgrundlage sind insbesondere Art. 30 und Art. 70 ff. GG.

Das wird in Sitzung 1 ausdrücklich hervorgehoben: Das GG verleiht den Ländern implizit die ausschließliche Gesetzgebungs- und Verwaltungskompetenz für das Schulwesen.`},{id:"schulorganisation-30",document:"Schulorganisation",page:8,question:"Erklären Sie den Begriff „Hamburger Abkommen“.",answer:`Hamburger Abkommen → Vereinheitlichung zwischen den Ländern

Das Hamburger Abkommen war eine Vereinbarung der Länder zur Vereinheitlichung wichtiger Strukturen des Schulwesens.

Ziel war, trotz Kulturhoheit der Länder gemeinsame Grundstrukturen zu schaffen, beispielsweise bei Schularten, Schuljahresbeginn oder Abschlussbezeichnungen.`},{id:"schulorganisation-35",document:"Schulorganisation",page:9,question:"Welche Aufgaben hat die KMK (Kultusministerkonferenz)?",answer:`KMK → Koordination der Länder

Die Kultusministerkonferenz koordiniert die Bildungspolitik der Länder.

Ziele sind insbesondere:

Vergleichbarkeit von Abschlüssen,

gegenseitige Anerkennung,

gemeinsame Standards,

Abstimmung zwischen den Ländern.

Damit gleicht sie Unterschiede aus, die aufgrund der Kulturhoheit entstehen.`},{id:"schulorganisation-36",document:"Schulorganisation",page:9,question:"Welche Aufgaben hat die GWK (Gemeinsame Wissenschaftskonferenz)?",answer:`GWK → Bund und Länder bei Wissenschaft/Forschung

Die Gemeinsame Wissenschaftskonferenz koordiniert die Zusammenarbeit von Bund und Ländern insbesondere in den Bereichen:

Wissenschaft,

Forschung,

Hochschulen und Forschungsförderung.

Damit unterscheidet sie sich von der KMK, deren Schwerpunkt stärker bei Bildung, Schule und Kultur liegt.`}]},{title:"Schulaufsicht und Schulträger",sources:[{document:"Schulrecht",pages:"4",page:4},{document:"Schulrecht",pages:"15",page:15},{document:"Schulorganisation",pages:"8-10",page:8}],questions:[{id:"schulrecht-48",document:"Schulrecht",page:15,question:"Wie wird das gesamte Schulwesen „beaufsichtigt“? Unterscheiden Sie Fach-, Rechts- und Dienstaufsicht.",answer:`§§ 32 ff. SchG → Schulaufsicht

Rechtsaufsicht

Kontrolle der Rechtmäßigkeit

Rechts- und Verwaltungsangelegenheiten

Leitfrage: „Darf man das?“

Fachaufsicht

Kontrolle der fachlichen und pädagogischen Arbeit

z. B. Unterricht, Methodik, Erziehung

Leitfrage: „Ist das fachlich richtig und sinnvoll?“

Dienstaufsicht

Kontrolle der Dienstpflichterfüllung

z. B. Pünktlichkeit, Amtsverschwiegenheit, Neutralität

Leitfrage: „Erfüllt die Lehrkraft ihre Dienstpflichten?“

Merksatz:

Recht → Darf man das? | Fach → Macht man es richtig? | Dienst → Erfüllt man seine Pflichten?`},{id:"schulorganisation-5",document:"Schulorganisation",page:2,question:"Was bedeutet staatliche Schulaufsicht?",answer:`Schulaufsicht → Staat trägt Verantwortung für das Schulwesen

Art. 7 Abs. 1 GG:

„Das gesamte Schulwesen steht unter der Aufsicht des Staates.“

Dabei ist „Aufsicht“ weit zu verstehen. Der Staat kontrolliert Schule nicht nur, sondern besitzt Schulhoheit: Er legt beispielsweise Organisation, Schulpflicht und wesentliche Inhalte des Schulwesens fest.`},{id:"schulorganisation-27",document:"Schulorganisation",page:8,question:"Sind wir an beruflichen Schulen von der unteren Schulaufsichtsbehörde betroffen?",answer:`Berufliche Schulen → grundsätzlich Regierungspräsidium

Bei beruflichen Schulen liegt die unmittelbare Schulaufsicht grundsätzlich nicht beim Staatlichen Schulamt wie etwa bei Grundschulen, sondern beim Regierungspräsidium.

Für die Prüfung ist daher vor allem die Zuordnung wichtig:

Grund-/Haupt-/Werkreal-/Real-/Gemeinschaftsschulen → Staatliches Schulamt

Gymnasien und berufliche Schulen → Regierungspräsidium

Fragen: Was ist das staatliche Schulamt?`},{id:"schulorganisation-33",document:"Schulorganisation",page:9,question:"Erklären Sie den Begriff „Lernmittelfreiheit“.",answer:`Lernmittelfreiheit → notwendige Lernmittel grundsätzlich unentgeltlich

Schülerinnen und Schüler sollen die für den Unterricht erforderlichen Lernmittel grundsätzlich zur Verfügung gestellt bekommen.

Der Gedanke dahinter ist die Chancengleichheit: Bildung soll nicht davon abhängen, ob Eltern die erforderlichen Schulbücher bezahlen können.`},{id:"schulorganisation-34",document:"Schulorganisation",page:9,question:"Wer ist für die finanzielle Ausstattung der Schulen, wer für die personelle Ausstattung zuständig?",answer:`Schulträger → Sachkosten

Land → Lehrkräfte

Der kommunale Schulträger trägt grundsätzlich die sächlichen Kosten, z. B.:

Gebäude,

Ausstattung,

bestimmte Lernmittel.

Das Land Baden-Württemberg ist insbesondere für das Lehrpersonal verantwortlich.

Merksatz:

Kommune baut die Schule – Land stellt die Lehrer.`},{id:"schulorganisation-40",document:"Schulorganisation",page:10,question:"Wie sind die Verwaltungsebenen bei Grund-/Hauptschulen, beruflichen Schulen und Gymnasien organisiert?",answer:`Kultusministerium → oberste Schulaufsicht

Darunter unterscheiden sich die Zuständigkeiten:

Grund-, Haupt-/Werkreal-, Real- und Gemeinschaftsschulen:

→ Staatliche Schulämter als untere Schulaufsichtsbehörden.

Gymnasien und berufliche Schulen:

→ Regierungspräsidien.

Damit sollte man in der Prüfung vor allem wissen:

Berufliche Schule → Regierungspräsidium, nicht Staatliches Schulamt.`}]},{title:"Qualität, Fortbildung und Reformen",sources:[{document:"Schulorganisation",pages:"5",page:5},{document:"Schulorganisation",pages:"7-8",page:7},{document:"Schulorganisation",pages:"27-29",page:27}],questions:[{id:"schulorganisation-16",document:"Schulorganisation",page:5,question:"Welche Aufgaben hat das Zentrum für Schulqualität und Lehrerbildung (ZSL)?",answer:`ZSL → Lehrkräfte und Unterricht

Schwerpunkte sind insbesondere:

Aus- und Fortbildung von Lehrkräften,

Beratung und Unterstützung,

Unterrichts- und Schulentwicklung,

Führungskräfteentwicklung,

Gesundheitsförderung.

Die Sitzungsunterlagen nennen beispielsweise Fortbildungsangebote des ZSL für Personen ohne Lehramtsausbildung sowie Programme für Berufsbeginn und Wiedereinstieg.`},{id:"schulorganisation-22",document:"Schulorganisation",page:7,question:"Welche Instanz bietet Schulungsmöglichkeiten für Lehrer in Baden-Württemberg?",answer:`ZSL → zentrale Fortbildungsinstanz

Das Zentrum für Schulqualität und Lehrerbildung bietet Fortbildungen und Unterstützungsangebote für Lehrkräfte.

Daneben kommen – abhängig vom Thema – beispielsweise Seminare für Ausbildung und Fortbildung der Lehrkräfte sowie schulinterne bzw. regionale Fortbildungsangebote infrage.`},{id:"schulorganisation-26",document:"Schulorganisation",page:8,question:"Was ist eine typische Aufgabe des IBBW (Institut für Bildungsanalysen Baden-Württemberg)?",answer:`IBBW → Daten, Analyse und Qualitätsentwicklung

Das Institut für Bildungsanalysen Baden-Württemberg beschäftigt sich insbesondere mit:

Bildungsmonitoring,

Datenerhebung und -auswertung,

Evaluation,

Analyse von Bildungsqualität.

Merksatz:

ZSL → Menschen/Unterricht entwickeln

IBBW → Daten/Qualität analysieren`},{id:"schulorganisation-103",document:"Schulorganisation",page:27,question:"Nennen Sie Änderungen der vergangenen Jahre.",answer:`Sitzung 5 nennt vier Beispiele:

Rückkehr zu G9

verbindlichere Grundschulempfehlung

Einführung des Sprachförderkonzepts SprachFit mit verpflichtender Sprachförderung vor der Einschulung

Ausbau von Sprachbildung, Medienbildung und Demokratiebildung.

Die Präsentation enthält dazu auch das Schreiben des Kultusministeriums zu den „wichtigen Weichenstellungen im Bildungssystem“ und beschreibt insbesondere die Stärkung der Sprachförderung durch SprachFit.`},{id:"schulorganisation-105",document:"Schulorganisation",page:28,question:"Wozu dienen DQR und GER?",answer:`DQR → Qualifikationen vergleichen

GER → Sprachkenntnisse vergleichen

DQR

DQR steht für:

Deutscher Qualifikationsrahmen

Er dient dazu, unterschiedliche Qualifikationen und Abschlüsse vergleichbar zu machen.

GER

GER steht für:

Gemeinsamer Europäischer Referenzrahmen für Sprachen

Er macht Sprachkompetenzen vergleichbar, beispielsweise über die bekannten Niveaus A1 bis C2.

Die Sitzung fasst die gemeinsame Funktion beider Instrumente so zusammen:

Leistungen sollen vergleichbar und messbar gemacht werden – auch länderübergreifend.

Merksatz:

DQR → Abschlussniveau

GER → Sprachniveau`},{id:"schulorganisation-108",document:"Schulorganisation",page:29,question:"Erklären Sie die wichtigsten Bestandteile des OES-Konzepts.",answer:`OES → mehr Eigenständigkeit + klare Ziele + Evaluation

Die Musterlösung in Sitzung 5 konzentriert sich auf drei zentrale Punkte:

klare Zielvereinbarungen zur Schulentwicklung,

Evaluation der Ergebnisse,

Zielvereinbarungen zwischen Regierungspräsidium und Schule,

gleichzeitig hohe Freiheitsgrade der einzelnen Schule, wie sie diese Entwicklung umsetzt.

Das Prinzip lässt sich deshalb gut so merken:

Der Staat gibt nicht jeden einzelnen Entwicklungsschritt vor. Schule und Schulaufsicht vereinbaren Ziele; die Schule erhält Gestaltungsspielraum bei deren Umsetzung und die Ergebnisse werden evaluiert.

Merksatz:

OES → Ziele vereinbaren – eigenständig umsetzen – Ergebnisse evaluieren.`},{id:"schulorganisation-109",document:"Schulorganisation",page:29,question:"Was haben das Startchancen-Programm und der Digitalpakt gemeinsam?",answer:`Beides → große staatlich finanzierte Förderprogramme

Die Musterlösung nennt zwei wesentliche Gemeinsamkeiten:

1. Finanzierung

Beide werden stark durch Bund und Länder finanziell gefördert.

2. Ziel

Beide sollen

Bildungschancen verbessern und

Schulen gezielt stärken.

Die Unterlage charakterisiert beide als große öffentlich finanzierte Reform- bzw. Investitionsprogramme. Mittel werden dabei nicht einfach überall gleich verteilt, sondern sollen gezielt dort eingesetzt werden, wo besonderer Bedarf besteht.

Merksatz:

Startchancen + Digitalpakt → Bund/Länder investieren gezielt in bessere Bildungsbedingungen.`}]}]},{id:"cluster-3",title:"Mitwirkung und Verantwortung in der Schule",topics:[{title:"Lehrkraft und Schulleitung",sources:[{document:"Schulrecht",pages:"14",page:14}],questions:[{id:"schulrecht-44",document:"Schulrecht",page:14,question:"Beschreiben Sie die Aufgaben eines Lehrers/einer Lehrerin?",answer:`§ 1 Abs. 2 SchG → Erziehungs- und Bildungsauftrag

Erziehen und Bilden der Schüler

§ 38 Abs. 6 SchG → pädagogische Verantwortung der Lehrkraft

Unterrichts- und Erziehungsarbeit in eigener pädagogischer Verantwortung im Rahmen der Vorschriften.

Zusätzlich

Aufsichtspflicht

Teilnahme an Konferenzen

Prüfungen und Leistungsfeststellungen durchführen`},{id:"schulrecht-45",document:"Schulrecht",page:14,question:"Worin besteht die Freiheit einer Lehrkraft?",answer:`§ 38 Abs. 6 SchG → pädagogische Verantwortung

Lehrkraft trägt die unmittelbare pädagogische Verantwortung für die Erziehung und Bildung der Schüler.

Freiheit bei der Gestaltung der Erziehungs- und Unterrichtsarbeit

gebunden an Vorschriften und Anordnungen

gebunden an Konferenzbeschlüsse

Ausgestaltung des Beurteilungsspielraums bei der Leistungsbewertung`},{id:"schulrecht-46",document:"Schulrecht",page:14,question:"Weshalb spricht man besser von pädagogischer Verantwortung als von pädagogischer Freiheit?",answer:`Pädagogische Freiheit suggeriert weitgehend freies Handeln

Treffender ist pädagogische Verantwortung:

eigene Entscheidungs- und Beurteilungsspielräume

aber gebunden an Gesetze, Bildungspläne, Weisungen und Konferenzbeschlüsse`},{id:"schulrecht-47",document:"Schulrecht",page:14,question:"Welche Aufgaben hat der Schulleiter/die Schulleiterin? (exemplarisch)",answer:`§ 41 Abs. 1 SchG → Aufgaben des Schulleiters

Er leitet und verwaltet die Schule

trägt die Verantwortung für geordneten Schulbetrieb

Praktische Aufgaben:

Aufnahme Entlassung Schüler

Aufstellung Stunden- und Aufsichtspläne

Vertretung der Schule nach außen

Weisungsbefugnisse Lehrkräften`}]},{title:"Lehrerkonferenzen",sources:[{document:"Schulrecht",pages:"7",page:7},{document:"Schulrecht",pages:"15-16",page:15}],questions:[{id:"schulrecht-49",document:"Schulrecht",page:15,question:"Beschreiben Sie die unterschiedlichen Lehrerkonferenzen hinsichtlich des Teilnehmerkreises, Vorsitz und Aufgaben.",answer:`§ 45 Abs. 2 SchG → Gesamtlehrerkonferenz (GLK)

Teilnehmer: alle Lehrkräfte

Vorsitz: Schulleiter

Aufgabe: Angelegenheiten der gesamten Schule

§ 46 SchG → Klassenkonferenz

Teilnehmer: Lehrkräfte der jeweiligen Klasse

Vorsitz: grundsätzlich Klassenlehrer

Aufgabe: Erziehungs- und Unterrichtsarbeit der Klasse

§ 46 SchG → Fachkonferenz

Teilnehmer: Lehrkräfte eines Faches/einer Fächergruppe

Vorsitz: bestimmte/gewählte Lehrkraft

Aufgabe: Angelegenheiten des Faches

z. B. fachliche Grundsätze, Leistungsmessung/-bewertung

§ 46 SchG → Abteilungskonferenz

Teilnehmer: Lehrkräfte der jeweiligen Abteilung

Vorsitz: grundsätzlich Abteilungsleiter

Aufgabe: Angelegenheiten der Abteilung

Merksatz:

GLK → Schule | Klassenkonferenz → Klasse | Fachkonferenz → Fach | Abteilungskonferenz →

Abteilung.`},{id:"schulrecht-50",document:"Schulrecht",page:16,question:"Was versteht man unter dem Beanstandungsrecht des Schulleiters im Rahmen einer Konferenz?",answer:`§ 44 SchG

Beschlüsse der Lehrerkonferenz → grundsätzlich auch für Schulleiter bindend

Beschluss rechtswidrig → Schulleiter muss ihn beanstanden

innerhalb von 7 Unterrichtstagen → erneute Beratung der Konferenz

Konferenz bleibt bei Beschluss → Schulaufsichtsbehörde entscheidet

bis zur Entscheidung → Beschluss nicht ausführen`}]},{title:"Schulkonferenz",sources:[{document:"Schulrecht",pages:"16",page:16}],questions:[{id:"schulrecht-51",document:"Schulrecht",page:16,question:"Wie setzt sich die Schulkonferenz an Beruflichen Schulen zusammen?",answer:`§ 47 SchG → Schulkonferenz

gemeinsames Organ der Schule

Größere berufliche Schulen → 16 Mitglieder

4 Vertreter Schule/Lehrkräfte

4 Elternvertreter

4 Schülervertreter

4 Vertreter der Berufserziehung / Ausbildungsbetriebe

→ paritätische Besetzung

Vorsitz

Schulleiter

Stellvertretender Vorsitz

Elternbeiratsvorsitzender`},{id:"schulrecht-52",document:"Schulrecht",page:16,question:"Welche Aufgaben hat die Schulkonferenz? (exemplarisch)",answer:`§ 47 Abs. 3 → Entscheidungsrecht

Schulkonferenz entscheidet selbst

z. B.:

Unterrichtsbeginn

zusätzliche unterrichtsfreie Tage

Schulpartnerschaften

Anforderung von Haushaltsmitteln

§ 47 Abs. 4 → Anhörungsrecht

Schulkonferenz muss angehört werden

z. B.:

allgemeine Fragen von Erziehung und Unterricht

Schulversuche

Änderung der Schulart

bestimmte E&O-Maßnahmen

§ 47 Abs. 5 → Einverständnis

Entscheidung nur mit Einverständnis der Schulkonferenz

z. B.:

Schul- und Hausordnung

allgemeine Regelungen zu Klassenarbeiten und Hausaufgaben

Grundsätze für Klassenfahrten / außerunterrichtliche Veranstaltungen`}]},{title:"Eltern und Schülermitverantwortung",sources:[{document:"Schulrecht",pages:"17-18",page:17},{document:"Schulorganisation",pages:"3",page:3}],questions:[{id:"schulrecht-53",document:"Schulrecht",page:17,question:"Wer hat generell das Sorgerecht bei Kindern?",answer:`§§ 1626 ff. BGB → elterliche Sorge

verheiratete Eltern → grundsätzlich beide gemeinsam

getrennte/geschiedene Eltern → grundsätzlich weiterhin beide gemeinsam

Ausnahme → Familiengericht überträgt Alleinsorge

§ 1626a BGB → nicht verheiratete Eltern

gemeinsame Sorge z. B. durch Sorgeerklärung, Heirat oder Familiengericht

sonst grundsätzlich → Mutter allein

Vormundschaft

elterliche Sorge → Vormund

Für die Schule

grundsätzlich von gemeinsamer Sorge ausgehen, solange nichts Gegenteiliges bekannt ist`},{id:"schulrecht-54",document:"Schulrecht",page:17,question:"Welche Auswirkung hat die Volljährigkeit auf das Sorgerecht?",answer:`BGB → Volljährigkeit mit 18 Jahren

elterliches Sorgerecht endet

Schüler entscheidet und handelt selbst

§ 55 Abs. 3 SchG → schulische Mitwirkung

bestimmte Mitwirkungsrechte der Eltern bleiben trotz Volljährigkeit bestehen

Folge für die Schule

volljähriger Schüler nimmt Rechte und Pflichten selbst wahr

z. B. Entschuldigungen, An-/Abmeldung

Eltern sind grundsätzlich nicht mehr die gesetzlichen Vertreter`},{id:"schulrecht-55",document:"Schulrecht",page:17,question:"Wie und in welchen Gremien wirken Eltern an der schulischen Erziehung mit?",answer:`Mitwirkung der Eltern – §§ 55 ff. SchG

Eltern wirken an der schulischen Erziehung insbesondere über folgende Gremien mit:

§ 56 SchG → Klassenpflegschaft

Ebene → Klasse

Eltern + Lehrkräfte

Beratung über Erziehungs- und Unterrichtsarbeit

§ 57 SchG → Elternbeirat

Ebene → Schule

vertritt die Interessen der Eltern

§ 58 SchG → Gesamtelternbeirat

Ebene → Schulträger

Vertreter der Elternbeiräte der Schulen

§ 60 SchG → Landeselternbeirat

Ebene → Land

berät das Kultusministerium

§ 47 SchG → Schulkonferenz

Eltern wirken an wichtigen schulischen Entscheidungen mit

gemeinsam mit Schulleitung, Lehrkräften und Schülern`},{id:"schulrecht-56",document:"Schulrecht",page:18,question:"Wie werden Schülerinnen und Schüler an der Gestaltung des Schullebens beteiligt?",answer:`§§ 62 ff. SchG → Schülermitverantwortung (SMV)

Mitwirkung der Schüler am Schulleben

Klassensprecher → Klassenebene

Schülerrat + Schülersprecher → Schulebene

Verbindungslehrer → beraten und unterstützen die SMV

§ 47 SchG → Schulkonferenz

Beteiligung durch Schülervertreter in der Schulkonferenz

SMV-Verordnung → nähere Ausgestaltung

regelt Organisation, Wahl und Aufgaben der SMV`},{id:"schulrecht-57",document:"Schulrecht",page:18,question:"Wo wirkt die SMV mit?",answer:`§ 62 SchG → Aufgaben der SMV

Interessen der Schüler vertreten

Mitwirkung bei der Gestaltung des Schullebens

Förderung fachlicher, sportlicher, kultureller, sozialer und politischer Interessen der Schüler

§ 47 SchG → Schulkonferenz

Mitwirkung durch Schülervertreter in der Schulkonferenz

§ 10 SMV-VO → Lehrerkonferenzen

Schülervertreter können bei bestimmten Angelegenheiten an Lehrerkonferenzen beteiligt werden`},{id:"schulorganisation-9",document:"Schulorganisation",page:3,question:"Wie berücksichtigen Sie das Mitbestimmungsrecht der Eltern?",answer:`Eltern besitzen eigene Erziehungsrechte. Schule und Elternhaus haben daher unterschiedliche, aber miteinander verbundene Erziehungsaufträge.

Praktisch bedeutet das beispielsweise:

Eltern informieren,

Beratungsgespräche führen,

Elternvertretung beteiligen,

gesetzlich vorgesehene Beteiligungsrechte beachten.

Das bedeutet aber nicht, dass Eltern über Unterrichtsinhalte oder schulische Regeln individuell bestimmen können. Aufgrund der staatlichen Schulhoheit darf der Staat etwa verbindlichen Unterricht und Schulpflicht festlegen.`}]}]},{id:"cluster-4",title:"Schulpflicht und Teilnahme am Unterricht",topics:[{title:"Grundbegriffe und zeitlicher Verlauf",sources:[{document:"Schulrecht",pages:"18-20",page:18},{document:"Schulorganisation",pages:"5-6",page:5},{document:"Schulorganisation",pages:"28",page:28}],questions:[{id:"schulrecht-58",document:"Schulrecht",page:18,question:"Was versteht man unter der Schulpflicht? Wann beginnt und endet sie bzw. wie erfüllt man sie?",answer:`§ 72 SchG → Schulpflicht

Pflicht zum regelmäßigen Besuch des Unterrichts

Teilnahme an verbindlichen Schulveranstaltungen

§ 73 SchG → Beginn

grundsätzlich mit 6 Jahren

Stichtag: 30. Juni

§ 74 SchG → Ausnahmen

Regelungen zu vorzeitiger Aufnahme / Zurückstellung

§ 75 SchG → Dauer Vollzeitschulpflicht

Grundschule → mindestens 4 Jahre

anschließend weiterführende Schule → mindestens 5 Jahre

insgesamt grundsätzlich 9 Schuljahre

§ 78 SchG → Berufsschulpflicht

anschließend grundsätzlich 3 Jahre Berufsschulpflicht

§ 76 SchG → Erfüllung

durch Besuch einer öffentlichen Schule

oder einer entsprechenden Ersatzschule`},{id:"schulrecht-59",document:"Schulrecht",page:18,question:"Was ist die Berufsschulpflicht und wie erfüllt man sie?",answer:`§ 77 SchG → Berufsschulpflicht

beginnt grundsätzlich nach Ende der allgemeinen Schulpflicht

betrifft Jugendliche, die keine weiterführende allgemeinbildende oder berufliche Vollzeitschule besuchen

§ 78 SchG → Dauer

grundsätzlich 3 Jahre

grundsätzlich längstens bis Ende des Schuljahres, in dem das 18. Lebensjahr vollendet wird

bei Berufsausbildung → grundsätzlich bis zum Ende der Ausbildung

§ 79 SchG → Erfüllung

durch Besuch der zuständigen Berufsschule

§ 80 SchG → Ruhen

Berufsschulpflicht kann beim Besuch bestimmter anderer Bildungseinrichtungen ruhen

z. B. Berufsfachschule, Berufskolleg, Hochschule`},{id:"schulrecht-60",document:"Schulrecht",page:19,question:"Worin unterscheiden sich Schulpflicht und Teilnahmepflicht?",answer:`§§ 72 ff. SchG → Schulpflicht

gesetzliche Pflicht zum Schulbesuch

gilt für schulpflichtige Schüler

§ 1 SchulbesuchsVO → Teilnahmepflicht

gilt auch für nicht mehr schulpflichtige Schüler, die eine Schule besuchen

Pflicht zur regelmäßigen und ordnungsgemäßen Teilnahme

umfasst Unterricht und verbindliche Schulveranstaltungen`},{id:"schulrecht-61",document:"Schulrecht",page:20,question:"Die Schulpflicht und die Teilnahmepflicht beinhalten beide eine Verhaltenspflicht? Was steckt diesbezüglich dahinter?",answer:`§ 72 Abs. 3 SchG → schulpflichtige Schüler

regelmäßiger Besuch des Unterrichts

Teilnahme an verbindlichen Schulveranstaltungen

Schulordnung einhalten

§ 1 Abs. 1 SchulbesuchsVO → alle Schüler

Unterricht und verbindliche Schulveranstaltungen regelmäßig und ordnungsgemäß besuchen

Schulordnung einhalten

Daraus abgeleitet → Verhaltenspflicht

im Unterricht mitarbeiten

Hausaufgaben gewissenhaft erledigen

steht nicht ausdrücklich im Gesetz, laut Skript unbestrittene Rechtsauffassung

Beispiel:

§ 72 Abs. 3 SchG: Schüler müssen den Unterricht regelmäßig besuchen.

Wenn „besuchen“ nur körperlich anwesend sein bedeuten würde, könnte ein Schüler:

jeden Tag erscheinen, sich hinsetzen, jede Mitarbeit verweigern und grundsätzlich nichts tun.

Formal wäre er dann anwesend – der Schulpflicht wäre aber inhaltlich kein sinnvoller Zweck mehr zu entnehmen.

Deshalb wird aus der Pflicht zur Teilnahme am Unterricht abgeleitet, dass der Schüler auch das tun muss, was für eine ordnungsgemäße Teilnahme notwendig ist:`},{id:"schulrecht-62",document:"Schulrecht",page:20,question:"Wer ist für die Erfüllung dieser Schulpflicht verantwortlich?",answer:`§ 85 Abs. 1 SchG

minderjährige Schüler → Erziehungsberechtigte

volljährige Schüler → selbst verantwortlich

§ 85 Abs. 2 SchG

bei Berufsschulpflichtigen → zusätzlich Ausbildende/Arbeitgeber

müssen den Schulbesuch ermöglichen`},{id:"schulorganisation-14",document:"Schulorganisation",page:5,question:"Erklären Sie die gesetzliche Regelung der Schulpflicht in Baden-Württemberg.",answer:`Schulpflicht → Pflicht zum Besuch einer Schule

Sie umfasst insbesondere:

allgemeine Schulpflicht,

Berufsschulpflicht.

Davon zu unterscheiden ist die Schulbesuchspflicht: Wer schulpflichtig bzw. Schüler einer Schule ist, muss regelmäßig und ordnungsgemäß am Unterricht und den verbindlichen Veranstaltungen teilnehmen.

Für die Berufsschulpflicht nennt Sitzung 2 ausdrücklich die §§ 77–81 SchG, außerdem § 85 zur Verantwortlichkeit und § 92 zu Ordnungswidrigkeiten.

Fragen: Nochmal genau klären unterschied Schulpflicht und Schulbesuchspflicht`},{id:"schulorganisation-15",document:"Schulorganisation",page:5,question:"Wie lange dauert die allgemeine Schulpflicht und wann beginnt bzw. endet die Berufsschulpflicht?",answer:`Allgemeine Schulpflicht → grundsätzlich 9 Schuljahre

Anschließend kann Berufsschulpflicht bestehen.

Sie betrifft insbesondere Jugendliche nach Ende der allgemeinen Schulpflicht, die eine Berufsausbildung absolvieren bzw. noch berufsschulpflichtig sind.

Die detaillierten Regelungen befinden sich laut Präsentation in:

§ 77 SchG – Beginn,

§ 78 SchG – Dauer,

§ 78a SchG – AV/AVdual statt Berufsschule,

§ 79 SchG – Erfüllung,

§ 80 SchG – Ruhen,

§ 81 SchG – vorzeitige Beendigung.

Fragen: Paragrafen studieren`},{id:"schulorganisation-31",document:"Schulorganisation",page:8,question:"Wie ist die Schulpflicht in Deutschland geregelt?",answer:`Schulpflicht → Landesrecht

Da Schulrecht Ländersache ist, wird auch die konkrete Schulpflicht durch die Bundesländer geregelt.

In Baden-Württemberg insbesondere durch das Schulgesetz BW.

Dabei muss man unterscheiden:

Schulpflicht = grundsätzlich eine Schule besuchen müssen.

Schulbesuchspflicht = regelmäßig und ordnungsgemäß am Unterricht teilnehmen.

Berufsschulpflicht = Schulpflicht nach Ende der allgemeinen Schulpflicht im beruflichen Bereich.`},{id:"schulorganisation-104",document:"Schulorganisation",page:28,question:"Differenzieren Sie zwischen Schulpflicht, Schulbesuchspflicht und Berufsschulpflicht.",answer:`Hier würde ich mir die drei Begriffe sehr sauber auseinanderhalten:

Schulpflicht → überhaupt Schule besuchen

Allgemeine Pflicht, eine Schule zu besuchen.

Schulbesuchspflicht → tatsächlich teilnehmen

Pflicht, regelmäßig und pünktlich am Unterricht teilzunehmen.

Berufsschulpflicht → nach allgemeiner Schulpflicht

Pflicht, nach der allgemeinen Schulpflicht eine Berufsschule bzw. einen entsprechenden beruflichen Bildungsgang zu besuchen.

Sitzung 2 ordnet die Berufsschulpflicht insbesondere den §§ 77–81 SchG zu.

Merksatz:

Schulpflicht → muss zur Schule

Schulbesuchspflicht → muss tatsächlich hingehen

Berufsschulpflicht → Schulpflicht im beruflichen Bereich`}]},{title:"Fehlen, Befreiung und Beurlaubung",sources:[{document:"Schulrecht",pages:"20",page:20}],questions:[{id:"schulrecht-63",document:"Schulrecht",page:20,question:"Unterscheiden Sie Befreiung und Beurlaubung vom Unterricht. Wann entscheidet Lehrkraft – wann SL?",answer:`§ 3 SchulbesuchsVO → Befreiung

Befreiung von einzelnen Unterrichtsstunden / Schulveranstaltungen

1 Unterrichtsstunde → Fachlehrer

Schulveranstaltung → Klassenlehrer

sonst → Schulleiter

§ 4 SchulbesuchsVO → Beurlaubung

Befreiung vom Schulbesuch für einen bestimmten Zeitraum

nur in besonders begründeten Ausnahmefällen

bis 2 unmittelbar aufeinanderfolgende Unterrichtstage → Klassenlehrer

bestimmte kirchliche Veranstaltungen → Klassenlehrer

sonst → Schulleiter`},{id:"schulrecht-64",document:"Schulrecht",page:20,question:"Welche besonderen Regelungen gelten für den Fall einer versäumten Klassenarbeit?",answer:`§ 2 SchulbesuchsVO → Entschuldigung

Verhinderung unverzüglich mitteilen

spätestens am 2. Tag

Attest → keine generelle Pflicht, kann im Einzelfall verlangt werden

§ 8 Abs. 4 NVO → entschuldigtes Fehlen

Fachlehrer entscheidet, ob nachgeschrieben wird

§ 8 Abs. 5 NVO → unentschuldigtes Fehlen

Note 6 / 0 Punkte`}]}]},{id:"cluster-5",title:"Aufsicht, Sicherheit und Haftung",topics:[{title:"Zweck und Personenkreise",sources:[{document:"Schulrecht",pages:"4-5",page:4}],questions:[{id:"schulrecht-7",document:"Schulrecht",page:4,question:"Was soll die Aufsichtspflicht an den Schulen grundsätzlich gewährleisten?",answer:`§ 1 SchG → Bildungs- und Erziehungsauftrag

Aufsichtspflicht = begleitende Pflicht des Lehrers

„Spiegelbild zur Schulpflicht“:

Schulpflicht → Schüler wird dem Einflussbereich der Eltern entzogen

Schule übernimmt während dieser Zeit die Aufsicht

Zweck der Aufsichtspflicht → Schutz vor Schäden

Schüler schützen → vor Personenschäden

Eigentum schützen → Eigentum der Schüler und des Schulträgers

Dritte schützen → vor Personen- und Sachschäden

Kurz:

Eigen-/Schülerschutz + Schutz von Eigentum + Fremdschutz`},{id:"schulrecht-8",document:"Schulrecht",page:4,question:"Unterscheiden Sie den beaufsichtigten, geschützten und aufsichtspflichtigen Personenkreis",answer:`§ 1 SchG → Grundlage der schulischen Aufsichtspflicht

Aufsichtspflicht = begleitende Pflicht zum Bildungs- und Erziehungsauftrag

Beaufsichtigter Personenkreis

grundsätzlich Schüler

insbesondere minderjährige Schüler

bei Volljährigen → keine Aufsicht im klassischen Sinn, aber Fürsorge-/ Verkehrssicherungspflichten

Geschützter Personenkreis

Schüler selbst

Lehrkräfte

Schulträger

Dritte

Schutz vor Personen- und Sachschäden

Aufsichtspflichtiger Personenkreis

jeweils unterrichtende Lehrkraft

vom Schulleiter zur Aufsicht eingeteilte Lehrkräfte

allgemeine Aufsichtspflicht aller Lehrkräfte gegenüber allen Schülern

auch Dritte möglich, z. B. Eltern/Ehepartner bei Klassenfahrten

auch ältere Schüler im Rahmen des inneren Schulbetriebs

Merksatz:

Beaufsichtigt → auf wen passe ich auf?

Geschützt → wen/was soll ich schützen?

Aufsichtspflichtig → wer muss aufpassen?`},{id:"schulrecht-12",document:"Schulrecht",page:5,question:"Woher kommt die Aufsichtspflicht und wie wird sie gerechtfertigt?",answer:`Art. 6 Abs. 2 GG → elterliche Sorge und Aufsicht

§ 72 SchG → Schulpflicht → Kind befindet sich während der Schulzeit nicht im Aufsichtsbereich der Eltern

Schule muss die erforderliche Aufsicht gewährleisten.`}]},{title:"Umfang und praktische Durchführung",sources:[{document:"Schulrecht",pages:"5-6",page:5}],questions:[{id:"schulrecht-9",document:"Schulrecht",page:5,question:"In welchem zeitlichen und örtlichen Rahmen bewegt sich die Aufsichtspflicht?",answer:`Zeitlicher Rahmen

Unterrichtszeit

Pausen

angemessene Zeit vor Unterrichtsbeginn → ca. 10–15 Min.

angemessene Zeit nach Unterrichtsende

Hohlstunden, solange SuS auf dem Schulgelände sind

bei allen schulischen Veranstaltungen

Örtlicher Rahmen

gesamtes Schulgelände

Orte schulischer Veranstaltungen

Unterrichtswege → Wege zwischen verschiedenen Orten schulischer Veranstaltungen

Schulbushaltestelle, wenn in unmittelbarer Nähe der Schule

nicht: normaler Schulweg

nicht: Beförderung im Schulbus

Rechtsgrundlage nach Denig

keine einzelne Vorschrift, die diesen Umfang vollständig festlegt

Aufsichtspflicht = begleitende Pflicht zum Bildungs- und Erziehungsauftrag aus § 1 SchG

Merksatz:

Zeitlich → solange Schule verantwortlich ist.

Örtlich → schulischer Verantwortungsbereich, nicht normaler Schulweg.`},{id:"schulrecht-10",document:"Schulrecht",page:5,question:"Was versteht man unter den Grundsätzen der Aufsichtspflicht?",answer:`Prävention

Gefahren vorausschauend erkennen und verhindern.

Kontinuität

Aufsicht muss grundsätzlich ununterbrochen gewährleistet sein.

Aktivität

Regeln kontrollieren und bei Verstößen konsequent reagieren.`},{id:"schulrecht-11",document:"Schulrecht",page:5,question:"Welche Frage sollte man sich im Bezug auf die Aufsichtspflicht immer stellen?",answer:`Leitfrage der Aufsichtspflicht:

„Habe ich in der konkreten Situation alles Zumutbare und Erforderliche getan, um vorhersehbare Schäden zu verhindern?“`},{id:"schulrecht-13",document:"Schulrecht",page:6,question:"Welche Besonderheiten gilt es bei Schulausflügen und Klassenfahrten zu beachten?",answer:`Risiken vermindern durch Regeln

Ausgang nur in Gruppen von 3 SuS

Ende des Ausgangs verbindlich festlegen

ggf. Verbote aussprechen

Kontrollfrage:

→ „Kann ich bei normalem Verlauf damit rechnen, dass den SuS nichts passiert?“

Dritte können Aufsicht übernehmen

z. B. Eltern oder Ehepartner bei Klassenfahrten/Ausflügen

auf Unterrichtswegen:

geeigneten Weg auswählen

Schüler belehren

Belehrung im Klassenbuch vermerken

Gefahrenquellen beseitigen

Denigs Kern:

Nicht Dauerüberwachung, sondern Risiken vorausschauend durch konkrete Regeln so reduzieren, dass bei normalem Verlauf nichts passiert.`}]},{title:"Rechtsfolgen und Unfallversicherung",sources:[{document:"Schulrecht",pages:"6",page:6}],questions:[{id:"schulrecht-14",document:"Schulrecht",page:6,question:"Welche grundsätzlichen Rechtsfolgen können Aufsichtspflichtverletzungen nach sich ziehen?",answer:`§ 839 BGB + Art. 34 GG → Zivilrecht

Schadensersatz

Grundsätzlich haftet der Staat

Rückgriff auf Lehrkraft bei Vorsatz / grober Fahrlässigkeit möglich

§§ 229, 222 StGB → Strafrecht

§ 229 StGB → fahrlässige Körperverletzung

§ 222 StGB → fahrlässige Tötung

§§ 1, 8 LDG → Dienstrecht

Aufsichtspflichtverletzung kann Dienstvergehen darstellen

→ Disziplinarverfahren möglich

GEW: LDG ab S. 329

§ 25 LDG → mögliche Disziplinarmaßnahmen (GEW: S. 302 ff.)

Verweis

Geldbuße

Kürzung der Bezüge

Zurückstufung

Entfernung aus dem Beamtenverhältnis

Denig → Voraussetzung

Zusammenhang zwischen Aufsichtspflichtverletzung und Schaden

Frage: Wäre der Schaden auch bei ordnungsgemäßer Aufsicht eingetreten?

Merksatz

Zivilrecht → Schadensersatz | Strafrecht → Strafe | Dienstrecht → Disziplinarverfahren.`},{id:"schulrecht-15",document:"Schulrecht",page:6,question:"Was ist die sogenannte Schülerunfallversicherung und wozu gibt es sie?",answer:`S. 992 GEW.

§ 2 Abs. 1 Nr. 8 SGB VII → gesetzliche Unfallversicherung

Schüler sind gesetzlich unfallversichert

während des Schulbesuchs

bei schulischen Veranstaltungen

§ 8 SGB VII → Wegeunfall

Versicherung auf dem unmittelbaren Schulweg

Zweck

Absicherung der Folgen eines Schulunfalls

grundsätzlich unabhängig von Verschulden oder Aufsichtspflichtverletzung

Merksatz:

Unterricht + Schulveranstaltung + Schulweg → gesetzlich unfallversichert.`}]}]},{id:"cluster-6",title:"Leistungserhebung, Noten und Prüfungssituationen",topics:[{title:"Grundlagen der Bewertung",sources:[{document:"Schulrecht",pages:"7-9",page:7}],questions:[{id:"schulrecht-17",document:"Schulrecht",page:7,question:"Was versteht man unter dem pädagogischen Beurteilungsfreiraum? Wie unterscheiden sich Leistungserhebung und Leistungsbewertung im Hinblick auf diesen?",answer:`NVO → pädagogischer Beurteilungsspielraum

Lehrer soll Kenntnisse aber auch Werte vermitteln, dazu braucht er päd. Freiraum, aber auch Beurteilungsspielraum, daher enthällt NVO nur Mindestregelungen um Chancengleichheit zu gewährleisten

Leistungserhebung → Wie wird die Leistung erhoben?

§ 45 SchG → GLK: Beschlüsse über allgemeine Fragen der Unterrichtsarbeit

§ 47 SchG → Schulkonferenz: Mitwirkung/Zustimmung bei entsprechenden GLK-Beschlüssen

dadurch können schulweit verbindliche Regelungen zur Leistungserhebung entstehen

§ 56 SchG → Klassenpflegschaft: nur Unterrichtung und Aussprache, keine schulweit verbindliche Festlegung

Bspl: Die NVO schreibt nicht generell vor, dass auf jeder zurückgegebenen Klassenarbeit der Klassendurchschnitt angegeben werden muss.

Merkkette: GLK beschließt → Schulkonferenz wirkt mit → schulweit verbindlich

Leistungsbewertung → Wie wird die Leistung bewertet?

§ 5 Konferenzordnung i. V. m. § 45 Abs. 2 SchG → Fachkonferenz

kann Festlegungen treffen zu:

Notengebung

Leistungsmessung

Gewichtung verschiedener Leistungsarten

gemeinsamen Bewertungskriterien

Leistungsrückmeldung

Ausnahme: Weist die NVO eine Entscheidung ausdrücklich dem Fachlehrer zu → Fachkonferenz/ GLK dürfen nur Empfehlungen geben.`},{id:"schulrecht-18",document:"Schulrecht",page:7,question:"Wie setzt man die Vorgabe der Notentransparenz praktisch um?",answer:`Notentransparenz (§ 7 NVO)

Zu Beginn Gewichtung der schriftlichen, mündlichen und praktischen Leistungen bekannt geben

bei Leistungsfeststellungen Bewertungskriterien bzw. Punkte- und Notenverteilung transparent machen

Schriftliche und mündliche Noten auf Nachfrage offenlegen.`},{id:"schulrecht-19",document:"Schulrecht",page:7,question:"Wozu werden Noten erteilt?",answer:`§ 1 NVO → Zweck der Notengebung

Kontrolle des Lernfortschritts

Entscheidungsgrundlage für den weiteren Bildungsgang

Bestätigung des Lernerfolges

Hinweise für den weiteren Lernfortgang

Zusätzliches Ziel der Leistungsbeurteilung nach Denig

Chancengleichheit

Chancengerechtigkeit der Schüler

dabei besteht ein pädagogischer Beurteilungsspielraum der Lehrkraft.`},{id:"schulrecht-20",document:"Schulrecht",page:8,question:"Welche Arten von Schüler-Leistungen können festgestellt werden?",answer:`§ 7 Abs. 1 NVO → Arten der Leistungen

schriftliche Leistungen

mündliche Leistungen

praktische Leistungen`},{id:"schulrecht-21",document:"Schulrecht",page:8,question:"Was versteht man unter einer „pädagogisch-fachlichen Gesamtwertung“?",answer:`§ 7 NVO → Bildung der Fachnote

Fachnote ist kein rein rechnerischer Durchschnitt der Einzelnoten

berücksichtigt schriftliche, mündliche und praktische Leistungen

einzelne Leistungsarten werden entsprechend ihrer Gewichtung berücksichtigt

Lehrkraft nimmt eine pädagogisch-fachliche Gesamtwertung vor

dabei besteht ein pädagogischer Beurteilungsspielraum

Bewertung muss leistungsbezogen und nachvollziehbar sein

Merksatz:

Fachnote ≠ Notendurchschnitt → Gesamtwürdigung aller Leistungen durch die Fachlehrkraft.`},{id:"schulrecht-24",document:"Schulrecht",page:9,question:"Welchen Fragen einer juristischen Überprüfung muss eine Note standhalten?",answer:`Art. 3 Abs. 1 GG → Gleichbehandlungsgrundsatz

§ 7 NVO → allgemeine Grundsätze der Leistungsbewertung

Juristische Überprüfung einer Note:

Verfahrensfehler

z. B. zulässige Hilfsmittel wurden einzelnen Schülern nicht erlaubt.

Notentransparenz wurde am Anfang des Jahres nicht mitgeteilt

Unrichtige Tatsachen zugrunde gelegt

0 Punkten, weil Schüler nichts geschrieben, obwohl Rückseite voll

Allgemeine Bewertungsgrundsätze missachtet

Bei zwei inhaltlich gleichwertigen Antworten bekommt ein Schüler deutlich weniger Punkte.

Sachfremde Erwägungen berücksichtigt

Eine Note wird schlechter vergeben, weil der Schüler häufig zu spät kommt

Fachlich richtige/vertretbare Lösung nicht gewertet

In Mathematik löst ein Schüler die Aufgabe mit einem anderen, aber fachlich korrekten Lösungsweg; die Lehrkraft gibt trotzdem 0 Punkte, weil es nicht der erwartete Lösungsweg war.

Die fachlich-pädagogische Bewertung selbst unterliegt dem Beurteilungsspielraum der Lehrkraft.`}]},{title:"Fachnoten und Kopfnoten",sources:[{document:"Schulrecht",pages:"9-10",page:9}],questions:[{id:"schulrecht-25",document:"Schulrecht",page:9,question:"Unterscheiden Sie Leistungsnoten von Kopfnoten. Gehen Sie dabei auch auf die Notenbeschreibung ein.",answer:`Leistungsnoten (§ 5 NVO): Bewerten die fachliche Leistung anhand der Anforderungen des Bildungs-/Lehrplans. Noten 1–6. Verhalten darf nicht in die Fachnote einfließen.

Kopfnoten (§ 6 NVO): Bewerten Verhalten und Mitarbeit. Noten sehr gut, gut, befriedigend, unbefriedigend. „Gut“ bedeutet, dass die Erwartungen erfüllt werden; „sehr gut“, dass Verhalten bzw. Mitarbeit besondere Anerkennung verdienen.`},{id:"schulrecht-26",document:"Schulrecht",page:9,question:"Wie kommen mündliche Noten zustande? Wie unterscheiden sie sich von der Mitarbeitsnote?",answer:`Mündliche Note (§ 7 NVO): Leistungsnote für die fachliche Qualität mündlich erbrachter Leistungen, z. B. Unterrichtsbeiträge, Abfragen oder Präsentationen.

Mitarbeitsnote (§ 6 NVO): Kopfnote; bewertet vor allem den Arbeitswillen und die Bereitschaft zur Mitarbeit, nicht die fachliche Qualität der Leistung.`},{id:"schulrecht-27",document:"Schulrecht",page:10,question:"Inwieweit können/dürfen Noten ein Sanktionsinstrument sein?",answer:`§ 5 NVO → Leistungsnoten

Fachnoten bewerten ausdrücklich die Leistung des Schülers.

Die Notenstufen werden danach definiert, inwieweit die Leistung den Anforderungen entspricht.

§ 6 NVO → Verhalten und Mitarbeit

Verhalten und Mitarbeit werden davon getrennt beurteilt.

„Verhalten“ umfasst ausdrücklich das Betragen und die Zusammenarbeit.

Daraus folgt die saubere Trennung: Noten dürfen grundsätzlich nicht als Sanktionsinstrument eingesetzt werden, sondern müssen den Leistungsstand abbilden.

§ 8 Abs. 5 NVO: Bei Verweigerung einer schriftlichen Arbeit bzw. unentschuldigtem Versäumnis wird „ungenügend“ erteilt.`}]},{title:"Schriftliche Arbeiten und Nachteilsausgleich",sources:[{document:"Schulrecht",pages:"8",page:8},{document:"Schulrecht",pages:"10",page:10},{document:"Schulrecht",pages:"20",page:20}],questions:[{id:"schulrecht-22",document:"Schulrecht",page:8,question:"Welche grundsätzlichen Regelungen sind im § 8 NVO festgehalten?",answer:`§ 8 Abs. 1 NVO → Klassenarbeiten

überprüfen einen größeren Unterrichtsabschnitt

werden in der Regel nach Abschluss einer Unterrichtseinheit durchgeführt

§ 8 Abs. 2 NVO → Schriftliche Wiederholungsarbeiten

überprüfen einen kleineren Unterrichtsabschnitt

beziehen sich auf die unmittelbar vorausgegangenen Unterrichtsstunden

dauern in der Regel bis zu 20 Minuten

§ 8 Abs. 3 NVO → Verteilung der schriftlichen Arbeiten

Klassenarbeiten und Wiederholungsarbeiten sollen gleichmäßig auf das Schuljahr verteilt werden

besondere Vorgaben zur zeitlichen Häufung

§ 8 Abs. 4 NVO → entschuldigtes Versäumnis

Fachlehrer entscheidet, ob der Schüler die versäumte Leistung nachträglich erbringen muss

§ 8 Abs. 5 NVO → Leistungsverweigerung / unentschuldigtes Versäumnis

Note „ungenügend“

§ 8 Abs. 6 NVO → Täuschung

Fachlehrer entscheidet über die Folgen eines Täuschungsversuchs

je nach Fall: Arbeit bewerten, Notenabzug, Neuanfertigung oder bei schwerer/wiederholter Täuschung „ungenügend“

§ 8 Abs. 7 NVO → mündliche und praktische Leistungen

Abs. 4–6 gelten entsprechend auch für mündliche und praktische Leistungen.`},{id:"schulrecht-23",document:"Schulrecht",page:8,question:"Unterscheiden Sie Klassenarbeiten und schriftliche Wiederholungsarbeiten.",answer:`Klassenarbeiten (§ 8 Abs. 1 NVO)

Überprüfen einen größeren Unterrichtsbereich

Ist in der Regel anzukündigen.

Es gibt begründete Ausnahmen

Schriftliche Wiederholungsarbeiten (§ 8 Abs. 2 NVO)

überprüfen den Unterrichtserfolg der unmittelbar vorangegangenen Unterrichtsstunden

In der Regel höchstens 20 Minuten.

Eine Ankündigung ist für sie nicht vorgeschrieben.`},{id:"schulrecht-28",document:"Schulrecht",page:10,question:"Inwieweit beeinflusst ein sog. Nachteilsausgleich die Leistungsfeststellung?",answer:`Art. 3 Abs. 1 GG → Chancengleichheit

Nachteile von Schülern mit besonderem Förderbedarf/Behinderungen dürfen bzw. müssen ausgeglichen werden.

Verwaltungsvorschrift „Kinder und Jugendliche mit besonderem Förderbedarf und Behinderungen“ → konkrete Regelung

Anforderungsprofil bleibt gleich

möglichkeit zur Chancengleichheit:

mehr Arbeitszeit

technische Hilfen

didaktisch-methodische Hilfen

angepasste äußere Rahmenbedingungen

Entscheidung → Klassen-/Jahrgangsstufenkonferenz unter Vorsitz des Schulleiters

Maßnahmen sind für Fachlehrer bindend

kein Vermerk im Zeugnis

Merksatz:

Nachteil ausgleichen ≠ Anforderungen senken.`},{id:"schulrecht-29",document:"Schulrecht",page:10,question:"Welche Regelungen gelten bezüglich der Abgabe von Entschuldigungen im Hinblick auf die Klassenarbeiten?",answer:`§ 8 Abs. 4 NVO → entschuldigtes Versäumnis (unverzüglich, spätestens am zweiten Tag)

Fachlehrer entscheidet, ob die Arbeit nachgeschrieben werden muss

§ 8 Abs. 5 NVO → unentschuldigtes Versäumnis

Note „ungenügend“`}]},{title:"Täuschung und Beweisfragen",sources:[{document:"Schulrecht",pages:"10-11",page:10}],questions:[{id:"schulrecht-30",document:"Schulrecht",page:10,question:"Welche Überlegungen sollten Sie für den Umgang mit einer Täuschungshandlung bei einer Klassenarbeit anstellen?",answer:`§ 8 Abs. 6 NVO → Fachlehrer entscheidet

normale Bewertung möglich? → normal bewerten

nicht möglich? → Notenabzug oder Arbeit wiederholen

schwere oder wiederholte Täuschung → Note 6 möglich`},{id:"schulrecht-31",document:"Schulrecht",page:10,question:"Wie unterscheidet sich die Vorgehensweise zu einer beobachteten Täuschungshandlung im Rahmen einer Prüfung?",answer:`Täuschung bei einer Prüfung (Es gilt die jeweilige Prüfungsordnung des Bildungsganges/ Viel strenger/ )

Täuschung/Verdacht feststellen

Sachverhalt protokollieren

Schüler weiterschreiben lassen

zuständige Prüfungsleitung / Prüfungsausschuss entscheidet

Eine festgestellte Täuschung führt grundsätzlich zum Ausschluss und Nichtbestehen

Bereits das Mitführen unerlaubter Hilfsmittel nach Bekanntgabe der Aufgaben sowie die Beihilfe zur Täuschung gelten als Täuschungshandlung.`},{id:"schulrecht-32",document:"Schulrecht",page:11,question:"Wie ist mit der sogenannten Beihilfe zur Täuschungshandlung umzugehen?",answer:`§ 8 Abs. 6 NVO → normale Klassenarbeit

Abschreibenlassen ≠ eigene Täuschung des Helfers

ggf. pädagogische/E&O-Maßnahme (§ 90 SchG)

Prüfungsordnung → Prüfung

Beihilfe gilt selbst als Täuschungshandlung

entsprechende Prüfungssanktionen möglich`},{id:"schulrecht-33",document:"Schulrecht",page:11,question:"Was versteht man unter dem Beweis des ersten Anscheins?",answer:`Wenn ein Geschehen nach allgemeiner Lebenserfahrung typischerweise auf eine bestimmte Ursache zurückzuführen ist, darf zunächst vom Vorliegen dieser Ursache ausgegangen werden.

Beispiel:

Bei auffällig identischen Schülerlösungen kann daher eine Täuschung angenommen werden, auch wenn das Abschreiben nicht unmittelbar beobachtet wurde.`},{id:"schulrecht-34",document:"Schulrecht",page:11,question:"Warum spricht Denig von „Beweislastumkehr“?",answer:`Normalerweise: Schule/Lehrkraft muss die Täuschung nachweisen. Beim Anscheinsbeweis liegen aber so typische Indizien vor, dass zunächst von der Täuschung ausgegangen werden darf. Nun muss der Schüler Umstände darlegen bzw. nachweisen, die einen anderen Ablauf plausibel machen. Gelingt ihm das, muss die Täuschung wieder vollständig bewiesen werden.

Ein weiteres Beispiel aus Denigs Folie: Ein Schüler schreibt eine Antwort wortwörtlich wie im Schulbuch. Dann kann durch eine mündliche Nachfrage geprüft werden, ob er den Text tatsächlich auswendig beherrscht oder unerlaubt übernommen hat.`}]}]},{id:"cluster-7",title:"Pädagogische Maßnahmen und Konfliktfälle",topics:[{title:"Maßnahmen unterscheiden",sources:[{document:"Schulrecht",pages:"12-14",page:12}],questions:[{id:"schulrecht-35",document:"Schulrecht",page:12,question:"Unterscheiden Sie grundsätzlich pädagogische Maßnahmen von Erziehungs- und Ordnungsmaßnahmen nach §90 SchG hinsichtlich Regelungsgrundlage, Rechtsqualität und Rechtsschutz. (Gute Übersicht §90 SchG im GEW-Handbuch. Dieses kann in der Prüfung verwendet werden.)",answer:`Pädagogische Maßnahmen (§ 23 Abs. 2 SchG) → Verwaltungshandeln

Sie sind nicht abschließend geregelt

bleiben unterhalb der Eingriffsintensität einer E&O-Maßnahme

sind rechtlich schlichtes Verwaltungshandeln.

Gegen sie kommt insbesondere eine Fachaufsichtsbeschwerde in Betracht.

Erziehungs- und Ordnungsmaßnahmen (§ 90 SchG) → Verwaltungsakt

sind ausschließlich und abschließend geregelt.

Wegen ihres intensiveren Eingriffs in Schülerrechte haben sie die Rechtsqualität eines Verwaltungsakts.

Dagegen sind Widerspruch und Anfechtungsklage möglich.`},{id:"schulrecht-43",document:"Schulrecht",page:14,question:"Ist es möglich – und wenn ja, auf welcher rechtlichen Grundlage – SuS präventiv vom Unterricht auszuschließen?",answer:`§ 23 Abs. 2 SchG → präventive Maßnahme

Ausschluss vor einem befürchteten Fehlverhalten möglich

dient der Aufrechterhaltung der Ordnung des Schulbetriebs bzw. Erfüllung der schulischen Aufgaben

nur wenn erforderlich

eng auszulegen

§ 90 SchG → E&O-Maßnahme

setzt grundsätzlich ein bereits erfolgtes Fehlverhalten voraus

daher nicht die Grundlage für einen rein präventiven Ausschluss

Merksatz:

Fehlverhalten passiert → § 90 SchG

Gefahr vorbeugen → § 23 Abs. 2 SchG`}]},{title:"Verhältnismäßigkeit und Zuständigkeit",sources:[{document:"Schulrecht",pages:"12-13",page:12}],questions:[{id:"schulrecht-36",document:"Schulrecht",page:12,question:"Was versteht man unter dem Grundsatz der Verhältnismäßigkeit und welche Bedeutung hat er bei E&O-Maßnahmen?",answer:`Geeignetheit → einen der Zwecke aus § 90 Abs. 1 SchG erreichen

Erforderlich → Ist die Maßnahme überhaupt notwendig, um den Zweck zu erreichen?

mildeste Maßnahme → geringste Belastung für den Schüler

Angemessenheit → Schwere der Strafe muss der Schwere des Vergehens entsprechen`},{id:"schulrecht-37",document:"Schulrecht",page:12,question:"Welche E&O-Maßnahmen sind nach §90 SchG möglich? Welche kann die Lehrkraft / die SL veranlassen?",answer:`Lehrkraft

Nachsitzen bis 2 Unterrichtsstunden.

Schulleitung

Nachsitzen bis 4 Unterrichtsstunden

Überweisung in Parallelklasse

Androhung Unterrichtsausschluss

Unterrichtsausschluss bis 5 Unterrichtstage (berufliche Teilzeitschule: 1 Unterrichtstag)

mit Zustimmung der Klassenkonferenz Unterrichtsausschluss bis 4 Wochen,

Androhung des Schulausschlusses und Schulausschluss.`},{id:"schulrecht-39",document:"Schulrecht",page:13,question:"Was versteht man unter Kollektivstrafen und wann dürfen sie verhängt werden?",answer:`§ 90 Abs. 2 Satz 2 SchG → Kollektivstrafen unzulässig

Bestrafung mehrerer Schüler, weil der tatsächlich Schuldige nicht ermittelt werden kann

unzulässig

kein erzieherischer Wert

Maßnahmen gegen mehrere Schüler nur, wenn jedem Einzelnen eigenes Fehlverhalten nachgewiesen werden kann`}]},{title:"Verfahren und Rechtsschutz",sources:[{document:"Schulrecht",pages:"12-13",page:12}],questions:[{id:"schulrecht-38",document:"Schulrecht",page:12,question:"Wie wird die Rechtmäßigkeit von E&O-Maßnahmen geprüft?",answer:`Materielle Rechtmäßigkeit

Maßnahme muss dem Zweck des § 90 SchG dienen (§ 90 SchG Abs. 1)

Schweres oder wiederholtes Fehlverhalten

Grundsatz der Verhältnismäßigkeit

Schuldhaftes Verhalten

Formelle Rechtmäßigkeit

Anhörung des Schülers vor Erlass der Maßnahme

bei Schulleitermaßnahmen → formelles Anhörungsverfahren nach § 90 Abs. 7 SchG

→ nur wenn materiell + formell rechtmäßig, kann die Maßnahme bestehen.`},{id:"schulrecht-40",document:"Schulrecht",page:13,question:"Beschreiben Sie den Verfahrensgang bei E&O-Maßnahmen?",answer:`§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen

Befragung des Schülers

Sachverhalt/Tatvorwurf aufklären

noch keine Anhörung

Beabsichtigte Maßnahme festlegen

Grundsatz der Verhältnismäßigkeit beachten

Art der Anhörung unterscheiden

Nur Nachsitzen 2 h max. nachsitzen → formlose Anhörung des Schülers

Schüler erhält Gelegenheit, sich zu äußern

keine formelle Einladung der Eltern zur Anhörung

Weitergehende E&O-Maßnahmen → § 90 Abs. 7 SchG

Schüler und bei Minderjährigen grundsätzlich auch Erziehungsberechtigte werden über die beabsichtigte Maßnahme informiert

Gelegenheit zur Anhörung

entsprechende Einladung zur Anhörung

Anhörung durchführen

Betroffene können Stellung nehmen

Argumente müssen vor der Entscheidung berücksichtigt werden

Entscheidung

erst nach der Anhörung endgültig entscheiden

Entscheidung mitteilen`},{id:"schulrecht-41",document:"Schulrecht",page:13,question:"Wie kann man sich gegen eine Maßnahme nach §90 SchG wehren?",answer:`Gegen eine E&O-Maßnahme nach § 90 SchG kann der Betroffene

Widerspruch einlegen und anschließend

gegebenenfalls Anfechtungsklage vor dem Verwaltungsgericht erheben.

Dies ist möglich, weil E&O-Maßnahmen Verwaltungsakte sind.

Kann aber nicht aufgeschoben werden`},{id:"schulrecht-42",document:"Schulrecht",page:13,question:"Wie kann eine E&O-Maßnahme im Rahmen einer Klassenfahrt ausgeführt werden?",answer:`Grundlage ist § 90 SchG

Bei massivem Fehlverhalten während der Klassenfahrt:

Ausschluss von der weiteren Klassenfahrt möglich

Zuständig → ausschließlich Schulleiter

vorzeitige Heimreise

Aufsichtspflicht während der Heimreise beachten

Kosten der Heimreise → Schüler bzw. Erziehungsberechtigte

Nach Rückkehr → Schüler muss in einer Parallelklasse die Schule besuchen`}]}]},{id:"cluster-8",title:"Urheberrecht und Datenschutz",topics:[{title:"Unterrichtsmaterialien verwenden",sources:[{document:"Schulrecht",pages:"21",page:21}],questions:[{id:"schulrecht-65",document:"Schulrecht",page:21,question:"Welche Interessen werden mit dem Urheberrecht geschützt?",answer:`§ 11 UrhG

persönliche/geistige Interessen des Urhebers

wirtschaftliche Interessen`},{id:"schulrecht-66",document:"Schulrecht",page:21,question:"Warum gibt es ein Urheberrecht?",answer:`§§ 1, 11 UrhG → Schutz des Urhebers

Schutz geistiger und kreativer Leistungen

Schutz der persönlichen/geistigen Interessen

Schutz der wirtschaftlichen Interessen

Kontrolle über die Nutzung des eigenen Werkes

Sicherung einer angemessenen Vergütung`},{id:"schulrecht-67",document:"Schulrecht",page:21,question:"In welchem Umfang darf man aus Unterrichtswerken (Schulbüchern) Kopien anfertigen? Unter welchen Bedingungen ist dies erlaubt?",answer:`§ 60a UrhG → Unterricht und Lehre

bis zu 15 % eines veröffentlichten Werkes

für nicht kommerzielle Unterrichtszwecke

Nutzung für:

Lehrende und Teilnehmer der jeweiligen Unterrichtsveranstaltung

Lehrende und Prüfer derselben Bildungseinrichtung

Dritte zur Präsentation des Unterrichts oder von Unterrichtsergebnissen

erlaubt: vervielfältigen, verbreiten, öffentlich zugänglich machen und öffentlich wiedergeben

→ praktisch z. B. Kopien, digitale Bereitstellung, Beamer/Whiteboard § 60a UrhG`},{id:"schulrecht-68",document:"Schulrecht",page:21,question:"In welchem Umfang darf man aus Zeitschriften oder Zeitungen Kopien anfertigen? Unter welchen Bedingungen ist dies erlaubt?",answer:`§ 60a Abs. 2 UrhG → vollständige Nutzung

vollständige Nutzung u. a. von einzelnen Beiträgen aus Fachzeitschriften oder wissenschaftlichen Zeitschriften

gilt nicht allgemein für Artikel aus normalen Zeitungen/Publikumszeitschriften

Sonstiges:

§ 63 UrhG → Quellenangabe

grundsätzlich Quelle einschließlich Urheber angeben § 63 UrhG

Gesamtvertrag für Schulen → vertragliche Konkretisierung

→ Länder/Kultusministerien und Rechteinhaber regeln die praktische Umsetzung und Vergütung für Schulen.`}]},{title:"Personenbezogene Daten verarbeiten",sources:[{document:"Schulrecht",pages:"22",page:22}],questions:[{id:"schulrecht-69",document:"Schulrecht",page:22,question:"Welche Vorgaben gibt es zur Erfassung von personenbezogenen Daten? Was darf erfasst werden?",answer:`DSGVO → Grundsätze

Rechtmäßigkeit und Transparenz

Zweckbindung → nur für festgelegten schulischen Zweck

Datenminimierung → nur notwendige Daten

Richtigkeit

Speicherbegrenzung → nicht länger als nötig

Vertraulichkeit und Sicherheit

§ 1 SchG → schulische Aufgaben

Daten dürfen verarbeitet werden, soweit sie zur Erfüllung schulischer Aufgaben erforderlich sind

z. B. Name, Anschrift, Kontaktdaten, Noten, Fehlzeiten

keine Datenerhebung auf Vorrat`},{id:"schulrecht-70",document:"Schulrecht",page:22,question:"Wie sollte man mit personenbezogenen Daten generell umgehen?",answer:`DSGVO → allgemeine Grundsätze

Rechtmäßigkeit und Transparenz

Zweckbindung → nur für vorgesehenen Zweck

Datenminimierung → nur notwendige Daten

Richtigkeit

Speicherbegrenzung → Löschfristen beachten

Vertraulichkeit/Sicherheit → vor unbefugtem Zugriff schützen

Denig → konkrete Umsetzung in der Schule

personenbezogene Daten sicher und verschlüsselt speichern

private Geräte → nur mit Genehmigung der Schulleitung

keine unsicheren/nicht freigegebenen Cloud- oder Messenger-Dienste

Vertretungsplan → keine unnötigen personenbezogenen Angaben, z. B. Abwesenheitsgrund

Veröffentlichung von Namen/Fotos → grundsätzlich Einwilligung bzw. entsprechende

Rechtsgrundlage

nicht mehr benötigte Daten → löschen`},{id:"schulrecht-71",document:"Schulrecht",page:22,question:"Unter welchen Voraussetzungen dürfen personenbezogene Daten weitergegeben werden?",answer:`Art. 6 DSGVO → Rechtmäßigkeit

Weitergabe nur mit Rechtsgrundlage

z. B. wenn sie zur Erfüllung einer öffentlichen/schulischen Aufgabe erforderlich ist

alternativ → wirksame Einwilligung

Art. 5 DSGVO → Zweckbindung + Datenminimierung

nur für einen bestimmten zulässigen Zweck

nur die erforderlichen Daten weitergeben

Denig → für die Schule

Recht auf informationelle Selbstbestimmung

Einschränkung nur mit rechtlicher Grundlage

Veröffentlichung von Schülerdaten, z. B. Name/Bild auf Website → schriftliche Einwilligung

Denig betont: Daten dürfen nur verarbeitet werden, soweit dies für schulische Aufgaben

erforderlich ist.`}]}]},{id:"cluster-9",title:"Beamtenrecht und Personalvertretung",topics:[{title:"Zugang und Beamtenverhältnis",sources:[{document:"Schulrecht",pages:"23-24",page:23}],questions:[{id:"schulrecht-72",document:"Schulrecht",page:23,question:"Warum sind Lehrer/Innen in der Regel Beamte?",answer:`Art. 33 Abs. 4 GG

Da Lehrer hoheitsrechtliche Befugnis befugnisse haben, also staatliche Befugnisse, einseitig und verbindlich gegenüber dem Bürger zu handeln sollen sie von beamten ausgeführt werden, also denjenigen, die in einem besonderen öffentlich-rechtlichen Dienst und Treueverhältnis stehen.

§ 33 BeamtStG

Durch das Beamtentum sollen Rechtsstaatlichkeit, verfassungstreue, Verlässlichkeit und Neutralität gesichert werden

Art. 3 Abs 1 GG → allgemeiner Gleichheitssatz

Art. 11 Abs. 1 LV BW → Recht auf eine der Begabung entsprechenden Erziehung und Ausbildung

Durch den besonderen Bestandsschutz des Beamtenverhältnisses soll er weniger anfällig für äußeren Druck sein. Dadurch kann er Schüler eher gleich behandeln

§ 33 Abs. 1 BeamtStG

Fortbestand der Gesellschaft → Unabhängigkeit von Interessengruppen`},{id:"schulrecht-73",document:"Schulrecht",page:23,question:"Welche persönlichen Voraussetzungen muss man mitbringen, um Beamter werden zu können?",answer:`§ 7 Abs. 1 BeamtStG → Voraussetzungen für die Berufung

Staatsangehörigkeit

→ grundsätzlich Deutschland, EU/EWR bzw. entsprechend gleichgestellte Staaten

Verfassungstreue

→ Gewähr bieten, jederzeit für die freiheitliche demokratische Grundordnung einzutreten

Befähigung/Vorbildung

→ die für die jeweilige Laufbahn vorgeschriebene Befähigung besitzen

Art. 33 Abs. 2 GG + § 11 LBG BW → gesundheitliche Eignung

Art. 33 Abs. 2 GG → übergeordneter Grundsatz der Eignung

§ 11 LBG BW → konkrete Feststellung der gesundheitlichen Eignung

§ 48 LHO BW → Höchstaltersgrenze

Grundsätzlich 42 Jahre`},{id:"schulrecht-74",document:"Schulrecht",page:23,question:"Unter welchen Voraussetzungen wird die Ernennung wirksam?",answer:`§ 8 BeamtStG → Ernennung durch Aushändigung der Ernennungsurkunde

§ 9 Abs. 2 LBG → Wirksamkeit

Einwilligung des Beamten

Aushändigung der Urkunde

keine Rückwirkung

Merksatz: Einwilligung + Urkunde in die Hand = Ernennung wirksam.`},{id:"schulrecht-75",document:"Schulrecht",page:23,question:"Welche Arten von Beamtenverhältnissen werden unterschieden?",answer:`§ 4 BeamtStG

Es werden vier Arten unterschieden:

Beamter auf Widerruf → vor allem für Referendariat

Beamter auf Probe → Probezeit; es wird geprüft, ob sich der Beamte für eine spätere Verwendung auf Lebenszeit bewährt

Beamter auf Lebenszeit → dauerhaftes Beamtenverhältnis; das ist der Regelfall

Beamter auf Zeit → zeitlich befristet, z. B. Bürgermeister`},{id:"schulrecht-76",document:"Schulrecht",page:24,question:"Wie lange dauert die regelmäßige Probezeit für einen Beamten? Unter welchen Bedingungen kann sie verkürzt bzw. verlängert werden?",answer:`§ 19 LBG BW - Probezeit

Regelmäßige Probezeit 3 Jahre. mind. 1 Jahr, max 5 Jahre

Verkürzung

Anrechnung bestimmter Zeiten

Wehr-/ Zivildienst oder Entwicklungshilfedienst

Pflege-/ Elternzeiten

Einschlägige berufliche Tätigkeit → frühere Berufserfahrung, die der späteren Tätigkeit in der Beamtenlaufbahn entspricht.

Besondere Verkürzung

Weit überdurchschnittliche Bewährung → mind. Note 1,5 (Schulleiterbeurteilung)

hervorragende Laufbahnprüfung (Zweite Staatsprüfung) → mind. Note 1,4

jeweils Verkürzung um bis zu 1 Jahr

kein Rechtsanspruch

Verlängerung

Nichtbewährung innerhalb der regulären Probezeit

z. B. Leistungsmängel oder behebbare gesundheitliche Probleme

Verlängerung zur weiteren Feststellung der Bewährung

Maximal 2 × 1 Jahr`},{id:"schulrecht-77",document:"Schulrecht",page:24,question:"Auf welche Art und Weise kann ein Beamtenverhältnis enden?",answer:`Entlassung kraft Gesetzes (§ 22 BeamtStG)→ endet automatisch, ohne Verwaltungsakt

Verlust der persönlichen Vorraussetzungen (z.B. Staatsbürgerschaft)

Erreichen der Altersgrenze (Aktuell 67 Jahre)

Eintritt in ein öffentlich-rechtliches Dienst- oder Amtsverhältnis zu einem anderen Dienstherrn

Entgültiges nichtbesethen der Referendarsprüfung

Entlassung durch Verwaltungsakt (§ 23 BeamtStG) → Dienstherr verfügt die Entlassung

Auf eigenen Antrag

Fehlende Bewährung in der Probezeit

Verweigerung des Diensteids

Verlust der Beamtenrechte (§ 24 BeamtStG) → aufgrund bestimmter strafrechtlicher Verurteilungen

Verurteilung zu min. einem Jahr wegen vorsätzlicher Tat

Verurteilung zu min. 6 Monaten wegen Friedensverrate, Hochverrat, Gefährdung des demokratischen Rechtsstaates

Ruhestand → Ende des aktiven Dienstes

Erreichen der Altersgrenze → § 36 LBG

Zum Ende des Schuljahres, indem man 66 wird

Ruhestand auf Antrag → § 40 LBG

ab Vollendung des 63. Lebensjahres die Versetzung in den Ruhestand beantragen.

Dienstunfähigkeit → § 43 LBG

mehr als 3 Monate Ausfall innerhalb von 6 Monaten + keine Aussicht auf volle Dienstfähigkeit innerhalb weiterer 6 Monate.

Wenn ein Beamter aus gesundheitlichen Gründen dauerhaft nicht mehr in der Lage ist, seine Dienstpflichten zu erfüllen.

Vor einer Ruhestandsversetzung wird grundsätzlich geprüft, ob eine anderweitige Verwendung oder begrenzte Dienstfähigkeit möglich ist.

§§ 26–27 BeamtStG, § 43 LBG`}]},{title:"Rechte und Pflichten",sources:[{document:"Schulrecht",pages:"25",page:25}],questions:[{id:"schulrecht-78",document:"Schulrecht",page:25,question:"Welche Rechte und Pflichten hat der Beamte im Rahmen seines Dienstverhältnisses?",answer:`Rechte

§ 45 BeamtStG → Fürsorge

§ 78 LBG → Beihilfe

§ 71 LBG / § 44 BeamtStG → Urlaub

LBeamtVGBW → Versorgung + Dienstunfallfürsorge

LBesGBW → Besoldung

=> Für die Prüfung ist § 45 BeamtStG – Fürsorgepflicht des Dienstherrn wahrscheinlich der zentrale Ausgangspunkt für die „Rechte des Beamten“.

Pflichten

Treuepflicht und Verfassungstreue

Aktives eintreten freiheitlich-demokratische Grundordnung (BeamtstG § 33 Abs. 1)

Mäßigungs- und Zurückhaltungsgebot (Niemand beeinflussen) (BeamtstG § 33 Abs. 1)

Volle Hingabe an den Beruf (BeamtstG § 34)

Beamtinnen und Beamte haben sich mit vollem persönlichem Einsatz ihrem Beruf zu widmen.

Nebentätigkieten müssen angezeigt werden (§ 60 - 63 LBG BW)

Verantwortung für die Rechtmäßigkeit des eigenen Handelns und Remonstrationspflicht (§ 36 BeamtStG)

Amtsverschwiegenheit über dienstlich bekannt gewordene Angelegenheiten. (§ 37 BeamtStG)

Mehrarbeit (§ 67 LBG BW), Abordnung oder Versetzung

=> Das Beamtenverhältnis ist ein gegenseitiges öffentlich-rechtliches Dienst- und Treueverhältnis. Der Staat gewährt besondere Sicherheit und Fürsorge – dafür unterliegt der Beamte besonderen Treue- und Dienstpflichten.`},{id:"schulrecht-79",document:"Schulrecht",page:25,question:"Wie unterscheidet sich eine Abordnung von einer Versetzung?",answer:`Versetzung → § 24 LBG

Abordnung → § 25 LBG

Abordnung → vorübergehend

Ein Beamter wird zeitlich begrenzt ganz oder teilweise bei einer anderen Dienststelle eingesetzt. Die Zugehörigkeit zur bisherigen Dienststelle bleibt grundsätzlich bestehen.

Versetzung → dauerhaft

Ein Beamter wechselt auf Dauer zu einer anderen Dienststelle bzw. gegebenenfalls zu einem anderen Dienstherrn.`},{id:"schulrecht-80",document:"Schulrecht",page:25,question:"Was versteht man unter einem schweren Dienstvergehen?",answer:`BeamtStG § 47 Nichterfüllung von Pflichten

Disziplinargesetz (LDG) → Regelt die Verfolgung von Dienstvergehen

Schweres Dienstvergehen → besonders gravierende, schuldhafte Verletzung der Dienstpflichten

Durch die Pflichtverletzung wird insbesondere das Vertrauen des Dienstherrn oder der Allgemeinheit in den Beamten erheblich beeinträchtigt.`}]},{title:"Personalrat",sources:[{document:"Schulrecht",pages:"26",page:26}],questions:[{id:"schulrecht-81",document:"Schulrecht",page:26,question:"Beschreiben Sie die Aufgaben der Personalvertretung.",answer:`GEW S. 683 Personalvertretungsgesetz (LPVG)

Interessen der Beschäftigten gegenüber der Dienststelle (Schule) vertreten.

Der Personalrat nimmt Beschwerden und Anregungen der Beschäftigten auf und vertritt diese gegenüber der Dienststelle.

Überwachung von Arbeitsschutzvorschriften

Darüber hinaus besitzt sie je nach Angelegenheit Beteiligungsrechte in Form von Mitbestimmung, Mitwirkung und Anhörung, beispielsweise bei Beförderungen oder der Verlängerung einer Probezeit.“

Mitbestimmung → Beförderung eines Beamten

→ Der Personalrat bestimmt mit; grundsätzlich ist seine Zustimmung erforderlich. § 75 Abs. 1 LPVG.

Mitbestimmung auf Antrag → Verlängerung der Probezeit

→ Der Personalrat bestimmt nur mit, wenn der betroffene Beschäftigte dies beantragt. § 75 Abs. 3 Nr. 1 LPVG.

Mitwirkung auf Antrag → Disziplinarverfügung oder schriftliche Missbilligung gegen einen Beamten

→ Der Personalrat wird auf Antrag beteiligt, kann Einwendungen erheben und Vorschläge machen; die Dienststelle ist daran aber nicht wie bei der Mitbestimmung gebunden. § 81 Abs. 2 Nr. 1 LPVG.

Anhörung → Personalplanung

→ Der Personalrat muss rechtzeitig informiert werden und ausreichend Gelegenheit erhalten, sich zu äußern. §§ 86, 87 Abs. 1 Nr. 1 LPVG.`}]}]},{id:"cluster-10",title:"Schulsystem, duale Ausbildung und Übergangsbereich",topics:[{title:"Schularten, Stufen und Abschlüsse",sources:[{document:"Schulorganisation",pages:"2-4",page:2},{document:"Schulorganisation",pages:"9-10",page:9}],questions:[{id:"schulorganisation-3",document:"Schulorganisation",page:2,question:"Wie ist das Schulsystem in Baden-Württemberg aufgebaut?",answer:`Primarstufe → Sekundarstufe I → Sekundarstufe II

Vereinfacht:

Primarstufe

Grundschule.

Sekundarstufe I

Werkreal-/Hauptschule

Realschule

Gemeinschaftsschule

Gymnasium

entsprechende Bildungsgänge der SBBZ.

Sekundarstufe II

gymnasiale Oberstufe

beruflichen Schulen

Berufsschule

Berufsfachschule

Berufskolleg

Berufliches Gymnasium

Berufsoberschule

Ein wichtiges Prinzip ist dabei die Durchlässigkeit: Ein einmal eingeschlagener Bildungsweg legt den späteren Abschluss nicht endgültig fest. Die Unterlagen formulieren dazu ausdrücklich: „Alle Wege stehen offen“ und jeder Abschluss bietet grundsätzlich Anschlussmöglichkeiten.`},{id:"schulorganisation-6",document:"Schulorganisation",page:3,question:"Was ist der Unterschied zwischen Fachhochschulreife und fachgebundener Hochschulreife?",answer:`Fachhochschulreife → Hochschule für angewandte Wissenschaften

Sie berechtigt grundsätzlich zum Studium an Hochschulen für angewandte Wissenschaften/ Fachhochschulen.

Fachgebundene Hochschulreife → bestimmte Studienrichtungen

Sie ermöglicht ein Hochschulstudium, ist aber auf bestimmte Fachrichtungen beschränkt.

Davon zu unterscheiden

Allgemeine Hochschulreife → grundsätzlich alle Studiengänge an allen Hochschularte

Die KMK-Unterlagen bestätigen beispielsweise ausdrücklich, dass ein Zeugnis der Fachhochschulreife bundesweit zum Studium an Fachhochschulen berechtigt.

Fragen: Beispiele für fachgebundene Hochschulreife`},{id:"schulorganisation-10",document:"Schulorganisation",page:4,question:"Welche Bildungsabschlüsse können in Baden-Württemberg erworben werden?",answer:`Vom Hauptschulabschluss bis zum Abitur

Wesentliche schulische Abschlüsse sind:

Hauptschulabschluss,

mittlerer Bildungsabschluss,

Fachhochschulreife,

fachgebundene Hochschulreife,

allgemeine Hochschulreife.

Das berufliche Schulwesen ermöglicht dabei zahlreiche Wege zu höherwertigen Abschlüssen. Die Unterlagen betonen deshalb ausdrücklich das Prinzip „Kein Abschluss ohne Anschluss“.

Frage: Was zählt alles zu mittlerem Bildungsabschluss`},{id:"schulorganisation-11",document:"Schulorganisation",page:4,question:"Welche Funktion haben berufliche Schulen im Bildungssystem?",answer:`Berufliche Schulen → Ausbildung + höhere Bildungsabschlüsse

Sie erfüllen mehrere Funktionen:

Berufsvorbereitung,

schulischer Partner der dualen Ausbildung,

berufliche Vollzeitausbildung,

Erwerb höherer Schulabschlüsse,

berufliche Weiterbildung.

Sie ermöglichen Bildungswege von der Berufsvorbereitung bis zur allgemeinen Hochschulreife.`},{id:"schulorganisation-12",document:"Schulorganisation",page:4,question:"Welche Unterschiede bestehen zwischen öffentlichen und privaten Schulen?",answer:`Öffentliche Schulen → staatlich getragen

Private Schulen → freie Trägerschaft

Privatschulen sind durch Art. 7 GG grundsätzlich geschützt.

Bei Ersatzschulen bestehen jedoch Genehmigungsvoraussetzungen. Die Regelungen sollen unter anderem verhindern, dass durch Privatschulen eine starke gesellschaftliche bzw. soziale Segregation entsteht. Für private Grundschulen gelten besonders hohe Anforderungen.`},{id:"schulorganisation-17",document:"Schulorganisation",page:5,question:"Beschreiben Sie den Aufbau des deutschen Bildungssystems anhand der Bildungsbereiche.",answer:`Elementar → Primar → Sek I → Sek II → Tertiär

Elementarbereich: frühkindliche Bildung.

Primarbereich: Grundschule.

Sekundarbereich I: weiterführende Schulen.

Sekundarbereich II: gymnasiale Oberstufe und berufliche Bildung.

Tertiärbereich: Hochschulen und bestimmte Formen höherer beruflicher Bildung.

Die berufliche Bildung besitzt dabei eine wichtige Brückenfunktion zwischen Schule, Ausbildung, Weiterbildung und Studium.`},{id:"schulorganisation-23",document:"Schulorganisation",page:7,question:"Nennen Sie Gründe für die Komplexität des baden-württembergischen Bildungsmodells.",answer:`Vor allem:

viele unterschiedliche Schularten,

zahlreiche Bildungsabschlüsse,

hohe Durchlässigkeit,

berufliche und allgemeinbildende Bildungswege,

unterschiedliche Zugangsvoraussetzungen,

zahlreiche Anschlussmöglichkeiten.

Die Komplexität ist damit teilweise gewollt: Unterschiedliche Begabungen und Bildungsbiografien sollen verschiedene Wege zum gleichen oder zu höheren Abschlüssen ermöglichen. Das Kultusministerium beschreibt das System ausdrücklich als keine „Einbahnstraße“.`},{id:"schulorganisation-32",document:"Schulorganisation",page:9,question:"Was versteht man unter der Durchlässigkeit des Schulsystems?",answer:`Durchlässigkeit → Bildungswege bleiben offen

Ein bestimmter Schulabschluss bzw. eine einmal gewählte Schulart legt die weitere Bildungslaufbahn nicht endgültig fest.

Beispiel:

Hauptschulabschluss → Ausbildung/2BFS → mittlerer Bildungsabschluss → Berufskolleg/Berufliches Gymnasium → FHR/Abitur.

Das Kultusministerium formuliert dazu ausdrücklich, dass jeder Abschluss eine weiterführende Anschlussmöglichkeit bietet.`},{id:"schulorganisation-38",document:"Schulorganisation",page:10,question:"Erklären Sie den Begriff „Schulstufen“.",answer:`Schulstufen → Gliederung nach Bildungsabschnitten

Zum Beispiel:

Primarstufe,

Sekundarstufe I,

Sekundarstufe II.

Eine Schulstufe ist also keine einzelne Schulart, sondern ein Abschnitt des Bildungssystems.`},{id:"schulorganisation-39",document:"Schulorganisation",page:10,question:"Erklären Sie den Begriff „Schulfremdenprüfung“.",answer:`Schulfremdenprüfung → Abschluss ohne regulären Besuch des Bildungsgangs

Eine Person kann unter bestimmten Voraussetzungen eine staatliche Abschlussprüfung ablegen, obwohl sie den entsprechenden Bildungsgang nicht regulär besucht hat.

Dadurch kann ein Schulabschluss extern erworben werden.`}]},{title:"Duale Ausbildung organisieren",sources:[{document:"Schulorganisation",pages:"11-13",page:11},{document:"Schulorganisation",pages:"15",page:15}],questions:[{id:"schulorganisation-41",document:"Schulorganisation",page:11,question:"Welche Abschlüsse strebt ein Berufsschüler an?",answer:`Doppelter Abschluss → Schule + Beruf

Im dualen System werden grundsätzlich zwei Abschlüsse erworben:

Berufsschulabschlusszeugnis der Berufsschule

Berufsabschluss, z. B. Gesellen-, Gehilfen- oder Facharbeiterbrief

Zusätzlich können je nach Voraussetzungen weitere allgemeinbildende Abschlüsse bzw. Zusatzqualifikationen erworben werden. Die Präsentation nennt Hauptschulabschluss, Fachhochschulreife, fachgebundene Hochschulreife und Abitur als mögliche zusätzliche Abschlüsse.

Für die Prüfung würde ich zuerst sagen:

Der Berufsschüler strebt einerseits den schulischen Berufsschulabschluss und andererseits den Berufsabschluss bei der zuständigen Kammer an.`},{id:"schulorganisation-42",document:"Schulorganisation",page:11,question:"Kann in der Berufsschule ein Schuljahr wiederholt werden?",answer:`Wiederholung → grundsätzlich möglich

Laut Lösungskatalog kann ein Schuljahr bei Nichtversetzung grundsätzlich einmal pro Jahrgang wiederholt werden.

Eine zweite Wiederholung desselben Jahrgangs ist nur ausnahmsweise bei außergewöhnlichen Umständen möglich, beispielsweise längerer Krankheit.

Wichtig ist aber die Besonderheit der dualen Ausbildung: Die Ausbildungsdauer ist zugleich im Ausbildungsvertrag mit dem Betrieb geregelt. Der ältere Lösungsteil der Unterlagen weist genau darauf hin.`},{id:"schulorganisation-42-zustimmung",document:"Schulorganisation",page:11,context:"Kann in der Berufsschule ein Schuljahr wiederholt werden?",question:"Wenn ja, wer muss zustimmen?",answer:`Hier unterscheiden die Unterlagen:

Bei der Versetzungsentscheidung entscheidet die Klassenkonferenz auf Grundlage der schulischen Leistungen.

Bei einer freiwilligen Wiederholung erfolgt ein Antrag des Schülers bzw. der Erziehungsberechtigten und die Zustimmung der Schulleitung ist erforderlich.

Da es sich um eine duale Ausbildung handelt, spielt außerdem der Ausbildungsbetrieb eine Rolle, weil die Ausbildungsdauer vertraglich festgelegt ist. Im älteren Lösungskatalog steht deshalb knapp:

„Der Ausbildungsbetrieb.“

Prüfungstauglich würde ich deshalb sagen:

Schulisch entscheidet die Schule bzw. Klassenkonferenz. Da die Ausbildungsdauer aber durch den Ausbildungsvertrag bestimmt wird, muss bei einer Verlängerung auch der Ausbildungsbetrieb einbezogen werden.`},{id:"schulorganisation-43",document:"Schulorganisation",page:11,question:"Nennen Sie drei Vorteile der dualen Ausbildung.",answer:`Duale Ausbildung → Theorie + Praxis + geteilte Kosten

Die Unterlagen nennen insbesondere:

Verbindung von praktischem und theoretischem Lernen

Aufteilung der Ausbildungskosten

Ausbildungsinhalte können relativ schnell an den Bedarf der Wirtschaft angepasst werden

Weitere genannte Vorteile sind:

hohe Praxisnähe,

bessere Jobchancen,

Ausbildungsvergütung,

einheitliches Ausbildungsniveau.

Auch die beigefügte Broschüre beschreibt die Kombination von Theorie in der Berufsschule und Praxis im Betrieb als entscheidendes Merkmal der dualen Ausbildung.`},{id:"schulorganisation-44",document:"Schulorganisation",page:12,question:"Erklären Sie das marktwirtschaftliche System bei der Ausbildung Jugendlicher.",answer:`Marktwirtschaftliches Modell → Betriebe bestimmen den Bedarf

Die Ausbildungsbetriebe sind die Hauptakteure.

Sie bilden vor allem entsprechend der Nachfrage bzw. ihres eigenen Fachkräftebedarfs aus. Die Ausbildung ist:

stark an der beruflichen Verwendung orientiert,

produktionsgebunden,

durch die Betriebe finanziert,

vergleichsweise wenig pädagogisiert.

Problematisch ist laut Unterlage, dass die Auswahl der Auszubildenden durch die Betriebe erfolgt und gesellschaftliche Ziele wie Chancengleichheit dabei nicht zwingend berücksichtigt werden.

Kurzform für die Prüfung:

Beim marktwirtschaftlichen Modell bestimmen hauptsächlich die Betriebe, wen und in welchen Berufen sie entsprechend ihrem Bedarf ausbilden.`},{id:"schulorganisation-45",document:"Schulorganisation",page:12,question:"Was versteht man unter dem bürokratischen Ausbildungsmodell?",answer:`Bürokratisches Modell → Staat plant Ausbildung

Das ist gewissermaßen das Gegenmodell zum marktwirtschaftlichen Modell.

Berufsbildung und Ausbildungsbedarf liegen stärker in den Händen staatlicher Planung.

Die Ausbildung orientiert sich nicht nur am unmittelbaren Bedarf der Betriebe, sondern auch an:

individuellen Anforderungen,

gesellschaftlichen Anforderungen,

pädagogischen Zielsetzungen.

Das Modell ist laut Sitzung 2:

systematischer,

stärker pädagogisiert,

öffentlich finanziert.

Merksatz:

Marktwirtschaftlich → Betrieb bestimmt

Bürokratisch → Staat plant`},{id:"schulorganisation-46",document:"Schulorganisation",page:12,question:"Wie werden die Stufen in der Berufsschule genannt?",answer:`Grundstufe → Fachstufe I → Fachstufe II

Die Berufsschule gliedert sich in drei Stufen:

Grundstufe: 1. Ausbildungsjahr

Fachstufe I: 2. Ausbildungsjahr

Fachstufe II: 3. bzw. 4. Ausbildungsjahr

Die Präsentation nennt genau diese drei Stufen.

Merksatz:

Jahr Grundstufe – danach Fachstufen.`},{id:"schulorganisation-47",document:"Schulorganisation",page:12,question:"Erläutern Sie den Begriff „Blockunterricht“.",answer:`Blockunterricht → Schule mehrere Wochen am Stück

Beim Blockunterricht findet der Berufsschulunterricht nicht an einzelnen Wochentagen statt, sondern gebündelt:

Der Auszubildende besucht eine oder mehrere Wochen am Stück die Berufsschule und ist anschließend wieder für einen längeren Zeitraum im Betrieb.

Die ergänzende Ausbildungsbroschüre bestätigt die beiden Organisationsformen: Berufsschule findet entweder an ein bis zwei Tagen pro Woche oder in mehrwöchigem Blockunterricht statt.`},{id:"schulorganisation-48",document:"Schulorganisation",page:13,question:"Welche Stellen sind zuständig bei der dualen Ausbildung?",answer:`Duales System → Betrieb + Berufsschule + Kammer

Drei zentrale Akteure:

Ausbildungsbetrieb

Berufsschule

zuständige Kammer, z. B.

Industrie- und Handelskammer (IHK)

Handwerkskammer (HWK)

Dabei gelten unterschiedliche Rechtsgrundlagen:

Betriebliche Ausbildung:

BBiG, Handwerksordnung, Ausbildungsordnung, Jugendarbeitsschutzgesetz, AEVO und Ausbildungsvertrag.

Schulische Ausbildung in Baden-Württemberg:

Schulgesetz, Verordnungen, Berufsschulordnung und Bildungspläne.`},{id:"schulorganisation-49",document:"Schulorganisation",page:13,question:"Kann ich als Schülerin entscheiden, auf welche Berufsschule ich gehe?",answer:`Berufsschule → grundsätzlich keine freie Wahl

Nein.

Nach dem Lösungskatalog wird die zuständige Berufsschule grundsätzlich zugewiesen.

Hintergrund ist insbesondere die Bildung von Fachklassen für bestimmte Ausbildungsberufe. Nicht jede Berufsschule bietet jeden Ausbildungsberuf an.

Kurz für die Prüfung:

Nein. Die Berufsschule ist grundsätzlich durch Ausbildungsberuf und Schulbezirk bzw. zuständige Zuweisung vorgegeben.`},{id:"schulorganisation-56",document:"Schulorganisation",page:15,question:"Warum spricht man von einer gemeinsamen Abschlussprüfung? Wer führt sie mit wem durch?",answer:`Gemeinsame Abschlussprüfung → Schule + Kammer verzahnt

Es soll vermieden werden, dass Auszubildende dieselben Inhalte zweimal prüfen müssen.

Laut Sitzung 2 werden der

schriftliche Teil der Kammerprüfung

und der schriftliche Teil der Berufsschulabschlussprüfung

an der Berufsschule durchgeführt und korrigiert.

Dadurch entsteht keine Doppelprüfung.

Am Ende stehen trotzdem zwei unterschiedliche Abschlüsse:

Berufsschule → Berufsschulabschlusszeugnis

Kammer → Gesellen-, Gehilfen- oder Facharbeiterbrief

Die Präsentation fasst das entsprechend als „Berufsschulabschlusszeugnis und Gesellen-, Gehilfen- oder Facharbeiterbrief (gemeinsame Abschlussprüfung)“ zusammen.`}]},{title:"Lernfelder und zusätzliche Abschlüsse",sources:[{document:"Schulorganisation",pages:"14",page:14}],questions:[{id:"schulorganisation-53",document:"Schulorganisation",page:14,question:"Was kennzeichnet das Lernfeldkonzept?",answer:`Lernfeld → berufliche Handlung statt klassisches Fach

Zentrales Merkmal ist die Handlungsorientierung.

Lernfelder orientieren sich an realen beruflichen Handlungsabläufen und nicht primär an der traditionellen Fächersystematik.

Die Präsentation nennt:

Handlungsorientierung als didaktisches Prinzip,

Förderung beruflicher Handlungskompetenz,

Prozessorientierung,

Bezug zur beruflichen Realität,

Vermittlung von Kompetenzen,

Auflösung der klassischen Fächersystematik,

ganzheitlich-handlungsorientierte Ausrichtung.

Beispiel:

Fachrechnen wird nicht unbedingt isoliert als eigenes Fach behandelt, sondern dort integriert, wo die mathematische Kompetenz für eine konkrete berufliche Handlung benötigt wird.

Merksatz:

Lernfelder orientieren sich an beruflichen Handlungen, nicht an klassischen Schulfächern.`},{id:"schulorganisation-54",document:"Schulorganisation",page:14,question:"Aus welchen Gründen wurde das Lernfeldkonzept in den Berufsschulen eingeführt?",answer:`Lernfeldkonzept → näher an der beruflichen Realität

Laut Lösungskatalog wurde es eingeführt, um eine

praxisnahe,

handlungsorientierte,

kompetenzorientierte und

ganzheitliche

berufliche Bildung zu ermöglichen.

Die Präsentation ergänzt einen wichtigen Punkt:

Die Orientierung an beruflichen Prozessen soll auch die berufliche Flexibilität fördern.

Es geht also nicht nur darum, Faktenwissen zu vermitteln, sondern Schülerinnen und Schüler dazu zu befähigen, komplexe berufliche Situationen selbstständig zu bewältigen.`},{id:"schulorganisation-55",document:"Schulorganisation",page:14,question:"Was versteht man unter dem „9 + 3“-Modell?",answer:`9 + 3 → Hauptschule + Berufsausbildung = mittlerer Bildungsabschluss

Nach den Unterlagen ermöglicht das 9+3-Modell den Erwerb eines dem Realschulabschluss gleichwertigen mittleren Bildungsabschlusses nach:

9 Jahren Schule + 3-jähriger Berufsausbildung

Wichtig ist also:

Durch die erfolgreiche Berufsausbildung kann ein höherer allgemeinbildender Abschluss erreicht bzw. anerkannt werden.

Merksatz:

9 Jahre Schule + 3 Jahre Ausbildung → mittlerer Bildungsabschluss`}]},{title:"Ausbildungsvorbereitung und Berufsfachschulen",sources:[{document:"Schulorganisation",pages:"6",page:6},{document:"Schulorganisation",pages:"13-14",page:13},{document:"Schulorganisation",pages:"16",page:16}],questions:[{id:"schulorganisation-19",document:"Schulorganisation",page:6,question:"Welche Bildungswege stehen einem 16-jährigen Schüler ohne Abschluss offen? Welcher Pflicht unterliegt er?",answer:`Kein Abschluss →

berufliche Schule / Übergangsbereich

Mögliche Angebote sind insbesondere AV bzw. AVdual.

Ziel ist:

berufliche Orientierung,

Verbesserung der Basiskompetenzen,

Vorbereitung auf Ausbildung,

ggf. Erwerb eines dem Hauptschulabschluss gleichwertigen Bildungsstandes.

Die beruflichen Schulen halten diese Angebote gerade für Jugendliche bereit, denen nach der

allgemeinen Schulpflicht der direkte Übergang in eine Ausbildung nicht gelungen ist.

Der Jugendliche kann daher nicht einfach zu Hause bleiben, wenn noch Berufsschulpflicht besteht.

Frage: Es geht darum, dass nach der Hauptschule ohne Abschluss nicht einfach zuhause bleiben kann.

Daher berufsschulpflicht. Ist nur bis 18?`},{id:"schulorganisation-50",document:"Schulorganisation",page:13,question:"Welche Schulart muss ein Schüler ohne Hauptschulabschluss und ohne Lehrvertrag besuchen, um die Berufsschulpflicht zu erfüllen?",answer:`Ohne Hauptschulabschluss + ohne Ausbildung → AV/AVdual

Laut Sitzung 2:

AV bzw. AVdual

AV steht für Ausbildungsvorbereitung.

Ziel ist insbesondere:

berufliche Orientierung,

Verbesserung von Basiskompetenzen,

Vorbereitung auf Ausbildung,

ggf. Erwerb eines dem Hauptschulabschluss entsprechenden Bildungsstands.`},{id:"schulorganisation-51",document:"Schulorganisation",page:13,question:"Welche Schulart muss ein Schüler mit Hauptschulabschluss und ohne Lehrvertrag besuchen, um die Berufsschulpflicht zu erfüllen?",answer:`Hauptschulabschluss + keine Ausbildung → 2BFS oder AV/AVdual

Laut Lösungskatalog:

zweijährige Berufsfachschule (2BFS) oder

AV/AVdual.

Die 2BFS hat zusätzlich den Vorteil, dass dort die Fachschulreife und damit ein mittlerer Bildungsabschluss erworben werden kann.`},{id:"schulorganisation-52",document:"Schulorganisation",page:14,question:"Welche Schulart muss ein Schüler mit mittlerem Bildungsabschluss und ohne Lehrvertrag besuchen, um die Berufsschulpflicht zu erfüllen?",answer:`Mittlerer Bildungsabschluss → BK oder Berufliches Gymnasium

Der Fragenkatalog nennt:

Berufskolleg

oder Berufliches Gymnasium.

Damit kann gleichzeitig ein höherer Bildungsabschluss angestrebt werden.`},{id:"schulorganisation-57",document:"Schulorganisation",page:16,question:"Wie unterscheiden sich 1-, 2- und 3-jährige Berufsfachschulen?",answer:`1BFS → berufliche Grundbildung

Die einjährige Berufsfachschule vermittelt eine berufliche Grundbildung, die dem 1. Ausbildungsjahr entsprechen kann. Alternativ kann sie zu einer Ausbildung in einem Helferberuf führen.

2BFS → berufliche Grundbildung + Fachschulreife

Die zweijährige Berufsfachschule vermittelt berufliche Grundbildung und führt zur Fachschulreife, also zu einem mittleren Bildungsabschluss. Daneben gibt es laut Unterlage auch 2-jährige Berufsfachschulen mit beruflicher Vollausbildung.

3BFS → berufliche Vollausbildung

Die dreijährige Berufsfachschule führt zu einer beruflichen Vollausbildung.

Merksatz:

1BFS → Grundbildung

2BFS → Grundbildung + mittlerer Bildungsabschluss

3BFS → Vollausbildung`},{id:"schulorganisation-58",document:"Schulorganisation",page:16,question:"Wie lautet die Probezeitregelung in der 2BFS?",answer:`2BFS → erstes Halbjahr ist Probezeit

Die Aufnahme in die 2BFS erfolgt grundsätzlich zunächst auf Probe.

Die Probezeit umfasst das erste Schulhalbjahr. Dieses endet mit einem Halbjahreszeugnis – ausdrücklich nicht nur mit einer Halbjahresinformation.

Auf Grundlage der Noten in diesem Zeugnis entscheidet die Klassenkonferenz, ob die Probezeit bestanden wurde.`},{id:"schulorganisation-59",document:"Schulorganisation",page:16,question:"Was passiert bei Nichtbestehen?",answer:`Grundsätzlich:

Probezeit nicht bestanden → Bildungsgang muss verlassen werden.

Es gibt aber eine wichtige Besonderheit:

Der Schüler kann auf eigenen Wunsch bis zum Ende des Schuljahres mit allen Rechten und Pflichten weiter am Unterricht teilnehmen.

Am Ende des zweiten Halbjahres kann die Klassenkonferenz dann doch noch entscheiden, dass der Schüler im Bildungsgang verbleiben darf.

Außerdem ist eine erneute Anmeldung – sogar an derselben 2BFS – möglich. Allerdings werden bei der Aufnahme zunächst andere Bewerber bevorzugt.

Merksatz:

2BFS-Probezeit → 1. Halbjahr; Klassenkonferenz entscheidet. Nicht bestanden = grundsätzlich raus, Weiterbesuch bis Schuljahresende aber auf Wunsch möglich.`,context:"Probezeit in der zweijährigen Berufsfachschule (2BFS)."}]}]},{id:"cluster-11",title:"Berufliche Vollzeitschulen und Wege zur Hochschulreife",topics:[{title:"Berufskolleg I und II",sources:[{document:"Schulorganisation",pages:"16-18",page:16},{document:"Schulorganisation",pages:"28",page:28}],questions:[{id:"schulorganisation-60",document:"Schulorganisation",page:16,question:"Welche Zielsetzungen verfolgen Berufskollegs?",answer:`Berufskolleg → berufliche Qualifikation + höhere Allgemeinbildung

Die Berufskollegs verbinden eine vertiefte allgemeine Bildung mit einer beruflichen Qualifizierung.

Je nach Berufskolleg können sie auf:

eine berufliche Tätigkeit,

einen Berufsabschluss bzw. eine Zusatzqualifikation,

die Fachhochschulreife

vorbereiten.

Ein wichtiges Merkmal ist damit die Verbindung von allgemeiner und beruflicher Bildung.

Die Unterlagen ordnen die Berufskollegs entsprechend den berufs- und studienqualifizierenden beruflichen Vollzeitschulen zu.`},{id:"schulorganisation-61",document:"Schulorganisation",page:17,question:"Welche Zugangsvoraussetzungen gelten in der Regel für die Berufskollegs I? Warum gibt es keine Notenvorgaben, aber dann für die Aufnahme ins BK II?",answer:`BK I → mittlerer Bildungsabschluss

Grundvoraussetzung für das BK I ist in der Regel ein mittlerer Bildungsabschluss.

Eine bestimmte Mindestnote ist für die Aufnahme ins BK I grundsätzlich nicht erforderlich.

Der entscheidende Unterschied kommt beim Übergang ins BK II:

Dort wird ein bestimmter Leistungsstand verlangt.

Warum?

Das BK I hat damit auch eine Auswahl- bzw. Orientierungsfunktion: Erst die Leistungen im BK I zeigen, ob die Voraussetzungen für den anspruchsvolleren weiterführenden Bildungsgang des BK II erfüllt sind.

Merksatz:

BK I → mittlerer Abschluss reicht.

BK II → Leistung im BK I entscheidet.`},{id:"schulorganisation-62",document:"Schulorganisation",page:17,question:"Erklären Sie die Unterschiede zwischen einer Junior- und einer Übungsfirma.",answer:`Juniorfirma → reale wirtschaftliche Tätigkeit

Eine Juniorfirma ist ein von Schülerinnen und Schülern geführtes Unternehmen, das real am Markt tätig ist.

Es gibt also beispielsweise:

echte Produkte bzw. Dienstleistungen,

echte Kunden,

echte Einnahmen und Ausgaben.

Übungsfirma → simulierte wirtschaftliche Tätigkeit

Eine Übungsfirma bildet betriebliche Abläufe lediglich realitätsnah nach.

Geschäftsvorgänge werden simuliert; es findet aber kein echter Waren- bzw. Geldverkehr wie bei einem realen Unternehmen statt.

Die Unterlagen nennen für die Juniorfirma außerdem ausdrücklich:

Schüler bzw. auch Auszubildende als Zielgruppe und dauerhafte Tätigkeit unter Schülerleitung.

Merksatz:

Juniorfirma → echtes Geschäft

Übungsfirma → Geschäft wird simuliert`},{id:"schulorganisation-63",document:"Schulorganisation",page:17,question:"Was könnten problematische Aspekte beim BK I sein?",answer:`BK I → geringe unmittelbare Konsequenz beim Nichtbestehen der Probezeit

Die Sitzung hebt hier speziell die Probezeitregelung als problematischen Aspekt hervor.

Wenn ein Schüler die Probezeit im BK I nicht besteht, hat dies nicht unbedingt eine unmittelbare Konsequenz:

Der Schüler kann einen Antrag stellen, die Schule trotzdem bis zum Ende des Schuljahres weiter zu besuchen.

Das hängt insbesondere mit der noch bestehenden Berufsschulpflicht zusammen.

Das kann problematisch sein, weil Schüler damit trotz festgestellter mangelnder Eignung für den Bildungsgang zunächst weiter im BK I bleiben.

Prüfungstauglich:

Ein Problem des BK I ist, dass das Nichtbestehen der Probezeit nicht zwingend zum sofortigen Verlassen führt. Bei bestehender Berufsschulpflicht kann der Schüler auf Antrag bis zum Schuljahresende weiter am Unterricht teilnehmen.`},{id:"schulorganisation-64",document:"Schulorganisation",page:18,question:"Wie lautet die Probezeitregelung im BK I, wie im BK II?",answer:`Hier ist der Unterschied wichtig.

BK I

BK I → Nichtbestehen bedeutet nicht zwingend sofortiges Ausscheiden

Alle Schülerinnen und Schüler werden zunächst auf Probe aufgenommen.

Die Probezeit umfasst das erste Halbjahr.

Wird sie nicht bestanden, kann der Schüler auf Antrag die Schule bis zum Ende des Schuljahres weiter besuchen. Die Unterlage begründet dies mit der Erfüllung der Berufsschulpflicht.

BK II

BK II → Nichtbestehen bedeutet Ausscheiden

Auch hier werden zunächst alle Schüler auf Probe aufgenommen.

Aber:

Wird die Probezeit nicht bestanden, muss der Schüler die Schule verlassen.

Wichtigster Unterschied

BK I → Weiterbesuch trotz nicht bestandener Probezeit möglich.

BK II → nicht bestanden = Schule verlassen.`},{id:"schulorganisation-65",document:"Schulorganisation",page:18,question:"Welche Aufnahmebedingungen gelten für das BK II?",answer:`BK II → BK-I-Abschluss + Schnitt 3,0

Erforderlich ist ein Abschlusszeugnis des Berufskollegs I.

In den maßgeblichen Fächern

Deutsch,

Englisch,

Mathematik,

Profilfach

muss ein Durchschnitt von mindestens 3,0 erreicht werden.

Bei freien Schulplätzen ist laut Sitzungsunterlage eine Aufnahme bis zu einem Durchschnitt von 3,25 möglich.

Merksatz:

BK II → D + E + M + Profilfach ≤ 3,0; bei freien Plätzen bis 3,25.`},{id:"schulorganisation-66",document:"Schulorganisation",page:18,question:"Welche Abschlüsse sind im BK II möglich und wann werden diese Abschlüsse bundesweit anerkannt?",answer:`BK II → Fachhochschulreife

Zentraler Abschluss ist die:

Fachhochschulreife (FHR)

Daneben können je nach Bildungsgang Zusatzqualifikationen erworben werden.

Für die bundesweite Anerkennung der Fachhochschulreife müssen laut Unterlage

schulischer + praktischer Teil

erfüllt sein.

Merksatz:

FHR = schulischer Teil + praktischer Teil → bundesweit anerkannt`}]},{title:"1BKFH und Berufsoberschule",sources:[{document:"Schulorganisation",pages:"18-19",page:18}],questions:[{id:"schulorganisation-67",document:"Schulorganisation",page:18,question:"Wie lauten die Aufnahmevoraussetzungen für das 1BKFH?",answer:`1BKFH → mittlerer Bildungsabschluss + Beruf

Das einjährige Berufskolleg zum Erwerb der Fachhochschulreife (1BKFH) setzt zwei Dinge voraus:

mittlerer Bildungsabschluss

und

entweder eine abgeschlossene Berufsausbildung von mindestens zwei Jahren

oder

mindestens fünf Jahre Berufserfahrung.

Das Ziel ist dann der Erwerb der Fachhochschulreife.

Merksatz:

1BKFH → mittlere Reife + mindestens 2-jährige Ausbildung / 5 Jahre Berufserfahrung → FHR`},{id:"schulorganisation-68",document:"Schulorganisation",page:19,question:"Welche Zugangsvoraussetzungen gelten für die Oberstufe der Berufsoberschulen?",answer:`BOS → mittlere Reife + Beruf

Die Sitzungsantwort nennt als Voraussetzungen:

einschlägige Berufsausbildung oder

fünf Jahre Berufserfahrung

und

mittlerer Bildungsabschluss.

Die in den Unterlagen enthaltene ausführlichere Darstellung konkretisiert den mittleren Bildungsabschluss:

Möglich sind beispielsweise

Realschulabschluss,

Fachschulreife,

Werkrealschulabschluss,

entsprechende Versetzungszeugnisse aus dem Gymnasium bzw. der Gemeinschaftsschule.

Dabei wird dort grundsätzlich ein Durchschnitt von mindestens 3,0 aus Deutsch, Englisch, Mathematik und einem naturwissenschaftlichen Fach verlangt; keines dieser Fächer darf schlechter als „ausreichend“ sein.

Für die mündliche Prüfung zuerst kurz:

Für die BOS brauche ich grundsätzlich einen mittleren Bildungsabschluss und eine abgeschlossene einschlägige Berufsausbildung bzw. entsprechende Berufserfahrung.`},{id:"schulorganisation-70",document:"Schulorganisation",page:19,question:"Wie kann ein erfolgreicher BK-II-Schüler in die Berufsoberschule wechseln?",answer:`Die Kurzlösung in Sitzung 3 lautet:

Erfolgreicher Abschluss BK II (FHR)

ggf. berufliche Praxis/Ausbildung

→ Zugang zur BOS möglich.

Die ausführlicheren Unterlagen machen daraus einen besonders interessanten Weg:

Gute FHR + berufliche Qualifikation → direkter Einstieg ins 2. Jahr der BOS möglich

Besonders qualifizierte Bewerber mit Fachhochschulreife und beruflicher Qualifikation können in freie Plätze im zweiten Jahr der BOS aufgenommen werden.

Voraussetzungen laut Unterlage:

Fachhochschulreife mit einem Durchschnitt der maßgebenden Fächer von mindestens 2,5,

Deutsch, Englisch, Mathematik und berufliches Schwerpunktfach jeweils besser als „ausreichend“,

verpflichtendes Beratungsgespräch.

Das ist für die Prüfung der interessantere Sonderfall:

Gute FHR + berufliche Qualifikation → unter bestimmten Voraussetzungen direkter Einstieg in Klasse 2 der BOS.`}]},{title:"Berufliches Gymnasium: Zugang",sources:[{document:"Schulorganisation",pages:"20-22",page:20}],questions:[{id:"schulorganisation-71",document:"Schulorganisation",page:20,question:"Welche Mindestvoraussetzungen brauchen Realschüler, Werkrealschüler oder Schüler einer Gemeinschaftsschule zum Besuch des Beruflichen Gymnasiums?",answer:`Mittlerer Bildungsabschluss + Schnitt 3,0

Für die Aufnahme in das dreijährige Berufliche Gymnasium (3BG) braucht man grundsätzlich einen mittleren Bildungsabschluss.

Bei Realschule/Werkrealschule/Gemeinschaftsschule gilt:

Durchschnitt aus Deutsch, Mathematik und erster Pflichtfremdsprache mindestens 3,0

keines dieser drei Fächer schlechter als „ausreichend“ (4).

Merksatz:

3BG → D + M + E/Fremdsprache ≤ 3,0 und keines schlechter als 4.`},{id:"schulorganisation-72",document:"Schulorganisation",page:20,question:"Wie sind diese Voraussetzungen für Schüler der allgemeinbildenden Gymnasien?",answer:`Gymnasium → Versetzung reicht

Für Schülerinnen und Schüler eines allgemeinbildenden Gymnasiums ist grundsätzlich das entsprechende Versetzungszeugnis entscheidend.

Die Unterlagen zum Beruflichen Gymnasium nennen als Zugang:

Versetzungszeugnis am Ende der Klasse 9 oder 10 eines achtjährigen Gymnasiums,

bzw. Versetzungszeugnis am Ende der Klasse 10 eines Gymnasiums.

Merksatz:

Realschule → Notenschnitt

Gymnasium → Versetzung`},{id:"schulorganisation-73",document:"Schulorganisation",page:20,question:"Aus welchem Grund sind die Zugangsvoraussetzungen für Gymnasiasten nicht dieselben wie für Realschüler?",answer:`Versetzung am Gymnasium → Eignung für gymnasiales Niveau bereits festgestellt

Beim Gymnasiasten zeigt die Versetzung, dass er die Anforderungen des gymnasialen Bildungsgangs erfüllt.

Bei Schülerinnen und Schülern anderer Schularten muss die Eignung für die gymnasiale Oberstufe dagegen über bestimmte Mindestnoten nachgewiesen werden.

Prüfungstauglich:

Beim Gymnasiasten bestätigt bereits die Versetzungsentscheidung die Eignung für den gymnasialen Bildungsgang. Deshalb ist kein zusätzlicher 3,0-Schnitt wie bei Realschülern erforderlich.`},{id:"schulorganisation-74",document:"Schulorganisation",page:20,question:"Nach welchem Schuljahr kann ein Schüler des G8 in ein Berufliches Gymnasium wechseln? Welche Dinge sind zu beachten?",answer:`G8 → nach Klasse 9 oder 10

Laut den Unterlagen ist der Wechsel mit einem Versetzungszeugnis am Ende der Klasse 9 oder Klasse 10 möglich.

Zu beachten sind außerdem insbesondere:

die Fremdsprachenregelung,

die Altersgrenze,

die Aufnahmebedingungen des jeweiligen BG.

Die Unterlagen nennen ausdrücklich als Voraussetzung, dass die Pflichtfremdsprache des mittleren Abschlusses als erste Pflichtfremdsprache weitergeführt werden können muss.`},{id:"schulorganisation-75",document:"Schulorganisation",page:21,question:"Nach welchem Schuljahr kann ein Schüler des G9 in ein Berufliches Gymnasium wechseln?",answer:`G9 → nach Klasse 10

Für Schülerinnen und Schüler des neunjährigen Gymnasiums erfolgt der Wechsel grundsätzlich nach Klasse 10 mit entsprechender Versetzung.

Merksatz:

G8 → nach 9 oder 10

G9 → nach 10`},{id:"schulorganisation-76",document:"Schulorganisation",page:21,question:"Wie sieht der Fremdsprachenunterricht für einen Schüler aus, der bis zum mittleren Bildungsabschluss „nur“ Englisch als Fremdsprache hatte?",answer:`Nur eine Fremdsprache bisher → zweite Fremdsprache neu beginnen

Für die allgemeine Hochschulreife muss eine ausreichende zweite Fremdsprache nachgewiesen werden.

Hat der Schüler bisher nur Englisch gelernt, muss er am Beruflichen Gymnasium eine neu beginnende zweite Fremdsprache belegen und diese entsprechend fortführen.

Englisch wird als erste Fremdsprache fortgeführt.

Merksatz:

Nur Englisch bisher → zweite Fremdsprache am BG neu beginnen.`},{id:"schulorganisation-77",document:"Schulorganisation",page:21,question:"Wie sieht der Fremdsprachenunterricht für einen Schüler aus, der bis zum mittleren Bildungsabschluss Englisch und mindestens vier Jahre Französisch hatte?",answer:`Zweite Fremdsprache bereits erfüllt → keine neue Fremdsprache nötig

Hat der Schüler bereits eine zweite Fremdsprache ausreichend lange besucht, kann die Fremdsprachenpflicht damit erfüllt sein.

Entscheidend ist, dass die Voraussetzungen hinsichtlich

Dauer des Unterrichts und

erforderlicher Leistungen

erfüllt sind.

Dann muss Französisch nicht zwingend weitergeführt werden.

Merksatz:

Zweite Fremdsprache bereits ausreichend gelernt → keine neu beginnende zweite Fremdsprache erforderlich.`},{id:"schulorganisation-81",document:"Schulorganisation",page:22,question:"Gibt es für das Berufliche Gymnasium eine Altersgrenze?",answer:`3BG → Altersgrenze vorhanden

Ja.

Die Sitzung nennt:

Bei Schuljahresbeginn darf das 19. Lebensjahr noch nicht vollendet sein.

Bei bereits abgeschlossener Berufsausbildung:

Das 22. Lebensjahr darf noch nicht vollendet sein.

Merksatz:

BG → unter 19

mit Ausbildung → unter 22`},{id:"schulorganisation-82",document:"Schulorganisation",page:22,question:"Welche Möglichkeiten gibt es für ältere Schülerinnen und Schüler, ein Abitur zu erlangen?",answer:`Wenn die Altersgrenze des regulären 3BG überschritten ist, kommen andere Wege infrage, insbesondere Bildungswege des zweiten Bildungswegs bzw. berufliche Aufstiegswege.

In den Sitzungen wurde beispielsweise bereits die Berufsoberschule behandelt.

Dort kann mit entsprechender beruflicher Qualifikation die Hochschulreife erworben werden.

Prüfungstauglich:

Für ältere Bewerber gibt es alternative Wege wie die Berufsoberschule bzw. Angebote des zweiten Bildungswegs.`}]},{title:"Berufliches Gymnasium: Aufbau",sources:[{document:"Schulorganisation",pages:"21-23",page:21}],questions:[{id:"schulorganisation-78",document:"Schulorganisation",page:21,question:"Welche Profile gibt es bei den Beruflichen Gymnasien? – 6 Nennungen",answer:`Die Unterlagen unterscheiden sechs Richtungen:

Agrarwissenschaftliches Gymnasium (AG)

Biotechnologisches Gymnasium (BTG)

Ernährungswissenschaftliches Gymnasium (EG)

Sozial- und gesundheitswissenschaftliches Gymnasium (SGG)

Technisches Gymnasium (TG)

Wirtschaftsgymnasium (WG)

Merksatz:

AG – BTG – EG – SGG – TG – WG`},{id:"schulorganisation-79",document:"Schulorganisation",page:22,question:"Erklären Sie den Begriff „Eingangsklasse“.",answer:`Eingangsklasse → erstes Jahr des dreijährigen BG

Das dreijährige Berufliche Gymnasium besteht aus:

Eingangsklasse → Jahrgangsstufe 1 → Jahrgangsstufe 2

Die Eingangsklasse dient insbesondere dazu, Schülerinnen und Schüler aus unterschiedlichen vorherigen Schularten auf ein gemeinsames Niveau zu bringen und auf die anschließende Kursstufe vorzubereiten.

Die Unterlagen beschreiben das 3BG entsprechend als dreijährigen Bildungsgang aus Eingangsklasse und beiden Jahrgangsstufen.

Merksatz:

EK → Vorbereitung auf J1 und J2.`},{id:"schulorganisation-83",document:"Schulorganisation",page:23,question:"Wodurch unterscheidet sich ein Profilfach von anderen Fächern?",answer:`Profilfach → prägt die berufliche Ausrichtung des BG

Das Profilfach ist das zentrale Fach der jeweiligen Richtung.

Beispiele:

TG → technisches Profilfach,

WG → Wirtschaft,

SGG → sozial-/gesundheitswissenschaftliches Profil.

Das Profilfach vermittelt vertiefte berufsbezogene Kenntnisse und prägt damit das jeweilige Berufliche

Gymnasium.

Die Unterlagen betonen gerade diese Verbindung von allgemeiner und berufsbezogener Bildung als

besonderes Merkmal des BG.`},{id:"schulorganisation-84",document:"Schulorganisation",page:23,question:"Welchen Aufgabenfeldern werden Religion und Sport zugewiesen?",answer:`Die gymnasiale Oberstufe unterscheidet drei Aufgabenfelder:

AF I → sprachlich-literarisch-künstlerisch

AF II → gesellschaftswissenschaftlich

AF III → mathematisch-naturwissenschaftlich-technisch

Dabei gilt:

Religion/Ethik → Aufgabenfeld II

Sport → keinem Aufgabenfeld zugeordnet

Der Leitfaden zeigt diese Zuordnung ausdrücklich in seiner Übersicht der Aufgabenfelder.`},{id:"schulorganisation-85",document:"Schulorganisation",page:23,question:"Erklären Sie die Abkürzungen eAN und gAN und ihre Bedeutungen.",answer:`eAN → erhöhtes Anforderungsniveau

Hier werden über eine breite Grundbildung hinaus vertiefte und erweiterte Kenntnisse und

Kompetenzen verlangt.

gAN → grundlegendes Anforderungsniveau

Hier steht die allgemeine Orientierung und breite Grundbildung im Mittelpunkt.

Der Leitfaden beschreibt genau diesen Unterschied zwischen erhöhtem und grundlegendem

Anforderungsniveau.

Merksatz:

eAN → vertieft

gAN → grundlegend`},{id:"schulorganisation-86",document:"Schulorganisation",page:23,question:"1. Kann ein Schüler des BG die Fachhochschulreife beim vorzeitigen Verlassen der Schule erhalten?",answer:`Ja → schulischer Teil der FHR möglich

Beim vorzeitigen Verlassen der gymnasialen Oberstufe kann unter bestimmten Voraussetzungen der

schulische Teil der Fachhochschulreife bescheinigt werden.

Für die vollständige Fachhochschulreife muss anschließend der erforderliche berufsbezogene/

praktische Teil hinzukommen.

Der Leitfaden enthält hierzu ausdrücklich ein eigenes Kapitel „Fachhochschulreife“.

Merksatz:

BG vorzeitig verlassen → schulischer Teil FHR möglich; Praxis dazu → vollständige FHR.`}]},{title:"Kursstufe und Abitur",sources:[{document:"Schulorganisation",pages:"24-25",page:24}],questions:[{id:"schulorganisation-87",document:"Schulorganisation",page:24,question:"Erklären Sie den Begriff „GFS“.",answer:`GFS → Gleichwertige Feststellung von Schülerleistungen

Eine GFS ist eine Leistung, die einer Klassenarbeit hinsichtlich der Anforderungen gleichwertig ist.

Mögliche Formen laut Unterlagen:

Hausarbeit,

Projekt,

Referat,

terminierte mündliche Prüfung.

Ziel ist insbesondere:

handlungsorientierter Unterricht,

Förderung von Schlüsselqualifikationen.

Die GFS wird von der Fachlehrkraft koordiniert und bewertet.

Bei Gruppenarbeiten darf nur die individuelle Leistung bewertet werden.`},{id:"schulorganisation-88",document:"Schulorganisation",page:24,question:"Wie wird eine GFS in einem zweistündigen Fach verrechnet, wie in einem vierstündigen Fach?",answer:`4-/5-stündiges Fach → Klassenarbeit kann ersetzt werden

In einem vier- bzw. fünfstündigen Fach kann eine Klassenarbeit durch eine GFS ersetzt werden.

2-stündiges Fach → Klassenarbeit kann nicht ersetzt werden

Die dort vorgeschriebene Klassenarbeit muss trotzdem geschrieben werden.

Merksatz:

4/5 Stunden → GFS kann KA ersetzen

2 Stunden → KA bleibt`},{id:"schulorganisation-89",document:"Schulorganisation",page:24,question:"Wie viele GFS muss ein Schüler in der Kursstufe erbringen?",answer:`Kursstufe → mindestens 3 GFS

Laut Sitzungsunterlage:

mindestens drei GFS in der Kursstufe.

Zusätzlich nennt die Unterlage:

1 GFS in der Eingangsklasse

3 weitere GFS in den Jahrgangsstufen.

Merksatz:

EK 1 + Kursstufe 3`},{id:"schulorganisation-90",document:"Schulorganisation",page:24,question:"Was versteht man unter dem „Seminarkurs“?",answer:`Seminarkurs → fächerübergreifende besondere Lernleistung

Laut Sitzung 4:

fächerübergreifender Kurs,

über zwei Halbjahre in J1,

dreistündig,

schriftliche Ausarbeitung/Dokumentation,

abschließendes Kolloquium von etwa 20–30 Minuten.

Der Seminarkurs verlangt also besonders selbstständiges, wissenschaftspropädeutisches Arbeiten.

Merksatz:

Seminarkurs → 2 Halbjahre + Doku + Kolloquium`},{id:"schulorganisation-91",document:"Schulorganisation",page:24,question:"Wie kann das Ergebnis des Seminarkurses in die Abiturabrechnung eingebracht werden?",answer:`Sitzung 4 nennt drei Möglichkeiten:

als 4. Prüfungsfach der schriftlichen Prüfung,

als mündliches Prüfungsfach – mindestens 5 Punkte,

doppelte Anrechnung in Block I.

Merksatz:

Seminarkurs → Prüfungsfach ersetzen oder doppelt in Block I.`},{id:"schulorganisation-92",document:"Schulorganisation",page:25,question:"Nennen Sie für jeden Anforderungsbereich laut EPA einen Operator.",answer:`Die Unterlagen geben genau diese Beispiele:

AF I → nennen

→ Wissen wiedergeben.

AF II → erläutern

→ Zusammenhänge erklären und Wissen anwenden.

AF III → bewerten

→ selbstständig beurteilen und begründet Stellung nehmen.

Merksatz:

I nennen – II erläutern – III bewerten`},{id:"schulorganisation-93",document:"Schulorganisation",page:25,question:"Aus welchen Teilen setzt sich das Endergebnis des Abiturs zusammen?",answer:`Abitur → Block I + Block II

Das Endergebnis besteht aus:

Block I

Leistungen aus den Kursen

also Leistungen aus der Qualifikationsphase.

Block II

Leistungen aus der Abiturprüfung

Der Leitfaden übernimmt genau diese Zweiteilung in seiner Darstellung der Gesamtqualifikation.

Merksatz:

Block I → Kursleistungen

Block II → Abiturprüfung`},{id:"schulorganisation-94",document:"Schulorganisation",page:25,question:"Welche Voraussetzungen müssen im Abiturblock für das Bestehen erbracht werden?",answer:`Block II → mindestens 100 Punkte

Bei maximal 300 erreichbaren Punkten und vierfacher Gewichtung verlangt die Sitzungsunterlage:

insgesamt mindestens 100 Punkte,

dreimal mindestens 20 Punkte,

kein Prüfungsfach mit 0 Punkten.

Bei 0 Punkten nennt die Unterlage eine Zwangswiederholung der mündlichen Prüfung.

Merksatz:

100 gesamt – 3 × 20 – keine 0`},{id:"schulorganisation-95",document:"Schulorganisation",page:25,question:"Wer unterschreibt das Abiturzeugnis?",answer:`Abiturzeugnis → Schulleitung + Prüfungsvorsitz

Laut Lösung in Sitzung 4:

Schulleitung

und Vorsitzende/r der Prüfungskommission.

Merksatz:

Schulleitung + Prüfungsvorsitz`}]},{title:"Offene Stellen der Vorlage",sources:[{document:"Schulorganisation",pages:"19",page:19},{document:"Schulorganisation",pages:"22",page:22}],questions:[{id:"schulorganisation-69",document:"Schulorganisation",page:19,question:"Welche Abschlüsse können auf der Berufsoberschule abgelegt werden, worin liegen die Unterschiede?",answer:`Hier ist in der Kurzantwort des Fragenkatalogs offenbar eine Unschärfe: Dort werden „Fachhochschulreife“ und „allgemeine Hochschulreife“ genannt.

Die ausführlicheren Unterlagen in derselben Sitzung bzw. den beigefügten Materialien beschreiben die BOS dagegen genauer:

Oberstufe der BOS → fachgebundene oder allgemeine Hochschulreife

Nach zwei Jahren kann die

Fachgebundene Hochschulreife

erworben werden.

Sie ermöglicht ein Hochschulstudium, aber nur in den entsprechenden Fachrichtungen.

Allgemeine Hochschulreife

Wer zusätzlich die Voraussetzungen bezüglich einer zweiten Fremdsprache erfüllt, kann die

allgemeine Hochschulreife (Abitur)

erwerben.

Diese ermöglicht grundsätzlich das Studium aller Fachrichtungen.

Beide Abschlüsse der Oberstufe der BOS sind bundesweit anerkannt.

Für die Prüfung würde ich deshalb die ausführlichere Fassung der PDF lernen:

BOS → fachgebundene Hochschulreife; mit zweiter Fremdsprache → allgemeine Hochschulreife.`,note:"Die Vorlage weist auf abweichende Angaben in Kurz- und Langfassung hin."},{id:"schulorganisation-80",document:"Schulorganisation",page:22,question:"Welche Regelung gilt für WG/SG in der schriftlichen Abiturprüfung, wenn keine mündliche Prüfung in einer Fremdsprache stattfindet?",answer:`Hier nennt der Fragenkatalog eine besondere Fremdsprachenregelung für WG/SG.

Wenn keine Fremdsprache mündliches Prüfungsfach ist, muss die Fremdsprachenkompetenz im Rahmen der vorgesehenen Abiturregelungen anderweitig berücksichtigt bzw. geprüft werden.

Diese Frage würde ich momentan nicht weiter konkretisieren, weil die von mir gefundenen Ausschnitte aus Sitzung 4 die genaue Lösung dazu nicht vollständig wiedergeben. Ich würde hier nicht aus allgemeinem Wissen etwas ergänzen, das möglicherweise von Herburgers konkreter Lösung abweicht.`,note:"Die Vorlage enthält hier ausdrücklich keine vollständige Antwort."}]}]},{id:"cluster-12",title:"Falltraining und vernetztes Wiederholen",topics:[{title:"Schullaufbahnberatung",sources:[{document:"Schulorganisation",pages:"26-27",page:26}],questions:[{id:"schulorganisation-96",document:"Schulorganisation",page:26,question:"Axel ist 16 Jahre alt, hat die Werkrealschule abgeschlossen, findet keinen Ausbildungsplatz und möchte zu Hause bleiben. Sein Freund Kevin ist nach Klasse 9 abgegangen, hat ein Jahr AVdual besucht und darf nun zu Hause bleiben. Was gilt für Axel?",answer:`Axel → Berufsschulpflicht besteht noch

Axel kann nicht einfach zu Hause bleiben.

Er ist 16 Jahre alt und unterliegt nach Abschluss der allgemeinen Schulpflicht grundsätzlich noch der

Berufsschulpflicht. Er muss deshalb eine geeignete schulische oder berufliche Bildungsmaßnahme

besuchen.

Die Musterlösung in Sitzung 5 nennt als Möglichkeit ein zweijähriges Berufskolleg.`},{id:"schulorganisation-97",document:"Schulorganisation",page:26,question:"Warum ist die Situation bei Kevin anders?",answer:`Der entscheidende Hinweis im Fall ist:

Kevin hat bereits ein Jahr AVdual besucht.

AV bzw. AVdual kann der Erfüllung der Berufsschulpflicht dienen. In Sitzung 2 wird dies ausdrücklich im

Zusammenhang mit § 78a SchG behandelt.

Merksatz:

16 Jahre + Schule beendet ≠ automatisch keine Schulpflicht mehr.

Danach kann noch Berufsschulpflicht bestehen.`,context:"Axel ist 16 Jahre alt, hat die Werkrealschule abgeschlossen, findet keinen Ausbildungsplatz und möchte zu Hause bleiben. Sein Freund Kevin ist nach Klasse 9 abgegangen, hat ein Jahr AVdual besucht und darf nun zu Hause bleiben. Was gilt für Axel?"},{id:"schulorganisation-98",document:"Schulorganisation",page:26,question:"Michael möchte nach der Realschule Abitur machen. Er hat Englisch 3, Mathematik 4 und Deutsch 3. Welche Wege stehen ihm offen?",answer:`Michael → direkter Zugang zum BG scheitert am Notenschnitt

Für den direkten Übergang ins Berufliche Gymnasium müsste Michael in

Deutsch,

Mathematik und

erster Pflichtfremdsprache

einen Durchschnitt von mindestens 3,0 erreichen.

Michael hat:

Deutsch 3 + Englisch 3 + Mathematik 4 = 10

10 : 3 = 3,33

Damit erfüllt er die Voraussetzung für den direkten Übergang ins Berufliche Gymnasium nicht.

Die Musterlösung aus Sitzung 5 nennt deshalb zwei alternative Wege:

Weg 1: zunächst einen anderen Bildungsgang, z. B. ein Berufskolleg, besuchen und dort die Leistungen

verbessern.

Weg 2: später über die Berufsoberschule das Abitur erwerben. Dafür ist allerdings eine berufliche

Vorbildung erforderlich. Die PDF nennt beispielsweise einen Assistentenabschluss.

Merksatz:

3 + 3 + 4 = Ø 3,33 → kein direkter Zugang zum BG.`},{id:"schulorganisation-100",document:"Schulorganisation",page:27,question:"Vanessa hat die Probezeit im 1BK2W nicht bestanden. Was ist die Folge und wie kann sie dennoch die Fachhochschulreife erwerben?",answer:`Probezeit nicht bestanden → 1BK2W verlassen

Vanessa muss das 1BK2W verlassen, weil sie die Probezeit nicht bestanden hat.

Die Sitzung nennt anschließend zwei Möglichkeiten:

Möglichkeit 1:

Sie kann erneut in das 1BK2W aufgenommen werden; die Musterlösung spricht von einer einmaligen Wiederholung.

Möglichkeit 2:

Sie absolviert eine Berufsausbildung und besucht anschließend das BKFH. Auf diesem Weg kann sie ebenfalls die Fachhochschulreife erwerben.

Merksatz:

1BK2W Probezeit nicht bestanden → raus; Wiederholung oder später Ausbildung + BKFH → FHR.`},{id:"schulorganisation-101",document:"Schulorganisation",page:27,question:"Can ist 17 Jahre alt und hat die Werkrealschule mit Hauptschulabschluss abgeschlossen. Er möchte die 2BFS besuchen und anschließend Abitur auf einem Beruflichen Gymnasium machen. Woran könnte das scheitern?",answer:`Hier gibt es laut Sitzung 5 zwei mögliche Hürden.

1. Noten

2BFS → BG nicht automatisch

Nach erfolgreichem Abschluss der 2BFS besitzt Can zwar einen mittleren Bildungsabschluss.

Damit ist er aber nicht automatisch für das Berufliche Gymnasium zugelassen.

Er muss zusätzlich die entsprechenden Notenvoraussetzungen, insbesondere in Deutsch, Mathematik und Englisch, erfüllen.

2. Alter

Can ist bereits 17 Jahre alt.

Die 2BFS dauert zwei Jahre. Danach wäre er etwa 19 Jahre alt.

Damit kann die Altersgrenze für die Aufnahme ins Berufliche Gymnasium problematisch werden. Genau diese beiden Punkte – Notenschnitt und Altersgrenze – nennt die Musterlösung.

Merksatz:

Can → zwei Hürden: Noten + Alter.`}]},{title:"Bildungswege verknüpfen",sources:[{document:"Schulorganisation",pages:"28-29",page:28}],questions:[{id:"schulorganisation-106",document:"Schulorganisation",page:28,question:"Weshalb muss man in einigen Bildungsgängen beim Nichtbestehen der Probezeit den Bildungsgang verlassen und in anderen nicht?",answer:`Probezeit → Funktion des jeweiligen Bildungsgangs beachten

Die Musterlösung unterscheidet zwei Situationen:

Probezeit als echte Eignungsprüfung

In manchen Bildungsgängen soll die Probezeit feststellen, ob ein Schüler für den Bildungsgang geeignet ist.

Nicht bestanden → Bildungsgang verlassen.

Weiterbesuch trotz nicht bestandener Probezeit

In anderen Bildungsgängen kann ein Weiterbesuch möglich sein, insbesondere weil

noch Schulpflicht besteht oder

eine weitere pädagogische Förderung vorgesehen ist.

Die Sitzung nennt außerdem:

Meist entscheidet die Schulleitung auf Grundlage einer Empfehlung der Klassenkonferenz.

Das erklärt beispielsweise den Unterschied, den wir schon in Sitzung 3 hatten:

BK I → Weiterbesuch teilweise möglich

BK II → bei nicht bestandener Probezeit verlassen

Merksatz:

Probezeitregelung hängt von Eignungsfunktion und Schulpflicht ab.`},{id:"schulorganisation-107",document:"Schulorganisation",page:29,question:"Skizzieren Sie einen Weg, wie man seine Verweildauer in der Schule maximieren kann.",answer:`Hier gibt Sitzung 5 tatsächlich einen konkreten „Maximalweg“ vor:

Hauptschule (5 Jahre)

↓

AVdual (1 Jahr)

↓

2BFS (2 Jahre)

↓

BK I (1 Jahr)

↓

BK II (1 Jahr)

↓

Ausbildung mit Berufsschule (2–3,5 Jahre)

↓

Berufsoberschule (1–2 Jahre)

Die Unterlage kommt damit auf:

13 bis 15,5 Jahre

Die Frage demonstriert vor allem die Durchlässigkeit des beruflichen Schulwesens: Man kann schrittweise immer höhere Abschlüsse erreichen.`}]},{title:"Diskussionsfragen vorbereiten",sources:[{document:"Schulorganisation",pages:"6-7",page:6},{document:"Schulorganisation",pages:"27-29",page:27}],questions:[{id:"schulorganisation-20",document:"Schulorganisation",page:6,question:"Ist die Verankerung des Religionsunterrichts noch zeitgemäß?",answer:`Hier erwartet die Präsentation eher eine begründete Abwägung als ein schlichtes Ja/Nein.

Dafür

Religionsunterricht ist grundgesetzlich garantiert und ermöglicht religiöse Bildung.

Problematisch

Die Gesellschaft ist religiös und weltanschaulich pluraler geworden. Viele unterschiedliche

Religions- und Weltanschauungsgruppen können organisatorisch zu einer zunehmenden Aufteilung

der Schülerinnen und Schüler führen.

Die Präsentation stellt deshalb ausdrücklich die Frage, ob viele getrennte Religionsgruppen eher

Trennung statt gemeinsames Lernen fördern.`},{id:"schulorganisation-21",document:"Schulorganisation",page:7,question:"Inwieweit können Privatschulen der Integration entgegenwirken?",answer:`Privatschulen → Gefahr sozialer Segregation

Wenn sich Schülerinnen und Schüler nach sozialer Herkunft, Religion oder Weltanschauung auf unterschiedliche Schulen verteilen, kann gesellschaftliche Durchmischung abnehmen.

Genau deshalb enthält Art. 7 GG Anforderungen an Ersatzschulen. Die Unterlagen betonen, dass insbesondere die Regelungen für private Grundschulen die Grundschule als gemeinsamen Lernort erhalten und Segregation verhindern sollen.`}]}]}],_=t=>(Bt("data-v-e493bb3d"),t=t(),_t(),t),xr={class:"study-page"},jr=_(()=>c("p",{class:"eyebrow"},"Dein Lernraum · Prüfungsvorbereitung",-1)),Zr=_(()=>c("h1",null,"Schulrecht und Schulorganisation",-1)),Jr=_(()=>c("p",{class:"intro"},"Wähle ein Cluster, beantworte die Fragen zunächst selbst und blende anschließend die Antwort aus der PDF ein.",-1)),$r={class:"meta"},Qr={class:"learning-dashboard","aria-label":"Dein Lernfortschritt"},Xr={class:"account-row"},Yr=_(()=>c("h2",null,"Dein Lernplan bis zum 12.10.2026",-1)),es=["disabled"],ns={key:1,class:"account-row"},ts=["disabled"],is=_(()=>c("p",null,"10.09.–04.10.: Fragen lernen · 05.–11.10.: Wiederholung · 12.10.: Prüfung",-1)),rs={key:0},ss={class:"plan-stats"},as=_(()=>c("span",null,"Fragen sicher",-1)),us=_(()=>c("span",null,"zum Wiederholen markiert",-1)),hs=_(()=>c("span",null,"noch bis zum heutigen Planziel",-1)),cs=["value","max","aria-label"],ls={key:0},os={key:1},ds={key:2},gs={key:3,class:"question-note"},fs={key:4},ms=_(()=>c("p",{class:"meta"},"Der Plan rechnet ab dem 10.09. mit 8 Fragen täglich, bis alle Fragen erreicht sind. Ein negativer Wert bei „noch bis zum heutigen Planziel“ zeigt deinen Vorsprung, der für die nächsten Tage zählt. Nur „Sicher“ zählt zum Lernziel. „Wiederholen“ nimmt eine Frage wieder aus dem sicheren Bestand.",-1)),bs={role:"status"},ps=_(()=>c("details",{class:"source-note"},[c("summary",null,"Über die Lernunterlagen"),c("p",null,"Fragen und Antworten stammen aus deinen PDFs. Zeilenumbrüche und Abstände sind für die Bildschirmansicht angepasst. Ähnliche Fragen aus beiden Dokumenten bleiben mit ihrer jeweiligen Antwort erhalten."),c("p",null,"Die Antworten geben den Stand der Vorlagen wieder; sie wurden nicht auf den aktuellen Rechtsstand geprüft. Offene Angaben der Vorlage sind gekennzeichnet. Seitenangaben beziehen sich auf die PDF-Seitenzählung."),c("div",{class:"source-links"},[c("a",{href:"/lernmaterial/Schulrecht.pdf",target:"_blank",rel:"noopener"},"Schulrecht.pdf öffnen ↗"),c("a",{href:"/lernmaterial/Schulorganisation.pdf",target:"_blank",rel:"noopener"},"Schulorganisation.pdf öffnen ↗")])],-1)),Ss={class:"study-tools","aria-label":"Fragen filtern"},ws=_(()=>c("option",{value:""},"Beide PDFs",-1)),ks=_(()=>c("option",null,"Schulrecht",-1)),zs=_(()=>c("option",null,"Schulorganisation",-1)),vs=[ws,ks,zs],As=["disabled"],Bs={class:"results",role:"status"},_s={key:0,class:"empty-state"},Es={class:"clusters","aria-label":"Lerncluster"},Is=["open"],ys={class:"number"},Ps={class:"cluster-heading"},Ds={class:"cluster-title"},Gs={class:"count"},Rs={key:0,class:"cluster-stats","aria-label":"Lernstand des gesamten Hauptthemas"},Ts={class:"stat-secure"},Ls={class:"stat-open"},Vs={class:"stat-review"},Fs={key:0,class:"stats-scope"},Ns={key:1,class:"count"},Ms={class:"topics"},Ws=["open"],Os={class:"count inline-count"},Us={class:"topic-content"},Cs=["href"],Ks={key:0,class:"case-context"},qs=["id"],Hs={key:1,class:"question-note"},xs=["aria-expanded","aria-controls","onClick"],js={key:2,class:"learning-status"},Zs=["value","disabled","onChange"],Js=_(()=>c("option",{value:"open"},"Offen",-1)),$s=_(()=>c("option",{value:"review"},"Wiederholen",-1)),Qs=_(()=>c("option",{value:"secure"},"Sicher",-1)),Xs=[Js,$s,Qs],Ys=["id","aria-labelledby"],ea=_(()=>c("p",{class:"answer-label"},"Antwort aus der PDF",-1)),na={class:"note-editor"},ta=["for"],ia=["id","value","disabled","onInput"],ra=["disabled","onClick"],sa={key:0},aa={role:"status"},ua={__name:"PruefungSchulrecht",setup(t){const e=new Set(Se.flatMap(B=>B.topics.flatMap(w=>w.questions.map(y=>y.id)))),{user:n,ready:i,loaded:r,busy:s,pending:a,progress:u,message:h,today:o,learned:g,review:S,plan:p,login:I,logout:T,setStatus:ne,notes:N,noteDrafts:j,noteMessages:fe,editNote:Ue,saveNote:Ce}=Hr(e),he=D(""),Z=D(""),M=D(new Set),te=Se.reduce((B,w)=>B+w.topics.reduce((y,v)=>y+v.questions.length,0),0),f=re(()=>{const B=he.value.trim().toLocaleLowerCase("de");return Se.map(w=>({...w,topics:w.topics.map(y=>({...y,questions:y.questions.filter(v=>(!Z.value||v.document===Z.value)&&(!B||`${w.title} ${y.title} ${v.question} ${v.context||""}`.toLocaleLowerCase("de").includes(B)))})).filter(y=>y.questions.length)})).filter(w=>w.topics.length)}),P=re(()=>f.value.reduce((B,w)=>B+E(w),0)),A=re(()=>!!(he.value.trim()||Z.value)),E=B=>B.topics.reduce((w,y)=>w+y.questions.length,0),L=re(()=>Object.fromEntries(Se.map(B=>{const w={secure:0,open:0,review:0};for(const y of B.topics)for(const v of y.questions){const J=u.value[v.id];w[J==="secure"||J==="review"?J:"open"]+=1}return[B.id,w]}))),G=B=>{M.value.has(B)?M.value.delete(B):M.value.add(B)};return(B,w)=>{const y=At("RouterLink");return z(),k("main",xr,[wt(y,{to:"/",class:"back"},{default:kt(()=>[me("← Zur Startseite")]),_:1}),c("header",null,[jr,Zr,Jr,c("p",$r,m(l(Se).length)+" Hauptcluster · "+m(l(te))+" Fragen und Aufgaben · 2 Lernunterlagen",1)]),c("section",Qr,[c("div",Xr,[Yr,l(n)?(z(),k("div",ns,[c("span",null,m(l(n).displayName||l(n).email),1),c("button",{type:"button",disabled:l(s)||l(a).size>0,onClick:w[1]||(w[1]=(...v)=>l(T)&&l(T)(...v))},"Abmelden",8,ts)])):(z(),k("button",{key:0,type:"button",disabled:!l(i)||l(s),onClick:w[0]||(w[0]=(...v)=>l(I)&&l(I)(...v))},m(l(s)?"Anmeldung läuft …":"Mit Google anmelden"),9,es))]),is,l(n)?C("",!0):(z(),k("p",rs,"Melde dich an, um deinen Lernstand auf deinen Geräten zu speichern. Zum Start: 8 neue Fragen täglich plus Wiederholung.")),l(n)&&l(r)&&l(p)?(z(),k(be,{key:1},[c("div",ss,[c("div",null,[c("strong",null,m(l(g))+" / "+m(l(te)),1),as]),c("div",null,[c("strong",null,m(l(S)),1),us]),c("div",null,[c("strong",null,m(l(p).days?l(p).daily:l(p).remaining),1),c("span",null,m(l(p).days?"Fragen pro Tag eingeplant":"Fragen noch offen"),1)]),c("div",null,[c("strong",null,m(l(p).todayRemaining),1),hs])]),c("progress",{value:l(g),max:l(te),"aria-label":`${l(g)} von ${l(te)} Fragen sicher`},null,8,cs),l(o)>="2026-10-12"?(z(),k("p",ls,m(l(o)==="2026-10-12"?"Heute ist Prüfungstag.":"Der Prüfungstermin ist vorbei.")+" "+m(l(p).remaining)+" Fragen sind noch nicht als sicher markiert.",1)):l(o)<"2026-09-10"?(z(),k("p",os,"Dein Lernplan startet am 10.09.2026.")):l(p).remaining?l(p).behind?(z(),k("p",gs,m(l(p).behind)+" Fragen hinter dem Plan. Bis heute Morgen waren "+m(l(p).expected)+" sichere Fragen vorgesehen.",1)):(z(),k("p",fs,"Du liegst im Plan. Bis heute Abend sind "+m(l(p).target)+" sichere Fragen vorgesehen.",1)):(z(),k("p",ds,"Alle Fragen sind als sicher markiert. Nutze die restliche Zeit zum Wiederholen.")),ms],64)):C("",!0),c("p",bs,m(l(h)),1)]),ps,c("section",Ss,[c("label",null,[me("Fragen und Themen suchen "),ln(c("input",{"onUpdate:modelValue":w[2]||(w[2]=v=>he.value=v),type:"search",placeholder:"Zum Beispiel Aufsicht, Noten oder Berufskolleg"},null,512),[[zt,he.value]])]),c("label",null,[me("Unterlage "),ln(c("select",{"onUpdate:modelValue":w[3]||(w[3]=v=>Z.value=v)},vs,512),[[vt,Z.value]])]),c("button",{type:"button",class:"reset-button",disabled:!M.value.size,onClick:w[4]||(w[4]=v=>M.value.clear())},"Alle Antworten verbergen",8,As)]),c("p",Bs,m(P.value)+" von "+m(l(te))+" Fragen",1),P.value?C("",!0):(z(),k("p",_s,"Keine passenden Fragen gefunden. Ändere den Suchbegriff oder wähle beide PDFs.")),c("section",Es,[(z(!0),k(be,null,Ee(f.value,v=>(z(),k("details",{key:`${v.id}-${A.value}`,class:"cluster",open:A.value},[c("summary",null,[c("span",ys,m(v.id.split("-")[1].padStart(2,"0")),1),c("span",Ps,[c("span",Ds,m(v.title),1),c("span",Gs,m(v.topics.length)+" Unterthemen · "+m(E(v))+" Fragen",1),l(n)&&l(r)?(z(),k("span",Rs,[c("span",Ts,m(L.value[v.id].secure)+" Sicher",1),c("span",Ls,m(L.value[v.id].open)+" Offen",1),c("span",Vs,m(L.value[v.id].review)+" Wiederholen",1),A.value?(z(),k("span",Fs,"Gesamtes Hauptthema")):C("",!0)])):(z(),k("span",Ns,m(l(n)?"Lernstatistik wird geladen …":"Für deine Lernstatistik bitte anmelden."),1))])]),c("div",Ms,[(z(!0),k(be,null,Ee(v.topics,J=>(z(),k("details",{key:J.title,class:"topic",open:A.value},[c("summary",null,[me(m(J.title)+" ",1),c("span",Os,m(J.questions.length)+" Fragen",1)]),c("div",Us,[(z(!0),k(be,null,Ee(J.questions,b=>(z(),k("article",{key:b.id,class:"question-card"},[c("a",{class:"question-source",href:`/lernmaterial/${b.document}.pdf#page=${b.page}`,target:"_blank",rel:"noopener"},m(b.document)+" · PDF-S. "+m(b.page)+" ↗",9,Cs),b.context?(z(),k("p",Ks,m(b.context),1)):C("",!0),c("h2",{id:`question-${b.id}`},m(b.question),9,qs),b.note?(z(),k("p",Hs,m(b.note),1)):C("",!0),c("button",{type:"button",class:"answer-button","aria-expanded":M.value.has(b.id),"aria-controls":`answer-${b.id}`,onClick:ie=>G(b.id)},m(M.value.has(b.id)?"Antwort verbergen":"Antwort anzeigen"),9,xs),l(n)?(z(),k("label",js,[me("Mein Lernstand "),c("select",{value:l(u)[b.id]||"open",disabled:!l(r)||l(a).has(b.id),onChange:ie=>l(ne)(b.id,ie.target.value)},Xs,40,Zs)])):C("",!0),M.value.has(b.id)?(z(),k("div",{key:3,id:`answer-${b.id}`,class:"answer",role:"region","aria-labelledby":`question-${b.id}`},[ea,(z(!0),k(be,null,Ee(b.answer.split(`

`),(ie,mt)=>(z(),k("p",{key:mt},m(ie),1))),128))],8,Ys)):C("",!0),c("div",na,[c("label",{for:`note-${b.id}`},"Bemerkungen",8,ta),c("textarea",{id:`note-${b.id}`,value:l(j)[b.id]??l(N)[b.id]??"",disabled:!l(n)||!l(r)||l(a).has(b.id),rows:"3",maxlength:"10000",placeholder:"Eigene Merksätze, Beispiele oder offene Fragen …",onInput:ie=>l(Ue)(b.id,ie.target.value)},null,40,ia),c("button",{type:"button",disabled:!l(n)||!l(r)||l(a).has(b.id)||l(j)[b.id]===void 0,onClick:ie=>l(Ce)(b.id)},"Speichern",8,ra),l(n)?C("",!0):(z(),k("p",sa,"Melde dich an, um Bemerkungen zu speichern.")),c("p",aa,m(l(fe)[b.id]),1)])]))),128))])],8,Ws))),128))])],8,Is))),128))])])}}},la=St(ua,[["__scopeId","data-v-e493bb3d"]]);export{la as default};
