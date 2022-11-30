import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Main = styled.main`
  flex: 5;
  padding: 20px;
`;

export const Aside = styled.aside`
  position: relative;
  background-color: #222d32;
  flex: 1;
  padding: 10px;
  height: 100vh;

`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  cursor: ${({ logo }) => (logo ? "pointer" : "")};
  margin-top: ${({ space }) => (space ? "20px" : "")};

  .active {
    transition: all 0.3s ease;
    background-color: #0061df;
  }

  .active:hover {
    background-color: #0061df;
  }
`;

export const Logo = styled.div`
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 22px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 5px;
  margin: 2px 0;

  :hover {
    transition: all 0.3s ease;
    color: #fff;
    background-color: #80808059;
  }
`;

export const BtnWrap = styled.div`
  position: absolute;
  bottom: 20px;
  width: 90%;
  background-color: #0061df;
  border-radius: 5px;

  div {
    border-radius: 5px;
    width: 100%;
    color: #fff;
    height: 40px;
  }
`;
