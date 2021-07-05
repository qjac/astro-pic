import React, { Component } from "react";

class Image extends Component {
  state = { data: {} };

  componentDidMount() {
    //fetch after component mounts
    // DEMO_KEY can be replaced with an actual api key, but works for the demo
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
        

        <figure className="image-container">
        <img src={data.url} alt={data.title}></img>
   
    <figcaption>
    <p>{data.explanation}</p> 
    <cite>{data.copyright}</cite>
      </figcaption>
</figure>
    );
  }
}

export default Image;
