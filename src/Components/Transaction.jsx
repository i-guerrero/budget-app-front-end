import React from 'react'

export default function Transaction({ transaction, i}) {
  return (
    <tr>
      <td>{i}</td>
        <td>{transaction.date}</td>
        <td>{transaction.item_name}</td>
        <td>${transaction.amount}</td>
    </tr>
  )
}
