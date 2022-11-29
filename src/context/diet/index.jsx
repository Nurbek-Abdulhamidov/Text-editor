import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reduce';

export const DietContext = createContext();

export const DietPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DietContext.Provider value={[state, dispatch]}>
      {children}
    </DietContext.Provider>
  );
};

export const useDiet = () => {
  return useContext(DietContext);
};
