package wikis.코딩테스트.lv1.슬라이딩_윈도우;

import java.util.Deque;
import java.util.LinkedList;

/**
 * Example2 클래스는 주어진 배열에서 길이가 L인 부분 배열의 최소값을 출력하는 프로그램입니다.
 * 이 프로그램은 슬라이딩 윈도우 기법을 사용하여 효율적으로 최소값을 찾습니다.
 */
public class Example2 {

    /**
     * 프로그램의 진입점입니다. 주어진 배열과 윈도우 크기를 사용하여
     * 각 윈도우의 최소값을 출력합니다.
     *
     * @param args 실행 시 전달되는 인자. 사용되지 않습니다.
     */
    public static void main(String[] args) {
        int[] datas = new int[]{1, 5, 2, 3, 6, 2, 3, 7, 3, 5, 2, 6};
        int L = 3;  // 윈도우 크기
        Deque<Node> myData = new LinkedList<>();

        int cI = 0;  // 현재 인덱스
        for (int data : datas) {
            Node node = new Node(cI, data);

            // 현재 요소가 더 작을 동안 덱의 뒤에서 요소 제거
            while (!myData.isEmpty() && myData.getLast().data > data) {
                myData.removeLast();
            }

            // 현재 요소를 덱에 추가
            myData.add(node);

            // 현재 윈도우를 벗어난 요소 제거
            if (myData.getFirst().index <= cI - L) {
                myData.removeFirst();
            }

            // 현재 인덱스 증가
            cI++;

            // 현재 윈도우의 최소 요소 출력
            System.out.print(myData.getFirst().data + " ");
        }
    }

    /**
     * Node 클래스는 배열의 요소와 해당 요소의 인덱스를 저장하는 간단한 데이터 구조입니다.
     */
    static class Node {
        int index;
        int data;

        /**
         * 주어진 인덱스와 데이터 값을 사용하여 Node 객체를 생성합니다.
         *
         * @param index 배열의 인덱스
         * @param data  배열의 요소 값
         */
        public Node(int index, int data) {
            this.index = index;
            this.data = data;
        }
    }
}
