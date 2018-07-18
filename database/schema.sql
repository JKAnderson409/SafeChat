CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  id int not null auto_increment primary key,
  username varchar(18) unique,
  password varchar(18),
  totalscore int(10)
);

CREATE TABLE IF NOT EXISTS rooms (
  roomId int not null auto_increment primary key,
  roomname varchar(18),
  users_id int(10) not null,
  roomscore int(10) not null
);
  -- foreign key (users_id) references users(id),

CREATE TABLE IF NOT EXISTS messages (
  roomId int(10) not null,
  userId int(10) not null,
  messageid int not null auto_increment primary key,
  text varchar(255),
  score int(10)
);

  -- foreign key (roomId) references rooms(roomId),
  -- foreign key (userId) references users(id),
-- INSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);

INSERT INTO messages (roomId, userId, messageid, text, score)
VALUES (1, 1, 1, "Fake Message in message table", 0);


-- mysql -u root -p < database/schema.sql