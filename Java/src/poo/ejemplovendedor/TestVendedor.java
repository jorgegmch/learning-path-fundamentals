package poo.ejemplovendedor;

public class TestVendedor {
    public static void main(String[] args) {
        System.out.println("Cantidad de vendedores: " + Vendedor.getCantVendedores());

        Vendedor v1 = new Vendedor("111", 1, 200000);
        System.out.println("La comisión del vendedor es: " + v1.calcularComision());

        Vendedor v2 = new Vendedor("222", 2, 20000000);
        System.out.println("Cantidad de vendedores: " + Vendedor.getCantVendedores());
    }
}

