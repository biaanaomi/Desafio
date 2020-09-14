/*populando banco de dados no localhost*/

CREATE TABLE `food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(80) NOT NULL,
  `nutrientName` varchar(80) NOT NULL,
  `value` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `alimentalma`.`food` (`description`, `nutrientName`, `value`) VALUES ('Brócolis', 'Proteína', '3.53');
INSERT INTO `alimentalma`.`food` (`description`, `nutrientName`, `value`) VALUES ('Brócolis', 'Carboidrato', '4.71');
INSERT INTO `alimentalma`.`food` (`description`, `nutrientName`, `value`) VALUES ('Brócolis', 'Energia', '29');
INSERT INTO `alimentalma`.`food` (`description`, `nutrientName`, `value`) VALUES ('Bife e Brócolis', 'Água', '71.83');
INSERT INTO `alimentalma`.`food` (`description`, `nutrientName`, `value`) VALUES ('Bife e Brócolis', 'Vitamina B-12', '0.65');
INSERT INTO `alimentalma`.`food` (`description`, `nutrientName`, `value`) VALUES ('Brócolis', 'Ferro', '0.85');


CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nivel` int NOT NULL DEFAULT '3',
  `empresa` varchar(150) NOT NULL,
  `nome` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);
INSERT INTO `alimentalma`.`users` (`nome`, `email`, `password`, `nivel`, `empresa`) VALUES ('Vinicius', 'marcosviniciusdev@hotmail.com', MD5('123456'), '1', 'Empresa Teste');