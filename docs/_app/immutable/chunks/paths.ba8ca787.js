import{n as c,s as g}from"./index.c0b9c16e.js";const t=[];function d(o,a=c){let n;const i=new Set;function r(e){if(g(o,e)&&(o=e,n)){const b=!t.length;for(const s of i)s[1](),t.push(s,o);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function l(e){r(e(o))}function _(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(n=a(r)||c),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1xogfwe)==null?void 0:f.base)??"";var u;const w=((u=globalThis.__sveltekit_1xogfwe)==null?void 0:u.assets)??h;export{w as a,h as b,d as w};
