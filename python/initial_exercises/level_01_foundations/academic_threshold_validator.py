
# SERVICIO PARA DETERMINAR SI SE APRUEBA O REPRUEBA

import os

os.system("clear")

print("Bienvenido a la app para determinar si te van a desheredar\n")

nota1 = int(input("Ingrese su nota académica\n"))

if nota1 >= 70:
    print("Felicidades, esta vez sobreviviste.\n")
elif nota1 >= 50:
    print("Por poquito no te salvas.\n")
else:
    print("Ni le reces al de arriba porque para allá vas.\n")