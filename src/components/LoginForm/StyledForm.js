import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212529;
  gap: 18px;
  box-shadow: 0 4px 40px -10px #00000040;
  padding: 34px 18px 34px 18px;

  #btn__cadastrar {
    width: 100%;
    height: 14.5px;
    padding: 20px 0;
    border-radius: 4px;
    border: 1.22px solid #868e96;
    background-color: #868e96;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 40px -10px #00000040;

    @media (min-width: 800px) {
      width: 324px;
      height: 48px;
    }
    :hover {
      background-color: #343b41;
      border-color: #343b41;
    }
  }
  @media (min-width: 800px) {
    gap: 22px;
  }
`;
