const TransactionItem = props => {
  const {transactionItem} = props
  const {title, amount, type} = transactionItem
  return (
    <li className="list-container">
      <div className="History-details1">
        <p className="para1">{title}</p>
        <p className="para1">{amount}</p>
        <p className="para1">{type}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </div>
    </li>
  )
}
export default TransactionItem
