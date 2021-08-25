import styled from 'styled-components';
import banner from '../../assets/images/banner.png';

export const Container = styled.div`
   
`;

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    background: transparent;

    height: 5.4rem; //85px
    padding: 0 1.5rem;

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
        height: 1.6rem;
    }


    .wrapper-select{
        width: 110px;
        height: 1.9rem;

        display: flex;
        align-items: center;
        justify-content:flex-end;
        border: 1px solid var(--white);
        border-radius: 4px;

        position: relative;

        svg{
            font-size: 1rem;
            position: absolute;
            top: 20%;
            left: 0.125rem;
            pointer-events: none;
        }

        &::after{
            content: "";            
            width: 0.7rem;
            height: 0.4rem;

            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: rotate(180deg);
            position: absolute;
            background: var(--white);
            margin-right: 0.7rem;
        }
    }

    .select-language{    
        padding-left: 1.5rem;
        width: 100%;
        height: 100%;
        background: transparent;
        color: white;
        font-size: 0.9rem;
        -webkit-appearance: none;
        outline: transparent;
        border: 0;

        option{
            background: gray;
        }
    }

    .toEnter{
        margin-left: 0.8rem;

        padding: 0.2rem 0.45rem;        

        border: 0;
        border-radius: 2px;
        
        font-size: 1rem;
        background: var(--red);
        color: var(--white);
        transition: filter 0.2s ease;
        cursor:pointer;

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

    @media(min-width: 590px){
        .wrapper-select{
            width: 120px;
        }
    }
`;

export const Banner = styled.div`
    height: 80vh;
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