import React from 'react'

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.messageData.userId} > {props.messageData.text}</p>
    </div>
  )
}
// Need to add more information into messages array so that user name can be displayed here
export default Message; 