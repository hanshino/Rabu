import * as actionTypes from "../constants/actionTypes";
import { handleActions } from "redux-actions";
import { ThemeState } from "../constants/models";

const themeReducer = handleActions(
  {
    [actionTypes.CHANGE_DARK]: state => state.set("theme", "dark"),
    [actionTypes.CHANGE_LIGHT]: state => state.set("theme", "light"),
  },
  ThemeState
);

export default themeReducer;
