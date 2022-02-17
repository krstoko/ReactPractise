import React from "react";
import * as S from "../StyledComponents/styles";
const Button = (props) => {
  return (
    <S.Button
      className={props.className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </S.Button>
  );
};

export default Button;
