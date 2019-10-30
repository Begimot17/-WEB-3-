public class Main {
    public static void main(String[] args) {
        var mkv = new MKV("Cartoon");
        var toAvi=VideConverter.ToAVI(mkv.GetVideo());
        System.out.println(mkv.GetVideo()+"."+mkv.GetFormat()+"" +
                ">>>>>ToAVI>>>>>"+toAvi.GetVideo()+"."+toAvi.GetFormat());
    }
}
