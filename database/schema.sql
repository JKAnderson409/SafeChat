CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  id int not null auto_increment primary key,
  username varchar(18),
  password varchar(18),
  totalscore int(10)
);

CREATE TABLE IF NOT EXISTS rooms (
  roomId int not null auto_increment primary key,
  roomname varchar(18),
  users_id int(10) not null,
  foreign key (users_id) references users(id),
  roomscore int(10) not null
);

CREATE TABLE IF NOT EXISTS messages (
  roomId int(10) not null,
  userId int(10) not null,
  foreign key (roomId) references rooms(roomId),
  foreign key (userId) references users(id),
  messageid int not null auto_increment primary key,
  text varchar(255),
  score int(10)
);