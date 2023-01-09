import styled from "styled-components";

const SearchComponent = styled.form`

    position: relative;
    margin-bottom: 10px;
    width: 100%;
    
    .input{
        outline: none;
        border: none;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        color: var(--grey-50);
        font-weight: 400;
        width: 90%;
        height: 50px;
        padding-left: 10px;
    }

    button{
        position: absolute;
        top: 7px;
        right: 8%;
        padding: 10px;
        font-size: 0.8rem;
    }

    @media (min-width: 520px){

        button{
            right: 7%;
        }

    }

     @media (min-width: 800px){

        text-align: right;
        width: 75%;
        margin: 15px;;

        .input{
            width: 100%;
            height: 50px;
        }

        button{
            top: 9px;
            right: 3%;
            padding: 8px;
        }        

    }

    @media (min-width: 1200px){

        width: 360px;
        margin-right: 50px;
        .input{
            height: 53px;
        }

        button{
            top: 9px;
            right: 3%;
            padding: 10px;
        }

    }

`

export default SearchComponent