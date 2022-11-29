import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import axios from "axios";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // get data from managers
  const getClick = async () => {
    const body = {
      search_scope: "all",
      search_keyword: "",
    };
    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/admin/managers`, body, {
        headers: {
          Authentication: token,
        },
      });
      setData(data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClick();
  }, []);

  let bodySample = [
    "manager_id",
    "manager_type",
    "managerId",
    "manager_phone_number",
    "manager_status",
  ];
  let header = ["번호", "등급", "관리자 ID", "연락처", "가입일", "관리"];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Table
          header={header}
          count={8}
          bodySample={bodySample}
          data={data}
          type="탈퇴"
          param="second"
          confirm
        />
      </div>
    </div>
  );
};

export default Home;
