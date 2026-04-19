import os

print("CONVERSOR DE MONEDA")

def mostrar_menu():
    print("\nMenú de opciones\n")
    print("1. COP → USD\n")
    print("2. USD → JPY\n")
    print("3. JPY → COP\n")
    print("4. Salir\n")

option=int
isActive=True

while isActive:
    os.system("clear")
    mostrar_menu()
    option=int(input("Ingrese una opción (1-4): "))

    if option==1:
        cop1=float(input("\nIngrese el valor que desea convertir de COP a USD: "))
        usd1=cop1*0.00025
        print(f"\nEl valor de {cop1} COP es igual a: {usd1} USD.\n")
        input("Presiona ENTER para continuar...")
    elif option==2:
        usd2=float(input("\nIngrese el valor que desea convertir de USD a JPY: "))
        jpy1=usd2*147.24
        print(f"\nEl valor de {usd2} USD es igual a: {jpy1} JPY.\n")
        input("Presiona ENTER para continuar...")
    elif option==3:
        jpy2=float(input("\nIngrese el valor que desea convertir de JPY a COP: "))
        cop2=jpy2*27.36
        print(f"\nEl valor de {jpy2} JPY es igual a: {cop2} COP.\n")
        input("Presiona ENTER para continuar...")
    elif option==4:
        print("\nMuchas gracias por usar nuestro conversor de moneda.")
        isActive=False
    else:
        print("Opción no valida.")