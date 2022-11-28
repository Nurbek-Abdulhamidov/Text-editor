import React from "react";
import { Flex, Hambureger, Left, Nav, Right } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import Selection from "../Generic/Select";
import LocalizedModal from "../Generic/Modal";
import Button from "../Generic/Button";
import Input from "../Generic/Input";

const Navbar = ({ select, send }) => {
  return (
    <Nav>
      <Left>
        {send ? (
          ""
        ) : (
          <Flex>
            <Hambureger>
              <i>
                <GiHamburgerMenu />
              </i>
            </Hambureger>
            <p>환영합니다. 000님 관리자 등급 :총관리자</p>
          </Flex>
        )}
      </Left>
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
          </div>
        )}
      </Right>
    </Nav>
  );
};

export default Navbar;
