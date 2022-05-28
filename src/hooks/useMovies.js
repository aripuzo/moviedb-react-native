import { useState } from "react";

import moviesApi from "../api/moviesApi";
import { useStateContext } from "../state";

import {
  SET_ERROR_MESSAGE,
  SET_IS_LOADING,
  SET_MOVIES
} from "../state/movie/type";

export default () => {
  const [state, setState] = useState({ error: "", isLoading: false });
  const {
    state: { movieState },
    dispatch,
  } = useStateContext();


  const searchMovies = async ({
    query,
    page,
  }) => {
    page = page ? page : 1;
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    });
    const url = "/search/movie?api_key=d3b018581c65b4ac18d55a61391e87ac";
    try {
      const response = await moviesApi.get(url, {
        params: {
            query,
            page: `${page}`,
        },
      });
      console.log(response.data.results);
      dispatch({
        type: SET_MOVIES,
        payload: {
          movies:
            page > 1
              ? [...movieState.movies, ...response.data.results]
              : response.data.results,
          currentPage:
            response.data.results.length > 0 ? page : movieState.currentPage,
          query: query
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: err.response.data.message || "Couldn't connect to the server",
      });
    }
  };

  return {
    searchMovies,
    isLoading: state.isLoading,
    error: state.error,
  };
};
