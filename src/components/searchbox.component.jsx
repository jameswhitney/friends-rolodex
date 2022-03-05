import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="pa2 ma2">
        <input
          className="tc pa2 ba b--gray bg-washed-blue"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
