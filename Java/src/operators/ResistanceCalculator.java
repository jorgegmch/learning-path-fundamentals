package operators;

import javax.swing.*;
import java.awt.*;

public class ResistanceCalculator extends JFrame {

    private final JTextField txtr1     = new JTextField(8);
    private final JTextField txtr2     = new JTextField(8);
    private final JTextField txtr3     = new JTextField(8);
    private final JTextField txtResult = new JTextField(10);
    private final JButton    btnCalcular = new JButton("Calcular");

    public ResistanceCalculator() {
        setTitle("Resistencia en Paralelo");
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JPanel panel = new JPanel(new GridBagLayout());
        panel.setBorder(BorderFactory.createEmptyBorder(20, 30, 20, 30));
        GridBagConstraints c = new GridBagConstraints();
        c.insets = new Insets(6, 6, 6, 6);

        // Fila 0 — Labels
        c.gridy = 0;
        c.gridx = 0; panel.add(new JLabel("R1"), c);
        c.gridx = 1; panel.add(new JLabel("R2"), c);
        c.gridx = 2; panel.add(new JLabel("R3"), c);

        // Fila 1 — TextFields + Botón
        c.gridy = 1;
        c.gridx = 0; panel.add(txtr1, c);
        c.gridx = 1; panel.add(txtr2, c);
        c.gridx = 2; panel.add(txtr3, c);
        c.gridx = 3; panel.add(btnCalcular, c);

        // Fila 2 — Resultado
        c.gridy = 2; c.gridx = 0;
        c.gridwidth = 4;
        panel.add(new JLabel("Resultado"), c);

        c.gridy = 3;
        c.fill = GridBagConstraints.HORIZONTAL;
        txtResult.setEditable(false);
        txtResult.setBackground(new Color(255, 255, 204));
        panel.add(txtResult, c);

        add(panel);
        pack();
        setLocationRelativeTo(null);

        btnCalcular.addActionListener(e -> calcular());
    }

    private void calcular() {
        try {
            double r1 = Double.parseDouble(txtr1.getText().trim());
            double r2 = Double.parseDouble(txtr2.getText().trim());
            double r3 = Double.parseDouble(txtr3.getText().trim());

            if (r1 == 0 || r2 == 0 || r3 == 0) {
                JOptionPane.showMessageDialog(this,
                        "No se puede dividir entre cero.",
                        "Error", JOptionPane.ERROR_MESSAGE);
                return;
            }

            txtResult.setText(String.format("%.3f",
                    1.0 / (1.0/r1 + 1.0/r2 + 1.0/r3)));

        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this,
                    "Ingresa solo valores numéricos.",
                    "Entrada inválida", JOptionPane.WARNING_MESSAGE);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() ->
                new ResistanceCalculator().setVisible(true));
    }
}