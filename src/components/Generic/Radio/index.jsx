import React, { useState } from 'react';
import { Radio } from 'antd';
const RadioBtn = ({ radios }) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      style={{ display: 'flex', gap: '80px', margin: '20px 0' }}
    >
      {radios.map((item, index) => (
        <Radio value={item.id} key={index}>
          {item.text}
        </Radio>
      ))}
    </Radio.Group>
  );
};
export default RadioBtn;
