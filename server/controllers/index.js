let model = require("../ model")
module.exports = {
  messages:{
    get: function(req,res){
      model.messages.get((messages)=>{
        res.send(messages)
      })
    },
    post: function(req,res){
      let message = req.body
      model.messages.post(message,(err,result)=>{
        if(err) res.send(err)
        else res.send("Successfully added: ", message)
      })
    }
  },
  users:{
    get: function(req,res){

    },
    post: function(req,res){
      
    }
  }
}