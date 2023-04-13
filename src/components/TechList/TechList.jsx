import { useContext, useEffect } from "react";
import { TechCard } from "../TechCard/TechCard"
import { TechContext } from "../../providers/TechContext";


export const TechList=()=>{
   

    const {techList} =useContext(TechContext);
    



    return (
        <ul>

        {techList && techList.map(tech=>{
            return <TechCard key={tech.id} tech={tech}/>
        })}

        


        </ul>
    )
}