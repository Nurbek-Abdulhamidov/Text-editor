import styled from "styled-components";

export const Section = styled.section``;

export const Table = styled.table`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
`;

export const Thead = styled.thead`
  background-color: #1890ff;
  color: #fff;
  padding: 5px;
`;

export const Tbody = styled.tbody``;

export const Trow = styled.tr`
  cursor: pointer;
  :hover {
    transition: all 0.3s ease;
    background-color: ${({ hover }) => (hover ? "#c6c6c6" : "")};
  }
`;

export const Td = styled.td`
  padding: 8px 10px;
`;

export const BtnWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
