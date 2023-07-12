import React from "react";
import { useState } from "react";
const Event = () => {
  const [form, setform] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextFrom = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setform(nextFrom);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setform({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === " " || e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트연습</h1>
      <input type="text" name="username" placeholder="사용자명" value={username} onChange={onchange}></input>
      <input type="text" name="message" placeholder="아무거나" value={message} onChange={onchange} onKeyDown={onKeyPress}></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Event;
