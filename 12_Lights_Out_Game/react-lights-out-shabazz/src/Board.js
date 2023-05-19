import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    let { nrows, ncols } = this.props

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }

    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let { nrows, ncols, chanceLightStartsOn } = this.props;
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number); //think this line means that we'll pass the key into it and the y coord (first number) and x coord (second number) from "0-1"


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y + 1, x); //flip above cell
    flipCell(y - 1, x); //flip below cell
    flipCell(y, x - 1); //flip left cell
    flipCell(y, x + 1); //flip right cell


    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board: board, hasWon: hasWon }); // add hasWon
  }


  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon) {
      return <h1>You Won!</h1>
    }
    return (
      <table className="Board">
        <tbody>
          {this.state.board.map((row, y) => (
            <tr key={y}>
              {row.map((cell, x) => (
                < Cell isLit={cell} key={`${y}-${x}`} flipCellsAroundMe={this.flipCellsAround} coord={`${y}-${x}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
