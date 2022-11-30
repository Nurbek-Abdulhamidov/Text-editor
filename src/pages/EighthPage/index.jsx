import React from "react";
import { Textarea } from "../../components/Generic";
import Input from "../../components/Generic/Input";
import Navbar from "../../components/Navbar";

const EighthPage = () => {
  return (
    <div>
      <Navbar send />
      <div>
        <label className="text">제목 </label>
        <Input />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <label>제목 </label>
        <Textarea />
      </div>
    </div>
  );
};

export default EighthPage;
