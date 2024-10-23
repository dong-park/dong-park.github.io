---
title: 1. Fundamentals
summary: 알고리즘 성능 분석의 중요성과 다양한 모델을 설명하며, 최악, 평균, 최선의 경우 성능 분석을 통해 알고리즘의 시간 복잡도를 이해하는 방법을 제시합니다. 또한, 유니온-파인드 알고리즘의 개념과 구현 방법을 다루며, 경로 압축과 가중치 균형을 통해 성능을 최적화하는 방법을 설명합니다.
date: '2024-10-02'
tags: []
---

## 자바의 기본 프로그램 구조

자바의 기본 프로그램 구조는 클래스로 이루어져 있으며, 이 클래스는 정적 머세드로 이루어진 라이브러리이거나, 데이터 타입 정의로 구성됩니다. 자바 프로그램은 다섯 가지 구성 요소로 이루어집니다.

1. 원시데이터 타입: 정수 ,실수, boolean, 문자 등과 같은 기본 데이터 타입입니다.
2. 문장(Statements): 계산을 정의하며, 변수 생성과 할당 실행 흐름 제어 등을 포함합니다.
3. 배열: 같은 타입의 여러 값을 저장하는 데이터 구조입니다.
4. 정적 메서드: 코드를 모듈화하고 재사용할 수 있도록 함수처럼 동작하는 메서드입니다.
5. 문자열: 문자들의 시퀀스입니다.

```jsx
// 다음은 자바를 이용한 이진 탐색 프로그램의 예시입니다.

import java.util.Arrays;

public class BinarySearch {
	public static int rank(int key, int[] a) {
		int lo = 0
		int hi = a.length - 1;
		while(lo <= hi) {
			int mid = lo + (hi - lo) / 2;
			if (key < a[mid]) hi = mid - 1;
			else if (key > a[mid]) lo = mid + 1;
			else return mid;
		}
	}
	
	public static void main(String[] args) {
		int[] whitelist = In.readInts(args[0]);
		Arrays.sort(whitelist);
		while (!StdIn.isEmpty()) {
			int key = StdIn.readInt();
			if (rank(key, whitelist) == -1)
					StdOut.println(key);
		}
	}
}
```

배열에서 특정 숫자를 찾는 이진 탐색 알고리즘을 구현한 것입니다. rank 메서드는 주어진 배열에서 키 값을 찾아 해당 인덱스를 반환하며, 찾지 못하면 -1을 반환합니다. main 메서드는 입력 데이터를 읽고 배열을 정렬 한 후, 배열에 없는 숫자만 출력합니다.

### 원시 데이터 타입

자바는 네 가지 기본 데이터 타입을 지원 합니다.

- int: 정수형 (예: 1, -42)
- double: 실수형 (예: 3.14, 1.0e 15)
- boolean: 논리형(ture 또는 false)
- char: 문자형 (예: ‘a’, ‘+’, ‘9’)

### 배열

배열은 같은 타입의 여러 값을 저장하며, 크기가 고정된 자료구조입니다. 예를 들어, double[] a = new double[N]; 는 길이가 N인 실수 배열을 생성하는 코드입니다. 배열 요소는 a[i]와 같이 접근합니다.

### 배열의 사용

배열은 같은 유형의 데이터를 저장할 수 있는 중요한 데이터 구조입니다. 예를 들어, 배열에 있는 값 중 최대값을 찾는 코드 예시는 다음과 같습니다.

```java
double max = a[0];
for (int i = 1; i < a.length; i++) {
	if (a[i] >  max) max = a[i];
}
```

이 코드는 배열 a[]에서 첫 번째 값을 max로 설정한 후, 나머지 요소들과 비교하여 더 큰 값이 나오면 max값을 갱신하는 방식입니다.

### 정적 메서드

정적 메서드는 주어진 입력에 대해 특정 작업을 수행한 후 결과를 반환하는 함수입니다. 예를 들어, 절대값을 구하는 정적 메서드는 다음과 같이 정의할 수 있습니다.

```java
public static int abs(int x) {
	if (x < 0) return -x;
	else return x;
}
```

이 메서드는 음수 값이 들어오면 그 값을 양수로 바꾸어 반환하고, 양수인 경우 그대로 반환합니다.

다음은 피타고라스 정리를 이용해 직각 삼각형의 빗변을 계산하는 메서드입니다:

```java
public static double hypotenuse(double a, double b) {
	return Math.sqrt(a * a + b * b);
}
```

이 코드는 두 변의 길이를 입력으로 받아 빗변의 길이를 계산하여 반환합니다.

### 재귀 메서드

재귀는 메서드가 자기 자신을 호출하는 방식으로, 문제를 작은 단위로 나누어 해결하는 방법입니다. 이진 탐색 알고리즘의 재귀적 구현은 다음과 같습니다.

```java
public static int rank(int key, int[] a, int lo, int hi) {
	if (lo > hi) return -1;
	int mid = lo + (hi + lo) / 2;
	if (key < a[mid]) return rank(key, a, lo, mid - 1); //키값이 중간값보다 작은경우 중간값보다 1작은 값을 하이로 잡고 검색
	else if (key > a[mid]) return rank(key, a, mid + 1, hi);
	else return mid;
}
```

이 코드는 주어진 키가 배열의 중간 값보다 작으면 배열의 왼쪽 부분을 탐색하고, 크면 오른쪽 부분을 탐색합니다. 이 과정을 재귀적으로 반복하여 값을 찾습니다.

### 모듈화된 프로그래밍

프로그램을 작성할 때 모듈화된 프로그래밍을 사용하면 코드를 더 쉽게 관리할 수 있습니다 모듈화된 코드의 장점은 다음과 같습니다.

- 작은 단위로 코드를 나눠서 작업하여 복잡도를 줄일 수 있습니다.
- 재사용성이 높아져 다른 프로그램에서 쉽게 사용할 수 있습니다.
- 코드의 특정 부분만 교체하거나 개선할 수 있습니다.

자바에서는 라이브러리를 만들고 서로 다른 모듈에서 정적 메서드를 호출하는 방식으로 모듈화된 프로그래밍을 지원합니다.

### 복습

**자바 프로그램에서** 정적 메서드(static method)**의 주된 역할은 무엇인가요?**

**다음 중 자바의 원시 데이터 타입에 해당하지 않는 것은?**
1.	int
2.	double
3.	boolean
4.	string

**이진 탐색 알고리즘에서** rank **메서드는 무엇을 반환하나요?**

**다음 중 배열을 선언하고 초기화하는 올바른 방법은 무엇인가요?**

1.      int a[] = {1, 2, 3};
2.	double a(10);
3.	int a = new array[5];
4.	int a[5];

**재귀 함수는 어떤 방식으로 동작하나요?**

---

# 데이터 추상화

데이터 추상화는 소프트웨어 공학에서 중요한 개념으로, 데이터를 단순환하여 다루고자 하는 복잡성을 줄이는 방법입니다. 이를통해 세부 구현 사항을 신경 쓰지 않고, 데이터가 어떤 식으로 처리되는지만 이해야하면 됩니다. 자바에서는 추상 데이터 타입을 통해 이러한 데이터를 정의합니다.

## 응용 프로그램 인터페이스(API)

자바에서 추상 데이터 타입을 구현하려면 먼저 API를 정의해야 합니다. API는 외부에서 사용할 수 있는 메서드와 데이터 타입을 명시한 것으로, 다음과 같은 기본 요소가 포함됩니다.

- 메서드 선언: api에 정의된 메서드는 외부에서 호출할 수 있는 함수입니다. 예를 들어, push(), pop() 메서드를 제공하는 스택 API가 있습니다.
- 리턴 타입: 메서드가 값을 반환할 때 어떤 데이터 타입을 반환할지 정의합니다.
- 메서드의 입력인자: 메서드가 호출될 떄 필요한 입력값의 타입과 순서를 정의합니다.

이러한 API는 구체적인 구현 없이 사용법만 정의하며, 추상적으로 어떤 작업을 해야 하는지를 설명합니다.

## 자바에서의 데이터 추상화

자바는 클래스를 사용하여 추상 데이터 타입을 구현합니다. 예를 들어, 스택과 같은 자료구조는 데이터 추상화으 대표적인 예입니다. 스택은 LIFO(Last In, First Out) 구조로 동작하며, push() 메서드로 데이터를 삽입하고 pop() 메서드로 가장 나중에 삽입된 데이터를 제거합니다. 이러한 동작을 추상화하여 구현할 수 있습니다.

다음은 배열을 사용하여 스택을 구현하는 기본적인 예시입니다.

```java
public static FixedCapacityStackOfStrings {
	private String[] s;
	private int N = 0;
	
	public FixedCapacityStackOfStrings(int capacity) {
		s = new String[capacity];
	}
	
	public boolean isEmpty() {
		return N == 0;
	}
	
	public void push(String item) {
			s[N++] = item;
 	}
 	
 	public String pop() {
	 	return s[--N];
 	}
}
```

이 스택 구현에서 push()는 스택에 데이터를 추가하고, pop()은 가장 최근에 추가된 데이터를 제거합니다. 내부적으로 배열을 사용하지만, 외부에서는 이 배열에 대한 구체적인 동작을 알 필요가 없습니다.

### 데이터 캡슐화

데이터 추상화의 또 다른 중요한 개념은 캡슐화 입니다 데이터와 메서드를 클래스 내부에 감추어, 외부에서는 API를 통해서만 데이터를 조작할 수 있게 만듭니다. 즉, 객체 내부의 데이터가 외부에서 직접 접근되지 않도록 보호하는 것입니다. 위의 예시에서는 배열 s가 클래스 내부애서만 접근 가능하고, 외부에서는 push()와 pop() 메서드를 통해서만 데이터를 처리할 수 있습니다.

## 동적 배열을 사용한 스택 구현

앞서 살펴본 고정된 크기의 배열을 사용한 스택의 단점은, 배열의 크기가 한정되어 있다는 점입니다. 만약 스택의 크기를 초과하여 데이터를 넣으려고 하면, 더 이상 데이터를 추가할 수 없습니다 이를 해결하기 위해, 동적 배열을 사용할 수 있습니다 동적 배열은 필요한 경우 배열의 크기를 자동으로 조정하는 방법입니다.

```java
public class ResizingArrayStackOfStrings {
	private String[] s;
	private int N = 0;
	
	public ResizingArrayStackOfStrings() {
		s = new String[1]; // 초기 크기 설정
	}
	
	public boolean isEmpty() {
		return N == 0;
	}
	
	public void push(String item) {
		if (N == s.length) resize(2 * s.length); // 크기가 꽉차면 배열크기 확장
		s[N++] = item;
	}
	
	public String pop() {
		String item = s[--N];
		s[N] = null;
		if (N > 0 && N == s.length / 4) resize(s.length / 2);
		return item;
	}
	
	private void resize(int capacity) {
		String[] copy = new String[capacity];
		for (int i=0; i<N; i++) {
			copy[i] = s[i]
		}
		s = copy;
	}
}
```

이 코드는 스택이 가득 차면 배열의 크기를 두 배로 늘리고, 스택의 사용량이 25% 미만으로 줄어들면 배열의 크기를 절반으로 줄입니다. 이를 통해 배열의 크기를 유동적으로 조절할 수 있어 메모리 사용 효율을 높입니다.

## 인터페이스와 구현 분리

이제 우리가 알게 된 데이터 추상화와 캡슐화를 통해, 인터페이스와 구현을 분리 할 수 있습니다. 사용자는 스택의 동작 방식에 대해 알 필요 없이, 단지 push()와 pop()같은 메서드를 호출하여 사용할 수 있습니다. 이러한 구조는 코드의 유연성과 보수성을 크게 향상 시킵니다.

---

# 가방(Bags), 큐(Queues), 스택(Stacks)

이 강의에서는 세 가지 중요한 데이터 구조인 가방, 큐, 그리고 스택에 대해 설명합니다. 이들은 모두 컬렉션 자료형의 일종으로, 데이터를 저장하고 관리하는 데 사용됩니다.

## 가방(Bag)

Bag은 삽입한 순서에 상관없이 데이터를 저장하는 일종의 컬렉션입니다. Bag은 주로 데이터를 순서 없이 모아야 할 때 사용되며, 특정 요소를 검색하거나 삭제하는 기능이 없습니다 다음은 가방의 주요 특징입니다.

- 무순서적: 데이터의 순서를 고려하지 않습니다.
- 중복 허용: 동일한 데이터를 여러 번 추가할 수 있습니다.
- 삽입과 순회: 데이터를 삽입한 후, Bag에 들어있는 데이터를 순회할 수 있습니다.

### Bag의 구현

자바의 연결 리스트나 배열을 사용하여 쉽게 구현할 수 있습니다. 아래는 자바로 구현한 Bag의 간단한 예시입니다.

```java
public class Bag<Item> implemensts Iterable<Item> {
	private Node first;
	private int N;
	
	private class Node {
		Item item;
		Node next;
	}
	
	public Bag() {
		first = null;
		N = 0;
	}
	
	public void add(Item item) {
		Node oldFirst = first;
		first = new Node();
		first.item = item;
		first.next = oldFirst;
		N++;
	}
	
	public boolean isEmpty() {
		return first = null;
	}
	
	public int size() {
		return N;
	}
	
	public Iterator<Item> iterator() {
		return new ListIterator();
	}
	
	private class ListIterator implements Iterator<Item> {
		private Node current = first;
		
		public boolean hasNext() {
			return current != null;
		}
		
		public Item next() {
			Item item = current.item;
			current = current.next;
			return item;
		}
		
		public void remove() {
			throw new UnsupportedOperationException();
		}
	}
}
```

→ 연결리스트를 가지고 데이터를 적재하기 때문에 현재 코드는 순서가 없는건 아니다

## 큐(Queue)

큐는 선입선출 구조를 따르는 자료구조이다. 가장 먼저 들어온 데이터가 먼저 나가게 되고, 일반적인 큐의 주요 연산은 다음과 같습니다.

- enqueue: 큐의 끝에 데이터를 추가합니다.
- dequeue: 큐의 앞에서 데이터를 제거하고 반환합니다.
- isEmpty: 큐가 비어 있는지 확인합니다.
- size: 큐에 저장된 데이터의 개수를 반환합니다.

큐는 주로 순서를 유지하면서 데이터를 처리할 때 유용합니다. 예를 들어, 은행에서 대기 순번을 처리하거나 프린터 작업을 순서대로 처리하는 데 사용할 수 있습니다.

### 큐의 구현

다음은 연결 리스트를 사용하여 구현한 기본적인 큐의 예입니다

```java
public class Queue<Item> {
	private Node first;
	private Node last;
	private int N;
	
	private class Node {
		Item item;
		Node next;
	}
	
	public Queue() {
		first = null;
		last = null;
		N = 0;
	}
	
	public boolean isEmpty() {
		return first == null
	}
	
	public int size() {
		return N;
	}
	
	public void enqueue(Item item) {
		Node oldLast = last;
		last = new Node();
		last.tiem = item;
		last.next = null;
		if (isEmpty()) first = last;
		else oldLast.next = last;
		N++;
	}
	
	public Item dequeue() {
		Item item = first.item;
		first = first.next;
		if (isEmpty()) last = null;
		N--;
		return item;
	}
}
```

## 스택(Stack)

스택은 후입선출(LIFO, Last In First Out) 구조를 따르는 자료구조입니다. 스택은 가장 나중에 들어온 데이터가 가장 먼저 나가게 됩니다. 스택은 주로 함수 호출을 추적하거나 수식계산 후위 표기법 변환 등 다양한 상황에서 사용됩니다.

스택의 주요 연산은 다음과 같습니다.

- push: 스택의 맨 위에 데이터를 추가합니다.
- pop: 스택의 맨 위에 있는 데이터를 제거하고 반환합니다.
- isEmpty: 스택이 비어 있는지 확인합니다.
- size: 스택에 저장된 데이터의 개수를 반환합니다.

### 스택의 구현

다음은 연결 리스트를 사용하여 구현한 스택의 기본적인 예입니다.

```java
public class Stack<Item> {
	private Node first;
	private int N;
	
	private class Node {
		Item item;
		Node next;
	}
	
	public Stack() {
		first = null;
		N = 0;
	}
	
	public boolean isEmpty() {
		return first == null;
	}
	
	public int size() {
		return N;
	}
	
	public void push(Item item) {
		Node oldFirst = first;
		first = new Node();
	}
}
```

이 스택 클래스는 push() 메서드를 사용하여 추가하고, pop() 메서드를 통해 가장 나중에 추가된 데이터를 제거합니다.

스택은 재귀 알고리즘 구현이나 후위 표기법 계산 ,브라우저의 뒤로 가기 버튼 등에서 많이 사용됩니다. 스택은 배열이나 연결 리스트를 사용하여 구현할 수 있으며, 동적 배열을 사용하면 필요에 따라 크기를 조정할 수도 있습니다.

### 스택, 큐, 가방의 비교

이 세 가지 자료구조는 각각의 사용 목적에 맞게 설계되었습니다. 다음 표는 이들 자료구조의 주요 차이점을 요약한 것입니다.

| 특징 | 스택 | 큐 | 가방 |
| --- | --- | --- | --- |
| 저장방식 | LIFO (후입선출) | FIFO (선입선출) | 무순서 |
| 삽입 연산 | push | enqueue | add |
| 삭제 연산 | pop | dequeue | 없음 |
| 용도 | 함수 호출 추적
수식 계산 | 작업 대기열
순차적 처리 | 데이터 수집
순회 |

### 성능 분석

| 연산 | 가방 | 큐 | 스택 |
| --- | --- | --- | --- |
| 삽입 | O(1) | O(1) | O(1) |
| 삭제(dequeue/pop) | N/A | O(1) | O(1) |
| 순회(iterate) | O(N) | O(N) | O(N) |
- 삽입 연산: 세 가지 자료구조 모두 삽입 시 O(1)의 상수 시간 복잡도를 가집니다. 즉, 항목을 추가하는 연산은 데이터 크기에 상관없이 일정한 시간이 소요됩니다.
- 삭제 연산: 큐의 경우 dequeue(), 스택의 경우 pop() 연산 모두 O(1)의 상수 시간 복잡도를 가집니다. 가방(Bag)은 데이터의 삭제 연산이 없기 때문에 해당되지 않습니다.
- 순회: 모든 요소를 순회하는 연산은 O(N)의 시간 복잡도를 가집니다. 이때 N은 자료구조에 저장된 항목의 수입니다.

### 응용 사례

이제 각각의 자료구조가 실제로 어떻게 사용되는지 예를 들어보겠습니다.

### 스택

- 함수 호출 스택: 함수 호출이 재귀적일 때, 호출된 함수의 실행 순서를 추적하기 위해 스택을 사용합니다. 마지막에 호출된 함수가 가장 먼저 완료되어야 하므로, 후입선출(LIFO) 구조가 적합합니다.
- 수식 계산: 컴파일러는 중위 표현식을 후위 표현식으로 변환하여 계산하는 과정에서 스택을 사용합니다.
- 브라우저 뒤로 가기 기능: 사용자가 페이지를 이동할 때마다 스택에 저장하고, 뒤로 가기 버튼을 누르면 스택에서 꺼내 마지막 페이지로 이동합니다.

### 큐

- 작업 대기열: 운영체제는 작업들을 큐에 넣고, 첫 번째로 들어온 작업부터 처리합니다. 이때 큐의 선입선출 구조가 사용됩니다.
- 프린터 작업 처리: 여러 사용자가 프린터를 사용할 때, 작업들이 큐에 저장되고 순서대로 처리됩니다.
- 네트워크 패킷 처리: 네트워크에서 들어오는 패킷을 순서대로 처리할 때 큐를 사용합니다.

### 가방

- 데이터 수집: 데이터를 순서 없이 모아야 할 때 가방을 사용합니다. 가방은 데이터의 추가와 순회에만 관심이 있을 때 유용합니다.
- 통계 수집: 통계 데이터를 수집하고 평균, 분산 등을 계산할 때 가방을 사용하여 데이터를 저장한 후, 순회하면서 계산을 수행할 수 있습니다.

## 알고리즘 분석

알고리즘 분석은 매우 중요한 주제입니다. 동일한 문제를 해결하는 여러 알고리즘 중에서 더 효율적인 것을 선택하기 위해 알고리즘의 성능을 평가하는 것이 필요합니다. 성능을 평가할 때는 알고리즘이 문제의 크기를 커질수록 얼마나 많은 자원(시간과 공간)을 사용하는지를 측정합니다.

### 성능 측정의 중요성

알고리즘의 성능을 분석하는 이유는 시간 복잡도와 공간 복잡도를 이해하기 위함입니다.

- 시간 복잡도(Time Complexity): 알고리즘이 실행되는 데 걸리는 시간을 분석합니다.
- 공간 복잡도(Space Complexity): 알고리즘이 사용하는 메모리의 양을 분석합니다.

이러한 분석을 통해 우리는 알고리즘이 특정 입력 크기에 대해 효율적인지 비효율적인지 판단할 수 있습니다.

### 명령문 실행 시간 측정

알고리즘의 성능을 측정하는 가장 기본적인 방법은 명령문이 실행되는 시간을 계산하는 것입니다. 일반적으로 연산 횟수를 기준으로 측정합니다. 예를 들어, for 루프 안에서 어떤 연산이 이루어진다면 그 연산의 횟수는 반복문의 반복 횟수에 따라 결정됩니다.

다음은 명령문 실행 시간의 간단한 예입니다.

```java
for (int i = 0; i < N; i++) {
	System.out.println(i);
}
```

위 코드에서 System.out.println(i)는 N번 반복되므로, 이 명령문은 O(N)의 시간 복잡도를 가집니다.

### 복잡도 표기법

알고리즘의 시간 복잡도와 공간 복잡도를 설명할 때는 빅오 표기법(Big-O Notation)을 사용합니다. 빅오 표기법은 알고리즘의 성능을 가장 최악의 경우를 기준으로 표현합니다. 즉, 익렵 크기(N)가 매울 커질 때, 알고리즘이 얼마나 효율적인지를 나타냅니다.

다음은 일반적인 시간 복잡도 클래스 입니다:

- O(1): 상수 시간 복잡도. 입력 크기와 상관없이 일정한 시간이 걸리는 알고리즘입니다.
- O(N): 선형 시간 복잡도. 입력 크기에 비례하여 시간이 증가하는 알고리즘 입니다.
- O(log N): 로그 시간 복잡도. 입력 크기가 커지루록 실행 시간의 증가율이 점점 줄어드는 알고리즘입니다.
- O(N^2): 이차 시간 복잡도. 입력 크기에 대해 시간이 제곱 비율로 증가하는 알고리즘입니다.

### 예시: 배열에서 최대값 찾기

다음은 배열에서 최대값을 찾는 알고리즘의 예입니다.

```java
public int finxMax(int[] arr) {
	int max = arr[0];
	for (int i=1; i<arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
```

이 알고리즘은 배열의 모든 요소를 한 번 씩 확인하기 때문에 시간 복잡도는 O(N)입니다.

### 실제 성능 측정 및 실험

이제 알고리즘의 성능을 측정하는 실제 방법에 대해 알아보겠습니다. 이론적으로 알고리즘의 성능을 분석하는 것 외에도, 실제로 프로그램을 실행하여 시간과 메모리 사용량을 측정하는 실험적 성능 분석이 있습니다.

실험을 통해 얻을 수 있는 정보는 다음과 같습니다.

1. 실행 시간: 실제로 알고리즘이 얼마나 빠른게 실행되는지 측정합니다.
2. 메모리 사용량: 알고리즘이 실행되는  동안 얼마나 많은 메모리를 사용하는지 측정합니다.

다음은 자바에서 알고리즘의 실행 시간을 측정하는 간단한 코드 예입니다:

```java
public class PerformanceTest {
	public static void main(String[] args) {
		long startTime = System.currentTimeMillis(); // 시작 시간 기록
		
		// 테스트할 알고리즘 실행
		int[] arr = new int[10000000];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = i;
		}

		long endTime = System.currentTimeMillis(); // 종료 시간 기록
		System.out.println("Execution Time: " + (endTime - startTime) + "ms");
	}
}
```

위 코드에서 System.currentTimeMillis() 메서드를 사용하여 프로그램의 시작과 끝 시간을 기록하고, 실행 시간을 밀리초 단위로 출력합니다.

### 알고리즘 성능의 변수

실제 성능 분석 시, 다양한 요소들이 성능에 영향을 미칩니다, 따라서 실험 시 이러한 변수를 고려해야 합니다:

1. 입력 크기: 입력의 크기가 알고리즘의 실행 시간에 큰 영향을 미칩니다. 알고리즘의 시간 복잡도는 일반적으로 입력 크기에 따라 달라집니다.
2. 입력 데이터의 특성: 예를 들어, 정렬된 배열을 처리하는 알고리즘과 무작위 배열을 처리하는 알고리즘의 성능은 다를 수 있습니다.
3. 하드웨어: 알고리즘이 실행되는 컴퓨터의 성능도 영향을 미칩니다. 동일한 알고리즘이라도 CPU, 메모리 등 하드웨어 스펙에 따라 성능이 달라질 수 있습니다.
4. 운영체제와 JVM: 자바 프로그램의 경우, JVM의 동작과 운영체제의 성능에 영향을 미칩니다.

### 성능 분석을 위한 모델

알고리즘 성능을 분석할 때, 실제 실행 시간뿐만 아니라 이론적인 성능 분석도 중요합니다. 이를 위해 자주 사용되는 모델은 다음과 같습니다:

- 실행 시간 모델: 프로그램이 실행될 때 소요되는 실제 시간을 측정하는 모델입니다.
- 연산 횟수 모델: 알고리즘이 실행되면서 수행되는 기본 연산(예: 덧셈, 곱셉 등)의 횟수를 세는 모델입니다.
- 메모리 접근 모델: 알고리즘이 메모리에 접근하는 횟수를 기반으로 성능을 분석하는 모델입니다.

이론적인 분석과 실제 성능 측정을 함께 고려함으로써, 우리는 더 나은 알고리즘을 설계할 수 있습니다.

### 최악, 평균, 최선의 경우 성능 분석

알고리즘 성능을 분석할 때, 주로 세 가지 경우를 고려합니다:

1. 최악의 경우(Worst-case): 알고리즘이 가장 오래 걸릴 때의 성능을 분석하는 경우입니다. 이는 일반적으로 빅오 표기법으로 나타냅니다. 최악의 경우 분석은 매우 중요한데, 특히 알고리즘이 항상 일정한 성능을 보장해야 할 떄 유용합니다.

예를 들어 정렬되지 않은 배열에서 선형 탐색은 할 때, 찾고자 하는 값이 마지막에 있거나 없을 경우가 최악의 경우 입니다 이때의 시간 복잡도는 O(N)입니다.

1. 평균의 경우(Average-case): 모든 가능한 입력에 대해 알고리즘이 어떻게 수행되는지의 평균 성능을 나타냅니다. 평균의 경우 분석은 일반적으로 정확한 성능 추정을 위해 많이 사용됩니다.

예를 들어, 배열에서 임의의 값을 찾는 경우, 평균적으로 배열의 절반 정도를 탐색하게 됩니다. 이 경우의 시간 복잡도는 O(N/2) 이지만 빅오 표기법에서는 이를 단순히 O(N)으로 표기합니다.

1. 최선의 경우(Best-case): 알고리즘이 가장 빠르게 실행될 때의 성능을 분석하는 경우입니다. 이는 실제로 발생할 가능성이 낮기 때문에 보통 참고용으로 사용됩니다.

예를 들어, 이미 정렬된 배열에서 이진 탐색(Binary Search)을 수행할 때, 찾고자 하는 값이 첫 번쨰 시도에서 발견되면 최선의 경우가 됩니다. 이때의 시간 복잡도는 O(1)입니다.

### 빅오 표기법의 예시

빅오 표기법을 통해 다양한 알고리즘의 시간 복잡도를 분석할 수 있습니다. 몇 가지 예시를 살펴보겠습니다.

1. 상수 시간 복잡도 - O(1): 입력 크기에 상관없이 일정한 시간이 걸립니다.

```java
public int getFirstElement(int[[] arr) {
	return arr[0];
}
```

- 이 코드는 배열의 첫 번째 요소를 반환하므로, 항상 일정한 시간이 걸립니다. 따라서 시간 복잡도는 O(1)입니다.
1. 선형 시간 복잡도 - O(N): 입력 크기에 비례하여 시간이 증가합니다.

```java
public int sumArray(int[] arr) {
	int sum = 0;
	for (int i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
```

- 이 코드는 배열의 모든 요소를 더하므로, 배열의 크기 N에 비례하여 시간이 증가합니다. 따라서 시간 복잡도는 O(N)입니다.
1. 로그 시간 복잡도 - O(log N): 입력 크기가 커질수록 시간 증가율이 점점 줄어듭니다.

```java
public int binarySarch(int[] arr, int key) {
	int low = 0;
	int high = arr.length - 1;
	while (low <= high) {
		int mid = (low + high) / 2;
		if (key < arr[mid]) high = mid - 1;
		else return mid;
	}
	return -1;
}
```

- 이 코드는 배열에서 이진 탐색을 수행하며, 배열이 절반씩 줄어들기 때문에 시간 복잡도는 O(log N)입니다.
1. 이차 시간 복잡도 - O(N^2): 이중 루프를 사용하는 경우, 시간 복잡도는 N의 제곱에 비례하여 증가합니다.

```java
public void bubbleSort(int[] arr) {
	for (int i = 0; i < arr.length; i++) {
		for (int j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}
```

- 이 코드는 버블 정렬을 사용하여 배열을 정렬하며, 이중 루프가 사용되므로 시간 복잡도는 O(N^2)입니다.

### 알고리즘 선택의 중요성

알고리즘 성능 분석을 통해 적절한 알고리즘을 선택하는 것이 중요합니다. 예를 들어, 작은 크기의 입력에 대해서는 O(N^2) 알고리즘도 충분히 효율적일 수 있지만, 입력 크기가 매우 커지면 O(log N) 또는 O(N)의 알고리즘을 선택하는 것이 더 나은 성능을 보장할 수 있습니다.

## 복습

알고리즘의 성능을 분석할 때 사용하는 표기법은?

다음 중 시간 복잡도가 O(N^2)인 알고리즘의 예시는 무엇인가요?

알고리즘의 최악의 경우 성능을 분석하는 이유는 무엇인가요?

O(log N)의 시간 복잡도를 가지는 알고리즘의 예는 무엇인가요?

알고리즘 성능을 측정하는 실제 방법은 무엇을 포함하나요?

---

# 유니온 파인드(Union-Find) 사례 연구

union-find는 동적 연결성  문제를 해결하는 데 사용되는 매우 효율적인 알고리즘 입니다. 이는 데이터들이 서로 연결되었는지 여부를 효율적으로 판단하고, 새로운 연결을 추가할 수 있는 자료구조입니다. 이 알고리즘은 네트워크 연결, 상호 연결된 시스템, 클러스터링 문제등 다양한 실전 문제에 적용됩니다.

## 문제 정의

동적 연결성 문제는 다음 두 가지 연산을 지원하는 문제입니다.

1. Union: 두 개의 요소가 속한 집합을 하나로 합칩니다.
2. Find: 두 요소가 동일한 집합에 속하는지 확인합니다.

이 문제의 핵심은 여러 개의 요소가 서로 어떻게 연결되어 있는지를 추적하는 것입니다. 두 요소가 같은 집합에 있다면 연결되었다고 볼 수 있고, 그렇지 않다면 연결되지 않았다고 판단합니다.

## 예시 문제

예를 들어, 네트워크 상에서 10개의 컴퓨터가 있고, 이 중 일부가 서로 네트워크로 연결되어 있다고 가정해봅시다. 우리는 다음 질문에 답하고자 합니다:

- 컴퓨터 A와 컴퓨터 B가 같은 네트워크에 속해 있는가?
- 컴퓨터 A와 B가 다른 네트워크에 속해 있으면, 이 두 네트워크를 하나로 합칠 수 있는가?

이러한 문제를 해결하기 위해 Union-Find 알고리즘을 사용할 수 있습니다.

### 간단한 구현: 퀵 파인드(Quick-Find)

퀵 파인드는 Union-Find 문제를 해결하는 가장 간단한 방법중 하나입니다. 이 알고리즘에서는 각 객체가 고유한 집합 ID를 가집니다. 두 객체가 같은 집합에 속하면 그들은 동일한 ID를 가집니다.

퀵-파인드의 기본적인 아이디어 배열을 사용하여 각 객체가 속한 집합을 추적하는 것입니다.

- Find(p): 객체 p의 집합 ID를 반환합니다.
- Union(p, q): p와 q가 속한 집합을 하나로 합칩니다.

```java
public class QuickFindUF {
	private int[] id;

	public QuickFindUF(int N) {
		id = new int[N];
		for (int i = 0; i < N; i++) {
			id[i] = i;
		}
	}

	public boolean connected(int p, int q) {
		return id[p] == id[q];
	}

	public void union(int p, int q) {
		int pid = id[p];
		int qid = id[q];
		for (int i = 0; i < id.length; i++) {
			if (id[i] == pid) {
				id[i] = qid;
			}
		}
	}
}
```

## 퀵-유니온(Quick-Union)

퀵-파인드 알고리즘은 Union 연산에서 성능이 떨어지기 때문에, 이를 개선한 퀵-유니온(Quick-Union) 알고리즘이 있습니다. 퀵-유니온은 각 객체를 트리 형태로 표현하여 연결성을 관리하는 방식입니다.

### 퀵-유니온의 개념

- 아이디어: 각 객체는 하나의 트리 노드로 간주됩니다. 두 객체가 동일한 트리에 속해 있으면 그들은 연결된 것입니다. 객체는 또는 상위 노드와 연결되어 있으며, Find 연산을 수행할 때 루트 노드를 찾습니다.
- Union 연산: 두 트리의 루트 노드를 찾아서 한 트리의 루트가 다른 트리의 루트에 연결되어야 합니다.

퀵-유니온 알고리즘의 배열 표현:

- id[i]는 객체 i의 부모 객체를 가리킵니다.
- 루트 노드의 경우 id[i] == i 입니다.

```java
public class QuickUnionUF {
	private int[] id;

	public QuickUnionUF(int N) {
		id = new int[N];
		for (int i = 0; i < N; i++) {
			id[i] = i;
		}
	}

	private int root(int i) {
		while (i != id[i]) {
			i = id[i];
		}
		return i;
	}

	public boolean connected(int p, int q) {
		return root(p) == root(q);
	}

	public void union(int p, int q) {
		int rootP = root(p);
		int rootQ = root(q);
		id[rootP] = rootQ;
	}
}
```

## 경로 압축(Path Compression)

경로 압축은 퀵 유니온의 성능을 개선하는 방법중 하나입니다. 퀵 유니온에서 루트 노드를 찾기 위해 부모 노드를 계속해서 따라가야 하므로 트리의 깊이가 깊어질수록 성능이 저하됩니다. 경로 압축은 Find 연산중에 트리의 높이를 줄여 성능을 최적화 합니다.

### 경로 압축의 개념:

- Find 연산을 수행할 때, 트리의 모든 노드가 직접적으로 루트 노드를 가리키도록 합니다.
- 이렇게 하면 다음번 Find 연산이 훨씬 더 빠르게 이루어집니다.

경로 압축을 통해 트리의 높이를 최소화 하므로, 후속 연산이 빠르게 수행됩니다.

### 경로 압축 구현

다음은 경로 압축이 적용된 퀵-유니온 알고리즘 입니다:

```java
public class QuickUnionPathCompressionUF(int N){
	private int[] id;
	
	public QuickUnionPathCompressionUF(int N) {
		id = new int[N];
		for (int i=0; i<N; i++) {
			id[i] = i;
		}
	}
	
	private int root(int i) {
		while (i != id[i]) {
			id[i] = id[id[i]]); // 경로 압축: i의 부모를 루트로 변경
			i = id[i];
		}
		return i;
	}
	
	public boolean connected(int p, int q){
		int rootP == root(p);
		int rootQ == root(q);
		id[rootP] == rootQ;
	}	
}
```

### 경로 압축 설명

1. root 연산:
    - 경로 압축을 사용하여, 현재 노드를 부모를 직접 루트 노드로 설정합니다.
    - 이 방식은 트리의 높이를 줄여서 Find 연산을 매우 빠르게 만들어 줍니다.
2. connected 연산:
    - 두 노드가 같은 루트 노드를 공유하는지 확인하여, 연결 여부를 판단합니다.
3. union 연산:
    - 두 트리의 루트 노드를 찾아 하나의 트리로 병합합니다.

### 가중치 균형(Wieghted Quck-Union)

가중치 균형은 트리의 균형을 유지하여, 트리가 한쪽으로 치우치는 것을 방지하는 방법입니다. 트리의 크기에 따라 병합할 때 더 작은 트리를 더 큰 트리에 병합하는 방식입니다. 이렇게 하면 트리의 깊이가 커지는 것을 방지하고, 성능이 크게 향상됩니다.

### 가중치 균형 구현

다음은 가중치 균형은 적용 한 퀵-유니온 알고리즘 입니다.

```java
class WeightedQuickUnionUF {
    private int[] id;
    private int[] size;

    public WeightedQuickUnionUF(int N) {
        id = new int[N];
        size = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i;
            size[i] = 1; // 초기에는 각 트리의 크기는 1
        }
    }

    private int root(int i) {
        while (i != id[i]) {
            i = id[i];
        }
        return i;
    }

    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }

    public void union(int p, int q) {
        int rootP = root(p);
        int rootQ = root(q);
        if (rootP == rootQ) return;
        ;

        if (size[rootP] < size[rootQ]) {
            id[rootP] = rootQ;
            size[rootQ] += size[rootP];
        } else {
            id[rootQ] = rootP;
            size[rootP] += size[rootQ];
        }
    }

}
```

### 가중치 균형 설명

1. size 배열: 각 트리의 크기를 추적하여 더 작은 트리를 더 큰 트리에 병합합니다.
2. union 연산: 두 트리의 루트 노드를 비교하여 더 작은 트리를 더 큰 트리에 병합합니다. 이렇게 하면 트리의 깊이가 최소화 됩니다.

### 성능 분석

- 경로 압축과 가중치 균형을 결합하면, Find Union 연산이 거의 O(log N) 수준으로 향상됩니다.
- 경로 압축을 통해 높이를 줄이고, 가중치 균형을 통해 트리가 깊어지는 것을

## 복습

유니온-파인드(Union-Find) 알고리즘에서 ‘Union’ 연산은 무엇을 의미하나요? 두 요소가 속한 직합을 하나로 병합한다.

Quick-Union 알고리즘에서 ‘Find’연산의 목적은 무엇인가요? 요소의 루트 노드를 찾는다.

경로 압축은 Quick-Union 알고리즘의 어떤 부분은 개선하기 위한 기법인가요? 트리의 높이를 줄이기 위한 방법

가중치 균형의 주요목적은 무엇인가요? 트리의 크기나 깊이에 따라 작은 트리를 큰 트리에 병합하여 트리의 깊이를 최소화 하기 위함이다.

경로 압축과 가중치 균형을 결합하면 어떤 장점이 있나요? 트리의 높이를 줄이고 연산의 효율성을 극대화 할 수 있다.
