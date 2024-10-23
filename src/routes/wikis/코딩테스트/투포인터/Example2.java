package wikis.코딩테스트.투포인터;

import java.util.Arrays;

// 주몽은 철기군을 양성하기 위한 프로젝트에 나섰다. 그래서 야철대장에게 철기군이 입을 갑
//옷을 만들라고 명령했다. 야철대장은 주몽의 명령에 따르기 위해 연구에 착수하던 중 갑옷을
//만드는 재료들은 각각 고유한 번호가 있고, 갑옷은 2개의 재료로 만드는 데 2가지 재료의 고
//유한 번호를 합쳐 M(1 S M S 10,000,000)이 되면 갑옷이 만들어진다는 사실을 발견했다.
//야철대장은 자신이 만들고 있는 재료로 갑옷을 몇 개나 만들 수 있는지 궁금해졌다. 야철대장
//의 궁금증을 풀어 주기 위해 N(1 S N S 15,000)개의 재료와 M이 주어졌을 때 몇 개의 갑옷
//을 만들 수 있는지를 구하는 프로그램을 작성하시오
public class Example2 {
    public static void main(String[] args) {
        long M = 9;
        long[] receipts = new long[]{
                2, 7, 4, 1, 5, 3
        };

        Arrays.sort(receipts); // N의 범위가 15000이하 이므로 정렬 이후 투포인터로 접근해도 좋다

        int start = 0, end = receipts.length - 1, count = 0;
        while (start != end) {
            long sum = receipts[start] + receipts[end];
            if(sum < M) {
                start++;
            } else if (sum > M) {
                end--;
            } else {
                count++;
                start++;
            }
        }

        System.out.println(count);
    }

}
