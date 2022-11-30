import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GenericButton } from '../Generic';
import Button from '../Generic/Button';
import LocalizedModal from '../../components/Generic/Modal';

import {
  TableDiv,
  Thead,
  Trow,
  Td,
  Tbody,
  BtnWrap,
  TableWrap,
  PaginationWrap,
} from './style';
import { Pagination } from 'antd';
import { useConsulation } from '../../context/consultation';

const Table = ({
  data,
  param,
  confirm,
  header,
  bodySample,
  type,
  dispatch,
  page,
  size,
}) => {
  // const [{ data, size, page }, dispatch] = useConsulation();

  // const [minIndex, setMinIndex] = useState(0);
  // const [maxIndex, setMaxIndex] = useState();
  const navigate = useNavigate();

  const handlePaginationChange = (n) => {
    dispatch({ type: 'setPage', payload: n });
  };

  const onShowSizeChange = (current, size) => {
    console.log(current, size);
    dispatch({
      type: 'setPage',
      payload: current,
    });

    dispatch({
      type: 'setSize',
      payload: size,
    });
  };

  const getLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <TableWrap>
      <TableDiv>
        <Thead>
          <Trow>
            {header?.map((item, index) => (
              <Td key={index}> {item} </Td>
            ))}
          </Trow>
        </Thead>
        <Tbody>
          {data?.map((item, index) => (
            <Trow hover key={index}>
              {bodySample.map((sam, index) => (
                <Td key={index}> {item[sam] || 'not given'} </Td>
              ))}
              <Td>
                {confirm ? (
                  <LocalizedModal
                    key={index}
                    id={item?.manager_id}
                    title={type}
                  />
                ) : (
                  <Button
                    type='outlined'
                    key={index}
                    onClick={() =>
                      navigate(`/${param}:${item.id || item.consultation_id}`)
                    }
                    width={'100px'}
                  >
                    탈퇴
                  </Button>
                )}
              </Td>
            </Trow>
          ))}
        </Tbody>
      </TableDiv>
      <PaginationWrap>
        <Pagination
          defaultCurrent={page || 1}
          current={page || 1}
          total={data?.total || 10}
          defaultPageSize={size}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          pageSizeOptions={['5', '10', '20', '50', '100']}
          pageSize={size || 10}
          onChange={handlePaginationChange}
        />
      </PaginationWrap>
      <BtnWrap>
        <GenericButton
          onClick={() => getLogOut()}
          type='primary'
          width={'100px'}
        >
          검색
        </GenericButton>
      </BtnWrap>
    </TableWrap>
  );
};

export default Table;
