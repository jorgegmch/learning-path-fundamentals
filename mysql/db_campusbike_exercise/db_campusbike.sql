-- MySQL dump 10.13  Distrib 8.4.8, for Win64 (x86_64)
--
-- Host: localhost    Database: campusbike
-- ------------------------------------------------------
-- Server version	8.4.8

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_clientes` int NOT NULL AUTO_INCREMENT,
  `nombres_cliente` varchar(100) NOT NULL,
  `apellidos_cliente` varchar(100) DEFAULT NULL,
  `cedula_cliente` varchar(100) DEFAULT NULL,
  `telefono_cliente` varchar(20) NOT NULL,
  `correo_cliente` varchar(100) DEFAULT NULL,
  `direccion_cliente` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_clientes`),
  UNIQUE KEY `correo_cliente` (`correo_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id_comp` int NOT NULL AUTO_INCREMENT,
  `fecha_comp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_prov_fk` int NOT NULL,
  `total_comp` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_comp`),
  KEY `id_prov_fk` (`id_prov_fk`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`id_prov_fk`) REFERENCES `proveedores` (`id_prov`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_compra`
--

DROP TABLE IF EXISTS `detalle_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_compra` (
  `cantidad_detalle_c` int NOT NULL,
  `precio_und_detalle_c` decimal(10,2) NOT NULL,
  `fk_produc_detalle_c` int NOT NULL,
  `fk_comp_detalle_c` int NOT NULL,
  `subtotal_detalle_c` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_detalle_c` * `precio_und_detalle_c`)) STORED,
  PRIMARY KEY (`fk_produc_detalle_c`,`fk_comp_detalle_c`),
  KEY `fk_comp_detalle_c` (`fk_comp_detalle_c`),
  CONSTRAINT `detalle_compra_ibfk_1` FOREIGN KEY (`fk_produc_detalle_c`) REFERENCES `inventario` (`id_produc`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `detalle_compra_ibfk_2` FOREIGN KEY (`fk_comp_detalle_c`) REFERENCES `compras` (`id_comp`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_compra`
--

LOCK TABLES `detalle_compra` WRITE;
/*!40000 ALTER TABLE `detalle_compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle_compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_venta`
--

DROP TABLE IF EXISTS `detalle_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_venta` (
  `fk_vent_detalle_v` int NOT NULL,
  `fk_produc_detalle_v` int NOT NULL,
  `cantidad_detalle_v` int NOT NULL,
  `precio_und_detalle_v` decimal(10,2) NOT NULL,
  `subtotal_detalle_v` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_detalle_v` * `precio_und_detalle_v`)) STORED,
  PRIMARY KEY (`fk_vent_detalle_v`,`fk_produc_detalle_v`),
  KEY `fk_produc_detalle_v` (`fk_produc_detalle_v`),
  CONSTRAINT `detalle_venta_ibfk_1` FOREIGN KEY (`fk_vent_detalle_v`) REFERENCES `ventas` (`id_vent`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `detalle_venta_ibfk_2` FOREIGN KEY (`fk_produc_detalle_v`) REFERENCES `inventario` (`id_produc`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_venta`
--

LOCK TABLES `detalle_venta` WRITE;
/*!40000 ALTER TABLE `detalle_venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interaccion`
--

DROP TABLE IF EXISTS `interaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interaccion` (
  `id_interac` int NOT NULL AUTO_INCREMENT,
  `tipo_interac` varchar(100) NOT NULL,
  `fecha_interac` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nota_interac` varchar(300) NOT NULL,
  `id_cliente_fk` int NOT NULL,
  `id_vend_fk` int NOT NULL,
  PRIMARY KEY (`id_interac`),
  KEY `id_cliente_fk` (`id_cliente_fk`),
  KEY `id_vend_fk` (`id_vend_fk`),
  CONSTRAINT `interaccion_ibfk_1` FOREIGN KEY (`id_cliente_fk`) REFERENCES `clientes` (`id_clientes`) ON DELETE RESTRICT,
  CONSTRAINT `interaccion_ibfk_2` FOREIGN KEY (`id_vend_fk`) REFERENCES `vendedores` (`id_vend`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interaccion`
--

LOCK TABLES `interaccion` WRITE;
/*!40000 ALTER TABLE `interaccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `interaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `id_produc` int NOT NULL AUTO_INCREMENT,
  `nombre_produc` varchar(300) NOT NULL,
  `ubicacion_produc` varchar(100) NOT NULL,
  `cantidad_produc` int NOT NULL,
  `minimo_produc` int NOT NULL,
  `costo_unitario` decimal(10,2) NOT NULL,
  `total_produc` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_produc` * `costo_unitario`)) STORED,
  PRIMARY KEY (`id_produc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id_prov` int NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(100) NOT NULL,
  `nit_prov` varchar(100) NOT NULL,
  `correo_prov` varchar(100) NOT NULL,
  `telefono_prov` varchar(20) NOT NULL,
  `direccion_prov` varchar(100) DEFAULT NULL,
  `tipo_producto_prov` varchar(200) NOT NULL,
  `cuenta_prov` varchar(100) NOT NULL,
  `banco_prov` varchar(100) NOT NULL,
  PRIMARY KEY (`id_prov`),
  UNIQUE KEY `razon_social` (`razon_social`),
  UNIQUE KEY `nit_prov` (`nit_prov`),
  UNIQUE KEY `correo_prov` (`correo_prov`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendedores` (
  `id_vend` int NOT NULL AUTO_INCREMENT,
  `nombres_vend` varchar(100) NOT NULL,
  `apellidos_vend` varchar(100) NOT NULL,
  `cedula_vend` varchar(100) NOT NULL,
  `telefono_vend` varchar(20) NOT NULL,
  `correo_vend` varchar(100) NOT NULL,
  PRIMARY KEY (`id_vend`),
  UNIQUE KEY `cedula_vend` (`cedula_vend`),
  UNIQUE KEY `telefono_vend` (`telefono_vend`),
  UNIQUE KEY `correo_vend` (`correo_vend`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendedores`
--

LOCK TABLES `vendedores` WRITE;
/*!40000 ALTER TABLE `vendedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_vent` int NOT NULL AUTO_INCREMENT,
  `fecha_vent` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_cliente_fk` int NOT NULL,
  `id_vendedor_fk` int NOT NULL,
  `metodo_pago` varchar(100) NOT NULL,
  `total_vent` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_vent`),
  KEY `fk_cliente` (`id_cliente_fk`),
  KEY `fk_vendedor` (`id_vendedor_fk`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`id_cliente_fk`) REFERENCES `clientes` (`id_clientes`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_vendedor` FOREIGN KEY (`id_vendedor_fk`) REFERENCES `vendedores` (`id_vend`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-06 13:02:49
