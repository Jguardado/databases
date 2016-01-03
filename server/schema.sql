CREATE DATABASE chat;

USE chat;

CREATE TABLE archives (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomName` MEDIUMTEXT NULL DEFAULT NULL,
  `username` MEDIUMTEXT NULL DEFAULT NULL,
  `message` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

