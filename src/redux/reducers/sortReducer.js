import { createSlice } from "@reduxjs/toolkit";

const sortInitialState = {
  change: {
    selectButton: "orderByLessons",
    rotate: false,
  },
};

const sortSlice = createSlice({
  name: "sorts",
  initialState: sortInitialState,
  reducers: {
    change(state, action) {
      state.change = action.payload;
    },
  },
});

export const { change } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;

// export function sortReducer(state = sortInitialState, action) {
//   if (action.type === "CHANGE") {
//     return {
//       ...state,
//       change: action.payload,
//     };
//   }
//   return state;
// }
