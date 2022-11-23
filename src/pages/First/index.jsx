import React from "react";

import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const First = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Table count={8} confirm />
      </div>
    </div>
  );
};

export default First;
