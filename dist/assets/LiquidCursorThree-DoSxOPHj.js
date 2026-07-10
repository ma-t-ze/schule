import{a4 as f,V as p,ai as g,X as w,a5 as T,ag as h,af as v,J as P,f as F}from"./three.module-DkRrfl5U.js";import{T as o}from"./Tween-Cyrb2SV-.js";import{j as x,al as n,w as y,as as b,aq as S,aG as _}from"./index-C4t90QLf.js";const l=800,d=["#FFBC8F","#FFBC8F","#FFBC8F","#FFBC8F"],E={name:"LiquidCursorThree",props:{targetX:{type:Number,default:0},targetY:{type:Number,default:0},isVisible:{type:Boolean,default:!0},hoverKey:{type:[Number,String],default:null},paletteKey:{type:[Number,String],default:null},displayScale:{type:Number,default:.6}},data(){return{currentX:0,currentY:0,lastX:0,lastY:0,rafId:null,startTime:0,idleTimeout:null}},computed:{rootStyle(){return{transform:`translate3d(${this.currentX-400}px, ${this.currentY-400}px, 0)`,"--liquid-scale":this.displayScale}}},watch:{targetX(){this.hoverKey!==null&&this.startMoveTween(this.targetX,this.targetY)},targetY(){this.hoverKey!==null&&this.startMoveTween(this.targetX,this.targetY)},hoverKey(e,t){if(e!==t){if(this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null),e===null){this.startPaletteTweenTo(d),this.idleTimeout=setTimeout(()=>{this.hoverKey===null&&this.moveToIdlePosition()},120);return}this.startPaletteTween(this.paletteKey??e),this.startMoveTween(this.targetX,this.targetY)}},paletteKey(e){this.hoverKey!==null&&this.startPaletteTween(e)}},created(){this.renderer=null,this.scene=null,this.camera=null,this.material=null,this.mesh=null,this.positionTween=null,this.paletteTween=null,this.lastPaletteIndex=-1,this.colorPalettes=[["#1A237E","#3949AB","#64B5F6","#E3F2FD"],["#0D47A1","#1E88E5","#90CAF9","#E1F5FE"],["#1F2937","#6B7280","#D1D5DB","#F3F4F6"],["#052E16","#065F46","#047857","#065F46"],["#F8FAFC","#E5E7EB","#D1D5DB","#9CA3AF"],["#FFE4E6","#FFC1CC","#FFB6C1","#FFA6B0"]],this.currentPaletteState=this.createPaletteState(d)},mounted(){this.currentX=window.innerWidth/2,this.currentY=100,this.lastX=this.currentX,this.lastY=this.currentY,this.initThree(),this.setPalette(d),this.hoverKey!==null&&(this.currentX=this.targetX,this.currentY=this.targetY,this.lastX=this.currentX,this.lastY=this.currentY,this.setPalette(this.getPaletteForKey(this.paletteKey??this.hoverKey))),this.applyPaletteStateToUniforms(),window.addEventListener("resize",this.handleResize,{passive:!0}),this.animate=this.animate.bind(this),this.startTime=performance.now(),this.animate(this.startTime)},beforeUnmount(){window.removeEventListener("resize",this.handleResize),this.rafId&&cancelAnimationFrame(this.rafId),this.positionTween&&(this.positionTween.stop(),this.positionTween=null),this.paletteTween&&(this.paletteTween.stop(),this.paletteTween=null),o.removeAll(),this.mesh&&this.mesh.geometry.dispose(),this.material&&this.material.dispose(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement))},methods:{hexToRgbObject(e){const t=new F(e);return{r:t.r,g:t.g,b:t.b}},createPaletteState(e){const[t,r,s,a]=e,i=this.hexToRgbObject(t),c=this.hexToRgbObject(r),u=this.hexToRgbObject(s),m=this.hexToRgbObject(a);return{c1r:i.r,c1g:i.g,c1b:i.b,c2r:c.r,c2g:c.g,c2b:c.b,c3r:u.r,c3g:u.g,c3b:u.b,c4r:m.r,c4g:m.g,c4b:m.b}},setPalette(e){this.currentPaletteState=this.createPaletteState(e)},getPaletteForKey(e){if(!this.colorPalettes.length)return null;const r=String(e??0).split("").reduce((s,a)=>s+a.charCodeAt(0),0)%this.colorPalettes.length;return this.lastPaletteIndex=r,this.colorPalettes[r]},getRandomPalette(){if(!this.colorPalettes.length)return null;let e=this.lastPaletteIndex;for(;e===this.lastPaletteIndex;)e=Math.floor(Math.random()*this.colorPalettes.length);return this.lastPaletteIndex=e,this.colorPalettes[e]},applyPaletteStateToUniforms(){this.material&&(this.material.uniforms.u_color1.value.set(this.currentPaletteState.c1r,this.currentPaletteState.c1g,this.currentPaletteState.c1b),this.material.uniforms.u_color2.value.set(this.currentPaletteState.c2r,this.currentPaletteState.c2g,this.currentPaletteState.c2b),this.material.uniforms.u_color3.value.set(this.currentPaletteState.c3r,this.currentPaletteState.c3g,this.currentPaletteState.c3b),this.material.uniforms.u_color4.value.set(this.currentPaletteState.c4r,this.currentPaletteState.c4g,this.currentPaletteState.c4b))},startPaletteTween(e=null){const t=e===null?this.getRandomPalette():this.getPaletteForKey(e);t&&this.startPaletteTweenTo(t)},startPaletteTweenTo(e){if(!this.material||!e)return;this.paletteTween&&this.paletteTween.stop();const t=this.createPaletteState(e);this.paletteTween=new o.Tween(this.currentPaletteState).to(t,700).easing(o.Easing.Sinusoidal.InOut).onUpdate(()=>{this.applyPaletteStateToUniforms()}).start()},initThree(){const e=l,t=l;this.scene=n(new f),this.camera=n(new p(-1,1,1,-1,0,1)),this.renderer=n(new g({alpha:!0,antialias:!0,powerPreference:"high-performance"})),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.setClearColor(0,0);const r=new w(2,2);this.material=n(new T({transparent:!0,uniforms:{u_time:{value:0},u_resolution:{value:new v(e,t)},u_mouse:{value:new v(.5,.5)},u_color1:{value:new h(.941,.412,.4)},u_color2:{value:new h(.98,.839,.651)},u_color3:{value:new h(1,0,.463)},u_color4:{value:new h(.349,.059,.718)}},vertexShader:`
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
                    `})),this.mesh=n(new P(r,this.material)),this.scene.add(this.mesh),this.$refs.root.appendChild(this.renderer.domElement)},startMoveTween(){this.positionTween&&this.positionTween.stop();const e={x:this.currentX,y:this.currentY};this.positionTween=new o.Tween(e).to({x:this.targetX,y:this.targetY},250).delay(150).easing(o.Easing.Sinusoidal.Out).onUpdate(()=>{this.currentX=e.x,this.currentY=e.y}).start()},handleResize(){!this.renderer||!this.material||(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(l,l),this.material.uniforms.u_resolution.value.set(l,l))},animate(e=0){const t=(e-this.startTime)*7e-4;o.update(e);const r=this.currentX-this.lastX,s=this.currentY-this.lastY,a=.5+Math.max(-.18,Math.min(.18,r*.02)),i=.5-Math.max(-.18,Math.min(.18,s*.02));this.material&&(this.material.uniforms.u_time.value=t,this.material.uniforms.u_mouse.value.set(a,i)),this.lastX=this.currentX,this.lastY=this.currentY,this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(this.animate)}}};function C(e,t,r,s,a,i){return _(),y("div",{ref:"root",class:S(["liquid-cursor-three",{"is-visible":r.isVisible}]),style:b(i.rootStyle)},null,6)}const K=x(E,[["render",C]]);export{K as L};
