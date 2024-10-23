---
title: 6장 객체와 자료구조
summary: 객체지향과 절차적 프로그래밍의 근본적인 차이를 설명하고, 자료 추상화, 자료/객체 비대칭성, 디미터 법칙 등을 통해 각 접근법의 장단점을 비교합니다. 이 가이드는 변수를 비공개로 정의하는 이유, 자료 전달 객체(DTO), 활성 레코드의 사용 방식과 같은 중요한 프로그래밍 원칙을 설명하여, 코드의 구조와 유지 관리에 대한 이해를 돕습니다. 프로그래머가 시스템을 어떻게 구현할지 결정할 때, 객체지향적 접근이나 절차적 접근 중 어느 것이 더 적합한지 판단하는 데 필요한 지식을 제공합니다.
date: '2024-01-20'
published: false
---

변수를 비공개로 정의 하는 이유는 남들이 변수에 의존하지 않게 만들고 싶어서다.

### 자료 추상화

변수 사이에 함수라는 계층을 넣는다고 구현이 저절로 감춰지지는 않는다. 구현을 감추려면 추상화가 필요하다. 그보다는 추상 인터페이스를 제공해 사용자가 구현을 모른 채 자료의 핵심을 조작할 수 있어야 진정한 의미의
클래스다. 개발자는 객체가 포함하는 자료를 표현할 가장 좋은 방법을 심각하게 고민해야 한다.

### 자료/객체 비대칭

객체와 자료 구조는 근본적으로 양분된다. 절차적인 코드는 기존 자료 구조를 변경하지 않으면서 새 함수를 추가하기 쉽다. 반면, 객체 지향 코드는 기존 함수를 변경하지 않으면서 새 클래스를 추가하기 쉽다.
절차적인 코드는 새로운 자료 구조를 추가하기 어렵다. 그러려면 모든 함수를 고쳐야 한다. 객체 지향 코드는 새로운 함수를 추가하기 어렵다.
그러려면 모든 클래스를 고쳐야 한다. 다시 말하자면 둘다 참이다. 객체 지향코드에서 어려운 변경은 절차적인 코드에서 쉬우며, 절차적인 코드에서 어려운 변경은 객체 지향 코드에서 쉽다.
절차적인 접근법은 아래와 같다.

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
    public double area(Object shape) throws NoSuchShapeException {
        if (shape instanceof Square) {
            Square s = (Square) shape;
            return s.side * s.side;
        }
        if (shape instanceof Rectangle) {
            Rectangle r = (Rectangle) shape;
            return r.height * r.width;
        }
        if (shape instanceof Circle) {
            Circle c = (Circle) shape;
            return Math.PI * c.radius * c.radius;
        }
        throw new NoSuchShapeException();
    }
}
```

다형성 접근 예시는 아래와 같다.

```java
public class Square implements Shape {
    private Point topLeft;
    private double side;

    public double area() {
        return side * side;
    }
}
```

### 디미터 법칙

디미터 법칙이란 모듈은 자신이 조작하는 객체의 속사정을 몰라야 한다는 법칙이다.
객체라면 내부 구조를 숨겨야 하므로 확실히 디미터 법칙을 위반한다. 자료구조 라면 내부 구조를 노출하므로 디미터 법칙이 적용되지 않는다.
아래는 기차놀이의 예로 함수들이 호출하는 객체의 인스턴스 공개범위가 너무 넓어지는 예이다.

```java
// as-is: 부적절한 기차놀이의 예 각 인자가 소유하는 객체들의 공개범위가 너무 넓다.
final String outputDir = ctext.getOptions().getScracthDir().getAbsolutePath();

// to-be: 공개범위를 알맞게 수정한 예
Options opts = ctxt.getOptions();
File dir = opts.getScratchDir();
final String outputDir = dir.getAbsolutePath();
```

### 두개를 섞어볼까?
```java
ctx.getAboslutePathOfScratchDirectoryOption(); // ctxt 객체에 공개해야 하는 메서드가 너무 많아진다
ctx.getScratchDirectoryOption().
getAbsolutePath(); // 자료 구조를 반환 한다고 가정한다.
```
애석하게도 절반은 객체, 절반은 자료 구조인 **잡종 구조**가 나온다. 이런 잡종 구조는 새로운 함수는 물론이고 새로운 자료 구조도 추가하기 어렵다. 
단점만 모아놓은 구조이다. 그렇다면 임시 디렉토리의 절대 경로는 어떻게 얻어야 좋을까?

```java
BufferedOutputStream bos = ctxt.createScratchFilesStream(classFileName);
```
그렇다면 ctxt 객체에 임시 파일을 생성하라고 시키면 어떨까? 객체에게 맡기기에 적당한 임무로 보인다!

### 자료 전달 객체
자료 구조체의 전형적인 형태는 공개 변수만 있고 함수가 없는 클래스이다. 이런 자료구조체를 DTO(Data Transfer Object)라 한다. 좀더 일반적인 형태는 Bean 구조이다. 
비공개 변수를 조회 설정 함수로 조작하는 방식은 사이비 캡슐화로 일부 순수주의자나 만족시킬뿐 별다른 이익을 제공하지 않는다.

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
### 활성 레코드
공개 변수가 있거나 비공개 변수에 조회/설정 함수가 있는 자료구조, 대게 save나 find와 같이 탐색함수도 제공한다. 
불행히도 비즈니스 규칙 메서드를 추가해 이런 자료 구조를 개체로 취급하는 개발자가 흔하다. 하지만 이는 바람직하지 않다. 활성 레코드는 자료 구조로 취급한다.

### 결론
객체는 동작을 공개하고 자료를 숨긴다. 기존 동작을 변경하지 않으면서 객체 타입을 추가하기는 쉬운 반면 기존 객체에 새 동작을 추가하기는 어렵다.
자료 구조는 동작 없이 자료를 노출한다. 기존 자료 구조에 새 동작을 추가하기 쉬우나, 기존 함수에 새 자료 구조를 추가하기는 어렵다.
시스템을 구현할때 새로운 자료 타입을 추가하는 유연셩이 필요하면 객체가 더 적합하다. 새로운 동작을 추가하는 유연성이 필요하면 절차적인 코드가 더 적합하다. 어느쪽이 맞는가는 상황에 따라 다르다.
