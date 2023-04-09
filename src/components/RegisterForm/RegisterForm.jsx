import { useForm } from "react-hook-form";
import { validateForm } from "../../services/formValidate";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledRegisterForm } from "../../styles/StyledRegisterForm";
import { StyledContainer } from "../../styles/Grid";
import { HeaderRegister } from "../HeaderRegister/HeaderRegister";

export const RegisterForm = ({ loadApi }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateForm),
  });

  const submit = (formData) => {
    loadApi(formData);
  };

  return (
    <StyledContainer containerWidth={370} marginContainerTop={10}>
      <fieldset>
        <HeaderRegister />
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
          <h3>Crie sua conta</h3>
          <small>Rapido e grátis, vamos nessa</small>
          <label htmlFor="email">Nome</label>
          <input
            placeholder="Digite aqui seu nome"
            type="text"
            {...register("name")}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <label htmlFor="email">Senha</label>
          <input
            placeholder="Digite aqui sua senha"
            {...register("password")}
            type="password"
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <label htmlFor="email">Confirmar senha</label>
          <input
            placeholder="Digite novamente sua senha"
            {...register("confirm")}
            type="password"
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
          <label htmlFor="email">Bio</label>
          <input
            placeholder="Fale sobre você"
            type="text"
            {...register("bio")}
          />
          {errors.bio ? <p>{errors.bio.message}</p> : null}
          <label htmlFor="email">Contato</label>
          <input
            placeholder="Opção de contato"
            type="text"
            {...register("contact")}
          />
          {errors.contact ? <p>{errors.contact.message}</p> : null}
          <label htmlFor="email">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="">Primeiro Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}
          <button className="primary__button">Cadastrar</button>
        </StyledRegisterForm>
      </fieldset>
    </StyledContainer>
  );
};
