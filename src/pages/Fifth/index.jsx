import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import axios from 'axios';
import { useDiet } from '../../context/diet';

const Fifth = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [{ data, order, status, per_page, page_number }, dispatch] = useDiet();

  let token = localStorage.getItem('token');

  const getClick = async () => {
    const body = {
      consultation_type: 'comprehensive',
      search_scope: 'all',
      search_keyword: '',
      consultation_status: status,
      order_by: order,
      per_page: per_page || data?.length,
      page_number: page_number,
    };
    try {
      const { data } = await axios.post(`${url}/admin/dietexercises`, body, {
        headers: {
          Authentication: token,
        },
      });
      dispatch({ type: 'setData', payload: data?.data });
    } catch (error) {}
  };
  useEffect(() => {
    getClick();
  }, [order, status, per_page, page_number]);
  let header = [
    '번호',
    '작성한 관리자 ID',
    '구분 ',
    '제목',
    '등록일',
    '상세 정보',
  ];
  let bodySample = [
    'dietexercise_id',
    'manager_id',
    'title',
    'type',
    'create_time',
  ];
  return (
    <div>
      <Navbar select />
      <Table
        bodySample={bodySample}
        header={header}
        param={'fifth'}
        type='조회'
        data={data}
      />
    </div>
  );
};

export default Fifth;
