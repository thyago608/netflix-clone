import React from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';

export function Header(){
    return(
        <Container>
            <div className="container-image-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container-image-user">
                <img src={user} alt="user" />
            </div>
        </Container>
    );
}