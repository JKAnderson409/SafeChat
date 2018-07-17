CREATE DATAVASE IF NOT EXISTS chat;

USE chat;


CREATE TABLE IF NOT EXISTS users (
  id int not null auto_increment primary key,
  username varchar(18),
  password varchar(18),
  totalscore int
);

CREATE TABLE IF NOT EXISTS rooms (
  roomId int not null auto_increment primary key,
  roomname varchar(18),
  foreign key (users_id) references users_id,
  roomscore int not null
)

CREATE TABLE IF NOT EXISTS messages (
  foreign key (rooms_roomsId) references rooms_roomsId,
  messageid int not null auto_increment,
  text varchar(255),
  score int
)