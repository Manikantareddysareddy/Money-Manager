import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expenses} = props
  return (
    <div className="Money-container">
      <div className="Balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div>
          <h1 className="balance-heading">Your Balance</h1>
          <p className="balance-para">{Balance}</p>
        </div>
      </div>
      <div className="Balance-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div>
          <h1 className="balance-heading">Your Income</h1>
          <p className="balance-para">{Income}</p>
        </div>
      </div>
      <div className="Balance-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div>
          <h1 className="balance-heading">Your Expenses</h1>
          <p className="balance-para">{Expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
