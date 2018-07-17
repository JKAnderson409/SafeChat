import React from 'react';
import axios from 'axios';

import Chat from './Chat.jsx';
import styles from '../styles.css';
import Login from './Login.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {isLogin: false}
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(username,password){
    //handle Login logic
    console.log(username,password)
    this.setState({"isLogin":true})
  }


  render(){
    return(
      <div>
        {this.state.isLogin
        ? <Chat/> 
        : <Login onLogin={this.handleLogin}/>} 
      </div>
    )
  }
}