import { useContext, useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext ";

export const ProtectedRoutes = () => {
  const { user, loading, autoLogin, setLoading, navigate } =
    useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const userId = JSON.parse(localStorage.getItem("@USERID"));

  useEffect(() => {
    if (token && userId) {
      autoLogin();
    } else {
      setLoading(false);
      navigate("/");
    }
  }, []);

  if (loading) {
    return <div>...Carregando</div>;
  }

  return user ? <Outlet /> : <></>;
};
