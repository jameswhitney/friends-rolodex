import { Component } from "react";

class Scroll extends Component {
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          border: "1px solid black",
          height: "90vh",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
