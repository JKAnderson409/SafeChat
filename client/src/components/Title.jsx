import React from 'react'
import { Navbar } from 'react-bootstrap';

export default (props) => {
  return (
    <Navbar>
    <div className="title">
      You are logged in as {props.user}.
      You are in 
      <select name="room-selector" onChange={props.changeRoom}>
        {props.rooms.map((room, index) => {
          return <option value={room} key={index}>{room}</option>;
        })}
      </select>
    </div>
    </Navbar>
  )
}
