import React from "react"
import "./App.css"

export const setPins = (arr) => {
  return arr.map(pin => <div key={pin} className="pins"></div>)
}

export const setNumbers = (arr) => {
  return arr.map(number =>  <p key={number}>{number}</p>)
}