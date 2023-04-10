import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashBoard } from "../pages/DashBoard";

export const RouterMain = ({ setUser, user,id}) => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/dashboard" element={<DashBoard setUser={setUser} user={user}  id={id}/>}/>
    </Routes>
  );
};
