CREATE DATABASE IF NOT EXISTS ejercicios;

USE ejercicios;

CREATE TABLE IF NOT EXISTS cat_table(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50),
	breed VARCHAR(100),
	coloration VARCHAR(50),
	age INT CHECK(age > 0),
	sex ENUM('M', 'H'),
	fav_toy VARCHAR(100)
);

INSERT INTO cat_table (name, breed, coloration, age, sex, fav_toy) VALUES
	('Luna', 'Siamés', 'Blanco y gris', 3, 'H', 'Ratón de peluche'),
	('Simba', 'Maine Coon', 'Atigrado marrón', 5, 'M', 'Pelota con cascabel'),
	('Mía', 'Persa', 'Blanco puro', 2, 'H', 'Pluma de ave'),
	('Thor', 'Bengalí', 'Manchado dorado', 4, 'M', 'Túnel de tela'),
	('Nala', 'British Shorthair', 'Azul grisáceo', 6, 'H', 'Rascador con cuerda'),
	('Gato', 'Mestizo', 'Negro con blanco', 1, 'M', 'Caja de cartón'),
	('Coco', 'Abisinio', 'Canela rojizo', 3, 'H', 'Pájaro de juguete'),
	('Rocky', 'Ragdoll', 'Seal point', 4, 'M', 'Muñeco de peluche grande'),
	('Lila', 'Sphynx', 'Sin pelo rosado', 2, 'H', 'Calcetín enrollado'),
	('Max', 'Scottish Fold', 'Atigrado plateado', 5, 'M', 'Laser pointer');
	
INSERT INTO cat_table (name, breed, coloration, age, sex, fav_toy) VALUES
	('Asrael', 'Criollo', 'Negro', 5, 'M', NULL);

SELECT * FROM cat_table;

SHOW TABLES;

-- Seleccione los nombres de todos los gatos machos que no tienen un juguete favorito.ç
SELECT name, sex, fav_toy 
FROM cat_table
WHERE UPPER(sex) = 'M' AND fav_toy IS NULL;

-- Seleccione el ID, el nombre, la raza y la coloración de todos los gatos que son
-- hembras, que adicionalmente les gusten los juguetes provocadores y que no sean de
-- raza persa o siamesa.

SELECT id, name, breed, coloration
FROM cat_table
WHERE UPPER(sex) = 'H' 
-- AND fav_toy = 'provocadores'
AND LOWER(breed) NOT IN ('persa', 'siamés');