import{S as x,i as S,s as q,j as _,k as f,l as y,n as d,o as g,p as v,q as l,r as j,v as m,w as h,y as $,x as E,z as k}from"../chunks/index.a6243f30.js";import{s as w}from"../chunks/singletons.7b58f777.js";const z=()=>{const s=w;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},C={subscribe(s){return z().page.subscribe(s)}};function H(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=f(r),n=y(),i=_("p"),u=f(p)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(l),n=j(e),i=d(e,"P",{});var c=g(i);u=v(c,p),c.forEach(l)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,u)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&$(u,p)},i:E,o:E,d(e){e&&l(t),e&&l(n),e&&l(i)}}}function P(s,t,r){let o;return k(s,C,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),S(this,t,P,H,q,{})}};export{D as component};
