package strings;

public class MetodosCadena {
    public static void main(String[] args) {
        //01234567890123456789
        String s1 = new String("Mañana es festivo");

        System.out.println("Longitud: " + s1.length());
        System.out.println(s1.substring(7)); // Desde la posición  al final
        System.out.println(s1.substring(7, 10)); // Desde la posición 7 hasta la 10-1

        System.out.println(s1.isEmpty()); // Si está vacia
        System.out.println("     ".isEmpty() + " <-> " + "      ".isBlank()); // isBlank: true -> vacia o solo tiene espacios

        System.out.println("Posición de 'es': " + s1.indexOf("es"));
        System.out.println("Posición de 'es': " + s1.indexOf("es", 12));

        System.out.println("Posición de 'es': " + s1.lastIndexOf("es"));
        System.out.println("Está viernes: " + s1.contains("viernes"));

        // agregar ejemplos de startWith() y endsWith()

        System.out.println("java".equals("JAvA")); // No discrimina entre mayusculas y minusculas

        System.out.println("java".compareTo("pava")); // -6 -> "java" > "pava"
        System.out.println(s1.replace("Mañana", "Hoy")); // Reemplaza
        System.out.println(s1.replace("/[Mm]añana/", "Hoy"));
    }
}
