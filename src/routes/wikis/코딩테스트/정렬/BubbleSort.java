package wikis.코딩테스트.정렬;

import java.util.Arrays;

// N 개의 수가 주어졌을 때 이를 오름차순 정렬하는 프로그램을 작성하시오
public class BubbleSort {

    public static void main(String[] args) {
        int[] N = new int[]{5, 2, 3, 4, 1};

        for (int i = 0; i < N.length; i++) {
            for (int j = 0; j < N.length - i - 1; j++) {
                if (N[j] > N[j + 1]) {
                    int temp = N[j];
                    N[j] = N[j + 1];
                    N[j + 1] = temp;
                }

            }
        }

        Arrays.stream(N).forEach(System.out::println);
    }

}
