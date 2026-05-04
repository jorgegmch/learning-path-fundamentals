-- TRIGGERS Y EVENTOS

use prueba;

-- Eventos asociados : INSERT, UPDATE, DELETE
-- Momento: BEFORE o AFTER
-- Acción: Código SQL que se ejecutará

-- Ejemplo #1: cada vez que cambie la población de una ciudad se hará un registro del cambio
-- city_population_log

use world;

create table if not exists city_population_log (
	id int auto_increment primary key,
	city_id int,
	old_population int,
	new_population int,
	fecha_cambio TIMESTAMP default CURRENT_TIMESTAMP
);

drop trigger antes_actualizar_pob_city;

delimiter $$
create trigger antes_actualizar_pob_city
before UPDATE on city
for each row
begin
	if old.population <> new.population then
		insert into city_population_log (city_id, old_population, new_population) 
			values (old.id, old.population, new.population);
	end if;
end$$

delimiter ;

describe mensaje;


select c.name, c.population
from city c
inner join country p on c.countrycode = p.code
where p.name = 'Colombia'
order by population desc
limit 10;

-- actualice la población de colombia en 1% en todas sus ciudades.

update city c 
join country p on c.countrycode = p.code
set c.population = c.population * 1.01
where p.name = 'Colombia';

select l.*, c.name 
from city_population_log l
inner join city c on l.city_id = c.id;

truncate city_population_log;

alter table city_population_log 
modify fecha_cambio TIMESTAMP not null default CURRENT_TIMESTAMP;

-- Ejemplo 2
-- Evitar eliminación de ciudades con más de 100 mil de habitantes

drop trigger if exists prevent_large_city_deletion;
delimiter $$

create trigger prevent_large_city_deletion
before delete on city
for each row
begin
	if old.population > 100000 then
		signal sqlstate '45000' set message_text = "No se puede eliminar ciudades con más de 100 mil habitantes";
	end if;
end;$$

delimiter ;

delete from city where id=2294; -- Girón 

delete from city where name='Bucaramanga'; -- Bucaramanga 

select id from city where name = 'Bucaramanga';


-- EVENTOS
-- Son tareas automática que se ejecutan en cierta periodicidad.
-- Limpieza de datos, generación de reporte, validación de datos, etc.

-- activacion de eventos
set global event_scheduler = on;

-- ejemplo:
-- borrar registros de city_population_log cada 6 meses

create table mensaje(
	id int auto_increment primary key,
	mensaje varchar(200) not null,
	fecha_mensaje TIMESTAMP not null default CURRENT_TIMESTAMP
);

drop event if exists borrado_old_population_logs;

delimiter $$
create event borrado_old_population_logs
on schedule every 15 second do
begin
	delete from city_population_log where fecha_cambio < now() - interval 6 month;
	insert into mensaje(mensaje) values ('Ejecución del evento borrado_old_population_logs');
end$$


delimiter ;

select * from mensaje;

select compress(mensaje), length(compress(mensaje)), mensaje, length(mensaje) from mensaje;

-- cree el evento que simule el crecimiento de las ciudades de población de Colombia cada año
-- El indice de crecimiento es 1,035 anual. modifique todas las ciudades de colombia y luego
-- vaya actualizando la población del pais. lleve una bitacora de esta simulación.
-- simule el crecimiento de cada año en cada 15 segundos.

drop event if exists simulacion_crecimiento_poblacion;
truncate mensaje;
truncate city_population_log;

delimiter $$
create event simulacion_crecimiento_poblacion
on schedule every 15 second do
begin
	declare total int;

	-- actualiza poblacion de ciudaes
	update city c 
	join country p on c.countrycode = p.code
	set c.population = c.population * 1.035
	where p.name = 'Colombia';
	
	-- actualiza población del pais
	select sum(population) into total from city;
	update country city set population = total where name = 'Colombia';

	insert into mensaje(mensaje) values ('Ejecución del evento simulacion_crecimiento_poblacion');
end$$

delimiter ;

select * from mensaje;
select * from city_population_log;