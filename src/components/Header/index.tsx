import React,{ useEffect, useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';


export function Header(){
    
    const [isBlack, setIsBlack] = useState(false);

    useEffect(()=>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setIsBlack(true);
                return;
            }
            setIsBlack(false);
        };
    
        window.addEventListener('scroll', scrollListener);

        return () => window.removeEventListener('scroll', scrollListener);
    },[])
 
    return(
        <Container className={isBlack ? 'header-black':''}>
            <div className="container-image-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container-image-user">
                <img src={user} alt="user" />
            </div>
        </Container>
    );
}