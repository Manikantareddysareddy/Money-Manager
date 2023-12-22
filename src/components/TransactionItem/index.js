const TransactionItem = props => {
  const {transactionItem, DeleteHistory} = props
  const {id, title, amount, type} = transactionItem
  let newType
  if (type === 'INCOME') {
    newType = 'Income'
  } else {
    newType = 'Expenses'
  }

  const DeleteTransaction = () => {
    DeleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="History-details1">
        <p className="para1">{title}</p>
        <p className="para1">Rs {amount}</p>
        <p className="para1">{newType}</p>
        <button
          type="button"
          onClick={DeleteTransaction}
          className="delete-btn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
