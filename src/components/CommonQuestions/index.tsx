import React from 'react';
import { Question } from '../../components/Question';
import { Container } from './styles';

export function CommonQuestions(){
    return(
        <Container>
             <header>
                    <h1>Perguntas frequentes</h1>
                </header>
                <Question 
                    title="O que é a Netflix ?">
                    <p>A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p>
                    <p>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</p>
                </Question>

                <Question 
                    title="Quanto custa a Netflix ?">
                    <p>Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.</p>
                </Question>

                <Question 
                    title="Onde posso assistir ?">
                    <p>A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p>
                    <p>Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</p>
                </Question>

                <Question 
                    title="Como faço para cancelar ?">
                    <p>A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.</p>
                </Question>

                <Question 
                    title="O que eu posso assistir na Netflix ?">
                    <p>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</p>
                </Question>

                <Question 
                    title="A Netflix é adequada para crianças?">
                    <p>A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos pais.</p>
                    <p>O recurso de controle dos pais, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.</p>
                </Question>
        </Container>
    );
}