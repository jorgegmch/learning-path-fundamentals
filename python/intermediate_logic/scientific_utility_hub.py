
# CENTRO DE UTILIDADES MATEMÁTICAS Y FÍSICAS

import os

print("PROGRAMA PARA CALCULOS MATEMATICOS Y FÍSICOS\n")

def mostrarMenu():
    print("==MENÚ DE OPCIONES==\n")
    print("1. Sumar")
    print("2. Restar.")
    print("3. Factorial")
    print("4. Combinatoria")
    print("5. Triangulo de Pascal")
    print("6. Celsius a Farenheit")
    print("7. Farenheit a Celsius")
    print("8. Salir")
    option=input("\nDigite una opción (1-8): ")
    print("-"*60)
    return option

def optSumar():
    cantidad=int(input("\n¿Cuántos números desea sumar?: "))
    suma=0
    for i in range(cantidad):
        numero=float(input("Sumando... Ingrese un número: "))
        suma=suma+numero
    return suma

def optRestar():
    cantidad=int(input("\n¿Cuántos números desea restar?: "))
    resta=0
    for i in range(cantidad):
        numero=float(input("Restando... Ingrese un número: "))
        resta=resta-numero
    return resta

def factorial(n):
    if n<0:
        return -1
    elif n==0:
        return 1
    else:
        f = 1
        for i in range(1, n+1):
            f=f*i
        return f

def optFactorial():
    num = int(input("\nIngrese un número entero para hallar su factorial: "))
    return factorial(num)

def optCombi():
    num1=int(input("\nIngrese un número entero positivo para el total de elementos (n): "))
    num2=int(input("Ingrese un número entero positivo menor que (n) para los elementos a elegir (k): "))
    if num1>=num2:
        resultado=factorial(num1)//(factorial(num2)*factorial(num1-num2))
    else:
        resultado=0
    return resultado

def combi(n, k):
    if n>=k:
        resultado=factorial(n)//(factorial(k)*factorial(n-k))
    else:
        resultado=0
    return resultado

def optPascal():
    num=int(input("\nIngrese el valor de la base del triangulo: "))
    if num<1:
        print("No se puede calcular.")
    else:
        for fila in range(num):
            for col in range(fila+1):
                print(f"{combi(fila, col)}", end=" ")
            print("")

def optCelsiusFahrenheit(celsius):
    return (celsius * 9/5) + 32

def optFahrenheitCelsius (fahrenheit):
    return (fahrenheit - 32) * 5/9

isActive=True
while isActive:
    os.system("cls" if os.name == "nt" else "clear")
    optEntered=mostrarMenu()
    
    if optEntered=="1":
        resultado=optSumar()
        print(f"\nEl resultado de la suma de los números es igual a: {resultado:.1f}\n")
        os.system("pause")

    elif optEntered=="2":
        resultado=optRestar()
        print(f"\nEl resultado de la restada de los números es igual a: {resultado:.1f}\n")
        os.system("pause")
    
    elif optEntered=="3":
        resultado=optFactorial()
        print(f"\nEl factorial es: {resultado}\n")
        os.system("pause")
    
    elif optEntered=="4":
        resultado=optCombi()
        if resultado==0:
            print("\nNo se puede calcular la combinatoria. Verifica que 0 <= k <= n y que los valores sean enteros positivos.")
            os.system("pause")
        else:
            print(f"\nLa combinatoria es: {resultado}\n")
            os.system("pause")

    elif optEntered=="5":
        optPascal()
        os.system("pause")
    
    elif optEntered=="6":
        celsius=float(input("\nIngrese la temperatura en Celsius (°C): "))
        f=optCelsiusFahrenheit(celsius)
        print(f"\nEl total de {celsius}°C es igual a: {f}°F \n")
        os.system("pause")

    elif optEntered=="7":
        fahrenheit=float(input("\nIngrese la temperatura en Fahrenheit (°F): "))
        c=optFahrenheitCelsius(fahrenheit)
        print(f"\nEl total de {fahrenheit}°F es igual a: {c}°C\n")
        os.system("pause")

    elif optEntered=="8":
        print("\nGracias por usar el programa. Vuelva pronto.\n")
        isActive=False
    
    else:
        print("\nOpción no válida")
        os.system("pause")