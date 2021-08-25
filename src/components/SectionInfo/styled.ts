import styled from 'styled-components';

export const Container = styled.section`
    padding: 1.8rem 2.1rem 3rem 2rem;
    border-top: 8px solid #222;
    position: relative;

    .title{
        text-align: center;
        font-size: 1.7rem;
        margin-top: 0.6rem;
    }

    .info{
        margin-top: 1rem;
        font-size: 1.08rem;
        line-height: 1.6rem;
        text-align: center;
    }


    .animation{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container-image-video{
        max-width:420px;
        height: 285px;

        position: relative;
        overflow: hidden;

        img{
            object-fit: cover;
        }
    }
    
    &.enjoyOnTv{
        padding: 1.8rem 2.1rem 2.5rem 2rem;

        .container-image-video{

            video{
                width: 73%;
                height: 70%;

                position: absolute;
                top:13%;
                left:13.2%;
                z-index: -1;
            }

        }
    }

    &.watchWheneverYouWant{
        padding: 2rem 2.1rem 3.75rem 2rem;

        .container-image-video{

            video{
                width:65%;
                height: 80%;

                position: absolute;
                top:-20px;
                left:17%;
                z-index: -1;
            }

        }
    }

    &.createProfileForChildren{
        border-bottom: 8px solid #222;
    }

`;