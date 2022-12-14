import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;