import React from 'react'

const Message = (props) => {
  return (
    <tr>
      <td>{props.user}</td> 
      <td>{props.messageData.text}</td>
    </tr>
  )
}
// Need to add more information into messages array so that user name can be displayed here
export default Message; 