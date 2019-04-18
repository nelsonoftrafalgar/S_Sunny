import React from "react"
import "./App.css"
import Shadow from "./Shadow"
import Cap from "./Cap"
import Clock from "./Clock"

const Block = ({time}) => {
  
  return (
    <div className="block">
      <Cap/>
      <Clock time={time}/>
      <Shadow time={time}/>
    </div>
  )
}

export default Block
