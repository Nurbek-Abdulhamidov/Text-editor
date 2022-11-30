import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 350px;
  width: 100%;
`;

export const Content = styled.div`
  img {
    margin-bottom: 10px;
  }
  
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Test = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    top: 24%;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
  }
`;
