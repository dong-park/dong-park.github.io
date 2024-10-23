---
title: 7장 오류처리
summary: 깨끗한 코드 작성과 효율적인 오류 처리 방법을 설명합니다. 예외 사용의 중요성, try-catch-finally 문의 사용, 미확인 예외의 활용, 예외의 의미 부여, 예외 클래스의 정의 방법을 포함하여, 코드의 가독성과 안정성을 높이는 베스트 프랙티스를 제공합니다.
date: '2024-01-25'
published: false
---

깨끗한 코드와 오류 처리는 확실히 연관성이 있다. 상당수 코드 기반은 전적으로 오류 처리 코드에 좌우된다. 여기저기 흩어진 오류 처리 코드 때문에 실제 코드가 하는 일을 파악하기가 거의 불가능하다는 의미다.

### 오류 코드보다 예외를 사용하라

과거에는 오류 플래그를 설정하거나 호출자에게 오류 코드를 반환하는 방법이 전부였다. 위와 같은 방법을 사용하면 호출자 코드가 복잡해지기 때문에 오류가 발생하면 예외를 던지는 편이 낫다.

### Try-Catch-Finally 문부터 작성하라

예외에서 프로그램 안에다 범위를 정의한다는 사실은 매우 흥미롭다. 예외가 발생할 코드를 짤 때는 try-catch-finally문으로 발생하는것이 일관성있게 코드를 유지할수 있게하고, 호출자가 기대하는 상태를 야기할수 있다.

강제로 예외를 일으키는 테스트 케이스를 작성한 후 테스트를 통과하게 코드를 작성하는 방법을 통해 트랜잭션 범위를 구현하는 방법을 추천한다. 이는 트랜잭션의 본질을 유지하기 쉬워진다.

### 미확인 예외를 사용하라

확인된 예외는 OCP법칙을 위반하고, 많은 비용을 초래한다. 일반적인 애플리케이션은 의존성이라는 비용이 이익보다 크다.

### 예외에 의미를 제공하라

예외를 던질 때는 전후 상황을 충분히 덧붙인다. 오류 메시지에 정보를 담아 예외와 함께 던진다.

### 호출자를 고려해 예외 클래스를 정의하라

오류를 분류하는 방법은 수없이 많다. 애플리케이션에서 오류를 정의할 때 프로그래머에게 가장 중요한 관심사는 오류를 잡아내는 방법이 되어야 한다.

```java
LocalPort port = new LocalPort(12);

try {
    port.open();
} catch (PortDeviceFailure e) {
    reportPortError(e);
    logger.log("Device error", e);
} catch (GMXError e) {
    reportError(e);
    logger.log("GMX error", e);
} catch (DeviceResponseException e) {
    reportError(e);
    logger.log("Response error", e);
}
```

```java
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

위 LocalPort 클래스를 ACMEPort를 감싸고 예외처리용 클래스는 외부 라이브러리와 프로그램 사이에서 의존성이 크게 줄어드는 방법으로 유용하다.

### 정상 흐름을 정의하라

앞 절에서 충고한 지침을 충실히 따른다면 비즈니스 논리와 오류 처리가 잘 분리된 코드가 나온다. 하지만 때론 중단이 적절하지 않은 방식일수도 있다. 특수 상황을 처리할 필요가 없다면 더 간결한 코드작성이 가능해진다.

### null을 반환하지 마라

null을 반환하는 코드는 일거리를 늘릴 뿐만 아니라 호출자에게 문제를 떠넘긴다. 특수사례 케이스로 넘기거나 빈배열 등을 넘기도록 하자

### null을 전달하지 마라

NullpointException을 야기하는 코드는 만들지 말자

### 결론

깨끗한 코드는 읽기도 좋아야 하지만 안정성도 높아야 한다. 오류 처리를 프로그램 논리와 분리하면 독립적인 추론이 가능해지며 코드 유지보수성도 크게 높아진다.
