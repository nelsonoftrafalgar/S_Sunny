import React from "react"
import "./App.css"
import {setPins} from "./helpers"
import { PINS } from "./data"

const MetalCase = () => {
  const pins = setPins(PINS)

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

export default MetalCase
