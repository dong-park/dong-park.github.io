---
title: 5장 형식 맞추기
summary: 코드 작성 시 형식을 일관되게 유지하는 것은 개발 팀이 코드베이스를 보다 효과적으로 관리하고 이해할 수 있게 하는 핵심적인 요소입니다. 이 가이드에서는 코드 형식의 중요성과 이를 효과적으로 구현하는 방법에 대해 자세히 설명합니다.
date: '2024-01-15'
published: false
---

개발자로서 우리는 코드 작성이 단지 무언가를 작동하게 만드는 것만이 아니라는 것을 알고 있습니다. 또한 자신과 팀이 코드베이스를 유지 관리하고, 읽을 수 있고, 이해할 수 있도록 만드는 것입니다. 이를 달성하기 위한
기본 요소 중 하나는 일관되고 깔끔한 코드 형식을 사용하는 것입니다. 이 가이드에서는 적절한 코드 형식을 유지하는 이유와 방법을 살펴보겠습니다.

## **코드 형식의 중요성**

코드 형식 지정은 어떤 사람들에게는 사소해 보일 수도 있지만 매우 중요합니다. 현재 구현하고 있는 기능은 향후 변경될 가능성이 높습니다. 형식에 따라 결정되는 코드의 가독성과 품질은 이러한 변경을 촉진하는 데 중요한
역할을 합니다. 형식이 잘 지정된 코드베이스는 이해, 디버깅 및 확장이 더 쉽습니다.

## **줄 길이 확인하기**

대부분의 파일이 500줄을 초과하지 않고 대부분이 200줄 정도를 맴돌도록 시스템을 구축하는 것을 목표로 합니다. 이 접근 방식은 신문 기사 작성과 일치합니다. 상단에 내용을 요약하는 간결한 제목을 배치하고 기사의
본질을 요약하는 첫 번째 문단을 추가합니다. 마찬가지로, 소스 파일의 이름은 목적을 반영하도록 정확하게 지정되어야 하며, 높은 수준의 개념부터 시작하여 점차 자세한 설명으로 이동해야 합니다.

```java
// 나쁜 예: 지나치게 긴 줄
String userDetails = userRepository.findByName("John Doe").orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다.")).getDetails();

// 좋은 예: 가독성을 위해 나눈 문장
String userDetails = userRepository.findByName("John Doe")
        .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다."))
        .getDetails();

```

### **개념 분리**

기사의 단락과 마찬가지로 코드 개념을 빈 줄로 구분하여 가독성을 높입니다. 일련의 각 줄은 왼쪽에서 오른쪽으로, 위에서 아래로 읽혀 완전한 아이디어를 나타내야 합니다.

```java
public class UserManagement {
    private UserRepository userRepository;

    // 생성자와 메소드 사이에 빈 줄을 사용하여 구분
    public UserManagement(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 메소드 사이에 빈 줄을 사용하여 명확성 향상
    public void addUser(User user) {
        validateUser(user);
        userRepository.save(user);
    }

    private void validateUser(User user) {
        // 메소드 구현
    }
}

```

### **수직 밀도 및 거리**

수직 밀도는 밀접하게 관련된 코드 줄의 근접성을 나타내며, 관련 코드가 수직으로 함께 그룹화되어야 함을 나타냅니다. 반대로, 수직 거리는 개념적 일관성을 유지하기 위해 밀접하게 관련된 개념이 서로 가까이 배치되어야
한다는 원칙을 강조합니다. 여기에는 다음이 포함됩니다.

- **변수 선언**: 변수를 가능한 한 용도에 가깝게 배치합니다.
- **인스턴스 변수**: 일반적으로 클래스 시작 부분에 선언됩니다.
- **종속 함수**: 서로 호출하는 함수는 코드에서 밀접하게 배치되어야 합니다.
- **개념적 유사성**: 유사한 기능이나 종속성을 가진 코드는 함께 그룹화되어야 합니다

```java
public class Authentication {

    // 관련 메소드를 수직으로 그룹화
    public User login(String username, String password) {
        // 로그인 로직
    }

    private boolean isValidCredential(String username, String password) {
        // 검증 로직
    }
}
```

### **세로 순서**

가장 중요한 개념부터 시작하여 불필요한 세부 사항을 초기에 피하세요. 이는 세부 사항을 살펴보기 전에 더 넓은 그림을 이해하는 데 도움이 됩니다.

```java
public class ProductService {
    // 가장 중요한 메소드를 상단에 배치
    public List<Product> findAllProducts() {
        // 모든 제품 찾기 로직
    }

    // 기본 기능 아래에 보조 메소드 배치
    private void updateInventory(Product product) {
        // 재고 업데이트 로직
    }
}
```

## **가로 서식 관행**

프로그래머는 더 짧은 줄을 선호하는 경향이 있지만 최대 100자 또는 120자까지 확장하는 것이 허용됩니다. 그러나 줄이 길면 세부 사항에 대한 관심이 부족함을 나타낼 수 있습니다. 고려해야 할 가로 형식 측면은
다음과 같습니다.

- **공간 및 밀도**: 수평 공간을 사용하여 밀접하게 관련된 개념을 나타냅니다.
- **정렬**: 코드의 논리를 강조하지 않는 불필요한 공백을 피하세요.
- **들여쓰기**: 명확한 들여쓰기 패턴은 코드의 가독성을 높일 뿐만 아니라 다양한 섹션과 로직 수준을 시각적으로 구분합니다.

```java
// 나쁜 예: 가독성 문제를 초래하는 불필요한 정렬
private int quantity;
private String productName;
private double price;

// 좋은 예: 간단하고 직관적인 선언
private int quantity;
private String productName;
private double price;
```

## **팀 규칙**

팀이 일련의 서식 지정 규칙에 동의하고 모든 구성원이 이를 준수하는지 확인하는 것이 중요합니다. 프로젝트 전반에 걸친 형식의 일관성은 인지 부하를 줄이고 코드의 톤과 방식을 유지합니다.

## 결론

코드베이스에서 깔끔하고 일관된 형식을 유지하는 것은 잘 작성된 매뉴얼을 만드는 것과 비슷합니다. 이러한 표준을 따라가는 것은 어려울 수 있지만 장기적으로 보면 그 노력은 성과를 거두게 됩니다. 한 달이 지나면 코드의
가독성과 유지 관리 용이성에 대해 감사하게 될 것입니다. 우리의 코드가 기능적일 뿐만 아니라 읽고 작업하기에도 즐거운 코드가 되도록 노력합시다.
