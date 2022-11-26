import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import secondData from '../../mock/secondData';
import { GenericButton } from '../Generic';
import Button from '../Generic/Button';
import LocalizedModal from '../../components/Generic/Modal';

import { TableDiv, Thead, Trow, Td, Tbody, BtnWrap } from './style';
import { Pagination } from 'antd';
import { UserContext } from '../../context/context';

const Table = ({
  data: info,
  param,
  confirm,
  count,
  header,
  bodySample,
  type,
}) => {
  const [users] = useContext(UserContext);

  const pageSize = count;
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setData(secondData);
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [data.length, pageSize]);

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };
  console.log(info, ';;;');

  return (
    <div>
      <TableDiv>
        <Thead>
          <Trow>
            {header?.map((item) => (
              <Td> {item} </Td>
            ))}
          </Trow>
        </Thead>
        <Tbody>
          {info?.map(
            (item, index) =>
              index >= minIndex &&
              index < maxIndex && (
                <Trow hover key={index}>
                  {bodySample.map((sam) => (
                    <Td> {item[sam] || 'not given'} </Td>
                  ))}
                  {/* <Td>{item.manager_id || 'not given'}</Td>
                  <Td>{item.manager_type || 'not given'}</Td>
                  <Td>{item.managerId || 'not given'}</Td>
                  <Td>{item.manager_phone_number || 'not given'}</Td>
                  <Td>{item.manager_status}</Td> */}
                  <Td>
                    {confirm ? (
                      <LocalizedModal id={item?.manager_id} title={type} />
                    ) : (
                      <Button
                        type='outlined'
                        onClick={() =>
                          navigate(
                            `/${param}:${item.id || item.consultation_id}`
                          )
                        }
                        width={'100px'}
                      >
                        탈퇴
                      </Button>
                    )}
                  </Td>
                </Trow>
              )
          )}
        </Tbody>
      </TableDiv>
      <Pagination
        totalPage={totalPage}
        pageSize={pageSize}
        current={current}
        total={data.length}
        onChange={(page) => handleChange(page)}
      />
      <BtnWrap>
        <GenericButton type='primary' width={'100px'}>
          검색
        </GenericButton>
      </BtnWrap>
    </div>
  );
};

export default Table;
