import { SET_STARSHIPS, SET_ADDITIONAL } from "./action";

const initialState = {
  starships: [],
  nextPage: 1,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARSHIPS:
      return {
        ...state,
        starships: action.payload,
      };

    case SET_ADDITIONAL:
      return {
        ...state,
        nextPage: action.payload ? action.payload : state.nextPage + 1,
      };

    default:
      return state;
  }
};
