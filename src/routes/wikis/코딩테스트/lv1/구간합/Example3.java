package wikis.코딩테스트.lv1.구간합;

import java.util.Arrays;

public class Example3 {

    public static long factorial(long num){
        long total = 1;
        for(long i=1; i<=num; i++) {
            total *= i;
        }
        return total;
    }


    // N개의 수 A1, A2, .., An이 주어졌을 때 연속된 부분의 합이 M으로 나누어떨어지는 구간의 개수를 구하는 프로그램을 작성하시오.
    // 즉, A+...+ A(i Sj)의 합이 M으로 나누어떨어지는 (i, j) 쌍의 개수를 구하 시오
    public static void main(String args[]) {
        int[] qNums = new int[]{
                5, 4, 3, 2, 1
        };

        int M = 3;

        int[] sNums = new int[qNums.length];
        sNums[0] = qNums[0];
        for (int i = 1; i < sNums.length; i++) {
            sNums[i] = sNums[i - 1] + qNums[i];
        }

        int[] dNums = new int[sNums.length];
        for (int i = 0; i < dNums.length; i++) {
            dNums[i] = sNums[i] % M;
        }

        long allCnt = 0;
        long zeroCnt = Arrays.stream(dNums).filter(a -> a == 0).count();

        allCnt += zeroCnt;

        // 조합은 선택한 항목들의 순서를 고려하지 않는 경우의 수를 계산하는 방법입니다. (n)개의 항목 중 (r)개를 순서 없이 선택하는 경우의 수는 다음과 같이 계산합니다:
        int[] dNumDistincts = Arrays.stream(dNums).distinct().toArray();

        //C(n, r) = n! / (r! * (n-r));
        //C(n, 2) = (n x (n-1)) / 2 -> 약분해서 이렇게됨
        for(int dNumDistinct : dNumDistincts) {
            long dNumDistinctCnt = Arrays.stream(dNums).filter(a -> a == dNumDistinct).count();
            allCnt += (dNumDistinctCnt * (dNumDistinctCnt -1)) / 2;
        }

        System.out.println("result: " + allCnt);
        return;
    }


}
