import React from 'react'

export default (props) => {
  return (
    <div className="title">
      Welcome to Mordor {props.user}.
      You are in {props.room}.
      The room's score is {props.score}.
    </div>
  )
}
