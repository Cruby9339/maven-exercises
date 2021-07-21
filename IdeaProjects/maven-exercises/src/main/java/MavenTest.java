import org.apache.commons.lang3.StringUtils;

import java.util.Scanner;

public class MavenTest {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter a number");
        String userInput = sc.nextLine();
        System.out.println(StringUtils.isNumeric(userInput));

        System.out.println("Please enter a string");
        String userInput2 = sc.nextLine();
        System.out.println(StringUtils.swapCase(userInput2));
        System.out.println(StringUtils.reverse(userInput2));
        System.out.println("lol");
    }

}
