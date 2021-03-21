export const GET_STARSHIPS = "GET_STARSHIPS";
export const GET_SEARCH = "GET_SEARCH";
export const SET_STARSHIPS = "SET_STARSHIPS";

export const getStarships = (page) => {
  return {
    type: GET_STARSHIPS,
    page,
  };
};

export const getSearch = (text) => {
  return {
    type: GET_SEARCH,
    text,
  };
};

export const setStarships = (payload, prevPage, nextPage) => {
  return {
    type: SET_STARSHIPS,
    payload,
    prevPage,
    nextPage,
  };
};
