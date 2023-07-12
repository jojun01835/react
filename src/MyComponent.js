/* import React from "react";
import { PropTypes } from "prop-types";
const MyComponent = (props) => {
  const { name, children } = props; // 비구조화 할당
  return (
    <div>
      안녕하세여. 제 이름은 {name} 입니다. <br />
      children값은 {children}
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.umber,
};
export default MyComponent;


import { PropTypes } from "prop-types";
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요 제이름은 {name} 입니다. children값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber};
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "기본 이름",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
 */

import React, { Component } from "react";
import { PropTypes } from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요 제이름은 {name} 입니다. children값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber};
      </div>
    );
  }
}
export default MyComponent;
