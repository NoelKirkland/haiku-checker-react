import React, { useState, useEffect } from 'react';
import haikuChecker from '../functions/haiku-checker';

function HaikuChecker(){
  const [numberOfSyllables, setNumberOfSyllables] = useState(0);
  const [result, setResult] = useState(null);

  
  function resultStatement(num){
    if(num === 17){
      setResult("Congrats! You have created a perfect Haiku")
    } else {
      setResult("close, but your haiku seems to be off by " + Math.abs(17 - num) + " syllables")
    }
  }
  function handleHaikuCheckerFormSubmission(event){
    event.preventDefault();
    setNumberOfSyllables(haikuChecker(event.target.haiku.value))
    
  }

  useEffect(() => {
    if(numberOfSyllables > 0 ) {
      resultStatement(numberOfSyllables)
    }
    
  }, [numberOfSyllables])

  return(
    <React.Fragment>
      <form onSubmit={handleHaikuCheckerFormSubmission}>
        <input
          type='string'
          name='haiku'
          placeholder='please enter only letters and no special characters'/>
          <button type='submit'>See if you're a Haiku master!</button>
      </form>
      <h1>{result}</h1>
    </React.Fragment>
  )
}

export default HaikuChecker;

