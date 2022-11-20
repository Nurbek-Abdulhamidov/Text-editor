import React from "react";
import { Input } from "antd";
import { InputDiv } from "./style";

const GenericInput = ({ placeholder, width, defaultValue }) => {
  return (
    <InputDiv width={width}>
      <Input placeholder={placeholder} defaultValue={defaultValue} />
    </InputDiv>
  );
};

export default GenericInput;
