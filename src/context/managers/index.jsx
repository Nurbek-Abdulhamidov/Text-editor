import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reduce';

export const ManagersContext = createContext();

export const ManagersPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ManagersContext.Provider value={[state, dispatch]}>
      {children}
    </ManagersContext.Provider>
  );
};

export const useManagers = () => {
  return useContext(ManagersContext);
};
