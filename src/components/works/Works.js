import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

import { Works } from '../../helpers/Data'


const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

export default () => {



    return (
        <Container>
            <ContentWithPaddingXl>
                <SectionHeading>
                    Obras
                </SectionHeading>
                <TabContent>
                    {Works.map((card, index) => (
                        <CardContainer key={index}>
                            <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                                <CardImageContainer imageSrc={card.imageSrc}>
                                    <CardHoverOverlay
                                        variants={{
                                            hover: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            rest: {
                                                opacity: 0,
                                                height: 0
                                            }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardButton>Buy Now</CardButton>
                                    </CardHoverOverlay>
                                </CardImageContainer>
                            </Card>
                        </CardContainer>
                    ))}
                </TabContent>
            </ContentWithPaddingXl>
        </Container>
    );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
    // Shuffle array
    return Works.sort(() => Math.random() - 0.5);
};
