import React, { Component } from 'react';

import Piece from './Piece';
import './SlidingPuzzle.css';
import shuffle from 'shuffle-array';

class SlidingPuzzle extends Component {
  state = {
    piecesData: [
      {row: 0, col: 0, value: 1},
      {row: 0, col: 1, value: 2},
      {row: 0, col: 2, value: 3},
      {row: 0, col: 3, value: 4},
      {row: 1, col: 0, value: 5},
      {row: 1, col: 1, value: 6},
      {row: 1, col: 2, value: 7},
      {row: 1, col: 3, value: 8},
      {row: 2, col: 0, value: 9},
      {row: 2, col: 1, value: 10},
      {row: 2, col: 2, value: 11},
      {row: 2, col: 3, value: 12},
      {row: 3, col: 0, value: 13},
      {row: 3, col: 1, value: 14},
      {row: 3, col: 2, value: 15},
      {row: 3, col: 3, value: null},
    ]
  }
  sortPieces = (piecesData) => {
    const sortedPieces = [];
    piecesData.map((pieceData) => {
      let points = 0;
      points += pieceData.row * 4;
      points += pieceData.col;
      sortedPieces[points] = pieceData;
    });
    return sortedPieces;
  }
  handleClick = (row, col, value) => {
    const nullPiece = this.state.piecesData.find(x => x.value === null);
    if ((row === nullPiece.row && Math.abs(col - nullPiece.col) === 1) || (col === nullPiece.col && Math.abs(row - nullPiece.row) === 1)) {
      // swap clicked piece with null piece using setState
      this.setState((prevState) => {
        const oldPiecesData = prevState.piecesData;
        const newPieceData = oldPiecesData.map((oldPiece) => {
          if (oldPiece.value === null) {
            return {
              row: oldPiece.row,
              col: oldPiece.col,
              value: value
            }
          } else if (oldPiece.value === value) {
            return {
              row: oldPiece.row,
              col: oldPiece.col,
              value: null
            }
          } else {
              return oldPiece;
            }
        });
        return {
          piecesData: newPieceData
        }
      })
    }
  }
  renderPieces = () => {
    const sortedPieces = this.sortPieces(this.state.piecesData);
    return sortedPieces.map((sortedPiece) => {
      return <Piece row={sortedPiece.row} col={sortedPiece.col} value={sortedPiece.value} handleClick={this.handleClick} />
    });
    return sortedPieces;
  }
  shufflePieces = (piecesData) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];
    shuffle(values);

    const shuffledPieces = piecesData.map((piece, i) => {
      const newValue = values[i];
      return { ...piece, value: newValue };
    });
    console.log(shuffledPieces);
    return shuffledPieces;
  }
  componentDidMount() {
    const shuffledPieces = this.shufflePieces(this.state.piecesData);
    this.setState(() => ({
      piecesData: shuffledPieces
    }));
  }
  render() {
    return (
      <div>
        <div className="SlidingPuzzle">
          {this.renderPieces()}
        </div>
      </div>
    )
  }
}

export default SlidingPuzzle;
