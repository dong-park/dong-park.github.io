---
title: 9장 유닛 테스트
summary: ''
date: '2024-02-05'
published: false
---

코드를 테스트 하는 테스트코드는 없었던 개념이였지만, 애자일과 TDD의 영향으로 많은 개발자들이 자동화된 유닛테스트를 만들고 있다.

### The Three Laws of TDD

1. 실패하는 단위 테스트를 작성할 때까지 실제 코드를 작성하지 않는다.
2. 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다.
3. 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다.

위 법칙을 따르면 엄청난 양의 테스트 코드가 등장한다. 사실상 모든 코드를 테스트 하는수준

### 깨끗한 테스트 코드 유지하기

테스트 코드를 막짜선 안된다, 사실상 관리가 어려워서 폐기하는 코드가 나중에는 등장할것.
테스트 코드를 짜는 노력이 허사가 되지 않게 실제 코드 못지 않게 깨끗하게 짜야 한다.
**코드에 유연성, 유지보수성, 재사용성을 제공하는 버팀목이 단위 테스트이다.**
테스트코드가 있으면 변경에 대한 공포도 줄어들고 유연성도 증가한다.
테스트가 지저분하면 실제 코드도 망가진다

### 깨끗한 테스트 코드

깨끗한 코드를 만드려면 **가독성** 이 필요하다

#### BUILD-OPERATE-CHECK 패턴

테스트 자료 만들기, 자료 조작, 결과 확인의 세단계로 나누자

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

시스템 조작 API를 사용하기보단 테스트를 위한 함수와 유틸리티를 이용하면 보다 간결한 테스트 코드를 작성할수 있게된다.

### 이중 표준

테스트 API에 적용하는 표준은 실제 코드에 들어가는 표준과는 다를수 있다. 실제 코드만큼 효율적인 필요는 없고 환경도 판이하게 다르기 때문이다.

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

위에서 보듯 테스트 코드를 분리하면 중복되는 경우가 많아진다. 템플릿 메서드를 사용하면 중복을 많이 줄일수 있다(given-when-then)

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

#### 위 테스트가 내포하는 의미

(5월처럼) 31일로 끝나는 달의 마지막 날짜가 주어지는 경우
- (6월처럼) 30일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되어서는 안 된다. 
- 두 달을 더하면 그리고 두 번째 달이 31일로 끝나면 날짜는 31일이 되어야 한다.

(6월처럼) 30일로 끝나는 달의 마지막 날짜가 주어지는 경우 
- 31일로 끝나는 한 달을 더하면 날짜는 30일이 되어야지 31일이 되면 안 된다.

이렇게 코드가 장황해지면 읽기에 불편할수 있다. 한 테스트에 한개의 개념만 채택하자

### **F.I.R.S.T**

테스트는 아래 5가지 요소를 충족해야 한다

1. **빠르게(Fast)** 테스트는 빨라야 한다. 느리면 자주 돌리지 않게 된다. 느린 테스트는 개발자들의 생산성을 떨어뜨린다.
2. **독립적으로(Independent)** 테스트간 의존관계가 있으면 안된다 테스트가 서로 의존하면 한 테스트가 실패하면 다른 테스트도 실패하게 된다.
3. **반복가능하게(Repeatable)** 환경에 구애받지 않는 테스트를 작성하자 환경에 따라 테스트가 실패하면 안된다
4. **자가검증하는(Self-Validating)** 테스트가 스스로 bool로 결론나야 한다 테스트가 성공하면 테스트가 실패하면 테스트가 실패하게 만든 문제를 찾아야 한다.
5. **적시에(Timely)**: 테스트 코드를 만들고 운영코드를 작성하라.

### 결론

깨끗한 테스트코드는 실제 코드의 유지보수성, 재사용성의 보존을 강화하고 프로젝트를 건강하게 해준다. 지속적으로 코드를 꺠끗하게 관리하고 간결하게 정리하도록하자
