import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import secondData from "../../mock/secondData";
import { GenericButton } from "../Generic";
import Button from "../Generic/Button";
import LocalizedModal from "../../components/Generic/Modal";

import { TableDiv, Thead, Trow, Td, Tbody, BtnWrap } from './style';
import { Pagination } from 'antd';
import { UserContext } from '../../context/context';
import { useConsulation } from '../../context/consultation';

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
  const [{ per_page, page_number }, dispatch] = useConsulation();
  const pageSize = count;
  const [data, setData] = useState([]);

  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setData(secondData);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [data.length, pageSize]);

  const handlePaginationChange = (n) => {
    dispatch({ type: 'page_number', payload: n });
  };
  const onShowSizeChange = (current, size) => {
    dispatch({
      type: 'page_number',
      payload: current,
    });

    dispatch({
      type: 'per_page',
      payload: size,
    });
  };


  const getLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
          {info?.map(
            (item, index) =>
              index >= minIndex &&
              index < maxIndex && (
                <Trow hover key={index}>
                  {bodySample.map((sam) => (
                    <Td> {item[sam] || "not given"} </Td>
                  ))}
                  <Td>
                    {confirm ? (
                      <LocalizedModal id={item?.manager_id} title={type} />
                    ) : (
                      <Button
                        type="outlined"
                        onClick={() =>
                          navigate(
                            `/${param}:${item.id || item.consultation_id}`
                          )
                        }
                        width={"100px"}
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
        onShowSizeChange={onShowSizeChange}
        showSizeChanger
        pageSize={per_page}
        current={page_number}
        total={data.length}
        defaultPageSize={per_page}
        onChange={handlePaginationChange}
        defaultCurrent={per_page}
        pageSizeOptions={['5', '10', '20', '50', '100']}
      />
      <BtnWrap>
        <GenericButton
          onClick={() => getLogOut()}
          type="primary"
          width={"100px"}
        >
          검색
        </GenericButton>
      </BtnWrap>
    </TableWrap>
  );
};

export default Table;
