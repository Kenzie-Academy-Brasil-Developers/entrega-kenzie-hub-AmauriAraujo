import Logo from "../../assets/Logo.svg";
import { StyledHeaderLogin } from "./StyledHeaderLogin";

export const Header = () => {
  return (
    <StyledHeaderLogin>
      <img src={Logo} alt="logo" />
    </StyledHeaderLogin>
  );
};
