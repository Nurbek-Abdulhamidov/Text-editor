import React from "react";
import { Left, Nav, Right } from "./style";
import Selection from "../Generic/Select";
import LocalizedModal from "../Generic/Modal";
import Button from "../Generic/Button";
import Input from "../Generic/Input";

const Navbar = ({ select, send }) => {
  return (
    <Nav>
      <Left>{send ? "" : `환영합니다. 000님 관리자 등급 :총관리자`}</Left>
      <Right>
        {select ? <Selection /> : ""}
        {send ? "" : <Input />}

        {send ? (
          <LocalizedModal type="disable" title="답변 전송" />
        ) : (
          <Button type="primary" width={"100px"}>
            검색
          </Button>
        )}
      </Right>
    </Nav>
  );
};

export default Navbar;
