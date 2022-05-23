import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, ThreeColumnContainer } from "../misc/Layouts.js";
import { SectionDescription as Desc } from "../misc/Typography";
import { PrimaryButton as PrimaryButtonBase, PrimaryButtonCenter } from "../misc/Buttons.js";


export const ContentWithPadding = styled(ContentWithPaddingXl)`
padding-left: 2rem;
padding-right: 2rem;
margin: 0 auto;
`

export const SectionDescription = styled(Desc)`
text-align: center;
margin: 0 auto;
`

export const Columns = styled(ThreeColumnContainer)`
justify-content: start;
max-width: 1024px;
`

export const CardContainer = styled.div`
width: 100%;
@media (min-width: 1024px) {
    width: calc(33% - 1rem);
}
`

export const Card = styled(motion.a)`
background-color: #808080;
`;

export const CardImageContainer = styled.div`
${props => css`background-image: url("${props.imageSrc}");`}
height: 18rem;
align-items: center;
flex-direction: column;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-size: cover;
`;


export const CardHoverOverlay = styled(motion.div)`
background-color: #1E1D24D9;
height: 18rem;  
align-items: center;
flex-direction: column;
/* padding: 1rem 2rem; */
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0px 50px 0px 50px;
`;


export const Paragraph = styled.p`
font-size:14px;
font-weight: 500;
color: #fff;
`


export const Heading = styled.h2`
font-size: 1rem;
font-size: 1.5rem;
text-align: center;
color: #FFFFFF;
font-weight: 700;
text-transform: capitalize;
margin-bottom: 0.5rem;
`

export const CardButton = styled(PrimaryButtonBase)`
font-size: 0.7rem;
margin-top: 1rem;
`;

export const ButtonShowMore = styled(PrimaryButtonCenter)`
margin-top:3rem;
`