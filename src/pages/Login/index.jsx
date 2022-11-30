import React from "react";
import { Container, Content, Test, Wrapper } from "./style";
import loginImg from "../../assets/images/loginImg.png";
import Input from "../../components/Generic/Input";
import Button from "../../components/Generic/Button";
// import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const { REACT_APP_BASE_URL: url } = process.env;

const Login = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  // Show password and hide
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
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
            navigate("/manager-management");
            info(res.message);
            localStorage.setItem("token", res?.data.manager_access_token);
          }
        });
    } catch (error) {
      warning("Incorrect password. Please try again");
    }
  };

  const info = (info) => {
    message.info(info);
  };
  const warning = (er) => {
    message.warning(er);
  };

  return (
    <div>
      <Wrapper>
        <Container>
          <Content>
            <img src={loginImg} alt="" />
            <div>
              <label>ID</label>
              <Input
                onChange={onChange}
                placeholder="이메일을 입력해주세요."
                name="manager_login"
                type="email"
                mb="15"
              />
            </div>
            <div>
              <label>PW</label>
              <Test>
                <Input
                  onChange={onChange}
                  onClick={handlePasswordChange}
                  placeholder="비밀번호를 입력해주세요."
                  name="manager_password"
                  type={passwordType}
                  value={passwordInput}
                  class="form-control"
                  mb="15"
                />
                <button onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <i>{/* <AiFillEyeInvisible /> */}</i>
                  ) : (
                    <i>{/* <AiFillEye /> */}</i>
                  )}
                </button>
              </Test>
            </div>
            <Button mb="20" type="primary" onClick={onSubmit}>
              로그인
            </Button>
          </Content>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Login;
