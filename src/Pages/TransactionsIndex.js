import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

export default function TransactionsIndex() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((response) => {
            // console.log(response.data)
            setTransactions(response.data)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, i) => {
            return (
                <li key={i}>{transaction.item_name}</li>
            )
        })}
      </ul>
    </div>
  )
}
