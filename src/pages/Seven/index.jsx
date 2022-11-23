import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const Seventh = () => {
  return (
    <div>
      <Navbar select />
      <Table count={8} param="seventh" />
    </div>
  );
};

export default Seventh;
