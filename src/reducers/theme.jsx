import * as actionTypes from "../constants/actionTypes";
import { handleActions } from "redux-actions";
import { ThemeState } from "../constants/models";

const themeReducer = handleActions(
  {
    [actionTypes.CHANGE_DARK]: () => ({ theme: "dark" }),
    [actionTypes.CHANGE_LIGHT]: () => ({ theme: "light" }),
  },
  ThemeState
);

export default themeReducer;
