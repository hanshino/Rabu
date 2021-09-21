import { combineReducers } from "redux";
import theme from "./theme";
import nav from "./nav";
import multiboss from "./multiboss";
import createroom from "./createroom";

export default combineReducers({ theme, nav, multiboss, createroom });
