import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper")}>
      안녕하세용 저는 <span className={cx("something")}>CSS Module!</span>
    </div>
  );
};

export default CSSModule;
