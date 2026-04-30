package ciclos;

import java.util.Scanner;

/*
Construya un programa que reciba un número entero y determine si ese número es primo o no y muestre el resultado en pantalla.
 */

public class PrimeNumbers {
    public static void main(String[] args) {
        int num;
        Scanner scn = new Scanner(System.in);

        System.out.println("Ingrese un número: ");
        num = scn.nextInt();

        if (num < 2) {
            System.out.println("No es primo");
        } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
            System.out.println("Es primo");
        } else {
            boolean esPrimo = true;
            for(int i = 7; i < num; i+=2) {
                if (num % i == 0) {
                    esPrimo = false;
                    break;
                }
            }

            System.out.print( esPrimo ? "Es primo" : "No es primo" );
        }
    }
}
