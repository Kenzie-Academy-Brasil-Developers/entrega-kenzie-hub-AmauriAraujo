import Logo from "../../assets/Logo.svg";
import { StyledHeaderLogin } from "../../styles/StyledHeaderLogin";

export const Header = () => {
  return (
    <StyledHeaderLogin>
      <img src={Logo} alt="logo" />
    </StyledHeaderLogin>
  );
};
