import React, { useState } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
  const [value, setvalue] = useState('')
  return (
    <div>
      <form className="TodoInsert">
        <input type="text" placeholder="할일을 입력하세요" value={} onChange={}/>
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
