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
  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #000;
    margin: 25px 0;
  }

  label {
    font-weight: 400;
    font-size: 12px;
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
export const Line = styled.div`
  position: relative;
  border-top: 1px solid #efefef;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;

  p {
    position: absolute;
    bottom: -22px;
  }
`;

export const AnimateImg = styled.div`
  position: relative;
  bottom: -40px;
  animation-name: breath-animation;
  animation-duration: 7s;
  animation-iteration-count: infinite;

  @keyframes breath-animation {
    0% {
      height: 100px;
      opacity: 0.5;
    }
    30% {
      height: 300px;
      opacity: 0.8;
    }
    60% {
      height: 400px;
      opacity: 1;
    }
    30% {
      height: 600px;
      opacity: 0.6;
    }
    10% {
      height: -300px;
    }
  }
`;
