import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import { useMember } from "../../context/member";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Nineth = () => {
  const [loading, setLoading] = useState(false);
  const [{ data, page, size, key }, dispatch] = useMember();
  // get data from managers
  const getClick = async () => {
    const body = {
      search_keyword: key,
      per_page: size,
      page_number: page,
    };
    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/admin/members`, body, {
        headers: {
          Authentication: token,
        },
      });
      dispatch({ type: "setData", payload: data?.data });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClick();
  }, [page, size, key]);

  let bodySample = [
    "member_phone_number",
    "member_name",
    "member_email",
    "member_gender",
    "member_birthdate",
  ];
  let header = ["번호", "이름", "이메일", "성별", "생년월일", "상세 정보"];
  return (
    <div>
      <Navbar select dispatch={dispatch} />
      <Table
        header={header}
        bodySample={bodySample}
        param="member-management"
        data={data}
        dispatch={dispatch}
        size={size}
        page={page}
      />
    </div>
  );
};

export default Nineth;
