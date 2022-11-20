import { Button } from "antd";
import React from "react";
import { ButtonDiv } from "./style";

const GenericButton = ({ onClick, type, children }) => {
  return (
    <ButtonDiv>
      <Button onClick={onClick} type={type}>
        {children}
      </Button>
    </ButtonDiv>
  );
};

export default GenericButton;
