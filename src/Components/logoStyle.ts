import styled from "styled-components";

const LogoContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
 
    div{

        display: flex;
        justify-content: center;
        align-items: center;

        h1{
            color: var(--gray-100);
            font-size: 25px;
        }
    
        span{
            color: var(--Color-secondary);
            font-weight: 600;
            margin: 7px 0px 0px 6px;
        }

    }

    @media (min-width: 800px){
        
        display: flex;
        justify-content: flex-end;
        margin: 0;
        margin-left: 35px;

       div{
        display: flex;
        justify-content: flex-start;

        h1{
            font-size: 1.8rem;
        }

        span{
            font-size: 1.3rem;
        }
        
       }

    }

`

export default LogoContainer