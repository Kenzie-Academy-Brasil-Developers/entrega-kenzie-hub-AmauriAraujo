import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const TechCard=({tech})=>{
 const{setCurrentTech}=useContext(TechContext)
 
    return(

      <li onClick={()=>setCurrentTech(tech)}>
        <h3>{tech.title}</h3>
        <h3>{tech.status}</h3>
      </li>
    );


 
    
}