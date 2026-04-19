
# TABLA DE MULTIPLICAR (VERSIÓN 2)

import os

os.system("clear")
print("APRENDAMOS A MULTIPLICAR")

isActive = True

while isActive:
    try:
        num = int(input("\nIngrese el número que desea consultar (o 0 para salir): "))
        
        if num == 0:
            print("¡Saliendo! Sigue practicando. 👋")
            isActive = False
        elif 1 <= num <= 10:
            print(f"\n✨ Tabla del {num}:")
            for i in range(1, 11):
                print(f"{num} X {i} = {num * i}")
            
            # isActive = False 
        else:
            print("❌ Por ahora solo manejamos números del 1 al 10. Intenta de nuevo.")
            
    except ValueError:
        print("⚠️ Por favor, ingresa un número válido.")