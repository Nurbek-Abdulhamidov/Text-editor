import React from "react";
import Selector from "../../components/Generic/NavBottom";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const Third = () => {
  return (
    <div>
      <Navbar />
      <Selector />
      <div>
        <Table param="third" />
      </div>
    </div>
  );
};

export default Third;
