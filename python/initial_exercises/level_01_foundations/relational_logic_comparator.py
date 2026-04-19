
# APP PARA COMPARAR LA SUPERIORIDAD ENTRE 2 NÚMEROS

import os

os.system("cls")

print("Bienvenido al programa para comparar números\n")

num1=int(input("Escriba el valor del primer número\n"))
num2=int(input("Escriba el valor del segundo número\n"))

print(f"El primer número es mayor que el segundo {num1>num2}")
print(f"El primer número es menor que el segundo {num1<num2}")
print(f"El primer número es igual al segundo {num1==num2}")
print(f"El primer número es mayor o igual que el segundo {num1>=num2}")
print(f"El primer número es menor o igual que el segundo {num1<=num2}")