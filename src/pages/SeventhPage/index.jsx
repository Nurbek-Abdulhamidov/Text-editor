import React from "react";
import { Textarea } from "../../components/Generic";
import Input from "../../components/Generic/Input";
import Navbar from "../../components/Navbar";

const SevenPage = () => {
  return (
    <div>
      <Navbar send />
      <div>
        <p className="text">제목</p>
        <Input />
      </div>
      <div>
        <p className="text">내용</p>
        <Textarea row="6" />
      </div>
    </div>
  );
};

export default SevenPage;
