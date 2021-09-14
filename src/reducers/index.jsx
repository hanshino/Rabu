import { combineReducers } from "redux-immutable";
import theme from "./theme";
import nav from "./nav";

export default combineReducers({ theme, nav });
