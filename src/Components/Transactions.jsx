import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [accountTotal, setAccountTotal] = useState(0)

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let total = transactions.length > 0 ? transactions.reduce((sum, transaction) => {
      return sum + Number(transaction.amount)
    }, 0) : 0;
    setAccountTotal(total)
  }, [transactions])

  return (
    <div>
      <h2>Bank Account Total: <span id={accountTotal > 100 ? "green" : "red"}>${accountTotal}</span></h2>
      <h3>Transactions</h3>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, i) => {
          return <Transaction key={i} transaction={transaction} i={i} />;
        })}
      </tbody>
    </Table>
    
    </div>
  );
}
