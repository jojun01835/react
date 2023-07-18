import React from "react";
import "./App.css";
import StyledComponent from "./StyledComponent";
import BG from "./lik.jpg";
const App5 = () => {
  return (
    <div>
      <StyledComponent></StyledComponent>
      {/* <div className="bg">
        <img src={BG} alt="ww" style={{ width: "100%" }}></img>
      </div> */}
      <img src={process.env.PUBLIC_URL + "/lik.jpg"} alt="like"></img>
    </div>
  );
};

export default App5;
