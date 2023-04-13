import { createContext} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import jwtDecode from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const localId = localStorage.getItem("@USERID");
  const [id, setId] = useState(localId ? JSON.parse(localId) : null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

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

        localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

        localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

        setUser(response.data.user);
        navigate("/dashboard");
      })

      .catch((err) => {
        toast.error(err.response.data.message, { autoClose: 2000 });
      });
  };

  const getUserById = async () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    if (!token) {
      return navigate("/");
    }

    try {
      const response = await api.get("profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
      
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.message);

      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear;
    setUser({});

    localStorage.clear();

    navigate("/");
  };

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

        navigate("/");
      })

      .catch((err) => {
        toast.error(err.response.data.message, { autoClose: 2000 });
      });
  };

  return (
    <UserContext.Provider
      value={{
        loginApp,
        getUserById,
        logout,
        user,
        loadApi,
        loading,
        id,
        navigate,
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
