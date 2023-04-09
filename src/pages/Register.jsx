import { Link } from "react-router-dom";
import { api } from "../services/api";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { StyledContainer } from "../styles/Grid";
import { Header } from "../components/Header/Header";

export const Register = () => {
  const navigate = useNavigate();

  const [userBody, setUserBody] = useState([]);

  const loadApi = async ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const postApi = await api
      .post("users", {
        name: name,
        email: email,
        password: password,
        bio: bio,
        contact: contact,
        course_module: course_module,
      })
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso", { autoClose: 2000 });

        setTimeout(() => {
          navigate("/");
        }, "2000");
      })

      .catch((err) => {
        toast.error(err.response.data.message, { autoClose: 2000 });
      });
  };

  return (
    <StyledContainer>
      <section>
        <RegisterForm loadApi={loadApi} />
      </section>
    </StyledContainer>
  );
};
