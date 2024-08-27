import json from "../../components/teachers/data.json";
import { createSlice } from "@reduxjs/toolkit";

const jsonDataState = {
  data: json.data,
};

const dataSlice = createSlice({
  name: "jsonData",
  initialState: jsonDataState,
  reducers: {},
});

export const { data } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
