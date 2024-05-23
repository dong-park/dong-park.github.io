package wikis.코딩테스트.lv1.구간합;

public class Solution {

    // 수 N개가 주어 졌을 때 i번째 수에서 j번째 수 까지의 합을 구하는 프로그램을 작성 하시오
//    public static void main(String args[]) {
//
//        // 구간 합을 구할 대상 배열 정의
//        int[] initNumArr = new int[]{5, 4, 3, 2, 1};
//        int[][] qNumArr = new int[][]{{1, 3}, {2, 4}, {5, 5}};
//
//        // 배열의 구간합의 정의한 배열 정의
//        int[] sNumArr = new int[initNumArr.length + 1];
//        int tempNum = 0;
//
//        for (int i = 1; i < sNumArr.length; i++) {
//            sNumArr[i] = tempNum += initNumArr[i - 1];
//        }
//
//        for (int[] qNum : qNumArr) {
//            int start = qNum[0];
//            int end = qNum[1];
//            System.out.println(sNumArr[end] - sNumArr[start - 1]);
//        }
//    }

    // N x N개의 수가 N x N 크기의 표에 채워져 있다. 표 안의 수 중 (X1, Y1)에 서(X2, Y2)까지의 합을 구하려 한다.
    // X는 행, Y는 열을 의미한다. 예를 들어 N = 4이고, 표가 다음과 같이 채워져 있을 때를 살펴보자.
    // (2, 2)에서 (3, 4) 까지의 합을 구하면 3+ 4+ 5+4+ 5+6= 27이고, (4, 4)에서 (4, 4)까지 의 합을 구하면 7이다.
    // 표에 채워져 있는 수와 합을 구하는 연산이 주어졌을 때 이를 처리하는 프로그램을 작성하시오
    public static void main(String args[]) {

        // 구하고자 하는 2차원 배열 정의
        int[][] qNums = new int[][]{
                {1, 2, 3, 4},
                {2, 3, 4, 5},
                {3, 4, 5, 6},
                {4, 5, 6, 7},
        };

        // 2차원 합 배열 정의
        int[][] sNums = new int[][]{
                new int[4],
                new int[4],
                new int[4],
                new int[4]
        };

        int[][] questions = new int[][]{
                {2, 2, 3, 4},
                {1, 2, 3, 4},
                {1, 1, 4, 4},
        };

        sNums[0][0] = qNums[0][0];
        for (int i = 1; i < sNums.length; i++) {
            sNums[0][i] = sNums[0][i - 1] + qNums[0][i];
            sNums[i][0] = sNums[i - 1][0] + qNums[i][0];
        }

        for (int i = 1; i < sNums.length; i++) {
            for (int j = 1; j < sNums[i].length; j++) {
                sNums[i][j] = sNums[i][j - 1] + sNums[i - 1][j] - sNums[i - 1][j - 1] + qNums[i][j];
            }
        }

        for (int[] question : questions) {
            int x1 = question[0] - 1;
            int y1 = question[1] - 1;
            int x2 = question[2] - 1;
            int y2 = question[3] - 1;

            long a = getArrayValue(sNums, x2, y2);
            long b = getArrayValue(sNums, x1 - 1, y2);
            long c = getArrayValue(sNums, x2, y1 - 1);
            long d = getArrayValue(sNums, x1 - 1, y1 - 1);
            long sum = a - b - c + d;
            System.out.println(sum);
        }

    }

    private static long getArrayValue(int[][] array, int x, int y) {
        if (x >= 0 && x < array.length && y >= 0 && y < array[0].length) {
            return array[x][y];
        } else {
            return 0;
        }
    }

}
