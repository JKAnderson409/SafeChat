import React from 'react';
import axios from 'axios';

import Chat from './Chat.jsx';
import styles from '../styles.css';

import Login from './Login.jsx';


export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {user:undefined}
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut(){
    axios.get('/logout').then(()=>{
      this.setState({user:undefined})
    })
  }

  handleLogin(username,password){
    if(username === 'anonymous'){
      axios.post('/special',{})
        .then(res=>{
          this.setState({user:{
            id:0,
            username:"anonymous",
            totalscore: 0
          }})
        })
    } else{
        axios.post('/login',{username,password})
        .then(res=>{
          let user = (res.data)
          this.setState({user})
        })
        .catch(err=>alert("Invalid Login"))
      }
    }

  handleSignUp(username,password){
    axios.post('/signup',{username,password})
    .then(res=>{
      let user = (res.data)
      this.setState({user})
    })
    .catch(err=>alert("Invalid sign up"))
  }

  checkAuth(){
    axios.get('/auth').then(res=>{
      if(res.data.id){
        this.setState({
          user : res.data
          })
      }
    })
  }

  componentWillMount(){
    this.checkAuth();
  }
  
  render(){
    return(
      <div>
        {this.state.user
        ? <Chat userData={this.state.user} onLogOut={this.handleLogOut}/> 
        : <Login onLogin={this.handleLogin} onSignUp={this.handleSignUp}/>} 
      </div>
    )
  }
}