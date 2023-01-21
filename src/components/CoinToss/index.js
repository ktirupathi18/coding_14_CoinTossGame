// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, isHead: true}

  onClick = () => {
    const {total, heads, isHead} = this.state
    const totalVal = total + 1
    const tossResult = Math.floor(Math.random() * 2)
    const isHeadVal = tossResult === 0
    const headsVal = isHeadVal === true ? heads + 1 : heads
    this.setState({total: totalVal, heads: headsVal, isHead: isHeadVal})
  }

  render() {
    const {total, heads, isHead} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="headortails">Heads (or) Tails</p>
          {isHead === true ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button type="button" className="button" onClick={this.onClick}>
            Toss Coin
          </button>
          <div className="result">
            <p className="result-item">Total: {total}</p>
            <p className="result-item">Heads: {heads}</p>
            <p className="result-item">Tails: {total - heads}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
