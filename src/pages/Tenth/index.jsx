import React from "react";
import { Textarea } from "../../components/Generic";
import Input from "../../components/Generic/Input";
import RadioBtn from "../../components/Generic/Radio";
import Navbar from "../../components/Navbar";

const Tenth = () => {
  const radio = [
    { id: 1, text: "1등급" },
    { id: 2, text: "2등급" },
    { id: 3, text: "3등급" },
    { id: 4, text: "4등급" },
  ];
  return (
    <div>
      <Navbar send />
      <div>
        <label>제목 </label>
        <Input />
      </div>
      <div>
        <label>대상 등급</label>
        <RadioBtn radios={radio} />
      </div>
      <div>
        <label>제목 </label>
        <Input />
      </div>
      <div>
        <label>제목 </label>
        <Textarea />
      </div>
    </div>
  );
};

export default Tenth;
