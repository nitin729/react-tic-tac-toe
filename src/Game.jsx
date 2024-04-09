import React from 'react'
import Board from './Board'
import { useState } from 'react'
import './Game.css'

const Game = () => {
   /*  const [squares, setSquares] = useState(Array(9).fill(null)); */
   const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
      }
    
      function jumpTo(nextMove) {
        setCurrentMove(nextMove);
      }
      let description

    const moves = history.map((squares,move)=>{
        if(move > 0){
            description = 'Go to move #' + move;
        }else{
            description = 'Go to Game Start'
        }
        return (
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })

  return (
    <>
    <div className='wrapper'>
        <div>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className='history'>
            <ol>{moves}</ol>
        </div>
    </div>
    </>
  )
}

export default Game