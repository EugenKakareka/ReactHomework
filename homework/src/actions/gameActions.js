export const ADD_TO_HISTORY = 'add to history';
export const GO_TO_STEP = 'go to step';
export const SET_WINNER = 'set winner';

export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
})

export const goToStep = (index) => ({
    type:GO_TO_STEP,
    payload:index
})

export const setWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner
})