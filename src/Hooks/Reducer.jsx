import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, setState] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => setState({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => setState({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Reducer;
