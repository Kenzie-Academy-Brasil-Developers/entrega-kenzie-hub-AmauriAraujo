import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap');

*{
    font-family: 'Inter', sans-serif;
    margin:0;
   padding:0;
    box-sizing:border-box;
    background-color:black;
    color:white;
}
fieldset{
    border: none;
    
}
input{
    max-width:100%;
    width:100%;
    height:38.5px;
    border-radius:3.21px;
    padding:0 13px;
    color:#868E96;
    font-weight:400px;
    font-size:0.812rem;
    background-color:#343B41;
    border:solid 0.98px #343B41 ;
    outline:none;

    ::placeholder{
        color:#868E96
    }

    :focus{
        border-color:#F8F9FA;
    
    }
    @media(min-width: 800px){
        width: 329.93px;
        height:48px;
        padding:0 16px;
        border-radius:4px;
        
    }


}
.primary__button{
    font-size:0.802rem;
    font-weight:500;
    color:#F8F9FA;
    width:100%;
    height: 38.5px;
    padding:0 22px;
    background-color:#FF577F;
    border:1.22px #FF577F solid;
    border-radius:4px;
    :hover{
        background-color:#FF427F;
        opacity:50%;
    }
    @media(min-width: 800px){
        font-size:1rem;
        width:324px;
        height:48px;
    }
}
h3{
    font-weight:700;
    font-size:1.125rem;
    color:#F8F9FA;
    background:none;
}


label{
    align-Self: start;
    font-size:0.761rem;
    color:#F8F9FA;
    font-weight:400;
    background:none;
}
small,p{
    font-weight:600;
    color:#868E96;
    font-size:0.75rem;
    background:none;
}
p{
    color:#FF577F;
    align-self:flex-start;

}
a{
    text-decoration:none;
    font-size:0.802rem;
    font-weight:500;
    color:#F8F9FA;

    @media(min-width: 800px){
        font-size:1rem;
    }
}

select{
    width:100%;
    height:38.38px;
    padding:0 13px;
    border:0.97px solid #343B41;
    background-color:#343B41;
    color:#868E96;
    font-weight:400px;
    font-size:0.812rem;
    border-radius:4px;
    outline:none;
    :focus{
        border-color:#F8F9FA;
    
    }
    @media(min-width: 800px){
        width:329.93px;
        height:48px;
       
    }
option{
    color:#868E96;
    font-weight:400px;
    font-size:0.812rem;
}
}


`;
