-- GASEOSAS DEL VALLE S.A.
-- Script: functions.sql
-- Descripción: Creación de funciones personalizadas.

USE gaseosas_del_valle;

-- FUNCIÓN: calcular_promedio_pedidos_cliente
-- Calcula el promedio total (sin IVA) de los pedidos realizados por un cliente.

DELIMITER $$

DROP FUNCTION IF EXISTS calcular_promedio_pedidos_cliente $$

CREATE FUNCTION calcular_promedio_pedidos_cliente(p_id_cliente INT)
RETURNS DECIMAL(12,2)
NOT DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_total_pedidos DECIMAL(12,2);

    SELECT COALESCE(AVG(total_sin_iva), 0.00)
    INTO v_total_pedidos
    FROM pedidos
    WHERE id_cliente = p_id_cliente;

    IF v_total_pedidos = 0.00 THEN
        RETURN 0;
    END IF;

    RETURN v_total_pedidos;
END $$

DELIMITER ;