package wikis.algorithm.투포인터;

public class Example1 {

    // 어떠한 자연수 N은 몇 개의 연속된 자연수의 합으로 나타낼 수 있다.
    // 당신은 어떤 자연수 N(1 ≤ N S 10,000,000)을 몇 개의 연속된 자연수의 합으로 나타내는 가짓수를 알고 싶다. 이때 사 용하는 자연수는 N이어야 한다.
    // 예를 들어 15를 나타내는 방법은 15,7+8,4+5+ 6,1+2 + 3+ 4+ 5이다.
    // 반면, 10을 나타내는 방법은 10,1+ 2+ 3+ 4이다.
    // N을 입력받아 연속된 자 연수의 합으로 나타내는 가짓수를 출력하는 프로그램을 작성하시오
    public static void main(String[] args) {
        // N 변수 초기화
        long N = 15;
        // 사용 변수 초기화
        long cnt = 1, sum = 1, sI = 1, eI = 1;
        // while ( N != eI) {
        // if(sum == N) -> cnt++, eI++, sum=sum+eI
        // else if(sum > N) -> 수가 크다, sum - sI, sI++
        // else -> 수가 작다, eI++ , sum += eI
        // }
        // cnt 출력
        while (N > eI) {
            if (sum == N) {
                cnt++;
                eI++;
                sum += eI;
            } else if(sum >  N) {
                sum -= sI;
                sI++;
            } else {
                eI++;
                sum += eI;
            }
        }

        System.out.println(cnt);
    }

}
