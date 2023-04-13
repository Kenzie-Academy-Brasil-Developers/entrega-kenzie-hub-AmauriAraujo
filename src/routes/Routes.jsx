import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { UserProvider } from "../providers/UserContext ";
import { TechProvider } from "../providers/TechContext";
import { DashBoard } from "../pages/DashBoard";
import { ProtectedRoutes } from "../components/ProtectRoutes/ProtectedRoutes";

export const RouterMain = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/dashboard"
            element={
              <TechProvider>
                <DashBoard />
              </TechProvider>
            }
          />
        </Route>
      </Routes>
    </UserProvider>
  );
};
