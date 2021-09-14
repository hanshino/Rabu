import { createAction } from "redux-actions";
import * as actionTypes from "../constants/actionTypes";

export const toggleBar = createAction(actionTypes.TOGGLE_BAR);
