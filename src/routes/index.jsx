import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Navigate to="/관리자관리" />} />
          {navbar.map(({ path, element, id, hide }) => {
            return !hide && <Route key={id} path={path} element={element} />;
          })}
        </Route>
        {navbar.map(({ path, element, id, hide }) => {
          return hide && <Route key={id} path={path} element={element} />;
        })}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
