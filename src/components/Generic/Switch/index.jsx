import React from 'react';
import { Switch } from 'antd';
import { useConsulation } from '../../../context/consultation';
const Switcher = () => {
  const [{ status }, dispatch] = useConsulation();
  const onChange = (checked) => {
    checked = checked ? 'consulted' : 'unconsulted';
    dispatch({
      type: 'status',
      payload: checked,
    });
  };
  console.log(status);
  return <Switch onChange={onChange} />;
};
export default Switcher;
