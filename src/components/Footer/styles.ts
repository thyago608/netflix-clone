import styled from 'styled-components';

export const Container = styled.footer`
    padding: 2.5rem 3rem;

    display: flex;
    flex-direction:column;

    color:#757575;

    h2{
        font-size: 1.06rem;
        font-weight: normal;
        padding:0 0.2rem;
    }

    .wrapper-information{
        margin-top: 1.5rem;
        flex: 1;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        ul{
            display: flex;
            flex-direction:column;
            padding:0 0.2rem;

            li{
                height: 45px;
            }

            a{
                font-size: 0.84rem;
                color:inherit;

                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }

    .wrapper-selection{
        position: relative;
       
        width: 9.8rem;
        height: 3.3rem;

        display: flex;
        align-items: center;


        select{
            border-color: #333;
            border-radius: 2px;
            background:#000000;
            color: #999;

            width: 100%;
            height: 100%;

            -webkit-appearance: none;

            font-size: 1rem;

            padding-left: 2.8rem;
        }

        svg{
            pointer-events: none;
            font-size: 1.2rem;

            color: #999;

            position: absolute;
            margin: 0 0.8rem;
        }

        &:after{
            content: "";
            width: 0.6rem;
            height: 0.4rem;

            background: #999;

            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: rotate(180deg);

            position: absolute;
            right: 10px;

            pointer-events: none;
        }
   }

   span{
       color:#999;
       font-size:0.82rem;
       margin-top: 1.5rem;
   }
`;