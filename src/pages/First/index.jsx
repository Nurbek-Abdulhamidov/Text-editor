import React, { useEffect } from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const First = () => {
  const [body, setData] = useState([]);

  useEffect(() => {
    fetch("http://13.125.232.195/admin/managers", {
      method: "POST ",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
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
