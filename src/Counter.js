import React, { useState, useEffect, useReducer } from "react";

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "reset":
      return {
        counter: (state.counter = 0),
      };
    default:
      throw new Error(`There is no matching action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.title = state.counter;
  }, [state.counter]);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset Counter
      </button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;
