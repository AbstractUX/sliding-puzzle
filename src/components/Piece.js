import React from 'react';

import './Piece.css';

const Piece = (props) => {
  return (
    <div className={"Piece " + (!props.value && 'Piece-nullPiece')} onClick={() => props.handleClick(props.row, props.col, props.value)}>
      <h3>{props.value}</h3>
    </div>
  )
}

export default Piece;
