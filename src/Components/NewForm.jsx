import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL

export default function NewForm() {
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
        category: "",
    })

    function handleTextChange(e) {
        setTransaction({
            ...transaction,
            [e.target.id]: e.target.value
        })
    }

    // function handleNumberChange(e) {
    //     setTransaction({
    //         ...transaction,
    //         [e.target.id]: e.target.value
    //     })
    // }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`${API}/transactions`, transaction)
        .then((response) => {
            setTransaction(response.data);
            // travel to show page
        })
        .catch((error) => console.log(error))
    }

  return (
    <div>
        <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" value={transaction.date} onChange={handleTextChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text" value={transaction.name} onChange={handleTextChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder='$0.00' value={transaction.amount} onChange={handleTextChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="from">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" value={transaction.from} onChange={handleTextChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" value={transaction.category} onChange={handleTextChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </Container>
    </div>
  )
}
