import React, { Component } from "react";

class Image extends Component {
  state = { data: {} };

  componentDidMount() {
    //fetch after component mounts
    const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="image-container">
        <img src={data.url} alt={data.title}></img>
      </div>
    );
  }
}

export default Image;
