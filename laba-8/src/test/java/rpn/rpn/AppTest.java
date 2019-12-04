package test.java.rpn.rpn;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import static main.java.rpn.rpn.Main.infixToPostfix;

public class AppTest 
    extends TestCase
{

    public AppTest( String testName )
    {
        super( testName );
    }

    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    public void testApp()
    {
        assertEquals(infixToPostfix("3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3").toString(), "3 4 2 * 1 5 - 2 3 ^ ^ / + ");
        assertEquals(infixToPostfix("2 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3").toString(), "2 4 2 * 1 5 - 2 3 ^ ^ / + ");
        assertEquals(infixToPostfix("4 * 5 - 6").toString(), "4 5 * 6 - ");
    }
}
