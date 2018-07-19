CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  id int not null auto_increment primary key,
  username varchar(30) unique,
  password varchar(100),
  totalscore int(10)
);

CREATE TABLE IF NOT EXISTS rooms (
  roomId int not null auto_increment primary key,
  roomname varchar(30),
  users_id int(10) not null,
  roomscore int(10) not null
);

CREATE TABLE IF NOT EXISTS messages (
  roomId int(10) not null,
  userId int(10) not null,
  username varchar(30),
  messageid int not null auto_increment primary key,
  text varchar(255),
  score int(10),
  roomname varchar(30)
);

INSERT INTO messages (roomId, userId, messageid, text, score)
VALUES (1, 1, 1, "Fake Message in message table", 0);


-- mysql -u root -p < database/schema.sql