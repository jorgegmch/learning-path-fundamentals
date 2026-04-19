
# CALCULADORA DE DESPLAZAMIENTO DE TIEMPO

horaInicio = int(input("Ingrese la hora actual entre 0-23: "))
minActuales = int(input("Ingrese los minutos actuales entre 0-59: "))
minAdicionales = int(input("Ingrese los minutos que desea adicionar: "))

minTotales = minActuales + minAdicionales
if minTotales >= 60:
    horaNueva = horaInicio + (minTotales // 60)
    minNuevos = minTotales % 60
else:
    horaNueva = horaInicio
    minNuevos = minTotales

print(f"La hora que desea conocer corresponde a las: {horaNueva}:{minNuevos}")