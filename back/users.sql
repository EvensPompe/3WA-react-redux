-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 26 mai 2021 à 16:29
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dbreact3wa`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
  `lastName` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
  `email` varchar(90) CHARACTER SET latin1 DEFAULT NULL,
  `password` varchar(120) CHARACTER SET latin1 DEFAULT NULL,
  `role` varchar(15) CHARACTER SET latin1 DEFAULT NULL,
  `address` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
  `zip` int(5) DEFAULT NULL,
  `city` varchar(40) CHARACTER SET latin1 DEFAULT NULL,
  `phone` varchar(15) CHARACTER SET latin1 DEFAULT NULL,
  `dateCreation` datetime DEFAULT NULL,
  `validate` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
  `connexion` datetime DEFAULT NULL,
  `key_id` varchar(90) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role`, `address`, `zip`, `city`, `phone`, `dateCreation`, `validate`, `connexion`, `key_id`) VALUES
(1, 'Evens', 'Pompe', 'evenspompe9593@gmail.com', '$2b$10$MtROv/17.a17.Gbuka21EeP1qkzxvScd/L0eb9S7QzwLJ38EUxEVC', 'user', '5 bis rue Giuseppe Verdi  l\'Aumône', 95310, 'Saint Ouen l\'Aumône', '3652649092', '2021-05-26 17:51:46', 'no', NULL, 'HJHf0cfXSp5AD5jjvTj0eBezi3zMds');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
