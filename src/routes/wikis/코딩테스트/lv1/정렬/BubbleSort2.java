package wikis.코딩테스트.lv1.정렬;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * bool change = false;
 * for (int i = 1; i <=n + 1; i++)
 * {
 * change = false;
 * for(int j= l; j A n - i; jtt) {
 * if(a[j] > a[j + 1]) {
 * change = true;
 * swap(alj], alj + 1]);
 * }
 * }
 * if(change == false) {
 * cout « i « 'In'; break;
 * }
 * }
 * 위 코드에서 n은 배열의 크기, a는 수가 들어 있는 배열이다. 수는 배열의 1번 방부터 채운다. 위와 같은 코드를 실행시켰을 때 어떤 값이 출력되는지를 구하는 프로그램을 작성하시오
 */
public class BubbleSort2 {

    public static void main(String[] args) {
        // swap이 한 번도 일어나지 않은 루프가 언제인지 알아내는 문제!
        // swap이 일어날때마다 왼쪽 이동이 발생하는데 이 길이의 최대값은 1에서 회전수를 구할수 있다.
        int[] N = new int[]{10, 1, 5, 2, 3};

        Map<Integer, Integer> beforeIdx = new HashMap<>();
        for (int i = 0; i < N.length; i++) beforeIdx.put(N[i], i);

        int[] sArray = Arrays.stream(N).sorted().toArray();

        int maxLength = 0;
        for (int i = 0; i < sArray.length; i++) {
            int val = beforeIdx.get(sArray[i]) - i;
            maxLength = Math.max(val, maxLength);
        }
        maxLength = maxLength + 1;

        System.out.println(maxLength);
    }

}
