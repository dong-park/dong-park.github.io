import{S as kn,i as rn,s as fn,a as I,c as dn,b as gn,m as mn,g as _n,d as on,t as vn,e as yn,f as wn,h as en,j as e,k as f,l as d,n as c,o as l,p as g,q as s,r as m,u as _,v as o,w as i,x as An}from"../chunks/index.a6243f30.js";import{L as Ln}from"../chunks/LayoutDefault.47afac3f.js";function hn(E){let a,u,r,v,t,k,y,w,b,R,j,C,U,M,T,Y,H,A,ln=`<code class="language-java">  	<span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"MyLogger"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogAddAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"MyLogger"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConsoleAppender</span> appender <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span>appender<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogAddAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"MyLogger"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">removeAllAppenders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">"%p %t %m%n"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ConsoleAppender</span><span class="token punctuation">.</span><span class="token constant">SYSTEM_OUT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogTest</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">private</span> <span class="token class-name">Logger</span> logger<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">"logger"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">removeAllAppenders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getRootLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAllAppenders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">basicLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name">BasicConfigurator</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"basicLogger"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAppenderWithStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">"%p %t %m%n"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">ConsoleAppender</span><span class="token punctuation">.</span><span class="token constant">SYSTEM_OUT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"addAppenderWithStream"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAppenderWithoutStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">"%p %t %m%n"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"addAppenderWithoutStream"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,W,L,P,z,q,S,D,B,h,x,F,O,$,G;return{c(){a=e("h3"),u=e("a"),r=f("서드파티 코드 사용하기"),v=d(),t=e("p"),k=f("인터페이스를 “제공하는” 입장과 “사용하는” 입장 사이에는 필연적인 긴장감이 존재한다. 사용하는 입장에서 인터페이스의 변경을 우려한다면 래핑하는것도 하나의 방법이다."),y=d(),w=e("h3"),b=e("a"),R=f("경계를 탐험하고 공부하기"),j=d(),C=e("p"),U=f("서드파티 코드를 사용할때 우리는 사용할 코드에 대해 테스트할 필요가 있다."),M=d(),T=e("p"),Y=f("log4j의 예"),H=d(),A=e("pre"),W=d(),L=e("h3"),P=e("a"),z=f("아직 존재하지 않는 코드 사용하기"),q=d(),S=e("p"),D=f("아직 개발되지 않은 모듈이 필요한데, 인터페이스를 정의하면 분업이 가능하다. 인터페이스를 정의 함으로써 메인로직을 더 깔끔하게 짤 수 있다."),B=d(),h=e("h3"),x=e("a"),F=f("Clean한 경계"),O=d(),$=e("p"),G=f("좋은 소프트웨어는 변경에 유연하게 대처해야 한다. 내부 코드가 서드파티에 영향을 줄수 없게 래핑하듯 변경에 유연하게 대처할수 있는 경계를 만들어야 한다."),this.h()},l(n){a=c(n,"H3",{id:!0});var p=l(a);u=c(p,"A",{href:!0});var J=l(u);r=g(J,"서드파티 코드 사용하기"),J.forEach(s),p.forEach(s),v=m(n),t=c(n,"P",{});var K=l(t);k=g(K,"인터페이스를 “제공하는” 입장과 “사용하는” 입장 사이에는 필연적인 긴장감이 존재한다. 사용하는 입장에서 인터페이스의 변경을 우려한다면 래핑하는것도 하나의 방법이다."),K.forEach(s),y=m(n),w=c(n,"H3",{id:!0});var N=l(w);b=c(N,"A",{href:!0});var Q=l(b);R=g(Q,"경계를 탐험하고 공부하기"),Q.forEach(s),N.forEach(s),j=m(n),C=c(n,"P",{});var V=l(C);U=g(V,"서드파티 코드를 사용할때 우리는 사용할 코드에 대해 테스트할 필요가 있다."),V.forEach(s),M=m(n),T=c(n,"P",{});var X=l(T);Y=g(X,"log4j의 예"),X.forEach(s),H=m(n),A=c(n,"PRE",{class:!0});var un=l(A);un.forEach(s),W=m(n),L=c(n,"H3",{id:!0});var Z=l(L);P=c(Z,"A",{href:!0});var nn=l(P);z=g(nn,"아직 존재하지 않는 코드 사용하기"),nn.forEach(s),Z.forEach(s),q=m(n),S=c(n,"P",{});var sn=l(S);D=g(sn,"아직 개발되지 않은 모듈이 필요한데, 인터페이스를 정의하면 분업이 가능하다. 인터페이스를 정의 함으로써 메인로직을 더 깔끔하게 짤 수 있다."),sn.forEach(s),B=m(n),h=c(n,"H3",{id:!0});var an=l(h);x=c(an,"A",{href:!0});var tn=l(x);F=g(tn,"Clean한 경계"),tn.forEach(s),an.forEach(s),O=m(n),$=c(n,"P",{});var pn=l($);G=g(pn,"좋은 소프트웨어는 변경에 유연하게 대처해야 한다. 내부 코드가 서드파티에 영향을 줄수 없게 래핑하듯 변경에 유연하게 대처할수 있는 경계를 만들어야 한다."),pn.forEach(s),this.h()},h(){_(u,"href","#서드파티-코드-사용하기"),_(a,"id","서드파티-코드-사용하기"),_(b,"href","#경계를-탐험하고-공부하기"),_(w,"id","경계를-탐험하고-공부하기"),_(A,"class","language-java"),_(P,"href","#아직-존재하지-않는-코드-사용하기"),_(L,"id","아직-존재하지-않는-코드-사용하기"),_(x,"href","#clean한-경계"),_(h,"id","clean한-경계")},m(n,p){o(n,a,p),i(a,u),i(u,r),o(n,v,p),o(n,t,p),i(t,k),o(n,y,p),o(n,w,p),i(w,b),i(b,R),o(n,j,p),o(n,C,p),i(C,U),o(n,M,p),o(n,T,p),i(T,Y),o(n,H,p),o(n,A,p),A.innerHTML=ln,o(n,W,p),o(n,L,p),i(L,P),i(P,z),o(n,q,p),o(n,S,p),i(S,D),o(n,B,p),o(n,h,p),i(h,x),i(x,F),o(n,O,p),o(n,$,p),i($,G)},p:An,d(n){n&&s(a),n&&s(v),n&&s(t),n&&s(y),n&&s(w),n&&s(j),n&&s(C),n&&s(M),n&&s(T),n&&s(H),n&&s(A),n&&s(W),n&&s(L),n&&s(q),n&&s(S),n&&s(B),n&&s(h),n&&s(O),n&&s($)}}}function En(E){let a,u;const r=[E[0],cn];let v={$$slots:{default:[hn]},$$scope:{ctx:E}};for(let t=0;t<r.length;t+=1)v=I(v,r[t]);return a=new Ln({props:v}),{c(){dn(a.$$.fragment)},l(t){gn(a.$$.fragment,t)},m(t,k){mn(a,t,k),u=!0},p(t,[k]){const y=k&1?_n(r,[k&1&&on(t[0]),k&0&&on(cn)]):{};k&2&&(y.$$scope={dirty:k,ctx:t}),a.$set(y)},i(t){u||(vn(a.$$.fragment,t),u=!0)},o(t){yn(a.$$.fragment,t),u=!1},d(t){wn(a,t)}}}const cn={title:"8장 경계",summary:"",date:"2024-02-01",published:!1};function bn(E,a,u){return E.$$set=r=>{u(0,a=I(I({},a),en(r)))},a=en(a),[a]}class Pn extends kn{constructor(a){super(),rn(this,a,bn,En,fn,{})}}export{Pn as component};
