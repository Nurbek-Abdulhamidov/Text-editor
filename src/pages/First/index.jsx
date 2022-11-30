import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import axios from "axios";
import { useManagers } from "../../context/managers";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [{ data, search_key, size, page }, dispatch] = useManagers();
  console.log(size, "size");
  const getClick = async () => {
    const body = {
      search_scope: "all",
      search_keyword: search_key,
    };
    try {
      // setLoading(true);
      const { data } = await axios.post(`${url}/admin/managers`, body, {
        headers: {
          Authentication: token,
        },
      });
      dispatch({ type: "setData", payload: data?.data });
      // setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClick();
  }, [search_key, size, page]);

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
        <Navbar type="manager" />
      </div>
      <div>
        <Table
          header={header}
          count={9}
          bodySample={bodySample}
          data={data}
          type="탈퇴"
          param="manager-management"
          ok="등록하기"
          removeBtn={true}
          confirm
          dispatch={dispatch}
          size={size}
          page={page}
        />
      </div>
    </div>
  );
};

export default Home;
