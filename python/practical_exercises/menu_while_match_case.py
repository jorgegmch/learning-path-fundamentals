import os

os.system ("clear")

while True:
    opcion=int(input("Ingrese una opción (1-3): "))
    match opcion:
        case 1:
            print("Has elegido la opción 1")
        case 2:
            print("Has elegido la opción 2")
        case 3:
            print("Has elegido la opción 3")
        case _:
            print("Opción no valida. Vuelva a intentar.")