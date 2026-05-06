package poo.modelobancario;

public class Movimiento {
    private final String concepto;
    private final double cantidad;

    public Movimiento(String concepto, double cantidad) {
        this.concepto = concepto;
        this.cantidad = cantidad;
    }

    public String getConcepto() {
        return concepto;
    }

    public double getCantidad() {
        return cantidad;
    }
}
