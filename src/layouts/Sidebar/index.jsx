import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LocalizedModal from "../../components/Generic/Modal";
import Login from "../../pages/Login";
import { navbar } from "../../utils/navbar";
import {
  Aside,
  BtnWrap,
  Container,
  Link,
  Logo,
  Main,
  Section,
  Wrapper,
} from "./style";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Wrapper>
        {localStorage.getItem("token") ? (
          <Container>
            <Aside>
              <Section logo onClick={() => navigate("/home")}>
                <Logo>
                  <div>나의 건강 주치의</div>
                </Logo>
              </Section>
              <Section space>
                <p className="asideText">홈</p>
                {navbar.map(({ path, title, hidden, text, id }, index) => {
                  return !hidden && id !== 6 ? (
                    <Link
                      className={({ isActive }) => isActive && "active"}
                      key={index}
                      to={path}
                    >
                      {title}
                    </Link>
                  ) : (
                    <p key={index} className="asideText">
                      {text}
                    </p>
                  );
                })}
                <BtnWrap>
                  <LocalizedModal
                    ok="변경하기"
                    removeBtn={true}
                    title={"비밀번호 변경하기"}
                  />
                </BtnWrap>
              </Section>
            </Aside>
            <Main>
              <Outlet />
            </Main>
          </Container>
        ) : (
          <Login />
        )}
      </Wrapper>
    </main>
  );
};

export default Sidebar;
