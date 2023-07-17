import React, { useRef, useState } from "react";

const Ref = () => {
  const [count, setcount] = useState(0);
  const countRef = useRef(0);

  console.log("랜더링");
  console.log(countRef);
  const plus = () => {
    setcount(count + 1);
  };
  const plus1 = () => {
    countRef.current = countRef.current + 1;
    console.log("useRef", countRef.current);
  };
  return (
    <div>
      <p>State : {count}</p>
      <p>UseRef : {countRef.current}</p>
      <button onClick={plus}> State 더하기</button>
      <button onClick={plus1}>UseRef 더하기</button>
    </div>
  );
};

export default Ref;
