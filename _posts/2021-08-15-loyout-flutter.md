---
layout: post
title: "플러터의 레이아웃"
author: "dongpark"
category: post
---
# Flutter 레이아웃
### 플러터의 핵심 메커니즘
* 플러터의 레이아웃 메커니즘의 핵심은 위젯이다.
* 레이아웃, 이미지, 아이콘, 글자, row, column, grid 모두 위젯으로 이루어져 있다.

### Single-child layout widgets
하위값으로 child 를 가진다.
* Align: 자체 내에서 자식을 정렬하고 선택적으로 자식의 크기에 따라 자체 크기를 조정하는 위젯입니다.
* AspectRatio: 특정 종횡비로 자식 크기를 조정하려는 위젯입니다.
* Baseline: 자식의 기준선에 따라 자식의 위치를 지정하는 위젯입니다.
* Center: 자체 내부에 자식을 중앙에 배치하는 위젯입니다.
* ConstrainedBox: 자식에 추가 제약을 부과하는 위젯입니다.
* Container: 일반적인 페인팅, 위치 지정 및 크기 조정 위젯을 결합한 편리한 위젯입니다.
* Padding: 지정된 패딩으로 자식을 삽입하는 위젯입니다.
* SizedBox: 지정된 크기의 상자입니다. 자식이 주어지면 이 위젯은 자식이 특정 너비 및/또는 높이를 갖도록 강제합니다(이 위젯의 부모가 값을 허용한다고 가정). 너비나 높이가 null이면 이 위젯은 해당 차원의 자식 크기와 일치하도록 자체 크기를 조정합니다.
* Transform: 자식을 그리기 전에 변환을 적용하는 위젯입니다.

### Multi-child layout widgets
하위값으로 children 을 가진다.
* Column: 세로 방향으로 자식 위젯 목록을 배치합니다.
* GridView: 그리드 목록은 세로 및 가로 레이아웃으로 배열된 반복되는 셀 패턴으로 구성됩니다. GridView 위젯은 이 구성 요소를 구현합니다.
* ListView: 스크롤 가능한 선형 위젯 목록입니다. ListView는 가장 일반적으로 사용되는 스크롤 위젯입니다. 스크롤 방향으로 자식을 차례로 표시합니다. 교차 축에서 자식은 ListView를 채우는 데 필요합니다.
* Row: 가로 방향으로 자식 위젯 목록을 배치합니다.
* Stack: 이 클래스는 간단한 방법으로 여러 자식을 겹치고자 할 때 유용합니다. 예를 들어 약간의 텍스트와 이미지가 있고 그라디언트가 오버레이되어 있고 하단에 버튼이 부착되어 있습니다.

### 가로, 세로 기준 위젯(Row, Column)
#### row, column
* 행과 열은 가장 일반적으로 사용되는 두 가지 레이아웃 패턴입니다.
* 행과 열은 각각 하위 위젯 목록을 사용합니다.
* 자식 위젯은 그 자체로 행, 열 또는 기타 복잡한 위젯이 될 수 있습니다.
* 행 또는 열이 세로 및 가로로 자식을 정렬하는 방법을 지정할 수 있습니다.
* 특정 하위 위젯을 늘리거나 제한할 수 있습니다.
* 하위 위젯이 행 또는 열의 사용 가능한 공간을 사용하는 방법을 지정할 수 있습니다.

#### 위젯의 정렬기준
* mainAxisAlignment 및 crossAxisAlignment 속성을 사용하여 행이나 열이 자식을 정렬하는 방법을 제어합니다.
* row -> 각각 가로가 main, 세로가 cross axis에 해당합니다.
* column -> 반대로 세로가 main, 가로가 cross axis에 해당합니다.

### 일반적인 레이아웃 위젯
*  [Container](https://flutter-ko.dev/docs/development/ui/layout#container)  : 위젯에 패딩, 여백, 테두리, 배경색 또는 기타 장식을 추가합니다.
*  [GridView](https://flutter-ko.dev/docs/development/ui/layout#gridview)  : 위젯을 스크롤 가능한 그리드로 배치합니다.
*  [ListView](https://flutter-ko.dev/docs/development/ui/layout#listview)  : 위젯을 스크롤 가능한 목록으로 배치합니다.
*  [Stack](https://flutter-ko.dev/docs/development/ui/layout#stack)  : 위젯을 다른 위젯 위에 겹칩니다.
*  [Card](https://flutter-ko.dev/docs/development/ui/layout#card)  : 모서리가 둥글고 그림자가 있는 상자에 관련 정보를 구성합니다.
*  [ListTile](https://flutter-ko.dev/docs/development/ui/layout#listtile)  : 최대 3줄의 텍스트와 선택적 선행 및 후행 아이콘을 행으로 구성합니다.








---
