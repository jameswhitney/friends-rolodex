import { Component } from "react";
import Card from "./card.component";

class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <>
        {users.map((user, i) => {
          return <Card key={i} user={user} />;
        })}
      </>
    );
  }
}

export default CardList;
