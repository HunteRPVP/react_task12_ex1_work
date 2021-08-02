import {
  ACTION_CHANGE_LASTNAME,
  ACTION_CHANGE_FIRSTNAME,
  ACTION_CHANGE_FATHERNAME,
} from "./consts";
import { combineReducers } from "redux";

const initialFirstState = {
  firstname: "Иван",
};

const initialLastState = {
  lastname: "Иванов",
};

const initialPatronymicState = {
  fathername: "Иванович",
};

const newLastState = {
  [ACTION_CHANGE_LASTNAME]: (payload) => ({
    lastname: payload,
  }),
};

const newFirstState = {
  [ACTION_CHANGE_FIRSTNAME]: (payload) => ({
    firstname: payload,
  }),
};

const newFatherState = {
  [ACTION_CHANGE_FATHERNAME]: (payload) => ({
    fathername: payload,
  }),
};

const firstReducer = (state = initialFirstState, { payload }) => {
  return newFirstState[ACTION_CHANGE_FIRSTNAME]
    ? newFirstState[ACTION_CHANGE_FIRSTNAME](payload)
    : state;
};

const lastReducer = (state = initialLastState, { payload }) => {
  return newLastState[ACTION_CHANGE_LASTNAME]
    ? newLastState[ACTION_CHANGE_LASTNAME](payload)
    : state;
};

const patronymicReducer = (state = initialPatronymicState, { payload }) => {
  return newFatherState[ACTION_CHANGE_FATHERNAME]
    ? newFatherState[ACTION_CHANGE_FATHERNAME](payload)
    : state;
};

export const rootReducer = combineReducers({
  firstname: firstReducer,
  lastname: lastReducer,
  fathername: patronymicReducer,
});
