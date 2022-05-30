import { createGlobalStyle } from 'styled-components';

import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }


  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: #F6F6F6;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* background-color: var(--blue); */
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
  }

  section {
    margin: 0 auto;
    padding: 0 0 100px 0;
    max-width: 1280px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", Sans-serif;
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--black);
    line-height: 1.1;
  }


  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  
  img,
  svg {
    /* width: 100%; */
    /* max-width: 100%; */
    vertical-align: middle;
  }

  .icon{
    margin-right: 20px;
  }

  
  svg {
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }


  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  p {
    color: #79787F;
    font-size: 16px;
    line-height: 1.8;

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }


  nav{
    a{
      color: var(--white);
      font-size: var(--fz-md);
      margin: 0 5px;
      padding: 5px var(--fz-xxs);
      font-weight: 600;

      &:hover{
        color: var(--white);
        background-color: var(--orange);
      }
    }
  }
    
  

  #logo {
    color: var(--green);
  }

`;

export default GlobalStyle;
