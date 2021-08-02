import {
  ACTION_CHANGE_LASTNAME,
  ACTION_CHANGE_FIRSTNAME,
  ACTION_CHANGE_FATHERNAME,
} from "./consts";

export const changeLastname = (lastname) => ({
  type: ACTION_CHANGE_LASTNAME,
  payload: lastname,
});
export const changeFirstname = (firstname) => ({
  type: ACTION_CHANGE_FIRSTNAME,
  payload: firstname,
});
export const changeFathername = (fathername) => ({
  type: ACTION_CHANGE_FATHERNAME,
  payload: fathername,
});
