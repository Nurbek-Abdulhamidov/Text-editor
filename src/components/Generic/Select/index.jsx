import React from "react";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selection = ({mr}) => (
  <>
    <Select
      defaultValue="등록일 순"
      style={{
        width: "100%",
        marginTop: ({ mr }) => (mr ? "10px" : ""),
      }}
      onChange={handleChange}
      options={[
        {
          value: "등록일 순",
          label: "등록일 순",
        },
        {
          value: "남은 일수 순",
          label: "남은 일수 순",
        },
        {
          value: "등급 순",
          label: "등급 순",
        },
      ]}
    />
  </>
);
export default Selection;
