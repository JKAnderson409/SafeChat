let db = require('../../database/database.js');

module.exports = {
  messages: {
    get: function(callback) {
    var strQuery = 'SELECT * FROM messages';
    db.query(strQuery, (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log('THe get request ran');
        callback(null, result);
      }
    });
    },
    post: function(data, callback) {
      //  if (data.user) {
      //    //check if user exists
      //    // if not make new account
      //  }
      var strQuery = `INSERT INTO messages (roomId, userId, text, score)
      VALUES (${data.roomId}, ${data.userId}, "${data.text}", ${data.score})`
      db.query(strQuery, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  },
  users: {
    get: function(input, callback) {
      db.query(`SELECT * FROM users WHERE username=${input}`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }, 
    post: function(input, callback) {
      db.query(`INSERT INTO users (username) VALUES (${input})`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      })
    }
  }, 
  rooms: {
    get: function(input, callback) {
      db.query(`SELECT * FROM messages where roomId=${input}`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(result);
        }
      })
    },
    post: function(input, callback) {
      db.query(`INSERT INTO rooms (roomname) VALUES (${input})`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(result);
        }
      })
    }
  }  
};
