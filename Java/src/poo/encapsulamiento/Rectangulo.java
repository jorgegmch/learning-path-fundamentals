package encapsulamiento;

public class Rectangulo {
    // ATRIBUTOS
    private double longitud;
    private double anchura;

    // CONSTRUCTORES
    public Rectangulo() {
        longitud = anchura = 0.0;
    }

    public Rectangulo(double longitud, double anchura) {
        this.longitud = longitud;
        this.anchura = anchura;
    }

    // GETTER AND SETTER

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(double longitud) {
        if (longitud > 0 && longitud <= 20.0) {
            this.longitud = longitud;
        }

    }

    public double getAnchura() {
        return anchura;
    }

    public void setAnchura(double anchura) {
        if (anchura > 0 && anchura <= 20.0) {
            this.anchura = anchura;
        }
    }

    // OTROS MÉTODOS

    @Override
    public String toString() {
        return "Rectangulo{" +
                "longitud=" + longitud +
                ", anchura=" + anchura +
                '}';
    }

    public double calcPerimetro() {
        return 2.0 * (longitud + anchura);
    }

    public double calcArea() {
        return longitud * anchura;
    }
}
