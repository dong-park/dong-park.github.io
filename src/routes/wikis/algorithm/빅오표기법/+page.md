---
title: 빅오 표기법과 복잡도 계산법
summary: 빅오 표기법은 알고리즘의 성능을 나타내며, 입력 데이터 크기에 따른 시간 증가를 설명합니다. 주요 빅오 표기법으로는 O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n) 등이 있으며, 각 표기법의 예시와 계산 방법이 설명됩니다. 빅오 표기법은 최악의 경우를 기준으로 하므로 평균적인 성능을 완전히 반영하지 못할 수 있으며, 알고리즘의 효율성을 평가할 때 시간 복잡도도 고려해야 합니다.
date: '2024-10-01'
tags: [ '알고리즘' ]
---

빅오 표기법은 알고리즘의 성능을 나타내는 표기법 입니다. 알고리즘이 처리하는 데이터의 크기가 커질수록 시간이 어떻게 증가하는지를 설명합니다. 일반적으로 최악의 경우의 수를 기준으로 하고, 어떤 알고리즘이 얼마나 빨리 작동할지를 예측하는 데 사용됩니다. 빅오 표기법은 상수나 작은 변화는 무시하고 가장 영향력이 큰 성장을 나타내는 함수로 표현합니다.

## 주요 빅오 표기법 종류

- O(1) - 상수 시간 복잡도: 입력 크기와 상관없이 항상 일정한 시간이 소요됩니다. 배열의 특정 인덱스 접근이나 해시 테이블에서 값 조회
- O(log n) - 로그 시간 복잡도: 입력 크기가 커질수록 처리 시간이 로그적으로 증가합니다. 이진 탐색, 균형 잡힌 이진 트리
- O(n) - 선형 시간 복잡도: 입력 크기에 비례해서 시간이 증가합니다. 배열의 모든 요소를 한 번씩 순회
- O(n log n) - 선형 로그 시간 복잡도: n번의 로그 연산을 반복하는 경우입니다. 퀵정렬, 병합정렬
- O(n^2) - 이차 시간 복잡도: 입력 크기의 제곱에 비례해 시간이 증가합니다. 이중 루프를 사용하는 알고리즘(버블정렬)
- O(2^n) - 지수 시간 복잡도: 입력 크기가 1씩 증가할 때마다 시간이 두 배로 늘어납니다. 피보나치 재귀, 모든 부분집합 찾기

## 빅오 표기법 계산 방법

1. 상수 값 제거: 빅오 표기법에서는 상수는 무시합니다. 예를 들어, O(2n)이나 (3n)은 O(n)으로 축약됩니다.
2. 가장 빠르게 증가하는 항만 유지: 여러 항이 있을 경우, 가장 큰 성장을 나타내는 항만 남깁니다. 예를 들어 O(n^2 + n)은 O(n^2)로 단순화됩니다.
3. 루프 분석: 루프 안의 연산을 분석합니다.
    - 단일 루프: O(n)
    - 중첩된 이중 루프: O(n^2)
    - 삼중 루프: O(n^3)
4. 재귀적 호출 분석: 재귀 알고리즘의 복잡도는 재귀 함수가 호출되는 횟수에 따라 계산합니다.
    - 피보나치 수열과 같은 재귀 호출은 O(2^n)처럼 지수적으로 증가할 수 있습니다.
    - 분할 정복 알고리즘(예: 병합 정렬)은 O(n log n)으로 분석됩니다.

## 빅오 계산 예시

### 선형 탐색 예시

```java
public int findElement(int[] arr, int key) {
	for (int i =0; i< arr.length; i++) {
		if (arr[i] == key) {
			return i;
		}
	}
}
```

이 코드는 배열을 순차적으로 탐색하므로 O(n)입니다. 배열의 크기가 커질수록 탐색 시간이 선형적으로 증가합니다.

### 이진 탐색 예시

```java
public int binarySearch(int[] arr, int key) {
	int low = 0;
	int high = arr.length - 1;
	while (low <= high) {
		int mid = (low + high) / 2;
		if (arr[mid] < key) {
			low = mid + 1;
		} else if (arr[mid] > key) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}
```

이 코드는 배열을 이진 탐색하는 경우로, 매번 탐색 범위를 반으로 줄이므로 O(log n) 입니다.

### 버블 정렬 예시

```java
public void bubbleSort(int[] arr) {
	for (int i=0; i<arr.length; i++) {
		for (int j=0; j <arr.length - i - 1; j++ {
			if (arr[j] > arr[j+1]) {
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
}
```

이 코드는 배열을 두 번 반복하면서 비교하고 정렬하므로 O(n^2) 입니다.

## 빅오 표기법의 한계

빅오 표기법은 최악의 경우 시간 복잡도를 기준으로 하기 때문에, 실제로 평균적인 성능을 완적히 반영하지 못할수도 있습니다. 따라서 시간 복잡도도 함께 고려하여 알고리즘의 효율성을 평가하는 것이 중요합니다.
