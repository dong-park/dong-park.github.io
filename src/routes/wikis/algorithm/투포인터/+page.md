---
title: 투포인터
summary: ""
date: '2024-05-25'
tags: [ '' ]
---

# 투포인터 기법

startIndex, endIndex를 지정해서 한칸씩 이동시키며 원하는 합이나 수들을 찾는 방법이다.
아래 이동원칙을 endIndex가 N이 될 때 까지 반복하되, 포인터가 이동할 때마다 현재의 총합과 비교해가며 값을 채운다.

## 투포인터 이동 원칙

- sum이 큰경우 : sum = sum - startIndex; startIndex++;
- sum이 작은경우: endIndex++; sum = sum + endIndex;
- sum을 찾은경우: endIndex++; sum = sum + endIndex; count++;



