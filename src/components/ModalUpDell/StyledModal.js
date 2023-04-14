import styled from "styled-components";

export const StyledModal = styled.div`
  max-width: 100%;
  width: 369px;
  height: 342px;
  top: 189px;

  border-radius: 7px;
  background-color: #212529;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212529;
    gap: 18px;
    box-shadow: 0 4px 40px -10px #00000040;
    padding: 34px 18px 34px 18px;
  }

  .modal__title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 18px 20px 18px;
    background-color: #343b41;
    h3 {
      font-weight: 700;
      color: #f8f9fa;
      font-size: 0.875rem;
    }
  }

  #update__button {
    backgroud-color: #59323f;
    width: 204px;
  }
  .btn__container {
    background: none;
    display: flex;
    justify-content: space-between;
    align-itens: center;
    width: 100%;
  }
  #btn__dell {
    background-color: #868e96;
    width: 98px;
    border-color: #868e96;
  }
  .close {
    font-weight: 600;
    font-size: 1rem;
    color: #868e96;
    background: none;
    border: none;
  }
`;
