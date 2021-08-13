import styled from 'styled-components';

export const Container = styled.section`
    & + & {
        margin-top: 2rem;
    }

    > h2{
        margin-bottom: 2rem;
    }

    padding-left: 2rem;
`;

export const Movies = styled.div`
    overflow-x: hidden;
`;

export const List = styled.div`
    width: 99999px;
    display: flex;

    .movie{
        width: 10rem;

        img{
            transform: scale(0.9);

            &:hover{
                transform: scale(1);
            }
        }
    }
`;