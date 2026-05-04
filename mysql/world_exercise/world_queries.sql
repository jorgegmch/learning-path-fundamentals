-- CONSULTAS

use world;

-- 1. Liste todas las capitales de europa en orden de tamaño de la poblacion descendentemente.

select p.Name, c.Name -- p.Capital, p.Continent , p.Region 
from country as p
inner join city as c 
on p.Capital = c.ID  
where p.Continent = 'Europe'
order by p.Population desc;

-- 2. Muestre el nombre del país, su capital y la población de la capital para todos los paises de
-- Asia cuyo nombre comience con la letra 'I', ordenado alfabeticamente por país.

SELECT p.Name, c.Name, c.Population
FROM country AS p
INNER JOIN city AS c
ON p.Capital = c.ID 
WHERE p.Continent = 'Asia'
AND p.Name LIKE 'I%'
ORDER BY c.Name ASC;

-- Uso de operadores logicos (and, or, not)

-- Buscar paises en el continente sur americano y que tengan más de 40 millones de personas.
select name, continent, population
from country
where continent = 'South America' and population >= 40000000;

-- Listar los paises que tengan un area menor a 1000 km2 o una esperanza de vida menor a 50 años.
select p.name, p.SurfaceArea, p.LifeExpectancy
from country p
where SurfaceArea < 1000 or LifeExpectancy < 50;

-- Listar el pais con la mayor esperanza de vida
select p.name as Nombre, p.LifeExpectancy as 'Esperanza de vida'
from country p
order by LifeExpectancy DESC 
limit 1;

-- Sumar la poblacion de todas las ciudades de colombia
select sum(c.Population)
from country p
inner join city c on p.code = c.CountryCode 
where p.Name = 'Colombia';

-- Calcular la suma de todas las ciudades de sur america. ordene el listado por nombre de pais
select sum(c.Population) as 'Poblacion ciudades', p.Name as Pais
from country p
inner join city c on p.code = c.CountryCode 
where p.Continent = 'South America'
group by p.Name 
order by p.Name;

-- Calcular la suma de la poblacion total de cada continente por separado
select Continent as Continente, sum(Population) as Poblacion
from country
group by Continent;

-- Cual es la ciudad más poblada de cada pais de suramerica. ordene el listado por población
select p.Name as Pais, c.Name as ciudad, max(c.Population) as 'Poblacion ciudad'
from country p
inner join city c 
	on p.Code = c.CountryCode 
where p.Continent = 'South America'
group by c.name, p.Name;

select p.Name as Pais, c.Name as ciudad, c.Population as 'Poblacion ciudad'
from country p
inner join city c 
	on p.Code = c.CountryCode 
where p.Continent = 'South America' and
    c.Population  = (
        select max(c2.Population )
        from city c2
        where c2.CountryCode=p.Code
        )
order by c.Population desc;

-- El continente con más de 10 paises
SELECT Continent, count(*) as 'Cantidad de paises'
FROM country
group by Continent 
having count(*) > 10;

-- Ejercicio: 
-- Listar los nombres de los países junto con su año de independencia, 
-- pero solo de aquellos que se independizaron después de 1900.
SELECT Name, IndepYear
FROM country
WHERE IndepYear > 1900;

-- Cual es el idioma con el nombre más largo hablado en el mundo.
-- También indique que países hablan ese idioma. El listado debe estar ordenado
-- alfabéticamente por nombre de país.

SELECT MAX(LENGTH(Language))
FROM countrylanguage;

SELECT p.Name, i.Language
FROM country AS p
INNER JOIN countrylanguage AS i
	ON p.Code = i.CountryCode
WHERE LENGTH (i.Language) = (
	SELECT MAX(LENGTH(i.Language))
	FROM countrylanguage i
)
ORDER BY p.Name;

-- Muestre un listado del año de independencia de cada país.
-- Si aún no se ha independizado muestre el año "N/A".

SELECT Name, IFNULL(IndepYear, 'N/A') AS 'Año de independencia'
FROM country;

-- Muestre un listado con los países "recien independizados"
-- y "antiguamente independizados". Es recién independizados
-- si su fecha de independencia es posterior a 1899.

SELECT Name AS 'País', IndepYear AS 'Año de independencia',
	IF(IndepYear IS NULL, 'No aplica',
		if(IndepYear > 1899, 
			'Recien independizado', 
			'Antiguamente independizado')) AS 'Estado independencia'
FROM country;

SELECT Name AS 'País', IndepYear AS 'Año de independencia',
	CASE 
		WHEN IndepYear >= 1899 THEN 'Recien independizado'
		WHEN IndepYear < 1899 THEN 'Antiguamente independizado'
		ELSE 'No aplica'
	END AS Independizado
FROM country;

-- Cual es el promedio de nivel de vida de los países africanos.

SELECT Continent, Name, LifeExpectancy 
FROM country
WHERE Continent = 'Africa';

-- Cuál es el país con menor nivel de vida

SELECT Name, LifeExpectancy
FROM country
WHERE LifeExpectancy IS NOT NULL
AND LifeExpectancy > 0
	ORDER BY LifeExpectancy ASC 
LIMIT 1;

-- Cuál es el país con mayor nivel de vida

SELECT Name, LifeExpectancy
FROM country
WHERE LifeExpectancy IS NOT NULL
AND LifeExpectancy > 0
	ORDER BY LifeExpectancy DESC 
LIMIT 1;