import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
const Fifth = () => {
  return (
    <div>
      <Navbar select />
      <Table count={8} param={"fifth"} />
    </div>
  );
};

export default Fifth;
