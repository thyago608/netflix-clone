import styled from 'styled-components';

export const Container = styled.header`
    padding: 0 2rem;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    height: 4.5rem;
    background: transparent;

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.5s ease;

    .container-image-logo{
        height: 3rem;

    }

    .container-image-user{
        height: 2.8rem;

        img{
            border-radius: 2px;
        }
    }


    &.header-black{
        background: #000000;
    }
`;