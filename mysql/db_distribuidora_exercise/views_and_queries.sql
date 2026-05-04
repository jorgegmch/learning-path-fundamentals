-- GASEOSAS DEL VALLE S.A.
-- Script: views_and_queries.sql
-- Descripción: Vistas y consultas complejas.

USE gaseosas_del_valle;

-- Vista: Resumen de venta por sede

CREATE VIEW vista_resumen_sedes AS
SELECT
    s.nombre_sede,
    COUNT(p.id_pedido)   AS total_pedidos,
    SUM(p.total_sin_iva) AS total_ventas_sin_iva,
    AVG(p.total_sin_iva) AS promedio_valor_pedido
FROM sedes s
LEFT JOIN pedidos p ON s.id_sede = p.id_sede
GROUP BY s.nombre_sede;

-- Consulta: Productos cuyo precio es mayor al promedio general

SELECT
    nombre,
    categoria,
    stock_actual
FROM productos
WHERE precio > (SELECT AVG(precio) FROM productos);