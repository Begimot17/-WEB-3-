import java.lang.reflect.Array;

public class CustomList<T> implements ICustomList<T> {

    private static final int SIZE_FACTOR=1;

    private T data[];

    private int index=0;

    private int size;

    public CustomList(){
        this.data=(T[])new Object[SIZE_FACTOR];
        this.size=SIZE_FACTOR;
    }

    private void increaseSizeAndReallocate() {
        this.size=this.size+SIZE_FACTOR;
        T newData[]=(T[])new Object[this.size];
        for(int i=0; i<data.length;i++){
            newData[i]=data[i];
        }
        this.data=newData;
    }


    @Override
    public void Add(T elem) {
        if(this.index==this.size-1){
            increaseSizeAndReallocate();
        }
        data[this.index]=elem;
        this.index++;
    }

    @Override
    public void Remove(T elem) throws Exception {
        var isHave=false;
        for(int x=0; x<this.data.length-1;x++){
            if (elem ==data[x]||isHave)
            {
                data[x]=data[x+1];
                isHave=true;
            }
        }
        if (isHave) {
            this.index--;
            return;
        }
        throw new Exception("NoSuchItem");
    }

    @Override
    public void RemoveByIndex(Integer index) throws Exception {
        if(index>this.index-1){
            throw new Exception("ArrayIndexOutOfBound");
        }
        if(index<0){
            throw new Exception("Negative Value");
        }
        for(int x=index; x<this.data.length-1;x++){
            data[x]=data[x+1];
        }
        this.index--;
        return;
    }

    @Override
    public T Get(Integer index) throws Exception {
        if(index>this.index-1){
            throw new Exception("ArrayIndexOutOfBound");
        }
        if(index<0){
            throw new Exception("Negative Value");
        }
        return this.data[index];
    }
    public void Print() throws Exception {
        System.out.println("Array");
        for(int x=0; x<this.data.length-1;x++){
            if(data[x]!=null)
            System.out.println(data[x]);
        }

    }

    @Override
    public Boolean IsExists(T elem) {
            for(int x=0; x<this.data.length-1;x++){
                if (data[x]==elem)
                    return true;
            }
        return false;
    }
}
