export const GET_STARSHIPS = "GET_STARSHIPS";
export const SET_STARSHIPS = "SET_STARSHIPS";

export const getStarships = () => {
  return {
    type: GET_STARSHIPS,
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
