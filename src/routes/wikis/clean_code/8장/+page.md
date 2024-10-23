---
title: 8장 경계
summary: 서드파티 코드를 사용할 때 발생할 수 있는 문제를 최소화하고 유지보수성을 높이기 위한 전략을 제시합니다. 코드의 경계를 명확하게 정의하고, 테스트를 통해 외부 라이브러리와의 통합을 검증하며, 서드파티 코드와의 결합도를 낮추기 위해 인터페이스 래핑과 같은 기법을 사용하는 방법을 설명합니다.
date: '2024-02-01'
published: false
---

### 서드파티 코드 사용하기

인터페이스를 "제공하는" 입장과 "사용하는" 입장 사이에는 필연적인 긴장감이 존재한다. 사용하는 입장에서 인터페이스의 변경을 우려한다면 래핑하는것도 하나의 방법이다.

### 경계를 탐험하고 공부하기

서드파티 코드를 사용할때 우리는 사용할 코드에 대해 테스트할 필요가 있다.

log4j의 예

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

아직 개발되지 않은 모듈이 필요한데, 인터페이스를 정의하면 분업이 가능하다. 인터페이스를 정의 함으로써 메인로직을 더 깔끔하게 짤 수 있다.

### Clean한 경계

좋은 소프트웨어는 변경에 유연하게 대처해야 한다. 내부 코드가 서드파티에 영향을 줄수 없게 래핑하듯 변경에 유연하게 대처할수 있는 경계를 만들어야 한다.
