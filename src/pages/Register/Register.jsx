import { useContext } from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { StyledContainer } from "../../styles/Grid";
import { UserContext } from "../../providers/UserContext ";

export const Register = () => {
  const { loadApi } = useContext(UserContext);

  return (
    <StyledContainer>
      <section>
        <RegisterForm loadApi={loadApi} />
      </section>
    </StyledContainer>
  );
};
