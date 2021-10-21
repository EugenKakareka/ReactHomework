 import { NEXT_STEP,PREVIOUS_STEP,SAVE_STEP_DATA,ADD_FILE } from "../actions/actions";

 export const initialState = {
  step: 1,
  data:{},
  file:''
};

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
    case ADD_FILE:{
      if (!action.payload.upload[0]){
        return state
      }
      let reader = new FileReader();
			reader.readAsDataURL(action.payload.upload[0]);
			return { ...state, file: reader };
    }
    default:
      return state;
  }
};
