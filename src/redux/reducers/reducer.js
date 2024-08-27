// import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";
import { filtersReducer } from "./filtersReducer";
import { dataReducer } from "./jsonDataReducer";
// import { filtersReducer } from "./filtersReducer";
// import { jsonDataReducer } from "./jsonDataReducer";
import { configureStore } from "@reduxjs/toolkit";

// export const rootReducer = combineReducers({
//   filters: filtersReducer,
//   sorts: sortReducer,
//   json: jsonDataReducer,
// });

export const store = configureStore({
  reducer: {
    sorts: sortReducer,
    filters: filtersReducer,
    jsonData: dataReducer,
  },
});
