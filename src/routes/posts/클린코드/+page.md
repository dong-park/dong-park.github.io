---
title: 클린코드 요약 
summary: 클린코드 정독후 요약사항을 정리합니다.
date: '2023-11-09'
---

# 1장 깨끗한 코드
- 빨리가는 유일한 방법은 언제나 코드를 깨끗하게 유지하는 습관이다.
- 단순한 코드 규칙으로 구현을 시작하는법
    - 모든 테스트를 통과한다
    - 중복이 없다
    - 시스템 내 모든 설계 아이디어를 표현한다
    - 클래스, 메서드, 함수 등을 최대한 줄인다.
- 캠프장을 처음 왔을 때 보다 더 깨끗하게 하고 떠나라

# 2장 의미있는 이름
- 의도를 분명히 밝히자: 코드가 무엇을 의미하는지 독자로 하여금 납득이 되어야 한다.
- 그릇된 정보를 피하라: 변수나 함수 이름에 잘못된 정보를 포함시키지 말아야 한다. 다른 사람이 코드를 읽을 때 혼란을 줄 수 있으며, 잘못된 가정을 할 수도 있다.
- 의미 있게 구분하라: 변수나 함수 이름은 서로 다른 개념을 구분할 수 있도록 명확하고 일관성 있게 작성해야 한다. 혼란을 줄이고 코드의 가독성을 향상시킨다.
- 발음하기 쉬운 이름을 사용하라. 코드의 이름은 다른 사람들이 발음하기 쉽고 이해하기 쉽게 작성되어야 한다.
- 검색하기 쉬운 이름을 사용하라. 변수나 함수의 이름은 다른 사람들이 쉽게 검색할 수 있도록 작성되어야 한다. 명확하고 직관적인 이름을 선택하여 코드의 유지보수성을 높이는데 도움이 된다.
- 인코딩을 피하라: 변수나 함수 이름에 인코딩을 사용하지 않는 것이 좋다. 의미 있는 이름을 사용하여 코드의 가독성을 높이는 것이 중요하다.
- 자신의 기억력을 자랑하지 마라: 변수 이름을 자신만 아는 이름으로 변환하지 말아라.
- 불필요한 유머나 맥락을 벗어나는 명명법을 사용하지 말고 방법론에 의한 명명법을 쓰자.

# 3장 함수

### 작게 만들어라
- 호출하는 함수 형식으로 함수는 짧을수록 좋다 2~3줄 내외면 더 좋다. 들여쓰기 구조도 1단이나 2단을 넘어서면 힘들어진다

### 한 가지만 해라
- 추상화 단계에서 일을 하는 가짓수가 하나여야 한다 가령 다른 함수를 호출하는 함수가 존재한다면 그 함수는 한가지 일을 하고 있는것이다.

### 함수 당 추상화 수준은 하나로
- 한 함수내에 여러가지 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다.
- 내려가기 규칙을 활용하자 위에서 아래로 프로그램을 읽을수 있도록 함수 추상화 수준을 한단계씩 내려보자
- TO 설정 페이지와 해제 페이지를 포함라혀면, 설정 페이지를 폼학하고, 테스트 페이지 내용을 포함하고 해제 페이지를 포함한다.
  - To 설정 페이지를 포함하려면, 슈트이면 슈트 설정 페이지를 포함한 후 일반 설정 페이지를 포함한다.
  - To 슈트 설정 페이지를 포함하려면, 부모 계층에서 SuiteSetUp 페이지를 찾아 Include문과 페이지 경로를 추가한다.
  - To 부모 계층을 검색하려면…

### Switch문
- 스위치 문을 다형성 객체를 생성하는 코드 안에서 허용하고 상속관계로 숨기고 다른 코드에 노출하지 않는 방법이 있다.

### 서술적인 이름을 사용하라
- 이름이 길어도 괜찮고 서술적인 이름이 짧고 어려운 이름보다 좋다. 함수 이름을 정할때 여러 단어가 쉽게 읽히는 명명법을 사용하는것이 좋다. 여러 단어를 사용해 함수 기능을 표현하라
- 모듈 내에서 함수 이름은 같은 문구,명사,동사를 사용한다.

### 함수 인수
- 함수에서 이상적인 인수 개수는 0개이다. 다음은 1개이고 다음은2개이다. 최선은 입력 인수가 없는 경우 ex: IncludeSetupPageInfo(new PageContent) → includeSetupPage()
- *많이쓰는 단항형식*
  - 함수에 인수 1개를 넘기는 이유
    1. 인수에 질문을 던지는 경우
    2. 인수를 뭔가로 변환해 결과를 반환하는 경우
    3. 단항 함수 형식의 이벤트
- 플래그 인수는 추하다. 함수에 부울 값을 넘기는 관례는 차라리 인수별말고 상황별로 함수를 나누는 편이 좋다
- *이항함수*
  - 인수가 2개인 함수는 1개인 함수보다 이해하기 어렵다. 프로그램을 짜다보면 불가피한 경우도 생기지만 그만큼 위험이 따른다
- *삼항함수*
  - 삼항 함수부터는 신중히 고려해야 한다..
- *동사와 키워드*
  - 단항 함수는 함수와 인수가 동사/명사 쌍을 이ㅝ야 한다.
  - 함수 이름에 키워드를 추가하는 편도 좋다

### 부수 효과를 일으키지 마라
- 함수에서 한 가지를 하겠다고 약속하고선 남몰래 다른 짓을 하지 말아라!

### 명령과 조회를 분리하라!
- 함수는 뭔가를 수행 하거나 뭔가에 답 하거나 둘중 하나만 해야한다. 둘 다 하면 안 된다. 객체 상태를 변경 하거나 아니면 객체 정보를 반환 하거나 둘 중 하나다.

### Try/Catch 블록은 한 함수에서 별도로 처리
- 코드 구조에 혼란을 일으키며, 정상 동작과 오류 처리 동작을 뒤섞는다.

### 반복하지 마라
- 중복은 소트트웨어에서 모든 악의 근원이다. 많은 원칙과 기법이 중복을 없애거나 제어할 목적으로 나왔다.

# 4장 주석
잘 달린 주석은 어떤 정보보다 유용하지만, 거짓말을 하는 경우가 많다. 일부가 여기서 저기로 옮겨지면서 발생하는 불상사
진실은 한 곳에만 존재한다. 바로 코드다 코드만이 자기가 하는 일을 진실되게 말한다.

### 주석은 나쁜 코드를 보완하지 못한다
- 표현력이 풍부하고 주석이 거의 없는 코드가, 복잡하고 어수선하며 주석이 많이 달린 코드보다 훨씬 좋다.

### 코드를 의도로 표현하라
- 코드로 대다수 의도를 표현할수 있다 많은 경우 주석으로 달려는 설명을 함수로 만들어 표현해도 충분하다.

### 좋은 주석
- 정말은 좋은 주석은 주석을 달지 않을 방법을 찾아낸 주석이라는 사실을 알아라
- 법적인 주석
  각 소스 파일 첫머리에 주석으로 들어가는 저작권 정보와 소유권 정보
- 정보를 제공하는 주석
  기본적인 정보를 주석으로 제공하면 편리하지만 그래도 함수 이름에 정보를 담는편이 좋다
- 의도를 설명하는 주석
  두 객체를 비교하는 하는 코드가 있다고 가정했을때 저자의 의도를 보여주는 코드가 좋다
- 의미를 명료하게 밝히는 주석
  일반적으로 인수나 반환값 자체를 명확하게 만들면 더 좋겠지만, 인수나 반환값이 표준 라이브러리나 변경하지 못하는 코드에 속한다면 의미를 명료하게 밝히는 주석이 유용하다.
- ex
  docs형..
  결과를 경고하는 주석
  TODO주석
  중요성을 강조하는 주석

### 나쁜 주석
- 주절거리는 주석: 저자에게만 의미가 있고 의사소통이 어려운 주석들
- 같은 이야기를 중복하는 주석: 주석이 코드보다 더 많은 정보를 제공하지 못하는 경우
- 오해할 여지가 있는 주석: 코드보다 읽기도 어려운 주석에 살짝 잘못된 정보를 포함한 경우
- 의무적으로 다는 주석: javadocs를 넣으라는 규칙이 낳은 아무가치없는 주석
- 이력을 기록하는 주석: git이 있으니 이제 없어도 된다
- 있으나 마나 한 주석: 너무 당연한 사실을 언급 가령 생성자를 알려주는 경우
- 위치를 표시하는 주석: 유용한 경우도 있지만 독자가 흔한 잡음으로 여겨 무시한다
- 닫는 괄호에 다는 주석: 함수를 줄이는 편이 낫다.
- 공로를 돌리거나 저자를 표시하는 주석: 이것도 git에 맡기자
- 주석으로 처리한 코드: 주석으로 처리한 코드만큼 밉살스러운 관행도 드물다.
- HTML 주석: 주석을 뽑아 웹페이지에 올릴 작정이라면 태그를 삽입해야 하는 책임은 프로그래머가 아니라 도구가 져야 맞다
- 전역 정보: 상수 값은 코드와 주석이 전혀 통제할수 없다
- 너무 많은 정보: 장황하게 늘어놓지 마라
- 모호한 관계: 주석과 주석이 설명하는 코드는 둘 사이에 관계가 명백해야 한다
- 함수 헤더: 짧은 함수는 긴 설명이 필요 없다. 짧고 한 가지만 수행하며 이름을 잘 붙인 함수가 주석으로 헤더를 추가한 함수보다 훨씬 좋다.
- 비공개 코드에서 Javadocs: 공개하지 않을 코드라면 자바독스는 쓸모가 없다

# 5장 형식 맞추기

프로그래머라면 형식을 깔끔하게 맞춰 코드를 짜야 한다. 팀으로 일한다면 팀이 합의해 규칙을 정하고 모두가 그 규칙을 따라야 한다.

### 형식을 맞추는 목적
- 코드 형식은 매우 중요하다
- 오늘 구현한 기능이 다음 버전에서 바뀔 확률은 아주 높다. 가독성이 바뀔 코드의 품질을 결정한다.

### 적절한 행 길이를 유지하라

- 대다수가 500줄을 넘지 않고 대부분이 200줄 정도인 파일로도 커다란 시스템을 구축할수 있다.
- 신문 기사처럼 작성하라
    - 최상단 기사를 몇 마디로 요약하는 표제가 나오고, 첫 문단이 기사 내용을 요약한다.
    - 소스 파일도 이와 비슷하게 이름만 보고도 올바른 모듈을 판단 할 정도로 신경 써서 짓는다.
    - 소스 파일 첫 부분은 고차원 개념과 알고리즘을 설명하고 아래로 내려갈수록 세세하게 묘사한다.
    - 신문은 다양한 기사로 이뤄진다. 대다수 기사가 아주 짧고 날짜, 이름들을 뒤섞은 긴 기사 하나만 싣는다면 아무도 읽지 않을것이다.
- 개념은 빈 행으로 분리하라
    - 모든 코드는 왼쪽에서 오른쪽으로 그리고 위에서 아래로 읽힌다.
    - 일련의 행 묶음은 완결된 생각 하나를 표현한다.
- 세로 밀집도
    - 줄바꿈이 개념을 분리한다면 세로 밀집도는 연광성을 의미한다. 서로 밀접한 코드 행은 세로로 가까이 놓여야 한다는 뜻이다.
```java
public class ReporterConfig {
	// 변수끼리는 세로로 묶어놓기
	private String m_className;
	private List<Property> m_properties = new ArrayList<Property>();
	
	public void addProperty(Property property) {
		m_properties.add(property);
	}
}
```

- 수직 거리
    - 서로 밀접한 개념은 세로로 가까이 둬야 한다. 물론 두 개념이 서로 다른 파일에 속한다면 규칙이 통하지 않는다. 하지만 타당한 근거 없다면 서로 밀접한 개념은 한 파일에 속해야 마땅하다.
    - 변수선언 위치
        - 사용하는 위치에 최대한 가까이 선언한다. 우리가 만든 함수는 매우 짧으므로 지역 변수는 각 함수 맨 처음에 선언한다.
        - 루프를 제어하는 변수는 흔히 루프문 내부에 선언한다. (아주 드물지만 블록 상단이나 루프 직전에 선언하는 사례도 있다)
    - 인스턴스 변수
        - 클래스 맨 처음에 선언한다.
    - 종속 함수
        - 한 함수가 다른 함수를 호출한다면 두 함수는 세로로 가까이 배치한다.
    - 개념적 유사성
        - 친화도가 높을수록 코드를 가까이 배치한다.
        - 친화도가 높은 요인은 한 함수가 다른 함수를 호출해 생기는 종속성이 생기는 경우나 명명법이 똑가톡 기본 기능이 유사한 경우
- 세로 순서
    - 가장 중요한 개념을 가장 먼저 표현한다.
    - 세세한 사항을 최대한 배제한다.
```java
public Response makeResponse(FitNesseContext context, Request request) 
	throw Exception {
		String pageNmae = getPageNameOrDefault(request, "FrontPage");
		loadPage(pageName, context);
//////////////////////
private String getPageNameOrDefault(Reuqest request, String defaultPageName)
//////////////////////
private void loadPage(String resource, FitNesseContext context)
```
    

### 가로 형식 맞추기
- 기존 오픈소스 코드들은 60자 이상부터 떨어진다. 프로그래머는 명백하게 짧은 행을 선호한다.
- 100자나 120자에 달해도 나쁘지 않지만 그 이상은 솔직히 주의 부족이다.
- 가로 공백과 밀집도 가로로는 공백을 사용해 밀접한 개념과 느슨한 개념을 표현한다.
- 가로 정렬
    - 코드의 변수값을 강조하기 위해 가로공백을 넣지 말아라 ide에서 다 잡힌다
    - 선언부가 길고 강조할게 많다면 클래스를 쪼개야 한다는 의미이다.
- 들여쓰기
    - 들여쓰기 자체가 윤곽도를 보여준다
    - 들여쓰기한 파일은 구조가 한눈에 들어온더. 변수, 생성자 함수, 접근자 함수, 메서드가 금방 보인다.
- 때로는 간단한 if, while, 짧은 함수에서 들여쓰기를 무시하고픈 유혹이 생긴다. 원점으로 돌아가도록 하자
- 팀 규칙
    - 팀은 한 가지 규칙에 합의해야 한다. 그리고 모든 팀원은 그 규칙을 따라야 한다.

# 6장 객체와 자료구조
변수를 비공개로 정의 하는 이유는 남들이 변수에 의존하지 않게 만들고 싶어서다.

### 자료 추상화
- 변수 사이에 함수라는 계층을 넣는다고 구현이 저절로 감춰지지는 않는다. 구현을 감추려면 추상화가 필요하다. 그보다는 추상 인터페이스를 제공해 사용자가 구현을 모른 채 자료의 핵심을 조작할 수 있어야 진정한 의미의 클래스다.
- 개발자는 객체가 포함하는 자료를 표현할 가장 좋은 방법을 심각하게 고민해야 한다.

### 자료/객체 비대칭
- 객체와 자료 구조는 근본적으로 양분된다.
    - 절차적인 코드는 기존 자료 구조를 변경하지 않으면서 새 함수를 추가하기 쉽다. 반면, 객체 지향 코드는 기존 함수를 변경하지 않으면서 새 클래스를 추가하기 슆다.
    - 절차적인 코드는 새로운 자료 구조를 추가하기 어렵다. 그러려면 모든 함수를 고쳐야 한다. 객체 지향 코드는 새로운 함수를 추가하기 어렵다. 그러려면 모든 클래스를 고쳐야 한다.
    - 둘다 참이다. 다시말해 객체 지향코드에서 어려운 변경은 절차적인 코드에서 쉬우며, 절차적인 코드에서 어려운 변경은 객체 지향 코드에서 쉽다.
- 예시
    - 절차적인 접근예시
    ```java
    
    public class Square {
    	public Point topLeft;
    	public double side;
    }
    
    public class Rectangle {
    	public Point topLeft;
    	public double height;
    	public double width;
    }
    
    public class Circle {
    	public Point center;
    	public double redius;
    }
    
    public class Geometry {
    	public double area(Object shape) throw NoSuchShapeExcpetion~
    }
    ```
    - 다형성 접근예시
    ```java
    public class Square implements Shape {
    	private Point topLeft;
    	private double side;
    
    	public double area() {
    		return side*side;
    	}
    }
    ```

### 디미터 법칙
- 모듈은 자신이 조작하는 객체의 속사정을 몰라야 한다는 법칙이다.
- 클래스 C의 메서드 f는 다음과 같은 메서드만 호출해야 한다
    - 클래스 C
    - f가 생성한 객체
    - f 인수로 넘어온 객체
    - C 인스턴스 변수에 저장된 객체
- 기차 충돌
    - as-is
        - **final String outputDir = ctext.getOptions().getScracthDir().getAbsolutePath();**
    - to-be
        - **Options opts = ctxt.getOptions();
          File scractchDir = opts.getScratchDir();
          final String outputDir = scracthDir.getAbsolutePath();**
    - 객체라면 내부 구조를 숨겨야 하므로 확실히 디미터 법칙을 위반한다. 자료구조 라면 내부 구조를 노출하므로 디미터 법칙이 적용되지 않는다.
- 잡종 구조
    - 절반은 객체, 절반은 자료 구조인 잡종 구조가 나온다.
    - 이런 잡종 구조는 새로운 함수는 물론이고 새로운 자료 구조도 추가하기 어렵다. 단점만 모아놓은 구조
- 구조체 감추기
    - 그렇다면 임시 디렉토러의 절대 경로는 어떻게 얻어야 좋을까?
    - ctxt.getAboslutePathOfScratchDirectoryOption(); → ctxt 객체에 공개해야 하는 메서드가 너무 많아진다
      ctx.getScratchDirectoryOption().getAbsolutePath(); → 자료 구조를 반환 한다고 가정한다.
    - 그렇다면 ctxt 객체에 임시 파일을 생성하라고 시키면 어떨까?
      BufferedOutputStream bos = ctxt.createScratchFilesStream(classFileName);
      객체에게 맡기기에 적당한 임무로 보인다!

### 자료 전달 객체
- 자료 구조체의 전형적인 형태는 공개 변수만 있고 함수가 없는 클래스이다. 이런 자료구조체를 DTO(Data Transfer Object)라 한다.
- 좀더 일반적인 형태는 Bean 구조이다. 비공개 변수를 조회 설정 함수로 조작하는 방식. 사이비 캡슐화로 일부 순수주의자나 만족시킬뿐 별다른 이익을 제공하지 않는다.

    ```java
    public class MyClass {
        private String property1;
        private int property2;
    
        public MyClass() {
            // Default constructor
        }
    
        public String getProperty1() {
            return property1;
        }
    
        public void setProperty1(String property1) {
            this.property1 = property1;
        }
    
        public int getProperty2() {
            return property2;
        }
    
        public void setProperty2(int property2) {
            this.property2 = property2;
        }
    }
    ```

- 활성 레코드
    - 공개 변수가 있거나 비공개 변수에 조회/설정 함수가 있는 자료구조, 대게 save나 find와 같이 탐색함수도 제공한다. 불행히도 비즈니스 규칙 메서드를 추가해 이런 자료 구조를 개체로 취급하는 개발자가 흔하다. 하지만 이는 바람직하지 않다. 활성 레코드는 자료 구조로 취급한다.

### 결론

- 객체는 동작을 공개하고 자료를 숨긴다. 기존 동작을 변경하지 않으면서 객체 타입을 추가하기는 쉬운 반면 기존 객체에 새 동작을 추가하기는 어렵다.
- 자료 구조는 동작 없이 자료를 노출한다. 기존 자료 구조에 새 동작을 추가하기 쉬우나, 기존 함수에 새 자료 구조를 추가하기는 어렵다.
- 시스템을 구현할때 새로운 자료 타입을 추가하는 유연셩이 필요하면 객체가 더 적합하다. 새로운 동작을 추가하는 유연성이 필요하면 절차적인 코드가 더 적합하다. 어느쪽이 맞는가는 상황에 따라 다르다.


# 7장 오류처리

- 깨끗한 코드와 오류 처리는 확실히 연관성이 있다. 상당수 코드 기반은 전적으로 오류 처리 코드에 좌우된다. 여기저기 흩어진 오류 처리 코드 때문에 실제 코드가 하는 일을 파악하기가 거의 불가능하다는 의미다.

### 오류 코드보다 예외를 사용하라

- 과거에는 오류 플래그를 설정하거나 호출자에게 오류 코드를 반환하는 방법이 전부였다. 위와 같은 방법을 사용하면 호출자 코드가 복잡해지기 때문에 오류가 발생하면 예외를 던지는 편이 낫다.

### Try-Catch-Finally 문부터 작성하라

- 예외에서 프로그램 안에다 범위를 정의한다는 사실은 매우 흥미롭다. 예외가 발생할 코드를 짤 때는 try-catch-finally문으로 발생하는것이 일관성있게 코드를 유지할수 있게하고, 호출자가 기대하는 상태를 야기할수 있다.
- 강제로 예외를 일으키는 테스트 케이스를 작성한 후 테스트를 통과하게 코드를 작성하는 방법을 통해 트랜잭션 범위를 구현하는 방법을 추천한다. 이는 트랜잭션의 본질을 유지하기 쉬워진다.

### 미확인 예외를 사용하라

- 확인된 예외는 OCP법칙을 위반하고, 많은 비용을 초래한다. 일반적인 애플리케이션은 의존성이라는 비용이 이익보다 크다.

### 예외에 의미를 제공하라

- 예외를 던질 때는 전후 상황을 충분히 덧붙인다. 오류 메시지에 정보를 담아 예외와 함께 던진다.

### 호출자를 고려해 예외 클래스를 정의하라

- 오류를 분류하는 방법은 수없이 많다. 애플리케이션에서 오류를 정의할 때 프로그래머에게 가장 중요한 관심사는 오류를 잡아내는 방법이 되어야 한다.

```java
LocalPort port = new LocalPort(12);
try {
	port.open();
} catch (PortDeviceFailure e) {
	reportError(e);
	logger.log(e.getMessage(), e);

//////////////

public class LocalPort {
	private ACMEPort innerPort;
	
	public LocalPort(int portNumber) {
		innerPort = new ACMEPort(portNumber);
	}

	public void open() {
		try {
		} catch (DeviceResponseException e) {
			throw new PortDeviceFailure(e);
		} catch (ATM1212UnlockedExcpetion e) {
			throw new PortDeviceFailure(e);
		}
	}
}
```

- 위 LocalPort 클래스를 ACMEPort를 감싸고 예외처리용 클래스는 외부 라이브러리와 프로그램 사이에서 의존성이 크게 줄어드는 방법으로 유용하다.

### 정상 흐름을 정의하라

- 앞 절에서 충고한 지침을 충실히 따른다면 비즈니스 논리와 오류 처리가 잘 분리된 코드가 나온다. 하지만 때론 중단이 적절하지 않은 방식일수도 있다.
  특수 상황을 처리할 필요가 없다면 더 간결한 코드작성이 가능해진다.

### null을 반환하지 마라

- null을 반환하는 코드는 일거리를 늘릴 뿐만 아니라 호출자에게 문제를 떠넘긴다. 특수사례 케이스로 넘기거나 빈배열 등을 넘기도록 하자

### null을 전달하지 마라

- NullpointException을 야기하는 코드는 만들지 말자

### 결론

- 깨끗한 코드는 읽기도 좋아야 하지만 안정성도 높아야 한다. 오류 처리를 프로그램 논리와 분리하면 독립적인 추론이 가능해지며 코드 유지보수성도 크게 높아진다.


# 8장 경계

### 서드파티 코드 사용하기

- 인터페이스를 "제공하는" 입장과 "사용하는" 입장 사이에는 필연적인 긴장감이 존재한다.
- 사용하는 입장에서 인터페이스의 변경을 우려한다면 래핑하는것도 하나의 방법이다.

### 경계를 탐험하고 공부하기

- 서드파티 코드를 사용할때 우리는 사용할 코드에 대해 테스트할 필요가 있다.
- log4j의 예

```java
  	@Test
    public void testLogCreate() {
        Logger logger = Logger.getLogger("MyLogger");
        logger.info("hello");
    }

    @Test
    public void testLogAddAppender() {
        Logger logger = Logger.getLogger("MyLogger");
        ConsoleAppender appender = new ConsoleAppender();
        logger.addAppender(appender);
        logger.info("hello");
    }

    @Test
    public void testLogAddAppender() {
        Logger logger = Logger.getLogger("MyLogger");
        logger.removeAllAppenders();
        logger.addAppender(new ConsoleAppender(
            new PatternLayout("%p %t %m%n"),
            ConsoleAppender.SYSTEM_OUT));
        logger.info("hello");
    }

public class LogTest {
    private Logger logger;

    @Before
    public void initialize() {
        logger = Logger.getLogger("logger");
        logger.removeAllAppenders();
        Logger.getRootLogger().removeAllAppenders();
    }

    @Test
    public void basicLogger() {
        BasicConfigurator.configure();
        logger.info("basicLogger");
    }

    @Test
    public void addAppenderWithStream() {
        logger.addAppender(new ConsoleAppender(
            new PatternLayout("%p %t %m%n"),
            ConsoleAppender.SYSTEM_OUT));
        logger.info("addAppenderWithStream");
    }

    @Test
    public void addAppenderWithoutStream() {
        logger.addAppender(new ConsoleAppender(
            new PatternLayout("%p %t %m%n")));
        logger.info("addAppenderWithoutStream");
    }
}
```

### 아직 존재하지 않는 코드 사용하기

- 아직 개발되지 않은 모듈이 필요한데, 인터페이스를 정의하면 분업이 가능하다
- 인터페이스를 정의 함으로써 메인로직을 더 깔끔하게 짤 수 있다.

### Clean한 경계

- 좋은 소프트웨어는 변경에 유연하게 대처해야 한다. 내부 코드가 서드파티에 영향을 줄수 없게 래핑하듯 변경에 유연하게 대처할수 있는 경계를 만들어야 한다.

# 9장 유닛테스트

코드를 테스트 하는 테스트코드는 없었던 개념이였지만, 애자일과 TDD의 영향으로 많은 개발자들이 자동화된 유닛테스트를 만들고 있다.

### The Three Laws of TDD

- **첫째 법칙:** 실패하는 단위 테스트를 작성할 때까지 실제 코드를 작성하지 않는다.
- **둘째 법칙:** 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다.
- **셋째 법칙:** 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다.

위 법칙을 따르면 엄청난 양의 테스트 코드가 등장한다. 사실상 모든 코드를 테스트 하는수준

### 깨끗한 테스트 코드 유지하기

- 테스트 코드를 막짜선 안된다, 사실상 관리가 어려워서 폐기하는 코드가 나중에는 등장할것
- 테스트 코드를 짜는 노력이 허사가 되지 않게 실제 코드 못지 않게 깨끗하게 짜야 한다
- **코드에 유연성, 유지보수성, 재사용성을 제공하는 버팀목이 단위 테스트이다.**
- 테스트코드가 있으면 변경에 대한 공포도 줄어들고 유연성도 증가한다.
- 테스트 코드가 지저분하면 실제 코드도 망가진다

### 깨끗한 테스트 코드

- 깨끗한 코드를 만드려면 **가독성** 이 필요하다
- **BUILD-OPERATE-CHECK 패턴 → 테스트 자료 만들기, 자료 조작, 결과 확인**

```java
public void testGetPageHierarchyAsXml() throws Exception {
  makePages("PageOne", "PageOne.ChildOne", "PageTwo");

  submitRequest("root", "type:pages");

  assertResponseIsXML();
  assertResponseContains(
    "<name>PageOne</name>", "<name>PageTwo</name>", "<name>ChildOne</name>");
}

public void testSymbolicLinksAreNotInXmlPageHierarchy() throws Exception {
  WikiPage page = makePage("PageOne");
  makePages("PageOne.ChildOne", "PageTwo");

  addLinkTo(page, "PageTwo", "SymPage");

  submitRequest("root", "type:pages");

  assertResponseIsXML();
  assertResponseContains(
    "<name>PageOne</name>", "<name>PageTwo</name>", "<name>ChildOne</name>");
  assertResponseDoesNotContain("SymPage");
}

public void testGetDataAsXml() throws Exception {
  makePageWithContent("TestPageOne", "test page");

  submitRequest("TestPageOne", "type:data");

  assertResponseIsXML();
  assertResponseContains("test page", "<Test");
}
```

### 도메인에 특화된 테스트 언어

- 시스템 조작 API를 사용하기보단 테스트를 위한 함수와 유틸리티를 이용하면 보다 간결한 테스트 코드를 작성할수 있게된다.

### 이중 표준

- 테스트 API에 적용하는 표준은 실제 코드에 들어가는 표준과는 다를수 있다. 실제 코드만큼 효율적인 필요는 없고 환경도 판이하게 다르기 때문이다.

```java
@Test
public void turnOnLoTempAlarmAtThreashold() throws Exception {
  hw.setTemp(WAY_TOO_COLD); 
  controller.tic(); 
  assertTrue(hw.heaterState());   
  assertTrue(hw.blowerState()); 
  assertFalse(hw.coolerState()); 
  assertFalse(hw.hiTempAlarm());       
  assertTrue(hw.loTempAlarm());
}
```

```java
@Test
public void turnOnLoTempAlarmAtThreshold() throws Exception {
  wayTooCold();
  assertEquals("HBchL", hw.getState()); 
}
```

### 테스트 당 assert 하나

```java
public void testGetPageHierarchyAsXml() throws Exception { 
  givenPages("PageOne", "PageOne.ChildOne", "PageTwo");

  whenRequestIsIssued("root", "type:pages");

  thenResponseShouldBeXML(); 
}

public void testGetPageHierarchyHasRightTags() throws Exception { 
  givenPages("PageOne", "PageOne.ChildOne", "PageTwo");

  whenRequestIsIssued("root", "type:pages");

  thenResponseShouldContain(
    "<name>PageOne</name>", "<name>PageTwo</name>", "<name>ChildOne</name>"
  ); 
}
```

- 위에서 보듯 테스트 코드를 분리하면 중복되는 경우가 많아진다
- 이 부분은 템플릿 메서드를 사용하면 중복을 많이 줄일수 있다(given-when-then)

### 테스트당 개념 하나

```java
public void testAddMonths() {
  SerialDate d1 = SerialDate.createInstance(31, 5, 2004);

  SerialDate d2 = SerialDate.addMonths(1, d1); 
  assertEquals(30, d2.getDayOfMonth()); 
  assertEquals(6, d2.getMonth()); 
  assertEquals(2004, d2.getYYYY());

  SerialDate d3 = SerialDate.addMonths(2, d1); 
  assertEquals(31, d3.getDayOfMonth()); 
  assertEquals(7, d3.getMonth()); 
  assertEquals(2004, d3.getYYYY());

  SerialDate d4 = SerialDate.addMonths(1, SerialDate.addMonths(1, d1)); 
  assertEquals(30, d4.getDayOfMonth());
  assertEquals(7, d4.getMonth());
  assertEquals(2004, d4.getYYYY());
}
```

- 테스트가 내포하는 의미
    - (5월처럼) 31일로 끝나는 달의 마지막 날짜가 주어지는 경우
        1. (6월처럼) 30일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되어서는 안 된다.
        2. 두 달을 더하면 그리고 두 번째 달이 31일로 끝나면 날짜는 31일이 되어야 한다.
    - (6월처럼) 30일로 끝나는 달의 마지막 날짜가 주어지는 경우
        1. 31일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되면 안 된다.
- 이렇게 코드가 장황해지면 읽기에 불편할수 있다. 한 테스트에 한개의 개념만 채택하자

### **F.I.R.S.T**
테스트는 아래 5가지 요소를 충족해야 한다

- **빠르게Fast**
- **독립적으로Independent → 테스트간 의존관계가 있으면 안된다**
- **반복가능하게Repeatable → 환경에 구애받지 않는**
- **자가검증하는Self-Validating → 테스트가 스스로 bool로 결론나야 한다**
- **적시에Timely → 테스트 코드를 만들고 운영코드를 작성하라**

### 결론
- 깨끗한 테스트코드는 실제 코드의 유지보수성, 재사용성의 보존을 강화하고 프로젝트를 건강하게 해준다
- 지속적으로 코드를 꺠끗하게 관리하고 간결하게 정리하도록하자
