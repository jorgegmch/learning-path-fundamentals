import os
import random

x=random.randint(1,10)
print(x)

isActive=True
while isActive:
    os.system("clear")
    print("Bienvenido al minijuego para adivinar un número entre 1 y 10")

    numero=int(input("\nIngrese el número que usted crea que va a salir: "))
    if numero==x:
        print("\n¡Felicidades! Has adivinado el número.")
        isActive=False
        input("Presiona ENTER para continuar...")
    else:
        print("\nLo siento, vuelve a intentar.")
        input("Presiona ENTER para continuar...")