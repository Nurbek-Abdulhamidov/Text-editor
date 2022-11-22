import React from "react";
import Input from "../../components/Generic/Input";
import RadioBtn from "../../components/Generic/Radio";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../SecondPage/style";

const NinethPage = () => {
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
      <Wrapper>
        <div>
          <RadioBtn />
          <RadioBtn />
        </div>
      </Wrapper>
    </div>
  );
};

export default NinethPage;
