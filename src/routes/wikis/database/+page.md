---
title: 데이터베이스
summary: ""
date: '2024-10-25'
tags: [ '' ]
---

## 데이터베이스의 정의 및 특징 및 무결성 제약

데이터베이스는 체계적으로 정리된 데이터 모음으로, 여러 응용 시스템들이 데이터에 효율적으로 접근하고 관리할 수 있도록 해줍니다.
- 일관성: 데이터가 잘못되거나 중복되지 않도록 보장합니다.
- 공유성: 여러 사용자가 동시에 데이터를 사용할 수 있습니다.
- 무결성: 데이터의 정확성과 일관성을 유지하는 속성.
- 보안성: 데이터베이스의 보안은 계쩡 및 권한 관리를 통해 이뤄지며, 인가된 사용자만 데이터에 접근할 수 있도록 보장합니다. 데이터가 민감할수록 보안 관리는 더욱 중요해집니다.
- 중복 최소화: 데이터베이스는 데이터를 중앙에서 관리함으로써 데이터 중복을 줄입니다.
이를 통해 저장공간을 절약하고 데이터 불일치를 방지합니다.

### 무결성 제약
- 개체 무결성: 기본 키는 NULL 값이 될 수 없습니다. 각 행은 유일해야 합니다.
- 참조 무결성: 외래 키는 참조되는 기본 키의 값을 유지해야 합니다. 즉, 다른 테이블에 있는 데이터를 잘못 참조하는 것을 방지합니다.
- 도메인 무결성: 특정 속성의 값이 미리 정의된 도메인 내의 유효한 값만 가질 수 있도록 합니다.
- 고유 무결성: 특정 열의 값이 중복되지 않도록 보장하는 제약 조건입니다. 고유한 값이어야 하는 속성을 관리하는 데 사용됩니다.
- NULL 무결성: 특정 열에 NULL 값이 포함될 수 없음을 명시하는 제약 조건입니다. 중요한 데이터가 반드시 존재해야 할 때 사용하는 제약입니다.

## 데이터베이스 키의 개념 및 인덱스

### 키의 종류
1. 기본 키(Priamry Key): 테이블의 각 레코드를 유일하게 식별하는 속성입니다.
2. 외래 키(Foreign Key): 다른 테이블의 기본 키를 참조하여 관계를 설정합니다.
3. 후보 키(Candidate Key): 기본 키가 될 수 있는 모든 속성입니다.
4. 대체 키(Alternate Key): 후보 키 중 기본 키로 선탹되지 않은 키입니다.

## 인덱스와 데이터베이스 성능 최적화
인덱스는 데이터베이스의 검색 성능을 향상시키기 위한 보조 구조로, 책의 목차와 같은 역할을 합니다.
인덱스는 자주 조회되는 열에 설정하여 데이터 검색을 빠르게 수행할 수 있도록 도와 줍니다.
하지만 인덱스를 과도하게 사용하면 데이터 삽입, 수정, 삭제 시 성능에 부정적인 영향을 줄 수 있습니다.

### 인덱스의 종류와 구조
- B-Tree 인덱스: 관계형 데이터베이스에서 가장 많이 사용하는 인덱스 구조로, 검색, 삽입 삭제와 같은 연산이 모두 효율적입니다. 
트리 구조를 통해 데이터를 정렬된 상태로 유지하여 빠르게 탐색할 수 있습니다.
- 해시 인덱스: 해시 함수를 사용하여 데이터를 특정 위치에 저장하며, 키 값을 통해 데이터를 빠르게 검색할 수 있습니다.
그러나 범위 검색에는 적합하지 않아 특정 조건의 검색에만 유리합니다.
- GIN(Generalized Inverted Index): 주로 텍스트 검색에 사용되며, 여러 열의 값을 쪼개서 관리하여 복잡한 조건의 검색에 효율적입니다.

### 인덱스를 사용할 때의 주의사항
인덱스를 설정할 때는 데이터 중복도와 쿼리 사용 패턴을 고려해야 합니다. 
**카디널리티(Cardinality: 전체 행 수에 대비해 고유한 값의 수가 얼마나 많은지를 나타내는 지표입니다. 카디널리티가 높은 열은 인덱스를 통해 검색 효율을 크게 높일 수 있습니다.)**
가 높은 열에 인덱스를 설정하면 검색 성능이 향상될 수 있지마느 데이터 중복도가 높은 열에 인덱스를 설정할 경우 성능 저하가 발생할 수 있습니다.

## 관계형 데이터베이스와 NoSQL의 비교
관계형 데이터베이스(RDBMS)와 NoSQL 데이터베이스는 서로 다른 특성과 장단점을 가지고 있으며, 상황에 따라 적절히 선택하여 사용해야 합니다.

### 관계형 데이터베이스(RDBMS)
- 구조화된 데이터 관리: RDBMS는 정확한 스키마를 가지고 데이터를 테이블 형식으로 저장하며, 각 테이블 간의 관계를 유지합니다. 이는 데이터 일관성을 무결성을 유지하는 데 유리합니다.
- ACID 특성: RDBMS는 트랜잭션의 안전한 처리를 보장하기 위해 원자성,일관성,격리성,지속성 이하 ACID 특성을 따릅니다.
- 사용 예시: 은행, ERP 시스템 등 데이터의 정확성과 일관성이 중요한 애플리케이션에 적합합니다.

### NoSQL 데이터베이스
- 유연한 스키마: NoSQL은 비정형 데이터와 대용량 데이터를 유연하게 처리할 수 있는 데이터베이스입니다. 
스키마가 유연하며, 데이터의 구조가 자주 변경되거나 미리 정의할 수 없을 때 사용하기에 적합합니다.
- 수평 확장에 유리: NoSQL은 데이터를 여러 노드에 분산하여 저장하는 수평 확장이 용이합니다. 이는 대규모 데이터 처리를 요구하는 시스템에서 특히 유리합니다.
- 사용 예시: 소셜 미디어, 로그 데이터 저장, 실시간 빅데이터 분석 등 데이터의 구조가 유동적이고 대용량 처리가 필요한 애플리케이션에 사용됩니다.

### 실무 적용 예시: RDBMS vs NoSQL
- RDBMS 실무 예시: 은행 시스템에서는 고객 정보와 거래 내역의 정확성이 매우 중요하므로 RDBMS를 사용하여 데이터 일관성을 보장하고 트랜잭션 관리로 보안성을 강화합니다.
- NoSQL 실무 예시: 소셜 미디어 플랫폼에서는 사용자 게시물, 댓글, 좋아요 등 빠르게 증가하는 데이터를 유연하여 관리하기 위해 NoSQL를 사용합니다.
이러한 데이터는 구조가 자주 변경될 수 있으며, 대규모로 확장 가능한 수평 확장이 필요합니다.

## CAP 이론과 PACELC 이론
CAP 이론은 분산 시스템에서 일관성, 가용성, 분할 내성중 두 가지 특성만을 동시에 만족시킬 수 있다고 설명합니다. 
분산환경에서는 모든 특성을 만족하는 시스템을 구축하는 것이 불가능하며, 어느 두 가지를 선택할 것인지는 시스템의 요구사항에 따라 달라집니다.

- 일관성(Consistency): 모든 노드에서 동일한 시점에 동일한 데이터를 보여줌.
- 가용성(Availability): 시스템의 일부가 장애가 발생하더라도, 사용자의 요청에 대해 응답을 제공할 수 있어야 함.
- 분할 내성(Partition Tolerance): 네트워크 일부가 단절되더라도 시스템이 계속 동작 할 수 있어야 함.

PACELC 이론은 CAP 이론의 한계를 보완한 것으로, 네트워크 장애 시 가용성과 일관성 간의 트레이드오프를 설명하며, 
장애가 없을 떄는 **지연 시간(Latency)**과 일관성 간의 균형을 설명합니다.
이 이론을 통해 분산 시스템에서 장애 상황뿐만 아니라 평상시 성능 최적화의 관점에서 고려해야 할 요소들을 설명합니다.

### CAP 적용 예시
전자상거래 시스템에서는 가용성과 분할 내성을 우선시하는 경우가 많습니다. 
사용자가 제품을 주문할 때, 일시적으로 데이터가 최신이 아니더라도 시스템은 가용성을 유지하여 서비스가 끊기지 않도록 합니다.
이는 일관성보다 서비스의 지속성이 더 중요할 때 적용됩니다.

## 트랜잭션과 ACID 특성
트랜잭션은 데이터베이스에서 데이터 상태를 변화시키는 하나의 논리적인 작업 단위입니다.
모든 작업이 성공적으로 완료되거나, 작업 중 일부라도 실패하면 트랜잭션 전체가 취소되어야 합니다.
이를 통해 데이터의 일관성과 신뢰성을 유지할 수 있습니다.

### ACID 특성
- 원자성(Atomicity): 트랜잭션 내의 모든 연산은 전부 실행되거나 전혀 실행되지 않아야 합니다.
예를 들어, 은행 계좌 이체에서는 돈이 출금된 후 입금이 완료되지 않으면 전체 작업이 취소됩니다.
- 일관성(Consistency): 트랜잭션이 실행된 후 데이터베이스는 항상 일관된 상태를 유지해야 합니다.
데이터베이스 제약 조건은 트랜잭션 수행 전후에 항상 충족되어야 합니다.
- 격리성(Isolation): 동시에 실행되는 트랜잭션이 서로 간섭하지 않도록 독립적으로 수행되어야 합니다.
예를 들어, 두 사용자가 같은 데이터를 수정할 때 서로의 수정 결과에 영향을 받지 않아야 합니다.
- 지속성(Durability): 트랜잭션이 커밋된 후에는 시스템 오류가 발생하더라도 그 결과가 데이터베이스에 영구적으로 반영되어야 합니다.
일반적으로 데이터는 비휘발성 메모리에 저장되어 영속성을 보장합니다.

### 트랜잭션 관리의 예시
- 은행 시스템: 고객이 한 계좌에서 다른 계좌로 자금을 이체할 떄, 트랜잭션이 적용됩니다. 돈이 출금된 후 입금이 실패하면 트랜잭션은 롤백되어 전체 작업이 취소됩니다.
이를 통해 자금 이동의 정확성과 무결성을 보장합니다.
- 전자상거래 플랫폼: 주문 생성 시 고객의 재고 수량을 감소시키고 결제 정보를 처리하는 모든 작업이 트랜잭션으로 묶여야 합니다. 하나라도 실패하면 전체 트랜잭션이 롤백되어,
고객에게 잘못된 정보가 전달되는 것을 방지합니다.
