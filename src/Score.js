import React, { Component }  from 'react';

class Score extends Component{
    
    render() {
        return (
        <div className='scores'>
          <button Onclick={this.correctAnswer}>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
        )
    }

}

export default Score;
