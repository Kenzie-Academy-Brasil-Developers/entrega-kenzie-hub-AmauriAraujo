import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValidateTech } from "../../services/formTechVlidate";

export const ModalUpDell = () => {
  const { currentTech, setCurrentTech, deleteTech, updateTech } =
    useContext(TechContext);

  const { register, handleSubmit,formState: { errors } } = useForm({resolver:zodResolver(formValidateTech)});


const [optionValue,setOptionValue]=useState("")



useEffect(()=>{

  if(currentTech.status=="Intermediário"){
    setOptionValue("Avançado")
  }

  else if(currentTech.status=="Iniciante"){
    setOptionValue("Intermediário")
  }

  else if(currentTech.status=="Avançado"){
    setOptionValue("Avançado")
  }
  
},[])


  const submit = (data) => {
    updateTech(currentTech.id, data);



  };
  return (
    <div role="dialog">
      <h2>Tecnologia detalhes</h2>

      <button onClick={() => setCurrentTech(null)}>x</button>

      <form onSubmit={handleSubmit(submit)}>
        <h3>Nome do projeto</h3>

        <input value={currentTech.title}/>
        <select {...register("status")}>
          <option value="">Status</option>
          <option value={optionValue}>{optionValue}</option>



        </select>
        {errors.status ? <p>{errors.status.message}</p> : null}
        <button>Salvar Alterações</button>
      </form>
      <button onClick={() => deleteTech(currentTech.id)}> Excluir</button>
    </div>
  );
};
