-- MySQL dump 10.13  Distrib 8.0.24, for Linux (x86_64)
--
-- Host: localhost    Database: ivyelitedb
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `courses`
--
USE ivyelitedb;

/*DROP TABLE IF EXISTS `courses`;
!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 ;
CREATE TABLE `courses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '课程名称',
  `cover_url` text COMMENT '封面图片',
  `summary` varchar(50) DEFAULT NULL COMMENT '简介',
  `description` text COMMENT '详细描述',
  `time_arrange` text COMMENT '上课时间',
  `status` varchar(20) NOT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

-- LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'GRE写作','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044126/708_170726163005hOdBEU4MVJN6S2JF.jpg','one',NULL,NULL,'即将开课'),(2,'GRE数学','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044125/708_170726163005f5CbsLSR46kGKWl2.jpg','GRE数学:听说我很简单?做做题就170?','GRE数学高分必看考点有哪些？\n\nGRE数学涉及考点众多，对知识点和面的掌握要求较高，按照我们学过的数学知识点来看主要可以分为以下4大类：\n\n1. 计算能力(Arithmetic)\n\n计算能力主要涉及百分比计算、各类整数计算、整除问题、因数分解、质数问题、余数奇数偶数、指数方根以及一些数学概念原理，比如估算、分数、比例、比率、绝对值、数轴、十进制和数列等。\n\n2. 代数(Algebra)\n\n代数类考点包括指数运算、因式分解和简化、方程式不等式概念、一次和二次方程式不等式计算、方程式实际运用解题以及解析几何(包括函数图形,等式不等式图形，截距和斜度等)。\n\n3. 几何(Geometry)\n\n几何类考点包括平行和垂直线、圆形、三角形(包含等腰三角形、等边三角形、306090度特殊角三角形)、四边形、其它多边形、全等近似图形、立体几何图形、面积、周长、体积、勾股定理和角度计算。\n\n4. 数据分析(Data analysis)\n\n本考点涉及基础描述性统计数字(包括平均数、中位数、众数、值域、标准偏差、四分位距、分位数和百分位数)、图表数据提取(比如线形图、条状图、饼图、箱线图、散布图和频率分布图)、基本概率(比如复合事件和单独事件概率、 条件概率、随机变量)、概率分配(包括普通分配)和计数方法(比如排列组合、维恩图)。',NULL,'即将开课'),(3,'GRE填空','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044126/708_170726163005pemX8WZDL2TUxYaN.jpg','three',NULL,NULL,'即将开课'),(4,'GRE阅读','https://cdn.ivyelite.net/wp-content/uploads/2021/10/27044127/708_170726163005pxNU6PuS3U4rY4mD.jpg','four',NULL,NULL,'即将开课');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `room`
--

/*DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 ;
CREATE TABLE `room` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `course_id` int unsigned NOT NULL,
  `subject` text NOT NULL COMMENT '房间主题',
  `room_id` int unsigned NOT NULL,
  `begin_timestamp` bigint DEFAULT NULL,
  `room_type` int NOT NULL DEFAULT '1',
  `password` varchar(30) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

-- LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,2,'GRE数学 2021/11/17',529581250,1637134301683,1,'','已结束'),(2,2,'GRE数学 2021/11/23',545047665,1637648260123,1,'','已结束'),(3,2,'GRE数学 2021/11/23',545112694,1637648858382,1,'','已结束'),(4,2,'GRE数学 2021/11/23',547633395,1637680470283,1,'','已结束');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `user_courses`
--

/*DROP TABLE IF EXISTS `user_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_courses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_uid` int unsigned NOT NULL,
  `course_id` int unsigned NOT NULL,
  `isStudent` int unsigned DEFAULT '1',
  `isTeacher` int unsigned DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_uid` (`user_uid`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `user_courses_ibfk_1` FOREIGN KEY (`user_uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `user_courses_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_courses`
--

-- LOCK TABLES `user_courses` WRITE;
/*!40000 ALTER TABLE `user_courses` DISABLE KEYS */;
INSERT INTO `user_courses` VALUES (1,25236407,2,1,0),(2,39539026,2,1,0),(3,5122316,2,1,0);
/*!40000 ALTER TABLE `user_courses` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `users`
--

/*DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(50) NOT NULL COMMENT '邮箱',
  `pass` varchar(50) NOT NULL UNIQUE COMMENT '密码',
  `uid` int unsigned NOT NULL COMMENT '8位数唯一ID',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话',
  `sex` varchar(5) DEFAULT NULL COMMENT '性别',
  `education` varchar(6) DEFAULT NULL COMMENT '学历',
  `school` varchar(50) DEFAULT NULL COMMENT '学校',
  `birth` DATE COMMENT '生日',
	`language` VARCHAR(5) COMMENT '语言',
	`register_time` BIGINT COMMENT '注册时间timestamp',
  `roles` varchar(20) NOT NULL DEFAULT 'student' COMMENT '用户类型',
  `avatar_url` TEXT COMMENT '用户头像'，
  PRIMARY KEY (`id`),
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

-- LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'qc','qcui','0cc6928e741d75e7a92396317522069e',25236407,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'admin',NULL),(2,'用户','test@test.com','098f6bcd4621d373cade4e832627b4f6',39539026,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'student',NULL),(3,'用户','test@ivyelite.com','e10adc3949ba59abbe56e057f20f883e',90089634,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'student',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Dumping events for database 'ivyelitedb'
--

--
-- Dumping routines for database 'ivyelitedb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-23 23:32:56
