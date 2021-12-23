import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
	boxShadow: 'none !important'
}
    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }
a{
    cursor: pointer;

}

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
    }
    body::-webkit-scrollbar {
        width: 10px;
      }
      body::-webkit-scrollbar-track {
        background: black;
      }
      body::-webkit-scrollbar-thumb {
        background: #454545;
        border-radius: 3px;
      }
      body::-webkit-scrollbar-thumb:hover {
        background: grey;
      }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        // color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        // color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
    }
    *:focus {
        outline: none;
    }

    @-webkit-keyframes ani-mouse {
        0% {
        opacity: 1;
        top: 29%;
        }
        15% {
        opacity: 1;
        top: 50%;
        }
        50% {
        opacity: 0;
        top: 50%;
        }
        100% {
        opacity: 0;
        top: 29%;
        }
      }
      @-moz-keyframes ani-mouse {
        0% {
        opacity: 1;
        top: 29%;
        }
        15% {
        opacity: 1;
        top: 50%;
        }
        50% {
        opacity: 0;
        top: 50%;
        }
        100% {
        opacity: 0;
        top: 29%;
        }
      }
      @keyframes ani-mouse {
        0% {
        opacity: 1;
        top: 29%;
        }
        15% {
        opacity: 1;
        top: 50%;
        }
        50% {
        opacity: 0;
        top: 50%;
        }
        100% {
        opacity: 0;
        top: 29%;
        }
      }
       .scroll-btn {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
      }
      .scroll-btn > * {
        display: inline-block;
        line-height: 18px;
        font-size: 13px;
        font-weight: normal;
        color: #7f8c8d;
        color: #ffffff;
        font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
        letter-spacing: 2px;
      }
      .scroll-btn > *:hover,
      .scroll-btn > *:focus,
      .scroll-btn > *.active {
        color: #ffffff;
      }
      .scroll-btn > *:hover,
      .scroll-btn > *:focus,
      .scroll-btn > *:active,
      .scroll-btn > *.active {
        opacity: 0.8;
        filter: alpha(opacity=80);
      }
      .scroll-btn .mouse {
        position: relative;
        display: block;
        width: 28px;
        height: 55px;
        margin: 0 auto 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 3px solid #DD6B20;
        border-radius: 23px;
      }
      .scroll-btn .mouse > * {
        position: absolute;
        display: block;
        top: 29%;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        background: orange;
        border-radius: 50%;
        -webkit-animation: ani-mouse 2.5s linear infinite;
        -moz-animation: ani-mouse 2.5s linear infinite;
        animation: ani-mouse 2.5s linear infinite;
      }      
`;