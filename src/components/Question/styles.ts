import styled from 'styled-components';

interface Props{
    active:boolean;
}

export const Container = styled.button<Props>`
    height: ${props => props.active ? '100%': '3.2rem'};
    border: 0;

    overflow: hidden;

    background: var(--gray);
    padding: 1rem;
    color: var(--white);
    cursor:pointer;
    
    .topButton{
        display: flex;
        justify-content: space-between;

        h2{
            font-size: 1.2rem;
            font-weight: normal;
        }

        svg{
            font-size: 1.6rem;
        }
    }

    p{
        margin-top: 1rem;
        font-size: 1.125rem;
        text-align: left;
    }

    & + button{
        margin-top: 0.5rem;
    }  
    
    
`;