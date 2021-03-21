import { combineReducers } from "redux";
import { GlobalReducer } from "./GlobalReducer";
import { HomeReducer } from "../features/Home/redux/reducer";
import { DetailsReducer } from "../features/Details/redux/reducer";

export const CombineReducers = combineReducers({
  GlobalReducer,
  HomeReducer,
  DetailsReducer,
});
