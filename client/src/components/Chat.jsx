import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

import NewMessage from './NewMessage.jsx';
import Message from './Message.jsx';
import Title from './Title.jsx';
import { resolve } from 'path';
import textToScore from '../lib/textToScore.js'

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: 'Hard-Code Bob',
      activeRoom: 'lobby',
      activeRoomId: 1,
      rooms: ['lobby', 'theOtherRoom'],
      roomScore: 0,
      messages: [],
      newMessageText: '',
      messageScore: 0,
      mood: 'neutral',
      moods: ['negative', 'neutral', 'positive']
    }
    this.handleChange = this.handleChange.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.refreshInput = this.refreshInput.bind(this);
    this.setMood = this.setMood.bind(this);
    this.addRoom = this.addRoom.bind(this);
  }

  componentDidMount = () => {
    this.getMessages();
    this.setMood();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (this.state !== nextState);
  }

  getMessages = (activeRoom=this.state.activeRoom) => {
    axios.get('/messages', {
      params: {
        activeRoom: activeRoom
      }})
      .then(res => { // Checks each message from server against activeRoomId
        // and filters out the ones that don't match, messages for the active
        // room are stored in state.messages
        // TODO: change sql query to only select current roomID
        let messages = [];
        if(res.data.length){
          messages = res.data.reverse().filter(msg => {
            return (msg.roomId === this.state.activeRoomId);
          });
        }

        let roomScore = 0;
        messages.forEach((msg)=>roomScore+=msg.score)
        /*******************************************/
        this.setState({messages,roomScore});
        this.setMood();
      })
      .catch(err => {console.error(err)})
  }

  handleChange = (event) => {
    let input = event.target.value;
    this.setState({
        newMessageText: input,
        messageScore: textToScore(input)
    });
  }

  keyHandler = (event) => {
    if (event.key === 'Enter') {
      this.postMessage();
    }
  }

  refreshInput = () => {this.setState({newMessageText: '',messageScore:0});}

  postMessage = () => {
    axios.post('/messages', {
      roomId: this.state.activeRoomId,
      userId: this.props.userData.id,
      username: this.props.userData.username,
      text: this.state.newMessageText,
      score: this.state.messageScore,
      roomname: this.state.activeRoom
    })
      .then(res => {
        this.refreshInput();
        this.getMessages();
        this.setMood();
      })
      .catch(err => {console.error(err)});
  }

  changeRoom = (event) => {
    this.setState({
      activeRoom: event.target.value
    });
    this.getMessages(event.target.value);
  }

  setMood = () => {
    if (this.state.roomScore >= 0) {
      var newMoodIdx = 2;
    } else {
      var newMoodIdx = 0;
    }
    this.setState({
      mood: this.state.moods[newMoodIdx]
    });
  }

  addRoom = (roomname) => {
    var temp = [...this.state.rooms];
    temp.push(roomname);
    this.setState({
      rooms: temp
    })
  }


  render() {

    return (
      <div >
        <Title user={this.props.userData.username} room={this.state.activeRoom} score={this.state.roomScore} rooms={this.state.rooms} changeRoom={this.changeRoom} addRoom={this.addRoom}/>
        <NewMessage text={this.state.newMessageText} handleChange={this.handleChange} postMessage={this.postMessage} refresh={this.refresh} keyHandler={this.keyHandler}/>
        <div className={this.state.mood} >
          <Table bordered condensed>
            <tbody>
              {this.state.messages.map((message, index) => 
                <Message key={index} messageData={message} user={this.state.user}/>
              )}
            </tbody>
          </Table>
          
        </div>
      </div>
    )
  }
}
