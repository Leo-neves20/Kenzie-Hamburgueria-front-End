import styled from "styled-components";

export const CartSection = styled.section`

    width: 90%;
    margin: 0 auto 20px auto;

    .headerCart{

        background-color: var(--Color-primary);
        border-radius: 5px 5px 0px 0px;

    }

    .headerCart > h1{

        font-weight: 700;
        color: white;
        padding: 15px 20px;
        font-size: 0.9rem;

    }

    .ulCart{

        max-height: 300px;
        overflow-y: scroll;
        background-color: #F5F5F5;

    }

    .ulCart__mensagem{

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;

    }

    .ulCart__mensagem > p{

        font-weight: 600;
        color: var(--grey-100);
        font-size: 1.1rem;

    }

    .ulCart__mensagem > span{

        font-weight: 500;
        color: var(--grey-50);
        font-size: 0.8rem;

    }

    .boxTotalCart{

        background-color: #F5F5F5;
        border-radius: 0px 0px 5px 5px;
        text-align: center;

    }

    .boxTotalCart > div{

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        width: 90%;
        border-top: 2px solid #E0E0E0;
        margin: 0 auto;
    }

    .boxTotalCart > div > span:nth-child(1){

        font-weight: 600;
        color: var(--grey-100);
        font-size: 1rem;

    }

    .boxTotalCart > div > span:nth-child(2){

        color: var(--grey-50);
        font-weight: 500;
        font-size: 0.87rem;

    }

    .boxTotalCart > button{

        width: 90%;
        margin: 15px 0 20px 0;
        padding: 10px;
        border-radius: 8px;

    }

    @media (min-width: 950px){

        width: 380px;
        position: sticky;
        right: 8px;
        top: 20px;
        align-self: flex-start;
        margin-top: 56px;
        

    }

    @media (min-width: 1050px){

        margin: 56px 0px 20px auto;
        
    }

`

export const CardCart = styled.li`

    display: flex;
    align-items: center;
    width: 90%;
    margin: 5px auto;

    img{

        width: 70px;
        height: 66px;
        background-color: #dbdbdb;

    }

    .containerConteudos{

        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .containerConteudos__nomeCategoria{

        padding: 10px 0px 0px 10px;

    }

    .containerConteudos__nomeCategoria > h3{

        font-size: 0.9rem;
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .containerConteudos__nomeCategoria > span{

        margin: 0;
        display: block;
        margin-top: 10px;
        font-weight: 500;
        font-size: 0.7rem;
        color: var(--grey-300);

    }

    .containerConteudos__btn{

        text-align: right;
        width: 100%;

    }

    .containerConteudos__btn > button{

        margin: 0;
        margin-top: 12px;
        text-align: right;
        font-weight: 500;
        font-size: 0.9rem;
        background-color: transparent;
        color: #a4a4a4;

    }

    .btn__containarAmaunt{

        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

    }

    .btn__containarAmaunt > button{

        margin: 0;
        padding: 0px;
        width: 25px;
        height: 25px;
        
    }

    .btn__containarAmaunt > span{

        margin: 0;
        text-align: center;
        margin: 0 5px;

    }

`