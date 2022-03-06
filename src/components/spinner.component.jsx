import { Component } from "react";
import "./spinner.styles.css";

class Spinner extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Spinner;
