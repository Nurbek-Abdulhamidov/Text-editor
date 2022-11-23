import React from "react";
import { UserContext } from "../..";

import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const First = () => {
  return (
    <UserContext.Consumer>
      <div>
        <Navbar />
      </div>
      <div>
        <Table count={8} confirm />
      </div>
    </UserContext.Consumer>
  );
};

export default First;
