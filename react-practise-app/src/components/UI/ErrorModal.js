import React from "react";
import Button from "./Button";
import * as S from "../StyledComponents/styles";
const ErrorModal = (props) => {
  return (
    <S.BackDrop onClick={props.removeModal}>
      <S.Modal>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.massage}</p>
        </div>
        <footer className="actions">
          <Button className="button" onClick={props.removeModal}>
            Okay
          </Button>
        </footer>
      </S.Modal>
    </S.BackDrop>
  );
};

export default ErrorModal;
