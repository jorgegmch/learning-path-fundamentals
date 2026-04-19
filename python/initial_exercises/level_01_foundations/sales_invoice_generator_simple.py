
# GENERADOR DE FACTURAS DE VENTA

descripcionProducto="Silla mecedora"
cantidadSolicitada=3
valorUnidad=150000
visualPorcentajeIVA=20
conversionProductoIVA=0.20
valorTotalSinIVA=cantidadSolicitada*valorUnidad
valorUnidadConIVA=(valorUnidad*conversionProductoIVA)+valorUnidad
totalPagar=cantidadSolicitada*valorUnidadConIVA

print("COSTOS DEL PEDIDO")
print(f"Producto: {descripcionProducto}")
print(f"Cantidad: {cantidadSolicitada}")
print(f"Precio por unidad sin IVA: {valorUnidad:,.1f}")
print(f"Precio total sin IVA: {valorTotalSinIVA:,.1f}")
print(f"IVA {visualPorcentajeIVA}%")
print(f"Precio por unidad con IVA: {valorUnidadConIVA:,.1f}")
print(f"Total a pagar: {totalPagar:,.1f}")