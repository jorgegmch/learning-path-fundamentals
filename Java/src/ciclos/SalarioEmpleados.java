package ciclos;


import java.util.Scanner;

/*
En una empresa de computadoras, los salarios de los empleados se aumentarán según su contrato actual:

CONTRATO:
0 a 9000 dólares -> 20%
9001 a 15000 dólares -> 10%
15001 a 20000 dólares -> 5%
más de 20000 dólares -> 0%

Escribir un programa que solicite el salario actual de cada empleado y que, además, calcule y visualice el nuevo salario.
 */

public class SalarioEmpleados {
    public static void main(String[] args) {
        double salario = 0;
        double aumento = 0;
        double nuevoSalario = 0;

        System.out.println("Ingrese el valor del salario a calcular (presione 0 para salir): ");
        Scanner scn = new Scanner(System.in);
        salario = scn.nextDouble();

        while (salario != 0) {
            scn.nextLine();
            String nombre = "";
            System.out.println("Ingrese el nombre del empleado: ");
            nombre = scn.nextLine();

            if (salario <= 9000) {
                aumento = salario * 0.20;
                nuevoSalario = salario + aumento;

            } else if (salario <= 15000) {
                aumento = salario * 0.10;
                nuevoSalario = salario + aumento;
            }  else if (salario <= 20000) {
                aumento = salario * 0.05;
                nuevoSalario = salario + aumento;
            } else {
                nuevoSalario = salario + 0;
                System.out.println("El salario para " + nombre + " permanece en " + nuevoSalario + " COP");
            }

            System.out.println("El nuevo salario para " + nombre + " es de " + nuevoSalario + " COP");

            System.out.println("Ingrese el valor del salario a calcular (presione 0 para salir): ");
            salario = scn.nextDouble();
        }
    }
}
