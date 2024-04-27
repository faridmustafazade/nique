import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./Reducers/auth";
import wishlistReducer from "./Slice/Wishlist";
import cart from "./Slice/cartSlice";

const initialState = {};

const reducers = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
  cart: cart,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
