import * as actionTypes from "../constants/actionTypes";
import { handleActions } from "redux-actions";
import { NavState } from "../constants/models";

const navReducer = handleActions(
  {
    [actionTypes.TOGGLE_BAR]: state =>
      state.set("drawerOpen", !state.get("drawerOpen")),
  },
  NavState
);

export default navReducer;
