import React from "react";
import { useGameStore } from "../../context";
import { startNewGame } from "../../actions";

export default function Winner() {
  const [state, dispatch] = useGameStore();

  if (state.winner) {
    return (
      <div className="winner">
        {state.winner === "Draw" ? (
          <h2>We don't have winner</h2>
        ) : (
          <h2>Winner:{state.winner}</h2>
        )}

        <button onClick={() => dispatch(startNewGame())}>Start New Game</button>
      </div>
    );
  }
  return (
    <div className="turn">
      {state.isXTurn ? <p>X turn now</p> : <p>O turn now</p>}
    </div>
  );
}
