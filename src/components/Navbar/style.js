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
    width: 100%;
  }
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`;
