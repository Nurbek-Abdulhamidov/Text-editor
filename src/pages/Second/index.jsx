import React from "react";
import { Button } from "antd";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  BtnWrap,
  Section,
  Table,
  Tbody,
  Td,
  Thead,
  Trow,
} from "../First/style";
import secondData from "../../mock/secondData";
import Selector from "../../components/Generic/NavBottom";
import GenericButton from "../../components/Generic/Button";

const Second = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Navbar select />
        <Selector />
      </div>
      <Section>
        <Table>
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
                        onClick={() => navigate(`/second:${item.id}`)}
                      >
                        작성
                      </GenericButton>
                    </Td>
                  </Trow>
                );
              })
            )}
            <BtnWrap>
              <Button type="primary">검색</Button>
            </BtnWrap>
          </Tbody>
        </Table>
      </Section>
    </div>
  );
};

export default Second;
