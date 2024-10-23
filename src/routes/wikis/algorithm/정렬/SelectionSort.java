package wikis.algorithm.정렬;

import java.util.Arrays;

public class SelectionSort {

    public static void main(String[] args) {
        String N = "2143";

        int[] iArr = new int[N.length()];
        for (int i = 0; i < N.length(); i++) {
            iArr[i] = Integer.parseInt(N.substring(i, i + 1));
        }

        for (int i = 0; i < iArr.length; i++) {
            int maxI = i;
            for (int j = i + 1; j < iArr.length; j++) {
                if (iArr[j] > iArr[maxI]) {
                    maxI = j;
                }
            }

            if (i != maxI) {
                int temp = iArr[i];
                iArr[i] = iArr[maxI];
                iArr[maxI] = temp;
            }
        }

        Arrays.stream(iArr).forEach(System.out::println);

    }

}
