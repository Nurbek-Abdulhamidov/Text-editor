import React from 'react';

import Selection from '../Select';
import Switcher from '../Switch';
import { Container, Left, Right, Wrapper } from './style';

const Selector = () => {
  let opt = [
    {
      value: 'remaining_days',
      label: '남은 일수',
    },
    {
      value: 'member_level',
      label: '등급순',
    },
  ];
  return (
    <Wrapper>
      <Container>
        <Left></Left>
        <Right>
          <label>작성 필요만 보기</label>
          <Switcher />
          <div>
            <Selection opt={opt} default='등록일 순' />
          </div>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Selector;
