import{aO as L,az as wr,aE as zr,r as Q,j as _n,aG as f,w as b,b5 as g,v as V,F as N,aR as ae,t as c,u as Rn,T as Fr,ap as Br,J as Ar,bz as Dr,I as Se,be as h,bB as on,bq as vr,bp as Pr,aT as Lr,aK as Gr,aH as Ur}from"./index-C-VuXQ28.js";import{p as ne,_ as yn,n as Mn,m as Er,k as Tn,b as K,h as je,t as Qe,A as Vr,B as ze,E as Xe,q as I,w as xr,v as Ir,S as Fe,x as _r,y as Rr,s as yr,a as Mr,L as Wn,F as Ye,e as Tr,u as Wr,c as gn,C as dn,D as mn,g as Nr,l as Kr,r as Or,o as Hr,H as fn,j as bn,G as Sn,z as Cr,f as qr}from"./index.esm-BKK1D4yM.js";function Nn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zr=Nn,Kn=new Xe("auth","Firebase",Nn());/**
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
 */const Ee=new Mr("@firebase/auth");function jr(r,...e){Ee.logLevel<=Wn.WARN&&Ee.warn(`Auth (${Fe}): ${r}`,...e)}function Pe(r,...e){Ee.logLevel<=Wn.ERROR&&Ee.error(`Auth (${Fe}): ${r}`,...e)}/**
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
 */function H(r,...e){throw nn(r,...e)}function y(r,...e){return nn(r,...e)}function en(r,e,n){const t={...Zr(),[e]:n};return new Xe("auth","Firebase",t).create(e,{appName:r.name})}function ue(r){return en(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jr(r,e,n){const t=n;if(!(e instanceof t))throw t.name!==e.constructor.name&&H(r,"argument-error"),en(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nn(r,...e){if(typeof r!="string"){const n=e[0],t=[...e.slice(1)];return t[0]&&(t[0].appName=r.name),r._errorFactory.create(n,...t)}return Kn.create(r,...e)}function d(r,e,...n){if(!r)throw nn(e,...n)}function q(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pe(e),new Error(e)}function j(r,e){r||q(e)}/**
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
 */function Je(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function $r(){return pn()==="http:"||pn()==="https:"}function pn(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function Qr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($r()||yr()||"connection"in navigator)?navigator.onLine:!0}function Xr(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Be{constructor(e,n){this.shortDelay=e,this.longDelay=n,j(n>e,"Short delay should be less than long delay!"),this.isMobile=_r()||Rr()}get(){return Qr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rn(r,e){j(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class On{static initialize(e,n,t){this.fetchImpl=e,n&&(this.headersImpl=n),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const et=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nt=new Be(3e4,6e4);function tn(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function be(r,e,n,t,i={}){return Hn(r,i,async()=>{let s={},a={};t&&(e==="GET"?a=t:s={body:JSON.stringify(t)});const u=ze({...a,key:r.config.apiKey}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const o={method:e,headers:l,...s};return Wr()||(o.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Qe(r.emulatorConfig.host)&&(o.credentials="include"),On.fetch()(await Cn(r,r.config.apiHost,n,u),o)})}async function Hn(r,e,n){r._canInitEmulator=!1;const t={...Yr,...e};try{const i=new tt(r),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ve(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[l,o]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ve(r,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ve(r,"email-already-in-use",a);if(l==="USER_DISABLED")throw ve(r,"user-disabled",a);const m=t[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw en(r,m,o);H(r,m)}}catch(i){if(i instanceof Ye)throw i;H(r,"network-request-failed",{message:String(i)})}}async function rt(r,e,n,t,i={}){const s=await be(r,e,n,t,i);return"mfaPendingCredential"in s&&H(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function Cn(r,e,n,t){const i=`${e}${n}?${t}`,s=r,a=s.config.emulator?rn(r.config,i):`${r.config.apiScheme}://${i}`;return et.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class tt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"network-request-failed")),nt.get())})}}function ve(r,e,n){const t={appName:r.name};n.email&&(t.email=n.email),n.phoneNumber&&(t.phoneNumber=n.phoneNumber);const i=y(r,e,t);return i.customData._tokenResponse=n,i}/**
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
 */async function it(r,e){return be(r,"POST","/v1/accounts:delete",e)}async function Ve(r,e){return be(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ke(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function st(r,e=!1){const n=ne(r),t=await n.getIdToken(e),i=sn(t);d(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:t,authTime:ke(He(i.auth_time)),issuedAtTime:ke(He(i.iat)),expirationTime:ke(He(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function He(r){return Number(r)*1e3}function sn(r){const[e,n,t]=r.split(".");if(e===void 0||n===void 0||t===void 0)return Pe("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tr(n);return i?JSON.parse(i):(Pe("Failed to decode base64 JWT payload"),null)}catch(i){return Pe("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kn(r){const e=sn(r);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function we(r,e,n=!1){if(n)return e;try{return await e}catch(t){throw t instanceof Ye&&at(t)&&r.auth.currentUser===r&&await r.auth.signOut(),t}}function at({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class lt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $e{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ke(this.lastLoginAt),this.creationTime=ke(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xe(r){var z;const e=r.auth,n=await r.getIdToken(),t=await we(r,Ve(e,{idToken:n}));d(t==null?void 0:t.users.length,e,"internal-error");const i=t.users[0];r._notifyReloadListener(i);const s=(z=i.providerUserInfo)!=null&&z.length?qn(i.providerUserInfo):[],a=ct(r.providerData,s),u=r.isAnonymous,l=!(r.email&&i.passwordHash)&&!(a!=null&&a.length),o=u?l:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $e(i.createdAt,i.lastLoginAt),isAnonymous:o};Object.assign(r,m)}async function ut(r){const e=ne(r);await xe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ct(r,e){return[...r.filter(t=>!e.some(i=>i.providerId===t.providerId)),...e]}function qn(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ht(r,e){const n=await Hn(r,{},async()=>{const t=ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=await Cn(r,i,"/v1/token",`key=${s}`),u=await r._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:t};return r.emulatorConfig&&Qe(r.emulatorConfig.host)&&(l.credentials="include"),On.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(r,e){return be(r,"POST","/v2/accounts:revokeToken",tn(r,e))}/**
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
 */class ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){d(e.length!==0,"internal-error");const n=kn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(d(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:t,refreshToken:i,expiresIn:s}=await ht(e,n);this.updateTokensAndExpiration(t,i,Number(s))}updateTokensAndExpiration(e,n,t){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(e,n){const{refreshToken:t,accessToken:i,expirationTime:s}=n,a=new ge;return t&&(d(typeof t=="string","internal-error",{appName:e}),a.refreshToken=t),i&&(d(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(d(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ge,this.toJSON())}_performRefresh(){return q("not implemented")}}/**
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
 */function $(r,e){d(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class R{constructor({uid:e,auth:n,stsTokenManager:t,...i}){this.providerId="firebase",this.proactiveRefresh=new lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $e(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await we(this,this.stsTokenManager.getToken(this.auth,e));return d(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return st(this,e)}reload(){return ut(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new R({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),n&&await xe(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(K(this.auth.app))return Promise.reject(ue(this.auth));const e=await this.getIdToken();return await we(this,it(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const t=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,u=n.tenantId??void 0,l=n._redirectEventId??void 0,o=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:z,emailVerified:A,isAnonymous:F,providerData:_,stsTokenManager:J}=n;d(z&&J,e,"internal-error");const M=ge.fromJSON(this.name,J);d(typeof z=="string",e,"internal-error"),$(t,e.name),$(i,e.name),d(typeof A=="boolean",e,"internal-error"),d(typeof F=="boolean",e,"internal-error"),$(s,e.name),$(a,e.name),$(u,e.name),$(l,e.name),$(o,e.name),$(m,e.name);const re=new R({uid:z,auth:e,email:i,emailVerified:A,displayName:t,isAnonymous:F,photoURL:a,phoneNumber:s,tenantId:u,stsTokenManager:M,createdAt:o,lastLoginAt:m});return _&&Array.isArray(_)&&(re.providerData=_.map(he=>({...he}))),l&&(re._redirectEventId=l),re}static async _fromIdTokenResponse(e,n,t=!1){const i=new ge;i.updateFromServerResponse(n);const s=new R({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:t});return await xe(s),s}static async _fromGetAccountInfoResponse(e,n,t){const i=n.users[0];d(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qn(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new ge;u.updateFromIdToken(t);const l=new R({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),o={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $e(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,o),l}}/**
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
 */const wn=new Map;function Z(r){j(r instanceof Function,"Expected a class definition");let e=wn.get(r);return e?(j(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,wn.set(r,e),e)}/**
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
 */class Zn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zn.type="NONE";const zn=Zn;/**
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
 */function Le(r,e,n){return`firebase:${r}:${e}:${n}`}class de{constructor(e,n,t){this.persistence=e,this.auth=n,this.userKey=t;const{config:i,name:s}=this.auth;this.fullUserKey=Le(this.userKey,i.apiKey,s),this.fullPersistenceKey=Le("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ve(this.auth,{idToken:e}).catch(()=>{});return n?R._fromGetAccountInfoResponse(this.auth,n,e):null}return R._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,t="authUser"){if(!n.length)return new de(Z(zn),e,t);const i=(await Promise.all(n.map(async o=>{if(await o._isAvailable())return o}))).filter(o=>o);let s=i[0]||Z(zn);const a=Le(t,e.config.apiKey,e.name);let u=null;for(const o of n)try{const m=await o._get(a);if(m){let z;if(typeof m=="string"){const A=await Ve(e,{idToken:m}).catch(()=>{});if(!A)break;z=await R._fromGetAccountInfoResponse(e,A,m)}else z=R._fromJSON(e,m);o!==s&&(u=z),s=o;break}}catch{}const l=i.filter(o=>o._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new de(s,e,t):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async o=>{if(o!==s)try{await o._remove(a)}catch{}})),new de(s,e,t))}}/**
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
 */function Fn(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yn(e))return"Blackberry";if(er(e))return"Webos";if(Jn(e))return"Safari";if((e.includes("chrome/")||$n(e))&&!e.includes("edge/"))return"Chrome";if(Xn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=r.match(n);if((t==null?void 0:t.length)===2)return t[1]}return"Other"}function jn(r=I()){return/firefox\//i.test(r)}function Jn(r=I()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $n(r=I()){return/crios\//i.test(r)}function Qn(r=I()){return/iemobile/i.test(r)}function Xn(r=I()){return/android/i.test(r)}function Yn(r=I()){return/blackberry/i.test(r)}function er(r=I()){return/webos/i.test(r)}function an(r=I()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gt(r=I()){var e;return an(r)&&!!((e=window.navigator)!=null&&e.standalone)}function dt(){return xr()&&document.documentMode===10}function nr(r=I()){return an(r)||Xn(r)||er(r)||Yn(r)||/windows phone/i.test(r)||Qn(r)}/**
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
 */function rr(r,e=[]){let n;switch(r){case"Browser":n=Fn(I());break;case"Worker":n=`${Fn(I())}-${r}`;break;default:n=r}const t=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fe}/${t}`}/**
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
 */class mt{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const t=s=>new Promise((a,u)=>{try{const l=e(s);a(l)}catch(l){u(l)}});t.onAbort=n,this.queue.push(t);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(t){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t==null?void 0:t.message})}}}/**
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
 */async function ft(r,e={}){return be(r,"GET","/v2/passwordPolicy",tn(r,e))}/**
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
 */const bt=6;class St{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bt,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((t=e.allowedNonAlphanumericCharacters)==null?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const t=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;t&&(n.meetsMinPasswordLength=e.length>=t),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let t;for(let i=0;i<e.length;i++)t=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(e,n,t,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class pt{constructor(e,n,t,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bn(this),this.idTokenSubscription=new Bn(this),this.beforeStateQueue=new mt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Z(n)),this._initializationPromise=this.queue(async()=>{var t,i,s;if(!this._deleted&&(this.persistenceManager=await de.create(this,e),(t=this._resolvePersistenceManagerAvailable)==null||t.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ve(this,{idToken:e}),t=await R._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(t)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(K(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let t=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,u=t==null?void 0:t._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(t=l.user,i=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(t)}catch(a){t=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xe(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xr()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(K(this.app))return Promise.reject(ue(this));const n=e?ne(e):null;return n&&d(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return K(this.app)?Promise.reject(ue(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return K(this.app)?Promise.reject(ue(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Z(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ft(this),n=new St(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xe("auth","Firebase",e())}onAuthStateChanged(e,n,t){return this.registerStateListener(this.authStateSubscription,e,n,t)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,t){return this.registerStateListener(this.idTokenSubscription,e,n,t)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged(()=>{t(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(t.tenantId=this.tenantId),await ot(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const t=await this.getOrInitRedirectPersistenceManager(n);return e===null?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Z(e)||this._popupRedirectResolver;d(n,this,"argument-error"),this.redirectPersistenceManager=await de.create(this,[Z(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,t;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((t=this.redirectUser)==null?void 0:t._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,t,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(d(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,t,i);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const t=await this._getAppCheckToken();return t&&(e["X-Firebase-AppCheck"]=t),e}async _getAppCheckToken(){var n;if(K(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jr(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ye(r){return ne(r)}class Bn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nr(n=>this.observer=n)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ln={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kt(r){ln=r}function wt(r){return ln.loadJS(r)}function zt(){return ln.gapiScript}function Ft(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bt(r,e){const n=yn(r,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(je(s,e??{}))return i;H(i,"already-initialized")}return n.initialize({options:e})}function At(r,e){const n=(e==null?void 0:e.persistence)||[],t=(Array.isArray(n)?n:[n]).map(Z);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(t,e==null?void 0:e.popupRedirectResolver)}function Dt(r,e,n){const t=ye(r);d(/^https?:\/\//.test(e),t,"invalid-emulator-scheme");const i=!1,s=tr(e),{host:a,port:u}=vt(e),l=u===null?"":`:${u}`,o={url:`${s}//${a}${l}/`},m=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!t._canInitEmulator){d(t.config.emulator&&t.emulatorConfig,t,"emulator-config-failed"),d(je(o,t.config.emulator)&&je(m,t.emulatorConfig),t,"emulator-config-failed");return}t.config.emulator=o,t.emulatorConfig=m,t.settings.appVerificationDisabledForTesting=!0,Qe(a)?Vr(`${s}//${a}${l}`):Pt()}function tr(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function vt(r){const e=tr(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const t=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(t);if(i){const s=i[1];return{host:s,port:An(t.substr(s.length+1))}}else{const[s,a]=t.split(":");return{host:s,port:An(a)}}}function An(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Pt(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ir{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return q("not implemented")}_getIdTokenResponse(e){return q("not implemented")}_linkToIdToken(e,n){return q("not implemented")}_getReauthenticationResolver(e){return q("not implemented")}}/**
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
 */async function me(r,e){return rt(r,"POST","/v1/accounts:signInWithIdp",tn(r,e))}/**
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
 */const Lt="http://localhost";class ce extends ir{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):H("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:t,signInMethod:i,...s}=n;if(!t||!i)return null;const a=new ce(t,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return me(e,n)}_linkToIdToken(e,n){const t=this.buildRequest();return t.idToken=n,me(e,t)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,me(e,n)}buildRequest(){const e={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ze(n)}return e}}/**
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
 */class Ae extends un{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class X extends Ae{constructor(){super("facebook.com")}static credential(e){return ce._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.FACEBOOK_SIGN_IN_METHOD="facebook.com";X.PROVIDER_ID="facebook.com";/**
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
 */class C extends Ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ce._fromParams({providerId:C.PROVIDER_ID,signInMethod:C.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return C.credentialFromTaggedObject(e)}static credentialFromError(e){return C.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:t}=e;if(!n&&!t)return null;try{return C.credential(n,t)}catch{return null}}}C.GOOGLE_SIGN_IN_METHOD="google.com";C.PROVIDER_ID="google.com";/**
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
 */class Y extends Ae{constructor(){super("github.com")}static credential(e){return ce._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Y.credential(e.oauthAccessToken)}catch{return null}}}Y.GITHUB_SIGN_IN_METHOD="github.com";Y.PROVIDER_ID="github.com";/**
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
 */class ee extends Ae{constructor(){super("twitter.com")}static credential(e,n){return ce._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:t}=e;if(!n||!t)return null;try{return ee.credential(n,t)}catch{return null}}}ee.TWITTER_SIGN_IN_METHOD="twitter.com";ee.PROVIDER_ID="twitter.com";/**
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
 */class fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,t,i=!1){const s=await R._fromIdTokenResponse(e,t,i),a=Dn(t);return new fe({user:s,providerId:a,_tokenResponse:t,operationType:n})}static async _forOperation(e,n,t){await e._updateTokensIfNecessary(t,!0);const i=Dn(t);return new fe({user:e,providerId:i,_tokenResponse:t,operationType:n})}}function Dn(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ie extends Ye{constructor(e,n,t,i){super(n.code,n.message),this.operationType=t,this.user=i,Object.setPrototypeOf(this,Ie.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,n,t,i){return new Ie(e,n,t,i)}}function sr(r,e,n,t){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ie._fromErrorAndOperation(r,s,e,t):s})}async function Gt(r,e,n=!1){const t=await we(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return fe._forOperation(r,"link",t)}/**
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
 */async function Ut(r,e,n=!1){const{auth:t}=r;if(K(t.app))return Promise.reject(ue(t));const i="reauthenticate";try{const s=await we(r,sr(t,i,e,r),n);d(s.idToken,t,"internal-error");const a=sn(s.idToken);d(a,t,"internal-error");const{sub:u}=a;return d(r.uid===u,t,"user-mismatch"),fe._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&H(t,"user-mismatch"),s}}/**
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
 */async function Et(r,e,n=!1){if(K(r.app))return Promise.reject(ue(r));const t="signIn",i=await sr(r,t,e),s=await fe._fromIdTokenResponse(r,t,i);return n||await r._updateCurrentUser(s.user),s}function Vt(r,e,n,t){return ne(r).onIdTokenChanged(e,n,t)}function xt(r,e,n){return ne(r).beforeAuthStateChanged(e,n)}function It(r,e,n,t){return ne(r).onAuthStateChanged(e,n,t)}function _t(r){return ne(r).signOut()}const _e="__sak";/**
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
 */class ar{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_e,"1"),this.storage.removeItem(_e),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rt=1e3,yt=10;class lr extends ar{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const t=this.storage.getItem(n),i=this.localCache[n];t!==i&&e(n,i,t)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const t=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(t);!n&&this.localCache[t]===a||this.notifyListeners(t,a)},s=this.storage.getItem(t);dt()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yt):i()}notifyListeners(e,n){this.localCache[e]=n;const t=this.listeners[e];if(t)for(const i of Array.from(t))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:t}),!0)})},Rt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lr.type="LOCAL";const Mt=lr;/**
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
 */class ur extends ar{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ur.type="SESSION";const cr=ur;/**
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
 */function Tt(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Me{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const t=new Me(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:t,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:t,eventType:i});const u=Array.from(a).map(async o=>o(n.origin,s)),l=await Tt(u);n.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Me.receivers=[];/**
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
 */function cn(r="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class Wt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,t=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{const o=cn("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},t);a={messageChannel:i,onMessage(z){const A=z;if(A.data.eventId===o)switch(A.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(A.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:o,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function O(){return window}function Nt(r){O().location.href=r}/**
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
 */function hr(){return typeof O().WorkerGlobalScope<"u"&&typeof O().importScripts=="function"}async function Kt(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ot(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Ht(){return hr()?self:null}/**
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
 */const or="firebaseLocalStorageDb",Ct=1,Re="firebaseLocalStorage",gr="fbase_key";class De{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Te(r,e){return r.transaction([Re],e?"readwrite":"readonly").objectStore(Re)}function qt(){const r=indexedDB.deleteDatabase(or);return new De(r).toPromise()}function dr(){const r=indexedDB.open(or,Ct);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const t=r.result;try{t.createObjectStore(Re,{keyPath:gr})}catch(i){n(i)}}),r.addEventListener("success",async()=>{const t=r.result;t.objectStoreNames.contains(Re)?e(t):(t.close(),await qt(),e(await dr()))})})}async function vn(r,e,n){const t=Te(r,!0).put({[gr]:e,value:n});return new De(t).toPromise()}async function Zt(r,e){const n=Te(r,!1).get(e),t=await new De(n).toPromise();return t===void 0?null:t.value}function Pn(r,e){const n=Te(r,!0).delete(e);return new De(n).toPromise()}const jt=800,Jt=3;class mr{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=dr(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(t){if(n++>Jt)throw t;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return hr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Me._getInstance(Ht()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,t;if(this.activeServiceWorker=await Kt(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(t=e[0])!=null&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ot()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await vn(e,_e,"1"),await Pn(e,_e)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(t=>vn(t,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(t=>Zt(t,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Te(i,!1).getAll();return new De(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],t=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)t.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!t.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const t=this.listeners[e];if(t)for(const i of Array.from(t))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mr.type="LOCAL";const $t=mr;new Be(3e4,6e4);/**
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
 */function fr(r,e){return e?Z(e):(d(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class hn extends ir{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,n){return me(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qt(r){return Et(r.auth,new hn(r),r.bypassAuthState)}function Xt(r){const{auth:e,user:n}=r;return d(n,e,"internal-error"),Ut(n,new hn(r),r.bypassAuthState)}async function Yt(r){const{auth:e,user:n}=r;return d(n,e,"internal-error"),Gt(n,new hn(r),r.bypassAuthState)}/**
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
 */class br{constructor(e,n,t,i,s=!1){this.auth=e,this.resolver=t,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:t,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:t,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qt;case"linkViaPopup":case"linkViaRedirect":return Yt;case"reauthViaPopup":case"reauthViaRedirect":return Xt;default:H(this.auth,"internal-error")}}resolve(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){j(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ei=new Be(2e3,1e4);async function ni(r,e,n){if(K(r.app))return Promise.reject(y(r,"operation-not-supported-in-this-environment"));const t=ye(r);Jr(r,e,un);const i=fr(t,n);return new le(t,"signInViaPopup",e,i).executeNotNull()}class le extends br{constructor(e,n,t,i,s){super(e,n,i,s),this.provider=t,this.authWindow=null,this.pollId=null,le.currentPopupAction&&le.currentPopupAction.cancel(),le.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){j(this.filter.length===1,"Popup operations only handle one event");const e=cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,le.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,t;if((t=(n=this.authWindow)==null?void 0:n.window)!=null&&t.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ei.get())};e()}}le.currentPopupAction=null;/**
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
 */const ri="pendingRedirect",Ge=new Map;class ti extends br{constructor(e,n,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,t),this.eventId=null}async execute(){let e=Ge.get(this.auth._key());if(!e){try{const t=await ii(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(n){e=()=>Promise.reject(n)}Ge.set(this.auth._key(),e)}return this.bypassAuthState||Ge.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ii(r,e){const n=li(e),t=ai(r);if(!await t._isAvailable())return!1;const i=await t._get(n)==="true";return await t._remove(n),i}function si(r,e){Ge.set(r._key(),e)}function ai(r){return Z(r._redirectPersistence)}function li(r){return Le(ri,r.config.apiKey,r.name)}async function ui(r,e,n=!1){if(K(r.app))return Promise.reject(ue(r));const t=ye(r),i=fr(t,e),a=await new ti(t,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await t._persistUserIfCurrent(a.user),await t._setRedirectUser(null,e)),a}/**
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
 */const ci=10*60*1e3;class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(e,t)&&(n=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oi(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var t;if(e.error&&!Sr(e)){const i=((t=e.error.code)==null?void 0:t.split("auth/")[1])||"internal-error";n.onError(y(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const t=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ci&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ln(e))}saveEventToCache(e){this.cachedEventUids.add(Ln(e)),this.lastProcessedEventTime=Date.now()}}function Ln(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Sr({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oi(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sr(r);default:return!1}}/**
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
 */async function gi(r,e={}){return be(r,"GET","/v1/projects",e)}/**
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
 */const di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mi=/^https?/;async function fi(r){if(r.config.emulator)return;const{authorizedDomains:e}=await gi(r);for(const n of e)try{if(bi(n))return}catch{}H(r,"unauthorized-domain")}function bi(r){const e=Je(),{protocol:n,hostname:t}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&t===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===t}if(!mi.test(n))return!1;if(di.test(r))return t===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(t)}/**
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
 */const Si=new Be(3e4,6e4);function Gn(){const r=O().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function pi(r){return new Promise((e,n)=>{var i,s,a;function t(){Gn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gn(),n(y(r,"network-request-failed"))},timeout:Si.get()})}if((s=(i=O().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=O().gapi)!=null&&a.load)t();else{const u=Ft("iframefcb");return O()[u]=()=>{gapi.load?t():n(y(r,"network-request-failed"))},wt(`${zt()}?onload=${u}`).catch(l=>n(l))}}).catch(e=>{throw Ue=null,e})}let Ue=null;function ki(r){return Ue=Ue||pi(r),Ue}/**
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
 */const wi=new Be(5e3,15e3),zi="__/auth/iframe",Fi="emulator/auth/iframe",Bi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Di(r){const e=r.config;d(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?rn(e,Fi):`https://${r.config.authDomain}/${zi}`,t={apiKey:e.apiKey,appName:r.name,v:Fe},i=Ai.get(r.config.apiHost);i&&(t.eid=i);const s=r._getFrameworks();return s.length&&(t.fw=s.join(",")),`${n}?${ze(t).slice(1)}`}async function vi(r){const e=await ki(r),n=O().gapi;return d(n,r,"internal-error"),e.open({where:document.body,url:Di(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bi,dontclear:!0},t=>new Promise(async(i,s)=>{await t.restyle({setHideOnLeave:!1});const a=y(r,"network-request-failed"),u=O().setTimeout(()=>{s(a)},wi.get());function l(){O().clearTimeout(u),i(t)}t.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Pi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Li=500,Gi=600,Ui="_blank",Ei="http://localhost";class Un{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vi(r,e,n,t=Li,i=Gi){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-t)/2,0).toString();let u="";const l={...Pi,width:t.toString(),height:i.toString(),top:s,left:a},o=I().toLowerCase();n&&(u=$n(o)?Ui:n),jn(o)&&(e=e||Ei,l.scrollbars="yes");const m=Object.entries(l).reduce((A,[F,_])=>`${A}${F}=${_},`,"");if(gt(o)&&u!=="_self")return xi(e||"",u),new Un(null);const z=window.open(e||"",u,m);d(z,r,"popup-blocked");try{z.focus()}catch{}return new Un(z)}function xi(r,e){const n=document.createElement("a");n.href=r,n.target=e;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(t)}/**
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
 */const Ii="__/auth/handler",_i="emulator/auth/handler",Ri=encodeURIComponent("fac");async function En(r,e,n,t,i,s){d(r.config.authDomain,r,"auth-domain-config-required"),d(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:t,v:Fe,eventId:i};if(e instanceof un){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Ir(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,z]of Object.entries({}))a[m]=z}if(e instanceof Ae){const m=e.getScopes().filter(z=>z!=="");m.length>0&&(a.scopes=m.join(","))}r.tenantId&&(a.tid=r.tenantId);const u=a;for(const m of Object.keys(u))u[m]===void 0&&delete u[m];const l=await r._getAppCheckToken(),o=l?`#${Ri}=${encodeURIComponent(l)}`:"";return`${yi(r)}?${ze(u).slice(1)}${o}`}function yi({config:r}){return r.emulator?rn(r,_i):`https://${r.authDomain}/${Ii}`}/**
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
 */const Ce="webStorageSupport";class Mi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cr,this._completeRedirectFn=ui,this._overrideRedirectResult=si}async _openPopup(e,n,t,i){var a;j((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await En(e,n,t,Je(),i);return Vi(e,s,cn())}async _openRedirect(e,n,t,i){await this._originValidation(e);const s=await En(e,n,t,Je(),i);return Nt(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(j(s,"If manager is not set, promise should be"),s)}const t=this.initAndGetManager(e);return this.eventManagers[n]={promise:t},t.catch(()=>{delete this.eventManagers[n]}),t}async initAndGetManager(e){const n=await vi(e),t=new hi(e);return n.register("authEvent",i=>(d(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:t.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=n,t}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ce,{type:Ce},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[Ce];s!==void 0&&n(!!s),H(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fi(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nr()||Jn()||an()}}const Ti=Mi;var Vn="@firebase/auth",xn="1.13.3";/**
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
 */class Wi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(t=>{e((t==null?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ni(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ki(r){gn(new dn("auth",(e,{options:n})=>{const t=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=t.options;d(a&&!a.includes(":"),"invalid-api-key",{appName:t.name});const l={apiKey:a,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rr(r)},o=new pt(t,i,s,l);return At(o,n),o},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,t)=>{e.getProvider("auth-internal").initialize()})),gn(new dn("auth-internal",e=>{const n=ye(e.getProvider("auth").getImmediate());return(t=>new Wi(t))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Vn,xn,Ni(r)),mn(Vn,xn,"esm2020")}/**
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
 */const Oi=5*60,Hi=Mn("authIdTokenMaxAge")||Oi;let In=null;const Ci=r=>async e=>{const n=e&&await e.getIdTokenResult(),t=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(t&&t>Hi)return;const i=n==null?void 0:n.token;In!==i&&(In=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qi(r=Tn()){const e=yn(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Bt(r,{popupRedirectResolver:Ti,persistence:[$t,Mt,cr]}),t=Mn("authTokenSyncURL");if(t&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(t,location.origin);if(location.origin===s.origin){const a=Ci(s.toString());xt(n,a,()=>a(n.currentUser)),Vt(n,u=>a(u))}}const i=Er("auth");return i&&Dt(n,`http://${i}`),n}function Zi(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}kt({loadJS(r){return new Promise((e,n)=>{const t=document.createElement("script");t.setAttribute("src",r),t.onload=e,t.onerror=i=>{const s=y("internal-error");s.customData=i,n(s)},t.type="text/javascript",t.charset="UTF-8",Zi().appendChild(t)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ki("Browser");const ji={apiKey:"AIzaSyBVstRMIRoxz5ghA5IuiQb_et-lIID1WS8",authDomain:"pruefung-schulrecht-schulorga.firebaseapp.com",projectId:"pruefung-schulrecht-schulorga",storageBucket:"pruefung-schulrecht-schulorga.firebasestorage.app",messagingSenderId:"232869602043",appId:"1:232869602043:web:a08e10d560e30bb0a0c65e"},qe="pruefung-lernapp";function pe(){const r=Kr().some(e=>e.name===qe)?Tn(qe):Or(ji,qe);return{app:r,auth:qi(r),db:Hr(r)}}const Ze=r=>Date.parse(`${r}T00:00:00Z`)/864e5;function Ji(r,e,n){const t=Ze("2026-09-10"),i=Ze("2026-10-05"),s=Ze(n),a=Math.max(0,i-Math.max(t,s)),u=8,l=Math.min(r,Math.max(0,s-t)*u),o=Math.min(r,Math.max(0,s-t+1)*u);return{days:a,expected:l,target:o,behind:Math.max(0,l-e),daily:u,todayRemaining:o-e,remaining:Math.max(0,r-e)}}function $i(r){const e=L(null),n=L(!1),t=L(!1),i=L(!1),s=L(new Set),a=L({}),u=L({}),l=L({}),o=L({}),m=L(""),z=L("");let A,F,_;const J=()=>{z.value=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)},M=S=>({"auth/popup-closed-by-user":"Anmeldung abgebrochen. Du kannst sie erneut starten.","auth/popup-blocked":"Bitte erlaube das Anmeldefenster in deinem Browser.","auth/unauthorized-domain":"Diese Domain muss in Firebase Authentication als autorisierte Domain eingetragen werden.","auth/network-request-failed":"Keine Verbindung. Bitte prüfe deine Internetverbindung.","permission-denied":"Lernstand nicht zugänglich. Bitte die Firestore-Zugriffsregeln veröffentlichen."})[S.code]||"Die Verbindung zu Firebase ist fehlgeschlagen. Bitte versuche es erneut.";wr(()=>{J(),_=setInterval(J,6e4);const{auth:S,db:x}=pe();A=It(S,P=>{F==null||F(),e.value=P,a.value={},u.value={},l.value={},o.value={},t.value=!1,m.value="",n.value=!0,P&&(F=Cr(qr(x,"learners",P.uid,"questions"),{includeMetadataChanges:!0},D=>{var W;((W=e.value)==null?void 0:W.uid)===P.uid&&(a.value=Object.fromEntries(D.docs.filter(U=>r.has(U.id)).map(U=>[U.id,U.data().status])),u.value=Object.fromEntries(D.docs.filter(U=>r.has(U.id)).map(U=>[U.id,U.data().note||""])),t.value=!D.metadata.fromCache,m.value=D.metadata.hasPendingWrites?"Änderungen werden gespeichert …":D.metadata.fromCache?"Warte auf Verbindung zum gespeicherten Lernstand …":"Lernstand mit Firebase synchronisiert.")},D=>{t.value=!1,m.value=M(D)}))},P=>{n.value=!0,m.value=M(P)})}),zr(()=>{A==null||A(),F==null||F(),clearInterval(_)});const re=async()=>{i.value=!0,m.value="";try{await ni(pe().auth,new C)}catch(S){m.value=M(S)}finally{i.value=!1}},he=async()=>{i.value=!0;try{await _t(pe().auth)}catch(S){m.value=M(S)}finally{i.value=!1}},We=async(S,x)=>{var D;if(!e.value||!t.value||s.value.has(S)||!r.has(S)||!["open","review","secure"].includes(x))return;const P=e.value.uid;s.value.add(S);try{await fn(bn(pe().db,"learners",P,"questions",S),{status:x,updatedAt:Sn()},{merge:!0})}catch(W){((D=e.value)==null?void 0:D.uid)===P&&(m.value=M(W))}finally{s.value.delete(S)}},Ne=(S,x)=>{l.value[S]=x,o.value[S]="Ungespeicherte Änderung."},Ke=async S=>{var D,W;if(!e.value||!t.value||s.value.has(S)||!r.has(S))return;const x=l.value[S]??u.value[S]??"";if(x.length>1e4)return;const P=e.value.uid;s.value.add(S),o.value[S]="Wird gespeichert …";try{await fn(bn(pe().db,"learners",P,"questions",S),{note:x,updatedAt:Sn()},{merge:!0}),((D=e.value)==null?void 0:D.uid)===P&&(u.value[S]=x,l.value[S]===x&&delete l.value[S],o.value[S]="Bemerkung gespeichert.")}catch(U){((W=e.value)==null?void 0:W.uid)===P&&(o.value[S]="Nicht gespeichert. "+M(U))}finally{s.value.delete(S)}},te=Q(()=>Object.values(a.value).filter(S=>S==="secure").length),ie=Q(()=>Object.values(a.value).filter(S=>S==="review").length),T=Q(()=>z.value?Ji(r.size,te.value,z.value):null);return{user:e,ready:n,loaded:t,busy:i,pending:s,progress:a,message:m,today:z,learned:te,review:ie,plan:T,login:re,logout:he,setStatus:We,notes:u,noteDrafts:l,noteMessages:o,editNote:Ne,saveNote:Ke}}const oe=[{id:"cluster-1",title:"Rechtliche Grundlagen und Bildungsauftrag",topics:[{title:"Verfassung und staatliche Prinzipien",sources:[{document:"Schulrecht",pages:"1-2",page:1},{document:"Schulorganisation",pages:"1",page:1}],questions:[{id:"schulrecht-1",document:"Schulrecht",page:1,question:"Beschreiben sie anhand von Beispielen die rechtlichen Grundlagen des Schulwesens.",answerIntro:"Die rechtlichen Grundlagen des Schulwesens finden sich auf verschiedenen Ebenen.",answerSections:[{title:"1. Das Grundgesetz",description:"Hier gelten an oberster Stelle die Staatsstrukturprinzipien:",items:[{term:"Rechtsstaatsprinzip",explanation:"Staatliches Handeln ist an Recht und Gesetz gebunden. Schule darf nicht willkürlich handeln. Beispiel: Erziehungs- und Ordnungsmaßnahmen nach § 90 SchG."},{term:"Demokratieprinzip",explanation:"Demokratische Mitwirkung, beispielsweise durch SMV, Elternvertretung und Schulkonferenz."},{term:"Sozialstaatsprinzip",explanation:"Chancengleichheit, Förderung und Unterstützung."},{term:"Bundesstaatsprinzip",explanation:"Deutschland ist ein Bundesstaat. Bund und Länder teilen sich staatliche Aufgaben."}]},{title:"2. Relevante Artikel des Grundgesetzes",items:[{term:"Art. 6 GG · Elternrecht: Pflege und Erziehung",explanation:"Pflege und Erziehung der Kinder sind Recht und Pflicht der Eltern. Elternrecht und staatlicher Bildungs- und Erziehungsauftrag müssen miteinander in Einklang gebracht werden.",lawLabel:"Art. 6 Abs. 2 GG",lawText:"(2) Pflege und Erziehung der Kinder sind das natürliche Recht der Eltern und die zuvörderst ihnen obliegende Pflicht. Über ihre Betätigung wacht die staatliche Gemeinschaft.",sourceUrl:"https://www.gesetze-im-internet.de/gg/art_6.html"},{term:"Art. 7 GG · Staatliche Schulaufsicht",explanation:"Das gesamte Schulwesen steht unter staatlicher Aufsicht. Daraus wird der staatliche Bildungs- und Erziehungsauftrag hergeleitet. Landesverfassung und Schulgesetz gestalten ihn konkret aus.",lawLabel:"Art. 7 Abs. 1 GG",lawText:"(1) Das gesamte Schulwesen steht unter der Aufsicht des Staates.",sourceUrl:"https://www.gesetze-im-internet.de/gg/art_7.html"},{term:"Art. 30 GG · Staatliche Aufgaben: grundsätzlich Länder",explanation:"Staatliche Aufgaben sind grundsätzlich Sache der Länder, soweit das Grundgesetz nichts anderes bestimmt.",lawLabel:"Art. 30 GG",lawText:"Die Ausübung der staatlichen Befugnisse und die Erfüllung der staatlichen Aufgaben ist Sache der Länder, soweit dieses Grundgesetz keine andere Regelung trifft oder zuläßt.",sourceUrl:"https://www.gesetze-im-internet.de/gg/art_30.html"},{term:"Art. 70 GG · Gesetzgebung: grundsätzlich Länder",explanation:"Die Länder haben grundsätzlich das Gesetzgebungsrecht, soweit das Grundgesetz es nicht dem Bund zuweist. Für das Schulwesen folgt daraus grundsätzlich die Zuständigkeit der Länder. Beispiel: Schulgesetz Baden-Württemberg.",lawLabel:"Art. 70 Abs. 1 GG",lawText:"(1) Die Länder haben das Recht der Gesetzgebung, soweit dieses Grundgesetz nicht dem Bunde Gesetzgebungsbefugnisse verleiht.",sourceUrl:"https://www.gesetze-im-internet.de/gg/art_70.html"}]},{title:"3. Landesverfassung Baden-Württemberg",items:[{term:"Art. 11 LV · Recht auf Erziehung und Ausbildung",explanation:"Junge Menschen haben unabhängig von Herkunft und wirtschaftlicher Lage ein Recht auf eine ihrer Begabung entsprechende Erziehung und Ausbildung.",lawLabel:"Art. 11 Abs. 1 LV",lawText:"(1) Jeder junge Mensch hat ohne Rücksicht auf Herkunft oder wirtschaftliche Lage das Recht auf eine seiner Begabung entsprechende Erziehung und Ausbildung.",sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=123",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"Art. 12 LV · Erziehungsziele",explanation:"Die Landesverfassung nennt die grundlegenden Ziele der Erziehung, darunter Friedensliebe, Verantwortlichkeit und demokratische Gesinnung.",lawLabel:"Art. 12 Abs. 1 LV",lawText:"(1) Die Jugend ist in Ehrfurcht vor Gott, im Geiste der christlichen Nächstenliebe, zur Brüderlichkeit aller Menschen und zur Friedensliebe, in der Liebe zu Volk und Heimat, zu sittlicher und politischer Verantwortlichkeit, zu beruflicher und sozialer Bewährung und zu freiheitlicher demokratischer Gesinnung zu erziehen.",sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=123",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"Art. 14 LV · Schulpflicht und Unentgeltlichkeit",explanation:"Es besteht allgemeine Schulpflicht. Unterricht und Lernmittel an öffentlichen Schulen sind unentgeltlich.",lawLabel:"Art. 14 Abs. 1 und Abs. 2 Satz 1 LV",lawText:`(1) Es besteht allgemeine Schulpflicht.

(2) Unterricht und Lernmittel an den öffentlichen Schulen sind unentgeltlich.`,sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=124",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"Art. 15 LV · Schulform und Elternrechte",explanation:"Absatz 1 regelt die Schulform der öffentlichen Volksschulen (Grund- und Hauptschulen). Absatz 3 verlangt, das Mitbestimmungsrecht der Eltern bei der Gestaltung des Erziehungs- und Schulwesens zu berücksichtigen.",lawLabel:"Art. 15 Abs. 1 und 3 LV",lawText:`(1) Die öffentlichen Volksschulen (Grund- und Hauptschulen) haben die Schulform der christlichen Gemeinschaftsschule nach den Grundsätzen und Bestimmungen, die am 9. Dezember 1951 in Baden für die Simultanschule mit christlichem Charakter gegolten haben.

(3) Das natürliche Recht der Eltern, die Erziehung und Bildung ihrer Kinder mitzubestimmen, muss bei der Gestaltung des Erziehungs- und Schulwesens berücksichtigt werden.`,sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=124",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"Art. 17 LV · Schulaufsicht und Elternvertretung",explanation:"Die Schulaufsicht wird durch fachlich vorgebildete, hauptamtliche Beamte ausgeübt. Eltern wirken durch gewählte Vertreter am Schulleben mit.",lawLabel:"Art. 17 Abs. 2 und 4 LV",lawText:`(2) Die Schulaufsicht wird durch fachmännisch vorgebildete, hauptamtlich tätige Beamte ausgeübt.

(4) Die Erziehungsberechtigten wirken durch gewählte Vertreter an der Gestaltung des Lebens und der Arbeit der Schule mit. Näheres regelt ein Gesetz.`,sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=125",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"Konkretisierung durch Gesetze",explanation:"Die Landesverfassung gibt den Rahmen vor. Einzelheiten werden durch Gesetze ausgestaltet, für den Schulbereich insbesondere durch das Schulgesetz.",lawLabel:"Art. 11 Abs. 4 LV",lawText:"(4) Das Nähere regelt ein Gesetz.",sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=123",sourceLabel:"Quelle · Gesetzestext (PDF)"}]},{title:"4. Schulgesetz Baden-Württemberg",items:[{term:"§ 1 SchG · Erziehungs- und Bildungsauftrag",explanation:"Das Schulgesetz konkretisiert den verfassungsrechtlichen Auftrag der Schule. Schule vermittelt nicht nur Wissen, sondern erfüllt auch einen Erziehungsauftrag.",lawLabel:"§ 1 Abs. 2 Satz 1 SchG",lawText:"Die Schule hat den in der Landesverfassung verankerten Erziehungs- und Bildungsauftrag zu verwirklichen.",sourceUrl:"https://lzk-bw.de/PHB/PHB-CD/Gesetze_Vorschriften/Landesgesetze/Schulgesetz.pdf#page=8",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"§ 23 SchG · Rechtsstellung der Schule",explanation:"Öffentliche Schulen sind nichtrechtsfähige öffentliche Anstalten. § 23 regelt ihre rechtliche Stellung.",lawLabel:"§ 23 Abs. 1 Satz 1 SchG",lawText:"Die öffentlichen Schulen sind nichtrechtsfähige öffentliche Anstalten.",sourceUrl:"https://lzk-bw.de/PHB/PHB-CD/Gesetze_Vorschriften/Landesgesetze/Schulgesetz.pdf#page=22",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"§ 41 SchG · Leitung und Verwaltung",explanation:"Die Schulleitung leitet und verwaltet die Schule und trägt Verantwortung für eine geordnete und sachgemäße Schularbeit.",lawLabel:"§ 41 Abs. 1 Sätze 1–2 SchG",lawText:"Der Schulleiter ist Vorsitzender der Gesamtlehrerkonferenz. Er leitet und verwaltet die Schule und ist, unterstützt von der Gesamtlehrerkonferenz, verantwortlich für die Besorgung aller Angelegenheiten der Schule und für eine geordnete und sachgemäße Schularbeit, soweit nicht aufgrund dieses Gesetzes etwas anderes bestimmt ist.",sourceUrl:"https://lzk-bw.de/PHB/PHB-CD/Gesetze_Vorschriften/Landesgesetze/Schulgesetz.pdf#page=34",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"§ 90 SchG · Erziehungs- und Ordnungsmaßnahmen",explanation:"Diese Maßnahmen sichern den Erziehungs- und Bildungsauftrag, die Schulbesuchspflicht, die Schulordnung und den Schutz von Personen und Sachen.",lawLabel:"§ 90 Abs. 1 SchG",lawText:"(1) Erziehungs- und Ordnungsmaßnahmen dienen der Verwirklichung des Erziehungs- und Bildungsauftrags der Schule, der Erfüllung der Schulbesuchspflicht, der Einhaltung der Schulordnung und dem Schutz von Personen und Sachen innerhalb der Schule.",sourceUrl:"https://lzk-bw.de/PHB/PHB-CD/Gesetze_Vorschriften/Landesgesetze/Schulgesetz.pdf#page=63",sourceLabel:"Quelle · Gesetzestext (PDF)"}]},{title:"5. Weitere rechtliche Regelungen",items:[{term:"Rechtsverordnungen · gesetzliche Ermächtigung · NVO",explanation:"Rechtsverordnungen werden aufgrund einer gesetzlichen Ermächtigung erlassen. Ein Beispiel im Schulbereich ist die Notenbildungsverordnung (NVO). Der folgende Gesetzestext beschreibt die Grundlage für den Erlass, nicht den Inhalt der NVO.",lawLabel:"Art. 61 Abs. 1 LV",lawText:"(1) Die Ermächtigung zum Erlass von Rechtsverordnungen kann nur durch Gesetz erteilt werden. Dabei müssen Inhalt, Zweck und Ausmaß der erteilten Ermächtigung bestimmt werden. Die Rechtsgrundlage ist in der Verordnung anzugeben.",sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=137",sourceLabel:"Quelle · Gesetzestext (PDF)"},{term:"Verwaltungsvorschriften · interne Vorgaben",explanation:"Verwaltungsvorschriften geben der Verwaltung interne Vorgaben. Sie haben grundsätzlich keine unmittelbare Außenwirkung. Der folgende Gesetzestext regelt die Zuständigkeit für ihren Erlass, nicht diese Begriffsdefinition.",lawLabel:"Art. 61 Abs. 2 LV",lawText:"(2) Die zur Ausführung der Gesetze erforderlichen Rechtsverordnungen und Verwaltungsvorschriften erlässt, soweit die Gesetze nichts anderes bestimmen, die Regierung.",sourceUrl:"https://www.lpb-bw.de/fileadmin/lpb_hauptportal/pdf/Landesverfassung-BW.pdf#page=137",sourceLabel:"Quelle · Gesetzestext (PDF)"}]}],answer:`1. Grundgesetz (GG) – was folgt daraus für die Schule?

Das Grundgesetz enthält die verfassungsrechtlichen Grundlagen. Staatsstrukturprinzipien sind die grundlegenden Prinzipien, nach denen der deutsche Staat aufgebaut ist und handelt.

Bundesstaatsprinzip: Warum ist Schule Ländersache?

• Art. 20 Abs. 1 GG: Deutschland ist ein Bundesstaat. Bund und Länder teilen sich staatliche Aufgaben.
• Art. 30 GG: Grundsätzlich sind die Länder für staatliche Aufgaben zuständig, soweit das Grundgesetz nichts anderes bestimmt.
• Ergänzend Art. 70 Abs. 1 GG: Auch das Gesetzgebungsrecht liegt grundsätzlich bei den Ländern, soweit das Grundgesetz es nicht dem Bund zuweist.

→ Das Schulwesen ist grundsätzlich Ländersache. Deshalb gibt es beispielsweise das Schulgesetz Baden-Württemberg und kein einheitliches deutsches Schulgesetz.

Welche Vorgaben macht das Grundgesetz trotzdem für die Schule?

• Art. 7 Abs. 1 GG: Das gesamte Schulwesen steht unter staatlicher Aufsicht. Daraus wird der staatliche Bildungs- und Erziehungsauftrag hergeleitet. Landesverfassung und Schulgesetz gestalten ihn konkret aus.
• Art. 6 Abs. 2 GG: Pflege und Erziehung der Kinder sind Recht und Pflicht der Eltern.

→ In der Schule treffen Elternrecht und staatlicher Bildungs- und Erziehungsauftrag aufeinander. Beide müssen miteinander in Einklang gebracht werden.

Weitere Staatsstrukturprinzipien und ihre Bedeutung für die Schule:

• Rechtsstaatsprinzip: Staatliches Handeln ist an Recht und Gesetz gebunden. Schule darf nicht willkürlich handeln. Beispiel: Erziehungs- und Ordnungsmaßnahmen nach § 90 SchG.
• Demokratieprinzip: Demokratische Mitwirkung, beispielsweise durch SMV, Elternvertretung und Schulkonferenz.
• Sozialstaatsprinzip: Chancengleichheit, Förderung und Unterstützung.

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

grundsätzlich keine unmittelbare Außenwirkung`},{id:"schulrecht-2",document:"Schulrecht",page:2,question:"Wie zeigen sich die Umsetzung von Rechtsstaatsprinzip, Demokratieprinzip, Sozialstaatsprinzip und Bundesstaatsprinzip im Schulwesen?",answerSections:[{title:"Staatsstrukturprinzipien im Schulalltag",items:[{term:"Rechtsstaatsprinzip",explanation:"Die Schule ist an Recht und Gesetz gebunden. Insbesondere Eingriffe von besonderer Intensität in die Rechte von Schülern benötigen eine gesetzliche Grundlage.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Demokratieprinzip",explanation:"Beteiligung und Mitwirkung der am Schulleben beteiligten Gruppen an Entscheidungen.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Sozialstaatsprinzip",explanation:"Der Staat ermöglicht Bildung unabhängig von den wirtschaftlichen und sozialen Voraussetzungen und unterstützt bzw. fördert Schüler, die Unterstützung benötigen.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Bundesstaatsprinzip",explanation:"Das Schulwesen ist grundsätzlich Ländersache. Deshalb hat Baden-Württemberg ein eigenes Schulgesetz.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"}]}],answer:`Rechtsstaatsprinzip

Die Schule ist an Recht und Gesetz gebunden. Insbesondere Eingriffe von besonderer Intensität in die Rechte von Schülern benötigen eine gesetzliche Grundlage.

Demokratieprinzip

Beteiligung und Mitwirkung der am Schulleben beteiligten Gruppen an Entscheidungen.

Sozialstaatsprinzip

Der Staat ermöglicht Bildung unabhängig von den wirtschaftlichen und sozialen Voraussetzungen und unterstützt bzw. fördert Schüler, die Unterstützung benötigen.

Bundesstaatsprinzip

Das Schulwesen ist grundsätzlich Ländersache. Deshalb hat Baden-Württemberg ein eigenes Schulgesetz.`},{id:"schulorganisation-1",document:"Schulorganisation",page:1,question:"Welche zentralen Inhalte regelt Art. 7 GG?",answerSections:[{title:"Schulwesen im Grundgesetz",items:[{term:"Art. 7 GG · Regelungsbereiche",explanation:`Art. 7 GG → staatliche Schulaufsicht, Religionsunterricht und Privatschulen

Art. 7 GG regelt nur bestimmte zentrale Bereiche des Schulwesens:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 7 Abs. 1 GG · Staatliche Schulaufsicht",explanation:`Der Staat beaufsichtigt öffentliche und private Schulen.

Einfach erklärt: Er trägt die Verantwortung dafür, dass Schulen ihren Auftrag erfüllen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 7 Abs. 2 GG · Teilnahme am Religionsunterricht",explanation:`Die Erziehungsberechtigten entscheiden über die Teilnahme ihres Kindes am Religionsunterricht.

Einfach erklärt: Der Absatz regelt, wer über die Teilnahme entscheidet. Die eigene Religionsmündigkeit ist zusätzlich zu beachten.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 7 Abs. 3 GG · Religionsunterricht als Lehrfach",explanation:`Religionsunterricht ist an öffentlichen Schulen grundsätzlich ordentliches Lehrfach; bekenntnisfreie Schulen sind ausgenommen. Seine Inhalte entsprechen den Grundsätzen der Religionsgemeinschaften.

Beispiel: Eine Lehrkraft darf nicht gegen ihren Willen zum Erteilen von Religionsunterricht verpflichtet werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 7 Abs. 4 GG · Privatschulen",explanation:`Private Schulen dürfen gegründet werden. Ersatzschulen brauchen eine staatliche Genehmigung und müssen Qualitätsanforderungen erfüllen.

Beispiel: Eine Ersatzschule darf die Auswahl ihrer Schüler nach dem Vermögen der Eltern nicht fördern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 7 Abs. 5 GG · Private Volksschulen",explanation:`Für private Volksschulen gelten zusätzliche Zulassungsvoraussetzungen. Ein möglicher Grund ist ein anerkanntes besonderes pädagogisches Interesse.

Einfach erklärt: Ein besonderes pädagogisches Konzept kann die Zulassung begründen; nicht jede Schulgründung erfüllt diese Voraussetzung automatisch.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 7 Abs. 6 GG · Keine historischen Vorschulen",explanation:`Die früheren Vorschulen bleiben abgeschafft.

Einfach erklärt: Gemeint sind besondere schulische Vorstufen vor weiterführenden Schulen, nicht die heutige Vorschularbeit im Kindergarten.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]},{term:"Art. 30 und 70 GG · Länderzuständigkeit",explanation:`Die konkrete Schulorganisation ist grundsätzlich Sache der Länder.

Beispiel: Baden-Württemberg hat ein eigenes Schulgesetz. Diese Zuständigkeit ergibt sich aus Art. 30 und 70 GG.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 30 GG · Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_30.html"},{label:"Art. 70 GG · Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_70.html"}]},{term:"Art. 7 Abs. 1 GG · Schulhoheit",explanation:`Staatliche Schulaufsicht umfasst auch die Gestaltung des Schulwesens.

Beispiel: Der Staat legt Bildungspläne fest und regelt die Schulorganisation.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1",lawLinks:[{label:"Art. 7 GG · vollständiger Gesetzestext",url:"https://www.gesetze-im-internet.de/gg/art_7.html"}]}]}],answer:`Art. 7 GG → staatliche Schulaufsicht, Religionsunterricht und Privatschulen

Art. 7 GG regelt nur bestimmte zentrale Bereiche des Schulwesens:

Art. 7 Abs. 1 GG · Staatliche Schulaufsicht

Der Staat beaufsichtigt öffentliche und private Schulen.

Einfach erklärt: Er trägt die Verantwortung dafür, dass Schulen ihren Auftrag erfüllen.

Art. 7 Abs. 2 GG · Teilnahme am Religionsunterricht

Die Erziehungsberechtigten entscheiden über die Teilnahme ihres Kindes am Religionsunterricht.

Einfach erklärt: Der Absatz regelt, wer über die Teilnahme entscheidet. Die eigene Religionsmündigkeit ist zusätzlich zu beachten.

Art. 7 Abs. 3 GG · Religionsunterricht als Lehrfach

Religionsunterricht ist an öffentlichen Schulen grundsätzlich ordentliches Lehrfach; bekenntnisfreie Schulen sind ausgenommen. Seine Inhalte entsprechen den Grundsätzen der Religionsgemeinschaften.

Beispiel: Eine Lehrkraft darf nicht gegen ihren Willen zum Erteilen von Religionsunterricht verpflichtet werden.

Art. 7 Abs. 4 GG · Privatschulen

Private Schulen dürfen gegründet werden. Ersatzschulen brauchen eine staatliche Genehmigung und müssen Qualitätsanforderungen erfüllen.

Beispiel: Eine Ersatzschule darf die Auswahl ihrer Schüler nach dem Vermögen der Eltern nicht fördern.

Art. 7 Abs. 5 GG · Private Volksschulen

Für private Volksschulen gelten zusätzliche Zulassungsvoraussetzungen. Ein möglicher Grund ist ein anerkanntes besonderes pädagogisches Interesse.

Einfach erklärt: Ein besonderes pädagogisches Konzept kann die Zulassung begründen; nicht jede Schulgründung erfüllt diese Voraussetzung automatisch.

Art. 7 Abs. 6 GG · Keine historischen Vorschulen

Die früheren Vorschulen bleiben abgeschafft.

Einfach erklärt: Gemeint sind besondere schulische Vorstufen vor weiterführenden Schulen, nicht die heutige Vorschularbeit im Kindergarten.

Art. 30 und 70 GG · Länderzuständigkeit

Die konkrete Schulorganisation ist grundsätzlich Sache der Länder.

Beispiel: Baden-Württemberg hat ein eigenes Schulgesetz. Diese Zuständigkeit ergibt sich aus Art. 30 und 70 GG.

Art. 7 Abs. 1 GG · Schulhoheit

Staatliche Schulaufsicht umfasst auch die Gestaltung des Schulwesens.

Beispiel: Der Staat legt Bildungspläne fest und regelt die Schulorganisation.`},{id:"schulorganisation-18",document:"Schulorganisation",page:6,question:"Für welche Bereiche hat das Grundgesetz Gültigkeit im Schulwesen? Nennen Sie drei und erläutern Sie Absicht und Einfluss.",answerSections:[{title:"Drei schulbezogene Bereiche des GG",items:[{term:"Staatliche Schulaufsicht",explanation:`Drei besonders wichtige Bereiche aus Art. 7 GG:

1. Staatliche Schulaufsicht

Der Staat trägt Verantwortung für das Schulwesen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Religionsunterricht",explanation:`2. Religionsunterricht

Das GG enthält besondere Garantien und Regelungen für Religionsunterricht.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Privatschulen",explanation:`3. Privatschulen

Das Recht zur Errichtung privater Schulen wird geschützt, zugleich gelten

Genehmigungsvoraussetzungen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Überblick",explanation:`Die Präsentation fasst Art. 7 genau mit diesen drei Bereichen zusammen:

Staatsaufsicht – Religionsunterricht – Privatschulen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"}]}],answer:`Drei besonders wichtige Bereiche aus Art. 7 GG:

1. Staatliche Schulaufsicht

Der Staat trägt Verantwortung für das Schulwesen.

2. Religionsunterricht

Das GG enthält besondere Garantien und Regelungen für Religionsunterricht.

3. Privatschulen

Das Recht zur Errichtung privater Schulen wird geschützt, zugleich gelten

Genehmigungsvoraussetzungen.

Die Präsentation fasst Art. 7 genau mit diesen drei Bereichen zusammen:

Staatsaufsicht – Religionsunterricht – Privatschulen.`}]},{title:"Normen und Verwaltungshandeln",sources:[{document:"Schulrecht",pages:"1-4",page:1},{document:"Schulorganisation",pages:"4",page:4}],questions:[{id:"schulrecht-3",document:"Schulrecht",page:2,question:"Was versteht man unter der Normenpyramide?",answerSections:[{title:"Erklärung",items:[{term:"Rangordnung der Rechtsnormen",explanation:`Die Normenpyramide stellt die Rangordnung der Rechtsnormen dar. Niederrangiges Recht darf höherrangigem Recht nicht widersprechen.

Eine Rechtsnorm ist eine einzelne rechtlich verbindliche Regel.

Ein Gesetz ist ein Regelwerk, das viele solcher Rechtsnormen enthält.

Beispiel Schulgesetz Baden-Württemberg:

Das Schulgesetz (SchG) ist das Gesetz, darin stehen viele einzelne Rechtsnormen, z. B.:

§ 1 SchG → Erziehungs- und Bildungsauftrag

§ 41 SchG → Aufgaben des Schulleiters

§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"}]},{title:"Normenpyramide",items:[{term:"Grundgesetz",explanation:`Grundgesetz

formelles Gesetz mit Bundesverfassungsrang`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Landesverfassung",explanation:`Landesverfassung Baden-Württemberg (LV)

formelles Gesetz mit Landesverfassungsrang`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Schulgesetz",explanation:`Schulgesetz BW (SchG)

formelles, einfaches Landesgesetz`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Rechtsverordnungen",explanation:`Rechtsverordnungen (VO)

z.B. Notenbildungsverordnung (NVO)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"},{term:"Verwaltungsvorschriften",explanation:`Verwaltungsvorschriften (VwV)

verwaltungsinterne Regelungen, z.B. Verwaltungsvorschriften des Kultusministeriums`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=2",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 2"}]}],answer:`Die Normenpyramide stellt die Rangordnung der Rechtsnormen dar. Niederrangiges Recht darf höherrangigem Recht nicht widersprechen.

Eine Rechtsnorm ist eine einzelne rechtlich verbindliche Regel.

Ein Gesetz ist ein Regelwerk, das viele solcher Rechtsnormen enthält.

Beispiel Schulgesetz Baden-Württemberg:

Das Schulgesetz (SchG) ist das Gesetz, darin stehen viele einzelne Rechtsnormen, z. B.:

§ 1 SchG → Erziehungs- und Bildungsauftrag

§ 41 SchG → Aufgaben des Schulleiters

§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen

Normenpyramide

Grundgesetz

formelles Gesetz mit Bundesverfassungsrang

Landesverfassung Baden-Württemberg (LV)

formelles Gesetz mit Landesverfassungsrang

Schulgesetz BW (SchG)

formelles, einfaches Landesgesetz

Rechtsverordnungen (VO)

z.B. Notenbildungsverordnung (NVO)

Verwaltungsvorschriften (VwV)

verwaltungsinterne Regelungen, z.B. Verwaltungsvorschriften des Kultusministeriums`},{id:"schulrecht-4",document:"Schulrecht",page:3,question:"Unterscheiden Sie Gesetze, Rechtsverordnungen und Verwaltungsvorschriften",answerSections:[{title:"Arten rechtlicher Regelungen",items:[{term:"Gesetz · Parlament",explanation:`Gesetz

beschlossen durch Parlament / Legislative

nach außen verbindlich

Beispiel: Schulgesetz (SchG)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Rechtsverordnung · Exekutive",explanation:`Rechtsverordnung (VO)

erlassen durch Exekutive, z. B. Kultusministerium

aufgrund einer gesetzlichen Ermächtigung

konkretisiert gesetzliche Regelungen

nach außen verbindlich

Beispiel: Notenbildungsverordnung (NVO)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Verwaltungsvorschrift · interne Bindung",explanation:`Verwaltungsvorschrift (VwV)

erlassen durch Verwaltungsbehörde, z. B. Kultusministerium

regelt, wie die Verwaltung handeln soll

grundsätzlich nur verwaltungsintern verbindlich

grundsätzlich keine unmittelbaren Ansprüche für Schüler/Eltern

Beispiel: KM gibt Schulen Vorgaben zur Stundenplangestaltung

Schüler kann daraus grundsätzlich keinen Anspruch auf einen bestimmten Stundenplan ableiten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Abgrenzung",explanation:`Merksatz:

Gesetz → Parlament | Rechtsverordnung → Exekutive + gesetzliche Ermächtigung | VwV → interne Vorgabe für die Verwaltung.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"}]}],answer:`Gesetz

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

Gesetz → Parlament | Rechtsverordnung → Exekutive + gesetzliche Ermächtigung | VwV → interne Vorgabe für die Verwaltung.`},{id:"schulrecht-5",document:"Schulrecht",page:3,question:"Was ist ein Verwaltungsakt? Grenzen Sie dies ab zu „schlichtem Verwaltungshandeln“.",answerSections:[{title:"Verwaltungsakt und Verwaltungshandeln",items:[{term:"Verwaltungsakt · Merkmale",explanation:`§ 35 LVwVfG → Verwaltungsakt

hoheitliche Maßnahme einer Behörde

Regelung eines Einzelfalls

auf dem Gebiet des öffentlichen Rechts

mit unmittelbarer Rechtswirkung nach außen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Schulische Beispiele",explanation:`Beispiele Schule:

Nichtversetzung

E&O-Maßnahmen nach § 90 SchG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Eingriffsintensität",explanation:`Denig → Eingriffsintensität

praktische Abgrenzung: Wie stark wird in die Rechtsstellung des Schülers eingegriffen?

stärkere, verbindliche Regelung → Verwaltungsakt`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Schlichtes Verwaltungshandeln",explanation:`Schlichtes Verwaltungshandeln

keine entsprechende rechtliche Regelungswirkung

alltägliches pädagogisches/tatsächliches Handeln

z. B.:

Klassenbucheintrag

pädagogische Zusatzaufgabe

Sitzplatzänderung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"},{term:"Abgrenzung",explanation:`Merksatz:

Verwaltungsakt → Rechtsstellung wird verbindlich geregelt.

Schlichtes Verwaltungshandeln → pädagogisches/tatsächliches Handeln ohne solche Regelungswirkung.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=3",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 3"}]}],answer:`§ 35 LVwVfG → Verwaltungsakt

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

Schlichtes Verwaltungshandeln → pädagogisches/tatsächliches Handeln ohne solche Regelungswirkung.`},{id:"schulrecht-6",document:"Schulrecht",page:4,question:"Welche Bedeutung hat die Bezeichnung „nicht rechtsfähige Anstalt“ für eine Schule?",answerSections:[{title:"Rechtsstellung der Schule",items:[{term:"Öffentliche Anstalt",explanation:`§ 23 Abs. 1 SchG → öffentliche Schule

öffentliche Schulen sind „nicht rechtsfähige öffentliche Anstalten“

Anstalt → Denig

dauerhafte öffentliche Einrichtung

erfüllt eine öffentliche Aufgabe

→ insbesondere Bildungs- und Erziehungsauftrag`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Keine eigene Rechtspersönlichkeit",explanation:`Nicht rechtsfähig

Schule besitzt keine eigene Rechtspersönlichkeit

ist rechtlich nicht selbstständig

hinter ihr stehen deshalb die jeweiligen Rechtsträger`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Land und Schulträger",explanation:`Rechtsträger

→ Lehrkräfte / pädagogischer Bereich (Land Baden-Württemberg)

→ Gebäude / Ausstattung / Sachkosten (Schulträger, z. B. Stadt Karlsruhe)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Zusammenhang",explanation:`Merksatz:

Anstalt = öffentliche Einrichtung mit Aufgabe.

Nicht rechtsfähig = keine eigene Rechtspersönlichkeit → Rechtsträger stehen hinter der Schule.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"}]}],answer:`§ 23 Abs. 1 SchG → öffentliche Schule

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

Nicht rechtsfähig = keine eigene Rechtspersönlichkeit → Rechtsträger stehen hinter der Schule.`},{id:"schulorganisation-13",document:"Schulorganisation",page:4,question:"Wie ist die Normenpyramide im Schulrecht aufgebaut?",answerSections:[{title:"Normenpyramide",items:[{term:"Rangprinzip",explanation:`Höheres Recht schlägt niedrigeres Recht.

Vereinfacht:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Grundgesetz",explanation:`Grundgesetz

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Landesverfassung",explanation:`Landesverfassung Baden-Württemberg

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Gesetze",explanation:`Gesetze, z. B. Schulgesetz

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Rechtsverordnungen",explanation:`Rechtsverordnungen, z. B. NVO

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Verwaltungsvorschriften",explanation:`Verwaltungsvorschriften

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Schulinterne Regeln und Bindung",explanation:`schulinterne Regelungen

Eine untergeordnete Regel darf einer höherrangigen Norm nicht widersprechen.

Je höher eine Norm steht, desto stärker ist ihre rechtliche Bindungswirkung. Niedrigeres Recht darf höherem Recht nicht widersprechen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"}]}],answer:`Höheres Recht schlägt niedrigeres Recht.

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

Je höher eine Norm steht, desto stärker ist ihre rechtliche Bindungswirkung. Niedrigeres Recht darf höherem Recht nicht widersprechen.`},{id:"schulorganisation-37",document:"Schulorganisation",page:10,question:"Warum tauchen nicht alle beruflichen Schularten im Schulgesetz auf?",answerSections:[{title:"Schulgesetz und Bildungsgänge",items:[{term:"Grundstruktur und Konkretisierung",explanation:`Schulgesetz → Grundstruktur

Verordnungen → konkrete Bildungsgänge`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Schulgesetz",explanation:"Das Schulgesetz regelt die grundlegende Struktur.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Verordnungen und weitere Regelungen",explanation:`Konkrete Ausgestaltungen einzelner Bildungsgänge wie Berufliches Gymnasium oder AV/AVdual werden teilweise durch Rechtsverordnungen bzw. weitere Regelungen konkretisiert.

Deshalb muss nicht jeder einzelne Bildungsgang als eigene Schulart im Schulgesetz aufgeführt sein.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"}]}],answer:`Schulgesetz → Grundstruktur

Verordnungen → konkrete Bildungsgänge

Das Schulgesetz regelt die grundlegende Struktur.

Konkrete Ausgestaltungen einzelner Bildungsgänge wie Berufliches Gymnasium oder AV/AVdual werden teilweise durch Rechtsverordnungen bzw. weitere Regelungen konkretisiert.

Deshalb muss nicht jeder einzelne Bildungsgang als eigene Schulart im Schulgesetz aufgeführt sein.`},{id:"schulorganisation-102",document:"Schulorganisation",page:27,question:"Schulgesetz: Nennen Sie Beispiele, wann es zum Tragen kommt.",answerSections:[{title:"Anwendungsbereiche des Schulgesetzes",items:[{term:"Schulrechtliche Grundfragen",explanation:`Schulgesetz → grundlegende schulrechtliche Fragen

Die Musterlösung nennt insbesondere:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Schulpflicht und Aufnahme",explanation:`Schulpflicht,

Aufnahme in Schularten,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Versetzung und Ordnungsmaßnahmen",explanation:`Versetzung,

Ordnungsmaßnahmen,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Rechte und Pflichten",explanation:"Rechte und Pflichten der Schülerinnen und Schüler.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Konkretisierung durch Verordnungen",explanation:`Das Schulgesetz bildet damit die gesetzliche Grundlage. Einzelheiten können anschließend durch Rechtsverordnungen konkretisiert werden.

Merksatz:

SchG → Grundregeln des Schulwesens.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"}]}],answer:`Schulgesetz → grundlegende schulrechtliche Fragen

Die Musterlösung nennt insbesondere:

Schulpflicht,

Aufnahme in Schularten,

Versetzung,

Ordnungsmaßnahmen,

Rechte und Pflichten der Schülerinnen und Schüler.

Das Schulgesetz bildet damit die gesetzliche Grundlage. Einzelheiten können anschließend durch Rechtsverordnungen konkretisiert werden.

Merksatz:

SchG → Grundregeln des Schulwesens.`}]},{title:"Bildung und Erziehung im Unterricht",sources:[{document:"Schulrecht",pages:"7",page:7},{document:"Schulrecht",pages:"14",page:14},{document:"Schulorganisation",pages:"1-3",page:1},{document:"Schulorganisation",pages:"7-8",page:7}],questions:[{id:"schulrecht-16",document:"Schulrecht",page:7,question:"Welche grundsätzlichen Aufgaben hat die Schule?",answerSections:[{title:"Aufgaben der Schule",items:[{term:"Gesetzlicher Auftrag",explanation:"§ 1 SchG → Bildungs- und Erziehungsauftrag",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Bildung · Kenntnisse und Fähigkeiten",explanation:"Bildungsauftrag → Vermittlung von Kenntnissen, Fähigkeiten und Fertigkeiten",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Erziehung · Werte",explanation:"Erziehungsauftrag → Vermittlung von Werten und Wertvorstellungen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"}]}],answer:`§ 1 SchG → Bildungs- und Erziehungsauftrag

Bildungsauftrag → Vermittlung von Kenntnissen, Fähigkeiten und Fertigkeiten

Erziehungsauftrag → Vermittlung von Werten und Wertvorstellungen`},{id:"schulorganisation-2",document:"Schulorganisation",page:1,question:"Welche Bildungs- und Erziehungsziele nennt § 1 Schulgesetz BW?",answerSections:[{title:"Bildungs- und Erziehungsziele",items:[{term:"Gesetzlicher Auftrag",explanation:`§ 1 SchG → Erziehungs- und Bildungsauftrag der Schule

Die Schule soll den in der Landesverfassung verankerten Erziehungs- und Bildungsauftrag verwirklichen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1"},{term:"Würde, Verantwortung und Demokratie",explanation:`Zentral sind insbesondere:

Achtung vor der Würde des Menschen,

Verantwortungsbewusstsein,

Anerkennung der freiheitlich-demokratischen Grundordnung,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1"},{term:"Toleranz und soziale Bewährung",explanation:`Achtung vor anderen Überzeugungen,

soziale Bewährung,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1"},{term:"Persönlichkeitsförderung und Berufsvorbereitung",explanation:`Förderung der Persönlichkeit und Begabungen,

Vorbereitung auf Beruf und gesellschaftliches Leben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1"},{term:"Bildung und Erziehung",explanation:`Merksatz für die Prüfung:

Die Schule vermittelt nicht nur Wissen, sondern hat auch einen staatlichen Erziehungsauftrag.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=1",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 1"}]}],answer:`§ 1 SchG → Erziehungs- und Bildungsauftrag der Schule

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

Die Schule vermittelt nicht nur Wissen, sondern hat auch einen staatlichen Erziehungsauftrag.`},{id:"schulorganisation-4",document:"Schulorganisation",page:2,question:"Welche Aufgaben ergeben sich für Lehrkräfte aus dem staatlichen Erziehungsauftrag?",answerSections:[{title:"Erziehungsauftrag der Lehrkraft",items:[{term:"Bildung und Erziehung",explanation:`Lehrkräfte → Bildung + Erziehung

Lehrkräfte sollen nicht nur Fachwissen vermitteln. Sie verwirklichen im Unterricht den staatlichen Erziehungs- und Bildungsauftrag.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Fachkompetenz und Selbstständigkeit",explanation:`Dazu gehören beispielsweise:

fachliche Bildung,

Förderung von Selbstständigkeit,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Verantwortung und Werte",explanation:`Verantwortungsbewusstsein,

soziales Verhalten,

demokratische Werte,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Individuelle Förderung",explanation:"individuelle Förderung der Schülerinnen und Schüler.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Beispiel: Gruppenarbeit",explanation:`Prüfung: Ein gutes Beispiel nennen:

Bei einer Gruppenarbeit vermittle ich nicht nur Fachkompetenz, sondern fördere gleichzeitig Kooperation, Eigenverantwortung und respektvollen Umgang.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"}]}],answer:`Lehrkräfte → Bildung + Erziehung

Lehrkräfte sollen nicht nur Fachwissen vermitteln. Sie verwirklichen im Unterricht den staatlichen Erziehungs- und Bildungsauftrag.

Dazu gehören beispielsweise:

fachliche Bildung,

Förderung von Selbstständigkeit,

Verantwortungsbewusstsein,

soziales Verhalten,

demokratische Werte,

individuelle Förderung der Schülerinnen und Schüler.

Prüfung: Ein gutes Beispiel nennen:

Bei einer Gruppenarbeit vermittle ich nicht nur Fachkompetenz, sondern fördere gleichzeitig Kooperation, Eigenverantwortung und respektvollen Umgang.`},{id:"schulorganisation-7",document:"Schulorganisation",page:3,question:"Was versteht man unter dem Erziehungs- und Bildungsauftrag der Schule?",answerSections:[{title:"Bildungs- und Erziehungsauftrag",items:[{term:"Wissen und Kompetenzen",explanation:"Bildung → Wissen und Kompetenzen",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Persönlichkeit und Verantwortung",explanation:`Erziehung → Persönlichkeit und gesellschaftliche Verantwortung

Schule soll Schülerinnen und Schüler fachlich bilden und zugleich zu selbstständigen, verantwortungsbewussten und gesellschaftsfähigen Menschen erziehen.

Der Auftrag geht deshalb deutlich über reine Wissensvermittlung hinaus.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"}]}],answer:`Bildung → Wissen und Kompetenzen

Erziehung → Persönlichkeit und gesellschaftliche Verantwortung

Schule soll Schülerinnen und Schüler fachlich bilden und zugleich zu selbstständigen, verantwortungsbewussten und gesellschaftsfähigen Menschen erziehen.

Der Auftrag geht deshalb deutlich über reine Wissensvermittlung hinaus.`},{id:"schulorganisation-8",document:"Schulorganisation",page:3,question:"Wie setzen Sie als Lehrkraft die in § 1 genannten Erziehungsziele konkret im Unterricht um?",answerSections:[{title:"Erziehungsziele im Unterricht",items:[{term:"Diskussionskultur und Zusammenarbeit",explanation:`Zum Beispiel durch

respektvolle Diskussionskultur,

Gruppen- und Projektarbeit,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Selbstständigkeit und Verantwortung",explanation:`selbstständige Arbeitsphasen,

Übernahme von Verantwortung,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Fehlerkultur und Mitbestimmung",explanation:`konstruktiven Umgang mit Fehlern,

demokratische Entscheidungsprozesse,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Begabungsförderung",explanation:"Förderung unterschiedlicher Begabungen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Eigenes Unterrichtsbeispiel",explanation:`Prüfungstipp: Hier nicht nur abstrakt antworten, sondern ein konkretes Beispiel aus dem eigenen Unterricht nennen.

Frage: Was wäre hier ein Beispiel aus dem eigenen Unterricht`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"}]}],answer:`Zum Beispiel durch

respektvolle Diskussionskultur,

Gruppen- und Projektarbeit,

selbstständige Arbeitsphasen,

Übernahme von Verantwortung,

konstruktiven Umgang mit Fehlern,

demokratische Entscheidungsprozesse,

Förderung unterschiedlicher Begabungen.

Prüfungstipp: Hier nicht nur abstrakt antworten, sondern ein konkretes Beispiel aus dem eigenen Unterricht nennen.

Frage: Was wäre hier ein Beispiel aus dem eigenen Unterricht`},{id:"schulorganisation-25",document:"Schulorganisation",page:7,question:"Was könnte man im Unterricht machen, um Begabungen zu fördern?",answerSections:[{title:"Begabungsförderung",items:[{term:"Differenzierung und Freiräume",explanation:`Begabungsförderung → differenzieren und Freiräume schaffen

Zum Beispiel:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Zusatzaufgaben und Projekte",explanation:`anspruchsvollere Zusatzaufgaben,

offene Projektaufgaben,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Themenwahl und Wettbewerbe",explanation:`individuelle Themenwahl,

Wettbewerbe,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Vertiefung und Verantwortung",explanation:`selbstständige Vertiefung,

differenzierte Lernangebote,

besondere Verantwortungsbereiche.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Auftrag aus § 1 SchG",explanation:"Damit wird der Auftrag aus § 1 SchG praktisch umgesetzt, Schülerinnen und Schüler entsprechend ihren Begabungen und Fähigkeiten zu fördern.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"}]}],answer:`Begabungsförderung → differenzieren und Freiräume schaffen

Zum Beispiel:

anspruchsvollere Zusatzaufgaben,

offene Projektaufgaben,

individuelle Themenwahl,

Wettbewerbe,

selbstständige Vertiefung,

differenzierte Lernangebote,

besondere Verantwortungsbereiche.

Damit wird der Auftrag aus § 1 SchG praktisch umgesetzt, Schülerinnen und Schüler entsprechend ihren Begabungen und Fähigkeiten zu fördern.`},{id:"schulorganisation-28",document:"Schulorganisation",page:8,question:"Welche Fächer sind in der Stundentafel jeder Schulart zu finden? Nennen Sie Gründe.",answerSections:[{title:"Allgemeinbildende Fächer",items:[{term:"Gemeinsame Bildungsbereiche",explanation:"Bestimmte allgemeinbildende Bereiche finden sich schulartübergreifend wieder, insbesondere Deutsch, Mathematik, gesellschaftswissenschaftliche und naturwissenschaftliche Inhalte sowie Sport und religiös-ethische Bildung.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Erziehungs- und Bildungsauftrag",explanation:"Grund: Schule soll nicht nur spezielle Fach- oder Berufskenntnisse vermitteln, sondern einen gemeinsamen Erziehungs- und Bildungsauftrag erfüllen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"}]}],answer:`Bestimmte allgemeinbildende Bereiche finden sich schulartübergreifend wieder, insbesondere Deutsch, Mathematik, gesellschaftswissenschaftliche und naturwissenschaftliche Inhalte sowie Sport und religiös-ethische Bildung.

Grund: Schule soll nicht nur spezielle Fach- oder Berufskenntnisse vermitteln, sondern einen gemeinsamen Erziehungs- und Bildungsauftrag erfüllen.`}]}]},{id:"cluster-2",title:"Zuständigkeiten, Schulaufsicht und Schulentwicklung",topics:[{title:"Bund, Länder und gemeinsame Gremien",sources:[{document:"Schulorganisation",pages:"7-10",page:7}],questions:[{id:"schulorganisation-24",document:"Schulorganisation",page:7,question:"Wie wirkt sich die Kulturhoheit der Länder auf die Einheitlichkeit des Schulwesens aus?",answerSections:[{title:"Kulturhoheit und Einheitlichkeit",items:[{term:"Zuständigkeit der Länder",explanation:`Kulturhoheit → jedes Land regelt sein Schulwesen

Nach Art. 30 und 70 ff. GG liegt die Gesetzgebungs- und Verwaltungskompetenz für das Schulwesen grundsätzlich bei den Ländern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Unterschiedliche Schulregelungen",explanation:`Folge:

Es gibt kein einheitliches Schulgesetz des Bundes.

Dadurch unterscheiden sich z. B. Schularten, Prüfungsordnungen und organisatorische Regelungen zwischen den Bundesländern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Koordination durch die KMK",explanation:`Zur Koordinierung zwischen den Ländern dient insbesondere die KMK.

=> Was bedeutet KMK?`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"}]}],answer:`Kulturhoheit → jedes Land regelt sein Schulwesen

Nach Art. 30 und 70 ff. GG liegt die Gesetzgebungs- und Verwaltungskompetenz für das Schulwesen grundsätzlich bei den Ländern.

Folge:

Es gibt kein einheitliches Schulgesetz des Bundes.

Dadurch unterscheiden sich z. B. Schularten, Prüfungsordnungen und organisatorische Regelungen zwischen den Bundesländern.

Zur Koordinierung zwischen den Ländern dient insbesondere die KMK.

=> Was bedeutet KMK?`},{id:"schulorganisation-29",document:"Schulorganisation",page:8,question:"Wie ist die politische Zuständigkeit für Schulen und Hochschulen in Deutschland geregelt? In welchem Gesetz?",answerSections:[{title:"Politische Zuständigkeit",items:[{term:"Kulturhoheit der Länder",explanation:`Länder → Kulturhoheit

Die grundsätzliche Zuständigkeit liegt bei den Ländern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Art. 30 und 70 GG",explanation:`Rechtsgrundlage sind insbesondere Art. 30 und Art. 70 ff. GG.

Das wird in Sitzung 1 ausdrücklich hervorgehoben: Das GG verleiht den Ländern implizit die ausschließliche Gesetzgebungs- und Verwaltungskompetenz für das Schulwesen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"}]}],answer:`Länder → Kulturhoheit

Die grundsätzliche Zuständigkeit liegt bei den Ländern.

Rechtsgrundlage sind insbesondere Art. 30 und Art. 70 ff. GG.

Das wird in Sitzung 1 ausdrücklich hervorgehoben: Das GG verleiht den Ländern implizit die ausschließliche Gesetzgebungs- und Verwaltungskompetenz für das Schulwesen.`},{id:"schulorganisation-30",document:"Schulorganisation",page:8,question:"Erklären Sie den Begriff „Hamburger Abkommen“.",answerSections:[{title:"Hamburger Abkommen",items:[{term:"Vereinbarung der Länder",explanation:`Hamburger Abkommen → Vereinheitlichung zwischen den Ländern

Das Hamburger Abkommen war eine Vereinbarung der Länder zur Vereinheitlichung wichtiger Strukturen des Schulwesens.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Gemeinsame Schulstrukturen",explanation:"Ziel war, trotz Kulturhoheit der Länder gemeinsame Grundstrukturen zu schaffen, beispielsweise bei Schularten, Schuljahresbeginn oder Abschlussbezeichnungen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"}]}],answer:`Hamburger Abkommen → Vereinheitlichung zwischen den Ländern

Das Hamburger Abkommen war eine Vereinbarung der Länder zur Vereinheitlichung wichtiger Strukturen des Schulwesens.

Ziel war, trotz Kulturhoheit der Länder gemeinsame Grundstrukturen zu schaffen, beispielsweise bei Schularten, Schuljahresbeginn oder Abschlussbezeichnungen.`},{id:"schulorganisation-35",document:"Schulorganisation",page:9,question:"Welche Aufgaben hat die KMK (Kultusministerkonferenz)?",answerSections:[{title:"Kultusministerkonferenz",items:[{term:"Koordination der Länder",explanation:`KMK → Koordination der Länder

Die Kultusministerkonferenz koordiniert die Bildungspolitik der Länder.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Abschlüsse und Anerkennung",explanation:`Ziele sind insbesondere:

Vergleichbarkeit von Abschlüssen,

gegenseitige Anerkennung,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Standards und Abstimmung",explanation:`gemeinsame Standards,

Abstimmung zwischen den Ländern.

Damit gleicht sie Unterschiede aus, die aufgrund der Kulturhoheit entstehen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"}]}],answer:`KMK → Koordination der Länder

Die Kultusministerkonferenz koordiniert die Bildungspolitik der Länder.

Ziele sind insbesondere:

Vergleichbarkeit von Abschlüssen,

gegenseitige Anerkennung,

gemeinsame Standards,

Abstimmung zwischen den Ländern.

Damit gleicht sie Unterschiede aus, die aufgrund der Kulturhoheit entstehen.`},{id:"schulorganisation-36",document:"Schulorganisation",page:9,question:"Welche Aufgaben hat die GWK (Gemeinsame Wissenschaftskonferenz)?",answerSections:[{title:"Gemeinsame Wissenschaftskonferenz",items:[{term:"Zusammenarbeit von Bund und Ländern",explanation:`GWK → Bund und Länder bei Wissenschaft/Forschung

Die Gemeinsame Wissenschaftskonferenz koordiniert die Zusammenarbeit von Bund und Ländern insbesondere in den Bereichen:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Wissenschaft, Forschung und Hochschulen",explanation:`Wissenschaft,

Forschung,

Hochschulen und Forschungsförderung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Abgrenzung zur KMK",explanation:"Damit unterscheidet sie sich von der KMK, deren Schwerpunkt stärker bei Bildung, Schule und Kultur liegt.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"}]}],answer:`GWK → Bund und Länder bei Wissenschaft/Forschung

Die Gemeinsame Wissenschaftskonferenz koordiniert die Zusammenarbeit von Bund und Ländern insbesondere in den Bereichen:

Wissenschaft,

Forschung,

Hochschulen und Forschungsförderung.

Damit unterscheidet sie sich von der KMK, deren Schwerpunkt stärker bei Bildung, Schule und Kultur liegt.`}]},{title:"Schulaufsicht und Schulträger",sources:[{document:"Schulrecht",pages:"4",page:4},{document:"Schulrecht",pages:"15",page:15},{document:"Schulorganisation",pages:"8-10",page:8}],questions:[{id:"schulrecht-48",document:"Schulrecht",page:15,question:"Wie wird das gesamte Schulwesen „beaufsichtigt“? Unterscheiden Sie Fach-, Rechts- und Dienstaufsicht.",answerSections:[{title:"Formen der Schulaufsicht",items:[{term:"Rechtsgrundlage",explanation:"§§ 32 ff. SchG → Schulaufsicht",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Rechtsaufsicht",explanation:`Rechtsaufsicht

Kontrolle der Rechtmäßigkeit

Rechts- und Verwaltungsangelegenheiten

Leitfrage: „Darf man das?“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Fachaufsicht",explanation:`Fachaufsicht

Kontrolle der fachlichen und pädagogischen Arbeit

z. B. Unterricht, Methodik, Erziehung

Leitfrage: „Ist das fachlich richtig und sinnvoll?“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Dienstaufsicht",explanation:`Dienstaufsicht

Kontrolle der Dienstpflichterfüllung

z. B. Pünktlichkeit, Amtsverschwiegenheit, Neutralität

Leitfrage: „Erfüllt die Lehrkraft ihre Dienstpflichten?“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Leitfragen im Vergleich",explanation:`Merksatz:

Recht → Darf man das? | Fach → Macht man es richtig? | Dienst → Erfüllt man seine Pflichten?`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"}]}],answer:`§§ 32 ff. SchG → Schulaufsicht

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

Recht → Darf man das? | Fach → Macht man es richtig? | Dienst → Erfüllt man seine Pflichten?`},{id:"schulorganisation-5",document:"Schulorganisation",page:2,question:"Was bedeutet staatliche Schulaufsicht?",answerSections:[{title:"Staatliche Schulaufsicht",items:[{term:"Verantwortung des Staates",explanation:"Schulaufsicht → Staat trägt Verantwortung für das Schulwesen",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Art. 7 Abs. 1 GG",explanation:`Art. 7 Abs. 1 GG:

„Das gesamte Schulwesen steht unter der Aufsicht des Staates.“`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Schulhoheit statt bloßer Kontrolle",explanation:"Dabei ist „Aufsicht“ weit zu verstehen. Der Staat kontrolliert Schule nicht nur, sondern besitzt Schulhoheit: Er legt beispielsweise Organisation, Schulpflicht und wesentliche Inhalte des Schulwesens fest.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"}]}],answer:`Schulaufsicht → Staat trägt Verantwortung für das Schulwesen

Art. 7 Abs. 1 GG:

„Das gesamte Schulwesen steht unter der Aufsicht des Staates.“

Dabei ist „Aufsicht“ weit zu verstehen. Der Staat kontrolliert Schule nicht nur, sondern besitzt Schulhoheit: Er legt beispielsweise Organisation, Schulpflicht und wesentliche Inhalte des Schulwesens fest.`},{id:"schulorganisation-27",document:"Schulorganisation",page:8,question:"Sind wir an beruflichen Schulen von der unteren Schulaufsichtsbehörde betroffen?",answerSections:[{title:"Schulaufsicht an beruflichen Schulen",items:[{term:"Regierungspräsidium",explanation:`Berufliche Schulen → grundsätzlich Regierungspräsidium

Bei beruflichen Schulen liegt die unmittelbare Schulaufsicht grundsätzlich nicht beim Staatlichen Schulamt wie etwa bei Grundschulen, sondern beim Regierungspräsidium.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Zuordnung der Schularten",explanation:`Für die Prüfung ist daher vor allem die Zuordnung wichtig:

Grund-/Haupt-/Werkreal-/Real-/Gemeinschaftsschulen → Staatliches Schulamt

Gymnasien und berufliche Schulen → Regierungspräsidium`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Vertiefungsfrage: Schulamt",explanation:"Fragen: Was ist das staatliche Schulamt?",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"}]}],answer:`Berufliche Schulen → grundsätzlich Regierungspräsidium

Bei beruflichen Schulen liegt die unmittelbare Schulaufsicht grundsätzlich nicht beim Staatlichen Schulamt wie etwa bei Grundschulen, sondern beim Regierungspräsidium.

Für die Prüfung ist daher vor allem die Zuordnung wichtig:

Grund-/Haupt-/Werkreal-/Real-/Gemeinschaftsschulen → Staatliches Schulamt

Gymnasien und berufliche Schulen → Regierungspräsidium

Fragen: Was ist das staatliche Schulamt?`},{id:"schulorganisation-33",document:"Schulorganisation",page:9,question:"Erklären Sie den Begriff „Lernmittelfreiheit“.",answerSections:[{title:"Lernmittelfreiheit",items:[{term:"Unentgeltliche Lernmittel",explanation:`Lernmittelfreiheit → notwendige Lernmittel grundsätzlich unentgeltlich

Schülerinnen und Schüler sollen die für den Unterricht erforderlichen Lernmittel grundsätzlich zur Verfügung gestellt bekommen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Chancengleichheit",explanation:"Der Gedanke dahinter ist die Chancengleichheit: Bildung soll nicht davon abhängen, ob Eltern die erforderlichen Schulbücher bezahlen können.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"}]}],answer:`Lernmittelfreiheit → notwendige Lernmittel grundsätzlich unentgeltlich

Schülerinnen und Schüler sollen die für den Unterricht erforderlichen Lernmittel grundsätzlich zur Verfügung gestellt bekommen.

Der Gedanke dahinter ist die Chancengleichheit: Bildung soll nicht davon abhängen, ob Eltern die erforderlichen Schulbücher bezahlen können.`},{id:"schulorganisation-34",document:"Schulorganisation",page:9,question:"Wer ist für die finanzielle Ausstattung der Schulen, wer für die personelle Ausstattung zuständig?",answerSections:[{title:"Finanzielle und personelle Ausstattung",items:[{term:"Zuständigkeiten im Überblick",explanation:`Schulträger → Sachkosten

Land → Lehrkräfte`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Schulträger · Sachkosten",explanation:`Der kommunale Schulträger trägt grundsätzlich die sächlichen Kosten, z. B.:

Gebäude,

Ausstattung,

bestimmte Lernmittel.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Land · Lehrpersonal",explanation:"Das Land Baden-Württemberg ist insbesondere für das Lehrpersonal verantwortlich.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Aufgabenverteilung",explanation:`Merksatz:

Kommune baut die Schule – Land stellt die Lehrer.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"}]}],answer:`Schulträger → Sachkosten

Land → Lehrkräfte

Der kommunale Schulträger trägt grundsätzlich die sächlichen Kosten, z. B.:

Gebäude,

Ausstattung,

bestimmte Lernmittel.

Das Land Baden-Württemberg ist insbesondere für das Lehrpersonal verantwortlich.

Merksatz:

Kommune baut die Schule – Land stellt die Lehrer.`},{id:"schulorganisation-40",document:"Schulorganisation",page:10,question:"Wie sind die Verwaltungsebenen bei Grund-/Hauptschulen, beruflichen Schulen und Gymnasien organisiert?",answerSections:[{title:"Verwaltungsebenen der Schulaufsicht",items:[{term:"Kultusministerium",explanation:`Kultusministerium → oberste Schulaufsicht

Darunter unterscheiden sich die Zuständigkeiten:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Staatliche Schulämter",explanation:`Grund-, Haupt-/Werkreal-, Real- und Gemeinschaftsschulen:

→ Staatliche Schulämter als untere Schulaufsichtsbehörden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Regierungspräsidien",explanation:`Gymnasien und berufliche Schulen:

→ Regierungspräsidien.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Berufliche Schulen",explanation:`Damit sollte man in der Prüfung vor allem wissen:

Berufliche Schule → Regierungspräsidium, nicht Staatliches Schulamt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"}]}],answer:`Kultusministerium → oberste Schulaufsicht

Darunter unterscheiden sich die Zuständigkeiten:

Grund-, Haupt-/Werkreal-, Real- und Gemeinschaftsschulen:

→ Staatliche Schulämter als untere Schulaufsichtsbehörden.

Gymnasien und berufliche Schulen:

→ Regierungspräsidien.

Damit sollte man in der Prüfung vor allem wissen:

Berufliche Schule → Regierungspräsidium, nicht Staatliches Schulamt.`}]},{title:"Qualität, Fortbildung und Reformen",sources:[{document:"Schulorganisation",pages:"5",page:5},{document:"Schulorganisation",pages:"7-8",page:7},{document:"Schulorganisation",pages:"27-29",page:27}],questions:[{id:"schulorganisation-16",document:"Schulorganisation",page:5,question:"Welche Aufgaben hat das Zentrum für Schulqualität und Lehrerbildung (ZSL)?",answerSections:[{title:"Aufgaben des ZSL",items:[{term:"Lehrkräfte und Unterricht",explanation:`ZSL → Lehrkräfte und Unterricht

Schwerpunkte sind insbesondere:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Aus- und Fortbildung",explanation:"Aus- und Fortbildung von Lehrkräften,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Beratung und Schulentwicklung",explanation:`Beratung und Unterstützung,

Unterrichts- und Schulentwicklung,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Führung und Gesundheit",explanation:`Führungskräfteentwicklung,

Gesundheitsförderung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Beispiele aus den Unterlagen",explanation:"Die Sitzungsunterlagen nennen beispielsweise Fortbildungsangebote des ZSL für Personen ohne Lehramtsausbildung sowie Programme für Berufsbeginn und Wiedereinstieg.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"}]}],answer:`ZSL → Lehrkräfte und Unterricht

Schwerpunkte sind insbesondere:

Aus- und Fortbildung von Lehrkräften,

Beratung und Unterstützung,

Unterrichts- und Schulentwicklung,

Führungskräfteentwicklung,

Gesundheitsförderung.

Die Sitzungsunterlagen nennen beispielsweise Fortbildungsangebote des ZSL für Personen ohne Lehramtsausbildung sowie Programme für Berufsbeginn und Wiedereinstieg.`},{id:"schulorganisation-22",document:"Schulorganisation",page:7,question:"Welche Instanz bietet Schulungsmöglichkeiten für Lehrer in Baden-Württemberg?",answerSections:[{title:"Fortbildungsmöglichkeiten",items:[{term:"ZSL",explanation:`ZSL → zentrale Fortbildungsinstanz

Das Zentrum für Schulqualität und Lehrerbildung bietet Fortbildungen und Unterstützungsangebote für Lehrkräfte.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Weitere Fortbildungsangebote",explanation:"Daneben kommen – abhängig vom Thema – beispielsweise Seminare für Ausbildung und Fortbildung der Lehrkräfte sowie schulinterne bzw. regionale Fortbildungsangebote infrage.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"}]}],answer:`ZSL → zentrale Fortbildungsinstanz

Das Zentrum für Schulqualität und Lehrerbildung bietet Fortbildungen und Unterstützungsangebote für Lehrkräfte.

Daneben kommen – abhängig vom Thema – beispielsweise Seminare für Ausbildung und Fortbildung der Lehrkräfte sowie schulinterne bzw. regionale Fortbildungsangebote infrage.`},{id:"schulorganisation-26",document:"Schulorganisation",page:8,question:"Was ist eine typische Aufgabe des IBBW (Institut für Bildungsanalysen Baden-Württemberg)?",answerSections:[{title:"Aufgaben des IBBW",items:[{term:"Daten und Bildungsqualität",explanation:`IBBW → Daten, Analyse und Qualitätsentwicklung

Das Institut für Bildungsanalysen Baden-Württemberg beschäftigt sich insbesondere mit:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Monitoring, Auswertung und Evaluation",explanation:`Bildungsmonitoring,

Datenerhebung und -auswertung,

Evaluation,

Analyse von Bildungsqualität.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Abgrenzung zum ZSL",explanation:`Merksatz:

ZSL → Menschen/Unterricht entwickeln

IBBW → Daten/Qualität analysieren`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"}]}],answer:`IBBW → Daten, Analyse und Qualitätsentwicklung

Das Institut für Bildungsanalysen Baden-Württemberg beschäftigt sich insbesondere mit:

Bildungsmonitoring,

Datenerhebung und -auswertung,

Evaluation,

Analyse von Bildungsqualität.

Merksatz:

ZSL → Menschen/Unterricht entwickeln

IBBW → Daten/Qualität analysieren`},{id:"schulorganisation-103",document:"Schulorganisation",page:27,question:"Nennen Sie Änderungen der vergangenen Jahre.",answerSections:[{title:"Änderungen laut Sitzungsunterlagen",items:[{term:"Genannte Beispiele",explanation:"Sitzung 5 nennt vier Beispiele:",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Rückkehr zu G9",explanation:"Rückkehr zu G9",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Grundschulempfehlung",explanation:"verbindlichere Grundschulempfehlung",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"SprachFit",explanation:"Einführung des Sprachförderkonzepts SprachFit mit verpflichtender Sprachförderung vor der Einschulung",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Sprach-, Medien- und Demokratiebildung",explanation:`Ausbau von Sprachbildung, Medienbildung und Demokratiebildung.

Die Präsentation enthält dazu auch das Schreiben des Kultusministeriums zu den „wichtigen Weichenstellungen im Bildungssystem“ und beschreibt insbesondere die Stärkung der Sprachförderung durch SprachFit.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"}]}],answer:`Sitzung 5 nennt vier Beispiele:

Rückkehr zu G9

verbindlichere Grundschulempfehlung

Einführung des Sprachförderkonzepts SprachFit mit verpflichtender Sprachförderung vor der Einschulung

Ausbau von Sprachbildung, Medienbildung und Demokratiebildung.

Die Präsentation enthält dazu auch das Schreiben des Kultusministeriums zu den „wichtigen Weichenstellungen im Bildungssystem“ und beschreibt insbesondere die Stärkung der Sprachförderung durch SprachFit.`},{id:"schulorganisation-105",document:"Schulorganisation",page:28,question:"Wozu dienen DQR und GER?",answerSections:[{title:"DQR und GER",items:[{term:"Vergleichsinstrumente",explanation:`DQR → Qualifikationen vergleichen

GER → Sprachkenntnisse vergleichen`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"DQR · Qualifikationen",explanation:`DQR

DQR steht für:

Deutscher Qualifikationsrahmen

Er dient dazu, unterschiedliche Qualifikationen und Abschlüsse vergleichbar zu machen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"GER · Sprachkompetenzen",explanation:`GER

GER steht für:

Gemeinsamer Europäischer Referenzrahmen für Sprachen

Er macht Sprachkompetenzen vergleichbar, beispielsweise über die bekannten Niveaus A1 bis C2.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Vergleichbarkeit über Ländergrenzen",explanation:`Die Sitzung fasst die gemeinsame Funktion beider Instrumente so zusammen:

Leistungen sollen vergleichbar und messbar gemacht werden – auch länderübergreifend.

Merksatz:

DQR → Abschlussniveau

GER → Sprachniveau`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"}]}],answer:`DQR → Qualifikationen vergleichen

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

GER → Sprachniveau`},{id:"schulorganisation-108",document:"Schulorganisation",page:29,question:"Erklären Sie die wichtigsten Bestandteile des OES-Konzepts.",answerSections:[{title:"OES-Konzept",items:[{term:"Eigenständigkeit und Evaluation",explanation:`OES → mehr Eigenständigkeit + klare Ziele + Evaluation

Die Musterlösung in Sitzung 5 konzentriert sich auf drei zentrale Punkte:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Zielvereinbarungen und Ergebnisse",explanation:`klare Zielvereinbarungen zur Schulentwicklung,

Evaluation der Ergebnisse,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Schule und Regierungspräsidium",explanation:`Zielvereinbarungen zwischen Regierungspräsidium und Schule,

gleichzeitig hohe Freiheitsgrade der einzelnen Schule, wie sie diese Entwicklung umsetzt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Umsetzungsspielraum und Rückmeldung",explanation:`Das Prinzip lässt sich deshalb gut so merken:

Der Staat gibt nicht jeden einzelnen Entwicklungsschritt vor. Schule und Schulaufsicht vereinbaren Ziele; die Schule erhält Gestaltungsspielraum bei deren Umsetzung und die Ergebnisse werden evaluiert.

Merksatz:

OES → Ziele vereinbaren – eigenständig umsetzen – Ergebnisse evaluieren.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"}]}],answer:`OES → mehr Eigenständigkeit + klare Ziele + Evaluation

Die Musterlösung in Sitzung 5 konzentriert sich auf drei zentrale Punkte:

klare Zielvereinbarungen zur Schulentwicklung,

Evaluation der Ergebnisse,

Zielvereinbarungen zwischen Regierungspräsidium und Schule,

gleichzeitig hohe Freiheitsgrade der einzelnen Schule, wie sie diese Entwicklung umsetzt.

Das Prinzip lässt sich deshalb gut so merken:

Der Staat gibt nicht jeden einzelnen Entwicklungsschritt vor. Schule und Schulaufsicht vereinbaren Ziele; die Schule erhält Gestaltungsspielraum bei deren Umsetzung und die Ergebnisse werden evaluiert.

Merksatz:

OES → Ziele vereinbaren – eigenständig umsetzen – Ergebnisse evaluieren.`},{id:"schulorganisation-109",document:"Schulorganisation",page:29,question:"Was haben das Startchancen-Programm und der Digitalpakt gemeinsam?",answerSections:[{title:"Startchancen und Digitalpakt",items:[{term:"Staatliche Förderprogramme",explanation:`Beides → große staatlich finanzierte Förderprogramme

Die Musterlösung nennt zwei wesentliche Gemeinsamkeiten:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Finanzierung durch Bund und Länder",explanation:`1. Finanzierung

Beide werden stark durch Bund und Länder finanziell gefördert.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Bildungschancen und Stärkung der Schulen",explanation:`2. Ziel

Beide sollen

Bildungschancen verbessern und

Schulen gezielt stärken.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Gezielter Mitteleinsatz",explanation:`Die Unterlage charakterisiert beide als große öffentlich finanzierte Reform- bzw. Investitionsprogramme. Mittel werden dabei nicht einfach überall gleich verteilt, sondern sollen gezielt dort eingesetzt werden, wo besonderer Bedarf besteht.

Merksatz:

Startchancen + Digitalpakt → Bund/Länder investieren gezielt in bessere Bildungsbedingungen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"}]}],answer:`Beides → große staatlich finanzierte Förderprogramme

Die Musterlösung nennt zwei wesentliche Gemeinsamkeiten:

1. Finanzierung

Beide werden stark durch Bund und Länder finanziell gefördert.

2. Ziel

Beide sollen

Bildungschancen verbessern und

Schulen gezielt stärken.

Die Unterlage charakterisiert beide als große öffentlich finanzierte Reform- bzw. Investitionsprogramme. Mittel werden dabei nicht einfach überall gleich verteilt, sondern sollen gezielt dort eingesetzt werden, wo besonderer Bedarf besteht.

Merksatz:

Startchancen + Digitalpakt → Bund/Länder investieren gezielt in bessere Bildungsbedingungen.`}]}]},{id:"cluster-3",title:"Mitwirkung und Verantwortung in der Schule",topics:[{title:"Lehrkraft und Schulleitung",sources:[{document:"Schulrecht",pages:"14",page:14}],questions:[{id:"schulrecht-44",document:"Schulrecht",page:14,question:"Beschreiben Sie die Aufgaben eines Lehrers/einer Lehrerin?",answerSections:[{title:"Aufgaben der Lehrkraft",items:[{term:"Erziehen und bilden",explanation:`§ 1 Abs. 2 SchG → Erziehungs- und Bildungsauftrag

Erziehen und Bilden der Schüler`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Pädagogische Verantwortung",explanation:`§ 38 Abs. 6 SchG → pädagogische Verantwortung der Lehrkraft

Unterrichts- und Erziehungsarbeit in eigener pädagogischer Verantwortung im Rahmen der Vorschriften.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Aufsicht, Konferenzen und Prüfungen",explanation:`Zusätzlich

Aufsichtspflicht

Teilnahme an Konferenzen

Prüfungen und Leistungsfeststellungen durchführen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"}]}],answer:`§ 1 Abs. 2 SchG → Erziehungs- und Bildungsauftrag

Erziehen und Bilden der Schüler

§ 38 Abs. 6 SchG → pädagogische Verantwortung der Lehrkraft

Unterrichts- und Erziehungsarbeit in eigener pädagogischer Verantwortung im Rahmen der Vorschriften.

Zusätzlich

Aufsichtspflicht

Teilnahme an Konferenzen

Prüfungen und Leistungsfeststellungen durchführen`},{id:"schulrecht-45",document:"Schulrecht",page:14,question:"Worin besteht die Freiheit einer Lehrkraft?",answerSections:[{title:"Pädagogischer Gestaltungsspielraum",items:[{term:"Eigenverantwortung",explanation:`§ 38 Abs. 6 SchG → pädagogische Verantwortung

Lehrkraft trägt die unmittelbare pädagogische Verantwortung für die Erziehung und Bildung der Schüler.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Gestaltung von Unterricht und Erziehung",explanation:"Freiheit bei der Gestaltung der Erziehungs- und Unterrichtsarbeit",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Bindung an Vorgaben",explanation:`gebunden an Vorschriften und Anordnungen

gebunden an Konferenzbeschlüsse`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Leistungsbewertung",explanation:"Ausgestaltung des Beurteilungsspielraums bei der Leistungsbewertung",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"}]}],answer:`§ 38 Abs. 6 SchG → pädagogische Verantwortung

Lehrkraft trägt die unmittelbare pädagogische Verantwortung für die Erziehung und Bildung der Schüler.

Freiheit bei der Gestaltung der Erziehungs- und Unterrichtsarbeit

gebunden an Vorschriften und Anordnungen

gebunden an Konferenzbeschlüsse

Ausgestaltung des Beurteilungsspielraums bei der Leistungsbewertung`},{id:"schulrecht-46",document:"Schulrecht",page:14,question:"Weshalb spricht man besser von pädagogischer Verantwortung als von pädagogischer Freiheit?",answerSections:[{title:"Verantwortung statt grenzenloser Freiheit",items:[{term:"Begriffliche Abgrenzung",explanation:`Pädagogische Freiheit suggeriert weitgehend freies Handeln

Treffender ist pädagogische Verantwortung:`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Spielräume und rechtliche Bindung",explanation:`eigene Entscheidungs- und Beurteilungsspielräume

aber gebunden an Gesetze, Bildungspläne, Weisungen und Konferenzbeschlüsse`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"}]}],answer:`Pädagogische Freiheit suggeriert weitgehend freies Handeln

Treffender ist pädagogische Verantwortung:

eigene Entscheidungs- und Beurteilungsspielräume

aber gebunden an Gesetze, Bildungspläne, Weisungen und Konferenzbeschlüsse`},{id:"schulrecht-47",document:"Schulrecht",page:14,question:"Welche Aufgaben hat der Schulleiter/die Schulleiterin? (exemplarisch)",answerSections:[{title:"Aufgaben der Schulleitung",items:[{term:"Leitung und Verantwortung",explanation:`§ 41 Abs. 1 SchG → Aufgaben des Schulleiters

Er leitet und verwaltet die Schule

trägt die Verantwortung für geordneten Schulbetrieb`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Organisation und Vertretung",explanation:`Praktische Aufgaben:

Aufnahme Entlassung Schüler

Aufstellung Stunden- und Aufsichtspläne

Vertretung der Schule nach außen

Weisungsbefugnisse Lehrkräften`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"}]}],answer:`§ 41 Abs. 1 SchG → Aufgaben des Schulleiters

Er leitet und verwaltet die Schule

trägt die Verantwortung für geordneten Schulbetrieb

Praktische Aufgaben:

Aufnahme Entlassung Schüler

Aufstellung Stunden- und Aufsichtspläne

Vertretung der Schule nach außen

Weisungsbefugnisse Lehrkräften`}]},{title:"Lehrerkonferenzen",sources:[{document:"Schulrecht",pages:"7",page:7},{document:"Schulrecht",pages:"15-16",page:15}],questions:[{id:"schulrecht-49",document:"Schulrecht",page:15,question:"Beschreiben Sie die unterschiedlichen Lehrerkonferenzen hinsichtlich des Teilnehmerkreises, Vorsitz und Aufgaben.",answerSections:[{title:"Lehrerkonferenzen",items:[{term:"Gesamtlehrerkonferenz",explanation:`§ 45 Abs. 2 SchG → Gesamtlehrerkonferenz (GLK)

Teilnehmer: alle Lehrkräfte

Vorsitz: Schulleiter

Aufgabe: Angelegenheiten der gesamten Schule`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Klassenkonferenz",explanation:`§ 46 SchG → Klassenkonferenz

Teilnehmer: Lehrkräfte der jeweiligen Klasse

Vorsitz: grundsätzlich Klassenlehrer

Aufgabe: Erziehungs- und Unterrichtsarbeit der Klasse`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Fachkonferenz",explanation:`§ 46 SchG → Fachkonferenz

Teilnehmer: Lehrkräfte eines Faches/einer Fächergruppe

Vorsitz: bestimmte/gewählte Lehrkraft

Aufgabe: Angelegenheiten des Faches

z. B. fachliche Grundsätze, Leistungsmessung/-bewertung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Abteilungskonferenz",explanation:`§ 46 SchG → Abteilungskonferenz

Teilnehmer: Lehrkräfte der jeweiligen Abteilung

Vorsitz: grundsätzlich Abteilungsleiter

Aufgabe: Angelegenheiten der Abteilung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"},{term:"Zuständigkeiten im Vergleich",explanation:`Merksatz:

GLK → Schule | Klassenkonferenz → Klasse | Fachkonferenz → Fach | Abteilungskonferenz →

Abteilung.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=15",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 15"}]}],answer:`§ 45 Abs. 2 SchG → Gesamtlehrerkonferenz (GLK)

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

Abteilung.`},{id:"schulrecht-50",document:"Schulrecht",page:16,question:"Was versteht man unter dem Beanstandungsrecht des Schulleiters im Rahmen einer Konferenz?",answerSections:[{title:"Beanstandung von Konferenzbeschlüssen",items:[{term:"Bindung und Beanstandungspflicht",explanation:`§ 44 SchG

Beschlüsse der Lehrerkonferenz → grundsätzlich auch für Schulleiter bindend

Beschluss rechtswidrig → Schulleiter muss ihn beanstanden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Erneute Beratung",explanation:"innerhalb von 7 Unterrichtstagen → erneute Beratung der Konferenz",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Entscheidung der Schulaufsicht",explanation:"Konferenz bleibt bei Beschluss → Schulaufsichtsbehörde entscheidet",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Aussetzung des Beschlusses",explanation:"bis zur Entscheidung → Beschluss nicht ausführen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"}]}],answer:`§ 44 SchG

Beschlüsse der Lehrerkonferenz → grundsätzlich auch für Schulleiter bindend

Beschluss rechtswidrig → Schulleiter muss ihn beanstanden

innerhalb von 7 Unterrichtstagen → erneute Beratung der Konferenz

Konferenz bleibt bei Beschluss → Schulaufsichtsbehörde entscheidet

bis zur Entscheidung → Beschluss nicht ausführen`}]},{title:"Schulkonferenz",sources:[{document:"Schulrecht",pages:"16",page:16}],questions:[{id:"schulrecht-51",document:"Schulrecht",page:16,question:"Wie setzt sich die Schulkonferenz an Beruflichen Schulen zusammen?",answerSections:[{title:"Zusammensetzung der Schulkonferenz",items:[{term:"Gemeinsames Organ",explanation:`§ 47 SchG → Schulkonferenz

gemeinsames Organ der Schule`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Paritätische Besetzung",explanation:`Größere berufliche Schulen → 16 Mitglieder

4 Vertreter Schule/Lehrkräfte

4 Elternvertreter

4 Schülervertreter

4 Vertreter der Berufserziehung / Ausbildungsbetriebe

→ paritätische Besetzung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Vorsitz",explanation:`Vorsitz

Schulleiter`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Stellvertretung",explanation:`Stellvertretender Vorsitz

Elternbeiratsvorsitzender`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"}]}],answer:`§ 47 SchG → Schulkonferenz

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

Elternbeiratsvorsitzender`},{id:"schulrecht-52",document:"Schulrecht",page:16,question:"Welche Aufgaben hat die Schulkonferenz? (exemplarisch)",answerSections:[{title:"Rechte der Schulkonferenz",items:[{term:"Entscheidungsrecht",explanation:`§ 47 Abs. 3 → Entscheidungsrecht

Schulkonferenz entscheidet selbst

z. B.:

Unterrichtsbeginn

zusätzliche unterrichtsfreie Tage

Schulpartnerschaften

Anforderung von Haushaltsmitteln`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Anhörungsrecht",explanation:`§ 47 Abs. 4 → Anhörungsrecht

Schulkonferenz muss angehört werden

z. B.:

allgemeine Fragen von Erziehung und Unterricht

Schulversuche

Änderung der Schulart

bestimmte E&O-Maßnahmen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"},{term:"Einverständnis",explanation:`§ 47 Abs. 5 → Einverständnis

Entscheidung nur mit Einverständnis der Schulkonferenz

z. B.:

Schul- und Hausordnung

allgemeine Regelungen zu Klassenarbeiten und Hausaufgaben

Grundsätze für Klassenfahrten / außerunterrichtliche Veranstaltungen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=16",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 16"}]}],answer:`§ 47 Abs. 3 → Entscheidungsrecht

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

Grundsätze für Klassenfahrten / außerunterrichtliche Veranstaltungen`}]},{title:"Eltern und Schülermitverantwortung",sources:[{document:"Schulrecht",pages:"17-18",page:17},{document:"Schulorganisation",pages:"3",page:3}],questions:[{id:"schulrecht-53",document:"Schulrecht",page:17,question:"Wer hat generell das Sorgerecht bei Kindern?",answerSections:[{title:"Elterliche Sorge",items:[{term:"Verheiratete und getrennte Eltern",explanation:`§§ 1626 ff. BGB → elterliche Sorge

verheiratete Eltern → grundsätzlich beide gemeinsam

getrennte/geschiedene Eltern → grundsätzlich weiterhin beide gemeinsam

Ausnahme → Familiengericht überträgt Alleinsorge`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Nicht verheiratete Eltern",explanation:`§ 1626a BGB → nicht verheiratete Eltern

gemeinsame Sorge z. B. durch Sorgeerklärung, Heirat oder Familiengericht

sonst grundsätzlich → Mutter allein`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Vormundschaft",explanation:`Vormundschaft

elterliche Sorge → Vormund`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Bedeutung für die Schule",explanation:`Für die Schule

grundsätzlich von gemeinsamer Sorge ausgehen, solange nichts Gegenteiliges bekannt ist`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"}]}],answer:`§§ 1626 ff. BGB → elterliche Sorge

verheiratete Eltern → grundsätzlich beide gemeinsam

getrennte/geschiedene Eltern → grundsätzlich weiterhin beide gemeinsam

Ausnahme → Familiengericht überträgt Alleinsorge

§ 1626a BGB → nicht verheiratete Eltern

gemeinsame Sorge z. B. durch Sorgeerklärung, Heirat oder Familiengericht

sonst grundsätzlich → Mutter allein

Vormundschaft

elterliche Sorge → Vormund

Für die Schule

grundsätzlich von gemeinsamer Sorge ausgehen, solange nichts Gegenteiliges bekannt ist`},{id:"schulrecht-54",document:"Schulrecht",page:17,question:"Welche Auswirkung hat die Volljährigkeit auf das Sorgerecht?",answerSections:[{title:"Volljährigkeit und Elternrechte",items:[{term:"Selbstständigkeit ab 18",explanation:`BGB → Volljährigkeit mit 18 Jahren

elterliches Sorgerecht endet

Schüler entscheidet und handelt selbst`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Verbleibende Mitwirkungsrechte",explanation:`§ 55 Abs. 3 SchG → schulische Mitwirkung

bestimmte Mitwirkungsrechte der Eltern bleiben trotz Volljährigkeit bestehen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Schulische Konsequenzen",explanation:`Folge für die Schule

volljähriger Schüler nimmt Rechte und Pflichten selbst wahr

z. B. Entschuldigungen, An-/Abmeldung

Eltern sind grundsätzlich nicht mehr die gesetzlichen Vertreter`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"}]}],answer:`BGB → Volljährigkeit mit 18 Jahren

elterliches Sorgerecht endet

Schüler entscheidet und handelt selbst

§ 55 Abs. 3 SchG → schulische Mitwirkung

bestimmte Mitwirkungsrechte der Eltern bleiben trotz Volljährigkeit bestehen

Folge für die Schule

volljähriger Schüler nimmt Rechte und Pflichten selbst wahr

z. B. Entschuldigungen, An-/Abmeldung

Eltern sind grundsätzlich nicht mehr die gesetzlichen Vertreter`},{id:"schulrecht-55",document:"Schulrecht",page:17,question:"Wie und in welchen Gremien wirken Eltern an der schulischen Erziehung mit?",answerSections:[{title:"Mitwirkungsgremien der Eltern",items:[{term:"Grundsatz",explanation:`Mitwirkung der Eltern – §§ 55 ff. SchG

Eltern wirken an der schulischen Erziehung insbesondere über folgende Gremien mit:`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Klassenpflegschaft",explanation:`§ 56 SchG → Klassenpflegschaft

Ebene → Klasse

Eltern + Lehrkräfte

Beratung über Erziehungs- und Unterrichtsarbeit`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Elternbeirat",explanation:`§ 57 SchG → Elternbeirat

Ebene → Schule

vertritt die Interessen der Eltern`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Gesamtelternbeirat",explanation:`§ 58 SchG → Gesamtelternbeirat

Ebene → Schulträger

Vertreter der Elternbeiräte der Schulen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Landeselternbeirat",explanation:`§ 60 SchG → Landeselternbeirat

Ebene → Land

berät das Kultusministerium`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"},{term:"Schulkonferenz",explanation:`§ 47 SchG → Schulkonferenz

Eltern wirken an wichtigen schulischen Entscheidungen mit

gemeinsam mit Schulleitung, Lehrkräften und Schülern`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=17",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 17"}]}],answer:`Mitwirkung der Eltern – §§ 55 ff. SchG

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

gemeinsam mit Schulleitung, Lehrkräften und Schülern`},{id:"schulrecht-56",document:"Schulrecht",page:18,question:"Wie werden Schülerinnen und Schüler an der Gestaltung des Schullebens beteiligt?",answerSections:[{title:"Schülermitverantwortung",items:[{term:"SMV und Vertretungen",explanation:`§§ 62 ff. SchG → Schülermitverantwortung (SMV)

Mitwirkung der Schüler am Schulleben

Klassensprecher → Klassenebene

Schülerrat + Schülersprecher → Schulebene

Verbindungslehrer → beraten und unterstützen die SMV`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Schulkonferenz",explanation:`§ 47 SchG → Schulkonferenz

Beteiligung durch Schülervertreter in der Schulkonferenz`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"SMV-Verordnung",explanation:`SMV-Verordnung → nähere Ausgestaltung

regelt Organisation, Wahl und Aufgaben der SMV`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"}]}],answer:`§§ 62 ff. SchG → Schülermitverantwortung (SMV)

Mitwirkung der Schüler am Schulleben

Klassensprecher → Klassenebene

Schülerrat + Schülersprecher → Schulebene

Verbindungslehrer → beraten und unterstützen die SMV

§ 47 SchG → Schulkonferenz

Beteiligung durch Schülervertreter in der Schulkonferenz

SMV-Verordnung → nähere Ausgestaltung

regelt Organisation, Wahl und Aufgaben der SMV`},{id:"schulrecht-57",document:"Schulrecht",page:18,question:"Wo wirkt die SMV mit?",answerSections:[{title:"Aufgaben und Mitwirkung der SMV",items:[{term:"Interessenvertretung und Schulleben",explanation:`§ 62 SchG → Aufgaben der SMV

Interessen der Schüler vertreten

Mitwirkung bei der Gestaltung des Schullebens

Förderung fachlicher, sportlicher, kultureller, sozialer und politischer Interessen der Schüler`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Schulkonferenz",explanation:`§ 47 SchG → Schulkonferenz

Mitwirkung durch Schülervertreter in der Schulkonferenz`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Lehrerkonferenzen",explanation:`§ 10 SMV-VO → Lehrerkonferenzen

Schülervertreter können bei bestimmten Angelegenheiten an Lehrerkonferenzen beteiligt werden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"}]}],answer:`§ 62 SchG → Aufgaben der SMV

Interessen der Schüler vertreten

Mitwirkung bei der Gestaltung des Schullebens

Förderung fachlicher, sportlicher, kultureller, sozialer und politischer Interessen der Schüler

§ 47 SchG → Schulkonferenz

Mitwirkung durch Schülervertreter in der Schulkonferenz

§ 10 SMV-VO → Lehrerkonferenzen

Schülervertreter können bei bestimmten Angelegenheiten an Lehrerkonferenzen beteiligt werden`},{id:"schulorganisation-9",document:"Schulorganisation",page:3,question:"Wie berücksichtigen Sie das Mitbestimmungsrecht der Eltern?",answerSections:[{title:"Elternrechte im Schulalltag",items:[{term:"Verbundene Erziehungsaufträge",explanation:"Eltern besitzen eigene Erziehungsrechte. Schule und Elternhaus haben daher unterschiedliche, aber miteinander verbundene Erziehungsaufträge.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Information, Beratung und Beteiligung",explanation:`Praktisch bedeutet das beispielsweise:

Eltern informieren,

Beratungsgespräche führen,

Elternvertretung beteiligen,

gesetzlich vorgesehene Beteiligungsrechte beachten.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Grenzen individueller Mitbestimmung",explanation:"Das bedeutet aber nicht, dass Eltern über Unterrichtsinhalte oder schulische Regeln individuell bestimmen können. Aufgrund der staatlichen Schulhoheit darf der Staat etwa verbindlichen Unterricht und Schulpflicht festlegen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"}]}],answer:`Eltern besitzen eigene Erziehungsrechte. Schule und Elternhaus haben daher unterschiedliche, aber miteinander verbundene Erziehungsaufträge.

Praktisch bedeutet das beispielsweise:

Eltern informieren,

Beratungsgespräche führen,

Elternvertretung beteiligen,

gesetzlich vorgesehene Beteiligungsrechte beachten.

Das bedeutet aber nicht, dass Eltern über Unterrichtsinhalte oder schulische Regeln individuell bestimmen können. Aufgrund der staatlichen Schulhoheit darf der Staat etwa verbindlichen Unterricht und Schulpflicht festlegen.`}]}]},{id:"cluster-4",title:"Schulpflicht und Teilnahme am Unterricht",topics:[{title:"Grundbegriffe und zeitlicher Verlauf",sources:[{document:"Schulrecht",pages:"18-20",page:18},{document:"Schulorganisation",pages:"5-6",page:5},{document:"Schulorganisation",pages:"28",page:28}],questions:[{id:"schulrecht-58",document:"Schulrecht",page:18,question:"Was versteht man unter der Schulpflicht? Wann beginnt und endet sie bzw. wie erfüllt man sie?",answerSections:[{title:"Allgemeine Schulpflicht",items:[{term:"Umfang",explanation:`§ 72 SchG → Schulpflicht

Pflicht zum regelmäßigen Besuch des Unterrichts

Teilnahme an verbindlichen Schulveranstaltungen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Beginn",explanation:`§ 73 SchG → Beginn

grundsätzlich mit 6 Jahren

Stichtag: 30. Juni`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Vorzeitige Aufnahme und Zurückstellung",explanation:`§ 74 SchG → Ausnahmen

Regelungen zu vorzeitiger Aufnahme / Zurückstellung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Dauer",explanation:`§ 75 SchG → Dauer Vollzeitschulpflicht

Grundschule → mindestens 4 Jahre

anschließend weiterführende Schule → mindestens 5 Jahre

insgesamt grundsätzlich 9 Schuljahre`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Anschließende Berufsschulpflicht",explanation:`§ 78 SchG → Berufsschulpflicht

anschließend grundsätzlich 3 Jahre Berufsschulpflicht`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Erfüllung",explanation:`§ 76 SchG → Erfüllung

durch Besuch einer öffentlichen Schule

oder einer entsprechenden Ersatzschule`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"}]}],answer:`§ 72 SchG → Schulpflicht

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

oder einer entsprechenden Ersatzschule`},{id:"schulrecht-59",document:"Schulrecht",page:18,question:"Was ist die Berufsschulpflicht und wie erfüllt man sie?",answerSections:[{title:"Berufsschulpflicht",items:[{term:"Beginn und Personenkreis",explanation:`§ 77 SchG → Berufsschulpflicht

beginnt grundsätzlich nach Ende der allgemeinen Schulpflicht

betrifft Jugendliche, die keine weiterführende allgemeinbildende oder berufliche Vollzeitschule besuchen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Dauer",explanation:`§ 78 SchG → Dauer

grundsätzlich 3 Jahre

grundsätzlich längstens bis Ende des Schuljahres, in dem das 18. Lebensjahr vollendet wird

bei Berufsausbildung → grundsätzlich bis zum Ende der Ausbildung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Erfüllung",explanation:`§ 79 SchG → Erfüllung

durch Besuch der zuständigen Berufsschule`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"},{term:"Ruhen",explanation:`§ 80 SchG → Ruhen

Berufsschulpflicht kann beim Besuch bestimmter anderer Bildungseinrichtungen ruhen

z. B. Berufsfachschule, Berufskolleg, Hochschule`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=18",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 18"}]}],answer:`§ 77 SchG → Berufsschulpflicht

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

z. B. Berufsfachschule, Berufskolleg, Hochschule`},{id:"schulrecht-60",document:"Schulrecht",page:19,question:"Worin unterscheiden sich Schulpflicht und Teilnahmepflicht?",answerSections:[{title:"Schulpflicht und Teilnahmepflicht",items:[{term:"Gesetzliche Schulpflicht",explanation:`§§ 72 ff. SchG → Schulpflicht

gesetzliche Pflicht zum Schulbesuch

gilt für schulpflichtige Schüler`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=19",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 19"},{term:"Teilnahme auch ohne Schulpflicht",explanation:`§ 1 SchulbesuchsVO → Teilnahmepflicht

gilt auch für nicht mehr schulpflichtige Schüler, die eine Schule besuchen

Pflicht zur regelmäßigen und ordnungsgemäßen Teilnahme

umfasst Unterricht und verbindliche Schulveranstaltungen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=19",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 19"}]}],answer:`§§ 72 ff. SchG → Schulpflicht

gesetzliche Pflicht zum Schulbesuch

gilt für schulpflichtige Schüler

§ 1 SchulbesuchsVO → Teilnahmepflicht

gilt auch für nicht mehr schulpflichtige Schüler, die eine Schule besuchen

Pflicht zur regelmäßigen und ordnungsgemäßen Teilnahme

umfasst Unterricht und verbindliche Schulveranstaltungen`},{id:"schulrecht-61",document:"Schulrecht",page:20,question:"Die Schulpflicht und die Teilnahmepflicht beinhalten beide eine Verhaltenspflicht? Was steckt diesbezüglich dahinter?",answerSections:[{title:"Verhaltenspflicht im Unterricht",items:[{term:"Pflichten schulpflichtiger Schüler",explanation:`§ 72 Abs. 3 SchG → schulpflichtige Schüler

regelmäßiger Besuch des Unterrichts

Teilnahme an verbindlichen Schulveranstaltungen

Schulordnung einhalten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Teilnahme und Schulordnung",explanation:`§ 1 Abs. 1 SchulbesuchsVO → alle Schüler

Unterricht und verbindliche Schulveranstaltungen regelmäßig und ordnungsgemäß besuchen

Schulordnung einhalten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Mitarbeit und Hausaufgaben",explanation:`Daraus abgeleitet → Verhaltenspflicht

im Unterricht mitarbeiten

Hausaufgaben gewissenhaft erledigen

steht nicht ausdrücklich im Gesetz, laut Skript unbestrittene Rechtsauffassung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Beispiel: Anwesenheit allein",explanation:`Beispiel:

§ 72 Abs. 3 SchG: Schüler müssen den Unterricht regelmäßig besuchen.

Wenn „besuchen“ nur körperlich anwesend sein bedeuten würde, könnte ein Schüler:

jeden Tag erscheinen, sich hinsetzen, jede Mitarbeit verweigern und grundsätzlich nichts tun.

Formal wäre er dann anwesend – der Schulpflicht wäre aber inhaltlich kein sinnvoller Zweck mehr zu entnehmen.

Deshalb wird aus der Pflicht zur Teilnahme am Unterricht abgeleitet, dass der Schüler auch das tun muss, was für eine ordnungsgemäße Teilnahme notwendig ist:`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"}]}],answer:`§ 72 Abs. 3 SchG → schulpflichtige Schüler

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

Deshalb wird aus der Pflicht zur Teilnahme am Unterricht abgeleitet, dass der Schüler auch das tun muss, was für eine ordnungsgemäße Teilnahme notwendig ist:`},{id:"schulrecht-62",document:"Schulrecht",page:20,question:"Wer ist für die Erfüllung dieser Schulpflicht verantwortlich?",answerSections:[{title:"Verantwortung für den Schulbesuch",items:[{term:"Eltern und volljährige Schüler",explanation:`§ 85 Abs. 1 SchG

minderjährige Schüler → Erziehungsberechtigte

volljährige Schüler → selbst verantwortlich`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Ausbildende und Arbeitgeber",explanation:`§ 85 Abs. 2 SchG

bei Berufsschulpflichtigen → zusätzlich Ausbildende/Arbeitgeber

müssen den Schulbesuch ermöglichen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"}]}],answer:`§ 85 Abs. 1 SchG

minderjährige Schüler → Erziehungsberechtigte

volljährige Schüler → selbst verantwortlich

§ 85 Abs. 2 SchG

bei Berufsschulpflichtigen → zusätzlich Ausbildende/Arbeitgeber

müssen den Schulbesuch ermöglichen`},{id:"schulorganisation-14",document:"Schulorganisation",page:5,question:"Erklären Sie die gesetzliche Regelung der Schulpflicht in Baden-Württemberg.",answerSections:[{title:"Schulpflicht in Baden-Württemberg",items:[{term:"Allgemeine Schulpflicht und Berufsschulpflicht",explanation:`Schulpflicht → Pflicht zum Besuch einer Schule

Sie umfasst insbesondere:

allgemeine Schulpflicht,

Berufsschulpflicht.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Schulbesuchspflicht",explanation:"Davon zu unterscheiden ist die Schulbesuchspflicht: Wer schulpflichtig bzw. Schüler einer Schule ist, muss regelmäßig und ordnungsgemäß am Unterricht und den verbindlichen Veranstaltungen teilnehmen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Rechtsgrundlagen und Abgrenzung",explanation:`Für die Berufsschulpflicht nennt Sitzung 2 ausdrücklich die §§ 77–81 SchG, außerdem § 85 zur Verantwortlichkeit und § 92 zu Ordnungswidrigkeiten.

Fragen: Nochmal genau klären unterschied Schulpflicht und Schulbesuchspflicht`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"}]}],answer:`Schulpflicht → Pflicht zum Besuch einer Schule

Sie umfasst insbesondere:

allgemeine Schulpflicht,

Berufsschulpflicht.

Davon zu unterscheiden ist die Schulbesuchspflicht: Wer schulpflichtig bzw. Schüler einer Schule ist, muss regelmäßig und ordnungsgemäß am Unterricht und den verbindlichen Veranstaltungen teilnehmen.

Für die Berufsschulpflicht nennt Sitzung 2 ausdrücklich die §§ 77–81 SchG, außerdem § 85 zur Verantwortlichkeit und § 92 zu Ordnungswidrigkeiten.

Fragen: Nochmal genau klären unterschied Schulpflicht und Schulbesuchspflicht`},{id:"schulorganisation-15",document:"Schulorganisation",page:5,question:"Wie lange dauert die allgemeine Schulpflicht und wann beginnt bzw. endet die Berufsschulpflicht?",answerSections:[{title:"Dauer und Anschluss der Schulpflicht",items:[{term:"Neun Schuljahre",explanation:"Allgemeine Schulpflicht → grundsätzlich 9 Schuljahre",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Anschließende Berufsschulpflicht",explanation:`Anschließend kann Berufsschulpflicht bestehen.

Sie betrifft insbesondere Jugendliche nach Ende der allgemeinen Schulpflicht, die eine Berufsausbildung absolvieren bzw. noch berufsschulpflichtig sind.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Regelungen der §§ 77–81 SchG",explanation:`Die detaillierten Regelungen befinden sich laut Präsentation in:

§ 77 SchG – Beginn,

§ 78 SchG – Dauer,

§ 78a SchG – AV/AVdual statt Berufsschule,

§ 79 SchG – Erfüllung,

§ 80 SchG – Ruhen,

§ 81 SchG – vorzeitige Beendigung.

Fragen: Paragrafen studieren`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"}]}],answer:`Allgemeine Schulpflicht → grundsätzlich 9 Schuljahre

Anschließend kann Berufsschulpflicht bestehen.

Sie betrifft insbesondere Jugendliche nach Ende der allgemeinen Schulpflicht, die eine Berufsausbildung absolvieren bzw. noch berufsschulpflichtig sind.

Die detaillierten Regelungen befinden sich laut Präsentation in:

§ 77 SchG – Beginn,

§ 78 SchG – Dauer,

§ 78a SchG – AV/AVdual statt Berufsschule,

§ 79 SchG – Erfüllung,

§ 80 SchG – Ruhen,

§ 81 SchG – vorzeitige Beendigung.

Fragen: Paragrafen studieren`},{id:"schulorganisation-31",document:"Schulorganisation",page:8,question:"Wie ist die Schulpflicht in Deutschland geregelt?",answerSections:[{title:"Schulpflicht in Deutschland",items:[{term:"Landesrecht",explanation:`Schulpflicht → Landesrecht

Da Schulrecht Ländersache ist, wird auch die konkrete Schulpflicht durch die Bundesländer geregelt.

In Baden-Württemberg insbesondere durch das Schulgesetz BW.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Schulpflicht",explanation:`Dabei muss man unterscheiden:

Schulpflicht = grundsätzlich eine Schule besuchen müssen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Schulbesuchspflicht",explanation:"Schulbesuchspflicht = regelmäßig und ordnungsgemäß am Unterricht teilnehmen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"},{term:"Berufsschulpflicht",explanation:"Berufsschulpflicht = Schulpflicht nach Ende der allgemeinen Schulpflicht im beruflichen Bereich.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=8",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 8"}]}],answer:`Schulpflicht → Landesrecht

Da Schulrecht Ländersache ist, wird auch die konkrete Schulpflicht durch die Bundesländer geregelt.

In Baden-Württemberg insbesondere durch das Schulgesetz BW.

Dabei muss man unterscheiden:

Schulpflicht = grundsätzlich eine Schule besuchen müssen.

Schulbesuchspflicht = regelmäßig und ordnungsgemäß am Unterricht teilnehmen.

Berufsschulpflicht = Schulpflicht nach Ende der allgemeinen Schulpflicht im beruflichen Bereich.`},{id:"schulorganisation-104",document:"Schulorganisation",page:28,question:"Differenzieren Sie zwischen Schulpflicht, Schulbesuchspflicht und Berufsschulpflicht.",answerSections:[{title:"Drei Formen schulischer Pflichten",items:[{term:"Schulpflicht",explanation:`Hier würde ich mir die drei Begriffe sehr sauber auseinanderhalten:

Schulpflicht → überhaupt Schule besuchen

Allgemeine Pflicht, eine Schule zu besuchen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Schulbesuchspflicht",explanation:`Schulbesuchspflicht → tatsächlich teilnehmen

Pflicht, regelmäßig und pünktlich am Unterricht teilzunehmen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Berufsschulpflicht",explanation:`Berufsschulpflicht → nach allgemeiner Schulpflicht

Pflicht, nach der allgemeinen Schulpflicht eine Berufsschule bzw. einen entsprechenden beruflichen Bildungsgang zu besuchen.

Sitzung 2 ordnet die Berufsschulpflicht insbesondere den §§ 77–81 SchG zu.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Abgrenzung",explanation:`Merksatz:

Schulpflicht → muss zur Schule

Schulbesuchspflicht → muss tatsächlich hingehen

Berufsschulpflicht → Schulpflicht im beruflichen Bereich`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"}]}],answer:`Hier würde ich mir die drei Begriffe sehr sauber auseinanderhalten:

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

Berufsschulpflicht → Schulpflicht im beruflichen Bereich`}]},{title:"Fehlen, Befreiung und Beurlaubung",sources:[{document:"Schulrecht",pages:"20",page:20}],questions:[{id:"schulrecht-63",document:"Schulrecht",page:20,question:"Unterscheiden Sie Befreiung und Beurlaubung vom Unterricht. Wann entscheidet Lehrkraft – wann SL?",answerSections:[{title:"Befreiung und Beurlaubung",items:[{term:"Befreiung · Zuständigkeiten",explanation:`§ 3 SchulbesuchsVO → Befreiung

Befreiung von einzelnen Unterrichtsstunden / Schulveranstaltungen

1 Unterrichtsstunde → Fachlehrer

Schulveranstaltung → Klassenlehrer

sonst → Schulleiter`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Beurlaubung · Voraussetzungen und Zuständigkeiten",explanation:`§ 4 SchulbesuchsVO → Beurlaubung

Befreiung vom Schulbesuch für einen bestimmten Zeitraum

nur in besonders begründeten Ausnahmefällen

bis 2 unmittelbar aufeinanderfolgende Unterrichtstage → Klassenlehrer

bestimmte kirchliche Veranstaltungen → Klassenlehrer

sonst → Schulleiter`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"}]}],answer:`§ 3 SchulbesuchsVO → Befreiung

Befreiung von einzelnen Unterrichtsstunden / Schulveranstaltungen

1 Unterrichtsstunde → Fachlehrer

Schulveranstaltung → Klassenlehrer

sonst → Schulleiter

§ 4 SchulbesuchsVO → Beurlaubung

Befreiung vom Schulbesuch für einen bestimmten Zeitraum

nur in besonders begründeten Ausnahmefällen

bis 2 unmittelbar aufeinanderfolgende Unterrichtstage → Klassenlehrer

bestimmte kirchliche Veranstaltungen → Klassenlehrer

sonst → Schulleiter`},{id:"schulrecht-64",document:"Schulrecht",page:20,question:"Welche besonderen Regelungen gelten für den Fall einer versäumten Klassenarbeit?",answerSections:[{title:"Versäumte Klassenarbeit",items:[{term:"Entschuldigung und Attest",explanation:`§ 2 SchulbesuchsVO → Entschuldigung

Verhinderung unverzüglich mitteilen

spätestens am 2. Tag

Attest → keine generelle Pflicht, kann im Einzelfall verlangt werden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Entschuldigtes Fehlen",explanation:`§ 8 Abs. 4 NVO → entschuldigtes Fehlen

Fachlehrer entscheidet, ob nachgeschrieben wird`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"},{term:"Unentschuldigtes Fehlen",explanation:`§ 8 Abs. 5 NVO → unentschuldigtes Fehlen

Note 6 / 0 Punkte`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=20",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 20"}]}],answer:`§ 2 SchulbesuchsVO → Entschuldigung

Verhinderung unverzüglich mitteilen

spätestens am 2. Tag

Attest → keine generelle Pflicht, kann im Einzelfall verlangt werden

§ 8 Abs. 4 NVO → entschuldigtes Fehlen

Fachlehrer entscheidet, ob nachgeschrieben wird

§ 8 Abs. 5 NVO → unentschuldigtes Fehlen

Note 6 / 0 Punkte`}]}]},{id:"cluster-5",title:"Aufsicht, Sicherheit und Haftung",topics:[{title:"Zweck und Personenkreise",sources:[{document:"Schulrecht",pages:"4-5",page:4}],questions:[{id:"schulrecht-7",document:"Schulrecht",page:4,question:"Was soll die Aufsichtspflicht an den Schulen grundsätzlich gewährleisten?",answerSections:[{title:"Zweck der Aufsichtspflicht",items:[{term:"Bildungs- und Erziehungsauftrag",explanation:`§ 1 SchG → Bildungs- und Erziehungsauftrag

Aufsichtspflicht = begleitende Pflicht des Lehrers`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Schulpflicht und Aufsicht",explanation:`„Spiegelbild zur Schulpflicht“:

Schulpflicht → Schüler wird dem Einflussbereich der Eltern entzogen

Schule übernimmt während dieser Zeit die Aufsicht`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Personen- und Sachschutz",explanation:`Zweck der Aufsichtspflicht → Schutz vor Schäden

Schüler schützen → vor Personenschäden

Eigentum schützen → Eigentum der Schüler und des Schulträgers

Dritte schützen → vor Personen- und Sachschäden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Schutzbereiche",explanation:`Kurz:

Eigen-/Schülerschutz + Schutz von Eigentum + Fremdschutz`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"}]}],answer:`§ 1 SchG → Bildungs- und Erziehungsauftrag

Aufsichtspflicht = begleitende Pflicht des Lehrers

„Spiegelbild zur Schulpflicht“:

Schulpflicht → Schüler wird dem Einflussbereich der Eltern entzogen

Schule übernimmt während dieser Zeit die Aufsicht

Zweck der Aufsichtspflicht → Schutz vor Schäden

Schüler schützen → vor Personenschäden

Eigentum schützen → Eigentum der Schüler und des Schulträgers

Dritte schützen → vor Personen- und Sachschäden

Kurz:

Eigen-/Schülerschutz + Schutz von Eigentum + Fremdschutz`},{id:"schulrecht-8",document:"Schulrecht",page:4,question:"Unterscheiden Sie den beaufsichtigten, geschützten und aufsichtspflichtigen Personenkreis",answerSections:[{title:"Personenkreise der Aufsicht",items:[{term:"Grundlage",explanation:`§ 1 SchG → Grundlage der schulischen Aufsichtspflicht

Aufsichtspflicht = begleitende Pflicht zum Bildungs- und Erziehungsauftrag`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Beaufsichtigte Personen",explanation:`Beaufsichtigter Personenkreis

grundsätzlich Schüler

insbesondere minderjährige Schüler

bei Volljährigen → keine Aufsicht im klassischen Sinn, aber Fürsorge-/ Verkehrssicherungspflichten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Geschützte Personen",explanation:`Geschützter Personenkreis

Schüler selbst

Lehrkräfte

Schulträger

Dritte

Schutz vor Personen- und Sachschäden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Aufsichtspflichtige Personen",explanation:`Aufsichtspflichtiger Personenkreis

jeweils unterrichtende Lehrkraft

vom Schulleiter zur Aufsicht eingeteilte Lehrkräfte

allgemeine Aufsichtspflicht aller Lehrkräfte gegenüber allen Schülern

auch Dritte möglich, z. B. Eltern/Ehepartner bei Klassenfahrten

auch ältere Schüler im Rahmen des inneren Schulbetriebs`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"},{term:"Abgrenzung",explanation:`Merksatz:

Beaufsichtigt → auf wen passe ich auf?

Geschützt → wen/was soll ich schützen?

Aufsichtspflichtig → wer muss aufpassen?`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=4",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 4"}]}],answer:`§ 1 SchG → Grundlage der schulischen Aufsichtspflicht

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

Aufsichtspflichtig → wer muss aufpassen?`},{id:"schulrecht-12",document:"Schulrecht",page:5,question:"Woher kommt die Aufsichtspflicht und wie wird sie gerechtfertigt?",answerSections:[{title:"Herleitung der Aufsichtspflicht",items:[{term:"Elternrecht",explanation:"Art. 6 Abs. 2 GG → elterliche Sorge und Aufsicht",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Schulpflicht und schulische Aufsicht",explanation:`§ 72 SchG → Schulpflicht → Kind befindet sich während der Schulzeit nicht im Aufsichtsbereich der Eltern

Schule muss die erforderliche Aufsicht gewährleisten.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"}]}],answer:`Art. 6 Abs. 2 GG → elterliche Sorge und Aufsicht

§ 72 SchG → Schulpflicht → Kind befindet sich während der Schulzeit nicht im Aufsichtsbereich der Eltern

Schule muss die erforderliche Aufsicht gewährleisten.`}]},{title:"Umfang und praktische Durchführung",sources:[{document:"Schulrecht",pages:"5-6",page:5}],questions:[{id:"schulrecht-9",document:"Schulrecht",page:5,question:"In welchem zeitlichen und örtlichen Rahmen bewegt sich die Aufsichtspflicht?",answerSections:[{title:"Umfang der Aufsichtspflicht",items:[{term:"Zeitlicher Rahmen",explanation:`Zeitlicher Rahmen

Unterrichtszeit

Pausen

angemessene Zeit vor Unterrichtsbeginn → ca. 10–15 Min.

angemessene Zeit nach Unterrichtsende

Hohlstunden, solange SuS auf dem Schulgelände sind

bei allen schulischen Veranstaltungen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Örtlicher Rahmen",explanation:`Örtlicher Rahmen

gesamtes Schulgelände

Orte schulischer Veranstaltungen

Unterrichtswege → Wege zwischen verschiedenen Orten schulischer Veranstaltungen

Schulbushaltestelle, wenn in unmittelbarer Nähe der Schule`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Schulweg und Schulbus",explanation:`nicht: normaler Schulweg

nicht: Beförderung im Schulbus`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Herleitung nach Denig",explanation:`Rechtsgrundlage nach Denig

keine einzelne Vorschrift, die diesen Umfang vollständig festlegt

Aufsichtspflicht = begleitende Pflicht zum Bildungs- und Erziehungsauftrag aus § 1 SchG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Verantwortungsbereich",explanation:`Merksatz:

Zeitlich → solange Schule verantwortlich ist.

Örtlich → schulischer Verantwortungsbereich, nicht normaler Schulweg.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"}]}],answer:`Zeitlicher Rahmen

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

Örtlich → schulischer Verantwortungsbereich, nicht normaler Schulweg.`},{id:"schulrecht-10",document:"Schulrecht",page:5,question:"Was versteht man unter den Grundsätzen der Aufsichtspflicht?",answerSections:[{title:"Grundsätze der Aufsicht",items:[{term:"Prävention",explanation:`Prävention

Gefahren vorausschauend erkennen und verhindern.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Kontinuität",explanation:`Kontinuität

Aufsicht muss grundsätzlich ununterbrochen gewährleistet sein.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"},{term:"Aktivität",explanation:`Aktivität

Regeln kontrollieren und bei Verstößen konsequent reagieren.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"}]}],answer:`Prävention

Gefahren vorausschauend erkennen und verhindern.

Kontinuität

Aufsicht muss grundsätzlich ununterbrochen gewährleistet sein.

Aktivität

Regeln kontrollieren und bei Verstößen konsequent reagieren.`},{id:"schulrecht-11",document:"Schulrecht",page:5,question:"Welche Frage sollte man sich im Bezug auf die Aufsichtspflicht immer stellen?",answerSections:[{title:"Leitfrage der Aufsichtspflicht",items:[{term:"Vorhersehbare Schäden · Zumutbarkeit",explanation:`Leitfrage der Aufsichtspflicht:

„Habe ich in der konkreten Situation alles Zumutbare und Erforderliche getan, um vorhersehbare Schäden zu verhindern?“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=5",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 5"}]}],answer:`Leitfrage der Aufsichtspflicht:

„Habe ich in der konkreten Situation alles Zumutbare und Erforderliche getan, um vorhersehbare Schäden zu verhindern?“`},{id:"schulrecht-13",document:"Schulrecht",page:6,question:"Welche Besonderheiten gilt es bei Schulausflügen und Klassenfahrten zu beachten?",answerSections:[{title:"Aufsicht bei Ausflügen und Klassenfahrten",items:[{term:"Verbindliche Regeln",explanation:`Risiken vermindern durch Regeln

Ausgang nur in Gruppen von 3 SuS

Ende des Ausgangs verbindlich festlegen

ggf. Verbote aussprechen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Kontrollfrage",explanation:`Kontrollfrage:

→ „Kann ich bei normalem Verlauf damit rechnen, dass den SuS nichts passiert?“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Aufsicht durch Dritte",explanation:`Dritte können Aufsicht übernehmen

z. B. Eltern oder Ehepartner bei Klassenfahrten/Ausflügen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Unterrichtswege",explanation:`auf Unterrichtswegen:

geeigneten Weg auswählen

Schüler belehren

Belehrung im Klassenbuch vermerken

Gefahrenquellen beseitigen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Vorausschauende Risikominderung",explanation:`Denigs Kern:

Nicht Dauerüberwachung, sondern Risiken vorausschauend durch konkrete Regeln so reduzieren, dass bei normalem Verlauf nichts passiert.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"}]}],answer:`Risiken vermindern durch Regeln

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

Nicht Dauerüberwachung, sondern Risiken vorausschauend durch konkrete Regeln so reduzieren, dass bei normalem Verlauf nichts passiert.`}]},{title:"Rechtsfolgen und Unfallversicherung",sources:[{document:"Schulrecht",pages:"6",page:6}],questions:[{id:"schulrecht-14",document:"Schulrecht",page:6,question:"Welche grundsätzlichen Rechtsfolgen können Aufsichtspflichtverletzungen nach sich ziehen?",answerSections:[{title:"Folgen einer Aufsichtspflichtverletzung",items:[{term:"Zivilrecht · Schadensersatz",explanation:`§ 839 BGB + Art. 34 GG → Zivilrecht

Schadensersatz

Grundsätzlich haftet der Staat

Rückgriff auf Lehrkraft bei Vorsatz / grober Fahrlässigkeit möglich`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Strafrecht",explanation:`§§ 229, 222 StGB → Strafrecht

§ 229 StGB → fahrlässige Körperverletzung

§ 222 StGB → fahrlässige Tötung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Dienstrecht",explanation:`§§ 1, 8 LDG → Dienstrecht

Aufsichtspflichtverletzung kann Dienstvergehen darstellen

→ Disziplinarverfahren möglich

GEW: LDG ab S. 329`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Disziplinarmaßnahmen",explanation:`§ 25 LDG → mögliche Disziplinarmaßnahmen (GEW: S. 302 ff.)

Verweis

Geldbuße

Kürzung der Bezüge

Zurückstufung

Entfernung aus dem Beamtenverhältnis`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Ursächlicher Zusammenhang",explanation:`Denig → Voraussetzung

Zusammenhang zwischen Aufsichtspflichtverletzung und Schaden

Frage: Wäre der Schaden auch bei ordnungsgemäßer Aufsicht eingetreten?`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Abgrenzung",explanation:`Merksatz

Zivilrecht → Schadensersatz | Strafrecht → Strafe | Dienstrecht → Disziplinarverfahren.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"}]}],answer:`§ 839 BGB + Art. 34 GG → Zivilrecht

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

Zivilrecht → Schadensersatz | Strafrecht → Strafe | Dienstrecht → Disziplinarverfahren.`},{id:"schulrecht-15",document:"Schulrecht",page:6,question:"Was ist die sogenannte Schülerunfallversicherung und wozu gibt es sie?",answerSections:[{title:"Schülerunfallversicherung",items:[{term:"Schulbesuch und Veranstaltungen",explanation:`S. 992 GEW.

§ 2 Abs. 1 Nr. 8 SGB VII → gesetzliche Unfallversicherung

Schüler sind gesetzlich unfallversichert

während des Schulbesuchs

bei schulischen Veranstaltungen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Unmittelbarer Schulweg",explanation:`§ 8 SGB VII → Wegeunfall

Versicherung auf dem unmittelbaren Schulweg`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Absicherung unabhängig vom Verschulden",explanation:`Zweck

Absicherung der Folgen eines Schulunfalls

grundsätzlich unabhängig von Verschulden oder Aufsichtspflichtverletzung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"},{term:"Versicherte Bereiche",explanation:`Merksatz:

Unterricht + Schulveranstaltung + Schulweg → gesetzlich unfallversichert.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=6",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 6"}]}],answer:`S. 992 GEW.

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

Unterricht + Schulveranstaltung + Schulweg → gesetzlich unfallversichert.`}]}]},{id:"cluster-6",title:"Leistungserhebung, Noten und Prüfungssituationen",topics:[{title:"Grundlagen der Bewertung",sources:[{document:"Schulrecht",pages:"7-9",page:7}],questions:[{id:"schulrecht-17",document:"Schulrecht",page:7,question:"Was versteht man unter dem pädagogischen Beurteilungsfreiraum? Wie unterscheiden sich Leistungserhebung und Leistungsbewertung im Hinblick auf diesen?",answerSections:[{title:"Pädagogischer Beurteilungsspielraum",items:[{term:"Freiraum und Mindestregelungen",explanation:`NVO → pädagogischer Beurteilungsspielraum

Lehrer soll Kenntnisse aber auch Werte vermitteln, dazu braucht er päd. Freiraum, aber auch Beurteilungsspielraum, daher enthällt NVO nur Mindestregelungen um Chancengleichheit zu gewährleisten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Leistungserhebung · schulweite Regeln",explanation:`Leistungserhebung → Wie wird die Leistung erhoben?

§ 45 SchG → GLK: Beschlüsse über allgemeine Fragen der Unterrichtsarbeit

§ 47 SchG → Schulkonferenz: Mitwirkung/Zustimmung bei entsprechenden GLK-Beschlüssen

dadurch können schulweit verbindliche Regelungen zur Leistungserhebung entstehen

§ 56 SchG → Klassenpflegschaft: nur Unterrichtung und Aussprache, keine schulweit verbindliche Festlegung

Bspl: Die NVO schreibt nicht generell vor, dass auf jeder zurückgegebenen Klassenarbeit der Klassendurchschnitt angegeben werden muss.

Merkkette: GLK beschließt → Schulkonferenz wirkt mit → schulweit verbindlich`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Leistungsbewertung · Fachkonferenz",explanation:`Leistungsbewertung → Wie wird die Leistung bewertet?

§ 5 Konferenzordnung i. V. m. § 45 Abs. 2 SchG → Fachkonferenz

kann Festlegungen treffen zu:

Notengebung

Leistungsmessung

Gewichtung verschiedener Leistungsarten

gemeinsamen Bewertungskriterien

Leistungsrückmeldung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Vorbehalt der Fachlehrerentscheidung",explanation:"Ausnahme: Weist die NVO eine Entscheidung ausdrücklich dem Fachlehrer zu → Fachkonferenz/ GLK dürfen nur Empfehlungen geben.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"}]}],answer:`NVO → pädagogischer Beurteilungsspielraum

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

Ausnahme: Weist die NVO eine Entscheidung ausdrücklich dem Fachlehrer zu → Fachkonferenz/ GLK dürfen nur Empfehlungen geben.`},{id:"schulrecht-18",document:"Schulrecht",page:7,question:"Wie setzt man die Vorgabe der Notentransparenz praktisch um?",answerSections:[{title:"Notentransparenz",items:[{term:"Rechtsgrundlage",explanation:"Notentransparenz (§ 7 NVO)",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Gewichtung bekannt geben",explanation:"Zu Beginn Gewichtung der schriftlichen, mündlichen und praktischen Leistungen bekannt geben",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Bewertungskriterien offenlegen",explanation:"bei Leistungsfeststellungen Bewertungskriterien bzw. Punkte- und Notenverteilung transparent machen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Noten auf Nachfrage",explanation:"Schriftliche und mündliche Noten auf Nachfrage offenlegen.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"}]}],answer:`Notentransparenz (§ 7 NVO)

Zu Beginn Gewichtung der schriftlichen, mündlichen und praktischen Leistungen bekannt geben

bei Leistungsfeststellungen Bewertungskriterien bzw. Punkte- und Notenverteilung transparent machen

Schriftliche und mündliche Noten auf Nachfrage offenlegen.`},{id:"schulrecht-19",document:"Schulrecht",page:7,question:"Wozu werden Noten erteilt?",answerSections:[{title:"Zweck der Notengebung",items:[{term:"Lernfortschritt und Bildungsweg",explanation:`§ 1 NVO → Zweck der Notengebung

Kontrolle des Lernfortschritts

Entscheidungsgrundlage für den weiteren Bildungsgang

Bestätigung des Lernerfolges

Hinweise für den weiteren Lernfortgang`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"},{term:"Chancengleichheit und Beurteilungsspielraum",explanation:`Zusätzliches Ziel der Leistungsbeurteilung nach Denig

Chancengleichheit

Chancengerechtigkeit der Schüler

dabei besteht ein pädagogischer Beurteilungsspielraum der Lehrkraft.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=7",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 7"}]}],answer:`§ 1 NVO → Zweck der Notengebung

Kontrolle des Lernfortschritts

Entscheidungsgrundlage für den weiteren Bildungsgang

Bestätigung des Lernerfolges

Hinweise für den weiteren Lernfortgang

Zusätzliches Ziel der Leistungsbeurteilung nach Denig

Chancengleichheit

Chancengerechtigkeit der Schüler

dabei besteht ein pädagogischer Beurteilungsspielraum der Lehrkraft.`},{id:"schulrecht-20",document:"Schulrecht",page:8,question:"Welche Arten von Schüler-Leistungen können festgestellt werden?",answerSections:[{title:"Leistungsarten",items:[{term:"Rechtsgrundlage",explanation:"§ 7 Abs. 1 NVO → Arten der Leistungen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Schriftlich",explanation:"schriftliche Leistungen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Mündlich",explanation:"mündliche Leistungen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Praktisch",explanation:"praktische Leistungen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"}]}],answer:`§ 7 Abs. 1 NVO → Arten der Leistungen

schriftliche Leistungen

mündliche Leistungen

praktische Leistungen`},{id:"schulrecht-21",document:"Schulrecht",page:8,question:"Was versteht man unter einer „pädagogisch-fachlichen Gesamtwertung“?",answerSections:[{title:"Bildung der Fachnote",items:[{term:"Gesamtwertung statt Durchschnitt",explanation:`§ 7 NVO → Bildung der Fachnote

Fachnote ist kein rein rechnerischer Durchschnitt der Einzelnoten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Leistungsarten und Gewichtung",explanation:`berücksichtigt schriftliche, mündliche und praktische Leistungen

einzelne Leistungsarten werden entsprechend ihrer Gewichtung berücksichtigt`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Pädagogischer Beurteilungsspielraum",explanation:`Lehrkraft nimmt eine pädagogisch-fachliche Gesamtwertung vor

dabei besteht ein pädagogischer Beurteilungsspielraum`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Leistungsbezug und Nachvollziehbarkeit",explanation:`Bewertung muss leistungsbezogen und nachvollziehbar sein

Merksatz:

Fachnote ≠ Notendurchschnitt → Gesamtwürdigung aller Leistungen durch die Fachlehrkraft.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"}]}],answer:`§ 7 NVO → Bildung der Fachnote

Fachnote ist kein rein rechnerischer Durchschnitt der Einzelnoten

berücksichtigt schriftliche, mündliche und praktische Leistungen

einzelne Leistungsarten werden entsprechend ihrer Gewichtung berücksichtigt

Lehrkraft nimmt eine pädagogisch-fachliche Gesamtwertung vor

dabei besteht ein pädagogischer Beurteilungsspielraum

Bewertung muss leistungsbezogen und nachvollziehbar sein

Merksatz:

Fachnote ≠ Notendurchschnitt → Gesamtwürdigung aller Leistungen durch die Fachlehrkraft.`},{id:"schulrecht-24",document:"Schulrecht",page:9,question:"Welchen Fragen einer juristischen Überprüfung muss eine Note standhalten?",answerSections:[{title:"Juristische Überprüfung einer Note",items:[{term:"Gleichbehandlung und Bewertungsgrundsätze",explanation:`Art. 3 Abs. 1 GG → Gleichbehandlungsgrundsatz

§ 7 NVO → allgemeine Grundsätze der Leistungsbewertung

Juristische Überprüfung einer Note:`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Verfahrensfehler",explanation:`Verfahrensfehler

z. B. zulässige Hilfsmittel wurden einzelnen Schülern nicht erlaubt.

Notentransparenz wurde am Anfang des Jahres nicht mitgeteilt`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Unrichtige Tatsachen",explanation:`Unrichtige Tatsachen zugrunde gelegt

0 Punkten, weil Schüler nichts geschrieben, obwohl Rückseite voll`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Missachtete Bewertungsgrundsätze",explanation:`Allgemeine Bewertungsgrundsätze missachtet

Bei zwei inhaltlich gleichwertigen Antworten bekommt ein Schüler deutlich weniger Punkte.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Sachfremde Erwägungen",explanation:`Sachfremde Erwägungen berücksichtigt

Eine Note wird schlechter vergeben, weil der Schüler häufig zu spät kommt`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Fachlich vertretbare Lösungen",explanation:`Fachlich richtige/vertretbare Lösung nicht gewertet

In Mathematik löst ein Schüler die Aufgabe mit einem anderen, aber fachlich korrekten Lösungsweg; die Lehrkraft gibt trotzdem 0 Punkte, weil es nicht der erwartete Lösungsweg war.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Beurteilungsspielraum",explanation:"Die fachlich-pädagogische Bewertung selbst unterliegt dem Beurteilungsspielraum der Lehrkraft.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"}]}],answer:`Art. 3 Abs. 1 GG → Gleichbehandlungsgrundsatz

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

Die fachlich-pädagogische Bewertung selbst unterliegt dem Beurteilungsspielraum der Lehrkraft.`}]},{title:"Fachnoten und Kopfnoten",sources:[{document:"Schulrecht",pages:"9-10",page:9}],questions:[{id:"schulrecht-25",document:"Schulrecht",page:9,question:"Unterscheiden Sie Leistungsnoten von Kopfnoten. Gehen Sie dabei auch auf die Notenbeschreibung ein.",answerSections:[{title:"Leistungsnoten und Kopfnoten",items:[{term:"Fachleistung · Noten 1–6",explanation:"Leistungsnoten (§ 5 NVO): Bewerten die fachliche Leistung anhand der Anforderungen des Bildungs-/Lehrplans. Noten 1–6. Verhalten darf nicht in die Fachnote einfließen.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Verhalten und Mitarbeit · Kopfnoten",explanation:"Kopfnoten (§ 6 NVO): Bewerten Verhalten und Mitarbeit. Noten sehr gut, gut, befriedigend, unbefriedigend. „Gut“ bedeutet, dass die Erwartungen erfüllt werden; „sehr gut“, dass Verhalten bzw. Mitarbeit besondere Anerkennung verdienen.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"}]}],answer:`Leistungsnoten (§ 5 NVO): Bewerten die fachliche Leistung anhand der Anforderungen des Bildungs-/Lehrplans. Noten 1–6. Verhalten darf nicht in die Fachnote einfließen.

Kopfnoten (§ 6 NVO): Bewerten Verhalten und Mitarbeit. Noten sehr gut, gut, befriedigend, unbefriedigend. „Gut“ bedeutet, dass die Erwartungen erfüllt werden; „sehr gut“, dass Verhalten bzw. Mitarbeit besondere Anerkennung verdienen.`},{id:"schulrecht-26",document:"Schulrecht",page:9,question:"Wie kommen mündliche Noten zustande? Wie unterscheiden sie sich von der Mitarbeitsnote?",answerSections:[{title:"Mündliche Note und Mitarbeitsnote",items:[{term:"Fachliche Qualität",explanation:"Mündliche Note (§ 7 NVO): Leistungsnote für die fachliche Qualität mündlich erbrachter Leistungen, z. B. Unterrichtsbeiträge, Abfragen oder Präsentationen.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"},{term:"Arbeitswille und Mitarbeit",explanation:"Mitarbeitsnote (§ 6 NVO): Kopfnote; bewertet vor allem den Arbeitswillen und die Bereitschaft zur Mitarbeit, nicht die fachliche Qualität der Leistung.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=9",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 9"}]}],answer:`Mündliche Note (§ 7 NVO): Leistungsnote für die fachliche Qualität mündlich erbrachter Leistungen, z. B. Unterrichtsbeiträge, Abfragen oder Präsentationen.

Mitarbeitsnote (§ 6 NVO): Kopfnote; bewertet vor allem den Arbeitswillen und die Bereitschaft zur Mitarbeit, nicht die fachliche Qualität der Leistung.`},{id:"schulrecht-27",document:"Schulrecht",page:10,question:"Inwieweit können/dürfen Noten ein Sanktionsinstrument sein?",answerSections:[{title:"Noten und Sanktionen",items:[{term:"Leistungsbezogene Fachnote",explanation:`§ 5 NVO → Leistungsnoten

Fachnoten bewerten ausdrücklich die Leistung des Schülers.

Die Notenstufen werden danach definiert, inwieweit die Leistung den Anforderungen entspricht.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Getrennte Beurteilung des Verhaltens",explanation:`§ 6 NVO → Verhalten und Mitarbeit

Verhalten und Mitarbeit werden davon getrennt beurteilt.

„Verhalten“ umfasst ausdrücklich das Betragen und die Zusammenarbeit.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Grundsatz: keine Strafnoten",explanation:"Daraus folgt die saubere Trennung: Noten dürfen grundsätzlich nicht als Sanktionsinstrument eingesetzt werden, sondern müssen den Leistungsstand abbilden.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Verweigerung und unentschuldigtes Versäumnis",explanation:"§ 8 Abs. 5 NVO: Bei Verweigerung einer schriftlichen Arbeit bzw. unentschuldigtem Versäumnis wird „ungenügend“ erteilt.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"}]}],answer:`§ 5 NVO → Leistungsnoten

Fachnoten bewerten ausdrücklich die Leistung des Schülers.

Die Notenstufen werden danach definiert, inwieweit die Leistung den Anforderungen entspricht.

§ 6 NVO → Verhalten und Mitarbeit

Verhalten und Mitarbeit werden davon getrennt beurteilt.

„Verhalten“ umfasst ausdrücklich das Betragen und die Zusammenarbeit.

Daraus folgt die saubere Trennung: Noten dürfen grundsätzlich nicht als Sanktionsinstrument eingesetzt werden, sondern müssen den Leistungsstand abbilden.

§ 8 Abs. 5 NVO: Bei Verweigerung einer schriftlichen Arbeit bzw. unentschuldigtem Versäumnis wird „ungenügend“ erteilt.`}]},{title:"Schriftliche Arbeiten und Nachteilsausgleich",sources:[{document:"Schulrecht",pages:"8",page:8},{document:"Schulrecht",pages:"10",page:10},{document:"Schulrecht",pages:"20",page:20}],questions:[{id:"schulrecht-22",document:"Schulrecht",page:8,question:"Welche grundsätzlichen Regelungen sind im § 8 NVO festgehalten?",answerSections:[{title:"Schriftliche Arbeiten · § 8 NVO",items:[{term:"Klassenarbeiten",explanation:`§ 8 Abs. 1 NVO → Klassenarbeiten

überprüfen einen größeren Unterrichtsabschnitt

werden in der Regel nach Abschluss einer Unterrichtseinheit durchgeführt`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Wiederholungsarbeiten",explanation:`§ 8 Abs. 2 NVO → Schriftliche Wiederholungsarbeiten

überprüfen einen kleineren Unterrichtsabschnitt

beziehen sich auf die unmittelbar vorausgegangenen Unterrichtsstunden

dauern in der Regel bis zu 20 Minuten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Verteilung im Schuljahr",explanation:`§ 8 Abs. 3 NVO → Verteilung der schriftlichen Arbeiten

Klassenarbeiten und Wiederholungsarbeiten sollen gleichmäßig auf das Schuljahr verteilt werden

besondere Vorgaben zur zeitlichen Häufung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Entschuldigtes Versäumnis",explanation:`§ 8 Abs. 4 NVO → entschuldigtes Versäumnis

Fachlehrer entscheidet, ob der Schüler die versäumte Leistung nachträglich erbringen muss`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Verweigerung und unentschuldigtes Fehlen",explanation:`§ 8 Abs. 5 NVO → Leistungsverweigerung / unentschuldigtes Versäumnis

Note „ungenügend“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Täuschung",explanation:`§ 8 Abs. 6 NVO → Täuschung

Fachlehrer entscheidet über die Folgen eines Täuschungsversuchs

je nach Fall: Arbeit bewerten, Notenabzug, Neuanfertigung oder bei schwerer/wiederholter Täuschung „ungenügend“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Mündliche und praktische Leistungen",explanation:`§ 8 Abs. 7 NVO → mündliche und praktische Leistungen

Abs. 4–6 gelten entsprechend auch für mündliche und praktische Leistungen.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"}]}],answer:`§ 8 Abs. 1 NVO → Klassenarbeiten

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

Abs. 4–6 gelten entsprechend auch für mündliche und praktische Leistungen.`},{id:"schulrecht-23",document:"Schulrecht",page:8,question:"Unterscheiden Sie Klassenarbeiten und schriftliche Wiederholungsarbeiten.",answerSections:[{title:"Klassenarbeit und Wiederholungsarbeit",items:[{term:"Klassenarbeit · Umfang und Ankündigung",explanation:`Klassenarbeiten (§ 8 Abs. 1 NVO)

Überprüfen einen größeren Unterrichtsbereich

Ist in der Regel anzukündigen.

Es gibt begründete Ausnahmen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"},{term:"Wiederholungsarbeit · Dauer und Ankündigung",explanation:`Schriftliche Wiederholungsarbeiten (§ 8 Abs. 2 NVO)

überprüfen den Unterrichtserfolg der unmittelbar vorangegangenen Unterrichtsstunden

In der Regel höchstens 20 Minuten.

Eine Ankündigung ist für sie nicht vorgeschrieben.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=8",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 8"}]}],answer:`Klassenarbeiten (§ 8 Abs. 1 NVO)

Überprüfen einen größeren Unterrichtsbereich

Ist in der Regel anzukündigen.

Es gibt begründete Ausnahmen

Schriftliche Wiederholungsarbeiten (§ 8 Abs. 2 NVO)

überprüfen den Unterrichtserfolg der unmittelbar vorangegangenen Unterrichtsstunden

In der Regel höchstens 20 Minuten.

Eine Ankündigung ist für sie nicht vorgeschrieben.`},{id:"schulrecht-28",document:"Schulrecht",page:10,question:"Inwieweit beeinflusst ein sog. Nachteilsausgleich die Leistungsfeststellung?",answerSections:[{title:"Nachteilsausgleich",items:[{term:"Chancengleichheit",explanation:`Art. 3 Abs. 1 GG → Chancengleichheit

Nachteile von Schülern mit besonderem Förderbedarf/Behinderungen dürfen bzw. müssen ausgeglichen werden.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Gleichbleibende Anforderungen",explanation:`Verwaltungsvorschrift „Kinder und Jugendliche mit besonderem Förderbedarf und Behinderungen“ → konkrete Regelung

Anforderungsprofil bleibt gleich`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Mögliche Hilfen",explanation:`möglichkeit zur Chancengleichheit:

mehr Arbeitszeit

technische Hilfen

didaktisch-methodische Hilfen

angepasste äußere Rahmenbedingungen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Entscheidung und Verbindlichkeit",explanation:`Entscheidung → Klassen-/Jahrgangsstufenkonferenz unter Vorsitz des Schulleiters

Maßnahmen sind für Fachlehrer bindend`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Kein Zeugnisvermerk",explanation:`kein Vermerk im Zeugnis

Merksatz:

Nachteil ausgleichen ≠ Anforderungen senken.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"}]}],answer:`Art. 3 Abs. 1 GG → Chancengleichheit

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

Nachteil ausgleichen ≠ Anforderungen senken.`},{id:"schulrecht-29",document:"Schulrecht",page:10,question:"Welche Regelungen gelten bezüglich der Abgabe von Entschuldigungen im Hinblick auf die Klassenarbeiten?",answerSections:[{title:"Versäumte Klassenarbeiten",items:[{term:"Entschuldigt · Entscheidung der Fachlehrkraft",explanation:`§ 8 Abs. 4 NVO → entschuldigtes Versäumnis (unverzüglich, spätestens am zweiten Tag)

Fachlehrer entscheidet, ob die Arbeit nachgeschrieben werden muss`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Unentschuldigt · ungenügend",explanation:`§ 8 Abs. 5 NVO → unentschuldigtes Versäumnis

Note „ungenügend“`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"}]}],answer:`§ 8 Abs. 4 NVO → entschuldigtes Versäumnis (unverzüglich, spätestens am zweiten Tag)

Fachlehrer entscheidet, ob die Arbeit nachgeschrieben werden muss

§ 8 Abs. 5 NVO → unentschuldigtes Versäumnis

Note „ungenügend“`}]},{title:"Täuschung und Beweisfragen",sources:[{document:"Schulrecht",pages:"10-11",page:10}],questions:[{id:"schulrecht-30",document:"Schulrecht",page:10,question:"Welche Überlegungen sollten Sie für den Umgang mit einer Täuschungshandlung bei einer Klassenarbeit anstellen?",answerSections:[{title:"Täuschung bei Klassenarbeiten",items:[{term:"Entscheidung der Fachlehrkraft",explanation:"§ 8 Abs. 6 NVO → Fachlehrer entscheidet",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Reguläre Bewertung",explanation:"normale Bewertung möglich? → normal bewerten",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Abzug oder Wiederholung",explanation:"nicht möglich? → Notenabzug oder Arbeit wiederholen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Schwere oder wiederholte Täuschung",explanation:"schwere oder wiederholte Täuschung → Note 6 möglich",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"}]}],answer:`§ 8 Abs. 6 NVO → Fachlehrer entscheidet

normale Bewertung möglich? → normal bewerten

nicht möglich? → Notenabzug oder Arbeit wiederholen

schwere oder wiederholte Täuschung → Note 6 möglich`},{id:"schulrecht-31",document:"Schulrecht",page:10,question:"Wie unterscheidet sich die Vorgehensweise zu einer beobachteten Täuschungshandlung im Rahmen einer Prüfung?",answerSections:[{title:"Täuschung bei Prüfungen",items:[{term:"Prüfungsordnung",explanation:"Täuschung bei einer Prüfung (Es gilt die jeweilige Prüfungsordnung des Bildungsganges/ Viel strenger/ )",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Feststellen und protokollieren",explanation:`Täuschung/Verdacht feststellen

Sachverhalt protokollieren`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Weiterschreiben und Zuständigkeit",explanation:`Schüler weiterschreiben lassen

zuständige Prüfungsleitung / Prüfungsausschuss entscheidet`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"},{term:"Folgen und unerlaubte Hilfsmittel",explanation:`Eine festgestellte Täuschung führt grundsätzlich zum Ausschluss und Nichtbestehen

Bereits das Mitführen unerlaubter Hilfsmittel nach Bekanntgabe der Aufgaben sowie die Beihilfe zur Täuschung gelten als Täuschungshandlung.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=10",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 10"}]}],answer:`Täuschung bei einer Prüfung (Es gilt die jeweilige Prüfungsordnung des Bildungsganges/ Viel strenger/ )

Täuschung/Verdacht feststellen

Sachverhalt protokollieren

Schüler weiterschreiben lassen

zuständige Prüfungsleitung / Prüfungsausschuss entscheidet

Eine festgestellte Täuschung führt grundsätzlich zum Ausschluss und Nichtbestehen

Bereits das Mitführen unerlaubter Hilfsmittel nach Bekanntgabe der Aufgaben sowie die Beihilfe zur Täuschung gelten als Täuschungshandlung.`},{id:"schulrecht-32",document:"Schulrecht",page:11,question:"Wie ist mit der sogenannten Beihilfe zur Täuschungshandlung umzugehen?",answerSections:[{title:"Beihilfe zur Täuschung",items:[{term:"Klassenarbeit",explanation:`§ 8 Abs. 6 NVO → normale Klassenarbeit

Abschreibenlassen ≠ eigene Täuschung des Helfers

ggf. pädagogische/E&O-Maßnahme (§ 90 SchG)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=11",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 11"},{term:"Prüfung",explanation:`Prüfungsordnung → Prüfung

Beihilfe gilt selbst als Täuschungshandlung

entsprechende Prüfungssanktionen möglich`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=11",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 11"}]}],answer:`§ 8 Abs. 6 NVO → normale Klassenarbeit

Abschreibenlassen ≠ eigene Täuschung des Helfers

ggf. pädagogische/E&O-Maßnahme (§ 90 SchG)

Prüfungsordnung → Prüfung

Beihilfe gilt selbst als Täuschungshandlung

entsprechende Prüfungssanktionen möglich`},{id:"schulrecht-33",document:"Schulrecht",page:11,question:"Was versteht man unter dem Beweis des ersten Anscheins?",answerSections:[{title:"Anscheinsbeweis",items:[{term:"Typischer Geschehensablauf",explanation:"Wenn ein Geschehen nach allgemeiner Lebenserfahrung typischerweise auf eine bestimmte Ursache zurückzuführen ist, darf zunächst vom Vorliegen dieser Ursache ausgegangen werden.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=11",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 11"},{term:"Beispiel: identische Lösungen",explanation:`Beispiel:

Bei auffällig identischen Schülerlösungen kann daher eine Täuschung angenommen werden, auch wenn das Abschreiben nicht unmittelbar beobachtet wurde.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=11",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 11"}]}],answer:`Wenn ein Geschehen nach allgemeiner Lebenserfahrung typischerweise auf eine bestimmte Ursache zurückzuführen ist, darf zunächst vom Vorliegen dieser Ursache ausgegangen werden.

Beispiel:

Bei auffällig identischen Schülerlösungen kann daher eine Täuschung angenommen werden, auch wenn das Abschreiben nicht unmittelbar beobachtet wurde.`},{id:"schulrecht-34",document:"Schulrecht",page:11,question:"Warum spricht Denig von „Beweislastumkehr“?",answerSections:[{title:"Beweislast beim Anscheinsbeweis",items:[{term:"Indizien und möglicher Gegenbeweis",explanation:"Normalerweise: Schule/Lehrkraft muss die Täuschung nachweisen. Beim Anscheinsbeweis liegen aber so typische Indizien vor, dass zunächst von der Täuschung ausgegangen werden darf. Nun muss der Schüler Umstände darlegen bzw. nachweisen, die einen anderen Ablauf plausibel machen. Gelingt ihm das, muss die Täuschung wieder vollständig bewiesen werden.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=11",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 11"},{term:"Beispiel: wortwörtliche Schulbuchantwort",explanation:"Ein weiteres Beispiel aus Denigs Folie: Ein Schüler schreibt eine Antwort wortwörtlich wie im Schulbuch. Dann kann durch eine mündliche Nachfrage geprüft werden, ob er den Text tatsächlich auswendig beherrscht oder unerlaubt übernommen hat.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=11",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 11"}]}],answer:`Normalerweise: Schule/Lehrkraft muss die Täuschung nachweisen. Beim Anscheinsbeweis liegen aber so typische Indizien vor, dass zunächst von der Täuschung ausgegangen werden darf. Nun muss der Schüler Umstände darlegen bzw. nachweisen, die einen anderen Ablauf plausibel machen. Gelingt ihm das, muss die Täuschung wieder vollständig bewiesen werden.

Ein weiteres Beispiel aus Denigs Folie: Ein Schüler schreibt eine Antwort wortwörtlich wie im Schulbuch. Dann kann durch eine mündliche Nachfrage geprüft werden, ob er den Text tatsächlich auswendig beherrscht oder unerlaubt übernommen hat.`}]}]},{id:"cluster-7",title:"Pädagogische Maßnahmen und Konfliktfälle",topics:[{title:"Maßnahmen unterscheiden",sources:[{document:"Schulrecht",pages:"12-14",page:12}],questions:[{id:"schulrecht-35",document:"Schulrecht",page:12,question:"Unterscheiden Sie grundsätzlich pädagogische Maßnahmen von Erziehungs- und Ordnungsmaßnahmen nach §90 SchG hinsichtlich Regelungsgrundlage, Rechtsqualität und Rechtsschutz. (Gute Übersicht §90 SchG im GEW-Handbuch. Dieses kann in der Prüfung verwendet werden.)",answerSections:[{title:"Pädagogische Maßnahmen und E&O-Maßnahmen",items:[{term:"Pädagogische Maßnahmen · Verwaltungshandeln",explanation:`Pädagogische Maßnahmen (§ 23 Abs. 2 SchG) → Verwaltungshandeln

Sie sind nicht abschließend geregelt

bleiben unterhalb der Eingriffsintensität einer E&O-Maßnahme

sind rechtlich schlichtes Verwaltungshandeln.

Gegen sie kommt insbesondere eine Fachaufsichtsbeschwerde in Betracht.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"E&O-Maßnahmen · Verwaltungsakt",explanation:`Erziehungs- und Ordnungsmaßnahmen (§ 90 SchG) → Verwaltungsakt

sind ausschließlich und abschließend geregelt.

Wegen ihres intensiveren Eingriffs in Schülerrechte haben sie die Rechtsqualität eines Verwaltungsakts.

Dagegen sind Widerspruch und Anfechtungsklage möglich.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"}]}],answer:`Pädagogische Maßnahmen (§ 23 Abs. 2 SchG) → Verwaltungshandeln

Sie sind nicht abschließend geregelt

bleiben unterhalb der Eingriffsintensität einer E&O-Maßnahme

sind rechtlich schlichtes Verwaltungshandeln.

Gegen sie kommt insbesondere eine Fachaufsichtsbeschwerde in Betracht.

Erziehungs- und Ordnungsmaßnahmen (§ 90 SchG) → Verwaltungsakt

sind ausschließlich und abschließend geregelt.

Wegen ihres intensiveren Eingriffs in Schülerrechte haben sie die Rechtsqualität eines Verwaltungsakts.

Dagegen sind Widerspruch und Anfechtungsklage möglich.`},{id:"schulrecht-43",document:"Schulrecht",page:14,question:"Ist es möglich – und wenn ja, auf welcher rechtlichen Grundlage – SuS präventiv vom Unterricht auszuschließen?",answerSections:[{title:"Präventiver Unterrichtsausschluss",items:[{term:"Gefahren vorbeugen · § 23 SchG",explanation:`§ 23 Abs. 2 SchG → präventive Maßnahme

Ausschluss vor einem befürchteten Fehlverhalten möglich

dient der Aufrechterhaltung der Ordnung des Schulbetriebs bzw. Erfüllung der schulischen Aufgaben

nur wenn erforderlich

eng auszulegen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Bereits erfolgtes Fehlverhalten · § 90 SchG",explanation:`§ 90 SchG → E&O-Maßnahme

setzt grundsätzlich ein bereits erfolgtes Fehlverhalten voraus

daher nicht die Grundlage für einen rein präventiven Ausschluss`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"},{term:"Abgrenzung",explanation:`Merksatz:

Fehlverhalten passiert → § 90 SchG

Gefahr vorbeugen → § 23 Abs. 2 SchG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=14",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 14"}]}],answer:`§ 23 Abs. 2 SchG → präventive Maßnahme

Ausschluss vor einem befürchteten Fehlverhalten möglich

dient der Aufrechterhaltung der Ordnung des Schulbetriebs bzw. Erfüllung der schulischen Aufgaben

nur wenn erforderlich

eng auszulegen

§ 90 SchG → E&O-Maßnahme

setzt grundsätzlich ein bereits erfolgtes Fehlverhalten voraus

daher nicht die Grundlage für einen rein präventiven Ausschluss

Merksatz:

Fehlverhalten passiert → § 90 SchG

Gefahr vorbeugen → § 23 Abs. 2 SchG`}]},{title:"Verhältnismäßigkeit und Zuständigkeit",sources:[{document:"Schulrecht",pages:"12-13",page:12}],questions:[{id:"schulrecht-36",document:"Schulrecht",page:12,question:"Was versteht man unter dem Grundsatz der Verhältnismäßigkeit und welche Bedeutung hat er bei E&O-Maßnahmen?",answerSections:[{title:"Verhältnismäßigkeit",items:[{term:"Geeignetheit",explanation:"Geeignetheit → einen der Zwecke aus § 90 Abs. 1 SchG erreichen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"Erforderlichkeit",explanation:"Erforderlich → Ist die Maßnahme überhaupt notwendig, um den Zweck zu erreichen?",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"Mildestes Mittel",explanation:"mildeste Maßnahme → geringste Belastung für den Schüler",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"Angemessenheit",explanation:"Angemessenheit → Schwere der Strafe muss der Schwere des Vergehens entsprechen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"}]}],answer:`Geeignetheit → einen der Zwecke aus § 90 Abs. 1 SchG erreichen

Erforderlich → Ist die Maßnahme überhaupt notwendig, um den Zweck zu erreichen?

mildeste Maßnahme → geringste Belastung für den Schüler

Angemessenheit → Schwere der Strafe muss der Schwere des Vergehens entsprechen`},{id:"schulrecht-37",document:"Schulrecht",page:12,question:"Welche E&O-Maßnahmen sind nach §90 SchG möglich? Welche kann die Lehrkraft / die SL veranlassen?",answerSections:[{title:"Zuständigkeiten bei E&O-Maßnahmen",items:[{term:"Lehrkraft",explanation:`Lehrkraft

Nachsitzen bis 2 Unterrichtsstunden.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"Schulleitung",explanation:`Schulleitung

Nachsitzen bis 4 Unterrichtsstunden

Überweisung in Parallelklasse

Androhung Unterrichtsausschluss

Unterrichtsausschluss bis 5 Unterrichtstage (berufliche Teilzeitschule: 1 Unterrichtstag)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"Weitergehende Maßnahmen",explanation:`mit Zustimmung der Klassenkonferenz Unterrichtsausschluss bis 4 Wochen,

Androhung des Schulausschlusses und Schulausschluss.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"}]}],answer:`Lehrkraft

Nachsitzen bis 2 Unterrichtsstunden.

Schulleitung

Nachsitzen bis 4 Unterrichtsstunden

Überweisung in Parallelklasse

Androhung Unterrichtsausschluss

Unterrichtsausschluss bis 5 Unterrichtstage (berufliche Teilzeitschule: 1 Unterrichtstag)

mit Zustimmung der Klassenkonferenz Unterrichtsausschluss bis 4 Wochen,

Androhung des Schulausschlusses und Schulausschluss.`},{id:"schulrecht-39",document:"Schulrecht",page:13,question:"Was versteht man unter Kollektivstrafen und wann dürfen sie verhängt werden?",answerSections:[{title:"Kollektivstrafen",items:[{term:"Unzulässige Gruppenbestrafung",explanation:`§ 90 Abs. 2 Satz 2 SchG → Kollektivstrafen unzulässig

Bestrafung mehrerer Schüler, weil der tatsächlich Schuldige nicht ermittelt werden kann

unzulässig

kein erzieherischer Wert`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Individueller Nachweis des Fehlverhaltens",explanation:"Maßnahmen gegen mehrere Schüler nur, wenn jedem Einzelnen eigenes Fehlverhalten nachgewiesen werden kann",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"}]}],answer:`§ 90 Abs. 2 Satz 2 SchG → Kollektivstrafen unzulässig

Bestrafung mehrerer Schüler, weil der tatsächlich Schuldige nicht ermittelt werden kann

unzulässig

kein erzieherischer Wert

Maßnahmen gegen mehrere Schüler nur, wenn jedem Einzelnen eigenes Fehlverhalten nachgewiesen werden kann`}]},{title:"Verfahren und Rechtsschutz",sources:[{document:"Schulrecht",pages:"12-13",page:12}],questions:[{id:"schulrecht-38",document:"Schulrecht",page:12,question:"Wie wird die Rechtmäßigkeit von E&O-Maßnahmen geprüft?",answerSections:[{title:"Rechtmäßigkeit von E&O-Maßnahmen",items:[{term:"Materielle Voraussetzungen",explanation:`Materielle Rechtmäßigkeit

Maßnahme muss dem Zweck des § 90 SchG dienen (§ 90 SchG Abs. 1)

Schweres oder wiederholtes Fehlverhalten

Grundsatz der Verhältnismäßigkeit

Schuldhaftes Verhalten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"},{term:"Formelles Verfahren",explanation:`Formelle Rechtmäßigkeit

Anhörung des Schülers vor Erlass der Maßnahme

bei Schulleitermaßnahmen → formelles Anhörungsverfahren nach § 90 Abs. 7 SchG

→ nur wenn materiell + formell rechtmäßig, kann die Maßnahme bestehen.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=12",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 12"}]}],answer:`Materielle Rechtmäßigkeit

Maßnahme muss dem Zweck des § 90 SchG dienen (§ 90 SchG Abs. 1)

Schweres oder wiederholtes Fehlverhalten

Grundsatz der Verhältnismäßigkeit

Schuldhaftes Verhalten

Formelle Rechtmäßigkeit

Anhörung des Schülers vor Erlass der Maßnahme

bei Schulleitermaßnahmen → formelles Anhörungsverfahren nach § 90 Abs. 7 SchG

→ nur wenn materiell + formell rechtmäßig, kann die Maßnahme bestehen.`},{id:"schulrecht-40",document:"Schulrecht",page:13,question:"Beschreiben Sie den Verfahrensgang bei E&O-Maßnahmen?",answerSections:[{title:"Verfahren bei E&O-Maßnahmen",items:[{term:"Sachverhalt aufklären",explanation:`§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen

Befragung des Schülers

Sachverhalt/Tatvorwurf aufklären

noch keine Anhörung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Maßnahme festlegen",explanation:`Beabsichtigte Maßnahme festlegen

Grundsatz der Verhältnismäßigkeit beachten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Anhörung beim Nachsitzen",explanation:`Art der Anhörung unterscheiden

Nur Nachsitzen 2 h max. nachsitzen → formlose Anhörung des Schülers

Schüler erhält Gelegenheit, sich zu äußern

keine formelle Einladung der Eltern zur Anhörung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Weitergehende Maßnahmen",explanation:`Weitergehende E&O-Maßnahmen → § 90 Abs. 7 SchG

Schüler und bei Minderjährigen grundsätzlich auch Erziehungsberechtigte werden über die beabsichtigte Maßnahme informiert

Gelegenheit zur Anhörung

entsprechende Einladung zur Anhörung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Anhörung durchführen",explanation:`Anhörung durchführen

Betroffene können Stellung nehmen

Argumente müssen vor der Entscheidung berücksichtigt werden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Entscheiden und mitteilen",explanation:`Entscheidung

erst nach der Anhörung endgültig entscheiden

Entscheidung mitteilen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"}]}],answer:`§ 90 SchG → Erziehungs- und Ordnungsmaßnahmen

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

Entscheidung mitteilen`},{id:"schulrecht-41",document:"Schulrecht",page:13,question:"Wie kann man sich gegen eine Maßnahme nach §90 SchG wehren?",answerSections:[{title:"Rechtsschutz gegen E&O-Maßnahmen",items:[{term:"Widerspruch und Anfechtungsklage",explanation:`Gegen eine E&O-Maßnahme nach § 90 SchG kann der Betroffene

Widerspruch einlegen und anschließend

gegebenenfalls Anfechtungsklage vor dem Verwaltungsgericht erheben.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Verwaltungsakt und Vollzug",explanation:`Dies ist möglich, weil E&O-Maßnahmen Verwaltungsakte sind.

Kann aber nicht aufgeschoben werden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"}]}],answer:`Gegen eine E&O-Maßnahme nach § 90 SchG kann der Betroffene

Widerspruch einlegen und anschließend

gegebenenfalls Anfechtungsklage vor dem Verwaltungsgericht erheben.

Dies ist möglich, weil E&O-Maßnahmen Verwaltungsakte sind.

Kann aber nicht aufgeschoben werden`},{id:"schulrecht-42",document:"Schulrecht",page:13,question:"Wie kann eine E&O-Maßnahme im Rahmen einer Klassenfahrt ausgeführt werden?",answerSections:[{title:"E&O-Maßnahmen auf Klassenfahrten",items:[{term:"Ausschluss und Zuständigkeit",explanation:`Grundlage ist § 90 SchG

Bei massivem Fehlverhalten während der Klassenfahrt:

Ausschluss von der weiteren Klassenfahrt möglich

Zuständig → ausschließlich Schulleiter`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Heimreise · Aufsicht und Kosten",explanation:`vorzeitige Heimreise

Aufsichtspflicht während der Heimreise beachten

Kosten der Heimreise → Schüler bzw. Erziehungsberechtigte`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"},{term:"Unterricht nach der Rückkehr",explanation:"Nach Rückkehr → Schüler muss in einer Parallelklasse die Schule besuchen",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=13",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 13"}]}],answer:`Grundlage ist § 90 SchG

Bei massivem Fehlverhalten während der Klassenfahrt:

Ausschluss von der weiteren Klassenfahrt möglich

Zuständig → ausschließlich Schulleiter

vorzeitige Heimreise

Aufsichtspflicht während der Heimreise beachten

Kosten der Heimreise → Schüler bzw. Erziehungsberechtigte

Nach Rückkehr → Schüler muss in einer Parallelklasse die Schule besuchen`}]}]},{id:"cluster-8",title:"Urheberrecht und Datenschutz",topics:[{title:"Unterrichtsmaterialien verwenden",sources:[{document:"Schulrecht",pages:"21",page:21}],questions:[{id:"schulrecht-65",document:"Schulrecht",page:21,question:"Welche Interessen werden mit dem Urheberrecht geschützt?",answerSections:[{title:"Geschützte Interessen im Urheberrecht",items:[{term:"Persönliche und wirtschaftliche Interessen",explanation:`§ 11 UrhG

persönliche/geistige Interessen des Urhebers

wirtschaftliche Interessen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"}]}],answer:`§ 11 UrhG

persönliche/geistige Interessen des Urhebers

wirtschaftliche Interessen`},{id:"schulrecht-66",document:"Schulrecht",page:21,question:"Warum gibt es ein Urheberrecht?",answerSections:[{title:"Zweck des Urheberrechts",items:[{term:"Schutz kreativer Leistungen",explanation:`§§ 1, 11 UrhG → Schutz des Urhebers

Schutz geistiger und kreativer Leistungen

Schutz der persönlichen/geistigen Interessen

Schutz der wirtschaftlichen Interessen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"},{term:"Nutzungskontrolle und Vergütung",explanation:`Kontrolle über die Nutzung des eigenen Werkes

Sicherung einer angemessenen Vergütung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"}]}],answer:`§§ 1, 11 UrhG → Schutz des Urhebers

Schutz geistiger und kreativer Leistungen

Schutz der persönlichen/geistigen Interessen

Schutz der wirtschaftlichen Interessen

Kontrolle über die Nutzung des eigenen Werkes

Sicherung einer angemessenen Vergütung`},{id:"schulrecht-67",document:"Schulrecht",page:21,question:"In welchem Umfang darf man aus Unterrichtswerken (Schulbüchern) Kopien anfertigen? Unter welchen Bedingungen ist dies erlaubt?",answerSections:[{title:"Kopien für Unterricht und Lehre",items:[{term:"Umfang und Unterrichtszweck",explanation:`§ 60a UrhG → Unterricht und Lehre

bis zu 15 % eines veröffentlichten Werkes

für nicht kommerzielle Unterrichtszwecke`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"},{term:"Berechtigte Personenkreise",explanation:`Nutzung für:

Lehrende und Teilnehmer der jeweiligen Unterrichtsveranstaltung

Lehrende und Prüfer derselben Bildungseinrichtung

Dritte zur Präsentation des Unterrichts oder von Unterrichtsergebnissen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"},{term:"Nutzungsformen",explanation:`erlaubt: vervielfältigen, verbreiten, öffentlich zugänglich machen und öffentlich wiedergeben

→ praktisch z. B. Kopien, digitale Bereitstellung, Beamer/Whiteboard § 60a UrhG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"}]}],answer:`§ 60a UrhG → Unterricht und Lehre

bis zu 15 % eines veröffentlichten Werkes

für nicht kommerzielle Unterrichtszwecke

Nutzung für:

Lehrende und Teilnehmer der jeweiligen Unterrichtsveranstaltung

Lehrende und Prüfer derselben Bildungseinrichtung

Dritte zur Präsentation des Unterrichts oder von Unterrichtsergebnissen

erlaubt: vervielfältigen, verbreiten, öffentlich zugänglich machen und öffentlich wiedergeben

→ praktisch z. B. Kopien, digitale Bereitstellung, Beamer/Whiteboard § 60a UrhG`},{id:"schulrecht-68",document:"Schulrecht",page:21,question:"In welchem Umfang darf man aus Zeitschriften oder Zeitungen Kopien anfertigen? Unter welchen Bedingungen ist dies erlaubt?",answerSections:[{title:"Zeitungs- und Zeitschriftenbeiträge",items:[{term:"Fachzeitschriften und Abgrenzung",explanation:`§ 60a Abs. 2 UrhG → vollständige Nutzung

vollständige Nutzung u. a. von einzelnen Beiträgen aus Fachzeitschriften oder wissenschaftlichen Zeitschriften

gilt nicht allgemein für Artikel aus normalen Zeitungen/Publikumszeitschriften`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"},{term:"Quellenangabe",explanation:`Sonstiges:

§ 63 UrhG → Quellenangabe

grundsätzlich Quelle einschließlich Urheber angeben § 63 UrhG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"},{term:"Gesamtvertrag für Schulen",explanation:`Gesamtvertrag für Schulen → vertragliche Konkretisierung

→ Länder/Kultusministerien und Rechteinhaber regeln die praktische Umsetzung und Vergütung für Schulen.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=21",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 21"}]}],answer:`§ 60a Abs. 2 UrhG → vollständige Nutzung

vollständige Nutzung u. a. von einzelnen Beiträgen aus Fachzeitschriften oder wissenschaftlichen Zeitschriften

gilt nicht allgemein für Artikel aus normalen Zeitungen/Publikumszeitschriften

Sonstiges:

§ 63 UrhG → Quellenangabe

grundsätzlich Quelle einschließlich Urheber angeben § 63 UrhG

Gesamtvertrag für Schulen → vertragliche Konkretisierung

→ Länder/Kultusministerien und Rechteinhaber regeln die praktische Umsetzung und Vergütung für Schulen.`}]},{title:"Personenbezogene Daten verarbeiten",sources:[{document:"Schulrecht",pages:"22",page:22}],questions:[{id:"schulrecht-69",document:"Schulrecht",page:22,question:"Welche Vorgaben gibt es zur Erfassung von personenbezogenen Daten? Was darf erfasst werden?",answerSections:[{title:"Erfassung personenbezogener Daten",items:[{term:"Datenschutzgrundsätze",explanation:`DSGVO → Grundsätze

Rechtmäßigkeit und Transparenz

Zweckbindung → nur für festgelegten schulischen Zweck

Datenminimierung → nur notwendige Daten

Richtigkeit

Speicherbegrenzung → nicht länger als nötig

Vertraulichkeit und Sicherheit`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Erforderliche schulische Daten",explanation:`§ 1 SchG → schulische Aufgaben

Daten dürfen verarbeitet werden, soweit sie zur Erfüllung schulischer Aufgaben erforderlich sind

z. B. Name, Anschrift, Kontaktdaten, Noten, Fehlzeiten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Keine Vorratserhebung",explanation:"keine Datenerhebung auf Vorrat",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"}]}],answer:`DSGVO → Grundsätze

Rechtmäßigkeit und Transparenz

Zweckbindung → nur für festgelegten schulischen Zweck

Datenminimierung → nur notwendige Daten

Richtigkeit

Speicherbegrenzung → nicht länger als nötig

Vertraulichkeit und Sicherheit

§ 1 SchG → schulische Aufgaben

Daten dürfen verarbeitet werden, soweit sie zur Erfüllung schulischer Aufgaben erforderlich sind

z. B. Name, Anschrift, Kontaktdaten, Noten, Fehlzeiten

keine Datenerhebung auf Vorrat`},{id:"schulrecht-70",document:"Schulrecht",page:22,question:"Wie sollte man mit personenbezogenen Daten generell umgehen?",answerSections:[{title:"Umgang mit personenbezogenen Daten",items:[{term:"Datenschutzgrundsätze",explanation:`DSGVO → allgemeine Grundsätze

Rechtmäßigkeit und Transparenz

Zweckbindung → nur für vorgesehenen Zweck

Datenminimierung → nur notwendige Daten

Richtigkeit

Speicherbegrenzung → Löschfristen beachten

Vertraulichkeit/Sicherheit → vor unbefugtem Zugriff schützen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Sichere Speicherung und Geräte",explanation:`Denig → konkrete Umsetzung in der Schule

personenbezogene Daten sicher und verschlüsselt speichern

private Geräte → nur mit Genehmigung der Schulleitung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Dienste und Vertretungspläne",explanation:`keine unsicheren/nicht freigegebenen Cloud- oder Messenger-Dienste

Vertretungsplan → keine unnötigen personenbezogenen Angaben, z. B. Abwesenheitsgrund`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Veröffentlichung und Löschung",explanation:`Veröffentlichung von Namen/Fotos → grundsätzlich Einwilligung bzw. entsprechende

Rechtsgrundlage

nicht mehr benötigte Daten → löschen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"}]}],answer:`DSGVO → allgemeine Grundsätze

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

nicht mehr benötigte Daten → löschen`},{id:"schulrecht-71",document:"Schulrecht",page:22,question:"Unter welchen Voraussetzungen dürfen personenbezogene Daten weitergegeben werden?",answerSections:[{title:"Weitergabe personenbezogener Daten",items:[{term:"Rechtsgrundlage oder Einwilligung",explanation:`Art. 6 DSGVO → Rechtmäßigkeit

Weitergabe nur mit Rechtsgrundlage

z. B. wenn sie zur Erfüllung einer öffentlichen/schulischen Aufgabe erforderlich ist

alternativ → wirksame Einwilligung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Zweckbindung und Datenminimierung",explanation:`Art. 5 DSGVO → Zweckbindung + Datenminimierung

nur für einen bestimmten zulässigen Zweck

nur die erforderlichen Daten weitergeben`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Informationelle Selbstbestimmung",explanation:`Denig → für die Schule

Recht auf informationelle Selbstbestimmung

Einschränkung nur mit rechtlicher Grundlage`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"},{term:"Veröffentlichung von Schülerdaten",explanation:`Veröffentlichung von Schülerdaten, z. B. Name/Bild auf Website → schriftliche Einwilligung

Denig betont: Daten dürfen nur verarbeitet werden, soweit dies für schulische Aufgaben

erforderlich ist.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=22",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 22"}]}],answer:`Art. 6 DSGVO → Rechtmäßigkeit

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

erforderlich ist.`}]}]},{id:"cluster-9",title:"Beamtenrecht und Personalvertretung",topics:[{title:"Zugang und Beamtenverhältnis",sources:[{document:"Schulrecht",pages:"23-24",page:23}],questions:[{id:"schulrecht-72",document:"Schulrecht",page:23,question:"Warum sind Lehrer/Innen in der Regel Beamte?",answerSections:[{title:"Lehrkräfte im Beamtenverhältnis",items:[{term:"Hoheitsrechtliche Befugnisse",explanation:`Art. 33 Abs. 4 GG

Da Lehrer hoheitsrechtliche Befugnis befugnisse haben, also staatliche Befugnisse, einseitig und verbindlich gegenüber dem Bürger zu handeln sollen sie von beamten ausgeführt werden, also denjenigen, die in einem besonderen öffentlich-rechtlichen Dienst und Treueverhältnis stehen.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Verfassungstreue und Neutralität",explanation:`§ 33 BeamtStG

Durch das Beamtentum sollen Rechtsstaatlichkeit, verfassungstreue, Verlässlichkeit und Neutralität gesichert werden`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Gleichbehandlung und Unabhängigkeit",explanation:`Art. 3 Abs 1 GG → allgemeiner Gleichheitssatz

Art. 11 Abs. 1 LV BW → Recht auf eine der Begabung entsprechenden Erziehung und Ausbildung

Durch den besonderen Bestandsschutz des Beamtenverhältnisses soll er weniger anfällig für äußeren Druck sein. Dadurch kann er Schüler eher gleich behandeln`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Schutz vor Interessengruppen",explanation:`§ 33 Abs. 1 BeamtStG

Fortbestand der Gesellschaft → Unabhängigkeit von Interessengruppen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"}]}],answer:`Art. 33 Abs. 4 GG

Da Lehrer hoheitsrechtliche Befugnis befugnisse haben, also staatliche Befugnisse, einseitig und verbindlich gegenüber dem Bürger zu handeln sollen sie von beamten ausgeführt werden, also denjenigen, die in einem besonderen öffentlich-rechtlichen Dienst und Treueverhältnis stehen.

§ 33 BeamtStG

Durch das Beamtentum sollen Rechtsstaatlichkeit, verfassungstreue, Verlässlichkeit und Neutralität gesichert werden

Art. 3 Abs 1 GG → allgemeiner Gleichheitssatz

Art. 11 Abs. 1 LV BW → Recht auf eine der Begabung entsprechenden Erziehung und Ausbildung

Durch den besonderen Bestandsschutz des Beamtenverhältnisses soll er weniger anfällig für äußeren Druck sein. Dadurch kann er Schüler eher gleich behandeln

§ 33 Abs. 1 BeamtStG

Fortbestand der Gesellschaft → Unabhängigkeit von Interessengruppen`},{id:"schulrecht-73",document:"Schulrecht",page:23,question:"Welche persönlichen Voraussetzungen muss man mitbringen, um Beamter werden zu können?",answerSections:[{title:"Voraussetzungen der Verbeamtung",items:[{term:"Staatsangehörigkeit",explanation:`§ 7 Abs. 1 BeamtStG → Voraussetzungen für die Berufung

Staatsangehörigkeit

→ grundsätzlich Deutschland, EU/EWR bzw. entsprechend gleichgestellte Staaten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Verfassungstreue",explanation:`Verfassungstreue

→ Gewähr bieten, jederzeit für die freiheitliche demokratische Grundordnung einzutreten`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Laufbahnbefähigung",explanation:`Befähigung/Vorbildung

→ die für die jeweilige Laufbahn vorgeschriebene Befähigung besitzen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Gesundheitliche Eignung",explanation:`Art. 33 Abs. 2 GG + § 11 LBG BW → gesundheitliche Eignung

Art. 33 Abs. 2 GG → übergeordneter Grundsatz der Eignung

§ 11 LBG BW → konkrete Feststellung der gesundheitlichen Eignung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Höchstaltersgrenze",explanation:`§ 48 LHO BW → Höchstaltersgrenze

Grundsätzlich 42 Jahre`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"}]}],answer:`§ 7 Abs. 1 BeamtStG → Voraussetzungen für die Berufung

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

Grundsätzlich 42 Jahre`},{id:"schulrecht-74",document:"Schulrecht",page:23,question:"Unter welchen Voraussetzungen wird die Ernennung wirksam?",answerSections:[{title:"Wirksamkeit der Ernennung",items:[{term:"Urkunde, Einwilligung und Zeitpunkt",explanation:`§ 8 BeamtStG → Ernennung durch Aushändigung der Ernennungsurkunde

§ 9 Abs. 2 LBG → Wirksamkeit

Einwilligung des Beamten

Aushändigung der Urkunde

keine Rückwirkung

Merksatz: Einwilligung + Urkunde in die Hand = Ernennung wirksam.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"}]}],answer:`§ 8 BeamtStG → Ernennung durch Aushändigung der Ernennungsurkunde

§ 9 Abs. 2 LBG → Wirksamkeit

Einwilligung des Beamten

Aushändigung der Urkunde

keine Rückwirkung

Merksatz: Einwilligung + Urkunde in die Hand = Ernennung wirksam.`},{id:"schulrecht-75",document:"Schulrecht",page:23,question:"Welche Arten von Beamtenverhältnissen werden unterschieden?",answerSections:[{title:"Arten des Beamtenverhältnisses",items:[{term:"Überblick",explanation:`§ 4 BeamtStG

Es werden vier Arten unterschieden:`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Auf Widerruf",explanation:"Beamter auf Widerruf → vor allem für Referendariat",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Auf Probe",explanation:"Beamter auf Probe → Probezeit; es wird geprüft, ob sich der Beamte für eine spätere Verwendung auf Lebenszeit bewährt",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Auf Lebenszeit",explanation:"Beamter auf Lebenszeit → dauerhaftes Beamtenverhältnis; das ist der Regelfall",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"},{term:"Auf Zeit",explanation:"Beamter auf Zeit → zeitlich befristet, z. B. Bürgermeister",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=23",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 23"}]}],answer:`§ 4 BeamtStG

Es werden vier Arten unterschieden:

Beamter auf Widerruf → vor allem für Referendariat

Beamter auf Probe → Probezeit; es wird geprüft, ob sich der Beamte für eine spätere Verwendung auf Lebenszeit bewährt

Beamter auf Lebenszeit → dauerhaftes Beamtenverhältnis; das ist der Regelfall

Beamter auf Zeit → zeitlich befristet, z. B. Bürgermeister`},{id:"schulrecht-76",document:"Schulrecht",page:24,question:"Wie lange dauert die regelmäßige Probezeit für einen Beamten? Unter welchen Bedingungen kann sie verkürzt bzw. verlängert werden?",answerSections:[{title:"Beamtenrechtliche Probezeit",items:[{term:"Regeldauer und Grenzen",explanation:`§ 19 LBG BW - Probezeit

Regelmäßige Probezeit 3 Jahre. mind. 1 Jahr, max 5 Jahre`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Anrechnung von Zeiten",explanation:`Verkürzung

Anrechnung bestimmter Zeiten

Wehr-/ Zivildienst oder Entwicklungshilfedienst

Pflege-/ Elternzeiten

Einschlägige berufliche Tätigkeit → frühere Berufserfahrung, die der späteren Tätigkeit in der Beamtenlaufbahn entspricht.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Besondere Verkürzung",explanation:`Besondere Verkürzung

Weit überdurchschnittliche Bewährung → mind. Note 1,5 (Schulleiterbeurteilung)

hervorragende Laufbahnprüfung (Zweite Staatsprüfung) → mind. Note 1,4

jeweils Verkürzung um bis zu 1 Jahr

kein Rechtsanspruch`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Verlängerung",explanation:`Verlängerung

Nichtbewährung innerhalb der regulären Probezeit

z. B. Leistungsmängel oder behebbare gesundheitliche Probleme

Verlängerung zur weiteren Feststellung der Bewährung

Maximal 2 × 1 Jahr`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"}]}],answer:`§ 19 LBG BW - Probezeit

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

Maximal 2 × 1 Jahr`},{id:"schulrecht-77",document:"Schulrecht",page:24,question:"Auf welche Art und Weise kann ein Beamtenverhältnis enden?",answerSections:[{title:"Beendigung des Beamtenverhältnisses",items:[{term:"Entlassung kraft Gesetzes",explanation:`Entlassung kraft Gesetzes (§ 22 BeamtStG)→ endet automatisch, ohne Verwaltungsakt

Verlust der persönlichen Vorraussetzungen (z.B. Staatsbürgerschaft)

Erreichen der Altersgrenze (Aktuell 67 Jahre)

Eintritt in ein öffentlich-rechtliches Dienst- oder Amtsverhältnis zu einem anderen Dienstherrn

Entgültiges nichtbesethen der Referendarsprüfung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Entlassung durch Verwaltungsakt",explanation:`Entlassung durch Verwaltungsakt (§ 23 BeamtStG) → Dienstherr verfügt die Entlassung

Auf eigenen Antrag

Fehlende Bewährung in der Probezeit

Verweigerung des Diensteids`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Verlust der Beamtenrechte",explanation:`Verlust der Beamtenrechte (§ 24 BeamtStG) → aufgrund bestimmter strafrechtlicher Verurteilungen

Verurteilung zu min. einem Jahr wegen vorsätzlicher Tat

Verurteilung zu min. 6 Monaten wegen Friedensverrate, Hochverrat, Gefährdung des demokratischen Rechtsstaates`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Ruhestand und Altersgrenze",explanation:`Ruhestand → Ende des aktiven Dienstes

Erreichen der Altersgrenze → § 36 LBG

Zum Ende des Schuljahres, indem man 66 wird`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Ruhestand auf Antrag",explanation:`Ruhestand auf Antrag → § 40 LBG

ab Vollendung des 63. Lebensjahres die Versetzung in den Ruhestand beantragen.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"},{term:"Dienstunfähigkeit",explanation:`Dienstunfähigkeit → § 43 LBG

mehr als 3 Monate Ausfall innerhalb von 6 Monaten + keine Aussicht auf volle Dienstfähigkeit innerhalb weiterer 6 Monate.

Wenn ein Beamter aus gesundheitlichen Gründen dauerhaft nicht mehr in der Lage ist, seine Dienstpflichten zu erfüllen.

Vor einer Ruhestandsversetzung wird grundsätzlich geprüft, ob eine anderweitige Verwendung oder begrenzte Dienstfähigkeit möglich ist.

§§ 26–27 BeamtStG, § 43 LBG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=24",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 24"}]}],answer:`Entlassung kraft Gesetzes (§ 22 BeamtStG)→ endet automatisch, ohne Verwaltungsakt

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

§§ 26–27 BeamtStG, § 43 LBG`}]},{title:"Rechte und Pflichten",sources:[{document:"Schulrecht",pages:"25",page:25}],questions:[{id:"schulrecht-78",document:"Schulrecht",page:25,question:"Welche Rechte und Pflichten hat der Beamte im Rahmen seines Dienstverhältnisses?",answerSections:[{title:"Rechte und Pflichten der Beamten",items:[{term:"Fürsorge, Beihilfe und Absicherung",explanation:`Rechte

§ 45 BeamtStG → Fürsorge

§ 78 LBG → Beihilfe

§ 71 LBG / § 44 BeamtStG → Urlaub

LBeamtVGBW → Versorgung + Dienstunfallfürsorge

LBesGBW → Besoldung

=> Für die Prüfung ist § 45 BeamtStG – Fürsorgepflicht des Dienstherrn wahrscheinlich der zentrale Ausgangspunkt für die „Rechte des Beamten“.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Treue und Verfassungstreue",explanation:`Pflichten

Treuepflicht und Verfassungstreue

Aktives eintreten freiheitlich-demokratische Grundordnung (BeamtstG § 33 Abs. 1)

Mäßigungs- und Zurückhaltungsgebot (Niemand beeinflussen) (BeamtstG § 33 Abs. 1)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Beruflicher Einsatz und Nebentätigkeit",explanation:`Volle Hingabe an den Beruf (BeamtstG § 34)

Beamtinnen und Beamte haben sich mit vollem persönlichem Einsatz ihrem Beruf zu widmen.

Nebentätigkieten müssen angezeigt werden (§ 60 - 63 LBG BW)`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Rechtmäßigkeit und weitere Dienstpflichten",explanation:`Verantwortung für die Rechtmäßigkeit des eigenen Handelns und Remonstrationspflicht (§ 36 BeamtStG)

Amtsverschwiegenheit über dienstlich bekannt gewordene Angelegenheiten. (§ 37 BeamtStG)

Mehrarbeit (§ 67 LBG BW), Abordnung oder Versetzung`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Gegenseitiges Dienst- und Treueverhältnis",explanation:"=> Das Beamtenverhältnis ist ein gegenseitiges öffentlich-rechtliches Dienst- und Treueverhältnis. Der Staat gewährt besondere Sicherheit und Fürsorge – dafür unterliegt der Beamte besonderen Treue- und Dienstpflichten.",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"}]}],answer:`Rechte

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

=> Das Beamtenverhältnis ist ein gegenseitiges öffentlich-rechtliches Dienst- und Treueverhältnis. Der Staat gewährt besondere Sicherheit und Fürsorge – dafür unterliegt der Beamte besonderen Treue- und Dienstpflichten.`},{id:"schulrecht-79",document:"Schulrecht",page:25,question:"Wie unterscheidet sich eine Abordnung von einer Versetzung?",answerSections:[{title:"Abordnung und Versetzung",items:[{term:"Rechtsgrundlagen",explanation:`Versetzung → § 24 LBG

Abordnung → § 25 LBG`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Abordnung · vorübergehend",explanation:`Abordnung → vorübergehend

Ein Beamter wird zeitlich begrenzt ganz oder teilweise bei einer anderen Dienststelle eingesetzt. Die Zugehörigkeit zur bisherigen Dienststelle bleibt grundsätzlich bestehen.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Versetzung · dauerhaft",explanation:`Versetzung → dauerhaft

Ein Beamter wechselt auf Dauer zu einer anderen Dienststelle bzw. gegebenenfalls zu einem anderen Dienstherrn.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"}]}],answer:`Versetzung → § 24 LBG

Abordnung → § 25 LBG

Abordnung → vorübergehend

Ein Beamter wird zeitlich begrenzt ganz oder teilweise bei einer anderen Dienststelle eingesetzt. Die Zugehörigkeit zur bisherigen Dienststelle bleibt grundsätzlich bestehen.

Versetzung → dauerhaft

Ein Beamter wechselt auf Dauer zu einer anderen Dienststelle bzw. gegebenenfalls zu einem anderen Dienstherrn.`},{id:"schulrecht-80",document:"Schulrecht",page:25,question:"Was versteht man unter einem schweren Dienstvergehen?",answerSections:[{title:"Schweres Dienstvergehen",items:[{term:"Rechtsgrundlagen",explanation:`BeamtStG § 47 Nichterfüllung von Pflichten

Disziplinargesetz (LDG) → Regelt die Verfolgung von Dienstvergehen`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"},{term:"Gravierende Pflichtverletzung und Vertrauensverlust",explanation:`Schweres Dienstvergehen → besonders gravierende, schuldhafte Verletzung der Dienstpflichten

Durch die Pflichtverletzung wird insbesondere das Vertrauen des Dienstherrn oder der Allgemeinheit in den Beamten erheblich beeinträchtigt.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=25",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 25"}]}],answer:`BeamtStG § 47 Nichterfüllung von Pflichten

Disziplinargesetz (LDG) → Regelt die Verfolgung von Dienstvergehen

Schweres Dienstvergehen → besonders gravierende, schuldhafte Verletzung der Dienstpflichten

Durch die Pflichtverletzung wird insbesondere das Vertrauen des Dienstherrn oder der Allgemeinheit in den Beamten erheblich beeinträchtigt.`}]},{title:"Personalrat",sources:[{document:"Schulrecht",pages:"26",page:26}],questions:[{id:"schulrecht-81",document:"Schulrecht",page:26,question:"Beschreiben Sie die Aufgaben der Personalvertretung.",answerSections:[{title:"Personalvertretung",items:[{term:"Interessenvertretung und Arbeitsschutz",explanation:`GEW S. 683 Personalvertretungsgesetz (LPVG)

Interessen der Beschäftigten gegenüber der Dienststelle (Schule) vertreten.

Der Personalrat nimmt Beschwerden und Anregungen der Beschäftigten auf und vertritt diese gegenüber der Dienststelle.

Überwachung von Arbeitsschutzvorschriften`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=26",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 26"},{term:"Beteiligungsrechte",explanation:"Darüber hinaus besitzt sie je nach Angelegenheit Beteiligungsrechte in Form von Mitbestimmung, Mitwirkung und Anhörung, beispielsweise bei Beförderungen oder der Verlängerung einer Probezeit.“",sourceUrl:"/lernmaterial/Schulrecht.pdf#page=26",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 26"},{term:"Mitbestimmung",explanation:`Mitbestimmung → Beförderung eines Beamten

→ Der Personalrat bestimmt mit; grundsätzlich ist seine Zustimmung erforderlich. § 75 Abs. 1 LPVG.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=26",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 26"},{term:"Mitbestimmung auf Antrag",explanation:`Mitbestimmung auf Antrag → Verlängerung der Probezeit

→ Der Personalrat bestimmt nur mit, wenn der betroffene Beschäftigte dies beantragt. § 75 Abs. 3 Nr. 1 LPVG.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=26",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 26"},{term:"Mitwirkung auf Antrag",explanation:`Mitwirkung auf Antrag → Disziplinarverfügung oder schriftliche Missbilligung gegen einen Beamten

→ Der Personalrat wird auf Antrag beteiligt, kann Einwendungen erheben und Vorschläge machen; die Dienststelle ist daran aber nicht wie bei der Mitbestimmung gebunden. § 81 Abs. 2 Nr. 1 LPVG.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=26",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 26"},{term:"Anhörung",explanation:`Anhörung → Personalplanung

→ Der Personalrat muss rechtzeitig informiert werden und ausreichend Gelegenheit erhalten, sich zu äußern. §§ 86, 87 Abs. 1 Nr. 1 LPVG.`,sourceUrl:"/lernmaterial/Schulrecht.pdf#page=26",sourceLabel:"Fragenkatalog Schulrecht · PDF-Seite 26"}]}],answer:`GEW S. 683 Personalvertretungsgesetz (LPVG)

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

→ Der Personalrat muss rechtzeitig informiert werden und ausreichend Gelegenheit erhalten, sich zu äußern. §§ 86, 87 Abs. 1 Nr. 1 LPVG.`}]}]},{id:"cluster-10",title:"Schulsystem, duale Ausbildung und Übergangsbereich",topics:[{title:"Schularten, Stufen und Abschlüsse",sources:[{document:"Schulorganisation",pages:"2-4",page:2},{document:"Schulorganisation",pages:"9-10",page:9}],questions:[{id:"schulorganisation-3",document:"Schulorganisation",page:2,question:"Wie ist das Schulsystem in Baden-Württemberg aufgebaut?",answerSections:[{title:"Aufbau des Schulsystems",items:[{term:"Bildungsstufen",explanation:`Primarstufe → Sekundarstufe I → Sekundarstufe II

Vereinfacht:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Primarstufe",explanation:`Primarstufe

Grundschule.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Sekundarstufe I",explanation:`Sekundarstufe I

Werkreal-/Hauptschule

Realschule

Gemeinschaftsschule

Gymnasium

entsprechende Bildungsgänge der SBBZ.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Sekundarstufe II",explanation:`Sekundarstufe II

gymnasiale Oberstufe

beruflichen Schulen

Berufsschule

Berufsfachschule

Berufskolleg

Berufliches Gymnasium

Berufsoberschule`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"},{term:"Durchlässigkeit",explanation:"Ein wichtiges Prinzip ist dabei die Durchlässigkeit: Ein einmal eingeschlagener Bildungsweg legt den späteren Abschluss nicht endgültig fest. Die Unterlagen formulieren dazu ausdrücklich: „Alle Wege stehen offen“ und jeder Abschluss bietet grundsätzlich Anschlussmöglichkeiten.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=2",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 2"}]}],answer:`Primarstufe → Sekundarstufe I → Sekundarstufe II

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

Ein wichtiges Prinzip ist dabei die Durchlässigkeit: Ein einmal eingeschlagener Bildungsweg legt den späteren Abschluss nicht endgültig fest. Die Unterlagen formulieren dazu ausdrücklich: „Alle Wege stehen offen“ und jeder Abschluss bietet grundsätzlich Anschlussmöglichkeiten.`},{id:"schulorganisation-6",document:"Schulorganisation",page:3,question:"Was ist der Unterschied zwischen Fachhochschulreife und fachgebundener Hochschulreife?",answerSections:[{title:"Hochschulzugangsberechtigungen",items:[{term:"Fachhochschulreife",explanation:`Fachhochschulreife → Hochschule für angewandte Wissenschaften

Sie berechtigt grundsätzlich zum Studium an Hochschulen für angewandte Wissenschaften/ Fachhochschulen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Fachgebundene Hochschulreife",explanation:`Fachgebundene Hochschulreife → bestimmte Studienrichtungen

Sie ermöglicht ein Hochschulstudium, ist aber auf bestimmte Fachrichtungen beschränkt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Allgemeine Hochschulreife",explanation:`Davon zu unterscheiden

Allgemeine Hochschulreife → grundsätzlich alle Studiengänge an allen Hochschularte`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"},{term:"Anerkennung und Vertiefungsfrage",explanation:`Die KMK-Unterlagen bestätigen beispielsweise ausdrücklich, dass ein Zeugnis der Fachhochschulreife bundesweit zum Studium an Fachhochschulen berechtigt.

Fragen: Beispiele für fachgebundene Hochschulreife`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=3",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 3"}]}],answer:`Fachhochschulreife → Hochschule für angewandte Wissenschaften

Sie berechtigt grundsätzlich zum Studium an Hochschulen für angewandte Wissenschaften/ Fachhochschulen.

Fachgebundene Hochschulreife → bestimmte Studienrichtungen

Sie ermöglicht ein Hochschulstudium, ist aber auf bestimmte Fachrichtungen beschränkt.

Davon zu unterscheiden

Allgemeine Hochschulreife → grundsätzlich alle Studiengänge an allen Hochschularte

Die KMK-Unterlagen bestätigen beispielsweise ausdrücklich, dass ein Zeugnis der Fachhochschulreife bundesweit zum Studium an Fachhochschulen berechtigt.

Fragen: Beispiele für fachgebundene Hochschulreife`},{id:"schulorganisation-10",document:"Schulorganisation",page:4,question:"Welche Bildungsabschlüsse können in Baden-Württemberg erworben werden?",answerSections:[{title:"Bildungsabschlüsse",items:[{term:"Abschlussarten",explanation:`Vom Hauptschulabschluss bis zum Abitur

Wesentliche schulische Abschlüsse sind:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Hauptschulabschluss",explanation:"Hauptschulabschluss,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Mittlerer Bildungsabschluss",explanation:"mittlerer Bildungsabschluss,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Fachhochschulreife",explanation:"Fachhochschulreife,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Fachgebundene Hochschulreife",explanation:"fachgebundene Hochschulreife,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Allgemeine Hochschulreife",explanation:"allgemeine Hochschulreife.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Anschlussmöglichkeiten",explanation:"Das berufliche Schulwesen ermöglicht dabei zahlreiche Wege zu höherwertigen Abschlüssen. Die Unterlagen betonen deshalb ausdrücklich das Prinzip „Kein Abschluss ohne Anschluss“.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Vertiefungsfrage",explanation:"Frage: Was zählt alles zu mittlerem Bildungsabschluss",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"}]}],answer:`Vom Hauptschulabschluss bis zum Abitur

Wesentliche schulische Abschlüsse sind:

Hauptschulabschluss,

mittlerer Bildungsabschluss,

Fachhochschulreife,

fachgebundene Hochschulreife,

allgemeine Hochschulreife.

Das berufliche Schulwesen ermöglicht dabei zahlreiche Wege zu höherwertigen Abschlüssen. Die Unterlagen betonen deshalb ausdrücklich das Prinzip „Kein Abschluss ohne Anschluss“.

Frage: Was zählt alles zu mittlerem Bildungsabschluss`},{id:"schulorganisation-11",document:"Schulorganisation",page:4,question:"Welche Funktion haben berufliche Schulen im Bildungssystem?",answerSections:[{title:"Funktionen beruflicher Schulen",items:[{term:"Ausbildung und Bildungsaufstieg",explanation:`Berufliche Schulen → Ausbildung + höhere Bildungsabschlüsse

Sie erfüllen mehrere Funktionen:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Berufsvorbereitung und duale Ausbildung",explanation:`Berufsvorbereitung,

schulischer Partner der dualen Ausbildung,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Vollzeitausbildung",explanation:"berufliche Vollzeitausbildung,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Schulabschlüsse und Weiterbildung",explanation:`Erwerb höherer Schulabschlüsse,

berufliche Weiterbildung.

Sie ermöglichen Bildungswege von der Berufsvorbereitung bis zur allgemeinen Hochschulreife.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"}]}],answer:`Berufliche Schulen → Ausbildung + höhere Bildungsabschlüsse

Sie erfüllen mehrere Funktionen:

Berufsvorbereitung,

schulischer Partner der dualen Ausbildung,

berufliche Vollzeitausbildung,

Erwerb höherer Schulabschlüsse,

berufliche Weiterbildung.

Sie ermöglichen Bildungswege von der Berufsvorbereitung bis zur allgemeinen Hochschulreife.`},{id:"schulorganisation-12",document:"Schulorganisation",page:4,question:"Welche Unterschiede bestehen zwischen öffentlichen und privaten Schulen?",answerSections:[{title:"Öffentliche und private Schulen",items:[{term:"Öffentliche Trägerschaft",explanation:"Öffentliche Schulen → staatlich getragen",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Freie Trägerschaft und Grundgesetz",explanation:`Private Schulen → freie Trägerschaft

Privatschulen sind durch Art. 7 GG grundsätzlich geschützt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"},{term:"Genehmigung und soziale Integration",explanation:"Bei Ersatzschulen bestehen jedoch Genehmigungsvoraussetzungen. Die Regelungen sollen unter anderem verhindern, dass durch Privatschulen eine starke gesellschaftliche bzw. soziale Segregation entsteht. Für private Grundschulen gelten besonders hohe Anforderungen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=4",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 4"}]}],answer:`Öffentliche Schulen → staatlich getragen

Private Schulen → freie Trägerschaft

Privatschulen sind durch Art. 7 GG grundsätzlich geschützt.

Bei Ersatzschulen bestehen jedoch Genehmigungsvoraussetzungen. Die Regelungen sollen unter anderem verhindern, dass durch Privatschulen eine starke gesellschaftliche bzw. soziale Segregation entsteht. Für private Grundschulen gelten besonders hohe Anforderungen.`},{id:"schulorganisation-17",document:"Schulorganisation",page:5,question:"Beschreiben Sie den Aufbau des deutschen Bildungssystems anhand der Bildungsbereiche.",answerSections:[{title:"Bildungsbereiche",items:[{term:"Aufbau",explanation:"Elementar → Primar → Sek I → Sek II → Tertiär",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Elementarbereich",explanation:"Elementarbereich: frühkindliche Bildung.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Primarbereich",explanation:"Primarbereich: Grundschule.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Sekundarbereich I",explanation:"Sekundarbereich I: weiterführende Schulen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Sekundarbereich II",explanation:"Sekundarbereich II: gymnasiale Oberstufe und berufliche Bildung.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Tertiärbereich",explanation:"Tertiärbereich: Hochschulen und bestimmte Formen höherer beruflicher Bildung.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"},{term:"Berufliche Bildung als Verbindung",explanation:"Die berufliche Bildung besitzt dabei eine wichtige Brückenfunktion zwischen Schule, Ausbildung, Weiterbildung und Studium.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=5",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 5"}]}],answer:`Elementar → Primar → Sek I → Sek II → Tertiär

Elementarbereich: frühkindliche Bildung.

Primarbereich: Grundschule.

Sekundarbereich I: weiterführende Schulen.

Sekundarbereich II: gymnasiale Oberstufe und berufliche Bildung.

Tertiärbereich: Hochschulen und bestimmte Formen höherer beruflicher Bildung.

Die berufliche Bildung besitzt dabei eine wichtige Brückenfunktion zwischen Schule, Ausbildung, Weiterbildung und Studium.`},{id:"schulorganisation-23",document:"Schulorganisation",page:7,question:"Nennen Sie Gründe für die Komplexität des baden-württembergischen Bildungsmodells.",answerSections:[{title:"Komplexität des Bildungssystems",items:[{term:"Schularten und Abschlüsse",explanation:`Vor allem:

viele unterschiedliche Schularten,

zahlreiche Bildungsabschlüsse,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Durchlässigkeit und Bildungswege",explanation:`hohe Durchlässigkeit,

berufliche und allgemeinbildende Bildungswege,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Zugang und Anschluss",explanation:`unterschiedliche Zugangsvoraussetzungen,

zahlreiche Anschlussmöglichkeiten.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Unterschiedliche Bildungsbiografien",explanation:"Die Komplexität ist damit teilweise gewollt: Unterschiedliche Begabungen und Bildungsbiografien sollen verschiedene Wege zum gleichen oder zu höheren Abschlüssen ermöglichen. Das Kultusministerium beschreibt das System ausdrücklich als keine „Einbahnstraße“.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"}]}],answer:`Vor allem:

viele unterschiedliche Schularten,

zahlreiche Bildungsabschlüsse,

hohe Durchlässigkeit,

berufliche und allgemeinbildende Bildungswege,

unterschiedliche Zugangsvoraussetzungen,

zahlreiche Anschlussmöglichkeiten.

Die Komplexität ist damit teilweise gewollt: Unterschiedliche Begabungen und Bildungsbiografien sollen verschiedene Wege zum gleichen oder zu höheren Abschlüssen ermöglichen. Das Kultusministerium beschreibt das System ausdrücklich als keine „Einbahnstraße“.`},{id:"schulorganisation-32",document:"Schulorganisation",page:9,question:"Was versteht man unter der Durchlässigkeit des Schulsystems?",answerSections:[{title:"Durchlässigkeit",items:[{term:"Offene Bildungswege",explanation:`Durchlässigkeit → Bildungswege bleiben offen

Ein bestimmter Schulabschluss bzw. eine einmal gewählte Schulart legt die weitere Bildungslaufbahn nicht endgültig fest.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Beispiel einer Bildungslaufbahn",explanation:`Beispiel:

Hauptschulabschluss → Ausbildung/2BFS → mittlerer Bildungsabschluss → Berufskolleg/Berufliches Gymnasium → FHR/Abitur.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"},{term:"Anschlussmöglichkeiten",explanation:"Das Kultusministerium formuliert dazu ausdrücklich, dass jeder Abschluss eine weiterführende Anschlussmöglichkeit bietet.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=9",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 9"}]}],answer:`Durchlässigkeit → Bildungswege bleiben offen

Ein bestimmter Schulabschluss bzw. eine einmal gewählte Schulart legt die weitere Bildungslaufbahn nicht endgültig fest.

Beispiel:

Hauptschulabschluss → Ausbildung/2BFS → mittlerer Bildungsabschluss → Berufskolleg/Berufliches Gymnasium → FHR/Abitur.

Das Kultusministerium formuliert dazu ausdrücklich, dass jeder Abschluss eine weiterführende Anschlussmöglichkeit bietet.`},{id:"schulorganisation-38",document:"Schulorganisation",page:10,question:"Erklären Sie den Begriff „Schulstufen“.",answerSections:[{title:"Schulstufen",items:[{term:"Bildungsabschnitte",explanation:`Schulstufen → Gliederung nach Bildungsabschnitten

Zum Beispiel:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Primarstufe und Sekundarstufen",explanation:`Primarstufe,

Sekundarstufe I,

Sekundarstufe II.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"},{term:"Abgrenzung zur Schulart",explanation:"Eine Schulstufe ist also keine einzelne Schulart, sondern ein Abschnitt des Bildungssystems.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"}]}],answer:`Schulstufen → Gliederung nach Bildungsabschnitten

Zum Beispiel:

Primarstufe,

Sekundarstufe I,

Sekundarstufe II.

Eine Schulstufe ist also keine einzelne Schulart, sondern ein Abschnitt des Bildungssystems.`},{id:"schulorganisation-39",document:"Schulorganisation",page:10,question:"Erklären Sie den Begriff „Schulfremdenprüfung“.",answerSections:[{title:"Schulfremdenprüfung",items:[{term:"Externer Erwerb eines Schulabschlusses",explanation:`Schulfremdenprüfung → Abschluss ohne regulären Besuch des Bildungsgangs

Eine Person kann unter bestimmten Voraussetzungen eine staatliche Abschlussprüfung ablegen, obwohl sie den entsprechenden Bildungsgang nicht regulär besucht hat.

Dadurch kann ein Schulabschluss extern erworben werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=10",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 10"}]}],answer:`Schulfremdenprüfung → Abschluss ohne regulären Besuch des Bildungsgangs

Eine Person kann unter bestimmten Voraussetzungen eine staatliche Abschlussprüfung ablegen, obwohl sie den entsprechenden Bildungsgang nicht regulär besucht hat.

Dadurch kann ein Schulabschluss extern erworben werden.`}]},{title:"Duale Ausbildung organisieren",sources:[{document:"Schulorganisation",pages:"11-13",page:11},{document:"Schulorganisation",pages:"15",page:15}],questions:[{id:"schulorganisation-41",document:"Schulorganisation",page:11,question:"Welche Abschlüsse strebt ein Berufsschüler an?",answerSections:[{title:"Abschlüsse der dualen Ausbildung",items:[{term:"Zwei Abschlüsse",explanation:`Doppelter Abschluss → Schule + Beruf

Im dualen System werden grundsätzlich zwei Abschlüsse erworben:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Berufsschulabschluss",explanation:"Berufsschulabschlusszeugnis der Berufsschule",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Berufsabschluss",explanation:"Berufsabschluss, z. B. Gesellen-, Gehilfen- oder Facharbeiterbrief",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Zusatzabschlüsse",explanation:"Zusätzlich können je nach Voraussetzungen weitere allgemeinbildende Abschlüsse bzw. Zusatzqualifikationen erworben werden. Die Präsentation nennt Hauptschulabschluss, Fachhochschulreife, fachgebundene Hochschulreife und Abitur als mögliche zusätzliche Abschlüsse.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Schule und Kammer",explanation:`Für die Prüfung würde ich zuerst sagen:

Der Berufsschüler strebt einerseits den schulischen Berufsschulabschluss und andererseits den Berufsabschluss bei der zuständigen Kammer an.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"}]}],answer:`Doppelter Abschluss → Schule + Beruf

Im dualen System werden grundsätzlich zwei Abschlüsse erworben:

Berufsschulabschlusszeugnis der Berufsschule

Berufsabschluss, z. B. Gesellen-, Gehilfen- oder Facharbeiterbrief

Zusätzlich können je nach Voraussetzungen weitere allgemeinbildende Abschlüsse bzw. Zusatzqualifikationen erworben werden. Die Präsentation nennt Hauptschulabschluss, Fachhochschulreife, fachgebundene Hochschulreife und Abitur als mögliche zusätzliche Abschlüsse.

Für die Prüfung würde ich zuerst sagen:

Der Berufsschüler strebt einerseits den schulischen Berufsschulabschluss und andererseits den Berufsabschluss bei der zuständigen Kammer an.`},{id:"schulorganisation-42",document:"Schulorganisation",page:11,question:"Kann in der Berufsschule ein Schuljahr wiederholt werden?",answerSections:[{title:"Wiederholung in der Berufsschule",items:[{term:"Grundsätzliche Möglichkeit",explanation:`Wiederholung → grundsätzlich möglich

Laut Lösungskatalog kann ein Schuljahr bei Nichtversetzung grundsätzlich einmal pro Jahrgang wiederholt werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Zweite Wiederholung als Ausnahme",explanation:"Eine zweite Wiederholung desselben Jahrgangs ist nur ausnahmsweise bei außergewöhnlichen Umständen möglich, beispielsweise längerer Krankheit.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Ausbildungsvertrag und Dauer",explanation:"Wichtig ist aber die Besonderheit der dualen Ausbildung: Die Ausbildungsdauer ist zugleich im Ausbildungsvertrag mit dem Betrieb geregelt. Der ältere Lösungsteil der Unterlagen weist genau darauf hin.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"}]}],answer:`Wiederholung → grundsätzlich möglich

Laut Lösungskatalog kann ein Schuljahr bei Nichtversetzung grundsätzlich einmal pro Jahrgang wiederholt werden.

Eine zweite Wiederholung desselben Jahrgangs ist nur ausnahmsweise bei außergewöhnlichen Umständen möglich, beispielsweise längerer Krankheit.

Wichtig ist aber die Besonderheit der dualen Ausbildung: Die Ausbildungsdauer ist zugleich im Ausbildungsvertrag mit dem Betrieb geregelt. Der ältere Lösungsteil der Unterlagen weist genau darauf hin.`},{id:"schulorganisation-42-zustimmung",document:"Schulorganisation",page:11,context:"Kann in der Berufsschule ein Schuljahr wiederholt werden?",question:"Wenn ja, wer muss zustimmen?",answerSections:[{title:"Zustimmung zur Wiederholung",items:[{term:"Versetzungsentscheidung",explanation:`Hier unterscheiden die Unterlagen:

Bei der Versetzungsentscheidung entscheidet die Klassenkonferenz auf Grundlage der schulischen Leistungen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Freiwillige Wiederholung",explanation:"Bei einer freiwilligen Wiederholung erfolgt ein Antrag des Schülers bzw. der Erziehungsberechtigten und die Zustimmung der Schulleitung ist erforderlich.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Einbeziehung des Ausbildungsbetriebs",explanation:`Da es sich um eine duale Ausbildung handelt, spielt außerdem der Ausbildungsbetrieb eine Rolle, weil die Ausbildungsdauer vertraglich festgelegt ist. Im älteren Lösungskatalog steht deshalb knapp:

„Der Ausbildungsbetrieb.“`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Schulische und betriebliche Entscheidung",explanation:`Prüfungstauglich würde ich deshalb sagen:

Schulisch entscheidet die Schule bzw. Klassenkonferenz. Da die Ausbildungsdauer aber durch den Ausbildungsvertrag bestimmt wird, muss bei einer Verlängerung auch der Ausbildungsbetrieb einbezogen werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"}]}],answer:`Hier unterscheiden die Unterlagen:

Bei der Versetzungsentscheidung entscheidet die Klassenkonferenz auf Grundlage der schulischen Leistungen.

Bei einer freiwilligen Wiederholung erfolgt ein Antrag des Schülers bzw. der Erziehungsberechtigten und die Zustimmung der Schulleitung ist erforderlich.

Da es sich um eine duale Ausbildung handelt, spielt außerdem der Ausbildungsbetrieb eine Rolle, weil die Ausbildungsdauer vertraglich festgelegt ist. Im älteren Lösungskatalog steht deshalb knapp:

„Der Ausbildungsbetrieb.“

Prüfungstauglich würde ich deshalb sagen:

Schulisch entscheidet die Schule bzw. Klassenkonferenz. Da die Ausbildungsdauer aber durch den Ausbildungsvertrag bestimmt wird, muss bei einer Verlängerung auch der Ausbildungsbetrieb einbezogen werden.`},{id:"schulorganisation-43",document:"Schulorganisation",page:11,question:"Nennen Sie drei Vorteile der dualen Ausbildung.",answerSections:[{title:"Vorteile dualer Ausbildung",items:[{term:"Theorie und Praxis",explanation:`Duale Ausbildung → Theorie + Praxis + geteilte Kosten

Die Unterlagen nennen insbesondere:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Praktisches und theoretisches Lernen",explanation:"Verbindung von praktischem und theoretischem Lernen",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Geteilte Ausbildungskosten",explanation:"Aufteilung der Ausbildungskosten",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Anpassung an Wirtschaftsbedarf",explanation:"Ausbildungsinhalte können relativ schnell an den Bedarf der Wirtschaft angepasst werden",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"},{term:"Weitere Vorteile",explanation:`Weitere genannte Vorteile sind:

hohe Praxisnähe,

bessere Jobchancen,

Ausbildungsvergütung,

einheitliches Ausbildungsniveau.

Auch die beigefügte Broschüre beschreibt die Kombination von Theorie in der Berufsschule und Praxis im Betrieb als entscheidendes Merkmal der dualen Ausbildung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=11",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 11"}]}],answer:`Duale Ausbildung → Theorie + Praxis + geteilte Kosten

Die Unterlagen nennen insbesondere:

Verbindung von praktischem und theoretischem Lernen

Aufteilung der Ausbildungskosten

Ausbildungsinhalte können relativ schnell an den Bedarf der Wirtschaft angepasst werden

Weitere genannte Vorteile sind:

hohe Praxisnähe,

bessere Jobchancen,

Ausbildungsvergütung,

einheitliches Ausbildungsniveau.

Auch die beigefügte Broschüre beschreibt die Kombination von Theorie in der Berufsschule und Praxis im Betrieb als entscheidendes Merkmal der dualen Ausbildung.`},{id:"schulorganisation-44",document:"Schulorganisation",page:12,question:"Erklären Sie das marktwirtschaftliche System bei der Ausbildung Jugendlicher.",answerSections:[{title:"Marktwirtschaftliches Ausbildungsmodell",items:[{term:"Ausbildungsbedarf der Betriebe",explanation:`Marktwirtschaftliches Modell → Betriebe bestimmen den Bedarf

Die Ausbildungsbetriebe sind die Hauptakteure.

Sie bilden vor allem entsprechend der Nachfrage bzw. ihres eigenen Fachkräftebedarfs aus. Die Ausbildung ist:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Berufliche Verwendung und Finanzierung",explanation:`stark an der beruflichen Verwendung orientiert,

produktionsgebunden,

durch die Betriebe finanziert,

vergleichsweise wenig pädagogisiert.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Chancengleichheit als Herausforderung",explanation:"Problematisch ist laut Unterlage, dass die Auswahl der Auszubildenden durch die Betriebe erfolgt und gesellschaftliche Ziele wie Chancengleichheit dabei nicht zwingend berücksichtigt werden.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Rolle der Betriebe",explanation:`Kurzform für die Prüfung:

Beim marktwirtschaftlichen Modell bestimmen hauptsächlich die Betriebe, wen und in welchen Berufen sie entsprechend ihrem Bedarf ausbilden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"}]}],answer:`Marktwirtschaftliches Modell → Betriebe bestimmen den Bedarf

Die Ausbildungsbetriebe sind die Hauptakteure.

Sie bilden vor allem entsprechend der Nachfrage bzw. ihres eigenen Fachkräftebedarfs aus. Die Ausbildung ist:

stark an der beruflichen Verwendung orientiert,

produktionsgebunden,

durch die Betriebe finanziert,

vergleichsweise wenig pädagogisiert.

Problematisch ist laut Unterlage, dass die Auswahl der Auszubildenden durch die Betriebe erfolgt und gesellschaftliche Ziele wie Chancengleichheit dabei nicht zwingend berücksichtigt werden.

Kurzform für die Prüfung:

Beim marktwirtschaftlichen Modell bestimmen hauptsächlich die Betriebe, wen und in welchen Berufen sie entsprechend ihrem Bedarf ausbilden.`},{id:"schulorganisation-45",document:"Schulorganisation",page:12,question:"Was versteht man unter dem bürokratischen Ausbildungsmodell?",answerSections:[{title:"Bürokratisches Ausbildungsmodell",items:[{term:"Staatliche Planung",explanation:`Bürokratisches Modell → Staat plant Ausbildung

Das ist gewissermaßen das Gegenmodell zum marktwirtschaftlichen Modell.

Berufsbildung und Ausbildungsbedarf liegen stärker in den Händen staatlicher Planung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Individuelle, gesellschaftliche und pädagogische Ziele",explanation:`Die Ausbildung orientiert sich nicht nur am unmittelbaren Bedarf der Betriebe, sondern auch an:

individuellen Anforderungen,

gesellschaftlichen Anforderungen,

pädagogischen Zielsetzungen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Systematik und öffentliche Finanzierung",explanation:`Das Modell ist laut Sitzung 2:

systematischer,

stärker pädagogisiert,

öffentlich finanziert.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Abgrenzung zum Marktmodell",explanation:`Merksatz:

Marktwirtschaftlich → Betrieb bestimmt

Bürokratisch → Staat plant`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"}]}],answer:`Bürokratisches Modell → Staat plant Ausbildung

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

Bürokratisch → Staat plant`},{id:"schulorganisation-46",document:"Schulorganisation",page:12,question:"Wie werden die Stufen in der Berufsschule genannt?",answerSections:[{title:"Stufen der Berufsschule",items:[{term:"Dreistufiger Aufbau",explanation:`Grundstufe → Fachstufe I → Fachstufe II

Die Berufsschule gliedert sich in drei Stufen:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Grundstufe · erstes Jahr",explanation:"Grundstufe: 1. Ausbildungsjahr",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Fachstufe I · zweites Jahr",explanation:"Fachstufe I: 2. Ausbildungsjahr",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Fachstufe II · drittes und viertes Jahr",explanation:`Fachstufe II: 3. bzw. 4. Ausbildungsjahr

Die Präsentation nennt genau diese drei Stufen.

Merksatz:

Jahr Grundstufe – danach Fachstufen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"}]}],answer:`Grundstufe → Fachstufe I → Fachstufe II

Die Berufsschule gliedert sich in drei Stufen:

Grundstufe: 1. Ausbildungsjahr

Fachstufe I: 2. Ausbildungsjahr

Fachstufe II: 3. bzw. 4. Ausbildungsjahr

Die Präsentation nennt genau diese drei Stufen.

Merksatz:

Jahr Grundstufe – danach Fachstufen.`},{id:"schulorganisation-47",document:"Schulorganisation",page:12,question:"Erläutern Sie den Begriff „Blockunterricht“.",answerSections:[{title:"Blockunterricht",items:[{term:"Gebündelte Schulwochen",explanation:`Blockunterricht → Schule mehrere Wochen am Stück

Beim Blockunterricht findet der Berufsschulunterricht nicht an einzelnen Wochentagen statt, sondern gebündelt:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Wechsel zwischen Schule und Betrieb",explanation:"Der Auszubildende besucht eine oder mehrere Wochen am Stück die Berufsschule und ist anschließend wieder für einen längeren Zeitraum im Betrieb.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"},{term:"Vergleich zum Teilzeitunterricht",explanation:"Die ergänzende Ausbildungsbroschüre bestätigt die beiden Organisationsformen: Berufsschule findet entweder an ein bis zwei Tagen pro Woche oder in mehrwöchigem Blockunterricht statt.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=12",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 12"}]}],answer:`Blockunterricht → Schule mehrere Wochen am Stück

Beim Blockunterricht findet der Berufsschulunterricht nicht an einzelnen Wochentagen statt, sondern gebündelt:

Der Auszubildende besucht eine oder mehrere Wochen am Stück die Berufsschule und ist anschließend wieder für einen längeren Zeitraum im Betrieb.

Die ergänzende Ausbildungsbroschüre bestätigt die beiden Organisationsformen: Berufsschule findet entweder an ein bis zwei Tagen pro Woche oder in mehrwöchigem Blockunterricht statt.`},{id:"schulorganisation-48",document:"Schulorganisation",page:13,question:"Welche Stellen sind zuständig bei der dualen Ausbildung?",answerSections:[{title:"Akteure und Rechtsgrundlagen der dualen Ausbildung",items:[{term:"Betrieb, Berufsschule und Kammer",explanation:`Duales System → Betrieb + Berufsschule + Kammer

Drei zentrale Akteure:

Ausbildungsbetrieb

Berufsschule`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"IHK und HWK",explanation:`zuständige Kammer, z. B.

Industrie- und Handelskammer (IHK)

Handwerkskammer (HWK)`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Betriebliche Rechtsgrundlagen",explanation:`Dabei gelten unterschiedliche Rechtsgrundlagen:

Betriebliche Ausbildung:

BBiG, Handwerksordnung, Ausbildungsordnung, Jugendarbeitsschutzgesetz, AEVO und Ausbildungsvertrag.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Schulische Rechtsgrundlagen",explanation:`Schulische Ausbildung in Baden-Württemberg:

Schulgesetz, Verordnungen, Berufsschulordnung und Bildungspläne.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"}]}],answer:`Duales System → Betrieb + Berufsschule + Kammer

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

Schulgesetz, Verordnungen, Berufsschulordnung und Bildungspläne.`},{id:"schulorganisation-49",document:"Schulorganisation",page:13,question:"Kann ich als Schülerin entscheiden, auf welche Berufsschule ich gehe?",answerSections:[{title:"Wahl der Berufsschule",items:[{term:"Grundsätzliche Zuweisung",explanation:`Berufsschule → grundsätzlich keine freie Wahl

Nein.

Nach dem Lösungskatalog wird die zuständige Berufsschule grundsätzlich zugewiesen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Fachklassen und Ausbildungsberuf",explanation:"Hintergrund ist insbesondere die Bildung von Fachklassen für bestimmte Ausbildungsberufe. Nicht jede Berufsschule bietet jeden Ausbildungsberuf an.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Schulbezirk und Zuständigkeit",explanation:`Kurz für die Prüfung:

Nein. Die Berufsschule ist grundsätzlich durch Ausbildungsberuf und Schulbezirk bzw. zuständige Zuweisung vorgegeben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"}]}],answer:`Berufsschule → grundsätzlich keine freie Wahl

Nein.

Nach dem Lösungskatalog wird die zuständige Berufsschule grundsätzlich zugewiesen.

Hintergrund ist insbesondere die Bildung von Fachklassen für bestimmte Ausbildungsberufe. Nicht jede Berufsschule bietet jeden Ausbildungsberuf an.

Kurz für die Prüfung:

Nein. Die Berufsschule ist grundsätzlich durch Ausbildungsberuf und Schulbezirk bzw. zuständige Zuweisung vorgegeben.`},{id:"schulorganisation-56",document:"Schulorganisation",page:15,question:"Warum spricht man von einer gemeinsamen Abschlussprüfung? Wer führt sie mit wem durch?",answerSections:[{title:"Gemeinsame Abschlussprüfung",items:[{term:"Verzahnung von Schule und Kammer",explanation:`Gemeinsame Abschlussprüfung → Schule + Kammer verzahnt

Es soll vermieden werden, dass Auszubildende dieselben Inhalte zweimal prüfen müssen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=15",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 15"},{term:"Gemeinsame schriftliche Prüfung",explanation:`Laut Sitzung 2 werden der

schriftliche Teil der Kammerprüfung

und der schriftliche Teil der Berufsschulabschlussprüfung

an der Berufsschule durchgeführt und korrigiert.

Dadurch entsteht keine Doppelprüfung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=15",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 15"},{term:"Zwei getrennte Abschlüsse",explanation:`Am Ende stehen trotzdem zwei unterschiedliche Abschlüsse:

Berufsschule → Berufsschulabschlusszeugnis

Kammer → Gesellen-, Gehilfen- oder Facharbeiterbrief

Die Präsentation fasst das entsprechend als „Berufsschulabschlusszeugnis und Gesellen-, Gehilfen- oder Facharbeiterbrief (gemeinsame Abschlussprüfung)“ zusammen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=15",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 15"}]}],answer:`Gemeinsame Abschlussprüfung → Schule + Kammer verzahnt

Es soll vermieden werden, dass Auszubildende dieselben Inhalte zweimal prüfen müssen.

Laut Sitzung 2 werden der

schriftliche Teil der Kammerprüfung

und der schriftliche Teil der Berufsschulabschlussprüfung

an der Berufsschule durchgeführt und korrigiert.

Dadurch entsteht keine Doppelprüfung.

Am Ende stehen trotzdem zwei unterschiedliche Abschlüsse:

Berufsschule → Berufsschulabschlusszeugnis

Kammer → Gesellen-, Gehilfen- oder Facharbeiterbrief

Die Präsentation fasst das entsprechend als „Berufsschulabschlusszeugnis und Gesellen-, Gehilfen- oder Facharbeiterbrief (gemeinsame Abschlussprüfung)“ zusammen.`}]},{title:"Lernfelder und zusätzliche Abschlüsse",sources:[{document:"Schulorganisation",pages:"14",page:14}],questions:[{id:"schulorganisation-53",document:"Schulorganisation",page:14,question:"Was kennzeichnet das Lernfeldkonzept?",answerSections:[{title:"Lernfeldkonzept",items:[{term:"Berufliche Handlungen",explanation:`Lernfeld → berufliche Handlung statt klassisches Fach

Zentrales Merkmal ist die Handlungsorientierung.

Lernfelder orientieren sich an realen beruflichen Handlungsabläufen und nicht primär an der traditionellen Fächersystematik.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Handlungskompetenz und Prozessorientierung",explanation:`Die Präsentation nennt:

Handlungsorientierung als didaktisches Prinzip,

Förderung beruflicher Handlungskompetenz,

Prozessorientierung,

Bezug zur beruflichen Realität,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Kompetenzen statt isolierter Fächer",explanation:`Vermittlung von Kompetenzen,

Auflösung der klassischen Fächersystematik,

ganzheitlich-handlungsorientierte Ausrichtung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Beispiel: integriertes Fachrechnen",explanation:`Beispiel:

Fachrechnen wird nicht unbedingt isoliert als eigenes Fach behandelt, sondern dort integriert, wo die mathematische Kompetenz für eine konkrete berufliche Handlung benötigt wird.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Grundprinzip",explanation:`Merksatz:

Lernfelder orientieren sich an beruflichen Handlungen, nicht an klassischen Schulfächern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"}]}],answer:`Lernfeld → berufliche Handlung statt klassisches Fach

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

Lernfelder orientieren sich an beruflichen Handlungen, nicht an klassischen Schulfächern.`},{id:"schulorganisation-54",document:"Schulorganisation",page:14,question:"Aus welchen Gründen wurde das Lernfeldkonzept in den Berufsschulen eingeführt?",answerSections:[{title:"Gründe für das Lernfeldkonzept",items:[{term:"Praxisnähe und Ganzheitlichkeit",explanation:`Lernfeldkonzept → näher an der beruflichen Realität

Laut Lösungskatalog wurde es eingeführt, um eine

praxisnahe,

handlungsorientierte,

kompetenzorientierte und

ganzheitliche

berufliche Bildung zu ermöglichen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Berufliche Flexibilität",explanation:`Die Präsentation ergänzt einen wichtigen Punkt:

Die Orientierung an beruflichen Prozessen soll auch die berufliche Flexibilität fördern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Selbstständige Bewältigung komplexer Aufgaben",explanation:"Es geht also nicht nur darum, Faktenwissen zu vermitteln, sondern Schülerinnen und Schüler dazu zu befähigen, komplexe berufliche Situationen selbstständig zu bewältigen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"}]}],answer:`Lernfeldkonzept → näher an der beruflichen Realität

Laut Lösungskatalog wurde es eingeführt, um eine

praxisnahe,

handlungsorientierte,

kompetenzorientierte und

ganzheitliche

berufliche Bildung zu ermöglichen.

Die Präsentation ergänzt einen wichtigen Punkt:

Die Orientierung an beruflichen Prozessen soll auch die berufliche Flexibilität fördern.

Es geht also nicht nur darum, Faktenwissen zu vermitteln, sondern Schülerinnen und Schüler dazu zu befähigen, komplexe berufliche Situationen selbstständig zu bewältigen.`},{id:"schulorganisation-55",document:"Schulorganisation",page:14,question:"Was versteht man unter dem „9 + 3“-Modell?",answerSections:[{title:"Modell „9 + 3“",items:[{term:"Schule und Berufsausbildung",explanation:`9 + 3 → Hauptschule + Berufsausbildung = mittlerer Bildungsabschluss

Nach den Unterlagen ermöglicht das 9+3-Modell den Erwerb eines dem Realschulabschluss gleichwertigen mittleren Bildungsabschlusses nach:

9 Jahren Schule + 3-jähriger Berufsausbildung`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Mittlerer Bildungsabschluss",explanation:`Wichtig ist also:

Durch die erfolgreiche Berufsausbildung kann ein höherer allgemeinbildender Abschluss erreicht bzw. anerkannt werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Bildungslaufbahn",explanation:`Merksatz:

9 Jahre Schule + 3 Jahre Ausbildung → mittlerer Bildungsabschluss`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"}]}],answer:`9 + 3 → Hauptschule + Berufsausbildung = mittlerer Bildungsabschluss

Nach den Unterlagen ermöglicht das 9+3-Modell den Erwerb eines dem Realschulabschluss gleichwertigen mittleren Bildungsabschlusses nach:

9 Jahren Schule + 3-jähriger Berufsausbildung

Wichtig ist also:

Durch die erfolgreiche Berufsausbildung kann ein höherer allgemeinbildender Abschluss erreicht bzw. anerkannt werden.

Merksatz:

9 Jahre Schule + 3 Jahre Ausbildung → mittlerer Bildungsabschluss`}]},{title:"Ausbildungsvorbereitung und Berufsfachschulen",sources:[{document:"Schulorganisation",pages:"6",page:6},{document:"Schulorganisation",pages:"13-14",page:13},{document:"Schulorganisation",pages:"16",page:16}],questions:[{id:"schulorganisation-19",document:"Schulorganisation",page:6,question:"Welche Bildungswege stehen einem 16-jährigen Schüler ohne Abschluss offen? Welcher Pflicht unterliegt er?",answerSections:[{title:"Bildungswege ohne Abschluss",items:[{term:"Beruflicher Übergangsbereich",explanation:`Kein Abschluss →

berufliche Schule / Übergangsbereich`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"AV und AVdual",explanation:"Mögliche Angebote sind insbesondere AV bzw. AVdual.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Orientierung und Ausbildungsvorbereitung",explanation:`Ziel ist:

berufliche Orientierung,

Verbesserung der Basiskompetenzen,

Vorbereitung auf Ausbildung,

ggf. Erwerb eines dem Hauptschulabschluss gleichwertigen Bildungsstandes.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Anschluss und fortbestehende Schulpflicht",explanation:`Die beruflichen Schulen halten diese Angebote gerade für Jugendliche bereit, denen nach der

allgemeinen Schulpflicht der direkte Übergang in eine Ausbildung nicht gelungen ist.

Der Jugendliche kann daher nicht einfach zu Hause bleiben, wenn noch Berufsschulpflicht besteht.

Frage: Es geht darum, dass nach der Hauptschule ohne Abschluss nicht einfach zuhause bleiben kann.

Daher berufsschulpflicht. Ist nur bis 18?`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"}]}],answer:`Kein Abschluss →

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

Daher berufsschulpflicht. Ist nur bis 18?`},{id:"schulorganisation-50",document:"Schulorganisation",page:13,question:"Welche Schulart muss ein Schüler ohne Hauptschulabschluss und ohne Lehrvertrag besuchen, um die Berufsschulpflicht zu erfüllen?",answerSections:[{title:"Ohne Hauptschulabschluss und Ausbildung",items:[{term:"AV und AVdual",explanation:`Ohne Hauptschulabschluss + ohne Ausbildung → AV/AVdual

Laut Sitzung 2:

AV bzw. AVdual`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Ausbildungsvorbereitung",explanation:"AV steht für Ausbildungsvorbereitung.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Ziele und möglicher Abschluss",explanation:`Ziel ist insbesondere:

berufliche Orientierung,

Verbesserung von Basiskompetenzen,

Vorbereitung auf Ausbildung,

ggf. Erwerb eines dem Hauptschulabschluss entsprechenden Bildungsstands.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"}]}],answer:`Ohne Hauptschulabschluss + ohne Ausbildung → AV/AVdual

Laut Sitzung 2:

AV bzw. AVdual

AV steht für Ausbildungsvorbereitung.

Ziel ist insbesondere:

berufliche Orientierung,

Verbesserung von Basiskompetenzen,

Vorbereitung auf Ausbildung,

ggf. Erwerb eines dem Hauptschulabschluss entsprechenden Bildungsstands.`},{id:"schulorganisation-51",document:"Schulorganisation",page:13,question:"Welche Schulart muss ein Schüler mit Hauptschulabschluss und ohne Lehrvertrag besuchen, um die Berufsschulpflicht zu erfüllen?",answerSections:[{title:"Hauptschulabschluss ohne Ausbildung",items:[{term:"2BFS oder AV/AVdual",explanation:`Hauptschulabschluss + keine Ausbildung → 2BFS oder AV/AVdual

Laut Lösungskatalog:

zweijährige Berufsfachschule (2BFS) oder

AV/AVdual.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"},{term:"Fachschulreife als weiterer Abschluss",explanation:"Die 2BFS hat zusätzlich den Vorteil, dass dort die Fachschulreife und damit ein mittlerer Bildungsabschluss erworben werden kann.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=13",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 13"}]}],answer:`Hauptschulabschluss + keine Ausbildung → 2BFS oder AV/AVdual

Laut Lösungskatalog:

zweijährige Berufsfachschule (2BFS) oder

AV/AVdual.

Die 2BFS hat zusätzlich den Vorteil, dass dort die Fachschulreife und damit ein mittlerer Bildungsabschluss erworben werden kann.`},{id:"schulorganisation-52",document:"Schulorganisation",page:14,question:"Welche Schulart muss ein Schüler mit mittlerem Bildungsabschluss und ohne Lehrvertrag besuchen, um die Berufsschulpflicht zu erfüllen?",answerSections:[{title:"Mittlerer Abschluss ohne Ausbildung",items:[{term:"Berufskolleg oder Berufliches Gymnasium",explanation:`Mittlerer Bildungsabschluss → BK oder Berufliches Gymnasium

Der Fragenkatalog nennt:

Berufskolleg

oder Berufliches Gymnasium.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"},{term:"Höherer Bildungsabschluss",explanation:"Damit kann gleichzeitig ein höherer Bildungsabschluss angestrebt werden.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=14",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 14"}]}],answer:`Mittlerer Bildungsabschluss → BK oder Berufliches Gymnasium

Der Fragenkatalog nennt:

Berufskolleg

oder Berufliches Gymnasium.

Damit kann gleichzeitig ein höherer Bildungsabschluss angestrebt werden.`},{id:"schulorganisation-57",document:"Schulorganisation",page:16,question:"Wie unterscheiden sich 1-, 2- und 3-jährige Berufsfachschulen?",answerSections:[{title:"Berufsfachschulen im Vergleich",items:[{term:"1BFS · berufliche Grundbildung",explanation:`1BFS → berufliche Grundbildung

Die einjährige Berufsfachschule vermittelt eine berufliche Grundbildung, die dem 1. Ausbildungsjahr entsprechen kann. Alternativ kann sie zu einer Ausbildung in einem Helferberuf führen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"2BFS · Grundbildung und Fachschulreife",explanation:`2BFS → berufliche Grundbildung + Fachschulreife

Die zweijährige Berufsfachschule vermittelt berufliche Grundbildung und führt zur Fachschulreife, also zu einem mittleren Bildungsabschluss. Daneben gibt es laut Unterlage auch 2-jährige Berufsfachschulen mit beruflicher Vollausbildung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"3BFS · berufliche Vollausbildung",explanation:`3BFS → berufliche Vollausbildung

Die dreijährige Berufsfachschule führt zu einer beruflichen Vollausbildung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Unterschiede",explanation:`Merksatz:

1BFS → Grundbildung

2BFS → Grundbildung + mittlerer Bildungsabschluss

3BFS → Vollausbildung`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"}]}],answer:`1BFS → berufliche Grundbildung

Die einjährige Berufsfachschule vermittelt eine berufliche Grundbildung, die dem 1. Ausbildungsjahr entsprechen kann. Alternativ kann sie zu einer Ausbildung in einem Helferberuf führen.

2BFS → berufliche Grundbildung + Fachschulreife

Die zweijährige Berufsfachschule vermittelt berufliche Grundbildung und führt zur Fachschulreife, also zu einem mittleren Bildungsabschluss. Daneben gibt es laut Unterlage auch 2-jährige Berufsfachschulen mit beruflicher Vollausbildung.

3BFS → berufliche Vollausbildung

Die dreijährige Berufsfachschule führt zu einer beruflichen Vollausbildung.

Merksatz:

1BFS → Grundbildung

2BFS → Grundbildung + mittlerer Bildungsabschluss

3BFS → Vollausbildung`},{id:"schulorganisation-58",document:"Schulorganisation",page:16,question:"Wie lautet die Probezeitregelung in der 2BFS?",answerSections:[{title:"Probezeit in der 2BFS",items:[{term:"Erstes Schulhalbjahr",explanation:`2BFS → erstes Halbjahr ist Probezeit

Die Aufnahme in die 2BFS erfolgt grundsätzlich zunächst auf Probe.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Halbjahreszeugnis",explanation:"Die Probezeit umfasst das erste Schulhalbjahr. Dieses endet mit einem Halbjahreszeugnis – ausdrücklich nicht nur mit einer Halbjahresinformation.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Entscheidung der Klassenkonferenz",explanation:"Auf Grundlage der Noten in diesem Zeugnis entscheidet die Klassenkonferenz, ob die Probezeit bestanden wurde.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"}]}],answer:`2BFS → erstes Halbjahr ist Probezeit

Die Aufnahme in die 2BFS erfolgt grundsätzlich zunächst auf Probe.

Die Probezeit umfasst das erste Schulhalbjahr. Dieses endet mit einem Halbjahreszeugnis – ausdrücklich nicht nur mit einer Halbjahresinformation.

Auf Grundlage der Noten in diesem Zeugnis entscheidet die Klassenkonferenz, ob die Probezeit bestanden wurde.`},{id:"schulorganisation-59",document:"Schulorganisation",page:16,question:"Was passiert bei Nichtbestehen?",answerSections:[{title:"Nichtbestehen der 2BFS-Probezeit",items:[{term:"Grundsatz: Bildungsgang verlassen",explanation:`Grundsätzlich:

Probezeit nicht bestanden → Bildungsgang muss verlassen werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Weiterbesuch auf Wunsch",explanation:`Es gibt aber eine wichtige Besonderheit:

Der Schüler kann auf eigenen Wunsch bis zum Ende des Schuljahres mit allen Rechten und Pflichten weiter am Unterricht teilnehmen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Entscheidung am Schuljahresende",explanation:"Am Ende des zweiten Halbjahres kann die Klassenkonferenz dann doch noch entscheiden, dass der Schüler im Bildungsgang verbleiben darf.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Erneute Anmeldung",explanation:"Außerdem ist eine erneute Anmeldung – sogar an derselben 2BFS – möglich. Allerdings werden bei der Aufnahme zunächst andere Bewerber bevorzugt.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Zusammenhang",explanation:`Merksatz:

2BFS-Probezeit → 1. Halbjahr; Klassenkonferenz entscheidet. Nicht bestanden = grundsätzlich raus, Weiterbesuch bis Schuljahresende aber auf Wunsch möglich.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"}]}],answer:`Grundsätzlich:

Probezeit nicht bestanden → Bildungsgang muss verlassen werden.

Es gibt aber eine wichtige Besonderheit:

Der Schüler kann auf eigenen Wunsch bis zum Ende des Schuljahres mit allen Rechten und Pflichten weiter am Unterricht teilnehmen.

Am Ende des zweiten Halbjahres kann die Klassenkonferenz dann doch noch entscheiden, dass der Schüler im Bildungsgang verbleiben darf.

Außerdem ist eine erneute Anmeldung – sogar an derselben 2BFS – möglich. Allerdings werden bei der Aufnahme zunächst andere Bewerber bevorzugt.

Merksatz:

2BFS-Probezeit → 1. Halbjahr; Klassenkonferenz entscheidet. Nicht bestanden = grundsätzlich raus, Weiterbesuch bis Schuljahresende aber auf Wunsch möglich.`,context:"Probezeit in der zweijährigen Berufsfachschule (2BFS)."}]}]},{id:"cluster-11",title:"Berufliche Vollzeitschulen und Wege zur Hochschulreife",topics:[{title:"Berufskolleg I und II",sources:[{document:"Schulorganisation",pages:"16-18",page:16},{document:"Schulorganisation",pages:"28",page:28}],questions:[{id:"schulorganisation-60",document:"Schulorganisation",page:16,question:"Welche Zielsetzungen verfolgen Berufskollegs?",answerSections:[{title:"Ziele der Berufskollegs",items:[{term:"Allgemeinbildung und berufliche Qualifikation",explanation:`Berufskolleg → berufliche Qualifikation + höhere Allgemeinbildung

Die Berufskollegs verbinden eine vertiefte allgemeine Bildung mit einer beruflichen Qualifizierung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Berufliche Tätigkeit und Zusatzqualifikationen",explanation:`Je nach Berufskolleg können sie auf:

eine berufliche Tätigkeit,

einen Berufsabschluss bzw. eine Zusatzqualifikation,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Fachhochschulreife",explanation:`die Fachhochschulreife

vorbereiten.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"},{term:"Berufs- und Studienqualifizierung",explanation:`Ein wichtiges Merkmal ist damit die Verbindung von allgemeiner und beruflicher Bildung.

Die Unterlagen ordnen die Berufskollegs entsprechend den berufs- und studienqualifizierenden beruflichen Vollzeitschulen zu.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=16",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 16"}]}],answer:`Berufskolleg → berufliche Qualifikation + höhere Allgemeinbildung

Die Berufskollegs verbinden eine vertiefte allgemeine Bildung mit einer beruflichen Qualifizierung.

Je nach Berufskolleg können sie auf:

eine berufliche Tätigkeit,

einen Berufsabschluss bzw. eine Zusatzqualifikation,

die Fachhochschulreife

vorbereiten.

Ein wichtiges Merkmal ist damit die Verbindung von allgemeiner und beruflicher Bildung.

Die Unterlagen ordnen die Berufskollegs entsprechend den berufs- und studienqualifizierenden beruflichen Vollzeitschulen zu.`},{id:"schulorganisation-61",document:"Schulorganisation",page:17,question:"Welche Zugangsvoraussetzungen gelten in der Regel für die Berufskollegs I? Warum gibt es keine Notenvorgaben, aber dann für die Aufnahme ins BK II?",answerSections:[{title:"Aufnahme in BK I und BK II",items:[{term:"BK I · mittlerer Bildungsabschluss",explanation:`BK I → mittlerer Bildungsabschluss

Grundvoraussetzung für das BK I ist in der Regel ein mittlerer Bildungsabschluss.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Keine grundsätzliche Mindestnote im BK I",explanation:"Eine bestimmte Mindestnote ist für die Aufnahme ins BK I grundsätzlich nicht erforderlich.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"BK II · Leistungsanforderungen",explanation:`Der entscheidende Unterschied kommt beim Übergang ins BK II:

Dort wird ein bestimmter Leistungsstand verlangt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Auswahl- und Orientierungsfunktion",explanation:`Warum?

Das BK I hat damit auch eine Auswahl- bzw. Orientierungsfunktion: Erst die Leistungen im BK I zeigen, ob die Voraussetzungen für den anspruchsvolleren weiterführenden Bildungsgang des BK II erfüllt sind.

Merksatz:

BK I → mittlerer Abschluss reicht.

BK II → Leistung im BK I entscheidet.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"}]}],answer:`BK I → mittlerer Bildungsabschluss

Grundvoraussetzung für das BK I ist in der Regel ein mittlerer Bildungsabschluss.

Eine bestimmte Mindestnote ist für die Aufnahme ins BK I grundsätzlich nicht erforderlich.

Der entscheidende Unterschied kommt beim Übergang ins BK II:

Dort wird ein bestimmter Leistungsstand verlangt.

Warum?

Das BK I hat damit auch eine Auswahl- bzw. Orientierungsfunktion: Erst die Leistungen im BK I zeigen, ob die Voraussetzungen für den anspruchsvolleren weiterführenden Bildungsgang des BK II erfüllt sind.

Merksatz:

BK I → mittlerer Abschluss reicht.

BK II → Leistung im BK I entscheidet.`},{id:"schulorganisation-62",document:"Schulorganisation",page:17,question:"Erklären Sie die Unterschiede zwischen einer Junior- und einer Übungsfirma.",answerSections:[{title:"Juniorfirma und Übungsfirma",items:[{term:"Juniorfirma · realer Markt",explanation:`Juniorfirma → reale wirtschaftliche Tätigkeit

Eine Juniorfirma ist ein von Schülerinnen und Schülern geführtes Unternehmen, das real am Markt tätig ist.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Produkte, Kunden und Geldverkehr",explanation:`Es gibt also beispielsweise:

echte Produkte bzw. Dienstleistungen,

echte Kunden,

echte Einnahmen und Ausgaben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Übungsfirma · Simulation",explanation:`Übungsfirma → simulierte wirtschaftliche Tätigkeit

Eine Übungsfirma bildet betriebliche Abläufe lediglich realitätsnah nach.

Geschäftsvorgänge werden simuliert; es findet aber kein echter Waren- bzw. Geldverkehr wie bei einem realen Unternehmen statt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Schülerleitung",explanation:`Die Unterlagen nennen für die Juniorfirma außerdem ausdrücklich:

Schüler bzw. auch Auszubildende als Zielgruppe und dauerhafte Tätigkeit unter Schülerleitung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Abgrenzung",explanation:`Merksatz:

Juniorfirma → echtes Geschäft

Übungsfirma → Geschäft wird simuliert`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"}]}],answer:`Juniorfirma → reale wirtschaftliche Tätigkeit

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

Übungsfirma → Geschäft wird simuliert`},{id:"schulorganisation-63",document:"Schulorganisation",page:17,question:"Was könnten problematische Aspekte beim BK I sein?",answerSections:[{title:"Problematische Aspekte des BK I",items:[{term:"Nichtbestehen der Probezeit",explanation:`BK I → geringe unmittelbare Konsequenz beim Nichtbestehen der Probezeit

Die Sitzung hebt hier speziell die Probezeitregelung als problematischen Aspekt hervor.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Weiterbesuch auf Antrag",explanation:`Wenn ein Schüler die Probezeit im BK I nicht besteht, hat dies nicht unbedingt eine unmittelbare Konsequenz:

Der Schüler kann einen Antrag stellen, die Schule trotzdem bis zum Ende des Schuljahres weiter zu besuchen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Berufsschulpflicht und Eignung",explanation:`Das hängt insbesondere mit der noch bestehenden Berufsschulpflicht zusammen.

Das kann problematisch sein, weil Schüler damit trotz festgestellter mangelnder Eignung für den Bildungsgang zunächst weiter im BK I bleiben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"},{term:"Zusammenfassung der Unterlagen",explanation:`Prüfungstauglich:

Ein Problem des BK I ist, dass das Nichtbestehen der Probezeit nicht zwingend zum sofortigen Verlassen führt. Bei bestehender Berufsschulpflicht kann der Schüler auf Antrag bis zum Schuljahresende weiter am Unterricht teilnehmen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=17",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 17"}]}],answer:`BK I → geringe unmittelbare Konsequenz beim Nichtbestehen der Probezeit

Die Sitzung hebt hier speziell die Probezeitregelung als problematischen Aspekt hervor.

Wenn ein Schüler die Probezeit im BK I nicht besteht, hat dies nicht unbedingt eine unmittelbare Konsequenz:

Der Schüler kann einen Antrag stellen, die Schule trotzdem bis zum Ende des Schuljahres weiter zu besuchen.

Das hängt insbesondere mit der noch bestehenden Berufsschulpflicht zusammen.

Das kann problematisch sein, weil Schüler damit trotz festgestellter mangelnder Eignung für den Bildungsgang zunächst weiter im BK I bleiben.

Prüfungstauglich:

Ein Problem des BK I ist, dass das Nichtbestehen der Probezeit nicht zwingend zum sofortigen Verlassen führt. Bei bestehender Berufsschulpflicht kann der Schüler auf Antrag bis zum Schuljahresende weiter am Unterricht teilnehmen.`},{id:"schulorganisation-64",document:"Schulorganisation",page:18,question:"Wie lautet die Probezeitregelung im BK I, wie im BK II?",answerSections:[{title:"Probezeit in BK I und BK II",items:[{term:"BK I · Weiterbesuch möglich",explanation:`Hier ist der Unterschied wichtig.

BK I

BK I → Nichtbestehen bedeutet nicht zwingend sofortiges Ausscheiden

Alle Schülerinnen und Schüler werden zunächst auf Probe aufgenommen.

Die Probezeit umfasst das erste Halbjahr.

Wird sie nicht bestanden, kann der Schüler auf Antrag die Schule bis zum Ende des Schuljahres weiter besuchen. Die Unterlage begründet dies mit der Erfüllung der Berufsschulpflicht.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"BK II · Ausscheiden",explanation:`BK II

BK II → Nichtbestehen bedeutet Ausscheiden

Auch hier werden zunächst alle Schüler auf Probe aufgenommen.

Aber:

Wird die Probezeit nicht bestanden, muss der Schüler die Schule verlassen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Unterschied",explanation:`Wichtigster Unterschied

BK I → Weiterbesuch trotz nicht bestandener Probezeit möglich.

BK II → nicht bestanden = Schule verlassen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"}]}],answer:`Hier ist der Unterschied wichtig.

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

BK II → nicht bestanden = Schule verlassen.`},{id:"schulorganisation-65",document:"Schulorganisation",page:18,question:"Welche Aufnahmebedingungen gelten für das BK II?",answerSections:[{title:"Aufnahme ins BK II",items:[{term:"BK-I-Abschluss",explanation:`BK II → BK-I-Abschluss + Schnitt 3,0

Erforderlich ist ein Abschlusszeugnis des Berufskollegs I.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Maßgebliche Fächer und Schnitt 3,0",explanation:`In den maßgeblichen Fächern

Deutsch,

Englisch,

Mathematik,

Profilfach

muss ein Durchschnitt von mindestens 3,0 erreicht werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Freie Plätze · bis 3,25",explanation:"Bei freien Schulplätzen ist laut Sitzungsunterlage eine Aufnahme bis zu einem Durchschnitt von 3,25 möglich.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Notenanforderungen",explanation:`Merksatz:

BK II → D + E + M + Profilfach ≤ 3,0; bei freien Plätzen bis 3,25.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"}]}],answer:`BK II → BK-I-Abschluss + Schnitt 3,0

Erforderlich ist ein Abschlusszeugnis des Berufskollegs I.

In den maßgeblichen Fächern

Deutsch,

Englisch,

Mathematik,

Profilfach

muss ein Durchschnitt von mindestens 3,0 erreicht werden.

Bei freien Schulplätzen ist laut Sitzungsunterlage eine Aufnahme bis zu einem Durchschnitt von 3,25 möglich.

Merksatz:

BK II → D + E + M + Profilfach ≤ 3,0; bei freien Plätzen bis 3,25.`},{id:"schulorganisation-66",document:"Schulorganisation",page:18,question:"Welche Abschlüsse sind im BK II möglich und wann werden diese Abschlüsse bundesweit anerkannt?",answerSections:[{title:"Abschlüsse im BK II",items:[{term:"Fachhochschulreife",explanation:`BK II → Fachhochschulreife

Zentraler Abschluss ist die:

Fachhochschulreife (FHR)`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Zusatzqualifikationen",explanation:"Daneben können je nach Bildungsgang Zusatzqualifikationen erworben werden.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Schulischer und praktischer Teil",explanation:`Für die bundesweite Anerkennung der Fachhochschulreife müssen laut Unterlage

schulischer + praktischer Teil

erfüllt sein.

Merksatz:

FHR = schulischer Teil + praktischer Teil → bundesweit anerkannt`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"}]}],answer:`BK II → Fachhochschulreife

Zentraler Abschluss ist die:

Fachhochschulreife (FHR)

Daneben können je nach Bildungsgang Zusatzqualifikationen erworben werden.

Für die bundesweite Anerkennung der Fachhochschulreife müssen laut Unterlage

schulischer + praktischer Teil

erfüllt sein.

Merksatz:

FHR = schulischer Teil + praktischer Teil → bundesweit anerkannt`}]},{title:"1BKFH und Berufsoberschule",sources:[{document:"Schulorganisation",pages:"18-19",page:18}],questions:[{id:"schulorganisation-67",document:"Schulorganisation",page:18,question:"Wie lauten die Aufnahmevoraussetzungen für das 1BKFH?",answerSections:[{title:"Aufnahme ins 1BKFH",items:[{term:"Mittlerer Abschluss und berufliche Vorbildung",explanation:`1BKFH → mittlerer Bildungsabschluss + Beruf

Das einjährige Berufskolleg zum Erwerb der Fachhochschulreife (1BKFH) setzt zwei Dinge voraus:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Mittlerer Bildungsabschluss",explanation:`mittlerer Bildungsabschluss

und`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Zweijährige Ausbildung oder fünf Jahre Berufserfahrung",explanation:`entweder eine abgeschlossene Berufsausbildung von mindestens zwei Jahren

oder

mindestens fünf Jahre Berufserfahrung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"},{term:"Ziel: Fachhochschulreife",explanation:`Das Ziel ist dann der Erwerb der Fachhochschulreife.

Merksatz:

1BKFH → mittlere Reife + mindestens 2-jährige Ausbildung / 5 Jahre Berufserfahrung → FHR`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=18",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 18"}]}],answer:`1BKFH → mittlerer Bildungsabschluss + Beruf

Das einjährige Berufskolleg zum Erwerb der Fachhochschulreife (1BKFH) setzt zwei Dinge voraus:

mittlerer Bildungsabschluss

und

entweder eine abgeschlossene Berufsausbildung von mindestens zwei Jahren

oder

mindestens fünf Jahre Berufserfahrung.

Das Ziel ist dann der Erwerb der Fachhochschulreife.

Merksatz:

1BKFH → mittlere Reife + mindestens 2-jährige Ausbildung / 5 Jahre Berufserfahrung → FHR`},{id:"schulorganisation-68",document:"Schulorganisation",page:19,question:"Welche Zugangsvoraussetzungen gelten für die Oberstufe der Berufsoberschulen?",answerSections:[{title:"Aufnahme in die BOS",items:[{term:"Mittlerer Abschluss und berufliche Vorbildung",explanation:`BOS → mittlere Reife + Beruf

Die Sitzungsantwort nennt als Voraussetzungen:

einschlägige Berufsausbildung oder

fünf Jahre Berufserfahrung

und

mittlerer Bildungsabschluss.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Anerkannte mittlere Abschlüsse",explanation:`Die in den Unterlagen enthaltene ausführlichere Darstellung konkretisiert den mittleren Bildungsabschluss:

Möglich sind beispielsweise

Realschulabschluss,

Fachschulreife,

Werkrealschulabschluss,

entsprechende Versetzungszeugnisse aus dem Gymnasium bzw. der Gemeinschaftsschule.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Notenanforderungen",explanation:"Dabei wird dort grundsätzlich ein Durchschnitt von mindestens 3,0 aus Deutsch, Englisch, Mathematik und einem naturwissenschaftlichen Fach verlangt; keines dieser Fächer darf schlechter als „ausreichend“ sein.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Voraussetzungen im Überblick",explanation:`Für die mündliche Prüfung zuerst kurz:

Für die BOS brauche ich grundsätzlich einen mittleren Bildungsabschluss und eine abgeschlossene einschlägige Berufsausbildung bzw. entsprechende Berufserfahrung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"}]}],answer:`BOS → mittlere Reife + Beruf

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

Für die BOS brauche ich grundsätzlich einen mittleren Bildungsabschluss und eine abgeschlossene einschlägige Berufsausbildung bzw. entsprechende Berufserfahrung.`},{id:"schulorganisation-70",document:"Schulorganisation",page:19,question:"Wie kann ein erfolgreicher BK-II-Schüler in die Berufsoberschule wechseln?",answerSections:[{title:"Vom BK II in die BOS",items:[{term:"Grundsätzlicher Zugang",explanation:`Die Kurzlösung in Sitzung 3 lautet:

Erfolgreicher Abschluss BK II (FHR)

ggf. berufliche Praxis/Ausbildung

→ Zugang zur BOS möglich.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Direkteinstieg ins zweite BOS-Jahr",explanation:`Die ausführlicheren Unterlagen machen daraus einen besonders interessanten Weg:

Gute FHR + berufliche Qualifikation → direkter Einstieg ins 2. Jahr der BOS möglich

Besonders qualifizierte Bewerber mit Fachhochschulreife und beruflicher Qualifikation können in freie Plätze im zweiten Jahr der BOS aufgenommen werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Noten und Beratungsgespräch",explanation:`Voraussetzungen laut Unterlage:

Fachhochschulreife mit einem Durchschnitt der maßgebenden Fächer von mindestens 2,5,

Deutsch, Englisch, Mathematik und berufliches Schwerpunktfach jeweils besser als „ausreichend“,

verpflichtendes Beratungsgespräch.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Sonderfall im Überblick",explanation:`Das ist für die Prüfung der interessantere Sonderfall:

Gute FHR + berufliche Qualifikation → unter bestimmten Voraussetzungen direkter Einstieg in Klasse 2 der BOS.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"}]}],answer:`Die Kurzlösung in Sitzung 3 lautet:

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

Gute FHR + berufliche Qualifikation → unter bestimmten Voraussetzungen direkter Einstieg in Klasse 2 der BOS.`}]},{title:"Berufliches Gymnasium: Zugang",sources:[{document:"Schulorganisation",pages:"20-22",page:20}],questions:[{id:"schulorganisation-71",document:"Schulorganisation",page:20,question:"Welche Mindestvoraussetzungen brauchen Realschüler, Werkrealschüler oder Schüler einer Gemeinschaftsschule zum Besuch des Beruflichen Gymnasiums?",answerSections:[{title:"Aufnahme ins Berufliche Gymnasium",items:[{term:"Mittlerer Bildungsabschluss",explanation:`Mittlerer Bildungsabschluss + Schnitt 3,0

Für die Aufnahme in das dreijährige Berufliche Gymnasium (3BG) braucht man grundsätzlich einen mittleren Bildungsabschluss.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Schnitt 3,0 und Mindestnoten",explanation:`Bei Realschule/Werkrealschule/Gemeinschaftsschule gilt:

Durchschnitt aus Deutsch, Mathematik und erster Pflichtfremdsprache mindestens 3,0

keines dieser drei Fächer schlechter als „ausreichend“ (4).`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Maßgebliche Fächer",explanation:`Merksatz:

3BG → D + M + E/Fremdsprache ≤ 3,0 und keines schlechter als 4.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"}]}],answer:`Mittlerer Bildungsabschluss + Schnitt 3,0

Für die Aufnahme in das dreijährige Berufliche Gymnasium (3BG) braucht man grundsätzlich einen mittleren Bildungsabschluss.

Bei Realschule/Werkrealschule/Gemeinschaftsschule gilt:

Durchschnitt aus Deutsch, Mathematik und erster Pflichtfremdsprache mindestens 3,0

keines dieser drei Fächer schlechter als „ausreichend“ (4).

Merksatz:

3BG → D + M + E/Fremdsprache ≤ 3,0 und keines schlechter als 4.`},{id:"schulorganisation-72",document:"Schulorganisation",page:20,question:"Wie sind diese Voraussetzungen für Schüler der allgemeinbildenden Gymnasien?",answerSections:[{title:"Wechsel vom allgemeinbildenden Gymnasium",items:[{term:"Versetzungszeugnis",explanation:`Gymnasium → Versetzung reicht

Für Schülerinnen und Schüler eines allgemeinbildenden Gymnasiums ist grundsätzlich das entsprechende Versetzungszeugnis entscheidend.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Wechselzeitpunkte",explanation:`Die Unterlagen zum Beruflichen Gymnasium nennen als Zugang:

Versetzungszeugnis am Ende der Klasse 9 oder 10 eines achtjährigen Gymnasiums,

bzw. Versetzungszeugnis am Ende der Klasse 10 eines Gymnasiums.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Abgrenzung zur Realschule",explanation:`Merksatz:

Realschule → Notenschnitt

Gymnasium → Versetzung`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"}]}],answer:`Gymnasium → Versetzung reicht

Für Schülerinnen und Schüler eines allgemeinbildenden Gymnasiums ist grundsätzlich das entsprechende Versetzungszeugnis entscheidend.

Die Unterlagen zum Beruflichen Gymnasium nennen als Zugang:

Versetzungszeugnis am Ende der Klasse 9 oder 10 eines achtjährigen Gymnasiums,

bzw. Versetzungszeugnis am Ende der Klasse 10 eines Gymnasiums.

Merksatz:

Realschule → Notenschnitt

Gymnasium → Versetzung`},{id:"schulorganisation-73",document:"Schulorganisation",page:20,question:"Aus welchem Grund sind die Zugangsvoraussetzungen für Gymnasiasten nicht dieselben wie für Realschüler?",answerSections:[{title:"Unterschiedliche Zugangsvoraussetzungen",items:[{term:"Eignungsnachweis durch Versetzung",explanation:`Versetzung am Gymnasium → Eignung für gymnasiales Niveau bereits festgestellt

Beim Gymnasiasten zeigt die Versetzung, dass er die Anforderungen des gymnasialen Bildungsgangs erfüllt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Eignungsnachweis durch Mindestnoten",explanation:"Bei Schülerinnen und Schülern anderer Schularten muss die Eignung für die gymnasiale Oberstufe dagegen über bestimmte Mindestnoten nachgewiesen werden.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Vergleich",explanation:`Prüfungstauglich:

Beim Gymnasiasten bestätigt bereits die Versetzungsentscheidung die Eignung für den gymnasialen Bildungsgang. Deshalb ist kein zusätzlicher 3,0-Schnitt wie bei Realschülern erforderlich.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"}]}],answer:`Versetzung am Gymnasium → Eignung für gymnasiales Niveau bereits festgestellt

Beim Gymnasiasten zeigt die Versetzung, dass er die Anforderungen des gymnasialen Bildungsgangs erfüllt.

Bei Schülerinnen und Schülern anderer Schularten muss die Eignung für die gymnasiale Oberstufe dagegen über bestimmte Mindestnoten nachgewiesen werden.

Prüfungstauglich:

Beim Gymnasiasten bestätigt bereits die Versetzungsentscheidung die Eignung für den gymnasialen Bildungsgang. Deshalb ist kein zusätzlicher 3,0-Schnitt wie bei Realschülern erforderlich.`},{id:"schulorganisation-74",document:"Schulorganisation",page:20,question:"Nach welchem Schuljahr kann ein Schüler des G8 in ein Berufliches Gymnasium wechseln? Welche Dinge sind zu beachten?",answerSections:[{title:"Wechsel aus G8 ins BG",items:[{term:"Nach Klasse 9 oder 10",explanation:`G8 → nach Klasse 9 oder 10

Laut den Unterlagen ist der Wechsel mit einem Versetzungszeugnis am Ende der Klasse 9 oder Klasse 10 möglich.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Fremdsprachen, Alter und Aufnahmebedingungen",explanation:`Zu beachten sind außerdem insbesondere:

die Fremdsprachenregelung,

die Altersgrenze,

die Aufnahmebedingungen des jeweiligen BG.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"},{term:"Fortführung der Pflichtfremdsprache",explanation:"Die Unterlagen nennen ausdrücklich als Voraussetzung, dass die Pflichtfremdsprache des mittleren Abschlusses als erste Pflichtfremdsprache weitergeführt werden können muss.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=20",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 20"}]}],answer:`G8 → nach Klasse 9 oder 10

Laut den Unterlagen ist der Wechsel mit einem Versetzungszeugnis am Ende der Klasse 9 oder Klasse 10 möglich.

Zu beachten sind außerdem insbesondere:

die Fremdsprachenregelung,

die Altersgrenze,

die Aufnahmebedingungen des jeweiligen BG.

Die Unterlagen nennen ausdrücklich als Voraussetzung, dass die Pflichtfremdsprache des mittleren Abschlusses als erste Pflichtfremdsprache weitergeführt werden können muss.`},{id:"schulorganisation-75",document:"Schulorganisation",page:21,question:"Nach welchem Schuljahr kann ein Schüler des G9 in ein Berufliches Gymnasium wechseln?",answerSections:[{title:"Wechsel aus G9 ins BG",items:[{term:"Nach Klasse 10 mit Versetzung",explanation:`G9 → nach Klasse 10

Für Schülerinnen und Schüler des neunjährigen Gymnasiums erfolgt der Wechsel grundsätzlich nach Klasse 10 mit entsprechender Versetzung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"Vergleich zu G8",explanation:`Merksatz:

G8 → nach 9 oder 10

G9 → nach 10`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"}]}],answer:`G9 → nach Klasse 10

Für Schülerinnen und Schüler des neunjährigen Gymnasiums erfolgt der Wechsel grundsätzlich nach Klasse 10 mit entsprechender Versetzung.

Merksatz:

G8 → nach 9 oder 10

G9 → nach 10`},{id:"schulorganisation-76",document:"Schulorganisation",page:21,question:"Wie sieht der Fremdsprachenunterricht für einen Schüler aus, der bis zum mittleren Bildungsabschluss „nur“ Englisch als Fremdsprache hatte?",answerSections:[{title:"BG mit bisher nur einer Fremdsprache",items:[{term:"Zweite Fremdsprache neu beginnen",explanation:`Nur eine Fremdsprache bisher → zweite Fremdsprache neu beginnen

Für die allgemeine Hochschulreife muss eine ausreichende zweite Fremdsprache nachgewiesen werden.

Hat der Schüler bisher nur Englisch gelernt, muss er am Beruflichen Gymnasium eine neu beginnende zweite Fremdsprache belegen und diese entsprechend fortführen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"Englisch fortführen",explanation:"Englisch wird als erste Fremdsprache fortgeführt.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"Fremdsprachenpflicht",explanation:`Merksatz:

Nur Englisch bisher → zweite Fremdsprache am BG neu beginnen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"}]}],answer:`Nur eine Fremdsprache bisher → zweite Fremdsprache neu beginnen

Für die allgemeine Hochschulreife muss eine ausreichende zweite Fremdsprache nachgewiesen werden.

Hat der Schüler bisher nur Englisch gelernt, muss er am Beruflichen Gymnasium eine neu beginnende zweite Fremdsprache belegen und diese entsprechend fortführen.

Englisch wird als erste Fremdsprache fortgeführt.

Merksatz:

Nur Englisch bisher → zweite Fremdsprache am BG neu beginnen.`},{id:"schulorganisation-77",document:"Schulorganisation",page:21,question:"Wie sieht der Fremdsprachenunterricht für einen Schüler aus, der bis zum mittleren Bildungsabschluss Englisch und mindestens vier Jahre Französisch hatte?",answerSections:[{title:"Bereits erlernte zweite Fremdsprache",items:[{term:"Erfüllte Fremdsprachenpflicht",explanation:`Zweite Fremdsprache bereits erfüllt → keine neue Fremdsprache nötig

Hat der Schüler bereits eine zweite Fremdsprache ausreichend lange besucht, kann die Fremdsprachenpflicht damit erfüllt sein.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"Dauer und Leistungen",explanation:`Entscheidend ist, dass die Voraussetzungen hinsichtlich

Dauer des Unterrichts und

erforderlicher Leistungen

erfüllt sind.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"Keine zwingende Fortführung",explanation:`Dann muss Französisch nicht zwingend weitergeführt werden.

Merksatz:

Zweite Fremdsprache bereits ausreichend gelernt → keine neu beginnende zweite Fremdsprache erforderlich.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"}]}],answer:`Zweite Fremdsprache bereits erfüllt → keine neue Fremdsprache nötig

Hat der Schüler bereits eine zweite Fremdsprache ausreichend lange besucht, kann die Fremdsprachenpflicht damit erfüllt sein.

Entscheidend ist, dass die Voraussetzungen hinsichtlich

Dauer des Unterrichts und

erforderlicher Leistungen

erfüllt sind.

Dann muss Französisch nicht zwingend weitergeführt werden.

Merksatz:

Zweite Fremdsprache bereits ausreichend gelernt → keine neu beginnende zweite Fremdsprache erforderlich.`},{id:"schulorganisation-81",document:"Schulorganisation",page:22,question:"Gibt es für das Berufliche Gymnasium eine Altersgrenze?",answerSections:[{title:"Altersgrenze im Beruflichen Gymnasium",items:[{term:"Grundsätzliche Altersgrenze",explanation:`3BG → Altersgrenze vorhanden

Ja.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Unter 19 bei Schuljahresbeginn",explanation:`Die Sitzung nennt:

Bei Schuljahresbeginn darf das 19. Lebensjahr noch nicht vollendet sein.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Mit Berufsausbildung: unter 22",explanation:`Bei bereits abgeschlossener Berufsausbildung:

Das 22. Lebensjahr darf noch nicht vollendet sein.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Altersgrenzen im Vergleich",explanation:`Merksatz:

BG → unter 19

mit Ausbildung → unter 22`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"}]}],answer:`3BG → Altersgrenze vorhanden

Ja.

Die Sitzung nennt:

Bei Schuljahresbeginn darf das 19. Lebensjahr noch nicht vollendet sein.

Bei bereits abgeschlossener Berufsausbildung:

Das 22. Lebensjahr darf noch nicht vollendet sein.

Merksatz:

BG → unter 19

mit Ausbildung → unter 22`},{id:"schulorganisation-82",document:"Schulorganisation",page:22,question:"Welche Möglichkeiten gibt es für ältere Schülerinnen und Schüler, ein Abitur zu erlangen?",answerSections:[{title:"Abitur für ältere Bewerber",items:[{term:"Zweiter Bildungsweg",explanation:"Wenn die Altersgrenze des regulären 3BG überschritten ist, kommen andere Wege infrage, insbesondere Bildungswege des zweiten Bildungswegs bzw. berufliche Aufstiegswege.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Berufsoberschule und berufliche Qualifikation",explanation:`In den Sitzungen wurde beispielsweise bereits die Berufsoberschule behandelt.

Dort kann mit entsprechender beruflicher Qualifikation die Hochschulreife erworben werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Alternative Bildungswege",explanation:`Prüfungstauglich:

Für ältere Bewerber gibt es alternative Wege wie die Berufsoberschule bzw. Angebote des zweiten Bildungswegs.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"}]}],answer:`Wenn die Altersgrenze des regulären 3BG überschritten ist, kommen andere Wege infrage, insbesondere Bildungswege des zweiten Bildungswegs bzw. berufliche Aufstiegswege.

In den Sitzungen wurde beispielsweise bereits die Berufsoberschule behandelt.

Dort kann mit entsprechender beruflicher Qualifikation die Hochschulreife erworben werden.

Prüfungstauglich:

Für ältere Bewerber gibt es alternative Wege wie die Berufsoberschule bzw. Angebote des zweiten Bildungswegs.`}]},{title:"Berufliches Gymnasium: Aufbau",sources:[{document:"Schulorganisation",pages:"21-23",page:21}],questions:[{id:"schulorganisation-78",document:"Schulorganisation",page:21,question:"Welche Profile gibt es bei den Beruflichen Gymnasien? – 6 Nennungen",answerSections:[{title:"Sechs Richtungen beruflicher Gymnasien",items:[{term:"Überblick",explanation:"Die Unterlagen unterscheiden sechs Richtungen:",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"AG · Agrarwissenschaft",explanation:"Agrarwissenschaftliches Gymnasium (AG)",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"BTG · Biotechnologie",explanation:"Biotechnologisches Gymnasium (BTG)",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"EG · Ernährung",explanation:"Ernährungswissenschaftliches Gymnasium (EG)",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"SGG · Soziales und Gesundheit",explanation:"Sozial- und gesundheitswissenschaftliches Gymnasium (SGG)",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"TG · Technik",explanation:"Technisches Gymnasium (TG)",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"WG · Wirtschaft",explanation:"Wirtschaftsgymnasium (WG)",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"},{term:"Abkürzungen",explanation:`Merksatz:

AG – BTG – EG – SGG – TG – WG`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=21",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 21"}]}],answer:`Die Unterlagen unterscheiden sechs Richtungen:

Agrarwissenschaftliches Gymnasium (AG)

Biotechnologisches Gymnasium (BTG)

Ernährungswissenschaftliches Gymnasium (EG)

Sozial- und gesundheitswissenschaftliches Gymnasium (SGG)

Technisches Gymnasium (TG)

Wirtschaftsgymnasium (WG)

Merksatz:

AG – BTG – EG – SGG – TG – WG`},{id:"schulorganisation-79",document:"Schulorganisation",page:22,question:"Erklären Sie den Begriff „Eingangsklasse“.",answerSections:[{title:"Eingangsklasse im BG",items:[{term:"Erstes Jahr",explanation:"Eingangsklasse → erstes Jahr des dreijährigen BG",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Eingangsklasse, J1 und J2",explanation:`Das dreijährige Berufliche Gymnasium besteht aus:

Eingangsklasse → Jahrgangsstufe 1 → Jahrgangsstufe 2`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Gemeinsames Niveau und Vorbereitung",explanation:`Die Eingangsklasse dient insbesondere dazu, Schülerinnen und Schüler aus unterschiedlichen vorherigen Schularten auf ein gemeinsames Niveau zu bringen und auf die anschließende Kursstufe vorzubereiten.

Die Unterlagen beschreiben das 3BG entsprechend als dreijährigen Bildungsgang aus Eingangsklasse und beiden Jahrgangsstufen.

Merksatz:

EK → Vorbereitung auf J1 und J2.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"}]}],answer:`Eingangsklasse → erstes Jahr des dreijährigen BG

Das dreijährige Berufliche Gymnasium besteht aus:

Eingangsklasse → Jahrgangsstufe 1 → Jahrgangsstufe 2

Die Eingangsklasse dient insbesondere dazu, Schülerinnen und Schüler aus unterschiedlichen vorherigen Schularten auf ein gemeinsames Niveau zu bringen und auf die anschließende Kursstufe vorzubereiten.

Die Unterlagen beschreiben das 3BG entsprechend als dreijährigen Bildungsgang aus Eingangsklasse und beiden Jahrgangsstufen.

Merksatz:

EK → Vorbereitung auf J1 und J2.`},{id:"schulorganisation-83",document:"Schulorganisation",page:23,question:"Wodurch unterscheidet sich ein Profilfach von anderen Fächern?",answerSections:[{title:"Profilfach im BG",items:[{term:"Berufliche Ausrichtung",explanation:`Profilfach → prägt die berufliche Ausrichtung des BG

Das Profilfach ist das zentrale Fach der jeweiligen Richtung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Beispiele: TG, WG und SGG",explanation:`Beispiele:

TG → technisches Profilfach,

WG → Wirtschaft,

SGG → sozial-/gesundheitswissenschaftliches Profil.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Vertiefte berufsbezogene Kenntnisse",explanation:`Das Profilfach vermittelt vertiefte berufsbezogene Kenntnisse und prägt damit das jeweilige Berufliche

Gymnasium.

Die Unterlagen betonen gerade diese Verbindung von allgemeiner und berufsbezogener Bildung als

besonderes Merkmal des BG.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"}]}],answer:`Profilfach → prägt die berufliche Ausrichtung des BG

Das Profilfach ist das zentrale Fach der jeweiligen Richtung.

Beispiele:

TG → technisches Profilfach,

WG → Wirtschaft,

SGG → sozial-/gesundheitswissenschaftliches Profil.

Das Profilfach vermittelt vertiefte berufsbezogene Kenntnisse und prägt damit das jeweilige Berufliche

Gymnasium.

Die Unterlagen betonen gerade diese Verbindung von allgemeiner und berufsbezogener Bildung als

besonderes Merkmal des BG.`},{id:"schulorganisation-84",document:"Schulorganisation",page:23,question:"Welchen Aufgabenfeldern werden Religion und Sport zugewiesen?",answerSections:[{title:"Aufgabenfelder der Oberstufe",items:[{term:"Drei Aufgabenfelder",explanation:`Die gymnasiale Oberstufe unterscheidet drei Aufgabenfelder:

AF I → sprachlich-literarisch-künstlerisch

AF II → gesellschaftswissenschaftlich

AF III → mathematisch-naturwissenschaftlich-technisch`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Religion und Ethik · Aufgabenfeld II",explanation:`Dabei gilt:

Religion/Ethik → Aufgabenfeld II`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Sport · ohne Aufgabenfeld",explanation:`Sport → keinem Aufgabenfeld zugeordnet

Der Leitfaden zeigt diese Zuordnung ausdrücklich in seiner Übersicht der Aufgabenfelder.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"}]}],answer:`Die gymnasiale Oberstufe unterscheidet drei Aufgabenfelder:

AF I → sprachlich-literarisch-künstlerisch

AF II → gesellschaftswissenschaftlich

AF III → mathematisch-naturwissenschaftlich-technisch

Dabei gilt:

Religion/Ethik → Aufgabenfeld II

Sport → keinem Aufgabenfeld zugeordnet

Der Leitfaden zeigt diese Zuordnung ausdrücklich in seiner Übersicht der Aufgabenfelder.`},{id:"schulorganisation-85",document:"Schulorganisation",page:23,question:"Erklären Sie die Abkürzungen eAN und gAN und ihre Bedeutungen.",answerSections:[{title:"Anforderungsniveaus",items:[{term:"eAN · erhöht",explanation:`eAN → erhöhtes Anforderungsniveau

Hier werden über eine breite Grundbildung hinaus vertiefte und erweiterte Kenntnisse und

Kompetenzen verlangt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"gAN · grundlegend",explanation:`gAN → grundlegendes Anforderungsniveau

Hier steht die allgemeine Orientierung und breite Grundbildung im Mittelpunkt.

Der Leitfaden beschreibt genau diesen Unterschied zwischen erhöhtem und grundlegendem

Anforderungsniveau.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Abgrenzung",explanation:`Merksatz:

eAN → vertieft

gAN → grundlegend`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"}]}],answer:`eAN → erhöhtes Anforderungsniveau

Hier werden über eine breite Grundbildung hinaus vertiefte und erweiterte Kenntnisse und

Kompetenzen verlangt.

gAN → grundlegendes Anforderungsniveau

Hier steht die allgemeine Orientierung und breite Grundbildung im Mittelpunkt.

Der Leitfaden beschreibt genau diesen Unterschied zwischen erhöhtem und grundlegendem

Anforderungsniveau.

Merksatz:

eAN → vertieft

gAN → grundlegend`},{id:"schulorganisation-86",document:"Schulorganisation",page:23,question:"1. Kann ein Schüler des BG die Fachhochschulreife beim vorzeitigen Verlassen der Schule erhalten?",answerSections:[{title:"FHR bei vorzeitigem Verlassen des BG",items:[{term:"Schulischer Teil",explanation:`Ja → schulischer Teil der FHR möglich

Beim vorzeitigen Verlassen der gymnasialen Oberstufe kann unter bestimmten Voraussetzungen der

schulische Teil der Fachhochschulreife bescheinigt werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Berufsbezogener beziehungsweise praktischer Teil",explanation:`Für die vollständige Fachhochschulreife muss anschließend der erforderliche berufsbezogene/

praktische Teil hinzukommen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"},{term:"Vollständige Fachhochschulreife",explanation:`Der Leitfaden enthält hierzu ausdrücklich ein eigenes Kapitel „Fachhochschulreife“.

Merksatz:

BG vorzeitig verlassen → schulischer Teil FHR möglich; Praxis dazu → vollständige FHR.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=23",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 23"}]}],answer:`Ja → schulischer Teil der FHR möglich

Beim vorzeitigen Verlassen der gymnasialen Oberstufe kann unter bestimmten Voraussetzungen der

schulische Teil der Fachhochschulreife bescheinigt werden.

Für die vollständige Fachhochschulreife muss anschließend der erforderliche berufsbezogene/

praktische Teil hinzukommen.

Der Leitfaden enthält hierzu ausdrücklich ein eigenes Kapitel „Fachhochschulreife“.

Merksatz:

BG vorzeitig verlassen → schulischer Teil FHR möglich; Praxis dazu → vollständige FHR.`}]},{title:"Kursstufe und Abitur",sources:[{document:"Schulorganisation",pages:"24-25",page:24}],questions:[{id:"schulorganisation-87",document:"Schulorganisation",page:24,question:"Erklären Sie den Begriff „GFS“.",answerSections:[{title:"Gleichwertige Feststellung von Schülerleistungen",items:[{term:"Gleichwertigkeit zur Klassenarbeit",explanation:`GFS → Gleichwertige Feststellung von Schülerleistungen

Eine GFS ist eine Leistung, die einer Klassenarbeit hinsichtlich der Anforderungen gleichwertig ist.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Mögliche Formen",explanation:`Mögliche Formen laut Unterlagen:

Hausarbeit,

Projekt,

Referat,

terminierte mündliche Prüfung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Handlungsorientierung und Schlüsselqualifikationen",explanation:`Ziel ist insbesondere:

handlungsorientierter Unterricht,

Förderung von Schlüsselqualifikationen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Bewertung durch die Fachlehrkraft",explanation:"Die GFS wird von der Fachlehrkraft koordiniert und bewertet.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Individuelle Leistung bei Gruppenarbeiten",explanation:"Bei Gruppenarbeiten darf nur die individuelle Leistung bewertet werden.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"}]}],answer:`GFS → Gleichwertige Feststellung von Schülerleistungen

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

Bei Gruppenarbeiten darf nur die individuelle Leistung bewertet werden.`},{id:"schulorganisation-88",document:"Schulorganisation",page:24,question:"Wie wird eine GFS in einem zweistündigen Fach verrechnet, wie in einem vierstündigen Fach?",answerSections:[{title:"Anrechnung einer GFS",items:[{term:"Vier- und fünfstündige Fächer",explanation:`4-/5-stündiges Fach → Klassenarbeit kann ersetzt werden

In einem vier- bzw. fünfstündigen Fach kann eine Klassenarbeit durch eine GFS ersetzt werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Zweistündige Fächer",explanation:`2-stündiges Fach → Klassenarbeit kann nicht ersetzt werden

Die dort vorgeschriebene Klassenarbeit muss trotzdem geschrieben werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Ersatz von Klassenarbeiten",explanation:`Merksatz:

4/5 Stunden → GFS kann KA ersetzen

2 Stunden → KA bleibt`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"}]}],answer:`4-/5-stündiges Fach → Klassenarbeit kann ersetzt werden

In einem vier- bzw. fünfstündigen Fach kann eine Klassenarbeit durch eine GFS ersetzt werden.

2-stündiges Fach → Klassenarbeit kann nicht ersetzt werden

Die dort vorgeschriebene Klassenarbeit muss trotzdem geschrieben werden.

Merksatz:

4/5 Stunden → GFS kann KA ersetzen

2 Stunden → KA bleibt`},{id:"schulorganisation-89",document:"Schulorganisation",page:24,question:"Wie viele GFS muss ein Schüler in der Kursstufe erbringen?",answerSections:[{title:"Anzahl der GFS",items:[{term:"Mindestens drei in der Kursstufe",explanation:`Kursstufe → mindestens 3 GFS

Laut Sitzungsunterlage:

mindestens drei GFS in der Kursstufe.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Eine in der Eingangsklasse",explanation:`Zusätzlich nennt die Unterlage:

1 GFS in der Eingangsklasse

3 weitere GFS in den Jahrgangsstufen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"EK und Jahrgangsstufen",explanation:`Merksatz:

EK 1 + Kursstufe 3`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"}]}],answer:`Kursstufe → mindestens 3 GFS

Laut Sitzungsunterlage:

mindestens drei GFS in der Kursstufe.

Zusätzlich nennt die Unterlage:

1 GFS in der Eingangsklasse

3 weitere GFS in den Jahrgangsstufen.

Merksatz:

EK 1 + Kursstufe 3`},{id:"schulorganisation-90",document:"Schulorganisation",page:24,question:"Was versteht man unter dem „Seminarkurs“?",answerSections:[{title:"Seminarkurs",items:[{term:"Besondere Lernleistung",explanation:`Seminarkurs → fächerübergreifende besondere Lernleistung

Laut Sitzung 4:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Fächerübergreifend · zwei Halbjahre · dreistündig",explanation:`fächerübergreifender Kurs,

über zwei Halbjahre in J1,

dreistündig,`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Dokumentation und Kolloquium",explanation:`schriftliche Ausarbeitung/Dokumentation,

abschließendes Kolloquium von etwa 20–30 Minuten.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Selbstständiges Arbeiten",explanation:`Der Seminarkurs verlangt also besonders selbstständiges, wissenschaftspropädeutisches Arbeiten.

Merksatz:

Seminarkurs → 2 Halbjahre + Doku + Kolloquium`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"}]}],answer:`Seminarkurs → fächerübergreifende besondere Lernleistung

Laut Sitzung 4:

fächerübergreifender Kurs,

über zwei Halbjahre in J1,

dreistündig,

schriftliche Ausarbeitung/Dokumentation,

abschließendes Kolloquium von etwa 20–30 Minuten.

Der Seminarkurs verlangt also besonders selbstständiges, wissenschaftspropädeutisches Arbeiten.

Merksatz:

Seminarkurs → 2 Halbjahre + Doku + Kolloquium`},{id:"schulorganisation-91",document:"Schulorganisation",page:24,question:"Wie kann das Ergebnis des Seminarkurses in die Abiturabrechnung eingebracht werden?",answerSections:[{title:"Einbringung des Seminarkurses",items:[{term:"Möglichkeiten laut Sitzung 4",explanation:"Sitzung 4 nennt drei Möglichkeiten:",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Viertes schriftliches Prüfungsfach",explanation:"als 4. Prüfungsfach der schriftlichen Prüfung,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Mündliches Prüfungsfach",explanation:"als mündliches Prüfungsfach – mindestens 5 Punkte,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"},{term:"Doppelte Anrechnung in Block I",explanation:`doppelte Anrechnung in Block I.

Merksatz:

Seminarkurs → Prüfungsfach ersetzen oder doppelt in Block I.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=24",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 24"}]}],answer:`Sitzung 4 nennt drei Möglichkeiten:

als 4. Prüfungsfach der schriftlichen Prüfung,

als mündliches Prüfungsfach – mindestens 5 Punkte,

doppelte Anrechnung in Block I.

Merksatz:

Seminarkurs → Prüfungsfach ersetzen oder doppelt in Block I.`},{id:"schulorganisation-92",document:"Schulorganisation",page:25,question:"Nennen Sie für jeden Anforderungsbereich laut EPA einen Operator.",answerSections:[{title:"Anforderungsbereiche und Operatoren",items:[{term:"Beispiele aus den Unterlagen",explanation:"Die Unterlagen geben genau diese Beispiele:",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Bereich I · nennen",explanation:`AF I → nennen

→ Wissen wiedergeben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Bereich II · erläutern",explanation:`AF II → erläutern

→ Zusammenhänge erklären und Wissen anwenden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Bereich III · bewerten",explanation:`AF III → bewerten

→ selbstständig beurteilen und begründet Stellung nehmen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Steigende Anforderungen",explanation:`Merksatz:

I nennen – II erläutern – III bewerten`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"}]}],answer:`Die Unterlagen geben genau diese Beispiele:

AF I → nennen

→ Wissen wiedergeben.

AF II → erläutern

→ Zusammenhänge erklären und Wissen anwenden.

AF III → bewerten

→ selbstständig beurteilen und begründet Stellung nehmen.

Merksatz:

I nennen – II erläutern – III bewerten`},{id:"schulorganisation-93",document:"Schulorganisation",page:25,question:"Aus welchen Teilen setzt sich das Endergebnis des Abiturs zusammen?",answerSections:[{title:"Gesamtqualifikation im Abitur",items:[{term:"Zwei Blöcke",explanation:`Abitur → Block I + Block II

Das Endergebnis besteht aus:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Block I · Kursleistungen",explanation:`Block I

Leistungen aus den Kursen

also Leistungen aus der Qualifikationsphase.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Block II · Prüfungsleistungen",explanation:`Block II

Leistungen aus der Abiturprüfung

Der Leitfaden übernimmt genau diese Zweiteilung in seiner Darstellung der Gesamtqualifikation.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Zusammensetzung",explanation:`Merksatz:

Block I → Kursleistungen

Block II → Abiturprüfung`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"}]}],answer:`Abitur → Block I + Block II

Das Endergebnis besteht aus:

Block I

Leistungen aus den Kursen

also Leistungen aus der Qualifikationsphase.

Block II

Leistungen aus der Abiturprüfung

Der Leitfaden übernimmt genau diese Zweiteilung in seiner Darstellung der Gesamtqualifikation.

Merksatz:

Block I → Kursleistungen

Block II → Abiturprüfung`},{id:"schulorganisation-94",document:"Schulorganisation",page:25,question:"Welche Voraussetzungen müssen im Abiturblock für das Bestehen erbracht werden?",answerSections:[{title:"Bestehen des Abiturblocks",items:[{term:"Gesamtpunktzahl und Gewichtung",explanation:`Block II → mindestens 100 Punkte

Bei maximal 300 erreichbaren Punkten und vierfacher Gewichtung verlangt die Sitzungsunterlage:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Mindestens 100 Punkte",explanation:"insgesamt mindestens 100 Punkte,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Dreimal mindestens 20 Punkte",explanation:"dreimal mindestens 20 Punkte,",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Keine Prüfung mit null Punkten",explanation:`kein Prüfungsfach mit 0 Punkten.

Bei 0 Punkten nennt die Unterlage eine Zwangswiederholung der mündlichen Prüfung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"},{term:"Bedingungen im Überblick",explanation:`Merksatz:

100 gesamt – 3 × 20 – keine 0`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"}]}],answer:`Block II → mindestens 100 Punkte

Bei maximal 300 erreichbaren Punkten und vierfacher Gewichtung verlangt die Sitzungsunterlage:

insgesamt mindestens 100 Punkte,

dreimal mindestens 20 Punkte,

kein Prüfungsfach mit 0 Punkten.

Bei 0 Punkten nennt die Unterlage eine Zwangswiederholung der mündlichen Prüfung.

Merksatz:

100 gesamt – 3 × 20 – keine 0`},{id:"schulorganisation-95",document:"Schulorganisation",page:25,question:"Wer unterschreibt das Abiturzeugnis?",answerSections:[{title:"Unterschriften auf dem Abiturzeugnis",items:[{term:"Schulleitung und Prüfungsvorsitz",explanation:`Abiturzeugnis → Schulleitung + Prüfungsvorsitz

Laut Lösung in Sitzung 4:

Schulleitung

und Vorsitzende/r der Prüfungskommission.

Merksatz:

Schulleitung + Prüfungsvorsitz`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=25",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 25"}]}],answer:`Abiturzeugnis → Schulleitung + Prüfungsvorsitz

Laut Lösung in Sitzung 4:

Schulleitung

und Vorsitzende/r der Prüfungskommission.

Merksatz:

Schulleitung + Prüfungsvorsitz`}]},{title:"Offene Stellen der Vorlage",sources:[{document:"Schulorganisation",pages:"19",page:19},{document:"Schulorganisation",pages:"22",page:22}],questions:[{id:"schulorganisation-69",document:"Schulorganisation",page:19,question:"Welche Abschlüsse können auf der Berufsoberschule abgelegt werden, worin liegen die Unterschiede?",answerSections:[{title:"Abschlüsse der Berufsoberschule",items:[{term:"Abweichende Angaben in den Unterlagen",explanation:`Hier ist in der Kurzantwort des Fragenkatalogs offenbar eine Unschärfe: Dort werden „Fachhochschulreife“ und „allgemeine Hochschulreife“ genannt.

Die ausführlicheren Unterlagen in derselben Sitzung bzw. den beigefügten Materialien beschreiben die BOS dagegen genauer:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Fachgebundene Hochschulreife",explanation:`Oberstufe der BOS → fachgebundene oder allgemeine Hochschulreife

Nach zwei Jahren kann die

Fachgebundene Hochschulreife

erworben werden.

Sie ermöglicht ein Hochschulstudium, aber nur in den entsprechenden Fachrichtungen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Allgemeine Hochschulreife und zweite Fremdsprache",explanation:`Allgemeine Hochschulreife

Wer zusätzlich die Voraussetzungen bezüglich einer zweiten Fremdsprache erfüllt, kann die

allgemeine Hochschulreife (Abitur)

erwerben.

Diese ermöglicht grundsätzlich das Studium aller Fachrichtungen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"},{term:"Bundesweite Anerkennung",explanation:`Beide Abschlüsse der Oberstufe der BOS sind bundesweit anerkannt.

Für die Prüfung würde ich deshalb die ausführlichere Fassung der PDF lernen:

BOS → fachgebundene Hochschulreife; mit zweiter Fremdsprache → allgemeine Hochschulreife.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=19",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 19"}]}],answer:`Hier ist in der Kurzantwort des Fragenkatalogs offenbar eine Unschärfe: Dort werden „Fachhochschulreife“ und „allgemeine Hochschulreife“ genannt.

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

BOS → fachgebundene Hochschulreife; mit zweiter Fremdsprache → allgemeine Hochschulreife.`,note:"Die Vorlage weist auf abweichende Angaben in Kurz- und Langfassung hin."},{id:"schulorganisation-80",document:"Schulorganisation",page:22,question:"Welche Regelung gilt für WG/SG in der schriftlichen Abiturprüfung, wenn keine mündliche Prüfung in einer Fremdsprache stattfindet?",answerSections:[{title:"Fremdsprachenregelung im WG/SG",items:[{term:"Berücksichtigung der Fremdsprachenkompetenz",explanation:`Hier nennt der Fragenkatalog eine besondere Fremdsprachenregelung für WG/SG.

Wenn keine Fremdsprache mündliches Prüfungsfach ist, muss die Fremdsprachenkompetenz im Rahmen der vorgesehenen Abiturregelungen anderweitig berücksichtigt bzw. geprüft werden.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"},{term:"Offene Konkretisierung in den Unterlagen",explanation:"Diese Frage würde ich momentan nicht weiter konkretisieren, weil die von mir gefundenen Ausschnitte aus Sitzung 4 die genaue Lösung dazu nicht vollständig wiedergeben. Ich würde hier nicht aus allgemeinem Wissen etwas ergänzen, das möglicherweise von Herburgers konkreter Lösung abweicht.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=22",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 22"}]}],answer:`Hier nennt der Fragenkatalog eine besondere Fremdsprachenregelung für WG/SG.

Wenn keine Fremdsprache mündliches Prüfungsfach ist, muss die Fremdsprachenkompetenz im Rahmen der vorgesehenen Abiturregelungen anderweitig berücksichtigt bzw. geprüft werden.

Diese Frage würde ich momentan nicht weiter konkretisieren, weil die von mir gefundenen Ausschnitte aus Sitzung 4 die genaue Lösung dazu nicht vollständig wiedergeben. Ich würde hier nicht aus allgemeinem Wissen etwas ergänzen, das möglicherweise von Herburgers konkreter Lösung abweicht.`,note:"Die Vorlage enthält hier ausdrücklich keine vollständige Antwort."}]}]},{id:"cluster-12",title:"Falltraining und vernetztes Wiederholen",topics:[{title:"Schullaufbahnberatung",sources:[{document:"Schulorganisation",pages:"26-27",page:26}],questions:[{id:"schulorganisation-96",document:"Schulorganisation",page:26,question:"Axel ist 16 Jahre alt, hat die Werkrealschule abgeschlossen, findet keinen Ausbildungsplatz und möchte zu Hause bleiben. Sein Freund Kevin ist nach Klasse 9 abgegangen, hat ein Jahr AVdual besucht und darf nun zu Hause bleiben. Was gilt für Axel?",answerSections:[{title:"Fall Axel · Berufsschulpflicht",items:[{term:"Fortbestehende Pflicht",explanation:`Axel → Berufsschulpflicht besteht noch

Axel kann nicht einfach zu Hause bleiben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Geeignete Bildungsmaßnahme",explanation:`Er ist 16 Jahre alt und unterliegt nach Abschluss der allgemeinen Schulpflicht grundsätzlich noch der

Berufsschulpflicht. Er muss deshalb eine geeignete schulische oder berufliche Bildungsmaßnahme

besuchen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Weg laut Musterlösung",explanation:"Die Musterlösung in Sitzung 5 nennt als Möglichkeit ein zweijähriges Berufskolleg.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"}]}],answer:`Axel → Berufsschulpflicht besteht noch

Axel kann nicht einfach zu Hause bleiben.

Er ist 16 Jahre alt und unterliegt nach Abschluss der allgemeinen Schulpflicht grundsätzlich noch der

Berufsschulpflicht. Er muss deshalb eine geeignete schulische oder berufliche Bildungsmaßnahme

besuchen.

Die Musterlösung in Sitzung 5 nennt als Möglichkeit ein zweijähriges Berufskolleg.`},{id:"schulorganisation-97",document:"Schulorganisation",page:26,question:"Warum ist die Situation bei Kevin anders?",answerSections:[{title:"Fall Kevin · AVdual",items:[{term:"Bereits besuchtes AVdual",explanation:`Der entscheidende Hinweis im Fall ist:

Kevin hat bereits ein Jahr AVdual besucht.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Erfüllung der Berufsschulpflicht",explanation:`AV bzw. AVdual kann der Erfüllung der Berufsschulpflicht dienen. In Sitzung 2 wird dies ausdrücklich im

Zusammenhang mit § 78a SchG behandelt.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Alter allein nicht entscheidend",explanation:`Merksatz:

16 Jahre + Schule beendet ≠ automatisch keine Schulpflicht mehr.

Danach kann noch Berufsschulpflicht bestehen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"}]}],answer:`Der entscheidende Hinweis im Fall ist:

Kevin hat bereits ein Jahr AVdual besucht.

AV bzw. AVdual kann der Erfüllung der Berufsschulpflicht dienen. In Sitzung 2 wird dies ausdrücklich im

Zusammenhang mit § 78a SchG behandelt.

Merksatz:

16 Jahre + Schule beendet ≠ automatisch keine Schulpflicht mehr.

Danach kann noch Berufsschulpflicht bestehen.`,context:"Axel ist 16 Jahre alt, hat die Werkrealschule abgeschlossen, findet keinen Ausbildungsplatz und möchte zu Hause bleiben. Sein Freund Kevin ist nach Klasse 9 abgegangen, hat ein Jahr AVdual besucht und darf nun zu Hause bleiben. Was gilt für Axel?"},{id:"schulorganisation-98",document:"Schulorganisation",page:26,question:"Michael möchte nach der Realschule Abitur machen. Er hat Englisch 3, Mathematik 4 und Deutsch 3. Welche Wege stehen ihm offen?",answerSections:[{title:"Fall Michael · Wege zum Abitur",items:[{term:"Notenanforderungen für das BG",explanation:`Michael → direkter Zugang zum BG scheitert am Notenschnitt

Für den direkten Übergang ins Berufliche Gymnasium müsste Michael in

Deutsch,

Mathematik und

erster Pflichtfremdsprache

einen Durchschnitt von mindestens 3,0 erreichen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Berechnung: Durchschnitt 3,33",explanation:`Michael hat:

Deutsch 3 + Englisch 3 + Mathematik 4 = 10

10 : 3 = 3,33

Damit erfüllt er die Voraussetzung für den direkten Übergang ins Berufliche Gymnasium nicht.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Alternative über Berufskolleg",explanation:`Die Musterlösung aus Sitzung 5 nennt deshalb zwei alternative Wege:

Weg 1: zunächst einen anderen Bildungsgang, z. B. ein Berufskolleg, besuchen und dort die Leistungen

verbessern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Alternative über Berufsoberschule",explanation:`Weg 2: später über die Berufsoberschule das Abitur erwerben. Dafür ist allerdings eine berufliche

Vorbildung erforderlich. Die PDF nennt beispielsweise einen Assistentenabschluss.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"},{term:"Ergebnis",explanation:`Merksatz:

3 + 3 + 4 = Ø 3,33 → kein direkter Zugang zum BG.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=26",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 26"}]}],answer:`Michael → direkter Zugang zum BG scheitert am Notenschnitt

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

3 + 3 + 4 = Ø 3,33 → kein direkter Zugang zum BG.`},{id:"schulorganisation-100",document:"Schulorganisation",page:27,question:"Vanessa hat die Probezeit im 1BK2W nicht bestanden. Was ist die Folge und wie kann sie dennoch die Fachhochschulreife erwerben?",answerSections:[{title:"Fall Vanessa · nicht bestandene Probezeit",items:[{term:"Ausscheiden aus dem 1BK2W",explanation:`Probezeit nicht bestanden → 1BK2W verlassen

Vanessa muss das 1BK2W verlassen, weil sie die Probezeit nicht bestanden hat.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Erneute Aufnahme",explanation:`Die Sitzung nennt anschließend zwei Möglichkeiten:

Möglichkeit 1:

Sie kann erneut in das 1BK2W aufgenommen werden; die Musterlösung spricht von einer einmaligen Wiederholung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Ausbildung und BKFH",explanation:`Möglichkeit 2:

Sie absolviert eine Berufsausbildung und besucht anschließend das BKFH. Auf diesem Weg kann sie ebenfalls die Fachhochschulreife erwerben.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Alternative Wege zur FHR",explanation:`Merksatz:

1BK2W Probezeit nicht bestanden → raus; Wiederholung oder später Ausbildung + BKFH → FHR.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"}]}],answer:`Probezeit nicht bestanden → 1BK2W verlassen

Vanessa muss das 1BK2W verlassen, weil sie die Probezeit nicht bestanden hat.

Die Sitzung nennt anschließend zwei Möglichkeiten:

Möglichkeit 1:

Sie kann erneut in das 1BK2W aufgenommen werden; die Musterlösung spricht von einer einmaligen Wiederholung.

Möglichkeit 2:

Sie absolviert eine Berufsausbildung und besucht anschließend das BKFH. Auf diesem Weg kann sie ebenfalls die Fachhochschulreife erwerben.

Merksatz:

1BK2W Probezeit nicht bestanden → raus; Wiederholung oder später Ausbildung + BKFH → FHR.`},{id:"schulorganisation-101",document:"Schulorganisation",page:27,question:"Can ist 17 Jahre alt und hat die Werkrealschule mit Hauptschulabschluss abgeschlossen. Er möchte die 2BFS besuchen und anschließend Abitur auf einem Beruflichen Gymnasium machen. Woran könnte das scheitern?",answerSections:[{title:"Fall Can · Zugangshürden zum BG",items:[{term:"Notenanforderungen",explanation:`Hier gibt es laut Sitzung 5 zwei mögliche Hürden.

1. Noten

2BFS → BG nicht automatisch

Nach erfolgreichem Abschluss der 2BFS besitzt Can zwar einen mittleren Bildungsabschluss.

Damit ist er aber nicht automatisch für das Berufliche Gymnasium zugelassen.

Er muss zusätzlich die entsprechenden Notenvoraussetzungen, insbesondere in Deutsch, Mathematik und Englisch, erfüllen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Altersgrenze",explanation:`2. Alter

Can ist bereits 17 Jahre alt.

Die 2BFS dauert zwei Jahre. Danach wäre er etwa 19 Jahre alt.

Damit kann die Altersgrenze für die Aufnahme ins Berufliche Gymnasium problematisch werden. Genau diese beiden Punkte – Notenschnitt und Altersgrenze – nennt die Musterlösung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"},{term:"Zwei Hürden",explanation:`Merksatz:

Can → zwei Hürden: Noten + Alter.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=27",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 27"}]}],answer:`Hier gibt es laut Sitzung 5 zwei mögliche Hürden.

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

Can → zwei Hürden: Noten + Alter.`}]},{title:"Bildungswege verknüpfen",sources:[{document:"Schulorganisation",pages:"28-29",page:28}],questions:[{id:"schulorganisation-106",document:"Schulorganisation",page:28,question:"Weshalb muss man in einigen Bildungsgängen beim Nichtbestehen der Probezeit den Bildungsgang verlassen und in anderen nicht?",answerSections:[{title:"Unterschiedliche Folgen der Probezeit",items:[{term:"Funktion des Bildungsgangs",explanation:`Probezeit → Funktion des jeweiligen Bildungsgangs beachten

Die Musterlösung unterscheidet zwei Situationen:`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Eignungsprüfung",explanation:`Probezeit als echte Eignungsprüfung

In manchen Bildungsgängen soll die Probezeit feststellen, ob ein Schüler für den Bildungsgang geeignet ist.

Nicht bestanden → Bildungsgang verlassen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Weiterbesuch und Schulpflicht",explanation:`Weiterbesuch trotz nicht bestandener Probezeit

In anderen Bildungsgängen kann ein Weiterbesuch möglich sein, insbesondere weil

noch Schulpflicht besteht oder

eine weitere pädagogische Förderung vorgesehen ist.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"},{term:"Entscheidung und Vergleich BK I/BK II",explanation:`Die Sitzung nennt außerdem:

Meist entscheidet die Schulleitung auf Grundlage einer Empfehlung der Klassenkonferenz.

Das erklärt beispielsweise den Unterschied, den wir schon in Sitzung 3 hatten:

BK I → Weiterbesuch teilweise möglich

BK II → bei nicht bestandener Probezeit verlassen

Merksatz:

Probezeitregelung hängt von Eignungsfunktion und Schulpflicht ab.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=28",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 28"}]}],answer:`Probezeit → Funktion des jeweiligen Bildungsgangs beachten

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

Probezeitregelung hängt von Eignungsfunktion und Schulpflicht ab.`},{id:"schulorganisation-107",document:"Schulorganisation",page:29,question:"Skizzieren Sie einen Weg, wie man seine Verweildauer in der Schule maximieren kann.",answerSections:[{title:"Bildungsweg mit langer Verweildauer",items:[{term:"Hauptschule und AVdual",explanation:`Hier gibt Sitzung 5 tatsächlich einen konkreten „Maximalweg“ vor:

Hauptschule (5 Jahre)

↓

AVdual (1 Jahr)

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"2BFS und Berufskollegs",explanation:`2BFS (2 Jahre)

↓

BK I (1 Jahr)

↓

BK II (1 Jahr)

↓`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Ausbildung und BOS",explanation:`Ausbildung mit Berufsschule (2–3,5 Jahre)

↓

Berufsoberschule (1–2 Jahre)`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"},{term:"Gesamtdauer und Durchlässigkeit",explanation:`Die Unterlage kommt damit auf:

13 bis 15,5 Jahre

Die Frage demonstriert vor allem die Durchlässigkeit des beruflichen Schulwesens: Man kann schrittweise immer höhere Abschlüsse erreichen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=29",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 29"}]}],answer:`Hier gibt Sitzung 5 tatsächlich einen konkreten „Maximalweg“ vor:

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

Die Frage demonstriert vor allem die Durchlässigkeit des beruflichen Schulwesens: Man kann schrittweise immer höhere Abschlüsse erreichen.`}]},{title:"Diskussionsfragen vorbereiten",sources:[{document:"Schulorganisation",pages:"6-7",page:6},{document:"Schulorganisation",pages:"27-29",page:27}],questions:[{id:"schulorganisation-20",document:"Schulorganisation",page:6,question:"Ist die Verankerung des Religionsunterrichts noch zeitgemäß?",answerSections:[{title:"Religionsunterricht: Abwägung",items:[{term:"Begründete Stellungnahme",explanation:"Hier erwartet die Präsentation eher eine begründete Abwägung als ein schlichtes Ja/Nein.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Argumente dafür",explanation:`Dafür

Religionsunterricht ist grundgesetzlich garantiert und ermöglicht religiöse Bildung.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Gesellschaftliche Vielfalt",explanation:`Problematisch

Die Gesellschaft ist religiös und weltanschaulich pluraler geworden. Viele unterschiedliche

Religions- und Weltanschauungsgruppen können organisatorisch zu einer zunehmenden Aufteilung

der Schülerinnen und Schüler führen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"},{term:"Trennung oder gemeinsames Lernen",explanation:`Die Präsentation stellt deshalb ausdrücklich die Frage, ob viele getrennte Religionsgruppen eher

Trennung statt gemeinsames Lernen fördern.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=6",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 6"}]}],answer:`Hier erwartet die Präsentation eher eine begründete Abwägung als ein schlichtes Ja/Nein.

Dafür

Religionsunterricht ist grundgesetzlich garantiert und ermöglicht religiöse Bildung.

Problematisch

Die Gesellschaft ist religiös und weltanschaulich pluraler geworden. Viele unterschiedliche

Religions- und Weltanschauungsgruppen können organisatorisch zu einer zunehmenden Aufteilung

der Schülerinnen und Schüler führen.

Die Präsentation stellt deshalb ausdrücklich die Frage, ob viele getrennte Religionsgruppen eher

Trennung statt gemeinsames Lernen fördern.`},{id:"schulorganisation-21",document:"Schulorganisation",page:7,question:"Inwieweit können Privatschulen der Integration entgegenwirken?",answerSections:[{title:"Privatschulen und Integration",items:[{term:"Soziale Segregation",explanation:`Privatschulen → Gefahr sozialer Segregation

Wenn sich Schülerinnen und Schüler nach sozialer Herkunft, Religion oder Weltanschauung auf unterschiedliche Schulen verteilen, kann gesellschaftliche Durchmischung abnehmen.`,sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"},{term:"Verfassungsrechtliche Grenzen",explanation:"Genau deshalb enthält Art. 7 GG Anforderungen an Ersatzschulen. Die Unterlagen betonen, dass insbesondere die Regelungen für private Grundschulen die Grundschule als gemeinsamen Lernort erhalten und Segregation verhindern sollen.",sourceUrl:"/lernmaterial/Schulorganisation.pdf#page=7",sourceLabel:"Fragenkatalog Schulorganisation · PDF-Seite 7"}]}],answer:`Privatschulen → Gefahr sozialer Segregation

Wenn sich Schülerinnen und Schüler nach sozialer Herkunft, Religion oder Weltanschauung auf unterschiedliche Schulen verteilen, kann gesellschaftliche Durchmischung abnehmen.

Genau deshalb enthält Art. 7 GG Anforderungen an Ersatzschulen. Die Unterlagen betonen, dass insbesondere die Regelungen für private Grundschulen die Grundschule als gemeinsamen Lernort erhalten und Segregation verhindern sollen.`}]}]}],Qi={class:"keyword-answer"},Xi={key:0},Yi={key:0},es=["onClick"],ns=["aria-labelledby"],rs=["id"],ts=["href"],is=["href"],ss={__name:"KeywordAnswer",props:{sections:{type:Array,required:!0},intro:{type:String,default:""},questionId:{type:String,required:!0}},setup(r){const e=L(null),n=L(null);let t=null;async function i(a,u){t=u.currentTarget,n.value=a,await Br(),e.value&&!e.value.open&&e.value.showModal()}function s(){t==null||t.focus()}return(a,u)=>(f(),b("div",Qi,[r.intro?(f(),b("p",Xi,g(r.intro),1)):V("",!0),(f(!0),b(N,null,ae(r.sections,l=>(f(),b("section",{key:l.title},[c("h3",null,[c("strong",null,g(l.title),1)]),l.description?(f(),b("p",Yi,g(l.description),1)):V("",!0),c("ul",null,[(f(!0),b(N,null,ae(l.items,o=>(f(),b("li",{key:o.term},[c("button",{type:"button",class:"keyword","aria-haspopup":"dialog",onClick:m=>i(o,m)},g(o.term),9,es)]))),128))])]))),128)),(f(),Rn(Fr,{to:"body"},[c("dialog",{ref_key:"dialog",ref:e,class:"keyword-dialog","aria-labelledby":`keyword-title-${r.questionId}`,onClose:s,onClick:u[1]||(u[1]=l=>{l.target===e.value&&e.value.close()})},[n.value?(f(),b(N,{key:0},[c("h2",{id:`keyword-title-${r.questionId}`},g(n.value.term),9,rs),c("p",null,g(n.value.explanation),1),n.value.lawText?(f(),b(N,{key:0},[c("h3",null,"Originalgesetzestext · "+g(n.value.lawLabel),1),c("blockquote",null,g(n.value.lawText),1)],64)):V("",!0),n.value.sourceUrl?(f(),b("a",{key:1,class:"source",href:n.value.sourceUrl,target:"_blank",rel:"noopener"},g(n.value.sourceLabel||"Gesetze im Internet · vollständiger Artikel"),9,ts)):V("",!0),(f(!0),b(N,null,ae(n.value.lawLinks||[],l=>(f(),b("a",{key:l.url,class:"source",href:l.url,target:"_blank",rel:"noopener"},g(l.label),9,is))),128)),c("button",{type:"button",autofocus:"",onClick:u[0]||(u[0]=l=>e.value.close())},"Schließen")],64)):V("",!0)],40,ns)]))]))}},as=_n(ss,[["__scopeId","data-v-99f9e596"]]),G=r=>(Gr("data-v-40f3e511"),r=r(),Ur(),r),ls={class:"study-page"},us=G(()=>c("p",{class:"eyebrow"},"Dein Lernraum · Prüfungsvorbereitung",-1)),cs=G(()=>c("h1",null,"Schulrecht und Schulorganisation",-1)),hs=G(()=>c("p",{class:"intro"},"Wähle ein Cluster, beantworte die Fragen zunächst selbst und blende anschließend die Antwort aus der PDF ein.",-1)),os={class:"meta"},gs={class:"learning-dashboard","aria-label":"Dein Lernfortschritt"},ds={class:"account-row"},ms=G(()=>c("h2",null,"Dein Lernplan bis zum 12.10.2026",-1)),fs=["disabled"],bs={key:1,class:"account-row"},Ss=["disabled"],ps=G(()=>c("p",null,"10.09.–04.10.: Fragen lernen · 05.–11.10.: Wiederholung · 12.10.: Prüfung",-1)),ks={key:0},ws={class:"plan-stats"},zs=G(()=>c("span",null,"Fragen sicher",-1)),Fs=G(()=>c("span",null,"zum Wiederholen markiert",-1)),Bs=G(()=>c("span",null,"noch bis zum heutigen Planziel",-1)),As=["value","max","aria-label"],Ds={key:0},vs={key:1},Ps={key:2},Ls={key:3,class:"question-note"},Gs={key:4},Us=G(()=>c("p",{class:"meta"},"Der Plan rechnet ab dem 10.09. mit 8 Fragen täglich, bis alle Fragen erreicht sind. Ein negativer Wert bei „noch bis zum heutigen Planziel“ zeigt deinen Vorsprung, der für die nächsten Tage zählt. Nur „Sicher“ zählt zum Lernziel. „Wiederholen“ nimmt eine Frage wieder aus dem sicheren Bestand.",-1)),Es={role:"status"},Vs=G(()=>c("details",{class:"source-note"},[c("summary",null,"Über die Lernunterlagen"),c("p",null,"Fragen und Antworten stammen aus deinen PDFs. Zeilenumbrüche und Abstände sind für die Bildschirmansicht angepasst. Ähnliche Fragen aus beiden Dokumenten bleiben mit ihrer jeweiligen Antwort erhalten."),c("p",null,"Die Antworten geben den Stand der Vorlagen wieder; sie wurden nicht auf den aktuellen Rechtsstand geprüft. Offene Angaben der Vorlage sind gekennzeichnet. Seitenangaben beziehen sich auf die PDF-Seitenzählung."),c("div",{class:"source-links"},[c("a",{href:"/lernmaterial/Schulrecht.pdf",target:"_blank",rel:"noopener"},"Schulrecht.pdf öffnen ↗"),c("a",{href:"/lernmaterial/Schulorganisation.pdf",target:"_blank",rel:"noopener"},"Schulorganisation.pdf öffnen ↗")])],-1)),xs={class:"study-tools","aria-label":"Fragen filtern"},Is=G(()=>c("option",{value:""},"Beide PDFs",-1)),_s=G(()=>c("option",null,"Schulrecht",-1)),Rs=G(()=>c("option",null,"Schulorganisation",-1)),ys=[Is,_s,Rs],Ms=["disabled"],Ts={class:"results",role:"status"},Ws={key:0,class:"empty-state"},Ns={class:"clusters","aria-label":"Lerncluster"},Ks=["open"],Os={class:"number"},Hs={class:"cluster-heading"},Cs={class:"cluster-title"},qs={class:"count"},Zs={key:0,class:"cluster-stats","aria-label":"Lernstand des gesamten Hauptthemas"},js={class:"stat-secure"},Js={class:"stat-open"},$s={class:"stat-review"},Qs={key:0,class:"stats-scope"},Xs={key:1,class:"count"},Ys={class:"topics"},ea=["open"],na={class:"count inline-count"},ra={key:0,class:"cluster-stats","aria-label":"Lernstand des gesamten Unterthemas"},ta={class:"stat-secure"},ia={class:"stat-open"},sa={class:"stat-review"},aa={key:0,class:"stats-scope"},la={key:1,class:"count"},ua={class:"topic-content"},ca=["href"],ha={key:0,class:"case-context"},oa=["id"],ga={key:1,class:"question-note"},da=["aria-expanded","aria-controls","onClick"],ma={key:2,class:"learning-status"},fa=["value","disabled","onChange"],ba=G(()=>c("option",{value:"open"},"Offen",-1)),Sa=G(()=>c("option",{value:"review"},"Wiederholen",-1)),pa=G(()=>c("option",{value:"secure"},"Sicher",-1)),ka=[ba,Sa,pa],wa=["id","aria-labelledby"],za={class:"answer-label"},Fa={class:"note-editor"},Ba=["for"],Aa=["id","value","disabled","onInput"],Da=["disabled","onClick"],va={key:0},Pa={role:"status"},La={__name:"PruefungSchulrecht",setup(r){const e=new Set(oe.flatMap(B=>B.topics.flatMap(k=>k.questions.map(v=>v.id)))),n=Object.fromEntries([...e].map((B,k)=>[B,k+1])),{user:t,ready:i,loaded:s,busy:a,pending:u,progress:l,message:o,today:m,learned:z,review:A,plan:F,login:_,logout:J,setStatus:M,notes:re,noteDrafts:he,noteMessages:We,editNote:Ne,saveNote:Ke}=$i(e),te=L(""),ie=L(""),T=L(new Set),S=oe.reduce((B,k)=>B+k.topics.reduce((v,w)=>v+w.questions.length,0),0),x=Q(()=>{const B=te.value.trim().toLocaleLowerCase("de");return oe.map(k=>({...k,topics:k.topics.map(v=>({...v,questions:v.questions.filter(w=>(!ie.value||w.document===ie.value)&&(!B||`${k.title} ${v.title} ${w.question} ${w.context||""}`.toLocaleLowerCase("de").includes(B)))})).filter(v=>v.questions.length)})).filter(k=>k.topics.length)}),P=Q(()=>x.value.reduce((B,k)=>B+W(k),0)),D=Q(()=>!!(te.value.trim()||ie.value)),W=B=>B.topics.reduce((k,v)=>k+v.questions.length,0),U=Q(()=>Object.fromEntries(oe.map(B=>{const k={secure:0,open:0,review:0};for(const v of B.topics)for(const w of v.questions){const E=l.value[w.id];k[E==="secure"||E==="review"?E:"open"]+=1}return[B.id,k]}))),Oe=Q(()=>Object.fromEntries(oe.map(B=>[B.id,Object.fromEntries(B.topics.map(k=>{const v={secure:0,open:0,review:0};for(const w of k.questions){const E=l.value[w.id];v[E==="secure"||E==="review"?E:"open"]+=1}return[k.title,v]}))]))),pr=B=>{T.value.has(B)?T.value.delete(B):T.value.add(B)};return(B,k)=>{const v=Lr("RouterLink");return f(),b("main",ls,[Ar(v,{to:"/",class:"back"},{default:Dr(()=>[Se("← Zur Startseite")]),_:1}),c("header",null,[us,cs,hs,c("p",os,g(h(oe).length)+" Hauptcluster · "+g(h(S))+" Fragen und Aufgaben · 2 Lernunterlagen",1)]),c("section",gs,[c("div",ds,[ms,h(t)?(f(),b("div",bs,[c("span",null,g(h(t).displayName||h(t).email),1),c("button",{type:"button",disabled:h(a)||h(u).size>0,onClick:k[1]||(k[1]=(...w)=>h(J)&&h(J)(...w))},"Abmelden",8,Ss)])):(f(),b("button",{key:0,type:"button",disabled:!h(i)||h(a),onClick:k[0]||(k[0]=(...w)=>h(_)&&h(_)(...w))},g(h(a)?"Anmeldung läuft …":"Mit Google anmelden"),9,fs))]),ps,h(t)?V("",!0):(f(),b("p",ks,"Melde dich an, um deinen Lernstand auf deinen Geräten zu speichern. Zum Start: 8 neue Fragen täglich plus Wiederholung.")),h(t)&&h(s)&&h(F)?(f(),b(N,{key:1},[c("div",ws,[c("div",null,[c("strong",null,g(h(z))+" / "+g(h(S)),1),zs]),c("div",null,[c("strong",null,g(h(A)),1),Fs]),c("div",null,[c("strong",null,g(h(F).days?h(F).daily:h(F).remaining),1),c("span",null,g(h(F).days?"Fragen pro Tag eingeplant":"Fragen noch offen"),1)]),c("div",null,[c("strong",null,g(h(F).todayRemaining),1),Bs])]),c("progress",{value:h(z),max:h(S),"aria-label":`${h(z)} von ${h(S)} Fragen sicher`},null,8,As),h(m)>="2026-10-12"?(f(),b("p",Ds,g(h(m)==="2026-10-12"?"Heute ist Prüfungstag.":"Der Prüfungstermin ist vorbei.")+" "+g(h(F).remaining)+" Fragen sind noch nicht als sicher markiert.",1)):h(m)<"2026-09-10"?(f(),b("p",vs,"Dein Lernplan startet am 10.09.2026.")):h(F).remaining?h(F).behind?(f(),b("p",Ls,g(h(F).behind)+" Fragen hinter dem Plan. Bis heute Morgen waren "+g(h(F).expected)+" sichere Fragen vorgesehen.",1)):(f(),b("p",Gs,"Du liegst im Plan. Bis heute Abend sind "+g(h(F).target)+" sichere Fragen vorgesehen.",1)):(f(),b("p",Ps,"Alle Fragen sind als sicher markiert. Nutze die restliche Zeit zum Wiederholen.")),Us],64)):V("",!0),c("p",Es,g(h(o)),1)]),Vs,c("section",xs,[c("label",null,[Se("Fragen und Themen suchen "),on(c("input",{"onUpdate:modelValue":k[2]||(k[2]=w=>te.value=w),type:"search",placeholder:"Zum Beispiel Aufsicht, Noten oder Berufskolleg"},null,512),[[vr,te.value]])]),c("label",null,[Se("Unterlage "),on(c("select",{"onUpdate:modelValue":k[3]||(k[3]=w=>ie.value=w)},ys,512),[[Pr,ie.value]])]),c("button",{type:"button",class:"reset-button",disabled:!T.value.size,onClick:k[4]||(k[4]=w=>T.value.clear())},"Alle Antworten verbergen",8,Ms)]),c("p",Ts,g(P.value)+" von "+g(h(S))+" Fragen",1),P.value?V("",!0):(f(),b("p",Ws,"Keine passenden Fragen gefunden. Ändere den Suchbegriff oder wähle beide PDFs.")),c("section",Ns,[(f(!0),b(N,null,ae(x.value,w=>(f(),b("details",{key:`${w.id}-${D.value}`,class:"cluster",open:D.value},[c("summary",null,[c("span",Os,g(w.id.split("-")[1].padStart(2,"0")),1),c("span",Hs,[c("span",Cs,g(w.title),1),c("span",qs,g(w.topics.length)+" Unterthemen · "+g(W(w))+" Fragen",1),h(t)&&h(s)?(f(),b("span",Zs,[c("span",js,g(U.value[w.id].secure)+" Sicher",1),c("span",Js,g(U.value[w.id].open)+" Offen",1),c("span",$s,g(U.value[w.id].review)+" Wiederholen",1),D.value?(f(),b("span",Qs,"Gesamtes Hauptthema")):V("",!0)])):(f(),b("span",Xs,g(h(t)?"Lernstatistik wird geladen …":"Für deine Lernstatistik bitte anmelden."),1))])]),c("div",Ys,[(f(!0),b(N,null,ae(w.topics,E=>(f(),b("details",{key:E.title,class:"topic",open:D.value},[c("summary",null,[Se(g(E.title)+" ",1),c("span",na,g(E.questions.length)+" Fragen",1),h(t)&&h(s)?(f(),b("span",ra,[c("span",ta,g(Oe.value[w.id][E.title].secure)+" Sicher",1),c("span",ia,g(Oe.value[w.id][E.title].open)+" Offen",1),c("span",sa,g(Oe.value[w.id][E.title].review)+" Wiederholen",1),D.value?(f(),b("span",aa,"Gesamtes Unterthema")):V("",!0)])):(f(),b("span",la,g(h(t)?"Lernstatistik wird geladen …":"Für deine Lernstatistik bitte anmelden."),1))]),c("div",ua,[(f(!0),b(N,null,ae(E.questions,p=>(f(),b("article",{key:p.id,class:"question-card"},[c("a",{class:"question-source",href:`/lernmaterial/${p.document}.pdf#page=${p.page}`,target:"_blank",rel:"noopener"},g(p.document)+" · PDF-S. "+g(p.page)+" ↗",9,ca),p.context?(f(),b("p",ha,g(p.context),1)):V("",!0),c("h2",{id:`question-${p.id}`},g(h(n)[p.id])+". "+g(p.question),9,oa),p.note?(f(),b("p",ga,g(p.note),1)):V("",!0),c("button",{type:"button",class:"answer-button","aria-expanded":T.value.has(p.id),"aria-controls":`answer-${p.id}`,onClick:se=>pr(p.id)},g(T.value.has(p.id)?"Antwort verbergen":"Antwort anzeigen"),9,da),h(t)?(f(),b("label",ma,[Se("Mein Lernstand "),c("select",{value:h(l)[p.id]||"open",disabled:!h(s)||h(u).has(p.id),onChange:se=>h(M)(p.id,se.target.value)},ka,40,fa)])):V("",!0),T.value.has(p.id)?(f(),b("div",{key:3,id:`answer-${p.id}`,class:"answer",role:"region","aria-labelledby":`question-${p.id}`},[c("p",za,g(p.answerSections?"Stichwörter – für Erklärungen anklicken":"Antwort aus der PDF"),1),p.answerSections?(f(),Rn(as,{key:0,sections:p.answerSections,intro:p.answerIntro,"question-id":p.id},null,8,["sections","intro","question-id"])):(f(!0),b(N,{key:1},ae(p.answer.split(`

`),(se,kr)=>(f(),b("p",{key:kr},g(se),1))),128))],8,wa)):V("",!0),c("div",Fa,[c("label",{for:`note-${p.id}`},"Bemerkungen",8,Ba),c("textarea",{id:`note-${p.id}`,value:h(he)[p.id]??h(re)[p.id]??"",disabled:!h(t)||!h(s)||h(u).has(p.id),rows:"3",maxlength:"10000",placeholder:"Eigene Merksätze, Beispiele oder offene Fragen …",onInput:se=>h(Ne)(p.id,se.target.value)},null,40,Aa),c("button",{type:"button",disabled:!h(t)||!h(s)||h(u).has(p.id)||h(he)[p.id]===void 0,onClick:se=>h(Ke)(p.id)},"Speichern",8,Da),h(t)?V("",!0):(f(),b("p",va,"Melde dich an, um Bemerkungen zu speichern.")),c("p",Pa,g(h(We)[p.id]),1)])]))),128))])],8,ea))),128))])],8,Ks))),128))])])}}},Ea=_n(La,[["__scopeId","data-v-40f3e511"]]);export{Ea as default};
