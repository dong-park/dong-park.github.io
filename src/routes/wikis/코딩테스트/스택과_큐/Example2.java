package wikis.코딩테스트.스택과_큐;

import java.util.Arrays;
import java.util.Stack;

// 오큰수 구하기
// 크기가 N인 수열 A= A,, A,
// 2 .. A.이 있다. 수열의 각 원소 A,에 관련된 오큰수 NGE()를 구하려고 한다.
// A,의 오큰수는 오른쪽에 있으면서 A보다 큰 수 중 가장 왼쪽에 있는 수를 의미한다. 이러한 수가 없을때 오큰수는 1이다.
// 예를 들어 A= [3,5,2, 71일 때 NGE(1)= 5, NGE(2)= 7, NGE(3)= 7, NGE(4)=1이다.
// A= [9, 5, 4, 81일 경우에는 NGE(1)=-1, NGE(2)= 8, NGE(3)= 8, NGE(4)=-1이다.
public class Example2 {

    public static void main(String[] args) {
        // 주어진 수열 N 초기화
        int[] N = new int[]{3, 5, 2, 7};
        // 결과를 저장할 배열 A 초기화
        int[] A = new int[N.length];
        // 스택을 이용하여 오큰수를 구함
        Stack<Integer> results = new Stack<>();

        // 수열이 비어 있지 않을 경우에만 실행
        if(N.length > 0) {
            // 첫 번째 인덱스를 스택에 추가
            results.push(0);
            // 수열을 순회하면서 오큰수를 구함
            for (int i = 1; i < N.length; i++) {
                // 스택이 비어있지 않고, 현재 수열의 값이 스택의 최상위 값보다 클 경우
                while (results.size() > 0 && N[i] > N[results.peek()]) {
                    // 스택에서 값을 제거하고 해당 인덱스의 오큰수를 현재 수열 값으로 설정
                    int popIdx = results.pop();
                    A[popIdx] = N[i];
                }
                // 현재 인덱스를 스택에 추가
                results.push(i);
            }

            // 스택에 남아있는 인덱스는 오큰수가 없으므로 -1로 설정
            for(int restVal: results) {
                A[restVal] = -1;
            }
        }

        // 결과 배열 A를 출력
        Arrays.stream(A).forEach(System.out::println);
    }

}
