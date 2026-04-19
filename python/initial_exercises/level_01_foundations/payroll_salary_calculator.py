
# CALCULADORA DE NÓMINA SALARIAL

horasTrabajadas=float(input("Ingrese el total de horas trabajadas: "))

sueldoBruto=horasTrabajadas*20000
sueldoNeto=sueldoBruto-0.08

print(f"Sueldo bruto= {sueldoBruto:,.2f}")
print("Descuento por salud(EPS)= -4%")
print("Descuento por pensión= -4%")
print(f"Sueldo neto = {sueldoNeto:,.2f}")