import React, { Component } from 'react';
import NewMessage from './NewMessage.jsx';
import Message from './Message.jsx';

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      roomScore: 0,
      messages: [{ // this is sample data
        user: 'bob',
        text: 'hi I\'m bob!'
      }]
    }
  }

  render() {
    return (
      <div className="chat">
        <ul>
          // WARNING: CSS rules are too strictly set, make more dynamic to accurately test new functionality
          {this.state.messages.map((message, index) => 
            <Message key={index} messageData={message} />
          )}
        </ul>

        <NewMessage />
      </div>
    )
  }
}
