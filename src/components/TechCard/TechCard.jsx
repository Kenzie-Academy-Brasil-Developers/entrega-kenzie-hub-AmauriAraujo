import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

import { StyledCard } from "../../styles/StyledCard";
export const TechCard = ({ tech }) => {
  const { setCurrentTech } = useContext(TechContext);
  return (
    <StyledCard onClick={() => setCurrentTech(tech)}>
      <h3>{tech.title}</h3>
      <h4>{tech.status}</h4>
    </StyledCard>
  );
};
