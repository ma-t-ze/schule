const i=[{id:"erinnern",name:"Erinnern",terms:["nennen","aufzählen","wiedergeben"]},{id:"verstehen",name:"Verstehen",terms:["erklären","beschreiben","zusammenfassen"]},{id:"anwenden",name:"Anwenden",terms:["anwenden","durchführen","berechnen"]},{id:"analysieren",name:"Analysieren",terms:["untersuchen","unterscheiden","vergleichen"]},{id:"bewerten",name:"Bewerten",terms:["beurteilen","bewerten","begründen"]},{id:"erschaffen",name:"Erschaffen",terms:["entwickeln","entwerfen","gestalten"]}],s=i.map((e,n)=>({id:e.id,level:n+1,name:e.name,goals:e.terms.map((r,t)=>({id:`anderson-${e.id}-${t+1}`,text:r}))})),a=s.flatMap(e=>e.goals.map(n=>({...n,level:e.name,stage:e.level})));function l(e){return Array.isArray(e)?[...new Set(e.filter(n=>a.some(r=>r.id===n)))]:[]}function d(e){const n=l(e);return a.filter(r=>n.includes(r.id))}function o(e){const n=d(e);return n.length?`

Ausgewählte kognitive Lernziele:
${n.map(r=>`- ${r.level}: ${r.text}`).join(`
`)}
Beziehe diese ausgewählten Lernhandlungen konkret auf das eingegebene Hauptlernziel und plane passende Aufgaben, an denen ihre Erreichung beobachtbar wird.`:""}export{s as a,o as c,d as s,l as v};
