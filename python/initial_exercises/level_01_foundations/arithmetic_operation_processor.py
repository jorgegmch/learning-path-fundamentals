
# CALCULADORA PARA SUMAR Y RESTAR 2 NÚMEROS AL MISMO TIEMPO

import os

os.system('clear')

print('Bienvenido al programa para sumar y restar números\n')

x = int(input('Escriba el valor del primer número: '))
y = int(input('Escriba el valor del segundo número: '))

suma = x + y
resta = x - y

print(f'\nLa suma de los números es: {suma} y la resta es: {resta}\n')