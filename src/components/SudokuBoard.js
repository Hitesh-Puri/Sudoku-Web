import React, { Component } from "react";
import SudokuField from "./SudokuField";
import Timer from "./Timer";
import Result from "./Result";

export default class SudokuBoard extends Component {
  render() {
    const { sudoku, onChange } = this.props;

    return (
      // <div>{JSON.stringify(this.props.sudoku)}</div>
      <div>
        {!sudoku.solvedTime && <Timer start={sudoku.startTime} />}
        {sudoku.solvedTime && <Result sudoku={sudoku} />}
        {sudoku.rows.map((row) => (
          <div className="row" key={row.index}>
            {row.cols.map((field) => (
              <SudokuField field={field} key={field.col} onChange={onChange} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
