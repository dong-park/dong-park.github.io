---
title: 저주의 숫자 3
summary: "123"
date: '2024-05-20'
tags: [ '' ]
---

# 3x 마을에서의 숫자 변환 문제 해결 과정

## 문제 설명

3x 마을에서는 3의 배수와 숫자 '3'이 포함된 숫자를 사용하지 않습니다. 주어진 숫자 `n`을 3x 마을에서 사용되는 숫자로 변환하는 문제입니다. 예를 들어, `n = 15`일 경우 결과는 25가
되고, `n = 40`일 경우 결과는 76이 됩니다.

## 접근 방법

문제를 해결하기 위해서는 1부터 시작하여 3의 배수와 숫자 '3'이 포함된 숫자를 건너뛰며 숫자를 카운팅해야 합니다. 이를 위해 다음과 같은 과정을 거쳤습니다.

## 단계별 해결 과정

### 1. 초기 설정

- `count`를 0으로 초기화합니다.
- `current_number`를 0으로 초기화합니다.

```java
int count = 0;
int current_number = 0;
```

### 2. 반복문 실행

반복문을 통해 `count`가 `n`보다 작을 때까지 `current_number`를 1씩 증가시킵니다.

```java
while(count<n){
current_number++;
        // 조건을 만족하는 경우에만 count를 증가시킵니다.
        if(current_number %3!=0&&!Integer.

toString(current_number).

contains("3")){
count++;
        }
        }
```

### 3. 조건 확인

각 숫자가 3의 배수가 아니고, 숫자 '3'이 포함되지 않는 경우에만 `count`를 증가시킵니다.

```java
if(current_number %3!=0&&!Integer.

toString(current_number).

contains("3")){
count++;
        }
```

### 4. 결과 반환

반복문이 종료된 후, `current_number`가 3x 마을에서의 `n`번째 숫자가 됩니다.

```java
return current_number;
```

### 전체 코드

```java
class Solution {
    public int solution(int n) {
        int count = 0;
        int current_number = 0;

        while (count < n) {
            current_number++;
            if (current_number % 3 != 0 && !Integer.toString(current_number).contains("3")) {
                count++;
            }
        }

        return current_number;
    }
}
```

## 예제 실행

### 예제 1: `n = 15`

1. 숫자: 1, 2, 4, 5, 7, 8, 10, 11, 14, 16, 17, 19, 20, 22, 25
2. 결과: 25

### 예제 2: `n = 40`

1. 숫자: 1부터 76까지의 숫자 중 조건을 만족하는 40번째 숫자
2. 결과: 76

## 시행착오 및 결론

처음에는 1에서 20까지의 숫자만으로 3x 마을에서 사용되는 숫자를 찾으려 했으나, 예제 결과와 맞지 않는 것을 확인했습니다. 이후, 주어진 숫자 `n`까지 3의 배수와 숫자 '3'이 포함되지 않은 숫자를 하나씩
증가시키며 찾는 방식으로 접근하여 문제를 해결할 수 있었습니다.

이 과정을 통해, 3x 마을에서 사용되는 숫자는 정확히 찾아낼 수 있습니다. 추가적인 질문이 있으시면 언제든지 말씀해주세요!

