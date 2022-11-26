import React, { useEffect } from "react";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Login from "../Login";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");
console.log(token);
const First = () => {
  console.log("sd");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/admin/managers`, {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        manager_access_token: token,
      },
      // body: JSON.stringify(data),
    }).then((res) => console.log(res));
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
