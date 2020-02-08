import React, { Component }  from 'react';

function Score(props){
        return (
        <div className='scores'>
          <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
          </p>
        </div>
        )
    

}

export default Score;
