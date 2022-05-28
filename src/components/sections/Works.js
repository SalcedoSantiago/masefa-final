/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons";
import { Works } from '../../helpers/Data'

/**
 * Styled elements
 */

const Columns = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    gap: 20px;

`
const StyledSection = styled.section`
    padding-top: 40px;
    padding: 0 20px;

    @media (min-width: 1024px) {
        padding: 0 ;
    }

    .header {
        text-align: center;
        margin-bottom: 40px;
    }

    .btn{
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    padding: 0 40px;

    @media (min-width: 768px) {
        width: calc(50% - 1rem);
        padding: 0 ;
    }

    @media (min-width: 1024px) {
        width: calc(33% - 1rem);
        padding: 0 ;
    }
`

const Card = styled(motion.a)`
background-color: #808080;
`;

const CardImageContainer = styled.div`
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

    p{
        font-size:14px;
    font-weight: 400;
    color: #fff;
    text-align: center; 
    }

    h2{
        font-size: 1rem;
        font-size: 1.5rem;
        text-align: center;
        color: #FFFFFF;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 0.5rem;
    }

`;


export default () => {
    return (
        <StyledSection>
            <div className="header">
                <SectionHeading>
                    Obras
                </SectionHeading >
                <p>
                    The smartest working shop in the steel business
                </p>
            </div>

            <Columns>
                {Works.map((card, index) => (
                    <CardContainer key={index}>
                        <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                            <CardImageContainer imageSrc={card.imageSrc}>
                                <CardHoverOverlay
                                    variants={{
                                        hover: {
                                            opacity: 1,
                                        },
                                        rest: {
                                            opacity: 0,
                                        }
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2>
                                        Lorem Ipsum
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i ncidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                                    </p>
                                </CardHoverOverlay>
                            </CardImageContainer>
                        </Card>
                    </CardContainer>
                ))}
            </Columns>
            <PrimaryButton className="btn">Show More</PrimaryButton>
        </StyledSection>
    );
};
