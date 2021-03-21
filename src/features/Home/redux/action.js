export const GET_STARSHIPS = "GET_STARSHIPS";
export const GET_STARSHIPS_SEARCH = "GET_STARSHIPS_SEARCH";
export const GET_SEARCH = "GET_SEARCH";
export const SET_STARSHIPS = "SET_STARSHIPS";
export const SET_ADDITIONAL = "SET_ADDITIONAL";

export const getStarships = () => {
  return {
    type: GET_STARSHIPS,
  };
};

export const getStarshipsSearch = () => {
  return {
    type: GET_STARSHIPS_SEARCH,
  };
};

export const getSearch = (text) => {
  return {
    type: GET_SEARCH,
    text,
  };
};

export const setAdditional = (payload) => {
  return {
    type: SET_ADDITIONAL,
    payload,
  };
};

export const setStarships = (payload) => {
  return {
    type: SET_STARSHIPS,
    payload,
  };
};
