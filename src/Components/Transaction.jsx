import { Link } from "react-router-dom"

export default function Transaction({ transaction, i}) {
  return (
    <tr>
      <td>{i}</td>
        <td>{transaction.date}</td>
        <td><Link to={`/transactions/${i}`}>{transaction.name}</Link></td>
        <td>${transaction.amount}</td>
        <td>
        <Link to={`/transactions/${i}/edit`}>✏️</Link>
      </td>
    </tr>
  )
}
