import os

os.system("cls")

def mostrar_menu():
    print("Menú de opciones\n")
    print("1. Consultar saldo")
    print("2. Depositar dinero")
    print("3. Retirar dinero")
    print("0. Salir")

isActive=True
saldo=100000

while isActive:
    try:
        os.system("cls")
        print("BIENVENIDO A SU CAJERO BANCARROTA S.A.\n")
        mostrar_menu()
        option=int(input("\nSeleccione una opcion: "))
        print("-"*60)
        match option:
            case 1:
                print(f"\nTu saldo actual es de: {saldo:,.2f}\n")
                os.system("pause")
            case 2:
                deposito=int(input("\nIngrese el monto que desea depositar: "))
                saldo=saldo+deposito
                print(f"\nHas ingresado un monto total de: {deposito} \nTu saldo actual es de: {saldo:,.2f}\n")
                os.system("pause")
            case 3:
                retiro=int(input("\nIngrese el monto que desea retirar: "))
                if retiro>saldo:
                    print("\nSaldo insuficiente. Intente con otra cantidad.\n")
                    os.system("pause")
                else:
                    saldo=saldo-retiro
                    print(f"\nHas retirado un total de: {retiro:,.2f} \nTu saldo actual es de: {saldo:,.2f}\n")
                    os.system("pause")
            case 0:
                print("\nMUCHAS GRACIAS POR USAR CAJEROS BANCARROTA S.A.\n")
                isActive=False
            case _:
                print("\nOpción no valida. Vuelva a intentar.\n")
                os.system("pause")
    except ValueError:
        print("\nError: Solo se permiten numeros. Vuelva a intentar.\n")
        os.system("pause")