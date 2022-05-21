import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl, ThreeColumnContainer } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription as Desc } from "../misc/Typography";

import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

import { Works } from '../../helpers/Data'

// const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 `;


const SectionDescription = styled(Desc)`
    text-align: center;
    margin: 0 auto;
`

const Columns = styled(ThreeColumnContainer)`
    justify-content: start;
    max-width: 1024px;
`

const CardContainer = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
        width: calc(33% - 1rem);
    }
`

// const Card = tw(motion.a)`bg-gray-200 block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const Card = tw(motion.a)`bg-gray-200 `;

const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative `}
`;


const CardHoverOverlay = styled(motion.div)`
    background-color: #1E1D24D9;
    height: 100%;
    align-items: center;
    padding: 1rem 2rem;
`;


const Paragraph = styled.p`
    font-size:12px;
`


const Heading = styled.h3`
    font-size: 1rem;
    text-align: center;
    color: white;
    font-weight: 700;

`

const CardButton = styled(PrimaryButtonBase)`
    font-size: 0.7rem;
`;





export default () => {


    return (
        <Container>
            <ContentWithPaddingXl>
                <SectionHeading>
                    Obras
                </SectionHeading>
                <SectionDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i ncidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </SectionDescription>
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
                                        <Heading>
                                            LOREM IPSUM
                                        </Heading>
                                        <Paragraph>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i ncidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                                        </Paragraph>
                                        <CardButton>Lear More</CardButton>
                                    </CardHoverOverlay>
                                </CardImageContainer>
                            </Card>

                        </CardContainer>
                    ))}
                </Columns>
            </ContentWithPaddingXl>
        </Container>
    );
};

const getRandomCards = () => {
    // Shuffle array
    return Works.sort(() => Math.random() - 0.5);
};
