import React from "react";
import Selector from "../../components/Generic/NavBottom";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import SecondPage from "../SecondPage";

const Third = () => {
  return (
    <div>
      <Navbar />
      <Selector />
      <div>
        {/* <Table param="third" /> */}
        <SecondPage />
      </div>
    </div>
  );
};

export default Third;
