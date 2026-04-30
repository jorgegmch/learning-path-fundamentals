package ciclos;

import java.util.Scanner;

/*
Se necesita un programa que lea una secuencia de nùmeros enteros ingresados por el usuario hasta que se ingrese un cero,
y al finalizar muestre la cantidad total de nùmeros leidos y la suma de todos ellos
 */

public class CycleExercise01 {
    public static void main(String[] args) {
        int num, cant, suma;
        Scanner scn = new Scanner(System.in);

        cant = 0;
        suma = 0;

        System.out.print("Ingrese un número (0 para terminar): ");
        num = scn.nextInt();

        while (num != 0) {
            ++cant;
            suma += num;

            System.out.print("Ingrese un número (0 para terminar): ");
            num = scn.nextInt();
        }

        System.out.println("Cantidad de números: " + cant);
        System.out.println("Suma de los números: " + suma);
    }
}
