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
            padding-left: 2rem;
            
            display: flex;
            align-items: center;
        }
    }
`;

export const MovieInfo = styled.section`
    font-weight: bold;

    strong, span{
        display: block;
    }

    .original-name{
        font-size:4rem;
    }

    .description{
        margin-top: 1rem;
        font-size: 1.15rem;

        max-width:275px;
        display: flex;
        justify-content: space-between;

        .average{
            color: #46d369;
        }

        .year{}

        .number-of-seasons{}
    }

    .overview{
        margin-top: 1rem;
        font-size: 1.25rem;
        font-weight: normal;
        color: #9999;

        max-width: 40%;    // A transição ocorre nos 30%
    }

    .container-buttons{
        margin-top: 1rem;
        
        display: flex;
    }

    .filmGenre{
        margin-top: 1rem;
        font-size: 1.15rem;
        font-weight: normal;
        color: #9999;
    }
`;

export const Button = styled.button`
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;
    padding: 0.5rem 0.8rem;
    
    transition: filter 0.2s ease;

    & + &{
        margin-left: 0.5rem;
    }

    & > svg{
        margin-right: 2px;
    }

    &:hover{
        filter:brightness(0.7);
    }

    &.button-list{
        background-color: #333;
        color: #FFF;
    }

    &.button-play{
        background-color: var(--white);
        color: #000;
    }    


`;