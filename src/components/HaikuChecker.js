import React from 'react';

function HaikuChecker(){

  return(
    <React.Fragment>
      <form onSubmit={placeHolder}>
        <input
          type='string'
          name='haiku'
          placeholder='please enter only letters and no special characters'/>
          <button type='submit'>See if you're a Haiku master!</button>
      </form>
    </React.Fragment>
  )
}

export default HaikuChecker;