
# MENÚ GEOMÉTRICO 

import os

os.system("cls" if os.name=="nt" else "clear")

def menuGeometrico():
    print("GEOMETRÍA EUCLIDIANA\n")
    print("** MENÚ OPCIONES **")
    print("1. Área de un triangulo")
    print("2. Área de un círculo")
    print("3. N-ésimo término de Fibonacci")
    print("4. Los 100 primeros números primos")
    print("5. Cálculo del número PI")
    print("0. Salir\n")
    opcion=input("Digite 0 para salir o ingrese una opción (1-5): ")
    print("-"*60)
    return opcion

def areaTriangulo():
    base=int(input("\ningrese la base: "))
    altura=int(input("ingrese la altura: "))
    a=(base*altura)/2
    print (f"\nEl area del triangulo es de {a}")

def areaCirculo():
    radio=float(input("\nIngrese el valor del radio: "))
    areaCirculo=3.1416*radio**2
    print(f"\nEl area del circulo: {areaCirculo:.2f}")

def nesimoFibonacci():
    n = int(input("\nIngrese el valor de n: "))
    a, b = 0, 1
    for _ in range(n-1):
        a, b = b, a + b
    print(f"\nEl término número {n} de Fibonacci es: {a}")

def numPrimos(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def imprimirPrimos(cantidad):
    contador = 0
    numero = 2
    while contador < cantidad:
        if numPrimos(numero):
            print(numero, end=" ")
            contador += 1
        numero += 1
    print()

def calcularPI(n):
    pi=0
    for i in range(n):
        pi += ((-1)**i)/(2*i +1)
    return 4 * pi

isActive=True
while isActive:
    os.system("cls" if os.name=="nt" else "clear")
    opcIngresada=menuGeometrico()

    if opcIngresada=="1":
        areaTriangulo()
        input("\nPresione ENTER para continuar...\n")

    elif opcIngresada=="2":
        areaCirculo()
        input("\nPresione ENTER para continuar...\n")

    elif opcIngresada=="3":
        nesimoFibonacci()
        input("\nPresione ENTER para continuar...\n")

    elif opcIngresada=="4":
        imprimirPrimos(100)
        input("\nPresione ENTER para continuar...\n")

    elif opcIngresada=="5":
        PIProx= calcularPI(100000)
        print(f"\n{PIProx:.8f}")
        input("\nPresione ENTER para continuar...\n")

    elif opcIngresada=="0":
        print("\nMuchas gracias por usar el programa para calculos geométricos.\n")
        isActive=False

    else:
        print("\nError: ¡Opción no válida! Vuelva a intentar.")
        input("\nPresione ENTER para continuar...\n")