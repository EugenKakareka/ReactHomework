import React from "react";
import "./Game.scss";
import Board from "../Board/Board";
import { useGameStore } from "../../context";
import { getSignTurn, calculateWinner } from "../../utils";
import { addToHistory, setWinner } from "../../actions";
import HistoryList from "../History/HistoryList";

export default function Game() {
  const [{ history }, dispatch] = useGameStore();
  const currentStep = history[history.length - 1];

  const handleClick = (i) => {
    const squares = [...currentStep.squares];
    squares[i] = getSignTurn(history.length);

    const winner = calculateWinner(squares);
    console.log(winner);
    if (winner) {
      dispatch(setWinner(winner));
    }

    dispatch(addToHistory(squares));
  };

  return (
    <div className="game">
      <Board squares={currentStep.squares} onClick={handleClick} />
      <HistoryList />
    </div>
  );
}
