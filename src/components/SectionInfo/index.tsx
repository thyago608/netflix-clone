import React,{ReactNode} from 'react';
import { Container } from './styled';

interface Props{
    title:string;
    info: string;
    children:ReactNode;
}

export function SectionInfo({title, info,children}:Props){
    return(
        <Container>
            <header>
                <h1 className="title">{title}</h1>
            </header>
            <p className="info">{info}</p>
            <div className="animation">
                {children}
            </div>
        </Container>
    );
}