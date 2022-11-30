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
        <Table count={8} param="종합건강검진상담"  />
      </div>
    </div>
  );
};

export default Third;
