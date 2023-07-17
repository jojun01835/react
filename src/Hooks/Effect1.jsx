import React, { useEffect } from "react";

const Effect1 = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머가 멍멍멍");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료료");
    };
  }, []);
  return (
    <div>
      <span>타이멍멍</span>
    </div>
  );
};

export default Effect1;
