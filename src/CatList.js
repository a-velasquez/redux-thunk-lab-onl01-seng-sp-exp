// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
  renderCats = () => {
    return this.props.catPics.map((pic) => <img alt="catpic" src={pic.url} />);
  };

  render() {
    return <div>{this.renderCats()}</div>;
  }
}

export default CatList;
