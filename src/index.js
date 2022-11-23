import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
import Root from "./routes";
import secondData from "./mock/secondData";

export const UserContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={secondData}>
      <Root />
    </UserContext.Provider>
  </React.StrictMode>
);
