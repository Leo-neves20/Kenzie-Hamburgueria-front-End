import styled from "styled-components";

export const Card = styled.li`

    background-color: var(--grey-0);
    min-width: 250px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid #E0E0E0;
    border-radius: 5px;

    img{

        background-color: var(--grey-0);
        width: 150px; 
        height: 150px;

    }

    div{

        background-color: white;
        width: 100%;
        display: flex;
        flex-direction: column;

    }

    div > h3, span, button{

        margin: 7px 15px;

    }

    div > h3{

        margin-top: 25px;
        color: var(--grey-100);
    }

    div > span:nth-child(3){

        color: var(--Color-primary);

    }

    div > span:nth-child(2){

        color: var(--grey-50);

    }

    div > button{

        width: 35%;
        padding: 8px;
        margin-bottom: 15px;

    }

`

export const UlCards = styled.ul`

    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin-left: 7px;

    &::-webkit-scrollbar{

        background-color: transparent;
        height: 7px;

    }

    &::-webkit-scrollbar-thumb{

        background-color: transparent;

    }

    @media (min-width: 950px){
    
        width: 541px;
        overflow-x: hidden;
        flex-wrap: wrap;

    }

    @media (min-width: 1214px){
        width: 814px;
    }

`
