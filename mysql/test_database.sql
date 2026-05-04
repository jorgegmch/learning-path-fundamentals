CREATE DATABASE IF NOT EXISTS prueba;

USE prueba;

CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO users (user_id, username, email) VALUES
(1, 'JohnDoe', 'john.doe@example.com'),
(2, 'JaneSmith', 'jane.smith@example.com'),
(3, 'BobJohnson', 'bob.johnson@example.com'),
(4, 'carlosrueda', 'carlos.rueda@example.com');

CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    product_name VARCHAR(50) NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO orders (order_id, user_id, product_name, order_date) VALUES
(101, 1, 'ProductA', '2024-01-15'),
(102, 1, 'ProductB', '2024-02-20'),
(103, 2, 'ProductC', '2024-03-05'),
(104, 3, 'ProductD', '2024-04-10');

-- CONSULTAS
-- Mostrar todos los usuarios que no tienen ordenes relacionadas
SELECT A.user_id, A.username, B.order_id, B.product_name
FROM users A
LEFT JOIN orders B
	ON A.user_id = B.user_id
WHERE B.order_id IS NULL;

-- Mostrar todas las ordenes y si hay alguna que no tenga un usuario asociado
SELECT o.order_id, o.product_name, u.user_id, u.username
FROM orders o
RIGHT JOIN users u
	ON u.user_id = o.user_id;

-- Muestre todos los usuarios con sus ordenes ya sea que tenga o no orden y las ordenes con sus 
-- usuario
SELECT u.user_id, u.username, o.order_id, o.product_name
FROM users u
LEFT JOIN orders o
	ON u.user_id = o.user_id
UNION 
SELECT u.user_id, u.username, o.order_id, o.product_name
FROM users u
RIGHT JOIN orders o
	ON u.user_id = o.user_id;