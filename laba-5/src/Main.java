import java.util.ArrayList;

public class Main {

    public static void main(String[] args) throws Exception {

        var numbers = new CustomList<Integer>();
        numbers.Add(1);
        numbers.Add(2);
        numbers.Add(3);
        numbers.Add(4);
        System.out.println(numbers.Get(5));
        System.out.println(numbers.Get(-5));
        ITransform<Integer> transform =(value)->value*value;
        System.out.println(transform.Transform(5));
        ITransform<String> transformString =(value)->value+"!!!";
        System.out.println(transformString.Transform("Hello World"));

    }
}

