// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onClickAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="name-container">
          <button type="button" className="name-button">
            S
          </button>
          <h1 className="heading">Mohammad Javeed</h1>
        </div>
        <div className="balance-container">
          <h1 className="rupee">Your Balance</h1>
          <div className="balance">
            <h1 className="heading">{amount}</h1>
            <p className="rupee">In Rupees</p>
          </div>
        </div>
        <h1 className="heading">Withdraw</h1>
        <p className="rupee">CHOOSE SUM(IN RUPEES)</p>
        <ul className="card">
          {denominationsList.map(eachList => (
            <DenominationItem
              key={eachList.id}
              details={eachList}
              onClick={this.onClickAmount}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
