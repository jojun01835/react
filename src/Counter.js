import React, { useState } from "react";

const Counter = () => {
  const [message, setMessage] = useState("");
  const [color, setcolor] = useState("yellow");
  const onClickEnter = () => setMessage("안녕");
  const onClickLeave = () => setMessage("잘가");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      <h1 style={{ color }}>{message}</h1>

      <button
        onClick={() => {
          setcolor("red");
        }}
      >
        빨간색
      </button>

      <button
        onClick={() => {
          setcolor("blue");
        }}
      >
        빨간색
      </button>

      <button
        onClick={() => {
          setcolor("green");
        }}
      >
        빨간색
      </button>
    </div>
  );
};

export default Counter;
