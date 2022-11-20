import React from "react";
import { useNavigate } from "react-router-dom";
import secondData from "../../mock/secondData";
import { GenericButton } from "../Generic";
import { TableDiv, Thead, Trow, Td, Tbody, BtnWrap } from "./style";

const Table = ({ param }) => {
  const navigate = useNavigate();
  return (
    <>
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
          {secondData === null ? (
            <h1>Loading...</h1>
          ) : (
            secondData.map((item, index) => {
              return (
                <Trow hover key={index}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.number}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.leftDayNumber}</Td>
                  <Td>
                    <GenericButton
                      onClick={() => navigate(`/${param}:${item.id}`)}
                    >
                      작성
                    </GenericButton>
                  </Td>
                </Trow>
              );
            })
          )}
          <BtnWrap>
            <GenericButton type="primary">검색</GenericButton>
          </BtnWrap>
        </Tbody>
      </TableDiv>
    </>
  );
};

export default Table;
