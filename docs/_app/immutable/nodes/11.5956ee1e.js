import{S as Dn,i as On,s as Hn,a as Da,c as In,b as Tn,m as An,g as $n,d as rn,t as Mn,e as Rn,f as Cn,h as fn,j as e,k as i,l as c,n as l,o,p as k,q as a,r as u,u as _,v as t,w as n,x as qn}from"../chunks/index.1415e133.js";import{L as Un}from"../chunks/LayoutDefault.4ed7623e.js";function Bn(R){let r,w,d,y,f,m,L,C,Gs,ys,q,zs,ms,S,U,Js,ws,B,Ks,ds,F,Qs,Es,N,Vs,bs,h,Ws,Ps,G,Xs,Ls,x,vn=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">public</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> side<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">public</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> height<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> width<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">public</span> <span class="token class-name">Point</span> center<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> redius<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Geometry</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token class-name">Object</span> shape<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token class-name">NoSuchShapeExcpetion</span><span class="token operator">~</span>
<span class="token punctuation">&#125;</span></code>`,Ss,z,Ys,xs,j,yn=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">private</span> <span class="token class-name">Point</span> topLeft<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">double</span> side<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> side<span class="token operator">*</span>side<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,js,D,J,Zs,Ds,K,gs,Os,v,ps,sa,aa,ts,na,pa,es,ta,ea,ls,la,Hs,Q,oa,Is,V,ca,Ts,O,mn=`<code class="language-java"><span class="token operator">*</span><span class="token operator">*</span><span class="token comment">// 부적절한 기차놀이의 예 각 인자가 소유하는 객체들의 공개범위가 너무 넓다.</span>
<span class="token comment">// as-is</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> outputDir <span class="token operator">=</span> ctext<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getScracthDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// to-be** </span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token class-name">Options</span> opts <span class="token operator">=</span> ctxt<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">File</span> scractchDir <span class="token operator">=</span> opts<span class="token punctuation">.</span><span class="token function">getScratchDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> outputDir <span class="token operator">=</span> scracthDir<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token operator">*</span><span class="token operator">*</span></code>`,As,W,ua,$s,X,ia,Ms,H,wn=`<code class="language-java">ctxt<span class="token punctuation">.</span><span class="token function">getAboslutePathOfScratchDirectoryOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ctxt 객체에 공개해야 하는 메서드가 너무 많아진다</span>
ctx<span class="token punctuation">.</span><span class="token function">getScratchDirectoryOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 자료 구조를 반환 한다고 가정한다.</span></code>`,Rs,Y,ka,Cs,I,dn='<code class="language-java"><span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> ctxt<span class="token punctuation">.</span><span class="token function">createScratchFilesStream</span><span class="token punctuation">(</span>classFileName<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',qs,T,Z,ra,Us,E,os,cs,fa,_a,A,us,va,ya,g,En=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> property1<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> property2<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// Default constructor</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getProperty1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> property1<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setProperty1</span><span class="token punctuation">(</span><span class="token class-name">String</span> property1<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>property1 <span class="token operator">=</span> property1<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getProperty2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> property2<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setProperty2</span><span class="token punctuation">(</span><span class="token keyword">int</span> property2<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>property2 <span class="token operator">=</span> property2<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ma,$,is,wa,da,ks,rs,Ea,Bs,M,ss,ba,Fs,b,fs,Pa,La,_s,Sa,xa,vs,ja;return{c(){r=e("p"),w=i("변수를 비공개로 정의 하는 이유는 남들이 변수에 의존하지 않게 만들고 싶어서다."),d=c(),y=e("h3"),f=e("a"),m=i("자료 추상화"),L=c(),C=e("p"),Gs=i("변수 사이에 함수라는 계층을 넣는다고 구현이 저절로 감춰지지는 않는다. 구현을 감추려면 추상화가 필요하다. 그보다는 추상 인터페이스를 제공해 사용자가 구현을 모른 채 자료의 핵심을 조작할 수 있어야 진정한 의미의 클래스다."),ys=c(),q=e("p"),zs=i("개발자는 객체가 포함하는 자료를 표현할 가장 좋은 방법을 심각하게 고민해야 한다."),ms=c(),S=e("h3"),U=e("a"),Js=i("자료/객체 비대칭"),ws=c(),B=e("p"),Ks=i("객체와 자료 구조는 근본적으로 양분된다."),ds=c(),F=e("p"),Qs=i("절차적인 코드는 기존 자료 구조를 변경하지 않으면서 새 함수를 추가하기 쉽다. 반면, 객체 지향 코드는 기존 함수를 변경하지 않으면서 새 클래스를 추가하기 쉽다."),Es=c(),N=e("p"),Vs=i("절차적인 코드는 새로운 자료 구조를 추가하기 어렵다. 그러려면 모든 함수를 고쳐야 한다. 객체 지향 코드는 새로운 함수를 추가하기 어렵다. 그러려면 모든 클래스를 고쳐야 한다."),bs=c(),h=e("p"),Ws=i("다시 말하자면 둘다 참이다. 객체 지향코드에서 어려운 변경은 절차적인 코드에서 쉬우며, 절차적인 코드에서 어려운 변경은 객체 지향 코드에서 쉽다."),Ps=c(),G=e("p"),Xs=i("절차적인 접근법은 아래와 같다."),Ls=c(),x=e("pre"),Ss=c(),z=e("p"),Ys=i("다형성 접근예시는 아래와 같다."),xs=c(),j=e("pre"),js=c(),D=e("h3"),J=e("a"),Zs=i("디미터 법칙"),Ds=c(),K=e("p"),gs=i("디미터 법칙이란 모듈은 자신이 조작하는 객체의 속사정을 몰라야 한다는 법칙이다. 예를 들어 클래스 C의 메서드 f는 다음과 같은 메서드만 호출해야 한다"),Os=c(),v=e("ul"),ps=e("li"),sa=i("클래스 그 자체"),aa=c(),ts=e("li"),na=i("함수로 인해 생성된 객체"),pa=c(),es=e("li"),ta=i("함수의 인수로 넘어온 객체"),ea=c(),ls=e("li"),la=i("클래스의 인스턴스 변수에 저장된 객체"),Hs=c(),Q=e("p"),oa=i("객체라면 내부 구조를 숨겨야 하므로 확실히 디미터 법칙을 위반한다. 자료구조 라면 내부 구조를 노출하므로 디미터 법칙이 적용되지 않는다."),Is=c(),V=e("p"),ca=i("아래는 기차놀이의 예로 함수들이 호출하는 객체의 인스턴스 공개범위가 너무 넓기 때문에 기차놀이를 하는 예이다."),Ts=c(),O=e("pre"),As=c(),W=e("p"),ua=i("절반은 객체, 절반은 자료 구조인 잡종 구조가 나온다. 이런 잡종 구조는 새로운 함수는 물론이고 새로운 자료 구조도 추가하기 어렵다. 단점만 모아놓은 구조이다."),$s=c(),X=e("p"),ia=i("그렇다면 임시 디렉토러의 절대 경로는 어떻게 얻어야 좋을까?"),Ms=c(),H=e("pre"),Rs=c(),Y=e("p"),ka=i(`그렇다면 ctxt 객체에 임시 파일을 생성하라고 시키면 어떨까?
객체에게 맡기기에 적당한 임무로 보인다!`),Cs=c(),I=e("pre"),qs=c(),T=e("h3"),Z=e("a"),ra=i("자료 전달 객체"),Us=c(),E=e("ul"),os=e("li"),cs=e("p"),fa=i("자료 구조체의 전형적인 형태는 공개 변수만 있고 함수가 없는 클래스이다. 이런 자료구조체를 DTO(Data Transfer Object)라 한다."),_a=c(),A=e("li"),us=e("p"),va=i("좀더 일반적인 형태는 Bean 구조이다. 비공개 변수를 조회 설정 함수로 조작하는 방식. 사이비 캡슐화로 일부 순수주의자나 만족시킬뿐 별다른 이익을 제공하지 않는다."),ya=c(),g=e("pre"),ma=c(),$=e("li"),is=e("p"),wa=i("활성 레코드"),da=c(),ks=e("ul"),rs=e("li"),Ea=i("공개 변수가 있거나 비공개 변수에 조회/설정 함수가 있는 자료구조, 대게 save나 find와 같이 탐색함수도 제공한다. 불행히도 비즈니스 규칙 메서드를 추가해 이런 자료 구조를 개체로 취급하는 개발자가 흔하다. 하지만 이는 바람직하지 않다. 활성 레코드는 자료 구조로 취급한다."),Bs=c(),M=e("h3"),ss=e("a"),ba=i("결론"),Fs=c(),b=e("ul"),fs=e("li"),Pa=i("객체는 동작을 공개하고 자료를 숨긴다. 기존 동작을 변경하지 않으면서 객체 타입을 추가하기는 쉬운 반면 기존 객체에 새 동작을 추가하기는 어렵다."),La=c(),_s=e("li"),Sa=i("자료 구조는 동작 없이 자료를 노출한다. 기존 자료 구조에 새 동작을 추가하기 쉬우나, 기존 함수에 새 자료 구조를 추가하기는 어렵다."),xa=c(),vs=e("li"),ja=i("시스템을 구현할때 새로운 자료 타입을 추가하는 유연셩이 필요하면 객체가 더 적합하다. 새로운 동작을 추가하는 유연성이 필요하면 절차적인 코드가 더 적합하다. 어느쪽이 맞는가는 상황에 따라 다르다."),this.h()},l(s){r=l(s,"P",{});var p=o(r);w=k(p,"변수를 비공개로 정의 하는 이유는 남들이 변수에 의존하지 않게 만들고 싶어서다."),p.forEach(a),d=u(s),y=l(s,"H3",{id:!0});var Oa=o(y);f=l(Oa,"A",{href:!0});var Ha=o(f);m=k(Ha,"자료 추상화"),Ha.forEach(a),Oa.forEach(a),L=u(s),C=l(s,"P",{});var Ia=o(C);Gs=k(Ia,"변수 사이에 함수라는 계층을 넣는다고 구현이 저절로 감춰지지는 않는다. 구현을 감추려면 추상화가 필요하다. 그보다는 추상 인터페이스를 제공해 사용자가 구현을 모른 채 자료의 핵심을 조작할 수 있어야 진정한 의미의 클래스다."),Ia.forEach(a),ys=u(s),q=l(s,"P",{});var Ta=o(q);zs=k(Ta,"개발자는 객체가 포함하는 자료를 표현할 가장 좋은 방법을 심각하게 고민해야 한다."),Ta.forEach(a),ms=u(s),S=l(s,"H3",{id:!0});var Aa=o(S);U=l(Aa,"A",{href:!0});var $a=o(U);Js=k($a,"자료/객체 비대칭"),$a.forEach(a),Aa.forEach(a),ws=u(s),B=l(s,"P",{});var Ma=o(B);Ks=k(Ma,"객체와 자료 구조는 근본적으로 양분된다."),Ma.forEach(a),ds=u(s),F=l(s,"P",{});var Ra=o(F);Qs=k(Ra,"절차적인 코드는 기존 자료 구조를 변경하지 않으면서 새 함수를 추가하기 쉽다. 반면, 객체 지향 코드는 기존 함수를 변경하지 않으면서 새 클래스를 추가하기 쉽다."),Ra.forEach(a),Es=u(s),N=l(s,"P",{});var Ca=o(N);Vs=k(Ca,"절차적인 코드는 새로운 자료 구조를 추가하기 어렵다. 그러려면 모든 함수를 고쳐야 한다. 객체 지향 코드는 새로운 함수를 추가하기 어렵다. 그러려면 모든 클래스를 고쳐야 한다."),Ca.forEach(a),bs=u(s),h=l(s,"P",{});var qa=o(h);Ws=k(qa,"다시 말하자면 둘다 참이다. 객체 지향코드에서 어려운 변경은 절차적인 코드에서 쉬우며, 절차적인 코드에서 어려운 변경은 객체 지향 코드에서 쉽다."),qa.forEach(a),Ps=u(s),G=l(s,"P",{});var Ua=o(G);Xs=k(Ua,"절차적인 접근법은 아래와 같다."),Ua.forEach(a),Ls=u(s),x=l(s,"PRE",{class:!0});var bn=o(x);bn.forEach(a),Ss=u(s),z=l(s,"P",{});var Ba=o(z);Ys=k(Ba,"다형성 접근예시는 아래와 같다."),Ba.forEach(a),xs=u(s),j=l(s,"PRE",{class:!0});var Pn=o(j);Pn.forEach(a),js=u(s),D=l(s,"H3",{id:!0});var Fa=o(D);J=l(Fa,"A",{href:!0});var Na=o(J);Zs=k(Na,"디미터 법칙"),Na.forEach(a),Fa.forEach(a),Ds=u(s),K=l(s,"P",{});var ha=o(K);gs=k(ha,"디미터 법칙이란 모듈은 자신이 조작하는 객체의 속사정을 몰라야 한다는 법칙이다. 예를 들어 클래스 C의 메서드 f는 다음과 같은 메서드만 호출해야 한다"),ha.forEach(a),Os=u(s),v=l(s,"UL",{});var P=o(v);ps=l(P,"LI",{});var Ga=o(ps);sa=k(Ga,"클래스 그 자체"),Ga.forEach(a),aa=u(P),ts=l(P,"LI",{});var za=o(ts);na=k(za,"함수로 인해 생성된 객체"),za.forEach(a),pa=u(P),es=l(P,"LI",{});var Ja=o(es);ta=k(Ja,"함수의 인수로 넘어온 객체"),Ja.forEach(a),ea=u(P),ls=l(P,"LI",{});var Ka=o(ls);la=k(Ka,"클래스의 인스턴스 변수에 저장된 객체"),Ka.forEach(a),P.forEach(a),Hs=u(s),Q=l(s,"P",{});var Qa=o(Q);oa=k(Qa,"객체라면 내부 구조를 숨겨야 하므로 확실히 디미터 법칙을 위반한다. 자료구조 라면 내부 구조를 노출하므로 디미터 법칙이 적용되지 않는다."),Qa.forEach(a),Is=u(s),V=l(s,"P",{});var Va=o(V);ca=k(Va,"아래는 기차놀이의 예로 함수들이 호출하는 객체의 인스턴스 공개범위가 너무 넓기 때문에 기차놀이를 하는 예이다."),Va.forEach(a),Ts=u(s),O=l(s,"PRE",{class:!0});var Ln=o(O);Ln.forEach(a),As=u(s),W=l(s,"P",{});var Wa=o(W);ua=k(Wa,"절반은 객체, 절반은 자료 구조인 잡종 구조가 나온다. 이런 잡종 구조는 새로운 함수는 물론이고 새로운 자료 구조도 추가하기 어렵다. 단점만 모아놓은 구조이다."),Wa.forEach(a),$s=u(s),X=l(s,"P",{});var Xa=o(X);ia=k(Xa,"그렇다면 임시 디렉토러의 절대 경로는 어떻게 얻어야 좋을까?"),Xa.forEach(a),Ms=u(s),H=l(s,"PRE",{class:!0});var Sn=o(H);Sn.forEach(a),Rs=u(s),Y=l(s,"P",{});var Ya=o(Y);ka=k(Ya,`그렇다면 ctxt 객체에 임시 파일을 생성하라고 시키면 어떨까?
객체에게 맡기기에 적당한 임무로 보인다!`),Ya.forEach(a),Cs=u(s),I=l(s,"PRE",{class:!0});var xn=o(I);xn.forEach(a),qs=u(s),T=l(s,"H3",{id:!0});var Za=o(T);Z=l(Za,"A",{href:!0});var ga=o(Z);ra=k(ga,"자료 전달 객체"),ga.forEach(a),Za.forEach(a),Us=u(s),E=l(s,"UL",{});var as=o(E);os=l(as,"LI",{});var sn=o(os);cs=l(sn,"P",{});var an=o(cs);fa=k(an,"자료 구조체의 전형적인 형태는 공개 변수만 있고 함수가 없는 클래스이다. 이런 자료구조체를 DTO(Data Transfer Object)라 한다."),an.forEach(a),sn.forEach(a),_a=u(as),A=l(as,"LI",{});var Ns=o(A);us=l(Ns,"P",{});var nn=o(us);va=k(nn,"좀더 일반적인 형태는 Bean 구조이다. 비공개 변수를 조회 설정 함수로 조작하는 방식. 사이비 캡슐화로 일부 순수주의자나 만족시킬뿐 별다른 이익을 제공하지 않는다."),nn.forEach(a),ya=u(Ns),g=l(Ns,"PRE",{class:!0});var jn=o(g);jn.forEach(a),Ns.forEach(a),ma=u(as),$=l(as,"LI",{});var hs=o($);is=l(hs,"P",{});var pn=o(is);wa=k(pn,"활성 레코드"),pn.forEach(a),da=u(hs),ks=l(hs,"UL",{});var tn=o(ks);rs=l(tn,"LI",{});var en=o(rs);Ea=k(en,"공개 변수가 있거나 비공개 변수에 조회/설정 함수가 있는 자료구조, 대게 save나 find와 같이 탐색함수도 제공한다. 불행히도 비즈니스 규칙 메서드를 추가해 이런 자료 구조를 개체로 취급하는 개발자가 흔하다. 하지만 이는 바람직하지 않다. 활성 레코드는 자료 구조로 취급한다."),en.forEach(a),tn.forEach(a),hs.forEach(a),as.forEach(a),Bs=u(s),M=l(s,"H3",{id:!0});var ln=o(M);ss=l(ln,"A",{href:!0});var on=o(ss);ba=k(on,"결론"),on.forEach(a),ln.forEach(a),Fs=u(s),b=l(s,"UL",{});var ns=o(b);fs=l(ns,"LI",{});var cn=o(fs);Pa=k(cn,"객체는 동작을 공개하고 자료를 숨긴다. 기존 동작을 변경하지 않으면서 객체 타입을 추가하기는 쉬운 반면 기존 객체에 새 동작을 추가하기는 어렵다."),cn.forEach(a),La=u(ns),_s=l(ns,"LI",{});var un=o(_s);Sa=k(un,"자료 구조는 동작 없이 자료를 노출한다. 기존 자료 구조에 새 동작을 추가하기 쉬우나, 기존 함수에 새 자료 구조를 추가하기는 어렵다."),un.forEach(a),xa=u(ns),vs=l(ns,"LI",{});var kn=o(vs);ja=k(kn,"시스템을 구현할때 새로운 자료 타입을 추가하는 유연셩이 필요하면 객체가 더 적합하다. 새로운 동작을 추가하는 유연성이 필요하면 절차적인 코드가 더 적합하다. 어느쪽이 맞는가는 상황에 따라 다르다."),kn.forEach(a),ns.forEach(a),this.h()},h(){_(f,"href","#자료-추상화"),_(y,"id","자료-추상화"),_(U,"href","#자료객체-비대칭"),_(S,"id","자료객체-비대칭"),_(x,"class","language-java"),_(j,"class","language-java"),_(J,"href","#디미터-법칙"),_(D,"id","디미터-법칙"),_(O,"class","language-java"),_(H,"class","language-java"),_(I,"class","language-java"),_(Z,"href","#자료-전달-객체"),_(T,"id","자료-전달-객체"),_(g,"class","language-java"),_(ss,"href","#결론"),_(M,"id","결론")},m(s,p){t(s,r,p),n(r,w),t(s,d,p),t(s,y,p),n(y,f),n(f,m),t(s,L,p),t(s,C,p),n(C,Gs),t(s,ys,p),t(s,q,p),n(q,zs),t(s,ms,p),t(s,S,p),n(S,U),n(U,Js),t(s,ws,p),t(s,B,p),n(B,Ks),t(s,ds,p),t(s,F,p),n(F,Qs),t(s,Es,p),t(s,N,p),n(N,Vs),t(s,bs,p),t(s,h,p),n(h,Ws),t(s,Ps,p),t(s,G,p),n(G,Xs),t(s,Ls,p),t(s,x,p),x.innerHTML=vn,t(s,Ss,p),t(s,z,p),n(z,Ys),t(s,xs,p),t(s,j,p),j.innerHTML=yn,t(s,js,p),t(s,D,p),n(D,J),n(J,Zs),t(s,Ds,p),t(s,K,p),n(K,gs),t(s,Os,p),t(s,v,p),n(v,ps),n(ps,sa),n(v,aa),n(v,ts),n(ts,na),n(v,pa),n(v,es),n(es,ta),n(v,ea),n(v,ls),n(ls,la),t(s,Hs,p),t(s,Q,p),n(Q,oa),t(s,Is,p),t(s,V,p),n(V,ca),t(s,Ts,p),t(s,O,p),O.innerHTML=mn,t(s,As,p),t(s,W,p),n(W,ua),t(s,$s,p),t(s,X,p),n(X,ia),t(s,Ms,p),t(s,H,p),H.innerHTML=wn,t(s,Rs,p),t(s,Y,p),n(Y,ka),t(s,Cs,p),t(s,I,p),I.innerHTML=dn,t(s,qs,p),t(s,T,p),n(T,Z),n(Z,ra),t(s,Us,p),t(s,E,p),n(E,os),n(os,cs),n(cs,fa),n(E,_a),n(E,A),n(A,us),n(us,va),n(A,ya),n(A,g),g.innerHTML=En,n(E,ma),n(E,$),n($,is),n(is,wa),n($,da),n($,ks),n(ks,rs),n(rs,Ea),t(s,Bs,p),t(s,M,p),n(M,ss),n(ss,ba),t(s,Fs,p),t(s,b,p),n(b,fs),n(fs,Pa),n(b,La),n(b,_s),n(_s,Sa),n(b,xa),n(b,vs),n(vs,ja)},p:qn,d(s){s&&a(r),s&&a(d),s&&a(y),s&&a(L),s&&a(C),s&&a(ys),s&&a(q),s&&a(ms),s&&a(S),s&&a(ws),s&&a(B),s&&a(ds),s&&a(F),s&&a(Es),s&&a(N),s&&a(bs),s&&a(h),s&&a(Ps),s&&a(G),s&&a(Ls),s&&a(x),s&&a(Ss),s&&a(z),s&&a(xs),s&&a(j),s&&a(js),s&&a(D),s&&a(Ds),s&&a(K),s&&a(Os),s&&a(v),s&&a(Hs),s&&a(Q),s&&a(Is),s&&a(V),s&&a(Ts),s&&a(O),s&&a(As),s&&a(W),s&&a($s),s&&a(X),s&&a(Ms),s&&a(H),s&&a(Rs),s&&a(Y),s&&a(Cs),s&&a(I),s&&a(qs),s&&a(T),s&&a(Us),s&&a(E),s&&a(Bs),s&&a(M),s&&a(Fs),s&&a(b)}}}function Fn(R){let r,w;const d=[R[0],_n];let y={$$slots:{default:[Bn]},$$scope:{ctx:R}};for(let f=0;f<d.length;f+=1)y=Da(y,d[f]);return r=new Un({props:y}),{c(){In(r.$$.fragment)},l(f){Tn(r.$$.fragment,f)},m(f,m){An(r,f,m),w=!0},p(f,[m]){const L=m&1?$n(d,[m&1&&rn(f[0]),m&0&&rn(_n)]):{};m&2&&(L.$$scope={dirty:m,ctx:f}),r.$set(L)},i(f){w||(Mn(r.$$.fragment,f),w=!0)},o(f){Rn(r.$$.fragment,f),w=!1},d(f){Cn(r,f)}}}const _n={title:"6장 객체와 자료구조",summary:"",date:"2024-01-20",published:!1};function Nn(R,r,w){return R.$$set=d=>{w(0,r=Da(Da({},r),fn(d)))},r=fn(r),[r]}class zn extends Dn{constructor(r){super(),On(this,r,Nn,Fn,Hn,{})}}export{zn as component};