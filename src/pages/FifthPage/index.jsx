import React from "react";
import Editor from "../../components/Editor";
import Input from "../../components/Generic/Input";
import RadioBtn from "../../components/Generic/Radio";
import Navbar from "../../components/Navbar";

const FifthPage = () => {
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
        <label className="text">운동, 식이 (택1)</label>
        <RadioBtn />
      </div>
      <div>
        <Editor />
      </div>
    </div>
  );
};

export default FifthPage;
