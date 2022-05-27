import { css } from 'styled-components';

const variables = css`
  :root {
    /* 
    *   colors  
    */
    --black : #1E1D24;
    --blue : #00235a;
    --dark-blue: #112240;
    --orange : #FF6C00;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --slate: #8892b0;
    --lightest-slate: #ccd6f6;
    --dark-slate: #495670;
    /* 
    *   fonts
    */
    --font-poppins: 'Poppins', -apple-system,  sans-serif;
    --font-poppins: 'Montserrat', -apple-system,  sans-serif;

    /* 
    *   font sizes
    */
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

   
    /* 
    *   border radius
    */
    --border-radius: 3px;

    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --hamburger-width: 30px;


    /* 
    *    screen sizes
    */
    --desktopS: 768px;
    --desktopM: 1080px;
    --desktopL:  1280px;

    
  }
`;

export default variables;
