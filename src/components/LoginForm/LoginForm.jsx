import { useForm } from "react-hook-form";
import { validateFormLogin } from "../../services/form ValidateLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledForm } from "./StyledForm";
import { StyledContainer } from "../../styles/Grid";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";

export const LoginForm = ({ loginApp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateFormLogin),
  });

  const submit = (formData) => {
    loginApp(formData);
  };

  return (
    <StyledContainer containerWidth={370}>
      <fieldset>
        <Header />
        <StyledForm onSubmit={handleSubmit(submit)}>
          <h3>Login</h3>

          <label htmlFor="email">Email</label>

          <input
            id="email"
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
            type="password"
            name="password"
          />
          {errors.password ? <p>{errors.password.message}</p> : null}

          <button className="primary__button">Entrar</button>
          <small>Ainda não possui uma conta?</small>

          <Link id="btn__cadastrar" to="/register">
            Cadastre-se
          </Link>
        </StyledForm>
      </fieldset>
    </StyledContainer>
  );
};
