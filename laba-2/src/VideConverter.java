public class VideConverter {

    public static MKV ToMKV(String video){
        return  new MKV(video);
    }

    public static AVI ToAVI(String video){
        return  new AVI(video);
    }

    public static MP4 ToMP4(String video){
        return  new MP4(video);
    }
}
