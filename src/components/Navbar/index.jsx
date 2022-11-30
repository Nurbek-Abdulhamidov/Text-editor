import React from 'react';
import { Flex, Hambureger, Left, Nav, Right } from './style';
// import { GiHamburgerMenu } from "react-icons/gi";
import Selection from '../Generic/Select';
import LocalizedModal from '../Generic/Modal';
import Button from '../Generic/Button';
import Input from '../Generic/Input';

const Navbar = ({ select, send, dispatch }) => {
  const handleChange = ({ target }) => {
    dispatch({ type: 'setKey', payload: target.value });
    console.log(target.value, 'c');
  };
  let opt = [
    {
      value: 'member_level',
      label: '회원 등급',
    },
    {
      value: 'manager_id',
      label: '작성자 ID',
    },
    {
      value: 'remaining_days',
      label: '남은 일수',
    },
  ];
  return (
    <Nav>
      <Left>
        {send ? (
          ''
        ) : (
          <Flex>
            <Hambureger>
              <i>{/* <GiHamburgerMenu /> */}</i>
            </Hambureger>
            <p>환영합니다. 000님 관리자 등급 :총관리자</p>
          </Flex>
        )}
      </Left>
      <Right>
        {select ? <Selection opt={opt} default='전체' type='top' /> : ''}
        {send ? '' : <Input onChange={handleChange} />}

        {send ? (
          <LocalizedModal type='disable' title='답변 전송' />
        ) : (
          <div style={{ display: 'flex' }}>
            <Button type='primary' width={'100px'}>
              검색
            </Button>
          </div>
        )}
      </Right>
    </Nav>
  );
};

export default Navbar;
