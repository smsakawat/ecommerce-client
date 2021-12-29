import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productDetialsReducer, productReducer } from "../reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails:productDetialsReducer,

});
const middlwware = [thunk];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlwware))
);

export default store;
