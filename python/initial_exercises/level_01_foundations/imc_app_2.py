
# CALCULADORA DE IMC

pesoLibras=float(input("Ingrese su peso en Libras: "))
alturaPies=float(input("Ingrese su altura en pies: "))

pesoKilogramos=pesoLibras*0.453592
alturaMetros=alturaPies*0.3048
imc=pesoKilogramos/(alturaMetros**2)

print(f"Su IMC es: {imc:.1f}")