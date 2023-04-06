import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { StyledHeaderRegister } from "../../styles/StyledHeaderRegister";

export const HeaderRegister = () => {
  return (
    <StyledHeaderRegister>
      <img src={Logo} alt="logo" />
      <Link className="btn__nav" to="/">
        Voltar
      </Link>
    </StyledHeaderRegister>
  );
};
