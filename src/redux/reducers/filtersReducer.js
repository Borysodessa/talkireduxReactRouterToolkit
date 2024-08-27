import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  selectedCountry: [],
  selectedLanguage: [],
  selectedTeacher: null,
  minPrice: 2,
  maxPrice: 20,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },

    setSelectedLanguage(state, action) {
      state.selectedLanguage = action.payload;
    },
    setSelectedTeacher(state, action) {
      state.selectedTeacher = action.payload;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    setClearFilter() {
      return filtersInitialState;
    },
  },
});

export const {
  setClearFilter,
  setSelectedCountry,
  setSelectedLanguage,
  setSelectedTeacher,
  setMinPrice,
  setMaxPrice,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
