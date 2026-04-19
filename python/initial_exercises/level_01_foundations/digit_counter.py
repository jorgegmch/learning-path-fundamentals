
# CONTADOR DE DIGITOS

import os
os.system("cls" if os.name=="nt" else "clear")

print("CONTADOR DE DIGITOS\n")

num=int(input("Ingrese un número entero positivo: "))
contador=0
while num > 0:
    num=num//10
    contador=contador+1
print(f"\nEl número tiene {contador} digitos.\n")