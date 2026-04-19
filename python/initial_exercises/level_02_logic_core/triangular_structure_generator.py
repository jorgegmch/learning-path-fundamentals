import os

isActive=True
while isActive:
    os.system("clear")
    print("Bienvenido al generador de triangulos de *")
    try:
        n=int(input("\nSi desea salir presione 0, sino ingrese la cantidad de * que tendrá la base del triangulo: "))
        if n==0:
            isActive=False
            print("\nGracias por usar el programa.\n")
        elif n>1:
            for i in range(1,n+1):
                print("*"*i)
            input("\nPresione ENTER para continuar...")
        else:
            print("\nNo existe un triangulo con base 1 o menor.")
            input("\nPresione ENTER para continuar...")
    except ValueError:
        print("\nDebe ingresar un número entero.")
        input("\nPresione ENTER para continuar...")