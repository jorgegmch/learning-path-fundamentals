-- El uso de operador logicos (and, or, not)

use world;

-- Buscar paises en el continente sur americano y que tengan más de 40 millones de personas.
SELECT name, continent, population
FROM country
WHERE continent = 'South America' AND population >= 40000000;

-- Listas los paises que tengan un area menor a 1000 km2 o una esperanza de vida menor a 50 años.
SELECT p.name, p.SurfaceArea, p. LifeExpectancy
FROM country p
WHERE SurfaceArea < 1000 OR LifeExpectancy < 50;

-- Listar el pais con la mayor esperanza de vida
SELECT p.name, p.LifeExpectancy
FROM country p
ORDER BY LifeExpectancy DESC
LIMIT 1;

-- Calcular la población de todas las ciudades de Colombia
SELECT SUM(c.Population)
FROM country AS p
INNER JOIN city c ON p.code = c.CountryCode
WHERE p.Name = 'Colombia';

-- Calcular la suma de todas las ciudades de South America
SELECT SUM(c.Population) as 'Poblacion Ciudades', p.Name AS Pais 
FROM country AS p
INNER JOIN city c ON p.code = c.CountryCode
WHERE p.Continent  = 'South America'
GROUP BY p.Name
ORDER BY p.Name;

-- Calcular la suma de la pobalción total de cada continente por separado.
SELECT Continent AS Continente, SUM(Population) AS Poblacion 
FROM country
GROUP BY Continente;

-- Cual es la ciudad más poblada de cada país de Sur America. Ordene el listado por población.
SELECT p.Name AS Pais, c.Name AS Ciudad, MAX(c.Population) AS 'poblacion ciudad'
FROM country AS p
INNER JOIN city AS c
ON p.Code = c.CountryCode
WHERE p.Continent = 'South America'
GROUP BY p.name, c.name;

-- 

SELECT p.Name AS Pais, c.Name AS Ciudad, c.Population AS 'poblacion ciudad'
FROM country AS p
INNER JOIN city AS c
ON p.Code = c.CountryCode
WHERE p.Continent = 'South America'
AND c.Population = (
	SELECT MAX(c2.Population)
	FROM city c2
	WHERE c2.CountryCode = p.Code
)
ORDER BY c.Population DESC;

-- El continente con más de 10 paises
SELECT Continent, COUNT(*) AS 'Cantidad de Paises'
FROM country
GROUP BY Continent
HAVING COUNT(*) > 10;

-- Ejercicio:
-- Listar los nombres de los paises con su año de independencia,
-- pero solo de aquellos que se independizaron despues de 1900.
SELECT Name, IndepYear
FROM country
WHERE IndepYear > 1900;