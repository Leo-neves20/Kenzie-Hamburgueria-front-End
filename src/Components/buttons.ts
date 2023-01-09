import styled from "styled-components";
 
export const ButtonPrimary = styled.button`

    background-color: var(--Color-primary);
    color: #FFFFFF;
    font-weight: 600;
    border-radius: 8px; 

    &:hover{
        background-color: var(--Color-primary-50);
    }

`

export const BtnGrey = styled.button`

    background-color: #E0E0E0;
    color: var(--grey-300);
    font-weight: 600;

    &:hover{
        background-color: var(--grey-300);
        color: #E0E0E0;
    }

`