import { useContext } from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { StyledContainer } from "../../styles/Grid";
import { UserContext } from "../../providers/UserContext ";

export const Register = () => {
  const { registerUser } = useContext(UserContext);

  return (
    <StyledContainer>
      <section>
        <RegisterForm registerUser={registerUser} />
      </section>
    </StyledContainer>
  );
};
