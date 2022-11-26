import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const { REACT_APP_BASE_URL: url } = process.env;
let token = localStorage.getItem("token");

const Home = () => {
  // useEffect(() => {
  //   fetch(`${url}/admin/managers`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application-json",
  //       Authentication:
  //         "Ybk7eaFQTwIvH9kD3h4GRYYUIRyHi9y6mD6MqxC7tOQmHfSOj1Sm2qRVf3AKtsHOG1G7d2j4tP9jZ3cvCxl9V4jAmOTQRXxqM0sMSrFXdNokKy1WLACYvn6q4KWnO0x62uetrWSOuOFvVn7EfVqpQ9",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);
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
