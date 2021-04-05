import { createStore } from "redux";

// Common REUSABLE STATE
const initialState = {
  username: "Mr. React",
  balance: 100,
  cart: [],
};

// LOGIC WE WRITE HERE :: {type: 'DEPOSIT'}
function reducer1(state = initialState, action) {
  //  LOGIC
  switch (action.type) {
    // COMMON LOGIC
    case "DEPOSIT":
      return { ...state, balance: state.balance + 100 };
    case "WITHDRAW":
      return { ...state, balance: state.balance - 100 };
    default:
      return state;
  }
}

export const store = createStore(reducer1);
