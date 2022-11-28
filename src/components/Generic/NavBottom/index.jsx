import React from "react";

import Selection from "../Select";
import Switcher from "../Switch";
import { Container,  Left, Right, Wrapper } from "./style";

const Selector = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
       
        </Left>
        <Right>
          <label>작성 필요만 보기</label>
          <Switcher />
          <div>
            <Selection />
          </div>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Selector;
