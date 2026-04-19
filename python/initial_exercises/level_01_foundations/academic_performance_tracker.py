import os

os.system("clear")

print("BIENVENIDO AL PROGRAMA PARA CALCULAR SU PROMEDIO ACADÉMICO\n")

nota1=float(input("Ingrese la primera nota académica: "))
nota2=float(input("\nIngrese la segunda nota académica: "))
nota3=float(input("\nIngrese la tercera nota académica: "))
nota4=float(input("\nIngrese la cuarta nota académica: "))
nota5=float(input("\nIngrese la quinta nota académica: "))

promedio=(nota1+nota2+nota3+nota4+nota5)/5

if promedio>=3.5:
    print(f"\nTu promedio es de {promedio:.2f}. Felicidades, aprobaste con éxito.\n")
else:
    print(f"\nTu promedio es de {promedio:.2f}. Lo siento, reprobaste.\n")