const NEXT_STEP = "[form]-next step";
const PREVIOUS_STEP = "[form]-previous step";
const SAVE_STEP_DATA = "[form]-save step data"

export const initialState = {
  step: 1,
  data:{}
};

export const nextForm = (step) => ({
  type: NEXT_STEP,
  payload: step,
});

export const prevForm = (step) => ({
    type: PREVIOUS_STEP,
    payload: step,
  });

export const saveData = (data) => ({
    type: SAVE_STEP_DATA,
    payload: data
  });

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP: {
      return {
        ...state,
        step: state.step + action.payload
      };
    }
    case PREVIOUS_STEP: {
        return {
            ...state,
            step: state.step - action.payload
        }
    } 
    case SAVE_STEP_DATA:{
        return {
            ...state,
            data:{...state.data, ...action.payload}
        }
    }
    default:
      return state;
  }
};
