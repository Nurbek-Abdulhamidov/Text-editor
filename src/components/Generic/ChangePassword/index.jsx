import React from "react";
import Input from "../Input";

const ChangePsw = () => {
  return (
    <div>
      <div>
        <label>현재 비밀번호</label>
        <Input mt="0" placeholder={"현재 비밀번호"} />
      </div>
      <div>
        <label>새 비밀번호</label>
        <Input mt="0" placeholder={"새 비밀번호"} />
      </div>
      <div>
        <label>새 비밀번호 확인</label>
        <Input mt="0" placeholder={"새 비밀번호 확인"} />
      </div>
    </div>
  );
};

export default ChangePsw;
