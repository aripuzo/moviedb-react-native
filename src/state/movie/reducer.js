import {
    SET_MOVIES,
    SET_ERROR_MESSAGE,
    SET_IS_LOADING,
    SET_PAGE
  } from "./type";
  
  export const movieInitialState = {
    query: null,
    errorMessage: null,
    movies: [],
    currentPage: 0,
    isLoading: false,
  };
  
  export default function movieReducer(state = movieInitialState, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_IS_LOADING: {
        return {
          ...state,
          isLoading: payload,
        };
      }

      case SET_PAGE: {
        return {
          ...state,
          page: payload,
        };
      }
  
      case SET_MOVIES: {
        return {
          ...state,
          ...payload,
          errorMessage: null,
          isLoading: false,
        };
      }
  
      case SET_ERROR_MESSAGE: {
        return {
          ...state,
          errorMessage: payload,
          isLoading: false,
        };
      }
  
      default: {
        return state;
      }
    }
  }