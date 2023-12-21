import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    HistoryTransaction: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    Balance: 0,
    Income: 0,
    Expenses: 0,
  }

  onAddHistoryItem = event => {
    const {title, amount, type, Balance, Income, Expenses} = this.state

    event.preventDefault()
    const newHistoryItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      HistoryTransaction: [...prevState.HistoryTransaction, newHistoryItem],
      title: '',
      amount: '',
    }))
    if (type === 'Expenses') {
      this.setState({Expenses: amount, Balance: Income - amount})
    } else {
      this.setState({Balance: Balance + amount, Income: Income + amount})
    }
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      HistoryTransaction,
      title,
      amount,
      type,
      Balance,
      Income,
      Expenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="top-heading">Hi, Richard</h1>
          <p className="top-para">
            Welcome back to your <span className="top-span">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails Balance={Balance} Expenses={Expenses} Income={Income} />
        </div>
        <div className="bottom-container">
          <div className="form-container">
            <h1 className="heading">Add Transaction</h1>
            <form className="form-container1" onSubmit={this.onAddHistoryItem}>
              <div>
                <label className="label-text" htmlFor="Title">
                  TITLE
                </label>
                <input
                  type="text"
                  className="titleName"
                  id="Title"
                  value={title}
                  onChange={this.onTitle}
                />
              </div>
              <div>
                <label className="label-text" htmlFor="Amount">
                  AMOUNT
                </label>
                <input
                  type="text"
                  className="titleName"
                  id="Amount"
                  value={amount}
                  onChange={this.onAmount}
                />
              </div>
              <div>
                <label className="label-text" htmlFor="Type">
                  TYPE
                </label>
                <select
                  className="titleName"
                  id="Type"
                  value={type}
                  onChange={this.onType}
                >
                  <option>Income</option>
                  <option>Expenses</option>
                </select>
              </div>
              <button type="submit" className="Add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="History-container">
            <h1 className="heading1">History</h1>
            <div className="history-heading">
              <p className="para">Title</p>
              <p className="para">Amount</p>
              <p className="para">Type</p>
            </div>
            <ul className="ul-container">
              {HistoryTransaction.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionItem={eachTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
