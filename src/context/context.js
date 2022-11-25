import { createContext, useState } from "react";
import secondData from "../mock/secondData";

export const UserContext = createContext();

const UsersList = ({ children }) => {
  const [users, setUsers] = useState(secondData);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersList;
