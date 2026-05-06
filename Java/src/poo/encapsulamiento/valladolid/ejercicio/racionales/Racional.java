package poo.encapsulamiento.valladolid.ejercicio.racionales;

public class Racional {
    // Q: p/q donde p, q e Z
    private int p, q;

    public Racional() {
        p = 0;
        q = 1;
    }

    public Racional(int p, int q) {
        this.p = p;
        // this.q = validarQ(q) ? q : 1;
        setQ(q);
        simplificar();
    }

    private boolean validarQ(int q) {
        if (q == 0) {
            System.out.println(">>> Error. El denominador no puede ser cero. \n\n");
            return false;
        }
        return true;
    }

    public int getP() {
        return p;
    }

    public int getQ() {
        return q;
    }

    public void setP(int p) {
        this.p = p;
        simplificar();
    }

    public void setQ(int q) {
        this.q = validarQ(q) ? q : 1;
        simplificar();
    }

    private void simplificar() {
        int divComun = calcularMCD(p, q);

        int numSim = p / divComun;
        int denSim = q / divComun;

        // Z: 1/3, 5/2, -3/4, no es comÃºn 3/-4
        if (denSim < 0) {
            // Si el denominador es negativo, entonces colocar el negativo en el numerador
            numSim = -numSim;
            denSim = -denSim;
        }
        p = numSim;
        q = denSim;
    }

    private int calcularMCD(int p, int q) {
        // El algoritmo de Euclides para MCD
        if (q == 0)
            return p;
        return calcularMCD(q, p % q);
    }

    @Override
    public String toString() {
        if (p == 0) return "0";
        if (q == 1) return String.valueOf(p);
        if (p == q) return "1";
        return p + "/" + q;
    }

    public Racional suma(Racional r2) {
        int qtemp = q;

        q = q * r2.getQ();
        p = p * r2.getQ() + r2.getP() * qtemp;
        simplificar();

        return this;
    }
}
