import { Button } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
        <Container>
          <Aside>
            <Section logo onClick={() => navigate("/home")}>
              <Logo>
                <div>나의 건강 주치의</div>
              </Logo>
            </Section>
            <Section space>
              {navbar.map(({ path, title, hidden }, index) => {
                return (
                  !hidden && (
                    <Link
                      className={({ isActive }) => isActive && "active"}
                      key={index}
                      to={path}
                    >
                      {title}
                    </Link>
                  )
                );
              })}
              <BtnWrap>
                <Button type="primary">비밀번호 변경하기</Button>
              </BtnWrap>
            </Section>
          </Aside>
          <Main>
            <Outlet />
            {/* <Footer /> */}
          </Main>
        </Container>
      </Wrapper>
    </main>
  );
};

export default Sidebar;
