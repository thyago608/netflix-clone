import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    
    > footer{
        padding: 1rem;
        text-align: center; 
    }

   .loading{
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        > img{
            width: 40rem;
            height: 20rem;
        }
}


`;