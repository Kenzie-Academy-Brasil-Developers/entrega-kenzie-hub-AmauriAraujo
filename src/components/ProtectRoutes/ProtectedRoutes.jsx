import { useContext, useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext ";

export const ProtectedRoutes = () => {
  const { user, loading, autoLogin, setLoading } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@TOKEN"));
  const userId = JSON.parse(localStorage.getItem("@USERID"));
  const navigate = useNavigate();
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
