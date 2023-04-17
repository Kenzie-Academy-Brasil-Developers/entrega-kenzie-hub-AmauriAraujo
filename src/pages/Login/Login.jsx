import { useContext, useEffect } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { StyledContainer } from "../../styles/Grid";
import { UserContext } from "../../providers/UserContext ";

export const Login = () => {
  const { login, autoLogin, setLoading } = useContext(UserContext);

  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const userId = JSON.parse(localStorage.getItem("@USERID"));

  useEffect(() => {
    if (token && userId) {
      autoLogin();
    }

    setLoading(false);
  }, []);
  return (
    <StyledContainer marginContainerTop={60}>
      <section>
        <LoginForm login={login} />
      </section>
    </StyledContainer>
  );
};
