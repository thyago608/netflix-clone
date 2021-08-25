import React,{ReactNode,HTMLAttributes} from 'react';
import { Container } from './styled';

interface Props extends HTMLAttributes<any> {
    title:string;
    info: string;
    image: string;
    video?:string;
    children?:ReactNode;
}

export function SectionInfo({title, info, image, video, children, ...rest}:Props){
    return(
        <Container {...rest}>
            <header>
                <h1 className="title">{title}</h1>
            </header>
            <p className="info">{info}</p>
            
            <div className="animation">
                <div className="container-image-video">
                <img src={image} alt="photo"/>
                {video && <video loop autoPlay playsInline muted>
                    <source src={video}type="video/mp4"/>
                </video>}
                </div>
            </div>
        </Container>
    );
}