function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(M)}function D(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(G(n,e))}function lt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const o=O(n,e,i,l);t.p(o,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}const ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let w=!1;function I(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:K(1,r,b=>n[e[b]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<l.length&&o[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[c],a)}}function U(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){Z(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function H(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function $t(t,n,e){return H(t,n,e,V)}function wt(t,n,e){return H(t,n,e,X)}function tt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Et(t){return tt(t," ")}function Nt(t,n){n=""+n,t.data!==n&&(t.data=n)}function vt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function St(t,n){return new t(n)}let y;function p(t){y=t}function L(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){L().$$.on_mount.push(t)}function kt(t){L().$$.after_update.push(t)}const h=[],T=[];let m=[];const C=[],P=Promise.resolve();let N=!1;function q(){N||(N=!0,P.then(z))}function Tt(){return q(),P}function v(t){m.push(t)}const E=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;T.length;)T.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];E.has(e)||(E.add(e),e())}m.length=0}while(h.length);for(;C.length;)C.pop()();N=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function et(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const x=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function Mt(){d.r||g(d.c),d=d.p}function it(t,n){t&&t.i&&(x.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ot(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||v(()=>{const o=t.$$.on_mount.map(M).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):g(o),t.$$.on_mount=[]}),l.forEach(v)}function ct(t,n){const e=t.$$;e.fragment!==null&&(et(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(h.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Pt(t,n,e,i,r,l,o,u=[-1]){const c=y;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,b,...S)=>{const j=S.length?S[0]:b;return s.ctx&&r(s.ctx[f],s.ctx[f]=j)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](j),a&&ot(t,f)),b}):[],s.update(),a=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){I();const f=Y(n.target);s.fragment&&s.fragment.l(f),f.forEach(W)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),J(),z()}p(c)}class qt{$destroy(){ct(this,1),this.$destroy=$}$on(n,e){if(!D(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{At as A,bt as B,pt as C,gt as D,Mt as E,kt as F,jt as G,vt as H,Ct as I,Tt as J,T as K,St as L,lt as M,at as N,dt as O,ft as P,ht as Q,X as R,qt as S,wt as T,D as U,F as a,Lt as b,Ht as c,Bt as d,Dt as e,ct as f,Ot as g,_t as h,Pt as i,V as j,A as k,yt as l,rt as m,$t as n,Y as o,tt as p,W as q,Et as r,ut as s,it as t,xt as u,mt as v,U as w,$ as x,Nt as y,st as z};
