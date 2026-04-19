
# CONVERTIDOR DE TEMPERATURA

import os

os.system("cls")

def celsius_a_fahrenheit (celsius):
    return (celsius * 9/5) + 32

def fahrenheit_a_celsius (fahrenheit):
    return (fahrenheit - 32) * 5/9

def mostrar_menu():
    print ("Bienvenido al convertidor de temperatura\n")
    print ("Menú de opciones\n")
    print ("1. Celsius a Fahrenheit\n")
    print ("2. Fahrenheit a Celsius\n")
    print ("3. Salir\n")

while True:
    mostrar_menu()
    opción=input("Selecciona una opción (1/2/3): ")

    if opción=="1":
        c=float(input("\nIngresa la temperatura en Celsius: "))
        f=celsius_a_fahrenheit(c)
        print(f"{c}°C son {f:.2f}°F\n")

    elif opción=="2":
        f=float(input("\nIngresa la temperatura en Fahrenheit: "))
        c=fahrenheit_a_celsius(f)
        print(f"{f}°F son {c:.2f}°C\n")

    elif opción=="3":
        print("\n¡Adios ilustre persona!\n")
        break

    else:
        print("\nOpción no válida. Lo que tienes de feo lo tienes de menso. \n")