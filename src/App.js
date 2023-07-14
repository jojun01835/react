import React, { useState, useRef, useCallback } from "react";
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
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTods(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTods(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTods(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
};

export default App;
