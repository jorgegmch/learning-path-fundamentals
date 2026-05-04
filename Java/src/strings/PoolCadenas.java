package strings;

public class PoolCadenas {
    public static void main(String[] args) {
        String s1 = "Campus lands";
        String s2 = "Campus lands";

        System.out.println("s1: " + System.identityHashCode(s1));
        System.out.println("s2: " + System.identityHashCode(s2));

        s2 = "Campus LANDS";
        System.out.println("s1: " + System.identityHashCode(s1));
        System.out.println("s2: " + System.identityHashCode(s2));

        s1 = "Campuslands";
        System.out.println("s1: " + System.identityHashCode(s1));

        char letra = s1.charAt(2);
        System.out.println("Letra ");
    }
}
