package poo.encapsulamiento.valladolid.ejercicio.racionales;

public class TestRacional {
    public static void main(String[] args) {
        Racional r1 = new Racional();

        r1.setP(3);
        r1.setQ(21);
        System.out.println(r1);

        Racional r2 = new Racional(6, 7);
        System.out.println(r1.suma(r2));

        r1.setP(1);
        r1.setQ(7);
        System.out.println(r1.suma(new Racional(5, 2)));
    }
}
