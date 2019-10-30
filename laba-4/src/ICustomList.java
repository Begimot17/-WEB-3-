public interface ICustomList<T> {
    void Add(T elem);
    void Remove(T elem) throws Exception;
    void RemoveByIndex(Integer index) throws Exception;
    T Get(Integer index) throws Exception;
    Boolean IsExists(T elem);
}
