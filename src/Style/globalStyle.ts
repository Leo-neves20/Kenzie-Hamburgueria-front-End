import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{

    --Color-primary:     #27AE60;
    --Color-primary-50:  #93D7AF;
    --Color-secondary:   #EB5757;

    --gray-100: #333333;
    --grey-50:  #828282;
    --grey-20:  #E0E0E0;
    --grey-0:   #F5F5F5;

    --feedBack-Negative:     #E60000;
    --feedBack-Warning:      #FFCD07;
    --feedBack-Sucess:       #168821;
    --feedBack-Information:  #155BCB;

    }

    body, header, section, main, li, ul, div, img, h2, h1, h3, p, span, button, input{

        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        border: none;
        font-family: 'Inter', sans-serif;

    }

    body{

        height: 100vh;
        
    }

    @media (min-width: 950px){

        .contentPage{

            width: 950px;
            margin: 0 auto;
            margin-top: 30px;

            section:nth-child(1){

                display: flex;
                flex-direction: row;
                position: relative;
            }
            
        }

    }

    @media (min-width: 1050px){

        width: 950px;

        .contentPage{

            width: 970px;
            margin-top: 30px;

        }
    }

    @media (min-width: 1214px){
        width: 1214px;
        background-color: #27AE60;

        .contentPage{
            width: 1214px;
            margin-top: 30px;
        }
    }

`

export default GlobalStyle 