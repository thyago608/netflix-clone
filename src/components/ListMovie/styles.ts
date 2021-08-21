import styled from 'styled-components';

export const Container = styled.section`
    & + & {
        margin-top: 2rem;
    }

    > h2{
        margin-bottom: 2rem;
    }

    margin-left: 2rem;
    margin-top: -10rem;
`;

export const Movies = styled.div`
    overflow-x: hidden;

    .previous, .next{
        height: 15.3rem;

        display: flex;
        align-items: center;
        justify-content: center;


        position: absolute;
        z-index: 1;
        background-color: rgba(0,0,0,0.8);

        cursor: pointer;
        opacity: 0;
        border: 0;
        transition: opacity 0.4s ease;

        svg{
            font-size: 3rem;
            color: white;
        }

        @media(max-width:800px){
            opacity: 1;
        }
    }
    .previous{
        left: 0;
    }

    .next{
        right: 0;
    }

    &:hover{
        .previous, .next{
            opacity: 1;
        }
    }
`;

export const List = styled.div`
    display: flex;
    transition: margin 0.7s ease;


    .movie{
        width: 10rem;
        cursor:pointer;

        img{
            transform: scale(0.9);
            transition: transform ease 0.2s;

            &:hover{
                transform: scale(1);
            }
        }
    }
`;