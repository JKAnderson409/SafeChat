import React from 'react';
import posLogo from '../lib/icons/pos_score_comment.png';
import negLogo from '../lib/icons/neg_score_comment.png';

const Message = (props) => {

  const getMoodIcon = (score) => {
    if (score > 0) {
      return posLogo;
    } else {
      return negLogo;
    }
  }

  return (
    <tr>
      <td style={{width: 10}}>{props.messageData.username}</td> 
      <td>{props.messageData.text}</td>
      <td style={{width: 45}}> <img src={getMoodIcon(props.messageData.score)}/> </td>
    </tr>
  )
}
// Need to add more information into messages array so that user name can be displayed here
export default Message; 