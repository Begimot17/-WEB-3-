public class Main {

    public static void main(String[] args) {
        String str="Hello World";
        String str1 ="1273621876";
        System.out.println(str);
        System.out.println(StringManager.removeChar(str,'d'));
        System.out.println(str);
        System.out.println(StringManager.isInt(str));
        System.out.println(str1);
        System.out.println(StringManager.isInt(str1));
        System.out.println(str);
        System.out.println(StringManager.isSame(str));
        System.out.println(str1);
        System.out.println(StringManager.isSame(str1));
        System.out.println(StringManager.StrBuilder());
    }
}
