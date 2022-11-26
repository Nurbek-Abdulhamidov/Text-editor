import React from "react";
import { Left, Nav, Right } from "./style";
import Selection from "../Generic/Select";
import LocalizedModal from "../Generic/Modal";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import { useNavigate } from "react-router-dom";

const Navbar = ({ select, send }) => {
  const navigate = useNavigate();
  const getLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Nav>
      <Left>{send ? "" : `환영합니다. 000님 관리자 등급 :총관리자`}</Left>
      <Right>
        {select ? <Selection /> : ""}
        {send ? "" : <Input />}

        {send ? (
          <LocalizedModal type="disable" title="답변 전송" />
        ) : (
          <div style={{ display: "flex" }}>
            <Button type="primary" width={"100px"}>
              검색
            </Button>
            <Button
              onClick={() => getLogOut()}
              type={"primary"}
              width={"100px"}
            >
              Log out
            </Button>
          </div>
        )}
      </Right>
    </Nav>
  );
};

export default Navbar;
