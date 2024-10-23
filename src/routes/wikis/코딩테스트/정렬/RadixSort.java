package wikis.코딩테스트.정렬;

import java.util.Arrays;

public class RadixSort {
    public static void main(String[] args) {
        int[] A = new int[]{11, 215, 15, 344, 372, 294, 100, 8, 145, 24, 198, 831};

        int maxLength = String.valueOf(Arrays.stream(A).max().getAsInt()).length();
        int jarisu = 1;
        while (jarisu < Math.pow(10, maxLength)) {
            int[] radixArr = new int[10];
            int[] output = new int[A.length];
            for (int i = 0; i < A.length; i++) {
                radixArr[(A[i] / jarisu) % 10]++;
            } // radixArr이 각 1~10자리수별로 숫자가 카운트 된다.

            // 이 루프는 radixArr 배열을 누적하여 합배열을 생성합니다.
            // 각 radixArr[i]는 i 이하의 숫자가 몇 개 있는지를 나타냅니다.
            // 예를 들어, radixArr[3]는 0, 1, 2, 3까지의 숫자가 총 몇 개인지를 의미합니다.
            for (int i = 1; i < 10; i++) {
                radixArr[i] += radixArr[i - 1];
            }

            for (int i = A.length - 1; i >= 0; i--) {
                // (A[i] / jarisu) % 10은 현재 자리수에서 숫자를 추출합니다.
                // radixArr[(A[i]) / jarisu % 10]은 해당 숫자가 정렬된 배열에서 끝나는 위치를 나타냅니다.
                int realJarisu = (A[i]) / jarisu % 10;
                int what = radixArr[realJarisu] - 1; // 배열이 인덱스 0부터 시작하므로 1을 빼줍니다.
                output[what] = A[i];
                radixArr[((A[i]) / jarisu) % 10]--; // 위에서부터 채워주려고 -- 하는것
            }

            for (int i = 0; i < A.length; i++) {
                A[i] = output[i];
            }

            jarisu = jarisu * 10;
        }

        Arrays.stream(A).forEach(System.out::println);
    }
}
