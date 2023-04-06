import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { DashBoard } from "../pages/dashBoard";

export const RouterMain = ({ setUser, user }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} user={user} />}>
        {" "}
      </Route>
      <Route path="/register" element={<Register />}>
        {" "}
      </Route>
      <Route
        path="/dashboard"
        element={<DashBoard setUser={setUser} user={user} />}
      >
        {" "}
      </Route>
    </Routes>
  );
};
