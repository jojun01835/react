import React, { Component } from "react";

class CreateRef extends Component {
  input = React.createRef();

  handleFoucs = () => {
    this.input.current.foucs();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
      </div>
    );
  }
}

export default CreateRef;
