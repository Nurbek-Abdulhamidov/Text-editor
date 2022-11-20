import { Button } from "antd";
import React from "react";
import LocalizedModal from "../../components/Generic/Modal";

import Navbar from "../../components/Navbar";
import data from "../../mock/data";
import { BtnWrap, Section, Table, Tbody, Td, Thead, Trow } from "./style";

const First = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Section>
        <Table>
          <Thead>
            <Trow>
              <Td>번호</Td>
              <Td>등급</Td>
              <Td>관리자 ID</Td>
              <Td>연락처</Td>
              <Td>가입일</Td>
              <Td>관리</Td>
            </Trow>
          </Thead>
          <Tbody>
            {data === null ? (
              <h1>Loading...</h1>
            ) : (
              data.map((item, index) => {
                return (
                  <Trow hover key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.parol}</Td>
                    <Td>{item.phone}</Td>
                    <Td>{item.date}</Td>
                    <Td>
                      <LocalizedModal title="검색" />
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

export default First;
