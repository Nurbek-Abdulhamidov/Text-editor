import React from "react";
import { Switch } from "antd";
import { memo } from "react";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Switcher = () => <Switch defaultChecked onChange={onChange} />;
export default memo(Switcher);
