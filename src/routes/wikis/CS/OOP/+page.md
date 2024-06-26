---
title: OOP
summary: 객체지향 프로그래밍의 핵심 원칙과 이를 통한 효율적인 소프트웨어 개발 방법을 설명합니다. SRP, OCP, LSP, DIP, ISP 원칙 탐구.
date: '2020-09-21'
tags: [ '개발' ]
---

# OOP

객체지향프로그래밍은 컴퓨터프로그래밍 패러다임중 하나이다. 컴퓨터 프로그래밍을 명령어의 집합에서 보는 시각에서 벗어나 독립된 단위 즉 객체의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메시지를 주고받고 데이터를
처리할 수 있다.

객체지향 프로그래밍은 프로그램의 유연하고 변경을 쉽게하는것을 지향하기 때문에 개발과 보수를 좀더 간편하게 할수 있다는 장점이 있지만 지나친 객체화의 경향은 실제 세계의 모습을 반대로 그대로 반영하지 못하게 한다는
단점이 있다.

## OOP 설계원칙

### 단일 책임의 원칙(SRP Single Responsibility Principle)

해당 모듈이 여러 대상 또는 엑터들에 대해 책임을 가져서는 안되고, 오직 하나의 엑터에 대해서만 책임을 져야한다. 단일 책임의 원칙을 지키게 되면 변경이 필요할 때 수정할 대상이 명확해진다는 장점이 있다. 수정에
대해서 서로 영향을 받지 않아 어플리케이션 변화에 좀더 과감하게 대응할수 있다.

### 개방 폐쇄의 원칙(OCP Open-Closed Principle)

확장에 대해 열려있고 수정에 대해서는 닫혀 있어야 한다.

- 확장에 대해 열려있다: 요구사항이 변경될 때 새로운 동작을 추가하여 애플리케이션의 기능을 확장할 수 있다.
- 수정에 대해 닫혀있다: 기존의 코드를 수정하지 않고 애플리케이션의 동작을 추가하거나 변경할 수 있다.

객체가 알아야 하는 지식이나 참조가 많아지면 객체간 결합도가 높아지고, 결합도가 높아질수록 위 원칙에 위배되는 설계가 된다. 변하는 것들은 숨기고 변하지 않는 것들에 의존하게 되면 기존 클래스를 수정하지 않고
어플리케이션 개발을 할 수 있게 된다.

### 리스코프의 치환 법칙(LSP Liskov Substitution Principle)

하위 타입은 상위 타입을 대체할 수 있어야 한다.

해당 객체를 사용하는 클라이언트가 상위 타입을 상속하는 하위 타입을 사용해도 차이점을 인식하지 못하고 계속 사용할수 있어야 한다는 것이다.

자식 클래스가 부모클래스를 대체하기 위해서는 부모 클래스의 가정을 준수해야 한다는 점을 강조

### 의존 역전 원칙(DIP Dependency Inversion Principle)

고수준 모듈은 저수준 모듈의 구현에 의존해서는 안되고 저수준 모듈이 고수준의 모듈에 의존해야 한다.

상위 계층(정책결정)이 하위 계층(세부 사항)에 의존하는 전통적인 의존관계를 반전시킨것 상위 계층이 하위 계층의 구현으로부터 독립하고 추상화에 의존할수 있게 해야한다.

- 고수준의 모듈: 비즈니스 로직에 가까운 어떤 의미 있는 단일 기능을 제공하는 모듈
- 저수준 모듈: 고수준 모듈의 기능을 구현하기 위한 하위 기능들을 실제로 구현한것

### 인터페이스 분리 원칙(ISP Interface segregation Principe)

클라이언트가 실제로 사용하는 인터페이스대로 분리를 해야 한다. 한번 인터페이스로 분리했다면 다시 인터페이스를 쪼개는 일은 지양해야 한다. 기존에 인터페이스를 받은 기존의 구현체에 문제가 생길수도 있기 때문이다.
