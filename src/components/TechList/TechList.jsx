import { useContext } from "react";
import { TechCard } from "../TechCard/TechCard";
import { TechContext } from "../../providers/TechContext";
import btmais from"../../assets/+.svg"
import { StyledTechList } from "./StyledTechList";
export const TechList = () => {
  const { techList, setIsOpen } = useContext(TechContext);

  return (
    <>
      <div className="header__list">
        <h2>Tecnologias</h2>

        <button id="btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
         <img src={btmais}/>
        </button>
      </div>
      <StyledTechList>
        {techList &&
          techList.map((tech) => {
            return <TechCard key={tech.id} tech={tech} />;
          })}
      </StyledTechList>
    </>
  );
};
