import { SET_DETAILS } from "./action";

const initialState = {
  details: {},
};

export const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};
