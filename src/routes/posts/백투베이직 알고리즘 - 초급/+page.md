---
title: 백투베이직 알고리즘 - 초급
summary: 초심으로 돌아가겠습니다.
date: '2024-03-20'
tags: ['코딩테스트']
---


## 자바  코딩테스트에서 자주 쓰이는 함수

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

## 배열

### 숫자 뒤집기

이 코드는 사용자로부터 배열의 길이와 요소를 입력 받는 기본 틀을 제공해. 이제 남은 부분은 '역순 배열 만들기 로직 구현' 부분을 완성하는 거야. 배열을 역순으로 만드는 로직을 직접 구현해보자. 배열을 뒤집는 가장 간단한 방법 중 하나는 배열의 처음과 끝을 서로 교환하는 것이야. 이 과정을 배열의 중간까지 반복하면 돼.

```java
public class main
{
    public static void main(String[] args) {
        // 초기 입력 배열 설정
        int[] arr = {1, 2, 3, 4, 5};
        int[] result = new int[5];
        
        // 1. 역순 배열 만들기 로직 구현
        for (int i=0; i < result.length; i++){
            result[i] = arr[result.length - (i+1)];
        }

        printArray(result);

        // 2. 제자리에서 배열 요소 뒤집기 로직 구현 -> 메모리 최적화
        int temp;
        for (int i = 0; i < arr.length / 2; i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        
        printArray(arr);
            
    }
    
    // 배열 출력을 위한 메소드
    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + (i < array.length - 1 ? ", " : "\n"));
        }
    }
}
```

원본 배열 내에서 요소의 위치를 직접 바꾸는 방법은 추가적인 메모리를 사용하지 않아서 더 효율적이야. 이 방법을 사용하면, 배열의 크기가 커져도 추가 메모리 사용이 없기 때문에 메모리 효율성 측면에서 우수해.

### 문자열 뒤집기

주어진 문자열이 "hello"라면, 이를 뒤집어 "olleh"로 만들어야 해.

문자열도 사실 문자의 배열과 같다고 볼 수 있어. 따라서, 문자열 내의 문자들의 위치를 역순으로 바꿔주면 돼. 자바에서는 StringBuilder 클래스를 사용해서 이 문제를 간단하게 해결할 수 있지만, 문자 배열을 이용해 직접 구현하는 방법도 중요한 학습 포인트가 될 거야.

```java
public class main
{
    public static void main(String[] args) {
        String str = "hello";
        String[] strSplit = str.split("");

        // 1. 문자열 뒤집기 로직 구현
        String temp;
        for(int i=0; i < strSplit.length / 2; i++) {
            temp = strSplit[i];
            strSplit[i] = strSplit[strSplit.length - 1 - i];
            strSplit[strSplit.length - 1 - i] = temp;
        }
        str = String.join("", strSplit);
    }
}
```

접근 방법은 문자열을 문자 배열로 취급하고, 배열의 요소들을 직접 뒤집어서 문자열을 역순으로 만드는 것이었어. 이 방식은 효율적이고, 문자열을 처리하는 데 있어 유용한 방법 중 하나야. split("") 메소드를 사용해 문자열을 문자로 구성된 배열로 변환하고, 배열의 앞뒤를 교환하는 방식으로 역순을 만들었어. 마지막으로, String.join("", strSplit)을 사용하여 문자 배열을 다시 문자열로 합치는 과정을 거쳤어.

StringBuilder를 사용하는 것도 좋은 방법 중 하나임을 기억해둬. 예를 들어, 이 문제를 StringBuilder를 사용해 해결한다면 다음과 같이 더 간단하게 작성할 수 있어

```java
public class main
{
    public static void main(String[] args) {
        String str = "hello";
        
        //  StringBuilder를 이용해서 문자열 뒤집기
        str = new StringBuilder(str).reverse().toString();
    }
}
```

### 최소공배수, 최대공약수 구하기

두 개의 자연수가 주어질 때, 이 두 수의 최대 공약수(Greatest Common Divisor, GCD)와 최소 공배수(Least Common Multiple, LCM)를 찾는 프로그램을 작성해야 해.

최대 공약수를 찾는 전통적인 방법 중 하나는 유클리드 호제법을 사용하는 것이야. 두 수 a와 b(a > b)의 최대 공약수는 a를 b로 나눈 나머지 r과 b의 최대 공약수와 같아. 즉, GCD(a, b) = GCD(b, r)이야. 이 과정을 r이 0이 될 때까지 반복하면, 그 때의 b가 최대 공약수가 돼.

```java
public class main
{
    public static void main(String[] args) {
        int a = 48; // 첫 번째 숫자
        int b = 18; // 두 번째 숫자
        
        // 최대 공약수와 최소 공배수 찾기 로직 구현
        int gcdValue = gcd(a, b);
        int lcmValue = lcm(a, b, gcdValue);
        
        // 결과 출력
        System.out.print("gcdValue: " + gcdValue + ", lcmValue: " + lcmValue);
    }
    
    // 최대 공약수를 찾는 메소드
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // 최소 공배수를 찾는 메소드
    public static int lcm(int a, int b, int gcdValue) {
        return (a * b) / gcdValue;
    }
}

```

gcd 메소드는 유클리드 호제법을 사용해 최대 공약수를 계산해.
lcm 메소드는 계산된 최대 공약수를 사용해 최소 공배수를 구해. 최소 공배수는 두 수의 곱을 최대 공약수로 나눈 값이야.
메인 메소드에서는 두 수에 대한 최대 공약수와 최소 공배수를 계산하고 결과를 출력해.
