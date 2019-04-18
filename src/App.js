import React from "react"
import "./App.css"
import Block from "./Block"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hrOne: "",
      hrTwo: "",
      minOne: "",
      minTwo: "",
      secOne: "",
      secTwo: ""
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString()
      this.setState(() => {
        return {
          hrOne: time.charAt(0),
          hrTwo: time.charAt(1),
          minOne: time.charAt(3),
          minTwo: time.charAt(4),
          secOne: time.charAt(6),
          secTwo: time.charAt(7)
        }
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  render() {
    const blocks = []

    for (const num in this.state) {
      blocks.push(<Block time={this.state[num]} />)
    }

    return (
      <div className="wrapper">
        {blocks}
      </div>
    )
  }
}

export default App
