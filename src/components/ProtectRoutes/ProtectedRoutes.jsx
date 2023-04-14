import { useContext, useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext ";

export const ProtectedRoutes = () => {
  const {user, loading, getUserById } = useContext(UserContext);


  useEffect(() => {
    getUserById();
  }, []);
  
  


  if (loading) {

    return

    

    <div>Carregando...</div>

    
  }


  

  return <> {user ? <Outlet/> :  <Navigate to={"/"}/> }   </> 
};
