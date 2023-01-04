import React from "react";
import Transactions from "../Components/Transactions";
import Container from "react-bootstrap/Container";

export default function Index() {
  return (
    <div>
      <Container>
        <Transactions />
      </Container>
    </div>
  );
}
