import React from "react";
import { useGameStore } from "../../context";

export default function WinnersHistory() {
  const [state] = useGameStore();
  return (
    <ul className="winnersList">
      {state.winnersHistory.map((item, i) => (
        <li key={i}>
          {i + 1}. <span>{item.winner}</span> <span>{item.date}</span>
        </li>
      ))}
    </ul>
  );
}
