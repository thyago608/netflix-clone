import React,{ useState, ReactNode } from 'react';
import { BiPlus, BiX } from "react-icons/bi";
import { Container } from './styles';

interface Props{
    title:string;
    children:ReactNode;
}

export function Question({title, children}:Props){
    const [isActive, setIsActive]  = useState(false);
    
    function handleButtonChange(){
        setIsActive((oldState)=> !oldState);
    }
    return(
        <Container onClick={handleButtonChange} active={isActive}>
            <div className="topButton">
                <h2>{title}</h2>
                {isActive ?  <BiX/>:<BiPlus/>}
            </div>

            <div className="paragraphs">
                {children}
            </div>
        </Container>
    );
}
