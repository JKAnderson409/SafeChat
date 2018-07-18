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
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleLogin(username,password){
    if(username === 'anonymous'){
      return this.setState({isLogin:true})
    }
    axios.post('/login',{username,password})
    .then(res=>{
      this.setState({"isLogin":true})
    })
    .catch(err=>alert("Invalid Login"))
  }

  handleSignUp(username,password){
    axios.post('/signup',{username,password})
    .then(res=>{
      this.setState({"isLogin":true})
    })
    .catch(err=>alert("Invalid sign up"))
  }

  render(){
    return(
      <div>
        {this.state.isLogin
        ? <Chat/> 
        : <Login onLogin={this.handleLogin} onSignUp={this.handleSignUp}/>} 
      </div>
    )
  }
}