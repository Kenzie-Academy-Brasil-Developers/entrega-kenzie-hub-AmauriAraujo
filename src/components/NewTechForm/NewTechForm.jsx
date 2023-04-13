import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formValidateTech } from "../../services/formTechVlidate";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";

export const NewTechModalForm = () => {
  const { setIsOpen,createNewTech} = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formValidateTech) });
  const submit = (data) => {
    createNewTech(data);
  };


 

  return (
    <div role="dialog">
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nova tecnologia"
          {...register("title")}
        />
        {errors.title ? <p>{errors.title.message}</p> : null}
        <label htmlFor="">Selecionar status</label>
        <select {...register("status")}>
          <option value="">Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status ? <p>{errors.status.message}</p> : null}

        <button>Cadastrar Tecnologia</button>
      </form>
    </div>
  );
};
