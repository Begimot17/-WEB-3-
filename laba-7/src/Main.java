class JThread extends Thread {
    int a = 1;
    int b = 10;
    int fiveCount;
    JThread(int count){
        for (int i=0;i<=count;i++)
            if(a + (int) (Math.random() * b)==5)
                fiveCount++;
    }
}

public class Main {
    public static void main(String[] args) {
        var Thread1=new JThread(5000);
        var Thread2=new JThread(5000);
        Thread1.start();
        Thread2.start();
        var five=Thread1.fiveCount+Thread2.fiveCount;
        System.out.println(five);
    }
}
