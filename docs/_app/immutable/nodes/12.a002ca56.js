import{S as _a,i as ma,s as va,a as js,c as Ea,b as ya,m as Pa,g as wa,d as ca,t as ha,e as Aa,f as da,h as ia,j as p,k as i,l as r,n as e,o as l,p as f,q as a,r as k,u as _,v as t,w as o,x as xa}from"../chunks/index.a6243f30.js";import{L as Ha}from"../chunks/LayoutDefault.47afac3f.js";function ba($){let u,E,y,m,c,v,P,M,_s,W,w,D,ms,X,F,vs,Y,j,Es,Z,h,N,ys,g,T,Ps,ss,A,q,ws,as,O,hs,ns,d,R,As,ts,S,ds,ps,x,fa=`<code class="language-java"><span class="token class-name">LocalPort</span> port <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocalPort</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
	port<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">PortDeviceFailure</span> e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
	logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//////////////</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalPort</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">private</span> <span class="token class-name">ACMEPort</span> innerPort<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">LocalPort</span><span class="token punctuation">(</span><span class="token keyword">int</span> portNumber<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		innerPort <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ACMEPort</span><span class="token punctuation">(</span>portNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
		<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">DeviceResponseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">PortDeviceFailure</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ATM1212UnlockedExcpetion</span> e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">PortDeviceFailure</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,es,U,xs,ls,H,z,Hs,os,B,bs,us,b,G,Cs,cs,I,Ls,is,C,J,$s,rs,K,Ms,fs,L,Q,Ds,ks,V,Fs;return{c(){u=p("p"),E=i("깨끗한 코드와 오류 처리는 확실히 연관성이 있다. 상당수 코드 기반은 전적으로 오류 처리 코드에 좌우된다. 여기저기 흩어진 오류 처리 코드 때문에 실제 코드가 하는 일을 파악하기가 거의 불가능하다는 의미다."),y=r(),m=p("h3"),c=p("a"),v=i("오류 코드보다 예외를 사용하라"),P=r(),M=p("p"),_s=i("과거에는 오류 플래그를 설정하거나 호출자에게 오류 코드를 반환하는 방법이 전부였다. 위와 같은 방법을 사용하면 호출자 코드가 복잡해지기 때문에 오류가 발생하면 예외를 던지는 편이 낫다."),W=r(),w=p("h3"),D=p("a"),ms=i("Try-Catch-Finally 문부터 작성하라"),X=r(),F=p("p"),vs=i("예외에서 프로그램 안에다 범위를 정의한다는 사실은 매우 흥미롭다. 예외가 발생할 코드를 짤 때는 try-catch-finally문으로 발생하는것이 일관성있게 코드를 유지할수 있게하고, 호출자가 기대하는 상태를 야기할수 있다."),Y=r(),j=p("p"),Es=i("강제로 예외를 일으키는 테스트 케이스를 작성한 후 테스트를 통과하게 코드를 작성하는 방법을 통해 트랜잭션 범위를 구현하는 방법을 추천한다. 이는 트랜잭션의 본질을 유지하기 쉬워진다."),Z=r(),h=p("h3"),N=p("a"),ys=i("미확인 예외를 사용하라"),g=r(),T=p("p"),Ps=i("확인된 예외는 OCP법칙을 위반하고, 많은 비용을 초래한다. 일반적인 애플리케이션은 의존성이라는 비용이 이익보다 크다."),ss=r(),A=p("h3"),q=p("a"),ws=i("예외에 의미를 제공하라"),as=r(),O=p("p"),hs=i("예외를 던질 때는 전후 상황을 충분히 덧붙인다. 오류 메시지에 정보를 담아 예외와 함께 던진다."),ns=r(),d=p("h3"),R=p("a"),As=i("호출자를 고려해 예외 클래스를 정의하라"),ts=r(),S=p("p"),ds=i("오류를 분류하는 방법은 수없이 많다. 애플리케이션에서 오류를 정의할 때 프로그래머에게 가장 중요한 관심사는 오류를 잡아내는 방법이 되어야 한다."),ps=r(),x=p("pre"),es=r(),U=p("p"),xs=i("위 LocalPort 클래스를 ACMEPort를 감싸고 예외처리용 클래스는 외부 라이브러리와 프로그램 사이에서 의존성이 크게 줄어드는 방법으로 유용하다."),ls=r(),H=p("h3"),z=p("a"),Hs=i("정상 흐름을 정의하라"),os=r(),B=p("p"),bs=i("앞 절에서 충고한 지침을 충실히 따른다면 비즈니스 논리와 오류 처리가 잘 분리된 코드가 나온다. 하지만 때론 중단이 적절하지 않은 방식일수도 있다. 특수 상황을 처리할 필요가 없다면 더 간결한 코드작성이 가능해진다."),us=r(),b=p("h3"),G=p("a"),Cs=i("null을 반환하지 마라"),cs=r(),I=p("p"),Ls=i("null을 반환하는 코드는 일거리를 늘릴 뿐만 아니라 호출자에게 문제를 떠넘긴다. 특수사례 케이스로 넘기거나 빈배열 등을 넘기도록 하자"),is=r(),C=p("h3"),J=p("a"),$s=i("null을 전달하지 마라"),rs=r(),K=p("p"),Ms=i("NullpointException을 야기하는 코드는 만들지 말자"),fs=r(),L=p("h3"),Q=p("a"),Ds=i("결론"),ks=r(),V=p("p"),Fs=i("깨끗한 코드는 읽기도 좋아야 하지만 안정성도 높아야 한다. 오류 처리를 프로그램 논리와 분리하면 독립적인 추론이 가능해지며 코드 유지보수성도 크게 높아진다."),this.h()},l(s){u=e(s,"P",{});var n=l(u);E=f(n,"깨끗한 코드와 오류 처리는 확실히 연관성이 있다. 상당수 코드 기반은 전적으로 오류 처리 코드에 좌우된다. 여기저기 흩어진 오류 처리 코드 때문에 실제 코드가 하는 일을 파악하기가 거의 불가능하다는 의미다."),n.forEach(a),y=k(s),m=e(s,"H3",{id:!0});var Ns=l(m);c=e(Ns,"A",{href:!0});var Ts=l(c);v=f(Ts,"오류 코드보다 예외를 사용하라"),Ts.forEach(a),Ns.forEach(a),P=k(s),M=e(s,"P",{});var qs=l(M);_s=f(qs,"과거에는 오류 플래그를 설정하거나 호출자에게 오류 코드를 반환하는 방법이 전부였다. 위와 같은 방법을 사용하면 호출자 코드가 복잡해지기 때문에 오류가 발생하면 예외를 던지는 편이 낫다."),qs.forEach(a),W=k(s),w=e(s,"H3",{id:!0});var Os=l(w);D=e(Os,"A",{href:!0});var Rs=l(D);ms=f(Rs,"Try-Catch-Finally 문부터 작성하라"),Rs.forEach(a),Os.forEach(a),X=k(s),F=e(s,"P",{});var Ss=l(F);vs=f(Ss,"예외에서 프로그램 안에다 범위를 정의한다는 사실은 매우 흥미롭다. 예외가 발생할 코드를 짤 때는 try-catch-finally문으로 발생하는것이 일관성있게 코드를 유지할수 있게하고, 호출자가 기대하는 상태를 야기할수 있다."),Ss.forEach(a),Y=k(s),j=e(s,"P",{});var Us=l(j);Es=f(Us,"강제로 예외를 일으키는 테스트 케이스를 작성한 후 테스트를 통과하게 코드를 작성하는 방법을 통해 트랜잭션 범위를 구현하는 방법을 추천한다. 이는 트랜잭션의 본질을 유지하기 쉬워진다."),Us.forEach(a),Z=k(s),h=e(s,"H3",{id:!0});var zs=l(h);N=e(zs,"A",{href:!0});var Bs=l(N);ys=f(Bs,"미확인 예외를 사용하라"),Bs.forEach(a),zs.forEach(a),g=k(s),T=e(s,"P",{});var Gs=l(T);Ps=f(Gs,"확인된 예외는 OCP법칙을 위반하고, 많은 비용을 초래한다. 일반적인 애플리케이션은 의존성이라는 비용이 이익보다 크다."),Gs.forEach(a),ss=k(s),A=e(s,"H3",{id:!0});var Is=l(A);q=e(Is,"A",{href:!0});var Js=l(q);ws=f(Js,"예외에 의미를 제공하라"),Js.forEach(a),Is.forEach(a),as=k(s),O=e(s,"P",{});var Ks=l(O);hs=f(Ks,"예외를 던질 때는 전후 상황을 충분히 덧붙인다. 오류 메시지에 정보를 담아 예외와 함께 던진다."),Ks.forEach(a),ns=k(s),d=e(s,"H3",{id:!0});var Qs=l(d);R=e(Qs,"A",{href:!0});var Vs=l(R);As=f(Vs,"호출자를 고려해 예외 클래스를 정의하라"),Vs.forEach(a),Qs.forEach(a),ts=k(s),S=e(s,"P",{});var Ws=l(S);ds=f(Ws,"오류를 분류하는 방법은 수없이 많다. 애플리케이션에서 오류를 정의할 때 프로그래머에게 가장 중요한 관심사는 오류를 잡아내는 방법이 되어야 한다."),Ws.forEach(a),ps=k(s),x=e(s,"PRE",{class:!0});var ka=l(x);ka.forEach(a),es=k(s),U=e(s,"P",{});var Xs=l(U);xs=f(Xs,"위 LocalPort 클래스를 ACMEPort를 감싸고 예외처리용 클래스는 외부 라이브러리와 프로그램 사이에서 의존성이 크게 줄어드는 방법으로 유용하다."),Xs.forEach(a),ls=k(s),H=e(s,"H3",{id:!0});var Ys=l(H);z=e(Ys,"A",{href:!0});var Zs=l(z);Hs=f(Zs,"정상 흐름을 정의하라"),Zs.forEach(a),Ys.forEach(a),os=k(s),B=e(s,"P",{});var gs=l(B);bs=f(gs,"앞 절에서 충고한 지침을 충실히 따른다면 비즈니스 논리와 오류 처리가 잘 분리된 코드가 나온다. 하지만 때론 중단이 적절하지 않은 방식일수도 있다. 특수 상황을 처리할 필요가 없다면 더 간결한 코드작성이 가능해진다."),gs.forEach(a),us=k(s),b=e(s,"H3",{id:!0});var sa=l(b);G=e(sa,"A",{href:!0});var aa=l(G);Cs=f(aa,"null을 반환하지 마라"),aa.forEach(a),sa.forEach(a),cs=k(s),I=e(s,"P",{});var na=l(I);Ls=f(na,"null을 반환하는 코드는 일거리를 늘릴 뿐만 아니라 호출자에게 문제를 떠넘긴다. 특수사례 케이스로 넘기거나 빈배열 등을 넘기도록 하자"),na.forEach(a),is=k(s),C=e(s,"H3",{id:!0});var ta=l(C);J=e(ta,"A",{href:!0});var pa=l(J);$s=f(pa,"null을 전달하지 마라"),pa.forEach(a),ta.forEach(a),rs=k(s),K=e(s,"P",{});var ea=l(K);Ms=f(ea,"NullpointException을 야기하는 코드는 만들지 말자"),ea.forEach(a),fs=k(s),L=e(s,"H3",{id:!0});var la=l(L);Q=e(la,"A",{href:!0});var oa=l(Q);Ds=f(oa,"결론"),oa.forEach(a),la.forEach(a),ks=k(s),V=e(s,"P",{});var ua=l(V);Fs=f(ua,"깨끗한 코드는 읽기도 좋아야 하지만 안정성도 높아야 한다. 오류 처리를 프로그램 논리와 분리하면 독립적인 추론이 가능해지며 코드 유지보수성도 크게 높아진다."),ua.forEach(a),this.h()},h(){_(c,"href","#오류-코드보다-예외를-사용하라"),_(m,"id","오류-코드보다-예외를-사용하라"),_(D,"href","#try-catch-finally-문부터-작성하라"),_(w,"id","try-catch-finally-문부터-작성하라"),_(N,"href","#미확인-예외를-사용하라"),_(h,"id","미확인-예외를-사용하라"),_(q,"href","#예외에-의미를-제공하라"),_(A,"id","예외에-의미를-제공하라"),_(R,"href","#호출자를-고려해-예외-클래스를-정의하라"),_(d,"id","호출자를-고려해-예외-클래스를-정의하라"),_(x,"class","language-java"),_(z,"href","#정상-흐름을-정의하라"),_(H,"id","정상-흐름을-정의하라"),_(G,"href","#null을-반환하지-마라"),_(b,"id","null을-반환하지-마라"),_(J,"href","#null을-전달하지-마라"),_(C,"id","null을-전달하지-마라"),_(Q,"href","#결론"),_(L,"id","결론")},m(s,n){t(s,u,n),o(u,E),t(s,y,n),t(s,m,n),o(m,c),o(c,v),t(s,P,n),t(s,M,n),o(M,_s),t(s,W,n),t(s,w,n),o(w,D),o(D,ms),t(s,X,n),t(s,F,n),o(F,vs),t(s,Y,n),t(s,j,n),o(j,Es),t(s,Z,n),t(s,h,n),o(h,N),o(N,ys),t(s,g,n),t(s,T,n),o(T,Ps),t(s,ss,n),t(s,A,n),o(A,q),o(q,ws),t(s,as,n),t(s,O,n),o(O,hs),t(s,ns,n),t(s,d,n),o(d,R),o(R,As),t(s,ts,n),t(s,S,n),o(S,ds),t(s,ps,n),t(s,x,n),x.innerHTML=fa,t(s,es,n),t(s,U,n),o(U,xs),t(s,ls,n),t(s,H,n),o(H,z),o(z,Hs),t(s,os,n),t(s,B,n),o(B,bs),t(s,us,n),t(s,b,n),o(b,G),o(G,Cs),t(s,cs,n),t(s,I,n),o(I,Ls),t(s,is,n),t(s,C,n),o(C,J),o(J,$s),t(s,rs,n),t(s,K,n),o(K,Ms),t(s,fs,n),t(s,L,n),o(L,Q),o(Q,Ds),t(s,ks,n),t(s,V,n),o(V,Fs)},p:xa,d(s){s&&a(u),s&&a(y),s&&a(m),s&&a(P),s&&a(M),s&&a(W),s&&a(w),s&&a(X),s&&a(F),s&&a(Y),s&&a(j),s&&a(Z),s&&a(h),s&&a(g),s&&a(T),s&&a(ss),s&&a(A),s&&a(as),s&&a(O),s&&a(ns),s&&a(d),s&&a(ts),s&&a(S),s&&a(ps),s&&a(x),s&&a(es),s&&a(U),s&&a(ls),s&&a(H),s&&a(os),s&&a(B),s&&a(us),s&&a(b),s&&a(cs),s&&a(I),s&&a(is),s&&a(C),s&&a(rs),s&&a(K),s&&a(fs),s&&a(L),s&&a(ks),s&&a(V)}}}function Ca($){let u,E;const y=[$[0],ra];let m={$$slots:{default:[ba]},$$scope:{ctx:$}};for(let c=0;c<y.length;c+=1)m=js(m,y[c]);return u=new Ha({props:m}),{c(){Ea(u.$$.fragment)},l(c){ya(u.$$.fragment,c)},m(c,v){Pa(u,c,v),E=!0},p(c,[v]){const P=v&1?wa(y,[v&1&&ca(c[0]),v&0&&ca(ra)]):{};v&2&&(P.$$scope={dirty:v,ctx:c}),u.$set(P)},i(c){E||(ha(u.$$.fragment,c),E=!0)},o(c){Aa(u.$$.fragment,c),E=!1},d(c){da(u,c)}}}const ra={title:"7장 오류처리",summary:"",date:"2024-01-25",published:!1};function La($,u,E){return $.$$set=y=>{E(0,u=js(js({},u),ia(y)))},u=ia(u),[u]}class Da extends _a{constructor(u){super(),ma(this,u,La,Ca,va,{})}}export{Da as component};
