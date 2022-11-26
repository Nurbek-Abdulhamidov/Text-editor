import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Navigate to="/login" />} />
          {navbar.map(({ path, element, id, hidden }) => {
            return !hidden && <Route key={id} path={path} element={element} />;
          })}
        </Route>
        {navbar.map(({ path, element, id, hidden }) => {
          return hidden && <Route key={id} path={path} element={element} />;
        })}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
