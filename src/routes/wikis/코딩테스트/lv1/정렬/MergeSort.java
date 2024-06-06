package wikis.코딩테스트.lv1.정렬;

import java.util.Arrays;

/**
 * N개의 수가 주어졌을 때 이를 오름차순 정렬하는 프로그램을 작성하시오
 */
public class MergeSort {
    public static int[] A, temp;

    public static void main(String[] args) {
        A = new int[]{5, 4, 3, 2, 1};
        temp = new int[A.length];
        mergeSort(0, A.length - 1);

        Arrays.stream(temp).forEach(System.out::println);
    }

    private static void mergeSort(int start, int end) {
        if (end - start < 1) return;
        int middle = start + (end - start) / 2;
        mergeSort(start, middle);
        mergeSort(middle + 1, end);
        merge(start, middle, end);
    }

    private static void merge(int start, int middle, int end) {
        int left = start;
        int right = middle + 1;
        int index = start;

        temp = new int[A.length];

        // 왼쪽과 오른쪽 부분 배열을 비교하면서 임시 배열에 정렬된 순서로 저장
        while (left <= middle && right <= end) {
            if (A[left] <= A[right]) {
                temp[index++] = A[left++];
            } else {
                temp[index++] = A[right++];
            }
        }

        // 왼쪽 부분 배열에 남은 요소들을 임시 배열에 복사
        while (left <= middle) {
            temp[index++] = A[left++];
        }

        // 오른쪽 부분 배열에 남은 요소들을 임시 배열에 복사
        while (right <= end) {
            temp[index++] = A[right++];
        }

        // 임시 배열의 내용을 원래 배열에 복사
        for (int i = start; i <= end; i++) {
            A[i] = temp[i];
        }
    }
}
