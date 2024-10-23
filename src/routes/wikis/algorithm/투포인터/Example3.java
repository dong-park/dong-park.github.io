package wikis.algorithm.투포인터;

import java.util.Arrays;

public class Example3 {

    // 주어진 N개의 수에서 다른 두 수의 합으로 표현되는 수가 있다면 그 수를 '좋은 수' 라고 한다. N개의 수 중 좋은 수가 총 몇 개인지 출력하시오
    public static void main(String[] args) {
        // nArr = 제시하는 문제의 열, count = 좋은수의 개수
        // 정렬
        // for int n 추출
        // { start, end 초기화
        // 투포인터 분기후 일치시 count++
        // }
        // 출력

        int[] nArr = new int[]{
                2, 1, 3, 4, 5, 6, 7, 9, 8, 10
        };
        int count = 0;

        Arrays.sort(nArr);

        for (int i = 1; i < nArr.length; i++) {
            int k = nArr[i];
            int start = 0, end = i - 1;
            while (start < end) {
                long sum = nArr[start] + nArr[end];
                if (sum == k) {
                    count++;
                    start++;
                } else if (sum > k) {
                    start++;
                } else {
                    end++;
                }
            }
        }

        System.out.println(count);

    }

}
