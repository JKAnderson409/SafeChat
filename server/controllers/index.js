let model = require("../ model")
module.exports = {
  messages:{
    get: function(req,res){
      // console.log(req.query.activeRoom);
      var query = req.query.activeRoom;
      model.messages.get(query, (err,messages)=>{
        res.send(messages)
      })
    },
    post: function(req,res){
      let message = req.body
      model.messages.post(message,(err,result)=>{
        if(err) res.send(err)
        else res.send(message)
      })
    }
  },
  users:{
    get: function(req,res,next){
      model.users.get(req.body,(err,result)=>{
        if(err) next(err)
        else {
          let userData = {
            id : result.id,
            username : result.username,
            totalscore: result.totalscore
          }
          req.session.userData = userData
          res.send(result)
        }
      })
    },
    special: function(req,res,next){
      req.session.userData = req.body;
      res.send()
    },
    post: function(req,res,next){
      model.users.post(req.body,(err,result)=>{
        if(err) next(err)
        else {
          let userData = {
            id : result.id,
            username : result.username,
            totalscore: result.totalscore
          }
          req.session.userData = userData
          res.send(result)
        }
      })
    }
  },
  rooms:{
    get: function(req,res){
      model.rooms.get((err,rooms)=>{
        res.send(rooms)
      })
    }
  }
}