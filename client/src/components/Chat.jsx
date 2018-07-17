import React, { Component } from 'react';
import axios from 'axios';

import NewMessage from './NewMessage.jsx';
import Message from './Message.jsx';

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      roomScore: 0,
      messages: [],
      newMessageText: ''
    }
    this.postMessage.bind(this);
  }

  componentDidMount() {
    axios.get('/messages')
      .then(res => {
        // REFACTOR THIS according to how the server response will work
        const msgs = res.data || [{ // this is sample data
          user: 'steve',
          text: 'hi I\'m bob!'
        }];
        console.log(res.data);
        this.setState({
          messages: msgs
        });
      });
  }

  postMessage(msg) {
    console.log(msg);
    // Send new message to database, update state to reflect changes and
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
