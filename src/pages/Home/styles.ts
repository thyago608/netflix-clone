import styled from 'styled-components';
import { BiGlobe } from "react-icons/bi"
import banner from '../../assets/images/banner.png';

export const Container = styled.div`
   
`;

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    background: transparent;

    height: 5rem;
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        margin-left: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .container-logo{
        height: 1.5rem;
    }

    .select-language{
        border: 1px solid white;
        border-radius: 3px;
        width: 120px;
        height: 1.8rem;
        padding-left: 1.5rem;
        background: transparent;
        color: white;
        font-size: 1rem;
    }

    .toEnter{
        margin-left: 1.6rem;

        padding: 0.5rem 0.8rem;        

        border: 0;
        border-radius: 2px;
        
        font-size: 1rem;
        background: var(--red);
        color: var(--white);
        transition: filter 0.2s ease;

        &:hover{
            filter:brightness(0.8);
        }
    }

    @media(min-width: 551px) and (max-width: 590px){
        .container-logo{
            height: 2rem;
        }

        .select-language{
            height: 2rem;
        }

        .toEnter{
            height: 2.3rem;
            padding: 0 1.3rem;
        }
    }
`;

export const Banner = styled.div`
    height: 60vh;
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