import{s as f}from"./index-CwKNxFCV.js";import{s as m}from"./index-D6Q-FR8X.js";import{R as y,s as v}from"./index-CukDIW8U.js";import{a as B,f as w}from"./index-C7PtZynj.js";import{b as k,b_ as P,bJ as s,aq as i,an as d,bZ as r,bo as t,ch as $,ap as c,bs as C,ay as u,cU as h,ao as D,c0 as A,cW as S,cL as L,U as I}from"./index-CvOx6AbQ.js";var K=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,T={root:function(n){var g=n.props;return["p-panel p-component",{"p-panel-toggleable":g.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},E=k.extend({name:"panel",style:K,classes:T}),N={name:"BasePanel",extends:B,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:E,provide:function(){return{$pcPanel:this,$parentInstance:this}}},W={name:"Panel",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(n){this.d_collapsed=n}},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return w({toggleable:this.toggleable})}},components:{PlusIcon:m,MinusIcon:f,Button:v},directives:{ripple:y}},V=["data-p"],j=["data-p"],M=["id"],R=["id","aria-labelledby"];function U(e,n,g,q,l,a){var b=P("Button");return s(),i("div",t({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[d("div",t({class:e.cx("header"),"data-p":a.dataP},e.ptm("header")),[r(e.$slots,"header",{id:e.$id+"_header",class:C(e.cx("title")),collapsed:l.d_collapsed},function(){return[e.header?(s(),i("span",t({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),$(e.header),17,M)):c("",!0)]}),d("div",t({class:e.cx("headerActions")},e.ptm("headerActions")),[r(e.$slots,"icons"),e.toggleable?r(e.$slots,"togglebutton",{key:0,collapsed:l.d_collapsed,toggleCallback:function(p){return a.toggle(p)},keydownCallback:function(p){return a.onKeyDown(p)}},function(){return[u(b,t({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:n[0]||(n[0]=function(o){return a.toggle(o)}),onKeydown:n[1]||(n[1]=function(o){return a.onKeyDown(o)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(o){return[r(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(s(),D(A(l.d_collapsed?"PlusIcon":"MinusIcon"),t({class:o.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,j),u(I,t({name:"p-collapsible"},e.ptm("transition")),{default:h(function(){return[S(d("div",t({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[d("div",t({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[d("div",t({class:e.cx("content")},e.ptm("content")),[r(e.$slots,"default")],16),e.$slots.footer?(s(),i("div",t({key:0,class:e.cx("footer")},e.ptm("footer")),[r(e.$slots,"footer")],16)):c("",!0)],16)],16,R),[[L,!l.d_collapsed]])]}),_:3},16)],16,V)}W.render=U;export{W as s};
