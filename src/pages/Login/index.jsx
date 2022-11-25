import React from "react";
import { Container, Wrapper } from "./style";
import loginImg from "../../assets/images/loginImg.png";
import Input from "../../components/Generic/Input";
import Button from "../../components/Generic/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  const info = () => {
    message.info("Successfully Loged in !");
  };
  const warning = () => {
    message.warning("Login yoki Email xato");
  };

  const onSubmit = async () => {
    try {
      await fetch("http://13.125.232.195/member/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.data.member_access_token) {
            navigate("/home");
            info("info");
            localStorage.setItem("token", res?.data.member_access_token);
          }
        });
    } catch (error) {
      warning();
    }
  };

  return (
    <Wrapper>
      <Container>
        <img src={loginImg} alt="" />
        <div>
          <label>ID</label>
          <Input
            onChange={onChange}
            placeholder="email"
            name="member_email"
            type="email"
          />
        </div>
        <div>
          <label>PW</label>
          <Input
            onChange={onChange}
            placeholder="password"
            name="member_password"
            type="password"
          />
        </div>
        <div>
          <Button type="primary" onClick={onSubmit}>
            로그인
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Login;
