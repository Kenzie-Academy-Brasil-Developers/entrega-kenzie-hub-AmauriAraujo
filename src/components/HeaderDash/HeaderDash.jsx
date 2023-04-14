import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import { StyledContainer } from "../../styles/Grid";
import { StyledHeaderDash } from "./StyledHeaderDash";

export const HeaderDash = ({ logout }) => {
  return (
    <StyledHeaderDash>
      <StyledContainer>
        <div className="header">
          <img src={Logo} alt="logo" />
          <button className="btn__nav" onClick={logout}>
            Sair
          </button>
        </div>
      </StyledContainer>
    </StyledHeaderDash>
  );
};
