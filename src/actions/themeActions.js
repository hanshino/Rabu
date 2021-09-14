import { createAction } from "redux-actions";
import * as actionTypes from "../constants/actionTypes";

export const changeDark = createAction(actionTypes.CHANGE_DARK);
export const changeLight = createAction(actionTypes.CHANGE_LIGHT);
