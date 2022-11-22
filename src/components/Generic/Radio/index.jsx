import React, { useState } from "react";
import { Radio } from "antd";
const RadioBtn = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      style={{ display: "flex", gap: "80px" }}
    >
      <Radio value={1}>운동</Radio>
      <Radio value={2}>식이</Radio>
    </Radio.Group>
  );
};
export default RadioBtn;
