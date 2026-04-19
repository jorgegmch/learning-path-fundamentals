import os

os.system("clear")

print("Bienvenido al programa para determinar la superioridad entre 3 números\n")

numero1=float(input("Ingrese el valor del primero número: "))
numero2=float(input("\nIngrese el valor del segundo número: "))
numero3=float(input("\nIngrese el valor del tercer número: "))

if numero1>=numero2 and numero2>=numero3:
    mayor=numero1
elif numero2>=numero1 and numero1>=numero3:
    mayor=numero2
else:
    mayor=numero3
    print(f"\nEl número mayor es {mayor}.")