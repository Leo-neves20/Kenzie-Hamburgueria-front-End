import styled from "styled-components";

const Header = styled.header`

    background-color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    img{
        margin: 14px 0px 15px;
        width: 150px;
        height: 22px;
    }

    div{    
        width: 100%;
        text-align: center;
    }

    @media (min-width: 800px){

        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img{
            margin-left: 6%;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: end;
        }

}

`
export default Header