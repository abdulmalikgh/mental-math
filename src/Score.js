import React, { Component }  from 'react';

function Score(){
        return (
        <div className='scores'>
          <p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
          </p>
        </div>
        )
    

}

export default Score;
