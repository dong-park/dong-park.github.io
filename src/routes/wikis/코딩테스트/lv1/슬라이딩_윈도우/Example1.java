package wikis.코딩테스트.lv1.슬라이딩_윈도우;

import java.util.Arrays;

// 평소 문자열을 이용해 노는 것을 좋아하는 민호는 DNA 문자열을 알게 됐다.
// DNA 문자열은 모든 문자열 에 등장하는 문자가 {'A', 'C', 'G', 'T}인 문자열을 말한다.
// 예를 들어 "ACKA"는 DNA 문자열이 아니지 만, "ACCA"는 DNA 문자열이다.
// 이런 신비한 문자열에 완전히 매료된 민호는 임의의 DNA 문자열을 만들고 만들어진 DNA 문자열의 부분 문자열을 비밀번호로 사용하기로 마음먹었다.
//하지만 민호는 이 방법에는 큰 문제가 있다는 것을 발견했다.
// 임의의 DNA 문자열의 부분 문자열을 뽑았 을 때 "AAAA"와 같이 보안에 취약한 비밀번호가 만들어질 수 있기 때문이다.
// 그래서 민호는 부분 문자 열에서 등장하는 문자의 개수가 특정 개수 이상이어야 비밀번호로 사용할 수 있다는 규칙을 만들었다.
// 예 를 들어 임의의 DNA 문자열이 "AAACCTGCCAA"이고, 민호가 뽑을 부분 문자열의 길이를 4라고 가 정해 보자.
// 그리고 부분 문자열에 'A'는 1개 이상, 'C'는 1개 이상, 'G'는 1개 이상, 'T'는 0개 이상 등장해 야 비밀번호로 사용할 수 있다고 가정해 보자.
// 이때 "ACCT"는 'G'가 1개 이상 등장해야 한다는 조건을 만족하지 못해 비밀번호로 사용할 수 없지만, "GCCA"은 모든 조건을 만족하므로 비밀번호로 사용할 수 있다.
// 민호가 만든 임의의 DNA 문자열과 비밀번호로 사용할 부분 분자열의 길이 그리고 {'A', 'C', 'G', 'T'}가 각각 몇 번 이상 등장해야 비밀번호로 사용할 수 있는지,
// 순서대로 주어졌을 때 민호가 만들 수 있는 비밀 번호의 종류의 수를 구하는 프로그램을 작성하시오.
// 단, 부분 문자열이 등장하는 위치가 다르면 부분 문 자열의 내용이 같더라도 다른 문자열로 취급한다
public class Example1 {

    public static void main(String[] args) {
        int P = 4;
        String Q = "AAACCTGCCAA";
        char[] A = Q.toCharArray();
        int[] checkArr = new int[]{1, 1, 1, 0}; // A C G T 순
        int[] myArr = new int[4];
        int checkSecret = 0;

        // 초기화
        for (int i = 0; i < P; i++) {
            add(A[i], myArr);
        }

        if (check(myArr, checkArr) == checkArr.length) {
            checkSecret++;
        }

        for (int i = P; i < A.length; i++) {
            del(A[i - P], myArr);
            add(A[i], myArr);
            if (check(myArr, checkArr) == checkArr.length) {
                checkSecret++;
            }
        }

        System.out.println("Result : " + checkSecret);
    }

    private static int check(int[] myArr, int[] checkArr) {
        int checkSecret = 0;
        for (int i = 0; i < checkArr.length; i++) {
            if (myArr[i] >= checkArr[i]) {
                checkSecret++;
            }
        }
        return checkSecret;
    }

    public static void add(char currentChar, int[] myArr) {
        System.out.println("ADD:" + currentChar);
        if (currentChar == 'A') {
            myArr[0] += 1;
        } else if (currentChar == 'C') {
            myArr[1] += 1;
        } else if (currentChar == 'G') {
            myArr[2] += 1;
        } else if (currentChar == 'T') {
            myArr[3] += 1;
        }
    }

    public static void del(char currentChar, int[] myArr) {
        System.out.println("DEL:" + currentChar);
        if (currentChar == 'A') {
            myArr[0] -= 1;
        } else if (currentChar == 'C') {
            myArr[1] -= 1;
        } else if (currentChar == 'G') {
            myArr[2] -= 1;
        } else if (currentChar == 'T') {
            myArr[3] -= 1;
        }
    }
}
