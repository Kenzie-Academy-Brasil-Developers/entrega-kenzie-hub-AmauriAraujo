import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { TechProvider } from "../providers/TechContext";
import { DashBoard } from "../pages/Dashboard/DashBoard";
import { ProtectedRoutes } from "../components/ProtectRoutes/ProtectedRoutes";

export const RouterMain = () => {
  return (
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
  );
};
