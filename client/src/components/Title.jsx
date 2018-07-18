import React from 'react'

export default (props) => {
  return (
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
  )
}
