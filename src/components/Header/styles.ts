import styled from 'styled-components';

export const Container = styled.header`
    padding-right: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    height: 4.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;


    .container-image-logo,
    .container-image-user{
        height: 3.5rem;
    }

    .container-image-user{
        img{
            border-radius: 2px;
        }
    }
`;