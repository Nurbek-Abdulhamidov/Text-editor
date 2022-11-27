import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Selector from '../../components/Generic/NavBottom';
import Table from '../../components/Table';

const Second = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  let token = localStorage.getItem('token');
  const [data, setData] = useState([]);

  const getClick = async () => {
    const body = {
      consultation_type: 'comprehensive',
      search_scope: 'all',
      search_keyword: '',
      consultation_status: 'all',
      order_by: 'remaining_days',
      per_page: 10,
      page_number: 1,
    };
    try {
      const { data } = await axios.post(`${url}/admin/consultations`, body, {
        headers: {
          Authentication: token,
        },
      });
      console.log(data, '[pad');
      setData(data?.data);
    } catch (error) {
      console.log('fail', error);
    }
  };
  useEffect(() => {
    getClick();
  }, []);
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
  console.log(data, '[[[p');
  return (
    <div>
      <div>
        <Navbar select />
        <Selector />
      </div>
      <div>
        <Table
          count={8}
          header={header}
          param='second'
          data={data}
          bodySample={bodySample}
          type='작성 상태'
        />
      </div>
    </div>
  );
};

export default Second;
