import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledContainer } from "../styles/Grid";
import { HeaderDash } from "../components/HeaderDash/HeaderDash";
import { StyledCardUser } from "../styles/StyledSectionUser";

export const DashBoard = ({ setUser, user }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("@TOKEN"));

  const validUser = (token) => {


    if (!token) {
      navigate("/");
    }
  };

  useEffect(() => {
    validUser(token);
  }, []);

  const logout = () => {
    localStorage.clear;
    setUser([]);
    setToken("");
    localStorage.clear();

    navigate("/");
  };

  return (
    <>
      <HeaderDash logout={logout} />

      <StyledCardUser>
        <StyledContainer>
          <div className="card">
            <h1>Olá, {user.name}</h1>
            <h3>{user.course_module}</h3>
          </div>
        </StyledContainer>
      </StyledCardUser>
    </>
  );
};
