/**
 * External dependencies
 */
import React, { useState } from "react";

/**
 * Internal dependencies
 */
import { Container, } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { Works } from '../../helpers/Data'

/**
 * Styled elements
 */

import {
    ContentWithPadding,
    SectionDescription,
    Columns,
    CardContainer,
    Card,
    CardImageContainer,
    CardHoverOverlay,
    Paragraph,
    Heading,
    CardButton,
    ButtonShowMore,
} from './WorksElements';




export default () => {

    return (
        <Container>
            <ContentWithPadding>
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
                                            Lorem Ipsum
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
                <ButtonShowMore>Show more</ButtonShowMore>
            </ContentWithPadding>
        </Container>
    );
};
