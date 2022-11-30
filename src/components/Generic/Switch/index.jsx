import React from 'react';
import { Switch } from 'antd';
import { useConsulation } from '../../../context/consultation';
const Switcher = () => {
  const [{}, dispatch] = useConsulation();
  const onChange = (checked) => {
    checked = checked ? 'consulted' : 'unconsulted';
    dispatch({
      type: 'status',
      payload: checked,
    });
  };
  return <Switch onChange={onChange} />;
};
export default Switcher;
