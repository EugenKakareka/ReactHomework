import React from "react";
import { useGameStore } from "../../context";

export default function WinnersHistory() {
  const [state] = useGameStore();
  return (
    <div>
      <h3>Winners list</h3>
      <ul className="winnersList">
        {state.winnersHistory.map((item, i) => (
          <li key={i}>
            <span>{item}</span> <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
