import { createStore } from "redux";

// Common REUSABLE STATE
const initialState = {
  balance: 100,
};

// LOGIC WE WRITE HERE
function reducer1(state = initialState, action) {
  // TODO
  return state;
}

export const store = createStore(reducer1);
