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
`;

export const List = styled.div`
    width: 99999px;
    display: flex;

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