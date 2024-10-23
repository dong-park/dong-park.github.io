package wikis.algorithm.스택과_큐;

import java.util.PriorityQueue;

// 1번째 줄에 연산의 개수 N(1 ≤ N ≤ 100,000)이 주어진다.
// 다음 N개의 줄에는 연산과 관련된 정보를 나타내는 정수 x가 주어진다.
// 만약 x가 0이 아니라면 배열에 x라는 값을 추가하고, x가 0이라면 배열에서 절댓값이 가장 작은 값을 출력하고,
// 그 값을 배열에서 제거한다. 입력되는 정수는 -2^31보다 크고, 2^31보다 작다.
public class Example4 {

    public static void main(String[] args) {
        // 주어진 연산과 관련된 정보
        int[] N = new int[]{1, -1, 0, 0, 0, 1, 1, -1, -1, 2, -2, 0, 0, 0, 0, 0, 0, 0};

        // 우선순위 큐를 정의하여 절댓값이 작은 순서대로 정렬되도록 설정
        PriorityQueue<Integer> queue = new PriorityQueue<>((o1, o2) -> {
            int o1Abs = Math.abs(o1);
            int o2Abs = Math.abs(o2);

            // 절댓값이 같다면 실제 값으로 비교하여 작은 값을 우선
            if (o1Abs == o2Abs) {
                return o1 > o2 ? 1 : -1;
            } else {
                // 절댓값이 작은 순서로 정렬
                return o1Abs - o2Abs;
            }
        });

        // 주어진 연산을 순차적으로 처리
        for (int val : N) {
            if (val == 0) {
                // x가 0인 경우: 큐에서 절댓값이 가장 작은 값을 출력하고 제거
                System.out.println(queue.size() > 0 ? queue.poll() : 0);
            } else {
                // x가 0이 아닌 경우: 값을 큐에 추가
                queue.add(val);
            }
        }
    }

}
