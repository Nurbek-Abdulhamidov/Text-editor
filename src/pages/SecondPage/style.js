import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    font-weight: 500;
    font-size: 16px;
    color: #000000;
  }
`;
export const UserContent = styled.div`
  display: flex;
  margin: 25px 0;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1.2;
`;
export const Wrap = styled.div`
  display: ${({ flex }) => (flex ? "flex" : "")};
  gap: 20px;
  margin:10px 0 ;

  span {
    font-weight: 500;
    font-size: 18px;
    color: #000000;
  }
`;
