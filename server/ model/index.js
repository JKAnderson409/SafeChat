let db = require('../../database/database.js');

module.exports = {
  messages: {
    get: function(callback) {
    var strQuery = 'SELECT * FROM messages';
    db.query(strQuery, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
    },
    post: function(data, callback) {
      var strQuery = `INSERT INTO messages (roomId, userId, username, text, score)
      VALUES (${data.roomId}, ${data.userId}, "${data.username}", "${data.text}", ${data.score})`
      db.query(strQuery, (err, result) => {
        if (err) {
          callback(err);
        } else {
          var updateQuery = `UPDATE users u SET u.totalscore = u.totalscore + ${data.score} WHERE u.id = ${data.userId}`
          db.query(updateQuery,(err2,result2)=>{
            if(err) callback(err)
            else callback(null, result);
          })
        }
      });
    }
  },

  users: {
    get: function(input, callback) {
      let {username,password} = input;
      let queryStr = `SELECT * FROM users u WHERE u.username = "${username}" AND u.password = "${password}"`
      db.query(queryStr,(err, result) => {
        if (!result.length) {
          callback("Wrong Login");
        } else {
          let {id,username,totalscore}= result[0]
          callback(null, {id,username,totalscore});
        }
      })
    }, 
    post: function(input, callback) {
      let params = [input.username,input.password]
      let queryStr = `INSERT INTO users VALUES (default,?,?,0)`
      db.query(queryStr, params,(err, result) => {
        if (err) {
          callback(err);
        } else {
          let user = {
            id: result.insertId,
            username: input.username,
            totalscore: 0
          }
          callback(null, user);
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
