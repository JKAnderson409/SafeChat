let model = require("../ model")
module.exports = {
  messages:{
    get: function(req,res){
      model.messages.get((err,messages)=>{
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
    get: function(req,res){

    },
    post: function(req,res){
      
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