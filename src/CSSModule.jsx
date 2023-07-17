import React from "react";
import "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`{styles.wrapper}{$styles.inverted}`}>
      안녕하세용 저는 <span className={`{styles.something}`}>CSS Module!</span>
    </div>
  );
};

export default CSSModule;
