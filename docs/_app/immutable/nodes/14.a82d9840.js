import{S as mt,i as _t,s as vt,a as oa,c as Et,b as Pt,m as wt,g as dt,d as st,t as Tt,e as ht,f as yt,h as at,j as o,k as l,l as i,n as e,o as c,p as u,q as s,r as k,u as m,v as p,w as t,x as Ot}from"../chunks/index.1415e133.js";import{L as Rt}from"../chunks/LayoutDefault.4ed7623e.js";function bt(Y){let r,E,P,_,f,v,h,y,fn,rs,fs,gn,O,mn,ms,_s,An,R,_n,vs,Es,Dn,j,Ps,In,b,$,ws,Hn,w,ds,vn,Ts,hs,Cn,S,X,ys,Mn,d,Os,En,Rs,bs,qn,F,Pn,Ss,xn,L,pt=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetPageHierarchyAsXml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span>
  <span class="token function">makePages</span><span class="token punctuation">(</span><span class="token string">"PageOne"</span><span class="token punctuation">,</span> <span class="token string">"PageOne.ChildOne"</span><span class="token punctuation">,</span> <span class="token string">"PageTwo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">submitRequest</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"type:pages"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">assertResponseIsXML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertResponseContains</span><span class="token punctuation">(</span>
    <span class="token string">"&lt;name>PageOne&lt;/name>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;name>PageTwo&lt;/name>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;name>ChildOne&lt;/name>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSymbolicLinksAreNotInXmlPageHierarchy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span>
  <span class="token class-name">WikiPage</span> page <span class="token operator">=</span> <span class="token function">makePage</span><span class="token punctuation">(</span><span class="token string">"PageOne"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">makePages</span><span class="token punctuation">(</span><span class="token string">"PageOne.ChildOne"</span><span class="token punctuation">,</span> <span class="token string">"PageTwo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">addLinkTo</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token string">"PageTwo"</span><span class="token punctuation">,</span> <span class="token string">"SymPage"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">submitRequest</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"type:pages"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">assertResponseIsXML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertResponseContains</span><span class="token punctuation">(</span>
    <span class="token string">"&lt;name>PageOne&lt;/name>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;name>PageTwo&lt;/name>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;name>ChildOne&lt;/name>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertResponseDoesNotContain</span><span class="token punctuation">(</span><span class="token string">"SymPage"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetDataAsXml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span>
  <span class="token function">makePageWithContent</span><span class="token punctuation">(</span><span class="token string">"TestPageOne"</span><span class="token punctuation">,</span> <span class="token string">"test page"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">submitRequest</span><span class="token punctuation">(</span><span class="token string">"TestPageOne"</span><span class="token punctuation">,</span> <span class="token string">"type:data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">assertResponseIsXML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertResponseContains</span><span class="token punctuation">(</span><span class="token string">"test page"</span><span class="token punctuation">,</span> <span class="token string">"&lt;Test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Gn,g,B,Ls,Nn,U,gs,Yn,A,W,As,jn,K,Ds,$n,D,ot=`<code class="language-java"><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">turnOnLoTempAlarmAtThreashold</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span>
  hw<span class="token punctuation">.</span><span class="token function">setTemp</span><span class="token punctuation">(</span><span class="token constant">WAY_TOO_COLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  controller<span class="token punctuation">.</span><span class="token function">tic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertTrue</span><span class="token punctuation">(</span>hw<span class="token punctuation">.</span><span class="token function">heaterState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
  <span class="token function">assertTrue</span><span class="token punctuation">(</span>hw<span class="token punctuation">.</span><span class="token function">blowerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertFalse</span><span class="token punctuation">(</span>hw<span class="token punctuation">.</span><span class="token function">coolerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertFalse</span><span class="token punctuation">(</span>hw<span class="token punctuation">.</span><span class="token function">hiTempAlarm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
  <span class="token function">assertTrue</span><span class="token punctuation">(</span>hw<span class="token punctuation">.</span><span class="token function">loTempAlarm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Xn,I,et=`<code class="language-java"><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">turnOnLoTempAlarmAtThreshold</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span>
  <span class="token function">wayTooCold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"HBchL"</span><span class="token punctuation">,</span> hw<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">&#125;</span></code>`,Fn,H,V,Is,Bn,C,ct=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetPageHierarchyAsXml</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span> 
  <span class="token function">givenPages</span><span class="token punctuation">(</span><span class="token string">"PageOne"</span><span class="token punctuation">,</span> <span class="token string">"PageOne.ChildOne"</span><span class="token punctuation">,</span> <span class="token string">"PageTwo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">whenRequestIsIssued</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"type:pages"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">thenResponseShouldBeXML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetPageHierarchyHasRightTags</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">&#123;</span> 
  <span class="token function">givenPages</span><span class="token punctuation">(</span><span class="token string">"PageOne"</span><span class="token punctuation">,</span> <span class="token string">"PageOne.ChildOne"</span><span class="token punctuation">,</span> <span class="token string">"PageTwo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">whenRequestIsIssued</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"type:pages"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">thenResponseShouldContain</span><span class="token punctuation">(</span>
    <span class="token string">"&lt;name>PageOne&lt;/name>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;name>PageTwo&lt;/name>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;name>ChildOne&lt;/name>"</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">&#125;</span></code>`,Un,z,Hs,Wn,J,Cs,Kn,M,Q,Ms,Vn,q,lt=`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAddMonths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token class-name">SerialDate</span> d1 <span class="token operator">=</span> <span class="token class-name">SerialDate</span><span class="token punctuation">.</span><span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2004</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">SerialDate</span> d2 <span class="token operator">=</span> <span class="token class-name">SerialDate</span><span class="token punctuation">.</span><span class="token function">addMonths</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> d1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> d2<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> d2<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2004</span><span class="token punctuation">,</span> d2<span class="token punctuation">.</span><span class="token function">getYYYY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">SerialDate</span> d3 <span class="token operator">=</span> <span class="token class-name">SerialDate</span><span class="token punctuation">.</span><span class="token function">addMonths</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> d1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">,</span> d3<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> d3<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2004</span><span class="token punctuation">,</span> d3<span class="token punctuation">.</span><span class="token function">getYYYY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">SerialDate</span> d4 <span class="token operator">=</span> <span class="token class-name">SerialDate</span><span class="token punctuation">.</span><span class="token function">addMonths</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">SerialDate</span><span class="token punctuation">.</span><span class="token function">addMonths</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> d1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> d4<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> d4<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2004</span><span class="token punctuation">,</span> d4<span class="token punctuation">.</span><span class="token function">getYYYY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,zn,Z,qs,Jn,T,nn,xs,x,wn,Gs,Ns,dn,Ys,js,sn,$s,Tn,hn,Xs,Qn,an,Fs,Zn,G,tn,yn,Bs,ns,pn,Us,ss,on,On,Ws,as,en,Rn,Ks,ts,cn,bn,Vs,ps,ln,Sn,zs,os,un,Ln,Js,es,N,kn,Qs,cs,rn,Zs;return{c(){r=o("p"),E=l("코드를 테스트 하는 테스트코드는 없었던 개념이였지만, 애자일과 TDD의 영향으로 많은 개발자들이 자동화된 유닛테스트를 만들고 있다."),P=i(),_=o("h3"),f=o("a"),v=l("The Three Laws of TDD"),h=i(),y=o("p"),fn=o("strong"),rs=l("첫째 법칙:"),fs=l(" 실패하는 단위 테스트를 작성할 때까지 실제 코드를 작성하지 않는다."),gn=i(),O=o("p"),mn=o("strong"),ms=l("둘째 법칙:"),_s=l(" 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다."),An=i(),R=o("p"),_n=o("strong"),vs=l("셋째 법칙:"),Es=l(" 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다."),Dn=i(),j=o("p"),Ps=l("위 법칙을 따르면 엄청난 양의 테스트 코드가 등장한다. 사실상 모든 코드를 테스트 하는수준"),In=i(),b=o("h3"),$=o("a"),ws=l("깨끗한 테스트 코드 유지하기"),Hn=i(),w=o("p"),ds=l("테스트 코드를 막짜선 안된다, 사실상 관리가 어려워서 폐기하는 코드가 나중에는 등장할것. 테스트 코드를 짜는 노력이 허사가 되지 않게 실제 코드 못지 않게 깨끗하게 짜야 한다. "),vn=o("strong"),Ts=l("코드에 유연성, 유지보수성, 재사용성을 제공하는 버팀목이 단위 테스트이다."),hs=l(" 테스트코드가 있으면 변경에 대한 공포도 줄어들고 유연성도 증가한다. 테스트 코드가 지저분하면 실제 코드도 망가진다"),Cn=i(),S=o("h3"),X=o("a"),ys=l("깨끗한 테스트 코드"),Mn=i(),d=o("p"),Os=l("깨끗한 코드를 만드려면 "),En=o("strong"),Rs=l("가독성"),bs=l(" 이 필요하다"),qn=i(),F=o("p"),Pn=o("strong"),Ss=l("BUILD-OPERATE-CHECK 패턴 → 테스트 자료 만들기, 자료 조작, 결과 확인"),xn=i(),L=o("pre"),Gn=i(),g=o("h3"),B=o("a"),Ls=l("도메인에 특화된 테스트 언어"),Nn=i(),U=o("p"),gs=l("시스템 조작 API를 사용하기보단 테스트를 위한 함수와 유틸리티를 이용하면 보다 간결한 테스트 코드를 작성할수 있게된다."),Yn=i(),A=o("h3"),W=o("a"),As=l("이중 표준"),jn=i(),K=o("p"),Ds=l("테스트 API에 적용하는 표준은 실제 코드에 들어가는 표준과는 다를수 있다. 실제 코드만큼 효율적인 필요는 없고 환경도 판이하게 다르기 때문이다."),$n=i(),D=o("pre"),Xn=i(),I=o("pre"),Fn=i(),H=o("h3"),V=o("a"),Is=l("테스트 당 assert 하나"),Bn=i(),C=o("pre"),Un=i(),z=o("p"),Hs=l("위에서 보듯 테스트 코드를 분리하면 중복되는 경우가 많아진다"),Wn=i(),J=o("p"),Cs=l("이 부분은 템플릿 메서드를 사용하면 중복을 많이 줄일수 있다(given-when-then)"),Kn=i(),M=o("h3"),Q=o("a"),Ms=l("테스트당 개념 하나"),Vn=i(),q=o("pre"),zn=i(),Z=o("p"),qs=l("테스트가 내포하는 의미"),Jn=i(),T=o("ul"),nn=o("li"),xs=l("(5월처럼) 31일로 끝나는 달의 마지막 날짜가 주어지는 경우"),x=o("ol"),wn=o("li"),Gs=l("(6월처럼) 30일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되어서는 안 된다."),Ns=i(),dn=o("li"),Ys=l("두 달을 더하면 그리고 두 번째 달이 31일로 끝나면 날짜는 31일이 되어야 한다."),js=i(),sn=o("li"),$s=l("(6월처럼) 30일로 끝나는 달의 마지막 날짜가 주어지는 경우"),Tn=o("ol"),hn=o("li"),Xs=l("31일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되면 안 된다."),Qn=i(),an=o("p"),Fs=l("이렇게 코드가 장황해지면 읽기에 불편할수 있다. 한 테스트에 한개의 개념만 채택하자"),Zn=i(),G=o("h3"),tn=o("a"),yn=o("strong"),Bs=l("F.I.R.S.T"),ns=i(),pn=o("p"),Us=l("테스트는 아래 5가지 요소를 충족해야 한다"),ss=i(),on=o("p"),On=o("strong"),Ws=l("빠르게Fast"),as=i(),en=o("p"),Rn=o("strong"),Ks=l("독립적으로Independent → 테스트간 의존관계가 있으면 안된다"),ts=i(),cn=o("p"),bn=o("strong"),Vs=l("반복가능하게Repeatable → 환경에 구애받지 않는"),ps=i(),ln=o("p"),Sn=o("strong"),zs=l("자가검증하는Self-Validating → 테스트가 스스로 bool로 결론나야 한다"),os=i(),un=o("p"),Ln=o("strong"),Js=l("적시에Timely → 테스트 코드를 만들고 운영코드를 작성하라"),es=i(),N=o("h3"),kn=o("a"),Qs=l("결론"),cs=i(),rn=o("p"),Zs=l("깨끗한 테스트코드는 실제 코드의 유지보수성, 재사용성의 보존을 강화하고 프로젝트를 건강하게 해준다. 지속적으로 코드를 꺠끗하게 관리하고 간결하게 정리하도록하자"),this.h()},l(n){r=e(n,"P",{});var a=c(r);E=u(a,"코드를 테스트 하는 테스트코드는 없었던 개념이였지만, 애자일과 TDD의 영향으로 많은 개발자들이 자동화된 유닛테스트를 만들고 있다."),a.forEach(s),P=k(n),_=e(n,"H3",{id:!0});var ea=c(_);f=e(ea,"A",{href:!0});var ca=c(f);v=u(ca,"The Three Laws of TDD"),ca.forEach(s),ea.forEach(s),h=k(n),y=e(n,"P",{});var na=c(y);fn=e(na,"STRONG",{});var la=c(fn);rs=u(la,"첫째 법칙:"),la.forEach(s),fs=u(na," 실패하는 단위 테스트를 작성할 때까지 실제 코드를 작성하지 않는다."),na.forEach(s),gn=k(n),O=e(n,"P",{});var sa=c(O);mn=e(sa,"STRONG",{});var ua=c(mn);ms=u(ua,"둘째 법칙:"),ua.forEach(s),_s=u(sa," 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다."),sa.forEach(s),An=k(n),R=e(n,"P",{});var aa=c(R);_n=e(aa,"STRONG",{});var ia=c(_n);vs=u(ia,"셋째 법칙:"),ia.forEach(s),Es=u(aa," 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다."),aa.forEach(s),Dn=k(n),j=e(n,"P",{});var ka=c(j);Ps=u(ka,"위 법칙을 따르면 엄청난 양의 테스트 코드가 등장한다. 사실상 모든 코드를 테스트 하는수준"),ka.forEach(s),In=k(n),b=e(n,"H3",{id:!0});var ra=c(b);$=e(ra,"A",{href:!0});var fa=c($);ws=u(fa,"깨끗한 테스트 코드 유지하기"),fa.forEach(s),ra.forEach(s),Hn=k(n),w=e(n,"P",{});var ls=c(w);ds=u(ls,"테스트 코드를 막짜선 안된다, 사실상 관리가 어려워서 폐기하는 코드가 나중에는 등장할것. 테스트 코드를 짜는 노력이 허사가 되지 않게 실제 코드 못지 않게 깨끗하게 짜야 한다. "),vn=e(ls,"STRONG",{});var ma=c(vn);Ts=u(ma,"코드에 유연성, 유지보수성, 재사용성을 제공하는 버팀목이 단위 테스트이다."),ma.forEach(s),hs=u(ls," 테스트코드가 있으면 변경에 대한 공포도 줄어들고 유연성도 증가한다. 테스트 코드가 지저분하면 실제 코드도 망가진다"),ls.forEach(s),Cn=k(n),S=e(n,"H3",{id:!0});var _a=c(S);X=e(_a,"A",{href:!0});var va=c(X);ys=u(va,"깨끗한 테스트 코드"),va.forEach(s),_a.forEach(s),Mn=k(n),d=e(n,"P",{});var us=c(d);Os=u(us,"깨끗한 코드를 만드려면 "),En=e(us,"STRONG",{});var Ea=c(En);Rs=u(Ea,"가독성"),Ea.forEach(s),bs=u(us," 이 필요하다"),us.forEach(s),qn=k(n),F=e(n,"P",{});var Pa=c(F);Pn=e(Pa,"STRONG",{});var wa=c(Pn);Ss=u(wa,"BUILD-OPERATE-CHECK 패턴 → 테스트 자료 만들기, 자료 조작, 결과 확인"),wa.forEach(s),Pa.forEach(s),xn=k(n),L=e(n,"PRE",{class:!0});var ut=c(L);ut.forEach(s),Gn=k(n),g=e(n,"H3",{id:!0});var da=c(g);B=e(da,"A",{href:!0});var Ta=c(B);Ls=u(Ta,"도메인에 특화된 테스트 언어"),Ta.forEach(s),da.forEach(s),Nn=k(n),U=e(n,"P",{});var ha=c(U);gs=u(ha,"시스템 조작 API를 사용하기보단 테스트를 위한 함수와 유틸리티를 이용하면 보다 간결한 테스트 코드를 작성할수 있게된다."),ha.forEach(s),Yn=k(n),A=e(n,"H3",{id:!0});var ya=c(A);W=e(ya,"A",{href:!0});var Oa=c(W);As=u(Oa,"이중 표준"),Oa.forEach(s),ya.forEach(s),jn=k(n),K=e(n,"P",{});var Ra=c(K);Ds=u(Ra,"테스트 API에 적용하는 표준은 실제 코드에 들어가는 표준과는 다를수 있다. 실제 코드만큼 효율적인 필요는 없고 환경도 판이하게 다르기 때문이다."),Ra.forEach(s),$n=k(n),D=e(n,"PRE",{class:!0});var it=c(D);it.forEach(s),Xn=k(n),I=e(n,"PRE",{class:!0});var kt=c(I);kt.forEach(s),Fn=k(n),H=e(n,"H3",{id:!0});var ba=c(H);V=e(ba,"A",{href:!0});var Sa=c(V);Is=u(Sa,"테스트 당 assert 하나"),Sa.forEach(s),ba.forEach(s),Bn=k(n),C=e(n,"PRE",{class:!0});var rt=c(C);rt.forEach(s),Un=k(n),z=e(n,"P",{});var La=c(z);Hs=u(La,"위에서 보듯 테스트 코드를 분리하면 중복되는 경우가 많아진다"),La.forEach(s),Wn=k(n),J=e(n,"P",{});var ga=c(J);Cs=u(ga,"이 부분은 템플릿 메서드를 사용하면 중복을 많이 줄일수 있다(given-when-then)"),ga.forEach(s),Kn=k(n),M=e(n,"H3",{id:!0});var Aa=c(M);Q=e(Aa,"A",{href:!0});var Da=c(Q);Ms=u(Da,"테스트당 개념 하나"),Da.forEach(s),Aa.forEach(s),Vn=k(n),q=e(n,"PRE",{class:!0});var ft=c(q);ft.forEach(s),zn=k(n),Z=e(n,"P",{});var Ia=c(Z);qs=u(Ia,"테스트가 내포하는 의미"),Ia.forEach(s),Jn=k(n),T=e(n,"UL",{});var is=c(T);nn=e(is,"LI",{});var ta=c(nn);xs=u(ta,"(5월처럼) 31일로 끝나는 달의 마지막 날짜가 주어지는 경우"),x=e(ta,"OL",{});var ks=c(x);wn=e(ks,"LI",{});var Ha=c(wn);Gs=u(Ha,"(6월처럼) 30일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되어서는 안 된다."),Ha.forEach(s),Ns=k(ks),dn=e(ks,"LI",{});var Ca=c(dn);Ys=u(Ca,"두 달을 더하면 그리고 두 번째 달이 31일로 끝나면 날짜는 31일이 되어야 한다."),Ca.forEach(s),ks.forEach(s),ta.forEach(s),js=k(is),sn=e(is,"LI",{});var pa=c(sn);$s=u(pa,"(6월처럼) 30일로 끝나는 달의 마지막 날짜가 주어지는 경우"),Tn=e(pa,"OL",{});var Ma=c(Tn);hn=e(Ma,"LI",{});var qa=c(hn);Xs=u(qa,"31일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되면 안 된다."),qa.forEach(s),Ma.forEach(s),pa.forEach(s),is.forEach(s),Qn=k(n),an=e(n,"P",{});var xa=c(an);Fs=u(xa,"이렇게 코드가 장황해지면 읽기에 불편할수 있다. 한 테스트에 한개의 개념만 채택하자"),xa.forEach(s),Zn=k(n),G=e(n,"H3",{id:!0});var Ga=c(G);tn=e(Ga,"A",{href:!0});var Na=c(tn);yn=e(Na,"STRONG",{});var Ya=c(yn);Bs=u(Ya,"F.I.R.S.T"),Ya.forEach(s),Na.forEach(s),Ga.forEach(s),ns=k(n),pn=e(n,"P",{});var ja=c(pn);Us=u(ja,"테스트는 아래 5가지 요소를 충족해야 한다"),ja.forEach(s),ss=k(n),on=e(n,"P",{});var $a=c(on);On=e($a,"STRONG",{});var Xa=c(On);Ws=u(Xa,"빠르게Fast"),Xa.forEach(s),$a.forEach(s),as=k(n),en=e(n,"P",{});var Fa=c(en);Rn=e(Fa,"STRONG",{});var Ba=c(Rn);Ks=u(Ba,"독립적으로Independent → 테스트간 의존관계가 있으면 안된다"),Ba.forEach(s),Fa.forEach(s),ts=k(n),cn=e(n,"P",{});var Ua=c(cn);bn=e(Ua,"STRONG",{});var Wa=c(bn);Vs=u(Wa,"반복가능하게Repeatable → 환경에 구애받지 않는"),Wa.forEach(s),Ua.forEach(s),ps=k(n),ln=e(n,"P",{});var Ka=c(ln);Sn=e(Ka,"STRONG",{});var Va=c(Sn);zs=u(Va,"자가검증하는Self-Validating → 테스트가 스스로 bool로 결론나야 한다"),Va.forEach(s),Ka.forEach(s),os=k(n),un=e(n,"P",{});var za=c(un);Ln=e(za,"STRONG",{});var Ja=c(Ln);Js=u(Ja,"적시에Timely → 테스트 코드를 만들고 운영코드를 작성하라"),Ja.forEach(s),za.forEach(s),es=k(n),N=e(n,"H3",{id:!0});var Qa=c(N);kn=e(Qa,"A",{href:!0});var Za=c(kn);Qs=u(Za,"결론"),Za.forEach(s),Qa.forEach(s),cs=k(n),rn=e(n,"P",{});var nt=c(rn);Zs=u(nt,"깨끗한 테스트코드는 실제 코드의 유지보수성, 재사용성의 보존을 강화하고 프로젝트를 건강하게 해준다. 지속적으로 코드를 꺠끗하게 관리하고 간결하게 정리하도록하자"),nt.forEach(s),this.h()},h(){m(f,"href","#the-three-laws-of-tdd"),m(_,"id","the-three-laws-of-tdd"),m($,"href","#깨끗한-테스트-코드-유지하기"),m(b,"id","깨끗한-테스트-코드-유지하기"),m(X,"href","#깨끗한-테스트-코드"),m(S,"id","깨끗한-테스트-코드"),m(L,"class","language-java"),m(B,"href","#도메인에-특화된-테스트-언어"),m(g,"id","도메인에-특화된-테스트-언어"),m(W,"href","#이중-표준"),m(A,"id","이중-표준"),m(D,"class","language-java"),m(I,"class","language-java"),m(V,"href","#테스트-당-assert-하나"),m(H,"id","테스트-당-assert-하나"),m(C,"class","language-java"),m(Q,"href","#테스트당-개념-하나"),m(M,"id","테스트당-개념-하나"),m(q,"class","language-java"),m(tn,"href","#first"),m(G,"id","first"),m(kn,"href","#결론"),m(N,"id","결론")},m(n,a){p(n,r,a),t(r,E),p(n,P,a),p(n,_,a),t(_,f),t(f,v),p(n,h,a),p(n,y,a),t(y,fn),t(fn,rs),t(y,fs),p(n,gn,a),p(n,O,a),t(O,mn),t(mn,ms),t(O,_s),p(n,An,a),p(n,R,a),t(R,_n),t(_n,vs),t(R,Es),p(n,Dn,a),p(n,j,a),t(j,Ps),p(n,In,a),p(n,b,a),t(b,$),t($,ws),p(n,Hn,a),p(n,w,a),t(w,ds),t(w,vn),t(vn,Ts),t(w,hs),p(n,Cn,a),p(n,S,a),t(S,X),t(X,ys),p(n,Mn,a),p(n,d,a),t(d,Os),t(d,En),t(En,Rs),t(d,bs),p(n,qn,a),p(n,F,a),t(F,Pn),t(Pn,Ss),p(n,xn,a),p(n,L,a),L.innerHTML=pt,p(n,Gn,a),p(n,g,a),t(g,B),t(B,Ls),p(n,Nn,a),p(n,U,a),t(U,gs),p(n,Yn,a),p(n,A,a),t(A,W),t(W,As),p(n,jn,a),p(n,K,a),t(K,Ds),p(n,$n,a),p(n,D,a),D.innerHTML=ot,p(n,Xn,a),p(n,I,a),I.innerHTML=et,p(n,Fn,a),p(n,H,a),t(H,V),t(V,Is),p(n,Bn,a),p(n,C,a),C.innerHTML=ct,p(n,Un,a),p(n,z,a),t(z,Hs),p(n,Wn,a),p(n,J,a),t(J,Cs),p(n,Kn,a),p(n,M,a),t(M,Q),t(Q,Ms),p(n,Vn,a),p(n,q,a),q.innerHTML=lt,p(n,zn,a),p(n,Z,a),t(Z,qs),p(n,Jn,a),p(n,T,a),t(T,nn),t(nn,xs),t(nn,x),t(x,wn),t(wn,Gs),t(x,Ns),t(x,dn),t(dn,Ys),t(T,js),t(T,sn),t(sn,$s),t(sn,Tn),t(Tn,hn),t(hn,Xs),p(n,Qn,a),p(n,an,a),t(an,Fs),p(n,Zn,a),p(n,G,a),t(G,tn),t(tn,yn),t(yn,Bs),p(n,ns,a),p(n,pn,a),t(pn,Us),p(n,ss,a),p(n,on,a),t(on,On),t(On,Ws),p(n,as,a),p(n,en,a),t(en,Rn),t(Rn,Ks),p(n,ts,a),p(n,cn,a),t(cn,bn),t(bn,Vs),p(n,ps,a),p(n,ln,a),t(ln,Sn),t(Sn,zs),p(n,os,a),p(n,un,a),t(un,Ln),t(Ln,Js),p(n,es,a),p(n,N,a),t(N,kn),t(kn,Qs),p(n,cs,a),p(n,rn,a),t(rn,Zs)},p:Ot,d(n){n&&s(r),n&&s(P),n&&s(_),n&&s(h),n&&s(y),n&&s(gn),n&&s(O),n&&s(An),n&&s(R),n&&s(Dn),n&&s(j),n&&s(In),n&&s(b),n&&s(Hn),n&&s(w),n&&s(Cn),n&&s(S),n&&s(Mn),n&&s(d),n&&s(qn),n&&s(F),n&&s(xn),n&&s(L),n&&s(Gn),n&&s(g),n&&s(Nn),n&&s(U),n&&s(Yn),n&&s(A),n&&s(jn),n&&s(K),n&&s($n),n&&s(D),n&&s(Xn),n&&s(I),n&&s(Fn),n&&s(H),n&&s(Bn),n&&s(C),n&&s(Un),n&&s(z),n&&s(Wn),n&&s(J),n&&s(Kn),n&&s(M),n&&s(Vn),n&&s(q),n&&s(zn),n&&s(Z),n&&s(Jn),n&&s(T),n&&s(Qn),n&&s(an),n&&s(Zn),n&&s(G),n&&s(ns),n&&s(pn),n&&s(ss),n&&s(on),n&&s(as),n&&s(en),n&&s(ts),n&&s(cn),n&&s(ps),n&&s(ln),n&&s(os),n&&s(un),n&&s(es),n&&s(N),n&&s(cs),n&&s(rn)}}}function St(Y){let r,E;const P=[Y[0],tt];let _={$$slots:{default:[bt]},$$scope:{ctx:Y}};for(let f=0;f<P.length;f+=1)_=oa(_,P[f]);return r=new Rt({props:_}),{c(){Et(r.$$.fragment)},l(f){Pt(r.$$.fragment,f)},m(f,v){wt(r,f,v),E=!0},p(f,[v]){const h=v&1?dt(P,[v&1&&st(f[0]),v&0&&st(tt)]):{};v&2&&(h.$$scope={dirty:v,ctx:f}),r.$set(h)},i(f){E||(Tt(r.$$.fragment,f),E=!0)},o(f){ht(r.$$.fragment,f),E=!1},d(f){yt(r,f)}}}const tt={title:"9장 유닛 테스트",summary:"",date:"2024-02-05",published:!1};function Lt(Y,r,E){return Y.$$set=P=>{E(0,r=oa(oa({},r),at(P)))},r=at(r),[r]}class Dt extends mt{constructor(r){super(),_t(this,r,Lt,St,vt,{})}}export{Dt as component};