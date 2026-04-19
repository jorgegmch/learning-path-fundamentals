import os

os.system ("clear")

print("Bienvenido a la App para conocer el precio actual de las peras, manzanas y mangos en Colombia\n")

fruta=(input("Escriba la fruta que quiera identificar (manzana, pera, mango): ")).lower()

match fruta:
    case "manzana":
        print("\nEl precio actual de las manzanas en Colombia es de 3.000 COP.")
    case "pera":
        print("\nEl precio actual de las peras en Colombia es de 4.000 COP.")
    case "mango":
        print("\nEl precio actual de los mangos en Colombia es de 8.000 COP.")
    case _:
        print("\nActualmente no tenemos esa fruta en consideración.")