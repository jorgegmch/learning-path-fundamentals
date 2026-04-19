import os

menuLogin="""Bienvenido al programa de venta de productos
1. Registrarse
2. Iniciar sesión
3. Salir"""

menuHome="""Bienvenido al menu de inicio
1. Comprar
2. Inventario
3. Vender
4. Utilidades
5. Salir"""

isActiveLogin=True

while isActiveLogin:
    os.system("clear")
    print(menuLogin)
    option=int(input("Seleccione una opción: "))

    match option:
        case 1:
            os.system("clear")
            print("Registra tu usuario")
            userRegister=input("Ingrese su nombre de usuario: ")
            os.system("clear")
            passwordRegister=input("Ingrese su contraseña: ")
            os.system("clear")
        case 2:
            os.system("clear")
            print("Inicia sesión")
            userLogin=input("Ingrese su nombre de usuario: ")
            if userRegister == userLogin:
                os.system("clear")
                print("Usuario correcto")
                os.system("pause")
                os.system("clear")
                passwordLogin=input("Ingrese su contraseña: ")
                if passwordRegister == passwordLogin:
                    os.system("clear")
                    print("Inciaste sesión correctamente")
                    os.system("pause")
                    isActiveHome=True
                    while isActiveHome:
                        os.system("clear")
                        print(menuHome)
                        opcion=int(input("Seleccione una opción: "))
                        match opcion:
                            case 1:
                                pass
                            case 2:
                                pass
                            case 3:
                                pass
                            case 4:
                                pass
                            case 5:
                                isActiveHome=False
                            case _:
                                print("Opción no válida")
                else:
                    print("Contraseña incorrecta")
                    os.system("pause")
            else:
                print("Usuario incorrecto")
                os.system("pause")
        case 3:
            print("Gracias por usar el programa")
            break
        case _:
            print("Opción no válida")