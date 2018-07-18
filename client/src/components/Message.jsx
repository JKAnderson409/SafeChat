import React from 'react'

const Message = (props) => {
  {console.log(props.messageData, 'This is the messageData')}
  return (
    <div className="message">
      <p>//{props.messageData.roomName}\\ {props.messageData.userId} says {props.messageData.text}</p>
    </div>
  )
}
// Need to add more information into messages array so that user name can be displayed here
export default Message; 