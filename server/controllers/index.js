let model = "stub import"
module.exports = {
  messages:{
    get: function(req,res){
      // model.messages.get((messages)=>{
      //   res.send(messages)
      // })
      res.send(JSON.stringify([{
        "messageID": 1,
        "userID": 1337,
        "roomName": "lobby",
        "text": "Hello"
      }]))
    }
  }
}