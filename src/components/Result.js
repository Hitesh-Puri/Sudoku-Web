import React, { Component } from "react";

export default class Result extends Component {
  render() {
    const { sudolu } = this.props;
    const elapsed = Math.floor(
      (sudolu.solvedTime.getTime() - sudolu.startTime.getTime()) / 1000
    );

    return <div>YAY! you solved the puzzle in {elapsed} seconds</div>;
  }
}
