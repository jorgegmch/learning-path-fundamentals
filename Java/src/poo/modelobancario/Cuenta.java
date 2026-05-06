package poo.modelobancario;

public class Cuenta {
    private final String numero;
    private Cliente titular;
    private Movimiento ultimoMovimiento;
    private double saldo;

    public Cuenta(String numero, Cliente titular) {
        this.numero = numero;
        this.titular = titular;
        this.ultimoMovimiento = null;
        this.saldo = 0;
    }

    public void asignarMovimiento(Movimiento ultimoMovimiento) {
        this.ultimoMovimiento = ultimoMovimiento;
        this.saldo = this.saldo + ultimoMovimiento.getCantidad();
    }

    public String getNumero() {
        return numero;
    }

    public Cliente getTitular() {
        return this.titular;
    }

    public double getSaldo() {
        return saldo;
    }
}
