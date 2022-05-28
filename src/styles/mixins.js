import { css } from 'styled-components';

const button = css`
  font-family: "Montserrat", Sans-serif;
  color: #fff;
  background-color: var(--orange);
  border: 2px solid var(--orange);
  font-size: var(--fz-md);
  line-height: 2em;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  padding: 5px 20px;
  letter-spacing: 0.65px;
  width: 80%;
  margin: 0 auto;
  display: block;


  &:hover{
    background-color: transparent;
    color: var(--orange);
    
  }

  &:after {
    display: none !important;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
    display: block;
  }
   
  @media (min-width: 1024px) {
    width: auto;
    margin-right: 0;
    margin-left: 0;
  }

`;


const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,

  flexStart: css`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,


  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: 0;
    }
  `,

  button,

  smallButton: css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,


};

export default mixins;
