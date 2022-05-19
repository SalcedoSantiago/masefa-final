import styled from "styled-components";
import tw from "twin.macro";

export const Container = tw.div`relative`;
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;



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
    padding: 0 6rem;

    @media (min-width: 768px) {
        width: 50%;
        padding: 0 2rem;
    }
`;


export const ThreeColumnContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
margin: 0 auto;
max-width: 1280px;
padding-top: 4rem;
gap: 1.5rem;

@media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
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