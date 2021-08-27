import styled,{css} from 'styled-components';

interface Props{
    active:boolean;
}

export const Container = styled.button<Props>`
    width: 100%;
    height: ${props => props.active ? '100%':'3.2rem'};
    overflow: ${props => props.active ? 'none':'hidden'};
    
    border: 0;

    background: var(--gray);

    color: var(--white);
    cursor:pointer;

    & + button{
        margin-top: 0.5rem;
    }

    .topButton{
        padding: 0 1rem;
        height: 3rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2{
            font-size: 1.09rem;
            font-weight: normal;
        }

        svg{
            font-size: 1.6rem;
        }
    }

    .paragraphs{
        padding: 1rem;
        background: var(--gray);

        p{
            font-size: 1.125rem;
            text-align: left;
        
            & + p{
                margin-top: 1rem;
            }
        }
    }

`;