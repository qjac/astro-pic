import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Image from "./Image";
import './scss/App.scss';

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        {/* <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <hr />
        <Form handleSubmit={this.handleSubmit} />

        <hr /> */}
        <Image />
      </div>
    );
  }
}

export default App;
