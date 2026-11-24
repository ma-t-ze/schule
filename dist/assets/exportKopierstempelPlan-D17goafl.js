const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-DneLIZho.js","assets/index-CTqPGPbd.js","assets/index-1oUTxyou.css"])))=>i.map(i=>d[i]);
import{a5 as x}from"./index-CTqPGPbd.js";const _="https://visualizer.matthiasheckel.com/assets/paged.polyfill-bxYqpA8B.js",D="https://visualizer.matthiasheckel.com/assets/Roboto-Regular-BKwBj7lc.ttf",A="https://visualizer.matthiasheckel.com/assets/Roboto-Bold-sgOxpXbb.ttf",E=`/* Original layout: Unterrichtsausarbeitungen / DreiDDruck.vue */
.doc {
  font-family: 'Roboto', sans-serif;
  font-size: 11pt;
  color: #000;
  max-width: 210mm;
  margin: 0 auto;
  background: white;
}

.page {
  padding: 25mm 25mm 20mm 25mm;
  border-bottom: 1px dashed #ccc;
}

@page {
  size: A4;
  margin: 20mm 20mm 25mm 20mm;
  @bottom-center {
    content: counter(page);
    font-size: 9pt;
    color: #555;
    font-family: 'Roboto', sans-serif;
  }
}

@media print {
  .doc {
    max-width: none;
  }

  .page {
    padding: 0;
    border-bottom: none;
  }

  .cover-page {
    page-break-after: always;
  }

  table {
    page-break-inside: avoid;
  }

  tr {
    page-break-inside: avoid;
  }

  h2, h3, h4 {
    page-break-after: avoid;
  }

  p {
    orphans: 3;
    widows: 3;
  }
}

/* Cover */
.seminar {
  text-align: center;
  margin-bottom: 24px;
  font-size: 10pt;
}

h1 {
  font-size: 14pt;
  font-weight: bold;
  margin-bottom: 6px;
}

h2 {
  font-size: 13pt;
  font-weight: bold;
  margin-bottom: 4px;
}

h2.unchecked {
  font-weight: normal;
  margin-bottom: 20px;
}

h3 {
  font-size: 11pt;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
}

h4 {
  font-size: 11pt;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 8px;
}

.section-title {
  font-size: 14pt;
  border-bottom: 1px solid #000;
  padding-bottom: 4px;
  margin-bottom: 16px;
}

p {
  margin-bottom: 10px;
  line-height: 1.5;
  text-align: justify;
}

ol {
  margin: 10px 0 10px 20px;
  line-height: 1.7;
}

/* Metatabelle Deckblatt */
.meta-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 11pt;
}

.meta-table td {
  border: 1px solid #000;
  padding: 8px 10px;
  vertical-align: top;
}

.label {
  font-size: 9pt;
  color: #555;
}

.thema-label {
  margin-top: 16px;
  margin-bottom: 6px;
}

.thema-box {
  border: 1px solid #000;
  padding: 16px;
  min-height: 60px;
  line-height: 1.6;
}

/* Inhaltsverzeichnis */
.toc {
  width: 100%;
  border-collapse: collapse;
}

.toc td {
  padding: 3px 8px 3px 0;
}

.toc td:first-child {
  width: 40px;
  font-weight: bold;
}

.toc td:last-child {
  text-align: right;
  width: 30px;
}

/* Inhaltliche Tabelle (Überblick) */
.content-table {
  width: 100%;
  border-collapse: collapse;
}

.content-table td {
  border: 1px solid #ccc;
  padding: 10px 12px;
  vertical-align: top;
  line-height: 1.5;
}

.content-table .key {
  width: 140px;
  font-weight: bold;
  background: #f9f9f9;
  white-space: nowrap;
}

.literatur {
  padding: 10px 0;
}

.placeholder {
  color: #aaa;
  font-style: italic;
}

.mt {
  margin-top: 32px;
}

.verlauf-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 9.5pt;
  margin-top: 12px;
}

.verlauf-table th {
  background: #f0f0f0;
  border: 1px solid #999;
  padding: 6px 8px;
  text-align: left;
  font-weight: bold;
}

.verlauf-table td {
  border: 1px solid #ccc;
  padding: 7px 8px;
  vertical-align: top;
  line-height: 1.45;
}

.verlauf-table tr:nth-child(even) td {
  background: #fafafa;
}
`,S=`.doc { user-select: text; }
.doc, .doc * { box-sizing: border-box; }
.doc {
  font-family: 'Roboto', sans-serif;
  font-size: 11pt;
  color: #000;
  max-width: 210mm;
  margin: 0 auto;
  background: white;
}

.page {
  padding: 25mm 25mm 20mm 25mm;
  border-bottom: 1px dashed #ccc;
}

@page {
  size: A4;
  margin: 20mm 20mm 25mm 20mm;
  @bottom-center {
    content: counter(page);
    font-size: 9pt;
    color: #555;
    font-family: 'Roboto', sans-serif;
  }
}

@media print {
  .doc {
    max-width: none;
  }

  .page {
    padding: 0;
    border-bottom: none;
  }

  .cover-page {
    page-break-after: always;
  }

  table {
    page-break-inside: avoid;
  }

  tr {
    page-break-inside: avoid;
  }

  h2, h3, h4 {
    page-break-after: avoid;
  }

  p {
    orphans: 3;
    widows: 3;
  }
}

/* Cover */
.seminar {
  text-align: center;
  margin-bottom: 24px;
  font-size: 10pt;
}

h1 {
  font-size: 14pt;
  font-weight: bold;
  margin-bottom: 6px;
}

h2 {
  font-size: 13pt;
  font-weight: bold;
  margin-bottom: 4px;
}

h2.unchecked {
  font-weight: normal;
  margin-bottom: 20px;
}

h3 {
  font-size: 11pt;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
}

h4 {
  font-size: 11pt;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 8px;
}

.section-title {
  font-size: 14pt;
  border-bottom: 1px solid #000;
  padding-bottom: 4px;
  margin-bottom: 16px;
}

p {
  margin-bottom: 10px;
  line-height: 1.5;
  text-align: justify;
}

ol {
  margin: 10px 0 10px 20px;
  line-height: 1.7;
}

/* Metatabelle Deckblatt */
.meta-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 11pt;
}

.meta-table td {
  border: 1px solid #000;
  padding: 8px 10px;
  vertical-align: top;
}

.label {
  font-size: 9pt;
  color: #555;
}

.thema-label {
  margin-top: 16px;
  margin-bottom: 6px;
}

.thema-box {
  border: 1px solid #000;
  padding: 16px;
  min-height: 60px;
  line-height: 1.6;
}

/* Inhaltsverzeichnis */
.toc {
  width: 100%;
  border-collapse: collapse;
}

.toc td {
  padding: 3px 8px 3px 0;
}

.toc td:first-child {
  width: 40px;
  font-weight: bold;
}

.toc td:last-child {
  text-align: right;
  width: 30px;
}

/* Inhaltliche Tabelle (Überblick) */
.content-table {
  width: 100%;
  border-collapse: collapse;
}

.content-table td {
  border: 1px solid #ccc;
  padding: 10px 12px;
  vertical-align: top;
  line-height: 1.5;
}

.content-table .key {
  width: 140px;
  font-weight: bold;
  background: #f9f9f9;
  white-space: nowrap;
}

.literatur {
  padding: 10px 0;
}

.placeholder {
  color: #aaa;
  font-style: italic;
}

.mt {
  margin-top: 32px;
}

.verlauf-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 9.5pt;
  margin-top: 12px;
}

.verlauf-table th {
  background: #f0f0f0;
  border: 1px solid #999;
  padding: 6px 8px;
  text-align: left;
  font-weight: bold;
}

.verlauf-table td {
  border: 1px solid #ccc;
  padding: 7px 8px;
  vertical-align: top;
  line-height: 1.45;
}

.verlauf-table tr:nth-child(even) td {
  background: #fafafa;
}

/* Keep the third outline level indented in the document and PDF. */
.toc .toc-level-3 td:first-child {
  padding-left: 20px;
  width: 72px;
  white-space: nowrap;
}
.toc .toc-level-3 td:nth-child(2) {
  padding-left: 24px;
}

.toc .toc-subsection:not(.toc-level-3) td:first-child {
  padding-left: 10px;
  white-space: nowrap;
}
.toc .toc-subsection:not(.toc-level-3) td:nth-child(2) {
  padding-left: 12px;
}

@media print {
  .appendix-page { break-before: page; }
}



.toc td:first-child {
  width: 72px;
  white-space: nowrap;
}

.toc .toc-subsection td {
  font-size: 10pt;
  vertical-align: top;
}

.toc .toc-subsection td:nth-child(2) {
  padding-left: 12px;
}

.toc .toc-level-3 td:first-child {
  padding-left: 20px;
}

.toc .toc-level-3 td:nth-child(2) {
  padding-left: 24px;
}

.doc .zeichenarten {
  display: block;
  list-style: disc outside;
  margin: 10px 0;
  padding: 0 0 0 20px;
}

.doc .zeichenarten > li {
  display: list-item;
  margin: 0 0 10px;
  padding: 0;
  font: inherit;
  line-height: 1.5;
  text-align: left;
}

.doc .zeichenarten > li:last-child {
  margin-bottom: 0;
}

.doc .zeichenarten strong {
  font-weight: 700;
}

`,C=`/* Original layout: Unterrichtsausarbeitungen / DreiDDruckVerlaufsplan.vue */
@media print {
  @page {
    size: A4 landscape;
    margin: 12mm 15mm;
  }
}

* {
  box-sizing: border-box;
}

.doc {
  font-family: Arial, sans-serif;
  font-size: 9pt;
  color: #000;
  background: white;
}

.page {
  width: 277mm;
  margin: 12mm auto;
  padding: 0;
}

.header-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0;
}

.header-table th,
.header-table td {
  border: 1px solid #000;
  padding: 5px 7px;
  vertical-align: top;
}

.header-table th {
  font-weight: bold;
}

.header-table ul {
  margin: 0;
  padding-left: 14px;
  list-style: none;
}

.header-table ul li::before {
  content: "– ";
}

.header-table li {
  margin-bottom: 2px;
}

.hinweis {
  font-size: 8.5pt;
  padding: 4px 7px !important;
  border-top: none !important;
}

.verlauf-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.verlauf-table th,
.verlauf-table td {
  border: 1px solid #000;
  padding: 6px 8px;
  vertical-align: top;
  line-height: 1.4;
}

.verlauf-table th {
  font-weight: bold;
}

.col-phase {
  width: 11%;
}

.col-sus {
  width: 22%;
}

.col-lk {
  width: 42%;
}

.col-methode {
  width: 12%;
}

.col-medien {
  width: 13%;
}
`;async function j(c,u,d={}){const s=c==null?void 0:c.querySelector(".doc");if(!s)throw new Error("Dokument konnte nicht geladen werden.");const[{default:w},{jsPDF:v}]=await Promise.all([x(()=>import("./html2canvas.esm-CBrSDip1.js"),[]),x(()=>import("./jspdf.es.min-DneLIZho.js").then(t=>t.j),__vite__mapDeps([0,1,2]))]),i=u==="verlauf",y=!i&&d.filenamePrefix==="Repraesentationsformen_von_Zeichen",a=document.createElement("iframe");a.title="PDF-Satz der Originalvorlage",a.setAttribute("aria-hidden","true"),a.style.cssText="position:fixed;left:-100000px;top:0;width:1400px;height:1600px;border:0;pointer-events:none;",document.body.append(a);try{const t=a.contentDocument;t.open(),t.write('<!doctype html><html lang="de"><head><meta charset="utf-8"></head><body></body></html>'),t.close(),a.contentWindow.PagedConfig={auto:!1},await new Promise((n,e)=>{const o=t.createElement("script");o.src=_,o.onload=n,o.onerror=()=>e(new Error("PDF-Seitensatz konnte nicht geladen werden.")),t.head.append(o)});const k=i?`
      @page { size: A4 landscape; margin: 12mm 15mm; }
      .page { width: auto; margin: 0; padding: 0; }
      .doc { width: 100%; }
      thead { display: table-header-group; }
      tr { break-inside: avoid; }
      th { background: white !important; }
    `:`
      .doc { max-width: none; }
      .page { padding: 0; border-bottom: none; }
      .cover-page { break-after: page; }
      .appendix-page { break-before: page; }
      table, tr { break-inside: avoid; }
      h2, h3, h4 { break-after: avoid; }
      p { orphans: 3; widows: 3; }
      [data-toc-target] a { color: inherit; text-decoration: none; }
      [data-toc-target] a::after { content: target-counter(attr(href), page); }
    `,g=`
      @font-face { font-family: Roboto; src: url('${D}'); font-weight: 400; }
      @font-face { font-family: Roboto; src: url('${A}'); font-weight: 700; }
      body { margin: 0; background: white; }
      ${i?C:d.filenamePrefix==="Repraesentationsformen_von_Zeichen"?S:E}
      ${k}
      ${y?`
        @page { size: A4; margin: 25mm 25mm 20mm; }
        .doc, .doc * { box-sizing: border-box; }
        .doc { width: 100%; }
        .page + .page { break-before: page; }
        .cover-page { break-after: auto; }
        .toc { break-inside: auto; }
        .toc tr { break-inside: avoid; }
      `:""}
      .pagedjs_page { margin: 0; background: white; box-shadow: none; }
    `,h=s.cloneNode(!0);h.querySelectorAll("tr[hidden]").forEach(n=>n.remove()),h.querySelectorAll("[data-toc-target]").forEach(n=>{const e=t.createElement("a");e.href=`#${n.dataset.tocTarget}`,n.replaceChildren(e)});const m=t.createElement("style");m.textContent=g,t.head.append(m),await Promise.all([t.fonts.load("11pt Roboto"),t.fonts.load("700 11pt Roboto")]);const l=t.createElement("div");t.body.append(l),await a.contentWindow.PagedPolyfill.preview(h.outerHTML,[{[location.origin+"/original-plan.css"]:g}],l),await t.fonts.ready;const b=[...l.querySelectorAll(".pagedjs_page")];if(!b.length)throw new Error("Die PDF enthält keine Seiten.");const f=n=>n.replace(/\s+/g,""),z=f(l.textContent);for(const n of s.querySelectorAll("p, li, td, h1, h2, h3, h4")){if(n.hasAttribute("data-toc-target"))continue;const e=f(n.textContent);if(e&&!z.includes(e))throw new Error("Beim Seitensatz fehlt Text. Die PDF wurde nicht erstellt.")}const P=[...l.querySelectorAll("*")].map(n=>{const e=a.contentWindow.getComputedStyle(n);return[n,[...e].map(o=>[o,e.getPropertyValue(o)])]});for(const[n,e]of P)for(const[o,r]of e)n.style.setProperty(o,r);const p=new v({unit:"mm",format:"a4",orientation:i?"landscape":"portrait"});p.setProperties({title:`${i?"Verlaufsplan":"Unterrichtsausarbeitung"} · ${d.title||"Kopierstempel in Photoshop"}`,author:"Matthias Heckel"});for(const[n,e]of b.entries()){const o=await w(e,{scale:2,backgroundColor:"#ffffff",windowWidth:1400,onclone:async r=>{await Promise.all([r.fonts.load("11pt Roboto"),r.fonts.load("700 11pt Roboto")]),await r.fonts.ready,r.querySelectorAll(".doc, .doc *").forEach(R=>{R.style.letterSpacing="0.001px"})}});n&&p.addPage(),p.addImage(o.toDataURL("image/jpeg",.97),"JPEG",0,0,i?297:210,i?210:297)}p.save(`${d.filenamePrefix||"Kopierstempel"}_${i?"Verlaufsplan":"Unterrichtsausarbeitung"}.pdf`)}finally{a.remove()}}export{j as exportKopierstempelPlan};
