import React, { useCallback, useMemo, useRef, useState } from "react";

const Callback = () => {
  const [list, setList] = useState([]);
  const [number, setnumber] = useState("");
  const inputEl = useRef(null);

  console.log(inputEl);

  const getAcerage = (numbers) => {
    console.log("평균값 계산중...");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };
  const onChange = useCallback((e) => {
    setnumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setnumber("");
    inputEl.current.focus();
  }, [number, list]);
  const avg = useMemo(() => getAcerage(list), [list]);
  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Callback;
