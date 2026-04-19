
# CALCULADORA DE ÁREAS

import os

def mostrarMenu():
    print("CALCULADORA DE ÁREAS")
    print("\n=== MENÚ PRINCIPAL ===")
    print("1. Área de un rectángulo")
    print("2. Área de un círculo")
    print("3. Área de un cuadrado")
    print("4. Área de un triángulo")
    print("5. Salir")
    opcion=input("\nIngrese una opción (1-5): ")
    print("-"*60)
    return opcion

def areaRectangulo(base, altura):
    base=float(input("\nIngrese la base del rectángulo en cm: "))
    altura=float(input("Ingrese la altura del rectángulo en cm: "))
    areaRectangulo=base*altura
    print(f"\nEl área del rectángulo es igual a: {areaRectangulo:.2f}")
    input("\nPresione ENTER para continuar...")
    
def areaCirculo():
    radio=float(input("\nIngrese el valor del radio: "))
    areaCirculo=3.1416*(radio**2)
    print(f"\nEl area del circulo: {areaCirculo:.2f}")
    input("\nPresione ENTER para continuar...")
    
def areaCuadrado():
    lado=float(input("\nIngrese el valor de uno de sus lados: "))
    areaCuadrado=lado**2
    print(f"\nEl área del cuadrado es igual a: {areaCuadrado:.2f} ")
    input("\nPresione ENTER para continuar...")
    
def areaTriangulo():
    base=float(input("\nIngrese la base: "))
    altura=float(input("Ingrese la altura: "))
    areaTriangulo=(base*altura)/2
    print (f"\nEl area del triangulo es de {areaTriangulo:.2f}")
    input("\nPresione ENTER para continuar...")
    
isActive=True
while isActive:
    os.system("cls" if os.name=="nt" else "clear")
    opcIngresada=mostrarMenu()
    
    if opcIngresada=="1":
        areaRectangulo()
        
    elif opcIngresada=="2":
        areaCirculo()
    
    elif opcIngresada=="3":
        areaCuadrado()
    
    elif opcIngresada=="4":
        areaTriangulo()
    
    elif opcIngresada=="5":
        print("Muchas gracias por usar la calculadora para áreas.")
        
    else:
        print("Opción no válida.")