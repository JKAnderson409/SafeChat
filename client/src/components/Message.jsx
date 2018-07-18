import React from 'react'

const Message = (props) => {
  return (
    <tr>
      <td style={{width: 10}}>{props.messageData.username}</td> 
      <td>{props.messageData.text}</td>
      <td>{props.messageData.score}</td>
    </tr>
  )
}
// Need to add more information into messages array so that user name can be displayed here
export default Message; 