public class MKV extends BaseVideoFormat implements Encoder {
    public MKV(){
        Format="MKV";
    }
    public MKV(String video){
        Video=video;
        Format="MKV";
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
