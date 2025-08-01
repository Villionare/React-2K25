//const [state, dispatchFunction] = useReducer(renderFunction, initialState);
// - state: current state value
// - dispatch: function to trigger state change
// - reducerFunction: ek function jo batata hai ki state kaise update hogi
// - initialState: starting value of state

import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.badla) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        name: ++state.name,
        hello: "increase hua + 1",
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        name: --state.name,
        hello: "decrease hua - 1",
      };
    default:
      return state;
  }
};

let initial = {
  count: 0,
  name: 888,
  hello: "kurrts",
};

function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initial);

  const [norState, setNorstate] = useState({
    count: 100,
    hello: "useState ne ++kiya ",
  });

  console.log(state);
  console.log(norState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        className="p-5 m-4 bg-gray-200 shadow-md border-1 rounded-md"
        onClick={() => dispatch({ badla: "INCREMENT" })}
      >
        increase+
      </button>
      <button
        className="p-5 m-4 bg-gray-200 shadow-md border-1 rounded-md"
        onClick={() => dispatch({ badla: "DECREMENT" })}
      >
        decrease-
      </button>
      <hr />
      <p>Count: {norState.count}</p>
      <button
        className="p-5 m-4 bg-gray-200 shadow-md border-1 rounded-md"
        onClick={() => {
          setNorstate((prev) => ({
            count: prev.count + 1,
            hello: "badal gaya",
          }));
        }}
      >
        increase+
      </button>

      <button
        className="p-5 m-4 bg-gray-200 shadow-md border-1 rounded-md"
        onClick={() => {
          setNorstate((prev) => ({
            count: prev.count - 1,
            hello: "-- gaya",
          }));
        }}
      >
        decrease-
      </button>
    </div>
  );
}

export default ReducerComponent;
