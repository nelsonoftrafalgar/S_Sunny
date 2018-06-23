import React from 'react';
import './App.css';
import Shadow from './Shadow';
import Cap from './Cap';
import Clock from './Clock';

const Block = (props) => {
    return (
      <div className='block'>
        <Cap />
        <Clock time={props.time}/>
        <Shadow time={props.time} />
      </div>
    );
}

export default Block;
