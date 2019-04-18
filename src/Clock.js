import React from "react"
import "./App.css"
import mesh from "./imgs/mesh-bg.svg"
import MetalCase from "./MetalCase"
import { setNumbers } from "./helpers"
import { NUMS } from "./data"

const Clock = ({time}) => {
  const numbers = setNumbers(NUMS)

  return (
    <div className="clock">
      <p className="glow">{time}</p>
      {numbers}
      <img src={mesh} alt="mesh"/>
      <MetalCase/>
    </div>
  )
}

export default Clock
