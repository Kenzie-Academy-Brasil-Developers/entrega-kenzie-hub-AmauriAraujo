import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashBoard } from "../pages/DashBoard";

export const RouterMain = ({ setUser, user,getUserById }) => {
  return (
    <Routes>
      <Route path="/" element={<Login getUserById={getUserById}/>}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/dashboard" element={<DashBoard setUser={setUser} user={user} />}/>
    </Routes>
  );
};