import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Nineth = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // get data from managers
  const getClick = async () => {
    const body = {
      search_keyword: "jobir",
      per_page: 10,
      page_number: 1,
    };
    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/admin/members`, body, {
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
    "member_phone_number",
    "member_name",
    "member_email",
    "member_gender",
    "member_birthdate",
  ];
  let header = ["번호", "이름", "이메일", "성별", "생년월일", "상세 정보"];
  console.log(data);
  return (
    <div>
      <Navbar select />
      <Table
        header={header}
        bodySample={bodySample}
        count={8}
        param="nineth"
        data={data}
      />
    </div>
  );
};

export default Nineth;
