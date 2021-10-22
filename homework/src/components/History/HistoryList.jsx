import React from "react";
import { goToStep } from "../../actions";
import { useGameStore } from "../../context";

export default function HistoryList() {
  const [state, dispatch] = useGameStore();

  return (
    <div className="historyList">
      {state.history.map((i, index) =>{
        if(index>0){
          return (<button key={index} onClick={()=>dispatch(goToStep(index))}>Go to step :{index}</button>)
        }
        else {return null}
      })}
    </div>
  );
}

