import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Field;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface NotNull{

}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface IntMinMax {
    int min();
    int max();
}

class Student {
    @NotNull
    public String name;

    @NotNull
    @IntMinMax(min=3, max=20)
    public Integer age;

    public Student(String name, Integer age) {
        super();
        this.name = name;
        this.age=age;
    }
}

class ModelNotValid extends RuntimeException {
    public ModelNotValid(String errorMessage) {
        super(errorMessage);
    }
}

public class Main {
    public static void main(String[] args) throws IllegalArgumentException, IllegalAccessException {
        Student s = new Student("",23);

        try {
            for(Field f : s.getClass().getDeclaredFields()) {
                if (f.isAnnotationPresent(NotNull.class)) {
                    if (f.get(s) == null||f.get(s)=="")
                        throw new ModelNotValid("Field is Null");
                }
                if (f.isAnnotationPresent(IntMinMax.class)) {
                    var intMinMax = f.getAnnotation(IntMinMax.class);
                    if ((Integer)f.get(s)<intMinMax.min()||(Integer)f.get(s)>intMinMax.max())
                        throw new ModelNotValid("Integer Not Valid");
                }
            }
        }
        catch(ModelNotValid e ) {
            System.out.println("Model is not valid: " + e.getMessage());
        }
    }
}