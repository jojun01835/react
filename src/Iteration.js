import React, { Component } from "react";
import { useState } from "react";

const Iteration = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: "눈사람",
    },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    <li key={name.id} keyl onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration;
