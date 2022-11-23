import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const Nineth = () => {
  return (
    <div>
      <Navbar select />
      <Table count={8} param="nineth"/>
    </div>
  );
};

export default Nineth;
