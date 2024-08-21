import json from "../../components/teachers/data.json";
const jsonDataState = {
  data: json.data,
};

export function jsonDataReducer(state = jsonDataState) {
  return state;
}
