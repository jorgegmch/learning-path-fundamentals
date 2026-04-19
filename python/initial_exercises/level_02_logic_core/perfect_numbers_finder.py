
# BUSCADOR DE NÚMEROS PERFECTOS

import os

os.system("cls" if os.name=="nt" else "clear")

def es_perfecto(n):
    suma = 1
    for i in range(2, n // 2 + 1):
        if n % i == 0:
            suma += i
    return suma == n and n != 1


print("Números perfectos entre 1 - 1,000,000:")

for numero in range(2, 1_000_001):
    if es_perfecto(numero):
        print(numero)