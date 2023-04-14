import { useContext, useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext ";

export const ProtectedRoutes = () => {
  const { navigate, loading, getUserById } = useContext(UserContext);

  useEffect(() => {
    getUserById();
  }, []);

  // if (loading) {

  //   return

  //   (

  //   <div>Carregando...</div>

  //   )
  // }

  return <>{getUserById ? <Outlet /> : null}</>;
};
