import{b as I,f as j,a as A}from"./index-B0K55s3K.js";import{s as Z}from"./index-y1-yEJLq.js";import{a as F,bI as o,ap as i,an as D,bm as h,b$ as V,ao as v,bY as G,am as r,cg as c,a5 as O,bA as R,bt as q,by as x,bw as M,ax as _,cT as L,aw as k,cq as w,m as P,bX as J,bq as U,bZ as K,bU as N,ak as m}from"./index-ZWT1oM7E.js";import{l as W}from"./schoolTimetable-BL1QIhfu.js";var X=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,Y={root:function(t){var n=t.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},H=F.extend({name:"tag",style:X,classes:Y}),Q={name:"BaseTag",extends:I,props:{value:null,severity:null,rounded:Boolean,icon:String},style:H,provide:function(){return{$pcTag:this,$parentInstance:this}}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function ee(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e){var t=ne(e,"string");return y(t)=="symbol"?t:t+""}function ne(e,t){if(y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(y(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $={name:"Tag",extends:Q,inheritAttrs:!1,computed:{dataP:function(){return j(ee({rounded:this.rounded},this.severity,this.severity))}}},ae=["data-p"];function re(e,t,n,a,d,p){return o(),i("span",h({class:e.cx("root"),"data-p":p.dataP},e.ptmi("root")),[e.$slots.icon?(o(),D(V(e.$slots.icon),h({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),i("span",h({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):v("",!0),e.value!=null||e.$slots.default?G(e.$slots,"default",{key:2},function(){return[r("span",h({class:e.cx("label")},e.ptm("label")),c(e.value),17)]}):v("",!0)],16,ae)}$.render=re;const oe=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function se(e){const t=Object.fromEntries(oe.formatToParts(e).filter(l=>l.type!=="literal").map(l=>[l.type,Number(l.value)])),n=new Date(Date.UTC(t.year,t.month-1,t.day)).getUTCDay(),a=t.hour*3600+t.minute*60+t.second,d=n>=1&&n<=5,p=[{at:9*3600+30*60,label:"9:30 Uhr"},{at:11*3600+20*60,label:"11:20 Uhr"}];return{weekday:n,seconds:a,schoolDay:d,active:d&&p.find(l=>a>=l.at-120&&a<l.at)||null,next:d&&p.find(l=>a<l.at)||null}}const ie={class:"break-content"},le={class:"clock-section"},ue=["datetime"],ce={class:"alarm-message","aria-live":"polite","aria-atomic":"true"},de={key:0},ge={key:1},pe={key:2},me={key:3},ve={class:"today-lessons"},ye={class:"lesson-details"},be={class:"lesson-time"},fe={key:0,class:"empty-day"},he={__name:"PausenalarmPage",setup(e){const t=N(new Date),n=N(!0),a=m(()=>se(t.value)),d=m(()=>n.value&&!!a.value.active),p=m(()=>t.value.toLocaleTimeString("de-DE",{timeZone:"Europe/Berlin",hour:"2-digit",minute:"2-digit",hourCycle:"h23"})),l=m(()=>t.value.toLocaleDateString("de-DE",{timeZone:"Europe/Berlin",weekday:"long",day:"numeric",month:"long",year:"numeric"})),B=m(()=>W.filter(g=>g.day===a.value.weekday-1&&a.value.schoolDay)),E=g=>{const[s,S]=g.split(":").map(Number);return s*3600+S*60},T=g=>a.value.seconds>=E(g.start)&&a.value.seconds<E(g.end);let b;function f(){t.value=new Date}function z(){f(),!b&&(b=setInterval(f,1e3),document.addEventListener("visibilitychange",f))}function C(){clearInterval(b),b=null,document.removeEventListener("visibilitychange",f)}return R(z),q(z),x(C),M(C),(g,s)=>{const S=K("RouterLink");return o(),i("main",{class:U(["break-page",{"alarm-active":d.value}])},[r("div",ie,[r("header",null,[_(S,{to:"/"},{default:L(()=>[...s[1]||(s[1]=[k("← Zur Startseite",-1)])]),_:1}),_(w(A),{label:n.value?"Pausenalarm deaktivieren":"Pausenalarm aktivieren",severity:"secondary",outlined:"",size:"small",onClick:s[0]||(s[0]=u=>n.value=!n.value)},null,8,["label"])]),r("div",le,[r("p",null,c(l.value),1),r("time",{class:"clock",datetime:t.value.toISOString(),"aria-label":"Aktuelle Uhrzeit"},c(p.value),9,ue),_(w($),{value:n.value?"Pausenalarm aktiv":"Pausenalarm aus",severity:n.value?"success":"secondary"},null,8,["value","severity"])]),r("section",ce,[d.value?(o(),i(P,{key:0},[s[2]||(s[2]=r("h1",null,[k("Gleich Pause "),r("span",{role:"img","aria-label":"lächelndes Gesicht"},"😊")],-1)),r("p",null,"Pause um "+c(a.value.active.label),1)],64)):(o(),i(P,{key:1},[s[3]||(s[3]=r("h1",null,"Dein Stundenplan heute",-1)),n.value?a.value.next?(o(),i("p",ge,"Die nächste Erinnerung erscheint zwei Minuten vor "+c(a.value.next.label)+".",1)):a.value.schoolDay?(o(),i("p",pe,"Für heute stehen keine weiteren Pausenerinnerungen an.")):(o(),i("p",me,"Am Wochenende ist der Pausenalarm aus.")):(o(),i("p",de,"Der Pausenalarm ist ausgeschaltet."))],64))]),r("div",ve,[(o(!0),i(P,null,J(B.value,u=>(o(),D(w(Z),{key:u.start,class:U(["lesson-card",{current:T(u)}])},{content:L(()=>[r("div",ye,[r("strong",be,c(u.start)+"–"+c(u.end),1),r("div",null,[r("h2",null,c(u.className),1),r("p",null,[k(c(u.subject),1),u.room?(o(),i(P,{key:0},[k(" · Raum "+c(u.room),1)],64)):v("",!0)])]),T(u)?(o(),D(w($),{key:0,value:"Jetzt",severity:"success"})):v("",!0)])]),_:2},1032,["class"]))),128)),B.value.length?v("",!0):(o(),i("p",fe,"Für heute ist kein Unterricht im Stundenplan eingetragen."))]),s[4]||(s[4]=r("footer",null,"Erinnerungen montags bis freitags: 9:28–9:30 Uhr und 11:18–11:20 Uhr. Lass diese Seite geöffnet.",-1))])],2)}}},_e=O(he,[["__scopeId","data-v-26ecb592"]]);export{_e as default};
