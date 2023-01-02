import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TransactionsIndex from "./Pages/TransactionsIndex";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<TransactionsIndex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
