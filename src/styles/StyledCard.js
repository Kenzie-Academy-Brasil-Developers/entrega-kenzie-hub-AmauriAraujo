import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48.73px;
  padding: 12.18px;

  border-radius: 4.06px;
  border:1px,solid;#121214
  backgroud-color: #121214;

  h3{
    font-size:0.888rem;
    font-weight:700;

  }

  h4{
    font-size:0.761rem;
    font-weight:400;
    color:#868E96;
    background:none;

  }

  :hover{
    background-color:#343B41;
    border:1px,solid;#343B41
  }
`;
