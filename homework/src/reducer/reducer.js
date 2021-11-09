import {
  ADD_USER,
  CREATE_USER,
  DELETE_USER,
  SAVE_TIME,
  SEARCH_USER,
  SET_WINNER,
} from "../actions/actions";
import { users } from "../data/userData";

export const initialState = {
  users: users,
  newUser: {},
  searchUsers: [],
  winner: {},
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        searchUsers: state.searchUsers.filter(
          (user) => user.id !== action.payload
        ),
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case CREATE_USER:
      return {
        ...state,
        newUser: { ...action.payload },
      };
    case SAVE_TIME:
      return {
        ...state,
        newUser: { ...state.newUser, ...action.payload },
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, state.newUser],
        searchUsers: [...state.searchUsers, state.newUser],
      };
    case SEARCH_USER:
      return {
        ...state,
        searchUsers: state.users.filter((user) => {
          return (
            user.firstName
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            user.id.toString().includes(action.payload.toString())
          );
        }),
      };
    case SET_WINNER:
      return {
        ...state,
        winner: [...state.users].sort((a, b) => a.time - b.time)[0],
      };

    default:
      return { ...state, searchUsers: state.users };
  }
};
