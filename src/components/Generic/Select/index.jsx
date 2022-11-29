import React, { memo } from 'react';
import { Select } from 'antd';
import { Wrapper } from './style';
import { useConsulation } from '../../../context/consultation';

const Selection = ({ mr, opt, default: def, type }) => {
  const [{ order }, dispatch] = useConsulation();
  const handleChange = (value) => {
    if (type == 'top') {
      dispatch({ type: 'setScope', payload: value });
    }
    dispatch({ type: 'order', payload: value });
  };

  return (
    <Wrapper>
      <Select
        defaultValue={def}
        style={{
          width: '150px',
          marginTop: () => (mr ? '10px' : ''),
        }}
        onChange={handleChange}
        options={opt}
      />
    </Wrapper>
  );
};
export default memo(Selection);
