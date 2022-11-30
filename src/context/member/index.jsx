import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reduce';

export const MemberContext = createContext();

export const MemberPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MemberContext.Provider value={[state, dispatch]}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => {
  return useContext(MemberContext);
};
