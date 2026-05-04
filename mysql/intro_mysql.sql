-- Así se colocan comentarios, en algunos gestores de db como DBeaver también se pueden colocar con #

-- Crear base de datos campus, si no existe
CREATE DATABASE IF NOT EXISTS campus;

-- Usar la base de datos campus
USE campus;

-- Crear tabla camper, si no existe
CREATE TABLE IF NOT EXISTS camper(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100),
	telefono VARCHAR(20),
	sexo enum('M', 'F') DEFAULT 'M' COMMENT 'M = Masculino , F = Femenino'
);

-- Desplegar versión de la base de datos
SELECT VERSION();

-- Ver tablas de la base de datos
SHOW TABLES;

-- Consultar tabla camper
SELECT * FROM camper;

-- Insertar datos en la tabla camper
INSERT INTO camper(nombre, telefono, sexo) VALUES('Victor', '1111', 'M');
INSERT INTO camper VALUES(null, 'Maria', '2222', 'F');

-- Borrar datos de la tabla camper
DELETE FROM camper
WHERE id=3;