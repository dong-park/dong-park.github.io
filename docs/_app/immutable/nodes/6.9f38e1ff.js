import{S as ls,i as os,s as ps,m as Ht,o as rs,p as fs,q as us,r as is,u as ts,v as cs,w as _s,x as ms,y as ss,e as o,t as n,a as _,c as p,b as r,d as l,f as s,g as m,z as E,h as f,j as e,n as vs}from"../chunks/index.da6fef4a.js";import{L as ks}from"../chunks/LayoutDefault.35e33d5b.js";function Es(G){let i,c,d,S,u,k,h,pt,rt,Q,w,A,ft,U,y,q,ut,it,F,ct,_t,V,b,mt,W,x,as=`<code class="language-java"><span class="token keyword">public</span> <span class="token class-name">Service</span> <span class="token function">getService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>service <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> service<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,X,v,vt,z,kt,Et,C,dt,yt,D,St,ht,Y,H,Nt,Z,R,M,Ot,g,N,Pt,B,wt,xt,tt,T,I,Rt,st,O,Tt,J,$t,Gt,et,$,L,At,at,j,bt;return{c(){i=o("h3"),c=o("a"),d=n("도시를 세운다면?"),S=_(),u=o("p"),k=n(`도시가 돌아가는 이유는 수도 관리 팀 등 여러 인프라를 관리하는 팀이 있기 때문이면서, 적절한 추상화와 모듈화 때문이다.
소프트웨어 팀도 도시처럼 구성한다. 시스템은 비슷한 수준으로 관심사를 분리하거나 추상화를 이뤄내지 못한다.
`),h=o("strong"),pt=n("시스템 수준"),rt=n("에서도 깨끗함을 유지하는 방법은 무엇일까."),Q=_(),w=o("h3"),A=o("a"),ft=n("시스템 제작과 시스템 사용을 분리하라"),U=_(),y=o("p"),q=o("strong"),ut=n("제작(construction)"),it=n("은 "),F=o("strong"),ct=n("사용(use)"),_t=n(`과 아주 다르다.
호텔의 공사 시기에 있던 기중기와 승강기가 사라지고 호텔에 근무하고 체류하는 사람들로 채워 지듯이 말이다.
소프트웨어 시스템은 객체를 제작하고 의존성을 연결하는 준비과정과 런타임 로직을 분리해야 한다.`),V=_(),b=o("p"),mt=n("시작단계는 모든 애플리케이션이 풀어야 할 관심사다. 관심사 분리는 우리 분야에서 가장 오래되고 가장 중요한 설계 기법이다."),W=_(),x=o("pre"),X=_(),v=o("p"),vt=n("위는 "),z=o("strong"),kt=n("초기화 지연"),Et=n(" 혹은 "),C=o("strong"),dt=n("계산 지연"),yt=n(`이라는 기법이다. 실제로 필요할 떄까지 객체를 생성하지 않으므로 불필요한 부하가 걸리지 않고 Null 포인터를 반환하지 않는다.
하지만 첫째 MyServiceImpl 의존성을 해결하지 않으면 컴파일이 되지 않고, 단위 테스트에서 테스트 전용 객체가 필요할것이다.
또한 일반 런타임 로직에다 객체 생성 로직을 섞어 놓은탓에 모든 경로를 감안한 테스트를 해야한다. `),D=o("strong"),St=n("단일 책임 원칙 위반"),ht=n("이다."),Y=_(),H=o("p"),Nt=n(`체계적이고 탄탄한 시스템을 위해서라면 흔히 쓰이는 손쉬운 기법으로 모듈성을 깨서는 절대로 안 된다.
객체를 생성하거나 의존성을 연결할때, 설정 논리와 일반 실행 논리를 분리해야 모듈성이 높아진다.`),Z=_(),R=o("h3"),M=o("a"),Ot=n("Main 분리"),g=_(),N=o("p"),Pt=n("시스템 생성과 시스템 사용을 분리하는 한 가지 방법은 "),B=o("strong"),wt=n("main 분리"),xt=n(`이다.
제어 흐름은 main 함수에서 시스템에 필요한 객체를 생성한 후 이를 애플리케이션에 넘긴다. 애플리케이션은 그저 객체를 사용할 뿐이다.
main과 애플리케이션 사이에 표시된 의존성 화살표의 방향에 주목하자. 모든 화살표가 main 쪽에서 애플리케이션 쪽을 향한다.
즉 애플리케이션은 객체가 생성되는 과정을 전혀 모른다는 뜻이다.`),tt=_(),T=o("h3"),I=o("a"),Rt=n("팩토리"),st=_(),O=o("p"),Tt=n("때로는 객체를 생성하는 책임을 다른 객체에게 넘기는 것이 좋다. 이를 "),J=o("strong"),$t=n("팩토리"),Gt=n(`라고 부른다.
주문 처리 시스템에서 애플리케이션은 LineItem 인스턴스를 생성해 Order에 추가한다. 이때는 AbstractFactory 패턴을 사용하면 좋다.
그러면 생성시점은 애플리케이션이 결정하지만 생성코드는 애플리케이션이 모른다.`),et=_(),$=o("h3"),L=o("a"),At=n("의존성 주입"),at=_(),j=o("p"),bt=n("의존성 주입은 제어 역전의 한 형태다. 제어 역전은 프레임워크가 프로그램의 제어 흐름을 전적으로 가져가는 것을 말한다."),this.h()},l(t){i=p(t,"H3",{id:!0});var a=r(i);c=p(a,"A",{href:!0});var Mt=r(c);d=l(Mt,"도시를 세운다면?"),Mt.forEach(s),a.forEach(s),S=m(t),u=p(t,"P",{});var nt=r(u);k=l(nt,`도시가 돌아가는 이유는 수도 관리 팀 등 여러 인프라를 관리하는 팀이 있기 때문이면서, 적절한 추상화와 모듈화 때문이다.
소프트웨어 팀도 도시처럼 구성한다. 시스템은 비슷한 수준으로 관심사를 분리하거나 추상화를 이뤄내지 못한다.
`),h=p(nt,"STRONG",{});var It=r(h);pt=l(It,"시스템 수준"),It.forEach(s),rt=l(nt,"에서도 깨끗함을 유지하는 방법은 무엇일까."),nt.forEach(s),Q=m(t),w=p(t,"H3",{id:!0});var Lt=r(w);A=p(Lt,"A",{href:!0});var jt=r(A);ft=l(jt,"시스템 제작과 시스템 사용을 분리하라"),jt.forEach(s),Lt.forEach(s),U=m(t),y=p(t,"P",{});var K=r(y);q=p(K,"STRONG",{});var qt=r(q);ut=l(qt,"제작(construction)"),qt.forEach(s),it=l(K,"은 "),F=p(K,"STRONG",{});var Ft=r(F);ct=l(Ft,"사용(use)"),Ft.forEach(s),_t=l(K,`과 아주 다르다.
호텔의 공사 시기에 있던 기중기와 승강기가 사라지고 호텔에 근무하고 체류하는 사람들로 채워 지듯이 말이다.
소프트웨어 시스템은 객체를 제작하고 의존성을 연결하는 준비과정과 런타임 로직을 분리해야 한다.`),K.forEach(s),V=m(t),b=p(t,"P",{});var zt=r(b);mt=l(zt,"시작단계는 모든 애플리케이션이 풀어야 할 관심사다. 관심사 분리는 우리 분야에서 가장 오래되고 가장 중요한 설계 기법이다."),zt.forEach(s),W=m(t),x=p(t,"PRE",{class:!0});var ns=r(x);ns.forEach(s),X=m(t),v=p(t,"P",{});var P=r(v);vt=l(P,"위는 "),z=p(P,"STRONG",{});var Ct=r(z);kt=l(Ct,"초기화 지연"),Ct.forEach(s),Et=l(P," 혹은 "),C=p(P,"STRONG",{});var Dt=r(C);dt=l(Dt,"계산 지연"),Dt.forEach(s),yt=l(P,`이라는 기법이다. 실제로 필요할 떄까지 객체를 생성하지 않으므로 불필요한 부하가 걸리지 않고 Null 포인터를 반환하지 않는다.
하지만 첫째 MyServiceImpl 의존성을 해결하지 않으면 컴파일이 되지 않고, 단위 테스트에서 테스트 전용 객체가 필요할것이다.
또한 일반 런타임 로직에다 객체 생성 로직을 섞어 놓은탓에 모든 경로를 감안한 테스트를 해야한다. `),D=p(P,"STRONG",{});var Bt=r(D);St=l(Bt,"단일 책임 원칙 위반"),Bt.forEach(s),ht=l(P,"이다."),P.forEach(s),Y=m(t),H=p(t,"P",{});var Jt=r(H);Nt=l(Jt,`체계적이고 탄탄한 시스템을 위해서라면 흔히 쓰이는 손쉬운 기법으로 모듈성을 깨서는 절대로 안 된다.
객체를 생성하거나 의존성을 연결할때, 설정 논리와 일반 실행 논리를 분리해야 모듈성이 높아진다.`),Jt.forEach(s),Z=m(t),R=p(t,"H3",{id:!0});var Kt=r(R);M=p(Kt,"A",{href:!0});var Qt=r(M);Ot=l(Qt,"Main 분리"),Qt.forEach(s),Kt.forEach(s),g=m(t),N=p(t,"P",{});var lt=r(N);Pt=l(lt,"시스템 생성과 시스템 사용을 분리하는 한 가지 방법은 "),B=p(lt,"STRONG",{});var Ut=r(B);wt=l(Ut,"main 분리"),Ut.forEach(s),xt=l(lt,`이다.
제어 흐름은 main 함수에서 시스템에 필요한 객체를 생성한 후 이를 애플리케이션에 넘긴다. 애플리케이션은 그저 객체를 사용할 뿐이다.
main과 애플리케이션 사이에 표시된 의존성 화살표의 방향에 주목하자. 모든 화살표가 main 쪽에서 애플리케이션 쪽을 향한다.
즉 애플리케이션은 객체가 생성되는 과정을 전혀 모른다는 뜻이다.`),lt.forEach(s),tt=m(t),T=p(t,"H3",{id:!0});var Vt=r(T);I=p(Vt,"A",{href:!0});var Wt=r(I);Rt=l(Wt,"팩토리"),Wt.forEach(s),Vt.forEach(s),st=m(t),O=p(t,"P",{});var ot=r(O);Tt=l(ot,"때로는 객체를 생성하는 책임을 다른 객체에게 넘기는 것이 좋다. 이를 "),J=p(ot,"STRONG",{});var Xt=r(J);$t=l(Xt,"팩토리"),Xt.forEach(s),Gt=l(ot,`라고 부른다.
주문 처리 시스템에서 애플리케이션은 LineItem 인스턴스를 생성해 Order에 추가한다. 이때는 AbstractFactory 패턴을 사용하면 좋다.
그러면 생성시점은 애플리케이션이 결정하지만 생성코드는 애플리케이션이 모른다.`),ot.forEach(s),et=m(t),$=p(t,"H3",{id:!0});var Yt=r($);L=p(Yt,"A",{href:!0});var Zt=r(L);At=l(Zt,"의존성 주입"),Zt.forEach(s),Yt.forEach(s),at=m(t),j=p(t,"P",{});var gt=r(j);bt=l(gt,"의존성 주입은 제어 역전의 한 형태다. 제어 역전은 프레임워크가 프로그램의 제어 흐름을 전적으로 가져가는 것을 말한다."),gt.forEach(s),this.h()},h(){E(c,"href","#도시를-세운다면"),E(i,"id","도시를-세운다면"),E(A,"href","#시스템-제작과-시스템-사용을-분리하라"),E(w,"id","시스템-제작과-시스템-사용을-분리하라"),E(x,"class","language-java"),E(M,"href","#main-분리"),E(R,"id","main-분리"),E(I,"href","#팩토리"),E(T,"id","팩토리"),E(L,"href","#의존성-주입"),E($,"id","의존성-주입")},m(t,a){f(t,i,a),e(i,c),e(c,d),f(t,S,a),f(t,u,a),e(u,k),e(u,h),e(h,pt),e(u,rt),f(t,Q,a),f(t,w,a),e(w,A),e(A,ft),f(t,U,a),f(t,y,a),e(y,q),e(q,ut),e(y,it),e(y,F),e(F,ct),e(y,_t),f(t,V,a),f(t,b,a),e(b,mt),f(t,W,a),f(t,x,a),x.innerHTML=as,f(t,X,a),f(t,v,a),e(v,vt),e(v,z),e(z,kt),e(v,Et),e(v,C),e(C,dt),e(v,yt),e(v,D),e(D,St),e(v,ht),f(t,Y,a),f(t,H,a),e(H,Nt),f(t,Z,a),f(t,R,a),e(R,M),e(M,Ot),f(t,g,a),f(t,N,a),e(N,Pt),e(N,B),e(B,wt),e(N,xt),f(t,tt,a),f(t,T,a),e(T,I),e(I,Rt),f(t,st,a),f(t,O,a),e(O,Tt),e(O,J),e(J,$t),e(O,Gt),f(t,et,a),f(t,$,a),e($,L),e(L,At),f(t,at,a),f(t,j,a),e(j,bt)},p:vs,d(t){t&&s(i),t&&s(S),t&&s(u),t&&s(Q),t&&s(w),t&&s(U),t&&s(y),t&&s(V),t&&s(b),t&&s(W),t&&s(x),t&&s(X),t&&s(v),t&&s(Y),t&&s(H),t&&s(Z),t&&s(R),t&&s(g),t&&s(N),t&&s(tt),t&&s(T),t&&s(st),t&&s(O),t&&s(et),t&&s($),t&&s(at),t&&s(j)}}}function ds(G){let i,c;const d=[G[0],es];let S={$$slots:{default:[Es]},$$scope:{ctx:G}};for(let u=0;u<d.length;u+=1)S=Ht(S,d[u]);return i=new ks({props:S}),{c(){rs(i.$$.fragment)},l(u){fs(i.$$.fragment,u)},m(u,k){us(i,u,k),c=!0},p(u,[k]){const h=k&1?is(d,[k&1&&ts(u[0]),k&0&&ts(es)]):{};k&2&&(h.$$scope={dirty:k,ctx:u}),i.$set(h)},i(u){c||(cs(i.$$.fragment,u),c=!0)},o(u){_s(i.$$.fragment,u),c=!1},d(u){ms(i,u)}}}const es={title:"11장 시스템",summary:"",date:"2024-02-18",published:!1};function ys(G,i,c){return G.$$set=d=>{c(0,i=Ht(Ht({},i),ss(d)))},i=ss(i),[i]}class Ns extends ls{constructor(i){super(),os(this,i,ys,ds,ps,{})}}export{Ns as component};
