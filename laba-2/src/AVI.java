public class AVI extends BaseVideoFormat implements Encoder {
    public AVI(){
        Format="AVI";
    }
    public AVI(String video){
        Video=video;
        Format="AVI";
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
