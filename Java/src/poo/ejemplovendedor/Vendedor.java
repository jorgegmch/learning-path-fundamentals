package poo.ejemplovendedor;

public class Vendedor {
    // Atributos
    private String documento;
    private int tipoVendedor;
    private long ventasMes;
    private double comision;

    private static int cantVendedores = 0;

    // Constructores

    public Vendedor(String documento, int tipoVendedor, long ventasMes) {
        this.documento = documento;
        this.tipoVendedor = tipoVendedor;
        this.ventasMes = ventasMes;

        ++cantVendedores;
    }
    // Metodos
    public double calcularComision() {
        if (tipoVendedor == 1) {
            comision = ventasMes * 0.25;
        } else if (tipoVendedor == 2) {
            comision = ventasMes * 0.2;
        } else {
            System.out.println("Opción incorrecta.");
        }
        return comision;
    }

    // Métodos estáticos
    public static int getCantVendedores() {
        return cantVendedores;
    }

    /* public void calculos() {
        Math.Pi;
        Math.Sin;
    } */
}
