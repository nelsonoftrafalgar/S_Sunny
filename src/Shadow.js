import React from 'react';
import './App.css';

const Shadow = (props) => {
    return (
      <div className='shadow'>
        <p className="glow shadow-number">{props.time}</p>
      </div>
    );
}

export default Shadow;
