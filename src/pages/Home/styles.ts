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

    height: 4.5rem; //85px
    padding: 0 1.8rem;
    margin-top: 0.1rem;

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


    .wrapper-select{
        width: 110px;
        height: 1.6rem;

        display: flex;
        align-items: center;
        justify-content:flex-end;
        border: 1px solid var(--white);
        border-radius: 2px;

        position: relative;

        svg{
            font-size: 1rem;
            position: absolute;
            top: 20%;
            left: 0.125rem;
            pointer-events: none;
            margin: 0 0.1rem;
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

        padding: 0.27rem 0.5rem;        

        border: 0;
        border-radius: 2px;
        
        font-size: 0.9rem;
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
    height: 76vh;
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .verticalTransparency{
        width: inherit;
        height: inherit;
        background: linear-gradient(to bottom, rgba(0,0,0,1) 1%, transparent, rgba(7,7,7, 0.85));
  
  
        .horizontalTransparency{
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.3));
        
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media(min-width: 551px) and (max-width: 590px){
        height: 100vh;
        background-position-x: 50%;
    }
`;


export const MainInformation = styled.section`
    padding: 1.5rem;
    margin-top:3rem;

    display: flex;
    flex-direction: column;
    align-items:center;

    .title{
        font-size: 1.7rem;
        text-align: center;

        span{
            margin-left: 0.3rem;
        }
    }

    .watchOrCancel{
        margin-top: 0.5rem;
        font-size: 1.1rem;
        text-align: center;
    }

    .readyToWatch{
        margin-top: 1rem;
        
        font-size: 1rem;
        line-height: 1.7rem;
        text-align: center;
        max-width: 70%;
    }

    .form-user{
        width: 100%;
        margin-top: 0.3rem;
    }

    .input-button{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        position: relative;

        input{
            width: 100%;
            padding: 0.8rem 0.6rem;
            border-radius: 1px;
            outline: transparent;
            border-color:transparent;
            transition: all 2s ease;

            &::placeholder{
                opacity: 0;
            }
            
            &:focus + .span-label{
                padding-top: 0.3rem;
                font-size: 0.8rem;
            }

            &:focus{
                border-color: #3498db;
            }
        }

        button{
            border: 0;
            border-radius: 2px;

            margin-top: 0.8rem;

            height: 2.5rem;
            padding: 0 0.7rem;

            background: var(--red);
            color: var(--white);
            font-size: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            transition: filter 0.1s ease;

            &:hover{
                filter: brightness(1.1);
            }

            svg{
                font-size: 1.4rem;
            }
        }

        .span-label{
            font-size: 0.9rem;
            color: gray;
            position: absolute;

            top:0;
            left:0;
            padding: 1rem 0 0 0.8rem;

            transition: all 0.2s ease;
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

export const SectionReadyToWatch = styled.section`
    padding: 1.5rem 0 3.2rem 0;
    border-bottom: 8px solid #222;

    h1{
        padding: 0rem 4rem;
        color: white;
        font-size: 1.125rem;
        font-weight: normal;
        text-align: center;
    }

    .input-block{
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        input{
            margin-top: 0.5rem;
            width: 100%;
            height: 2.8rem;
        }
        
        button{
            border: 0;
            border-radius: 2px;

            margin-top: 0.75rem;

            height: 2.5rem;
            padding: 0 0.7rem;

            background: var(--red);
            color: var(--white);
            font-size: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            transition: filter 0.1s ease;

            &:hover{
                filter: brightness(1.1);
            }

            svg{
                font-size: 1.4rem;
            }
        }


    }
`;