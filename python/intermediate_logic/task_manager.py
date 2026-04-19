
# SISTEMA DE GESTION DE TAREAS

import os

tareasPendientes = []

def menuPendientes():
    print("\nSISTEMA DE GESTIÓN DE TAREAS\n")
    print("-" * 60)
    print("\n~~ MENÚ DE OPCIONES ~~\n")
    print("1. Añadir tarea")
    print("2. Ver tareas pendientes")
    print("3. Eliminar tarea")
    print("4. Modificar tarea")
    print("5. Salir\n")
    opcion=input("Ingrese una opción (1-5): ")
    print("-" * 60)
    return opcion

def addTarea():
    tareasPendientes.append(input("\nAgregue una tarea: "))
    print(f"{tareasPendientes[-1]}, se ha añadido con éxito a su lista de pendientes.")

def verPendientes():
    if len(tareasPendientes ) == 0:
        print("\nNo hay tareas pendientes.")
    else:
        print("\nLISTADO DE TAREAS PENDIENTES\n")
        for indice, elemento in enumerate(tareasPendientes, 1):
            print(f"{indice}: {elemento}")

def eliminarTarea():
    if len(tareasPendientes ) == 0:
        print("\nNo hay tareas pendientes.")
    else:
        print("\n¿QUÉ TAREA YA HAS COMPLETADO?\n")
        for indice, elemento in enumerate(tareasPendientes, 1):
            print(f"{indice}: {elemento}")
        tareaEliminada = int(input("\nIngrese el número de la tarea a eliminar: "))
        if 0 < tareaEliminada and tareaEliminada <= len(tareasPendientes):
            tareasPendientes.pop(tareaEliminada - 1)
            print("\nTarea eliminada satisfactoriamente.")

def updateTarea():
    if len(tareasPendientes ) == 0:
        print("\nNo hay tareas pendientes.")
    
    else:
        print("\n¿QUÉ TAREA DESEAS MODIFICAR?\n")
        for indice, elemento in enumerate(tareasPendientes, 1):
            print(f"{indice}: {elemento}")
        indice = int(input("\nIngrese el número de la tarea que desea modificar: "))
        if 0 < indice and indice <= len(tareasPendientes):
            nuevaTarea = input("Ingrese el nuevo nombre de la tarea a modificar: ")
            tareasPendientes[indice - 1] = nuevaTarea
            print("\nTarea actualizada.")
    

isActive=True
while isActive:
    os.system("cls" if os.name=="nt" else "clear")
    opcIngresada = menuPendientes()

    if opcIngresada == "1":
        addTarea()
        input("\nPresione una tecla para continuar...\n")

    elif opcIngresada == "2":
        verPendientes()
        input("\nPresione una tecla para continuar...\n")

    elif opcIngresada == "3":
        eliminarTarea()
        input("\nPresione una tecla para continuar...\n")
        
    elif opcIngresada == "4":
        updateTarea()
        input("\nPresione una tecla para continuar...\n")

    elif opcIngresada == "5":
        print("\nMuchas gracias por usar el sistema de gestión de tareas.\n")
        isActive=False
    
    else:
        print("\nOpción no válida. Vuelva a intentar.")
        input("\nPresione una tecla para continuar...\n")