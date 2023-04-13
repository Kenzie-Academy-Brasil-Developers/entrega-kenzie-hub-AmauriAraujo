import { RouterMain } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Global } from "./styles/Global";


const App = () => {
  // const [user, setUser] = useState({});

  return (
    <>
      <Global />
      <ToastContainer theme="dark" position="bottom-left" />
      <RouterMain />
    </>
  );
};

export default App;
