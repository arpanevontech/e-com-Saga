import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./producerReducer";

export default combineReducers({
  cartData,
  productData,
});
