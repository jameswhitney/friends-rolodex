// Individual Card component
// Displays random photo, name, and email
// Imported within CardList to create array of
// Cards to be rendered

import { Component } from "react";

class Card extends Component {
  render() {
    const { name, email, picture } = this.props.user;
    return (
      <div className="tc grow bg-washed-blue pa2 br3 ma2 dib bw2 shadow-5">
        <img
          className="br-100 bg-lightest-gray h4 w4 dib ba b--black-05 pa2"
          alt="User"
          src={`${picture.large}`}
        />
        <h3 className="f4">{`${name.first} ${name.last}`}</h3>
        <p className="f6 fw4 gray mt0">{email}</p>
      </div>
    );
  }
}

export default Card;
