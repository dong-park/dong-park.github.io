import{S as Uf,i as qf,s as zf,U as Ue,B as Bf,C as Df,D as Mf,V as Vf,W as Of,r as Wf,p as Xf,E as kf,X as jf,e as i,t as u,a as v,c as r,b as p,d as s,f as e,g as a,m as E,h as t,j as _,n as Ff}from"./index.c0b9c16e.js";import{A as Gf}from"./ArticleLayout.072337d2.js";function Jf(D){let o,P,S,I,m,h,y,T,M,Rl,Hl,V,Yl,Sl,x,W,Zl,Il,X,dl,yl,k,cl,Tl,F,nl,xl,A,El,gl,le,ol,ee,fe,ml,te,Ll,L,G,_e,$l,J,ie,bl,$,K,re,wl,N,pe,Cl,Q,ue,Ol,b,R,se,jl,Y,ve,Ul,w,Z,ae,ql,H,Pl,Ee,oe,hl,me,Pe,Al,he,zl,C,d,Ae,Bl,c,He,Dl,O,n,Se,Ml,g,Ie,Vl,j,ll,ye,Wl,el,Te,Xl,U,fl,xe,kl,tl,Le,Fl,q,_l,$e,Gl,il,be,Jl,z,rl,we,Kl,pl,Ce,Nl,B,ul,Oe,Ql,sl,je;return{c(){o=i("h3"),P=i("a"),S=u("작게 만들어라"),I=v(),m=i("p"),h=u("호출하는 함수 형식으로 함수는 짧을수록 좋다 2~3줄 내외면 더 좋다. 들여쓰기 구조도 1단이나 2단을 넘어서면 힘들어진다"),y=v(),T=i("h3"),M=i("a"),Rl=u("한 가지만 해라"),Hl=v(),V=i("p"),Yl=u("추상화 단계에서 일을 하는 가짓수가 하나여야 한다 가령 다른 함수를 호출하는 함수가 존재한다면 그 함수는 한가지 일을 하고 있는것이다."),Sl=v(),x=i("h3"),W=i("a"),Zl=u("함수 당 추상화 수준은 하나로"),Il=v(),X=i("p"),dl=u("한 함수내에 여러가지 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다."),yl=v(),k=i("p"),cl=u("내려가기 규칙을 활용하자 위에서 아래로 프로그램을 읽을수 있도록 함수 추상화 수준을 한단계씩 내려보자"),Tl=v(),F=i("p"),nl=u("TO 설정 페이지와 해제 페이지를 포함라혀면, 설정 페이지를 폼학하고, 테스트 페이지 내용을 포함하고 해제 페이지를 포함한다."),xl=v(),A=i("ul"),El=i("li"),gl=u("To 설정 페이지를 포함하려면, 슈트이면 슈트 설정 페이지를 포함한 후 일반 설정 페이지를 포함한다."),le=v(),ol=i("li"),ee=u("To 슈트 설정 페이지를 포함하려면, 부모 계층에서 SuiteSetUp 페이지를 찾아 Include문과 페이지 경로를 추가한다."),fe=v(),ml=i("li"),te=u("To 부모 계층을 검색하려면…"),Ll=v(),L=i("h3"),G=i("a"),_e=u("Switch문"),$l=v(),J=i("p"),ie=u("스위치 문을 다형성 객체를 생성하는 코드 안에서 허용하고 상속관계로 숨기고 다른 코드에 노출하지 않는 방법이 있다."),bl=v(),$=i("h3"),K=i("a"),re=u("서술적인 이름을 사용하라"),wl=v(),N=i("p"),pe=u("이름이 길어도 괜찮고 서술적인 이름이 짧고 어려운 이름보다 좋다. 함수 이름을 정할때 여러 단어가 쉽게 읽히는 명명법을 사용하는것이 좋다. 여러 단어를 사용해 함수 기능을 표현하라"),Cl=v(),Q=i("p"),ue=u("모듈 내에서 함수 이름은 같은 문구,명사,동사를 사용한다."),Ol=v(),b=i("h3"),R=i("a"),se=u("함수 인수"),jl=v(),Y=i("p"),ve=u("함수에서 이상적인 인수 개수는 0개이다. 다음은 1개이고 다음은2개이다. 최선은 입력 인수가 없는 경우 ex: IncludeSetupPageInfo(new PageContent) → includeSetupPage()"),Ul=v(),w=i("h4"),Z=i("a"),ae=u("단항형식"),ql=v(),H=i("ol"),Pl=i("li"),Ee=u("인수에 질문을 던지는 경우"),oe=v(),hl=i("li"),me=u("인수를 뭔가로 변환해 결과를 반환하는 경우"),Pe=v(),Al=i("li"),he=u(`단항 함수 형식의 이벤트
단 플래그 인수는 추하다. 함수에 부울 값을 넘기는 관례는 차라리 함수를 분리하는 편이 좋다.`),zl=v(),C=i("h4"),d=i("a"),Ae=u("이항함수"),Bl=v(),c=i("p"),He=u("인수가 2개인 함수는 1개인 함수보다 이해하기 어렵다. 프로그램을 짜다보면 불가피한 경우도 생기지만 그만큼 위험이 따른다."),Dl=v(),O=i("h4"),n=i("a"),Se=u("삼항함수"),Ml=v(),g=i("p"),Ie=u("인수가 3개인 함수는 이해하기 어렵다. 인수가 3개 이상인 함수는 피하는 편이 좋다."),Vl=v(),j=i("h4"),ll=i("a"),ye=u("동사와 키워드"),Wl=v(),el=i("p"),Te=u(`단항 함수는 함수와 인수가 동사/명사 쌍을 이뤄야 한다.
함수 이름에 키워드를 추가하는 편도 좋다`),Xl=v(),U=i("h3"),fl=i("a"),xe=u("부수 효과를 일으키지 마라"),kl=v(),tl=i("p"),Le=u("함수에서 한 가지를 하겠다고 약속하고선 남몰래 다른 짓을 하지 말아라!"),Fl=v(),q=i("h3"),_l=i("a"),$e=u("명령과 조회를 분리하라!"),Gl=v(),il=i("p"),be=u("함수는 뭔가를 수행하거나 뭔가에 답하거나 둘중 하나만 해야한다. 둘 다 하면 안 된다. 객체 상태를 변경하거나 아니면 객체 정보를 반환하거나 둘 중 하나다."),Jl=v(),z=i("h3"),rl=i("a"),we=u("Try/Catch 블록은 한 함수에서 별도로 처리"),Kl=v(),pl=i("p"),Ce=u("코드 구조에 혼란을 일으키며, 정상 동작과 오류 처리 동작을 뒤섞는다."),Nl=v(),B=i("h3"),ul=i("a"),Oe=u("반복하지 마라"),Ql=v(),sl=i("p"),je=u("중복은 소트트웨어에서 모든 악의 근원이다. 많은 원칙과 기법이 중복을 없애거나 제어할 목적으로 나왔다."),this.h()},l(l){o=r(l,"H3",{id:!0});var f=p(o);P=r(f,"A",{href:!0});var ze=p(P);S=s(ze,"작게 만들어라"),ze.forEach(e),f.forEach(e),I=a(l),m=r(l,"P",{});var Be=p(m);h=s(Be,"호출하는 함수 형식으로 함수는 짧을수록 좋다 2~3줄 내외면 더 좋다. 들여쓰기 구조도 1단이나 2단을 넘어서면 힘들어진다"),Be.forEach(e),y=a(l),T=r(l,"H3",{id:!0});var De=p(T);M=r(De,"A",{href:!0});var Me=p(M);Rl=s(Me,"한 가지만 해라"),Me.forEach(e),De.forEach(e),Hl=a(l),V=r(l,"P",{});var Ve=p(V);Yl=s(Ve,"추상화 단계에서 일을 하는 가짓수가 하나여야 한다 가령 다른 함수를 호출하는 함수가 존재한다면 그 함수는 한가지 일을 하고 있는것이다."),Ve.forEach(e),Sl=a(l),x=r(l,"H3",{id:!0});var We=p(x);W=r(We,"A",{href:!0});var Xe=p(W);Zl=s(Xe,"함수 당 추상화 수준은 하나로"),Xe.forEach(e),We.forEach(e),Il=a(l),X=r(l,"P",{});var ke=p(X);dl=s(ke,"한 함수내에 여러가지 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다."),ke.forEach(e),yl=a(l),k=r(l,"P",{});var Fe=p(k);cl=s(Fe,"내려가기 규칙을 활용하자 위에서 아래로 프로그램을 읽을수 있도록 함수 추상화 수준을 한단계씩 내려보자"),Fe.forEach(e),Tl=a(l),F=r(l,"P",{});var Ge=p(F);nl=s(Ge,"TO 설정 페이지와 해제 페이지를 포함라혀면, 설정 페이지를 폼학하고, 테스트 페이지 내용을 포함하고 해제 페이지를 포함한다."),Ge.forEach(e),xl=a(l),A=r(l,"UL",{});var vl=p(A);El=r(vl,"LI",{});var Je=p(El);gl=s(Je,"To 설정 페이지를 포함하려면, 슈트이면 슈트 설정 페이지를 포함한 후 일반 설정 페이지를 포함한다."),Je.forEach(e),le=a(vl),ol=r(vl,"LI",{});var Ke=p(ol);ee=s(Ke,"To 슈트 설정 페이지를 포함하려면, 부모 계층에서 SuiteSetUp 페이지를 찾아 Include문과 페이지 경로를 추가한다."),Ke.forEach(e),fe=a(vl),ml=r(vl,"LI",{});var Ne=p(ml);te=s(Ne,"To 부모 계층을 검색하려면…"),Ne.forEach(e),vl.forEach(e),Ll=a(l),L=r(l,"H3",{id:!0});var Qe=p(L);G=r(Qe,"A",{href:!0});var Re=p(G);_e=s(Re,"Switch문"),Re.forEach(e),Qe.forEach(e),$l=a(l),J=r(l,"P",{});var Ye=p(J);ie=s(Ye,"스위치 문을 다형성 객체를 생성하는 코드 안에서 허용하고 상속관계로 숨기고 다른 코드에 노출하지 않는 방법이 있다."),Ye.forEach(e),bl=a(l),$=r(l,"H3",{id:!0});var Ze=p($);K=r(Ze,"A",{href:!0});var de=p(K);re=s(de,"서술적인 이름을 사용하라"),de.forEach(e),Ze.forEach(e),wl=a(l),N=r(l,"P",{});var ce=p(N);pe=s(ce,"이름이 길어도 괜찮고 서술적인 이름이 짧고 어려운 이름보다 좋다. 함수 이름을 정할때 여러 단어가 쉽게 읽히는 명명법을 사용하는것이 좋다. 여러 단어를 사용해 함수 기능을 표현하라"),ce.forEach(e),Cl=a(l),Q=r(l,"P",{});var ne=p(Q);ue=s(ne,"모듈 내에서 함수 이름은 같은 문구,명사,동사를 사용한다."),ne.forEach(e),Ol=a(l),b=r(l,"H3",{id:!0});var ge=p(b);R=r(ge,"A",{href:!0});var lf=p(R);se=s(lf,"함수 인수"),lf.forEach(e),ge.forEach(e),jl=a(l),Y=r(l,"P",{});var ef=p(Y);ve=s(ef,"함수에서 이상적인 인수 개수는 0개이다. 다음은 1개이고 다음은2개이다. 최선은 입력 인수가 없는 경우 ex: IncludeSetupPageInfo(new PageContent) → includeSetupPage()"),ef.forEach(e),Ul=a(l),w=r(l,"H4",{id:!0});var ff=p(w);Z=r(ff,"A",{href:!0});var tf=p(Z);ae=s(tf,"단항형식"),tf.forEach(e),ff.forEach(e),ql=a(l),H=r(l,"OL",{});var al=p(H);Pl=r(al,"LI",{});var _f=p(Pl);Ee=s(_f,"인수에 질문을 던지는 경우"),_f.forEach(e),oe=a(al),hl=r(al,"LI",{});var rf=p(hl);me=s(rf,"인수를 뭔가로 변환해 결과를 반환하는 경우"),rf.forEach(e),Pe=a(al),Al=r(al,"LI",{});var pf=p(Al);he=s(pf,`단항 함수 형식의 이벤트
단 플래그 인수는 추하다. 함수에 부울 값을 넘기는 관례는 차라리 함수를 분리하는 편이 좋다.`),pf.forEach(e),al.forEach(e),zl=a(l),C=r(l,"H4",{id:!0});var uf=p(C);d=r(uf,"A",{href:!0});var sf=p(d);Ae=s(sf,"이항함수"),sf.forEach(e),uf.forEach(e),Bl=a(l),c=r(l,"P",{});var vf=p(c);He=s(vf,"인수가 2개인 함수는 1개인 함수보다 이해하기 어렵다. 프로그램을 짜다보면 불가피한 경우도 생기지만 그만큼 위험이 따른다."),vf.forEach(e),Dl=a(l),O=r(l,"H4",{id:!0});var af=p(O);n=r(af,"A",{href:!0});var Ef=p(n);Se=s(Ef,"삼항함수"),Ef.forEach(e),af.forEach(e),Ml=a(l),g=r(l,"P",{});var of=p(g);Ie=s(of,"인수가 3개인 함수는 이해하기 어렵다. 인수가 3개 이상인 함수는 피하는 편이 좋다."),of.forEach(e),Vl=a(l),j=r(l,"H4",{id:!0});var mf=p(j);ll=r(mf,"A",{href:!0});var Pf=p(ll);ye=s(Pf,"동사와 키워드"),Pf.forEach(e),mf.forEach(e),Wl=a(l),el=r(l,"P",{});var hf=p(el);Te=s(hf,`단항 함수는 함수와 인수가 동사/명사 쌍을 이뤄야 한다.
함수 이름에 키워드를 추가하는 편도 좋다`),hf.forEach(e),Xl=a(l),U=r(l,"H3",{id:!0});var Af=p(U);fl=r(Af,"A",{href:!0});var Hf=p(fl);xe=s(Hf,"부수 효과를 일으키지 마라"),Hf.forEach(e),Af.forEach(e),kl=a(l),tl=r(l,"P",{});var Sf=p(tl);Le=s(Sf,"함수에서 한 가지를 하겠다고 약속하고선 남몰래 다른 짓을 하지 말아라!"),Sf.forEach(e),Fl=a(l),q=r(l,"H3",{id:!0});var If=p(q);_l=r(If,"A",{href:!0});var yf=p(_l);$e=s(yf,"명령과 조회를 분리하라!"),yf.forEach(e),If.forEach(e),Gl=a(l),il=r(l,"P",{});var Tf=p(il);be=s(Tf,"함수는 뭔가를 수행하거나 뭔가에 답하거나 둘중 하나만 해야한다. 둘 다 하면 안 된다. 객체 상태를 변경하거나 아니면 객체 정보를 반환하거나 둘 중 하나다."),Tf.forEach(e),Jl=a(l),z=r(l,"H3",{id:!0});var xf=p(z);rl=r(xf,"A",{href:!0});var Lf=p(rl);we=s(Lf,"Try/Catch 블록은 한 함수에서 별도로 처리"),Lf.forEach(e),xf.forEach(e),Kl=a(l),pl=r(l,"P",{});var $f=p(pl);Ce=s($f,"코드 구조에 혼란을 일으키며, 정상 동작과 오류 처리 동작을 뒤섞는다."),$f.forEach(e),Nl=a(l),B=r(l,"H3",{id:!0});var bf=p(B);ul=r(bf,"A",{href:!0});var wf=p(ul);Oe=s(wf,"반복하지 마라"),wf.forEach(e),bf.forEach(e),Ql=a(l),sl=r(l,"P",{});var Cf=p(sl);je=s(Cf,"중복은 소트트웨어에서 모든 악의 근원이다. 많은 원칙과 기법이 중복을 없애거나 제어할 목적으로 나왔다."),Cf.forEach(e),this.h()},h(){E(P,"href","#작게-만들어라"),E(o,"id","작게-만들어라"),E(M,"href","#한-가지만-해라"),E(T,"id","한-가지만-해라"),E(W,"href","#함수-당-추상화-수준은-하나로"),E(x,"id","함수-당-추상화-수준은-하나로"),E(G,"href","#switch문"),E(L,"id","switch문"),E(K,"href","#서술적인-이름을-사용하라"),E($,"id","서술적인-이름을-사용하라"),E(R,"href","#함수-인수"),E(b,"id","함수-인수"),E(Z,"href","#단항형식"),E(w,"id","단항형식"),E(d,"href","#이항함수"),E(C,"id","이항함수"),E(n,"href","#삼항함수"),E(O,"id","삼항함수"),E(ll,"href","#동사와-키워드"),E(j,"id","동사와-키워드"),E(fl,"href","#부수-효과를-일으키지-마라"),E(U,"id","부수-효과를-일으키지-마라"),E(_l,"href","#명령과-조회를-분리하라"),E(q,"id","명령과-조회를-분리하라"),E(rl,"href","#trycatch-블록은-한-함수에서-별도로-처리"),E(z,"id","trycatch-블록은-한-함수에서-별도로-처리"),E(ul,"href","#반복하지-마라"),E(B,"id","반복하지-마라")},m(l,f){t(l,o,f),_(o,P),_(P,S),t(l,I,f),t(l,m,f),_(m,h),t(l,y,f),t(l,T,f),_(T,M),_(M,Rl),t(l,Hl,f),t(l,V,f),_(V,Yl),t(l,Sl,f),t(l,x,f),_(x,W),_(W,Zl),t(l,Il,f),t(l,X,f),_(X,dl),t(l,yl,f),t(l,k,f),_(k,cl),t(l,Tl,f),t(l,F,f),_(F,nl),t(l,xl,f),t(l,A,f),_(A,El),_(El,gl),_(A,le),_(A,ol),_(ol,ee),_(A,fe),_(A,ml),_(ml,te),t(l,Ll,f),t(l,L,f),_(L,G),_(G,_e),t(l,$l,f),t(l,J,f),_(J,ie),t(l,bl,f),t(l,$,f),_($,K),_(K,re),t(l,wl,f),t(l,N,f),_(N,pe),t(l,Cl,f),t(l,Q,f),_(Q,ue),t(l,Ol,f),t(l,b,f),_(b,R),_(R,se),t(l,jl,f),t(l,Y,f),_(Y,ve),t(l,Ul,f),t(l,w,f),_(w,Z),_(Z,ae),t(l,ql,f),t(l,H,f),_(H,Pl),_(Pl,Ee),_(H,oe),_(H,hl),_(hl,me),_(H,Pe),_(H,Al),_(Al,he),t(l,zl,f),t(l,C,f),_(C,d),_(d,Ae),t(l,Bl,f),t(l,c,f),_(c,He),t(l,Dl,f),t(l,O,f),_(O,n),_(n,Se),t(l,Ml,f),t(l,g,f),_(g,Ie),t(l,Vl,f),t(l,j,f),_(j,ll),_(ll,ye),t(l,Wl,f),t(l,el,f),_(el,Te),t(l,Xl,f),t(l,U,f),_(U,fl),_(fl,xe),t(l,kl,f),t(l,tl,f),_(tl,Le),t(l,Fl,f),t(l,q,f),_(q,_l),_(_l,$e),t(l,Gl,f),t(l,il,f),_(il,be),t(l,Jl,f),t(l,z,f),_(z,rl),_(rl,we),t(l,Kl,f),t(l,pl,f),_(pl,Ce),t(l,Nl,f),t(l,B,f),_(B,ul),_(ul,Oe),t(l,Ql,f),t(l,sl,f),_(sl,je)},p:Ff,d(l){l&&e(o),l&&e(I),l&&e(m),l&&e(y),l&&e(T),l&&e(Hl),l&&e(V),l&&e(Sl),l&&e(x),l&&e(Il),l&&e(X),l&&e(yl),l&&e(k),l&&e(Tl),l&&e(F),l&&e(xl),l&&e(A),l&&e(Ll),l&&e(L),l&&e($l),l&&e(J),l&&e(bl),l&&e($),l&&e(wl),l&&e(N),l&&e(Cl),l&&e(Q),l&&e(Ol),l&&e(b),l&&e(jl),l&&e(Y),l&&e(Ul),l&&e(w),l&&e(ql),l&&e(H),l&&e(zl),l&&e(C),l&&e(Bl),l&&e(c),l&&e(Dl),l&&e(O),l&&e(Ml),l&&e(g),l&&e(Vl),l&&e(j),l&&e(Wl),l&&e(el),l&&e(Xl),l&&e(U),l&&e(kl),l&&e(tl),l&&e(Fl),l&&e(q),l&&e(Gl),l&&e(il),l&&e(Jl),l&&e(z),l&&e(Kl),l&&e(pl),l&&e(Nl),l&&e(B),l&&e(Ql),l&&e(sl)}}}function Kf(D){let o,P;const S=[D[0],qe];let I={$$slots:{default:[Jf]},$$scope:{ctx:D}};for(let m=0;m<S.length;m+=1)I=Ue(I,S[m]);return o=new Gf({props:I}),{c(){Bf(o.$$.fragment)},l(m){Df(o.$$.fragment,m)},m(m,h){Mf(o,m,h),P=!0},p(m,[h]){const y=h&1?Vf(S,[h&1&&Of(m[0]),h&0&&Of(qe)]):{};h&2&&(y.$$scope={dirty:h,ctx:m}),o.$set(y)},i(m){P||(Wf(o.$$.fragment,m),P=!0)},o(m){Xf(o.$$.fragment,m),P=!1},d(m){kf(o,m)}}}const qe={title:"3장 의미있는 이름",summary:"",date:"2024-01-08",published:!1};function Nf(D,o,P){return D.$$set=S=>{P(0,o=Ue(Ue({},o),jf(S)))},o=jf(o),[o]}class Qf extends Uf{constructor(o){super(),qf(this,o,Nf,Kf,zf,{})}}const Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Qf,metadata:qe},Symbol.toStringTag,{value:"Module"}));export{Qf as P,Zf as _};