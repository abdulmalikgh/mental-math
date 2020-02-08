import React, { Component } from 'react';

class Game extends Component { 
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
        value1:valuesArray[0],
        value2:valuesArray[1],
        value3:valuesArray[2],
        proposedAnswer:valuesArray[3]
    };
}
    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return [value1,value2,value3,proposedAnswer];
    };
    updateState = (newValueArray) => {
        this.setState( currState => ({
            value1:newValueArray[0],
            value2:newValueArray[1],
            value3:newValueArray[2],
            proposedAnswer:newValueArray[3]
        }))
    }
    handleAnswer = event => {
        const newValueArray = this.makeNewQuestion();
        this.updateState(newValueArray)
        const AnswerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(AnswerWasCorrect)
    
    }
    evaluateAnswer(givenAnswer) {
        const { value1, value2, value3, proposedAnswer} = this.state;
        const corrAnswer = value1 + value2 + value3;
        return (
            (corrAnswer === proposedAnswer && givenAnswer === 'true') || 
            (corrAnswer === proposedAnswer && givenAnswer === 'false')
        );
    }
  
render(){
    const { value1, value2, value3,proposedAnswer } = this.state;
     return (
        <div className="game">
            <h2>Mental Math</h2>
            <div className="equation">
             <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
             <button onClick={this.handleAnswer} name='true'>True</button>
              <button onClick={this.handleAnswer} name='false' >False</button>
            </div>
        </div>
    )
}   


}

export default Game;