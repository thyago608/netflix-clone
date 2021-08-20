import styled from 'styled-components';

export const Container = styled.header`
    padding-right: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    height: 4.5rem;
    background: transparent;

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.5s ease;

    .container-image-logo,
    .container-image-user{
        height: 3.5rem;
    }

    .container-image-user{
        img{
            border-radius: 2px;
        }
    }


    &.header-black{
        background: #000000;
    }
`;