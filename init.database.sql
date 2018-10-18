
-- Start - Database and User Database with Password and Privileges 
CREATE DATABASE catalogo_discos;
CREATE USER 'admDisk'@'localhost' IDENTIFIED BY 'admDisk'; 
GRANT ALL PRIVILEGES ON catalogo_discos.* TO 'admDisk'@'localhost';
FLUSH PRIVILEGES;
use catalogo_discos_teste;
-- End - Database and User Database with Password and Privileges 

-- Start - Users from application 
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(50) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id_user`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(2, 'Teste1', 'teste1@gmail.com', 'e807f1fcf82d132f9bb018ca6738a19f', '2018-10-09', '2018-10-09'),
(3, 'Teste2', 'teste2@gmail.com', 'e807f1fcf82d132f9bb018ca6738a19f', '2018-10-11', '2018-10-11');
-- End - Users from application 

-- Start - Collections 
CREATE TABLE `collection` (
  `id_collection` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name_collection` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `collection` (`id_collection`, `name_collection`, `created_at`, `updated_at`) VALUES
(1, 'Nando Reis', '2018-10-09', '2018-10-09'),
(3, 'B.B.King', '2018-10-09', '2018-10-09'),
(4, 'Frejat', '2018-10-09', '2018-10-09'),
(5, 'Cazuza', '2018-10-09', '2018-10-09'),
(6, 'Vinícius de Moraes', '2018-10-09', '2018-10-09');
-- End - Collections

-- Start - Disks
CREATE TABLE `disks` (
  `id_disks` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `id_collection` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `year_publication` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  FOREIGN KEY (id_collection) REFERENCES collection(id_collection)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `disks` (`id_disks`, `id_collection`, `title`, `year_publication`, `created_at`, `updated_at`) VALUES
(1, 6, 'Garota de Ipanema', 1967, '2018-10-09', '2018-10-09'),
(2, 1, 'Jardim - Pomar', 2016, '2018-10-09', '2018-10-09'),
(3, 3, 'The Best Of ', 2004, '2018-10-09', '2018-10-16'),
(5, 1, 'Trinde Ases', 2018, '2018-10-16', '2018-10-17'),
(9, 1, 'A letra A', 2003, '2018-10-17', '2018-10-17'),
(10, 1, '12 de Janeiro', 1994, '2018-10-17', '2018-10-17'),
(11, 6, 'Os afro-sambas', 1966, '2018-10-17', '2018-10-17'),
(12, 3, 'Lucille', 1968, '2018-10-17', '2018-10-17'),
(13, 3, 'Blues Summit', 1963, '2018-10-17', '2018-10-17'),
(14, 5, 'Exagerado', 1985, '2018-10-17', '2018-10-17'),
(15, 5, 'Ideologia', 1988, '2018-10-17', '2018-10-17'),
(16, 4, 'Amor pra recomeçar', 2001, '2018-10-17', '2018-10-17'),
(17, 4, 'Puro êxtase', 1998, '2018-10-17', '2018-10-17');
-- End - Disks

-- Start - Token Blacklist
CREATE TABLE `token_blacklist` (
  `id_token` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `date_token` date NOT NULL,
  `time_token` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `token_blacklist` (`id_token`, `token`, `date_token`, `time_token`) VALUES
(5, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiM19EYW5pZWwgTWVsbG8gU2lxdWVpcmFfYWRlcHRvZGFuaWVsQGdtYWlsLmNvbSIsImlhdCI6MTUzOTgyMTI2NSwiZXhwIjoxNTM5ODI1NDY1fQ.EuZm9w6QfC3qGEG35xa9a9JTF2RBvvcZJ2ZtpEZ0AMw', '2018-10-17', '21:07:48');
-- End - Token Blacklist


