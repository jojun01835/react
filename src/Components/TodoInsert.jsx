import React, { useCallback, useState } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setvalue] = useState("");
  const onChange = useCallback((e) => {
    setvalue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setvalue("");

      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input type="text" placeholder="할일을 입력하세요" value={value} onChange={onChange} />
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
