import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";
import { filtersReducer } from "./filtersReducer";
import { jsonDataReducer } from "./jsonDataReducer";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  sorts: sortReducer,
  json: jsonDataReducer,
});
