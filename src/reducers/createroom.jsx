import * as actionTypes from "../constants/actionTypes";
import { handleActions } from "redux-actions";
import { CreateBossState } from "../constants/models";

const createroomReducer = handleActions(
  {
    [actionTypes.RESET_ROOM_ALL]: () => CreateBossState,
    [actionTypes.SELECT_BOSS]: (state, { payload }) => ({
      ...state,
      current: payload.current,
      name: state.available[payload.current].name,
      level: state.available[payload.current].levels[0],
    }),
    [actionTypes.SET_AVAILABLE]: (state, { payload }) => {
      let defaultIdx = 0;
      let currentBoss = payload.available[defaultIdx];
      return {
        ...state,
        available: payload.available,
        current: defaultIdx,
        name: currentBoss.name,
        level: currentBoss.levels[0],
      };
    },
    [actionTypes.NEXT_BOSS]: state => {
      let { current, available } = state;
      let nextIdx = (current + 1) % available.length;
      let { name, level } = getDefault(available, nextIdx);

      return {
        ...state,
        current: nextIdx,
        name,
        level,
      };
    },
    [actionTypes.PREVIOUS_BOSS]: state => {
      let { current, available } = state;
      let preIdx = current - 1 < 0 ? available.length - 1 : current - 1;
      let { name, level } = getDefault(available, preIdx);
      return {
        ...state,
        current: preIdx,
        name,
        level,
      };
    },
    [actionTypes.SELECT_LEVEL]: (state, { payload }) => ({
      ...state,
      level: payload.level,
    }),
    [actionTypes.SET_ROOM_NUMBER]: (state, { payload }) => ({
      ...state,
      number: payload.number,
    }),
    [actionTypes.SET_ROOM_NOTE]: (state, { payload }) => ({
      ...state,
      note: payload.note,
    }),
  },
  CreateBossState
);

function getDefault(available, idx) {
  let { name, levels } = available[idx];
  return { name, level: levels[0] };
}

export default createroomReducer;
