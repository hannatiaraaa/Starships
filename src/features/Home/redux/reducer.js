import { SET_STARSHIPS } from "./action";

const initialState = {
  starships: [],
  prevPage: "",
  nextPage: "",
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARSHIPS:
      return {
        ...state,
        starships: action.payload,
        prevPage: action.previousPage,
        nextPage: action.nextPage,
      };

    default:
      return state;
  }
};
