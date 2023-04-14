import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValidateTech } from "../../services/formTechVlidate";
import { StyledContainer } from "../../styles/Grid";
import { StyledModal } from "../../styles/StyledModal";

export const ModalUpDell = () => {
  const { currentTech, setCurrentTech, deleteTech, updateTech } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formValidateTech) });

  const [optionValue, setOptionValue] = useState("");

  useEffect(() => {
    if (currentTech.status == "Intermediário") {
      setOptionValue("Avançado");
    } else if (currentTech.status == "Iniciante") {
      setOptionValue("Intermediário");
    } else if (currentTech.status == "Avançado") {
      setOptionValue("Avançado");
    }
  }, []);

  const submit = (data) => {
    updateTech(currentTech.id, data);

    console.log(data);
  };
  return (
    <StyledContainer>
      <div className="div__default">
        <StyledModal role="dialog">
          <div className="modal__title">
            <h3>Tecnologia detalhes</h3>

            <button  className="close" onClick={() => setCurrentTech(null)}>x</button>
          </div>

          <form onSubmit={handleSubmit(submit)}>
            <label>Nome do projeto</label>

            <input value={currentTech.title} {...register("title")} />
            <label htmlFor="">Status</label>
            <select {...register("status")}>
              <option value="">Status</option>
              <option value={optionValue}>{optionValue}</option>
            </select>
            {errors.status ? <p>{errors.status.message}</p> : null}

            <div className="btn__container">
              <button className="primary__button" id="update__button">
                Salvar Alterações
              </button>
              <button
                className="primary__button"
                id="btn__dell"
                onClick={() => deleteTech(currentTech.id)}
              >
                {" "}
                Excluir
              </button>
            </div>
          </form>
        </StyledModal>
      </div>
    </StyledContainer>
  );
};
