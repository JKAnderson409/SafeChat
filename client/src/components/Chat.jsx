import React, { Component } from 'react';
import axios from 'axios';

import NewMessage from './NewMessage.jsx';
import Message from './Message.jsx';

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '1337',
      activeRoom: 'lobby',
      roomScore: 0,
      messages: [],
      newMessageText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/messages')
      .then(res => {
        // REFACTOR THIS according to how the server response will work
        const msgs = res.data;
        this.setState({
          messages: msgs
        });
      })
      .catch(err => {console.error(err)});
  }

  handleChange = (event) => {
    this.setState({
      newMessageText: event.target.value
    });
  }

  postMessage = () => {
    axios.post('/messages', {
      text: this.state.newMessageText,
      user: this.state.user,
      room: this.state.activeRoom
    })
      .then(res => {
        console.log('new message POSTed to /messages');
      })
      .catch(err => {console.error(err)});
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
        <NewMessage handleChange={this.handleChange} postMessage={this.postMessage} />
      </div>
    )
  }
}
