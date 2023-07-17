import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const App2 = () => {
  const [number, setNumber] = useState(0);
  const [money, dispacth] = useReducer(reducer, 0);

  return (
    <div>
      <h2>UseReduecer를 사용해서 통장을 관리해줘요</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispacth({ type: "INCREMENT", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispacth({ type: "DECREMENT", payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default App2;
