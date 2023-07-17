import React, { useEffect, useState } from "react";

const Effect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangename}></input>
        <input type="text" value={nickname} onChange={onChangeNickname}></input>
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>닉이름 : {nickname}</div>
      </div>
    </div>
  );
};

export default Effect;
