import java.util.ArrayList;

public class Main {

    public static void main(String[] args) throws Exception {

        var numbers = new CustomList<Integer>();
        numbers.Add(1);
        numbers.Add(2);
        numbers.Add(3);
        numbers.Add(4);
        numbers.Add(5);
        numbers.Add(6);
        numbers.Add(7);
        numbers.Add(8);
        numbers.Print();
        System.out.println("Get index 2");
        System.out.println(numbers.Get(2));
        System.out.println("Remove elem 4");
        numbers.Remove(4);
        numbers.Print();
        System.out.println("Remove index 1");
        numbers.RemoveByIndex(1);
        numbers.Print();
        System.out.println("IsExists elem 5?"+numbers.IsExists(5)+"!");
    }
}
