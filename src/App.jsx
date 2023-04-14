import { RouterMain } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Global } from "./styles/Global";
import { UserProvider } from "./providers/UserContext ";

const App = () => {
  return (
    <>
      <Global />
      <ToastContainer theme="dark" position="bottom-left" />
      <UserProvider>
        <RouterMain />
      </UserProvider>
    </>
  );
};

export default App;
