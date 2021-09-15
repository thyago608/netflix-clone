import styled from 'styled-components';

interface Props{
    active:boolean;
}

export const Container = styled.section<Props>`
    
    button{
        border: 0;

        width: 100%;
        height: 3.2rem;
        padding: 0 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        color: var(--white);
        cursor: pointer;
        background: var(--gray);

        h2{
            font-size: 1.09rem;
            font-weight: normal;
        }

        svg{
            font-size: 1.6rem;
        }
    }

    .paragraphs{
       margin-top: 1px;
       padding: 1rem;
       background: var(--gray);
       position: absolute;
       z-index: -1;
       
       p{
            font-size: 1.125rem;
            text-align: left;
            
            & + p{
                margin-top: 1rem;
            }
        
        
        }

    }

    & + section{
      margin-top: 0.5rem;
    }

`;