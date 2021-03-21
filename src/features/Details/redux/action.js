export const GET_DETAILS = "GET_DETAILS";
export const SET_DETAILS = "SET_DETAILS";

export const getDetails = (url) => {
  return {
    type: GET_DETAILS,
    url,
  };
};

export const setDetails = (payload) => {
  return {
    type: SET_DETAILS,
    payload,
  };
};
