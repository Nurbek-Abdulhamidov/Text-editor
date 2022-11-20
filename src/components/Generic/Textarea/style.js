import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: ${({ margin }) => (!margin ? "10px 0" : "")};
  textarea {
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    padding: 6px 10px;
  }
`;
