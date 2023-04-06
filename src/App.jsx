import { RouterMain } from "./routes/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Global } from "./styles/Global";

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      <Global />
      <ToastContainer theme="dark" />
      <RouterMain setUser={setUser} user={user} />
    </>
  );
}

export default App;
