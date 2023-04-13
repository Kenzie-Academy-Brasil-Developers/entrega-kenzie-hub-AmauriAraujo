import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext ";


export const TechContext= createContext({});

export const TechProvider=({children})=>{
    
    const { user } = useContext(UserContext);

    const [techList, setTechList] = useState([]);

    console.log(techList)

    const [isOpen, setIsOpen] = useState(false);


    const createNewTech=async(data)=>{
        const token = JSON.parse(localStorage.getItem("@TOKEN"));

        try {
            const response=await api.post(`users/techs`,data,{
                headers:{
                    Authorization: `Bearer ${token}`,
            
                }
            })

            toast.success("Tecnologia cadastrada!")

            setIsOpen(false)
        } catch (error) {
            toast.error(error.response.data.message)
        }
       


      
    }







    const techs=(user)=>{

        console.log(user)
      setTechList(user.techs)
     
    }

    useEffect(()=>{techs(user)},[])
    
     
   



    return(
        <TechContext.Provider value={{isOpen,setIsOpen,createNewTech}}>
            {children}
        </TechContext.Provider>
    )
}