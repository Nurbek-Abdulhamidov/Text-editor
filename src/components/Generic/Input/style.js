import styled from "styled-components";

export const InputDiv = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  input {
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    padding: 6px 10px;
    margin-top: 5px;
    border-radius: 8px;
  }
`;
