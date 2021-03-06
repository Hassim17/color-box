import React, { Component } from "react";
import "./Box.css";

const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  handleClick(e) {
    this.changeColor();
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
