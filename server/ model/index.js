let db = require('../../database/database.js');

module.exports = {
  messages: {
    get: function(callback) {
    var strQuery = 'SELECT * FROM messages';
    db.query(strQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    });
    },
    post: function(data, callback) {
      //  if (data.user) {
      //    //check if user exists
      //    // if not make new account
      //  }
      var strQuery = `INSERT INTO messages (roomId, userId, text, score)
      VALUES (${data.roomId}, ${data.userId}, ${data.text}, ${data.score}`
      db.query(strQuery, (err, result) => {
        if (err) {
          console.log("Messages Table POST Error:", err);
        } else {
          callback(result);
        }
      });
    }
  },
  users: {
    get: function(input, callback) {
      db.query(`SELECT * FROM users WHERE username=${input}`)
    }, 
    post: function(input) {
      db.query(`INSERT INTO users (username) VALUES (${input})`)
    }
  }, 
  rooms: {
    get: function() {

    },
    post: function() {

    }
  }  
};
