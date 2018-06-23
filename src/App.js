import React, { Component } from 'react';
import './App.css';
import Block from './Block';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hrOne: '',
        hrTwo: '',
        minOne: '',
        minTwo: '',
        secOne: '',
        secTwo: ''
      };
    }

  componentWillMount() {
    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      this.setState({
        hrOne: time.charAt(0),
        hrTwo: time.charAt(1),
        minOne: time.charAt(3),
        minTwo: time.charAt(4),
        secOne: time.charAt(6),
        secTwo: time.charAt(7)
      })
    }, 1000)
  }

  componentWillUnmount() {
        clearTimeout(this.timerId);
  }

  render() {
    return (
      <div className='wrapper'>
        <Block time={this.state.hrOne} />
        <Block time={this.state.hrTwo} />
        <Block time={this.state.minOne} />
        <Block time={this.state.minTwo} />
        <Block time={this.state.secOne} />
        <Block time={this.state.secTwo} />
      </div>
    );
  }
}

export default App;
