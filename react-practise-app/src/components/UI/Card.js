import React from "react";
import * as S from "../StyledComponents/styles";

const Card = (props) => {
  return <S.Card className={props.className}>{props.children}</S.Card>;
};

export default Card;
