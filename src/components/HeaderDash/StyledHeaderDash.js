import styled from "styled-components";

export const StyledHeaderDash = styled.header`
  width: 100%;
  height: 90px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 800px) {
      padding: 0 200px;
    }

    height: 70px;
  }

  .btn__nav {
    background-color: #212529;
    width: 55px;
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
