public class StringManager {
    public static String removeChar(String s, char c){
        String r = "";
        for (char elem: s.toCharArray())
            if (elem != c)
            r += elem;
        return r;
    }

    public static Boolean isInt(String s){
        String regex = "\\d+";
        return s.matches(regex);
    }

    public static Boolean isSame(String s){
        int i=0;
        while (i<s.length()-1) {
            if (s.charAt(i)==s.charAt(i+1))
                return true;
            i++;
        }
        return false;
    }
    public static String StrBuilder(){
        StringBuilder str = new StringBuilder();
        for(int i=0;i<=1000;i++){
            str.append(i+" ");
        }
        return str.toString();
    }
}
