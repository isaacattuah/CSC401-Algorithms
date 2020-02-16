import java.util.*;

public class QuickSort{

    public static void main (String [] args)
    {
        int key = 0;
        int i = 0;
        System.out.println("This program sorts your array");
        int [] num = {12, 100, 19, 1, 3, 10};
        for (int j = 0; j < num.length; j++)
        {
            key = num[j];
            i = j - 1;
        

        while (i >= 0 && num[i] < key )
        {
            num[i + 1] = num[i];
            i = i - 1;
    
        }
        num[i+1] = key;
        }

        System.out.println(Arrays.toString(num));
    }
    
}