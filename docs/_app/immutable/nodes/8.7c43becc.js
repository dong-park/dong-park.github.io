import{S as Cf,i as Mf,s as bf,m as qe,o as Of,p as Uf,q as jf,r as qf,u as $f,v as zf,w as Df,x as kf,y as wf,e as p,t as r,a as v,c as i,b as u,d as s,f as e,g as E,z as o,h as _,j as t,n as Bf}from"../chunks/index.cf9db551.js";import{L as Ff}from"../chunks/LayoutDefault.fe32a63e.js";function Gf(D){let a,P,y,A,m,I,H,L,k,Ql,Il,B,Rl,Sl,T,F,Vl,xl,G,Wl,yl,J,Xl,Al,K,Yl,Hl,S,il,Zl,cl,ul,dl,nl,rl,gl,Ll,$,N,le,Tl,Q,ee,$l,w,R,fe,wl,V,te,hl,W,_e,Cl,h,X,pe,Ml,Y,ie,bl,C,sl,ue,re,Ol,x,vl,se,ve,El,Ee,ae,al,me,Ul,Z,oe,jl,M,ml,Pe,Ie,ql,b,ol,Se,xe,zl,O,Pl,ye,Ae,Dl,U,c,He,kl,d,Le,Bl,j,n,Te,Fl,g,$e,Gl,q,ll,we,Jl,el,he,Kl,z,fl,Ce,Nl,tl,Me;return{c(){a=p("h3"),P=p("a"),y=r("작게 만들어라"),A=v(),m=p("p"),I=r("호출하는 함수 형식으로 함수는 짧을수록 좋다 2~3줄 내외면 더 좋다. 들여쓰기 구조도 1단이나 2단을 넘어서면 힘들어진다"),H=v(),L=p("h3"),k=p("a"),Ql=r("한 가지만 해라"),Il=v(),B=p("p"),Rl=r("추상화 단계에서 일을 하는 가짓수가 하나여야 한다 가령 다른 함수를 호출하는 함수가 존재한다면 그 함수는 한가지 일을 하고 있는것이다."),Sl=v(),T=p("h3"),F=p("a"),Vl=r("함수 당 추상화 수준은 하나로"),xl=v(),G=p("p"),Wl=r("한 함수내에 여러가지 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다."),yl=v(),J=p("p"),Xl=r("내려가기 규칙을 활용하자 위에서 아래로 프로그램을 읽을수 있도록 함수 추상화 수준을 한단계씩 내려보자"),Al=v(),K=p("p"),Yl=r("TO 설정 페이지와 해제 페이지를 포함라혀면, 설정 페이지를 폼학하고, 테스트 페이지 내용을 포함하고 해제 페이지를 포함한다."),Hl=v(),S=p("ul"),il=p("li"),Zl=r("To 설정 페이지를 포함하려면, 슈트이면 슈트 설정 페이지를 포함한 후 일반 설정 페이지를 포함한다."),cl=v(),ul=p("li"),dl=r("To 슈트 설정 페이지를 포함하려면, 부모 계층에서 SuiteSetUp 페이지를 찾아 Include문과 페이지 경로를 추가한다."),nl=v(),rl=p("li"),gl=r("To 부모 계층을 검색하려면…"),Ll=v(),$=p("h3"),N=p("a"),le=r("Switch문"),Tl=v(),Q=p("p"),ee=r("스위치 문을 다형성 객체를 생성하는 코드 안에서 허용하고 상속관계로 숨기고 다른 코드에 노출하지 않는 방법이 있다."),$l=v(),w=p("h3"),R=p("a"),fe=r("서술적인 이름을 사용하라"),wl=v(),V=p("p"),te=r("이름이 길어도 괜찮고 서술적인 이름이 짧고 어려운 이름보다 좋다. 함수 이름을 정할때 여러 단어가 쉽게 읽히는 명명법을 사용하는것이 좋다. 여러 단어를 사용해 함수 기능을 표현하라"),hl=v(),W=p("p"),_e=r("모듈 내에서 함수 이름은 같은 문구,명사,동사를 사용한다."),Cl=v(),h=p("h3"),X=p("a"),pe=r("함수 인수"),Ml=v(),Y=p("p"),ie=r("함수에서 이상적인 인수 개수는 0개이다. 다음은 1개이고 다음은2개이다. 최선은 입력 인수가 없는 경우 ex: IncludeSetupPageInfo(new PageContent) → includeSetupPage()"),bl=v(),C=p("p"),sl=p("em"),ue=r("많이쓰는 단항형식"),re=r(`
함수에 인수 1개를 넘기는 이유`),Ol=v(),x=p("ol"),vl=p("li"),se=r("인수에 질문을 던지는 경우"),ve=v(),El=p("li"),Ee=r("인수를 뭔가로 변환해 결과를 반환하는 경우"),ae=v(),al=p("li"),me=r("단항 함수 형식의 이벤트"),Ul=v(),Z=p("p"),oe=r("플래그 인수는 추하다. 함수에 부울 값을 넘기는 관례는 차라리 인수별말고 상황별로 함수를 나누는 편이 좋다"),jl=v(),M=p("p"),ml=p("em"),Pe=r("이항함수"),Ie=r(`
인수가 2개인 함수는 1개인 함수보다 이해하기 어렵다. 프로그램을 짜다보면 불가피한 경우도 생기지만 그만큼 위험이 따른다`),ql=v(),b=p("p"),ol=p("em"),Se=r("삼항함수"),xe=r(`
삼항 함수부터는 신중히 고려해야 한다..`),zl=v(),O=p("p"),Pl=p("em"),ye=r("동사와 키워드"),Ae=r(`
단항 함수는 함수와 인수가 동사/명사 쌍을 이ㅝ야 한다.
함수 이름에 키워드를 추가하는 편도 좋다`),Dl=v(),U=p("h3"),c=p("a"),He=r("부수 효과를 일으키지 마라"),kl=v(),d=p("p"),Le=r("함수에서 한 가지를 하겠다고 약속하고선 남몰래 다른 짓을 하지 말아라!"),Bl=v(),j=p("h3"),n=p("a"),Te=r("명령과 조회를 분리하라!"),Fl=v(),g=p("p"),$e=r("함수는 뭔가를 수행하거나 뭔가에 답하거나 둘중 하나만 해야한다. 둘 다 하면 안 된다. 객체 상태를 변경하거나 아니면 객체 정보를 반환하거나 둘 중 하나다."),Gl=v(),q=p("h3"),ll=p("a"),we=r("Try/Catch 블록은 한 함수에서 별도로 처리"),Jl=v(),el=p("p"),he=r("코드 구조에 혼란을 일으키며, 정상 동작과 오류 처리 동작을 뒤섞는다."),Kl=v(),z=p("h3"),fl=p("a"),Ce=r("반복하지 마라"),Nl=v(),tl=p("p"),Me=r("중복은 소트트웨어에서 모든 악의 근원이다. 많은 원칙과 기법이 중복을 없애거나 제어할 목적으로 나왔다."),this.h()},l(l){a=i(l,"H3",{id:!0});var f=u(a);P=i(f,"A",{href:!0});var ze=u(P);y=s(ze,"작게 만들어라"),ze.forEach(e),f.forEach(e),A=E(l),m=i(l,"P",{});var De=u(m);I=s(De,"호출하는 함수 형식으로 함수는 짧을수록 좋다 2~3줄 내외면 더 좋다. 들여쓰기 구조도 1단이나 2단을 넘어서면 힘들어진다"),De.forEach(e),H=E(l),L=i(l,"H3",{id:!0});var ke=u(L);k=i(ke,"A",{href:!0});var Be=u(k);Ql=s(Be,"한 가지만 해라"),Be.forEach(e),ke.forEach(e),Il=E(l),B=i(l,"P",{});var Fe=u(B);Rl=s(Fe,"추상화 단계에서 일을 하는 가짓수가 하나여야 한다 가령 다른 함수를 호출하는 함수가 존재한다면 그 함수는 한가지 일을 하고 있는것이다."),Fe.forEach(e),Sl=E(l),T=i(l,"H3",{id:!0});var Ge=u(T);F=i(Ge,"A",{href:!0});var Je=u(F);Vl=s(Je,"함수 당 추상화 수준은 하나로"),Je.forEach(e),Ge.forEach(e),xl=E(l),G=i(l,"P",{});var Ke=u(G);Wl=s(Ke,"한 함수내에 여러가지 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다."),Ke.forEach(e),yl=E(l),J=i(l,"P",{});var Ne=u(J);Xl=s(Ne,"내려가기 규칙을 활용하자 위에서 아래로 프로그램을 읽을수 있도록 함수 추상화 수준을 한단계씩 내려보자"),Ne.forEach(e),Al=E(l),K=i(l,"P",{});var Qe=u(K);Yl=s(Qe,"TO 설정 페이지와 해제 페이지를 포함라혀면, 설정 페이지를 폼학하고, 테스트 페이지 내용을 포함하고 해제 페이지를 포함한다."),Qe.forEach(e),Hl=E(l),S=i(l,"UL",{});var _l=u(S);il=i(_l,"LI",{});var Re=u(il);Zl=s(Re,"To 설정 페이지를 포함하려면, 슈트이면 슈트 설정 페이지를 포함한 후 일반 설정 페이지를 포함한다."),Re.forEach(e),cl=E(_l),ul=i(_l,"LI",{});var Ve=u(ul);dl=s(Ve,"To 슈트 설정 페이지를 포함하려면, 부모 계층에서 SuiteSetUp 페이지를 찾아 Include문과 페이지 경로를 추가한다."),Ve.forEach(e),nl=E(_l),rl=i(_l,"LI",{});var We=u(rl);gl=s(We,"To 부모 계층을 검색하려면…"),We.forEach(e),_l.forEach(e),Ll=E(l),$=i(l,"H3",{id:!0});var Xe=u($);N=i(Xe,"A",{href:!0});var Ye=u(N);le=s(Ye,"Switch문"),Ye.forEach(e),Xe.forEach(e),Tl=E(l),Q=i(l,"P",{});var Ze=u(Q);ee=s(Ze,"스위치 문을 다형성 객체를 생성하는 코드 안에서 허용하고 상속관계로 숨기고 다른 코드에 노출하지 않는 방법이 있다."),Ze.forEach(e),$l=E(l),w=i(l,"H3",{id:!0});var ce=u(w);R=i(ce,"A",{href:!0});var de=u(R);fe=s(de,"서술적인 이름을 사용하라"),de.forEach(e),ce.forEach(e),wl=E(l),V=i(l,"P",{});var ne=u(V);te=s(ne,"이름이 길어도 괜찮고 서술적인 이름이 짧고 어려운 이름보다 좋다. 함수 이름을 정할때 여러 단어가 쉽게 읽히는 명명법을 사용하는것이 좋다. 여러 단어를 사용해 함수 기능을 표현하라"),ne.forEach(e),hl=E(l),W=i(l,"P",{});var ge=u(W);_e=s(ge,"모듈 내에서 함수 이름은 같은 문구,명사,동사를 사용한다."),ge.forEach(e),Cl=E(l),h=i(l,"H3",{id:!0});var lf=u(h);X=i(lf,"A",{href:!0});var ef=u(X);pe=s(ef,"함수 인수"),ef.forEach(e),lf.forEach(e),Ml=E(l),Y=i(l,"P",{});var ff=u(Y);ie=s(ff,"함수에서 이상적인 인수 개수는 0개이다. 다음은 1개이고 다음은2개이다. 최선은 입력 인수가 없는 경우 ex: IncludeSetupPageInfo(new PageContent) → includeSetupPage()"),ff.forEach(e),bl=E(l),C=i(l,"P",{});var be=u(C);sl=i(be,"EM",{});var tf=u(sl);ue=s(tf,"많이쓰는 단항형식"),tf.forEach(e),re=s(be,`
함수에 인수 1개를 넘기는 이유`),be.forEach(e),Ol=E(l),x=i(l,"OL",{});var pl=u(x);vl=i(pl,"LI",{});var _f=u(vl);se=s(_f,"인수에 질문을 던지는 경우"),_f.forEach(e),ve=E(pl),El=i(pl,"LI",{});var pf=u(El);Ee=s(pf,"인수를 뭔가로 변환해 결과를 반환하는 경우"),pf.forEach(e),ae=E(pl),al=i(pl,"LI",{});var uf=u(al);me=s(uf,"단항 함수 형식의 이벤트"),uf.forEach(e),pl.forEach(e),Ul=E(l),Z=i(l,"P",{});var rf=u(Z);oe=s(rf,"플래그 인수는 추하다. 함수에 부울 값을 넘기는 관례는 차라리 인수별말고 상황별로 함수를 나누는 편이 좋다"),rf.forEach(e),jl=E(l),M=i(l,"P",{});var Oe=u(M);ml=i(Oe,"EM",{});var sf=u(ml);Pe=s(sf,"이항함수"),sf.forEach(e),Ie=s(Oe,`
인수가 2개인 함수는 1개인 함수보다 이해하기 어렵다. 프로그램을 짜다보면 불가피한 경우도 생기지만 그만큼 위험이 따른다`),Oe.forEach(e),ql=E(l),b=i(l,"P",{});var Ue=u(b);ol=i(Ue,"EM",{});var vf=u(ol);Se=s(vf,"삼항함수"),vf.forEach(e),xe=s(Ue,`
삼항 함수부터는 신중히 고려해야 한다..`),Ue.forEach(e),zl=E(l),O=i(l,"P",{});var je=u(O);Pl=i(je,"EM",{});var Ef=u(Pl);ye=s(Ef,"동사와 키워드"),Ef.forEach(e),Ae=s(je,`
단항 함수는 함수와 인수가 동사/명사 쌍을 이ㅝ야 한다.
함수 이름에 키워드를 추가하는 편도 좋다`),je.forEach(e),Dl=E(l),U=i(l,"H3",{id:!0});var af=u(U);c=i(af,"A",{href:!0});var mf=u(c);He=s(mf,"부수 효과를 일으키지 마라"),mf.forEach(e),af.forEach(e),kl=E(l),d=i(l,"P",{});var of=u(d);Le=s(of,"함수에서 한 가지를 하겠다고 약속하고선 남몰래 다른 짓을 하지 말아라!"),of.forEach(e),Bl=E(l),j=i(l,"H3",{id:!0});var Pf=u(j);n=i(Pf,"A",{href:!0});var If=u(n);Te=s(If,"명령과 조회를 분리하라!"),If.forEach(e),Pf.forEach(e),Fl=E(l),g=i(l,"P",{});var Sf=u(g);$e=s(Sf,"함수는 뭔가를 수행하거나 뭔가에 답하거나 둘중 하나만 해야한다. 둘 다 하면 안 된다. 객체 상태를 변경하거나 아니면 객체 정보를 반환하거나 둘 중 하나다."),Sf.forEach(e),Gl=E(l),q=i(l,"H3",{id:!0});var xf=u(q);ll=i(xf,"A",{href:!0});var yf=u(ll);we=s(yf,"Try/Catch 블록은 한 함수에서 별도로 처리"),yf.forEach(e),xf.forEach(e),Jl=E(l),el=i(l,"P",{});var Af=u(el);he=s(Af,"코드 구조에 혼란을 일으키며, 정상 동작과 오류 처리 동작을 뒤섞는다."),Af.forEach(e),Kl=E(l),z=i(l,"H3",{id:!0});var Hf=u(z);fl=i(Hf,"A",{href:!0});var Lf=u(fl);Ce=s(Lf,"반복하지 마라"),Lf.forEach(e),Hf.forEach(e),Nl=E(l),tl=i(l,"P",{});var Tf=u(tl);Me=s(Tf,"중복은 소트트웨어에서 모든 악의 근원이다. 많은 원칙과 기법이 중복을 없애거나 제어할 목적으로 나왔다."),Tf.forEach(e),this.h()},h(){o(P,"href","#작게-만들어라"),o(a,"id","작게-만들어라"),o(k,"href","#한-가지만-해라"),o(L,"id","한-가지만-해라"),o(F,"href","#함수-당-추상화-수준은-하나로"),o(T,"id","함수-당-추상화-수준은-하나로"),o(N,"href","#switch문"),o($,"id","switch문"),o(R,"href","#서술적인-이름을-사용하라"),o(w,"id","서술적인-이름을-사용하라"),o(X,"href","#함수-인수"),o(h,"id","함수-인수"),o(c,"href","#부수-효과를-일으키지-마라"),o(U,"id","부수-효과를-일으키지-마라"),o(n,"href","#명령과-조회를-분리하라"),o(j,"id","명령과-조회를-분리하라"),o(ll,"href","#trycatch-블록은-한-함수에서-별도로-처리"),o(q,"id","trycatch-블록은-한-함수에서-별도로-처리"),o(fl,"href","#반복하지-마라"),o(z,"id","반복하지-마라")},m(l,f){_(l,a,f),t(a,P),t(P,y),_(l,A,f),_(l,m,f),t(m,I),_(l,H,f),_(l,L,f),t(L,k),t(k,Ql),_(l,Il,f),_(l,B,f),t(B,Rl),_(l,Sl,f),_(l,T,f),t(T,F),t(F,Vl),_(l,xl,f),_(l,G,f),t(G,Wl),_(l,yl,f),_(l,J,f),t(J,Xl),_(l,Al,f),_(l,K,f),t(K,Yl),_(l,Hl,f),_(l,S,f),t(S,il),t(il,Zl),t(S,cl),t(S,ul),t(ul,dl),t(S,nl),t(S,rl),t(rl,gl),_(l,Ll,f),_(l,$,f),t($,N),t(N,le),_(l,Tl,f),_(l,Q,f),t(Q,ee),_(l,$l,f),_(l,w,f),t(w,R),t(R,fe),_(l,wl,f),_(l,V,f),t(V,te),_(l,hl,f),_(l,W,f),t(W,_e),_(l,Cl,f),_(l,h,f),t(h,X),t(X,pe),_(l,Ml,f),_(l,Y,f),t(Y,ie),_(l,bl,f),_(l,C,f),t(C,sl),t(sl,ue),t(C,re),_(l,Ol,f),_(l,x,f),t(x,vl),t(vl,se),t(x,ve),t(x,El),t(El,Ee),t(x,ae),t(x,al),t(al,me),_(l,Ul,f),_(l,Z,f),t(Z,oe),_(l,jl,f),_(l,M,f),t(M,ml),t(ml,Pe),t(M,Ie),_(l,ql,f),_(l,b,f),t(b,ol),t(ol,Se),t(b,xe),_(l,zl,f),_(l,O,f),t(O,Pl),t(Pl,ye),t(O,Ae),_(l,Dl,f),_(l,U,f),t(U,c),t(c,He),_(l,kl,f),_(l,d,f),t(d,Le),_(l,Bl,f),_(l,j,f),t(j,n),t(n,Te),_(l,Fl,f),_(l,g,f),t(g,$e),_(l,Gl,f),_(l,q,f),t(q,ll),t(ll,we),_(l,Jl,f),_(l,el,f),t(el,he),_(l,Kl,f),_(l,z,f),t(z,fl),t(fl,Ce),_(l,Nl,f),_(l,tl,f),t(tl,Me)},p:Bf,d(l){l&&e(a),l&&e(A),l&&e(m),l&&e(H),l&&e(L),l&&e(Il),l&&e(B),l&&e(Sl),l&&e(T),l&&e(xl),l&&e(G),l&&e(yl),l&&e(J),l&&e(Al),l&&e(K),l&&e(Hl),l&&e(S),l&&e(Ll),l&&e($),l&&e(Tl),l&&e(Q),l&&e($l),l&&e(w),l&&e(wl),l&&e(V),l&&e(hl),l&&e(W),l&&e(Cl),l&&e(h),l&&e(Ml),l&&e(Y),l&&e(bl),l&&e(C),l&&e(Ol),l&&e(x),l&&e(Ul),l&&e(Z),l&&e(jl),l&&e(M),l&&e(ql),l&&e(b),l&&e(zl),l&&e(O),l&&e(Dl),l&&e(U),l&&e(kl),l&&e(d),l&&e(Bl),l&&e(j),l&&e(Fl),l&&e(g),l&&e(Gl),l&&e(q),l&&e(Jl),l&&e(el),l&&e(Kl),l&&e(z),l&&e(Nl),l&&e(tl)}}}function Jf(D){let a,P;const y=[D[0],hf];let A={$$slots:{default:[Gf]},$$scope:{ctx:D}};for(let m=0;m<y.length;m+=1)A=qe(A,y[m]);return a=new Ff({props:A}),{c(){Of(a.$$.fragment)},l(m){Uf(a.$$.fragment,m)},m(m,I){jf(a,m,I),P=!0},p(m,[I]){const H=I&1?qf(y,[I&1&&$f(m[0]),I&0&&$f(hf)]):{};I&2&&(H.$$scope={dirty:I,ctx:m}),a.$set(H)},i(m){P||(zf(a.$$.fragment,m),P=!0)},o(m){Df(a.$$.fragment,m),P=!1},d(m){kf(a,m)}}}const hf={title:"3장 의미있는 이름",summary:"",date:"2024-01-08",published:!1};function Kf(D,a,P){return D.$$set=y=>{P(0,a=qe(qe({},a),wf(y)))},a=wf(a),[a]}class Rf extends Cf{constructor(a){super(),Mf(this,a,Kf,Jf,bf,{})}}export{Rf as component};
