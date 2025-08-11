import React, { useState } from "react";

function XandO() {
  // 0 = gol, 1 = X, 2 = O
  const [board, setBoard] = useState(Array(9).fill(0));
  const [player1, setPlayer1] = useState(true); // true = X
  const [winner, setWinner] = useState(0); // 0 = no, 1 = X, 2 = O, 3 = draw

  const checkWinner = (brd) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // cols
      [0,4,8],[2,4,6],         // diagonals
    ];
    for (let [a,b,c] of lines) {
      if (brd[a] && brd[a] === brd[b] && brd[a] === brd[c]) return brd[a];
    }
    if (brd.every(cell => cell !== 0)) return 3; // draw
    return 0; // no winner yet
  };

  const handleClick = (idx) => {
    if (board[idx] !== 0 || winner !== 0) return;
    const newBoard = [...board];
    newBoard[idx] = player1 ? 1 : 2;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result !== 0) {
      setWinner(result);
    } else {
      setPlayer1(!player1);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(0));
    setWinner(0);
    setPlayer1(true);
  };

  const renderCell = (idx) => {
    let val = "";
    if (board[idx] === 1) val = "X";
    else if (board[idx] === 2) val = "O";

    return (
      <button
        onClick={() => handleClick(idx)}
        style={{
          width: 80,
          height: 80,
          fontSize: 40,
          fontWeight: "bold",
          cursor: board[idx] === 0 && winner === 0 ? "pointer" : "default",
        }}
        disabled={board[idx] !== 0 || winner !== 0}
      >
        {val}
      </button>
    );
  };

  return (
    <div style={{ display: "flex", gap: 20, padding: 20, fontFamily: "Arial" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)", gap: 5 }}>
        {board.map((_, i) => renderCell(i))}
      </div>
      <div>
        {winner === 0 && <p>Turn: Player {player1 ? "1 (X)" : "2 (O)"}</p>}
        {winner === 1 && <p>Player 1 (X) wins!</p>}
        {winner === 2 && <p>Player 2 (O) wins!</p>}
        {winner === 3 && <p>It's a draw!</p>}
        <button onClick={resetGame} style={{ marginTop: 20, padding: "10px 20px" }}>Reset</button>
      </div>
    </div>
  );
}

export default XandO;
