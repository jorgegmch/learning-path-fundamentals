import os
books = []

def clear_screen():
    os.system("cls" if os.name=="nt" else "clear")

def title():
    print("GESTOR DE BIBLIOTECA PERSONAL")
    print("-" * 40)

def menu():
    try:
        clear_screen()
        title()
        print("\n~~ MENÚ DE OPCIONES ~~\n")
        print("1. Agregar libros")
        print("2. Ver biblioteca")
        print("3. Buscar libros")
        print("4. Cambiar estado (leído/no leído)")
        print("5. Estadísticas de lectura")
        print("6. Eliminar libros")
        print("0. Salir\n")
        choice = input("Ingrese una opción (0-6): ")
        return choice
    except ValueError:
        print("\nError: Debe ingresar un número entre 0 y 6. Intente nuevamente.")
        input("\nPresione ENTER para continuar...")

def add_books():
    try:
        clear_screen()
        print("AGREGAR LIBROS")
        print("-" * 50)
        book_title = input("\nTítulo: ").upper()
        author = input("Autor: ").title()
        book_genre = input("Género literario: ").title()
        publishing = int(input("Año de publicación: "))
        state = input("¿Ya lo ha leído?, ingrese SÍ o NO: ").lower()
        if state == "sí" or state == "si":
            state = True
            added_book = (book_title, author, book_genre, publishing, state)
            books.append(added_book)
            print(f"\nEl libro '{book_title}' ha sido agregado.")
            input("\nPresione ENTER para continuar...")
        elif state == "no":
            state = False
            added_book = (book_title, author, book_genre, publishing, state)
            books.append(added_book)
            print(f"\nEl libro '{book_title}' ha sido agregado.")
            input("\nPresione ENTER para continuar...")
        else:
            print("\nError: Debe ingresar SÍ o NO para validar el estado de lectura del libro.")
            input("\nPresione ENTER para continuar...")
            add_books()
    except ValueError:
        print("\nError: Debe ingresar un año válido.")
        input("\nPresione ENTER para continuar...")
        add_books()

def view_library():
    print("BIBLIOTECA PERSONAL")
    print("-" * 50)
    if not len(books):
        print("\nAún no hay libros en la biblioteca.")
    else:
        for idx, (book_title, author, book_genre, publishing, state) in enumerate(books, 1):
            if state == True:
                state = "✅"
            else:
                state = "❌"
            print(f"\n{idx}. {book_title}")
            print(f"Autor(a): {author} | Año de publicación: {publishing}")
            print(f"Género: {book_genre} | Estado de lectura: {state}")
            print("-" * 50)

def search_books():
    try:
        clear_screen()
        print("BUSCADOR DE LIBROS")
        print("-" * 50)
        if not len(books):
            print("\nAún no hay libros en la biblioteca.")
        else:
            print("\n¿Cómo desea buscar?\n")
            print("1. Por título")
            print("2. Por autor")
            print("3. Por género")
            print("0. Salir\n")
            search_choice = input("Ingrese una opción (0-3): ")
            print("-" * 50)

            match search_choice:
                case "1":
                    search_title = input("Ingrese un título: ").lower()
                    clear_screen()
                    print("\nRESULTADOS ENCONTRADOS:")
                    print("-" * 60)
                    found = False
                    for book in books:
                        book_title = book[0].lower()
                        if search_title in book_title:
                            print(f"\nTítulo: {book[0]} | Autor: {book[1]} | Género: {book[2]} | Año: {book[3]}")
                            print("-" * 60)
                            found = True
                    if not found:
                        print("\nNo se encontraron resultados.")
                        input("\nPresione ENTER para continuar...")
                        search_books()

                case "2":
                    search_author = input("Ingrese el nombre de un autor: ").lower()
                    clear_screen()
                    print("\nRESULTADOS ENCONTRADOS:\n")
                    print("-" * 60)
                    found = False
                    for book in books:
                        book_author = book[1].lower()
                        if search_author in book_author:
                            print(f"\nTítulo: {book[0]} | Autor: {book[1]} | Género: {book[2]} | Año: {book[3]}")
                            print("-" * 60)
                            found = True
                    if not found:
                        print("\nNo se encontraron resultados.")
                        input("\nPresione ENTER para continuar...")
                        search_books()

                case "3":
                    search_genre = input("Ingrese un género literario: ").lower()
                    clear_screen()
                    print("\nRESULTADOS ENCONTRADOS:\n")
                    print("-" * 60)
                    found = False
                    for book in books:
                        book_genre = book[2].lower()
                        if search_genre in book_genre:
                            print(f"\nTítulo: {book[0]} | Autor: {book[1]} | Género: {book[2]} | Año: {book[3]}")
                            print("-" * 60)
                            found = True
                    if not found:
                        print("\nNo se encontraron resultados.")
                        input("\nPresione ENTER para continuar...")
                        search_books()

                case "0":
                    main()

                case _:
                    print("\nError: Debe ingresar un número entre 0 y 3. Intente nuevamente.")
    except ValueError:
        print("\nError: Opción no válida. Intente nuevamente.")
        input("\nPresione ENTER para continuar...")
        search_books()

def change_state():
    try:
        clear_screen()
        print("MARCAR LIBRO LEÍDO / NO LEÍDO")
        print("-" * 50)
        if not len(books):
            print("\nAún no hay libros en la biblioteca.")
        else:
            for idx, (book_title, author, book_genre, publishing, state) in enumerate(books, 1):
                if state == True:
                    state = "✅"
                else:
                    state = "❌"
                print(f"\n{idx}. {book_title}")
                print(f"Autor(a): {author} | Año de publicación: {publishing}")
                print(f"Género: {book_genre} | Estado de lectura: {state}")
                print("-" * 50)

        book_num = int(input("\nIngrese el número del libro que desea marcar: "))
        if book_num > 0 and book_num <= len(books):
            new_state = input("¿Ya leiste este libro?, ingrese SÍ o NO: ").lower()
            if new_state == "sí" or new_state == "si":
                new_state = True
                book_title, author, book_genre, publishing, state = books
                books[book_num - 1] = (book_title, author, book_genre, publishing, new_state)
                print("\nEl estado de lectura ha sido actualizado.")
            elif new_state == "no":
                new_state = False
                book_title, author, book_genre, publishing, _ = books[book_num - 1]
                books[book_num - 1] = (book_title, author, book_genre, publishing, new_state)
                print("\nEl estado de lectura ha sido actualizado.")
            else:
                print("\nError. Opción no válida. Vuelva a intentar.")
    except ValueError:
        print("\nError: Opción no válida. Intente nuevamente. ")


def reading_stats():
    clear_screen()
    print("ESTADÍSTICAS DE LECTURA")
    print("-" * 50)
    

def delete_books():
    clear_screen()
    print("¿QUÉ LIBRO DESEAS SACAR DE TU LISTA?")
    print("-" * 50)
    pass

def main():
    isActive = True
    while isActive:
        try:
            choice_entered = menu()
            match choice_entered:
                case "1":
                    add_books()

                case "2":
                    clear_screen()
                    view_library()
                    input("\nPresione ENTER para continuar...")

                case "3":
                    search_books()
                    input("\nPresione ENTER para continuar...")
                    
                case "4":
                    change_state()
                    input("\nPresione ENTER para continuar...")
                case "5":
                    reading_stats()

                case "6":
                    delete_books()

                case "0":
                    print("\n¡HASTA LUEGO! 👋")
                    print("Gracias por usar el gestor de biblioteca personal 😊.\n")
                    isActive = False

                case _:
                    print("\nError: Debe ingresar un número entre 0 y 6. Intente nuevamente.")
                    input("\nPresione ENTER para continuar...")
        except ValueError:
            print("\nError: Opción no válida. Intente nuevamente.")
            input("\nPresione ENTER para continuar...")

if __name__ == "__main__":
    main()