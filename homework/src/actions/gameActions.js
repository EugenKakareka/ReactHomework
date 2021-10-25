export const ADD_TO_HISTORY = "add to history";
export const GO_TO_STEP = "go to step";
export const SET_WINNER = "set winner";
export const START_NEW_GAME = "start new game";
export const TOGGLE_TURN = "toggle turn";
export  const WINNERS_HISTORY = "add to winners history";

export const addToHistory = (squares) => ({
  type: ADD_TO_HISTORY,
  payload: { squares },
});

export const goToStep = (index) => ({
  type: GO_TO_STEP,
  payload: index,
});

export const setWinner = (winner) => ({
  type: SET_WINNER,
  payload: winner,
});
export const startNewGame = () => ({
  type: START_NEW_GAME,
});

export const toggleTurn = (turn) => ({
  type: TOGGLE_TURN,
  payload: turn,
});

export const addToWinnersHistory = (winner) =>({
    type: WINNERS_HISTORY,
    payload: winner
})
