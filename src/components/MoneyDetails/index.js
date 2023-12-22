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
          <p className="balance-heading">Your Balance</p>
          <p className="balance-para" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>
      <div className="Balance-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div>
          <p className="balance-heading">Your Income</p>
          <p className="balance-para" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="Balance-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div>
          <p className="balance-heading">Your Expenses</p>
          <p className="balance-para" data-testid="expensesAmount">
            Rs {Expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

