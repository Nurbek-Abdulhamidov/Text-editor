import React from "react";
import Input from "../../components/Generic/Input";
import RadioBtn from "../../components/Generic/Radio";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import { Wrapper } from "../SecondPage/style";

const NinethPage = () => {
  const radios = [
    { id: 1, text: "1등급" },
    { id: 2, text: "2등급" },
    { id: 3, text: "3등급" },
    { id: 4, text: "4등급" },
    { id: 5, text: "남자" },
    { id: 6, text: "여자" },
  ];
  return (
    <div>
      <Navbar send />
      <Wrapper>
        <div>
          <label>이름</label>
          <Input />
        </div>

        <div>
          <label>상담신청 횟수</label>
          <Input />
        </div>
        <div>
          <label>완료된 상담 횟수</label>
          <Input />
        </div>
      </Wrapper>
      <Wrapper>{<RadioBtn radios={radios} />}</Wrapper>
      <Wrapper>
        <div>
          <label>이메일</label>
          <Input type={"email"} width={"400px"} />
        </div>
        <div>
          <label>생년월일</label>
          <Input width={"400px"} />
        </div>
      </Wrapper>
      <Table confirm count={5} />
    </div>
  );
};

export default NinethPage;
