import { createAction } from "redux-actions";
import * as actionTypes from "../constants/actionTypes";

export const nextBoss = createAction(actionTypes.NEXT_BOSS);
export const previousBoss = createAction(actionTypes.PREVIOUS_BOSS);
export const selectBoss = createAction(actionTypes.SELECT_BOSS);
export const selectLevel = createAction(actionTypes.SELECT_LEVEL);
export const setAvailable = createAction(actionTypes.SET_AVAILABLE);
export const resetRoomAll = createAction(actionTypes.RESET_ROOM_ALL);
export const setRoomNumber = createAction(actionTypes.SET_ROOM_NUMBER);
export const setRoomNote = createAction(actionTypes.SET_ROOM_NOTE);
