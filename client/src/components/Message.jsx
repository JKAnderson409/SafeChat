import React from 'react'

const Message = (props) => {
  return (
    <div className="message">
      <p>//{props.messageData.roomName}\\ {props.messageData.userId} says {props.messageData.text}</p>
    </div>
  )
}

export default Message;