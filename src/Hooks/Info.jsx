import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState(["조준영", "조준일", "조준이", "조준삼", "조준사", "조준오"]);
  const [input, setInput] = useState([""]);
  const [nickname, setNickname] = useState(["멋짐조", "조멋짐", "멋조짐"]);
  const [input2, setInput2] = useState([""]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onChangeInput2 = (e) => {
    setInput2(e.target.value);
  };
  const upload = (e) => {
    setName((prevState) => {
      console.log(prevState);
      return [input, ...prevState];
    });
  };
  const download = (e) => {
    setNickname((prevState) => {
      console.log(prevState);
      return [input2, ...prevState];
    });
  };
  const OnKey = (e) => {
    if (e.key === "Enter");
    upload();
  };
  const OnKey2 = (e) => {
    if (e.key === "Enter");
    download();
  };
  return (
    <div>
      <div>
        {name.map((n, idx) => {
          return <div key={idx}>{n}</div>;
        })}
        <hr></hr>
        {nickname.map((n, idx) => {
          return <div key={idx}>{n}</div>;
        })}
      </div>
      <div>{/* <b>별명 : {nickname}</b> */}</div>
      <div>
        <input value={input} onChange={onChangeInput} onKeyDown={OnKey}></input>
        <button onClick={upload}>클릭</button>
        <input value={input2} onChange={onChangeInput2} onKeyDown={OnKey2}></input>
        <button onClick={download}>클릭</button>
      </div>
    </div>
  );
};

export default Info;
