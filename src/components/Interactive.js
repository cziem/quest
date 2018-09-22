import React from 'react';

const Interactive = props => (
  <div className="app__interact">
    {
      props.hasComponent ?
        props.whichComponent :
        <div className="welcome_msg">
          <h1>Hi 
            {props.name
              ? <span> {props.name.username}</span>
              : <span> Dear</span>}! Welcome to Quest
          </h1>
          <p>what would you like to do...</p>
        </div>
    }
  </div>
)

export default Interactive