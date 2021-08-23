import styled from 'styled-components';
import banner from '../../assets/images/banner.png';

export const Container = styled.div``;

export const Header = styled.header``;

export const Banner = styled.div`
    height: 52vh;
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .verticalTransparency{
        width: inherit;
        height: inherit;
        background: linear-gradient(to bottom, rgba(0,0,0,0.99) 3%, rgba(40,40,40,0.3), rgba(7,7,7, 0.85));
  
  
        .horizontalTransparency{
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.3));

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media(min-width: 551px) and (max-width: 590px){
        height: 100vh;
        background-position-x: 50%;

        .verticalTransparency{
            background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(40,40,40,0.3), rgba(7,7,7,0.85));
        }
    }
`;


export const MainInformation = styled.section`
    padding: 1.5rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items:center;

    .title{
        font-size: 1.9rem;
        text-align: center;

        span{
            margin-left: 0.3rem;
        }
    }

    .watchOrCancel{
        margin-top: 0.5rem;
        font-size: 1.3rem;
        text-align: center;
    }

    .readyToWatch{
        margin-top: 1rem;
        
        font-size: 1.15rem;
        line-height: 1.7rem;
        text-align: center;
        max-width: 70%;
    }

    .form-user{
        width: 100%;
        margin-top: 0.7rem;
    }

    .input-button{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        input{
            width: 100%;
            padding: 1rem;
            border-radius: 2px;
            outline: transparent;
        }

        button{
            border: 0;
            border-radius: 2px;

            margin-top: 1rem;

            width: 7rem;
            height: 2.7rem;

            background: var(--red);
            color: var(--white);
            font-size: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;

            svg{
                font-size: 1.4rem;
            }
        }
    }


    @media(min-width: 551px) and (max-width: 590px){
        .title{
            font-size: 3.2rem;
            padding: 0 2rem;

            span{
                margin-left: 0.5rem;
            }
        }

        .watchOrCancel{
            font-size: 1.8rem;
        }

        .input-button{
            input{
                width: 90%;
            }
        }
    }
`;