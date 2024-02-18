import{S as Us,i as Ws,s as Xs,m as Ss,o as Ys,p as Zs,q as ds,r as hs,u as Fs,v as gs,w as sa,x as aa,y as Gs,e as o,t as u,a as _,c as f,b as r,d as c,f as a,g as i,z as x,h as l,j as t,n as ea}from"../chunks/index.cf9db551.js";import{L as la}from"../chunks/LayoutDefault.fe32a63e.js";function ta(A){let p,m,k,E,n,v,y,S,B,es,ls,J,$,H,ts,K,T,ps,N,b,F,ns,os,O,M,Ks=`<code class="language-java"><span class="token class-name">SuperDashboard</span> <span class="token class-name">Class</span> 책임
<span class="token operator">-</span> 소프트웨어 버전 정보 추적
<span class="token operator">-</span> 스윙 컴포넌트 관리
단일 책임 규칙에 위배<span class="token operator">!</span>

<span class="token class-name">Version</span> <span class="token class-name">Class</span>으로 버전정보 추적의 관심을 분리한다</code>`,Q,D,fs,U,P,rs,G,us,cs,W,j,I,_s,X,L,is,Y,C,ms,Z,q,vs,d,R,ks,h,w,Ns=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StockExchange</span> <span class="token punctuation">&#123;</span>
	<span class="token class-name">Money</span> <span class="token function">currentPrice</span><span class="token punctuation">(</span><span class="token class-name">String</span> symbol<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

다음으로 <span class="token class-name">StockExchange</span> 인터페이스를 구현하는 <span class="token class-name">TokyoStockExchange</span> 클래스를 구현한다<span class="token punctuation">.</span>
이후 <span class="token class-name">Portfolio</span> 생성자를 수정해 <span class="token class-name">StockExchange</span> 참조라를 인수로 받는다<span class="token punctuation">.</span></code>`,g,z,Es,ss,V,Ps;return{c(){p=o("h3"),m=o("a"),k=u("클래스 체계"),E=_(),n=o("p"),v=u("표준 자바 관례에 따름 첫째로 변수목록, 정적 공개 상수가 있다면 맨 위층에 나온다, 다음에 정적 비공개 변수 이어서 비공개 인스턴스 변수가 나온다. 비공개 함수는 자신을 호출하는 공개 함수 직후에 넣는다. 즉 추상화 단계가 순차적으로 내려간다."),y=_(),S=o("p"),B=o("em"),es=u("캡슐화"),ls=u("는 변수와 유틸리티 함수는 공개하지 않는 편이 낫지만 반드시 숨겨야한다는 법칙도 없다."),J=_(),$=o("h3"),H=o("a"),ts=u("클래스는 작아야 한다!"),K=_(),T=o("p"),ps=u("클래스를 만들 때 첫 번째 규칙은 크기다. 두번째 규칙도 크기다, 더 작아야 한다. 그렇다면 얼마나 작아야 하는가 함수는 물리적인 행 수로 크기를 측정했다. 하지만 클래스는 다른 척도를 사용한다. 클래스가 맡은 책임을 센다. 클래스 이름은 해당 클래스 책임을 기술해야 한다. 간결한 이름이 떠오르지 않는다면 필경 클래스 크기가 너무 커서 그렇다. Processor, Manager, Super등과 같이 모호한 단어가 있다면 클래스에다 여러 책임을 떠안겼다는 증거다. 클래스 설명은 if,and,or,but을 사용하지 않고서 25단어 내외로 가능해야 한다."),N=_(),b=o("p"),F=o("em"),ns=u("단일 책임 원칙"),os=u("은 클래스나 모듈을 변경할 이유가 하나, 단 하나뿐이어야 한다는 원칙이다. 책임, 즉 변경할 이유를 파악하려 애쓰다 보면 코드를 추상화하기도 쉬워진다. 더 좋은 추상화가 더 쉽게 떠오른다."),O=_(),M=o("pre"),Q=_(),D=o("p"),fs=u("단일 책임 클래스가 많아지면 큰 그림을 이해하기 어려워진다고 우려한다, 큰 그림을 이해하려면 이 클래스 저 클래스를 수없이 넘나들어야 한다고 걱정하지만 명확한 컴포넌트로 나눠담아 관리하고 싶지 않은가?"),U=_(),P=o("p"),rs=u("일반적으로 메서드가 변수를 많이 사용할수록 "),G=o("em"),us=u("응집도"),cs=u("가 높다. 모든 인스턴스 변수를 메서드마다 사용하는 클래스는 으집도가 가장 높다. 바람직하지 않다. 응집도를 유지하면 작은 클래스가 여럿이 나온다. 큰 함수를 작은 함수 여럿으로 나누기만 해도 클래스 수가 많아진다. 클래스가 응집력을 잃는다면 쪼개라!"),W=_(),j=o("h3"),I=o("a"),_s=u("변경하기 쉬운 클래스"),X=_(),L=o("p"),is=u("깨끗한 시스템은 클래스를 체계적으로 정리해 변경에 수반하는 위험을 낮춘다. 어떤 변경이든 클래스에 손대면 다른 코드를 망가뜨릴 잠정적인 위험이 존재한다."),Y=_(),C=o("p"),ms=u("클래스 일부에서만 사용되는 함수나 책임을 각 클래스별로 나누라, 코드는 순시간에 이해되고 망가질 위험도 사라진다."),Z=_(),q=o("p"),vs=u("요구사항은 변하기 마련이다. 인터페이스와 추상 클래스를 사용해 구현에 미치는 영향을 격리한다. 상세한 구현에 의존하는 코드는 테스트가 어렵다."),d=_(),R=o("p"),ks=u("아래 예시는 Porfolio클래스가 상시로 변하는 TokyoStockExchange API를 사용해 포트폴리오 값을 계산할때 결합도를 내리는 예시다."),h=_(),w=o("pre"),g=_(),z=o("p"),Es=u("이렇게 구현하면 클래스는 주가로 언제나 100불을 반환하는 인터페이스를 구현한것이다."),ss=_(),V=o("p"),Ps=u("위와 같이 테스트가 가능할 정도로 시스템의 결합도를 낮추면 유연성과 재사용성도 더욱 높아진다. 자연스럽게 DIP를 따르는 클래스가 나온다."),this.h()},l(s){p=f(s,"H3",{id:!0});var e=r(p);m=f(e,"A",{href:!0});var $s=r(m);k=c($s,"클래스 체계"),$s.forEach(a),e.forEach(a),E=i(s),n=f(s,"P",{});var bs=r(n);v=c(bs,"표준 자바 관례에 따름 첫째로 변수목록, 정적 공개 상수가 있다면 맨 위층에 나온다, 다음에 정적 비공개 변수 이어서 비공개 인스턴스 변수가 나온다. 비공개 함수는 자신을 호출하는 공개 함수 직후에 넣는다. 즉 추상화 단계가 순차적으로 내려간다."),bs.forEach(a),y=i(s),S=f(s,"P",{});var xs=r(S);B=f(xs,"EM",{});var Ms=r(B);es=c(Ms,"캡슐화"),Ms.forEach(a),ls=c(xs,"는 변수와 유틸리티 함수는 공개하지 않는 편이 낫지만 반드시 숨겨야한다는 법칙도 없다."),xs.forEach(a),J=i(s),$=f(s,"H3",{id:!0});var js=r($);H=f(js,"A",{href:!0});var ws=r(H);ts=c(ws,"클래스는 작아야 한다!"),ws.forEach(a),js.forEach(a),K=i(s),T=f(s,"P",{});var As=r(T);ps=c(As,"클래스를 만들 때 첫 번째 규칙은 크기다. 두번째 규칙도 크기다, 더 작아야 한다. 그렇다면 얼마나 작아야 하는가 함수는 물리적인 행 수로 크기를 측정했다. 하지만 클래스는 다른 척도를 사용한다. 클래스가 맡은 책임을 센다. 클래스 이름은 해당 클래스 책임을 기술해야 한다. 간결한 이름이 떠오르지 않는다면 필경 클래스 크기가 너무 커서 그렇다. Processor, Manager, Super등과 같이 모호한 단어가 있다면 클래스에다 여러 책임을 떠안겼다는 증거다. 클래스 설명은 if,and,or,but을 사용하지 않고서 25단어 내외로 가능해야 한다."),As.forEach(a),N=i(s),b=f(s,"P",{});var ys=r(b);F=f(ys,"EM",{});var Hs=r(F);ns=c(Hs,"단일 책임 원칙"),Hs.forEach(a),os=c(ys,"은 클래스나 모듈을 변경할 이유가 하나, 단 하나뿐이어야 한다는 원칙이다. 책임, 즉 변경할 이유를 파악하려 애쓰다 보면 코드를 추상화하기도 쉬워진다. 더 좋은 추상화가 더 쉽게 떠오른다."),ys.forEach(a),O=i(s),M=f(s,"PRE",{class:!0});var Os=r(M);Os.forEach(a),Q=i(s),D=f(s,"P",{});var Ts=r(D);fs=c(Ts,"단일 책임 클래스가 많아지면 큰 그림을 이해하기 어려워진다고 우려한다, 큰 그림을 이해하려면 이 클래스 저 클래스를 수없이 넘나들어야 한다고 걱정하지만 명확한 컴포넌트로 나눠담아 관리하고 싶지 않은가?"),Ts.forEach(a),U=i(s),P=f(s,"P",{});var as=r(P);rs=c(as,"일반적으로 메서드가 변수를 많이 사용할수록 "),G=f(as,"EM",{});var Ds=r(G);us=c(Ds,"응집도"),Ds.forEach(a),cs=c(as,"가 높다. 모든 인스턴스 변수를 메서드마다 사용하는 클래스는 으집도가 가장 높다. 바람직하지 않다. 응집도를 유지하면 작은 클래스가 여럿이 나온다. 큰 함수를 작은 함수 여럿으로 나누기만 해도 클래스 수가 많아진다. 클래스가 응집력을 잃는다면 쪼개라!"),as.forEach(a),W=i(s),j=f(s,"H3",{id:!0});var Is=r(j);I=f(Is,"A",{href:!0});var Ls=r(I);_s=c(Ls,"변경하기 쉬운 클래스"),Ls.forEach(a),Is.forEach(a),X=i(s),L=f(s,"P",{});var Cs=r(L);is=c(Cs,"깨끗한 시스템은 클래스를 체계적으로 정리해 변경에 수반하는 위험을 낮춘다. 어떤 변경이든 클래스에 손대면 다른 코드를 망가뜨릴 잠정적인 위험이 존재한다."),Cs.forEach(a),Y=i(s),C=f(s,"P",{});var qs=r(C);ms=c(qs,"클래스 일부에서만 사용되는 함수나 책임을 각 클래스별로 나누라, 코드는 순시간에 이해되고 망가질 위험도 사라진다."),qs.forEach(a),Z=i(s),q=f(s,"P",{});var Rs=r(q);vs=c(Rs,"요구사항은 변하기 마련이다. 인터페이스와 추상 클래스를 사용해 구현에 미치는 영향을 격리한다. 상세한 구현에 의존하는 코드는 테스트가 어렵다."),Rs.forEach(a),d=i(s),R=f(s,"P",{});var zs=r(R);ks=c(zs,"아래 예시는 Porfolio클래스가 상시로 변하는 TokyoStockExchange API를 사용해 포트폴리오 값을 계산할때 결합도를 내리는 예시다."),zs.forEach(a),h=i(s),w=f(s,"PRE",{class:!0});var Qs=r(w);Qs.forEach(a),g=i(s),z=f(s,"P",{});var Vs=r(z);Es=c(Vs,"이렇게 구현하면 클래스는 주가로 언제나 100불을 반환하는 인터페이스를 구현한것이다."),Vs.forEach(a),ss=i(s),V=f(s,"P",{});var Bs=r(V);Ps=c(Bs,"위와 같이 테스트가 가능할 정도로 시스템의 결합도를 낮추면 유연성과 재사용성도 더욱 높아진다. 자연스럽게 DIP를 따르는 클래스가 나온다."),Bs.forEach(a),this.h()},h(){x(m,"href","#클래스-체계"),x(p,"id","클래스-체계"),x(H,"href","#클래스는-작아야-한다"),x($,"id","클래스는-작아야-한다"),x(M,"class","language-java"),x(I,"href","#변경하기-쉬운-클래스"),x(j,"id","변경하기-쉬운-클래스"),x(w,"class","language-java")},m(s,e){l(s,p,e),t(p,m),t(m,k),l(s,E,e),l(s,n,e),t(n,v),l(s,y,e),l(s,S,e),t(S,B),t(B,es),t(S,ls),l(s,J,e),l(s,$,e),t($,H),t(H,ts),l(s,K,e),l(s,T,e),t(T,ps),l(s,N,e),l(s,b,e),t(b,F),t(F,ns),t(b,os),l(s,O,e),l(s,M,e),M.innerHTML=Ks,l(s,Q,e),l(s,D,e),t(D,fs),l(s,U,e),l(s,P,e),t(P,rs),t(P,G),t(G,us),t(P,cs),l(s,W,e),l(s,j,e),t(j,I),t(I,_s),l(s,X,e),l(s,L,e),t(L,is),l(s,Y,e),l(s,C,e),t(C,ms),l(s,Z,e),l(s,q,e),t(q,vs),l(s,d,e),l(s,R,e),t(R,ks),l(s,h,e),l(s,w,e),w.innerHTML=Ns,l(s,g,e),l(s,z,e),t(z,Es),l(s,ss,e),l(s,V,e),t(V,Ps)},p:ea,d(s){s&&a(p),s&&a(E),s&&a(n),s&&a(y),s&&a(S),s&&a(J),s&&a($),s&&a(K),s&&a(T),s&&a(N),s&&a(b),s&&a(O),s&&a(M),s&&a(Q),s&&a(D),s&&a(U),s&&a(P),s&&a(W),s&&a(j),s&&a(X),s&&a(L),s&&a(Y),s&&a(C),s&&a(Z),s&&a(q),s&&a(d),s&&a(R),s&&a(h),s&&a(w),s&&a(g),s&&a(z),s&&a(ss),s&&a(V)}}}function pa(A){let p,m;const k=[A[0],Js];let E={$$slots:{default:[ta]},$$scope:{ctx:A}};for(let n=0;n<k.length;n+=1)E=Ss(E,k[n]);return p=new la({props:E}),{c(){Ys(p.$$.fragment)},l(n){Zs(p.$$.fragment,n)},m(n,v){ds(p,n,v),m=!0},p(n,[v]){const y=v&1?hs(k,[v&1&&Fs(n[0]),v&0&&Fs(Js)]):{};v&2&&(y.$$scope={dirty:v,ctx:n}),p.$set(y)},i(n){m||(gs(p.$$.fragment,n),m=!0)},o(n){sa(p.$$.fragment,n),m=!1},d(n){aa(p,n)}}}const Js={title:"10장 자료체계",summary:"",date:"2024-02-13",published:!1};function na(A,p,m){return A.$$set=k=>{m(0,p=Ss(Ss({},p),Gs(k)))},p=Gs(p),[p]}class ra extends Us{constructor(p){super(),Ws(this,p,na,pa,Xs,{})}}export{ra as component};
