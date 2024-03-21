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
카데인 알고리즘(Kadane's Algorithm): 이 알고리즘은 현재까지의 부분 최대합을 계속 추적하면서 배열을 한 번만 순회해 최대 부분 배열의 합을 찾는 방법이야.
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

```
순회 시작
초기 상태: maxEndingHere = 0, maxSoFar = -∞ (혹은 배열의 첫 번째 요소로 초기화할 수도 있음)
순회 과정
i=0 (요소: -2)
maxEndingHere = max(-2, 0 + (-2)) = -2
maxSoFar = max(-∞, -2) = -2
i=1 (요소: 1)
maxEndingHere = max(1, -2 + 1) = 1
maxSoFar = max(-2, 1) = 1
i=2 (요소: -3)
maxEndingHere = max(-3, 1 + (-3)) = -2
maxSoFar = max(1, -2) = 1
i=3 (요소: 4)
maxEndingHere = max(4, -2 + 4) = 4
maxSoFar = max(1, 4) = 4
i=4 (요소: -1)
maxEndingHere = max(-1, 4 + (-1)) = 3
maxSoFar = max(4, 3) = 4
i=5 (요소: 2)
maxEndingHere = max(2, 3 + 2) = 5
maxSoFar = max(4, 5) = 5
i=6 (요소: 1)
maxEndingHere = max(1, 5 + 1) = 6
maxSoFar = max(5, 6) = 6
i=7 (요소: -5)
maxEndingHere = max(-5, 6 + (-5)) = 1
maxSoFar = max(6, 1) = 6
i=8 (요소: 4)
maxEndingHere = max(4, 1 + 4) = 5
maxSoFar = max(6, 5) = 6
순회 완료
순회가 완료되었을 때, maxSoFar의 값이 6으로, 이는 주어진 배열의 연속된 부분 배열 중 최대 합을 나타내. 이 최대 합을 가진 연속된 부분 배열은 [4, -1, 2, 1]로, 합이 6이 되는 부분이야.
```
