import { createStore } from "redux";

export const ACTION_CHANGE_LASTNAME = "ACTION_CHANGE_LASTNAME";
export const ACTION_CHANGE_FIRSTNAME = "ACTION_CHANGE_FIRSTNAME";
export const ACTION_CHANGE_FATHERNAME = "ACTION_CHANGE_FATHERNAME";

const initialState = {
  lastname: "Иванов",
  firstname: "Иван",
  fathername: "Иванович",
};

const newState = {
  [ACTION_CHANGE_LASTNAME]: (state, payload) => ({
    ...state,
    lastname: payload,
  }),
  [ACTION_CHANGE_FIRSTNAME]: (state, payload) => ({
    ...state,
    firstname: payload,
  }),
  [ACTION_CHANGE_FATHERNAME]: (state, payload) => ({
    ...state,
    fathername: payload,
  }),
};

const rootReducer = (state = initialState, { type, payload }) => {
  return newState[type] ? newState[type](state, payload) : state;
};

export const store = createStore(rootReducer);