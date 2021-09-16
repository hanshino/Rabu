import * as actionTypes from "../constants/actionTypes";
import { handleActions } from "redux-actions";
import { MultiBossState } from "../constants/models";

const navReducer = handleActions(
  {
    [actionTypes.ADD_NEW_ROOM]: (state, payload) => {
      let { boss, number, note } = payload;
      const { bosses } = { ...state };
      let target = bosses.findIndex(data => data.boss === boss);
      let temp = target === -1 ? [] : [...bosses[target]];
      temp.push({ number, note });

      if (target === -1) {
        bosses.push(temp);
      } else {
        bosses[target] = temp;
      }

      return { bosses };
    },
  },
  MultiBossState
);

export default navReducer;
