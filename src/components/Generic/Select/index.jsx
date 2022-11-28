import React from 'react';
import { Select } from 'antd';
import { Wrapper } from './style';
import { useConsulation } from '../../../context/consultation';

const Selection = ({ mr }) => {
  const [{ order }, dispatch] = useConsulation();
  const handleChange = (value) => {
    dispatch({ type: 'order', payload: value });
  };

  return (
    <Wrapper>
      <Select
        defaultValue='남은 일수 순'
        style={{
          width: '150px',
          marginTop: () => (mr ? '10px' : ''),
        }}
        onChange={handleChange}
        options={[
          {
            value: 'remaining_days',
            label: '남은 일수 순',
          },
          {
            value: 'update_time',
            label: '등록일 순',
          },
          {
            value: 'member_level',
            label: '등급 순',
          },
        ]}
      />
    </Wrapper>
  );
};
export default Selection;
