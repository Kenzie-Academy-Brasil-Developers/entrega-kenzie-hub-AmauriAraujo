import { RouterMain } from "./routes/Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Global } from "./styles/Global";
import { api } from "./services/api";

const App = () => {
  const [user, setUser] = useState([]);

  const getUserById = async (id) => {
    const response = await api.get(`users/${id}`);

    setUser(response.data);
  };

  return (
    <>
      <Global />
      <ToastContainer theme="dark" />
      <RouterMain getUserById={getUserById} setUser={setUser} user={user} />
    </>
  );
};

export default App;
