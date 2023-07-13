import React, { useState } from "react";
import "./App.css";
import TodoInsert from "./Components/TodoInsert";
import TodoTemplate from "./Components/TodoTemplate";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTods] = useState([
    {
      id: 1,
      text: "리엑트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어보기",
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
  );
};

export default App;
