const filtersInitialState = {
  selectedCountry: [],
  selectedLanguage: [],
  selectedTeacher: null,
  minPrice: 2,
  maxPrice: 20,
};

export function filtersReducer(state = filtersInitialState, action) {
  if (action.type === "SELECTEDCOUNTRY") {
    return {
      ...state,
      selectedCountry: action.payload,
    };
  }
  if (action.type === "SELECTEDLANGUAGE") {
    return {
      ...state,
      selectedLanguage: action.payload,
    };
  }
  if (action.type === "SELECTEDTEACHER") {
    return {
      ...state,
      selectedTeacher: action.payload,
    };
  }

  if (action.type === "CLEAR") {
    return {
      ...state,
      selectedCountry: [],
      selectedLanguage: [],
    };
  }
  if (action.type === "MINVALUE") {
    return {
      ...state,
      minPrice: action.payload,
    };
  }
  if (action.type === "MAXVALUE") {
    return {
      ...state,
      maxPrice: action.payload,
    };
  }
  return state;
}
