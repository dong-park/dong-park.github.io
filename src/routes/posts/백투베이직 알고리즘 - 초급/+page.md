---
title: 백투베이직 알고리즘 - 초급
summary: 초심으로 돌아가겠습니다.
date: '2024-03-20'
tags: ['코딩테스트']
---


### 자바  코딩테스트에서 자주 쓰이는 함수

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

최대 공약수는 두 개 이상의 정수의 공통된 약수 중 가장 큰 값이야. 간단히 말해서, 두 수가 주어졌을 때, 이 두 수를 나눌 수 있는 가장 큰 수를 말해. 예를 들어, 48과 18의 공약수는 1, 2, 3, 6이 있는데, 이 중 가장 큰 수는 6이므로 48과 18의 최대 공약수는 6이 되겠지.

최소 공배수는 두 개 이상의 정수의 공통된 배수 중 가장 작은 값이야. 두 수의 공통된 배수는 두 수 모두를 나눌 수 있는 수 중에서 가장 작은 수를 말해. 예를 들어, 48과 18의 배수 중 공통된 배수는 144, 288, 432 등이 있는데, 이 중 가장 작은 수는 144이므로 48과 18의 최소 공배수는 144가 되겠지.

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

### 소수찾기

소수는 1과 자기 자신 외에는 어떤 수로도 나눌 수 없는 1보다 큰 자연수를 의미해. 예를 들어, 2, 3, 5, 7, 11, 13 등이 있지.

소수를 찾는 문제는 여러 방법이 있지만, 가장 대표적인 방법 중 하나는 에라토스테네스의 체 알고리즘을 사용하는 것이야. 이 알고리즘의 기본 아이디어는 다음과 같아:

#### 에라토스테네스의 체 알고리즘의 핵심 원리

모든 숫자는 소수이거나, 소수의 배수 중 하나야. 그러므로, 소수의 배수를 제거하면 남는 숫자는 모두 소수가 돼.
알고리즘의 핵심은 소수의 배수들을 순차적으로 제거해 나가는 것이야. 이 때, i의 제곱이 N보다 클 때까지만 반복하면 되는 이유는, i의 제곱 미만의 배수들은 이미 이전 소수들의 배수를 제거하는 과정에서 체크되었기 때문이야.

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int N = 30; // 찾고자 하는 범위의 상한
        
        // 에라토스테네스의 체 알고리즘을 사용하여 소수 찾기 로직 구현
        List<Integer> primeNumbers = findPrimes(N);
        System.out.println(primeNumbers.toString()); // 결과 출력
    }
    
    // 에라토스테네스의 체를 구현한 메소드
    public static List<Integer> findPrimes(int N) {
        boolean[] primeCheckes = new boolean[N+1];
        List<Integer> primes = new ArrayList<>();

        for (int i = 2; i <= N; i++) {
            primeCheckes[i] = true; // 2부터 N까지 true로 초기화
        }

        for (int i = 2; i * i <= N; i++) {
            if (primeCheckes[i]) {
                for (int j = i * i; j <= N; j += i) {
                    primeCheckes[j] = false; // i의 배수들을 false로 설정
                }
            }
        }

        for (int i = 2; i <= N; i++) {
            if (primeCheckes[i]) {
                primes.add(i); // 소수 목록에 추가
            }
        }

        return primes;
    }
}
```

### 피보나치 수열

피보나치 수열의 N번째 수를 찾는 프로그램을 작성해야 해. 피보나치 수열은 첫 번째 수와 두 번째 수가 1이고, 그 이후의 모든 수는 바로 앞 두 수의 합으로 이루어진 수열이야.

재귀 함수 사용: 간결하고 이해하기 쉽지만, 큰 N에 대해 성능 문제가 발생할 수 있어.
반복문 사용: 재귀보다 효율적이며, 큰 N에 대해서도 빠르게 결과를 얻을 수 있어.

#### 반복문을 이용한  피보나치 수열

이 코드는 N번째 피보나치 수를 찾기 위해 반복문을 사용한 방법이야. 피보나치 수열의 특성상, 각 숫자는 바로 앞의 두 숫자의 합이기 때문에, 두 변수를 사용하여 이전 두 숫자를 저장하고 갱신해 나가며 N번째 수를 찾아가는 방식이야.

```java
public class main  {
    public static void main(String[] args) {
        int N = 10; // 찾고자 하는 피보나치 수열의 위치
        
        // 피보나치 수열의 N번째 수를 찾는 로직 구현
        int result = fibonacci(N);
        
        // 결과 출력
        System.out.println("The " + N + "th Fibonacci number is: " + result);
    }
    
    // 피보나치 수열을 구하는 함수 (반복문 사용)
    public static int fibonacci(int N) {
        if(N <= 1){
            return N;
        }
        int a = 0;
        int b = 1;
        int next = 0;
        for(int i=2; i<=N; i++){
            next = a + b;
            a = b;
            b = next;
        }
        return b;
    }
}
```

```python
def fibonacci(n, memo={}):
    # 기본 조건
    if n in memo:
        return memo[n]
    elif n <= 2:
        return 1
        
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]

# 테스트 케이스
print(fibonacci(3))  # 예상 출력: 2
print(fibonacci(5))  # 예상 출력: 5
```

#### 행렬 거듭제곱을 이용한 피보나치 수열

행렬 거듭제곱을 빠르게 계산하는 알고리즘(예: 분할 정복을 이용한 거듭제곱)으로 N번째 피보나치 수를 더 빠르게 구할 수 있어. 이 방법의 시간 복잡도는 O(log N)으로, 매우 큰 N에 대해서도 효율적으로 계산할 수 있어.

```java
public class FibonacciMatrix {
    public static void main(String[] args) {
        int N = 10;
        int[][] result = fibonacci(N);
        System.out.println("The " + N + "th Fibonacci number is: " + result[0][1]);
    }

    // 피보나치 수를 계산하는 메서드
    public static int[][] fibonacci(int N) {
        int[][] base = {{1, 1}, {1, 0}};
        return matrixPower(base, N);
    }

    // 행렬 거듭제곱을 계산하는 메서드 (분할 정복 방법)
    public static int[][] matrixPower(int[][] base, int exponent) {
        if (exponent == 1) {
            return base;
        } else if (exponent % 2 == 0) {
            int[][] half = matrixPower(base, exponent / 2);
            return matrixMultiply(half, half);
        } else {
            int[][] half = matrixPower(base, (exponent - 1) / 2);
            return matrixMultiply(matrixMultiply(half, half), base);
        }
    }

    // 두 행렬을 곱하는 메서드
    public static int[][] matrixMultiply(int[][] a, int[][] b) {
        int[][] result = new int[2][2];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }
}

```

#### 메모이제이션 방법을 이용한 피보나치 수열

```java
public class main {
    private static int[] memo;

    public static void main(String[] args) {
        System.out.println(doit(2));
        System.out.println(doit(5));
    }

    public static int doit(int n){
        memo = new int[n+1];

        for(int i = 0; i <= n; i++) {
            memo[i] = -1;
        }

        return fib(n);
    }
    
    public static int fib(int n) {
        if(memo[n] != -1){
            return memo[n];
        }

        if(n <= 1) {
            return n;
        }

        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
    }

    
}
```

메모이제이션 방법으로 계산하는 자바 코드야. doit 메소드에서 피보나치 수를 계산하기 전에 메모이제이션을 위한 배열 memo를 초기화하고, fib 메소드를 통해 실제 계산을 진행해. 이렇게 하면, 피보나치 수를 효율적으로 계산할 수 있어.

### 이진 검색 구현하기

정렬된 배열과 타겟 숫자가 주어졌을 때, 이진 검색을 사용하여 타겟 숫자의 인덱스를 찾아라. 만약 타겟 숫자가 배열 내에 없다면 -1을 반환해라.

*문제 해결 방법*

1. 배열의 가장 낮은 인덱스를 low, 가장 높은 인덱스를 high로 설정한다.
2. 배열의 중간 지점을 mid로 정하고, mid 인덱스의 요소가 타겟 숫자인지 확인한다.
3. 만약 mid 인덱스의 요소가 타겟 숫자보다 크다면, 타겟 숫자는 mid의 왼쪽에 있으므로 high를 mid - 1로 조정한다.
4. 만약 mid 인덱스의 요소가 타겟 숫자보다 작다면, 타겟 숫자는 mid의 오른쪽에 있으므로 low를 mid + 1로 조정한다.
5. low가 high보다 커지면, 타겟 숫자가 배열 내에 없는 것으로 간주하고 -1을 반환한다.
6. 위 과정을 반복하면서 타겟 숫자의 인덱스를 찾는다.

```java
public class main {
    public static void main(String[] args) {
        int[] nums = {-1, 0, 3, 5, 9, 12}; // 정렬된 배열
        int target = 9; // 찾고자 하는 타겟 숫자
        
        int result = binarySearch(nums, target);
        System.out.println("Index of target (" + target + "): " + result);
    }

    public static int binarySearch(int[] nums, int target) {
        int low = 0, high = nums.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}
```

변형 숫자의 제곱근 찾기

```java
public class main {
    public static void main(String[] args) {
        int x1 = 4;
        int x2 = 8;
        
        Solution solution = new Solution();
        
        System.out.println(x1 + "'s square root: " + solution.mySqrt(x1));
        System.out.println(x2 + "'s square root: " + solution.mySqrt(x2));
    }
    
    static class Solution {
        public int mySqrt(int x) {
            long start = 0, end = x;
            while (start <= end) {
                long mid = start + (end - start) / 2;
                long sqrt = mid * mid;
                if(sqrt == x){
                    return (int) mid;
                } else if(sqrt < x){
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            return (int)end;
        }
    }
}
```

### 두 수의 합 찾기

정수 배열 nums와 타겟 숫자 target이 주어질 때, nums 배열 내 두 숫자의 합이 target이 되게 하는 두 숫자의 인덱스를 배열로 반환해야 해. 각 입력에 정확히 하나의 솔루션이 있다고 가정하며, 같은 요소를 두 번 사용할 수 없어.

*문제 해결 방법*

1. 배열을 순회하면서 각 요소를 검사해.
2. 현재 요소와 타겟 숫자 사이의 차이를 계산하고, 이 차이가 해시 테이블 내에 이미 존재하는지 확인해.
3. 만약 차이가 해시 테이블 내에 존재한다면, 현재 요소의 인덱스와 차이가 존재하는 요소의 인덱스를 배열로 반환해.
4. 그렇지 않다면, 현재 요소와 해당 인덱스를 해시 테이블에 저장해.

```java
import java.util.HashMap;
import java.util.Map;

public class main {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        
        int[] result = twoSum(nums, target);
        System.out.println("Indices of the two numbers are: [" + result[0] + ", " + result[1] + "]");
    }

    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for(int i=0; i < nums.length; i++){
            int complement = target - nums[i];
            if(numMap.containsKey(complement)) {
                return new int[] {numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }

        throw new IllegalArgumentException("error");
    }
}
```

### 회문 판별하기

주어진 문자열이 회문인지 아닌지를 판별하는 함수를 작성해야 해. 여기서 고려해야 할 것은, 대소문자를 구분하지 않고, 영문자와 숫자만을 대상으로 판별한다는 점이야.

*문제 해결 방법*

1. 문자열을 전처리하여 영문자와 숫자만 남기고, 모두 소문자로 변환한다.
2. 전처리된 문자열의 앞뒤를 차례대로 비교해 나가면서 회문인지 확인한다.
3. 전체 문자열을 반으로 나누어 비교하면 충분하다. 문자열의 길이가 홀수라면 중앙 문자는 비교에서 제외한다.

```java
public class Main {
    public static void main(String[] args) {
        String s = "A man, a plan, a canal: Panama";
        boolean isPalindrome = isPalindrome(s);
        System.out.println("Is palindrome: " + isPalindrome);
    }

    public static boolean isPalindrome(String s) {
        String filteredString = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        for(int i = 0; i < filteredString.length() / 2; i++){
            if(filteredString.charAt(i) != filteredString.charAt(filteredString.length() - 1 - i)){            
                return false;
            }
        }
        
        return true; // 회문임
    }
}
```

### 연속된 부분 배열의 최대 합 찾기

정수로 이루어진 배열이 주어졌을 때, 그 배열의 연속된 부분 배열(subarray) 중에서 합이 최대가 되는 부분 배열의 합을 찾아라.

*문제 해결 방법*

*카데인 알고리즘(Kadane's Algorithm)* 사용해  이것은 현재까지의 부분 최대합을 계속 추적하면서 배열을 한 번만 순회해 최대 부분 배열의 합을 찾는 방법이야.
각 단계에서, 현재 요소를 포함한 부분 배열의 최대 합을 계산하고, 이 값이 최대 합보다 큰지 비교해. 최대 합을 갱신해 가면서 배열의 끝에 도달할 때까지 이 과정을 반복해.

```java
public class MaxSubarraySum {
    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int maxSum = maxSubArray(nums);
        System.out.println("Maximum subarray sum is: " + maxSum);
    }

    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0], maxEndingHere = nums[0];
        for (int i = 1; i < nums.length; i++) {
            // 현재 요소를 포함시킨 부분 배열의 최대 합 계산
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            // 최대 부분 배열 합 갱신
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }
}
```

#### 카데인 알고리즘의 기본 원리

카데인 알고리즘은 두 개의 변수를 사용해 배열을 한 번만 순회하면서 문제를 해결해:

maxEndingHere: 배열의 각 위치에서 끝나는 최대 부분 배열의 합. 이 값은 현재까지의 최대 부분 배열의 합을 나타내며, 현재 요소를 포함하여 계산되어야 해. 만약 maxEndingHere가 음수가 되면, 새로운 부분 배열의 시작점을 고려할 수 있어. 즉, maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])를 통해 계산돼.
maxSoFar: 지금까지 찾은 최대 부분 배열의 합. 이 값은 maxEndingHere의 값이 갱신될 때마다 최대값을 비교하여 업데이트될 수 있어. 즉, maxSoFar = Math.max(maxSoFar, maxEndingHere)로 계산돼.

#### 알고리즘의 작동 방식

배열의 첫 번째 요소를 maxEndingHere와 maxSoFar의 초기값으로 설정해.
배열의 두 번째 요소부터 시작해 각 요소에 대해 다음을 수행해:
현재 요소를 포함시킨 최대 부분 배열의 합(maxEndingHere)을 계산해. 여기서 현재 요소 자체와 현재 요소를 포함한 이전의 부분 배열의 합 중 더 큰 값을 선택해.
maxSoFar를 maxEndingHere와 비교하여 필요한 경우 갱신해.
모든 요소를 검사한 후 maxSoFar가 전체 배열의 최대 부분 배열의 합이 돼.

#### 순회 방식

```md
초기 상태: maxEndingHere = 0, maxSoFar = -∞ (혹은 배열의 첫 번째 요소로 초기화할 수도 있음)

순회 과정
i=0 (요소: -2), maxEndingHere = max(-2, 0 + (-2)) = -2, maxSoFar = max(-∞, -2) = -2
i=1 (요소: 1), maxEndingHere = max(1, -2 + 1) = 1, maxSoFar = max(-2, 1) = 1
i=2 (요소: -3), maxEndingHere = max(-3, 1 + (-3)) = -2, maxSoFar = max(1, -2) = 1
i=3 (요소: 4), maxEndingHere = max(4, -2 + 4) = 4, maxSoFar = max(1, 4) = 4
i=4 (요소: -1), maxEndingHere = max(-1, 4 + (-1)) = 3, maxSoFar = max(4, 3) = 4
i=5 (요소: 2), maxEndingHere = max(2, 3 + 2) = 5, maxSoFar = max(4, 5) = 5
i=6 (요소: 1), maxEndingHere = max(1, 5 + 1) = 6, maxSoFar = max(5, 6) = 6
i=7 (요소: -5), maxEndingHere = max(-5, 6 + (-5)) = 1, maxSoFar = max(6, 1) = 6
i=8 (요소: 4), maxEndingHere = max(4, 1 + 4) = 5, maxSoFar = max(6, 5) = 6

순회 완료
순회가 완료되었을 때, maxSoFar의 값이 6으로, 이는 주어진 배열의 연속된 부분 배열 중 최대 합을 나타내. 이 최대 합을 가진 연속된 부분 배열은 [4, -1, 2, 1]로, 합이 6이 되는 부분이야.
```

#### 기출변형

**"최대 수익 구하기"**에 관한 문제입니다. 주식의 일일 가격이 주어졌을 때, 한 번의 거래로 얻을 수 있는 최대 수익을 계산해야 합니다. 여기서 한 번의 거래는 주식을 한 번 사고 팔아 수익을 얻는 것을 의미합니다.

주어진 배열 prices는 여러 날에 걸친 주식의 가격을 나타냅니다. prices[i]는 주식이 i번째 날에 가지는 가격입니다. 단 한 번의 거래로 얻을 수 있는 최대 수익을 반환하세요. 만약 어떤 거래로도 수익을 얻을 수 없다면 0을 반환하세요.

```java
public class main {
    public static void main(String[] args) {
        int[] prices1 = {7, 1, 5, 3, 6, 4};
        int[] prices2 = {7, 6, 4, 3, 1};
        
        Solution solution = new Solution();
        
        System.out.println("Maximum profit for prices1: " + solution.maxProfit(prices1));
        System.out.println("Maximum profit for prices2: " + solution.maxProfit(prices2));
    }
    
    static class Solution {
        public int maxProfit(int[] prices) {
            int minPrice = Integer.MAX_VALUE, maxProfit = 0;

            for (int i=0; i < prices.length; i++){            
                minPrice = Math.min(prices[i], minPrice);
                int profit = prices[i] - minPrice;
                maxProfit = Math.max(maxProfit, profit);
            }

            return maxProfit;
        }
    }
}
```

### 회전된 정렬된 배열에서 최소값 찾기

정렬된 배열이 있고, 이 배열이 미리 알려지지 않은 특정 피벗을 기준으로 회전되었다고 가정해. 예를 들어, 배열 [0,1,2,4,5,6,7]이 있을 때, 이 배열을 3번째 인덱스에서 회전시키면 [4,5,6,7,0,1,2]가 돼. 이런 회전된 배열에서 최소값을 찾는 함수를 작성해야 해.

회전된 정렬된 배열에서는 배열의 일부가 여전히 정렬되어 있음을 이용할 수 있어. 이진 검색과 유사한 방식으로 문제를 접근하지만, 중간점(middle)을 기준으로 어느 쪽이 정렬된 상태인지 판별하고, 최소값이 포함될 가능성이 있는 쪽을 선택하여 검색 범위를 좁혀 나가야 해.
시작점(start)과 종료점(end) 사이에서 중간점(middle)을 찾고, 중간점이 시작점보다 큰지, 또는 종료점보다 작은지를 검사하여 검색 범위를 좁혀 나가면서 최소값을 찾아야 해.

```java
public class FindMinimumInRotatedSortedArray {
    public static void main(String[] args) {
        int[] nums = {5,6,7,0,1,2,3};
        int min = findMin(nums);
        System.out.println("The minimum element is " + min);
    }

    public static int findMin(int[] nums) {
        int start = 0, end = nums.length - 1;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] > nums[end]) {
                // 최소값은 mid보다 오른쪽에 있음
                start = mid + 1;
            } else {
                // 최소값은 mid 이하에 있음
                end = mid;
            }
        }
        return nums[start]; // 또는 nums[end]; 둘 다 같은 위치를 가리킴
    }
}
```

### 정수를 로마 숫자로 변환하기

로마 숫자는 일곱 개의 다른 기호로 나타납니다: I, V, X, L, C, D와 M입니다.

기호 값
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
예를 들어, 로마 숫자 2는 II로 쓰이며, 단순히 두 개의 1을 나란히 쓴 것과 같습니다. 12는 XII로 쓰이며, 이는 X + II입니다. 27은 XXVII, 즉 XX + V + II입니다.

로마 숫자는 보통 왼쪽에서 오른쪽으로 큰 숫자에서 작은 숫자 순으로 쓰입니다. 하지만 네 가지 특별한 경우에는 작은 숫자가 큰 숫자의 왼쪽에 옵니다.

IV (4)
IX (9)
XL (40)
XC (90)
CD (400)
CM (900)
주어진 정수를 로마 숫자로 변환하는 프로그램을 작성하세요.

이 문제를 해결하기 위해, 가장 큰 값부터 시작하여 주어진 숫자를 줄여나갈 수 있는 로마 숫자의 값을 찾아 문자열에 추가하는 방식으로 접근할 수 있습니다. 각 단계에서 사용할 수 있는 가장 큰 값을 찾아 그 값을 주어진 숫자에서 빼고, 해당 로마 숫자를 결과 문자열에 추가합니다. 이 과정을 주어진 숫자가 0이 될 때까지 반복합니다.

```java
static class Solution {
    public String intToRoman(int num) {
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        
        StringBuilder roman = new StringBuilder();
        
        for (int i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                num -= values[i];
                roman.append(symbols[i]);
            }
        }
        
        return roman.toString();
    }
}
```

### 유효한 괄호 검사

주어진 문자열 s가 유효한 괄호로만 구성되어 있는지 확인하세요. 유효한 괄호 문자열이란 다음과 같은 조건을 만족하는 문자열입니다:

열린 괄호는 반드시 같은 타입의 괄호로만 닫혀야 합니다.
열린 괄호는 올바른 순서로 닫혀야 합니다.

```java
static class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '[') stack.push(']');
            else if (c == '{') stack.push('}');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}
```

### 슬라이딩 윈도우(Sliding Window) 알고리즘

슬라이딩 윈도우 알고리즘은 배열이나 리스트의 일정 범위의 요소들을 연속적으로 살펴보면서 문제를 해결하는 기법입니다. "윈도우"는 배열의 연속적인 부분을 의미하며, 이 윈도우를 배열 전체를 훑을 때까지 한 칸씩 "슬라이드"시키면서 각 위치에서의 문제(예: 최대합, 최소값, 특정 조건 만족 여부 등)를 해결합니다.

슬라이딩 윈도우의 주요 특징:
고정된 크기의 윈도우: 윈도우의 크기가 고정되어 있고, 이 윈도우를 배열의 시작부터 끝까지 이동시키면서 각 위치에서 문제를 해결합니다.
가변 크기의 윈도우: 윈도우의 크기가 고정되어 있지 않고, 문제의 조건을 만족시키기 위해 윈도우의 시작점과 끝점을 동적으로 조정합니다.

슬라이딩 윈도우 사용 예시:
최대 합 구하기: 주어진 배열에서 크기가 k인 연속된 부분 배열의 최대 합을 찾습니다.
최소 길이 부분 배열 찾기: 주어진 배열에서 합이 특정 값 s 이상이 되는 가장 짧은 연속된 부분 배열을 찾습니다.
문자열에서 모든 문자 포함하는 최소 윈도우 찾기: 문자열 S에서 문자열 T의 모든 문자를 포함하는 최소 크기의 부분 문자열을 찾습니다.

슬라이딩 윈도우 알고리즘의 장점:
효율성: 특정 조건을 만족하는 최적의 해를 찾기 위해 배열이나 문자열을 한 번만 순회하므로, 일반적으로 시간 복잡도가 낮습니다.
직관적: 윈도우를 슬라이딩하면서 문제를 해결하는 과정이 직관적이고 이해하기 쉽습니다.
구현 방법:
시작점과 끝점 초기화: 윈도우의 시작점과 끝점을 배열의 시작 부분에 초기화합니다.
윈도우의 끝점 이동: 조건을 만족할 때까지 윈도우의 끝점을 이동시킵니다.
윈도우의 시작점 이동: 조건을 만족하는 상태에서 더 최적의 해를 찾기 위해 윈도우의 시작점을 이동시킵니다.
최적의 해 갱신: 윈도우를 이동시키면서 문제의 조건에 따라 최적의 해를 갱신합니다.

#### 부분 문자열이 포함된 최소 윈도우 찾기

이 문제에서는 문자열 S와 T가 주어졌을 때, S에서 T의 모든 문자를 포함하는 최소 크기의 부분 문자열을 찾아야 합니다. 만약 S 내에 T의 모든 문자를 포함하는 부분 문자열이 여러 개 있다면, 그 중 가장 짧은 부분 문자열을 반환합니다. 만약 그러한 부분 문자열이 없다면, 빈 문자열을 반환합니다.

예시:

입력: S = "ADOBECODEBANC", T = "ABC"

출력: "BANC"

입력: S = "a", T = "a"

출력: "a"

입력: S = "a", T = "aa"

출력: ""

```java
public class main {
    public static void main(String[] args) {
        String S1 = "ADOBECODEBANC";
        String T1 = "ABC";
        
        String S2 = "a";
        String T2 = "a";

        String S3 = "a";
        String T3 = "aa";

        Solution solution = new Solution();

        System.out.println("Minimum window substring for S1: " + solution.minWindow(S1, T1));
        System.out.println("Minimum window substring for S2: " + solution.minWindow(S2, T2));
        System.out.println("Minimum window substring for S3: " + solution.minWindow(S3, T3));
    }
    
    static class Solution {
        public String minWindow(String s, String t) {
            // 답란
        }
    }
}

```

```java
import java.util.List;
import java.util.ArrayList;

public class main {
    public static void main(String[] args) {
        int[] candidates1 = {2,3,6,7};
        int target1 = 7;
        
        int[] candidates2 = {2,3,5};
        int target2 = 8;

        Solution solution = new Solution();

        System.out.println("Combinations for target1: " + solution.combinationSum(candidates1, target1));
        System.out.println("Combinations for target2: " + solution.combinationSum(candidates2, target2));
    }
    
    static class Solution {
        // 결과를 저장할 리스트와 현재 조합을 추적할 임시 리스트를 사용합니다.
        // candidates 배열을 순회하면서, 현재 숫자를 선택하거나 선택하지 않는 모든 경우를 탐색합니다.
        // 재귀 호출을 사용해, 선택한 숫자를 임시 리스트에 추가하고 target에서 빼면서 목표값에 도달했는지 확인합니다.
        // 목표값에 도달하면 현재 조합을 결과 리스트에 추가합니다. target을 초과하면 현재 경로를 더 이상 탐색하지 않습니다.
        // 각 단계에서 선택을 되돌리고(Backtrack), 다음 숫자로 넘어갑니다.
        private int[] candidates;
        private int target;
        private List<List<Integer>> results;

        public List<List<Integer>> combinationSum(int[] candidates, int target) {
            this.candidates = candidates;
            this.target = target;
            this.results = new ArrayList<>();
            backtrack(0, new ArrayList<>(), 0);
            return results;
        }

        private void backtrack(int start, List<Integer> currentCombination, int currentSum) {
            if(currentSum > target) {
                return;
            }
            
            if(currentSum == target) {
                results.add(new ArrayList<>(currentCombination));
                return;
            }

            for (int i = start; i < candidates.length; i++) {
                currentCombination.add(candidates[i]);
                backtrack(i, currentCombination, currentSum + candidates[i]);
                currentCombination.remove(currentCombination.size() -1);
            }
        }
    }
}
```

### 단어뒤집기2

```java
import java.util.List;
import java.util.ArrayList;
import java.lang.StringBuilder;

public class main {
    public static void main(String[] args) {
        String s1 = "Let's take LeetCode contest";
        String s2 = "God Ding";

        Solution solution = new Solution();

        System.out.println("Reversed words in s1: " + solution.reverseWords(s1));
        System.out.println("Reversed words in s2: " + solution.reverseWords(s2));
    }
    
    static class Solution {
        public String reverseWords(String target) {
            List<String> reverseWords = new ArrayList<>();
            
            for(String word : target.split(" ")) {
                reverseWords.add(new StringBuilder(word).reverse().toString());           
            }
            
            return String.join(" ", reverseWords);
        }
    }
}
```

### 그리디 알고리즘

```java
public class main {
    public static void main(String[] args) {
        // 예시 입력
        int[] coins = {1, 5, 10, 50, 100}; // 사용할 수 있는 동전의 종류
        int amount = 137; // 고객에게 줘야 하는 거스름돈의 총액

        // 거스름돈에 필요한 최소 동전 개수를 구하는 메소드 호출
        int result = minCoins(coins, amount);
        System.out.println(result); // 결과 출력
    }
    
    // 거스름돈에 필요한 최소 동전 개수를 구하는 메소드
    public static int minCoins(int[] coins, int amount) {
        int count = 0; // 필요한 최소 동전 개수를 저장할 변수
        
        // TODO: 거스름돈을 구하는 로직을 구현
        for(int i=coins.length-1; i >= 0; i--){
            while(amount > coins[i]){
                amount -= coins[i];
                count++;
            }
        }
        
        return count; // 계산된 최소 동전 개수를 반환
    }
}
```

### 연속되는 숫자 합 찾기

주어진 문자열 s 내에서 연속된 숫자를 포함하는 모든 부분 문자열을 찾아, 그 숫자들의 합을 구해라. 예를 들어, "abc1234xyz"라는 문자열이 주어지면, "1", "2", "3", "4", "12", "23", "34", "123", "234", "1234"와 같은 모든 숫자의 부분 문자열의 합을 구해야 해.

예시
입력: s = "abc1234xyz"
출력: 1670
설명: 위에서 설명한 대로, 연속된 숫자의 부분 문자열을 모두 찾아 그 합을 구하면 1670이 됨.
입력: s = "abcd"
출력: 0
설명: 숫자를 포함하지 않으므로 합은 0이 됨.

이 문제를 해결하기 위한 접근 방법으로는 다음과 같은 단계를 고려할 수 있어:

숫자 구분: 문자열을 순회하면서 숫자가 시작되는 지점과 끝나는 지점을 찾아내야 해.
부분 문자열 처리: 각 숫자 구간에 대해, 가능한 모든 부분 문자열을 생성하고, 그것을 숫자로 변환해야 해.
합 계산: 변환된 숫자들의 합을 계산해야 해.
숫자의 연속된 부분 문자열을 찾고 그 합을 구하는 과정에 있어서 문자열 처리 기술과 반복문, 그리고 조건문을 적절히 활용해야 해. 또한, 각 숫자 부분 문자열에 대한 모든 가능한 조합을 고려하여 그 합을 계산하는 방식을 구현해야 한다는 점을 기억해야 해.

```java
import java.util.List;
import java.util.ArrayList;

public class main {
    public static void main(String[] args) {
        String s = "abc1234xyz123";
        System.out.println(sumOfSubstrings(s));
    }
    
    public static long sumOfSubstrings(String s) {
        long totalSum = 0;
        List<String> nums = new ArrayList<>();
        String arrayString = "";

        for(int i=0; i<s.length(); i++){
            char c = s.charAt(i);
            
            if(Character.isDigit(c)){
                arrayString += c;
            }

            if(arrayString.length() > 0 && (!Character.isDigit(c) || i == s.length() - 1)) {
                nums.add(arrayString);
                arrayString = "";
            }
        }

        for(String num : nums){
            totalSum += checkNums(num);
        }

        return totalSum;
    }

    public static long checkNums(String num) {
        long sum = 0;
        for(int i=0; i<num.length(); i++){
            for(int j=i; j<num.length(); j++){
                sum += Long.parseLong(num.substring(i, j+1));
            }
        }
        return sum;
    }
}
```

### 문자 합치기

알파벳으로만 이루어진 문자열이 주어질 때, 같은 문자가 연속으로 반복되는 부분을 문자 그리고 그 반복된 횟수로 표현하여 압축하는 프로그램을 작성해야 해. 예를 들어, "aaabbcccc"라는 문자열이 있다면 "a3b2c4"로 압축되어야 해. 단, 문자가 한 번만 나타나는 경우는 숫자를 붙이지 않고 그대로 표현해야 해. 예를 들어, "abcd"는 "abcd"로 그대로 표현되어야 하며, "aabbcc"는 "a2b2c2"로 압축되어야 해.

문자열을 순회하면서 현재 문자와 이전 문자가 같은지를 확인해야 해. 같다면 카운트를 증가시키고, 다르다면 이전 문자와 그 카운트를 결과 문자열에 추가해. 이 과정을 문자열의 끝까지 반복한 후, 마지막으로 카운트된 문자를 결과 문자열에 추가해야 해.

```java
public class main {
    public static void main(String[] args) {
        // 예시 입력값
        String[] inputs = {"aaabbcccc", "abcd", "aabbcc", "aabcccccaaa"};
        for (String input : inputs) {
            // compressString 함수를 호출하여 결과를 출력
            System.out.println(input + " -> " + compressString(input));
        }
        
    }
    
    public static String compressString(String s) {
        StringBuilder result = new StringBuilder();
        
        int count = 1;
        char save = s.charAt(0);
        result.append(save);

        for(int i=1; i<s.length(); i++){
            char c = s.charAt(i);
            
            if(save == c){
                count++;
            } else {
                if(count>1) {
                    result.append(count);
                }
                save = s.charAt(i);
                result.append(save);
                count = 1;
            } 
        }

        if(count > 1){
            result.append(count);
        }
        
        return result.toString();
    }
}
```

### 버블소트

버블 정렬(Bubble Sort)은 가장 간단하고 기초적인 정렬 알고리즘 중 하나로, 인접한 두 요소를 비교해서 잘못된 순서(예: 오름차순 정렬에서 큰 수가 앞에 오는 경우)가 있을 때 위치를 바꾸는 방식으로 작동해. 이 과정을 배열의 모든 요소가 올바른 순서로 정렬될 때까지 반복하며, 이름은 이 과정 중에 큰 값들이 배열의 끝으로 '떠오른다(bubble up)'는 데서 유래했어.

버블 정렬의 핵심은 두 가지 단계로 요약할 수 있어
비교 단계: 배열을 처음부터 끝까지 순회하면서, 각각의 인접한 요소 쌍을 비교한다.
교환 단계: 비교하는 두 요소가 잘못된 순서로 있으면, 이들의 위치를 서로 바꾼다.

이 알고리즘의 시간 복잡도는 평균과 최악의 경우 모두 n의 제곱으로 n은 배열의 길이를 나타낸다. 배열이 이미 정렬되어 있거나 거의 정렬된 상태인 경우에는 상대적으로 빠르게 작동할 수 있지만, 대체로 크기가 큰 데이터셋에는 비효율적이야. 그럼에도 불구하고, 이해하기 쉽고 구현하기 간단해서 알고리즘 학습의 첫 단계로 자주 소개되곤 해.

```Python
def bubble_sort(nums):
    # 여기에 코드를 작성하세요.
    for i in range(len(nums)-1, 0, -1):
        for j in range(i):
            if(nums[i] < nums[j]): nums[j], nums[j+1] = nums[j+1], nums[j]
            
    return nums
            
# 테스트 케이스
print(bubble_sort([5, 3, 8, 4, 2]))  # 예상 출력: [2, 3, 4, 5, 8]
print(bubble_sort([20, -5, 3, 2]))  # 예상 출력: [-5, 2, 3, 20]
```

### 선택정렬

선택 정렬도 기본적인 정렬 알고리즘 중 하나로, 각 단계에서 정렬되지 않은 부분에서 최소값(또는 최대값)을 찾아 선택한 뒤, 그 값을 정렬된 부분의 다음 위치로 이동시키는 방식으로 동작해. 선택 정렬은 구현이 간단하며, 안정 정렬이 아니라는 특징을 가지고 있어.

선택 정렬 알고리즘 구현 방법
배열 전체를 순회하며, 각 단계에서 현재 위치를 기준으로 가장 작은 요소를 찾아.
가장 작은 요소를 현재 위치의 요소와 교환해.
모든 요소가 올바르게 정렬될 때까지 이 과정을 반복해.

```python
def selection_sort(nums):
    for i in range(0, len(nums)):
        for j in range(i, len(nums)):
            if(nums[i] > nums[j]):
                nums[i], nums[j] = nums[j], nums[i]
                
    return nums

# 테스트 케이스
print(selection_sort([29, 10, 14, 37, 13]))  # 예상 출력: [10, 13, 14, 29, 37]
print(selection_sort([5, 3, 8, 4, 2]))  # 예상 출력: [2, 3, 4, 5, 8]
```

### 삽입정렬

삽입 정렬도 기본적인 정렬 방법 중 하나로, 각 반복에서 요소를 적절한 위치에 '삽입'하여 전체 배열을 정렬하는 방식이야. 이 알고리즘은 작은 데이터 세트에 효율적이며, 특히 거의 정렬된 배열에 대해서는 매우 빠르게 동작해.

배열의 모든 요소를 차례대로 순회한다.
각 요소를, 이미 정렬된 배열 부분(요소의 왼쪽 부분)의 적절한 위치에 삽입한다.
필요하면, 삽입될 위치를 찾기 위해 정렬된 부분의 요소들을 오른쪽으로 이동시킨다.

```python
def insertion_sort(nums):
    # 여기에 코드를 작성하세요.
    for i in range(1, len(nums)):
        key = int(nums[i])
        j = i - 1
        # 현재 요소(key)보다 큰 요소들을 한 칸씩 오른쪽으로 이동
        while j >= 0 and key < nums[j]:
            nums[j + 1] = nums[j]
            j -= 1
        # 현재 요소를 적절한 위치에 삽입
        nums[j + 1] = key
        
        
                
    return nums

# 테스트 케이스
print(insertion_sort([8, 5, 6, 2, 4]))  # 예상 출력: [2, 4, 5, 6, 8]
print(insertion_sort([1, 3, 7, 9, 2]))  # 예상 출력: [1, 2, 3, 7, 9]
```

### 하노이의 탑

하노이의 탑 문제는 세 개의 기둥과 이 기둥 중 하나에 작은 것부터 큰 순서로 쌓인 n개의 원판으로 구성되어 있어. 문제의 목표는 첫 번째 기둥에서 세 번째 기둥으로 모든 원판을 옮기는 것인데, 다음의 규칙을 따라야 해:

한 번에 하나의 원판만 이동할 수 있어.
원판은 세 개의 기둥 중 하나의 맨 위에서만 추가하거나 제거할 수 있어.
큰 원판이 작은 원판 위에 있어서는 안 돼.

```python
def tower_of_hanoi(n):
    # n개의 원판을 옮기기 위한 최소 이동 횟수 반환
    if n == 1:
        return 1
    else:
        # 단계 1과 3에서 n-1개의 원판을 이동시키는 횟수 (각각 2^(n-1) - 1회)와
        # 단계 2에서 가장 큰 원판을 이동시키는 1회를 더한 값
        return 2 * tower_of_hanoi(n-1) + 1

# 테스트 케이스
print(tower_of_hanoi(6 ))  # 예상 출력: 3
```

### 이진 검색 트리(Binary Search Tree, BST)

각 노드의 왼쪽 서브 트리에는 해당 노드보다 작은 값들만 존재해야 하며,
각 노드의 오른쪽 서브 트리에는 해당 노드보다 큰 값들만 존재해야 해.
왼쪽과 오른쪽 서브 트리도 이진 검색 트리여야 해.

주어진 값 val을 가진 노드를 찾으면 그 노드를 반환하고, 그런 노드가 없으면 None을 반환해야 해.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def searchBST(root, val):
    if(root.val == val):
        return root
    elif (root.val > val):
        return searchBST(root.left, val)
    elif (root.val < val):
        return searchBST(root.right, val)
    else:
        return None

# 테스트 케이스
root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(6, TreeNode(5), TreeNode(7)))
val = 5
print(searchBST(root, val).val)  # 예상 출력: 노드 5
```

### 계단 오르기 동적 계획법

동적 계획법(Dynamic Programming, DP)을 사용하여 효율적으로 해결할 수 있어. 이 문제의 핵심은 각 계단에 도달하는 방법의 수를 작은 문제부터 시작해 점차적으로 구해나가는 것이야. 각 단계에서, n번째 계단에 도달하는 방법의 수는 n-1번째 계단에 도달하는 방법의 수와 n-2번째 계단에 도달하는 방법의 수의 합과 같아.

```python
def climbStairs(n):
    if n <= 1:
        return 1
        
    first = 1
    second = 2
    
    for i in range(3, n + 1):
        third = first + second
        first, second = second, third
    
    return second

# 테스트 케이스
print(climbStairs(2))  # 예상 출력: 2
print(climbStairs(3))  # 예상 출력: 3
```

### 백트래킹 문자조합

주어진 숫자 배열 candidates와 타겟 숫자 target이 있을 때, candidates 내의 숫자를 중복 선택하여 target을 만들 수 있는 모든 조합을 찾아야 합니다. 같은 숫자를 무한히 반복해서 사용할 수 있으며, 조합의 순서가 다르면 다른 조합으로 간주합니다.

 "조합의 합(Combination Sum)" 문제를 살펴보겠습니다. 이 문제는 주어진 숫자 배열과 타겟 숫자가 있을 때, 배열 내의 숫자를 중복 사용하여 타겟 숫자를 만들 수 있는 모든 조합을 찾는 것입니다. 이 문제는 백트래킹(Backtracking) 알고리즘을 이해하고 적용하는 데 도움이 됩니다.

 기본 아이디어
초기화: 결과를 저장할 리스트 result와 현재 조합을 저장할 리스트 combination을 준비합니다.
DFS(깊이 우선 탐색) 함수 정의: dfs라는 이름의 재귀 함수를 정의합니다. 이 함수는 현재 인덱스(index)와 현재 조합의 합(current_sum)을 인자로 받습니다.
만약 current_sum이 target과 같다면, 현재 조합을 result에 추가합니다.
만약 current_sum이 target을 초과한다면, 더 이상 탐색하지 않고 반환합니다.
DFS 실행: candidates 배열의 각 숫자에 대해 DFS를 실행하여, 모든 가능한 조합을 탐색합니다. 각 단계에서는 현재 숫자를 선택하거나 선택하지 않는 두 가지 경우를 고려합니다.
결과 반환: 모든 탐색이 끝나면, result에 저장된 조합들을 반환합니다.

```python
def combinationSum(candidates, target):
    result = []
    
    def dfs(index, target, ans=[]):
        if sum(ans) == target:
            result.append(ans.copy())  # ans의 복사본을 추가
            return
        if sum(ans) > target:
            return
        for i in range(index, len(candidates)):
            # ans + [candidates[i]]로 새로운 조합을 생성하여 전달
            dfs(i, target, ans + [candidates[i]])
    
    dfs(0, target)
    return result
```

### 주어진 문자열로 회문순열을 만들수 있는지 판단

문자열이 주어졌을 때, 이 문자열의 순열 중 하나가 회문이 될 수 있는지를 판별하세요. 회문을 만들기 위해서는 문자열 내의 모든 문자를 사용할 필요는 없으며, 대소문자 구분이 없고, 공백은 무시합니다.

```python
def canPermutePalindrome(s):
    s = s.lower()
    s = s.replace(" ", "")
    count_map = {}
    for i in range(len(s)):
        key = s[i]
        count_map[key] = count_map.get(key, 0) + 1 
    
    odd_count = 0
    for val in count_map.values():
        if val%2 != 0:
            odd_count += 1
    
    return (odd_count <= 1)
        

# 테스트 케이스
print(canPermutePalindrome("Tact Coa"))  # 예상 출력: True
print(canPermutePalindrome("hello"))    # 예상 출력: False
```

문자열을 소문자로 변환하고 공백을 제거하여, 대소문자 구분 없이 공백 무시하며 처리합니다.
count_map을 사용하여 각 문자의 등장 횟수를 세어 저장합니다.
odd_count를 세어 홀수 번 등장하는 문자의 수를 계산하고, 이 값이 1 이하인 경우에만 회문 순열을 만들 수 있다고 판단합니다.
이 로직에 따라, "Tact Coa"는 "taco cat"과 같이 순열 중 하나가 회문이 될 수 있으므로 True를 반환하며, "hello"는 어떤 순열도 회문이 될 수 없으므로 False를 반환합니다.

###
