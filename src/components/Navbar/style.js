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

export const Hambureger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 1220px) {
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin-top: 8px;
  }
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
