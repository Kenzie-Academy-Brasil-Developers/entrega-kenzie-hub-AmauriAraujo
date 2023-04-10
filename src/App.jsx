import { RouterMain } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Global } from "./styles/Global";

import { useEffect } from "react";

const App = () => {
  const [user, setUser] = useState({});

  const [id, setId] = useState();

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("@USERID")));
  }, []);

  return (
    <>
      <Global />
      <ToastContainer theme="dark"  position="bottom-left"/>
      <RouterMain setUser={setUser} user={user} id={id} />
    </>
  );
};

export default App;
