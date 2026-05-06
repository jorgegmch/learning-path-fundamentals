package poo.modelobancario;

public class Cliente {
    // ATRIBUTOS
    private String dni;
    private String nombre;
    private String apellidos;

    // CONSTRUCTOR
    public Cliente(String dni, String nombre, String apellidos) {
        this.dni = dni;
        this.apellidos = apellidos;
        this.nombre = nombre;
    }

    // MÉTODOS
    public String getDni() {
        return dni;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellidos() {
        return apellidos;
    }
}
