import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

export const Container = styled.section`
    position: relative;
`;

export const Header = styled.div`
    padding: 60px 0px 25px 0px;
`


export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;



export const GridColums = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > div {
            width: 100%;
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        > div {
            width: calc(50% - 1rem);
        }
    }
`



export const GridTwoColumns = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 0 auto;
    max-width: 1280px;
    align-items: center;
    padding: 2rem 0;
    flex-direction: column;
    /* flex-wrap: wrap; */
    @media (min-width: 768px) {
    flex-direction: row;
    }
`
export const Column = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
        padding: 0 2rem;
    }
`;


export const ThreeColumnContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
margin: 0 auto;
gap: 1rem;

> div {
                width: 100%;
        }

@media (min-width: 768px) {

        > div {
            width: calc(50% - 1rem);
        }
    }

    @media (min-width: 1024px) {

> div {
    width: calc(33% - 1rem);
}
}
`;

// const Column = styled.div`
//   width: 50%;
//   padding: 2.5rem 2.5rem 3rem 2.5rem;
//   box-shadow: 0px 10px 50px 0px rgb(167 167 167 / 50%);
//   border-style: solid;
//   border-bottom-width: 3px;
//   border-color: #00235a;

//   @media (min-width: 1024px) {
//       width: calc(33% - 1.5rem);
//     }
// `;