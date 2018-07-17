import React, { Component } from 'react';
import axios from 'axios';

import NewMessage from './NewMessage.jsx';
import Message from './Message.jsx';
import Title from './Title.jsx';

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: 'bob',
      userId: 1337,
      activeRoom: 'lobby',
      roomId: 1,
      roomScore: 0,
      messages: [],
      newMessageText: '',
      messageScore: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/messages')
      .then(res => {
        const msgs = res.data.reverse();
        this.setState({
          messages: msgs
        });
        console.log(this.state.messages);
      })
      .catch(err => {console.error(err)})
  }

  handleChange = (event) => {
    this.setState({
        newMessageText: event.target.value
    });
  }

  postMessage = () => {
    console.log(this.state.newMessageText);
    axios.post('/messages', {
      roomId: this.state.roomId,
      userId: this.state.userId,
      text: this.state.newMessageText,
      score: this.state.messageScore
    })
      .then(res => {
        console.log('new message POSTed to /messages');
        axios.get('/messages')
        .then(res => {
          const msgs = res.data.reverse();
          this.setState({
            messages: msgs
          });
          console.log(this.state.messages);
        })
        .catch(err => {console.error(err)})
      })
      .catch(err => {console.error(err)});
  }

  render() {
    return (
      <div className="chat">
        <Title user={this.state.user} room={this.state.activeRoom} score={this.state.roomScore}/>
        <ul>
          {this.state.messages.map((message, index, arr) => 
            <Message key={index} messageData={message} />
          )}
        </ul>
        <NewMessage handleChange={this.handleChange} postMessage={this.postMessage} />
      </div>
    )
  }
}
