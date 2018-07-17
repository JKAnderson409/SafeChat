import React from 'react';
import axios from 'axios';

import Chat from './Chat.jsx';
import styles from '../styles.css';

// import textToScore from '../lib/textToScore.js'

// We will have to import authentication methods

export default class App extends React.Component{
  constructor(props){
    super(props)
    //Sample usecase 
    //this.state = {"input":""}
  }


  render(){
    return(
      <div>
        {/* Uncomment to try out */}
        {/* <input type="text" onChange={(e)=>this.setState({"input": e.target.value})}></input>
        <div>{textToScore(this.state.input)}</div> */}
        <Chat />  
      </div>
    )
  }
}