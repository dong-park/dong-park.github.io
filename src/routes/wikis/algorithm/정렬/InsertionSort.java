package wikis.algorithm.정렬;

import java.util.Arrays;

/**
 * 인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM 앞에 명의 사람들이 줄을 서 있다. 사람은 1번에서
 * N번까지 번호가 매겨져 있으며, 1번 사람이 돈을 인출하는 데 걸리는 시간은 P,분이다.
 * 사람들이 줄을 서는 순서에 따라서 돈을 인출하는 데 필요한 시간의 합이 달라진다. 예를 들어 총 5명이 있고, P, =3, P2=1, P3=4, P,=3, P, = 2일 때를 생각해 보자. 1, 2,3, 4, 5] 순서로 줄을 선다면 1번 사람은 3분 만에 돈을 뽑을 수 있다. 2번 사람은 1번 사람이 돈을 뽑을 때까지 기다려야 하므로 3+ 1= 4 분이 걸린다. 3번 사람은 1번, 2번 사람이 돈을 뽑을 때까지 기다려야 하므로 총 3+ 1+ 4= 8분이 걸린 다. 4번 사람은 3+ 1+4+ 3= 11분, 5번 사람은 3+ 1+ 4+ 3+ 2 = 13분이 걸린다. 즉, 각 사람이 돈 을 인출하는 데 필요한 시간의 합은 3+ 4+ 8+ 11+ 13= 39분이다. [2, 5, 1, 4, 3] 순서로 줄을 선다면
 * 2번은 1분, 5번은 1+ 2= 3분, 1번은 1+ 2+3= 6분, 4번은 1+ 2+3+3= 9분, 3번은 1+2+3+3 + 4= 13분이 걸리므로 각 사람이 돈을 인출하는 데 필요한 시간의 합은 1+ 3+ 6+ 9+ 13= 32분이다.
 * 이 순서보다 모든 사람이 돈을 인출하는 데 필요한 시간이 짧을 수는 없다.
 * 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는 데 걸리는 시간 P.가 주어졌을 때 각 사람이 돈을 인 출하는 데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.
 */
public class InsertionSort {

    public static void main(String[] args) {
        // A = 자릿수별로 구분해 저장한 배열
        int[] A = new int[]{3, 1, 4, 3, 2};
        // S = A의 합 배열
        int[] S = new int[A.length];

        /*
        for(A만큼 반복) {
            insertPoint = 삽입위치
            for(i-1까지 삽입위치 찾기)
            for(삽입위치까지 밀어내기)
            삽입위치에 데이터 입력
         }
         */
        for (int i = 1; i < A.length; i++) {
            int insertPoint = i;
            int inserValue = A[i];
            for (int j = i - 1; j >= 0; j--) {
                if (A[i] < A[j]) {
                    insertPoint = j;
                }
            }
            for (int j = i; j > insertPoint; j--) {
                A[j] = A[j - 1];
            }

            A[insertPoint] = inserValue;
        }

        // 정렬된 A를 이용해 합배열 구하기
        int sum = 0;
        for (int i = 0; i < A.length; i++) {
            sum += A[i];
            S[i] = sum;
        }

        System.out.println(Arrays.stream(S).sum());
    }

}
