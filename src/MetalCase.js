import React from 'react';
import './App.css';

const MetalCase = () => {

  const pinsArr = [0,1,2,3,4,5];

  const pins = pinsArr.map(pin => {
      return <div className="pins" key={pin}></div>
  })

  return (
    <div className="metal-case gradient-metalic">
      <div className="metal-case-bottom gradient-metalic">
        {pins}
      </div>
      <div class="metal-case-top gradient-metalic-inner">
        <div class="wires"></div>
        <div class="wires"></div>
        <div class="wires"></div>
        <div class="plate-top"></div>
        <div class="plate-bottom"></div>
      </div>
    </div>
  )
}

export default MetalCase;
