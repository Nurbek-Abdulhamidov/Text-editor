import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Selector from '../../components/Generic/NavBottom';
import Table from '../../components/Table';
import { useConsulation } from '../../context/consultation';

const Second = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [{ data, order, status, size, page, keyword, scope }, dispatch] =
    useConsulation();
  let token = localStorage.getItem('token');

  const getClick = async () => {
    const body = {
      consultation_type: 'comprehensive',
      search_scope: scope,
      search_keyword: keyword,
      consultation_status: status,
      order_by: order,
      per_page: size,
      page_number: page,
    };
    try {
      const { data } = await axios.post(`${url}/admin/consultations`, body, {
        headers: {
          Authentication: token,
        },
      });
      dispatch({ type: 'setData', payload: data?.data });
    } catch (error) {}
  };
  useEffect(() => {
    getClick();
  }, [order, status, page, size, keyword, scope]);
  let header = [
    '번호',
    '작성자  ID',
    '회원 등급',
    '등록일',
    '남은 일수',
    '작성 상태',
  ];
  let bodySample = [
    'consultation_id',
    'member_id',
    'member_level',
    'update_time',
    'remaining_days',
  ];
  return (
    <div>
      <div>
        <Navbar select type='consulation' />
        <Selector />
      </div>
      <div>
        <Table
          // count={8}
          header={header}
          param='second'
          data={data}
          bodySample={bodySample}
          type='작성 상태'
          size={size}
          page={page}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default Second;
