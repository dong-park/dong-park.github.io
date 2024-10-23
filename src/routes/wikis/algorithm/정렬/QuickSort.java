package wikis.algorithm.정렬;

public class QuickSort {

    public static void main(String[] args) {
        int K = 4; // 찾고자 하는 K번째 작은 값의 인덱스 (1-based index)
        int[] A = new int[]{1, 7, 2, 3, 5}; // 정렬할 배열
        quickSort(A, 0, A.length - 1, K - 1); // K번째 작은 값을 찾기 위한 퀵 정렬 호출 (0-based index로 변환)
        System.out.println(A[K - 1]); // K번째 작은 값 출력
    }

    // 퀵 정렬 함수
    private static void quickSort(int[] arr, int start, int end, int K) {
        int pivot = getPivot(arr, start, end); // 피벗 위치를 얻음
        if (pivot == K) return; // 피벗이 K번째 인덱스와 같으면 정렬 완료
        else if (K < pivot) quickSort(arr, start, pivot - 1, K); // K가 피벗보다 작으면 왼쪽 부분만 정렬
        else quickSort(arr, pivot + 1, end, K); // K가 피벗보다 크면 오른쪽 부분만 정렬
    }

    // 피벗을 얻는 함수
    private static int getPivot(int[] arr, int start, int end) {
        int M = (start + end) / 2; // 중간 인덱스를 계산
        swap(arr, start, M); // 중간 값을 피벗으로 설정하고 첫 번째 위치로 이동
        int pivot = arr[start]; // 피벗 값
        int i = start + 1, j = end; // 포인터 설정 (i는 왼쪽, j는 오른쪽)

        // i와 j가 만날 때까지 반복
        while (i <= j) {
            // j가 피벗보다 큰 값을 찾을 때까지 왼쪽으로 이동
            while (j >= start + 1 && pivot < arr[j]) {
                j--;
            }
            // i가 피벗보다 작은 값을 찾을 때까지 오른쪽으로 이동
            while (i <= end && pivot > arr[i]) {
                i++;
            }
            // i와 j가 만나지 않았으면 두 값을 교환
            if (i <= j) {
                swap(arr, i++, j--);
            }
        }

        // 피벗을 최종 위치로 이동
        arr[start] = arr[j];
        arr[j] = pivot;
        return j; // 피벗의 최종 위치 반환
    }

    // 배열의 두 값을 교환하는 함수
    private static void swap(int[] arr, int a1, int a2) {
        int temp = arr[a1];
        arr[a1] = arr[a2];
        arr[a2] = temp;
    }
}
