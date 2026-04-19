
# PROCESADOR DE PENALIACIÓN ACADÉMICA POR INASISTENCIAS

def inasis(promedio, inasistencia):
    if inasistencia >= 10 and inasistencia < 15:
        promedio = promedio - 0.5
    elif inasistencia >= 15:
        promedio = promedio - 1
    return promedio

for e in range(10):
    nomEstudiante = input(f"Ingrese el nombre del estudiante #{e+1}: ")
    inasistencia = int(input(f"Ingrese la cantidad de inasistencias del estudiante #{e+1}: "))

    suma = 0
    for n in range(3):
        nota = float(input(f"Ingrese la nota #{n+1} entre 1-10: "))
        suma = suma + nota

    promedio = suma / 3
    notaFinal = inasis(promedio, inasistencia)

    print("\n~~ RESULTADOS DEL ESTUDIANTE ~~\n")
    print(f"COD: {e+1}")
    print(f"NOMBRE: {nomEstudiante}")
    print(f"INASISTENCIAS: {inasistencia}")
    print(f"NOTA FINAL: {notaFinal:.2f}")
    input("\nPresione ENTER para continuar...\n")