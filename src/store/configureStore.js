import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import Immutable from "immutable";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import listener from "./subscribe";
import { theme } from "./persistedState";

const initialState = Immutable.Map({ theme });

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger({ stateTransformer: state => state.toJS() }));
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

store.subscribe(() => listener(store));

export default store;
