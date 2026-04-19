
# VALIDADOR DE COINCIDENIA DE CREDENCIALES

import os

os.system('clear')

print('Bienvenido al programa para crear contraseña')

password1 = input('\nEscribe tu contraseña: ')
password2 = input('\nRepite tu contraseña: ')

if password1 == password2:
    print('\nContraseña creada con éxito.\n')
else:
    print('\nLas contraseñas no coinciden.\n')