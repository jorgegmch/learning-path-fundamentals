import os

os.system("clear")

print("Bienvenido a la app para determinar su IMC\n")

peso=float(input("Ingrese su peso: "))
altura=float(input("Ingrese su altura: "))
imc=peso/(altura**2)

if imc<18.5:
    print(f"Usted se encuentra por debajo de su peso ideal y su IMC es: {imc:.2f}")
elif imc>=18.5 and imc<24.9:
    print(f"Su peso es normal y su IMC es: {imc:.2f}")
elif imc>=24.9 and imc<29.9:
    print(f"Usted tiene sobrepeso y su IMC es: {imc:.2f}")
else:
    print(f"Usted tiene obesidad y su IMC es: {imc:.2f}")