package poo.modelobancario;

public class BancoMain {
    public static void main(String[] args) {
        Cliente c1 = new Cliente("10830df", "Antonio", "Martínez");

        Cuenta cuenta1 = new Cuenta("545466", c1);
        Cuenta cuenta2 = new Cuenta("987951", c1);

        Movimiento m1 = new Movimiento("Pago de nómina abril", 2000000.0);
        cuenta1.asignarMovimiento(m1);

        Movimiento m2 = new Movimiento("Retiro en cajero automático", -500000.0);
        cuenta2.asignarMovimiento(m2);

        System.out.println("Número de cuenta: " + cuenta1.getNumero()
                + " | Titular: " + cuenta1.getTitular().getNombre()
                + " | Saldo: " + cuenta1.getSaldo());

        System.out.println("Número de cuenta: " + cuenta2.getNumero()
                + " | Titular: " + cuenta2.getTitular().getNombre()
                + " | Saldo: " + cuenta2.getSaldo());
    }
}
