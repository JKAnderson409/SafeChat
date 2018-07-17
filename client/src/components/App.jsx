import React from 'react';
import axios from 'axios';

import Chat from './Chat.jsx';
import styles from '../styles.css';

// We will have to import authentication methods

export default class App extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <Chat />  
      </div>
    )
  }
}