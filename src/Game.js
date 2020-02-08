import React, { Component } from 'react';
const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;


class Game extends Component { 
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return [value1,value2,value3,proposedAnswer];
    };
    updatstate = (newValueArray) => {
        this.setState( currState => ({
            value1:newValueArray[0],
            value2:newValueArray[1],
            value3:newValueArray[2],
            proposedAnswer:newValueArray[3]
        }))
    }
    handleAnswer = event => {
        const newValueArray = this.makeNewQuestion();
        this.updatstate(newValueArray)
        const AnswerWasCorrect = this.evalueateAnswer(event.target.name);
        this.props.handleAnswer(AnswerWasCorrect)
    
    }
  }
render(){
     return (
        <div className="game">
            <h2>Mental Math</h2>
            <div className="equation">
             <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
             <button onClick={this.validateAnswer}>True</button>
              <button onClick={this.validateAnswer}>False</button>
            </div>
        </div>
    )
}   


}

export default Game;