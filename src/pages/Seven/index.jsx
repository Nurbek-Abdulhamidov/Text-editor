import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const Seventh = () => {
  return (
    <div>
      <Navbar select />
      <Table count={8} param="공지사항" />
    </div>
  );
};

export default Seventh;
