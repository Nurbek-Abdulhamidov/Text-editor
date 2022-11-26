import React from "react";
import { Container, Wrapper } from "./style";
import loginImg from "../../assets/images/loginImg.png";
import Input from "../../components/Generic/Input";
import Button from "../../components/Generic/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const { REACT_APP_BASE_URL: url } = process.env;
console.log(url, "url");
const Login = () => {
  const [body, setBody] = useState({});
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
      // await fetch(`/api/* http://endpoint.com/api/:splat 200!`, {
      await fetch(`http://13.125.232.195/admin/login`, {
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
    <Wrapper>
      <Container>
        <img src={loginImg} alt="" />
        <div>
          <label>ID</label>
          <Input onChange={onChange} placeholder="email" name="manager_login" />
        </div>
        <div>
          <label>PW</label>
          <Input
            onChange={onChange}
            placeholder="password"
            name="manager_password"
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
