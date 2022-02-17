import React from "react";
import styled from "styled-components";

const S = {};
S.Button = styled.button`
  &.button {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;
  }

  &.button:hover,
  &.button:active {
    background: #741188;
    border-color: #741188;
  }

  &.button:focus {
    outline: none;
  }
`;
const Button = (props) => {
  return (
    <S.Button className={props.className} type={props.type || "button"} onClick={props.onClick}>{props.children}</S.Button>
  );
};

export default Button;
