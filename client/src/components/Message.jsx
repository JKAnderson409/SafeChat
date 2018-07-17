import React from 'react'

const Message = (props) => {
  return (
    <div className="message">
      <h3>{props.messageData.user}: </h3>
      <p>{props.messageData.text}</p>
    </div>
  )
}

export default Message;