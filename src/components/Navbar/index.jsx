import React from "react";
import { Button } from "antd";
import { Input } from "antd";
import { Left, Nav, Right } from "./style";
import Selection from "../Generic/Select";
import LocalizedModal from "../Generic/Modal";

const Navbar = ({ select, send }) => {
  return (
    <Nav>
      <Left>{send ? "" : `환영합니다. 000님 관리자 등급 :총관리자`}</Left>
      <Right>
        {select ? <Selection /> : ""}
        {send ? "" : <Input placeholder="placeholder..." />}

        {send ? (
          <LocalizedModal title="답변 전송" />
        ) : (
          <Button type="primary">검색</Button>
        )}
      </Right>
    </Nav>
  );
};

export default Navbar;
