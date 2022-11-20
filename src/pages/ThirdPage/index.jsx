import React from "react";
import Selector from "../../components/Generic/NavBottom";
import Navbar from "../../components/Navbar";
import SecondPage from "../SecondPage";

const Third = () => {
  return (
    <div>
      <Navbar />
      <Selector />
      <div>
        <SecondPage/>
      </div>
    </div>
  );
};

export default Third;
