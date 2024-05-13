---
title: Stream
summary: ''
date: '2024-05-13'
tags: ['JAVA']
---


## Stream 이란?
자바 **스트림은 순서로 적용되고 변경할 수 없는 함수 모음을 추상화한 것**입니다. 스트림과 스트럭처에 가장 중요한 차이점은 **스트림이 데이터를 보유하지 않는다는 것**입니다.
해당 데이터에 대해 작동하는 기능만 지정할 수 있고, 스트림에서 작업을 수행하면 원본 스트림에 영향을 미칩니다.

## 스트림을 사용하는 경우
스트림은 데이터가 흐르는 파이프라인과 데이터에서 작동하는 기능을 나타냅니다. 이 파이프라인은 **스트림 소스, 0개 이상의 중간작업, 터미널 작업**으로 구성됩니다.
따라서 스트림은 데이터 기반 기능과 관련된 다양한 애플리케이션에서 사용할 수 있습니다.

```java
/* 
짝수 값만 선택하고 입력을 두 배로 늘려서 리스트로 반환하는 스트림 적용 
*/
List numbers = new Arrays.asList(1, 2, 3, 4);
List result = numbers.stream()
.filter(e -> (e % 2) == 0)
.map(e -> e * 2)
.collect(toList());
```

## Java 스트림의 일반적인 작업

java 8 이상에서는 stream() 메서드를 호출하여 모든 컬렉션에서 스트림을 쉽게 얻을 수 있습니다. 다음에는 항상 접하게 될 몇 가지 기본 기능이 있습니다.

- filter(): 원본의 일부 요소를 포함하는 새 스트림을 반환합니다. 새 스트림에 반환되어야 하는 요소를 계산하기 위해 **조건자를 수락하고 나머지는 제거**합니다.
- map(): 스트림 요소를 다른 것으로 변환하고, 스트림의 모든 요소에 적용할 함수를 받아들이고, 매개변수 함수가 생성한 값의 스트림을 반환합니다. Map을 사용하면 스트림 내부의 데이터에 대한 계산을 수행할 수 있습니다.
- reduce(): 스트림을 단일 요소로 축소합니다. 모든 정수 값을 합산하려면 이 기능을 사용하면 됩니다.
- collect(): 스트림에서 벗어나 List와 같은 구체적인 값 컬렉션을 얻는 방법입니다.

## 스트림 예: 피해야 할 잠재적인 문제

java streaming api를 사용할 때 몇 가지 주의 사항이 있으며 때로는 스트림 처리가 불가능해질 수 있습니다.

```java
class Person {
	Gender gender;
	String name;
	public Gender getGender() { return gender; }
	public String getName() { return name; }
}

enum Gender { MALE, FEMALE, OTHER } 
```

이는 필드에 일부 게터가 있는 일반적인 [Java Bean](/wikis/JAVA/Bean)입니다. 이제 이러한 사람의 목록이 있고 해당 목록에 있는 모든 “Female” 사람의 대문자 이름 목록을 가져오고 싶다고 가정해 보겠습니다.

```java
List names = new ArrayList();
List people = ...
people.steam()
.filter(p -> p.getGender() == Gender.FEMALE)
.map(Person::getName)
.map(String::toUpperCase)
*.forEach(name -> names.add(name));*
```

우리는 모든 단계에서 수행해야 할 작업의 사양을 따르지만 문제는 공유 상태의 변형에 있습니다. 우리는 스트림의 성격에 대해 전혀 알지 못하며 **스트림이 병렬인 경우 스트림에 요소를 동시에 추가하면 오류가 발생**할 수 있습니다.

### 피해야 할 또 다른문제

중간 작업만 지정되고 터미널 작업이 실수로 누락된 경우 출력에 아무것도 표시되지 않습니다. 이는 터미널 작업이 있을 때만 중간 작업이 실행되기 때문입니다.

예를 들어 다음 코드는 출력을 인쇄하지 않습니다.

```java
Stream.of("Cathy", "Alba", "Beth")
.filter(s -> {
System.out.println("filter " + s);
return true;
});
```

각 요소가 모든 작업을 통과하기 때문에 출력 순서는 다소 놀랍습니다. 일부 프로그래머가 가정하는 것과는 달리 모든 요소는 먼저 filter()를 통과한 다음 forEach()를 통과합니다). 예를 들어

```java
Stream.of("Cathy", "Alba", "Beth").
filter(s -> {
System.out.println("filter: " + s);
return true;
})
.forEach(s -> System.out.println("forEach: " + s));
```

출력은 다음과 같습니다.

```java
filter: Cathy
forEach: Cathy
filter: Alba
forEach: Alba
filter: Beth
forEach: Beth
```

## 동시성 오류를 방지하기 위해 Java Stream Collect 사용

대신 스트림을 결과 목록으로 수집하여 동시성과 가변성이 스트림 프레임워크의 책임이 되도록 해야 합니다. 이를 수행하는 방법의 예는 다음과 같습니다.

```java
List people = ...
List name = people.stream()
.filter(p -> p.getGender() == Gender.FEMALE)
.map(Person::getName)
.map(String::toUpperCase)
.collect(Collections.toList());
```

일반적으로 Collectors 클래스는 스트림을 구체적인 컬렉션으로 변환하는 데 필요한 거의 모든 기본 요소를 제공합니다. 한 가지 예는 toMap() 수집기 입니다. 요소를 맵에 필요한 키-쌍 값으로 변환하는 방법에 대해 혼란스러울 수 있습니다.

이렇게 하려면 요소를 키로 변환하는 함수와 값을 생성하는 또 다른 함수를 지정합니다. 다음은 동일한 사람들의 흐름을 지도에 수집하는 예입니다.

```java
List people = Map<String, Person> names = people.stream()
.collect(Collectors.toMap(p -> p.getName(), p -> p));
```

toMap 메소드에 제공된 첫 번째 함수는 요소를 키로 변환하고 두 번째 함수는 맵의 값으로 변환합니다.

## Java Stream Intermediate 및 터미널 작업

java 스트림의 장점 중 하나는 느리게 평가된다는 것입니다.스트림에 대한 일부 작업, 특히 스트림의 인스턴스를 반환하는 함수인 filter, map을 Middle 이라고 합니다. 이는 지정 시 평가되지 않음을 의미합니다. 이는 지정 시 평가되지 않음을 의미합니다. 대신 해당 작업의 결과가 필요할 때 계산이 수행됩니다.

즉, 다음과 같이 코드를 지정하면 됩니다.

```java
Stream names = people.stream()
.filter(p -> p.getGender() == Gender.FEMALE)
.map(Person::getName)
.map(String::toUpperCase);
```

어떤 이름도 즉시 수집되어 대문자로 표시되지 않습니다. 그렇다면 계산은 언제 이루어질까요? 터미널 작업이 호출 될 때 작동됩니다.

스트림 이외의 것을 반환하는 모든 작업은 터미널 입니다. forEach, Collect, Reduce와 같은 작업은 터미널입니다. 이는 대량의 데이터를 처리할 때 스트림을 특히 효율적으로 만듭니다.

성능 관점에서 중간 작업의 순서는 매우 중요합니다.

예를 들어, map()이 filter()보다 먼저 지정되면 map()이 여러 번 호출됩니다. 그러나 map()보다 먼저 filter()를 지정하면 map()이 한 번만 호출되므로 성능이 향상됩니다.

## 키워드

- 순서로 적용되고 변경할수 없는 함수들을 추상화한것
- 데이터에 대해 작동하는 기능에 대해 적용
- 일반적인 작업
  - filter
  - map
  - reduce
  - collect
