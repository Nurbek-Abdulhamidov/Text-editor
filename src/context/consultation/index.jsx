import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reduce';

export const ConsulationContext = createContext();

export const ConsulationPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConsulationContext.Provider value={[state, dispatch]}>
      {children}
    </ConsulationContext.Provider>
  );
};

export const useConsulation = () => {
  return useContext(ConsulationContext);
};
