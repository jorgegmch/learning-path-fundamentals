import os
import random

aleatorio = random.random()
if aleatorio < 0.5:
    aleatorioMoneda = "cara"
else:
    aleatorioMoneda = "sello"
print(aleatorio)

isActive = True
while isActive:
    os.system("cls")
    print("Bienvenido al programa de monedas aleatorias")
    usarioMoneda = input("Ingrese la opcion de la moneda que desea (cara o sello): ").lower()
    if aleatorioMoneda == usarioMoneda:
        print("\nFelicidades, adivinaste la moneda")
        isActive = False
        os.system("pause")
    else:
        print("\nLo siento, intenta de nuevo")
        os.system("pause")