import styled from "styled-components";

export const StyledHeaderRegister = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;

  .btn__nav {
    background-color: #212529;
    width: 79.54px;
    height: 31.95px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.22px solid #212529;

    :hover {
      background-color: #343b41;
      border-color: #343b41;
    }
  }
`;
