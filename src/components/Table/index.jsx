import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import secondData from "../../mock/secondData";
import { GenericButton } from "../Generic";
import Button from "../Generic/Button";
import LocalizedModal from "../../components/Generic/Modal";

import { TableDiv, Thead, Trow, Td, Tbody, BtnWrap } from "./style";
import { Pagination } from "antd";
import { UserContext } from "../../context/context";

const Table = ({ param, confirm, count,info }) => {
  const [users] = useContext(UserContext);

  const pageSize = count;
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setData(info);
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [data.length, pageSize]);

console.log(data);
  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  
  return (
    <div>
      <TableDiv>
        <Thead>
          <Trow>
            <Td>번호</Td>
            <Td>작성자 ID</Td>
            <Td>회원 등급</Td>
            <Td>등록일</Td>
            <Td>남은 일수</Td>
            <Td>작성 상태</Td>
          </Trow>
        </Thead>
        <Tbody>
          {users?.map(
            (item, index) =>
              index >= minIndex &&
              index < maxIndex && (
                <Trow hover key={index}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.number}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.leftDayNumber}</Td>
                  <Td>
                    {confirm ? (
                      <LocalizedModal title="검색" />
                    ) : (
                      <Button
                        type="outlined"
                        onClick={() => navigate(`/${param}:${item.id}`)}
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
        totalPage={totalPage}
        pageSize={pageSize}
        current={current}
        total={data.length}
        onChange={(page) => handleChange(page)}
      />
      <BtnWrap>
        <GenericButton type="primary" width={"100px"}>
          검색
        </GenericButton>
      </BtnWrap>
    </div>
  );
};

export default Table;
