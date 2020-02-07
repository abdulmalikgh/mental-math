import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

class App extends Component {
  state = {
    numCorrect:0,
    numQuestions:0
  }
 
  checkCorrectAnswer = correctAnswer => {
    if(correctAnswer) {
      this.setState (currState => ({
        numCorrect: currState.numCorrect + 1
      }))
    }

    this.setState( currState => ({
      numQuestions : currState.numQuestions + 1
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game checkCorrectAnswer={this.checkCorrectAnswer}/>
        <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
      </div>
    );
  }
}

export default App;
