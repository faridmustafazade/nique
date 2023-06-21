import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./Reducers/auth";
import wishlistReducer from "./Slice/Wishlist";

const initialState = {};

const reducers = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
