import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  // useSelector :: mapStateToProps
  const balance = useSelector((state) => state.balance);
  const username = useSelector((state) => state.username);
  const cart = useSelector((state) => state.cart);

  // useDispatch :: mapDispatchToProps :: dispatching action
  const dispatch = useDispatch();

  // UI
  return (
    <div>
      I AM Component1 {balance} of user {username}
      <button onClick={() => dispatch({ type: "DEPOSIT" })}>
        DEPOSIT
      </button>
    </div>
  );
}

function Component2() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      I am Component2 {state.balance}
      <button onClick={() => dispatch({ type: "WITHDRAW" })}>
        Withdraw
      </button>
    </div>
  );
}

function Component3() {
  const state = useSelector((state) => state);

  return <div>I am Component3 {state.balance}</div>;
}

export default App;
