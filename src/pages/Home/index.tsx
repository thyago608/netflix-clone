import React from 'react';

import { BiChevronRight, BiGlobe } from "react-icons/bi";
import { SectionInfo } from '../../components/SectionInfo';

import { Question } from '../../components/Question';

import logo from '../../assets/images/logo.svg';''
import tv from '../../assets/images/tv.png';
import girlStrangerThings from '../../assets/images/girl-stranger-things.png';
import strangerThingsCapa from '../../assets/images/stranger-things.png';
import devicePile from '../../assets/images/device-pile.png';
import childrenPhoto from '../../assets/images/children.png';
import videoTvFirst from '../../assets/video/video-tv-first.mp4';
import videoDevice from '../../assets/video/video-device.mp4';


import { Container, Header, Banner, MainInformation, SectionReadyToWatch} from './styles';
import { CommonQuestions } from '../../components/CommonQuestions';

export function Home(){
    return(
        <Container>
            <Header>
                <div className="container-logo">
                    <img src={logo} alt="logo"/>
                </div>

                <nav>
                    <div className="wrapper-select">
                        <BiGlobe/>
                        <select className="select-language">
                            <option value="pt-br">
                                Português
                            </option>
                            <option value="pt-br">
                                English
                            </option>
                        </select>
                    </div>

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
                                    <span className="span-label">Email</span>
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

            <section>
                <SectionInfo
                    className="enjoyOnTv"
                    title="Aproveite na TV."
                    info="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
                    image={tv}
                    video={videoTvFirst}
                />

                <SectionInfo
                    title="Baixe séries para assistir offline."
                    info="Salve seus títulos favoritos e sempre tenha algo para assistir."
                    image={girlStrangerThings}
                />
                
                <SectionInfo className="watchWheneverYouWant"
                    title="Assista quando quiser."
                    info="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
                    image={devicePile}
                    video={videoDevice}
                />

                <SectionInfo className="createProfileForChildren"
                    title="Crie perfis para crianças."
                    info="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
                    image={childrenPhoto}
                />
            </section>
        
            <CommonQuestions/>
        
            <SectionReadyToWatch>
                <header>
                    <h1>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h1>
                </header>
                <div className="input-block">
                    <input type="text"/>

                    <button className="letsgo">
                        Vamos lá
                        <BiChevronRight/>
                    </button>
                </div>
            </SectionReadyToWatch>
        </Container>
    );
}