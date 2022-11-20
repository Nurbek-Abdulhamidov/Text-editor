import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  input {
    max-width: 300px;
    width: 100%;
    height: 35px;
  }
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`;
