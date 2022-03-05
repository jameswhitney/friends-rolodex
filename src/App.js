import React, { Component } from "react";
import Scroll from "./components/scroll.component";
import CardList from "./components/cardlist.component";
import SearchBox from "./components/searchbox.component";
import Spinner from "./components/spinner.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://randomuser.me/api/?results=20&nat=us,gb,fr,de&inc=name,email,picture`
    )
      .then((resp) => resp.json())
      .then((userData) => {
        return this.setState(() => {
          return { users: userData.results };
        });
      })
      .catch((error) => console.log(error));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    return this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(searchField);
    });
    return !users.length ? (
      <Spinner />
    ) : (
      <div className="tc">
        <h1>Friends Rolodex</h1>
        <SearchBox
          placeholder="search friends"
          onChangeHandler={onSearchChange}
        />
        <Scroll>
          <CardList users={filteredUsers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
