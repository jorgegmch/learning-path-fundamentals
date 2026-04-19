
# GESTOR DE PELICULAS CON PERSISTENCIA DE DATOS (JSON)

import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(BASE_DIR, 'peliculas.json')

CYAN = '\033[96m'
MAGENTA = '\033[95m'
GREEN = '\033[92m'
RESET = '\033[0m'
BOLD = '\033[1m'


def cargar_peliculas():
    
    try:
        if not os.path.exists(JSON_PATH):
            print(f"{MAGENTA}Error: No se encontró '{JSON_PATH}'{RESET}")
            return None

        with open(JSON_PATH, 'r', encoding='utf-8') as archivo:
            return json.load(archivo)

    except json.JSONDecodeError as e:
        print(f"{MAGENTA}Error de formato en el JSON: {e}{RESET}")
        return None
    except Exception as e:
        print(f"{MAGENTA}Error inesperado: {e}{RESET}")
        return None

def limpiar_pantalla():
    os.system('cls' if os.name == 'nt' else 'clear')

def mostrar_header():
    print(f"{CYAN}{'=' * 60}{RESET}")
    print(f"{CYAN}🎬 {RESET}{BOLD}NETFLIX CONSOLE v2.0{RESET}{CYAN} {' ' * 21} 🎬{RESET}")
    print(f"{CYAN}{'=' * 60}{RESET}")

def mostrar_menu_principal():
    print(f"\n{BOLD}¿Qué deseas explorar hoy?{RESET}")
    print(f"{CYAN}{'-' * 35}{RESET}")
    menu = [
        "1. Acción", "2. Comedia", "3. Terror",
        "4. Romance", "5. Ciencia Ficción", "6. Buscar Película",
        "7. Top 10", "8. Mis Favoritas", "9. Estadísticas",
        "0. Salir"
    ]
    for i in range(0, len(menu), 2):
        print(f"{menu[i]:<20} {menu[i+1] if i+1 < len(menu) else ''}")
    print(f"{CYAN}━{RESET}" * 35)

def mostrar_peliculas_genero(peliculas, genero, nombre_genero):
    limpiar_pantalla()
    mostrar_header()
    print(f"{GREEN}📂 CATEGORÍA: {nombre_genero.upper()}{RESET}\n")
    
    lista = peliculas.get(genero, [])
    if not lista:
        print("No hay películas en esta categoría.")
        return None

    print(f"{BOLD}{'ID':<4} {'TÍTULO':<35} {'AÑO':<6} {'RATING':<8}{RESET}")
    print(f"{CYAN}{'-' * 60}{RESET}")
    
    for i, p in enumerate(lista, 1):
        titulo = p['titulo']
        if len(titulo) > 32:
            titulo = titulo[:29] + "..."
        print(f"{i:<4} {titulo:<35} {p['año']:<6} {p['rating']:<8}")
    
    print(f"{CYAN}{'-' * 60}{RESET}")
    print(f"{BOLD}{len(lista) + 1}.{RESET} Volver al menú")

    return seleccionar_pelicula_genero(lista)

def seleccionar_pelicula_genero(lista_peliculas):
    while True:
        try:
            limite = len(lista_peliculas)
            opcion = input(f"\nSelecciona una película {BOLD}(1-{limite}){RESET} o {BOLD}{limite+1}{RESET} para volver: ").strip()
            
            if opcion == str(limite + 1):
                return None
            
            idx = int(opcion) - 1
            if 0 <= idx < limite:
                return lista_peliculas[idx]
            else:
                print(f"Error: Elige entre 1 y {limite + 1}")
        except ValueError:
            print("Por favor, ingresa un número válido.")

def mostrar_estadisticas_carga(peliculas):
    print(f"\n{GREEN}{BOLD}ANÁLITICA DEL SISTEMA{RESET}")
    print(f"{CYAN}{'=' * 30}{RESET}")
    
    total = 0
    mejor_p = None
    mejor_r = 0

    for gen, lista in peliculas.items():
        print(f"{gen.replace('_', ' ').title():<20}: {len(lista)} items")
        total += len(lista)
        for p in lista:
            if p['rating'] > mejor_r:
                mejor_r = p['rating']
                mejor_p = p

    print(f"{CYAN}{'-' * 30}{RESET}")
    print(f"Total global: {BOLD}{total}{RESET}")
    if mejor_p:
        print(f"Joyita del catálogo: {BOLD}{mejor_p['titulo']}{RESET} ({mejor_r}/10)")
    print(f"{CYAN}{'=' * 30}{RESET}")

def procesar_seleccion_genero(peliculas, genero, nombre):
    while True:
        seleccionada = mostrar_peliculas_genero(peliculas, genero, nombre)
        if seleccionada is None:
            break
        
        print(f"\n{GREEN}» Seleccionaste:{RESET} {BOLD}{seleccionada['titulo']}{RESET}")
        print(f"{CYAN}Detalles:{RESET} {seleccionada.get('sinopsis', 'Sin descripción.')}")
        pausar()

def obtener_opcion_usuario():
    while True:
        opcion = input(f"\n{CYAN}»{RESET} Elige una opción: ").strip()
        if opcion in [str(i) for i in range(10)]:
            return opcion
        print("Opción no válida.")

def pausar():
    input(f"\n{CYAN}Presiona Enter para continuar...{RESET}")

def main():
    limpiar_pantalla()
    print(f"{GREEN}Iniciando sistema...{RESET}")
    
    peliculas = cargar_peliculas()
    if not peliculas:
        print(f"{MAGENTA}Fallo crítico en la base de datos.{RESET}")
        return

    while True:
        limpiar_pantalla()
        mostrar_header()
        mostrar_menu_principal()
        
        op = obtener_opcion_usuario()

        if op == "0":
            print(f"\n{GREEN}¡Cerrando sesión! Disfruta tu película.{RESET}")
            break
        elif op == "1": procesar_seleccion_genero(peliculas, "accion", "Acción")
        elif op == "2": procesar_seleccion_genero(peliculas, "comedia", "Comedia")
        elif op == "3": procesar_seleccion_genero(peliculas, "terror", "Terror")
        elif op == "4": procesar_seleccion_genero(peliculas, "romance", "Romance")
        elif op == "5": procesar_seleccion_genero(peliculas, "ciencia_ficcion", "Ciencia Ficción")
        elif op == "9":
            limpiar_pantalla()
            mostrar_header()
            mostrar_estadisticas_carga(peliculas)
            pausar()
        else:
            print(f"\n{MAGENTA}🚧 Módulo en desarrollo...{RESET}")
            pausar()

if __name__ == "__main__":
    main()