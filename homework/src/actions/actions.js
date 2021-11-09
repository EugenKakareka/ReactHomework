export const DELETE_USER = "delete user";
export const CREATE_USER = "create new user ID and Name";
export const SAVE_TIME = "save time for new user";
export const ADD_USER = "add  new user to users list";
export const SEARCH_USER = "search user by name or id";
export const SET_WINNER = "set winner";

export const deleteUser = (payload) => ({ type: DELETE_USER, payload });
export const createUser = (payload) => ({ type: CREATE_USER, payload });
export const saveTime = (payload) => ({ type: SAVE_TIME, payload });
export const addUser = () => ({ type: ADD_USER });
export const searchUser = (payload) => ({ type: SEARCH_USER, payload });
export const setWinner = () => ({ type: SET_WINNER });
