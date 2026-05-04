-- GASEOSAS DEL VALLE S.A.
-- Script: triggers.sql
-- Descripción: Triggers implementados.

USE gaseosas_del_valle;

-- TRIGGER: tr_auditar_cambio_precio
-- Momento : AFTER UPDATE en productos

DELIMITER $$

DROP TRIGGER IF EXISTS tr_auditar_cambio_precio $$

CREATE TRIGGER tr_auditar_cambio_precio
AFTER UPDATE ON productos
FOR EACH ROW
BEGIN
    IF OLD.precio <> NEW.precio THEN
        INSERT INTO auditoria_precios (id_producto, precio_anterior, precio_nuevo)
        VALUES (OLD.id_producto, OLD.precio, NEW.precio);
    END IF;
END $$

DELIMITER ;