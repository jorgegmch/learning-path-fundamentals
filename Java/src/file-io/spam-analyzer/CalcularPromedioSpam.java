package calculodespam;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class CalcularPromedioSpam {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        System.out.print("Ingresa el nombre del archivo: ");
        String archivo = teclado.nextLine();
        teclado.close();

        String ruta = archivo;
        String archivoSalida = "spam_recibido.txt";

        double totalSpam = 0;
        int conteo = 0;
        String correoActual = "";

        try (
                BufferedReader lector = new BufferedReader(new FileReader(ruta));
                PrintWriter escritor = new PrintWriter(new FileWriter(archivoSalida))
        ) {
            String linea;

            while ((linea = lector.readLine()) != null) {

                if (linea.startsWith("From:")) {
                    correoActual = linea.substring(5).trim();
                }

                if (linea.startsWith("X-DSPAM-Confidence:")) {
                    String[] partes = linea.split(":");
                    double confianza = Double.parseDouble(partes[1].trim());

                    totalSpam += confianza;
                    conteo++;

                    if (confianza > 0.7) {
                        escritor.println(correoActual + " " + confianza);
                    }
                }
            }

            if (conteo > 0) {
                System.out.println("Promedio de confianza de spam: " + (totalSpam / conteo));
            } else {
                System.out.println("No se encontraron registros de spam.");
            }

        } catch (IOException e) {
            System.out.println("No se pudo leer el archivo: " + e.getMessage());
        }
    }
}