import { createStore as reduxCreateStore, applyMiddleware } from "redux";

import rootReducer from "../reducers";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const createStore = () =>
  reduxCreateStore(rootReducer, initialState, applyMiddleware(...middleware));
export default createStore;
