import { combineReducers } from "redux";

import catalog from "./catalog";
import categories from "./categories";
import cart from "./cart";

const rootReducer = combineReducers({
  catalog,
  categories,
  cart
})

export default rootReducer;