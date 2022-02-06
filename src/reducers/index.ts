import menuOpenReducer from "./isMenuOpen";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  menuOpenReducer,
});

export default rootReducer;
