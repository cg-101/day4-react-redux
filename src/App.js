import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";

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
  const state = useSelector((state) => state);

  // UI
  return <div>I AM Component1 {state.balance}</div>;
}

function Component2() {
  const state = useSelector((state) => state);

  return <div>I am Component2 {state.balance}</div>;
}

function Component3() {
  const state = useSelector((state) => state);

  return <div>I am Component3 {state.balance}</div>;
}

export default App;
