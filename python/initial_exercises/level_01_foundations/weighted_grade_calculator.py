
# CALCULADORA DE NOTA PONDERADA

notaAcademica=float(input("Ingrese una nota academica entre 0.0 y 5.0: "))

notaFinal=notaAcademica*0.8+1
if notaAcademica>=0.0 and notaAcademica<=5.0:
    print(f"Su nota final es de: {notaFinal:.1f}")
else:
    print("La nota ingresada debe estar entre 0.0 a 5.0")