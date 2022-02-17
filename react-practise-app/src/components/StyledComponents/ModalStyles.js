import styled from "styled-components";
export const Modal = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: fixed;
  top: 30vh;
  left: 50%;
  transform: translate(-50%,0%);
  width: 40%;
  z-index: 100;

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  && .content {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;
