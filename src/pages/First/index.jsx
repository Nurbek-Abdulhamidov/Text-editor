import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/Generic/Button";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
      setData({ data });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("fail", error);
    }
  };

  useEffect(() => {
    getClick();
  }, []);

  console.log(data);

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

export default Home;
