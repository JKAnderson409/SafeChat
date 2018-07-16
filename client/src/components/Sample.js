import React from 'react';
import Sentiment from 'sentiment';

export default class Sample extends React.Component{
  constructor(props){
    super(props);
    this.state = {"score":0}
    this.sentiment = new Sentiment();
  }

  handleInput(input){
    let score = this.sentiment.analyze(input).score
    this.setState({input,score})
  }

  render(){
    let style = {
      color: this.state.score<0 ? 'red' : 'green'
    };
    return (
      <div>
        <div>{this.state.score}</div>
        <input id="textinput" type="text" style={style} value={this.state.input} placeholder="Type something" onChange={(e)=>this.handleInput(e.target.value)}></input>
      </div>
    )
  }
}