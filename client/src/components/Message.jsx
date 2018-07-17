import React from 'react'

const Message = (props) => {
  return (
    <div className="message">
      <h2>{props.messageData.roomName}</h2>
      <h3>{props.messageData.userID}: </h3>
      <p>{props.messageData.text}</p>
    </div>
  )
}

export default Message;