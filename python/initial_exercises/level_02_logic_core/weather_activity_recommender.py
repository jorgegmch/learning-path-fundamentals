
# SERVICIO DE RECOMENDACIONES SEGÚN EL TIPO DE CLIMA

import os

os.system("clear")

print("Bienvenido a la app de recomendaciones para cada tipo de clima\n")

def mostrar_menu():
    print("\nMenú de opciones\n")
    print("1. Soleado\n")
    print("2. Nublado\n")
    print("3. Lluvioso\n")
    print("4. Nevado\n")
    print("5. Salir\n")

opcion = int

while True:
    presupuesto = int(input("Ingrese su presupuesto actual sin puntos, ni comas: \n"))

    mostrar_menu()
    opcion = int(input("Seleccione una opción (1/2/3/4/5): "))

    if opcion == 1 and presupuesto > 50000:
        print("Te recomendamos comprar unas cervecitas e ir a playa con tus amigos.\n")
    elif opcion == 1 and presupuesto <= 50000:
        print("Sal con un amigo o tu pareja a un centro comercial y disfruten de un helado juntos\n")

    elif opcion == 2 and presupuesto > 50000:
        print("Para los días nublados es recomendable usar ropa abrigadora y según tu presupuesto podrías ir a comer lo que gustes con un amigo o pareja.\n")
    elif opcion == 2 and presupuesto <= 50000:
        print("Use ropa abrigadora y prepare algo de comer en casa.\n")

    elif opcion == 3 and presupuesto > 50000:
        print("Utilice ropa muy abrigada para evitar un resfrío, pida mucha comida a domicilio, invita a su pareja o a un amigo y disfrute de una buena película.\n")
    elif opcion == 3 and presupuesto <= 50000:
        print("Utilice ropa muy abrigada para evitar un resfrío, cocine algo rico en casa y disfrute de una buena película.\n")

    elif opcion == 4 and presupuesto > 50000:
        print("Prenda la chimenea, use ropa abrigadora y mantas para el frío, pida mucha comida a domicilio para que no tenga que cocinar y siéntese a leer un buen libro con una taza de café.\n")
    elif opcion == 4 and presupuesto <= 50000:
        print("Prenda la chimenea, prepare una taza de café, lea un buen libro y mejor ahorre su dinero.\n")

    elif opcion == 5:
        print("Gracias por confiar en nuestras recomendaciones. Vuelva pronto.\n")
        break

    else:
        print("Opción incorrecta. Vuelva a intentarlo.\n")