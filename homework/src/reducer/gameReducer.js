import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY, GO_TO_STEP, SET_WINNER } from '../actions';

export const initialState = {
    isXTurn: true,
    isWinner:false,
    winner:'',
    history: [
        {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
        }
    ],
};

export const gameReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };
        case GO_TO_STEP:
            return {
                ...state,
                winner:'',
                history: state.history.filter((i, index) => index <= action.payload)
            }
        case SET_WINNER:
            return {
                ...state,
                winner:action.payload
            }
        default:
            return state;
    }
};
