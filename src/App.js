import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      text: '',
      counter : 0
    };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount(event){
    this.setState({
      text : event.target.value,
      counter : event.target.value.length
    })
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.text} onChange={this.updateCount}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
