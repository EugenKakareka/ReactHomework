import React from "react";
import "./Game.scss";
import Board from "../Board/Board";
import { useGameStore } from "../../context";
import { getSignTurn, calculateWinner } from "../../utils";
import { addToHistory, setWinner, toggleTurn } from "../../actions";
import Winner from "../Winner/Winner";
import StepsHistory from "../StepsHistory/StepsHistory";

export default function Game() {
  const [{ history, isXTurn }, dispatch] = useGameStore();
  const currentStep = history[history.length - 1];

  const handleClick = (i) => {
    const squares = [...currentStep.squares];
    squares[i] = getSignTurn(history.length);

    const winner = calculateWinner(squares);

    if (winner) {
      dispatch(setWinner(winner));
    }

    dispatch(addToHistory(squares));
    dispatch(toggleTurn(isXTurn));
  };

  return (
    <div className="game">
      <Board squares={currentStep.squares} onClick={handleClick} />
      <Winner />
      <StepsHistory />
    </div>
  );
}
