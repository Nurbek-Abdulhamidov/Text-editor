import React from "react";
import { Container, Wrapper } from "./style";
import loginImg from "../../assets/images/loginImg.png";
import Input from "../../components/Generic/Input";
import Button from "../../components/Generic/Button";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <img src={loginImg} alt="" />
        <div>
          <label>ID</label>
          <Input />
        </div>
        <div>
          <label>PW</label>
          <Input />
        </div>
        <div>
          <Button type="primary">로그인</Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Login;
