import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;
