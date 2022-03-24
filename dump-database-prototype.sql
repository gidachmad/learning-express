-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: bnpb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(225) DEFAULT NULL,
  `password` varchar(225) DEFAULT NULL,
  `status` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'nganu','$2b$10$dWIw7XslYpiuVZACCd/A/u5Mi.VK76cxbXlvX.UWLoCNQusOl4oSq','Boss'),(2,'maman','adminMaman','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barang2`
--

DROP TABLE IF EXISTS `barang2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `barang2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kategori` varchar(225) DEFAULT NULL,
  `kodeRak` int(11) DEFAULT NULL,
  `kodeBarang` int(11) DEFAULT NULL,
  `namaBarang` varchar(225) DEFAULT NULL,
  `satuan` varchar(225) DEFAULT NULL,
  `jumlahBarang` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `tanggalKadaluarsa` date DEFAULT NULL,
  `tanggalTerima` date DEFAULT NULL,
  `sumber` varchar(225) DEFAULT NULL,
  `tahunAnggaran` int(11) DEFAULT NULL,
  `tanggalInput` date DEFAULT NULL,
  `arusBarang` varchar(225) DEFAULT NULL,
  `status` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barang2`
--

LOCK TABLES `barang2` WRITE;
/*!40000 ALTER TABLE `barang2` DISABLE KEYS */;
INSERT INTO `barang2` VALUES (1,'Makanan',1,10,'Kue Basah','Kardus',10,10000,'2020-12-12','2020-12-01','APBN',2001,'2020-12-01','Outbound','Rejected'),(2,'Minuman',1,10,'Pocari MM','Kaleng',10,20000,'2020-12-12','2020-12-01','Rakyat',2020,'2020-12-01','Outbound','Rejected'),(3,'Makanan',1,10,'Kue Kering','Kardus',10,10000,'2020-12-12','2020-12-01','APBN',2001,'2020-12-01','Inbound','Rejected'),(4,'Minuman',1,10,'Pocari MM','Kaleng',10,20000,'2020-12-12','2020-12-01','Rakyat',2020,'2020-12-01','Outbound','Rejected');
/*!40000 ALTER TABLE `barang2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-24 16:56:46
