import React, { useReducer, useContext } from "react";
import movieReducer, { movieInitialState } from "./movie/reducer";
import useCombinedReducers from "../hooks/useReducer";

const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    movieState: useReducer(movieReducer, movieInitialState),
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);

export { StateContext, useStateContext };