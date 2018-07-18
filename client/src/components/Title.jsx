import React from 'react'
import { Navbar } from 'react-bootstrap';

export default (props) => {
  return (
    <Navbar>
    <div className="title">
      Welcome to Mordor {props.user}.
      You are in
      <select name="room-selector" onChange={props.changeRoom}>
        {props.rooms.map((room, index) => {
          return <option value={room} key={index}>{room}</option>;
        })}
      </select>
      The room's score is {props.score}.
    </div>
    </Navbar>
  )
}
