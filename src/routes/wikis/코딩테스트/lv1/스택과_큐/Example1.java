package wikis.코딩테스트.lv1.스택과_큐;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// 문제 설명:
// 주어진 수열을 스택을 이용하여 만들 수 있는지 확인하는 문제입니다.
// 스택에 값을 push할 때 "+"를 기록하고, pop할 때 "-"를 기록하여
// 최종적으로 스택 연산의 결과를 출력합니다.
public class Example1 {
    public static void main(String[] args) {
        // 입력 배열 N을 정의합니다.
        int[] N = new int[]{4, 3, 6, 8, 7, 5, 2, 1};
        // 추가 테스트용 입력 배열 (필요에 따라 주석 해제하여 사용)
        // int[] N = new int[]{1, 2, 5, 3, 4};

        // 스택을 초기화합니다.
        Stack<Integer> stack = new Stack<>();
        // 결과를 저장할 리스트를 초기화합니다.
        List<String> plusMinus = new ArrayList<>();
        // 다음에 스택에 넣을 값을 1로 초기화합니다.
        int nextStackVal = 1;

        // 입력 배열 N의 각 값을 순회합니다.
        for (int val : N) {
            // 현재 값이 다음 스택 값보다 크거나 같다면
            if (val >= nextStackVal) {
                // 현재 값에 도달할 때까지 스택에 값을 추가합니다.
                while (val >= nextStackVal) {
                    stack.push(nextStackVal++);
                    plusMinus.add("+"); // "+"를 결과 리스트에 추가
                }
                // 현재 값을 스택에서 꺼냅니다.
                stack.pop();
                plusMinus.add("-"); // "-"를 결과 리스트에 추가
            } else {
                // 스택에서 값을 꺼냅니다.
                Integer pop = stack.pop();
                // 꺼낸 값이 현재 값보다 크다면 불가능한 순서이므로 "NO"를 출력하고 종료합니다.
                if (pop > val) {
                    System.out.println("NO");
                    return;
                }
                // "-"를 결과 리스트에 추가
                plusMinus.add("-");
            }
        }

        // 결과 리스트의 각 요소를 출력합니다.
        plusMinus.forEach(a -> System.out.println(a));
    }
}
