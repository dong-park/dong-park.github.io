package wikis.코딩테스트.정렬;

import java.util.Arrays;

/**
 * N개의 수가 주어졌을 때 이를 오름차순 정렬하는 프로그램을 작성하시오
 */
public class MergeSort {
    public static int[] A;
    public static long result;

    public static void main(String[] args) {
        A = new int[]{3, 2, 8, 1, 7, 4, 5, 6};

        // result 변수가 버블 정렬 시 swap의 갯수를 의미하는 이유는 merge 함수에서
        // 두 배열을 병합할 때 발생하는 역전된 쌍(pair)을 카운트하기 때문입니다.
        // 역전된 쌍은 배열에서 한 요소가 다른 요소보다 뒤에 있으면서 더 작은 경우를 말합니다.
        // 이러한 역전된 쌍은 버블 정렬에서 스왑이 발생하는 상황과 동일합니다.
        // 즉, 역전된 쌍의 수가 버블 정렬에서 필요한 스왑 횟수와 같습니다.
        result = 0;
        mergeSort(0, A.length - 1);
        Arrays.stream(A).forEach(System.out::println);
        System.out.println(result);
    }

    private static void mergeSort(int start, int end) {
        if (end - start < 1) return;
        int middle = start + (end - start) / 2;

        // 최소단위로 나누기 위한 재귀
        mergeSort(start, middle);
        mergeSort(middle + 1, end);
        merge(start, middle, end);
    }

    private static void merge(int start, int middle, int end) {
        // temp변수 초기화
        int[] temp = new int[A.length];
        for (int i = start; i <= end; i++) {
            temp[i] = A[i];
        }

        int index = start;
        int left = start;
        int right = middle + 1;

        // 왼쪽과 오른쪽 부분 배열을 비교하면서 임시 배열에 정렬된 순서로 저장
        while (left <= middle && right <= end) {
            if (temp[left] > temp[right]) {
                A[index++] = temp[right++];
                result = result + right - index;
            } else {
                A[index++] = temp[left++];
            }
        }

        // 왼쪽 부분 배열에 남은 요소들을 임시 배열에 복사
        while (left <= middle) {
            A[index++] = temp[left++];
        }

        // 오른쪽 부분 배열에 남은 요소들을 임시 배열에 복사
        while (right <= end) {
            A[index++] = temp[right++];
        }
    }
}
