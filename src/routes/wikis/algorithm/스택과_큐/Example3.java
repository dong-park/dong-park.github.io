package wikis.algorithm.스택과_큐;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Queue;
import java.util.stream.Collectors;

// N장의 카드가 있다. 각각의 카드는 차례로 1에서 N까지의 번호가 붙어 있으며, 1번 카드가 가장 위, N번 카드가 가장 아래인 상태로 놓여 있다.
// 이제 다음과 같은 동작을 카드가 1장 남을 때까지 반복한다.
// 먼저 가장 위에 있는 카드를 바닥에 버린다. 그다음 가장 위에 있는 카드를 가장 아래에 있는 카드 밑으로 옮긴다.
// 예를 들어 N = 4일 때를 생각해 보자. 카드는 가장 위에서부터 1, 2, 3, 4의 순서대로 놓여 있다.
// 1을 버리면 2, 3, 4가 남는다. 여기서 2를 가장 아래로 옮기면 순서가 3, 4, 2가 된다.
// 3을 버리면 4, 2가 남고, 4를 밑으로 옮기면 순서가 2, 4가 된다. 마지막으로 2를 버리면 카드 4가 남는다.
// N이 주어졌을 때 가장 마지막에 남는 카드를 구하는 프로그램을 작성하시오
public class Example3 {

    public static void main(String[] args) {
        // 카드 덱 초기화
        int[] N = new int[]{1, 2, 3, 4, 5, 6};
        // 큐에 카드 덱 추가
        Queue<Integer> queue = Arrays.stream(N).boxed().collect(Collectors.toCollection(ArrayDeque::new));

        // 카드가 1장 남을 때까지 반복
        while (queue.size() > 1) {
            // 가장 위에 있는 카드를 버림
            queue.poll();
            // 그다음 가장 위에 있는 카드를 가장 아래에 있는 카드 밑으로 옮김
            queue.add(queue.poll());
        }

        // 마지막으로 남은 카드를 출력
        queue.stream().forEach(System.out::println);
    }

}
