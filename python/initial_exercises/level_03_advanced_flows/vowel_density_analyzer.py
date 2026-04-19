import os

while True:

    os.system("clear")

    print("CONTADOR DE PALABRAS")


    palabra=input("\nIngrese una palabra o frase: ").lower()

    if palabra.isnumeric():
        print('\nNo se puede ingresar numeros')
        input('\nOprima ENTER para continuar...')
        
        continue
        
    contador_vocales={
        "a":0,
        "e":0,
        "i":0,
        "o":0,
        "u":0}

    for letra in palabra:
        if letra in contador_vocales:
            contador_vocales[letra]+=1
            
    print(f"\nEL RESULTADO DEL CONTEO DE '{palabra}' ES:\n")
    for vocal, cantidad in contador_vocales.items():
        print(f"La vocal '{vocal}' aparece {cantidad} vez/veces.")
    
    input("\nOprima ENTER para contunar...")