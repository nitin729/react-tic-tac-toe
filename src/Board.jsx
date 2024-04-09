import React, { useState } from "react";
import "./Board.css";
import Square from "./Square/Square";

const Squares = ({ xIsNext, squares, onPlay }) => {
  let status;
  const config = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  function handleClick(i) {
    const nextSquares = squares.slice();
    //nextSquares[i] = 'X'
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    //  setSquares(nextSquares);
    //  setXisNext(!xIsNext);
    onPlay(nextSquares);
    console.log(winner);
  }
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <h2>{status}</h2>
      {config.map((val) => {
        return val.map((sq, i) => {
          return (
            <div className="row" key={i}>
              <Square
                value={squares[sq]}
                onSquareClick={() => handleClick(sq)}
              />
            </div>
          );
        });
      })}
      {/* <div className='row'>
              <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
              <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
              <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
          </div>
          <div className='row'>
              <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>
              <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
              <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>
          </div>
          <div className='row'>
              <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
              <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
              <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
          </div> */}
    </>
  );
};

export default Squares;
