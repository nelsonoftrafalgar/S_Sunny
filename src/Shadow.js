import React from "react"
import "./App.css"

const Shadow = ({time}) => {
    
  return (
    <div className="shadow">
      <p className="glow shadow-number">{time}</p>
    </div>
  )
}

export default Shadow
