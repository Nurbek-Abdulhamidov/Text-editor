import React from "react";
import Selector from "../../components/Generic/NavBottom";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const Fourth = () => {
  return (
    <div>
      <Navbar />
      <Selector />
      <Table count={8} param="fourth" />
    </div>
  );
};

export default Fourth;
