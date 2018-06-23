import React from 'react';
import './App.css';
import Shadow from './Shadow';

const Block = (props) => {
    return (
      <div className='block'>
        <Shadow time={props.time} />
      </div>
    );
}

export default Block;
