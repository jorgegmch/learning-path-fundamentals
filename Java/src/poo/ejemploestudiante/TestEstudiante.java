package poo.ejemploestudiante;

public class TestEstudiante {
    public static void main(String[] args) {
        Estudiante e1 = new Estudiante("Brayan");

        System.out.println(e1);

        e1.setNota1(80);
        e1.setNota2(90);
        e1.setNota3(60);
        e1.calcularDefinitiva();

        System.out.println(e1);
    }
}
