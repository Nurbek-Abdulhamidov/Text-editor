import React from "react";
import Navbar from "../../components/Navbar";
import Selector from "../../components/Generic/NavBottom";
import Table from "../../components/Table";

const Second = () => {
  return (
    <div>
      <div>
        <Navbar select />
        <Selector />
      </div>
      <div>
        <Table param="second" />
      </div>
    </div>
  );
};

export default Second;
