import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { StyledContainer } from "../../styles/Grid";
import { UserContext } from "../../providers/UserContext ";

export const Login = () => {
  const { loginApp } = useContext(UserContext);

  return (
    <StyledContainer marginContainerTop={60}>
      <section>
        <LoginForm loginApp={loginApp} />
      </section>
    </StyledContainer>
  );
};
