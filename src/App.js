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

function Component1() {
  const [balance] = useState(10000);

  // UI
  return <div>I AM Component1 {balance}</div>;
}

function Component2() {
  const [balance] = useState(10000);

  return <div>I am Component2 {balance}</div>;
}

function Component3() {
  const [balance] = useState(10000);

  return <div>I am Component3 {balance}</div>;
}

export default App;
