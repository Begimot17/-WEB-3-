public class MP4 extends BaseVideoFormat implements Encoder {
    public MP4(){
        Format="MP4";
    }
    public MP4(String video){
        Video=video;
        Format="MP4";
    }
    @Override
    public String GetFormat() {
        return Format;
    }

    @Override
    public String GetVideo() {
        return Video;
    }
}
