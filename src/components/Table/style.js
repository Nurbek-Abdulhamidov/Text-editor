import styled from "styled-components";

export const TableWrap = styled.div`
  width: 100%;
  /* overflow: scroll; */
`;

export const TableDiv = styled.table`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
`;

export const Thead = styled.thead`
  background-color: #0061df;
  color: #fff;
  height: 44px;
`;

export const Tbody = styled.tbody``;

export const Trow = styled.tr`
  cursor: pointer;
  height: 44px;

  :hover {
    transition: all 0.3s ease;
    background-color: ${({ hover }) => (hover ? "#c6c6c6" : "")};
  }
`;

export const Td = styled.td`
  padding: 5px 10px;
  @media (max-width: 767px) {
    width: 150px;
  }
`;

export const BtnWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
