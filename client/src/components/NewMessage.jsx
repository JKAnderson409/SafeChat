import React from 'react'

export default (props) => {
  return (
    <div className="new-message" >
      <input type="text" className="new-message-input" onChange={props.handleChange} />
      <button onClick={props.postMessage} >Post!</button>
    </div>
  )
}
