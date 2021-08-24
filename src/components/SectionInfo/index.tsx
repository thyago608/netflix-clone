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
                <h1>{title}</h1>
            </header>
            <p>{info}</p>
            <div className="animation">
                {children}
            </div>
        </Container>
    );
}