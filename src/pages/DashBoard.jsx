import { useContext, useEffect } from "react";
import { StyledContainer } from "../styles/Grid";
import { HeaderDash } from "../components/HeaderDash/HeaderDash";
import { StyledCardUser } from "../styles/StyledSectionUser";
import { UserContext } from "../providers/UserContext ";
import { NewTechModalForm } from "../components/NewTechForm/NewTechForm";
import { TechContext } from "../providers/TechContext";
import { TechList } from "../components/TechList/TechList";
import { ModalUpDell } from "../components/ModalUpDell/ModalUpdell";
import { StyledSection } from "../styles/StyledSection";

export const DashBoard = () => {
  const { logout, user } = useContext(UserContext);

  const { isOpen, currentTech } = useContext(TechContext);

  return (
    <>
      <HeaderDash logout={logout} />

      <StyledCardUser>
        <StyledContainer>
          <div className="card">
            <h1>Olá, {user.name}</h1>
            <h3>{user.course_module}</h3>
          </div>
        </StyledContainer>
      </StyledCardUser>

      <StyledContainer>
        <StyledSection>
          <TechList />
        </StyledSection>
      </StyledContainer>

      {isOpen ? <NewTechModalForm /> : null}
      {currentTech ? <ModalUpDell /> : null}
    </>
  );
};
