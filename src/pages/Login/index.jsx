import React from "react";
import {
  AnimateImg,
  Center,
  Container,
  Content,
  Flex,
  Line,
  Wrapper,
} from "./style";
import loginImg from "../../assets/images/loginImg.png";
import longImg from "../../assets/images/long.png";
import kakaoImg from "../../assets/images/kakao.png";
import Input from "../../components/Generic/Input";
import Button from "../../components/Generic/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const { REACT_APP_BASE_URL: url } = process.env;

const Login = () => {
  const [body, setBody] = useState({});
  const [animate, setAnimate] = useState(true);
  const navigate = useNavigate();

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  setTimeout(() => {
    setAnimate(false);
  }, 0);

  const info = () => {
    message.info("Successfully Loged in !");
  };
  const warning = () => {
    message.warning("Login yoki Email xato");
  };

  const onSubmit = async () => {
    try {
      await fetch(`${url}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.data.manager_access_token) {
            navigate("/home");
            info("info");
            localStorage.setItem("token", res?.data.manager_access_token);
          }
        });
    } catch (error) {
      warning();
    }
  };

  return (
    <div>
      {animate ? (
        <Wrapper>
          <AnimateImg>
            <img src={loginImg} alt="" />
          </AnimateImg>
        </Wrapper>
      ) : (
        <Wrapper>
          <Container>
            <Content>
              <img src={longImg} alt="" />
              <h4>
                로그인 후 <br /> 이용하기:)
              </h4>
              <div>
                <label>이메일</label>
                <Input
                  onChange={onChange}
                  placeholder="이메일을 입력해주세요."
                  name="manager_login"
                  mb="15"
                />
              </div>
              <div>
                <label>비밀번호</label>
                <Input
                  onChange={onChange}
                  placeholder="비밀번호를 입력해주세요."
                  name="manager_password"
                  mb="15"
                />
              </div>
              <Button mb="20" type="primary" onClick={onSubmit}>
                로그인
              </Button>
              <Flex>
                <p>아이디 찾기</p>
                <p>비밀번호 찾기</p>
              </Flex>
              <Center>
                <Line>
                  <p>또는</p>
                </Line>
              </Center>
              <Button mb="28" type="yellow">
                <img src={kakaoImg} alt="" /> 카카오로 시작하기
              </Button>
              <Center>
                <p>회원가입</p>
              </Center>
            </Content>
          </Container>
        </Wrapper>
      )}
    </div>
  );
};

export default Login;
