import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

// COUNTER1 :: ACCESS / UPDATE
// SHOPPING PAGE :: LISTING ALL THE PRODUCTS :: ADD TO CART
function Component1() {
  // LOGIC
  const [balance, setBalance] = useState(10000);
  const deposit = () => {
    setBalance(balance + 5000);
  };

  // UI
  return (
    <div>
      I AM Component1 {balance}
      <button onClick={deposit}>DEPOSIT</button>
      <button onClick={deposit}>ADD TO CART</button>
    </div>
  );
}

// // COUNTER2 :: ACCESS / UPDATE
// CART PAGE
function Component2() {
  const [balance] = useState(10000);

  return <div>I am Component2 {balance}</div>;
}

// // COUNTER3 :: ACCESS / UPDATE
function Component3() {
  const [balance] = useState(10000);

  return <div>I am Component3</div>;
}

export default App;
