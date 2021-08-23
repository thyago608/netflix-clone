import React from 'react';
import { BiChevronRight,BiGlobe } from "react-icons/bi";
import logo from '../../assets/images/logo.svg';
import { Container, Header, Banner, MainInformation} from './styles';

export function Home(){
    return(
        <Container>
            <Header>
                <div className="container-logo">
                    <img src={logo} alt="logo"/>
                </div>

                <nav>
                    <select className="select-language">
                        <option value="pt-br">
                            Português
                        </option>
                    </select>

                    <button className="toEnter">
                        Entrar
                    </button>
                </nav>

            </Header>
            <Banner>
                <div className="verticalTransparency">
                   <div className="horizontalTransparency">
                        <MainInformation>
                            <header>
                                <h1 className="title">Filmes, séries e muito mais.
                                    <span>Sem limites.</span>
                                </h1>
                            </header>
                            <p className="watchOrCancel">Assista onde quiser. Cancele quando quiser.</p>

                            <p className="readyToWatch">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                            
                            <form className="form-user">
                                <div className="input-button">
                                    <input type="email" placeholder="Email" />
                                    <button className="letsgo">
                                        Vamos lá
                                        <BiChevronRight/>
                                    </button>
                                </div>
                            </form>
                        </MainInformation>   
                    </div>    
                </div>
            </Banner>
        </Container>
    );
}