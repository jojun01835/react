import React, { useState } from "react";

import Effect from "./Hooks/Effect";
import Effect1 from "./Hooks/Effect1";
import Reducer from "./Hooks/Reducer";

const App1 = () => {
  const [visible, setVisible] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>

      <hr />
      {visible && <Effect />}
      {showTimer && <Effect1 />}
      <button onClick={() => setShowTimer(!showTimer)}>{showTimer ? "타이머가종료료료" : "시작작자자자"}</button>
      <Reducer></Reducer>
    </div>
  );
};

export default App1;
