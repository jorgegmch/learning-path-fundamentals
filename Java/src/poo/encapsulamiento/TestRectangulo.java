package poo.encapsulamiento;

public class TestRectangulo {
    public static void main(String[] args) {
        Rectangulo r1 = new Rectangulo();

        r1.setAnchura(0.5);
        r1.setLongitud(15);

        double area = r1.calcArea();
        double perimetro = r1.calcPerimetro();

        System.out.println(r1);
        System.out.println("=".repeat(20));
        System.out.println("El area del rectangulo es: " + area);
        System.out.println("El perimetro del rectangulo es: " + perimetro);
        System.out.println(r1);
    }
}
