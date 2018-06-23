import React from 'react';
import './App.css';
import Shadow from './Shadow';
import Cap from './Cap';

const Block = (props) => {
    return (
      <div className='block'>
        <Cap />
        <Shadow time={props.time} />
      </div>
    );
}

export default Block;
