import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import Immutable from "immutable";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

const initialState = Immutable.Map();

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger({ stateTransformer: state => state.toJS() }));
}

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
