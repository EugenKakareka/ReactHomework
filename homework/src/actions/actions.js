export const NEXT_STEP = "[form]-next step";
export const PREVIOUS_STEP = "[form]-previous step";
export const SAVE_STEP_DATA = "[form]-save step data";
export const ADD_FILE = '[form]-add file';

export const initialState = {
  step: 1,
  data:{},
  file:''
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

export const addFile = (file) => ({
  type:ADD_FILE,
  payload: file
})