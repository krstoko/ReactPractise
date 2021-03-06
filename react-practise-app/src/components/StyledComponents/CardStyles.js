import styled from "styled-components";
export const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;


  &.input {
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
  }

  &.input label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  &.input input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  &.input input:focus {
    outline: none;
    border-color: #4f005f;
  }

  &.users {
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;
  }

  &.users ul {
    list-style: none;
    padding: 1rem;
  }

  &.users li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;
