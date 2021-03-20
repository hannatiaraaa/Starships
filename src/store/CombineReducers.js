import { combineReducers } from "redux";
import { GlobalReducer } from "./GlobalReducer";
import { HomeReducer } from "../features/Home/redux/reducer";

export const CombineReducers = combineReducers({
  GlobalReducer,
  HomeReducer,
});
