import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Eighth = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // get data from managers
  const getClick = async () => {
    const body = {
      search_keyword: "oo",
      search_scope: "all",
      per_page: 10,
      page_number: 1,
    };
    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/admin/faq`, body, {
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
    "content",
    "manager_type",
    "title",
    "create_time",
  ];
  let header = [
    "번호",
    "작성한 관리자",
    "구분 ",
    "제목",
    "등록일",
    "상세 정보",
  ];
  console.log(data);
  return (
    <div>
      <Navbar select />
      <div>
        <Table
          header={header}
          count={8}
          bodySample={bodySample}
          data={data}
          type="탈퇴"
          param={"faq"}
        />
      </div>
    </div>
  );
};

export default Eighth;
