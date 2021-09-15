import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';
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
            <Link to="/" className="container-image-logo">
                <img src={logo} alt="logo"/>
            </Link>
            <div className="container-image-user">
                <img src={user} alt="user" />
            </div>
        </Container>
    );
}