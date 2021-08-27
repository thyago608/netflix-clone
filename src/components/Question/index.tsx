import React,{ ReactNode } from 'react';
import { BiPlus, BiX } from "react-icons/bi";
import { Container } from './styles';

interface Props{
    title:string;
    buttonChange: () => void;
    active:boolean;
    children:ReactNode;
}


export function Question({title, buttonChange, active, children}:Props){

    return(
        <Container onClick={buttonChange} active={active}>
            <div className="topButton">
                <h2>{title}</h2>
                {active ?  <BiX/>:<BiPlus/>}
            </div>

            <div className="paragraphs">
                {children}
            </div>
        </Container>
    );
}
