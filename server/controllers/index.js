let model = require("../ model")
module.exports = {
  messages:{
    get: function(req,res){
      model.messages.get((messages)=>{
        res.send(messages)
      })
      // res.send(JSON.stringify([{
      //   "messageID": 1,
      //   "userID": 1337,
      //   "roomName": "lobby",
      //   "text": "Hello"
      // }]))
    },
    post: function(req,res){
      let message = req.body.message
      res.send(req.body)
      // model.messages.post(message,(err,result)=>{
      //   if(err) res.send(err)
      //   else res.send(result)
      // })
    }
  },
  users:{
    get: function(req,res){

    },
    post: function(req,res){
      
    }
  }
}