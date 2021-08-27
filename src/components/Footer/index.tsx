import React from 'react';
import { BiGlobe } from "react-icons/bi";
import { Container } from './styles';

export function Footer(){
    return(
        <Container>
            <h2>Dúvidas ? Ligue 0800-761-4631</h2>
            <div className="wrapper-information">
                <nav>
                    <ul>
                        <li><a href="#">Perguntas Frequentes</a></li>
                        <li><a href="#">Imprensa</a></li>
                        <li><a href="#">Resgatar cartão pré-pago</a></li>
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Informações corporativas</a></li>
                        <li><a href="#">Avisos legais</a></li>                    
                    </ul>
                </nav>

                <nav>
                    <ul>
                        <li><a href="#">Centro de ajuda</a></li>
                        <li><a href="#">Relações com investidores</a></li>
                        <li><a href="#">Comprar cartão pré-pago</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Entre em contato</a></li>
                        <li><a href="#">Só na Netflix</a></li>                    
                    </ul>
                </nav>


                <nav>
                    <ul>
                        <li><a href="#">Conta</a></li>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Formas de assistir</a></li>
                        <li><a href="#">Preferências de cookies</a></li>
                        <li><a href="#">Teste de velocidade</a></li>
                    </ul>
                </nav>
            </div>
       
            <div className="wrapper-selection">
                <BiGlobe/>
                <select>
                    <option value="pt-br">Português</option>
                    <option value="es-eua">English</option>
                </select>
            </div>

            <span>Netflix Brasil</span>
        
        </Container>
    );
}