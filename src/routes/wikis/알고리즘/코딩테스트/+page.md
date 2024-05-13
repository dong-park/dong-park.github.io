---
title: 코딩테스트 팁
summary: 자주 사용되는 Java 코딩 테스트 함수와 메소드를 설명합니다. 배열, 리스트, 문자열 관리와 Scanner, StringBuilder 클래스의 활용법을 포함하여 Java 프로그래밍의 기본을 다룹니다.
date: '2024-03-20'
tags: ['코딩테스트']
---

# 코딩 테스트에서 자주 쓰이는 함수

### 배열(Array)

```java
- 배열 선언: int[] arr = new int[5];
- 배열 길이: arr.length
- 배열 출력: Arrays.toString(arr) (Arrays 클래스의 toString 메소드 사용)
- 배열 복사: Arrays.copyOf(arr, arr.length) 또는 System.arraycopy(sourceArr, 0, destArr, 0, sourceArr,length);
- 다차원 배열 출력: Arrays.deepToString(multiDimArr)
```

### 리스트(List)

```java
- 리스트 선언: List<Integer> list = new ArrayList<>();
- 요소 추가: list.add(value);
- 요소 제거: list.remove(index); 또는 객체 제거 list.remove(Integer.valueOf(value));
- 리스트 크기: list.size()
- 리스트 정렬: Collections.sort(list);
- 리스트 출력: 리스트를 그대로 출력하면 됨 (예: System.out.println(list);)
```

### 문자열(String)

```java
- 문자열 길이: str.length()
- 부분 문자열: str.substring(startIndex, endIndex) (startIndex부터 endIndex 전까지의 문자열 반환)
- 문자열 비교: str.equals(otherStr)
- 문자열을 문자 배열로: char[] charArray = str.toCharArray();
- 문자 찾기: str.indexOf('a') (문자나 문자열이 처음으로 등장하는 인덱스 반환, 없으면 -1 반환)
- 문자열 분할: String[] parts = str.split("delim");
```

### 기타 유용한 자바 팁

- Scanner 클래스를 사용한 입력 처리:

```java
Copy code
Scanner scanner = new Scanner(System.in);
int number = scanner.nextInt();
String str = scanner.nextLine();
```

- StringBuilder를 사용해 문자열을 더 효율적으로 다룸 (반복적인 문자열 연산에 유용):

``` java
Copy code
StringBuilder sb = new StringBuilder();
sb.append("Hello, ");
sb.append("World!");
String result = sb.toString();
```

- 반복문과 조건문에서의 continue와 break 사용:
  continue는 반복문의 현재 반복을 건너뛰고 다음 반복으로 넘어가고,
  break는 반복문을 완전히 종료시킴.
