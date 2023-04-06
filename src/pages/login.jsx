import { LoginForm } from "../components/LoginForm/loginForm";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../styles/Grid";

export const Login = ({ setUser, user }) => {
  const navigate = useNavigate();

  const loginApp = async ({ email, password }) => {
    const response = await api
      .post("sessions", {
        email: email,
        password: password,
      })
      .then((response) => {
        const loadingDash = toast.loading("Loading...");

        toast.update(loadingDash, {
          render: "Pronto",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        setUser(response.data.user);
        localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
        localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

        setTimeout(() => {
          navigate("/dashboard");
        }, "3000");
      })

      .catch((err) => {
        toast.error(err.response.data.message, { autoClose: 2000 });
      });
  };

  return (
    <StyledContainer marginContainerTop={60}>
      <section>
        <LoginForm loginApp={loginApp} />
      </section>
    </StyledContainer>
  );
};