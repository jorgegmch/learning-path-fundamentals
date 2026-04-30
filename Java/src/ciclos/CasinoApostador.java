package ciclos;

import java.security.SecureRandom;
import java.util.Scanner;

/*
Un apostador asiduo tiene la costumbre de apostar si atina al número que resulta al tirar un dado. Si lo logra,
gana $5.00; en caso contrario, pierde $1.00. COmienza con $7.00 y el juego termina cuando gana &6.00 o pierde todo su capital.
 */

public class CasinoApostador {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        SecureRandom random = new SecureRandom();

        int CAPITAL = 7;
        int PIERDE = 1;
        int GANA = 5;

        while (CAPITAL > 0 && CAPITAL < 13) {
            System.out.println("Capital: " + CAPITAL);

            int numElegido;
            do {
                System.out.println("ELija un número (1-6): ");
                numElegido = scn.nextInt();
            } while (numElegido < 1 || numElegido > 6);

            // Simular el dado
            int dado = random.nextInt(6) + 1;
            System.out.println("Dado cayó: " + dado);

            // Validar apuesta
            if (numElegido == dado) {
                CAPITAL += GANA;
                System.out.println("Ganaste!!!! $" + GANA);
            } else {
                CAPITAL -= PIERDE;
                System.out.println("Perdiste $" + PIERDE);
            }
        }

        if (CAPITAL > 13) System.out.println("Tu capital es: " + CAPITAL);
        else System.out.println("Lo perdiste todo. Ve a Campus a aprender a apostar");

        scn.close();
    }
}
