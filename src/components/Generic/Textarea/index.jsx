import React from "react";
import { Input } from "antd";
import { Wrapper } from "./style";
const { TextArea } = Input;
const GenericTextArea = ({ margin, row }) => (
  <Wrapper margin={margin}>
    <TextArea rows={row} />
  </Wrapper>
);
export default GenericTextArea;
