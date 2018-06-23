import React from 'react';
import './App.css';
import mesh from "./imgs/mesh-bg.svg";
import MetalCase from './MetalCase';

const Clock = (props) => {

  const numArr = [0,1,2,3,4,5,6,7,8,9];

  const numbers = numArr.map(number => {
      return <p key={number}>{number}</p>
  })

  return (
    <div className='clock'>
      <p className='glow'>{props.time}</p>
      {numbers}
      <img src={mesh} alt="mesh" />
      <MetalCase />
    </div>
  );
}

export default Clock;
