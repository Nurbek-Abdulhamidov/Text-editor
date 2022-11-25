import React from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange = Function.prototype,
  placeholder,
  defaultValue,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
      <Icon>{children}</Icon>
      <Container
        defaultValue={defaultValue}
        onChange={({target}) => onChange(target.value)}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
      ></Container>
    </Wrapper>
  );
};

export default Input;
