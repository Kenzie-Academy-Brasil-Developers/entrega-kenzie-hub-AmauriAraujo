import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext ";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [techList, setTechList] = useState();

  const [currentTech, setCurrentTech] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const createNewTech = async (data) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      const response = await api.post(`users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList([...techList, response.data]);

      toast.success("Tecnologia cadastrada!", { autoClose: 2000 });

      setIsOpen(false);
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 2000 });
    }
  };

  const techs = (user) => {
    setTechList(user.techs);
  };

  useEffect(() => {
    techs(user);
  }, [user]);

  const deleteTech = async (id) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    const response = await api.delete(`users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Tecnologia deletada!", { autoClose: 2000 });

    setCurrentTech(null);

    const newTechList = techList.filter((tech) => {
      return tech.id != id;
    });

    setTechList(newTechList);
  };

  const updateTech = async (currentTech, { status }) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    const id = currentTech.id;

    switch (currentTech.status === status) {
      case true:
        return toast.error("Esse é seu nível atual");
    }

    switch (currentTech.status === "Intermediário" && status === "Iniciante") {
      case true:
        return toast.error("Você não pode baixar seu status");
    }

    switch (currentTech.status === "Avançado" && status != "Avançado") {
      case true:
        return toast.error("Você não pode baixar seu status");
    }

    const response = await api.put(
      `users/techs/${id}`,
      { status: status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const newTechList = techList.filter((tech) => {
      return tech.id != id;
    });

    setTechList([...newTechList, response.data]);
    toast.success("Tecnologia atualizada", { autoClose: 2000 });

    setCurrentTech(null);
  };

  return (
    <TechContext.Provider
      value={{
        isOpen,
        setIsOpen,
        createNewTech,
        techList,
        setCurrentTech,
        currentTech,
        deleteTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
