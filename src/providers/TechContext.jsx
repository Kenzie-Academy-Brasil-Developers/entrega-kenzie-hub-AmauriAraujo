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
  };

  const updateTech = async (id, { status }) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    const response = await api.put(
      `users/techs/${id}`,
      { status: status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
