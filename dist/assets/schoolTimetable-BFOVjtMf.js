import{a as n}from"./index-GY_aOOuw.js";import{a as l,bH as a,ap as s,bm as t,bX as o,ao as r,am as d}from"./index-Bjh45pHH.js";var c=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,i={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},p=l.extend({name:"card",style:c,classes:i}),m={name:"BaseCard",extends:n,style:p,provide:function(){return{$pcCard:this,$parentInstance:this}}},u={name:"Card",extends:m,inheritAttrs:!1};function b(e,y,f,$,G,v){return a(),s("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),s("div",t({key:0,class:e.cx("header")},e.ptm("header")),[o(e.$slots,"header")],16)):r("",!0),d("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),s("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),s("div",t({key:0,class:e.cx("title")},e.ptm("title")),[o(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(a(),s("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[o(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),d("div",t({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"content")],16),e.$slots.footer?(a(),s("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):r("",!0)],16)],16)}u.render=b;const N=[{day:0,start:"08:00",end:"09:30",className:"3TGG2",subject:"GMT",room:"229"},{day:0,start:"09:50",end:"11:20",className:"3BKGD1/1",subject:"NFZ",room:""},{day:0,start:"13:00",end:"16:15",className:"3BKGD1/1",subject:"GRD",room:"429"},{day:1,start:"08:00",end:"09:30",className:"3TGG1/2",subject:"GMT",room:"429"},{day:1,start:"09:50",end:"11:20",className:"3TGG1/2",subject:"GMT",room:"429"},{day:1,start:"13:45",end:"15:30",className:"3TGG1/2",subject:"GMT",room:"429"},{day:2,start:"09:50",end:"11:20",className:"1BFD1",subject:"BPK",room:"103"},{day:4,start:"09:50",end:"13:00",className:"3BKGD1/1",subject:"MET",room:"118"}],B=[["08:00","08:45"],["08:45","09:30"],["09:50","10:35"],["10:35","11:20"],["11:30","12:15"],["12:15","13:00"],["13:00","13:45"],["13:45","14:30"],["14:45","15:30"],["15:30","16:15"],["16:20","17:05"]];export{N as l,B as p,u as s};
