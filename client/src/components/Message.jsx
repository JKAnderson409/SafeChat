import React from 'react'

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.messageData.userId} > {props.messageData.text}</p>
    </div>
  )
}

export default Message;