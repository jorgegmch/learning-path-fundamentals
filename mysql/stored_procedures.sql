use prueba;

DELIMITER //

CREATE PROCEDURE calcularTotal(IN precio decimal(10,2), IN cantidad int, OUT total decimal(10,2))
BEGIN
	SET total = precio * cantidad;
END //

DELIMITER ;


call calcularTotal(1500, 2, @total);
select @total as total_procedimiento;


create table producto (
	ID int not null auto_increment,
	nombre varchar(50),
	estado varchar(20) default 'disponible',
	precio decimal(10,2),
	primary key(id)
);

select * from producto;

INSERT INTO producto (nombre, estado, precio) VALUES ('Leche', 'disponible', 3500.50);
INSERT INTO producto (nombre, estado, precio) VALUES ('Pan', 'disponible', 2000.00);
INSERT INTO producto (nombre, precio) VALUES ('Huevos', 12000.75);
INSERT INTO producto(nombre, estado, precio) VALUES ('Arroz', 'agotado', 4800.00);
INSERT INTO producto (nombre, estado, precio) VALUES ('Café', 'disponible', 9500.25);


-- Ejemplo:
-- Obtener productos basasdos en su estado (i.e. 'disponible' o 'agotado')

delimiter $$
create procedure obtenerProductoPorEstado(in nom_estado varchar(20))
begin
	select * from producto where estado = nom_estado;
end $$

delimiter ;

call obtenerProductoPorEstado('agotado');

-- saber los procedimientos en la bd
show procedure status where db='prueba';

-- Ejemplo:
-- Contar el numero de productos  según su estado y devolver este número.

delimiter $$
create procedure contarProdructoPorEstado(in nom_estado varchar(20), out cantidad int)
begin
	select count(id) into cantidad from producto where estado = nom_estado;
end $$

delimiter ;

call contarProdructoPorEstado('disponible', @cant);

select @cant as "Cantidad de productos";

-- Ejemplo:
-- actualizar el total de beneficios cuando se vende un producto

delimiter $$
create procedure venderProducto(inout beneficios int, in id_prod int)
begin
	declare precio_prod decimal(10,2);

	select precio into precio_prod from producto where id = id_prod;
	
	set beneficios = beneficios + precio_prod;
end $$

delimiter ;

set @beneficios_acumulados = 0;
call venderProducto(@beneficios_acumulados, 1); -- vende el producto 1
select @beneficios_acumulados;

call venderProducto(@beneficios_acumulados, 2); -- vende el producto 2
select @beneficios_acumulados;

-- ejercicio
-- Crear un procedimiento almacenado que, dado el nombre de un pais, liste todas las ciudades

DELIMITER $$
CREATE PROCEDURE listarCiudadesPorPais(IN nom_pais VARCHAR(100))
BEGIN
    SELECT city.Name
    FROM world.city
    INNER JOIN world.country ON city.CountryCode = country.Code
    WHERE country.Name = nom_pais;
END$$
DELIMITER ;

CALL listarCiudadesPorPais('Colombia');

-- Ejercicio
-- Crear un procedimiento almacenado para contar el número de ciudades en un país específico.

DELIMITER $$
CREATE PROCEDURE contarCiudadesPorPais(IN nom_pais VARCHAR(100), OUT cantidad INT)
BEGIN
    SELECT COUNT(city.ID) INTO cantidad
    FROM world.city
    INNER JOIN world.country ON city.CountryCode = country.Code
    WHERE country.Name = nom_pais;
END$$
DELIMITER ;

CALL contarCiudadesPorPais('Colombia', @cant_ciudades);
SELECT @cant_ciudades AS 'Ciudades en el país';

-- 

-- Ejercicio 1 — IN: Buscar producto por ID

-- Crear un procedimiento que reciba un ID y devuelva el producto si existe. Si no existe, no debe devolver nada.

DELIMITER $$
CREATE PROCEDURE buscarProductoPorID(IN idprod INT)
BEGIN
    SELECT * FROM producto WHERE id = idprod;
END$$
DELIMITER ;

CALL buscarProductoPorID(2);

-- Ejercicio 2 — OUT: Obtener el precio más alto

-- Crear un procedimiento que devuelva en un parámetro de salida el precio del producto más caro. El estudiante debe
-- probarlo con un SELECT del parámetro.

DELIMITER $$
CREATE PROCEDURE precioMasAlto(OUT precio_max DECIMAL(10,2))
BEGIN
    SELECT MAX(precio) INTO precio_max FROM producto;
END$$
DELIMITER ;

CALL precioMasAlto(@max_precio);
SELECT @max_precio AS 'Precio más alto';

-- Ejercicio 3 — INOUT: Descuento acumulativo

-- Crear un procedimiento que reciba un descuento acumulado (INOUT) y el ID de un producto. Debe restar el precio del
-- producto al descuento acumulado. Simula un carrito de compras con descuentos aplicados.

DELIMITER $$
CREATE PROCEDURE aplicarDescuento(INOUT descuento_acumulado DECIMAL(10,2), IN idprod INT)
BEGIN
    DECLARE precio_prod DECIMAL(10,2);
    SELECT precio INTO precio_prod FROM producto WHERE id = idprod;
    SET descuento_acumulado = descuento_acumulado - precio_prod;
END$$
DELIMITER ;

SET @descuento = 50000.00;
CALL aplicarDescuento(@descuento, 1);
SELECT @descuento AS 'Descuento restante';

CALL aplicarDescuento(@descuento, 3);
SELECT @descuento AS 'Descuento restante';

-- Ejercicio 4 — IN + lógica: Cambiar estado de producto

-- Crear un procedimiento que reciba un ID y un nuevo estado. Si el producto existe, actualiza su estado. Si no
-- existe, no hace nada. El estudiante debe probarlo cambiando un producto de 'disponible' a 'agotado' y viceversa.

DELIMITER $$
CREATE PROCEDURE cambiarEstadoProducto(IN idprod INT, IN nuevo_estado VARCHAR(20))
BEGIN
    DECLARE existe INT;
    SELECT COUNT(id) INTO existe FROM producto WHERE id = idprod;

    IF existe > 0 THEN
        UPDATE producto SET estado = nuevo_estado WHERE id = idprod;
    END IF;
END$$
DELIMITER ;

-- Cambiar de 'disponible' a 'agotado'
CALL cambiarEstadoProducto(1, 'agotado');
SELECT * FROM producto WHERE id = 1;

-- Revertir de 'agotado' a 'disponible'
CALL cambiarEstadoProducto(1, 'disponible');
SELECT * FROM producto WHERE id = 1;

-- Ejercicio 5 — OUT + agregación: Resumen de inventario

-- Crear un procedimiento que devuelva tres valores de salida: cantidad de productos disponibles, cantidad de
-- agotados, y el precio promedio de todos los productos.

use prueba;

delimiter $$
create procedure resumenInventario(out cant_disp int, out cant_ago int, out prom decimal(10,2))
begin
	select count(id) into cant_disp from producto where estado = 'disponible';
	select count(id) into cant_ago from producto where estado = 'agotado';
	select avg(precio) into prom from producto;
end$$

delimiter ;

call resumenInventario(@disp, @ago, @promedio);
select @disp, @ago, @promedio;


INSERT INTO producto (nombre, estado, precio) VALUES ('Jugo', 'disponible', 4500.00);
INSERT INTO producto (nombre, estado, precio) VALUES ('Queso', 'disponible', 8900.00);
INSERT INTO producto (nombre, estado, precio) VALUES ('Yogurt', 'agotado', 3800.00);
INSERT INTO Proceduresproducto (nombre, estado, precio) VALUES ('Mermelada', 'disponible', 6200.00);

-- **** ESTRUCTURAS CONDICIONALES ***


-- Ejemplo 1:
-- crear un procedimiento que reciba un ID del producto. Si el producto tiene estado "disponible"
-- debe devolver  el mensaje "Producto en venta". Si tiene cualquier otro estado, debe devolver 
-- "Producto no disponible".


drop procedure disponibilidadProducto;

delimiter $$
create procedure disponibilidadProducto(in idprod int, out mensaje varchar(50))
begin

	declare disp varchar(20);
	
	select estado into disp from producto where id = idprod;
	
	if disp = 'DISPONIBLE' then
		set mensaje= 'Producto en venta';
	else
		set mensaje= 'Producto no disponible';
	end if;
end$$

delimiter ;

select * from producto;

call disponibilidadProducto(4, @mensaje);
select @mensaje;


-- cree un procedimiento que reciba un ID y un nuevo precio. Si el nuevo precio es mayor que el
-- el precio actual, actualiza y devuelve "Precio subido". Si el nuevo precio es menor,actualiza y 
-- devuelve "Precio bajado". Si son iguales, devuelve sin cambio.

delimiter $$
create procedure actualizarPrecio(in idprod int, in newprecio decimal(10,2), out mensaje varchar(50))
begin

	declare oldprecio decimal(10,2);
	
	select precio into oldprecio from producto where id = idprod;
	
	if newprecio > oldprecio then
	set mensaje= 'Precio subido';

		update producto set precio = newprecio where id = idprod;
	elseif newprecio < oldprecio then
		set mensaje= 'Precio bajado';
		
		update producto set precio = newprecio where id = idprod;
	else
		set mensaje= 'Sin cambio';
	end if;
end$$

delimiter ;

call actualizarPrecio(4, 1500, @mensaje);
select @mensaje;


-- ESTRUCTURA REPEAT

create table empleados (
	id int auto_increment,
	nombre varchar(100),
	salario decimal(10,2),
	primary key(id)
);

show tables;

INSERT INTO empleados (nombre, salario) VALUES ('Juan Pérez', 45000.00);
INSERT INTO empleados (nombre, salario) VALUES ('María González', 52000.50);
INSERT INTO empleados (nombre, salario) VALUES ('Carlos López', 38000.75);
INSERT INTO empleados (nombre, salario) VALUES ('Ana Martínez', 47000.25);
INSERT INTO empleados (nombre, salario) VALUES ('Luis Rodríguez', 55000.00);
INSERT INTO empleados (nombre, salario) VALUES ('Brayan', 1000.00);
INSERT INTO empleados (nombre, salario) VALUES ('Jorge', 9000.00);

-- aumentar el salario de los empleados en un 10% hasta que alcance 50000.
-- devolver la cantidad de veces que hizo el ciclo

drop procedure aumentarSalario;

delimiter $$
CREATE  procedure aumentarSalario(in empleadoID int, out iteraciones int)
begin
	set iteraciones = 0;

	ciclo_aumentosalario:loop
		update empleados set salario = salario * 1.1 
		where id = empleadoID and salario <= 50000;
		
		set iteraciones = iteraciones + 1;
		
		if (SELECT salario FROM empleados WHERE id = empleadoID) >= 50000 then
			LEAVE ciclo_aumentosalario;
		end if;
		
	end loop ciclo_aumentosalario;
	
end$$

delimiter;

select * from empleados;

call aumentarSalario(3, @veces);
select @veces;


delimiter $$
CREATE  procedure aumentarSalarioRepeat(in empleadoID int, out iteraciones int)
begin
	set iteraciones = 0;

	repeat
		if (SELECT salario FROM empleados WHERE id = empleadoID) < 50000 then
			update empleados set salario = salario * 1.1 
			where id = empleadoID and salario <= 50000;
			
			set iteraciones = iteraciones + 1;
		end if;
	
	-- until repite si la condición es falsa
	until (SELECT salario FROM empleados WHERE id = empleadoID) >= 50000
	end repeat;
	
end$$

delimiter ;


select * from empleados;

call aumentarSalarioRepeat(6, @veces);
select @veces;


-- WHILE

delimiter $$
CREATE  procedure aumentarSalarioWhile(in empleadoID int, out iteraciones int)
begin
	set iteraciones = 0;

	while (SELECT salario FROM empleados WHERE id = empleadoID) < 50000 do
		update empleados set salario = salario * 1.1 
		where id = empleadoID;
		
		set iteraciones = iteraciones + 1;
	
	end while;
	
end$$

delimiter ;
call aumentarSalarioWhile(7, @veces);
select @veces;