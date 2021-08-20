import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-position: center;  //Posição do background
    background-size:cover;  //Irá cobrir todo o espaço disponível
    background-repeat: no-repeat;  //Define se o background irá se repetir

    .verticalTransparency{
        width: inherit;  //tamanho herdado do seu elemento pai
        height: inherit; //tamanho herdado do seu elemento pai
        
        /*  Debaixo para cima, saindo do preto para o transparente
            Onde o preto ocupa 10% e o transparent ocupará 90%
            O padrão é 50% do preto e 50% do transparente (nesse caso)
        */
        background: linear-gradient(to top, #111 10%, transparent 90%); 
    
        .horizontalTransparency{
            width: inherit;
            height: inherit;

            background: linear-gradient(to right, #111 30%, transparent 70%);
        }
    }
`;

export const MovieInfo = styled.section`
`;

export const Button = styled.button``;