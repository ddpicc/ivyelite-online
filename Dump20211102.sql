-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ivyelite
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '课程名称',
  `cover_url` text COMMENT '封面图片',
  `summary` varchar(50) DEFAULT NULL COMMENT '简介',
  `description` text COMMENT '详细描述',
  `time_arrange` text COMMENT '上课时间',
  `status` varchar(20) NOT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'GRE写作','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044126/708_170726163005hOdBEU4MVJN6S2JF.jpg',NULL,NULL,NULL,'即将开课'),(2,'GRE数学','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044125/708_170726163005f5CbsLSR46kGKWl2.jpg',NULL,NULL,NULL,'即将开课'),(3,'GRE填空','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044126/708_170726163005pemX8WZDL2TUxYaN.jpg',NULL,NULL,NULL,'即将开课'),(4,'GRE阅读','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044127/708_170726163005pxNU6PuS3U4rY4mD.jpg',NULL,NULL,NULL,'即将开课');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(50) NOT NULL COMMENT '邮箱',
  `pass` varchar(50) NOT NULL COMMENT '密码',
  `pid` varchar(20) NOT NULL COMMENT '唯一ID',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话',
  `sex` varchar(5) DEFAULT NULL COMMENT '性别',
  `education` varchar(6) DEFAULT NULL COMMENT '学历',
  `school` varchar(50) DEFAULT NULL COMMENT '学校',
  `register_time` datetime DEFAULT NULL COMMENT '注册时间',
  `roles` varchar(20) NOT NULL DEFAULT 'user' COMMENT '用户类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'cq','qcui','0cc6928e741d75e7a92396317522069e','325671',NULL,NULL,NULL,NULL,NULL,'user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-02 19:25:49
